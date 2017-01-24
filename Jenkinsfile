node {
  stage('Build') {
    def nodeHome = tool name: 'nodejs-6.9.4', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"
    echo 'Building...'
  }
  stage('checkout') {
    checkout scm
  }
  stage('Test') {
    echo 'Testing...'
    env.NODE_ENV = "test"
    print "Environment will be : ${env.NODE_ENV}"
    sh 'node -v'
    sh 'node index.js'
  }
  stage('Deploy') {
    echo 'Deploying...'
    sh 'sleep 10s'
  }
  stage('Cleanup') {
    echo 'Cleaning up...'
    sh 'sleep 10s'
  }
}