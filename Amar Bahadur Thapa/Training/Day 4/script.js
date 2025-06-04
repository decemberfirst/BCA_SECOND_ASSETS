// SYMBOL
const MySymbol = Symbol('abc');
console.log(MySymbol); // used to generate unique key (in object) will cover later
console.log(typeof MySymbol);

// NULL (No Value) null type object it is a bug.
let MyNullVariable = null; // we can put value at any time
console.log(typeof MyNullVariable); // (Biggest Bug in Js world)

// TYPE CONVERSIONS
let myNumber = '10';
console.log(myNumber + 10); // + is an operator polymorphism (poly-> many) (morph-> form)
let MyConvertNumber = Number(myNumber);
console.log(MyConvertNumber + 20);

// SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE
// let myTweak = Number('10');
// let myTweak = Number(10);
// let myTweak = Number('10b');
// let myTweak = Number(true);
// let myTweak = Number(false);
// NAN-> NOT A NUMBER
// true = 1, false =0
let myNumber2 = Number(true); 
console.log(myNumber2);
console.log(-true/false);

// BOOLEAN
// STRING CASE
let myBoolean = Boolean(''); // non empty string (Anything we write and if we put space also)= true, empty string = false IN string case
console.log(myBoolean);

// NUMBER CASE
let myBooleanNumber = Boolean(1000);
console.log(myBooleanNumber); // non zero value true and zero value false. In Number case

// CONVERSION TO SRING TYPE FROM DIFFERENT OTHER TYPE

let myStringOutput = String(); // All of theam are possin=ble expect BigInt
console.log(myStringOutput);

// PRACTICE PROBLEM

console.log(true + 1);
console.log('100'- 20); // type coertion
console.log('100' + 200);
