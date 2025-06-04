// DATA TYPES IN JAVASCRIPT 

// STRING
// NUMBER, INTEGER, FLOAT
// BOOLEAN
// NULL (NO VALUE)
// SYMBOL
// BIGINT
// UNDEFINED (NO VALUE)

// DATA IS ANYTHING THAT CAN BE RECORDED AND CAPTURTED
// DATA + SOME PROCESSING = INFORMATION

// DATA TYPE --> DESCRIBES WHAT TYPE OF DATA WE ARE RECORDING

// STRING --> STRING IS COMBINATION OF CHARACTERS, WRAPPED BY SINGLE OR DOUBLE QUOTES ('' OR "")

let myname = 'Amar';
let myLastname = 'Thapa';
console.log(typeof myname);
//typeof (gives what type of value is varaiable) 
let salary = 20000;
console.log(typeof salary);
let number = 10.1; 
console.log(typeof number);
let istrue = true;
console.log(typeof istrue);

// NUMBER (FLOAT--> 1.2, 1.3) DECIMAL OR POINT
// INTEGER -> (100, 200) WHOLE NUMBER
//FLOAT + INTEGER = NUMBER

let number2 = 10;
console.log(typeof number2);

console.log(0.1 + 0.2);

let myMaxNumber = 9007199254740991; // max 2^53
console.log(myMaxNumber);
let myMinimumNumber = -9007199254740991; // min
console.log(myMinimumNumber);
let myBinary = 0b1010;
console.log(myBinary);
let myOctal = 0O100;
console.log(myOctal);
let myHexadeciaml = 0xf;
console.log(myHexadeciaml);

// BIG INT
// IF WE ADD N IN LAST OF NUMBER THEN IT IS BIG Int.\

let myBigInt = 1000n;
console.log(myBigInt);
let myAnotherBigInt = 10000.100;
console.log(myAnotherBigInt);
console.log(typeof myBigInt);
//BigInt we cannot use float number and both type must be same.

// BOOLEAN

// EITHER YES OR NO, TRUE OR FALSE, 0 OR 1

let isMarried = true;
let canVote = false;

let myVariable;
console.log(myVariable); // returns as undefined if we had not defined value.

let _X = 10;
Boolean(_X);
