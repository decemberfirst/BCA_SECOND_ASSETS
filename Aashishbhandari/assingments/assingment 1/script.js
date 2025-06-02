// let myArray =[1,2,3,4,5,6,7,8,9];
// let length =0;
// let index =0;
// let element =myArray[index];

// while(element != undefined){
//     length++;
//     index++;
//     element=myArray[index];

// }
// console.log(length);


//-------------------------------------ASSIGNMENT--------------------------------------------------------------

// 1. Print all elements of an array.-------------------------------------------------------

let elementalArray = [1,2,3,4,5,6,7,8,9];

console.log(elementalArray);

// 2. Find the length of an array without using a built-in function.---------------------

let array = [1,2,3,4,5,6,7,8,9];
let length = 0;
let index = 0;
let element = array[index]
while(element != undefined){
    length++;
    index++;
    element = array[index];
}
console.log(length);

// 3. Insert an element at a specific position in an array.--------------------------------

let arrayList = [1,2,4,5,6,7,8,9];
let insertValue = 3
console.log(arrayList);

let spliceValue = arrayList.splice(0,2);
console.log(arrayList);
arrayList.unshift(insertValue);
console.log(arrayList);
arrayList = [...spliceValue,...arrayList]
console.log(arrayList);


// 4. Delete an element from an array.-------------------------------------------------------

let numberArray = [1,2,3,4,5,6,6,7,8,9];
console.log(numberArray);


let temporarySplicedValue = numberArray.splice(0,5);
console.log(numberArray);

numberArray.shift();

numberArray = [...temporarySplicedValue,...numberArray];
console.log(numberArray);


// 5. Find the sum of all elements in an array.-------------------------------------------

// let num = [1,2,3,4,5];
// sum =0
// for (let A = 0 ; A < num.length ; A++){
//     sum=sum+num[A];
// }
//     console.log(sum);


// 6. Find the average of all elements in an array.---------------------------------------

let num = [1,2,3,4,5];
sum =0
for (let A = 0 ; A < num.length ; A++){
    sum=sum+num[A];
}
let average = sum/num.length

console.log(average);


// 7. Find the maximum element in an array.---------------------------------------------

// let numbers = [499,100,1000,2,10];
// let greater = 0

// for(a=0; a<numbers.length; a++){
//     if(numbers[a]>greater){
//         greater=numbers[a]
// }

// console.log(GREATEST NUMBER IS ${greater});


// 8. Find the minimum element in an array.----------------------------------------------

// let numbers = [499,100,1000,2,10];
// let smaller = numbers[0]

// for(a=0; a<numbers.length; a++){
//     if(numbers[a]<smaller){
//         smaller=numbers[a]
//     }

// console.log(SMALLEST NUMBER IS ${smaller});

// 10. Count the number of positive and negative elements in an array.---------------------

// let numberArray = [-3,-2,-1,1,2,3,4];
// let positiveNumber = 0
// let negativeNumber = 0

// for(let index=0; index<numberArray.length; index++){
//     if(numberArray[index]>0){
//         positiveNumber++
//     }else{
//         negativeNumber++
//     }
// }
// console.log(positive number ${positiveNumber})
// console.log(negative number ${negativeNumber})


// 11. Count even and odd numbers in an array.--------------------------------------------

// let numberArray = [1,2,3,4,5,6,7,8,9];
// let evenNumber = 0
// let oddNumber = 0

// for(let index=0; index<numberArray.length; index++){
//     if(numberArray[index]%2 == 0){
//         evenNumber++
//     }else{
//         oddNumber++
//     }
// }
// console.log(even number ${evenNumber})
// console.log(odd number ${oddNumber})


// 12. Find the second largest element in an array.----------------------------------------

// let array1 = [10, 5, 20, 8];
// let largest = 0;
// let secondLargest = 0;
// let num = 0;

// for (let index=0; index<array1.length; index++){
//   if (array1[index] > largest) {
//     secondLargest = largest;
//     largest = array1[index];
//   } else if (array1[index] > secondLargest && array1[index] < largest) {
//     secondLargest = array1[index];
//   }
// }
// console.log(secondLargest);


// 13. Find the second smallest element in an array.--------------------------------------

// let array1 = [10, 5, 20, 8];
// let smallest = 0;
// let secondsmallest = array1[0];
// let num = 0;

// for (let index=0; index<array1.length; index++){
//   if (array1[index] < smallest) {
//     secondsmallest = smallest;
//     smallest = array1[index];
//   } else if (array1[index] < secondsmallest && array1[index] > smallest) {
//     secondsmallest = array1[index];
//   }
// }
// console.log(secondsmallest);


// 14. Copy all elements from one array to another.---------------------------------------

let arrey = [1,2,3,4,5,6,7];

let newArrey = arrey.slice();

console.log(newArrey);

// 15. Check if an array contains a specific element.---------------------------------------

let arrayNumber = [1,2,3,4,5,6,7]