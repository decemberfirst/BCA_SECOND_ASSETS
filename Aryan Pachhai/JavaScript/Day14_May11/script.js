console.log('JS has been loaded');


// const pass=6969;
// let attempt=3;
// for(;;){
//     const userPass=Number(prompt('Enter your PIN'));
//     if(attempt && userPass==pass){
//         console.log('Your device is unlocked');
//     }
//     else{
//         console.log('You have no attempt or incorrect pass')
//     }
//     if(attempt>0 && pass!=userPass){
//         attempt--;
//     }
//     else{
//         console.log(attempt);
//     }
// }


/**
 * for loop (user know how much iteration to put)
 * Syntax:
 * for(initialization ; condition ; increment/decrement){
 *     statement
 * }
 * 
 * while loop (user doesnot know how much iteration to put)
 * Syntax:
 * while(condition){
 *   statement
 *   incremnet/decrement
 * }
 */


// let num=1;
// while(num<=10){
//     console.log(`5 x ${num} = ${5*num}`);
//     num++;
// }

// while(true){
//     console.log('HEllo world');
// }

// while loop (entry control loop)
// do while loop (exit control loop)

// let myNum=1;
// do{
//     console.log(`5 x ${myNum} = ${5*myNum}`);
//     myNum++;
// }while(myNum<=10);


// First to last 

// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));

// while(num1<=num2){
//     console.log(num1);
//     num1++;
// }

// do{
//     console.log(num1);
//     num1++;
// }while(num1<=num2);


// Last to first

// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));

// while(num1<=num2){
//     console.log(num2);
//     num2--;
// }

// do{
//     console.log(num2);
//     num2--;
// }while(num1<=num2);



let sumOfOdd=0;
let sumOfEven=0;
let num1=Number(prompt('Enter initial number'));
let num2=Number(prompt('Enter another number'));

//SUM OF EVEN NUMBER USING WHILE LOOP

// while(num1<=num2){
//     if(num1%2==0){
//         sumOfEven+=num1;
//         console.log(sumOfEven);
//     }
//     num1++;
// }
// console.log(`The sum of even number is ${sumOfEven}`);

//SUM OF EVEN NUMBER USING DO WHILE LOOP

// do{
//     if(num1%2==0){
//         sumOfEven+=num1;
//         console.log(sumOfEven);
//     }
//     num1++;
// }while(num1<=num2);
// console.log(`The sum of even number is ${sumOfEven}`);

//SUM OF ODD NUMBER USING WHILE LOOP

// while(num1<=num2){
//     if(num1%2==1){
//         sumOfOdd+=num1;
//         console.log(sumOfOdd);
//     }
//     num1++;
// }
// console.log(`The sum of odd number is ${sumOfOdd}`);

//SUM OF ODD NUMBER USING DO WHILE LOOP

// do{
//     if(num1%2==1){
//         sumOfOdd+=num1;
//         console.log(sumOfOdd);
//     }
//     num1++;
// }while(num1<=num2);
// console.log(`The sum of odd number is ${sumOfOdd}`);
