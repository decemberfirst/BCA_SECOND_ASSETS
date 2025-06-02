console.log('Hello welcome to javascript world');
console.log("My name is anisha Chhantel.");
console.log(4);

let myname=('anisha');
console.log(myname);

let firstname=('Anisha' );
let lastname=(' chhantel');
let fullname=firstname+lastname;
console.log(fullname);

let result=10+20;
console.log(result);

let a=10;
let b=5;
let c=15;
let sum=a+b;
console.log("The sum is:"+ sum);
let diff=a-b-c;
console.log("The diff is:"+ diff);
let mul=a*b*c;
console.log("The mul is:"+ mul);
let div=a/b;
console.log("The div is:"+  div);

// first character must be either of these (alphabet,_,$)
// let name = 'Anisha';
// let $name ='Anisha';
// let _name ='Anisha';

// this throws an error, since it doesnot follow rule
// let 1first ="anisha";

// cannot use special character other than _ and $

// cannot use reserved words
// let let =20;
// let for =20;
// let do =30;
// all these words already have special meaning
// CASE SENSITIVITY
// uppercase and lowercase letters are sensetive
let myAddress ='Nepal';
let myaddress ='India';
console.log(myAddress, myaddress);

// REMAINING ONE ARE CONVENTIONS, YOU ARE'T COMPELLED TO FOLLOW THESE
// PASCALE CASE
// let UserFromIndia

// PLAIN CASE
// let userfromindia

// SNAKE CASE
// let user_from_india

// CAMEL CASE
// let userFromIndia

let firstName =prompt('Enter Your First Name');
let secondName =prompt('Enter Your Second Name');
let thirdName =prompt('Enter Your Third Name');
let email =prompt('Enter Your Email');
console.log('Your first Name is:' , firstName);
console.log('Your Second Name is:' , secondName);
console.log('Your Third Name is:' , thirdName);
console.log('Your Email is:' , email);

let firstNumber=Number(prompt('Enter first number'));
let secondNumber=Number(prompt('Enter second number'));
console.log('your first number is:', firstNumber);
console.log('your second number is:', secondNumber);
let Sum =firstNumber+secondNumber;
console.log(Sum);