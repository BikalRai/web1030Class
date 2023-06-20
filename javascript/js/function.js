// normal function
function greet() {
	console.log("Greetings!!!");
}

greet();
greet();
greet();
greet();

// function with parameters and function expression
const greet2 = function(param1, param2) {
	console.log(param1, param2);
}

//inputting arguments
greet2("Welcome", "Devin");

const sum = function(x, y) {
	console.log(x + y);
	var y = 22;
}

sum(2, 3);


// {
// 	var x = 10;
// }

// console.log(x);
// console.log(y);

// function with return statement
function sum2() {
	return 3 + 5;
}

const result = sum2();
console.log(result);
console.log(sum2());


// arrow function
const sum3 = () => {
	console.log(33 + 33);
}

sum3();

const greet3 = () => console.log("Greetings 3");

greet3();

const greet4 = greet => console.log(greet);

greet4("Greetings again!!");

const greet5 = (greet, message) => console.log(greet, message);

greet5("Welcome", "to the jungle");
greet5("Hello", "this is happening, yes!!");



const bmiCalculator = function (x, y) {

	const bmi = x / y** 2;

	if (bmi < 18.9) {
		console.log("Underweight");
	} else if (bmi >= 18.9 && bmi < 23.9) {
		console.log("Healthy");
	} else if (bmi >= 23.9 && bmi < 29.9) {
		console.log("Overweight");
	} else {
		console.log("Obese");
	}
}

bmiCalculator(45, 1.3);
bmiCalculator(65, 1.65);

function greet6() {
	greet2("Hello", "There")
}

greet6();