pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'GitHub reposundan kod çekiliyor'
                sshagent(credentials: ['796d5472-c9cd-4e02-b817-e4e7330e1045']) {
                git branch: 'main', url: 'git@github.com:HZeynep/case.git'
            }
        }
    }      

        stage('Clean') {
            steps {
                echo 'Bağımlılıklar temizleniyor'
                dir('nodejs-ci-cd-example') {
                    // Önce npm önbelleğini temizliyoruz
                    sh 'npm cache clean --force'
                    // Sonra eski bağımlılıkları kaldırıyoruz
                    sh 'rm -rf node_modules package-lock.json'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Uygulama derleniyor'
                dir('nodejs-ci-cd-example') {
                    // Ana bağımlılıkları yüklüyoruz
                    sh 'npm install'
                    // Eksik olabilecek test bağımlılıklarını yüklüyoruz
                    sh 'npm install chai mocha --save-dev'
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
