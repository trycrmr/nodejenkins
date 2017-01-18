let message = process.argv[2];
let printMessage = (message) => {
	if(message) {
		console.log('Your message is: ' + message)
		return true;
	} else {
		console.log('Please pass the message as an argument.');
		return false;
	}
}

printMessage(message);