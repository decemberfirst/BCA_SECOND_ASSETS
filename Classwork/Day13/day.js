// let pin1 = Number(prompt('Enter the firstpin'));
// let pin2 = Number(prompt('Enter the secondpin'));
// let attem = 1;

// for(let i=1;  i++){
// if ( attem == 3){
//     console.log ('Account lock')
// }
// else if (pin1=pin2){
//     attem+=1
// }
//     }

// const ACTUAL_PIN = 215;
// let NUMBER_OF_ATTEMPTS =3;
// for (;;){
//     const userInput =Number(prompt('Enter the pin '));
//     if (NUMBER_OF_ATTEMPTS && userInput == ACTUAL_PIN) {
//         console.log('You have been unlocked');

//     } else {
//         console.log ('You have no attempt left or pin is incorrect');
//         NUMBER_OF_ATTEMPTS--;
//     }

// }

// let count= 1;
//  while(count<=10){
//     console.log(`2* ${count} = ${2*count}-+`);
//     count++;
//  }

//  while(true){
//     console.log('Hello world')
//  }

// let num = Number(prompt('Enter the number'))
// let user=1;
// do{
//     console.log(`${num}* ${user} = ${num*user}`);
//     user++;

// }while(user<=10);

// let num = Number(prompt('Enter the firstnumber'));
// let num2 = Number(prompt('Enter the secondnumber'));

// while( num<=num2){
// console.log(num);
// num++;
// }


// let num = Number(prompt('Enter the firstnumber'));
// let num2 = Number(prompt('Enter the secondnumber'));

// while( num>=num2){
// console.log(num);
// num--;
// }









//SUM OF EVEN NUMBER


// let userInput = Number(prompt("Enter Any Number"));
// let userInput2 = Number(prompt("Enter Any Number"));
// let sum = 0
// let rem = userInput%2;
// if(rem == 1){
//     userInput= userInput+1;
// }
// while(userInput2 >= userInput) {
//     sum += userInput;
//     userInput += 2;
// }
// console.log(sum= ${sum}) 

//SUM OF ODD NUMBER

// let userInput = Number(prompt("Enter Any Number"));
// let userInput2 = Number(prompt("Enter Any Number"));
// let sum = 0
// let rem = userInput%2;
// if(rem == 0){
//     userInput= userInput+1;
// }
// while(userInput2 >= userInput) {
//     console.log(userInput)
//     sum += userInput;
//     userInput += 2;
// }
// console.log(sum= ${sum}) 


//SUM OF EVEN NUMBER USING DO WHILE LOOP

// let userInput = Number(prompt("Enter Any Number"));
// let userInput2 = Number(prompt("Enter Any Number"));
// let sum = 0
// let rem = userInput%2;
// if(rem == 1){
//     userInput= userInput+1;
// }
// do {
//     console.log(userInput)
//     sum += userInput;
//     userInput += 2;
// }while(userInput2 >= userInput)
// console.log(sum= ${sum}) 

// SUM OF ODD NUMBER USING DO WHILE LOOP

// let userInput = Number(prompt("Enter Any Number"));
// let userInput2 = Number(prompt("Enter Any Number"));
// let sum = 0;
// let rem = userInput%2;
// if(rem == 0){
//     userInput = userInput+1;
// }
// do {
//     console.log(userInput);
//     sum += userInput;
//     userInput += 2;
// }while(userInput2 >= userInput);
// console.log(sum= ${sum});














// odd
let num1=Number(prompt('enter thr first number'));
let num2=Number(prompt('enter thr second number'));
let sum=0;
let rem=num1%2;
if(rem==0){
    num1=num1+1
}
while(num1<=num2){
    console.log(num1);
        sum=sum+num1;
      num1+=2;
   
}
 console.log(sum)

 //even
// let num1=Number(prompt('enter thr first number'));
// let num2=Number(prompt('enter thr second number'));
// let sum=0;
// let rem=num1%2;
// if(rem==1){
//     num1=num1+1
// }
// while(num1<=num2){
//     console.log(num1);
//         sum=sum+num1;
//       num1+=2;
   
// }
//  console.log(sum)

//even
// let num1=Number(prompt('enter thr first number'));
// let num2=Number(prompt('enter thr second number'));
// let sum=0;
// let rem=num1%2;
// if(rem==1){
//     num1=num1+1
// }
// do{
//     console.log(num1);
//         sum=sum+num1;
//       num1+=2;
   
// }while(num1<=num2)
//  console.log(sum)

//odd
// let num1=Number(prompt('enter thr first number'));
// let num2=Number(prompt('enter thr second number'));
// let sum=0;
// let rem=num1%2;
// if(rem==0){
//     num1=num1+1
// }
// do{
//     console.log(num1);
//         sum=sum+num1;
//       num1+=2;
   
// }while(num1<=num2)
//  console.log(sum)