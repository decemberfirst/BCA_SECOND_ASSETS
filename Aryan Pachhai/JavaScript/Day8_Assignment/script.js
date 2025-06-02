console.log('JS has been loaded');

// 1) Odd or Even 

// let num1=Number(prompt('Enter a number'));
// let rem=num1%2;
// console.log(rem==0?`The number ${num1} is even`: `The number ${num1} is odd`);

// 2) Greater between two numbers

// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));
// console.log(num1>num2? `${num1} is greater than ${num2}`:`${num2} is greater than ${num1}`);

// 3) Smallest between two numbers

// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));
// console.log(num1<num2?`${num1} is smallest`:`${num2} is smallest`);

// 4) Number is +ve,-ve or 0

// let num1=Number(prompt('Enter a number'));
// console.log(num1==0 || num1>0?'The number is zero/positive':'The number is negative');
// or
// if(num1==0){
//     console.log('The number is zero');
// }
// else if(num1>0){
//     console.log('The number is positive');
// }
// else{
//     console.log('The number is negative');
// }

// 5) Number if divisible by 5

// let num1=Number(prompt('Enter a number'));
// console.log(num1%5==0?'The number is divisible by 5':'The number isnot divisible by 5');

// 6) Pass or fail through marks

// let math=Number(prompt('Enter math marks'));
// let C=Number(prompt('Enter C marks'));
// let account=Number(prompt('Enter account marks'));
// let mca=Number(prompt('Enter mca marks'));
// let english=Number(prompt('Enter english marks'));
// console.log(math>=40 && C>=40 && account>=40 && mca>=40 && english>=40?'The student is PASS':'The student is fail');

// 7) Assign grades

// let grades=Number(prompt('Enter grades'));
// console.log(grades>=80?'The student grades is A':'The student grade is B');
// or
// if(grades>=90){
//     console.log('The student grade is A+');
// }
// else if(grades>=80){
//     console.log('The student grade is A');
// }
// else if(grades>=70){
//     console.log('The student grade is B+');
// }
// else if(grades>=60){
//     console.log('The student grade is B');
// }
// else if(grades>=55){
//     console.log('The student grade is C+');
// }
// else if(grades>=50){
//     console.log('The student grade is C');
// }
// else if(grades>=45){
//     console.log('The student grade is D');
// }
// else if (grades>=40){
//     console.log('The student grade is E');
// }
// else{
//     console.log('The student grade is NG');
// }

// 8) Eligible/Not Eligible to vote

// let userAge=Number(prompt('Enter your age'));
// console.log(userAge>=18?'The person is eligible to vote':'The person is not eligible to vote');

// 9) Year is a leap year or not

// let year=Number(prompt('Enter year'));
// console.log(year%4==0?`${year} is a leap year`:`${year} is not a leap year`);

// 10) String is empty or not

// let string=prompt('Enter something ot nothing');
// console.log(string==''?'The string is empty':`The string is not empty. It shows ${string}`);

// 11) Eligible/Not Eligible for scholarship

// let math=Number(prompt('Enter math marks'));
// let C=Number(prompt('Enter C marks'));
// let account=Number(prompt('Enter account marks'));
// let mca=Number(prompt('Enter mca marks'));
// let english=Number(prompt('Enter english marks'));
// console.log(math>=40 && C>=40 && account>=40 && mca>=40 && english>=40?'Eligible':'Not Eligible ');

// 12) Username and password are correct

// const username= 'Aryan';
// const password= 'Pachhai';
// let userName=prompt('Enter your username');
// let passWord=prompt('Enter your password');
// console.log( username==userName && password==passWord?'You have been logged in.':'The username/password is incorrect');

// 13) Assign Day or Night through hour format

// let time=Number(prompt('Enter time in hour'));
// console.log(time>=6 && time<=17?'It is day time':'It is night time');

// 14) Assign Pass or fail by average marks

// let math=Number(prompt('Enter math marks'));
// let C=Number(prompt('Enter C marks'));
// let account=Number(prompt('Enter account marks'));
// let mca=Number(prompt('Enter mca marks'));
// let english=Number(prompt('Enter english marks'));
// let average=math+C+account+mca+english;
// console.log(math>=40 && C>=40 && account>=40 && mca>=40 && english>=40 && average>=200?'The student is PASS':'The student is FAIL');

// 15) Number is prime or not

// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number/2
//     for (let i = 2; i <= number/2; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }

