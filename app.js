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
	}

}
 function whatcountry(type) {
 const answerElement = document.getElementById('out');

 switch (type) {
	case 'Ukraine':
 answerElement.innerHTML = ('Привіт');
	break;
 case 'Poland':
	answerElement.innerHTML = ('Hej');
	break;
}
}

function increment () {
	var i = getElementById('add')
	i.value++;
}
