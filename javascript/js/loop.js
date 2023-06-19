// for loop

for (let i = 1; i <= 10; i++) {
	console.log(i);
}

for (let i = 1; i <= 10; i++) {
	console.log("Hello World");
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
	sum = sum + i;
}

console.log(sum)

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log("Even")
	} else {
		console.log(i)
	}
}


// while loop

let i = 10;
while(i != 5) {
	console.log(i);
	i--;
}

// palindrome number
let num = Number(prompt("Enter number"));
let original_num = num;
let remainder;
let reverse = 0;

while (num > 0) {
	remainder = num % 10;
	reverse = reverse * 10 + remainder;
	num = Math.floor(num / 10);
}

if (original_num === reverse) {
	console.log("Number is palindrome");
} else 
console.log("Number is not palindrome");

// do while loop

let j = 5;
do {
	console.log(j);
	j++;
} while (j < 10);

let k = 21;
do {
	console.log(k);
	k++;
} while (k < 10);