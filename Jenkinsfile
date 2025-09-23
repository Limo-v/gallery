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
    triggers {
        pollSCM('* * * * *') 
    }
}