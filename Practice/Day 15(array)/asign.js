// let userName = ['sushant','messi','ronaldo','neymar'];
// console.log(userName[1]);
// userName.push('suarez');
// console.log(userName[2]);
// let =removedName =userName.shift();
// console.log(removedName);
// userName.unshift('yamal')
// console.log(userName);
// let poppedValue =userName.pop();
// console.log(userName)


// ----------------------ARRAY DESTUCRING---------------------

// let god =[jesus,allah,shiva] =['christain','muslim','hindu'];
// console.log(jesus);
// console.log(allah);
// console.log(shiva);

// let [name,,,salary] =['sushant','sangit','sabal','90000']
// console.log(salary)


// ------------------ARRAY SPREAD-------------------------- connecting array together

// let userID ='123456789';
// let userPassword ="admin12345";
// // let arrayTwogether =[...userID, ...userPassword];
// // console.log(arrayTwogether)
// console.log([...userID, ...userPassword])


// -------------FIND THE SUM OF NUMBERS
// let numbers =[2,3,5,6,7,8,9];
// sum =0;
// for(i =0; i<numbers.length; i++){
//     sum = sum+numbers[i]
// }
// console.log(sum)




    // CALCULATE SUM OF EVEN NUMBERS ONLY

    // let myList =[100,101,107,117,120];
    // let sum =0;
    // for(let i=0; i<myList.length;i++){
    //     if(myList[i]%2==0){
    //         sum =sum+myList[i]
    //     }
    // }
    // console.log(sum)



    // 1. Print all elements of an array

    // let arrays = [10,20,23,12,58,312,362];
    //  for(i=0; i<arrays.length;i++){
    //     console.log(arrays[i])
    //  }

// 2. Find the length of an array without using a built-in function.


            




// 3. Insert an element at a specific position in an array.
// 4. Delete an element from an array.
// 5. Find the sum of all elements in an array.
// let elements = [20,30,62,12,33,7,10];
// sum = 0
// for(i =0; i<elements.length; i++){
//     sum= sum+elements[i];
// }
// console.log(sum)


// 6. Find the average of all elements in an array.
// let numbers = [10,20,30,40,50];
// sum = 0;
// for(i=0; i<numbers.length; i++){
//     sum= sum+numbers[i]
// }
// let average = sum/numbers.length;
// console.log(average)

// 7. Find the maximum element in an array.
      




// 8. Find the minimum element in an array.
// 9. Reverse the elements of an array.
// 10. Count the number of positive and negative elements in an array

// 11. Count even and odd numbers in an array.
// 12. Find the second largest element in an array.
// 13. Find the second smallest element in an array.
// 14. Copy all elements from one array to another.
// 

//-------------------------------------ASSIGNMENT--------------------------------------------------------------

// 1. Print all elements of an array.-------------------------------------------------------
    // let elem = [1,2,3,4,5,6,7];
    // for(let i =0; i<elem.length;i++){
    //     console.log(elem[i]);   
    // }



// 2. Find the length of an array without using a built-in function.---------------------

// let array = [1,2,3,4,5,6,7,8,9];
// let length = 0;
// let index = 0;
// let element = array[index]
// while(element != undefined){
//     length++;
//     index++;
//     element = array[index];
// }
// console.log(length);

let array =[1,2,3,4,5,6,7,8,9]
let length =0;
let index =0;
let element = array[index];
while(element != undefined){
    length++;
    index++
    element = array[index]
}
console.log(length)

// 3. Insert an element at a specific position in an array.--------------------------------

// let arrayList = [1,2,4,5,6,7,8,9];
// let insertValue = 3
// console.log(arrayList);

// let spliceValue = arrayList.splice(0,2);
// console.log(arrayList);
// arrayList.unshift(insertValue);
// console.log(arrayList);
// arrayList = [...spliceValue,...arrayList]
// console.log(arrayList);


// 4. Delete an element from an array.-------------------------------------------------------

// let numberArray = [1,2,3,4,5,6,6,7,8,9];
// console.log(numberArray);


// let temporarySplicedValue = numberArray.splice(0,5);
// console.log(numberArray);

// numberArray.shift();

// numberArray = [...temporarySplicedValue,...numberArray];
// console.log(numberArray);


// 5. Find the sum of all elements in an array.-------------------------------------------

// let num = [1,2,3,4,5];
// sum =0
// for (let A = 0 ; A < num.length ; A++){
//     sum=sum+num[A];
// }
//     console.log(sum);


// 6. Find the average of all elements in an array.---------------------------------------

// let num = [1,2,3,4,5];
// sum =0
// for (let A = 0 ; A < num.length ; A++){
//     sum=sum+num[A];
// }
// let average = sum/num.length

// console.log(average);


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

// let arrey = [1,2,3,4,5,6,7];

// let newArrey = arrey.slice();

// console.log(newArrey);

// 15. Check if an array contains a specific element.---------------------------------------
// 16. Count the frequency of each element in an array.
// 17. Remove duplicate elements from an array.
// 18. Find the index of the first occurrence of a given element.
// 19. Find the index of the last occurrence of a given element.
// 20. Merge two arrays into a third array.
// 21. Swap the first and last elements of an array.
// 22. Shift all elements to the left by one position.
// 23. Shift all elements to the right by one position.
// 24. Check if an array is sorted (ascending or descending).
// 25. Sort the array in ascending order.
// 26. Sort the array in descending order.
// 27. Count the number of zeros in an array.
// 28. Find the sum of elements at even indices.
// 29. Find the sum of elements at odd indices.
// 30. Print all elements that are greater than a given number.

