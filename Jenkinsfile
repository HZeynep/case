pipeline {
    agent any

    environment {
        NODE_ENV = 'test'  // Ortam değişkeni tanımladık
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'GitHub reposundan kod çekiliyor'
                git branch: 'main', url: 'https://github.com/bujihalil1936/nodejs.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Uygulama derleniyor'
                sh 'npm install'
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
