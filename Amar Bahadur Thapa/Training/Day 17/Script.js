//-------------------------BREAK AND CONTINUE-------------------------------//

// BREAK

//Even
// for (let i = 1; i < 100; i++ ) {
//     if(i % 2== 1){
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }

//Odd
// for (let i = 1; i < 100; i++ ) {
//     if(i % 2== 0){
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }
//  wap to print number from 1 to 50
// skip those number which are divisible by 5

// for(let i = 1; i<=50; i++) {
//     if(i%5==0) {
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i = 1; i<200; i++) {
//     if(i%4==0 || i%8==0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }


// let userInput = 5;
// let isPrime = true;

// for(let divide = 2; divide <= userInput - 1; divide++) {
//     if(userInput % divide ==0){
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log('The number is prime');
// } else{
//     console.log('The number is not prime');
// }


//--------------------------Array--------------------------------------//

//MAKE RULE OF THUMB: ARRAY INDEX ALWAYS STARTS WITH ZERO (0)

// let myStudentnames = ['abc', 'cde', 'asd'];
// console.log(myStudentnames[1]); //access value at index 1
// console.log(myStudentnames.length); // print length of an array
// myStudentnames.push('Amar'); // print 
// console.log(myStudentnames);
// console.log(myStudentnames.length);

// let myFriendname = ['Ram', 'Hari', 'Shyam', 'Sanket', 'Sabal'];
// console.log(myFriendname[3]);
// console.log(myFriendname.length);
// myFriendname.push('Royal', 'Mohit', 'Aryan', 'Sangit', 'Diwash');
// console.log(myFriendname);
// console.log(myFriendname.length);

let myFriendname = ['Ram', 'Hari', 'Shyam', 'Sanket', 'Sabal'];
console.log(myFriendname[0]);
console.log(myFriendname[1]);
console.log(myFriendname[2]);
console.log(myFriendname[3]);
console.log(myFriendname[4]);
myFriendname.push('Royal');
console.log(myFriendname[5]);
myFriendname.push('Mohit');
console.log(myFriendname[6]);
myFriendname.push('Sangit');
console.log(myFriendname[7]);
myFriendname.push('Aryan');
console.log(myFriendname[8]);
myFriendname.push('Sabal');
console.log(myFriendname[9]);
console.log(myFriendname.length);
