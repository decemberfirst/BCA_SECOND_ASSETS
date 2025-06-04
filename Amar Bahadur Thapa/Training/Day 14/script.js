// const ACTUAL_PIN = 9999;
// let NUMBER_OF_ATTEMPTS = 3;

// (;;) INFINITE LOOP
// for(;;) {
//     const userPin = Number(prompt('Enter the Pin'));
//     if(NUMBER_OF_ATTEMPTS && userPin == ACTUAL_PIN){
//         console.log('Login Successfully');
//     } else{
//         console.log('You have no attempt left or pin is incorrect');
//     }
//     if(NUMBER_OF_ATTEMPTS>0 && userPin != ACTUAL_PIN){
//         NUMBER_OF_ATTEMPTS--;
//     }       
//     console.log(`You have ${NUMBER_OF_ATTEMPTS} left`);
// }


// let count = 1;

// while(count<=10){
//     console.log(`5 x ${count} = ${5*count}`);
//     count++;
// }

// do while loop 
// exit control loop

// while loop (Entry contol loop)


// do{
//     console.log('Hello world');
// } while(false);

// let count = 1;

// do{
//     console.log(`5 x ${count} = ${5*count}`);
//     count++;
// } while (count<=10);

// let myNumber = prompt('Enter the value');
// console.log(typeof myNumber);




// let num1 = Number(prompt('Enter the First Number'));
// let num2 = Number(prompt('Enter the Second Number'));

// while(num1<=num2){
//     console.log(num2);
//     num2--;
// }

// do{
//     console.log(num2);
//     num2--;
// } while(num1<=num2);

//--------------------------------------(SUM OF EVEN NUMBER)----------------------------------------//

// let inputFromUser = Number(prompt("Enter Any Number"));
// let inputFromUser2 = Number(prompt("Enter Any Number"));
// let sum = 0
// let rem = inputFromUser%2;
// if(rem == 1){
//     inputFromUser= inputFromUser+1;
// }
// while(inputFromUser2 >= inputFromUser) {
//     sum += inputFromUser;
//     inputFromUser += 2;
// }
// console.log(`sum= ${sum}`) 

//------------------------------------(SUM OF ODD NUMBER)---------------------------------//

// let inputFromUser = Number(prompt("Enter Any Number"));
// let inputFromUser2 = Number(prompt("Enter Any Number"));
// let sum = 0
// let rem = inputFromUser%2;
// if(rem == 0){
//     inputFromUser= inputFromUser+1;
// }
// while(inputFromUser2 >= inputFromUser) {
//     console.log(inputFromUser)
//     sum += inputFromUser;
//     inputFromUser += 2;
// }
// console.log(`sum= ${sum}`) 

//--------------------------------------------(SUM OF EVEN NUMBER USING DO WHILE LOOP

// let inputFromUser = Number(prompt("Enter Any Number"));
// let inputFromUser2 = Number(prompt("Enter Any Number"));
// let sum = 0
// let rem = inputFromUser%2;
// if(rem == 1){
//     inputFromUser= inputFromUser+1;
// }
// do {
//     console.log(inputFromUser)
//     sum += inputFromUser;
//     inputFromUser += 2;
// }while(inputFromUser2 >= inputFromUser)
// console.log(`sum= ${sum}`) 

//------------------------------------------(SUM OF ODD NUMBER USING DO WHILE LOOP)------------------------------------//

// let inputFromUser = Number(prompt("Enter Any Number"));
// let inputFromUser2 = Number(prompt("Enter Any Number"));
// let sum = 0;
// let rem = inputFromUser%2;
// if(rem == 0){
//     inputFromUser = inputFromUser+1;
// }
// do {
//     console.log(inputFromUser);
//     sum += inputFromUser;
//     inputFromUser += 2;
// }while(inputFromUser2 >= inputFromUser);
// console.log(`sum= ${sum}`);

// EXTRA TASK 


// for (let count = 100; count >= 1; count--){
//     console.log(count);
// }

// let num1 = Number(prompt('Enter First Number'));
// let num2 = Number(prompt('Enter Second Number'));
// for (let count = num1; count<=num2 ; count++){
//     if(count % 2 == 1){
//         console.log(count);
        
//     }
// }