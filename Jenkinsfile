pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'GitHub reposundan kod çekiliyor'
                git branch: 'main', url: 'git@github.com:bujihalil1936/case.git'
            }
        }

        stage('Clean') {
            steps {
                echo 'Sadece eski bağımlılıkları temizliyoruz'
                dir('nodejs-ci-cd-example') {
                    sh 'rm -rf node_modules' // package-lock.json'u koruyarak bağımlılıkları korur
                }
            }
        }


        stage('Build') {
            steps {
                echo 'Uygulama derleniyor'
                dir('nodejs-ci-cd-example') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Testler çalıştırılıyor'
                dir('nodejs-ci-cd-example') {
                    sh 'npm test'
                }
            }
        }

        stage('Deploy to Test Environment') {
            steps {
                echo 'Test ortamına dağıtım yapılıyor'
            }
        }
    }

    post {
        always {
            echo 'Temizlik işlemi yapılıyor'
        }
        success {
            echo 'Pipeline başarıyla tamamlandı!'
        }
        failure {
            echo 'Pipeline başarısız oldu!'
        }
    }
}
