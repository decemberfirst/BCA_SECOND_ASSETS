console.log('JS has been loaded');


// BITWISE OPERATOR

// Bitwise AND , OR
console.log(2 & 3);

// 1 0
// 1 1
// ----
// 1 0

console.log(2 | 3);

// 1 0
// 1 1
// ----
// 1 1

//Bitwise shift
console.log(3 << 1); //left shift
// 0 0 0 0 0 0 1 1
// 0 0 0 0 0 1 1 0

console.log(4 >> 1); //right shift
// 0 0 0 0 0 1 0 0
// 0 0 0 0 0 0 1 0



// Ternary Operator

//Syntax : condition? what if true: if false
//prompt = ask user input
//alert  = shows user output

// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));
// let result=num1>num2;
// console.log(result? `${num1} is greater than ${num2}` : `${num1} is less than ${num2}`);

// alert(result? `${num1} is greater than ${num2}` : `${num1} is less than ${num2}`);


// const USERNAME='admin';
// const PASSWORD='admin';
// let userName=prompt('Enter username');
// let passWord=prompt('Enter password');
// console.log(USERNAME==userName && PASSWORD==passWord? 'You are logged in': 'The username/password is incorrect');
// alert(USERNAME==userName && PASSWORD==passWord? 'You are logged in': 'The username/password is incorrect');

// let userAge=Number(prompt('Enter your age'));
// console.log(userAge>=18 && userAge<40? 'You are valid user for voting' : 'You are too early or too old for voting');
// alert(userAge>=18 && userAge<40? 'You are valid user for voting' : 'You are too early or too old for voting');

// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));
// let result=num1/num2;
// console.log(result>10 || result<-1? 'Result is greater than 10 or result is negative' :'Result is out of the scope');
// alert(result>10 || result<-1? 'Result is greater than 10 or result is negative' :'Result is out of the scope');


// let num1=Number(prompt('Enter a number'));
// let result=num1%2;
// console.log(result==0?'The number is even':'The number is odd');

// let num1=Number(prompt('Enter a number'));
// console.log( && num1/1 ? 'The number is prime':'The number is not prime'); 
