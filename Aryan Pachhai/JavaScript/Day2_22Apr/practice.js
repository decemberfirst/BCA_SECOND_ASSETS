console.log('JavaScript has been loaded');


let name='Aryan ';
let surname='Pachhai';
let fullname=name+surname;
console.log(fullname);

let a=10;
let b=20;

// unformatted output
console.log(36);
console.log(69);

let sum=a+b;
let diff=a-b;
let product=a*b;
let division=a/b;

//formatted output 
console.log('The sum is:',sum);
console.log('The difference is:',diff);
console.log('The product is:',product);
console.log('The division is:',division);

// applicable initial for variable name(alphabet,_,$)
/**  other character cannot be used and output is error cause it doesnot follow rule
    let !myname='Aryan';
    let 1myname='Aryan';
*/
/** reserved word cannot be used cause it already has a special meaning
 * let for=10;
 * let let=20;
 * let do=10;
 */

let myname='Aryan';
console.log(myname);

let _myname='Ayan';
console.log(_myname);

let $myname='Ryan';
console.log($myname);

// CASE SENSITIVITY
// Uppercase and Lowercase are  sensitive
 
let address='Nepal';
let Address='India';
console.log(address,Address);

// Remaining are conventions , you arenot compelled to follow these

// Pascal case

let userfromnepal; //plain case

// Pascal case

let UserFromNepal; //class

//Camel case

let userFromNepal; //mostly prefer and variable

//Snake case

let user_from_nepal; 

// Variable name length can be infinite

// let userFirstName=prompt('Enter your first name');
// let userSurName=prompt('Enter your surname');
// let userAddress=prompt('Enter your address');
// console.log('My name is:',userFirstName);
// console.log('My surname is:',userSurName);
// console.log('My address is:',userAddress);


let num1=Number(prompt('Enter 1st number'));
let num2=Number(prompt('Enter 2nd number'));
let plus=num1+num2;
let minus=num1-num2;
let cross=num1*num2;
let divide=num1/num2;

// "Number" should be use other it will give output as in string
console.log('The additon  is:',plus);
console.log('The subtraction  is:',minus);
console.log('The multiplication is:',cross);
console.log('The division of is:',divide);



