#!/usr/bin/env python3
"""Read all DAG source code to find injectable parameters"""
import json
import urllib3
urllib3.disable_warnings()
import requests

BASE = "https://airflow.pasarpolis.io"
s = requests.Session()
s.verify = False
r = s.post(f"{BASE}/auth/token", json={"username":"airflow","password":"airflow"})
token = r.json()["access_token"]
s.headers["Authorization"] = f"Bearer {token}"

# Get all DAGs
r = s.get(f"{BASE}/api/v2/dags?limit=200")
dags = r.json().get('dags', [])
print(f"Total DAGs: {len(dags)}")

# Read source for each DAG
sources = {}
for dag in dags:
    dag_id = dag['dag_id']
    r = s.get(f"{BASE}/api/v2/dagSources/{dag_id}")
    if r.status_code == 200:
        data = r.json()
        content = data.get('content', '')
        sources[dag_id] = content
        # Check for interesting patterns
        interesting = False
        patterns = ['conf', 'Variable', 'params', 'template', 'jinja',
                    'sql', 'execute', 'run_sql', 'hook', 'connection',
                    'bash', 'python_callable', 'op_args', 'executor_config',
                    'trigger', 'serializ']
        found = [p for p in patterns if p.lower() in content.lower()]
        if found:
            print(f"\n{'='*60}")
            print(f"DAG: {dag_id} | Interesting patterns: {found}")
            print(f"{'='*60}")
            print(content[:3000])

# Summary
print(f"\n\nTotal DAGs with source: {len(sources)}")
print("DAG list:")
for dag_id, content in sources.items():
    lines = content.count('\n')
    print(f"  {dag_id}: {lines} lines, {len(content)} chars")
