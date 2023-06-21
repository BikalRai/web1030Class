// array initialization
const arr1 = [1, 2, true, "Hello there", [3, 4, 5, [6, 7, 8]]];
console.log(typeof arr1);
console.log(arr1);
console.log(arr1.length);
console.log(arr1[3]);
console.log(arr1[4][1]);
console.log(arr1[4][3]);
console.log(arr1[4][3][2]);

const fruits = ["apple", "orange", "banana"];
console.log(fruits);
fruits.push("pear");
fruits.push("mango");
fruits.push("water melon");
console.log(fruits);

fruits.pop();
console.log(fruits);
const poppedFruit = fruits.pop();
console.log(fruits);
console.log(poppedFruit);

fruits.shift()
console.log(fruits);
fruits.unshift("Durian")
console.log(fruits);

console.log(fruits.includes("Orange"));
console.log(fruits.includes("orange"));
console.log(fruits.indexOf('orange'));

fruits.forEach(function(element, index) {
	console.log(element, index);
})

fruits.forEach(function(fruit, i) {
	console.log(fruit, i);
})

fruits.forEach(fruit => {
	console.log(fruit);
})

const numbers = [1, 2, 3, 4 ,5 ,6 ,7 ,8, 9, 10];

for (let i = 0; i < numbers.length; i++) {

	if (numbers[i] === 5) {
		continue;
	}

	console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {

	if (numbers[i] === 5) {
		break;
	}

	console.log(numbers[i]);
}

// numbers.forEach(number => {
// 	if(number === 5) {
// 		continue;
// 	}

// 	console.log(number);
// })


// local and global variable
const a = 55; // global variable
const c = 23; // global variable

function func() {
	// const a = 64; // local variable
	console.log(a);
	// console.log(b);
	const c = 69;
	console.log("-------------------Next Code-----------------------");
	function func2() {
		const b = 45;
		console.log(a);
		console.log(b);
	}

	func2();
}

func();
console.log(c)