-- =============================================================
--  V1__initial_schema.sql
--  Full initial schema for the ePay platform.
--  Generated from JPA entity introspection.
--  All sequences use allocationSize = 1 (INCREMENT BY 1) unless
--  explicitly noted with allocationSize = 50.
-- =============================================================

-- ─────────────────────────────────────────────────────────────
--  EXTENSIONS
-- ─────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- for gen_random_uuid() used by UUID PKs

-- =============================================================
--  AUTH MODULE
-- =============================================================

-- ── Sequences ─────────────────────────────────────────────────
CREATE SEQUENCE IF NOT EXISTS user_sequence           START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS user_record_sequence    START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS user_tracer_seq         START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS user_attempt_seq        START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS user_account_settings_seq START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS user_account_cases_seq  START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS kyc_verification_seq    START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS kyc_document_seq        START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS next_of_kin_seq         START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS password_reset_token_seq START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS verification_token_seq  START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS two_factor_authentication_seq START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS authorize_user_verification_seq START 1 INCREMENT 1;

-- ── users ──────────────────────────────────────────────────────
CREATE TABLE users (
    id                      BIGINT          NOT NULL DEFAULT nextval('user_sequence'),
    user_uuid               UUID            NOT NULL,
    email                   VARCHAR(255)    NOT NULL,
    password                VARCHAR(255)    NOT NULL,
    username                VARCHAR(255)    NOT NULL,
    role                    VARCHAR(30)     NOT NULL,
    account_type            VARCHAR(30)     NOT NULL,
    kyc_tier                VARCHAR(30)     NOT NULL,
    kyc_status              VARCHAR(30)     NOT NULL,
    enabled                 BOOLEAN         NOT NULL DEFAULT FALSE,
    email_verified          BOOLEAN         NOT NULL DEFAULT FALSE,
    phone_verified          BOOLEAN         NOT NULL DEFAULT FALSE,
    two_factor_enabled      BOOLEAN         NOT NULL DEFAULT FALSE,
    account_locked          BOOLEAN         NOT NULL DEFAULT FALSE,
    account_locked_at       TIMESTAMP,
    account_locked_reason   VARCHAR(255),
    failed_login_attempts   INT             NOT NULL DEFAULT 0,
    last_login_at           TIMESTAMP,
    created_at              TIMESTAMP       NOT NULL DEFAULT now(),
    updated_at              TIMESTAMP       NOT NULL DEFAULT now(),
    version                 BIGINT,

    CONSTRAINT pk_users PRIMARY KEY (id),
    CONSTRAINT uq_users_uuid     UNIQUE (user_uuid),
    CONSTRAINT uq_users_email    UNIQUE (email),
    CONSTRAINT uq_users_username UNIQUE (username)
);

CREATE INDEX idx_user_email      ON users (email);
CREATE INDEX idx_user_username   ON users (username);
CREATE INDEX idx_user_kyc_status ON users (kyc_status);

-- ── user_records ───────────────────────────────────────────────
CREATE TABLE user_records (
    id                  BIGINT       NOT NULL DEFAULT nextval('user_record_sequence'),
    user_id             BIGINT       NOT NULL,
    first_name          VARCHAR(255) NOT NULL,
    last_name           VARCHAR(255) NOT NULL,
    phone_number        VARCHAR(255),
    gender              VARCHAR(255),
    country_code        VARCHAR(3),
    country             VARCHAR(100),
    city                VARCHAR(100),
    state               VARCHAR(100),
    date_of_birth       DATE,
    address             VARCHAR(500),
    referral_code       VARCHAR(36),
    referred_by_code    VARCHAR(36),
    total_referrals     INT          NOT NULL DEFAULT 0,
    profile_photo_url   VARCHAR(1000),
    profile_complete    BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at          TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at          TIMESTAMP    NOT NULL DEFAULT now(),
    version             BIGINT,

    CONSTRAINT pk_user_records       PRIMARY KEY (id),
    CONSTRAINT uq_user_records_user  UNIQUE (user_id),
    CONSTRAINT uq_user_records_phone UNIQUE (phone_number),
    CONSTRAINT uq_user_records_referral UNIQUE (referral_code),
    CONSTRAINT fk_user_records_user  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_user_record_user_id      ON user_records (user_id);
CREATE INDEX idx_user_record_referral_code ON user_records (referral_code);

-- ── user_tracer ─────────────────────────────────────────────────
CREATE TABLE user_tracer (
    id                  BIGINT       NOT NULL DEFAULT nextval('user_tracer_seq'),
    user_id             BIGINT,
    attempt_type        VARCHAR(30)  NOT NULL,
    ip_address          VARCHAR(255),
    device_fingerprint  VARCHAR(255),
    user_agent          VARCHAR(500),
    location            VARCHAR(255),
    country_code        VARCHAR(255),
    success             BOOLEAN      NOT NULL DEFAULT FALSE,
    session_id          VARCHAR(255),
    failure_reason      VARCHAR(255),
    created_at          TIMESTAMP    NOT NULL DEFAULT now(),
    expires_at          TIMESTAMP,
    active              BOOLEAN      NOT NULL DEFAULT FALSE,

    CONSTRAINT pk_user_tracer PRIMARY KEY (id),
    CONSTRAINT fk_user_tracer_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_tracer_user_id    ON user_tracer (user_id);
CREATE INDEX idx_tracer_ip         ON user_tracer (ip_address);
CREATE INDEX idx_tracer_created_at ON user_tracer (created_at);
CREATE INDEX idx_tracer_type       ON user_tracer (attempt_type);

-- ── user_attempt ───────────────────────────────────────────────
CREATE TABLE user_attempt (
    id           BIGINT       NOT NULL DEFAULT nextval('user_attempt_seq'),
    user_id      BIGINT,
    attempt_type VARCHAR(30),
    timestamp    TIMESTAMP,
    counter      INT,
    success      BOOLEAN,
    created_on   TIMESTAMP    DEFAULT now(),
    updated_on   TIMESTAMP    DEFAULT now(),

    CONSTRAINT pk_user_attempt PRIMARY KEY (id)
);

-- ── user_account_settings ──────────────────────────────────────
CREATE TABLE user_account_settings (
    id                        BIGINT       NOT NULL DEFAULT nextval('user_account_settings_seq'),
    user_id                   BIGINT,
    is_biometric              BOOLEAN      NOT NULL DEFAULT FALSE,
    session_timeout           VARCHAR(255),
    is_email_alert            BOOLEAN      NOT NULL DEFAULT FALSE,
    is_transaction_alert      BOOLEAN      NOT NULL DEFAULT FALSE,
    is_login_alert            BOOLEAN      NOT NULL DEFAULT FALSE,
    is_receive_marketing_news BOOLEAN      NOT NULL DEFAULT FALSE,
    is_receive_sms_message    BOOLEAN      NOT NULL DEFAULT FALSE,
    preferred_language        VARCHAR(255),
    time_zone                 VARCHAR(255),

    CONSTRAINT pk_user_account_settings PRIMARY KEY (id),
    CONSTRAINT fk_uas_user FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ── user_account_cases_report ──────────────────────────────────
CREATE TABLE user_account_cases_report (
    id         BIGINT       NOT NULL DEFAULT nextval('user_account_cases_seq'),
    username   VARCHAR(255),
    user_id    BIGINT,
    email      VARCHAR(255),
    reasons    VARCHAR(255),
    action     VARCHAR(50),
    created_on TIMESTAMP,

    CONSTRAINT pk_uac PRIMARY KEY (id)
);

-- ── kyc_verifications ─────────────────────────────────────────
CREATE TABLE kyc_verifications (
    id                   BIGINT        NOT NULL DEFAULT nextval('kyc_verification_seq'),
    user_id              BIGINT        NOT NULL,
    tier                 VARCHAR(30)   NOT NULL,
    status               VARCHAR(30)   NOT NULL,
    submitted_by_user_id BIGINT,
    submitted_at         TIMESTAMP,
    reviewed_by_user_id  BIGINT,
    reviewed_at          TIMESTAMP,
    rejection_reason     VARCHAR(1000),
    internal_note        VARCHAR(2000),
    expires_at           TIMESTAMP,
    attempt_count        INT,
    created_at           TIMESTAMP,
    updated_at           TIMESTAMP,
    version              BIGINT,

    CONSTRAINT pk_kyc_verifications PRIMARY KEY (id),
    CONSTRAINT fk_kyc_ver_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_kyc_ver_user_id ON kyc_verifications (user_id);
CREATE INDEX idx_kyc_ver_status  ON kyc_verifications (status);
CREATE INDEX idx_kyc_ver_tier    ON kyc_verifications (tier);

-- ── kyc_documents ─────────────────────────────────────────────
CREATE TABLE kyc_documents (
    id                   BIGINT        NOT NULL DEFAULT nextval('kyc_document_seq'),
    user_id              BIGINT        NOT NULL,
    document_type        VARCHAR(50)   NOT NULL,
    status               VARCHAR(30)   NOT NULL,
    storage_reference    VARCHAR(255)  NOT NULL,
    file_hash            VARCHAR(255),
    document_number      VARCHAR(255),
    expiry_date          DATE,
    issuing_country      VARCHAR(255),
    reviewed_by_user_id  BIGINT,
    reviewed_at          TIMESTAMP,
    rejection_reason     VARCHAR(1000),
    uploaded_at          TIMESTAMP,
    updated_at           TIMESTAMP,
    version              BIGINT,

    CONSTRAINT pk_kyc_documents PRIMARY KEY (id),
    CONSTRAINT fk_kyc_doc_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_kyc_doc_user_id      ON kyc_documents (user_id);
CREATE INDEX idx_kyc_doc_type_status  ON kyc_documents (document_type, status);

-- ── next_of_kin ───────────────────────────────────────────────
CREATE TABLE next_of_kin (
    id           BIGINT       NOT NULL DEFAULT nextval('next_of_kin_seq'),
    user_id      BIGINT       NOT NULL,
    first_name   VARCHAR(255) NOT NULL,
    last_name    VARCHAR(255) NOT NULL,
    relationship VARCHAR(255) NOT NULL,
    phone        VARCHAR(255) NOT NULL,
    email        VARCHAR(255),
    address      VARCHAR(255),
    created_at   TIMESTAMP,
    updated_at   TIMESTAMP,

    CONSTRAINT pk_next_of_kin      PRIMARY KEY (id),
    CONSTRAINT uq_nok_user_id      UNIQUE (user_id),
    CONSTRAINT fk_nok_user         FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_nok_user_id ON next_of_kin (user_id);

-- ── password_reset_tokens ─────────────────────────────────────
CREATE TABLE password_reset_tokens (
    id                  BIGINT       NOT NULL DEFAULT nextval('password_reset_token_seq'),
    user_id             BIGINT       NOT NULL,
    token_hash          VARCHAR(255) NOT NULL,
    expires_at          TIMESTAMP    NOT NULL,
    used_at             TIMESTAMP,
    is_used             BOOLEAN      NOT NULL DEFAULT FALSE,
    requested_from_ip   VARCHAR(255),
    created_at          TIMESTAMP,

    CONSTRAINT pk_prt       PRIMARY KEY (id),
    CONSTRAINT uq_prt_token UNIQUE (token_hash),
    CONSTRAINT fk_prt_user  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_prt_user_id    ON password_reset_tokens (user_id);
CREATE INDEX idx_prt_token_hash ON password_reset_tokens (token_hash);
CREATE INDEX idx_prt_expires_at ON password_reset_tokens (expires_at);

-- ── verification_token ────────────────────────────────────────
CREATE TABLE verification_token (
    id              BIGINT       NOT NULL DEFAULT nextval('verification_token_seq'),
    user_id         BIGINT,
    token           VARCHAR(255),
    expiration_time TIMESTAMP,

    CONSTRAINT pk_verification_token PRIMARY KEY (id)
);

-- ── two_factor_authentication ─────────────────────────────────
CREATE TABLE two_factor_authentication (
    id              BIGINT       NOT NULL DEFAULT nextval('two_factor_authentication_seq'),
    otp             VARCHAR(255),
    user_id         BIGINT,
    token           VARCHAR(255),
    expiration_time TIMESTAMP,

    CONSTRAINT pk_tfa PRIMARY KEY (id)
);

-- ── authorize_user_verification ───────────────────────────────
CREATE TABLE authorize_user_verification (
    id         BIGINT    NOT NULL DEFAULT nextval('authorize_user_verification_seq'),
    user_id    BIGINT,
    created_on TIMESTAMP DEFAULT now(),
    updated_on TIMESTAMP DEFAULT now(),

    CONSTRAINT pk_auv PRIMARY KEY (id)
);

-- =============================================================
--  WALLET MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS supported_currency_seq    START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS wallet_sequence           START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS currency_balance_sequence START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS wallet_settings_seq       START 1 INCREMENT 1;

-- ── supported_currencies ──────────────────────────────────────
CREATE TABLE supported_currencies (
    id               BIGINT          NOT NULL DEFAULT nextval('supported_currency_seq'),
    code             VARCHAR(10)     NOT NULL,
    name             VARCHAR(100)    NOT NULL,
    symbol           VARCHAR(10)     NOT NULL,
    exchange_rate    NUMERIC(20, 8)  NOT NULL,
    decimal_places   INT             NOT NULL DEFAULT 2,
    min_deposit      NUMERIC(20, 8),
    min_withdrawal   NUMERIC(20, 8),
    active           BOOLEAN         NOT NULL DEFAULT TRUE,
    default_eligible BOOLEAN         NOT NULL DEFAULT FALSE,
    country_code     VARCHAR(3),
    created_at       TIMESTAMP,
    updated_at       TIMESTAMP,
    last_updated_by  BIGINT,
    version          BIGINT,

    CONSTRAINT pk_supported_currencies PRIMARY KEY (id),
    CONSTRAINT uq_currency_code        UNIQUE (code)
);

CREATE UNIQUE INDEX idx_currency_code   ON supported_currencies (code);
CREATE        INDEX idx_currency_active ON supported_currencies (active);

-- ── wallets ───────────────────────────────────────────────────
CREATE TABLE wallets (
    id         BIGINT    NOT NULL DEFAULT nextval('wallet_sequence'),
    user_id    BIGINT    NOT NULL,
    active     BOOLEAN   NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now(),
    version    BIGINT,

    CONSTRAINT pk_wallets      PRIMARY KEY (id),
    CONSTRAINT uq_wallet_user  UNIQUE (user_id)
);

CREATE UNIQUE INDEX idx_wallet_user_id ON wallets (user_id);

-- ── wallet_balances ───────────────────────────────────────────
CREATE TABLE wallet_balances (
    id              BIGINT         NOT NULL DEFAULT nextval('currency_balance_sequence'),
    wallet_id       BIGINT         NOT NULL,
    currency_code   VARCHAR(10)    NOT NULL,
    currency_symbol VARCHAR(10)    NOT NULL,
    balance         NUMERIC(20, 8) NOT NULL DEFAULT 0,
    is_default      BOOLEAN        NOT NULL DEFAULT FALSE,

    CONSTRAINT pk_wallet_balances        PRIMARY KEY (id),
    CONSTRAINT uq_wallet_currency        UNIQUE (wallet_id, currency_code),
    CONSTRAINT fk_wb_wallet              FOREIGN KEY (wallet_id) REFERENCES wallets(id)
);

-- ── wallet_settings ───────────────────────────────────────────
CREATE TABLE wallet_settings (
    id        BIGINT       NOT NULL DEFAULT nextval('wallet_settings_seq'),
    wallet_id BIGINT       NOT NULL,
    password  VARCHAR(255),
    is_secure BOOLEAN      NOT NULL DEFAULT FALSE,

    CONSTRAINT pk_wallet_settings PRIMARY KEY (id),
    CONSTRAINT fk_ws_wallet       FOREIGN KEY (wallet_id) REFERENCES wallets(id)
);

-- =============================================================
--  BENEFICIARY MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS beneficiary_seq START 1 INCREMENT 1;

CREATE TABLE beneficiaries (
    id                BIGINT       NOT NULL DEFAULT nextval('beneficiary_seq'),
    user_id           BIGINT       NOT NULL,
    beneficiary_type  VARCHAR(10)  NOT NULL,
    beneficiary_name  VARCHAR(150) NOT NULL,
    currency          VARCHAR(10)  NOT NULL DEFAULT 'NGN',
    account_number    VARCHAR(20),
    account_name      VARCHAR(150),
    bank_code         VARCHAR(20),
    bank_name         VARCHAR(150),
    recipient_username VARCHAR(100),
    is_active         BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at        TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at        TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_beneficiaries PRIMARY KEY (id)
);

CREATE INDEX idx_beneficiary_user_id ON beneficiaries (user_id);
CREATE INDEX idx_beneficiary_type    ON beneficiaries (user_id, beneficiary_type);
CREATE INDEX idx_beneficiary_active  ON beneficiaries (user_id, is_active);

-- =============================================================
--  BANK MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS user_bank_list_seq START 1 INCREMENT 1;

CREATE TABLE user_bank_lists (
    id                  BIGINT       NOT NULL DEFAULT nextval('user_bank_list_seq'),
    bank_code           VARCHAR(255),
    bank_name           VARCHAR(255),
    account_holder_name VARCHAR(255),
    account_number      VARCHAR(255) NOT NULL,
    user_id             BIGINT       NOT NULL,
    created_on          TIMESTAMP,
    updated_on          TIMESTAMP,

    CONSTRAINT pk_user_bank_lists    PRIMARY KEY (id),
    CONSTRAINT uk_user_bank_lists_account_number UNIQUE (account_number)
);

-- =============================================================
--  BLACKLIST MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS blacklist_entry_seq START 1 INCREMENT 1;

CREATE TABLE blacklist_entries (
    id         BIGINT       NOT NULL DEFAULT nextval('blacklist_entry_seq'),
    type       VARCHAR(30)  NOT NULL,
    value      VARCHAR(255) NOT NULL,
    user_id    BIGINT,
    wallet_id  BIGINT,
    active     BOOLEAN      NOT NULL DEFAULT TRUE,
    reason     VARCHAR(500),
    added_by   VARCHAR(255),
    expires_at TIMESTAMP,
    created_at TIMESTAMP,

    CONSTRAINT pk_blacklist_entries PRIMARY KEY (id)
);

CREATE INDEX idx_bl_type_value ON blacklist_entries (type, value);
CREATE INDEX idx_bl_user_id    ON blacklist_entries (user_id);
CREATE INDEX idx_bl_active     ON blacklist_entries (active);

-- =============================================================
--  DEVELOPER MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS dev_app_sequence      START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS api_key_sequence      START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS app_webhook_sequence  START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS wdl_sequence          START 1 INCREMENT 1;

-- ── developer_apps ────────────────────────────────────────────
CREATE TABLE developer_apps (
    id               BIGINT        NOT NULL DEFAULT nextval('dev_app_sequence'),
    owner_user_id    BIGINT        NOT NULL,
    app_name         VARCHAR(100)  NOT NULL,
    description      VARCHAR(500),
    website_url      VARCHAR(300),
    mode             VARCHAR(10)   NOT NULL DEFAULT 'TEST',
    live_approved    BOOLEAN       NOT NULL DEFAULT FALSE,
    live_approved_by BIGINT,
    live_approved_at TIMESTAMP,
    active           BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at       TIMESTAMP     NOT NULL DEFAULT now(),
    updated_at       TIMESTAMP     NOT NULL DEFAULT now(),

    CONSTRAINT pk_developer_apps  PRIMARY KEY (id),
    CONSTRAINT chk_dev_app_mode   CHECK (mode IN ('TEST', 'LIVE'))
);

CREATE INDEX idx_dev_app_owner ON developer_apps (owner_user_id);
CREATE INDEX idx_dev_app_name  ON developer_apps (app_name);

-- ── api_keys ──────────────────────────────────────────────────
CREATE TABLE api_keys (
    id                BIGINT       NOT NULL DEFAULT nextval('api_key_sequence'),
    app_id            BIGINT       NOT NULL,
    mode              VARCHAR(10)  NOT NULL,
    public_key        VARCHAR(80)  NOT NULL,
    secret_key_hash   VARCHAR(100) NOT NULL,
    secret_key_prefix VARCHAR(20)  NOT NULL,
    status            VARCHAR(15)  NOT NULL DEFAULT 'ACTIVE',
    last_used_at      TIMESTAMP,
    request_count     BIGINT       NOT NULL DEFAULT 0,
    revoked_at        TIMESTAMP,
    revoked_by        BIGINT,
    revoke_reason     VARCHAR(300),
    expires_at        TIMESTAMP,
    created_at        TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_api_keys        PRIMARY KEY (id),
    CONSTRAINT uq_api_key_public  UNIQUE (public_key),
    CONSTRAINT fk_api_keys_app    FOREIGN KEY (app_id) REFERENCES developer_apps(id) ON DELETE CASCADE,
    CONSTRAINT chk_api_key_mode   CHECK (mode IN ('TEST', 'LIVE')),
    CONSTRAINT chk_api_key_status CHECK (status IN ('ACTIVE', 'REVOKED', 'SUSPENDED', 'EXPIRED'))
);

CREATE UNIQUE INDEX idx_api_key_public   ON api_keys (public_key);
CREATE        INDEX idx_api_key_app_mode ON api_keys (app_id, mode);

-- ── app_webhooks ──────────────────────────────────────────────
CREATE TABLE app_webhooks (
    id                   BIGINT       NOT NULL DEFAULT nextval('app_webhook_sequence'),
    app_id               BIGINT       NOT NULL,
    mode                 VARCHAR(10)  NOT NULL,
    url                  VARCHAR(500) NOT NULL,
    signing_secret       VARCHAR(100) NOT NULL,
    subscribed_events    VARCHAR(1000),
    active               BOOLEAN      NOT NULL DEFAULT TRUE,
    success_count        BIGINT       NOT NULL DEFAULT 0,
    failure_count        BIGINT       NOT NULL DEFAULT 0,
    last_delivery_at     TIMESTAMP,
    last_delivery_status VARCHAR(20),
    created_at           TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at           TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_app_webhooks PRIMARY KEY (id),
    CONSTRAINT fk_webhook_app  FOREIGN KEY (app_id) REFERENCES developer_apps(id) ON DELETE CASCADE
);

CREATE INDEX idx_webhook_app_mode ON app_webhooks (app_id, mode);

-- ── webhook_delivery_logs ─────────────────────────────────────
CREATE TABLE webhook_delivery_logs (
    id               BIGINT       NOT NULL DEFAULT nextval('wdl_sequence'),
    webhook_id       BIGINT       NOT NULL,
    app_id           BIGINT       NOT NULL,
    event_id         VARCHAR(50)  NOT NULL,
    event_type       VARCHAR(40)  NOT NULL,
    target_url       VARCHAR(500) NOT NULL,
    payload          TEXT,
    status           VARCHAR(15)  NOT NULL,
    http_status_code INT,
    response_body    TEXT,
    error_message    VARCHAR(500),
    attempt_number   INT          NOT NULL DEFAULT 1,
    duration_ms      BIGINT,
    next_retry_at    TIMESTAMP,
    created_at       TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_wdl PRIMARY KEY (id)
);

CREATE INDEX idx_wdl_webhook_id ON webhook_delivery_logs (webhook_id);
CREATE INDEX idx_wdl_event_id   ON webhook_delivery_logs (event_id);
CREATE INDEX idx_wdl_status     ON webhook_delivery_logs (status);
CREATE INDEX idx_wdl_created_at ON webhook_delivery_logs (created_at);

-- =============================================================
--  HISTORY / TRANSACTION MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS transaction_sequence       START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS history_sequence           START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS transaction_audit_log_seq  START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS tsh_sequence               START 1 INCREMENT 50;
CREATE SEQUENCE IF NOT EXISTS tse_sequence               START 1 INCREMENT 50;
CREATE SEQUENCE IF NOT EXISTS tat_sequence               START 1 INCREMENT 50;

-- ── transactions ──────────────────────────────────────────────
CREATE TABLE transactions (
    id                            BIGINT          NOT NULL DEFAULT nextval('transaction_sequence'),
    transaction_id                VARCHAR(50)     NOT NULL,
    reference                     VARCHAR(100),
    idempotency_key               VARCHAR(100),
    user_id                       BIGINT          NOT NULL,
    wallet_id                     BIGINT,
    account_holder                VARCHAR(200),
    counterparty_user_id          BIGINT,
    counterparty_wallet_id        BIGINT,
    counterparty_account_holder   VARCHAR(200),
    transaction_type              VARCHAR(50)     NOT NULL,
    debit_credit                  VARCHAR(10)     NOT NULL,
    channel                       VARCHAR(50),
    gross_amount                  NUMERIC(20, 8)  NOT NULL,
    fee_amount                    NUMERIC(20, 8)  DEFAULT 0,
    tax_amount                    NUMERIC(20, 8)  DEFAULT 0,
    net_amount                    NUMERIC(20, 8),
    previous_balance              NUMERIC(20, 8),
    available_balance             NUMERIC(20, 8),
    running_balance               NUMERIC(20, 8),
    currency                      VARCHAR(10)     NOT NULL,
    currency_symbol               VARCHAR(10),
    exchange_rate                 NUMERIC(20, 8)  DEFAULT 1,
    current_status                VARCHAR(20)     NOT NULL,
    status_timeline               TEXT,
    description                   VARCHAR(500),
    failure_reason                VARCHAR(500),
    ip_address                    VARCHAR(50),
    device_id                     VARCHAR(100),
    user_agent                    VARCHAR(500),
    publish_access                BOOLEAN         NOT NULL DEFAULT TRUE,
    admin_note                    VARCHAR(1000),
    completed_at                  TIMESTAMP,
    created_at                    TIMESTAMP       NOT NULL DEFAULT now(),
    updated_at                    TIMESTAMP       NOT NULL DEFAULT now(),
    version                       BIGINT,

    CONSTRAINT pk_transactions           PRIMARY KEY (id),
    CONSTRAINT uq_txn_transaction_id     UNIQUE (transaction_id),
    CONSTRAINT uq_txn_idempotency_key    UNIQUE (idempotency_key)
);

CREATE UNIQUE INDEX idx_txn_transaction_id  ON transactions (transaction_id);
CREATE        INDEX idx_txn_reference       ON transactions (reference);
CREATE        INDEX idx_txn_user_id         ON transactions (user_id);
CREATE        INDEX idx_txn_wallet_id       ON transactions (wallet_id);
CREATE        INDEX idx_txn_current_status  ON transactions (current_status);
CREATE        INDEX idx_txn_type            ON transactions (transaction_type);
CREATE        INDEX idx_txn_created_at      ON transactions (created_at);
CREATE UNIQUE INDEX idx_txn_idempotency     ON transactions (idempotency_key);
CREATE        INDEX idx_txn_publish_access  ON transactions (publish_access);

-- ── transaction_history ───────────────────────────────────────
CREATE TABLE transaction_history (
    id                          BIGINT          NOT NULL DEFAULT nextval('history_sequence'),
    transaction_id              VARCHAR(255)    NOT NULL,
    user_id                     BIGINT          NOT NULL,
    wallet_id                   BIGINT,
    account_holder              VARCHAR(255),
    reference                   VARCHAR(255),
    gateway_reference           VARCHAR(255),
    session_id                  VARCHAR(255),
    transaction_type            VARCHAR(255)    NOT NULL,
    debit_credit                VARCHAR(255)    NOT NULL,
    channel                     VARCHAR(255),
    status                      VARCHAR(255)    NOT NULL,
    description                 VARCHAR(500),
    message                     VARCHAR(1000),
    gross_amount                NUMERIC(20, 8)  NOT NULL,
    fee_amount                  NUMERIC(20, 8)  DEFAULT 0,
    tax_amount                  NUMERIC(20, 8)  DEFAULT 0,
    net_amount                  NUMERIC(20, 8),
    previous_balance            NUMERIC(20, 8),
    available_balance           NUMERIC(20, 8),
    running_balance             NUMERIC(20, 8),
    currency_type               VARCHAR(10)     NOT NULL,
    currency_symbol             VARCHAR(10),
    original_currency           VARCHAR(10),
    exchange_rate               NUMERIC(20, 8)  DEFAULT 1,
    counterparty_wallet_id      BIGINT,
    counterparty_user_id        BIGINT,
    counterparty_account_holder VARCHAR(255),
    bank_code                   VARCHAR(255),
    bank_account_number         VARCHAR(255),
    routing_number              VARCHAR(255),
    external_reference          VARCHAR(255),
    ip_address                  VARCHAR(255),
    device_id                   VARCHAR(255),
    user_agent                  VARCHAR(500),
    geo_location                VARCHAR(255),
    risk_score                  NUMERIC(5, 2)   DEFAULT 0,
    aml_flag                    BOOLEAN         DEFAULT FALSE,
    sanction_screening_result   VARCHAR(255),
    compliance_note             VARCHAR(1000),
    reviewed_by                 VARCHAR(255),
    parent_history_id           BIGINT,
    reversal_reason             VARCHAR(255),
    dispute_status              VARCHAR(255),
    dispute_reference           VARCHAR(255),
    retry_count                 INT             DEFAULT 0,
    failure_reason              VARCHAR(255),
    processed_at                VARCHAR(255),
    initiated_by                VARCHAR(255),
    approved_by                 VARCHAR(255),
    approval_timestamp          VARCHAR(255),
    admin_note                  VARCHAR(1000),
    manual_adjustment_flag      BOOLEAN         DEFAULT FALSE,
    category                    VARCHAR(255),
    tags                        VARCHAR(255),
    completed_at                TIMESTAMP,
    idempotency_key             VARCHAR(255),
    created_at                  TIMESTAMP       NOT NULL DEFAULT now(),

    CONSTRAINT pk_transaction_history PRIMARY KEY (id),
    CONSTRAINT uq_th_idempotency_key  UNIQUE (idempotency_key)
);

CREATE        INDEX idx_th_user_id       ON transaction_history (user_id);
CREATE        INDEX idx_th_wallet_id     ON transaction_history (wallet_id);
CREATE        INDEX idx_th_reference     ON transaction_history (reference);
CREATE        INDEX idx_th_transaction_id ON transaction_history (transaction_id);
CREATE        INDEX idx_th_type          ON transaction_history (transaction_type);
CREATE        INDEX idx_th_status        ON transaction_history (status);
CREATE        INDEX idx_th_created_at    ON transaction_history (created_at);
CREATE UNIQUE INDEX idx_th_idempotency   ON transaction_history (idempotency_key);

-- ── transaction_audit_log ─────────────────────────────────────
CREATE TABLE transaction_audit_log (
    id              BIGINT       NOT NULL DEFAULT nextval('transaction_audit_log_seq'),
    transaction_id  VARCHAR(50)  NOT NULL,
    action          VARCHAR(50)  NOT NULL,
    performed_by    VARCHAR(100) NOT NULL,
    previous_status VARCHAR(20),
    new_status      VARCHAR(20),
    ip_address      VARCHAR(50),
    device_id       VARCHAR(100),
    reason          VARCHAR(500),
    metadata        VARCHAR(2000),
    created_at      TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_transaction_audit_log PRIMARY KEY (id)
);

CREATE INDEX idx_audit_transaction_id ON transaction_audit_log (transaction_id);
CREATE INDEX idx_audit_performed_by   ON transaction_audit_log (performed_by);
CREATE INDEX idx_audit_created_at     ON transaction_audit_log (created_at);

-- ── txn_status_history ────────────────────────────────────────
CREATE TABLE txn_status_history (
    id             BIGINT      NOT NULL DEFAULT nextval('tsh_sequence'),
    transaction_id VARCHAR(50) NOT NULL,
    status         VARCHAR(30) NOT NULL,
    visited_at     TIMESTAMPTZ NOT NULL,
    actor          VARCHAR(100),
    message        VARCHAR(500),
    sort_order     INT         NOT NULL DEFAULT 0,

    CONSTRAINT pk_tsh PRIMARY KEY (id)
);

CREATE INDEX idx_tsh_transaction_id ON txn_status_history (transaction_id);
CREATE INDEX idx_tsh_status         ON txn_status_history (status);
CREATE INDEX idx_tsh_visited_at     ON txn_status_history (visited_at);

-- ── txn_state_entries ─────────────────────────────────────────
CREATE TABLE txn_state_entries (
    id             BIGINT      NOT NULL DEFAULT nextval('tse_sequence'),
    transaction_id VARCHAR(50) NOT NULL,
    state_name     VARCHAR(30) NOT NULL,
    visited_at     TIMESTAMPTZ,
    actor          VARCHAR(100),
    message        VARCHAR(500),
    next_state     VARCHAR(30),
    on_failure     BOOLEAN     NOT NULL DEFAULT FALSE,
    failure_state  VARCHAR(30),
    sort_order     INT         NOT NULL DEFAULT 0,

    CONSTRAINT pk_tse PRIMARY KEY (id)
);

CREATE INDEX idx_tse_transaction_id ON txn_state_entries (transaction_id);
CREATE INDEX idx_tse_state_name     ON txn_state_entries (state_name);

-- ── txn_allowed_transitions ───────────────────────────────────
CREATE TABLE txn_allowed_transitions (
    id             BIGINT      NOT NULL DEFAULT nextval('tat_sequence'),
    transaction_id VARCHAR(50) NOT NULL,
    from_state     VARCHAR(30) NOT NULL,
    to_state       VARCHAR(30) NOT NULL,
    sort_order     INT         NOT NULL DEFAULT 0,

    CONSTRAINT pk_tat PRIMARY KEY (id)
);

CREATE INDEX idx_tat_transaction_id ON txn_allowed_transitions (transaction_id);
CREATE INDEX idx_tat_from_state     ON txn_allowed_transitions (from_state);
CREATE INDEX idx_tat_to_state       ON txn_allowed_transitions (to_state);

-- =============================================================
--  MAINTENANCE MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS maintenance_fee_config_seq        START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS maintenance_fee_transaction_seq   START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS maintenance_fee_audit_log_seq     START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS user_debt_seq                     START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS user_monthly_activity_seq         START 1 INCREMENT 1;

-- ── maintenance_fee_config ────────────────────────────────────
CREATE TABLE maintenance_fee_config (
    id                  BIGINT         NOT NULL DEFAULT nextval('maintenance_fee_config_seq'),
    currency_code       VARCHAR(3)     NOT NULL,
    fee_type            VARCHAR(20)    NOT NULL,
    fee_amount          NUMERIC(19, 4),
    fee_percentage      NUMERIC(5, 2),
    minimum_fee         NUMERIC(19, 4),
    maximum_fee         NUMERIC(19, 4),
    is_active           BOOLEAN        NOT NULL DEFAULT TRUE,
    created_by_admin_id BIGINT,
    updated_by_admin_id BIGINT,
    created_at          TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at          TIMESTAMP      NOT NULL DEFAULT now(),
    version             BIGINT,

    CONSTRAINT pk_maintenance_fee_config PRIMARY KEY (id)
);

CREATE INDEX idx_mfc_currency_active ON maintenance_fee_config (currency_code, is_active);

-- ── maintenance_fee_transactions ──────────────────────────────
CREATE TABLE maintenance_fee_transactions (
    id                   BIGINT         NOT NULL DEFAULT nextval('maintenance_fee_transaction_seq'),
    user_id              BIGINT         NOT NULL,
    currency_code        VARCHAR(3)     NOT NULL,
    month_year           DATE           NOT NULL,
    fee_amount           NUMERIC(19, 4) NOT NULL,
    fee_type             VARCHAR(20)    NOT NULL,
    status               VARCHAR(20)    NOT NULL DEFAULT 'PENDING',
    deducted_amount      NUMERIC(19, 4) DEFAULT 0,
    wallet_balance_before NUMERIC(19, 4),
    wallet_balance_after  NUMERIC(19, 4),
    debt_amount          NUMERIC(19, 4) DEFAULT 0,
    repaid               BOOLEAN        NOT NULL DEFAULT FALSE,
    repaid_at            TIMESTAMP,
    reference_id         VARCHAR(50)    NOT NULL,
    admin_notes          VARCHAR(500),
    batch_id             VARCHAR(36),
    created_at           TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at           TIMESTAMP      NOT NULL DEFAULT now(),
    version              BIGINT,

    CONSTRAINT pk_mft              PRIMARY KEY (id),
    CONSTRAINT uq_mft_reference    UNIQUE (reference_id)
);

CREATE        INDEX idx_mft_user_currency_month ON maintenance_fee_transactions (user_id, currency_code, month_year);
CREATE        INDEX idx_mft_status              ON maintenance_fee_transactions (status);
CREATE UNIQUE INDEX idx_mft_reference           ON maintenance_fee_transactions (reference_id);

-- ── maintenance_fee_audit_log ─────────────────────────────────
CREATE TABLE maintenance_fee_audit_log (
    id            BIGINT       NOT NULL DEFAULT nextval('maintenance_fee_audit_log_seq'),
    batch_id      VARCHAR(36)  NOT NULL,
    user_id       BIGINT,
    action        VARCHAR(50)  NOT NULL,
    details       TEXT,
    status        VARCHAR(20),
    error_message VARCHAR(1000),
    created_at    TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_mfal PRIMARY KEY (id)
);

CREATE INDEX idx_mfal_batch_id ON maintenance_fee_audit_log (batch_id);
CREATE INDEX idx_mfal_user_id  ON maintenance_fee_audit_log (user_id);
CREATE INDEX idx_mfal_action   ON maintenance_fee_audit_log (action);

-- ── user_debts ────────────────────────────────────────────────
CREATE TABLE user_debts (
    id                 BIGINT         NOT NULL DEFAULT nextval('user_debt_seq'),
    user_id            BIGINT         NOT NULL,
    currency_code      VARCHAR(3)     NOT NULL,
    total_debt         NUMERIC(19, 4) NOT NULL DEFAULT 0,
    total_repaid       NUMERIC(19, 4) NOT NULL DEFAULT 0,
    status             VARCHAR(20)    NOT NULL DEFAULT 'ACTIVE',
    last_activity_date TIMESTAMP,
    settled_at         TIMESTAMP,
    created_at         TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at         TIMESTAMP      NOT NULL DEFAULT now(),
    version            BIGINT,

    CONSTRAINT pk_user_debts           PRIMARY KEY (id),
    CONSTRAINT uq_ud_user_currency     UNIQUE (user_id, currency_code)
);

CREATE INDEX idx_ud_user_id   ON user_debts (user_id);
CREATE INDEX idx_ud_status    ON user_debts (status);
CREATE INDEX idx_ud_currency  ON user_debts (currency_code);

-- ── user_monthly_activity ─────────────────────────────────────
CREATE TABLE user_monthly_activity (
    id                BIGINT         NOT NULL DEFAULT nextval('user_monthly_activity_seq'),
    user_id           BIGINT         NOT NULL,
    currency_code     VARCHAR(3)     NOT NULL,
    month_year        DATE           NOT NULL,
    transaction_count INT            NOT NULL DEFAULT 0,
    total_volume      NUMERIC(19, 4) NOT NULL DEFAULT 0,
    has_activity      BOOLEAN        NOT NULL DEFAULT FALSE,
    processed         BOOLEAN        NOT NULL DEFAULT FALSE,
    created_at        TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at        TIMESTAMP      NOT NULL DEFAULT now(),

    CONSTRAINT pk_uma                   PRIMARY KEY (id),
    CONSTRAINT uq_uma_user_currency_month UNIQUE (user_id, currency_code, month_year)
);

CREATE INDEX idx_uma_month_processed ON user_monthly_activity (month_year, processed);
CREATE INDEX idx_uma_user_month      ON user_monthly_activity (user_id, month_year);

-- =============================================================
--  INVESTMENT MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS investment_seq START 1 INCREMENT 1;

CREATE TABLE investments (
    id              BIGINT         NOT NULL DEFAULT nextval('investment_seq'),
    user_id         BIGINT         NOT NULL,
    wallet_id       BIGINT         NOT NULL,
    currency_code   VARCHAR(10)    NOT NULL DEFAULT 'NGN',
    principal       NUMERIC(18, 4) NOT NULL,
    return_rate     NUMERIC(5, 2),
    expected_profit NUMERIC(18, 4),
    total_payout    NUMERIC(18, 4),
    duration        VARCHAR(20)    NOT NULL,
    duration_days   INT,
    start_date      TIMESTAMP      NOT NULL DEFAULT now(),
    maturity_date   TIMESTAMP      NOT NULL,
    status          VARCHAR(20)    NOT NULL DEFAULT 'ACTIVE',
    paid_out_at     TIMESTAMP,
    reference_id    VARCHAR(50),
    created_on      TIMESTAMP      NOT NULL DEFAULT now(),
    updated_on      TIMESTAMP      NOT NULL DEFAULT now(),

    CONSTRAINT pk_investments PRIMARY KEY (id)
);

-- =============================================================
--  LIQUIDITY MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS platform_ledger_sequence START 1 INCREMENT 1;

CREATE TABLE liquidity_config (
    id                BIGINT         NOT NULL,
    gateway           VARCHAR(30)    NOT NULL,
    alert_threshold   NUMERIC(20, 2) NOT NULL,
    block_threshold   NUMERIC(20, 2) NOT NULL,
    currency          VARCHAR(10)    NOT NULL,
    alert_emails      VARCHAR(500),
    last_known_balance NUMERIC(20, 2),
    last_sync_at      TIMESTAMP,
    alerts_enabled    BOOLEAN        NOT NULL DEFAULT TRUE,
    updated_at        TIMESTAMP      NOT NULL DEFAULT now(),

    CONSTRAINT pk_liquidity_config PRIMARY KEY (id)
);

CREATE TABLE platform_ledger (
    id              BIGINT         NOT NULL DEFAULT nextval('platform_ledger_sequence'),
    gateway         VARCHAR(30)    NOT NULL,
    entry_type      VARCHAR(30)    NOT NULL,
    amount          NUMERIC(20, 2) NOT NULL,
    balance_after   NUMERIC(20, 2),
    currency        VARCHAR(10)    NOT NULL,
    reference       VARCHAR(100),
    related_user_id BIGINT,
    description     VARCHAR(500),
    recorded_by     VARCHAR(100),
    created_at      TIMESTAMP      NOT NULL DEFAULT now(),

    CONSTRAINT pk_platform_ledger PRIMARY KEY (id),
    CONSTRAINT uq_pl_reference    UNIQUE (reference)
);

CREATE        INDEX idx_pl_created_at ON platform_ledger (created_at);
CREATE        INDEX idx_pl_entry_type ON platform_ledger (entry_type);
CREATE        INDEX idx_pl_gateway    ON platform_ledger (gateway);
CREATE UNIQUE INDEX idx_pl_reference  ON platform_ledger (reference);

-- =============================================================
--  VIRTUAL CARD MODULE
-- (UUID primary keys — no sequences needed)
-- =============================================================

CREATE TABLE virtual_cards (
    id                      VARCHAR(36)    NOT NULL DEFAULT gen_random_uuid()::text,
    card_id                 VARCHAR(255)   NOT NULL,
    user_id                 BIGINT         NOT NULL,
    card_number             VARCHAR(16)    NOT NULL,
    card_holder_name        VARCHAR(255)   NOT NULL,
    expiration_month        VARCHAR(2)     NOT NULL,
    expiration_year         VARCHAR(4)     NOT NULL,
    cvv                     VARCHAR(3)     NOT NULL,
    status                  VARCHAR(20)    NOT NULL,
    card_type               VARCHAR(20),
    card_plan               VARCHAR(20),
    currency                VARCHAR(3)     NOT NULL,
    balance                 NUMERIC(19, 2),
    spending_limit          NUMERIC(19, 2),
    limit_period            VARCHAR(20),
    limit_reset_date        DATE,
    current_period_spent    NUMERIC(19, 2),
    merchant_name           VARCHAR(255),
    merchant_id             VARCHAR(255),
    merchant_category_code  VARCHAR(4),
    merchant_country        VARCHAR(10),
    merchant_city           VARCHAR(255),
    authorization_code      VARCHAR(255),
    allow_international     BOOLEAN,
    allow_online            BOOLEAN,
    allow_atm               BOOLEAN,
    allow_contactless       BOOLEAN,
    bin                     VARCHAR(6),
    first_four              VARCHAR(4),
    last_four               VARCHAR(4),
    masked_card_number      VARCHAR(19),
    hashed_card_number      VARCHAR(255),
    provider_card_id        VARCHAR(255),
    expires_at              TIMESTAMP,
    created_at              TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at              TIMESTAMP      NOT NULL DEFAULT now(),
    activated_at            TIMESTAMP,
    frozen_at               TIMESTAMP,
    cancelled_at            TIMESTAMP,
    last_used_at            TIMESTAMP,
    deleted_at              TIMESTAMP,
    version                 BIGINT,

    CONSTRAINT pk_virtual_cards        PRIMARY KEY (id),
    CONSTRAINT uq_virtual_card_number  UNIQUE (card_number)
);

CREATE TABLE card_controls (
    id                   VARCHAR(36) NOT NULL DEFAULT gen_random_uuid()::text,
    card_id              VARCHAR(255) NOT NULL,
    allow_international  BOOLEAN,
    allow_online         BOOLEAN,
    allow_atm            BOOLEAN,
    allow_contactless    BOOLEAN,
    allow_chip           BOOLEAN,
    allow_swipe          BOOLEAN,
    valid_from_time      TIME,
    valid_to_time        TIME,
    updated_at           TIMESTAMP,

    CONSTRAINT pk_card_controls     PRIMARY KEY (id),
    CONSTRAINT uq_card_controls_id  UNIQUE (card_id)
);

-- ElementCollection tables for CardControl
CREATE TABLE card_allowed_countries (
    control_id   VARCHAR(36)  NOT NULL,
    country_code VARCHAR(10),
    CONSTRAINT fk_cac_control FOREIGN KEY (control_id) REFERENCES card_controls(id)
);

CREATE TABLE card_blocked_countries (
    control_id   VARCHAR(36)  NOT NULL,
    country_code VARCHAR(10),
    CONSTRAINT fk_cbc_control FOREIGN KEY (control_id) REFERENCES card_controls(id)
);

CREATE TABLE card_allowed_merchant_categories (
    control_id VARCHAR(36) NOT NULL,
    mcc        VARCHAR(10),
    CONSTRAINT fk_camc_control FOREIGN KEY (control_id) REFERENCES card_controls(id)
);

CREATE TABLE card_blocked_merchant_categories (
    control_id VARCHAR(36) NOT NULL,
    mcc        VARCHAR(10),
    CONSTRAINT fk_cbmc_control FOREIGN KEY (control_id) REFERENCES card_controls(id)
);

CREATE TABLE card_blocked_merchants (
    control_id  VARCHAR(36)  NOT NULL,
    merchant_id VARCHAR(255),
    CONSTRAINT fk_cbm_control FOREIGN KEY (control_id) REFERENCES card_controls(id)
);

CREATE TABLE card_limits (
    id                          VARCHAR(36)    NOT NULL DEFAULT gen_random_uuid()::text,
    card_id                     VARCHAR(255)   NOT NULL,
    max_transaction_amount      NUMERIC(19, 2),
    min_transaction_amount      NUMERIC(19, 2),
    daily_limit                 NUMERIC(19, 2),
    daily_spent                 NUMERIC(19, 2),
    daily_reset_at              TIMESTAMP,
    weekly_limit                NUMERIC(19, 2),
    weekly_spent                NUMERIC(19, 2),
    weekly_reset_at             TIMESTAMP,
    monthly_limit               NUMERIC(19, 2),
    monthly_spent               NUMERIC(19, 2),
    monthly_reset_at            TIMESTAMP,
    daily_transaction_count_limit INT,
    daily_transaction_count     INT,
    updated_at                  TIMESTAMP,
    version                     BIGINT,

    CONSTRAINT pk_card_limits    PRIMARY KEY (id),
    CONSTRAINT uq_card_limits_id UNIQUE (card_id)
);

CREATE SEQUENCE IF NOT EXISTS card_fee_config_seq START 1 INCREMENT 1;

CREATE TABLE card_fee_config (
    id            BIGINT         NOT NULL DEFAULT nextval('card_fee_config_seq'),
    currency_code VARCHAR(10)    NOT NULL,
    card_type     VARCHAR(10)    NOT NULL,
    fee_amount    NUMERIC(20, 4) NOT NULL,
    description   VARCHAR(255),
    active        BOOLEAN        NOT NULL DEFAULT TRUE,
    updated_by    BIGINT,
    created_at    TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at    TIMESTAMP      NOT NULL DEFAULT now(),
    version       BIGINT,

    CONSTRAINT pk_card_fee_config          PRIMARY KEY (id),
    CONSTRAINT uq_card_fee_currency_type   UNIQUE (currency_code, card_type)
);

CREATE INDEX idx_card_fee_currency ON card_fee_config (currency_code);
CREATE INDEX idx_card_fee_active   ON card_fee_config (active);

CREATE TABLE card_audit_logs (
    id         VARCHAR(36)  NOT NULL DEFAULT gen_random_uuid()::text,
    card_id    VARCHAR(255) NOT NULL,
    user_id    VARCHAR(255) NOT NULL,
    action     VARCHAR(50)  NOT NULL,
    old_value  TEXT,
    new_value  TEXT,
    changed_by VARCHAR(255),
    ip_address VARCHAR(255),
    user_agent VARCHAR(255),
    reason     VARCHAR(255),
    created_at TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_card_audit_logs PRIMARY KEY (id)
);

CREATE INDEX idx_card_id    ON card_audit_logs (card_id);
CREATE INDEX idx_user_id    ON card_audit_logs (user_id);
CREATE INDEX idx_created_at ON card_audit_logs (created_at);

-- =============================================================
--  SUPPORT MODULE
-- =============================================================

CREATE SEQUENCE IF NOT EXISTS ticket_sequence       START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS ticket_reply_sequence START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS faq_sequence          START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS article_sequence      START 1 INCREMENT 1;
CREATE SEQUENCE IF NOT EXISTS chat_message_sequence START 1 INCREMENT 1;

CREATE TABLE support_tickets (
    id                      BIGINT       NOT NULL DEFAULT nextval('ticket_sequence'),
    ticket_reference        VARCHAR(30)  NOT NULL,
    user_id                 BIGINT       NOT NULL,
    user_email              VARCHAR(255),
    user_username           VARCHAR(100),
    subject                 VARCHAR(200) NOT NULL,
    description             TEXT         NOT NULL,
    status                  VARCHAR(30)  NOT NULL,
    priority                VARCHAR(20)  NOT NULL,
    category                VARCHAR(40)  NOT NULL,
    assigned_to             BIGINT,
    assigned_to_name        VARCHAR(200),
    related_transaction_id  VARCHAR(50),
    internal_note           TEXT,
    resolved_at             TIMESTAMP,
    closed_at               TIMESTAMP,
    first_response_at       TIMESTAMP,
    escalated_at            TIMESTAMP,
    escalated_by            BIGINT,
    created_at              TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at              TIMESTAMP    NOT NULL DEFAULT now(),
    version                 BIGINT,

    CONSTRAINT pk_support_tickets      PRIMARY KEY (id),
    CONSTRAINT uq_ticket_reference     UNIQUE (ticket_reference)
);

CREATE        INDEX idx_ticket_user_id    ON support_tickets (user_id);
CREATE        INDEX idx_ticket_status     ON support_tickets (status);
CREATE        INDEX idx_ticket_category   ON support_tickets (category);
CREATE        INDEX idx_ticket_assigned   ON support_tickets (assigned_to);
CREATE        INDEX idx_ticket_created_at ON support_tickets (created_at);
CREATE UNIQUE INDEX idx_ticket_reference  ON support_tickets (ticket_reference);

CREATE TABLE ticket_replies (
    id          BIGINT   NOT NULL DEFAULT nextval('ticket_reply_sequence'),
    ticket_id   BIGINT   NOT NULL,
    author_id   BIGINT   NOT NULL,
    author_name VARCHAR(200),
    is_staff_reply BOOLEAN NOT NULL DEFAULT FALSE,
    is_internal    BOOLEAN NOT NULL DEFAULT FALSE,
    message        TEXT    NOT NULL,
    created_at     TIMESTAMP NOT NULL DEFAULT now(),

    CONSTRAINT pk_ticket_replies PRIMARY KEY (id),
    CONSTRAINT fk_reply_ticket   FOREIGN KEY (ticket_id) REFERENCES support_tickets(id)
);

CREATE INDEX idx_reply_ticket_id  ON ticket_replies (ticket_id);
CREATE INDEX idx_reply_author_id  ON ticket_replies (author_id);
CREATE INDEX idx_reply_created_at ON ticket_replies (created_at);

CREATE TABLE support_faqs (
    id          BIGINT   NOT NULL DEFAULT nextval('faq_sequence'),
    category    VARCHAR(80)  NOT NULL,
    sort_order  INT          NOT NULL DEFAULT 0,
    question    TEXT         NOT NULL,
    answer      TEXT         NOT NULL,
    author_name VARCHAR(100) DEFAULT 'ePay Support Team',
    active      BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_support_faqs PRIMARY KEY (id)
);

CREATE INDEX idx_faq_category ON support_faqs (category);
CREATE INDEX idx_faq_active   ON support_faqs (active);

CREATE TABLE support_articles (
    id         BIGINT       NOT NULL DEFAULT nextval('article_sequence'),
    slug       VARCHAR(120) NOT NULL,
    title      VARCHAR(200) NOT NULL,
    content    TEXT         NOT NULL,
    summary    VARCHAR(250),
    category   VARCHAR(60)  NOT NULL,
    active     BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at TIMESTAMP    NOT NULL DEFAULT now(),

    CONSTRAINT pk_support_articles PRIMARY KEY (id),
    CONSTRAINT uq_article_slug     UNIQUE (slug)
);

CREATE UNIQUE INDEX idx_article_slug     ON support_articles (slug);
CREATE        INDEX idx_article_category ON support_articles (category);
CREATE        INDEX idx_article_active   ON support_articles (active);

CREATE TABLE chat_messages (
    id         BIGINT      NOT NULL DEFAULT nextval('chat_message_sequence'),
    session_id VARCHAR(64) NOT NULL,
    user_id    BIGINT,
    role       VARCHAR(20) NOT NULL,
    content    TEXT        NOT NULL,
    created_at TIMESTAMP   NOT NULL DEFAULT now(),

    CONSTRAINT pk_chat_messages PRIMARY KEY (id)
);

CREATE INDEX idx_chat_session    ON chat_messages (session_id);
CREATE INDEX idx_chat_user_id    ON chat_messages (user_id);
CREATE INDEX idx_chat_created_at ON chat_messages (created_at);
