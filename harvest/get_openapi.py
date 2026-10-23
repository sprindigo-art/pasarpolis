#!/usr/bin/env python3
"""Download and analyze Airflow OpenAPI spec"""
import json
import sys
import urllib3
urllib3.disable_warnings()
import requests

BASE = "https://airflow.pasarpolis.io"
s = requests.Session()
s.verify = False

r = s.post(f"{BASE}/auth/token", json={"username":"airflow","password":"airflow"})
token = r.json()["access_token"]
s.headers["Authorization"] = f"Bearer {token}"

# Get OpenAPI spec
r = s.get(f"{BASE}/openapi.json")
spec = r.json()

# Extract all endpoints with methods
paths = spec.get('paths', {})
print(f"Total endpoints: {len(paths)}")
print()

for path in sorted(paths.keys()):
    methods_info = paths[path]
    for method, details in methods_info.items():
        if method in ['get', 'post', 'put', 'patch', 'delete']:
            summary = details.get('summary', details.get('operationId', ''))
            tags = details.get('tags', [])
            # Check request body schema
            req_body = details.get('requestBody', {})
            body_schema = ""
            if req_body:
                content = req_body.get('content', {})
                for ct, schema_info in content.items():
                    ref = schema_info.get('schema', {}).get('$ref', '')
                    body_schema = ref.split('/')[-1] if ref else str(schema_info.get('schema', {}).get('type', ''))

            print(f"{method.upper():7s} {path:65s} | {','.join(tags):30s} | body={body_schema:30s} | {summary}")

# Save full spec
with open('/home/kali/Desktop/pasarpolis_harvest/airflow_openapi.json', 'w') as f:
    json.dump(spec, f, indent=2)
print(f"\nFull spec saved to airflow_openapi.json")
