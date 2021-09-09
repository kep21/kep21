const friends = [
	{ name: "Oleg", age: 20, city: "Lviv", gender: "Male" },
	{ name: "Ira", age: 67, city: "Kyiv", gender: "Female" },
	{ name: "Max", age: 32, city: "Yavoriv", gender: "Male" },
	{ name: "Olya", age: 19, city: "Lviv", gender: "Female" },
	{ name: "Ivan", age: 21, city: "Odessa", gender: "Male" },
	{ name: "Roman", age: 24, city: "Dnipro", gender: "Male" }
];

function calculateBirth(array) {
	const currentYear = new Date().getFullYear();
	return array.map(friend => {
		friend.yearOfBirth = currentYear - friend.age;
		return friend;
	});
}


console.log(calculateBirth(friends))
