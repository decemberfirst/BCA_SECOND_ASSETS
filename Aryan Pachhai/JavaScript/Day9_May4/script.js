console.log('JS has been loaded');

// Shorthand Operator (To minimize )

let a=b=c=d=e=5;
console.log(c);

// Compound Operator

let myVar=10;
console.log(myVar -=5);
// myVar=myVar-5; (myVar -=5)

// Dollar to Nepali currency

// let $money=Number(prompt('Enter dollar amount'));
// $money *=135.25;
// console.log(`${$money} npr`);

// +,-,*,/ through compound operator 

// let num1=num3=num4=num5=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));
// console.log(`${num1+=num2}`);
// console.log(`${num3-=num2}`);
// console.log(`${num4*=num2}`);
// console.log(`${num5/=num2}`);


// Increment/Decrement Operator

// (++myValue: pre increment );Increases 'myValue' then 'my2ndValue' is being assign 
// (myValue++: post increment);'my2ndInteger' is being assign and 'myInteger' increases

// Pre Increment
let myValue=20;
let my2ndValue=++myValue;
console.log(myValue);
console.log(my2ndValue);

// Post Increment
let myInteger=20;
let my2ndInteger=myInteger++;
console.log(myInteger);
console.log(my2ndInteger);

// Pre Decrement
let myDecre=20;
let my2ndDecre=--myDecre;
console.log(myDecre)
console.log(my2ndDecre);

//Post Decrement
let myDecreValue=20;
let my2ndDecreValue=myDecreValue--;
console.log(myDecreValue);
console.log(my2ndDecreValue);


let myNumber=20;
let my2ndNumber=100;
let myResult= ++myNumber + myNumber-- + my2ndNumber-- - --my2ndNumber;
console.log(myResult);

