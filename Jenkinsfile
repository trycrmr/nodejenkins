node { // <1>
    stage('Build') { // <2>
        sh 'echo "build"' // <3>
    }

    stage('Test') {
        sh 'echo "test"'
        junit 'reports/**/*.xml' // <4>
    }

    stage('Deploy') {
        sh 'echo "deploy"'
    }
}