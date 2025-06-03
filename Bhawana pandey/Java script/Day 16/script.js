//-------BREAK AND CONTINUE-----------
// BREAK-> 

// wap to print even numbers using continue
// for(let i=1; i < 100; i++){
//     if (i %2 ==1){
//     continue;
//     }else{
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// for( let i =1; i <=100; i++){
//     if(i%3 ==0 || i%5==0){
//         continue;
// }
//         console.log(i);
// }

// WAP TO INPUT NUMBER FROM USER (DONOT USE PROMOTE FOR SIMPLICITY)
// CHECK WHETHER GIVEN NUMBER IS PRIME OR NOT
//  let userInput =5;
//  let isPrime =true;
//  for(let divide=2; divide <=userInput -1; divide++){
//     if(userInput % divide==0 ){
//         isPrime = false;
//     break;
// }
// }

// if (isPrime){
//     console.log( userInput + 'The number is prime');
// }else{
// console.log( userInput + 'The number is not prime');
// }


//-------------ARRAYS---------

// WAP TO INPUT NAME OF 100 STUDENTS IN VARIABLE
let myStudentList = ['abc','cde' , 'asd'];
console.log(myStudentList[1]);
console.log(myStudentList.length);
myStudentList.push('my new value');
console.log(myStudentList);
console.log(myStudentList.length);


let stdNames = ['manisha', 'isha', 'samikshya','nikita', 'kamana' ];
console.log(stdNames[0]);
console.log(stdNames[1]);
console.log(stdNames[2]);
console.log(stdNames[3]);
console.log(stdNames[4]);
console.log(stdNames.length);

stdNames.push('Shreya', 'Daina' , 'bipika', 'anisha', 'prashansha');
console.log(stdNames);


        
    

