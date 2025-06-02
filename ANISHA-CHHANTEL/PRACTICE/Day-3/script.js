//  Data types in javascript
// STRING
// NUMBER, INTERGER, FLOAT
// BIGINT
// BOOLEAN
// NULL(NO VALUE)
// SYMBOL
// UNDEFINED(NO VALUE)

// COLLECTION OF VALUABLE INFORMATION , RAW FACTS AND FIGURES

// DATA IS ANYTHING THAT CAN BE RECORDED OR CAPTURED
// DATA + SAME PROCESSING = INFORMATION

// DATA TYPES -> DESCRIBES WHAT TYPE OF DATA WE ARE RECORDED
// 1) STRING

// STRING IS COMBINATION OF CHARACTERS, WRAPPEDN BY SINGLE OR DOUBLE QUOTES(' 'OR " ") 

let myName = 'anisha';
let myLastname ='chhantel';
let myNumber =9815416386;

// 2) typeof (gives what type of value variable holds)
console.log(typeof myName);
console.log(typeof myLastname);
console.log(typeof myNumber);

// NUMBER (FLOAT -> 1.2, 1.3)
// INTEGER -> 100, 200
// FLOAT + INTEGER

let number=10.1; 
// (more generic data types -> number)
console.log(typeof number);
console.log(0.2+0.1)

let myNunber =900719925470991;
//  max
let myMinimumNumber =-900719925470991;
//  min
console.log(myMinimumNumber);

let myBinary =0b1010;
console.log(myBinary);

let myOctal =0o100;
// (0 -7)
console.log(myOctal);

let myHex =0xf;
// (0 -9, A, B, C, D, E, F )
console.log(myHex);

// 3) BIG INT

let myBigInt =1000n;
console.log(myBigInt);
let myAnotherBigInt =10000.100;
console.log(typeof myAnotherBigInt); //String BigInt Number

// console.log(10n / 10) error (both type must  be same)
 
// BOOLEAN

// EITHER YES OR NO, TRUE OR FALSE, O OR 1

let isMarried =true;
let canVote =false;
// more when we get into if else...

// returns undefined (value is not defined)
let myVariable;
console.log(myVariable);