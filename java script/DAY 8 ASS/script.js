// To find greater or lesser between two numbers
let firstNumber = Number(prompt("Enter a number"));
let secondNumber = Number(prompt("Enter a number"));
console.log(
  firstNumber > secondNumber
    ? `Greater than ${firstNumber}`
    : `Less than ${firstNumber}`
);
alert(
  firstNumber > secondNumber
    ? `Greater than ${firstNumber}`
    : `Less than ${firstNumber}`
);

// User data security check
const Username = "chintan";
const Password = "chintan12";

let Name = prompt("Enter your name");
let pass = prompt("Enter your password");

console.log(
  (Name == Username && pass == Password) && "You are logged in" || "Invalid username or password"
);

// Validity of voting age (18 to 40)
const Age = prompt("Enter your age");
console.log(
  (Age >= 18 && Age < 40) && "You are a valid user for voting" || "Too early or too old for voting"
);

// Greater than 10, negative, or out of scope
const num1 = Number(prompt("Enter first number"));
const num2 = Number(prompt("Enter second number"));
const result = num1 / num2;

console.log(
  result > 10
    ? "Result is greater than 10"
    : result < -1
    ? "Result is negative"
    : "Result is out of the scope"
);

// Check if the number is even or odd
let A = Number(prompt("Enter a number"));
console.log(A % 2 == 0 ? "The number is even" : "The number is odd");

// Determine the greater of two numbers
let Num1 = Number(prompt("Enter your first number"));
let Num2 = Number(prompt("Enter your second number"));
console.log(Num1 > Num2 ? "The first number is greater" : "The second number is greater");

// Smallest of two numbers
console.log(Num1 < Num2 ? "First number is the smallest" : "Second number is the smallest");

// Check if a number is positive, negative, or zero
let Num = Number(prompt("Enter a number"));
console.log(
  Num == 0
    ? "The number is Zero"
    : Num > 0
    ? "The number is positive"
    : "The number is negative"
);

// Check if a number is divisible by 5
let num = Number(prompt("Enter a number"));
console.log(num % 5 == 0 ? "The number is divisible by 5" : "The number is not divisible by 5");

// Assign “Pass” or “Fail” based on marks
let Marks = Number(prompt("Enter your Marks"));
console.log(Marks >= 40 ? "You passed" : "You failed");

// Assign grade based on score
console.log(
  Marks > 90
    ? "A"
    : Marks > 80
    ? "B"
    : Marks > 70
    ? "C"
    : Marks >= 40
    ? "D"
    : "F"
);

// Check voting eligibility (age ≥ 18)
let AgeVoting = Number(prompt("Enter your age"));
console.log(AgeVoting >= 18 ? "You are eligible to vote" : "You can't vote");

// Check if a year is a leap year
let Year = Number(prompt("Enter a Year"));
console.log(Year % 4 == 0 ? "The year is a leap year" : "The year is not a leap year");

// Check if a string is empty
let string = prompt("Enter a String");
console.log(string === "" ? "The string is empty" : "The string is not empty");

// Scholarship eligibility (passing all 5 subjects)
let English = Number(prompt("Enter your Marks in English"));
let Maths = Number(prompt("Enter your Marks in Maths"));
let C = Number(prompt("Enter your Marks in C"));
let FA = Number(prompt("Enter your Marks in FA"));
let MCA = Number(prompt("Enter your Marks in MCA"));

console.log(
  (English >= 40 && Maths >= 40 && C >= 40 && FA >= 40 && MCA >= 40)
    ? "You are eligible for scholarship"
    : "You are not eligible for scholarship"
);

// Username and password verification
let userName = "Agraj";
let PasswordStored = "Agraj01";

let NameEntered = prompt("Enter your Username");
let PassEntered = prompt("Enter your Password");

console.log(
  (userName == NameEntered && PasswordStored == PassEntered)
    ? "Your username and password are correct"
    : "Your username and password are incorrect"
);

// Assign “Day” or “Night” based on hour (24-hour format)
let Hour = Number(prompt("Enter the Time of the Day"));
console.log(Hour > 12 ? "It is Night" : "It is Day");

