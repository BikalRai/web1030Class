// object
const person1 = {
	name: 'Manish Maharjan',
	age: 17,
	address: 'Sunakothi',
	license: false,
	hobbies: ['running', 'boxing', 'coding']
};

console.log(person1.name);
console.log(person1['age']);
console.log(person1.address);
console.log(person1['license']);
console.log(person1.hobbies);
console.log(person1.hobbies[1]);

const person2 = {
	name: {
		firstName: 'Devin',
		lastName: 'Rai'
	},
	age: 16
}

console.log(person2.name.firstName);

const obj1 = {}

console.log(person1);
console.log(obj1);

obj1['brand'] = 'BMW';
console.log(obj1);
obj1.color = 'red';
console.log(obj1);

// methods in objects
const person3 = {
	name: {
		firstName: "Sally",
		lastName: "Smith"
	},
	birthYear: 2001,
	hasLicense: true,
	friends: ['Tom', 'Dick', 'Harry'],

	calcAge: function () {
		console.log(this);
		let age;
		age = 2023 - this.birthYear;
		return `${this.name.firstName} ${this.name.lastName} was born in ${this.birthYear} and is ${age}`;
	}
}

console.log(person3);

const person3Age = person3.calcAge();
console.log(person3Age);

// Math library

console.log(Math.ceil(5.1)) //rounds up the number
console.log(Math.round(5.2)) // rounds the number
console.log(Math.round(5.5)) // rounds the number
console.log(Math.random()) // generates number between 0 and 0.9999999999999
console.log(Math.pow(2, 5)) // first argument is base number and the second argument is the exponent
console.log(Math.floor(12.3));
console.log(Math.floor(12.9));

const dice = function() {
	let randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber
}


for (let i = 0; i < 5; i++) {
	console.log(`Rolling dice... ${dice()}`)
}