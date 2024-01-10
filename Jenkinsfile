pipeline{
    agent{
        docker{
            image 'cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1'
        }
    }

   environment {
        HOME = "${env.WORKSPACE}"
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install --force'
                }
            }
        }

        stage('Run tests') {
            parallel {
                stage('Test Set 1') {
                    steps {
                        script {
                            sh 'npm run cy:run:server -- --config-file config1.json'
                        }
                    }
                }

                stage('Test Set 2') {
                    steps {
                        script {
                            sh 'npm run cy:run:server -- --config-file config2.json'
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'npm run report:all'
            }
        }
        success {
            echo "========Pipeline executed successfully ========"
        }
        failure {
            echo "========Pipeline execution failed========"
        }
    }
}