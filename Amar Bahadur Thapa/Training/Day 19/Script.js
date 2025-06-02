//----------------------ITERATING OVER ARRAY-----------------------------------------------//

// let myNumbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < myNumbers.length; i++){
//     console.log(i);
//     sum+= myNumbers[i]; // sum = sum + mynumbers[i];
// }
// console.log(sum);


// let myNumbers = [100, 101, 102, 103, 104, 105];
// let sum = 0;
// for(let i = 0; i < myNumbers.length; i++){
//     if(myNumbers[i]%2 == 0){
//         sum = sum + myNumbers[i];
//     }
// }
// console.log(sum);

// let myNumbers = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010];
// let sum = 0;
// for(let i = 0; i < myNumbers.length; i++){
//     if(myNumbers[i]%2 == 1){
//         sum = sum + myNumbers[i];
//     }
// }
// console.log(sum);


// let myNumbers = [400, 100, 1000, 2, 10];
// let greatestNum = 0;
// for(let i=0; i<myNumbers.length; i++){
//     if(myNumbers[i]>greatestNum){
//         greatestNum = myNumbers[i];
//     }
// }
// console.log(greatestNum);


// let myNumbers = [400, 100, 1000, 2, 10];
// let greatestNum = 0;
// let smallestNum =myNumbers[0];
// for(let i = 0; i<myNumbers.length; i++){
//     if(myNumbers[i]>greatestNum){
//         greatestNum = myNumbers[i]
//     }
//     else if(myNumbers[i]<smallestNum){
//         smallestNum = myNumbers[i];
//     }
// }
// console.log(greatestNum);
// console.log(smallestNum);

// let myNumbers = [400, 100, 1000, 2, 10];
// let reversed = []; 
// for(let i=0; i<myNumbers.length; i++){
//     reversed.unshift(myNumbers[i]);
// }
// console.log(reversed);


// let myNumbers = [100, 120, 150, 180, 200];
// let sum = 0;
// for(let index = 0; index < myNumbers.length; index++){
//     sum = sum + myNumbers[index];
// }
// console.log(sum);

// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     sum = sum + myNumbers[index];
// }
// console.log(sum); 

// let myNumbers = [10, 20, 30, 40, 50, 60];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     mySum = mySum + myNumbers[index];
// }
// console.log(mySum); // 6 //60   sum= 150 + 60 =210

// let myNumbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     mySum = mySum + myNumbers[index];
// }
// console.log(mySum);  //9 // sum= 45000 + 10000  = 550000

// let myNumbers = [2000, 5000, 8000, 12000, 33000];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     mySum = mySum + myNumbers[index];
// }
// console.log(mySum); // 4 // sum = 27000 + 33000 // 60000 

// let myNumbers = [2000, 5000, 8000, 12000, 33000];
// let myDifference = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     myDifference = myDifference - myNumbers[index];
// }
// console.log(myDifference);  // 4 // Difference = -27000 - 33000 = -60000

//-----------------------------------SUM OF EVEN NUMBER-------------------------------------//

// let myNumbers = [100, 105, 108, 109, 112];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2==0){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);

// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20];
// let mySum = 0;
// for(index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 0){
//         mySum = mySum + myNumbers[index];
//     }
// }
// console.log(mySum);  // 19 // 20 // 18 % 2 == 0  // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20  sum = 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20 = 110 


// let myNumbers = [15, 18, 21, 22, 25, 28, 31, 34, 12, 18];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 0){
//         mySum = mySum + myNumbers[index];
//     }
// }
// console.log(mySum);  // 9 // 18 // 22 % 2 == 0 // mySum = 40+2

//-------------------------------SUM OF ODD NUMBER-----------------------------------//

// let myNumbers = [100, 105, 108, 109, 112, 115, 118, 121];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

// let myNumbers = [10, 15, 18, 19, 12, 15, 18, 21];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

// let myNumbers = [10, 15, 18, 19, 12, 15, 18, 21];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

// let myNumbers = [1001, 1015, 1019, 205, 12, 14, 18, 22];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

//---------------------------TO FIND THE GERATEST NUMBER-----------------------------//

// let myNumbers = [101, 100, 400, 500, 5000];
// let greatestNum = 0;
// for(let index=0; index<myNumbers.length; index++){
//     if(myNumbers[index]>greatestNum){
//         greatestNum = myNumbers[index];
//     }
// }
// console.log(greatestNum);

// let myNumbers = [1000, 1105, 1400, 1550, 6000];
// let greatestNum = 0;
// for(let index=0; index<myNumbers.length; index++){
//     if(myNumbers[index]>greatestNum){
//         greatestNum = myNumbers[index];
//     }
// }
// console.log(greatestNum);

//---------------------------------TO FIND THE GREATEST AND SMALLEST NUMBER------------------------------//

// let myNumbers = [500, 100, 1200, 6, 10];
// let greatestNum = 0;
// let smallestNum =myNumbers[0];
// for(let i = 0; i<myNumbers.length; i++){
//     if(myNumbers[i]>greatestNum){
//         greatestNum = myNumbers[i]
//     }
//     else if(myNumbers[i]<smallestNum){
//         smallestNum = myNumbers[i];
//     }
// }
// console.log(greatestNum);
// console.log(smallestNum);

// let myNumbers = [6000, 100, 1000, 2, 10];
// let greatestNum = 0;
// let smallestNum =myNumbers[0];
// for(let i = 0; i<myNumbers.length; i++){
//     if(myNumbers[i]>greatestNum){
//         greatestNum = myNumbers[i]
//     }
//     else if(myNumbers[i]<smallestNum){
//         smallestNum = myNumbers[i];
//     }
// }
// console.log(greatestNum);
// console.log(smallestNum);

//------------------------------------ARRAY REVERSED---------------------------------------------------//

// let myNumbers = [500, 100, 1000, 2, 10];
// let reversed = []; 
// for(let i=0; i<myNumbers.length; i++){
//     reversed.unshift(myNumbers[i]);
// }
// console.log(reversed);

// let myNumbers = [5, 4, 3, 2, 1];
// let reversed = []; 
// for(let i=0; i<myNumbers.length; i++){
//     reversed.unshift(myNumbers[i]);
// }
// console.log(reversed);


// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let length = 0;
// let index = 0;
// let element = myArray[index];

// while(element != undefined){
//     length++;
//     index++;
//     element = myArray[index];
// }
// console.log(length);
