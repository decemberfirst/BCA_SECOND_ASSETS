// --------------BITWISE OPERATOR---------------
// BITWISE AND

//  console.log(4>>1);

//  TERNARY OPERATOR

//  SYNTAX: CONDITION ? WHAT IS TRUE : IF FALSE

//  let firstNumber = Number(prompt( 'Enter the greater number'));
//  let secondNumber = Number(prompt('Enter the less number'));
//  console.log(`firstnumber> secondnumber?` 

// alert(10>2? 'greater than 2 ' : 'less than 2');

// const USERNAME = 'AASHISH'
// const PASSWORD = 'ALEX'
// let userName = prompt('Enter your username');
// let password = prompt('Enter your password');
// alert(userName === USERNAME && password === PASSWORD ? 'Login successful' : 'Login failed');



// const userAge = Number(prompt('Enter your age'));
// let age = userAge >= 18 && userAge < 40 ? 'You are valid user for voting' : 'You are too early or too old for voting';
// console.log(age);


// let firstNumber = Number(prompt("Enter the first number"));
// let secondNumber = Number( prompt("Enter the second number"));
// console.log(result > 10 || result <-1?'Result is greater then 10 or less then -':'result is out of bound ');

// let num = Number(prompt("Enter the Number"));
//  let result = num%2 == 0? `Number is odd` : `Number is even`;
//  console.log(result);


// 1. Check if a number is even or odd.

let inputnum1 = Number(prompt("Enter Any Number."));
let oddeven = inputnum1%2

alert(oddeven == 0 ? "THE NUMBER IS EVEN." : "THE NUMBER IS ODD.");

------------------------------------------------------------------------------------------------------------------------

// 2. Determine the greater of two numbers.

let a= Number(prompt("Enter Any Number."));
let b= Number(prompt('Enter Any Number.'));

alert(a > b ? ${a} is Greater Than ${b}. : ${b} is Greater Than ${a}.);

----------------------------------------------------------------------------------------------------------------------

// 3. Find the smallest of two numbers.

let a= Number(prompt("Enter Any Number"));
let b= Number(prompt('Enter Any Number'));

alert(a < b ? ${a} is Smaller Than ${b}. : ${b} is Smaller Than ${a}.);



// 4. Check if a number is positive, negative, or zero.

let a= Number(prompt("Enter Any Number"));

alert(a > 0 ? "Number is Positive." : a < 0 ? "Number is Negative." : "Number is Zero.");


// 5. Check if a number is divisible by 5.

let a = Number(prompt("Enter Any Number"));
let result = a%5

alert(result == 0 ? "THE NUMBER IS DIVISIBLE BY 5." : "THE NUMBER NOT IS DIVISIBLE BY 5.");



// 6. Assign “Pass” or “Fail” based on marks.

let marks = Number(prompt("ENTER YOUR MARKS."));

alert(marks > 35 ? "PASS" : "Fail");



// 7. Assign grade based on score (e.g., A if >90, else B).

let marks = Number(prompt("ENTER YOUR MARKS."));

alert(marks > 50 ? "YOUR GRADE IS A." : marks > 40 ? "YOUR GRADE IS B." : marks > 30 ? "YOUR GRADE IS C." : marks > 20 ? "YOUR GRADE IS D." : "FAIL");



// 8. Check if a person is eligible to vote (age ≥ 18).

let age = Number(prompt("ENTER YOUR AGE."))

alert(age >= 18 ? "YOU ARE ELIGIBLE TO VOTE." : "YOU ARE TOO EARLY TO VOTE.");


// 9. Determine if a year is a leap year (basic check).

let year = Number(prompt("ENTER THE YEAR."));

alert(year%4 == 0 ? ${year} IS A LEAP YEAR : ${year} IS NOT A LEAP YEAR);



// 10. Check if a string is empty or not.

let input = prompt("ENTER ANYTHING YOU DESIRE.");

alert(input === "" ? "String is Empty." : "String is Not Empty.");



let sub1 = Number(prompt("ENTER YOUR MARKS."));
let sub2 = Number(prompt("ENTER YOUR MARKS."));
let sub3 = Number(prompt("ENTER YOUR MARKS."));
let sub4 = Number(prompt("ENTER YOUR MARKS."));
let sub5 = Number(prompt("ENTER YOUR MARKS."));

alert(sub1 > 35 && sub2 > 35 && sub3 > 35 && sub4 > 35 && sub5 > 35 ? "ELIGIBLE FOR SCHOLARSHIP." : "NOT ELIGIBLE FOR SCHOLARSHIP." );



// 12. Check if username and password are correct (simple string comparison).

const USERNAME = 'admin';
const PASSWORD = 'admin';

let user = prompt(Enter Your Username);
let pass = prompt(Enter Your Password);

alert(USERNAME == user && PASSWORD == pass ? 'You Are Logged in': 'Password Or Username Does Not Match' );

--------------------------------------------------------------------------------------------------------------------------------------------------------

// 13. **Assign “Day” or “Night” based on hour (24-hour format).

let time = Number(prompt("ENTER TIME."));

alert( time >= 1 && time <= 12 ? "Day" : "Night" );


14. Set result to "Pass" or "Fail" based on average marks.

let avg = Number(prompt("Enter your average marks."));

alert(avg >= 35 ?"PASS" : "FAIL");

________________________________________________________________________________________________________________________________________________________
