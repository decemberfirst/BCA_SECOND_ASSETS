//Symbol
const Mysymbol= Symbol('abc');
console.log(Mysymbol);// used to generate unique key (in object), will cover later
console.log(typeof Mysymbol);


//Null( no value)

// WHY typeof null is object in javascript
let MyNullVariable = null;
console.log(typeof MyNullVariable);// (biggest bus in Js World)

// type conversions
let mynumber='10';
console.log(mynumber + 10);//+ is an operater polymorphism (poly -> many)(morph -> form)

let myconvertednumber = Number(mynumber);
console.log(myconvertednumber + 10);

//some tweaks (edge cases) while converting to number type
//let mytweak=Number('20');
// let mytweak= Number(20);
// let mytweak= Number('10b');
// let mytweak= Number(true) 1 -> true, 0
//console.log(mytweak);
console.log(true+ false);
console.log(-true/false);

//boolean( more trickier) (very important)
let myboolean= Boolean('a');//non empty string -> true, empty string -> false
console.log(myboolean);

//number case
let mynumberboolan = Boolean(0);
console.log(mynumberboolan);// non zero value -> true, zero -> false

// conversion to string type from different other types

let mystringvalue= String('excuse mai, jani ho');// all of them are possible( ignore )
console.log(mystringvalue);

//practice problems
console.log(true+1);

//type coertion
console.log('100'-20);
console.log('100'+200);





