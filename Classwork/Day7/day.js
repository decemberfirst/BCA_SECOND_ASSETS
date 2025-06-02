// FORMULA -> FAHRENHEIT = (C*9/5) + 32
// KELVIN -> C+ 273.15
// Take all required input Using Prompt 



// let C = prompt('Enter the Celsius temperature');
// let FormulaFahrenheit = (C * 9/5)+ 32;
// let FormulaKelvin = (C + 273.15);
// console.log(`Your temperature is fahrenheit is: ${FormulaFahrenheit}`)


// ------------------------------------------------ARITHMETIC OPERATOR-------------------------------------------
// 3 + 2 3 AND 2 OPERATOR
// Mathmatical Operators
// +, -; /; *; %
 
// console.log(20+20); 
// console.log(20-20); 
// console.log(20/20); 
// console.log(20*20); 
// console.log(20%20); 

// console.log(0 + 1 && false);
// console.log(0 - 1 && true );
// console.log("abc"|| " "|| true);
// console.log(true && " " && "");
// console.log(""|| "");
// console.log(true || fales && true && "abc" || false );
// console.log(null || undefined);
// console.log(undefined || false);
// console.log(null && true);
// console.log(null || true || false );

// let a = prompt(' Enter the first number ')
// let b = prompt(' Enter the second number')
//  console.log(a>b);


let km = Number(prompt("enter the value of kilometer:"));
let meter = km*1000;
let CM = km*100000
let miles = km*0.621371
let milimeter = km*1000000
let hecta = km*10

console.log(`${km} kilometer in meter is:${meter}
             ${km} kilometer in CM is:${CM}
             ${km} kilometer in milimeter is:${milimeter}
             ${km} kilometer in hecta is:${hecta}`);

