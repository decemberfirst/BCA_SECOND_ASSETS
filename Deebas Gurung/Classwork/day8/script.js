//... BITWISE OPERATOR....
// console.log(4>>1);
// let a=Number(prompt("Enter first number"));
// let b=Number(prompt("Enter Second number "));
// // console.log(a>b ? `greater than ${b}`:`less than ${b}`);
// alert(a>b ? `greater than ${b}`:`less than ${b}`);
// const username='admin';
// const password='admin';
// let USERNAME=prompt("ENTER YOUR USER NAME");
// let PASSWORD=prompt('Enter the password');
//   console.log(username==USERNAME && password==PASSWORD ?'YOU ARE LOGGED IN':'USERNAME OR PASSWORD IS INCORRECT' );

// let age=Number(prompt('enter your age'));
// console.log((age>=18 && age<40) ?'you are valid for votiong':'you are too early too early or old for voting');

// let a=Number(prompt("enter a number"));
// let b=Number(prompt("enter a number"));
// let result=a/b;
// console.log((result>10||result<-1) ?'result is greater than 10 Or result is negative' :'result is out of scope');

// let a=Number(prompt("enter a number"));
// let rem=a%2;
// console.log((rem==0) ?'the number is even':'the number is odd');



//console.log((' ' && false) || (true && null) || -1);
 
 // ------------------BITWISE OPERATOR--------------
 
 // BITWISE AND
 
//  console.log(2 | 3);
 
 // 1 0
 // 1 1
 // ----
 // 1 1
 
 // BITWISE SHIFT
 
//  console.log(3 << 1); // left shift
 
 // 0 0 0 0 0 0 1 1
 // 0 0 0 0 0 1 1 0
 
 // console.log(2 & 4);
 
 // 0 1 0
 // 1 0 0
 // ---------
 //  0  0  0
 
 // right shift
 
// console.log(4 << 1);
 
 //  1 0 0
 // 0 1 0 => 2
 
 // 1 1 1
 
 // 4
 // 3
 // 1 0 0
 // 0 1 1
 
 // TERNARY OPERATOR
 
 // SYNTAX: condition ? what if true : if false
 
 //console.log(10 > 2 ? 'Greater than 2' : 'Less than 2');
 
 //const USERNAME = 'admin';
 //const PASSWORD = 'admin';
 
 // ENTER YOUR USERNAME (use prompt to take input from user)
 // ENTER YOUR PASSWORD (use prompt to take input from user)
 
 // YOU ARE LOGGED IN
 // USERNAME OR PASSWORD INCORRECT
 
 // const usernameFromUser = prompt('Enter your username');
 // const passwordFromUser = prompt('Enter your password');
 
 // console.log(
 //   usernameFromUser == USERNAME && passwordFromUser == PASSWORD
 //     ? 'Logged in'
 //     : 'incorrect username or password'
 // );
 
 // INPUT USER AGE FROM PROMPT
 // IF USER AGE IS GREATER THAN OR EQUAL TO 18 AND  LESS THAN 40 (HINT: >=18) (<40)
 // THEN CONSOLE YOU ARE VALID USER FOR VOTING
 // IF NOT THEN CONSOLE YOU ARE TOO EARLY OR TOO OLD FOR VOTING
 
 // ------------------------------------------------------------------------------------------------
 
 // INPUT TWO NUMBER FROM USER
 // DIVIDE THOSE TWO NUMBERS AND STORE IN VARIABLE RESULT
 
 // RESULT IS GREATER THAN 10 OR LESS THAN -1 PRINT "RESULT IS GREATER THAN 10 OR RESULT IS NEGATIVE"
 // IF NONE OF THE CONDITION MATCHED PRINT RESULT IS OUT OF THE SCOPE
 
 // let firstNumber = Number(prompt('ENter first number'));
 // let secondNumber = Number(prompt('Enter second number'));
 
 // let result = firstNumber / secondNumber;
 
 // console.log(
 //   result > 10 || result <= -1
 //     ? 'RESULT IS GREATER THAN 10 OR RESULT IS NEGATIVE'
 //     : 'RESULT IS OUT OF THE SCOPE'
 // );
 
//  const NUMBER = 29;
 
// even or odd
// let a=Number(prompt("enter a number"));
// let rem=a%2;
// console.log((rem==0) ? 'it is a even number':'it is a odd number');

// greater of two number
// let a=Number(prompt("enter a number"));
// let b=Number(prompt("enter a number"));
// console.log((a>b) ? `a is greater`:`b is greater`);

//smaller of two number
// let a=Number(prompt('Enter a number'));
// let b=Number(prompt('Enter a number'));
// console.log((a<b) ? `a is smaller`:'b is smaller');

//positive , negative or zero
// let a=Number(prompt('enter a number'));
// console.log(a>0|| a<0 ? 'the number is positive or negative':'the number is zero');

//divisible by 5
// let a=Number(prompt('enter a number'));
// rem=a%5;
// console.log(rem==0 ?'divisible by 5':'not divisible by 5' );

//pass or fail
// let marks=Number(prompt('enter the marks'));
// console.log(marks==25 || marks>25 ? 'pass':'fail');

//grade comparison
// let grade=Number(prompt("enter the grade"));
// console.log(grade>90 ? ' you got grade A':'you got grade b');

// eligible to vote
// let age=Number(prompt('enter the age'));
// console.log( age=18 && age>18 ? 'you are eligible to vote':'not eligible to vote');

// leap year
// let year=Number(prompt('enter the year'));
// let rem= year%4;
// console.log( rem==0? 'it is a leap year':'not a leap year');

// string is empty or not
// let a=(prompt('enter a word'));
// console.log( a==''?'it is an empty string':'not a empty string');

// eligible for scholarship
// let a=(prompt('enter the marks'));
// let b=(prompt('enter the marks'));
// let c=(prompt('enter the marks'));
// let d=(prompt('enter the marks'));
// let e=(prompt('enter the marks'));
// console.log(a>80 || a==80 && b>80 || b==80 && c>80 || c==80 && d>80 || d==80 && e>80 || e==80 ?'you are eligible':'Not eligible');

//  Check if username and password are correct
//  const PASSWORD='focus';
//  const USERNAME='focus';
//  let username=prompt('enter your username');
//  let password=prompt('enter your password');
//  console.log( USERNAME==username && PASSWORD==password ?' you are logged in':'your password or username is incorrect' );

//Assign “Day” or “Night” based on hour
// let shift=Number(prompt('enter the time'));
// console.log(shift==7 ||shift<19 ?'Day':'night');

// result to "Pass" or "Fail" based on average marks.
// let the pass marks for each subject be 25.
// let a=(prompt('enter the marks'));
// let b=(prompt('enter the marks'));
// let c=(prompt('enter the marks'));
// let d=(prompt('enter the marks'));
// let e=(prompt('enter the marks'));
// let result=(a+b+c+d+e)/5;
//  console.log( a>25 || a==25 && b>25 || b==25 && c>25 || c==25 && d>25 || d==25 && e>25 || e==25 && result=125 || result=125 ?'you  are pass':'you are fail');









