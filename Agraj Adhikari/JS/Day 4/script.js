//DataTypesInJavascript

//String
//Number, Integer, Float
//Boolean
//Null
//Symbol
//Undefined

//Data is anything that can be recorded and captured
//Data+Some Processing =Information
//Data Type : Describes what type of data we are recording



//1) String: It is a combination of Characters, Wrapped by single or double quotes('' or "")

let myName="Suraj";

//typeof 

let salary=20000.13234;
let age= 19;
 
console.log(typeof myName)
console.log(typeof salary)
console.log(typeof age);
//typeof: (give what type of value variable holds)

// Number(Float = 1.2, 1.3)
// Integer= 100, 120;

// float and integer both are Number in JS

console.log(0.1+0.2);


let myNumber=9007199254740991;//2^53
let myMinimumNumber=-9007199254740991;
console.log(myMinimumNumber);

//for binay number(0b)
let myBinary=0b1010;
console.log(myBinary);

//for octal number(0o)
let myOctel=0o100;
console.log(myOctel);

//for hexadecimal number (0x)
let myHexaDecimal=0xf;
console.log(myHexaDecimal);

//Big Int

let myBigInt=1000n;
console.log(typeof myBigInt, myBigInt);


// console.log(10n + 10) Error because they are different data types


//Boolean

// either yes or no, true or false, 0 or 1

let isGreater=19>1;
console.log(isGreater);

let isSmaller=19<1;
console.log(isSmaller);




let myValue;
console.log(myValue);//Undefined because the value is not defined