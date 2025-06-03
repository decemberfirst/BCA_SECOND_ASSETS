// INFINITE LOOP
// let attempt=3;
// let pin=12345;
// // for(let i=0; i<attempt; i++){
// for(;;){
// const userInput = Number(prompt('enter your pin'));
// if(attempt && userInput == pin){
//   console.log('pin is correct');
// }else{
//     console.log('pin is incorrect');
// attempt--;
// }
// }

//..........
// let count=1;
// while(number<=10){
//  console.log(`5 X ${count} = ${5 * count}`);
// }

// // do while loop
// let mycount=4;
// do{
//     console.log(mycount);
//     mycount--;
// } while(mycount > 0);

// // print 1 to 100 by using do loop and do while loop
// let userInput=Number(prompt('enter a number'));
// let myInput=Number(prompt('enter a number'));
// while(userInput<=100){
//     console.log('userInput');
//     userInput
// }
// do while way
 let A = Number(prompt("Enter the starting number:"));
let B = Number(prompt("Enter the ending number:"));

let myEven1 = 0;
let myOdd2 = 0;

let count1 = A;

do {
    if (count1 % 2 === 0) {
        myEven1 += count1;
    } else {
        myOdd2 += count1;
    }
    count1++;
} while (count1 <= B);

console.log(`Sum of even numbers between ${A} and ${B} is: ${myEven1}`);
console.log(`Sum of odd numbers between ${A} and ${B} is: ${myOdd2}`);


//  while way 

let C = Number(prompt("Enter the starting number:"));
let D= Number(prompt("Enter the ending number:"));

let ourEven = 0;
let ourOdd = 0;

let count = A;

while (count <= B) {
    if (count % 2 === 0) {
        ourEven += count;
    } else {
        ourOdd += count;
    }
    count++;  
}
console.log(`Sum of even numbers between ${C} and ${D} is: ${ourEven}`);
console.log(`Sum of odd numbers between ${C} and ${D} is:${ourOdd}`);
