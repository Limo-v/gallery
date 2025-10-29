pipeline {
    agent any
        tools {
          nodejs 'nodeJs-24'
        }

    triggers {
        githubPush() // The Build process will be triggered once a push is made to the master branch of the repository
    }
// Build Stages
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/limo-v/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                withCredentials([string(credentialsId: 'render-deploy-hook', variable: 'DEPLOY_HOOK')]) {
                    sh 'curl -X POST $DEPLOY_HOOK'
                }
            }
        }
    }
    post {
        always {
            echo 'Notification stage executed.'
        }
        // Successful deployment Alert
        success {
            emailext(
                to: 'victor.kibet4@student.moringaschool.com',
                subject: "Build: ${currentBuild.fullDisplayName} succeeded!\n View deployed app: https://gallery-u2na.onrender.com",
                body: "The deployment was successful. Check the details at ${env.BUILD_URL}"
            )

            slackSend(
                channel: '#victor_ip1',
                tokenCredentialId: 'slack-webhook',
                color: 'good',
                message: "Build: ${currentBuild.fullDisplayName} succeeded!\n View deployed app: https://gallery-u2na.onrender.com/"
            )

        }
        // Failed deployment notification
        failure {
            // email notification
            emailext(
                to: 'victor.kibet4@student.moringaschool.com',
                subject: "Failed Deployment: ${currentBuild.fullDisplayName}",
                body: "The deployment failed. Check the details at ${env.BUILD_URL}"
            )
            // slack notification
            slackSend(
                channel: '#victor_ip1',
                tokenCredentialId: 'slack-webhook',
                color: 'danger',
                message: "FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER} failed.\n${env.BUILD_URL}"
            )

        }
    }

}