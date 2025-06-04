// let degree = Number(prompt('Enter Dergree'));
// let fahrenheit = Number((degree* 9/5)+32);
// let kelvin = Number(degree + 273.15);
// console.log(`The temperature in Fahrenheit: ${fahrenheit}`);
// console.log(`The temperature in Kelvin: ${kelvin}`);

// OPERATOR

// ARITHMETIC OPERATOR
// LOGICAL OPERATOR
// TYPEOF OPERATOR
// RELATIONAL OPERATOR
// TERNARY OPERTAOR
// BITWISE OPERATOR 


//-------------------------------------------ARITHMETIC OPERATOR-----------------------------------------------------------------//

// 3+2 3 AND 2 OPERANDS + OPERATOR
// MATHMATICAL OPERATOR
//+,-,/,*,%

// console.log(20 +20); // Addition
// console.log(20 - 20); // Subtraction
// console.log(20 / 2); // Division
// console.log(10 * 20); //Multiplication
// console.log(3%2); //Modulus(Reminder)

// console.log(2%2); // IF EVEN THAN ANSWER WILL BE ZERO
// console.log(9999%2); // IF ODD THAN ANSWER WILL BE ONE

//-----------------------------------------LOGICAL OPRATOR----------------------------------------------------------------------//

// console.log(true && true);

// practice Question
//false
//

// console.log(0 + 1 && false); // false
// console.log(0 - 1 && true); // true
// console.log("abc" || " " || true); //abc
// console.log(true && " " && ""); //""
// console.log("" || ""); //""
// console.log(true || false && true && "abc" || false); //true
// console.log(null || undefined); //undefined
// console.log(undefined || false); //false
// console.log(null && true); //null
// console.log(null || true || false); //true

//---------------------TYPEOF OPERATOR----------------------------//

//-------------------------------------RELATION / COMPARISION  OPERATIOR----------------------------------------------//

//<, >, <=, >=, !=, ==, === (TRUE/FALSE)
// console.log('10' == 10); //true  //performs type coretion change '10' in to number directly
// console.log('10' === 10); //false //doesnot perform type coretion 

//you don't know js by kyle simpson

// let a = Number(prompt('Enter a first number'));
// let b = Number(prompt('Enter a Second number'));
// if (a == b){
//     console.log(`${a} and ${b} are equal`);
// }
// else if (a > b){
//     console.log(`${a} is greater tha ${b}`);
// }
// else{
//     console.log(`${a} is less than ${b}`);
// }

// let mynumber1 =Number(prompt('enter my first number'));
// let operator = prompt("enter operator (+,-,*,/)");
// let mynumber2 =Number(prompt('enter my second number'));
// let r = operator == "+" ? mynumber1 + mynumber2 : operator == "-" ? mynumber1 - mynumber2 : operator == "*" ? mynumber1 * mynumber2 : operator == "/" ? mynumber1 / mynumber2 : "Invalid";
// console.log("result:",r);

//-----------------------CENTIMETER TO METER----------------------------------------//
// let centiMeter = Number(prompt('Enter a Centimeter(cm)'));
// let myOutput = Number(centiMeter/100);
// console.log(`The output in meter is:`, myOutput);

//----------------------METER TO CENTIMETER-------------------------------------//
// let inputMeter = Number(prompt('Enter a Meter(m)'));
// let myResult = Number(inputMeter*100);
// console.log(`The output in centimeter is:`, myResult);

//----------------------MILE TO KILOMETER---------------------------------------//
// let inputMiles = Number(prompt('Enter a Mile(M)'));
// let myresult = Number(inputMiles*1.6);
// console.log(`The output in Kilometer is: `, myresult);

//---------------------KILOMETER TO MILES----------------------------------------//
// let inputKilometer = Number(prompt('Enter a kilometer(km)'));
// let myResult = Number(inputKilometer/1.6);
// console.log(`The output in Miles is: `, myResult);

//---------------------CUBIC METER TO CUBIC FOOT--------------------------------------//
// let inputCubicMeter = Number(prompt('Enter a Cubic Meter(m^3)'));
// let cubicFoot = 35.3147;
// let myResult = (Number(inputCubicMeter*cubicFoot).toFixed(2));
// console.log(`The output in Cubic Foot is: `, myResult);

let kilometer  = Number(prompt('enter the number')); 
let meter = (Number(kilometer*1000).toFixed(2));
let hectormeter = (Number(kilometer*10).toFixed(2));
let miles = (Number(kilometer*0.621371).toFixed(2));
let milimeter = (Number(kilometer*1000000).toFixed(2));
let centimeter = (Number(kilometer*100000).toFixed(2));

console.log(`
    ${kilometer}km
    ${meter}m
    ${hectormeter}hm
    ${miles}mi
    ${milimeter}ml
    ${centimeter}cm`);
