pipeline {
    agent any

    environment {
        NODE_ENV = 'test ortamı'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'GitHub reposundan kod çekiliyor'
                git branch: 'main', url: 'git@github.com:bujihalil1936/case.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Uygulama derleniyor'
                // Burada, nodejs-ci-cd-example dizinine geçiyoruz ve npm install komutunu çalıştırıyoruz
                dir('nodejs-ci-cd-example') {
                    sh 'npm install' 
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Testler çalıştırılıyor'
                // Testlerin doğru çalıştığından emin olun
                dir('nodejs-ci-cd-example') {
                    sh 'npm test'
                }
            }
        }

        stage('Deploy to Test Environment') {
            steps {
                echo 'Test ortamına dağıtım yapılıyor'
                echo 'Deploy işleminden önce yapılacak adımlar'
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
