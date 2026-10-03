"k6 Smoke Test" Error

Run java -jar main/target/epay-server.jar \
Waiting for app to start...
  Attempt 1/30: DOWN
  Attempt 2/30: DOWN
10:29:37,960 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Missing watchable .xml or .properties files.
10:29:37,961 |-WARN in ch.qos.logback.classic.model.processor.ConfigurationModelHandlerFull - Watching .xml files requires that the main configuration file is reachable as a URL
10:29:38,103 |-ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - Failed to create parent directories for [/var/log/epay/app.log]
10:29:38,106 |-ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - openFile(/var/log/epay/app.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
	at java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
	at 	at java.base/java.io.FileOutputStream.open0(Native Method)
	at 	at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
	at 	at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
	at 	at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
	at 	at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
	at 	at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
	at 	at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
	at 	at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
	at 	at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
	at 	at org.springframework.boot.logging.AbstractLoggingSystem.initializeWithConventions(AbstractLoggingSystem.java:86)
	at 	at org.springframework.boot.logging.AbstractLoggingSystem.initialize(AbstractLoggingSystem.java:65)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.initialize(LogbackLoggingSystem.java:197)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.initializeSystem(LoggingApplicationListener.java:337)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.initialize(LoggingApplicationListener.java:302)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEnvironmentPreparedEvent(LoggingApplicationListener.java:248)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEvent(LoggingApplicationListener.java:225)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:180)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:173)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:151)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:133)
	at 	at org.springframework.boot.context.event.EventPublishingRunListener.multicastInitialEvent(EventPublishingRunListener.java:137)
	at 	at org.springframework.boot.context.event.EventPublishingRunListener.environmentPrepared(EventPublishingRunListener.java:82)
	at 	at org.springframework.boot.SpringApplicationRunListeners.lambda$environmentPrepared$0(SpringApplicationRunListeners.java:66)
	at 	at java.base/java.lang.Iterable.forEach(Iterable.java:75)
	at 	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:123)
	at 	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:117)
	at 	at org.springframework.boot.SpringApplicationRunListeners.environmentPrepared(SpringApplicationRunListeners.java:65)
	at 	at org.springframework.boot.SpringApplication.prepareEnvironment(SpringApplication.java:356)
2026-10-03 10:29:38 [main] ERROR o.s.boot.SpringApplication - Application run failed
	at 	at org.springframework.boot.SpringApplication.run(SpringApplication.java:316)
	at 	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365)
java.lang.IllegalStateException: java.lang.IllegalStateException: Logback configuration error detected: 
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - Failed to create parent directories for [/var/log/epay/app.log]
	at 	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354)
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - openFile(/var/log/epay/app.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
	at 	at com.epay.EpayApplication.main(EpayApplication.java:16)
	at 	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - Failed to create parent directories for [/var/log/epay/audit.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - openFile(/var/log/epay/audit.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
	at 	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initializeSystem(LoggingApplicationListener.java:352)
	at 	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106)
	at 	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initialize(LoggingApplicationListener.java:302)
	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEnvironmentPreparedEvent(LoggingApplicationListener.java:248)
	at 	at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40)
	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEvent(LoggingApplicationListener.java:225)
10:29:38,111 |-ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - Failed to create parent directories for [/var/log/epay/audit.log]
10:29:38,111 |-ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - openFile(/var/log/epay/audit.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:180)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:173)
	at java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:151)
	at 	at java.base/java.io.FileOutputStream.open0(Native Method)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:133)
	at 	at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
	at org.springframework.boot.context.event.EventPublishingRunListener.multicastInitialEvent(EventPublishingRunListener.java:137)
	at 	at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
	at 	at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
	at 	at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
	at 	at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
	at 	at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
	at 	at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
	at 	at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
	at 	at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
	at 	at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
	at 	at org.springframework.boot.logging.AbstractLoggingSystem.initializeWithConventions(AbstractLoggingSystem.java:86)
	at 	at org.springframework.boot.logging.AbstractLoggingSystem.initialize(AbstractLoggingSystem.java:65)
	at 	at org.springframework.boot.logging.logback.LogbackLoggingSystem.initialize(LogbackLoggingSystem.java:197)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.initializeSystem(LoggingApplicationListener.java:337)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.initialize(LoggingApplicationListener.java:302)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEnvironmentPreparedEvent(LoggingApplicationListener.java:248)
	at 	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEvent(LoggingApplicationListener.java:225)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:180)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:173)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:151)
	at 	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:133)
	at 	at org.springframework.boot.context.event.EventPublishingRunListener.multicastInitialEvent(EventPublishingRunListener.java:137)
	at 	at org.springframework.boot.context.event.EventPublishingRunListener.environmentPrepared(EventPublishingRunListener.java:82)
	at 	at org.springframework.boot.SpringApplicationRunListeners.lambda$environmentPrepared$0(SpringApplicationRunListeners.java:66)
	at 	at java.base/java.lang.Iterable.forEach(Iterable.java:75)
	at 	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:123)
	at 	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:117)
	at 	at org.springframework.boot.SpringApplicationRunListeners.environmentPrepared(SpringApplicationRunListeners.java:65)
	at 	at org.springframework.boot.SpringApplication.prepareEnvironment(SpringApplication.java:356)
	at 	at org.springframework.boot.SpringApplication.run(SpringApplication.java:316)
	at 	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365)
	at 	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354)
	at 	at com.epay.EpayApplication.main(EpayApplication.java:16)
	at 	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at 	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at 	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106)
	at 	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64)
	at 	at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40)
Logging system failed to initialize using configuration from 'null'
java.lang.IllegalStateException: Logback configuration error detected: 
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - Failed to create parent directories for [/var/log/epay/app.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - openFile(/var/log/epay/app.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - Failed to create parent directories for [/var/log/epay/audit.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - openFile(/var/log/epay/audit.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.reportConfigurationErrorsIfNecessary(LogbackLoggingSystem.java:296)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:274)
	at org.springframework.boot.logging.AbstractLoggingSystem.initializeWithConventions(AbstractLoggingSystem.java:86)
	at org.springframework.boot.logging.AbstractLoggingSystem.initialize(AbstractLoggingSystem.java:65)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.initialize(LogbackLoggingSystem.java:197)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initializeSystem(LoggingApplicationListener.java:337)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initialize(LoggingApplicationListener.java:302)
	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEnvironmentPreparedEvent(LoggingApplicationListener.java:248)
	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEvent(LoggingApplicationListener.java:225)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:180)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:173)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:151)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:133)
	at org.springframework.boot.context.event.EventPublishingRunListener.multicastInitialEvent(EventPublishingRunListener.java:137)
	at org.springframework.boot.context.event.EventPublishingRunListener.environmentPrepared(EventPublishingRunListener.java:82)
	at org.springframework.boot.SpringApplicationRunListeners.lambda$environmentPrepared$0(SpringApplicationRunListeners.java:66)
	at java.base/java.lang.Iterable.forEach(Iterable.java:75)
	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:123)
	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:117)
	at org.springframework.boot.SpringApplicationRunListeners.environmentPrepared(SpringApplicationRunListeners.java:65)
	at org.springframework.boot.SpringApplication.prepareEnvironment(SpringApplication.java:356)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:316)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354)
	at com.epay.EpayApplication.main(EpayApplication.java:16)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64)
	at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40)
	Suppressed: java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
		at java.base/java.io.FileOutputStream.open0(Native Method)
		at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
		at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
		at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
		at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
		at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
		at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
		at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
		at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
		at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
		at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
		... 28 more
	Suppressed: java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
		at java.base/java.io.FileOutputStream.open0(Native Method)
		at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
		at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
		at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
		at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
		at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
		at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
		at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
		at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
		at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
		at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
		... 28 more
10:29:38,184 |-WARN in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - Attempted to append to non started appender [APP_FILE].
Exception in thread "main" java.lang.reflect.InvocationTargetException
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:118)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64)
	at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40)
Caused by: java.lang.IllegalStateException: java.lang.IllegalStateException: Logback configuration error detected: 
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - Failed to create parent directories for [/var/log/epay/app.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - openFile(/var/log/epay/app.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - Failed to create parent directories for [/var/log/epay/audit.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - openFile(/var/log/epay/audit.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initializeSystem(LoggingApplicationListener.java:352)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initialize(LoggingApplicationListener.java:302)
	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEnvironmentPreparedEvent(LoggingApplicationListener.java:248)
	at org.springframework.boot.context.logging.LoggingApplicationListener.onApplicationEvent(LoggingApplicationListener.java:225)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:180)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:173)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:151)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:133)
	at org.springframework.boot.context.event.EventPublishingRunListener.multicastInitialEvent(EventPublishingRunListener.java:137)
	at org.springframework.boot.context.event.EventPublishingRunListener.environmentPrepared(EventPublishingRunListener.java:82)
	at org.springframework.boot.SpringApplicationRunListeners.lambda$environmentPrepared$0(SpringApplicationRunListeners.java:66)
	at java.base/java.lang.Iterable.forEach(Iterable.java:75)
	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:123)
	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:117)
	at org.springframework.boot.SpringApplicationRunListeners.environmentPrepared(SpringApplicationRunListeners.java:65)
	at org.springframework.boot.SpringApplication.prepareEnvironment(SpringApplication.java:356)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:316)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354)
	at com.epay.EpayApplication.main(EpayApplication.java:16)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	... 4 more
Caused by: java.lang.IllegalStateException: Logback configuration error detected: 
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - Failed to create parent directories for [/var/log/epay/app.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - openFile(/var/log/epay/app.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - Failed to create parent directories for [/var/log/epay/audit.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - openFile(/var/log/epay/audit.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.reportConfigurationErrorsIfNecessary(LogbackLoggingSystem.java:296)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:274)
	at org.springframework.boot.logging.AbstractLoggingSystem.initializeWithConventions(AbstractLoggingSystem.java:86)
	at org.springframework.boot.logging.AbstractLoggingSystem.initialize(AbstractLoggingSystem.java:65)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.initialize(LogbackLoggingSystem.java:197)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initializeSystem(LoggingApplicationListener.java:337)
	... 24 more
	Suppressed: java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
		at java.base/java.io.FileOutputStream.open0(Native Method)
		at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
		at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
		at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
		at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
		at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
		at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
		at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
		at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
		at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
		at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
		... 28 more
	Suppressed: java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
		at java.base/java.io.FileOutputStream.open0(Native Method)
		at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
		at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
		at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
		at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
		at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
		at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
		at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
		at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
		at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
		at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
		... 28 more
	at org.springframework.boot.context.event.EventPublishingRunListener.environmentPrepared(EventPublishingRunListener.java:82)
	at org.springframework.boot.SpringApplicationRunListeners.lambda$environmentPrepared$0(SpringApplicationRunListeners.java:66)
	at java.base/java.lang.Iterable.forEach(Iterable.java:75)
	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:123)
	at org.springframework.boot.SpringApplicationRunListeners.doWithListeners(SpringApplicationRunListeners.java:117)
	at org.springframework.boot.SpringApplicationRunListeners.environmentPrepared(SpringApplicationRunListeners.java:65)
	at org.springframework.boot.SpringApplication.prepareEnvironment(SpringApplication.java:356)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:316)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354)
	at com.epay.EpayApplication.main(EpayApplication.java:16)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106)
	at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64)
	at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40)
Caused by: java.lang.IllegalStateException: Logback configuration error detected: 
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - Failed to create parent directories for [/var/log/epay/app.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[APP_FILE] - openFile(/var/log/epay/app.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - Failed to create parent directories for [/var/log/epay/audit.log]
ERROR in ch.qos.logback.core.rolling.RollingFileAppender[AUDIT_FILE] - openFile(/var/log/epay/audit.log,true) call failed. java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.reportConfigurationErrorsIfNecessary(LogbackLoggingSystem.java:296)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:274)
	at org.springframework.boot.logging.AbstractLoggingSystem.initializeWithConventions(AbstractLoggingSystem.java:86)
	at org.springframework.boot.logging.AbstractLoggingSystem.initialize(AbstractLoggingSystem.java:65)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.initialize(LogbackLoggingSystem.java:197)
	at org.springframework.boot.context.logging.LoggingApplicationListener.initializeSystem(LoggingApplicationListener.java:337)
	... 24 common frames omitted
	Suppressed: java.io.FileNotFoundException: /var/log/epay/app.log (No such file or directory)
		at java.base/java.io.FileOutputStream.open0(Native Method)
		at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
		at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
		at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
		at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
		at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
		at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
		at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
		at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
		at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
		at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
		... 28 common frames omitted
	Suppressed: java.io.FileNotFoundException: /var/log/epay/audit.log (No such file or directory)
		at java.base/java.io.FileOutputStream.open0(Native Method)
		at java.base/java.io.FileOutputStream.open(FileOutputStream.java:289)
		at java.base/java.io.FileOutputStream.<init>(FileOutputStream.java:230)
		at ch.qos.logback.core.recovery.ResilientFileOutputStream.<init>(ResilientFileOutputStream.java:26)
		at ch.qos.logback.core.FileAppender.openFile(FileAppender.java:165)
		at ch.qos.logback.core.FileAppender.start(FileAppender.java:120)
		at ch.qos.logback.core.rolling.RollingFileAppender.start(RollingFileAppender.java:104)
		at ch.qos.logback.core.model.processor.AppenderModelHandler.postHandle(AppenderModelHandler.java:85)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:260)
		at ch.qos.logback.core.model.processor.DefaultProcessor.secondPhaseTraverse(DefaultProcessor.java:256)
		at ch.qos.logback.core.model.processor.DefaultProcessor.traversalLoop(DefaultProcessor.java:88)
		at ch.qos.logback.core.model.processor.DefaultProcessor.process(DefaultProcessor.java:104)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.processModel(GenericXMLConfigurator.java:239)
		at org.springframework.boot.logging.logback.SpringBootJoranConfigurator.processModel(SpringBootJoranConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:195)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:139)
		at ch.qos.logback.core.joran.GenericXMLConfigurator.doConfigure(GenericXMLConfigurator.java:76)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.configureByResourceUrl(LogbackLoggingSystem.java:305)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.lambda$loadConfiguration$0(LogbackLoggingSystem.java:267)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.withLoggingSuppressed(LogbackLoggingSystem.java:491)
		at org.springframework.boot.logging.logback.LogbackLoggingSystem.loadConfiguration(LogbackLoggingSystem.java:257)
		... 28 common frames omitted
  Attempt 3/30: DOWN
  Attempt 4/30: DOWN
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



# Vitest Unit Tests

Run npm run test:coverage

> frontend@0.1.0 test:coverage
> vitest run --coverage

The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

 RUN  v2.1.9 /home/runner/work/epay-payment-system/epay-payment-system/frontend
      Coverage enabled with v8

 ✓ __tests__/utils/formatCurrency.test.ts (8 tests) 17ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  10:29:40
   Duration  2.39s (transform 37ms, setup 54ms, collect 17ms, tests 17ms, environment 371ms, prepare 70ms)

 % Coverage report from v8
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |    0.18 |     28.3 |   19.14 |    0.18 |                   
 frontend          |       0 |        0 |       0 |       0 |                   
  ...nt.config.mjs |       0 |        0 |       0 |       0 | 1-49              
  middleware.ts    |       0 |        0 |       0 |       0 | 1-194             
  ...ss.config.mjs |       0 |        0 |       0 |       0 | 1-7               
 ..._tests__/utils |     100 |      100 |     100 |     100 |                   
  ...rency.test.ts |     100 |      100 |     100 |     100 |                   
 frontend/app      |       0 |        0 |       0 |       0 |                   
  layout.tsx       |       0 |        0 |       0 |       0 | 1-48              
  page.tsx         |       0 |        0 |       0 |       0 | 1-53              
 frontend/app/api  |       0 |       50 |      50 |       0 |                   
  config.ts        |       0 |      100 |     100 |       0 | 3-181             
  index.ts         |       0 |        0 |       0 |       0 | 1-56              
  utils.ts         |       0 |        0 |       0 |       0 | 1-450             
  xhrClient.ts     |       0 |      100 |     100 |       0 | 13-160            
 ...p/api/services |       0 |        0 |       0 |       0 |                   
  authService.jsx  |       0 |        0 |       0 |       0 | 1-60              
  ...ctionList.jsx |       0 |        0 |       0 |       0 | 1-58              
  ...ryService.jsx |       0 |        0 |       0 |       0 | 1-51              
  ...igService.jsx |       0 |        0 |       0 |       0 | 1-26              
  ...itService.jsx |       0 |        0 |       0 |       0 | 1-58              
  ...geService.jsx |       0 |        0 |       0 |       0 | 1-15              
  ...ryService.jsx |       0 |        0 |       0 |       0 | 1-25              
  ...ntService.jsx |       0 |        0 |       0 |       0 | 1-53              
  ...ntService.jsx |       0 |        0 |       0 |       0 | 1-19              
  ...ortService.ts |       0 |        0 |       0 |       0 | 1-53              
  userService.jsx  |       0 |        0 |       0 |       0 | 1-49              
  ...rdService.jsx |       0 |        0 |       0 |       0 | 1-16              
  ...etService.jsx |       0 |        0 |       0 |       0 | 1-33              
  ...awService.jsx |       0 |        0 |       0 |       0 | 1-16              
 ...pp/auth/logout |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-68              
 ...tend/app/bills |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-179             
 ...tend/app/cards |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1465            
 ...app/components |       0 |        0 |       0 |       0 |                   
  ...Migration.tsx |       0 |        0 |       0 |       0 | 1-47              
 ...nd/app/context |       0 |        0 |       0 |       0 |                   
  ...eProvider.tsx |       0 |        0 |       0 |       0 | 1-57              
 .../app/dashboard |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-839             
 ...nd/app/default |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1627            
 ...d/app/exchange |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1101            
 ...pp/investments |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1051            
 ...ents/portfolio |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1039            
 frontend/app/lib  |       0 |    36.36 |   36.36 |       0 |                   
  ...ecordData.tsx |       0 |        0 |       0 |       0 | 1-46              
  BillsData.tsx    |       0 |        0 |       0 |       0 | 1-83              
  CableService.tsx |       0 |      100 |     100 |       0 | 7-79              
  CountryCode.tsx  |       0 |      100 |     100 |       0 | 16-150            
  ...yProvider.tsx |       0 |        0 |       0 |       0 | 1-47              
  ...eProvider.tsx |       0 |        0 |       0 |       0 | 1-36              
  SupportData.tsx  |       0 |        0 |       0 |       0 | 1-110             
  auth.ts          |       0 |      100 |     100 |       0 | 2-8               
  historyData.tsx  |       0 |        0 |       0 |       0 | 1-301             
  referralData.tsx |       0 |      100 |     100 |       0 | 3-23              
  walletCrate.ts   |       0 |        0 |       0 |       0 | 1-11              
 ...tend/app/refer |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-559             
 .../bills/airtime |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-442             
 .../bills/betting |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-406             
 .../bills/cabletv |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-436             
 ...ces/bills/data |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-442             
 ...ls/electricity |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-386             
 ...bills/shopping |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-345             
 ...ttings/general |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-2218            
 ...ttings/profile |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1689            
 ...nd/app/support |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-402             
 ...tend/app/types |       0 |      100 |     100 |       0 |                   
  api.ts           |       0 |        0 |       0 |       0 |                   
  auth.ts          |       0 |        0 |       0 |       0 |                   
  dto.ts           |       0 |        0 |       0 |       0 |                   
  errors.ts        |       0 |        0 |       0 |       0 |                   
  faqData.ts       |       0 |      100 |     100 |       0 | 23-487            
  response.ts      |       0 |        0 |       0 |       0 |                   
  utils.ts         |       0 |        0 |       0 |       0 |                   
 ...tend/app/utils |       0 |      100 |     100 |       0 |                   
  eventEmitter.ts  |       0 |      100 |     100 |       0 | 3-28              
 .../utils/mappers |       0 |      100 |     100 |       0 |                   
  ...ent.mapper.ts |       0 |      100 |     100 |       0 | 3-16              
 ...allet/accounts |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1388            
 ...et/beneficiary |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-937             
 .../deposit-banks |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-991             
 ...let/statements |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-1864            
 ...end/components |       0 |        5 |       5 |       0 |                   
  AddBankModal.tsx |       0 |        0 |       0 |       0 | 1-118             
  BankerLoader.tsx |       0 |        0 |       0 |       0 | 1-13              
  ...lterModal.tsx |       0 |        0 |       0 |       0 | 1-668             
  ...toryModal.tsx |       0 |        0 |       0 |       0 | 1-127             
  DepositModal.tsx |       0 |        0 |       0 |       0 | 1-682             
  Footer.tsx       |       0 |        0 |       0 |       0 | 1-64              
  Header.tsx       |       0 |        0 |       0 |       0 | 1-670             
  History.tsx      |       0 |        0 |       0 |       0 | 1-392             
  ...cessModal.tsx |       0 |        0 |       0 |       0 | 1-96              
  MobileNav.tsx    |       0 |        0 |       0 |       0 | 1-64              
  News.tsx         |       0 |        0 |       0 |       0 | 1-111             
  ...iderModal.tsx |       0 |        0 |       0 |       0 | 1-66              
  ...haseModal.tsx |       0 |        0 |       0 |       0 | 1-247             
  Sidebar.tsx      |       0 |        0 |       0 |       0 | 1-185             
  SuccessModal.tsx |       0 |        0 |       0 |       0 | 1-30              
  ...rtChatBot.tsx |       0 |        0 |       0 |       0 | 1-1588            
  ...onReceipt.tsx |       0 |        0 |       0 |       0 | 1-669             
  WelcomeModal.tsx |       0 |        0 |       0 |       0 | 1-69              
  ...drawModal.tsx |       0 |        0 |       0 |       0 | 1-1418            
  countries.ts     |       0 |      100 |     100 |       0 | 3-252             
 ...components/Kyc |       0 |        0 |       0 |       0 |                   
  page.tsx         |       0 |        0 |       0 |       0 | 1-54              
 ...ponents/loader |       0 |        0 |       0 |       0 |                   
  ...ingscreen.tsx |       0 |        0 |       0 |       0 | 1-43              
 ...nents/supports |       0 |        0 |       0 |       0 |                   
  CallSupport.tsx  |       0 |        0 |       0 |       0 | 1-7               
  ...mentation.tsx |       0 |        0 |       0 |       0 | 1-7               
  EmailSupport.tsx |       0 |        0 |       0 |       0 | 1-7               
-------------------|---------|----------|---------|---------|-------------------
ERROR: Coverage for lines (0.18%) does not meet global threshold (60%)
ERROR: Coverage for functions (19.14%) does not meet global threshold (60%)
ERROR: Coverage for statements (0.18%) does not meet global threshold (60%)
ERROR: Coverage for branches (28.3%) does not meet global threshold (50%)
Error: Process completed with exit code.



# Trivy Image Scan (epay-frontend, ./frontend, ./frontend/Dockerfile, false) Error

6s
25s
Run docker/build-push-action@v6
(node:2499) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
GitHub Actions runtime token ACs
Docker info
Proxy configuration
Buildx version
Builder info
/usr/bin/docker buildx build --cache-from type=gha --cache-to type=gha,mode=max --file ./frontend/Dockerfile --iidfile /home/runner/work/_temp/docker-actions-toolkit-gz3KPw/build-iidfile-3256afea69.txt --tag scan-target/epay-frontend:latest --load --metadata-file /home/runner/work/_temp/docker-actions-toolkit-gz3KPw/build-metadata-782596dd9b.json ./frontend
#0 building with "builder-6e07b7a1-3644-4a57-bba3-951c6c9b10e5" instance using docker-container driver

#1 [internal] load build definition from Dockerfile
#1 transferring dockerfile: 1.11kB done
#1 DONE 0.0s

#2 [internal] load metadata for docker.io/library/node:24.20.0-alpine3.24
#2 ...

#3 [auth] library/node:pull token for registry-1.docker.io
#3 DONE 0.0s

#2 [internal] load metadata for docker.io/library/node:24.20.0-alpine3.24
#2 DONE 0.8s

#4 [internal] load .dockerignore
#4 transferring context: 608B done
#4 DONE 0.0s

#5 [internal] load build context
#5 DONE 0.0s

#6 [builder 1/6] FROM docker.io/library/node:24.20.0-alpine3.24@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf
#6 resolve docker.io/library/node:24.20.0-alpine3.24@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf done
#6 DONE 0.0s

#7 importing cache manifest from gha:6027465081949921796
#7 DONE 0.4s

#5 [internal] load build context
#5 transferring context: 31.18MB 0.7s done
#5 DONE 0.7s

#6 [builder 1/6] FROM docker.io/library/node:24.20.0-alpine3.24@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf
#6 sha256:502142e2f20261fd2b9cce9a5883e63c4f830a1f4f3dbf643d6f6dd4e56c16a9 448B / 448B 0.1s done
#6 sha256:b38a07ecd3ea0a536a5bb94db11493f70753da22ae004e3fff49cb5d6add507f 1.26MB / 1.26MB 0.2s done
#6 sha256:a0f82f71477fc2e453be843cff60ca54b0f44a67df7a3f01fddf121b807826be 53.38MB / 53.38MB 0.4s done
#6 sha256:55afa1ecc21d2bb5e5045f32dafee56272ffd89860bac26f6c32123439af26a4 3.85MB / 3.85MB 0.2s done
#6 extracting sha256:55afa1ecc21d2bb5e5045f32dafee56272ffd89860bac26f6c32123439af26a4 0.2s done
#6 extracting sha256:a0f82f71477fc2e453be843cff60ca54b0f44a67df7a3f01fddf121b807826be
#6 extracting sha256:a0f82f71477fc2e453be843cff60ca54b0f44a67df7a3f01fddf121b807826be 1.1s done
#6 DONE 1.6s

#6 [builder 1/6] FROM docker.io/library/node:24.20.0-alpine3.24@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf
#6 extracting sha256:b38a07ecd3ea0a536a5bb94db11493f70753da22ae004e3fff49cb5d6add507f 0.0s done
#6 extracting sha256:502142e2f20261fd2b9cce9a5883e63c4f830a1f4f3dbf643d6f6dd4e56c16a9 done
#6 DONE 1.6s

#8 [builder 2/6] WORKDIR /app
#8 DONE 0.8s

#9 [builder 3/6] COPY package.json package-lock.json* ./
#9 DONE 0.0s

#10 [builder 4/6] RUN npm ci
#10 20.46 npm error code EUSAGE
#10 20.49 npm error
#10 20.49 npm error `npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync. Please update your lock file with `npm install` before continuing.
#10 20.49 npm error
#10 20.49 npm error Missing: @playwright/test@1.63.0 from lock file
#10 20.49 npm error Missing: @testing-library/jest-dom@6.9.1 from lock file
#10 20.49 npm error Missing: @testing-library/react@16.3.3 from lock file
#10 20.49 npm error Missing: @testing-library/dom@10.4.2 from lock file
#10 20.49 npm error Missing: @testing-library/user-event@14.6.7 from lock file
#10 20.49 npm error Missing: @vitejs/plugin-react@4.7.0 from lock file
#10 20.49 npm error Missing: @vitest/coverage-v8@2.1.9 from lock file
#10 20.49 npm error Missing: vitest@2.1.9 from lock file
#10 20.49 npm error Missing: @vitest/ui@2.1.9 from lock file
#10 20.49 npm error Invalid: lock file's eslint-config-next@16.1.1 does not satisfy eslint-config-next@16.3.8
#10 20.49 npm error Missing: jsdom@25.0.1 from lock file
#10 20.49 npm error Invalid: lock file's next@16.1.1 does not satisfy next@16.3.8
#10 20.49 npm error Missing: playwright@1.63.0 from lock file
#10 20.49 npm error Missing: @types/aria-query@5.0.4 from lock file
#10 20.49 npm error Missing: aria-query@5.3.0 from lock file
#10 20.49 npm error Missing: dom-accessibility-api@0.5.16 from lock file
#10 20.49 npm error Missing: lz-string@1.5.0 from lock file
#10 20.49 npm error Missing: pretty-format@27.5.1 from lock file
#10 20.49 npm error Missing: @adobe/css-tools@4.5.0 from lock file
#10 20.49 npm error Missing: css.escape@1.5.1 from lock file
#10 20.49 npm error Missing: dom-accessibility-api@0.6.3 from lock file
#10 20.49 npm error Missing: redent@3.0.0 from lock file
#10 20.49 npm error Missing: @babel/plugin-transform-react-jsx-self@7.29.7 from lock file
#10 20.49 npm error Missing: @babel/plugin-transform-react-jsx-source@7.29.7 from lock file
#10 20.49 npm error Missing: @rolldown/pluginutils@1.0.0-beta.27 from lock file
#10 20.49 npm error Missing: @types/babel__core@7.20.5 from lock file
#10 20.49 npm error Missing: react-refresh@0.17.0 from lock file
#10 20.49 npm error Missing: @babel/helper-plugin-utils@7.29.7 from lock file
#10 20.49 npm error Missing: @types/babel__generator@7.27.0 from lock file
#10 20.49 npm error Missing: @types/babel__template@7.4.4 from lock file
#10 20.49 npm error Missing: @types/babel__traverse@7.28.0 from lock file
#10 20.49 npm error Missing: @ampproject/remapping@2.3.0 from lock file
#10 20.49 npm error Missing: @bcoe/v8-coverage@0.2.3 from lock file
#10 20.49 npm error Missing: istanbul-lib-coverage@3.2.2 from lock file
#10 20.49 npm error Missing: istanbul-lib-report@3.0.1 from lock file
#10 20.49 npm error Missing: istanbul-lib-source-maps@5.0.6 from lock file
#10 20.49 npm error Missing: istanbul-reports@3.2.0 from lock file
#10 20.49 npm error Missing: magicast@0.3.5 from lock file
#10 20.49 npm error Missing: std-env@3.10.0 from lock file
#10 20.49 npm error Missing: test-exclude@7.0.2 from lock file
#10 20.49 npm error Missing: tinyrainbow@1.2.0 from lock file
#10 20.49 npm error Missing: @vitest/utils@2.1.9 from lock file
#10 20.49 npm error Missing: fflate@0.8.3 from lock file
#10 20.49 npm error Missing: pathe@1.1.2 from lock file
#10 20.49 npm error Missing: sirv@3.0.2 from lock file
#10 20.49 npm error Missing: @vitest/pretty-format@2.1.9 from lock file
#10 20.49 npm error Missing: loupe@3.2.1 from lock file
#10 20.49 npm error Missing: yaml@1.10.3 from lock file
#10 20.49 npm error Invalid: lock file's @next/eslint-plugin-next@16.1.1 does not satisfy @next/eslint-plugin-next@16.3.8
#10 20.49 npm error Missing: @eslint-community/eslint-utils@4.9.1 from lock file
#10 20.49 npm error Invalid: lock file's fastq@1.20.1 does not satisfy fastq@1.20.3
#10 20.49 npm error Missing: make-dir@4.0.0 from lock file
#10 20.49 npm error Missing: html-escaper@2.0.2 from lock file
#10 20.49 npm error Missing: cssstyle@4.6.0 from lock file
#10 20.49 npm error Missing: data-urls@5.0.0 from lock file
#10 20.49 npm error Missing: decimal.js@10.6.0 from lock file
#10 20.49 npm error Missing: form-data@4.0.6 from lock file
#10 20.49 npm error Missing: html-encoding-sniffer@4.0.0 from lock file
#10 20.49 npm error Missing: http-proxy-agent@7.0.2 from lock file
#10 20.49 npm error Missing: https-proxy-agent@7.0.6 from lock file
#10 20.49 npm error Missing: is-potential-custom-element-name@1.0.1 from lock file
#10 20.49 npm error Missing: nwsapi@2.2.28 from lock file
#10 20.49 npm error Missing: parse5@7.3.0 from lock file
#10 20.49 npm error Missing: rrweb-cssom@0.7.1 from lock file
#10 20.49 npm error Missing: saxes@6.0.0 from lock file
#10 20.49 npm error Missing: symbol-tree@3.2.4 from lock file
#10 20.49 npm error Missing: tough-cookie@5.1.2 from lock file
#10 20.49 npm error Missing: w3c-xmlserializer@5.0.0 from lock file
#10 20.49 npm error Missing: webidl-conversions@7.0.0 from lock file
#10 20.49 npm error Missing: whatwg-encoding@3.1.1 from lock file
#10 20.49 npm error Missing: whatwg-mimetype@4.0.0 from lock file
#10 20.49 npm error Missing: whatwg-url@14.2.0 from lock file
#10 20.49 npm error Missing: ws@8.22.0 from lock file
#10 20.49 npm error Missing: xml-name-validator@5.0.0 from lock file
#10 20.49 npm error Missing: @asamuzakjp/css-color@3.2.0 from lock file
#10 20.49 npm error Missing: rrweb-cssom@0.8.0 from lock file
#10 20.49 npm error Missing: @csstools/css-calc@2.1.4 from lock file
#10 20.49 npm error Missing: @csstools/css-tokenizer@3.0.4 from lock file
#10 20.49 npm error Missing: @csstools/css-parser-algorithms@3.0.5 from lock file
#10 20.49 npm error Missing: @csstools/css-color-parser@3.1.0 from lock file
#10 20.49 npm error Missing: lru-cache@10.4.3 from lock file
#10 20.49 npm error Missing: @csstools/color-helpers@5.1.0 from lock file
#10 20.49 npm error Missing: asynckit@0.4.0 from lock file
#10 20.49 npm error Missing: combined-stream@1.0.8 from lock file
#10 20.49 npm error Missing: mime-types@2.1.35 from lock file
#10 20.49 npm error Missing: delayed-stream@1.0.0 from lock file
#10 20.49 npm error Missing: agent-base@7.1.4 from lock file
#10 20.49 npm error Missing: semver@7.8.5 from lock file
#10 20.49 npm error Missing: mime-db@1.52.0 from lock file
#10 20.49 npm error Invalid: lock file's @next/env@16.1.1 does not satisfy @next/env@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-darwin-arm64@16.1.1 does not satisfy @next/swc-darwin-arm64@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-darwin-x64@16.1.1 does not satisfy @next/swc-darwin-x64@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-linux-arm64-gnu@16.1.1 does not satisfy @next/swc-linux-arm64-gnu@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-linux-arm64-musl@16.1.1 does not satisfy @next/swc-linux-arm64-musl@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-linux-x64-gnu@16.1.1 does not satisfy @next/swc-linux-x64-gnu@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-linux-x64-musl@16.1.1 does not satisfy @next/swc-linux-x64-musl@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-win32-arm64-msvc@16.1.1 does not satisfy @next/swc-win32-arm64-msvc@16.3.8
#10 20.49 npm error Invalid: lock file's @next/swc-win32-x64-msvc@16.1.1 does not satisfy @next/swc-win32-x64-msvc@16.3.8
#10 20.49 npm error Invalid: lock file's @swc/helpers@0.5.15 does not satisfy @swc/helpers@0.5.23
#10 20.49 npm error Invalid: lock file's postcss@8.4.31 does not satisfy postcss@8.5.23
#10 20.49 npm error Invalid: lock file's sharp@0.34.5 does not satisfy sharp@0.35.5
#10 20.49 npm error Missing: entities@6.0.1 from lock file
#10 20.49 npm error Missing: playwright-core@1.63.0 from lock file
#10 20.49 npm error Missing: ansi-regex@5.0.1 from lock file
#10 20.49 npm error Missing: ansi-styles@5.2.0 from lock file
#10 20.49 npm error Missing: react-is@17.0.2 from lock file
#10 20.49 npm error Missing: indent-string@4.0.0 from lock file
#10 20.49 npm error Missing: strip-indent@3.0.0 from lock file
#10 20.49 npm error Missing: xmlchars@2.2.0 from lock file
#10 20.49 npm error Invalid: lock file's @img/sharp-darwin-arm64@0.34.5 does not satisfy @img/sharp-darwin-arm64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-darwin-x64@0.34.5 does not satisfy @img/sharp-darwin-x64@0.35.5
#10 20.49 npm error Missing: @img/sharp-freebsd-wasm32@0.35.5 from lock file
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-darwin-arm64@1.2.4 does not satisfy @img/sharp-libvips-darwin-arm64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-darwin-x64@1.2.4 does not satisfy @img/sharp-libvips-darwin-x64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linux-arm@1.2.4 does not satisfy @img/sharp-libvips-linux-arm@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linux-arm64@1.2.4 does not satisfy @img/sharp-libvips-linux-arm64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linux-ppc64@1.2.4 does not satisfy @img/sharp-libvips-linux-ppc64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linux-riscv64@1.2.4 does not satisfy @img/sharp-libvips-linux-riscv64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linux-s390x@1.2.4 does not satisfy @img/sharp-libvips-linux-s390x@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linux-x64@1.2.4 does not satisfy @img/sharp-libvips-linux-x64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linuxmusl-arm64@1.2.4 does not satisfy @img/sharp-libvips-linuxmusl-arm64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-libvips-linuxmusl-x64@1.2.4 does not satisfy @img/sharp-libvips-linuxmusl-x64@1.3.4
#10 20.49 npm error Invalid: lock file's @img/sharp-linux-arm@0.34.5 does not satisfy @img/sharp-linux-arm@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-linux-arm64@0.34.5 does not satisfy @img/sharp-linux-arm64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-linux-ppc64@0.34.5 does not satisfy @img/sharp-linux-ppc64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-linux-riscv64@0.34.5 does not satisfy @img/sharp-linux-riscv64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-linux-s390x@0.34.5 does not satisfy @img/sharp-linux-s390x@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-linux-x64@0.34.5 does not satisfy @img/sharp-linux-x64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-linuxmusl-arm64@0.34.5 does not satisfy @img/sharp-linuxmusl-arm64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-linuxmusl-x64@0.34.5 does not satisfy @img/sharp-linuxmusl-x64@0.35.5
#10 20.49 npm error Missing: @img/sharp-webcontainers-wasm32@0.35.5 from lock file
#10 20.49 npm error Invalid: lock file's @img/sharp-win32-arm64@0.34.5 does not satisfy @img/sharp-win32-arm64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-win32-ia32@0.34.5 does not satisfy @img/sharp-win32-ia32@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-win32-x64@0.34.5 does not satisfy @img/sharp-win32-x64@0.35.5
#10 20.49 npm error Invalid: lock file's @img/sharp-wasm32@0.34.5 does not satisfy @img/sharp-wasm32@0.35.5
#10 20.49 npm error Missing: @polka/url@1.0.0-next.29 from lock file
#10 20.49 npm error Missing: mrmime@2.0.1 from lock file
#10 20.49 npm error Missing: totalist@3.0.1 from lock file
#10 20.49 npm error Missing: min-indent@1.0.1 from lock file
#10 20.49 npm error Missing: @istanbuljs/schema@0.1.6 from lock file
#10 20.49 npm error Missing: glob@10.5.0 from lock file
#10 20.49 npm error Missing: minimatch@10.2.6 from lock file
#10 20.49 npm error Missing: foreground-child@3.3.1 from lock file
#10 20.49 npm error Missing: jackspeak@3.4.3 from lock file
#10 20.49 npm error Missing: minimatch@9.0.9 from lock file
#10 20.49 npm error Missing: minipass@7.1.3 from lock file
#10 20.49 npm error Missing: package-json-from-dist@1.0.1 from lock file
#10 20.49 npm error Missing: path-scurry@1.11.1 from lock file
#10 20.49 npm error Missing: signal-exit@4.1.0 from lock file
#10 20.49 npm error Missing: @isaacs/cliui@8.0.2 from lock file
#10 20.49 npm error Missing: @pkgjs/parseargs@0.11.0 from lock file
#10 20.49 npm error Missing: string-width@5.1.2 from lock file
#10 20.49 npm error Missing: string-width-cjs@4.2.3 from lock file
#10 20.49 npm error Missing: strip-ansi@7.2.0 from lock file
#10 20.49 npm error Missing: strip-ansi-cjs@6.0.1 from lock file
#10 20.49 npm error Missing: wrap-ansi@8.1.0 from lock file
#10 20.49 npm error Missing: wrap-ansi-cjs@7.0.0 from lock file
#10 20.49 npm error Missing: lru-cache@10.4.3 from lock file
#10 20.49 npm error Missing: eastasianwidth@0.2.0 from lock file
#10 20.49 npm error Missing: emoji-regex@8.0.0 from lock file
#10 20.49 npm error Missing: is-fullwidth-code-point@3.0.0 from lock file
#10 20.49 npm error Missing: strip-ansi@6.0.1 from lock file
#10 20.49 npm error Missing: ansi-regex@6.4.0 from lock file
#10 20.49 npm error Missing: tldts@6.1.86 from lock file
#10 20.49 npm error Missing: tldts-core@6.1.86 from lock file
#10 20.49 npm error Missing: fsevents@2.3.3 from lock file
#10 20.49 npm error Missing: rollup@4.64.0 from lock file
#10 20.49 npm error Missing: @napi-rs/lzma-linux-x64-gnu@1.5.1 from lock file
#10 20.49 npm error Missing: @rollup/rollup-android-arm-eabi@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-android-arm64@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-darwin-arm64@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-darwin-x64@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-freebsd-arm64@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-freebsd-x64@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-arm-gnueabihf@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-arm-musleabihf@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-arm64-gnu@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-arm64-musl@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-loong64-gnu@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-loong64-musl@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-ppc64-gnu@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-ppc64-musl@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-riscv64-gnu@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-riscv64-musl@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-s390x-gnu@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-x64-gnu@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-linux-x64-musl@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-openbsd-x64@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-openharmony-arm64@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-win32-arm64-msvc@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-win32-ia32-msvc@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-win32-x64-gnu@4.64.0 from lock file
#10 20.49 npm error Missing: @rollup/rollup-win32-x64-msvc@4.64.0 from lock file
#10 20.49 npm error Missing: @vitest/expect@2.1.9 from lock file
#10 20.49 npm error Missing: @vitest/mocker@2.1.9 from lock file
#10 20.49 npm error Missing: vite@5.4.21 from lock file
#10 20.49 npm error Missing: @vitest/runner@2.1.9 from lock file
#10 20.49 npm error Missing: @vitest/snapshot@2.1.9 from lock file
#10 20.49 npm error Missing: @vitest/spy@2.1.9 from lock file
#10 20.49 npm error Missing: chai@5.3.3 from lock file
#10 20.49 npm error Missing: expect-type@1.4.0 from lock file
#10 20.49 npm error Missing: tinybench@2.9.0 from lock file
#10 20.49 npm error Missing: tinyexec@0.3.2 from lock file
#10 20.49 npm error Missing: tinypool@1.1.1 from lock file
#10 20.49 npm error Missing: vite-node@2.1.9 from lock file
#10 20.49 npm error Missing: why-is-node-running@2.3.0 from lock file
#10 20.49 npm error Missing: estree-walker@3.0.3 from lock file
#10 20.49 npm error Missing: tinyspy@3.0.2 from lock file
#10 20.49 npm error Missing: assertion-error@2.0.1 from lock file
#10 20.49 npm error Missing: check-error@2.1.3 from lock file
#10 20.49 npm error Missing: deep-eql@5.0.2 from lock file
#10 20.49 npm error Missing: pathval@2.0.1 from lock file
#10 20.49 npm error Missing: esbuild@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/aix-ppc64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/android-arm@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/android-arm64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/android-x64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/darwin-arm64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/darwin-x64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/freebsd-arm64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/freebsd-x64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-arm@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-arm64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-ia32@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-loong64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-mips64el@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-ppc64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-riscv64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-s390x@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/linux-x64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/netbsd-x64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/openbsd-x64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/sunos-x64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/win32-arm64@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/win32-ia32@0.21.5 from lock file
#10 20.49 npm error Missing: @esbuild/win32-x64@0.21.5 from lock file
#10 20.49 npm error Missing: cac@6.7.14 from lock file
#10 20.49 npm error Missing: es-module-lexer@1.7.0 from lock file
#10 20.49 npm error Missing: iconv-lite@0.6.3 from lock file
#10 20.49 npm error Missing: safer-buffer@2.1.2 from lock file
#10 20.49 npm error Missing: tr46@5.1.1 from lock file
#10 20.49 npm error Missing: siginfo@2.0.0 from lock file
#10 20.49 npm error Missing: stackback@0.0.2 from lock file
#10 20.49 npm error Missing: ansi-styles@6.2.3 from lock file
#10 20.49 npm error Missing: string-width@4.2.3 from lock file
#10 20.49 npm error Missing: strip-ansi@6.0.1 from lock file
#10 20.49 npm error Missing: eslint-visitor-keys@3.4.3 from lock file
#10 20.49 npm error Missing: dequal@2.0.3 from lock file
#10 20.49 npm error Missing: brace-expansion@2.1.7 from lock file
#10 20.49 npm error Missing: brace-expansion@5.0.12 from lock file
#10 20.49 npm error Missing: balanced-match@4.0.4 from lock file
#10 20.49 npm error Missing: emoji-regex@8.0.0 from lock file
#10 20.49 npm error
#10 20.49 npm error Clean install a project
#10 20.49 npm error
#10 20.49 npm error Usage:
#10 20.49 npm error npm ci
#10 20.49 npm error
#10 20.49 npm error Options:
#10 20.49 npm error [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
#10 20.49 npm error [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
#10 20.49 npm error [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
#10 20.49 npm error [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts]
#10 20.49 npm error [--allow-directory <all|none|root>] [--allow-file <all|none|root>]
#10 20.49 npm error [--allow-git <all|none|root>] [--allow-remote <all|none|root>]
#10 20.49 npm error [--allow-scripts <package-list> [--allow-scripts <package-list> ...]]
#10 20.49 npm error [--strict-allow-scripts] [--dangerously-allow-all-scripts] [--no-audit]
#10 20.49 npm error [--no-bin-links] [--no-fund] [--dry-run]
#10 20.49 npm error [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
#10 20.49 npm error [--workspaces] [--include-workspace-root] [--install-links]
#10 20.49 npm error
#10 20.49 npm error   --install-strategy
#10 20.49 npm error     Sets the strategy for installing packages in node_modules.
#10 20.49 npm error
#10 20.49 npm error   --legacy-bundling
#10 20.49 npm error     Instead of hoisting package installs in `node_modules`, install packages
#10 20.49 npm error
#10 20.49 npm error   --global-style
#10 20.49 npm error     Only install direct dependencies in the top level `node_modules`,
#10 20.49 npm error
#10 20.49 npm error   --omit
#10 20.49 npm error     Dependency types to omit from the installation tree on disk.
#10 20.49 npm error
#10 20.49 npm error   --include
#10 20.49 npm error     Option that allows for defining which types of dependencies to install.
#10 20.49 npm error
#10 20.49 npm error   --strict-peer-deps
#10 20.49 npm error     If set to `true`, and `--legacy-peer-deps` is not set, then _any_
#10 20.49 npm error
#10 20.49 npm error   --foreground-scripts
#10 20.49 npm error     Run all build scripts (ie, `preinstall`, `install`, and
#10 20.49 npm error
#10 20.49 npm error   --ignore-scripts
#10 20.49 npm error     If true, npm does not run scripts specified in package.json files.
#10 20.49 npm error
#10 20.49 npm error   --allow-directory
#10 20.49 npm error     Limits the ability for npm to install dependencies from directories.
#10 20.49 npm error
#10 20.49 npm error   --allow-file
#10 20.49 npm error     Limits the ability for npm to install dependencies from tarball files.
#10 20.49 npm error
#10 20.49 npm error   --allow-git
#10 20.49 npm error     Limits the ability for npm to fetch dependencies from git references.
#10 20.49 npm error
#10 20.49 npm error   --allow-remote
#10 20.49 npm error     Limits the ability for npm to fetch dependencies from urls.
#10 20.49 npm error
#10 20.49 npm error   --allow-scripts
#10 20.49 npm error     Comma-separated list of packages whose install-time lifecycle scripts
#10 20.49 npm error
#10 20.49 npm error   --strict-allow-scripts
#10 20.49 npm error     If `true`, turn the install-script policy from a warning into a hard
#10 20.49 npm error
#10 20.49 npm error   --dangerously-allow-all-scripts
#10 20.49 npm error     If `true`, bypass the `allowScripts` policy entirely and run every
#10 20.49 npm error
#10 20.49 npm error   --audit
#10 20.49 npm error     When "true" submit audit reports alongside the current npm command to the
#10 20.49 npm error
#10 20.49 npm error   --bin-links
#10 20.49 npm error     Tells npm to create symlinks (or `.cmd` shims on Windows) for package
#10 20.49 npm error
#10 20.49 npm error   --fund
#10 20.49 npm error     When "true" displays the message at the end of each `npm install`
#10 20.49 npm error
#10 20.49 npm error   --dry-run
#10 20.49 npm error     Indicates that you don't want npm to make any changes and that it should
#10 20.49 npm error
#10 20.49 npm error   -w|--workspace
#10 20.49 npm error     Enable running a command in the context of the configured workspaces of the
#10 20.49 npm error
#10 20.49 npm error   --workspaces
#10 20.49 npm error     Set to true to run the command in the context of **all** configured
#10 20.49 npm error
#10 20.49 npm error   --include-workspace-root
#10 20.49 npm error     Include the workspace root when workspaces are enabled for a command.
#10 20.49 npm error
#10 20.49 npm error   --install-links
#10 20.49 npm error     When set file: protocol dependencies will be packed and installed as
#10 20.49 npm error
#10 20.49 npm error
#10 20.49 npm error aliases: clean-install, ic, install-clean, isntall-clean
#10 20.49 npm error
#10 20.49 npm error Run "npm help ci" for more info
#10 20.50 npm notice
#10 20.50 npm notice New major version of npm available! 11.19.0 -> 12.2.0
#10 20.50 npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.2.0
#10 20.50 npm notice To update run: npm install -g npm@12.2.0
#10 20.50 npm notice
#10 20.50 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-10-03T10_27_58_887Z-debug-0.log
#10 ERROR: process "/bin/sh -c npm ci" did not complete successfully: exit code: 1
------
 > [builder 4/6] RUN npm ci:
20.49 npm error
20.49 npm error aliases: clean-install, ic, install-clean, isntall-clean
20.49 npm error
20.49 npm error Run "npm help ci" for more info
20.50 npm notice
20.50 npm notice New major version of npm available! 11.19.0 -> 12.2.0
20.50 npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.2.0
20.50 npm notice To update run: npm install -g npm@12.2.0
20.50 npm notice
20.50 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-10-03T10_27_58_887Z-debug-0.log
------
Dockerfile:11
--------------------
   9 |     WORKDIR /app
  10 |     COPY package.json package-lock.json* ./
  11 | >>> RUN npm ci
  12 |     COPY . .
  13 |     RUN npm run build
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c npm ci" did not complete successfully: exit code: 1
Reference
Check build summary support
Error: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c npm ci" did not complete successfully: exit code: 1
