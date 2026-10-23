#!/usr/bin/env python3 -I
"""
Athena SQL Query Executor via Airflow generic_download DAG
Uses the confirmed table names from DAG task extraction.
"""

import requests
import json
import time
import urllib3
import sys
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

AIRFLOW_URL = "https://airflow.pasarpolis.io"
USERNAME = "airflow"
PASSWORD = "airflow"

def get_token():
    r = requests.post(f"{AIRFLOW_URL}/auth/token",
                      json={"username": USERNAME, "password": PASSWORD},
                      verify=False)
    return r.json()["access_token"]

def trigger_query(token, sql, request_id):
    """Trigger generic_download DAG with SQL query"""
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

    r = requests.post(
        f"{AIRFLOW_URL}/api/v2/dags/generic_download/dagRuns",
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        },
        json={"conf": conf},
        verify=False
    )
    return r.json()

def check_run_status(token, dag_run_id):
    """Check DAG run status"""
    r = requests.get(
        f"{AIRFLOW_URL}/api/v2/dags/generic_download/dagRuns/{dag_run_id}",
        headers={"Authorization": f"Bearer {token}"},
        verify=False
    )
    return r.json().get("state", "unknown")

# HIGH-VALUE QUERIES - Ordered by priority
QUERIES = {
    # CREDENTIAL TABLES
    "cred_01_userservice_user": "SELECT * FROM b2b2c_bronze.pp_userservice_user LIMIT 100",
    "cred_02_userservice_auth": "SELECT * FROM b2b2c_bronze.pp_userservice_authenticate LIMIT 100",
    "cred_03_partners_user": "SELECT * FROM b2b2c_bronze.pp_partners_panel_partners_user LIMIT 100",
    "cred_04_merchant_user": "SELECT * FROM b2b2c_bronze.pp_merchant_panel_merchantpanel_user LIMIT 100",
    "cred_05_ops_user": "SELECT * FROM b2b2c_bronze.pp_operations_panel_ops_user LIMIT 100",

    # API KEYS / PARTNER CONFIGS
    "api_01_integrations_partner": "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_partner LIMIT 100",
    "api_02_integrations_provider": "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_provider LIMIT 100",
    "api_03_integrations_package": "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_package LIMIT 100",
    "api_04_partner_config": "SELECT * FROM b2b2c_bronze.pp_integrations_integrations_partnerpackage LIMIT 100",

    # FINANCIAL / PII
    "fin_01_bank_details": "SELECT * FROM b2b2c_bronze.pp_claims_core_bankaccountdetails LIMIT 100",
    "fin_02_payments": "SELECT * FROM b2b2c_bronze.pp_core_payments LIMIT 100",
    "fin_03_payouts": "SELECT * FROM b2b2c_bronze.pp_tez_payouts LIMIT 100",
    "fin_04_wallet_tx": "SELECT * FROM b2b2c_bronze.pp_wallet_core_transaction LIMIT 100",
    "fin_05_invoices": "SELECT * FROM b2b2c_bronze.pp_core_invoices LIMIT 100",

    # INSURANCE POLICIES (PII)
    "ins_01_latest": "SELECT * FROM b2b2c_bronze.pp_core_insurances_2026_10 LIMIT 100",
    "ins_02_claims": "SELECT * FROM b2b2c_bronze.pp_claims_core_claim LIMIT 100",

    # MERCHANT DETAILS
    "merch_01_merchant": "SELECT * FROM b2b2c_bronze.pp_merchant_panel_merchantpanel_merchant LIMIT 100",
    "merch_02_bank": "SELECT * FROM b2b2c_bronze.pp_merchant_panel_merchantpanel_bankdetail LIMIT 100",
    "merch_03_employee": "SELECT * FROM b2b2c_bronze.pp_merchant_panel_merchantpanel_employee LIMIT 100",

    # PARTNER DETAILS
    "partner_01_partner": "SELECT * FROM b2b2c_bronze.pp_partners_panel_partners_partner LIMIT 100",

    # AGENT TABLES (may need different schema)
    "agent_01_agent": "SELECT * FROM b2b2c_bronze.pp_agent_agent_agent LIMIT 100",
    "agent_02_tx": "SELECT * FROM b2b2c_bronze.pp_agent_agent_transaction LIMIT 100",
}

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 athena_queries.py <query_key|all|list>")
        print("\nAvailable queries:")
        for key, sql in QUERIES.items():
            print(f"  {key}: {sql[:80]}...")
        return

    query_key = sys.argv[1]

    if query_key == "list":
        for key, sql in QUERIES.items():
            print(f"{key}: {sql}")
        return

    token = get_token()

    if query_key == "all":
        queries_to_run = QUERIES.items()
    else:
        if query_key not in QUERIES:
            print(f"Unknown query key: {query_key}")
            return
        queries_to_run = [(query_key, QUERIES[query_key])]

    for key, sql in queries_to_run:
        request_id = f"Q_{key}_{int(time.time())}"
        print(f"\n[*] Running: {key}")
        print(f"    SQL: {sql}")
        print(f"    Request ID: {request_id}")

        result = trigger_query(token, sql, request_id)
        dag_run_id = result.get("dag_run_id", "")
        print(f"    DAG Run ID: {dag_run_id}")

        # Wait for completion
        for i in range(30):
            time.sleep(5)
            status = check_run_status(token, dag_run_id)
            print(f"    Status: {status}")
            if status in ("success", "failed"):
                break

        if query_key != "all":
            break  # Only run first query in single mode

if __name__ == "__main__":
    main()
