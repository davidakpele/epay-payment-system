#!/usr/bin/env python3
"""
Generates comprehensive PDF documentation for the ePay backend.
Uses fpdf2 to create a multi-page document covering architecture,
modules, APIs, security, database, deployment, and monitoring.
"""

from fpdf import FPDF
import os

class DocPDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 8)
            self.set_text_color(150, 150, 150)
            self.cell(0, 8, "ePay Backend Documentation", align="L")
            self.cell(0, 8, f"Page {self.page_no()}", align="R", new_x="LMARGIN", new_y="NEXT")
            self.set_draw_color(200, 200, 200)
            self.line(10, 22, 200, 22)
            self.set_text_color(0, 0, 0)
            self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 7)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, "ePay Platform - Confidential", align="C")

    def h1(self, text):
        self.ln(8)
        self.set_font("Helvetica", "B", 20)
        self.set_text_color(30, 60, 120)
        self.multi_cell(0, 10, text)
        self.set_draw_color(30, 60, 120)
        self.set_line_width(0.8)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(5)
        self.set_text_color(0, 0, 0)

    def h2(self, text):
        self.ln(5)
        self.set_font("Helvetica", "B", 14)
        self.set_text_color(40, 80, 140)
        self.multi_cell(0, 7, text)
        self.ln(2)
        self.set_text_color(0, 0, 0)

    def h3(self, text):
        self.ln(3)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(60, 60, 60)
        self.multi_cell(0, 6, text)
        self.set_text_color(0, 0, 0)

    def para(self, text):
        self.set_x(10)
        self.set_font("Helvetica", "", 10)
        self.multi_cell(190, 5.5, text)
        self.ln(1)

    def bullet(self, text):
        self.set_x(15)
        self.set_font("Helvetica", "", 10)
        self.multi_cell(185, 5.5, "- " + text)
        self.ln(1)

    def code(self, text):
        self.set_font("Courier", "", 8.5)
        self.set_fill_color(240, 240, 245)
        self.set_text_color(50, 50, 80)
        lines = text.split('\n')
        for line in lines:
            self.set_x(12)
            self.cell(0, 4.5, " " + line, fill=True)
            self.ln(4.5)
        self.set_text_color(0, 0, 0)
        self.ln(2)

    def table(self, headers, rows, col_widths=None):
        if col_widths is None:
            col_widths = [190 / len(headers)] * len(headers)
        self.set_font("Helvetica", "B", 8.5)
        self.set_fill_color(30, 60, 120)
        self.set_text_color(255, 255, 255)
        for i, h in enumerate(headers):
            self.cell(col_widths[i], 6, h, border=1, fill=True, align="C")
        self.ln()
        self.set_font("Helvetica", "", 8)
        self.set_text_color(0, 0, 0)
        for row in rows:
            max_h = 6
            for i, cell in enumerate(row):
                lines = self.get_string_width(str(cell)) / (col_widths[i] - 2)
                if lines > 1:
                    max_h = max(max_h, int(lines) * 5)
            for i, cell in enumerate(row):
                self.set_fill_color(255 if rows.index(row) % 2 == 0 else 245, 255 if rows.index(row) % 2 == 0 else 248, 255 if rows.index(row) % 2 == 0 else 250)
                self.cell(col_widths[i], max_h, str(cell), border=1, fill=True)
            self.ln(max_h)
        self.ln(2)

    def sep(self):
        self.ln(3)
        self.set_draw_color(200, 200, 200)
        self.set_line_width(0.3)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)


def generate():
    pdf = DocPDF(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(auto=True, margin=20)

    # ── Title Page ──
    pdf.add_page()
    pdf.ln(50)
    pdf.set_font("Helvetica", "B", 36)
    pdf.set_text_color(30, 60, 120)
    pdf.cell(0, 15, "ePay Backend", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 10, "Comprehensive Technical Documentation", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(10)
    pdf.set_font("Helvetica", "", 12)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "A-to-Z Guide to the ePay Payments Platform", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(20)
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(80, 80, 80)
    info_lines = [
        "Version: 1.0.0-SNAPSHOT",
        "Spring Boot 4.1.0 / Java 21",
        "Architecture: Modular Monolith (20 Maven Modules)",
        "Document Generated: November 2026",
    ]
    for line in info_lines:
        pdf.cell(0, 6, line, align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(30)
    pdf.set_draw_color(30, 60, 120)
    pdf.set_line_width(1)
    pdf.line(60, pdf.get_y(), 150, pdf.get_y())

    # ── Table of Contents ──
    pdf.add_page()
    pdf.h1("Table of Contents")
    toc = [
        "1.  Project Overview",
        "2.  Architecture & Module Structure",
        "3.  Technology Stack",
        "4.  Domain Model & Database Schema",
        "5.  Security Architecture",
        "6.  Authentication & Authorization (JWT)",
        "7.  API Reference: Authentication Module",
        "8.  API Reference: Wallet Module",
        "9.  Payment Integration: Deposits & Withdrawals",
        "10. Virtual Cards",
        "11. Transaction History & State Machine",
        "12. Investment Module",
        "13. Bills Payment",
        "14. Maintenance Fee Engine",
        "15. Support System",
        "16. Admin Panel & Developer Portal",
        "17. Notification System (RabbitMQ)",
        "18. Supporting Modules (Beneficiary, Bank, Blacklist)",
        "19. Configuration Reference",
        "20. Infrastructure & Deployment",
        "21. Monitoring & Observability",
        "22. CI/CD Pipeline",
        "23. Known Gaps & Security Notes",
    ]
    pdf.set_font("Helvetica", "", 11)
    for entry in toc:
        pdf.set_text_color(30, 60, 120)
        pdf.cell(0, 7, entry, new_x="LMARGIN", new_y="NEXT")

    # ── 1. Project Overview ──
    pdf.add_page()
    pdf.h1("1. Project Overview")
    pdf.para("ePay is a multi-currency digital wallet and payments platform built as a modular monolith on Spring Boot 4.1.0 with Java 21. It provides wallet management, payment gateway integration (Paystack), virtual card issuance, deposits, withdrawals, bill payments, investments, maintenance fee processing, and a full admin back-office.")
    pdf.para("The backend is organized into 20 Maven modules: a shared domain module (JPA entities, DTOs, enums), a common infrastructure module (security, caching, messaging, rate limiting), 17 feature modules (auth, wallet, deposit, withdraw, virtual-card, escrow, beneficiary, blacklist, history, investment, savings, maintenance, notification, bank, admin, bills, support), and a main bootstrap module that assembles them into a single deployable fat-JAR (epay-server.jar).")
    pdf.h3("Key Capabilities")
    pdf.bullet("User registration, login, 2FA/TOTP, KYC verification (3 tiers), password recovery")
    pdf.bullet("Multi-currency wallet with balances, transfers, swaps, PIN-protected transactions")
    pdf.bullet("Paystack integration for deposits (checkout) and withdrawals (bank transfers)")
    pdf.bullet("Virtual card creation with local card number generation (Luhn), spending limits, freeze/unfreeze/cancel")
    pdf.bullet("Transaction history with a state machine (INITIATED -> PROCESSING -> DELIVERED -> SETTLED)")
    pdf.bullet("Investment plans (weekly/monthly/quarterly/yearly) with profit calculation")
    pdf.bullet("Bill payments: airtime, data, cable TV, electricity, betting, shopping")
    pdf.bullet("Monthly maintenance fee engine with debt tracking and automated recovery")
    pdf.bullet("Support tickets, FAQ/knowledge base, keyword-based chat assistant")
    pdf.bullet("Admin panel: user management, wallet controls, transaction oversight, liquidity monitoring")
    pdf.bullet("Developer portal: API keys, webhooks, sandbox/live modes")
    pdf.bullet("Full observability stack: Prometheus, Grafana, Loki, Alertmanager, Zipkin, cAdvisor")

    # ── 2. Architecture & Module Structure ──
    pdf.add_page()
    pdf.h1("2. Architecture & Module Structure")
    pdf.h2("Layered Architecture")
    pdf.para("The project follows a layered modular monolith pattern. All modules share a single Spring ApplicationContext via component scanning rooted at com.epay. The layers are:")
    pdf.table(
        ["Layer", "Modules", "Role"],
        [
            ["0 - Foundation", "domain", "JPA entities, DTOs, input records, enums, repository interfaces. No internal deps."],
            ["1 - Infrastructure", "common", "Security (JWT, rate limiting, firewall), caching (Redis), messaging (RabbitMQ), exception handling, port interfaces. Depends on domain."],
            ["2 - Feature", "auth, wallet, deposit, withdraw, virtual_card, escrow, beneficiary, blacklist, history, investment, savings, maintenance, notification, bank, bills, support", "Controllers, services, gateway clients. Depend on domain + common (and occasionally each other via ports)."],
            ["3 - Aggregation", "admin, main", "admin aggregates most feature modules for back-office. main depends on everything and is the only bootable artifact."],
        ],
        [35, 65, 90]
    )
    pdf.h2("Module Dependency Graph")
    pdf.para("Cross-module coupling is mostly mediated through port interfaces defined in common (hexagonal style) and RabbitMQ events. Direct feature-to-feature dependencies:")
    pdf.bullet("virtual_card -> wallet (debit issuance fees)")
    pdf.bullet("escrow -> auth, wallet, notification (but escrow is currently an empty scaffold)")
    pdf.bullet("bills -> wallet, history")
    pdf.bullet("investment -> wallet, history, notification")
    pdf.bullet("savings -> wallet, investment, notification, history (savings is also an empty scaffold)")
    pdf.bullet("maintenance -> wallet, savings, investment, notification, history")
    pdf.bullet("admin -> domain, common, auth, wallet, deposit, withdraw, virtual_card, escrow, beneficiary, blacklist, maintenance")
    pdf.para("The main module's EpayApplication class uses @SpringBootApplication(scanBasePackages=\"com.epay\") and @EnableJpaRepositories(basePackages=\"com.epay\") to wire all modules into one context. It also enables @EnableScheduling and @EnableAsync.")

    # ── 3. Technology Stack ──
    pdf.add_page()
    pdf.h1("3. Technology Stack")
    pdf.table(
        ["Category", "Technology", "Version / Notes"],
        [
            ["Language", "Java", "21 (LTS)"],
            ["Framework", "Spring Boot", "4.1.0"],
            ["Build", "Maven (multi-module)", "20 modules, parent POM inheritance"],
            ["Database", "PostgreSQL", "16-alpine (Docker)"],
            ["ORM", "Hibernate / Spring Data JPA", "ddl-auto: validate, batch_size: 5000"],
            ["Cache", "Redis (Lettuce)", "7-alpine, JSON serialization, Caffeine local cache"],
            ["Message Broker", "RabbitMQ", "3.13-management-alpine, 3 topic exchanges, ~23 queues"],
            ["JWT", "jjwt (io.jsonwebtoken)", "0.11.5, HS256"],
            ["Rate Limiting", "Bucket4j + Lettuce/Redis", "8.7.0, distributed buckets"],
            ["API Docs", "springdoc-openapi", "2.8.5, gated by SWAGGER_ENABLED env"],
            ["Mapping", "MapStruct", "1.4.2.Final (declared, no @Mapper found in source)"],
            ["Security", "Spring Security", "Custom JWT filter chain, StrictHttpFirewall"],
            ["SMS/WhatsApp", "Twilio SDK", "10.5.1 (configured, send not implemented)"],
            ["PDF", "iText 7", "7.2.5 (auth module, bank statement PDFs)"],
            ["TOTP", "dev.samstevens.totp", "1.7.1 (2FA code generation)"],
            ["Code Quality", "Lombok", "1.18.40"],
            ["Testing", "JUnit 5, Testcontainers, RestAssured, WireMock, H2, k6", "Integration + unit + smoke"],
            ["Observability", "Micrometer + Prometheus + Zipkin", "Tracing 0.1 sample rate"],
            ["Load Balancer", "NGINX", "Custom build with WAF, caching, rate limiting"],
            ["Containerization", "Docker / Docker Compose", "eclipse-temurin:21-jdk-alpine"],
            ["CI/CD", "GitHub Actions", "backend-ci, security-scan, deploy workflows"],
        ],
        [30, 60, 100]
    )

    # ── 4. Domain Model & Database Schema ──
    pdf.add_page()
    pdf.h1("4. Domain Model & Database Schema")
    pdf.para("The domain module (com.epay.domain) contains 48 JPA entities and 30 Spring Data JPA repository interfaces. Entities use PostgreSQL sequence generators (allocationSize=1) for Long IDs; virtual card entities use UUID strings. No Flyway/Liquibase migrations exist; schema is Hibernate-managed (ddl-auto: validate).")
    pdf.h2("Core Entities")
    pdf.h3("User (users)")
    pdf.para("Central auth entity implementing Spring Security's UserDetails. Fields: userUuid (UUID), email (unique), username (unique), password (BCrypt, write-only in JSON), role (USER/ADMIN/SUPER_USER/CUSTOMER_SERVICE/EDITOR), accountType, kycTier, kycStatus, enabled, emailVerified, phoneVerified, twoFactorEnabled, accountLocked + timestamp/reason, failedLoginAttempts, lastLoginAt, version (optimistic lock). @PrePersist generates UUID.")
    pdf.h3("Wallet (wallets)")
    pdf.para("One wallet per user (userId unique). Contains List<CurrencyBalance> as @OneToMany (EAGER, cascade ALL, orphanRemoval). Has convenience methods: getBalance(currency), getBalanceAmount(currency), hasCurrency(currency), addCurrency(balance), getDefaultBalance().")
    pdf.para("Note: balances were previously an @ElementCollection/@Embeddable, which caused Hibernate to DELETE+re-INSERT all rows on any change. They were promoted to a proper @Entity (CurrencyBalance) for targeted UPDATEs.")
    pdf.h3("CurrencyBalance (wallet_balances)")
    pdf.para("Linked to Wallet via @ManyToOne. Fields: currencyCode, balance (BigDecimal), isDefault, version. Unique constraint on (wallet_id, currency_code).")
    pdf.h3("Transaction (transactions)")
    pdf.para("The core ledger entity. Denormalized flat table (uses Long userId/walletId rather than JPA FKs). Fields: transactionId (unique String business ID), reference, idempotencyKey (unique), userId, walletId, counterpartyUserId/WalletId/AccountHolder, transactionType, debitCredit, channel, grossAmount, feeAmount, taxAmount, netAmount, previousBalance, availableBalance, runningBalance, currency, exchangeRate, currentStatus (TransactionStatus enum), statusTimeline (embedded TEXT), description, failureReason, ipAddress/deviceId/userAgent, publishAccess, adminNote, completedAt, version.")
    pdf.para("Transaction.advanceStatus() records state transitions into statusTimeline and sets completedAt for terminal statuses (DELIVERED, SETTLED, FAILED, CANCELLED, REVERSED). This entity also models deposits, withdrawals, escrow, savings, and bills via transaction_type and debitCredit discriminators, which is why those packages have no dedicated entities.")
    pdf.h2("Entity Summary by Module")
    pdf.table(
        ["Package", "Entities", "Count"],
        [
            ["auth", "User, KycVerification, KycDocument, AuthorizeUserVerification, TwoFactorAuthentication, PasswordResetToken, VerificationToken, NextOfKin, UserRecord, UserTracer, UserAccountSettings, UserAccountCases, UserAttempt", "13"],
            ["wallet", "Wallet, CurrencyBalance, WalletSettings, SupportedCurrency", "4"],
            ["virtual_card", "VirtualCard, CardLimit, CardControl, CardFeeConfig, CardAuditLog", "5"],
            ["history", "Transaction, TransactionHistory, TransactionAuditLog, TransactionStateEntry, TransactionStatusHistory, TransactionAllowedTransition", "6"],
            ["developer", "DeveloperApp, ApiKey, AppWebhook, WebhookDeliveryLog", "4"],
            ["maintenance", "MaintenanceFeeConfig, MaintenanceFeeTransaction, UserDebt, UserMonthlyActivity, MaintenanceFeeAuditLog", "5"],
            ["support", "SupportTicket, TicketReply, SupportArticle, SupportFaq, ChatMessage", "5"],
            ["liquidity", "LiquidityConfig, PlatformLedger", "2"],
            ["investment", "Investment", "1"],
            ["bank", "UserBankList", "1"],
            ["beneficiary", "Beneficiary", "1"],
            ["blacklist", "BlacklistEntry", "1"],
        ],
        [35, 130, 25]
    )

    # ── 5. Security Architecture ──
    pdf.add_page()
    pdf.h1("5. Security Architecture")
    pdf.h2("Security Filter Chain")
    pdf.para("SecurityConfiguration (@EnableWebSecurity, @EnableMethodSecurity) defines two SecurityFilterChain beans:")
    pdf.bullet("Order 1 (publicFilterChain): Permits GET /support/faqs, GET /support/articles/**, POST /support/chat. Stateless, CSRF disabled.")
    pdf.bullet("Order 2 (filterChain): The main chain. CSRF disabled, STATELESS sessions. Filters before UsernamePasswordAuthenticationFilter: FirewallExceptionFilter -> BotDetectionFilter -> InputValidationFilter -> RateLimitingFilter -> JwtAuthenticationFilter -> RequestAuditFilter (after JWT).")
    pdf.h2("Authorization Rules")
    pdf.para("Public endpoints: /auth/**, /api/v1/auth/**, /error/**, /actuator/**, /webhook/**, swagger/docs, /static/**, /uploads/images/**, support GET endpoints.")
    pdf.para("Role-gated endpoints: /admin/super/** (SUPER_USER only), /admin/users/** (ADMIN/SUPER_USER/CUSTOMER_SERVICE), /admin/wallets/** (ADMIN/SUPER_USER/CUSTOMER_SERVICE), /admin/transactions/** (ADMIN/SUPER_USER/CUSTOMER_SERVICE), /admin/tickets/** (ADMIN/SUPER_USER/CUSTOMER_SERVICE/EDITOR), /tickets/** and /beneficiaries/** (USER), user lock/block operations by ADMIN/SUPER_USER, user delete by SUPER_USER.")
    pdf.para("Method-level security via @PreAuthorize with custom @security bean (SecurityExpressionMethods): isOwner(#userId), hasPermission('payment:create'), hasValidSession().")
    pdf.h2("StrictHttpFirewall")
    pdf.para("Blocks semicolons, backslashes, encoded percent/slash/null/line-feed/CR. Allows only GET/POST/PUT/DELETE/PATCH/OPTIONS/HEAD. Rejects hostnames containing '..' or '%2e' or '0x'.")
    pdf.h2("Security Headers")
    pdf.para("SecurityHeadersFilter (@Order HIGHEST_PRECEDENCE+10) sets: CSP (default-src 'self', script-src 'self', no inline), COOP same-origin, CORP (cross-origin for image paths, same-origin otherwise), HSTS (max-age 31536000, includeSubDomains), nosniff, X-Frame-Options SAMEORIGIN, X-XSS-Protection 0, Permissions-Policy (camera/mic/geo/payment all disabled), Referrer-Policy no-referrer, X-Request-Id, X-API-Version, X-Instance-ID.")
    pdf.h2("Bot Detection & Input Validation")
    pdf.para("BotDetectionFilter blocks missing User-Agent and known scanner UAs (sqlmap, nikto, nessus, hydra, zgrab, masscan, nmap, dirbuster, gobuster, nucleus, acunetix). Production-only scrapers (python-requests, scrapy, mechanize, libwww-perl) are blocked. Search-engine bots are restricted to /public, /, /robots.txt, /sitemap.")
    pdf.para("InputValidationFilter regex-blocks path traversal, SQLi, XSS, and suspicious characters in the full URL. Returns HTTP 400.")
    pdf.h2("Rate Limiting (Two-Tier)")
    pdf.para("Tier 1 - NGINX: limit_req_zone definitions for auth (10r/m), api (20r/s), strict (5r/s), per-user (100r/m keyed by JWT), DDoS (50r/s), connection limits (50 per IP).")
    pdf.para("Tier 2 - Application: RateLimitingFilter (Bucket4j + Redis/Lettuce). Route-specific buckets: auth (20 cap/5 refill per sec), wallet (30/10), user (50/10), default (100/10). Keyed by IP + group. Returns 429 with Retry-After and X-RateLimit-* headers. Fails open on errors.")
    pdf.h2("Global Exception Handling")
    pdf.para("GlobalExceptionHandler (@RestControllerAdvice) centralizes all error responses as structured ErrorResponse JSON with errorId (UUID), errorCode, message, timestamp, path, status, fieldErrors, retryAfter. Handles BaseException subclasses (25+ business exceptions), auth failures (401), access denied (403), validation errors (422 with fieldErrors), firewall rejections (400), and a global catch-all (500 with errorId for support). Card numbers and SSNs are sanitized in log messages.")

    # ── 6. Authentication & JWT ──
    pdf.add_page()
    pdf.h1("6. Authentication & Authorization (JWT)")
    pdf.h2("JWT Token Structure")
    pdf.para("JwtService generates HS256-signed tokens with Base64-encoded secret from JwtProperties. Access tokens expire in 15 minutes; refresh tokens in 7 days.")
    pdf.h3("Access Token Claims")
    pdf.bullet("jti: unique token ID")
    pdf.bullet("sid: session ID")
    pdf.bullet("sub: user UUID (subject)")
    pdf.bullet("roles: list of role names (USER, ADMIN, SUPER_USER, CUSTOMER_SERVICE, EDITOR)")
    pdf.bullet("permissions: derived from roles (payment:create, wallet:read, wallet:update, wallet:freeze, user:update, etc.)")
    pdf.bullet("userId: numeric user ID")
    pdf.bullet("accountId: base-36 encoded user ID")
    pdf.bullet("accountStatus: ACTIVE, LOCKED, or INACTIVE")
    pdf.bullet("kycLevel: user's KYC tier")
    pdf.bullet("amr: authentication methods (pwd, mfa, otp, bio)")
    pdf.bullet("acr: assurance level")
    pdf.bullet("auth_time: epoch seconds")
    pdf.bullet("session: {id, token_id}")
    pdf.bullet("token.type: ACCESS")
    pdf.bullet("iss: https://auth.epay.com, aud: Unified Dynamic Systems")
    pdf.h3("Refresh Token Claims")
    pdf.para("Contains session {id, token_id} and token.type=REFRESH. Longer expiry (7 days). Token rotation and blacklist are enabled. Maximum 5 active tokens per user.")
    pdf.h2("JwtAuthenticationFilter")
    pdf.para("OncePerRequestFilter that: (1) skips public endpoints via isPublicEndpoint allowlist; (2) extracts Bearer token; (3) rejects REFRESH tokens on non-refresh endpoints; (4) rejects LOCKED/INACTIVE accounts (403); (5) for admin roles builds a synthetic UserDetails (no DB lookup); for regular users loads via UserDetailsService and checks enabled/accountNonLocked; (6) validates token and sets SecurityContextHolder authentication; (7) errors return structured ErrorResponse JSON.")
    pdf.h2("Account Lockout")
    pdf.para("Progressive lockout after 3 failed attempts. Base duration 20 minutes, stepping 15 minutes per additional failure, max 1440 minutes (24h). Lockout state stored in Redis with 24h TTL. Tracks last 5 IP addresses per user.")
    pdf.h2("KYC Verification")
    pdf.para("Three-tier KYC system: TIER_1, TIER_2, TIER_3. Users upload documents (NATIONAL_ID, PASSPORT, etc.) via multipart upload. Admin reviews pending submissions and approves/rejects with mandatory reason on rejection. KYC tier stored on User entity.")

    # ── 7. API Reference: Auth ──
    pdf.add_page()
    pdf.h1("7. API Reference: Authentication Module")
    pdf.para("Base path: /auth (also accessible via /api/v1/auth through NGINX). All /auth/** endpoints are public (no JWT required).")
    pdf.h2("AuthController Endpoints")
    pdf.table(
        ["Method", "Path", "Description"],
        [
            ["POST", "/auth/register", "Create USER account, sends email verification code"],
            ["POST", "/auth/login", "Validate credentials, return JWT access token + refresh cookie"],
            ["POST", "/auth/send-verify-code", "Send verification code via email/phone (identifier + method)"],
            ["GET", "/auth/verify", "Activate account via verification token + user ID"],
            ["GET", "/auth/resend-verification", "Regenerate and resend activation email"],
            ["POST", "/auth/forgot-password", "Send one-time password reset link to registered email"],
            ["POST", "/auth/reset-password", "Validate reset token and apply new password"],
            ["POST", "/auth/forgot-username", "Send username to registered email"],
            ["GET", "/auth/logout", "Invalidate session and clear auth cookies"],
        ],
        [20, 60, 110]
    )
    pdf.h2("UserController Endpoints (/user)")
    pdf.table(
        ["Method", "Path", "Description"],
        [
            ["GET", "/user/profile", "Own profile (UserRecordDTO)"],
            ["GET", "/user/{userId}", "Full profile by ID (FullUserProfileDTO)"],
            ["GET", "/user/username/{username}", "Lookup by username"],
            ["PUT", "/user/profile", "Update own profile"],
            ["PUT", "/user/profile/{userId}", "Update profile by ID"],
            ["PUT", "/user/settings/notifications", "Toggle email/SMS/login-alert/marketing prefs"],
            ["PUT", "/user/settings/preferences", "Language, timezone, UX prefs"],
            ["POST", "/user/2fa/toggle", "Toggle TOTP 2FA"],
            ["DELETE", "/user/account", "Schedule account deletion (30-day window)"],
            ["PUT", "/user/settings/update-password", "Change password (verifies current)"],
            ["PUT", "/user/{id}/account/lock", "Lock account (ADMIN/SUPER_USER)"],
            ["PUT", "/user/{id}/account/block", "Permanently block account (ADMIN/SUPER_USER)"],
        ],
        [20, 65, 105]
    )
    pdf.h2("KYC Controller (/kyc)")
    pdf.table(
        ["Method", "Path", "Description"],
        [
            ["POST", "/kyc/documents", "Upload KYC document (multipart)"],
            ["GET", "/kyc/documents", "List own uploaded documents"],
            ["POST", "/kyc/submit/{tier}", "Submit docs for KYC tier review"],
            ["GET", "/kyc/admin/pending", "Paginated pending submissions (ADMIN/SUPER_USER)"],
            ["POST", "/kyc/admin/{id}/approve", "Approve + upgrade KYC tier"],
            ["POST", "/kyc/admin/{id}/reject", "Reject with mandatory reason"],
            ["GET", "/kyc/status", "Own KYC status + tier"],
        ],
        [20, 65, 105]
    )
    pdf.h2("Statement Controller (/receipt)")
    pdf.para("POST /receipt/generate-pdf/{userId} - Renders transaction list to PDF (iText 7) and emails it to the user.")

    # ── 8. Wallet Module ──
    pdf.add_page()
    pdf.h1("8. API Reference: Wallet Module")
    pdf.para("Base path: /wallet. Most endpoints require @PreAuthorize with role + @security.isOwner + @security.hasPermission checks.")
    pdf.h2("WalletController Endpoints")
    pdf.table(
        ["Method", "Path", "Description", "Auth"],
        [
            ["GET", "/wallet/userId/{userId}", "Get wallet + all currency balances", "owner + wallet:read"],
            ["GET", "/wallet/{userId}/balance/{currency}", "Single currency balance", "wallet:read"],
            ["POST", "/wallet", "Provision multi-currency wallet", "USER/ADMIN"],
            ["POST", "/wallet/{userId}/currencies", "Add currency slot", "USER"],
            ["PATCH", "/wallet/{userId}/currencies/{currency}/default", "Set default currency", "USER"],
            ["POST", "/wallet/create/{userId}/pin", "Set 4-digit transfer PIN (rate-limited)", "USER/ADMIN"],
            ["PUT", "/wallet/{userId}/pin", "Change PIN (verifies existing)", "USER"],
            ["POST", "/wallet/transfer", "Transfer to recipient by username (requires PIN)", "USER + payment:create + valid session"],
            ["POST", "/wallet/{userId}/swap", "Swap between currencies (requires PIN)", "USER + payment:create + valid session"],
            ["PATCH", "/wallet/balance", "Credit/debit any wallet (admin)", "ADMIN/SUPER_USER + wallet:update"],
            ["POST", "/wallet/refund", "Credit refund (admin)", "ADMIN/SUPER_USER + wallet:update"],
            ["POST", "/wallet/internal/maintenance/debit", "Maintenance fee debit", "ADMIN"],
            ["POST", "/wallet/internal/investment/debit", "Lock funds for investment", "ADMIN"],
            ["POST", "/wallet/internal/investment/credit", "Return matured investment + profit", "ADMIN"],
            ["POST", "/wallet/internal/savings/debit", "Lock funds for savings", "ADMIN"],
            ["POST", "/wallet/internal/savings/credit", "Return matured savings", "ADMIN"],
        ],
        [18, 55, 75, 42]
    )
    pdf.h2("AdminCurrencyController (/admin/currencies)")
    pdf.para("Full CRUD for supported currencies (create, update, enable/disable). ADMIN/SUPER_USER only. Creating a currency auto-adds it to existing wallets if defaultEligible is set.")

    # ── 9. Payment Integration ──
    pdf.add_page()
    pdf.h1("9. Payment Integration: Deposits & Withdrawals")
    pdf.h2("Deposits (Paystack)")
    pdf.para("Deposit flow: (1) POST /deposit/initiate creates a session with Paystack, returns a checkout URL; (2) user completes payment on Paystack; (3) Paystack sends webhook to POST /webhook/deposit/paystack (HmacSHA512 signed); (4) webhook handler validates signature, credits wallet on charge.success.")
    pdf.para("PaystackDepositGateway: init() calls PaystackClient.initializeTransaction() returning authorization_url. verify() does GET /transaction/verify/{reference} with bearer auth, converts kobo to major units. validateWebhookSignature() computes HmacSHA512 and compares to X-Paystack-Signature header.")
    pdf.para("Flutterwave: endpoint exists at POST /webhook/deposit/flutterwave but DepositGatewayFactory throws UnsupportedOperationException - not implemented.")
    pdf.h2("Withdrawals (Paystack)")
    pdf.para("Withdraw flow: (1) POST /withdrawals/user for internal wallet-to-wallet transfer; (2) POST /withdrawals/bank for external bank transfer via Paystack. Bank withdrawal creates a transfer recipient, initiates transfer, and if OTP is required, finalizes with transfer OTP.")
    pdf.para("WithdrawWebhookController (POST /webhook/withdraw/paystack) handles four event types:")
    pdf.bullet("charge.success: debits wallet, advances status to DELIVERED (only WDR_ prefixed references)")
    pdf.bullet("transfer.success: advances status to SETTLED")
    pdf.bullet("transfer.failed: advances status to FAILED, then auto-refunds wallet")
    pdf.bullet("transfer.reversed: advances status to REVERSED, then auto-refunds wallet")
    pdf.para("All webhook processing is idempotent via Redis IIdempotencyPort (24h TTL, keyed by reference+event). Auto-refunds use a separate idempotency key (refund:withdraw:{reference}).")
    pdf.h2("Paystack Payout Flow")
    pdf.code("1. POST /transferrecipient (create nuban recipient) -> recipient_code\n2. POST /transfer (source=balance, amount in kobo, recipient, reference) -> transfer_code + status\n3. If status == 'otp': POST /transfer/finalize_transfer (transfer_code, otp)\n4. Treats 'success'/'pending' as success")
    pdf.para("Transfer OTP defaults to env PAYSTACK_TRANSFER_OTP (123456 in dev). If unset, returns a clear failure explaining how to disable Transfer OTP in the Paystack dashboard.")

    # ── 10. Virtual Cards ──
    pdf.add_page()
    pdf.h1("10. Virtual Cards")
    pdf.para("Fully implemented module for issuing and managing virtual cards. Card numbers are generated locally using SecureRandom with Luhn check digit validation (BIN '4' for VISA, '5' for Mastercard). CVV is 3 random digits. Cards expire 3 years from creation.")
    pdf.h2("VirtualCardController Endpoints (/virtual-cards)")
    pdf.table(
        ["Method", "Path", "Description"],
        [
            ["POST", "/virtual-cards", "Create card, charge issuance fee, return details"],
            ["GET", "/virtual-cards/{cardId}", "Get card (masked number/CVV)"],
            ["GET", "/virtual-cards/{cardId}/details", "Get full details (unmasked, valid session required)"],
            ["GET", "/virtual-cards/user/{userId}", "All cards for user (flat list)"],
            ["GET", "/virtual-cards/user/{userId}/paginated", "Paginated cards with sorting"],
            ["GET", "/virtual-cards/user/{userId}/active", "Active (non-frozen) cards"],
            ["PUT", "/virtual-cards/{cardId}", "Update card metadata/controls"],
            ["PUT", "/virtual-cards/{cardId}/status", "Transition status"],
            ["PATCH", "/virtual-cards/{cardId}/balance", "Add/subtract balance"],
            ["DELETE", "/virtual-cards/{cardId}", "Delete card"],
            ["POST", "/virtual-cards/{cardId}/freeze", "Freeze card temporarily"],
            ["POST", "/virtual-cards/{cardId}/unfreeze", "Restore frozen card to ACTIVE"],
            ["POST", "/virtual-cards/{cardId}/cancel", "Permanently cancel (irreversible)"],
            ["GET", "/virtual-cards/count", "Total non-deleted cards platform-wide"],
        ],
        [20, 65, 105]
    )
    pdf.h2("Card Lifecycle")
    pdf.para("Cards start in PENDING status. Status transitions: PENDING -> ACTIVE (via unfreeze), ACTIVE -> FROZEN (via freeze), FROZEN -> ACTIVE (via unfreeze), any -> CANCELLED (via cancel, irreversible).")
    pdf.h2("Issuance Fees")
    pdf.para("CardFeeConfig entity (table card_fee_config, unique currency+cardType) stores fee amounts. On creation, VirtualCardService looks up the config by currency+cardType and debits the wallet if active. If no config exists or is inactive, the card is issued free. CardFeeConfigSeeder seeds default configs for 10 currencies x VISA/Mastercard on startup.")
    pdf.h2("Card Limits")
    pdf.para("Each card gets a CardLimit entity with hardcoded defaults on creation: max transaction 10,000, min 1, daily limit 5,000, weekly 20,000, monthly 50,000, daily transaction count 50. Reset timestamps computed at creation.")
    pdf.h2("Known Gaps")
    pdf.bullet("CardAuditLog entity and repository exist but VirtualCardService never writes audit log entries")
    pdf.bullet("CardControl entity (rich card controls with blocked countries/merchants) is defined but never read/written")
    pdf.bullet("getActiveCardsByUserId queries status == AUTHORIZED but nothing sets that status (createCard sets PENDING, unfreeze sets ACTIVE)")
    pdf.bullet("deleteCard is a hard DELETE, not a soft delete as documented")
    pdf.bullet("Sudo Cards API key is configured but not used - cards are generated locally")

    # ── 11. Transaction History ──
    pdf.add_page()
    pdf.h1("11. Transaction History & State Machine")
    pdf.h2("State Machine")
    pdf.para("HistoryService implements a transaction state machine with two graphs:")
    pdf.bullet("External graph (transfers): INITIATED -> PROCESSING -> AUTHORIZED -> SETTLEMENT_PENDING -> DELIVERED (with FAILED branches at each state)")
    pdf.bullet("Internal graph (non-transfers): INITIATED -> PROCESSING -> DELIVERED (with FAILED branches)")
    pdf.para("advanceStatus() validates the transition, updates the entity, upserts state entries, appends status history, and writes audit entries. Terminal statuses (DELIVERED, SETTLED, FAILED, CANCELLED, REVERSED) set completedAt.")
    pdf.h2("HistoryController Endpoints (/history)")
    pdf.table(
        ["Method", "Path", "Description"],
        [
            ["GET", "/history", "Own paginated history (max 100 per page)"],
            ["GET", "/history/user/{userId}", "By user"],
            ["GET", "/history/type/{type}", "Filter by transaction type"],
            ["GET", "/history/status/{status}", "Filter by status"],
            ["GET", "/history/user/{userId}/filter", "Multi-criteria (date, type, currency, status)"],
            ["GET", "/history/{transactionId}", "Single transaction"],
            ["GET", "/history/{transactionId}/timeline", "State machine + status history"],
            ["GET", "/history/summary?type=", "Total delivered amount for a type"],
            ["GET", "/history/admin/wallet/{walletId}", "Admin: by wallet"],
            ["GET", "/history/admin/audit/{transactionId}", "Admin audit trail"],
            ["GET", "/history/admin/reference/{reference}", "Admin: lookup by reference"],
            ["DELETE", "/history/{transactionId}", "Soft-hide from user (preserved for admin)"],
            ["PATCH", "/history/admin/{transactionId}/restore", "Restore hidden transaction"],
        ],
        [20, 70, 100]
    )
    pdf.h2("History Adapters")
    pdf.para("DepositHistoryAdapter and GeneralHistoryAdapter implement the history-recording port interface (IHistoryPort) so other modules can record transactions without depending on the controller. The deposit and withdraw modules use these adapters to advance transaction statuses via webhook callbacks.")

    # ── 12-13. Investment & Bills ──
    pdf.add_page()
    pdf.h1("12. Investment Module")
    pdf.para("Fixed-term investment plans with profit calculation. Users lock principal from their wallet into a plan; on maturity, principal + profit is returned.")
    pdf.h2("Investment Plans (Hardcoded)")
    pdf.table(
        ["Plan", "Duration", "Annual Rate", "Return Rate"],
        [
            ["WEEKLY", "7 days", "8%", "8%"],
            ["MONTHLY", "30 days", "12%", "12%"],
            ["QUARTERLY", "90 days", "18%", "18%"],
            ["YEARLY", "365 days", "24%", "24%"],
        ],
        [40, 50, 50, 50]
    )
    pdf.h2("InvestmentController Endpoints (/investments)")
    pdf.bullet("GET /investments/plans - List all available plans")
    pdf.bullet("POST /investments/calculate - Preview profit/payout from principal + duration + currency")
    pdf.bullet("POST /investments/create - Lock funds from wallet into a plan (requires payment:create + valid session)")
    pdf.bullet("GET /investments/user/{userId} - User's investments (owner check)")
    pdf.bullet("GET /investments/{id}?userId= - Single investment by ID")
    pdf.sep()
    pdf.h1("13. Bills Payment")
    pdf.para("Bill payments module supporting six bill categories. All endpoints are POST-only, role USER, require payment:create permission and valid session. Each deducts from the wallet and processes the bill.")
    pdf.h2("BillsController Endpoints (/bills)")
    pdf.table(
        ["Method", "Path", "Description"],
        [
            ["POST", "/bills/airtime", "Airtime top-up"],
            ["POST", "/bills/data", "Data subscription"],
            ["POST", "/bills/cabletv", "Cable TV (DSTV/GOTV/STARTIMES)"],
            ["POST", "/bills/electricity", "Electricity (prepaid token / postpaid)"],
            ["POST", "/bills/betting", "Fund betting wallet"],
            ["POST", "/bills/shopping", "Pay shopping order"],
        ],
        [20, 55, 115]
    )

    # ── 14. Maintenance ──
    pdf.add_page()
    pdf.h1("14. Maintenance Fee Engine")
    pdf.para("A scheduled batch engine that charges monthly maintenance fees. No direct REST controllers - all endpoints are exposed via AdminMaintenanceFeeController in the admin module (~35 endpoints).")
    pdf.h2("Monthly Batch Process")
    pdf.bullet("Scheduler: @Scheduled(cron = \"0 30 0 1 * *\" - 00:30 on the 1st of each month)")
    pdf.bullet("Distributed lock via Redis to prevent concurrent runs")
    pdf.bullet("Batch size: 500 users per batch")
    pdf.bullet("Admin can trigger manually via POST /admin/maintenance/batch/trigger (SUPER_USER)")
    pdf.h2("Fee Configuration")
    pdf.para("MaintenanceFeeConfig supports FIXED or PERCENTAGE fees per currency. FeeType enum: FIXED, PERCENTAGE. Configs are per-currency with minimum/maximum fee bounds.")
    pdf.h2("Fee Transaction Lifecycle")
    pdf.para("Statuses: PENDING -> DEDUCTED (fee deducted from wallet), PENDING -> DEBT (insufficient balance, recorded as debt), DEBT -> PARTIAL (partial recovery), DEBT/PARTIAL -> REPAID (full recovery), -> WAIVED (admin waives), -> FAILED.")
    pdf.h2("Debt Tracking")
    pdf.para("UserDebt entity tracks total debt per user+currency. Debt aging report: 0-30 days, 31-60, 61-90, 90+ days. DebtRecoveryService recovers debt from future wallet credits automatically.")
    pdf.h2("Monthly Activity Tracking")
    pdf.para("UserMonthlyActivity tracks transaction count and total volume per user+currency+month. Used to determine if a user had activity (and thus owes a maintenance fee) for a given month.")

    # ── 15. Support ──
    pdf.add_page()
    pdf.h1("15. Support System")
    pdf.h2("Chat Assistant")
    pdf.para("ChatService implements a deterministic, local keyword/token-overlap scoring system - NOT an external LLM/AI. It tokenizes user queries (stop-word filtered), scores every active FAQ and article by token overlap (question tokens x3, category x1, answer x1, title x4, summary x2, content x1, substring bonus x5), and returns the best match. Handles greetings/thanks/goodbyes with canned replies.")
    pdf.h2("SupportController Endpoints (/support)")
    pdf.table(
        ["Method", "Path", "Description"],
        [
            ["POST", "/support/chat", "Chat with assistant (public, no auth)"],
            ["GET", "/support/articles", "All published articles (public)"],
            ["GET", "/support/articles/{slug}", "Article by slug (public)"],
            ["GET", "/support/faqs", "FAQs grouped by category (public)"],
            ["POST", "/support/tickets", "Create support ticket (USER)"],
            ["GET", "/support/tickets/user/{userId}", "User's tickets (USER)"],
            ["GET", "/support/tickets/{reference}?userId=", "Ticket by reference (USER)"],
        ],
        [20, 70, 100]
    )
    pdf.h2("Support Data Model")
    pdf.bullet("SupportTicket: subject, description, status (OPEN/IN_PROGRESS/RESOLVED/CLOSED/ESCALATED), priority, category, assignedTo, relatedTransactionId, internal notes, escalation tracking")
    pdf.bullet("TicketReply: authorId, content, createdAt (OneToMany on SupportTicket)")
    pdf.bullet("SupportArticle: slug (unique), category, title, content, active")
    pdf.bullet("SupportFaq: category, question, answer, active")
    pdf.bullet("ChatMessage: sessionId, userId, role, content, createdAt")
    pdf.para("SupportDataSeeder seeds default articles and FAQs on startup.")

    # ── 16. Admin & Developer Portal ──
    pdf.add_page()
    pdf.h1("16. Admin Panel & Developer Portal")
    pdf.h2("Admin Module Overview")
    pdf.para("11 controllers providing comprehensive back-office functionality. All admin controllers inject JwtClaimsHolder to capture the acting admin/staff ID for audit trails.")
    pdf.h3("Admin Controllers")
    pdf.table(
        ["Controller", "Base Path", "Key Functions"],
        [
            ["AdminMaintenanceFeeController", "/admin/maintenance", "~35 endpoints: dashboard, fee config CRUD, fee transactions, debt ledger, reports, batch trigger"],
            ["AdminUserController", "/admin/users", "Search, CRUD, block/unblock, lock/unlock, stats"],
            ["AdminTransactionController", "/admin/transactions", "Search, view, add notes, flag (AML)"],
            ["AdminWalletController", "/admin/wallets", "List, freeze/unfreeze, set/reset PIN, stats"],
            ["AdminTicketController", "/admin/tickets", "Full ticket lifecycle: assign, resolve, close, escalate"],
            ["SuperAdminController", "/admin/super", "Staff CRUD, role management (SUPER_USER only)"],
            ["AdminDeveloperController", "/admin/developer", "App management, key rotation, webhook testing, logs"],
            ["AdminLiquidityController", "/admin/liquidity", "Paystack/Flutterwave balance sync, payout checks, config"],
            ["AdminCardFeeController", "/admin/virtual-cards/fees", "Card fee config CRUD"],
            ["UserTicketController", "/tickets", "User-facing ticket creation and replies"],
        ],
        [50, 45, 95]
    )
    pdf.h2("Developer Portal")
    pdf.para("DeveloperPortalController (/developer) provides a self-service API for developers to create apps, manage API keys (sandbox/live modes), configure webhooks with event subscriptions, test webhook deliveries, and view delivery logs. WebhookDeliveryLog tracks each delivery attempt with HTTP status, response body, error message, attempt number, and duration.")
    pdf.h3("Developer Entities")
    pdf.bullet("DeveloperApp: ownerUserId, appName, mode (TEST/LIVE), liveApproved, apiKeys (OneToMany), webhooks (OneToMany)")
    pdf.bullet("ApiKey: publicKey (unique), secretKeyHash, secretKeyPrefix, status, lastUsedAt, requestCount, revokedAt/By")
    pdf.bullet("AppWebhook: url, signingSecret, subscribedEvents, success/failureCount, lastDeliveryAt/Status")
    pdf.bullet("WebhookDeliveryLog: webhookId, eventType, targetUrl, payload, status, httpStatusCode, attemptNumber, nextRetryAt")

    # ── 17. Notification System ──
    pdf.add_page()
    pdf.h1("17. Notification System (RabbitMQ)")
    pdf.h2("RabbitMQ Topology")
    pdf.para("RabbitMQConfig (common module) declares 3 TopicExchanges and ~23 durable queues.")
    pdf.h3("Exchanges")
    pdf.bullet("auth.notifications - authentication-related events")
    pdf.bullet("wallet.notifications - wallet/financial events")
    pdf.bullet("account.notifications - account-level events")
    pdf.h3("Queues by Category")
    pdf.table(
        ["Category", "Queues"],
        [
            ["Auth", "account.verification, auth.login.alert, user.otp, auth.user.otp, password.reset, registration.otp, welcome.message, auth.forgot.password.otp, auth.account.security, auth.forgot.username"],
            ["Wallet", "credit.wallet, debit.wallet, wallet.deposit, maintenance.wallet, maintenance.debt, swap.wallet, account.statement, block.user.wallet, wallet.pin.alert"],
        ],
        [30, 160]
    )
    pdf.h2("Notification Flow")
    pdf.para("Feature modules publish events via notification publishers (AuthNotificationPublisher, WalletNotificationMessageProducer) which implement port interfaces from common. The notification module's listeners (@RabbitListener in AuthNotificationListener, WalletNotificationListener) consume the queues and dispatch to email services (AuthenticationNotificationService, WalletNotificationService).")
    pdf.para("Email delivery uses JavaMailSender (Gmail SMTP) with Thymeleaf HTML templates. All email sends are @Async returning CompletableFuture<Void>.")
    pdf.h2("Known Gap: SMS/WhatsApp")
    pdf.para("Twilio SDK is configured (TwilioConfig calls Twilio.init in @PostConstruct) and SMS/WhatsApp requests are initiated in the auth module's MessagingService, but no code actually calls the Twilio REST API to send messages (com.twilio.rest / Message.creator not found anywhere in the codebase). The notification module delivers email only.")

    # ── 18. Supporting Modules ──
    pdf.add_page()
    pdf.h1("18. Supporting Modules (Beneficiary, Bank, Blacklist)")
    pdf.h2("Beneficiary Module")
    pdf.para("CRUD for saved beneficiaries (BANK or USER type). BANK type requires accountNumber, accountName, bankCode, bankName. USER type requires recipientUsername (validated against UserRepository). Duplicate checks per userId+accountNumber/username. Soft delete (isActive=false) with bulk delete support.")
    pdf.h3("Endpoints (/beneficiaries)")
    pdf.bullet("POST /create - Create beneficiary (USER role)")
    pdf.bullet("GET /{userId}/all - All beneficiaries for user")
    pdf.bullet("GET /{id}?userId= - By ID")
    pdf.bullet("GET /{userId}/type?type=BANK|USER - Filter by type")
    pdf.bullet("GET /{userId}/search?q= - Search by name/account/username")
    pdf.bullet("GET /{id}/verify?userId= - Verify beneficiary")
    pdf.bullet("GET /{userId}/username/{recipientUsername} - By username")
    pdf.bullet("PUT /{id} - Update")
    pdf.bullet("DELETE /{id}?userId= - Soft delete")
    pdf.bullet("DELETE /bulk - Bulk soft delete")
    pdf.sep()
    pdf.h2("Bank Module")
    pdf.para("User bank account management with Paystack integration for bank list and account verification.")
    pdf.h3("Endpoints (/bank)")
    pdf.bullet("POST /bank - Save bank account")
    pdf.bullet("GET /bank/user/{userId} - List user's banks")
    pdf.bullet("GET /bank/{id} - By ID")
    pdf.bullet("DELETE /bank - Delete by IDs")
    pdf.bullet("GET /bank/list - List all Nigerian banks from Paystack")
    pdf.bullet("GET /bank/verify?accountNumber=&bankCode= - Verify account via Paystack (resolve holder name)")
    pdf.para("BankWebClientConfig defines a WebClient bean with baseUrl https://api.paystack.co and Bearer auth from PAYSTACK_SECRET_KEY.")
    pdf.sep()
    pdf.h2("Blacklist Module")
    pdf.para("Admin-only blacklist management (ADMIN/SUPER_USER). Supports IP, ACCOUNT, and ACCOUNT_NUMBER types. Redis-first check with DB fallback and 300s cache TTL. BlacklistCheckAdapter implements IBlacklistPort for other modules to consume.")
    pdf.h3("Endpoints (/admin/blacklist)")
    pdf.bullet("POST /admin/blacklist - Add entry (type, value, userId, reason, addedBy, expiresAt)")
    pdf.bullet("DELETE /admin/blacklist/{id} - Remove (deactivate)")
    pdf.bullet("GET /admin/blacklist/check/account/{userId} - Check if account is blacklisted")
    pdf.bullet("GET /admin/blacklist/check/ip/{ip} - Check if IP is blacklisted")

    # ── 19. Configuration ──
    pdf.add_page()
    pdf.h1("19. Configuration Reference")
    pdf.h2("application.yaml Structure")
    pdf.para("The authoritative configuration file is at epay/main/src/main/resources/application.yaml. Key sections:")
    pdf.h3("Database (PostgreSQL/Hikari)")
    pdf.bullet("Hikari: auto-commit false, min-idle 5, max-pool 10, idle-timeout 30s, connection-timeout 20s, max-lifetime 1200s, leak-detection 60s")
    pdf.bullet("JPA: open-in-view disabled, ddl-auto: validate, batch_size: 5000, order_inserts/updates: true")
    pdf.h3("Redis (Lettuce)")
    pdf.bullet("Pool: max-active 8, max-idle 4, min-idle 1, timeout 2s")
    pdf.h3("RabbitMQ")
    pdf.bullet("Listener: concurrency 3, max-concurrency 10, prefetch 5 (from docker-compose env)")
    pdf.h3("JWT Security")
    pdf.bullet("Algorithm: HS256, access token: 15 min, refresh: 7 days")
    pdf.bullet("Token rotation: enabled, grace period 5 min")
    pdf.bullet("Token blacklist: enabled, cleanup interval 60 min, max 10000 entries")
    pdf.bullet("Max 5 tokens per user, MFA disabled")
    pdf.bullet("Cookie: jwt-token, HttpOnly, Secure, SameSite=Strict")
    pdf.h3("Account Lockout")
    pdf.bullet("Max 3 attempts, base 20 min, step 15 min, max 1440 min, fail-window 30 min")
    pdf.h3("Rate Limiting")
    pdf.bullet("Default: 100 capacity / 10 refill per sec")
    pdf.bullet("Auth: 20/5, Wallet: 30/10, User: 50/10")
    pdf.h3("Risk Scoring")
    pdf.bullet("High-frequency: 20 txns in 60 min, high-volume: 5M in 60 min")
    pdf.bullet("Rapid-cycle: 3 outbound in 30 min, failed-tx: 10")
    pdf.bullet("New account: 24h, min account age: 30 min")
    pdf.bullet("Soft block: 60, hard block: 80")
    pdf.h3("Payment Gateways")
    pdf.bullet("Paystack: secret-key, transfer-otp")
    pdf.bullet("Flutterwave: secret-key, public-key (not implemented)")
    pdf.bullet("Sudo Cards: api-key (configured but not used)")
    pdf.h3("Maintenance & Liquidity")
    pdf.bullet("Maintenance cron: 0 30 0 1 * * (monthly), batch-size: 500")
    pdf.bullet("Liquidity sync interval: 30 min")
    pdf.h3("Actuator & Tracing")
    pdf.bullet("Exposes: health, info, metrics, prometheus")
    pdf.bullet("Tracing: 0.1 sample rate, Zipkin export to http://zipkin:9411/api/v2/spans")
    pdf.h3("Swagger")
    pdf.bullet("Gated by SWAGGER_ENABLED env (default false)")
    pdf.bullet("UI path: /docs, API docs: /v3/api-docs")

    # ── 20. Infrastructure ──
    pdf.add_page()
    pdf.h1("20. Infrastructure & Deployment")
    pdf.h2("Docker Setup")
    pdf.para("Dockerfile: Single-stage runtime (eclipse-temurin:21-jdk-alpine). Copies pre-built epay-server.jar. JVM flags: -XX:TieredStopAtLevel=1 (fast startup, no C2 JIT), -Xss512k, -XX:+UseContainerSupport, -XX:MaxRAMPercentage=75.0.")
    pdf.h2("Docker Compose Stack")
    pdf.table(
        ["Service", "Image", "Port", "Notes"],
        [
            ["epay-server-1", "epay-server:latest", "8021->8029", "Spring Boot, health check via actuator/health, 120s start period"],
            ["frontend-1", "epay-frontend:latest", "3001->3000", "Next.js standalone, health check via wget"],
            ["nginx", "epay-nginx:latest", "80/443/8080", "WAF, rate limiting, caching, load balancer"],
            ["postgres", "postgres:16-alpine", "5432", "Health check via pg_isready"],
            ["redis", "redis:7-alpine", "6379", "AOF, 256mb maxmemory, allkeys-lru"],
            ["rabbitmq", "rabbitmq:3.13-mgmt-alpine", "5672/15672", "Health check via diagnostics ping"],
            ["zipkin", "openzipkin/zipkin", "9411", "In-memory storage, distributed tracing"],
            ["prometheus", "epay-prometheus", "9090", "15d retention, web lifecycle enabled"],
            ["grafana", "epay-grafana", "3010", "Piechart plugin, provisioned dashboards"],
            ["loki", "epay-loki", "3100", "Log aggregation"],
            ["promtail", "epay-promtail", "-", "Tails epay_logs + docker container logs"],
            ["alertmanager", "prom/alertmanager:v0.27", "9093", "Email routing, single-instance"],
            ["cadvisor", "gcr.io/cadvisor:v0.49.1", "8081", "Container metrics, privileged"],
            ["postgres-exporter", "prometheuscommunity", "9187", "PostgreSQL metrics"],
            ["redis-exporter", "oliver006/redis_exporter", "9121", "Redis metrics"],
            ["nginx-exporter", "nginx/nginx-prometheus-exporter", "9113", "NGINX stub_status metrics"],
        ],
        [35, 50, 35, 70]
    )
    pdf.h2("NGINX Configuration")
    pdf.para("Custom NGINX build with 14 conf.d files providing:")
    pdf.bullet("01-security-headers: X-Frame-Options, nosniff, CSP, Permissions-Policy, COOP/CORP")
    pdf.bullet("02-rate-limiting: 9 limit_req_zone definitions (auth, api, strict, global, bot, txn, ddos, per-user, per-ip)")
    pdf.bullet("04-upstreams: least_conn load balancing with keepalive, sticky websocket, weighted admin")
    pdf.bullet("06-server-https: Per-route locations with WAF rules (SQLi/XSS/path-traversal/scanner blocking), per-zone rate limiting, method allow-lists, body-size limits, per-route proxy_cache with differentiated TTLs (currencies 12h, history 5m, bank/settings 5m, user 2m, wallet 30s)")
    pdf.bullet("08-security-blocks: Global WAF deny rules for dot-files, sensitive paths, backup files, scanners, SQLi/XSS/path-traversal/command-injection")
    pdf.bullet("10-health-checks: /nginx-health, /backend-health, /metrics endpoints")
    pdf.bullet("12-stub-status: Internal metrics server on port 8080 for nginx-exporter")

    # ── 21. Monitoring ──
    pdf.add_page()
    pdf.h1("21. Monitoring & Observability")
    pdf.h2("Prometheus Scrape Jobs")
    pdf.table(
        ["Job", "Target", "Interval", "Path"],
        [
            ["epay-server", "epay-server-1:8029", "15s", "/actuator/prometheus"],
            ["nginx", "nginx-exporter:9113", "30s", "/metrics"],
            ["redis", "redis-exporter:9121", "30s", "/metrics"],
            ["rabbitmq", "rabbitmq:15692", "30s", "/metrics"],
            ["postgresql", "postgres-exporter:9187", "60s", "/metrics"],
            ["cadvisor", "cadvisor:8080", "30s", "/metrics"],
            ["prometheus", "localhost:9090", "15s", "/metrics"],
        ],
        [40, 55, 30, 65]
    )
    pdf.h2("Alert Rules (alert.rules.yml)")
    pdf.para("Alerts grouped under epay-alerts (30s evaluation):")
    pdf.bullet("Backend: InstanceDown, MultipleInstancesDown, HighCPU (>80%), HighMemory (<20% free), SlowResponse (p95>2s), HighErrorRate (5xx>5%), ConnectionPoolExhausted (>90%)")
    pdf.bullet("Load Balancer: LoadBalancerDown, LBHighErrorRate")
    pdf.bullet("Database: PostgreSQLDown, HighConnections (>100)")
    pdf.bullet("Redis: RedisDown, HighMemory (>80%)")
    pdf.bullet("RabbitMQ: RabbitMQDown, QueueHigh (>1000)")
    pdf.bullet("System: DiskUsage (>85%), RateLimitingHigh (429>10/s), HighFailedTransactions")
    pdf.h2("Alertmanager Routing")
    pdf.bullet("Critical severity -> email-critical (oncall@epay.app), group_wait 10s, repeat 1h")
    pdf.bullet("Payment services -> email-payments (payments-team@epay.app), repeat 2h")
    pdf.bullet("Warning severity -> email-team (team@epay.app), repeat 6h")
    pdf.bullet("Inhibition: suppresses warnings when critical fires for same service")
    pdf.h2("Grafana")
    pdf.para("Port 3010, admin/admin (dev default). Auto-provisioned dashboards and datasources from epay/monitoring/grafana/provisioning/. Piechart plugin installed.")
    pdf.h2("Loki & Promtail")
    pdf.para("Loki (port 3100) for log aggregation. Promtail tails epay_logs volume and Docker container logs, ships to Loki.")
    pdf.h2("Zipkin")
    pdf.para("Distributed tracing with in-memory storage. Spring Boot exports traces at 0.1 sample rate to http://zipkin:9411/api/v2/spans.")

    # ── 22. CI/CD ──
    pdf.add_page()
    pdf.h1("22. CI/CD Pipeline")
    pdf.h2("backend-ci.yml")
    pdf.para("Triggers on push/PR to main/develop for epay/** changes. Jobs:")
    pdf.bullet("unit-test: JDK 21, mvnw verify -P coverage, uploads surefire + JaCoCo reports, builds fat-JAR artifact")
    pdf.bullet("integration-test: Testcontainers (PostgreSQL, Redis, RabbitMQ), mvnw verify -P integration-test, on push only")
    pdf.bullet("k6-smoke: Spins up infra services, starts app, waits on actuator/health, runs k6/smoke.js load test")
    pdf.bullet("docker-build: Buildx, pushes to ghcr.io with branch+sha+latest tags, GHA cache")
    pdf.h2("security-scan.yml")
    pdf.para("Triggers on push/PR + weekly schedule. Jobs:")
    pdf.bullet("owasp-dependency-check: Maven plugin, failBuildOnCVSS=7 (but uses || true so non-blocking)")
    pdf.bullet("npm-audit: Frontend, critical level (|| true, non-blocking)")
    pdf.bullet("codeql: Java + JS, security-extended queries (continue-on-error: true)")
    pdf.bullet("trivy-image-scan: Scans both server and frontend images, CRITICAL/HIGH, --ignore-unfixed (exit-code 0, non-blocking)")
    pdf.h2("deploy.yml")
    pdf.para("Triggered on successful Backend CI + Frontend CI completion or manual dispatch. The actual SSH deployment (rolling restart of epay-server-1..3, health polling) is currently commented out - the workflow prints 'Deployment skipped (not yet hosted)'.")
    pdf.h2("Testing Stack")
    pdf.table(
        ["Tool", "Scope", "Notes"],
        [
            ["JUnit 5 + Spring Boot Test", "Unit tests", "Surefire, excludes IT tests"],
            ["Testcontainers", "Integration tests", "Real PostgreSQL, Redis, RabbitMQ. Failsafe plugin"],
            ["RestAssured + spring-mock-mvc", "API testing", "Fluent HTTP assertions"],
            ["WireMock", "Gateway stubs", "Stubs Paystack/Flutterwave calls"],
            ["H2", "In-memory DB", "Test profile database"],
            ["k6", "Smoke/load testing", "HTTP smoke test against running app"],
            ["JaCoCo", "Coverage", "60% line coverage check at verify, coverage profile for SonarQube"],
        ],
        [50, 45, 95]
    )

    # ── 23. Known Gaps ──
    pdf.add_page()
    pdf.h1("23. Known Gaps & Security Notes")
    pdf.h2("Unimplemented Features")
    pdf.bullet("Escrow module: Empty scaffold - no controllers, services, DTOs, or entities")
    pdf.bullet("Savings module: Empty scaffold - no Java source files")
    pdf.bullet("Flutterwave gateway: Referenced in enums and webhook endpoints but factory throws UnsupportedOperationException")
    pdf.bullet("Twilio SMS/WhatsApp: SDK initialized but no message-sending code exists in the codebase")
    pdf.bullet("Sudo Cards API: Key configured but not used; cards generated locally")
    pdf.bullet("CardAuditLog: Entity and repository defined but never populated by VirtualCardService")
    pdf.bullet("CardControl: Rich entity with blocked countries/merchants but never read/written")
    pdf.bullet("MapStruct: Declared in POM but no @Mapper-annotated interfaces found in source")
    pdf.bullet("getActiveCardsByUserId: Queries AUTHORIZED status but nothing sets that status")
    pdf.h2("Security Considerations")
    pdf.bullet("CORS: wildcard allowedOriginPatterns('*') with allowCredentials(true) in both SecurityConfiguration and CorsAutoConfiguration - overly permissive")
    pdf.bullet("Alertmanager: Plaintext SMTP credentials committed in alertmanager.yml")
    pdf.bullet("Docker defaults: Insecure dev secrets in docker-compose.yml (JWT secret, super-admin password, guest/guest RabbitMQ, admin/admin Grafana)")
    pdf.bullet("Redis: activateDefaultTyping(NON_FINAL) in RedisConnectionConfig - known deserialization gadget risk")
    pdf.bullet("CI security scans: All non-blocking (|| true, exit-code 0, continue-on-error) - vulnerabilities won't fail CI")
    pdf.h2("Architecture Notes")
    pdf.bullet("No database migration tooling (Flyway/Liquibase) - schema is Hibernate-managed with ddl-auto: validate")
    pdf.bullet("No @MappedSuperclass for auditing - each entity self-manages @CreationTimestamp/@UpdateTimestamp/@Version")
    pdf.bullet("Transaction entity is fully denormalized (Long userId/walletId rather than JPA FKs) for performance")
    pdf.bullet("Relationships are sparse: true JPA @OneToMany only in Wallet->CurrencyBalance; most links are plain ID columns")
    pdf.bullet("deleteCard is a hard DELETE (@Modifying DELETE) despite docs saying soft delete")
    pdf.bullet("SuperAdminSeeder and CardFeeConfigSeeder run as ApplicationRunner beans on every startup (idempotent)")

    # ── Save ──
    output_path = os.path.join(os.path.dirname(__file__), "ePay-Backend-Documentation.pdf")
    pdf.output(output_path)
    print(f"PDF generated: {output_path}")
    print(f"Pages: {pdf.page_no()}")
    return output_path

if __name__ == "__main__":
    generate()
