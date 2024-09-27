pipeline {
    agent any
    environment {
        RENDER_SERVICE_ID = 'gallery-myronkip'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/myronkip/gallery.git' 
            }
        }
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
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                script {
                    def response = httpRequest(
                        url: "https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys",
                        httpMode: 'POST',
                        contentType: 'APPLICATION_JSON',
                        requestBody: '{}', 
                        customHeaders: [[name: 'Authorization', value: "Bearer ${RENDER_API_KEY}"]]
                    )
                    echo "Response: ${response.status}"
                }
            }
        }
    }
    triggers {
        pollSCM('* * * * *') 
    }
    post {
        success {
            slackSend(channel: '#myron_ip1', message: "Deployment successful: ${env.BUILD_ID}")
        }
        failure {
            slackSend(channel: '#myron_ip1', message: "Deployment failed: ${env.BUILD_ID}")
        }
    }
}
