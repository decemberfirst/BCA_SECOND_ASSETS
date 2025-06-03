// let myArray=[1,2,2,4,5,6,7,8,9];
// let length=0;
// let index=0;
// let element=myArray[index];
// while(element!=undefined){
//     length++;
//     index++;
//     element=myArray[index];
// }
// console.log(length);

// 1. Print all elements of an array
// let fruit=['apple','mango','banana','guava','grapes'];
// console.log(fruit);

//2. Find the length of an array without using a built-in function
// let myArray1=[2,4,6,8,10,12,14,16,18,20];
// let length1=0;
// let index1=0;
// let element1=myArray1[index1];
// while(element1!=undefined){
//     length1++;
//     index1++;
//     element1=myArray1[index1];
// }
// console.log(length1);

//3. Insert an element at a specific position in an array.
//  let fruit=['apple','mango','banana','guava','grapes'];
//  fruit.splice(2,0,'peach');
//  console.log(fruit);

//4. Delete an element from an array.
// let fruit=['apple','mango','banana','guava','grapes'];
// fruit.shift();
// console.log(fruit);

//5. Find the sum of all elements in an array.
// let myArray2=[1,2,3,4,5,6,7,8];
// let sum=0;
// for(let index=0;index<myArray2.length;index++){
//    sum=sum+myArray2[index];
// }
// console.log(sum);

//6.Find the average of all elements in an array.
// let myArray3=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// for(let index=0;index<myArray3.length;index++){
//    sum=sum+myArray3[index];
//    avg=sum/9;
// }
// console.log(avg);

// 7.Find the maximum element in an array.
// let numbers = [499,100,1000,2,10];
// let greater = 0

// for(a=0; a<numbers.length; a++){
//     if(numbers[a]>greater){
//         greater=numbers[a]
// }

// console.log(GREATEST NUMBER IS ${greater});


// 8. Find the minimum element in an array.

// let numbers = [499,100,1000,2,10];
// let smaller = numbers[0]

// for(a=0; a<numbers.length; a++){
//     if(numbers[a]<smaller){
//         smaller=numbers[a]
//     }

// console.log(SMALLEST NUMBER IS ${smaller});

// 10. Count the number of positive and negative elements in an array.

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


// 11. Count even and odd numbers in an array.

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


// 12. Find the second largest element in an array.

// 13. Find the second smallest element in an array.


// 14. Copy all elements from one array to another.

// let array = [1,2,3,4,5,6,7];
// let newArray = array.slice();
// console.log(newArray);

// 15. Check if an array contains a specific element.

// let myArray= ['cat', 'dog', 'fish', 'dinosaur', 'horse'];
// let checkArray=[];
// let empty=(checkArray=[]);
// for(let i=0;i<myArray.length;i++){
//     if(myArray[i]=='fish'){
//        checkArray=myArray[i];
//     }
// }
// if(empty==1){
//     console.log('The specific element isnot present');
// }
// else{
// console.log(The specific element ${checkArray} is present);
// }



// 16. (INDEX OF FIRST OCCURRENCE)

// let myNum=[1,2,3,4,5];
// let firstIndex=myNum.indexOf(1);
// console.log(firstIndex);

// 19. (INDEX OF LAST OCCURRENCE)

// let myValue=[1,2,3,4,5];
// let lastIndex=myNum.indexOf(5);
// console.log(lastIndex);

//  20. MERGE TWO ARRAY

// let firstArray=[1,2,3,4,5];
// let secondArray=[6,7,8,9,10];
// let thirdArray=[...firstArray,...secondArray];
// console.log(thirdArray);


// 22)Shift all elements to the left by one position.


// 23)Shift all elements to the right by one position.



// 28. Find the sum of elements at even indices.
// let array=[100,101,102,103,104,105,106,107,108]
// let sum=0;
// for(index=0;index<array.length;index++){
//     if(index%2==0){
//         sum=sum+array[index];
//     }
// }
// console.log(sum);

//29. Find the sum of elements at odd indices.
// let array=[100,101,102,103,104,105,106,107,108]
// let sum=0;
// for(index=0;index<array.length;index++){
//     if(index%2!==0){
//         sum=sum+array[index];
//     }
// }
// console.log(sum);

