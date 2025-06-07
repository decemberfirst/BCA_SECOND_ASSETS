// let Celcius = Number(prompt("Enter Temperature in Celcius "));
// console.log("Your Temperature in Kelvin is", (Celcius + 273.15));

 //Operators p
 //-performs operation in operands.

 //Arithmetic Operator
 //Mathematical operators
 // +, -, /, *, %
 console.log(20+20); //Addition;
 console.log(20 - 20); //Subtraction
 console.log(20 / 20); //Divison
 console.log(10 * 2) //Multiplictaion
 console.log(3 % 2); //Modulus is remainder

 //Logical Operator
 // //AND, OR, NOT

 //AND
 console.log(true && true); //if both true
 console.log("ABC" && "abc"); //False
 console.log( true  &&  false  && true); //if false output is false

 //OR
 console.log(1 || 1); //1
 console.log(1 || 2); //1
 console.log('abc' || false); //abc
 console.log(false || 'abc'); //abc
 console.log(false || 'abc' || false); //abc if true output is true

 //Practice Problems
console.log(0 + 1 && true); //true
console.log(0 - 1 && true); //true
console.log('abc' || " " || true); //abc
console.log(true && " " && ""); //false (in space lenght is counted)
console.log("" || ""); //false
console.log(true || false && true && "abc" || false); //true
console.log(null || undefined); // undefined
console.log(undefined || false); //false
console.log(null && true); //null
console.log(null || true || false); //true
console.log(false || false); //false

 //TYPES of OPERATOR


 //Relational Operator / Comparison Operator
 // <, >, <=, >=, !=, ==, ===  output always(true/false)
 console.log(10 < 20);
 console.log(10 <= 10);
 console.log(10 > 20);
 console.log(20 != 10);
 console.log(10 >= 20);

 console.log('10' == 10); //true // performs type coertion(converts string into number)
 console.log('10' === 10); //false  //doesnot performs type coertion(doesnot convert string into number)

 //ternary operator
 //Bitwise operator

User = Number(prompt("Enter any number"));
console.log(User >= 10);

user = Number(prompt("Enter any number"));
if(user >= 10){
    console.log("The value is correct");
}else{
    console.log("The value is incorrect");
}
 
//Assignment

let meters = Number(prompt("Enter the length in meters"));
console.log("Centimeters:", (meters * 100).toFixed(2));
console.log("Millimeters:", (meters * 1000).toFixed(2));
console.log("Kilometers:", (meters / 1000).toFixed(2));
console.log("Feet:", (meters * 3.28084).toFixed(2));
console.log("Inches:", (meters * 39.3701).toFixed(2));
console.log("Yards:", (meters * 1.09361).toFixed(2));
console.log("Miles:", (meters / 1609.34).toFixed(2));



