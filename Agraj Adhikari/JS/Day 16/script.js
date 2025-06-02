//......BREAK AND CONTINUITY............
/* 
                               
for(let i = 1;  i < 100 ; i++){
    if(i % 2 != 1){
        continue;
    }else{
        console.log(i);
    }
} */

/* for(let i = 1; i<50; i++){
    if(i % 5 == 0){
        continue;
    }else{
        console.log(i);
    }
}
  */


/* 
for(let i = 1; i<50; i++){
    if(i % 3 == 0 || i % 8 == 0){
        continue;
    }else{
        console.log(i);
    }
}
  */

/* 
let userInput = 15;
let isPrime = true;

for(let divide = 2; divide <= userInput - 1; divide++){
    if(userInput % divide == 0){
      isPrime = false;
      break;
    }
}

if(isPrime){
    console.log('The number is prime');
}else{
    console.log('The number is not prime');
} */


// BY nested loop

/*   for(let i = 3; i<=50; i++) {
    let isPrime = true;
    for(let divide = 2; divide <= i - 1; divide++) {
        if(i % divide == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        console.log(i);
    }
 } */




//..........Arrays............

/* let Cars = ["ferrari", 'lambo', 'BMW'];

console.log(Cars);
console.log(Cars[2]);
console.log(Cars[2].length); */

/* let stdNames = ['Agraj', 'Chintan', 'Pujan', 'Buddhi', 'Bijay'];
console.log(stdNames);
console.log(stdNames[0]);
console.log(stdNames[1]);
console.log(stdNames[2]);
console.log(stdNames[3]);
console.log(stdNames[4]);

stdNames.push('Shreeya', 'Diana', 'Aashish', 'Dev', 'Ayush');
console.log(stdNames);
console.log(stdNames[0]);
console.log(stdNames[1]);
console.log(stdNames[2]);
console.log(stdNames[3]);
console.log(stdNames[4]);
console.log(stdNames[5]);
console.log(stdNames[6]);
console.log(stdNames[7]);
console.log(stdNames[8]);
console.log(stdNames[9]); */