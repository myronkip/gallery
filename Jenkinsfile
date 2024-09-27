pipeline {
    agent any
    
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
            steps { // Corrected 'step s{' to 'steps {'
                script {
                    sh 'npm run build' // Uncommented the build step
                }
            }
        }

        stage('Deploy to Render') {
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
