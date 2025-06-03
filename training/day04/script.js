let Mysymbol = Symbol('abc');
console.log(Mysymbol);
console.log(typeof Mysymbol);
 

//Null (no value)

let MyNullVaraiable = null;
console.log(typeof MyNullVariable);


//Type conversions
 
let myNumber = '10';
console.log(myNumber + 10); 
let MyConvertedNumber = Number(myNumber);
console.log(MyConvertedNumber + 10);

//some tweaks (edge cases ) while cobverting to number type 

// letmytweak = Number(10);
// console.log(myTweak);
// console.log(-true / false );

// let myBoolean = Boolean('false');
// console.log(myBoolean);

// let myNumberBoolean = Boolean(0.0);
// console.log(myNumberBoolean)

// conversion ro string type from different other types

// let myStringValue = String(Infinity);
// console.log(true + 1)
console.log('100' + 200);