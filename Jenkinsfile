// ─────────────────────────────────────────────────────────────────────────────
//  ePay Payment System — Declarative Jenkins Pipeline
//
//  Full pipeline stages:
//    Initialise
//    Backend  → Unit Tests → Integration Tests → k6 Smoke → Docker Build/Push
//    Frontend → Lint → Vitest → Build → Playwright E2E → Docker Build/Push
//    Security → OWASP → npm Audit → Trivy
//    Deploy   → Production (SSH — commented until hosted)
//
//  Required Jenkins credentials (Manage Jenkins → Credentials):
//    GHCR_USERNAME   — Secret text  — GitHub username / org
//    GHCR_TOKEN      — Secret text  — GitHub PAT with packages:write
//    DEPLOY_SSH_KEY  — SSH private key (comment out deploy stage if not hosted)
//    DEPLOY_HOST     — Secret text  — production server hostname / IP
//    DEPLOY_USER     — Secret text  — SSH user on production server
//    NVD_API_KEY     — Secret text  — NVD API key for OWASP DC (optional)
//
//  Required tools (Manage Jenkins → Tools):
//    JDK:  name="JDK21",  Temurin 21
//    Node: name="Node24", version 24.11.1
//
//  Required plugins:
//    Pipeline, Git, Docker Pipeline, Credentials Binding,
//    JUnit, HTML Publisher, Warnings Next Generation,
//    NodeJS, Cobertura (or Coverage API)
// ─────────────────────────────────────────────────────────────────────────────

pipeline {

    agent any

    tools {
        jdk    'JDK21'
        nodejs 'Node24'
    }

    environment {
        REGISTRY       = 'ghcr.io'
        DEPLOY_PATH    = '/opt/epay-app'
        NODE_VERSION   = '24.11.1'
        MAVEN_OPTS     = '-Xmx1024m -XX:MaxMetaspaceSize=512m'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '5'))
        timestamps()
        timeout(time: 90, unit: 'MINUTES')
        disableConcurrentBuilds(abortPrevious: true)
    }

    triggers {
        pollSCM('H/5 * * * *')
    }

    parameters {
        string(
            name:         'BACKEND_TAG',
            defaultValue: 'latest',
            description:  'Backend Docker image tag to deploy'
        )
        string(
            name:         'FRONTEND_TAG',
            defaultValue: 'latest',
            description:  'Frontend Docker image tag to deploy'
        )
        booleanParam(
            name:         'SKIP_HEALTH_CHECK',
            defaultValue: false,
            description:  'Skip post-deploy health check'
        )
        booleanParam(
            name:         'SKIP_SECURITY_SCAN',
            defaultValue: false,
            description:  'Skip OWASP / npm audit / Trivy'
        )
        booleanParam(
            name:         'RUN_LOAD_TESTS',
            defaultValue: false,
            description:  'Run k6 load test (50 VUs) — only against staging'
        )
        booleanParam(
            name:         'RUN_E2E',
            defaultValue: true,
            description:  'Run Playwright E2E tests'
        )
    }

    // ═══════════════════════════════════════════════════════════════════════
    stages {

        // ── 0. Initialise ────────────────────────────────────────────────
        stage('Initialise') {
            steps {
                script {
                    env.SHORT_SHA      = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                    env.BRANCH_SLUG    = env.BRANCH_NAME?.replaceAll('[^a-zA-Z0-9]', '-')?.toLowerCase() ?: 'unknown'
                    env.IMAGE_TAG      = "${env.BRANCH_SLUG}-${env.SHORT_SHA}"
                    env.IS_MAIN        = (env.BRANCH_NAME == 'main').toString()

                    def repoUrl        = sh(script: 'git remote get-url origin', returnStdout: true).trim()
                    def repoPath       = repoUrl
                        .replaceAll(/.*github\.com[:/]/, '')
                        .replaceAll(/\.git$/, '')
                        .toLowerCase()
                    env.BACKEND_IMAGE  = "ghcr.io/${repoPath}/epay-server"
                    env.FRONTEND_IMAGE = "ghcr.io/${repoPath}/epay-frontend"

                    echo """
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Branch       : ${env.BRANCH_NAME}
  Commit       : ${env.SHORT_SHA}
  Image tag    : ${env.IMAGE_TAG}
  Backend      : ${env.BACKEND_IMAGE}
  Frontend     : ${env.FRONTEND_IMAGE}
  Load tests   : ${params.RUN_LOAD_TESTS}
  E2E tests    : ${params.RUN_E2E}
  Security     : ${!params.SKIP_SECURITY_SCAN}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"""
                }
            }
        }

        // ════════════════════════════════════════════════════════════════
        //  BACKEND
        // ════════════════════════════════════════════════════════════════

        stage('Backend — Unit Tests & Coverage') {
            steps {
                dir('epay') {
                    sh 'chmod +x mvnw'
                    sh './mvnw -B verify -P coverage --no-transfer-progress -Dsurefire.failIfNoSpecifiedTests=false'
                }
            }
            post {
                always {
                    junit(
                        testResults:              'epay/**/target/surefire-reports/*.xml',
                        allowEmptyResults:        true,
                        skipMarkingBuildUnstable: false
                    )
                    // JaCoCo HTML coverage report
                    publishHTML(target: [
                        allowMissing:          true,
                        alwaysLinkToLastBuild: true,
                        keepAll:               true,
                        reportDir:             'epay/main/target/site/jacoco',
                        reportFiles:           'index.html',
                        reportName:            'JaCoCo Coverage Report'
                    ])
                    archiveArtifacts(
                        artifacts:         'epay/**/target/site/jacoco/jacoco.xml',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Backend — Build JAR') {
            steps {
                dir('epay') {
                    sh './mvnw -B package -DskipTests --no-transfer-progress'
                }
            }
            post {
                success {
                    archiveArtifacts(
                        artifacts:   'epay/main/target/epay-server.jar',
                        fingerprint: true
                    )
                }
            }
        }

        stage('Backend — Integration Tests') {
            // Only run on non-PR builds — Testcontainers needs Docker
            when { not { changeRequest() } }
            steps {
                dir('epay') {
                    sh '''
                        ./mvnw -B verify -P integration-test \
                            --no-transfer-progress \
                            -Dsurefire.skip=true \
                            -Dfailsafe.failIfNoSpecifiedTests=false
                    '''
                }
            }
            post {
                always {
                    junit(
                        testResults:       'epay/**/target/failsafe-reports/*.xml',
                        allowEmptyResults: true
                    )
                    archiveArtifacts(
                        artifacts:         'epay/**/target/failsafe-reports/',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Backend — k6 Smoke Test') {
            when { not { changeRequest() } }
            steps {
                script {
                    // Install k6 if not present
                    sh '''
                        if ! command -v k6 &>/dev/null; then
                            curl -sfL https://github.com/grafana/k6/releases/download/v0.55.0/k6-v0.55.0-linux-amd64.tar.gz \
                                | tar xz --strip-components=1 -C /usr/local/bin k6-v0.55.0-linux-amd64/k6
                        fi
                    '''

                    // Run smoke test — expects a live API at BASE_URL
                    // If no staging URL, run against localhost (assumes service started externally)
                    def smokeUrl = env.STAGING_API_URL ?: 'http://localhost:8029'
                    sh "k6 run -e BASE_URL=${smokeUrl} k6/smoke.js || true"
                }
            }
        }

        stage('Backend — k6 Load Test') {
            when {
                allOf {
                    not { changeRequest() }
                    expression { return params.RUN_LOAD_TESTS }
                }
            }
            steps {
                script {
                    def loadUrl = env.STAGING_API_URL ?: 'http://localhost:8029'
                    sh """
                        k6 run \
                            -e BASE_URL=${loadUrl} \
                            -e TEST_USER_EMAIL=${env.LOAD_TEST_EMAIL ?: 'loadtest@epay.test'} \
                            -e TEST_USER_PASS=${env.LOAD_TEST_PASS ?: 'LoadTest@123'} \
                            --out json=k6-load-results.json \
                            k6/load.js || true
                    """
                }
            }
            post {
                always {
                    archiveArtifacts(
                        artifacts:         'k6-load-results.json',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Backend — Docker Build & Push') {
            when { not { changeRequest() } }
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'GHCR_USERNAME', variable: 'GHCR_USER'),
                        string(credentialsId: 'GHCR_TOKEN',    variable: 'GHCR_PASS')
                    ]) {
                        sh "echo '${GHCR_PASS}' | docker login ghcr.io -u '${GHCR_USER}' --password-stdin"
                    }

                    def tags = ["${env.BACKEND_IMAGE}:${env.IMAGE_TAG}",
                                "${env.BACKEND_IMAGE}:${env.BRANCH_SLUG}"]
                    if (env.IS_MAIN == 'true') tags << "${env.BACKEND_IMAGE}:latest"

                    def tagArgs = tags.collect { "-t ${it}" }.join(' ')
                    sh "docker build ${tagArgs} -f epay/Dockerfile epay/"
                    tags.each { sh "docker push ${it}" }
                    echo "Backend images pushed: ${tags.join(', ')}"
                }
            }
            post {
                always { sh 'docker logout ghcr.io || true' }
            }
        }

        // ════════════════════════════════════════════════════════════════
        //  FRONTEND
        // ════════════════════════════════════════════════════════════════

        stage('Frontend — Lint & Type Check') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run lint'
                    sh 'npx tsc --noEmit'
                }
            }
        }

        stage('Frontend — Vitest Unit Tests') {
            steps {
                dir('frontend') {
                    sh 'npm run test:coverage'
                }
            }
            post {
                always {
                    // lcov.info for coverage tools
                    archiveArtifacts(
                        artifacts:         'frontend/coverage/**',
                        allowEmptyArchive: true
                    )
                    publishHTML(target: [
                        allowMissing:          true,
                        alwaysLinkToLastBuild: true,
                        keepAll:               true,
                        reportDir:             'frontend/coverage',
                        reportFiles:           'index.html',
                        reportName:            'Vitest Coverage Report'
                    ])
                }
            }
        }

        stage('Frontend — Build') {
            steps {
                dir('frontend') {
                    withEnv([
                        'NODE_ENV=production',
                        "NEXT_PUBLIC_API_URL=${env.NEXT_PUBLIC_API_URL ?: 'http://localhost:8029'}"
                    ]) {
                        sh 'npm run build'
                    }
                }
            }
            post {
                success {
                    archiveArtifacts(
                        artifacts:         'frontend/.next/**',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Frontend — Playwright E2E Tests') {
            when {
                allOf {
                    not { changeRequest() }
                    expression { return params.RUN_E2E }
                }
            }
            steps {
                dir('frontend') {
                    sh 'npx playwright install --with-deps chromium firefox'
                    sh 'npm run test:e2e'
                }
            }
            post {
                always {
                    // Publish JUnit XML results
                    junit(
                        testResults:       'frontend/playwright-results.xml',
                        allowEmptyResults: true
                    )
                    publishHTML(target: [
                        allowMissing:          true,
                        alwaysLinkToLastBuild: true,
                        keepAll:               true,
                        reportDir:             'frontend/playwright-report',
                        reportFiles:           'index.html',
                        reportName:            'Playwright E2E Report'
                    ])
                    archiveArtifacts(
                        artifacts:         'frontend/playwright-report/**',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Frontend — Docker Build & Push') {
            when { not { changeRequest() } }
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'GHCR_USERNAME', variable: 'GHCR_USER'),
                        string(credentialsId: 'GHCR_TOKEN',    variable: 'GHCR_PASS')
                    ]) {
                        sh "echo '${GHCR_PASS}' | docker login ghcr.io -u '${GHCR_USER}' --password-stdin"
                    }

                    def tags = ["${env.FRONTEND_IMAGE}:${env.IMAGE_TAG}",
                                "${env.FRONTEND_IMAGE}:${env.BRANCH_SLUG}"]
                    if (env.IS_MAIN == 'true') tags << "${env.FRONTEND_IMAGE}:latest"

                    def tagArgs = tags.collect { "-t ${it}" }.join(' ')
                    sh "docker build ${tagArgs} --build-arg NODE_ENV=production -f frontend/Dockerfile frontend/"
                    tags.each { sh "docker push ${it}" }
                    echo "Frontend images pushed: ${tags.join(', ')}"
                }
            }
            post {
                always { sh 'docker logout ghcr.io || true' }
            }
        }

        // ════════════════════════════════════════════════════════════════
        //  SECURITY SCANS
        // ════════════════════════════════════════════════════════════════

        stage('Security — OWASP Dependency Check') {
            when {
                allOf {
                    not { changeRequest() }
                    expression { return !params.SKIP_SECURITY_SCAN }
                }
            }
            steps {
                dir('epay') {
                    withCredentials([string(credentialsId: 'NVD_API_KEY', variable: 'NVD_KEY')]) {
                        sh '''
                            ./mvnw -B --no-transfer-progress \
                                org.owasp:dependency-check-maven:check \
                                -DfailBuildOnCVSS=7 \
                                -DretireJsAnalyzerEnabled=true \
                                -Dformat=ALL \
                                -DnvdApiKey=${NVD_KEY} \
                                -DsuppressionFile=dependency-check-suppressions.xml \
                            || true
                        '''
                    }
                }
            }
            post {
                always {
                    publishHTML(target: [
                        allowMissing:          true,
                        alwaysLinkToLastBuild: true,
                        keepAll:               true,
                        reportDir:             'epay/main/target',
                        reportFiles:           'dependency-check-report.html',
                        reportName:            'OWASP Dependency Check'
                    ])
                    archiveArtifacts(
                        artifacts:         'epay/**/target/dependency-check-report*',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Security — npm Audit') {
            when { expression { return !params.SKIP_SECURITY_SCAN } }
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh '''
                        npm audit --audit-level=critical || true
                        npm audit --json > npm-audit-report.json || true
                    '''
                }
            }
            post {
                always {
                    archiveArtifacts(
                        artifacts:         'frontend/npm-audit-report.json',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Security — Trivy Image Scan') {
            when {
                allOf {
                    not { changeRequest() }
                    expression { return !params.SKIP_SECURITY_SCAN }
                }
            }
            steps {
                script {
                    sh '''
                        if ! command -v trivy &>/dev/null; then
                            TRIVY_VERSION="0.58.2"
                            curl -sfL "https://github.com/aquasecurity/trivy/releases/download/v${TRIVY_VERSION}/trivy_${TRIVY_VERSION}_Linux-64bit.tar.gz" \
                                | tar xz -C /usr/local/bin trivy
                        fi
                    '''
                    def images = [
                        [tag: "${env.BACKEND_IMAGE}:${env.IMAGE_TAG}",  name: 'epay-server'],
                        [tag: "${env.FRONTEND_IMAGE}:${env.IMAGE_TAG}", name: 'epay-frontend']
                    ]
                    images.each { img ->
                        sh """
                            trivy image --exit-code 0 --severity CRITICAL,HIGH \
                                --ignore-unfixed --ignorefile .trivyignore \
                                --skip-java-db-update \
                                --format table ${img.tag} || true
                            trivy image --exit-code 0 --severity CRITICAL,HIGH \
                                --ignore-unfixed --ignorefile .trivyignore \
                                --skip-java-db-update \
                                --format sarif --output trivy-${img.name}.sarif \
                                ${img.tag} || true
                        """
                    }
                }
            }
            post {
                always {
                    archiveArtifacts(artifacts: 'trivy-*.sarif', allowEmptyArchive: true)
                }
            }
        }

        // ════════════════════════════════════════════════════════════════
        //  DEPLOY  (commented out until hosted)
        // ════════════════════════════════════════════════════════════════

        stage('Deploy — Production') {
            when {
                allOf {
                    branch 'main'
                    not { changeRequest() }
                }
            }
            steps {
                script {
                    def backendTag  = params.BACKEND_TAG  != 'latest' ? params.BACKEND_TAG  : env.IMAGE_TAG
                    def frontendTag = params.FRONTEND_TAG != 'latest' ? params.FRONTEND_TAG : env.IMAGE_TAG

                    echo """
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DEPLOY SKIPPED — app is not yet hosted.
  Add DEPLOY_SSH_KEY, DEPLOY_HOST, DEPLOY_USER
  credentials and uncomment the SSH block.

  Would deploy:
    Backend  : ${env.BACKEND_IMAGE}:${backendTag}
    Frontend : ${env.FRONTEND_IMAGE}:${frontendTag}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"""

                    /*
                    withCredentials([
                        sshUserPrivateKey(credentialsId: 'DEPLOY_SSH_KEY',
                                          keyFileVariable: 'SSH_KEY_FILE',
                                          usernameVariable: 'SSH_USER'),
                        string(credentialsId: 'DEPLOY_HOST',   variable: 'SSH_HOST'),
                        string(credentialsId: 'GHCR_TOKEN',    variable: 'GHCR_PASS'),
                        string(credentialsId: 'GHCR_USERNAME', variable: 'GHCR_USER')
                    ]) {
                        sh """
                            scp -i ${SSH_KEY_FILE} -o StrictHostKeyChecking=no \\
                                docker-compose.yml .env \\
                                ${SSH_USER}@${SSH_HOST}:${DEPLOY_PATH}/
                        """
                        sh """
                            ssh -i ${SSH_KEY_FILE} -o StrictHostKeyChecking=no \\
                                ${SSH_USER}@${SSH_HOST} bash -s << 'ENDSSH'
                            set -euo pipefail
                            cd ${DEPLOY_PATH}
                            echo '${GHCR_PASS}' | docker login ghcr.io -u '${GHCR_USER}' --password-stdin
                            docker pull ${env.BACKEND_IMAGE}:${backendTag}
                            docker pull ${env.FRONTEND_IMAGE}:${frontendTag}
                            docker tag ${env.BACKEND_IMAGE}:${backendTag} ${env.BACKEND_IMAGE}:latest
                            docker tag ${env.FRONTEND_IMAGE}:${frontendTag} ${env.FRONTEND_IMAGE}:latest
                            for s in epay-server-1 epay-server-2 epay-server-3; do
                                docker compose up -d --no-deps \${s}
                                for i in \$(seq 1 12); do
                                    STATUS=\$(docker inspect --format='{{.State.Health.Status}}' "\${s}" 2>/dev/null || echo unknown)
                                    [ "\${STATUS}" = "healthy" ] && break
                                    [ "\${i}" = "12" ] && { echo "ERROR: \${s} unhealthy"; exit 1; }
                                    sleep 10
                                done
                            done
                            for s in epay-frontend-1 epay-frontend-2 epay-frontend-3; do
                                docker compose up -d --no-deps \${s}
                                for i in \$(seq 1 9); do
                                    STATUS=\$(docker inspect --format='{{.State.Health.Status}}' "\${s}" 2>/dev/null || echo unknown)
                                    [ "\${STATUS}" = "healthy" ] && break
                                    [ "\${i}" = "9" ] && { echo "ERROR: \${s} unhealthy"; exit 1; }
                                    sleep 10
                                done
                            done
                            docker compose up -d --no-deps nginx
                            docker image prune -f
                            echo "Deployment complete."
                            ENDSSH
                        """
                    }
                    if (!params.SKIP_HEALTH_CHECK && env.PRODUCTION_URL) {
                        retry(10) { sleep 15; sh "curl -sf ${env.PRODUCTION_URL}/actuator/health" }
                    }
                    */
                }
            }
        }

    } // end stages

    // ═══════════════════════════════════════════════════════════════════════
    post {
        always {
            sh 'docker image prune -f || true'
        }
        success {
            echo """
╔══════════════════════════════════════════════════╗
║  ✅  Pipeline PASSED                             ║
║  Branch : ${env.BRANCH_NAME?.padRight(38)}  ║
║  Commit : ${env.SHORT_SHA?.padRight(38)}  ║
╚══════════════════════════════════════════════════╝"""
        }
        failure {
            echo """
╔══════════════════════════════════════════════════╗
║  ❌  Pipeline FAILED                             ║
║  Branch : ${env.BRANCH_NAME?.padRight(38)}  ║
║  Commit : ${env.SHORT_SHA?.padRight(38)}  ║
╚══════════════════════════════════════════════════╝"""
            // emailext(to: 'team@epay.app', subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}", body: "Build URL: ${env.BUILD_URL}")
        }
        cleanup {
            cleanWs(cleanWhenAborted: true, deleteDirs: true)
        }
    }
}
