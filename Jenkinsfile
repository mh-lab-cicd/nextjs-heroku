pipeline {
    agent any

    tools {
        nodejs 'NodeJS24'
    }

    environment {
        // 'HEROKU_API_KEY' est l'ID du credential "Secret Text" que vous avez créé dans Jenkins
        HEROKU_TOKEN = credentials('HEROKU_API_KEY')
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy Heroku') {
            steps {
                // Utilisation de doubles quotes "" pour que Groovy interprète la variable
                // On utilise '_' comme utilisateur, c'est la norme pour les tokens Heroku
                sh "git push https://_:${HEROKU_TOKEN}@git.heroku.com/nextjs-test-mamoudou.git HEAD:main"
            }
        }
    }
}