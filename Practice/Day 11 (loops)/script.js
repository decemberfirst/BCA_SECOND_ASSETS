// FOR LOOP
// WHILE LOOP
// DO WHILE LOOP
// OTHERS DIFFERS FROM TASTE OF LANGUAGES

// for (initialization; condition; increment/decrement) {
//     Code block to be executed in each iteration
//   }

// print sushant 100 times
// for (let i= 1; i <=100; i++){
//     console.log("sushant");
//  }

// print 1 to 100
//  for (let i= 1; i <=100; i++){
//     console.log(i);
//  }

// print 100 to 1
//  for(let i=100; i>=1; i--){
//     console.log(i)
//  }

// WAP TO PRINT EVEN NUMBER FROM 1 TO 100
// for(let i=2; i<=100; i= i+=2){
//     console.log(i)
// }
// WAP TO PRINT EVEN NUMBER FROM 1 TO 100
// for(let i=1; i<=100; i= i+=2){
//         console.log(i)
//      }
// WAP TO PRINT ODD NUMBER FROM A TO B
// TAKE A AND B FROM
// let a =Number(prompt("enter first number"))
// let b =Number(prompt("enter second number"))

// for(let count =a; count<=b; count++){
//     if(count % 2==1){
//         console.log(count)
//     }
// }

// print table of 5
// Multiplication table of 5 using for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }



// print table of 2
// for  (let i =1; i<=10; i++){
//     console.log(`2x${i} =${2*i}`)
// }
// print table of 3
// for(let i=1; i<=10; i++){
//     console.log(`3x${i} =${3*i}`)
// }

// assingments
// Calculate the Sum of Odd Numbers Between Two Numbers (User Input) Using For and If Loops

// Calculate the Sum of Even Numbers Between Two Numbers (User Input) Using For and If Loops

// print 1 to 20 but ignore number 13

// for(let i=1; i<=20; i++){
//     if(i==13){
//         continue
//     } else{
//         console.log(i)
//     }
// }

// run for loop code to print 1 to 20 but break at 13

// for(i =1; i<=20; i++){
//     if(i==13){
//         break
//     }
//     else{
//         console.log(i)
//     }
// }

// for(i=10; i>=1; i--){
//     console.log(i)
// }

// const ACTUAL_PIN = 12345;
// let NUMBER_OF_ATTEMPTS = 3;

// // INFINITE LOOPS
// for (;;) {
//   const userInput = Number(prompt("enter your pin"));
//   if (NUMBER_OF_ATTEMPTS && userInput == ACTUAL_PIN) {
//     console.log("you have been unlocked");
//   } else {
//     console.log("you have no attempt left or pin is incorrect");
//     NUMBER_OF_ATTEMPTS--;
//   }
// }

// ------------------WHILE LOOP--------------------or entry control loop
// table of 5 using while loop
// let i=1;
// while(i<=10){
//     console.log(`5x${i} =${5*i}`);
//     i++;
// }


// this print the code infinitely
//  let i=1;
// while(true){
//     console.log(`5x${i} =${5*i}`);
//     i++;
// }

// ask user input for 2 numbers and print input 1 from input 2 using while loop
// let userInput1 =Number(prompt("enter a number")) 
// let userInput2=Number(prompt("enter another number"))

// while(userInput1<=userInput2){
//     console.log(userInput1);
//     userInput1++
// }


// ------------- DO WHILE----------------
// table of 5 using do while
// let i =1;
// do{
//     console.log(`5x${i}=${5*i}`)
//     i++;
// } while(i<=10)


// ask user input for 2 numbers and print input 1 from input 2 using do while loop
//  let num1 =Number(prompt("enter num 1")) 
// let num2=Number(prompt("enter num 2"))

// do{
//     console.log(num1)
//     i++
// } while(num1<=num2)