// const ACTUAL_PIN = 1234;
// let NUMBER_OF_ATTEMPTS = 3;
   
// for(;;){
//     const userInput = Number(prompt('Enter Your Pin'));
//     if(NUMBER_OF_ATTEMPTS && userInput == ACTUAL_PIN){
//         console.log('You have been unclocked');
//     }else{
//         console.log('You have no attempt left or pin is incorrect');
//         // NUMBER_OF_ATTEMPTS--;
//     }


// if (NUMBER_OF_ATTEMPTS > 0 && userInput != ACTUAL_PIN){
//     NUMBER_OF_ATTEMPTS--;
// }
// console.log(`You have  ${NUMBER_OF_ATTEMPTS} LEFT`);
// }

//........While Loop...........

//synatx : while(condition){
//  Statement
// increment/decrement
//}


// let count = 1
// while(count <= 10){
//     console.log(`5 * ${count} = ${5*count}`);
//     count ++;
// }


// let user1 = Number(prompt('Enter a Number'));
// let user2 = Number(prompt('Enter a Number'));

// let count = user1;
// while(count <= user2){
//     console.log(count);
//     count++
// }

//.........DO WHile ..........

// count = 1;

// do{
//       console.log(`5 * ${count} = ${5*count}`);
//       count++
// }while(count <= 10);


// let user1 = Number(prompt('Enter a Number'));
// let user2 = Number(prompt('Enter a Number'));

// let count = user2;

// do{
//     console.log(count);
//     count--
// }while(count >= user1)


/* let user1 = Number(prompt('Enter a Number'));
let user2 = Number(prompt('Enter a Number'));

let count = user1;

do{
    console.log(count);
    count++
}while(count <= user1)

 */
 

//do while way
/* let A = Number(prompt("Enter the starting number:"));
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
 */

 
//While way

/* let A = Number(prompt("Enter the starting number:"));
let B = Number(prompt("Enter the ending number:"));

let sumEven = 0;
let sumOdd = 0;

let count = A;

while (count <= B) {
    if (count % 2 === 0) {
        sumEven += count;
    } else {
        sumOdd += count;
    }
    count++;  
}

console.log(`Sum of even numbers between ${A} and ${B} is: ${sumEven}`);
console.log(`Sum of odd numbers between ${A} and ${B} is: ${sumOdd}`); */

