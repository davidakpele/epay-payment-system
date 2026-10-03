Run java -jar main/target/epay-server.jar \
Waiting for app to start...
  Attempt 1/30: DOWN
12:25:34,716 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Missing watchable .xml or .properties files.
12:25:34,717 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Watching .xml files requires that the main configuration file is reachable as a URL

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v4.1.0)

2026-10-03 12:25:35 [main] INFO  com.epay.EpayApplication - Starting EpayApplication v1.0.0-SNAPSHOT using Java 21.0.12.1 with PID 2979 (/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar started by runner in /home/runner/work/epay-payment-system/epay-payment-system/epay)
2026-10-03 12:25:35 [main] INFO  com.epay.EpayApplication - The following 1 profile is active: "test"
  Attempt 2/30: DOWN
2026-10-03 12:25:35 [background-preinit] INFO  o.h.validator.internal.util.Version - HV000001: Hibernate Validator 9.1.0.Final
2026-10-03 12:25:38 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Multiple Spring Data modules found, entering strict repository configuration mode
2026-10-03 12:25:38 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-10-03 12:25:38 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Finished Spring Data repository scanning in 405 ms. Found 48 JPA repository interfaces.
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Multiple Spring Data modules found, entering strict repository configuration mode
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Bootstrapping Spring Data Redis repositories in DEFAULT mode.
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.AuthorizeUserVerificationRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.KycDocumentRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.KycVerificationRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.NextOfKinRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.PasswordResetTokenRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.TwoFactorOTPRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAccountCasesReportRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAccountSettingsRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAttemptRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserRecordRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserTracerRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.VerificationTokenRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.ApiKeyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.AppWebhookRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.DeveloperAppRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.WebhookDeliveryLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.investment.repository.InvestmentRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.liquidity.repository.LiquidityConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.liquidity.repository.PlatformLedgerRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.ChatMessageRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportArticleRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportFaqRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportTicketRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.TicketReplyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardAuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardControlRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardFeeConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardLimitRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.VirtualCardRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.bank.repository.UserBankRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.CurrencyBalanceRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.SupportedCurrencyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.WalletRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.WalletSettingsRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.beneficiary.repository.BeneficiaryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.blacklist.repository.BlacklistRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeAuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeTransactionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.UserDebtRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.UserMonthlyActivityRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.AuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionAllowedTransitionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionHistoryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionStateEntryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionStatusHistoryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 12:25:39 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Finished Spring Data repository scanning in 55 ms. Found 0 Redis repository interfaces.
  Attempt 3/30: DOWN
2026-10-03 12:25:41 [main] INFO  o.s.boot.tomcat.TomcatWebServer - Tomcat initialized with port 8029 (http)
2026-10-03 12:25:41 [main] INFO  o.a.coyote.http11.Http11NioProtocol - Initializing ProtocolHandler ["http-nio-8029"]
2026-10-03 12:25:41 [main] INFO  o.a.catalina.core.StandardService - Starting service [Tomcat]
2026-10-03 12:25:41 [main] INFO  o.a.catalina.core.StandardEngine - Starting Servlet engine: [Apache Tomcat/11.0.22]
2026-10-03 12:25:42 [main] INFO  o.s.b.w.c.s.WebApplicationContextInitializer - Root WebApplicationContext: initialization completed in 6736 ms
2026-10-03 12:25:42 [main] INFO  c.e.c.c.l.LoggingAutoConfiguration - Initializing http header log filter
2026-10-03 12:25:42 [main] INFO  c.e.c.c.l.LoggingAutoConfiguration - Initializing servlet access log filter
2026-10-03 12:25:43 [main] INFO  org.hibernate.orm.jpa - HHH008540: Processing PersistenceUnitInfo [name: default]
2026-10-03 12:25:43 [main] INFO  org.hibernate.orm.core - HHH000001: Hibernate ORM core version 7.4.1.Final
2026-10-03 12:25:44 [main] INFO  o.s.o.j.p.SpringPersistenceUnitInfo - No LoadTimeWeaver setup: ignoring JPA class transformer
2026-10-03 12:25:44 [main] WARN  org.hibernate.orm.deprecation - HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-10-03 12:25:44 [main] INFO  o.hibernate.orm.connections.pooling - HHH10001005: Database info:
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
  Attempt 4/30: DOWN
2026-10-03 12:25:48 [main] INFO  org.hibernate.orm.core - HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
2026-10-03 12:25:48 [main] INFO  org.hibernate.orm.jdbc.batch - HHH100501: Automatic JDBC statement batching enabled (maximum batch size 5000)
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_api_key_public" of relation "api_keys" does not exist, skipping
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukjubwbgwt1w58smo1eb9w28a8m" of relation "card_allowed_countries" does not exist, skipping
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk1t0yu2bwsbqttfa1sm3j81pa6" of relation "card_allowed_merchant_categories" does not exist, skipping
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukjubwbgwt1w58smo1eb9w28a8m" of relation "card_blocked_countries" does not exist, skipping
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk1t0yu2bwsbqttfa1sm3j81pa6" of relation "card_blocked_merchant_categories" does not exist, skipping
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukel8h97fsydo62tuxyde2c5wb3" of relation "card_blocked_merchants" does not exist, skipping
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:48 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukc5m142pdas0itbg37ux905uii" of relation "card_controls" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_card_fee_currency_type" of relation "card_fee_config" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukbufw2g606itt67b3gkk5wp1xd" of relation "card_limits" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_mft_reference" of relation "maintenance_fee_transactions" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukhg9t0870p4r2pyu01wh4a9w3f" of relation "next_of_kin" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukajre85ybxavf1tt4omkrs5p6g" of relation "password_reset_tokens" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_pl_reference" of relation "platform_ledger" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_article_slug" of relation "support_articles" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_ticket_reference" of relation "support_tickets" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_currency_code" of relation "supported_currencies" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_th_idempotency" of relation "transaction_history" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_txn_transaction_id" of relation "transactions" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_txn_idempotency" of relation "transactions" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk_user_bank_lists_account_number" of relation "user_bank_lists" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_ud_user_currency" of relation "user_debts" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_uma_user_currency_month" of relation "user_monthly_activity" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukn8f4wj07pr7qbkvt9y7r9hufd" of relation "user_records" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uksamxusvtqxp2y8tdyt9ro4vtt" of relation "user_records" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukldiyqs2ddvqq18b6o3tanptwm" of relation "user_records" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk6dotkott2kjsp8vw4d0m25fb7" of relation "users" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk4mcg6l0va97nbd8o9tqpeg104" of relation "users" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "ukr43af9ap4edm43mmtq01oddj6" of relation "users" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uk5yfylayx5nlun9fqewt2x9ak0" of relation "virtual_cards" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "uq_wallet_currency" of relation "wallet_balances" does not exist, skipping
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - HHH000247: ErrorCode: 0, SQLState: 00000
2026-10-03 12:25:49 [main] WARN  org.hibernate.orm.jdbc.warn - constraint "idx_wallet_user_id" of relation "wallets" does not exist, skipping
2026-10-03 12:25:49 [main] INFO  o.s.o.j.LocalContainerEntityManagerFactoryBean - Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-10-03 12:25:49 [main] INFO  o.s.d.j.r.q.QueryEnhancerFactories - Hibernate is in classpath; If applicable, HQL parser will be used.
  Attempt 5/30: DOWN
2026-10-03 12:25:52 [main] INFO  c.e.c.c.cache.RedisConnectionConfig - RedisTemplate configured with JSON serializer
2026-10-03 12:25:54 [main] WARN  o.s.b.w.s.s.c.AnnotationConfigServletWebServerApplicationContext - Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'rateLimitService': Invocation of init method failed
2026-10-03 12:25:54 [main] INFO  o.s.o.j.LocalContainerEntityManagerFactoryBean - Closing JPA EntityManagerFactory for persistence unit 'default'
2026-10-03 12:25:54 [main] INFO  o.a.catalina.core.StandardService - Stopping service [Tomcat]
2026-10-03 12:25:54 [main] WARN  o.a.c.loader.WebappClassLoaderBase - The web application [ROOT] appears to have started a thread named [prometheus-metrics-scheduler-0] but has failed to stop it. This is very likely to create a memory leak. Stack trace of thread:
 java.base/jdk.internal.misc.Unsafe.park(Native Method)
 java.base/java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:269)
 java.base/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:1797)
 java.base/java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:1182)
 java.base/java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:899)
 java.base/java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1070)
 java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)
 java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)
 java.base/java.lang.Thread.run(Thread.java:1583)
2026-10-03 12:25:54 [main] INFO  o.s.b.a.l.ConditionEvaluationReportLogger - 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-10-03 12:25:54 [main] ERROR o.s.boot.SpringApplication - Application run failed
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'rateLimitService': Invocation of init method failed
	at org.springframework.beans.factory.annotation.InitDestroyAnnotationBeanPostProcessor.postProcessBeforeInitialization(InitDestroyAnnotationBeanPostProcessor.java:220)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsBeforeInitialization(AbstractAutowireCapableBeanFactory.java:426)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1807)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:196)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.instantiateSingleton(DefaultListableBeanFactory.java:1225)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingleton(DefaultListableBeanFactory.java:1191)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:1121)
	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:994)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621)
	at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:756)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:445)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:321)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354)
	at com.epay.EpayApplication.main(EpayApplication.java:16)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64)
	at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40)
Caused by: io.lettuce.core.RedisConnectionException: Unable to connect to redis/<unresolved>:6379
	at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:63)
	at io.lettuce.core.RedisConnectionException.create(RedisConnectionException.java:41)
	at io.lettuce.core.AbstractRedisClient.getConnection(AbstractRedisClient.java:315)
	at io.lettuce.core.RedisClient.connect(RedisClient.java:220)
	at com.epay.common.config.services.RateLimitService.init(RateLimitService.java:49)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.beans.factory.annotation.InitDestroyAnnotationBeanPostProcessor$LifecycleMethod.invoke(InitDestroyAnnotationBeanPostProcessor.java:453)
	at org.springframework.beans.factory.annotation.InitDestroyAnnotationBeanPostProcessor$LifecycleMetadata.invokeInitMethods(InitDestroyAnnotationBeanPostProcessor.java:397)
	at org.springframework.beans.factory.annotation.InitDestroyAnnotationBeanPostProcessor.postProcessBeforeInitialization(InitDestroyAnnotationBeanPostProcessor.java:217)
	... 25 common frames omitted
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
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: io.netty.resolver.dns.DnsErrorCauseException: Query failed with SERVFAIL
	at io.netty.resolver.dns.DnsResolveContext.onResponse(..)(Unknown Source)
  Attempt 6/30: DOWN
  Attempt 7/30: DOWN
  Attempt 8/30: DOWN
  Attempt 9/30: DOWN
  Attempt 10/30: DOWN
  Attempt 11/30: DOWN
  Attempt 12/30: DOWN
  Attempt 13/30: DOWN
  Attempt 14/30: DOWN
  Attempt 15/30: DOWN
  Attempt 16/30: DOWN
  Attempt 17/30: DOWN
  Attempt 18/30: DOWN
  Attempt 19/30: DOWN
  Attempt 20/30: DOWN
  Attempt 21/30: DOWN
  Attempt 22/30: DOWN
  Attempt 23/30: DOWN
  Attempt 24/30: DOWN
  Attempt 25/30: DOWN
  Attempt 26/30: DOWN
  Attempt 27/30: DOWN
  Attempt 28/30: DOWN
  Attempt 29/30: DOWN
  Attempt 30/30: DOWN
App failed to start
Error: Process completed with exit code 1.
