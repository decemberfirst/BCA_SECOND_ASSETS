// symbol
let Mysymbol =Symbol('abc');
console.log(Mysymbol); // used to generate unique key (in object) will cover later
console.log(typeof Mysymbol);

// NULL ( no value)
// WHY TYPEOF NULL IS OBJECT IN JAVASCRIPT
let mynullvariable = null;
console.log(mynullvariable);
console.log(typeof mynullvariable); //(BIGGEST BUG IN JS WORLD)

// TYPE CONVERSION
let mynumber = '10';
console.log(mynumber + 10); //20 + is an operator polymorphism (poly -> many) (morph-> form)
let myconvertedNumber =  Number (mynumber);
console.log(myconvertedNumber + 10);

// SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE
// let mytweak = Number('abcd');
// let mytweak = Number('10');
// let mytweak = Number(10);
// let mytweak = Number('10b');
// true and false can be valid (1,0) alphabet can't be valid
// console.log(mytweak);
console.log(true + false);
console.log(-true/false);

// BOOLEAN (MORE TRICKER) (vvv...imp)
// ("true") true / ("false") false / ('') false 
// let myboolean = Boolean('a'); // non smpty string -> true, empty string -> false
// console.log(myboolean);

// STRING CASE
let myBoolean = Boolean('false');
console.log(myBoolean);

// NUMBER CASE
let mynumberBoolean = Boolean(1000);
console.log(mynumberBoolean); // non zero value is true,zero is false

// CONVERSION TO STRING TYPE FROM DIFFERENT OTHER TYPES
let mystringvalue = String(' Namaste, Bhawana'); // ALL OF THEM ARE POSSIBLE (IGNORE BigInt/)
console.log(mystringvalue);


// PRATICE PROBLEMS
// console.log(true + 1); //2

// type coeration
console.log('100' - 20);  //80
console.log('100' + 200);// added 100200
console.log(  )








