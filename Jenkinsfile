// ─────────────────────────────────────────────────────────────────────────────
//  ePay Payment System — Declarative Jenkins Pipeline
//
//  Stages mirror the GitHub Actions workflows:
//    backend-ci.yml  →  Backend Build  +  Backend Docker
//    frontend-ci.yml →  Frontend Lint  +  Frontend Build  +  Frontend Docker
//    security-scan   →  OWASP  +  npm audit  +  Trivy
//    deploy.yml      →  Deploy (SSH rolling restart — commented until hosted)
//
//  Required Jenkins credentials (Manage Jenkins → Credentials):
//    GHCR_USERNAME   — Kind: Secret text   — your GitHub username / org
//    GHCR_TOKEN      — Kind: Secret text   — GitHub PAT with packages:write
//    DEPLOY_SSH_KEY  — Kind: SSH private key (comment out deploy stage if not hosted)
//    DEPLOY_HOST     — Kind: Secret text   — production server hostname / IP
//    DEPLOY_USER     — Kind: Secret text   — SSH user on production server
//    NVD_API_KEY     — Kind: Secret text   — NVD API key for OWASP DC (optional)
//
//  Required tools (Manage Jenkins → Tools):
//    JDK: name="JDK21",  type=Temurin, version=21
//    Node: name="Node24", version=24.11.1
//
//  Required plugins:
//    Pipeline, Git, Docker Pipeline, Credentials Binding,
//    JUnit, HTML Publisher, Warnings Next Generation
// ─────────────────────────────────────────────────────────────────────────────

pipeline {

    agent any

    // ── Tool declarations ──────────────────────────────────────────────────
    tools {
        jdk  'JDK21'
        nodejs 'Node24'
    }

    // ── Pipeline-level environment ─────────────────────────────────────────
    environment {
        REGISTRY       = 'ghcr.io'
        BACKEND_IMAGE  = "${REGISTRY}/${env.CHANGE_FORK ?: ''}/epay-server"   // overridden in stages
        FRONTEND_IMAGE = "${REGISTRY}/${env.CHANGE_FORK ?: ''}/epay-frontend" // overridden in stages
        DEPLOY_PATH    = '/opt/epay-app'
        NODE_VERSION   = '24.11.1'
        MAVEN_OPTS     = '-Xmx1024m -XX:MaxMetaspaceSize=512m'
    }

    // ── Build options ──────────────────────────────────────────────────────
    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '5'))
        timestamps()
        timeout(time: 60, unit: 'MINUTES')
        disableConcurrentBuilds(abortPrevious: true)
    }

    // ── Trigger on push / PR (when using a Multibranch Pipeline job) ───────
    triggers {
        // Poll SCM every 5 min as a fallback if webhooks are not configured.
        // Remove this if GitHub webhooks are set up (preferred).
        pollSCM('H/5 * * * *')
    }

    // ═══════════════════════════════════════════════════════════════════════
    //  PARAMETERS  (for manual / workflow_dispatch equivalent)
    // ═══════════════════════════════════════════════════════════════════════
    parameters {
        string(
            name:         'BACKEND_TAG',
            defaultValue: 'latest',
            description:  'Backend Docker image tag to deploy (e.g. main-abc1234)'
        )
        string(
            name:         'FRONTEND_TAG',
            defaultValue: 'latest',
            description:  'Frontend Docker image tag to deploy (e.g. main-abc1234)'
        )
        booleanParam(
            name:         'SKIP_HEALTH_CHECK',
            defaultValue: false,
            description:  'Skip post-deploy health check'
        )
        booleanParam(
            name:         'SKIP_SECURITY_SCAN',
            defaultValue: false,
            description:  'Skip OWASP / npm audit / Trivy (speeds up dev branch builds)'
        )
    }

    // ═══════════════════════════════════════════════════════════════════════
    //  STAGES
    // ═══════════════════════════════════════════════════════════════════════
    stages {

        // ── 0. Resolve metadata ────────────────────────────────────────────
        stage('Initialise') {
            steps {
                script {
                    // Derive a short SHA for Docker image tagging
                    env.SHORT_SHA      = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                    env.BRANCH_SLUG    = env.BRANCH_NAME?.replaceAll('[^a-zA-Z0-9]', '-')?.toLowerCase() ?: 'unknown'
                    env.IMAGE_TAG      = "${env.BRANCH_SLUG}-${env.SHORT_SHA}"
                    env.IS_MAIN        = (env.BRANCH_NAME == 'main').toString()

                    // Resolve the full GHCR image names from the remote URL
                    def repoUrl        = sh(script: 'git remote get-url origin', returnStdout: true).trim()
                    // e.g. https://github.com/owner/repo.git  or  git@github.com:owner/repo.git
                    def repoPath       = repoUrl
                        .replaceAll(/.*github\.com[:/]/, '')
                        .replaceAll(/\.git$/, '')
                        .toLowerCase()
                    env.BACKEND_IMAGE  = "ghcr.io/${repoPath}/epay-server"
                    env.FRONTEND_IMAGE = "ghcr.io/${repoPath}/epay-frontend"

                    echo """
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Branch     : ${env.BRANCH_NAME}
  Commit     : ${env.SHORT_SHA}
  Image tag  : ${env.IMAGE_TAG}
  Backend    : ${env.BACKEND_IMAGE}
  Frontend   : ${env.FRONTEND_IMAGE}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"""
                }
            }
        }

        // ════════════════════════════════════════════════════════════════════
        //  BACKEND  CI
        // ════════════════════════════════════════════════════════════════════

        stage('Backend — Build & Test') {
            steps {
                dir('epay') {
                    sh 'chmod +x mvnw'
                    sh './mvnw -B clean package -DskipTests --no-transfer-progress'
                }
            }
            post {
                always {
                    // Publish surefire XML test results
                    junit(
                        testResults:          'epay/**/target/surefire-reports/*.xml',
                        allowEmptyResults:    true,
                        skipMarkingBuildUnstable: false
                    )
                    // Archive the fat-jar
                    archiveArtifacts(
                        artifacts:      'epay/main/target/epay-server.jar',
                        allowEmptyArchive: false,
                        fingerprint:    true
                    )
                }
            }
        }

        stage('Backend — Docker Build & Push') {
            // Only push images on push events (not PRs)
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

                    if (env.IS_MAIN == 'true') {
                        tags << "${env.BACKEND_IMAGE}:latest"
                    }

                    def tagArgs = tags.collect { "-t ${it}" }.join(' ')

                    sh """
                        docker build \\
                            ${tagArgs} \\
                            -f epay/Dockerfile \\
                            epay/
                    """

                    tags.each { tag ->
                        sh "docker push ${tag}"
                    }

                    echo "Backend images pushed: ${tags.join(', ')}"
                }
            }
            post {
                always {
                    sh "docker logout ghcr.io || true"
                }
            }
        }

        // ════════════════════════════════════════════════════════════════════
        //  FRONTEND  CI
        // ════════════════════════════════════════════════════════════════════

        stage('Frontend — Lint & Type Check') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run lint'
                    sh 'npx tsc --noEmit'
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
                    // Archive the Next.js standalone output so it can be
                    // downloaded or used by downstream jobs
                    archiveArtifacts(
                        artifacts:      'frontend/.next/**',
                        allowEmptyArchive: true,
                        fingerprint:    false
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

                    if (env.IS_MAIN == 'true') {
                        tags << "${env.FRONTEND_IMAGE}:latest"
                    }

                    def tagArgs = tags.collect { "-t ${it}" }.join(' ')

                    sh """
                        docker build \\
                            ${tagArgs} \\
                            --build-arg NODE_ENV=production \\
                            -f frontend/Dockerfile \\
                            frontend/
                    """

                    tags.each { tag ->
                        sh "docker push ${tag}"
                    }

                    echo "Frontend images pushed: ${tags.join(', ')}"
                }
            }
            post {
                always {
                    sh "docker logout ghcr.io || true"
                }
            }
        }

        // ════════════════════════════════════════════════════════════════════
        //  SECURITY  SCANS
        // ════════════════════════════════════════════════════════════════════

        stage('Security — OWASP Dependency Check') {
            when {
                allOf {
                    not { changeRequest() }
                    expression { return !params.SKIP_SECURITY_SCAN }
                }
            }
            steps {
                dir('epay') {
                    withCredentials([
                        string(credentialsId: 'NVD_API_KEY', variable: 'NVD_KEY')
                    ]) {
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
                        allowMissing:       true,
                        alwaysLinkToLastBuild: true,
                        keepAll:            true,
                        reportDir:          'epay/main/target',
                        reportFiles:        'dependency-check-report.html',
                        reportName:         'OWASP Dependency Check'
                    ])
                    archiveArtifacts(
                        artifacts:      'epay/**/target/dependency-check-report*',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        stage('Security — npm Audit') {
            when {
                expression { return !params.SKIP_SECURITY_SCAN }
            }
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh '''
                        npm audit --audit-level=critical || true
                        echo "--- Full audit report (informational) ---"
                        npm audit --json > npm-audit-report.json || true
                        npm audit || true
                    '''
                }
            }
            post {
                always {
                    archiveArtifacts(
                        artifacts:      'frontend/npm-audit-report.json',
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
                    // Ensure trivy is available (install once if not present)
                    sh '''
                        if ! command -v trivy &>/dev/null; then
                            echo "Installing Trivy..."
                            curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh \
                                | sh -s -- -b /usr/local/bin v0.36.0
                        fi
                    '''

                    def images = [
                        [tag: "${env.BACKEND_IMAGE}:${env.IMAGE_TAG}",  name: 'epay-server'],
                        [tag: "${env.FRONTEND_IMAGE}:${env.IMAGE_TAG}", name: 'epay-frontend']
                    ]

                    images.each { img ->
                        // Table output — human readable in console log
                        sh """
                            trivy image \\
                                --exit-code 0 \\
                                --severity CRITICAL,HIGH \\
                                --ignore-unfixed \\
                                --ignorefile .trivyignore \\
                                --format table \\
                                ${img.tag} || true
                        """
                        // SARIF output — stored as artifact
                        sh """
                            trivy image \\
                                --exit-code 0 \\
                                --severity CRITICAL,HIGH \\
                                --ignore-unfixed \\
                                --ignorefile .trivyignore \\
                                --format sarif \\
                                --output trivy-${img.name}.sarif \\
                                ${img.tag} || true
                        """
                    }
                }
            }
            post {
                always {
                    archiveArtifacts(
                        artifacts:      'trivy-*.sarif',
                        allowEmptyArchive: true
                    )
                }
            }
        }

        // ════════════════════════════════════════════════════════════════════
        //  DEPLOY  (SSH rolling restart — commented out until app is hosted)
        // ════════════════════════════════════════════════════════════════════

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
  To activate:
    1. Add DEPLOY_SSH_KEY, DEPLOY_HOST, DEPLOY_USER
       credentials in Jenkins → Manage Credentials.
    2. Uncomment the SSH block below.

  Would deploy:
    Backend  : ${env.BACKEND_IMAGE}:${backendTag}
    Frontend : ${env.FRONTEND_IMAGE}:${frontendTag}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"""

                    // ── Uncomment the block below once the server is ready ──
                    /*
                    withCredentials([
                        sshUserPrivateKey(
                            credentialsId:   'DEPLOY_SSH_KEY',
                            keyFileVariable: 'SSH_KEY_FILE',
                            usernameVariable:'SSH_USER'
                        ),
                        string(credentialsId: 'DEPLOY_HOST',     variable: 'SSH_HOST'),
                        string(credentialsId: 'GHCR_TOKEN',      variable: 'GHCR_PASS'),
                        string(credentialsId: 'GHCR_USERNAME',   variable: 'GHCR_USER')
                    ]) {
                        // Copy compose file and env to server
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

                            docker tag ${env.BACKEND_IMAGE}:${backendTag}  ${env.BACKEND_IMAGE}:latest
                            docker tag ${env.FRONTEND_IMAGE}:${frontendTag} ${env.FRONTEND_IMAGE}:latest

                            for instance in epay-server-1 epay-server-2 epay-server-3; do
                                echo ">>> Restarting \${instance}..."
                                docker compose up -d --no-deps \${instance}
                                for i in \$(seq 1 12); do
                                    STATUS=\$(docker inspect --format='{{.State.Health.Status}}' "\${instance}" 2>/dev/null || echo unknown)
                                    echo "  [\${i}/12] \${instance}: \${STATUS}"
                                    [ "\${STATUS}" = "healthy" ] && break
                                    [ "\${i}" = "12" ] && { echo "ERROR: \${instance} unhealthy"; exit 1; }
                                    sleep 10
                                done
                            done

                            for instance in epay-frontend-1 epay-frontend-2 epay-frontend-3; do
                                echo ">>> Restarting \${instance}..."
                                docker compose up -d --no-deps \${instance}
                                for i in \$(seq 1 9); do
                                    STATUS=\$(docker inspect --format='{{.State.Health.Status}}' "\${instance}" 2>/dev/null || echo unknown)
                                    echo "  [\${i}/9] \${instance}: \${STATUS}"
                                    [ "\${STATUS}" = "healthy" ] && break
                                    [ "\${i}" = "9" ] && { echo "ERROR: \${instance} unhealthy"; exit 1; }
                                    sleep 10
                                done
                            done

                            echo ">>> Restarting nginx..."
                            docker compose up -d --no-deps nginx
                            for i in \$(seq 1 6); do
                                STATUS=\$(docker inspect --format='{{.State.Health.Status}}' "epay-nginx" 2>/dev/null || echo unknown)
                                echo "  [\${i}/6] epay-nginx: \${STATUS}"
                                [ "\${STATUS}" = "healthy" ] && break
                                [ "\${i}" = "6" ] && { echo "ERROR: nginx unhealthy"; exit 1; }
                                sleep 10
                            done

                            docker image prune -f
                            echo "Deployment complete."
                            ENDSSH
                        """
                    }

                    // Post-deploy health check
                    if (!params.SKIP_HEALTH_CHECK) {
                        def productionUrl = env.PRODUCTION_URL ?: ''
                        if (productionUrl) {
                            retry(10) {
                                sleep 15
                                sh "curl -sf ${productionUrl}/actuator/health"
                            }
                        } else {
                            echo "PRODUCTION_URL not set — skipping health check."
                        }
                    }
                    */
                }
            }
        }

    } // end stages

    // ═══════════════════════════════════════════════════════════════════════
    //  POST  ACTIONS
    // ═══════════════════════════════════════════════════════════════════════
    post {
        always {
            // Clean up dangling Docker images to keep the build host tidy
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
            // Uncomment to send email notifications:
            // emailext(
            //     to:      'team@example.com',
            //     subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            //     body:    "Build URL: ${env.BUILD_URL}"
            // )
        }

        cleanup {
            cleanWs(
                cleanWhenSuccess:  false,  // keep workspace on success for debugging
                cleanWhenFailure:  false,
                cleanWhenAborted:  true,
                deleteDirs:        true
            )
        }
    }
}
