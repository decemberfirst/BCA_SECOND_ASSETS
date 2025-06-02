console.log('JS has been loaded');

//--------------------BREAK AND CONTINUE----------------------------------------

// let userAge=Number(prompt('Enter age'));
// switch(userAge){
//     case (userAge>0 && userAge<12):
//         console.log('Child');
//         break;
//     case (userAge>=12 && userAge<18):
//         console.log('Teen');
//         break;
//     case (userAge>=18 && userAge<60):
//         console.log('Adult');
//         break;
//     case (userAge>=60 && userAge<120):
//         console.log('Senior');
//         break;        
//         default:
//             console.log('Invalid input');
// }


//----------------------------------------Even number---------------------------------

// for(let i=1;i<=100;i++){
//     if(i%2==1){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

//------------------------Odd number through continue------------------------------------------------- 

// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         continue;
//     }
//     else{
// console.log(i);
//     }
// }



//---------------------------------------Divisible by 5-----------------------------------------------------------

// for(let i=1;i<=100;i++){
//     if(i%5==0){
//         continue;
//     }
//     else{
// console.log(i);
//     }
// }

//----------------------------------Divisble by 3 and 5 ------------------------------------------

// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         continue;
//     }
//     else{
// console.log(i);
//     }
// }


// for(let i=1;i<=100;i++){
//     if(i%1==0 && i<i%2==0){
//          console.log(i); 
//     }
// }


//----------------------------------Prime Number---------------------------------------------

// let userInput=5;
// let isPrime=true;
// for(let divide=2;divide<=userInput-1;divide++){
//     if(userInput%divide == 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log('This number is prime');
// }
// else{
//     console.log('This number is not prime');
// }




//----------------------------------------------------------ARRAYS---------------------------------------------


//MAKE RULE OF THUMB : ARRAY INDEX ALWAYS STARTS WITH ZERO (0)

// let userInput=['Aryan', 'Hellow', 'Hi', 'Hola'];
// console.log(userInput[1]);     //access value at index 1
// console.log(userInput.length); //print length of an array
// userInput.push('Lucky');       //push new value at last
// console.log(userInput);
// console.log(userInput.length);


let userFriend=['Aashish','Amar','Aagraj','Arjan','Atal'];
console.log(userFriend);

console.log(userFriend[0]);
console.log(userFriend[1]);
console.log(userFriend[2]);
console.log(userFriend[3]);
console.log(userFriend[4]);

console.log(userFriend.length);


userFriend.push('Bishal','Sabal','Royal','Sanket','Sangit');
console.log(userFriend);

console.log(userFriend[5]);
console.log(userFriend[6]);
console.log(userFriend[7]);
console.log(userFriend[8]);
console.log(userFriend[9]);

console.log(userFriend.length);

