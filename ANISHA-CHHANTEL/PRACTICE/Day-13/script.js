// const ACTUAL_PIN= 45321;
// let NUMBER_OF_ATTEMPT=3;
// // INFINITE LOOP
// for(;;){
//     const userPin=(prompt('Enter your pin number'));
//     if(NUMBER_OF_ATTEMPT && userPin == ACTUAL_PIN){
//         console.log('You have been unlocked');
//     } else {
//         console.log('Your pin is incorrect or You have no attempt left');
//         // NUMBER_OF_ATTEMPT--;
//     }
//     if(NUMBER_OF_ATTEMPT && userPin !=ACTUAL_PIN){
//         console.log(`You have ${NUMBER_OF_ATTEMPT--}left`);
//     }
// }


// while loop
// while (condition){
// statement
// increment / decerement
// }

// let count=3;
// while (true){
// console.log('Nepathya college');
// // count--;
// }

// let Count=1;
// while(Count>0 && Count<=10){
// console.log(`Table of 5*${Count} = ${5*Count}`);
// Count++;
// }


// DO WHILE LOOP = EXIT CONTROL LOOP
// let mycount = 4;
// do{
//     console.log(mycount);
//     mycount--;
// } while(mycount > 0);

// let myNum = 1;
// do{
//     console.log(`Table of 2*${myNum} = ${2*myNum}`);
//     myNum++;
// } while(myNum <=10);

// let userNum1=(prompt('Enter your 1st number'));
// let userNum2=(prompt('Enter your 2nd number'));
// while(userNum1>0 && userNum1<=userNum2){
//     console.log(userNum1);
//     userNum1++;
// }


// Assignment

// let userOdd=(prompt ('Enter an odd number'));
// let userEven=(prompt ('Enter an even number'));
// let sum = 1;
// do{
//     console.log(`sum of odd number between ${userOdd} and ${userEven}:${sum}`);
// } while(userOdd % 2 ==1);

// let userodd=(prompt ('Enter an odd number'));
// let usereven=(prompt ('Enter an even number'));
// let Sum = 0;
// do{
//     console.log(`Sum of even number between ${userodd} and ${usereven}:${Sum}`);
// } while(usereven % 2 ==0);


let num=Number(prompt('enter a number'));
let nUm=Number(prompt('enter a number'));
let even=0;
while(num<=nUm){
  if (num%2==0){
    even=even+num;
    }
  num++;
}
console.log(even);


let num1=Number(prompt('enter a number'));
let nUm2=Number(prompt('enter a Number'));
let odd=1;
while(num1<=nUm2){
  if (num1%2==1){
    odd=odd+num1;
    }
  num1++;
}
console.log(odd);

 let A = Number(prompt("Enter the starting number:"));
let B = Number(prompt("Enter the ending number:"));

let sumEven = 0;
let sumOdd = 0;

let count = A;

do {
    if (count % 2 === 0) {
        sumEven += count;
    } else {
        sumOdd += count;
    }
    count++;
} while (count <= B);

console.log(`Sum of even numbers between ${A} and ${B} is: ${sumEven}`);
console.log(`Sum of odd numbers between ${A} and ${B} is: ${sumOdd}`);
