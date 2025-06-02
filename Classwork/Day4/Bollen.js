// Symbol
const MySymbol = Symbol('abc');
console.log(MySymbol); // used to generate unique key (in object), will cover later
console.log(typeof MySymbol);

// Null
// Why Typeof null is object in javascript
let MyNullvariable = null;
console.log(typeof MyNullvariable); // (Biggest bug in the world)

// type conversions

let MyNumber = '10';
console.log (MyNumber + 10); // + is an operator Polumorphism (poly ->many) (morph ->Form)

//Some tweaks (edge cases) While Converting To Number Type

let myTweak = Number('abc');
console.log(myTweak);

let Aash = Number(10);
console.log(Aash);

let Null = Number('10b');
console.log(Null);

console.log(true / false);
console.log(-true / false);


 // Bollen (more Trickier)
 let myBoolean = Boolean('true');
 console.log(myBoolean);

 let myboolen=Boolean('false');
 console.log(myBoolean);

 // Number Case 
 let myNumberBoolean = Boolean(0.0001);
 console.log(myNumberBoolean);  // non zero value -> true, zero-> false

 //Conversion to string Type from Different other types

 let myStringValue =String('Aashish');
 console.log(myStringValue);

 console.log(true + 1); // 2

 console.log('100'-20); // Type Coertion 
 console.log('100'+ 200);
 