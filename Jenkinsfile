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