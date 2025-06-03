console.log('JavaScript has been loaded');

// 'let' can be updated but not re-decalred
let name='Aryan ';
console.log(name);
let surname='Pachhai';
console.log(surname);
let fullname=name+surname;
console.log(fullname);

let a=20;
console.log(a);
let b=10;
console.log(b);
let sum=a+b;
console.log('The sum is:', sum);
let difference=a-b;
console.log('The difference is:', difference);
let multiplication=a*b;
console.log('The multiplication is:', multiplication);
let division=a/b;
console.log('The division is:', division);

//'const' can neither be re-decalred nor updated
const gravity= 9.8;
console.log(gravity);

// 'var' can be re-decalred and updated 
var x=3;
var y=4;
var y=7;
console.log(x+y);

// inital of variable name (alphabet,_,$)
let myName='Aryan';
console.log(myName);
let _myName='Ayan';
console.log(_myName);
let $myName='Ryan';
console.log($myName);

/**
 * let 1name='Aryan';
 * let !name='Aryan';
 */

// Reserved word also can't be used as variable name
// let let='Aryan';
// let do='Ryan';

// CASE SENSITIVITY(Lowercase and Uppercase)
let myaddress='Nepal';
console.log(myaddress);
let myAddress='Japan';
console.log(myAddress);

// Remaining rules are convention
// Pascal case
let userfromnepal; //plain case

// Pascal case
let UserFromIndia; //class

// Camel case 
let userFromIndia; //variable

// Snake case
let user_from_india; 

// Varible name length can be infinite but should have meaning

let num1=Number(prompt('Enter your first number'));
let num2=Number(prompt('Enter your second number'));
let add=num1+num2;
console.log('The sum is:', add);
let sub=num1-num2;
console.log('The subtraction is:',sub);
let multi=num1*num2;
console.log('The multiplication is:', multi);
let div=num1/num2;
console.log('The division is:', div);


/**
 * STRING (Character)
 * NUMBER (INTEGER, FLOAT)
 * BOOLEAN (TRUE/FALSE,1/0)
 * SYMBOL (Defining symbol)
 * NULL (object where )
 * UNDEFINED
 * BIGINT
 */





