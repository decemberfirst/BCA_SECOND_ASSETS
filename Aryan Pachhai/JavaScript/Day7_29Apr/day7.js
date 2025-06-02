console.log('JS has been loaded');

// let celsius=Number(prompt('Enter celsius'));
// let fahrenheit=(celsius*9/5)+32;
// let kelvin=celsius+273.15;
// console.log(fahrenheit);
// console.log(kelvin); 

// const variable_name (variable_name can be in capital in const keyword to sepcify user)

// OPERATORS

/**
 * 1) Arithmetic Operator
 * 2) Logical Operator
 * 3) Typeof Operator
 * 4) Relational Operator
 * 5) Ternary Operator
 * 6) Bitwise Operator
 */

// a+b (a and b are operands and + is operator)

// 1) Arithmetic Operator (Mathematical operator; +,-,*,/,%)
console.log(20+20); //Addition
console.log(20-20); //Subtraction
console.log(20*2); //Multiplication
console.log(20/20); //Division
console.log(3%2);   //Modulus(Reminder)

// 2) Logical Operator (AND,OR)


console.log(0 + 1 && false); //false 
console.log(0 - 1 && true); //true
console.log("abc" || " " || true); //abc
console.log(true && " " && ""); //empty string
console.log("" || ""); // empty string
console.log(true || false && true && "abc" || false); //true
console.log(null || undefined); //undefined
console.log(undefined || false); //false
console.log(null && true); //null
console.log(null || true || false); //true

// 3) Typeof Operator



// 4) Relational Operator(Comparison Operator; <,>,<=,>=,!=,==,===), output in true/false

// console.log('10' == 10);  // true  // performs type coretion
// console.log('10' === 10); // false // doesnot perform type coretion


// let num1=Number(prompt('Enter a number'));
// let num2=num1>0;
// console.log('The given number is greater than 0 ',num2);

// let Num1=Number(prompt('Enter a number'));
// let Num2=Number(prompt('Enter another number'));
// if(Num1>Num2){
//     Greater='The Num1 is greater than Num2';
// }
// else{
//     Greater='The Num2 is greater than Num1';
// }
// console.log(Greater);

// UNIT CONVERTER

let meter=Number(prompt('Enter length in meter'));
let milimeter=1000*meter;
let centimeter=100*meter;
let micrometer=1000000*meter;
let kilometer=meter/1000;
let mile=meter/1609.344;
let yard=1.09361*meter;
let foot=3.28084*meter;
let inch=39.3701*meter;
console.log(`The value ${meter}m converted in different units,\n ${meter} m = ${milimeter} mm,\n ${meter} m = ${centimeter} cm,\n ${meter} m = ${micrometer} µm,\n ${meter} m = ${kilometer} km,\n ${meter} m = ${mile} mi,\n ${meter} m = ${yard} yd,\n ${meter} m = ${foot} ft,\n ${meter} m = ${inch} in`);
