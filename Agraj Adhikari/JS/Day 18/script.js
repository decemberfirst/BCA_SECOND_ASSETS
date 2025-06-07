 // Itterating 

/*  let numbers = [1,2,3,4,5];
 let sum = 0;
 for(i = 0; i < numbers.length; i++){
    sum += numbers[i];
 }
 
 console.log(sum);  */

 /* let myList = [100, 101, 102, 103, 104, 105];

sum = 0;

for(i = 0; i < myList.length; i++){
if(myList[i] % 2 == 0){
    sum += myList[i];
} }

   console.log(sum);
 */


/* let number = [1000, 1500, 1101, 1007];
sum = 0;

for(i = 0; i < number.length; i++){
if(number[i] % 2 != 0){
    sum += number[i];
} }

   console.log(sum);
 */

/* let number = [499 ,100, 1000, 2, 10];
let greatest = 0;
let smallest = number[0];
 

for(i = 0; i < number.length; i++){
    if(number[i] > greatest){
        greatest = number[i];
    }

    if(number[i] < smallest){
        smallest = number[i];
    }
}
console.log('The greatest number is', greatest);
console.log('The smallest number is', smallest); */                   
/* 
let number = [1,2,3,4,5]; 
let reverse = [];

for(i =0; i < number.length ; i++){
   reverse.unshift(number[i]);
}

console.log(reverse);
 */


let number = [1,2,3,4,5]; 
let reverse = number.toString().split("").reverse().join(" ");

console.log(reverse);

 







 


