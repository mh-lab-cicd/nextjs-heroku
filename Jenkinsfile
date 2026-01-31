pipeline {
  agent any

  tools {
    nodejs 'NodeJS24'
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
        sh '''
        git push https://heroku:$HEROKU_API_KEY@git.heroku.com/nextjs-test-mamoudou.git HEAD:main
        '''
      }
    }
  }
}
