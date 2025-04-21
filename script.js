//  Intro
/*let name = prompt("What is your name?");
alert("Hello, " + name + "! Welcome to JavaScript.");*/

//  Exercise - 1
let number = prompt("Enter a number");
if (number % 2 == 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

//  Exercise - 2
let firstNumber = prompt("Enter first number");

let operator = prompt("Enter operator");

let secondNumber = prompt("Enter second number");

let alertText = "";

if (operator == "+") {
  alertText = "Result: " + (firstNumber + secondNumber);
} else if (operator == "-") {
  alertText = "Result: " + (firstNumber - secondNumber);
} else if (operator == "*") {
  alertText = "Result: " + firstNumber * secondNumber;
} else if (operator == "/") {
  alertText = "Result: " + firstNumber / secondNumber;
} else {
  alertText = "Operator is invalid";
}
alert(alertText);

//  Exercise - 3
let age = prompt("Enter your age?");
if (age >= 18) {
  alert("You are eligible to vote.");
} else {
  alert("You are not eligible to vote yet.");
}

//  Exercise - 4
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//  Exercise - 5
let number = prompt("Enter a number?");
for (let i = 1; i <= 12; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

//  Exercise - 6
let score = prompt("Enter your score");
let outputText = "";
if (score >= 70) {
  outputText = "Excellent";
} else if (score < 70 && score >= 50) {
  outputText = "Good";
} else {
  outputText = "Needs Improvement";
}
alert(outputText);

//  Exercise - 7
const randomNum = Math.floor(Math.random() * 5) + 1;
let userGuess = prompt("Guess a number between 1 and 5.");
if (randomNum == userGuess) {
  alert("You guessed right!");
} else {
  alert("Wrong guess. The number was " + randomNum + ".");
}

//  Exercise - 8
let outputText = "";
for (let i = 1; i <= 15; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
