pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'node server'
            }
        }
        stage('Slack Notification') {
            steps {
                script {
                    def slackMessage = "Build ${env.BUILD_ID} succeeded! Visit the site: https://gallery-u2na.onrender.com"
                    sh """
                    curl -X POST -H 'Content-type: application/json' --data '{"text":"${slackMessage}"}' ${env.SLACK_WEBHOOK_URL}
                    """
                }
            }
        }
        
    }
    post {
        failure {
            mail to: 'victor.kibet4@student.moringaschool.com',
                 subject: "Build Failed",
                 body: "Check the Jenkins console output for details."
        }
    }
    triggers {
        pollSCM('* * * * *') 
    }
}