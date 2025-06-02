// break and continue

// wap to print even number using continue

// for(let i=1; i<=100; i++ ){
//     if(i%2==1){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }


// wap to print odd number using continue

// for(let i=1; i<=100; i++ ){
//     if(i%2==0){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }


// wap to print number from 1 to 50
// and skip those number which are divisible by 5

// for(i=1; i<=50; i++){
//     if(i%5==0){
//         continue
//     } else{
//         console.log(i)
//     }
// }


// wap to print number from 1 to 50
// and skip those number which are divisible by 3
for(i=1; i<=50; i++){
    if(i%3==0 && i%5==0 ){
        continue; 
    } else{
        console.log(i)
    }
}


// WAP TO INPUT NUMBER FROM USER (DONOT USE PROMPT FOR SIMPLICITY)
// CHECK WEATHER GIVEN NUMBER IS PRIME OR NOT

let number = 99;
let isPrime = true;

for(let divide =2; divide <= number-1; divide++){
    if(number % divide==0){
        isPrime = false;
        break;
    }
} if(isPrime){
    console.log('The number is prime');
} else {
    console.log('The number is not prime')
}