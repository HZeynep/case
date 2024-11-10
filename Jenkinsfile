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
                sh 'npm install'
                sh 'npm install chai mocha --save-dev'  // Chai ve Mocha modüllerini yükle
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Testler çalıştırılıyor'
                sh 'npm test'
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
