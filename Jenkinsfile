pipeline {
    agent {
        docker {
            image 'cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1'
        }
    }

    environment {
        HOME = "${env.WORKSPACE}"
    }

    stages {
        stage("Install dependencies") {
            steps {
                sh 'npm install --force'
            }
        }

        stage("Run tests") {
            parallel {
                stage("Test Set 1") {
                    steps {
                        sh 'npm run cy:run:server'
                    }
                }

                stage("Test Set 2") {
                    steps {
                        sh 'npm run cy:run:server'
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'npm run report:all'
        }
        success {
            echo "========pipeline executed successfully ========"
        }
        failure {
            echo "========pipeline execution failed========"
        }
    }
}
