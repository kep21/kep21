function mathOperations(type) {
	const firstNumber = parseInt(document.getElementById('n1').value);
	const secondNumber = parseInt(document.getElementById('n2').value);
	const answerElement = document.getElementById('out');

	if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
		alert(`Fields should be numbers!`);
		return;
	}

	switch (type) {
		case 'plus':
			answerElement.innerHTML = firstNumber + secondNumber;
			break;
		case 'minus':
			answerElement.innerHTML = firstNumber - secondNumber;
			break;
		case 'multiply':
			answerElement.innerHTML = firstNumber * secondNumber;
			break;
		case 'divideup':
			if (secondNumber !== 0) {
				answerElement.innerHTML = firstNumber / secondNumber;
			}
			answerElement.innerHTML = "Can't be divided by zero!";
			break;
		default:
			alert(`You pass wrong type: ${type}!`);
	}

}

function whatcountry() {

	const answerElement = document.getElementById('out');
	const country = document.getElementById('country').value;


	switch (country) {
		case 'Ukraine':
			answerElement.innerHTML = 'Привіт';
			break;
		case 'German':
			answerElement.innerHTML = 'Hallo';
			break;
		case 'English':
			answerElement.innerHTML = 'Hello';
			break;
		case 'French':
			answerElement.innerHTML = 'Bonjour';
			break;
		case 'Turkey':
			answerElement.innerHTML = 'Merhaba';
			break;
		case 'China':
			answerElement.innerHTML = '你好';
			break;
		default:
			alert('No matches found');
	}
}
