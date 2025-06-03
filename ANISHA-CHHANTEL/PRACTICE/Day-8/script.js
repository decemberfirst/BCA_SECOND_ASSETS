// .......................BITWISE OPERATOR.....................

// BITWISE AND
// console.log(2 & 3);
// 1 0
// 1 1
//.....
// 1 1

// BITWISE OR
// console.log(2 | 3);
// 0 1 0
// 1 0 0
// -----
// 0 0 0 

// RIGHT SHIFT
// console.log(4 >> 1);     // (>>) (/) RIGHT SHIFT, (<<) (*) LEFT SHIFT
// 1 0 0
// 0 1 0 =>2
// 16 8 4 2 1 

// TERNARY OPERATOR

// SYNTAX: CONDITION ? WHAT IF TRUE : IF FALSE

// let myValue1=(prompt ('Enter a Number'));
// let myValue2=(prompt('Enter a Number'));
// console.log(myValue1>myValue2 ? `${ myValue1} is greater than ${myValue2}` : `${myValue1} is less than ${myValue2}`);
// alert(myValue1>myValue2 ? `${ myValue1} is greater than ${myValue2}` : `${myValue1} is less than ${myValue2}`);
//  prompt user magna , alert shows output from user
//  USERNAME=PASSWORD AND PASSWORD=USERNAME

// const USERNAME='admin';
// const PASSWORD='admin';
// let myUserName=(prompt('Enter your name'));
// let myPassword=(prompt('Enter your password'));
// console.log(USERNAME==myUserName && PASSWORD==myPassword ? "WELCOME BACK ADMIN": "INVALID CREDENTIAL");
// alert(USERNAME==myUserName && PASSWORD==myPassword ? "WELCOME BACK ADMIN": "INVALID CREDENTIAL");


// let myAge=(prompt('Enter your age'));
// console.log(myAge >=18 && myAge <40?"You are VALID USER FOR VOTING":"You are not VALID FOR VOTING");
// alert(myAge >=18 && myAge <40?"You are VALID USER FOR VOTING":"You are not VALID FOR VOTING");

// let myNumber1=(prompt('Enter a Number'));
// let myNumber2=(prompt('Enter a Number'));
// let RESULT=myNumber1/myNumber2;
// console.log(RESULT> 10 || RESULT< -1 ? 'RESULT IS GREATER THAN 10 OR RESULT IS NEGATIVE': `RESULT IS OUT OF THE SCOPE `);
// console.log(RESULT);

const Number=30;
console.log(Number % 2 == 0 ? 'NUMBER IS EVEN': 'NUMBER IS ODD');


// ASSIGNMENT

// 1
let num = (prompt('enter a number'));
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

// 2 

let a =(prompt('enter a number'));
let b =(prompt('enter a second number'));
let greater = (a > b) ? a : b;
console.log(greater); 

// 3 
let x =(prompt('enter a number'));
let y =(prompt('enter a second number'));
let smaller = (x < y) ? x : y;
console.log(smaller); 

// 4 
let value =(prompt('enter a value '));
let sign = (value > 0) ? "Positive" : (value < 0) ? "Negative" : "Zero";
console.log(sign); 

// 5

let number =(prompt('enter a number '));
let divisibleBy5 = (number % 5 === 0) ? "Divisible by 5" : "Not divisible by 5";
console.log(divisibleBy5);

// 6 

let marks =(prompt('enter a marks '));
let statu = (marks >= 50) ? "Pass" : "Fail";
console.log(statu); 

//7 
let score =(prompt('enter a score '));
let grade = (score > 90) ? "A" : "B";
console.log(grade); 

//8 
let age =(prompt('enter a age '));
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(eligibility); 

//9 
let year =(prompt('enter a year '));
let isLeap = (year % 4 === 0) ? "Leap Year" : "Not a Leap Year";
console.log(isLeap); 

//10 
let text =(prompt('enter a text '));
let isEmpty = (text === "") ? "Empty" : "Not Empty";
console.log(isEmpty); 


//11 
let subject1Passed = true;
let subject2Passed = true;
let subject3Passed = true;
let subject4Passed = false;
let subject5Passed = true;

let scholarshipStatus = (subject1Passed && subject2Passed && subject3Passed && subject4Passed && subject5Passed) ? "Eligible" : "Not Eligible";
console.log(scholarshipStatus); 

//12 
let enteredUsername = "user123";
let enteredPassword = "password456";
let correctUsername = "user123";
let correctPassword = "password456";

let loginStatus = (enteredUsername === correctUsername && enteredPassword === correctPassword) ? "Correct Credentials" : "Incorrect Credentials";
console.log(loginStatus); 

// 13 
let hour =(prompt('enter  hour '));
let timeOfDay = (hour >= 6 && hour < 18) ? "Day" : "Night";
console.log(timeOfDay); 

// 14 result fail or pass based on marks
let averageMarks =(prompt('enter a marks'));
let finalResult = (averageMarks >= 60) ? "Pass" : "Fail";
console.log(finalResult); 

