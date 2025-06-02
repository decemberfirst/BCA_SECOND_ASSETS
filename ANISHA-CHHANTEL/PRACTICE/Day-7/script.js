// let myTemp=Number(prompt("Enter your Number in celsius"));
// let myFahernehit=(myTemp*9/5)+32;
// console.log(myFahernehit);
// let KELVIN=myTemp+273.15;
// console.log(KELVIN);


// OPERATORS

// ARITHEMTIC OPERATORS
// LOGICAL OPERATORS
// TYPEOF OPERATORS
// RELATIONAL OPERATORS
// TERNARY OPERATORS
// BITWISE OPERATORS

// ........................ARTIMETIC OPERATORS............................
// 3+2 3 AND 2 IS OPERANDS AND + IS OPERATORS, MODULES

// MATHMETICAL OPERATORS
//  +, -, /, *, %

// console.log(20+20);  //ADDITION
// console.log(20-20);  //SUBTRACTION
// console.log(20/2);  //DIVISION
// console.log(10*2);  //MULTIPLICATION
// console.log(3%2);  // % OR MODULUS REMAINDER

// console.log(2 % 2);
// console.log(9999 % 2);
// console.log(40 % 2);

// .....................LOGICAL OPERATORS........................
//  AND, OR, NOT
// console.log(true && false )

console.log(0 + 1 && false);  //false
console.log(0 - 1 && true);  //true
console.log("abc"||" "||true);  //abc shot circuit
console.log(true&& " "&&" ");  //blank
console.log(""||"");  //blank
console.log(true||false&&true&&"abc"||false);  //true
console.log(null || undefined);  //undefined
console.log(undefined || false);  //false
console.log(null && true);  //null
console.log(null || true || false);  //true shot circuit

//...................TYPEOF OPERATOR..................................

//....................RELATION / COMPARISION OPERATOR................................
// <, >, <=, >=, !=, ==, === (TRUE/FALSE)

// console.log(10<20);
// console.log(10<=10);
// console.log(10>20);
// console.log(20!=10);
// console.log(10>=20);

// console.log('10'== 10); //true (performs type coretion)
// == check values for equality
// console.log('10'===10); //false (doesnot perform type coretion)
// === check values for both equality or typeof

let myVariable=Number(prompt('Enter a Number'));
let Compare=(myVariable>=50);
console.log(Compare);


//kilometer to feet
let myConvert=Number(prompt('Enter your kilometers number'));
console.log(myConvert*3280.8);

//kilometer to meters
console.log(myConvert*1000);

//kilometer to inches
console.log(myConvert*39370);

//kilometer to cm
console.log(myConvert*100000);

//kilometer to yards
console.log(myConvert*1093.6);

//kilometer to miles
console.log(myConvert*0.62137);