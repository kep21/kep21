const friends = [
	{ name: "Oleg", age: 20, city: "Lviv", gender: "Male", firstSalary: 1200, secondSalary: 3000 },
	{ name: "Ira", age: 67, city: "Kyiv", gender: "Female", firstSalary: 1600, secondSalary: 14000 },
	{ name: "Max", age: 32, city: "Yavoriv", gender: "Male", firstSalary: 900, secondSalary: 13000 },
	{ name: "Olya", age: 19, city: "Lviv", gender: "Female", firstSalary: 7200, secondSalary: 90000 },
	{ name: "Ivan", age: 21, city: "Odessa", gender: "Male", firstSalary: 1600, secondSalary: 6000 },
	{ name: "Roman", age: 24, city: "Dnipro", gender: "Male", firstSalary: 2550, secondSalary: 8000 }
];

<<<<<<< HEAD

	/*function findline(German){
	if (German.length>=6){
		console.log('+')
	}
		else
			console.log('-')
	}*/

	function findline(German){
		if (German.length>=6){
		return "+"
		} else {
			return "-"
		}
	}
	console.log(findline("German"))



/*function returnNumber(8) {
	if (number>10) {
		return"+"
	}
	if (number<2) {
		return"-"
	}
	else if (number>2<10)
	return "+-"
}
console.log(returnNumber(8))*/
=======
/*
	Показати тільки тих друзів, які проживають у Львові та Києві. Додати нове пока - різниця між другою та першою зарплатою. Нехай поле називається difference.
*/

function newFriends(array) {
	return array;
}


console.log(newFriends(friends));
>>>>>>> fb65997127ca0e35388dda33e8bad7ec884dd23f
