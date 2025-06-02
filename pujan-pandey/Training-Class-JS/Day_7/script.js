// // let temperatureInCelcius=Number(prompt("Enter temperature in celcius"));
// // F=(temperatureInCelcius*9/5)+32;
// // console.log(`The temperature in Fahrenheit ${F.toFixed(2)}`)


// //OPERATORS



// //TYPES OF OPERATOR
// //ARITHMETIC OPERATOR
// //LOGICAL OPERATOR
// //RELATIONAL OPERATOR
// //TERNIARY OPERATOR
// //BITWISE OPERATOR


// //3+2, 3 AND 2 ARE OPERANDS




// //----------ARITHMETIC OPERATORS------------
// //mathematical operations (addition +, subtraction -, division /, multiplication *, modulus %)

// console.log(20+20)//addition
// console.log(20-20)//subtraction
// console.log(20*20)//multiplication
// console.log(13/2)//division
// console.log(33%2)//modulus



// //------------LOGICAL OPERATOR--------------
// //AND

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log('ac' && true)
// console.log('dc' && '')
// console.log(0 && 0)



// //OR 


// console.log(1 || 1)
// console.log(0 || 0)
// console.log('abc' || 'false')
// console.log(false || "abc" || true);
// console.log(false || true || "abc");




// //PRACTICE PROBLEMS

console.log(0+1 && "false")
// console.log(0-1 && "true")
// console.log("abc" || " "|| "false")
// console.log(true && " "&& "false")
// console.log(""||"")
// console.log(true||false && true && "abc" || false)
// console.log(null||undefined)
// console.log(undefined||false)
// console.log(null && true)
console.log(null || true || false)



// //-------------RELATIONAL OPERATOR-----------
// //<,>,<=,>=,!=,==,===  OUTPUT =TRUE/FALSE

// console.log(10>20);
// console.log(30>10)
// console.log("10"==10)//type coercion
// console.log("10"===10)//doesnot perform type coercion



//----Larger or Smaller
// let number=Number(prompt("Enter a Number"));
// const num=10;
// if(number>num){
//     console.log("The number you enter is greater")
// }else{
//     console.log("The number you enter is smaller")
// }




//----Conversion------

// function Conversion(){
// let userInput=Number(prompt("Enter a number in kilometer"));
// let userDemand=prompt("Meter, Centimeter or Millimeter");
// METERS=userInput*1000;
// CENTIMETERS=userInput*100000;
// MILLIMETERS=userInput*1000000;

// if(userDemand==="Meter"){
//     alert(`Total Meters in ${userInput+"km"} = ${METERS+"m"}`)
// }else if(userDemand==="Centimeter"){
//     alert(`Total Centieters in ${userInput+"km"} = ${CENTIMETERS+"m"}`)
// }else if(userDemand==="Millimeter"){
//   alert(`Total Millimeters in ${userInput+"km"} = ${MILLIMETERS+"mm"}`)
// }else{
// alert("Invalid Input!")
// }

// }
// Conversion();




let userInput=Number(prompt("Enter a number in kilometer"));
METERS=userInput*1000;
CENTIMETERS=userInput*100000;
MILLIMETERS=userInput*1000000;
console.log(`Total meter=${METERS+"m"}, Total centimeter=${CENTIMETERS+"cm"}, Total millimeter=${MILLIMETERS+"mm"}`)
