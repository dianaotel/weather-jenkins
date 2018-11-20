pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/dianaotel/weather-jenkins.git'
      }
    }
        
    stage('Start node server') {
      steps {
         sh 'npm install'
         sh 'node server.js'
      }
    }      
  }
}