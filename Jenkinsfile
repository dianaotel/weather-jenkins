pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/dianaotel/weather-jenkins.git'
      }
    }
        
    stage('Build') {
      steps {
         sh 'npm install'
      }
    }
    
    stage('Deploy') {
        steps {
            sh 'npm run'
        }
    }
  }
}