// 'console' determines location and 'log' determines the output
console.log('JavaScript has been loaded');

let name= 'Aryan ';
console.log(name);

let surname='Pachhai';
console.log(surname);

let fullname=name+surname;
console.log('My name is :',fullname); //formatted output

let a=36+33;
console.log(a); 
console.log(36); //unformatted output

let x=10;
let y=20;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

let p=1;
let q=2;

let add=1+2;
console.log('The sum is:'+add);
let sub=1-2;
console.log('The difference is:'+sub);
let multi=1*2;
console.log('The multiplication is:'+multi);
let div=1/2;
console.log('The divison is:'+div);

// "alphabet,_,$" can only be initial for variable name

let myname='Aryan';
let _myname='Ayan';
let $myname='Ryan';
console.log(myname);
console.log(_myname);
console.log($myname);

/**Gives error,since it doesnot follow rule

let 1name='Aryan'; 
let !name='Aryan';

can't use reserved words where the words alreaddy have special meaning

let let=20;
let for=20;
let do=30;
*/


// CASE sensitivity (uppercase'Capital' and lowercase'Small' are sensitive)

let address='Nepal';
let Address='China';
console.log(address,Address);

// Remaining one are conventions, you aren't compelled to follow these

// Pascal case

let userfromindia; //plain case

// Pascal case

let UserFromIndia; //class

//Camel case

let userFromIndia; //variable

//Snake case

let user_from_india;

// variable name can be any length long

// let userFirstName=prompt('Enter your name');
// let userSurname=prompt('Enter your surname');
// let userAddress=prompt('Enter your address');
// console.log('My first name is:',userFirstName);
// console.log('My first name is:',userSurname);
// console.log('My address is:',userAddress);

// Without "Number" ahead of prompt , it will take string
let num1=Number(prompt('Enter 1st number'));
let num2=Number(prompt('Enter 2nd number'));
let sum=num1+num2;
let subtract=num1-num2;
let multiply=num1*num2;
let divvison=num1/num2;
console.log('The sum is:',sum);
console.log('The difference is:',subtract);
console.log('The multiplication is:',multiply);
console.log('The division is:',divvison);
