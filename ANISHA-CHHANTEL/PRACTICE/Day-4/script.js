// SYMBOL
let MySymbol=Symbol('abc');
console.log(MySymbol); // USED TO GENERATE THE UNIQUE KEY (IN OBJECT), WILL COVER LATER
console.log(typeof MySymbol);

// NULL (no value)
let MyNullVariable =null;
console.log(typeof MyNullVariable);//( BIGGEST BUG IN JS WORLD )

// TYPE CONVERSIONS
let myNumber ='10';
console.log(myNumber + 10); // + is an operator polmorphism (poly -> many)(morph -> form)
let MyConvertedNumber = Number(myNumber);
console.log(MyConvertedNumber + 10);

// SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE
let myTweaK = Number(true);
console.log(myTweaK);  //(not a number (NaN))
 let myTruck = Number(10);
 console.log(myTruck);
// console.log(true + false) (infinity)
// console.log( -true / false) (-infinity)


// BOOLEAN (MORE TRICKER)
// let myBoolean = Boolean(" "); //( anything you pass it doesnot matter its output comes true ,
//  but if there is only string or no value then its output is false.
//  non empty string -> true, empty string ->false
// console.log(myBoolean);

let myBoolean = Boolean = Boolean(0.0001);
console.log(myBoolean);  //non zero value -> true, zero -> false

// CONVERSION TO STRING TYPE FROM DIFFERENT OTHER TYPES

let myStringValue = String('Anisha, Chhantel');  //ALL OF THEM ARE POSSIBLE EXCEPT BIGINT
console.log(myStringValue);

// PRACTICE PROBLEMS
console.log(true+1);

// TYPE COERTION

console.log('100'-20);
console.log('100'+ 200);
console.log(-+- 10);
console.log('abc' + null- true+false);
console.log('20'-10+200-30);
console.log('abc'+true*2);
console.log('abc' +false*3);