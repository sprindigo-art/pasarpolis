#!/usr/bin/env python3
"""PasarPolis Full Database Harvest via Airflow Athena SQL"""

import urllib.request, ssl, json, time, sys, os, urllib.parse

BASE = "https://airflow.pasarpolis.io"
S3_BASE = "https://s3.ap-southeast-3.amazonaws.com/pp-airflow-dump-production-jkt/generic-download/Core"
DUMP_DIR = "/home/kali/Desktop/pasarpolis_harvest/db_dump"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_token():
    req = urllib.request.Request(
        f'{BASE}/auth/token',
        data=json.dumps({"username": "airflow", "password": "airflow"}).encode(),
        method='POST'
    )
    req.add_header('Content-Type', 'application/json')
    resp = urllib.request.urlopen(req, context=ctx, timeout=15)
    return json.loads(resp.read().decode())['access_token']

def api_request(path, method='GET', data=None, token=None):
    url = f'{BASE}{path}'
    req = urllib.request.Request(url, method=method)
    req.add_header('Content-Type', 'application/json')
    if token:
        req.add_header('Authorization', f'Bearer {token}')
    if data:
        req.data = json.dumps(data).encode()
    try:
        resp = urllib.request.urlopen(req, context=ctx, timeout=30)
        body = resp.read().decode()
        if body.strip():
            return resp.status, json.loads(body)
        return resp.status, {}
    except urllib.error.HTTPError as e:
        body = e.read().decode() if e.fp else ''
        try:
            return e.code, json.loads(body) if body.strip() else body
        except:
            return e.code, body

def clean_manual_runs(token):
    """Delete ALL manual__ DAG runs"""
    print("[*] Cleaning manual DAG runs...")
    offset = 0
    manual_ids = []
    while True:
        status, data = api_request(
            f'/api/v2/dags/generic_download/dagRuns?limit=100&offset={offset}',
            token=token
        )
        runs = data.get('dag_runs', [])
        for r in runs:
            if r['dag_run_id'].startswith('manual__'):
                manual_ids.append(r['dag_run_id'])
        if len(runs) < 100:
            break
        offset += 100

    print(f"[*] Found {len(manual_ids)} manual runs to delete")
    for rid in manual_ids:
        encoded_rid = urllib.parse.quote(rid, safe='')
        status, _ = api_request(
            f'/api/v2/dags/generic_download/dagRuns/{encoded_rid}',
            method='DELETE',
            token=token
        )
        if status in (200, 204):
            print(f"  [+] Deleted: {rid}")
        else:
            print(f"  [-] Failed to delete {rid}: {status}")
    print("[+] Cleanup done")

def trigger_query(token, sql, request_id, logical_date):
    """Trigger a DAG run with SQL query"""
    conf = {
        "sql": sql,
        "event": "etl-report",
        "entity": "",
        "service": "Core",
        "to_notify": "True",
        "recipients": "[('test@test.com','Email')]",
        "request_id": request_id,
        "product_key": "",
        "partner_code": "",
        "output_format": "CSV"
    }
    data = {
        "logical_date": logical_date,
        "conf": conf
    }
    status, resp = api_request(
        '/api/v2/dags/generic_download/dagRuns',
        method='POST',
        data=data,
        token=token
    )
    return status, resp

def wait_for_run(token, dag_run_id, timeout=120):
    """Wait for DAG run to complete"""
    encoded_id = urllib.parse.quote(dag_run_id, safe='')
    start = time.time()
    while time.time() - start < timeout:
        status, data = api_request(
            f'/api/v2/dags/generic_download/dagRuns/{encoded_id}',
            token=token
        )
        if isinstance(data, dict):
            state = data.get('state', 'unknown')
            if state == 'success':
                return True, 'success'
            elif state == 'failed':
                return False, 'failed'
            elif state in ('queued', 'running'):
                time.sleep(5)
                continue
        time.sleep(5)
    return False, 'timeout'

def download_result(request_id, filename):
    """Download CSV result from S3"""
    url = f"{S3_BASE}/{request_id}.csv"
    filepath = os.path.join(DUMP_DIR, filename)
    try:
        req = urllib.request.Request(url)
        resp = urllib.request.urlopen(req, context=ctx, timeout=30)
        data = resp.read()
        with open(filepath, 'wb') as f:
            f.write(data)
        size_kb = len(data) / 1024
        print(f"  [+] Downloaded: {filename} ({size_kb:.1f} KB)")
        return True, filepath
    except Exception as e:
        print(f"  [-] Download failed: {e}")
        return False, None

# Tables to harvest - ordered by priority
TABLES = [
    # HIGHEST PRIORITY - Credentials/Secrets
    ("pp_integrations_integrations_provider", "8880101", "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_provider"),
    ("pp_integrations_integrations_package", "8880102", "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_package"),
    ("pp_integrations_integrations_partnerpackage", "8880103", "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_partnerpackage"),
    ("pp_integrations_integrations_providerpackage", "8880104", "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_providerpackage"),
    ("pp_agent_agent_partnerconfig", "8880105", "SELECT * FROM b2b2c_bronze.pp_agent_agent_partnerconfig"),
    ("pp_merchant_panel_merchantpanel_bankdetail", "8880106", "SELECT * FROM b2b2c_bronze.pp_merchant_panel_merchantpanel_bankdetail"),

    # HIGH PRIORITY - User Data
    ("pp_userservice_user", "8880107", "SELECT * FROM b2b2c_bronze.pp_userservice_user"),
    ("pp_partners_panel_partners_user", "8880108", "SELECT * FROM b2b2c_bronze.pp_partners_panel_partners_user"),
    ("pp_merchant_panel_merchantpanel_user", "8880109", "SELECT * FROM b2b2c_bronze.pp_merchant_panel_merchantpanel_user"),
    ("pp_operations_panel_ops_user", "8880110", "SELECT * FROM b2b2c_bronze.pp_operations_panel_ops_user"),

    # FINANCIAL DATA
    ("pp_wallet_core_transaction", "8880111", "SELECT * FROM b2b2c_bronze.pp_wallet_core_transaction LIMIT 10000"),
    ("pp_tez_payouts", "8880112", "SELECT * FROM b2b2c_bronze.pp_tez_payouts"),

    # INSURANCE DATA
    ("pp_core_insurances", "8880113", "SELECT * FROM b2b2c_bronze.pp_core_insurances LIMIT 10000"),
    ("pp_core_endorsement_requests", "8880114", "SELECT * FROM b2b2c_bronze.pp_core_endorsement_requests LIMIT 10000"),
    ("pp_claims_core_claim", "8880115", "SELECT * FROM b2b2c_bronze.pp_claims_core_claim LIMIT 10000"),
]

def main():
    os.makedirs(DUMP_DIR, exist_ok=True)

    # Determine which tables to harvest (skip already done)
    start_idx = 0
    if len(sys.argv) > 1:
        start_idx = int(sys.argv[1])

    print("=" * 60)
    print("PASARPOLIS FULL DATABASE HARVEST")
    print("=" * 60)

    # Get token
    print("[*] Getting auth token...")
    token = get_token()
    print("[+] Token obtained")

    # Clean manual runs
    clean_manual_runs(token)

    # Process each table
    base_hour = 20  # Start from hour 20 going backwards
    results_summary = []

    for idx, (table_name, request_id, sql) in enumerate(TABLES):
        if idx < start_idx:
            continue

        filename = f"{table_name}.csv"
        filepath = os.path.join(DUMP_DIR, filename)

        # Skip if already downloaded
        if os.path.exists(filepath) and os.path.getsize(filepath) > 100:
            print(f"\n[SKIP] {table_name} - already downloaded")
            results_summary.append((table_name, "SKIPPED", filepath))
            continue

        print(f"\n{'='*60}")
        print(f"[{idx+1}/{len(TABLES)}] Harvesting: {table_name}")
        print(f"  SQL: {sql[:80]}...")
        print(f"  Request ID: {request_id}")

        # Calculate unique logical_date (go backwards in time)
        hour = base_hour - idx
        if hour < 0:
            hour = 23 + hour  # Wrap to previous day
        logical_date = f"2026-10-17T{hour:02d}:00:00Z"
        print(f"  Logical Date: {logical_date}")

        # Refresh token periodically
        if idx > 0 and idx % 5 == 0:
            print("  [*] Refreshing token...")
            token = get_token()

        # Clean manual runs before each trigger
        clean_manual_runs(token)
        time.sleep(2)

        # Trigger the query
        print("  [*] Triggering DAG run...")
        status, resp = trigger_query(token, sql, request_id, logical_date)

        if status not in (200, 201):
            print(f"  [-] Trigger FAILED: {status}")
            print(f"  [-] Response: {str(resp)[:200]}")
            results_summary.append((table_name, "TRIGGER_FAILED", None))

            # If conflict (409), try different logical_date
            if status == 409:
                print("  [*] Conflict - trying alternate logical_date...")
                alt_date = f"2026-10-16T{hour:02d}:00:00Z"
                clean_manual_runs(token)
                time.sleep(2)
                status, resp = trigger_query(token, sql, request_id, alt_date)
                if status not in (200, 201):
                    print(f"  [-] Alt trigger also FAILED: {status}")
                    continue
            else:
                continue

        dag_run_id = resp.get('dag_run_id', '') if isinstance(resp, dict) else ''
        print(f"  [+] Triggered: {dag_run_id}")

        # Wait for completion
        print("  [*] Waiting for execution (up to 90s)...")
        success, state = wait_for_run(token, dag_run_id, timeout=90)

        if success:
            print(f"  [+] Run completed: {state}")
            # Download result
            time.sleep(3)
            dl_ok, dl_path = download_result(request_id, filename)
            results_summary.append((table_name, "SUCCESS" if dl_ok else "DL_FAILED", dl_path))
        else:
            print(f"  [-] Run failed/timeout: {state}")
            # Try downloading anyway (might have been uploaded before failure)
            time.sleep(3)
            dl_ok, dl_path = download_result(request_id, filename)
            results_summary.append((table_name, f"RUN_{state}_DL_{'OK' if dl_ok else 'FAIL'}", dl_path))

    # Print summary
    print("\n" + "=" * 60)
    print("HARVEST SUMMARY")
    print("=" * 60)
    for name, status, path in results_summary:
        size = ""
        if path and os.path.exists(path):
            size = f" ({os.path.getsize(path)/1024:.1f} KB)"
        print(f"  {status:20s} | {name}{size}")

if __name__ == '__main__':
    main()
