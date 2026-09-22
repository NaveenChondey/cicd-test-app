pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-test-app .'
            }
        }

        stage('Run Application') {
            steps {
                sh 'docker run -d -p 3000:3000 --name cicd-test-app-container cicd-test-app'
            }
        }
    }
}
