pipeline {
    agent any

    environment {
        NODE_ENV = 'test ortamı'  // Ortam değişkenini burada  tanımladım....
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
                // nodejs-ci-cd-example klasörüne geçip npm install komutunu çalıştırıyoruz
                sh 'cd nodejs-ci-cd-example && npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Testler çalıştırılıyor'
                // Testlerin doğru çalıştığından emin olun
                sh 'npm test'  // npm test komutunu çalıştırarak testleri başlatır
            }
        }

        stage('Deploy to Test Environment') {
            steps {
                echo 'Test ortamına dağıtım yapılıyor'
                // Test ortamına deploy komutu buraya eklenebilir
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
