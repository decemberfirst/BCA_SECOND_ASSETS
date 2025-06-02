/* let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let length = 0;
let index = 0;
let element = myArray[index];

while(element != undefined){
    length++;
    index++;
    element = myArray[index];
}

console.log(index); */

//ASSIGNMENT

//1. Print All elements of an Arrya

/* let Cars = ['ferrari', 'BMW', 'Ford'];

console.log(Cars); */

//2.  Find the lenghth of an array without build in function 
/* let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let lenght = 0;
let index = 0;
let element = myArray[index];

while(element != undefined){
    lenght++;
    index++;
    element = myArray[index];
}

console.log(index); */

 //3.Insert an element at a specific position in an array
/* 
let Students = ['Agraj', 'Chintan', 'Dev'];
console.log(Students);
Students.push('Shreeya', 'Diana');
console.log(Students);
Students.unshift('Anish', 'Ayush');
console.log(Students);
*/

4. //Delete an element from an array

/* let Players = ['RDJ','Messi', 'Cristano', 'Neymar', 'SRK'];
console.log(Players);
Players.shift();
console.log(Players);
Players.pop();
console.log(Players); */

 // 5.Find the sum of all elements in an array

/* let myNum = [1,2,3,4,5];
sum = 0;

for(index = 0; index < myNum.length; index++){
   sum += myNum[index];
}
console.log(sum); */

// 6. Find the average of all elements in an array

/* let myNum = [100, 150, 200];
sum = 0;

for(index = 0; index < myNum.length; index++){
   sum += myNum[index];
}

let Average = sum / myNum.length;
console.log(Average);  
*/

//7&8. Find the Maximum and Minimum element in an array

/* let number = [99, 999, 9999, 9999];
let Maximum = number[0];
let Minimum = number[0];
 

for(i = 0; i < number.length; i++){
    if(number[i] > Maximum){
        Maximum = number[i];
    }

    if(number[i] < Minimum){
        Minimum = number[i];
    }
}
console.log('The Maximum number is', Maximum);
console.log('The Minimum number is', Minimum);   */

// 9. Reverse the elements of an array

/* let myNum = [1,2,3,4,5];
Reverse = [];

for(i=0; i < myNum.length; i++){
    Reverse.unshift(myNum[i]);
}

console.log(myNum);
console.log(Reverse);
 */

//10. Count the number of positive and negative elements in an array

/* let myArray = [3, -1, 7, -5, 9, -2, 8, -4];
let positiveCount = 0;
let negativeCount = 0;
let index = 0;
let element = myArray[index];

while (element !== undefined) {
    if (element > 0) {
        positiveCount++;
    } else if (element < 0) {
        negativeCount++;
    }
      index++;
    element = myArray[index];
}

console.log('Number of positive elements:', positiveCount);
console.log('Number of negative elements:', negativeCount); */

//11.  Count even and odd number in an array

/* let myArray = [1,2,3,4,5,6,7,8,9,10];
let odd = 0;
let even = 0;
let index = 0;
let element = myArray[index];

while(element != undefined){
    if( element %2 == 0){
        even++
    } else{
        odd++ 
    }
    index++;
    element = myArray[index];
}

console.log('Number of odd elements:',odd);
console.log('Number of even elements:',even);
 */

//12. Find the second largest element in an array
//13. Find the second smallest element in an array

//14. Copy all the elements from one array to another

/* let fruits = ['apple', 'Banana', 'Cherry'];
let Fruit = [];

for(i = 0 ; i < fruits.length; i++){
    Fruit.push(fruits[i]);
}

console.log(fruits);
console.log(Fruit);
 */

//15. 
//16.
//17.


//18,19. Find the index of first and last occurence of given element

/* let myNum = [2,3,4,5,2,4];

console.log(myNum.indexOf(4));
console.log(myNum.lastIndexOf(4)); */

//20. Merge two array into third array
/* 
let firstArray = ['England', 'Wales', 'Scotland'];
let secondArray = ['Ireland', 'Nederland'];

let thirdArray = [...firstArray,...secondArray];
console.log(thirdArray); */

//21. Swap the first and last element of an array

/* let myArray = [1,2,3,4,5];
console.log(myArray);

myArray.pop();
myArray.shift();
console.log(myArray);

myArray.unshift(5);
myArray.push(1);
console.log(myArray);
 */

 
//22
//23
//24

//25 Sort an array in ascending order
/* let number =[2,3,5,6,1,9,0];

let newnum = number.sort();

console.log(newnum); */

//26 Sort an array in descending order
/* let number =[2,3,5,6,1,9,0];

let newnum = number.sort((a,b) => b - a);

console.log(newnum); */
//27
//28
//29
//30


/* let a = [1,2,3,4,5 ];

if(a.includes(5)){
    console.log('exits');
}else{
    console.log('Doesnot exist')
}
 */











 
