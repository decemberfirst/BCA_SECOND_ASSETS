// console.log(0.1 + 0.2 == 0.3);

// myvar = 10;
// myvar = myvar + 1 + myvar++;
// console.log(myvar);

//-------------- If else If ladder--------------

// let gpa = Number(prompt("Enter Gpa"));
// if (gpa >= 3.5 && gpa <= 4) {
//   console.log("Grade A");
// } else if (gpa >= 3 && gpa <= 3.4) {
//   console.log("Grade B");
// } else if (gpa >= 2 && gpa <= 2.9) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }


// let age = Number(prompt("Enter Age"));
// if (age>=1 && age<=10){
//     console.log("You are infant")
// }
// else if 
//     (age>=11 && age<=20)
// {
//         console.log("You are young")
//     } else if (age>=21 && age<=40){
//         console.log("You are adult")
//     }
//     else if ( age>41 && age<80){
//         console.log("You are old")
//     }
// else if (age>81 && age<=100) {
//     console.log("You are too old")
// }
// else {
//     console.log("you are died")
// }


// let salary = Number(prompt("Enter Salary"));
// if (salary>=1 && salary<100000){
//     console.log("You Dont need to Pay TAX")
// }
// else if (salary>=100001 && salary<500000){
//     console.log("You will pay 7% TAX")
// }
// else if (salary>=500001 && salary<=1000000){
//     console.log("You will pay 10% TAX")
// }
// else {
//     console.log("You will pay 13%")
// }

// let time = Number(prompt("Enter Time"));
// if (time>= 8 && time<=11){
//     console.log("Its Morning")
// } else if (time>12 && time<=4){
//     console.log("Its Afternoon")
// }
// else if (time>=5 && time<= 7){
//     console.log("Its Evening")
// }
// else {
//     console.log("Its night")
// }

// let equilateral = Number(prompt("Enter side equilateral "));
// let isosceles = Number(prompt("Enter side isosceles "));
// let scalene = Number(prompt("Enter side scalene "));
// if(equilateral==isosceles && isosceles==scalene){
//     console.log("Its equilateral");
    
// }else if(equilateral==isosceles || isosceles==scalene || scalene==equilateral){
//     console.log("Its isosceles");
// }else{
//     console.log("Its scalene")
// }

// let height = Number(prompt("Enter height"));
// let weight = Number(prompt("Enter Weight"));
// let height2 = height*height;
// let bmi = weight/ height2;
// if (bmi<=18.4){
//     console.log("Unhealthy")
// }
// else if (bmi>=18.5 && bmi<=24.9 ){
//     console.log("Healthy")

// }
// else if (bmi>=25 && bmi<=29.9){
//     console.log("Unhealthy (Risky)")

// }
// else if (bmi>=30 && bmi<=34.9){
//     console.log("Unhealthy")
// }
// else if (bmi>=35 && bmi<=39.9){
//     console.log("More unhealthy")
// }
// else {
//     console.log("Severely Unhealthy")
// }


let num1 = Number(prompt("Enter Num 1"));
let num2 = Number(prompt("Enter Num 2"));
let num3 = Number(prompt("Enter Num 3"));
if (num1>num2 ){
    console.log("Num1 is Greater")
}
else if (num2>num1){
    console.log("Num2 is Greater")
}
else if (num3>num1){
    console.log("Num3 is Greater")
}
else if (num1>num3){
    console.log("Num1 is Greater")
}
else {
    console.log("")
}
