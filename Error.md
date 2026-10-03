Run java -jar main/target/epay-server.jar \
Waiting for app to start...
  Attempt 1/30: DOWN
11:59:36,436 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Missing watchable .xml or .properties files.
11:59:36,437 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Watching .xml files requires that the main configuration file is reachable as a URL

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v4.1.0)

2026-10-03 11:59:36 [main] INFO  com.epay.EpayApplication - Starting EpayApplication v1.0.0-SNAPSHOT using Java 21.0.12.1 with PID 2618 (/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar started by runner in /home/runner/work/epay-payment-system/epay-payment-system/epay)
2026-10-03 11:59:36 [main] INFO  com.epay.EpayApplication - The following 1 profile is active: "test"
2026-10-03 11:59:36 [background-preinit] INFO  o.h.validator.internal.util.Version - HV000001: Hibernate Validator 9.1.0.Final
  Attempt 2/30: DOWN
2026-10-03 11:59:38 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Multiple Spring Data modules found, entering strict repository configuration mode
2026-10-03 11:59:38 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Finished Spring Data repository scanning in 333 ms. Found 48 JPA repository interfaces.
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Multiple Spring Data modules found, entering strict repository configuration mode
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Bootstrapping Spring Data Redis repositories in DEFAULT mode.
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.AuthorizeUserVerificationRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.KycDocumentRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.KycVerificationRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.NextOfKinRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.PasswordResetTokenRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.TwoFactorOTPRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAccountCasesReportRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAccountSettingsRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAttemptRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserRecordRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserTracerRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.VerificationTokenRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.ApiKeyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.AppWebhookRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.DeveloperAppRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.WebhookDeliveryLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.investment.repository.InvestmentRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.liquidity.repository.LiquidityConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.liquidity.repository.PlatformLedgerRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.ChatMessageRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportArticleRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportFaqRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportTicketRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.TicketReplyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardAuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardControlRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardFeeConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardLimitRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.VirtualCardRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.bank.repository.UserBankRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.CurrencyBalanceRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.SupportedCurrencyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.WalletRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.WalletSettingsRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.beneficiary.repository.BeneficiaryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.blacklist.repository.BlacklistRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeAuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeTransactionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.UserDebtRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.UserMonthlyActivityRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.AuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionAllowedTransitionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionHistoryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionStateEntryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionStatusHistoryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:59:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Finished Spring Data repository scanning in 32 ms. Found 0 Redis repository interfaces.
2026-10-03 11:59:41 [main] INFO  o.s.boot.tomcat.TomcatWebServer - Tomcat initialized with port 8029 (http)
2026-10-03 11:59:41 [main] INFO  o.a.coyote.http11.Http11NioProtocol - Initializing ProtocolHandler ["http-nio-8029"]
2026-10-03 11:59:41 [main] INFO  o.a.catalina.core.StandardService - Starting service [Tomcat]
2026-10-03 11:59:41 [main] INFO  o.a.catalina.core.StandardEngine - Starting Servlet engine: [Apache Tomcat/11.0.22]
2026-10-03 11:59:41 [main] INFO  o.s.b.w.c.s.WebApplicationContextInitializer - Root WebApplicationContext: initialization completed in 4383 ms
2026-10-03 11:59:41 [main] INFO  c.e.c.c.l.LoggingAutoConfiguration - Initializing http header log filter
2026-10-03 11:59:41 [main] INFO  c.e.c.c.l.LoggingAutoConfiguration - Initializing servlet access log filter
2026-10-03 11:59:42 [main] INFO  org.hibernate.orm.jpa - HHH008540: Processing PersistenceUnitInfo [name: default]
2026-10-03 11:59:42 [main] INFO  org.hibernate.orm.core - HHH000001: Hibernate ORM core version 7.4.1.Final
2026-10-03 11:59:42 [main] INFO  o.s.o.j.p.SpringPersistenceUnitInfo - No LoadTimeWeaver setup: ignoring JPA class transformer
  Attempt 3/30: DOWN
2026-10-03 11:59:43 [main] WARN  org.hibernate.orm.deprecation - HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-10-03 11:59:43 [main] INFO  o.hibernate.orm.connections.pooling - HHH10001005: Database info:
	Database JDBC URL [jdbc:postgresql://localhost:5432/epay]
	Database driver: PostgreSQL JDBC Driver
	Database dialect: PostgreSQLDialect
	Database version: 16.15
	Default catalog/schema: epay/public
	Autocommit mode: undefined/unknown
	Isolation level: READ_COMMITTED [default READ_COMMITTED]
	JDBC fetch size: none
	Pool: DataSourceConnectionProvider
	Minimum pool size: undefined/unknown
	Maximum pool size: undefined/unknown
2026-10-03 11:59:45 [main] INFO  org.hibernate.orm.core - HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
2026-10-03 11:59:45 [main] INFO  org.hibernate.orm.jdbc.batch - HHH100501: Automatic JDBC statement batching enabled (maximum batch size 5000)
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_api_key_public" of relation "api_keys" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukjubwbgwt1w58smo1eb9w28a8m" of relation "card_allowed_countries" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk1t0yu2bwsbqttfa1sm3j81pa6" of relation "card_allowed_merchant_categories" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukjubwbgwt1w58smo1eb9w28a8m" of relation "card_blocked_countries" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk1t0yu2bwsbqttfa1sm3j81pa6" of relation "card_blocked_merchant_categories" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukel8h97fsydo62tuxyde2c5wb3" of relation "card_blocked_merchants" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukc5m142pdas0itbg37ux905uii" of relation "card_controls" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_card_fee_currency_type" of relation "card_fee_config" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukbufw2g606itt67b3gkk5wp1xd" of relation "card_limits" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_mft_reference" of relation "maintenance_fee_transactions" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukhg9t0870p4r2pyu01wh4a9w3f" of relation "next_of_kin" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukajre85ybxavf1tt4omkrs5p6g" of relation "password_reset_tokens" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_pl_reference" of relation "platform_ledger" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_article_slug" of relation "support_articles" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_ticket_reference" of relation "support_tickets" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_currency_code" of relation "supported_currencies" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_th_idempotency" of relation "transaction_history" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_txn_transaction_id" of relation "transactions" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_txn_idempotency" of relation "transactions" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk_user_bank_lists_account_number" of relation "user_bank_lists" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_ud_user_currency" of relation "user_debts" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_uma_user_currency_month" of relation "user_monthly_activity" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukn8f4wj07pr7qbkvt9y7r9hufd" of relation "user_records" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uksamxusvtqxp2y8tdyt9ro4vtt" of relation "user_records" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukldiyqs2ddvqq18b6o3tanptwm" of relation "user_records" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk6dotkott2kjsp8vw4d0m25fb7" of relation "users" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk4mcg6l0va97nbd8o9tqpeg104" of relation "users" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukr43af9ap4edm43mmtq01oddj6" of relation "users" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk5yfylayx5nlun9fqewt2x9ak0" of relation "virtual_cards" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_wallet_currency" of relation "wallet_balances" does not exist, skipping
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 11:59:46 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_wallet_user_id" of relation "wallets" does not exist, skipping
2026-10-03 11:59:46 [main] INFO  o.s.o.j.LocalContainerEntityManagerFactoryBean - Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-10-03 11:59:46 [main] INFO  o.s.d.j.r.q.QueryEnhancerFactories - Hibernate is in classpath; If applicable, HQL parser will be used.
  Attempt 4/30: DOWN
2026-10-03 11:59:48 [main] INFO  c.e.c.c.cache.RedisConnectionConfig - RedisTemplate configured with JSON serializer
2026-10-03 11:59:50 [main] INFO  c.e.c.c.services.RateLimitService - [RateLimitService] Connected to Redis at localhost:6379
2026-10-03 11:59:51 [main] INFO  o.s.s.c.a.a.c.InitializeAuthenticationProviderBeanManagerConfigurer$InitializeAuthenticationProviderManagerConfigurer - Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-10-03 11:59:51 [main] WARN  o.s.s.c.a.a.c.InitializeUserDetailsBeanManagerConfigurer$InitializeUserDetailsManagerConfigurer - Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-10-03 11:59:52 [main] INFO  c.e.c.c.c.RedisCacheAutoConfiguration - RedisCacheManager configured with 0 named caches
2026-10-03 11:59:52 [main] WARN  o.s.b.j.a.JpaBaseConfiguration$JpaWebConfiguration - spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
  Attempt 5/30: DOWN
2026-10-03 11:59:54 [main] INFO  o.s.b.a.e.web.EndpointLinksResolver - Exposing 6 endpoints beneath base path '/actuator'
2026-10-03 11:59:54 [main] INFO  o.a.coyote.http11.Http11NioProtocol - Starting ProtocolHandler ["http-nio-8029"]
2026-10-03 11:59:54 [main] INFO  o.s.boot.tomcat.TomcatWebServer - Tomcat started on port 8029 (http) with context path '/'
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq: Temporary failure in name resolution
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#13-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#13-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#13-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#11-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#11-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#11-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#0-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#0-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#0-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#2-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#2-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#2-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#3-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#3-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#3-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#4-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#4-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#4-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#5-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#5-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#5-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#6-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#6-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#6-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#7-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#7-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#7-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#8-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#8-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#8-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#9-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#9-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#9-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#14-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#14-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#14-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Broker not available; cannot force queue declarations during start: java.net.UnknownHostException: rabbitmq
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#15-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#15-1] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueInfo(RabbitAdmin.java:472)
	at org.springframework.amqp.rabbit.core.RabbitAdmin.getQueueProperties(RabbitAdmin.java:456)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.attemptDeclarations(AbstractMessageListenerContainer.java:1972)
	at org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.redeclareElementsIfNecessary(AbstractMessageListenerContainer.java:1935)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1602)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 12 common frames omitted
2026-10-03 11:59:54 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#15-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:54 [main] INFO  com.epay.EpayApplication - Started EpayApplication in 19.73 seconds (process running for 22.051)
2026-10-03 11:59:55 [scheduling-1] WARN  c.e.admin.service.LiquidityService - [Liquidity] Paystack secret key not configured — skipping live balance fetch
2026-10-03 11:59:55 [scheduling-1] ERROR c.e.admin.service.LiquidityService - [Liquidity] CRITICAL — PAYSTACK balance 0 is BELOW block threshold 50000. Payouts are BLOCKED.
2026-10-03 11:59:55 [scheduling-1] INFO  c.e.admin.service.LiquidityService - [Liquidity] PAYSTACK balance synced: 0 NGN
2026-10-03 11:59:55 [main] INFO  c.e.w.config.CurrencyDataInitializer - [CurrencyInit] Seeded 10 currencies successfully
2026-10-03 11:59:55 [main] INFO  com.epay.config.CardFeeConfigSeeder - [CardFeeSeeder] ✓ Seeded 20 card fee config record(s) (0 already existed)
2026-10-03 11:59:55 [main] INFO  c.e.support.seeder.SupportDataSeeder - [SupportSeeder] ✓ Seeded 10 article(s).
2026-10-03 11:59:55 [main] INFO  c.e.support.seeder.SupportDataSeeder - [SupportSeeder] ✓ Seeded 24 FAQ(s).
2026-10-03 11:59:55 [main] INFO  com.epay.config.SuperAdminSeeder - [Seeder] ✓ Super-admin created successfully.
2026-10-03 11:59:55 [main] INFO  com.epay.config.SuperAdminSeeder - [Seeder]   Username : superadmin
2026-10-03 11:59:55 [main] INFO  com.epay.config.SuperAdminSeeder - [Seeder]   Email    : superadmin@epay.com
2026-10-03 11:59:55 [main] INFO  com.epay.config.SuperAdminSeeder - [Seeder]   Role     : SUPER_USER
2026-10-03 11:59:55 [main] WARN  com.epay.config.SuperAdminSeeder - [Seeder]   Change the default password immediately after first login!
2026-10-03 11:59:58 [http-nio-8029-exec-1] INFO  o.a.c.c.C.[Tomcat].[localhost].[/] - Initializing Spring DispatcherServlet 'dispatcherServlet'
2026-10-03 11:59:58 [http-nio-8029-exec-1] INFO  o.s.web.servlet.DispatcherServlet - Initializing Servlet 'dispatcherServlet'
2026-10-03 11:59:58 [http-nio-8029-exec-1] INFO  o.s.web.servlet.DispatcherServlet - Completed initialization in 2 ms
2026-10-03 11:59:58 [http-nio-8029-exec-1] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:58 [http-nio-8029-exec-1] WARN  o.s.b.a.health.RabbitHealthIndicator - Rabbit health check failed
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.doExecute(RabbitTemplate.java:2239)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2211)
	at org.springframework.amqp.rabbit.core.RabbitTemplate.execute(RabbitTemplate.java:2191)
	at org.springframework.boot.amqp.health.RabbitHealthIndicator.getVersion(RabbitHealthIndicator.java:54)
	at org.springframework.boot.amqp.health.RabbitHealthIndicator.doHealthCheck(RabbitHealthIndicator.java:47)
	at org.springframework.boot.health.contributor.AbstractHealthIndicator.health(AbstractHealthIndicator.java:80)
	at org.springframework.boot.health.contributor.HealthIndicator.health(HealthIndicator.java:37)
	at org.springframework.boot.health.actuate.endpoint.Contributor$Blocking.getDescriptor(Contributor.java:148)
	at org.springframework.boot.health.actuate.endpoint.Contributor$Blocking.getDescriptor(Contributor.java:126)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport.getDescriptorAndLogIfSlow(HealthEndpointSupport.java:172)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport.getDescriptor(HealthEndpointSupport.java:145)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport.getAggregateDescriptor(HealthEndpointSupport.java:157)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport.getDescriptor(HealthEndpointSupport.java:141)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport.getResult(HealthEndpointSupport.java:110)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport.getResult(HealthEndpointSupport.java:82)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointWebExtension.health(HealthEndpointWebExtension.java:85)
	at org.springframework.boot.health.actuate.endpoint.HealthEndpointWebExtension.health(HealthEndpointWebExtension.java:73)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:281)
	at org.springframework.boot.actuate.endpoint.invoke.reflect.ReflectiveOperationInvoker.invoke(ReflectiveOperationInvoker.java:76)
	at org.springframework.boot.actuate.endpoint.annotation.AbstractDiscoveredOperation.invoke(AbstractDiscoveredOperation.java:62)
	at org.springframework.boot.webmvc.actuate.endpoint.web.AbstractWebMvcEndpointHandlerMapping$ServletWebOperationAdapter.handle(AbstractWebMvcEndpointHandlerMapping.java:347)
	at org.springframework.boot.webmvc.actuate.endpoint.web.AbstractWebMvcEndpointHandlerMapping$OperationHandler.handle(AbstractWebMvcEndpointHandlerMapping.java:476)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:252)
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:184)
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:934)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:853)
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:86)
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:963)
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:866)
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1000)
	at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:892)
	at jakarta.servlet.http.HttpServlet.service(HttpServlet.java:622)
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:874)
	at jakarta.servlet.http.HttpServlet.service(HttpServlet.java:710)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:128)
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at com.epay.common.config.security.ValidationFilter.doFilterInternal(ValidationFilter.java:67)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:101)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:110)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at com.epay.common.config.security.InputValidationFilter.doFilterInternal(InputValidationFilter.java:66)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at com.epay.common.config.security.FirewallExceptionFilter.doFilterInternal(FirewallExceptionFilter.java:30)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:101)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.servlet.resource.ResourceUrlEncodingFilter.doFilter(ResourceUrlEncodingFilter.java:66)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at com.epay.common.config.logging.ServletAccessLogFilter.doFilterInternal(ServletAccessLogFilter.java:39)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at com.epay.common.config.logging.HttpRequestHeaderLogFilter.doFilterInternal(HttpRequestHeaderLogFilter.java:29)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.CompositeFilter$VirtualFilterChain.doFilter(CompositeFilter.java:108)
	at org.springframework.security.web.FilterChainProxy.lambda$doFilterInternal$2(FilterChainProxy.java:235)
	at org.springframework.security.web.ObservationFilterChainDecorator$FilterObservation$SimpleFilterObservation.lambda$wrap$1(ObservationFilterChainDecorator.java:491)
	at org.springframework.security.web.ObservationFilterChainDecorator$AroundFilterObservation$SimpleAroundFilterObservation.lambda$wrap$1(ObservationFilterChainDecorator.java:353)
	at org.springframework.security.web.ObservationFilterChainDecorator.lambda$wrapSecured$0(ObservationFilterChainDecorator.java:84)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:131)
	at org.springframework.security.web.access.intercept.AuthorizationFilter.doFilter(AuthorizationFilter.java:101)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:126)
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:120)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:132)
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:86)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.authentication.AnonymousAuthenticationFilter.doFilter(AnonymousAuthenticationFilter.java:100)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter.doFilter(SecurityContextHolderAwareRequestFilter.java:181)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.savedrequest.RequestCacheAwareFilter.doFilter(RequestCacheAwareFilter.java:63)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.oauth2.server.resource.web.authentication.BearerTokenAuthenticationFilter.doFilterInternal(BearerTokenAuthenticationFilter.java:174)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:101)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at com.epay.common.config.security.JwtAuthenticationFilter.doFilterInternal(JwtAuthenticationFilter.java:48)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:101)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at com.epay.common.config.security.InputValidationFilter.doFilterInternal(InputValidationFilter.java:66)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:101)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at com.epay.common.config.security.FirewallExceptionFilter.doFilterInternal(FirewallExceptionFilter.java:30)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.oauth2.server.resource.web.OAuth2ProtectedResourceMetadataFilter.doFilterInternal(OAuth2ProtectedResourceMetadataFilter.java:98)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:110)
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:96)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.web.filter.CorsFilter.doFilterInternal(CorsFilter.java:91)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.header.HeaderWriterFilter.doHeadersAfter(HeaderWriterFilter.java:90)
	at org.springframework.security.web.header.HeaderWriterFilter.doFilterInternal(HeaderWriterFilter.java:75)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.context.SecurityContextHolderFilter.doFilter(SecurityContextHolderFilter.java:82)
	at org.springframework.security.web.context.SecurityContextHolderFilter.doFilter(SecurityContextHolderFilter.java:69)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter.doFilterInternal(WebAsyncManagerIntegrationFilter.java:62)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:230)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.session.DisableEncodeUrlFilter.doFilterInternal(DisableEncodeUrlFilter.java:42)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.wrapFilter(ObservationFilterChainDecorator.java:243)
	at org.springframework.security.web.ObservationFilterChainDecorator$AroundFilterObservation$SimpleAroundFilterObservation.lambda$wrap$0(ObservationFilterChainDecorator.java:336)
	at org.springframework.security.web.ObservationFilterChainDecorator$ObservationFilter.doFilter(ObservationFilterChainDecorator.java:227)
	at org.springframework.security.web.ObservationFilterChainDecorator$VirtualFilterChain.doFilter(ObservationFilterChainDecorator.java:140)
	at org.springframework.security.web.FilterChainProxy.doFilterInternal(FilterChainProxy.java:237)
	at org.springframework.security.web.FilterChainProxy.doFilter(FilterChainProxy.java:195)
	at org.springframework.web.filter.CompositeFilter$VirtualFilterChain.doFilter(CompositeFilter.java:113)
	at org.springframework.web.filter.ServletRequestPathFilter.doFilter(ServletRequestPathFilter.java:52)
	at org.springframework.web.filter.CompositeFilter$VirtualFilterChain.doFilter(CompositeFilter.java:113)
	at org.springframework.web.filter.CompositeFilter.doFilter(CompositeFilter.java:74)
	at org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration$CompositeFilterChainProxy.doFilter(WebSecurityConfiguration.java:317)
	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:355)
	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:272)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at com.epay.common.config.security.SecurityHeadersFilter.doFilterInternal(SecurityHeadersFilter.java:90)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.ServerHttpObservationFilter.doFilterInternal(ServerHttpObservationFilter.java:110)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:199)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:116)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:107)
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:165)
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:77)
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:492)
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:113)
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:83)
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:72)
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:341)
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:397)
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:63)
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:1272)
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1801)
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:52)
	at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:946)
	at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:480)
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:57)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 209 common frames omitted
2026-10-03 11:59:58 [boundedElastic-1] WARN  o.s.b.d.r.h.DataRedisReactiveHealthIndicator - Redis health check failed
org.springframework.data.redis.RedisConnectionFailureException: Unable to connect to Redis
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.translateException(LettuceConnectionFactory.java:1873)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.getConnection(LettuceConnectionFactory.java:1804)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$SharedConnection.getNativeConnection(LettuceConnectionFactory.java:1601)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$SharedConnection.lambda$getConnection$0(LettuceConnectionFactory.java:1581)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.doInLock(LettuceConnectionFactory.java:1542)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$SharedConnection.getConnection(LettuceConnectionFactory.java:1578)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getSharedReactiveConnection(LettuceConnectionFactory.java:1283)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getReactiveConnection(LettuceConnectionFactory.java:1153)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory.getReactiveConnection(LettuceConnectionFactory.java:122)
	at reactor.core.publisher.MonoSupplier.call(MonoSupplier.java:63)
	at reactor.core.publisher.FluxSubscribeOnCallable$CallableSubscribeOnSubscription.run(FluxSubscribeOnCallable.java:228)
	at reactor.core.scheduler.SchedulerTask.call(SchedulerTask.java:72)
	at reactor.core.scheduler.SchedulerTask.call(SchedulerTask.java:28)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at java.base/java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:304)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: io.lettuce.core.RedisConnectionException: Unable to connect to redis/<unresolved>:6379
	at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:63)
	at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:41)
	at io.lettuce.core.AbstractRedisClient.getConnection(AbstractRedisClient.java:315)
	at io.lettuce.core.RedisClient.connect(RedisClient.java:220)
	at org.springframework.data.redis.connection.lettuce.StandaloneConnectionProvider.lambda$getConnection$1(StandaloneConnectionProvider.java:113)
	at java.base/java.util.Optional.orElseGet(Optional.java:364)
	at org.springframework.data.redis.connection.lettuce.StandaloneConnectionProvider.getConnection(StandaloneConnectionProvider.java:113)
	at org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory$ExceptionTranslatingConnectionProvider.getConnection(LettuceConnectionFactory.java:1802)
	... 16 common frames omitted
Caused by: java.net.UnknownHostException: Failed to resolve 'redis' [A(1)]
	at io.netty.resolver.dns.DnsResolveContext.finishResolve(DnsResolveContext.java:1139)
	at io.netty.resolver.dns.DnsResolveContext.tryToFinishResolve(DnsResolveContext.java:1086)
	at io.netty.resolver.dns.DnsResolveContext.query(DnsResolveContext.java:443)
	at io.netty.resolver.dns.DnsResolveContext.onResponse(DnsResolveContext.java:644)
	at io.netty.resolver.dns.DnsResolveContext.lambda$query$0(DnsResolveContext.java:499)
	at io.netty.util.concurrent.DefaultPromise.notifyListener0(DefaultPromise.java:604)
	at io.netty.util.concurrent.DefaultPromise.notifyListeners0(DefaultPromise.java:597)
	at io.netty.util.concurrent.DefaultPromise.notifyListenersNow(DefaultPromise.java:573)
	at io.netty.util.concurrent.DefaultPromise.notifyListeners(DefaultPromise.java:506)
	at io.netty.util.concurrent.DefaultPromise.setValue0(DefaultPromise.java:650)
	at io.netty.util.concurrent.DefaultPromise.setSuccess0(DefaultPromise.java:639)
	at io.netty.util.concurrent.DefaultPromise.trySuccess(DefaultPromise.java:119)
	at io.netty.resolver.dns.DnsQueryContext.trySuccess(DnsQueryContext.java:304)
	at io.netty.resolver.dns.DnsQueryContext.finishSuccess(DnsQueryContext.java:295)
	at io.netty.resolver.dns.DnsNameResolver$DnsResponseHandler.channelRead(DnsNameResolver.java:1558)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:357)
	at io.netty.handler.codec.MessageToMessageDecoder.channelRead(MessageToMessageDecoder.java:107)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:357)
	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1429)
	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:918)
	at io.netty.channel.epoll.EpollDatagramChannel.processPacket(EpollDatagramChannel.java:712)
	at io.netty.channel.epoll.EpollDatagramChannel.recvmsg(EpollDatagramChannel.java:747)
	at io.netty.channel.epoll.EpollDatagramChannel.access$300(EpollDatagramChannel.java:60)
	at io.netty.channel.epoll.EpollDatagramChannel$EpollDatagramChannelUnsafe.epollInReady(EpollDatagramChannel.java:584)
	at io.netty.channel.epoll.AbstractEpollChannel$AbstractEpollUnsafe.handle(AbstractEpollChannel.java:487)
	at io.netty.channel.epoll.EpollIoHandler$DefaultEpollIoRegistration.handle(EpollIoHandler.java:349)
	at io.netty.channel.epoll.EpollIoHandler.processReady(EpollIoHandler.java:546)
	at io.netty.channel.epoll.EpollIoHandler.run(EpollIoHandler.java:491)
	at io.netty.channel.SingleThreadIoEventLoop.runIo(SingleThreadIoEventLoop.java:225)
	at io.netty.channel.SingleThreadIoEventLoop.run(SingleThreadIoEventLoop.java:196)
	at io.netty.util.concurrent.SingleThreadEventExecutor$5.run(SingleThreadEventExecutor.java:1195)
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)
	at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)
	... 1 common frames omitted
Caused by: io.netty.resolver.dns.DnsErrorCauseException: Query failed with SERVFAIL
	at io.netty.resolver.dns.DnsResolveContext.onResponse(..)(Unknown Source)
  Attempt 6/30: DOWN
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)
	at org.springframework.amqp.rabbit.listener.BlockingQueueConsumer.start(BlockingQueueConsumer.java:630)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1603)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 10 common frames omitted
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)
	at org.springframework.amqp.rabbit.listener.BlockingQueueConsumer.start(BlockingQueueConsumer.java:630)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1603)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 10 common frames omitted
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#13-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)
	at org.springframework.amqp.rabbit.listener.BlockingQueueConsumer.start(BlockingQueueConsumer.java:630)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1603)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 10 common frames omitted
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#11-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)
	at org.springframework.amqp.rabbit.listener.BlockingQueueConsumer.start(BlockingQueueConsumer.java:630)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1603)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 10 common frames omitted
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)
	at org.springframework.amqp.rabbit.listener.BlockingQueueConsumer.start(BlockingQueueConsumer.java:630)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1603)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 10 common frames omitted
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-1] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Restarting Consumer@6cf9b2fa: tags=[[]], channel=null, acknowledgeMode=AUTO local queue size=0
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-1] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Restarting Consumer@5dfd5087: tags=[[]], channel=null, acknowledgeMode=AUTO local queue size=0
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#0-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)
	at org.springframework.amqp.rabbit.listener.BlockingQueueConsumer.start(BlockingQueueConsumer.java:630)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1603)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 10 common frames omitted
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#11-1] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Restarting Consumer@5f057b: tags=[[]], channel=null, acknowledgeMode=AUTO local queue size=0
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#0-1] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Restarting Consumer@3099dc9d: tags=[[]], channel=null, acknowledgeMode=AUTO local queue size=0
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#13-1] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Restarting Consumer@57dccc1a: tags=[[]], channel=null, acknowledgeMode=AUTO local queue size=0
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#2-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)
	at org.springframework.amqp.rabbit.listener.BlockingQueueConsumer.start(BlockingQueueConsumer.java:630)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.initialize(SimpleMessageListenerContainer.java:1603)
	at org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1400)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.UnknownHostException: rabbitmq
	at java.base/java.net.InetAddress$CachedLookup.get(InetAddress.java:988)
	at java.base/java.net.InetAddress.getAllByName0(InetAddress.java:1818)
	at java.base/java.net.InetAddress.getAllByName(InetAddress.java:1688)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.resolveIpAddresses(DnsRecordIpAddressResolver.java:83)
	at com.rabbitmq.client.DnsRecordIpAddressResolver.getAddresses(DnsRecordIpAddressResolver.java:73)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1351)
	at com.rabbitmq.client.ConnectionFactory.newConnection(ConnectionFactory.java:1297)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connectAddresses(AbstractConnectionFactory.java:676)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.connect(AbstractConnectionFactory.java:644)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:590)
	... 10 common frames omitted
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#2-1] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Restarting Consumer@2bf85ae6: tags=[[]], channel=null, acknowledgeMode=AUTO local queue size=0
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-1] INFO  o.s.a.r.l.SimpleMessageListenerContainer - Restarting Consumer@2405053d: tags=[[]], channel=null, acknowledgeMode=AUTO local queue size=0
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-2] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-2] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#12-2] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-2] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-2] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#1-2] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-2] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-2] ERROR o.s.a.r.l.SimpleMessageListenerContainer - Failed to check/redeclare auto-delete queue(s).
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#10-2] INFO  o.s.a.r.c.CachingConnectionFactory - Attempting to connect to: [rabbitmq:5672]
2026-10-03 11:59:59 [org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#3-1] WARN  o.s.a.r.l.SimpleMessageListenerContainer - Consumer raised exception, processing can restart if the connection factory supports it
org.springframework.amqp.AmqpIOException: java.net.UnknownHostException: rabbitmq
	at org.springframework.amqp.rabbit.support.RabbitExceptionTranslator.convertRabbitAccessException(RabbitExceptionTranslator.java:69)
	at org.springframework.amqp.rabbit.connection.AbstractConnectionFactory.createBareConnection(AbstractConnectionFactory.java:629)
	at org.springframework.amqp.rabbit.connection.CachingConnectionFactory.createConnection(CachingConnectionFactory.java:746)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.createConnection(ConnectionFactoryUtils.java:256)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils$RabbitResourceFactory.createConnection(ConnectionFactoryUtils.java:330)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.doGetTransactionalResourceHolder(ConnectionFactoryUtils.java:139)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:100)
	at org.springframework.amqp.rabbit.connection.ConnectionFactoryUtils.getTransactionalResourceHolder(ConnectionFactoryUtils.java:83)