# syntax=docker/dockerfile:1

# ── Stage 1: Build with Maven ──────────────────────────────────────────────
# The build context is ./epay (the multi-module Maven root).
# The CI workflow must run `./mvnw -B package -DskipTests` before building
# this image, OR add a Maven build stage here if a self-contained image
# is preferred.  The stage below provides both options: comment out the
# "pre-built" COPY if you want Maven to run inside Docker.
FROM eclipse-temurin:21-jdk-alpine AS runtime

WORKDIR /app

RUN mkdir -p /var/www/uploads/images && \
    chmod -R 755 /var/www/uploads/images

VOLUME /tmp

# main/pom.xml sets <finalName>epay-server</finalName>, so the fat-jar
# produced by spring-boot-maven-plugin is main/target/epay-server.jar.
# The build context is ./epay, so the path below is relative to that root.
COPY main/target/epay-server.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
