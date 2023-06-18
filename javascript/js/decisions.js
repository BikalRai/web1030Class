// if statement

const age1 = 18;
let sum = 0;

if (age1 >= 18) {
	console.log("Eligible to take license exams");
	sum++;
	console.log("What more?");
}


if (5 - 2 === 3) {
	console.log('Yay!!');
}

let num = 23;

if(num % 2 === 0) {
	console.log("Number is even");
} else {
	console.log("Number is odd");
}

if (age1 >= 18) {
	console.log("Eligible to vote");
} else {
	console.log("Not eligible to vote");
}

let age2 = 33;
if (age2 > 65) {
	console.log("Senior citizen");
} else if(age2 > 32) {
	console.log("Matured Adult")
} else if(age2 > 18) {
	console.log("Young Adult");
} else {
	console.log("Considered a child");
}




// bmi calculator
// const weight = Number(prompt("Enter weight in kg"));
// const height = Number(prompt("Enter height in meters"));

// // bmi = weight / height * height
// // const bmi = weight / (height * height);
// const bmi = weight / height ** 2;

// if (bmi < 18.9) {
// 	console.log("Underweight");
// } else if (bmi >= 18.9 && bmi < 23.9) {
// 	console.log("Healthy");
// } else if (bmi >= 23.9 && bmi < 29.9) {
// 	console.log("Overweight");
// } else {
// 	console.log("Obese");
// }


// switch statement
const day = 1;

switch (day) {
	case 1:
		console.log("Sunday");
		break;
	case 2:
		console.log("Monday");
		break;
	case 3:
		console.log("Tuesday");
		break;
	case 4:
		console.log("Wednesday");
		break;
	case 5:
		console.log("Thursday");
		break;
	case 6: 
		console.log("Friday");
		break;
	case 7:
		console.log("Saturday");
		break;
	default:
		console.log("Invalid Day!!");

}

// ternary operator
// syntax = condition check ? runs if true : runs if false

age1 >= 18 ? console.log("Adult") : console.log("Child");