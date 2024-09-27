pipeline {
    agent any
    tools {
        nodejs 'nodejs' 
    }
    stages {
        stage('Install') {
            steps {
                script {
                    sh 'npm install'
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