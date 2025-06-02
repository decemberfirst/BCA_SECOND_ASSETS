// Data types in js

// String
// Number, INTEGAR, FLOAT 
// Boolean
// undefined
// NULL
// SYMBOL
// bigint

// DATA ARE RAW FACTS AND FIGURES




// 1) STRING
// STRING IS COMBINATIOPN OF CHARACTERS , WRAPPED BY SINGLE OR DOUBLE QUOTES "" OR ''

// let myName ="Sushant";
// let salary= 10000;
// console.log(typeof myName)
// console.log(typeof salary)
//  console.log(myName + salary)


//  NUMBER (FLOAT = 1.2 , 1.3)
// INTEGER -> 1,2,3,4,5,6,7,8,9,10
// let number = 10;
// console.log(typeof number)
// both float and integer are numbers

// console.log(0.1 + 0.2) 

// 0 0 0
// 1 1 1 


let myNumber = 9007199254740991; // max
let myMinimumNumber = -9007199254740991; //min
console.log(myMinimumNumber);

let myBinary = 0b101010; // binary number
console.log(myBinary);

let myOctal = 0o100; // octal number
console.log(myOctal);

let myHexadecimal = 0xf; //(0 - 9, A, B, C, D, E, F)hexadecimal number
console.log(myHexadecimal);

// let myBinary = 0b101010;      // 42 in decimal
// let myOctal = 0o100;          // 64 in decimal
// let myHexadecimal = 0xf;      // 15 in decimal

// console.log(myBinary);        // 42
// console.log(myOctal);         // 64
// console.log(myHexadecimal);   // 15



// 3) bigint 
let myBigInt = 1234567890123456789012345678901234567890n;
let myAnotherBigInt = 10000.100;
console.log(myBigInt); 
console.log(myAnotherBigInt)



// BOOLEAN
// either yes or no, true or false, 0 or 1
let isMarried =true;
let canVote = false;

let myVariable; //value is not defined only variable is defined so the output will be undefined
console.log(myVariable); // returns undefined. 