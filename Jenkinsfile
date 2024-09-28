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
                withCredentials([string(credentialsId: 'Renderhook', variable: 'RENDER_DEPLOY_HOOK')]) {
                    sh """
                    curl -X POST ${RENDER_DEPLOY_HOOK}
                    """
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