// console.log("jay Nepal");

//  for( let i =1; i<=100; i++){
//     if(i%2 != 0){
//         continue;
//     } else{
//         console.log(i);
//     }

//     }
// for (let i = 1; i <= 50; i++) {
//     if (i % 5 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }}



for (let i = 3; i <= 50; i++) {
    let isPrime = true;
    for (let divide = 2; divide <= i - 1; divide++) {
        if (i % divide == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

let userInput = 15;
let isPrime = true;

for (let divide = 2; divide <= userInput - 1; divide++) {
    if (userInput % divide == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log('The number is prime');
} else {
    console.log('The number is not prime');
}

// let userInput = 15;
// let isPrime = true;

// for(let divide = 2; divide <= userInput - 1; divide++){
//     if(userInput % divide == 0){
//       isPrime = false;
//       break;
//     }
// }

// if(isPrime){
//     console.log('The number is prime');
// }else{
//     console.log('The number is not prime');
// } 

// // -----Array------


//  let myStudentlist =[ 'agraj', 'chintan', 'pujan'];
//  console.log(myStudentlist[1]);
//  console.log(myStudentlist.length);
//  myStudentlist.push('my new value');
//  console.log(myStudentlist);
// 🤣

let nameHere = ["nepal", " india", "china"];
console.log(nameHere);
nameHere.push(" japan", " indonesia");
console.log(nameHere);
nameHere.push(" jhapa", " lamjung");
console.log(nameHere);