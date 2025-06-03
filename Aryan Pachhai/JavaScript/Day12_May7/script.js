console.log('JS has been loaded');


//Syntax: for(inital ; condition ; increment/decrement)

// for(let count = 1; count<=50; count++){
//     console.log('Aryan');
// }

// for(let a=1 ; a<=100;a++){
//     console.log(a);
// }

// for(let i=100; i>0;i--){
//     console.log(i);
// }

// for(let num =0;num<=100;num+=2){
//        console.log(num);
// }

// let A=Number(prompt('Enter inital number'));
// let B=Number(prompt('Enter end number'));
// for(let num=A;num<=B;num++){
//     if(num%2==1){
//         console.log(num);
//     }
// }

// for(let num=1;num<=10;num++){
//     console.log(`5 x ${num} = ${5*num}`);
// }


// The Sum of Odd numbers
let sumOfOdd=0;
let num1Odd=Number(prompt('Enter 1st value'));
let num2Odd=Number(prompt('Enter 2nd value'));
for(let num=num1Odd;num<=num2Odd;num++){
    if(num%2==1){
       sumOfOdd += num;
    }
}
console.log(`The sum of odd from ${num1Odd} to ${num2Odd} is ${sumOfOdd}`); 

// The Sum of Even numbers
let sumOfEven=0;
let num1Even=Number(prompt('Enter 1st value'));
let num2Even=Number(prompt('Enter 2nd value'));
for(let value=num1Even;value<=num2Even;value++){
    if(value%2==0){
        sumOfEven += value;
    }
}
console.log(`The sum of even from ${num1Even} to ${num2Even} is ${sumOfEven}`);