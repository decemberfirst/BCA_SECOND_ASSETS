//--------------IF ELSE IF LADDER--------------



// let percentage = Number(prompt("Enter Your Percentage"));
// if (percentage >= 90 && percentage <= 100) {
//     console.log("Your division is A+");
// } else if (percentage >= 80 && percentage < 90) {
//     console.log("Your division is A")
// } else if (percentage >= 70 && percentage < 80) {
//     console.log("Your division is B+")
// } else if (percentage >= 60 && percentage < 70) {
//     console.log("Your division is B")
// } else if (percentage >= 50 && percentage < 60) {
//     console.log("Your division is C+")
// } else if (percentage >= 40 && percentage < 50) {
//     console.log("Your division is C")
// } else if (percentage >= 30 && percentage < 40) {
//     console.log("Your division is D")
// }
// else if (percentage > 100) {
//     console.log("Enter a valid percentage")
// } else {
//     console.log("..............Sorry .......Your failed!")
// }






// let age=Number(prompt("Enter Your Age"));
// if (age > 0 && age<= 12) {
//     console.log("You are a child");
// } else if (age > 12 && age <=19) {
//     console.log("You are a teenager")
// } else if (age > 19 && age<=40) {
//     console.log("You are adult")
// } else if (age> 40 && age<= 100) {
//     console.log("You are old")}
//  else {
//     console.log("You are about to die! ...............")
// }



// let salary=Number(prompt("Enter your Salary"));
// if(salary>10000 && salary<=50000){
//     console.log("Your salary after tax is ",salary-2000);
// }else if(salary>50000 && salary<=500000){
//     console.log("Your salary after tax is ",salary-20000)
// }else{
//     console.log("Your salary is less than or equals to 10000 or greater than 500000")
// }



// let time = Number(prompt("Enter your time"));
// if (time >= 5 && time <= 6) {
//     console.log("Its your time to go college")
// } else if (time > 6 && time <= 13) {
//     console.log("Its college time ")

// } else if (time > 13 && time < 18) {
//     console.log('Its time to have a short nap')
// }
// else{
//     console.log("Its time to bed")

// }


// let firstSide=Number(prompt("Enter a length of a side of triangle"))
// let thirdSide=Number(prompt("Enter a length of a side of triangle"))
// let secondSide=Number(prompt("Enter a length of a side of triangle"))

// if(firstSide==thirdSide && thirdSide==secondSide && secondSide==firstSide){
//     console.log("Is a equilateral triangle")
// }else if(firstSide==thirdSide||
//     thirdSide==secondSide||secondSide==firstSide
// ){
//     console.log("IS a isosceles triangle ")
// }
// else{
// console.log("Is a Scalar Triangle")
// }





let firstSide = Number(prompt("Enter a length of  side"))
let secondSide = Number(prompt("Enter a length of  side"))
let thirdSide = Number(prompt("Enter a length of  siide"))
let fourthSide = Number(prompt("Enter a length of  side"))
if (firstSide == secondSide && thirdSide == fourthSide && secondSide == thirdSide && secondSide == fourthSide && firstSide == fourthSide) {
    console.log("Is a square")
} else if (firstSide == thirdSide && secondSide==fourthSide) {
    console.log("Rectangle")
}

else {
    console.log("Is a quadrilateral")
}


// let temperature=Number(prompt("Enter temp in C"));
// if(temperature>=0&&temperature<=10){
//     alert('Its freezing')
// }else if(temperature>=10 &&temperature<=20){
//     alert('Its cool')
// }else if(temperature>=30 &&temperature<=10){
//     alert('Its cold')
// }else if(temperature>=0&&temperature<=10){
//     alert('Its hot')
// }else{
//     console.log("Enter a valid temp")
// }


// let firstNumber=Number(prompt("Enter a number"));
// let secondNumber=Number(prompt("Enter a number"));
// let thirdNumber=Number(prompt("Enter a number"));
// if(firstNumber>secondNumber && firstNumber>thirdNumber){
// console.log("A is largest")
// }else if (secondNumber>firstNumber && secondNumber>thirdNumber){
//     console.log("B is greater")
// }else{
//     console.log("C is the largest")
// }
