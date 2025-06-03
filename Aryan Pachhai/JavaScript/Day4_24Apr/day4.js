console.log('JavaScript has been loaded');

// 6) SYMBOL

const mySymbol = Symbol('abc');
console.log(mySymbol); // used to generate unique key (in object),will cover later
console.log(typeof mySymbol);


// 5) NULL ; 

let myNullValue= null;
console.log(myNullValue);
console.log(typeof myNullValue); // Biggest bug in JS world

// TYPE CONVERSIONS

let myStringValue='10';
console.log(myStringValue +10); // + is an operator polymorphism (poly = many),(morph = form)

let myConvertedNumber =Number(myStringValue);
console.log(myConvertedNumber+10);

// SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE

// Should be number otherwise output will come NaN (Not a Number)

let myTweak =Number('69');
console.log(myTweak); // defined as number

let my2ndTweak = Number(56);
console.log(my2ndTweak); // already a number

let my3rdTweak = Number('39b');
console.log(my3rdTweak); // NaN due to a string 

let my4thTweak = Number(true);
console.log(my4thTweak) // Digital Logic case (1)

let my5thTweak = Number(false);
console.log(my5thTweak); // Digital Logic case (0)


console.log(true+false); //(1+0)
console.log(true / false); //infinity

let myBoolean = Boolean('fsfd'); //String case; non empty string ('421few')=true ,empty string('')=false
console.log(myBoolean);

let MyBoolean = Boolean(0.0); // Number case; Non-zero vlaue = true, Zero value= false
console.log(MyBoolean);


// Conversion to string type from different other types

let string_value=String(); // All string are possible (ignore BIgINt ,)
console.log(string_value);


// Practice problems

console.log(true+1); //2

// Type Coertion

console.log('100' - 60); //40 (In this case, with the intellegence of JS other opreator shows normal calculation  but in '+' operator it will add the string and number)


