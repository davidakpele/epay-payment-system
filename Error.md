Error from "k6 Smoke Test"

Run java -jar main/target/epay-server.jar \
Waiting for app to start...
  Attempt 1/30: DOWN
11:42:38,297 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Missing watchable .xml or .properties files.
11:42:38,297 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Watching .xml files requires that the main configuration file is reachable as a URL

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v4.1.0)

2026-10-03 11:42:38 [main] INFO  com.epay.EpayApplication - Starting EpayApplication v1.0.0-SNAPSHOT using Java 21.0.12.1 with PID 2673 (/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar started by runner in /home/runner/work/epay-payment-system/epay-payment-system/epay)
2026-10-03 11:42:38 [main] INFO  com.epay.EpayApplication - The following 1 profile is active: "test"
2026-10-03 11:42:39 [background-preinit] INFO  o.h.validator.internal.util.Version - HV000001: Hibernate Validator 9.1.0.Final
  Attempt 2/30: DOWN
2026-10-03 11:42:41 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Multiple Spring Data modules found, entering strict repository configuration mode
2026-10-03 11:42:41 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-10-03 11:42:41 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Finished Spring Data repository scanning in 428 ms. Found 48 JPA repository interfaces.
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Multiple Spring Data modules found, entering strict repository configuration mode
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Bootstrapping Spring Data Redis repositories in DEFAULT mode.
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.AuthorizeUserVerificationRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.KycDocumentRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.KycVerificationRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.NextOfKinRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.PasswordResetTokenRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.TwoFactorOTPRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAccountCasesReportRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAccountSettingsRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserAttemptRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserRecordRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.UserTracerRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.auth.repository.VerificationTokenRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.ApiKeyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.AppWebhookRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.DeveloperAppRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.developer.repository.WebhookDeliveryLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.investment.repository.InvestmentRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.liquidity.repository.LiquidityConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.liquidity.repository.PlatformLedgerRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.ChatMessageRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportArticleRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportFaqRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.SupportTicketRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.support.repository.TicketReplyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardAuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardControlRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardFeeConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.CardLimitRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.domain.virtual_card.repository.VirtualCardRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.bank.repository.UserBankRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.CurrencyBalanceRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.SupportedCurrencyRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.WalletRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.wallet.repository.WalletSettingsRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.beneficiary.repository.BeneficiaryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.blacklist.repository.BlacklistRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeAuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeConfigRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.MaintenanceFeeTransactionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.UserDebtRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.maintenance.repository.UserMonthlyActivityRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.AuditLogRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionAllowedTransitionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionHistoryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionStateEntryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationExtensionSupport - Spring Data Redis - Could not safely identify store assignment for repository candidate interface com.epay.history.repository.TransactionStatusHistoryRepository; If you want this repository to be a Redis repository, consider annotating your entities with one of these annotations: org.springframework.data.redis.core.RedisHash (preferred), or consider extending one of the following types with your repository: org.springframework.data.keyvalue.repository.KeyValueRepository
2026-10-03 11:42:42 [main] INFO  o.s.d.r.c.RepositoryConfigurationDelegate - Finished Spring Data repository scanning in 61 ms. Found 0 Redis repository interfaces.
2026-10-03 11:42:44 [main] INFO  o.s.boot.tomcat.TomcatWebServer - Tomcat initialized with port 8029 (http)
2026-10-03 11:42:44 [main] INFO  o.a.coyote.http11.Http11NioProtocol - Initializing ProtocolHandler ["http-nio-8029"]
2026-10-03 11:42:44 [main] INFO  o.a.catalina.core.StandardService - Starting service [Tomcat]
2026-10-03 11:42:44 [main] INFO  o.a.catalina.core.StandardEngine - Starting Servlet engine: [Apache Tomcat/11.0.22]
2026-10-03 11:42:44 [main] INFO  o.s.b.w.c.s.WebApplicationContextInitializer - Root WebApplicationContext: initialization completed in 5798 ms
2026-10-03 11:42:44 [main] INFO  c.e.c.c.l.LoggingAutoConfiguration - Initializing http header log filter
2026-10-03 11:42:44 [main] INFO  c.e.c.c.l.LoggingAutoConfiguration - Initializing servlet access log filter
  Attempt 3/30: DOWN
2026-10-03 11:42:46 [main] INFO  org.hibernate.orm.jpa - HHH008540: Processing PersistenceUnitInfo [name: default]
2026-10-03 11:42:46 [main] INFO  org.hibernate.orm.core - HHH000001: Hibernate ORM core version 7.4.1.Final
2026-10-03 11:42:47 [main] INFO  o.s.o.j.p.SpringPersistenceUnitInfo - No LoadTimeWeaver setup: ignoring JPA class transformer
2026-10-03 11:42:48 [main] WARN  org.hibernate.orm.jdbc.error - HHH000247: ErrorCode: 0, SQLState: 08001
2026-10-03 11:42:48 [main] WARN  org.hibernate.orm.jdbc.error - Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
2026-10-03 11:42:48 [main] WARN  org.hibernate.orm.jdbc - HHH100046: Could not obtain connection to query JDBC database metadata
org.hibernate.exception.JDBCConnectionException: Unable to obtain isolated JDBC connection [Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.] [n/a]
	at org.hibernate.exception.internal.SQLStateConversionDelegate.convert(SQLStateConversionDelegate.java:80)
	at org.hibernate.exception.internal.StandardSQLExceptionConverter.convert(StandardSQLExceptionConverter.java:34)
	at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:115)
	at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:101)
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcIsolationDelegate.delegateWork(JdbcIsolationDelegate.java:51)
	at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.getJdbcEnvironmentUsingJdbcMetadata(JdbcEnvironmentInitiator.java:366)
	at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.getJdbcEnvironment(JdbcEnvironmentInitiator.java:143)
	at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:120)
	at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:80)
	at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:133)
	at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:260)
	at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:235)
	at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:212)
	at org.hibernate.boot.model.relational.Database.<init>(Database.java:44)
	at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.getDatabase(InFlightMetadataCollectorImpl.java:251)
	at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:203)
	at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:180)
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1388)
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.populateSessionFactoryBuilder(EntityManagerFactoryBuilderImpl.java:1468)
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1450)
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93)
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443)
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436)
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411)
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1862)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1811)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:196)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1360)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1192)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:356)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1710)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1459)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:602)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveBean(DefaultListableBeanFactory.java:1232)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1711)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1658)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:912)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:240)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1380)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1219)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:229)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1769)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1658)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:912)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:240)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1380)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1219)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:229)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1769)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1658)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:912)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:240)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1380)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1219)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:231)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:185)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:180)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:165)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:97)
	at org.springframework.boot.web.context.servlet.WebApplicationContextInitializer.initialize(WebApplicationContextInitializer.java:53)
	at org.springframework.boot.tomcat.servlet.DeferredServletContainerInitializers.onStartup(DeferredServletContainerInitializers.java:55)
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4420)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1162)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1158)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:81)
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:145)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:714)
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:780)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1162)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1158)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:81)
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:145)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:714)
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:201)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:410)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:864)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:435)
	at org.springframework.boot.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:131)
	at org.springframework.boot.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:110)
	at org.springframework.boot.tomcat.servlet.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:429)
	at org.springframework.boot.tomcat.servlet.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:167)
	at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:190)
	at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:164)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:615)
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
Caused by: org.postgresql.util.PSQLException: Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:425)
	at org.postgresql.core.ConnectionFactory.openConnection(ConnectionFactory.java:52)
	at org.postgresql.jdbc.PgConnection.<init>(PgConnection.java:290)
	at org.postgresql.Driver.makeConnection(Driver.java:448)
	at org.postgresql.Driver.connect(Driver.java:298)
	at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:144)
	at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:373)
	at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:210)
	at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:488)
	at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:576)
	at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:97)
	at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:111)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at net.ttddyy.dsproxy.proxy.ProxyLogicSupport.proceedExecution(ProxyLogicSupport.java:72)
	at net.ttddyy.dsproxy.proxy.DataSourceProxyLogic.performProxyLogic(DataSourceProxyLogic.java:41)
	at net.ttddyy.dsproxy.proxy.ProxyLogicSupport.proceedMethodExecution(ProxyLogicSupport.java:103)
	at net.ttddyy.dsproxy.proxy.DataSourceProxyLogic.invoke(DataSourceProxyLogic.java:28)
	at net.ttddyy.dsproxy.proxy.jdk.DataSourceInvocationHandler.invoke(DataSourceInvocationHandler.java:24)
	at jdk.proxy2/jdk.proxy2.$Proxy137.getConnection(Unknown Source)
	at org.hibernate.engine.jdbc.connections.internal.DataSourceConnectionProvider.getConnection(DataSourceConnectionProvider.java:149)
	at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:508)
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcIsolationDelegate.delegateWork(JdbcIsolationDelegate.java:48)
	... 141 common frames omitted
Caused by: java.net.ConnectException: Connection refused
	at java.base/sun.nio.ch.Net.pollConnect(Native Method)
	at java.base/sun.nio.ch.Net.pollConnectNow(Net.java:694)
	at java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:542)
	at java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:592)
	at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:327)
	at java.base/java.net.Socket.connect(Socket.java:751)
	at org.postgresql.core.PGStream.createSocket(PGStream.java:271)
	at org.postgresql.core.PGStream.<init>(PGStream.java:132)
	at org.postgresql.core.v3.ConnectionFactoryImpl.tryConnect(ConnectionFactoryImpl.java:219)
	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:365)
	... 163 common frames omitted
2026-10-03 11:42:48 [main] WARN  org.hibernate.orm.deprecation - HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-10-03 11:42:48 [main] INFO  o.hibernate.orm.connections.pooling - HHH10001005: Database info:
	Database JDBC URL [undefined/unknown]
	Database driver: undefined/unknown
	Database dialect: PostgreSQLDialect
	Database version: 14.0
	Default catalog/schema: unknown/unknown
	Autocommit mode: undefined/unknown
	Isolation level: NONE [default NONE]
	JDBC fetch size: undefined/unknown
	Pool: DataSourceConnectionProvider
	Minimum pool size: undefined/unknown
	Maximum pool size: undefined/unknown
2026-10-03 11:42:49 [AsyncReporter{ZipkinHttpClientSender{http://zipkin:9411/api/v2/spans}}] WARN  z.r.i.AsyncReporter$BoundedAsyncReporter - Spans were dropped due to exceptions. All subsequent errors will be logged at FINE level.
2026-10-03 11:42:49 [AsyncReporter{ZipkinHttpClientSender{http://zipkin:9411/api/v2/spans}}] WARN  z.r.i.AsyncReporter$BoundedAsyncReporter - Dropped 1 spans due to ConnectException()
java.net.ConnectException
	at java.net.http/jdk.internal.net.http.HttpClientImpl.send(HttpClientImpl.java:955)
	at java.net.http/jdk.internal.net.http.HttpClientFacade.send(HttpClientFacade.java:133)
	at org.springframework.boot.zipkin.autoconfigure.ZipkinHttpClientSender.postSpans(ZipkinHttpClientSender.java:59)
	at org.springframework.boot.zipkin.autoconfigure.HttpSender.postSpans(HttpSender.java:69)
	at org.springframework.boot.zipkin.autoconfigure.HttpSender.postSpans(HttpSender.java:41)
	at zipkin2.reporter.BaseHttpSender.send(BaseHttpSender.java:123)
	at zipkin2.reporter.internal.AsyncReporter$BoundedAsyncReporter.flush(AsyncReporter.java:266)
	at zipkin2.reporter.internal.AsyncReporter$Flusher.run(AsyncReporter.java:352)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: java.net.ConnectException
	at java.net.http/jdk.internal.net.http.common.Utils.toConnectException(Utils.java:1065)
	at java.net.http/jdk.internal.net.http.PlainHttpConnection.connectAsync(PlainHttpConnection.java:227)
	at java.net.http/jdk.internal.net.http.Http1Exchange.sendHeadersAsync(Http1Exchange.java:312)
	at java.net.http/jdk.internal.net.http.Exchange.lambda$responseAsyncImpl0$8(Exchange.java:581)
	at java.net.http/jdk.internal.net.http.Exchange.checkFor407(Exchange.java:452)
	at java.net.http/jdk.internal.net.http.Exchange.lambda$responseAsyncImpl0$9(Exchange.java:585)
	at java.base/java.util.concurrent.CompletableFuture.uniHandle(CompletableFuture.java:934)
	at java.base/java.util.concurrent.CompletableFuture.uniHandleStage(CompletableFuture.java:950)
	at java.base/java.util.concurrent.CompletableFuture.handle(CompletableFuture.java:2372)
	at java.net.http/jdk.internal.net.http.Exchange.responseAsyncImpl0(Exchange.java:585)
	at java.net.http/jdk.internal.net.http.Exchange.responseAsyncImpl(Exchange.java:428)
	at java.net.http/jdk.internal.net.http.Exchange.responseAsync(Exchange.java:420)
	at java.net.http/jdk.internal.net.http.MultiExchange.responseAsyncImpl(MultiExchange.java:435)
	at java.net.http/jdk.internal.net.http.MultiExchange.lambda$responseAsyncImpl$7(MultiExchange.java:477)
	at java.base/java.util.concurrent.CompletableFuture.uniHandle(CompletableFuture.java:934)
	at java.base/java.util.concurrent.CompletableFuture.uniHandleStage(CompletableFuture.java:950)
	at java.base/java.util.concurrent.CompletableFuture.handle(CompletableFuture.java:2372)
	at java.net.http/jdk.internal.net.http.MultiExchange.responseAsyncImpl(MultiExchange.java:467)
	at java.net.http/jdk.internal.net.http.MultiExchange.lambda$responseAsync0$2(MultiExchange.java:355)
	at java.base/java.util.concurrent.CompletableFuture$UniCompose.tryFire(CompletableFuture.java:1150)
	at java.base/java.util.concurrent.CompletableFuture.postComplete(CompletableFuture.java:510)
	at java.base/java.util.concurrent.CompletableFuture$AsyncSupply.run(CompletableFuture.java:1773)
	at java.net.http/jdk.internal.net.http.HttpClientImpl$DelegatingExecutor.execute(HttpClientImpl.java:177)
	at java.base/java.util.concurrent.CompletableFuture.completeAsync(CompletableFuture.java:2719)
	at java.net.http/jdk.internal.net.http.MultiExchange.responseAsync(MultiExchange.java:308)
	at java.net.http/jdk.internal.net.http.HttpClientImpl.sendAsync(HttpClientImpl.java:1053)
	at java.net.http/jdk.internal.net.http.HttpClientImpl.send(HttpClientImpl.java:933)
	... 8 common frames omitted
Caused by: java.nio.channels.UnresolvedAddressException
	at java.base/sun.nio.ch.Net.checkAddress(Net.java:147)
	at java.base/sun.nio.ch.Net.checkAddress(Net.java:155)
	at java.base/sun.nio.ch.SocketChannelImpl.checkRemote(SocketChannelImpl.java:842)
	at java.base/sun.nio.ch.SocketChannelImpl.connect(SocketChannelImpl.java:865)
	at java.net.http/jdk.internal.net.http.PlainHttpConnection.lambda$connectAsync$1(PlainHttpConnection.java:210)
	at java.base/java.security.AccessController.doPrivileged(AccessController.java:571)
	at java.net.http/jdk.internal.net.http.PlainHttpConnection.connectAsync(PlainHttpConnection.java:212)
	... 33 common frames omitted
  Attempt 4/30: DOWN
2026-10-03 11:42:51 [main] INFO  org.hibernate.orm.core - HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
2026-10-03 11:42:51 [main] INFO  org.hibernate.orm.jdbc.batch - HHH100501: Automatic JDBC statement batching enabled (maximum batch size 5000)
2026-10-03 11:42:53 [main] WARN  org.hibernate.orm.jdbc.error - HHH000247: ErrorCode: 0, SQLState: 08001
2026-10-03 11:42:53 [main] WARN  org.hibernate.orm.jdbc.error - Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
2026-10-03 11:42:53 [main] ERROR o.s.o.j.LocalContainerEntityManagerFactoryBean - Failed to initialize JPA EntityManagerFactory: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.exception.JDBCConnectionException: Unable to open JDBC Connection for DDL execution [Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.] [n/a]
2026-10-03 11:42:53 [main] ERROR o.s.b.t.s.DeferredServletContainerInitializers - Error starting Tomcat context. Exception: org.springframework.beans.factory.UnsatisfiedDependencyException. Message: Error creating bean with name 'jwtAuthenticationFilter' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/epay-common-1.0.0-SNAPSHOT.jar!/com/epay/common/config/security/JwtAuthenticationFilter.class]: Unsatisfied dependency expressed through constructor parameter 1: Error creating bean with name 'customUserDetailsService' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/epay-common-1.0.0-SNAPSHOT.jar!/com/epay/common/config/components/CustomUserDetailsService.class]: Unsatisfied dependency expressed through constructor parameter 0: Error creating bean with name 'userLookupAdapter' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/auth-1.0.0-SNAPSHOT.jar!/com/epay/auth/config/UserLookupAdapter.class]: Unsatisfied dependency expressed through constructor parameter 0: Error creating bean with name 'userRepository' defined in com.epay.domain.auth.repository.UserRepository defined in @EnableJpaRepositories declared on EpayApplication: Cannot resolve reference to bean 'jpaSharedEM_entityManagerFactory' while setting bean property 'entityManager'
2026-10-03 11:42:53 [main] INFO  o.a.catalina.core.StandardService - Stopping service [Tomcat]
2026-10-03 11:42:53 [main] WARN  o.a.c.loader.WebappClassLoaderBase - The web application [ROOT] appears to have started a thread named [prometheus-metrics-scheduler-0] but has failed to stop it. This is very likely to create a memory leak. Stack trace of thread:
 java.base/jdk.internal.misc.Unsafe.park(Native Method)
 java.base/java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:269)
 java.base/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:1797)
 java.base/java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:1182)
 java.base/java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:899)
 java.base/java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1070)
 java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)
 java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)
 java.base/java.lang.Thread.run(Thread.java:1583)
2026-10-03 11:42:53 [main] WARN  o.a.c.loader.WebappClassLoaderBase - The web application [ROOT] appears to have started a thread named [AsyncReporter{ZipkinHttpClientSender{http://zipkin:9411/api/v2/spans}}] but has failed to stop it. This is very likely to create a memory leak. Stack trace of thread:
 java.base/jdk.internal.misc.Unsafe.park(Native Method)
 java.base/java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:269)
 java.base/java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:1797)
 zipkin2.reporter.internal.CountBoundedQueue.drainTo(CountBoundedQueue.java:81)
 zipkin2.reporter.internal.AsyncReporter$BoundedAsyncReporter.flush(AsyncReporter.java:241)
 zipkin2.reporter.internal.AsyncReporter$Flusher.run(AsyncReporter.java:352)
 java.base/java.lang.Thread.run(Thread.java:1583)
2026-10-03 11:42:53 [main] WARN  o.s.b.w.s.s.c.AnnotationConfigServletWebServerApplicationContext - Exception encountered during context initialization - cancelling refresh attempt: org.springframework.context.ApplicationContextException: Unable to start web server
2026-10-03 11:42:53 [main] INFO  o.s.b.a.l.ConditionEvaluationReportLogger - 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-10-03 11:42:53 [main] ERROR o.s.boot.SpringApplication - Application run failed
org.springframework.context.ApplicationContextException: Unable to start web server
	at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:167)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:615)
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
Caused by: org.springframework.boot.web.server.WebServerException: Unable to start embedded Tomcat
	at org.springframework.boot.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:150)
	at org.springframework.boot.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:110)
	at org.springframework.boot.tomcat.servlet.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:429)
	at org.springframework.boot.tomcat.servlet.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:167)
	at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:190)
	at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:164)
	... 13 common frames omitted
Caused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'jwtAuthenticationFilter' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/epay-common-1.0.0-SNAPSHOT.jar!/com/epay/common/config/security/JwtAuthenticationFilter.class]: Unsatisfied dependency expressed through constructor parameter 1: Error creating bean with name 'customUserDetailsService' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/epay-common-1.0.0-SNAPSHOT.jar!/com/epay/common/config/components/CustomUserDetailsService.class]: Unsatisfied dependency expressed through constructor parameter 0: Error creating bean with name 'userLookupAdapter' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/auth-1.0.0-SNAPSHOT.jar!/com/epay/auth/config/UserLookupAdapter.class]: Unsatisfied dependency expressed through constructor parameter 0: Error creating bean with name 'userRepository' defined in com.epay.domain.auth.repository.UserRepository defined in @EnableJpaRepositories declared on EpayApplication: Cannot resolve reference to bean 'jpaSharedEM_entityManagerFactory' while setting bean property 'entityManager'
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:804)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:240)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1380)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1219)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:231)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:185)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:180)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:165)
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:97)
	at org.springframework.boot.web.context.servlet.WebApplicationContextInitializer.initialize(WebApplicationContextInitializer.java:53)
	at org.springframework.boot.tomcat.servlet.DeferredServletContainerInitializers.onStartup(DeferredServletContainerInitializers.java:55)
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4420)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1162)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1158)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:81)
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:145)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:714)
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:780)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1162)
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1158)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:81)
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:145)
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:714)
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:201)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:410)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:864)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164)
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:435)
	at org.springframework.boot.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:131)
	... 18 common frames omitted
Caused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'customUserDetailsService' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/epay-common-1.0.0-SNAPSHOT.jar!/com/epay/common/config/components/CustomUserDetailsService.class]: Unsatisfied dependency expressed through constructor parameter 0: Error creating bean with name 'userLookupAdapter' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/auth-1.0.0-SNAPSHOT.jar!/com/epay/auth/config/UserLookupAdapter.class]: Unsatisfied dependency expressed through constructor parameter 0: Error creating bean with name 'userRepository' defined in com.epay.domain.auth.repository.UserRepository defined in @EnableJpaRepositories declared on EpayApplication: Cannot resolve reference to bean 'jpaSharedEM_entityManagerFactory' while setting bean property 'entityManager'
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:804)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:240)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1380)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1219)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:229)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1769)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1658)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:912)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 58 common frames omitted
Caused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'userLookupAdapter' defined in URL [jar:nested:/home/runner/work/epay-payment-system/epay-payment-system/epay/main/target/epay-server.jar/!BOOT-INF/lib/auth-1.0.0-SNAPSHOT.jar!/com/epay/auth/config/UserLookupAdapter.class]: Unsatisfied dependency expressed through constructor parameter 0: Error creating bean with name 'userRepository' defined in com.epay.domain.auth.repository.UserRepository defined in @EnableJpaRepositories declared on EpayApplication: Cannot resolve reference to bean 'jpaSharedEM_entityManagerFactory' while setting bean property 'entityManager'
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:804)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:240)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1380)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1219)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:229)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1769)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1658)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:912)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 72 common frames omitted
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'userRepository' defined in com.epay.domain.auth.repository.UserRepository defined in @EnableJpaRepositories declared on EpayApplication: Cannot resolve reference to bean 'jpaSharedEM_entityManagerFactory' while setting bean property 'entityManager'
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:377)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1710)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1459)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:602)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveBean(DefaultListableBeanFactory.java:1232)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1711)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1658)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:912)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 86 common frames omitted
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'jpaSharedEM_entityManagerFactory': Cannot resolve reference to bean 'entityManagerFactory' while setting constructor argument
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:377)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1360)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1192)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:565)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:356)
	... 100 common frames omitted
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.exception.JDBCConnectionException: Unable to open JDBC Connection for DDL execution [Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.] [n/a]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1815)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:196)
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365)
	... 112 common frames omitted
Caused by: jakarta.persistence.PersistenceException: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.exception.JDBCConnectionException: Unable to open JDBC Connection for DDL execution [Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.] [n/a]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:448)
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411)
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1862)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1811)
	... 119 common frames omitted
Caused by: org.hibernate.exception.JDBCConnectionException: Unable to open JDBC Connection for DDL execution [Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.] [n/a]
	at org.hibernate.exception.internal.SQLStateConversionDelegate.convert(SQLStateConversionDelegate.java:80)
	at org.hibernate.exception.internal.StandardSQLExceptionConverter.convert(StandardSQLExceptionConverter.java:34)
	at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:115)
	at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:101)
	at org.hibernate.resource.transaction.backend.jdbc.internal.DdlTransactionIsolatorNonJtaImpl.getIsolatedConnection(DdlTransactionIsolatorNonJtaImpl.java:71)
	at org.hibernate.resource.transaction.backend.jdbc.internal.DdlTransactionIsolatorNonJtaImpl.getIsolatedConnection(DdlTransactionIsolatorNonJtaImpl.java:37)
	at org.hibernate.tool.schema.internal.exec.ImprovedExtractionContextImpl.getJdbcConnection(ImprovedExtractionContextImpl.java:61)
	at org.hibernate.tool.schema.extract.spi.ExtractionContext.getQueryResults(ExtractionContext.java:41)
	at org.hibernate.tool.schema.extract.internal.SequenceInformationExtractorLegacyImpl.extractMetadata(SequenceInformationExtractorLegacyImpl.java:36)
	at org.hibernate.tool.schema.extract.internal.DatabaseInformationImpl.initializeSequences(DatabaseInformationImpl.java:73)
	at org.hibernate.tool.schema.extract.internal.DatabaseInformationImpl.<init>(DatabaseInformationImpl.java:63)
	at org.hibernate.tool.schema.extract.internal.CachingDatabaseInformationImpl.<init>(CachingDatabaseInformationImpl.java:43)
	at org.hibernate.tool.schema.internal.GroupedSchemaMigratorImpl.buildDatabaseInformation(GroupedSchemaMigratorImpl.java:112)
	at org.hibernate.tool.schema.internal.AbstractSchemaMigrator.doMigration(AbstractSchemaMigrator.java:83)
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:269)
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$1(SchemaManagementToolCoordinator.java:101)
	at java.base/java.util.HashMap.forEach(HashMap.java:1429)
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:100)
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:35)
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:33)
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:327)
	at org.hibernate.internal.SessionFactoryRegistry.instantiateSessionFactory(SessionFactoryRegistry.java:64)
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:458)
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1452)
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93)
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443)
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436)
	... 123 common frames omitted
Caused by: org.postgresql.util.PSQLException: Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:425)
	at org.postgresql.core.ConnectionFactory.openConnection(ConnectionFactory.java:52)
	at org.postgresql.jdbc.PgConnection.<init>(PgConnection.java:290)
	at org.postgresql.Driver.makeConnection(Driver.java:448)
	at org.postgresql.Driver.connect(Driver.java:298)
	at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:144)
	at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:373)
	at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:210)
	at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:488)
	at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:576)
	at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:97)
	at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:111)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at net.ttddyy.dsproxy.proxy.ProxyLogicSupport.proceedExecution(ProxyLogicSupport.java:72)
	at net.ttddyy.dsproxy.proxy.DataSourceProxyLogic.performProxyLogic(DataSourceProxyLogic.java:41)
	at net.ttddyy.dsproxy.proxy.ProxyLogicSupport.proceedMethodExecution(ProxyLogicSupport.java:103)
	at net.ttddyy.dsproxy.proxy.DataSourceProxyLogic.invoke(DataSourceProxyLogic.java:28)
	at net.ttddyy.dsproxy.proxy.jdk.DataSourceInvocationHandler.invoke(DataSourceInvocationHandler.java:24)
	at jdk.proxy2/jdk.proxy2.$Proxy137.getConnection(Unknown Source)
	at org.hibernate.engine.jdbc.connections.internal.DataSourceConnectionProvider.getConnection(DataSourceConnectionProvider.java:149)
	at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:508)
	at org.hibernate.resource.transaction.backend.jdbc.internal.DdlTransactionIsolatorNonJtaImpl.getIsolatedConnection(DdlTransactionIsolatorNonJtaImpl.java:44)
	... 145 common frames omitted
Caused by: java.net.ConnectException: Connection refused
	at java.base/sun.nio.ch.Net.pollConnect(Native Method)
	at java.base/sun.nio.ch.Net.pollConnectNow(Net.java:694)
	at java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:542)
	at java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:592)
	at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:327)
	at java.base/java.net.Socket.connect(Socket.java:751)
	at org.postgresql.core.PGStream.createSocket(PGStream.java:271)
	at org.postgresql.core.PGStream.<init>(PGStream.java:132)
	at org.postgresql.core.v3.ConnectionFactoryImpl.tryConnect(ConnectionFactoryImpl.java:219)
	at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:365)
	... 167 common frames omitted
  Attempt 5/30: DOWN
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