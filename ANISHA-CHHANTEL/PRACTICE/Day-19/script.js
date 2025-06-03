// find length of array without using .length

// let numberArray=[1,2,3,4,5,6,7,8,9];
// let length=0;
// let index=0;
// let element=numberArray[index];
// while(element != undefined){
//     length++;
//     index++;
//     element=numberArray[index];
// }
// console.log(length);


// Assignment
// 1)Print all elements of an array.
let elementArray=[5,10,15,20,25,30,35,40,45,50];
console.log(elementArray[0]);
console.log(elementArray[1]);
console.log(elementArray[2]);
console.log(elementArray[3]);
console.log(elementArray[4]);
console.log(elementArray[5]);
console.log(elementArray[6]);
console.log(elementArray[7]);
console.log(elementArray[8]);
console.log(elementArray[9]);
console.log(elementArray.length);

// 2)the length of an array without using a built-in function.
let numberArray=[10,20,30,40,50];
let count=0;
while(numberArray[length]!==undefined){
    length++;
}
console.log("length of the array:", length);

// 3)Insert an element at a specific position in an array.
let myArray=[1,3,5,7,9,11,13,15];
let index=2;
let number=10;
let newArray=[];
for(let i=0; i<index; i++){
    newArray[i]=myArray[i];
}
newArray[index]=number;
for(let i=index; i<myArray.length; i++){
    newArray[i+1]=myArray[i];
}
console.log(newArray);

// 4)Delete an element from an array.
let numArray=[2,4,6,8,10,12,15];
let removedArray=numArray.pop();
console.log(numArray);

// 5)Find the sum of all elements in an array.
let numbArray=[4,8,12,16,20,24,28,32];
let sum=0;
for(let i=0; i<numbArray.length; i++){
    sum=sum+numbArray[i];
}
console.log("sum of all elements: ", sum);

// 6)Find the average of all elements in an array.
let arrayNum=[10,20,30,40,50,60,70,80];
let Sum=0;
// let average=Sum / arrayNum.length;
for(let i=0; i<arrayNum.length; i++){
    Sum=Sum+arrayNum[i];
}
let average=Sum / arrayNum.length;
console.log("average:", average);

// 7)Find the maximum element in an array.
let numbersArray=[15,8,12,40,28,50];
let maximum=numbersArray[0];
for(let i=1; i<numbersArray.length; i++){
    if(numbersArray[i]>maximum){
        maximum=numbersArray[i];
    }
}
console.log("Maximum element:", maximum);

// 8)Find the minimum element in an array.
let numbeArray=[20,7,19,50,6,2];
let minimum=numbeArray[0];
for(let i=1; i<numbeArray.length; i++){
    if(numbeArray[i]<minimum){
        minimum=numbeArray[i];
    }
}
console.log("Minimum element:", minimum);

// 9)Reverse the elements of an array.
let numberArrays=[100,102,103,104,105];
let reverse=[];
for(let i=0;i<numberArrays.length;i++){
    reverse.unshift(numberArray[i]);
}
console.log("Reversed number:",reverse);

// 10) Count the number of positive and negative elements in an array.
let mynumberArray=[5,-2,8,7,-3,-14,12];
let positiveNumber=0;
let negativeNumber=0;
for(let i=0; i<mynumberArray.length;i++){
    if(mynumberArray[i]>0)positiveNumber++;
    else if(mynumberArray[i]<0)negativeNumber++;        
}
console.log("Positive Number:", positiveNumber);
console.log("Negative Number:", negativeNumber);

// 11) Count even and odd numbers in an array.
let numberList=[20,5,18,9,12,7,30];
let even=0;
let odd=1;
for(let index=0; index<numberList.length; index++ ){
    if(numberList[index]%2==0){
    even=even+numberList[index];
    }else if(myArray[index]%2!=0){
        odd=odd+numberList[index]; 
    }
}
console.log(even);
console.log(odd);

// 12)Find the second largest element in an array.
// let largArray=[10,20,50,80,8,7];
// let largestNumber=-Infinity;
// let secondLargestNumber=-Infinity;
// for(let i=0;i<largArray.length;i++){
//     if(largArray[i]>largestNumber){
//         secondLargestNumber=largestNumber;
//         largestNumber=largArray[i];
//     }else if (largArray[i]>secondLargestNumber && largArray[i]<largestNumber){
//         secondLargestNumber=largArray[i];
//     }
// }
// console.log("second largest number:", secondLargestNumber);

// // 13)Find the second smallest element in an array.
// function secondSmallestNumber(arr){
// let smallest= Infinity, second= Infinity;
// for (let num of arr){
//     if(num <smallest){
//         second=smallest;
//         smallest=num;
//     }else if (num<second && num !==smallest){
//         second=num;
//     }
// }
// return second === Infinity ? null : second;
// }
// console.log("Second Smallest Number:",secondSmallestNumber([4,1,7,3,9]));

// // 14)Copy all elements from one array to another.
// let originalNumber=[5,8,10,15,18,20];
// let copyNumber= originalNumber.slice();
// console.log("Original number:", originalNumber);

// // 15)Check if an array contains a specific element.
// let array=[2,5,7,10,13,15];
// let hasTwo= array.indexOf(2) !== -1;
// console.log("specific element:", hasTwo);

// // 16)Count the frequency of each element in an array.
// let arrAy=[1,2,3,2,1,4,2];
// let frequency={};
// arrAy.forEach(item =>{
//     frequency[item] = (frequency[item] || 0) + 1;
// });
// console.log("Frequency:", frequency);

// // 17)Remove duplicate elements from an array.
// const arrays=[1,2,3,2,4,5,4,8,10];
// const uniqueArray=[...new Set(arrays)];
// console.log("duplicate element:", uniqueArray);

// // 18)Find the index of the first occurrence of a given element.
// const arrayNUM = [1, 2, 3, 4, 5, 3];
// const elementToFind = 3;
// const firstIndex = arrayNUM.indexOf(elementToFind);
// console.log("first occurrence:",firstIndex);

// // 19) Find the index of the last occurrence of a given element.
// const arr12 = [1, 2, 3, 4, 5, 8, 4];
// const elementtoFind = 3;
// const lastIndex = arr12.lastIndexOf(elementtoFind);
// console.log("last occurence:",lastIndex); 

// // 20) Merge two arrays into a third array.
// const arrayNUMB = [2, 4, 6, 8, 10];
// const swapArray = [...arrayNUMB];
// swapArray[0] = arrayNUMB[arrayNUMB.length - 1];
// swapArray[arrayNUMB.length - 1] = arrayNUMB[0];
// console.log("Third Array:",swapArray);

// // 21)Swap the first and last elements of an array.
// const arrayNUm=[2,5,7,10,12,15];
// if (arrayNUm.length > 1){
//     [arrayNUm[0], arrayNUm[arrayNUm.length - 1]] = [arrayNUm[arrayNUm.length -1], arrayNUm[0]];
// }
// console.log("First and Last Array:", arrayNUm);

// // 22)Shift all elements to the left by one position.
// const array1=[1,3,5,7,9];
// if(array1.length >1){
//     const first = array1.shift();
//     array1.push(first);
// }
// console.log("Left position:",array1);

// // 23)Shift all elements to the right by one position.
// const array2=[2,4,8,10,12,15];
// if(array2.length>1){
//     const last = array2.pop();
//     array2.unshift(last);
// }
// console.log("Right position:", array2);

// // 24)Check if an array is sorted (ascending or descending).
// function checkSortOrder(arr) {
//   let isAscending = true;
//   let isDescending = true;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) isAscending = false;
//     if (arr[i] > arr[i - 1]) isDescending = false;
//   }

//   if (isAscending) return "ascending";
//   if (isDescending) return "descending";
//   return "unsorted";
// }
// console.log(checkSortOrder([1, 2, 3, 4, 5,6]));     
// console.log(checkSortOrder([6, 5, 4, 3, 2, 1]));     
// console.log(checkSortOrder([1, 3, 2, 4, 6, 5])); 

// // 25)Sort the array in ascending order.
// const array3=[5,8,2,6,1,4];
// array3.sort((a, b) => a-b);
// console.log("Ascending order:", array3);

// // 26)Sort the array in descending order.
// let arr = [5, 3, 8, 1, 9];
// arr.sort((a, b) => b - a);
// console.log("descending order:",arr); 

// // 27)Count the number of zeros in an array.
// let array5 = [0, 1, 2, 0, 3, 0, 4];
// let zeroCount = array5.filter(num => num === 0).length;
// console.log("Number of Zeros:",zeroCount); 

// // 28)Find the sum of elements at even indices.
// let array6 = [10, 20, 30, 40, 50]; // Even indices: 0, 2, 4
// let SUM = 0;
// for (let i = 0; i < array6.length; i++) {
//   if (i % 2 === 0) {
//     SUM += array6[i];
//   }
// }
// console.log("Even indices:",SUM); 

// // 29)Find the sum of elements at odd indices.
// let array7 = [10, 20, 30, 40, 50]; 
// let amount = 0;
// for (let i = 0; i < array7.length; i++) {
//   if (i % 2 !== 0) {
//     amount=amount+ array7[i];
//   }
// }
// console.log("odd indices:",amount); 

// // 30)Print all elements that are greater than a given number.
// let array8 = [5, 10, 15, 20, 25];
// let limitValue = 12;
// let result = array8.filter(num => num > limitValue);
// console.log("Greater than given number:",result); // Output: [15, 20, 25]