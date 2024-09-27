pipeline {
    agent any
environment {
        RENDER_URL = 'https://gallery-6c99.onrender.com'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/myronkip/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            step s{
                // sh 'npm run build'
            }
        }

        stage('Deploy to Render') {
            steps {
                script {
                    sh 'node server.js'
                }
            }
        }

        triggers {
        pollSCM('* * * * *') // Poll every minute for changes
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