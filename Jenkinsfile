node { // <1>
  stage('Build') { // <2>
    /* .. snip .. */
    echo 'Building...'
    sh 'sudo curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -'
    sh 'sudo yum -y install nodejs'
    sh 'ls -alp'
  }
  stage('Test') {
    /* .. snip .. */
    echo 'Testing...'
    env.NODE_ENV = "test"
    print "Environment will be : ${env.NODE_ENV}"
    sh 'node -v'
    sh 'node index.js'
  }
  stage('Deploy') {
    /* .. snip .. */
    echo 'Deploying...'

  }
  stage('Cleanup') {
    /* .. snip .. */
    echo 'Cleaning up...'

  }
}