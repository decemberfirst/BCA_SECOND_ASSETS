// ---------------OPERATORS PRECEDENCE AND ASSOSIATIVITY----------------
console.log(10+40/12); // => (OPERATOR PRECEDENCE AND ASSOSIATIVITY TABLE)
console.log(4*[5/100]);

// 100
// 010
// ----
// 110 => 6

//UNARY OPERATOR (ONLY ONE)
// myvar++
console.log(2 << 3 || 5 + 2 - (true - false));
console.log(true || false && true);

// -----------------CONDITIONAL STATEMENTS------------------

// TERNARY : CONDITION ? WHAT IF TRUE : WHAT IF FALSE
// if else
// for loop
// while loop
// do while loop (3+ more after we complete array session ...)

// USE IF CASE IF YOUR NUMBER OF LINES IN TRUE / FALSE CASE IS MORE THAN ONE LINE
// if (userAge >= 18){
//     console.log('You are eligible for voting');
// } else {
//     console.log('You are too early for vote');
// }


// const userNum1=Number(prompt('Enter your first number'));
// const userNum2=Number(prompt('Enter your second number'));
// if (userNum1>=userNum2){
//     console.log('First number is smaller');
// } else {
//     console.log('Second number is smaller');
// }


// const myValue=Number(prompt('Enter your Number'));
// if (myValue%5==0){
//     console.log('Divisible by 5');

// } else {
//     console.log('Not divisible by 5');
// }

// let number1 =Number(prompt ('Enter your price'));
// let number2 =Number(prompt ('Enter your price'));
// let number3 =Number(prompt ('Enter your price'));
// let number4 =Number(prompt ('Enter your price'));
// let number5 =Number(prompt ('Enter your price'));
// let  priceNumber=number1=number2=number3=number4=number5;
// if(priceNumber>=1000){
//     console.log('price with discount');
// } else{
//     console.log('price without discount');
// }

// const inputUser=prompt('Enter your day');
// if(inputUser=='sunday' || inputUser=='saturday'){
//     console.log('The day is weekend');
// } else {
//     console.log('The day is not weekend');
// }

// const myTime=prompt('Enter your time');
// if (myTime>=12){
//     console.log('pm');
// } else {
//     console.log('am');
// }

// let weight=prompt('Enter your weight');
// let height=prompt('Enter your height');
// let BIM=weight*height/height;
// if(BIM<=50){
//     console.log('too fat');
// } else{
//     console.log('too thin' );
// }

let character = Number(prompt('Enter your symbol'));
if (character=="!"||character=="@"||character=="#"||character=="$"||character=="%"||character=="^"||character=="&"||character=="*"||character=="("||character==")"){
    console.log('correct');
} else{
    console.log('incorrect');
}

