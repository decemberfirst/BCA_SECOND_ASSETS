console.log('JavaScript has been loaded');

// DATA TYPES IN JS

/**
 * 1) STRING
 * 2) NUMBER, INTEGER, FLOAT
 * 3) BIGINT
 * 4) BOOLEAN
 * 5) NULL
 * 6) SYMBOL
 * 7) UNDEFINED (NO VALUE)
 */

/**
 * Collection of raw facts and figures which can be recorded and captured
 * DATA + PROCESSING = INFORMATION
 */

// Data types : Descibes what types of data are being recorded

// 1) String is combination of characters, wrapped by single or double quotes ('' OR "")

let myname='Aryan';
let myroll=6;
let name=true;
console.log(typeof myname);
console.log(typeof myroll);
console.log(typeof name);

// 2) Number(Float: 1.3 , 1.5)
//    Integer: 100,200

let number=10.23; //(more generic data types : number)
console.log(typeof number);

console.log(0.1 + 0.2);

let myMaxNumber=9007199254740991; //max number can be upto 2^53
console.log(myMaxNumber);

let myMinNumber=-9007199254740991; //min number can be upto -2^53
console.log(myMinNumber);

let myBinary = 0b1010;
console.log(myBinary);

let myOctal= 0o100;
console.log(myOctal);

let myHex = 0xc;
console.log(myHex);

// 3) BIGINT
let myBigInt=13244093429342993434298000n;
console.log(myBigInt);
console.log(typeof myBigInt);

// The 'n' be should be removed to be valid for float value
// let myAnotherBigInt=1000.321321n;
// console.log(myAnotherBigInt);

// If the vlaues are different then it can't give any output
// console.log(10n+10);

// 4) BOOLEAN

// Either yes or no,true or false,right or wrong,0 or 1

let ageAbove18 = true;
let canvote = false;

// 7) UNDEFINED

let myVariable;
console.log(myVariable); //undefined

let a=5;
let b=6;
let c=5;
console.log(a==b);
console.log(a==c);



