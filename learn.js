
	/*const first = [1, 2, 3];
	const second = [4, 5, 6];

	console.log(first.concat(second));/// 1 спосіб
	/*
		1 - Створити змінну result
		2 - Обєднати два масиви, щоб в кінцевому результаті в консолі вивело [1, 2, 3, 4, 5, 6]
		Погуглиш яким чином обєднати можна два масиви в один. Можеш вивести багатьми варіантами, всіма якими знайдеш.
	*/

	const first = [1, 2, 3];
	const second = [4, 5, 6];
	const result = {}
	for(var i = 0; i < first.length; i++) {
    result[first[i]] = second[i];
}
console.log(result)
