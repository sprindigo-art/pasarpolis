#!/usr/bin/env python3
"""Retry failed table harvests with longer timeout"""

import urllib.request, ssl, json, time, os, urllib.parse

BASE = "https://airflow.pasarpolis.io"
S3_BASE = "https://s3.ap-southeast-3.amazonaws.com/pp-airflow-dump-production-jkt/generic-download/Core"
DUMP_DIR = "/home/kali/Desktop/pasarpolis_harvest/db_dump"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_token():
    req = urllib.request.Request(f'{BASE}/auth/token', data=json.dumps({"username":"airflow","password":"airflow"}).encode(), method='POST')
    req.add_header('Content-Type', 'application/json')
    return json.loads(urllib.request.urlopen(req, context=ctx, timeout=15).read().decode())['access_token']

def api_request(path, method='GET', data=None, token=None):
    url = f'{BASE}{path}'
    req = urllib.request.Request(url, method=method)
    req.add_header('Content-Type', 'application/json')
    if token: req.add_header('Authorization', f'Bearer {token}')
    if data: req.data = json.dumps(data).encode()
    try:
        resp = urllib.request.urlopen(req, context=ctx, timeout=30)
        body = resp.read().decode()
        return resp.status, json.loads(body) if body.strip() else {}
    except urllib.error.HTTPError as e:
        body = e.read().decode() if e.fp else ''
        try: return e.code, json.loads(body) if body.strip() else body
        except: return e.code, body

def clean_all_manual(token):
    offset = 0
    manual_ids = []
    while True:
        status, data = api_request(f'/api/v2/dags/generic_download/dagRuns?limit=100&offset={offset}', token=token)
        runs = data.get('dag_runs', [])
        for r in runs:
            if r['dag_run_id'].startswith('manual__'):
                manual_ids.append(r['dag_run_id'])
        if len(runs) < 100: break
        offset += 100
    for rid in manual_ids:
        encoded = urllib.parse.quote(rid, safe='')
        api_request(f'/api/v2/dags/generic_download/dagRuns/{encoded}', method='DELETE', token=token)
    print(f"[+] Cleaned {len(manual_ids)} manual runs")
    time.sleep(3)

def harvest_table(token, table, request_id, sql, logical_date):
    filename = f"{table}.csv"
    filepath = os.path.join(DUMP_DIR, filename)

    if os.path.exists(filepath) and os.path.getsize(filepath) > 100:
        print(f"[SKIP] {table} already downloaded")
        return True

    print(f"\n[*] Harvesting: {table}")
    clean_all_manual(token)

    conf = {
        "sql": sql, "event": "etl-report", "entity": "", "service": "Core",
        "to_notify": "True", "recipients": "[('test@test.com','Email')]",
        "request_id": request_id, "product_key": "", "partner_code": "", "output_format": "CSV"
    }
    data = {"logical_date": logical_date, "conf": conf}

    status, resp = api_request('/api/v2/dags/generic_download/dagRuns', method='POST', data=data, token=token)
    if status not in (200, 201):
        print(f"  [-] Trigger failed: {status} - {str(resp)[:200]}")
        return False

    dag_run_id = resp.get('dag_run_id', '')
    print(f"  [+] Triggered: {dag_run_id}")

    # Wait longer - up to 180s
    encoded_id = urllib.parse.quote(dag_run_id, safe='')
    start = time.time()
    while time.time() - start < 180:
        s, d = api_request(f'/api/v2/dags/generic_download/dagRuns/{encoded_id}', token=token)
        if isinstance(d, dict):
            state = d.get('state', 'unknown')
            if state == 'success':
                print(f"  [+] Success after {time.time()-start:.0f}s")
                break
            elif state == 'failed':
                print(f"  [-] Failed after {time.time()-start:.0f}s")
                return False
        time.sleep(5)

    # Download
    time.sleep(3)
    url = f"{S3_BASE}/{request_id}.csv"
    try:
        req = urllib.request.Request(url)
        resp = urllib.request.urlopen(req, context=ctx, timeout=60)
        data = resp.read()
        with open(filepath, 'wb') as f: f.write(data)
        print(f"  [+] Downloaded: {filename} ({len(data)/1024:.1f} KB)")
        return True
    except Exception as e:
        print(f"  [-] Download failed: {e}")
        return False

# RETRY FAILED TABLES
FAILED = [
    ("pp_integrations_integrations_providerpackage", "8880204",
     "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_providerpackage",
     "2026-10-16T22:00:00Z"),
    ("pp_agent_agent_partnerconfig", "8880205",
     "SELECT * FROM b2b2c_bronze.pp_agent_agent_partnerconfig",
     "2026-10-16T21:00:00Z"),
    ("pp_userservice_user", "8880207",
     "SELECT * FROM b2b2c_bronze.pp_userservice_user",
     "2026-10-16T20:00:00Z"),
]

token = get_token()
print("[+] Token obtained")

for table, req_id, sql, ldate in FAILED:
    harvest_table(token, table, req_id, sql, ldate)
    token = get_token()  # Refresh token between tables
