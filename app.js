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
			} else {
				answerElement.innerHTML = "Can't be divided by zero!";
			}
			break;
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


function incrementer() {
	var i = document.getElementById("add");
	i.value++;
}


function decrement() {
	var i = document.getElementById("add");
	i.value--;
}

function remaind() {
	const inputValue = document.getElementById("add").value

	if (typeof inputValue !== 'number') {
		console.log('Opps')
		return;
	}

	const result = inputValue % 3;
	if (result === 0) {
		console.log('YES!');
	} else {
		console.log('NO');
	}
}
