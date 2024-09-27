pipeline {
    agent any
    tools {
        nodejs 'nodejs' 
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm ci'
                }
            }
        }
        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'node server.js'
                }
            }
        }
    }
    post {
        success {
            slackSend(channel: '#myron_ip1', message: "Deployment successful: ${env.BUILD_ID} - ${env.Render_URL}")
        }
        failure {
            slackSend(channel: '#myron_ip1', message: "Deployment failed: ${env.BUILD_ID}")
        }
    }
}
