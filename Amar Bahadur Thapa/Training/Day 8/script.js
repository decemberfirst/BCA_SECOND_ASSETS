//---------------------------------------BITWISE OPERATOR---------------------------------------------------------//

// BITWISE AND

// console.log(2 & 2);

// 1 0
// 1 0
// ---
// 1 1

// RIGHT SHIFT
// console.log(4 >> 1);

// TERNARY OPERATOR
 //SYNTAX: CONDITION ? WHAT IF TRUE: IF FALSE : colon

//  let Num1 = Number(prompt('Enter a first number'));
//  let Num2 = Number(prompt('Enter a second number'));
//  console.log(Num1>Num2? `${Num1} greater than ${Num2}` : `${Num1} less than ${Num2}`);
//  alert(Num1>Num2? `${Num1} greater than ${Num2}` : `${Num1} less than ${Num2}`);

// const USERNAME = 'admin';
// const PASSWORD = 'admin12';

// let myUsername = prompt('Enter your Username');
// let myPassword = prompt('Enter your Password');
// console.log(USERNAME==myUsername && PASSWORD==myPassword ?"WELCOME BACK ADMIN":"INVALID CREDENTIAL");
// alert(USERNAME==myUsername && PASSWORD==myPassword ?"WELCOME BACK ADMIN":"INVALID CREDENTIAL");

// const USERAGE = 18;
// let userAge = Number(prompt('Enter Your Age'));
// console.log(USERAGE<=18 && USERAGE<40 ? "Your are vaild user for voting" : "You are too early for voting");
// alert(USERAGE<=18 && USERAGE<40 ? "Your are vaild user for voting" : "You are too early for voting");

// let num1 = Number(prompt('Enter a First Number'));
// let num2 = Number(prompt('Enter a Second Number'));
// let result = Number(num1/num2);
// console.log(result>10 || result<-1 ? "Result is greater than 10 or Result is negative":"Result is out of the scope");
// alert(result>10 || result<-1 ? "Result is greater than 10 or Result is neagtive":"Result is out of the scope");

// let userInputNumber = Number(prompt('Enter a Number'));
// let result = userInputNumber%2;
// console.log(result % 2 == 0? "Result is Even":"Result is Odd");
// alert(result % 2 == 0? "Result is Even":"Result is Odd");






//-----------------------------------Determine the greater of two numbers----------------------------------------------------//

// let userInput1 = Number(prompt('Enter first Number'));
// let userInput2 = Number(prompt('Enter second Number'));
// console.log((userInput1>userInput2)? "userInput1 is greater":(userInput2>userInput1)? "userInput 2 is greater":"Both numbers are equal");
// alert((userInput1>userInput2)? "userInput1 is greater":(userInput2>userInput1)? "userInput 2 is greater":"Both numbers are equal");

//-----------------------------------Find the smallest of two numbers---------------------------------------------------------//

// let userInput1 = Number(prompt('Enter a first Number'));
// let userInput2 = Number(prompt('Enter a second Number'));
// console.log((userInput1<userInput2) ? "userInput1 is smaller":(userInput2<userInput1)? "userInput2 is smaller": "Both numbers are equal");
// alert((userInput1<userInput2) ? "userInput1 is smaller":(userInput2<userInput1)? "userInput2 is smaller": "Both numbers are equal");

//--------------------------------- Check if a number is positive, negative, or zero--------------------------------------//

// let userInput = Number(prompt('Enter any Number'));
// console.log((userInput>0) ? "Number is positive": (userInput<0) ? "Number is negative" :"Number is zero");
// alert((userInput>0) ? "Number is positive": (userInput<0) ? "Number is negative" :"Number is zero");

//----------------------------------Check if a number is divisible by 5-----------------------------------//

// let userInput = Number(prompt('Enter any Number'));
// console.log(userInput % 5 == 0 ? "Number is divisible by 5":"Number is not divisible by 5");
// alert(userInput % 5 == 0 ? "Number is divisible by 5":"Number is not divisible by 5");

// == --> compares only values, and converts types if necessary.
// === --> compares values and types exactly (no type conversion).

//-------------------------------------------Assign “Pass” or “Fail” based on marks----------------------------------//

// let userMark = Number(prompt('Enter any Marks(%)'));
// console.log(userMark > 39 ? "congratulation you are Pass.": "Better luck next time.");
// alert(userMark > 39 ? "congratulation you are Pass.": "Better luck next time.");

//---------------------------------------Assign grade based on score (e.g., A if >90, else B)-------------------------------//

// let userGrade = Number(prompt('Enter any Number'));
// console.log(userGrade > 90 ? "Congrtulation you got Grade A.":"Congrtulation you got Grade B.");
// alert(userGrade > 90 ? "Congrtulation you got Grade A.":"Congrtulation you got Grade B.");

//--------------------------------------Check if a person is eligible to vote (age ≥ 18)-------------------------------------//

// const USERAGE = 18;

// let voterAge = Number(prompt('Enter your Age'));
// console.log(voterAge >= USERAGE ? "You are eligible for voting.":"You are too early for voting.");
// alert(voterAge >= USERAGE ? "You are eligible for voting.":"You are too early for voting.");

//-----------------------------------Determine if a year is a leap year (basic check)---------------------------------------//

// let leapYear = Number(prompt('Enter a Year'));
// console.log(leapYear % 4 === 0 ? "Leap year.":"Not a leap year." );
// alert(leapYear % 4 === 0 ? "Leap year.":"Not a leap year." );

//-----------------------------------Check if a string is empty or not---------------------------------------------//

// let userInput = prompt('Enter a string');
// console.log(userInput === "" ? 'The string is empty.':'The string is not empty.');
// alert(userInput === "" ? 'The string is empty.':'The string is not empty.');

//-----------------Assign “Eligible” or “Not Eligible” for scholarship (based on passing all 5 subjects)------------------//

// const PASSMARK = 40;

// let sub1 = Number(prompt('Enter a Mark'));
// let sub2 = Number(prompt('Enter a Mark'));
// let sub3 = Number(prompt('Enter a Mark'));
// let sub4 = Number(prompt('Enter a Mark'));
// let sub5 = Number(prompt('Enter a Mark'));
// console.log(sub1>=PASSMARK && sub2>=PASSMARK && sub3>=PASSMARK && sub4>=PASSMARK && sub5>=PASSMARK ? "Eligible for scholarship.":"Not Eligible for scholarship.");
// alert(sub1>=PASSMARK && sub2>=PASSMARK && sub3>=PASSMARK && sub4>=PASSMARK && sub5>=PASSMARK ? "Eligible for scholarship.":"Not Eligible for scholarship.");

//------------------------------Check if username and password are correct (simple string comparison)---------------------//

// const USERNAME = "Admin";
// const PASSWORD = "Admin12";

// let userName = prompt('Enter your Username');
// let UserPassword = prompt('Enter your Password');
// console.log(USERNAME==userName && PASSWORD==UserPassword ? "WELCOME BACK TO THE PAGE.":"Incorrect username or password."); 
// alert(USERNAME==userName && PASSWORD==UserPassword ? "WELCOME BACK TO THE PAGE.":"Incorrect username or password."); 

//--------------------------------------Assign “Day” or “Night” based on hour (24-hour format)-------------------------------//


// -------------------------------------Set result to "Pass" or "Fail" based on average marks-------------------------------//

// const PASSMARK = 40;

// let mark1 = Number(prompt('Enter the Mark'));
// let mark2 = Number(prompt('Enter the Mark'));
// let mark3 = Number(prompt('Enter the Mark'));
// let mark4 = Number(prompt('Enter the Mark'));
// let mark5 = Number(prompt('Enter the Mark'));
// let average =(mark1 + mark2 + mark3 + mark4 + mark5) / 5;
// console.log(average>=PASSMARK ? "Pass":"Fail");
// alert(average>=PASSMARK ? "Pass":"Fail");

//------------------------------------Check if a number is prime or not (using ternary inside a loop or function)--------------------//

// let __ = false;
// console.log(!__);