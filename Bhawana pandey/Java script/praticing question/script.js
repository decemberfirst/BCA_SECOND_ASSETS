// // ITERATING OVER ARRAY
// let myArrayList =['january', 'feburary', 'march', 'april'];
// console.log(myArrayList[0]);
// console.log(myArrayList[1]);
// console.log(myArrayList[2]);
// console.log(myArrayList[3]);
// console.log(myArrayList[4]);

// for(let i = 0 ;i < myArrayList.length; i++){
//  5
// console.log(myArrayList[i]);
// } 


// let myArrayList =['bhawana', 'kirti', 'kamana', 'bipika', 'nikita'];
// console.log(myArrayList[0]);
// console.log(myArrayList[1]);
// console.log(myArrayList[2]);
// console.log(myArrayList[3]);
// console.log(myArrayList[4]);
// console.log(myArrayList[5]);

// for(let i = 0 ;i < myArrayList.length; i++){
//  6
// console.log(myArrayList[i]);
// } 


// let myNumber= [6,7,8,9,10];
// let sum =0;
// for(let i =0 ; i<myNumber.length; i ++ ){
// sum = sum+myNumber[i];
// }
// console.log(sum);

//  SUM OF EVEN NUMBERS ONLY
// let  myNumber = [100, 101, 102, 103, 104, 105];
// let sum =0;
// for(let i =0; i<myNumber.length; i++){
//     if(i % 2 == 0){
//          sum =sum+myNumber[i];
//     }
// }
// console.log(sum);


// let  myNumber = [106, 107, 108, 109, 110, 111];
// let sum =0;
// for(let i =0; i<myNumber.length; i++){
//     if(i % 2 == 0){
//          sum =sum+myNumber[i];
//     }
// }
// console.log(sum);


// let aarryList=[1000, 1001, 1002, 1003, 1004,1005, 1006, 1007, 1008, 1009,];
// let sum = 0;
// for(let i =0; i<aarryList.length; i++){
//     if(i %2 != 0){
//         sum =sum+aarryList[i];
//         }
//         console.log(sum);
// }

// Find the greatest number from the aray
// let myNumber = [499, 100, 1000, 2, 10];
// let greatest=0;
// for(let i=0; i<myNumber.length;i++){
//     if (myNumber[i] > greatest){
//     greatest=myNumber[i]; 
// }
// console.log(greatest);
// } 

// smallest
// let myNumber = [499, 100, 1000, 2, 10];
// let smallest=myNumber[0];
// for(let i=0; i< myNumber.length; i++){
//     if (myNumber[i]< smallest){
//     smallest=myNumber[i]; 
// }
// } 
// console.log(smallest);

// // WAP TO REVERSE AN ARRAY
// let  myNumber =[499, 100, 1000, 2, 10];
// let reverse=[];
// for(let i=0; i<myNumber.length; i++){
//     reverse.unshift(myNumber[i]);
// }
// console.log(reverse);


//  myStudentList = ['daina' , 'shreya' , 'samikshya'];
//  let poppedvalue = myStudentList.pop(); //remove from list
//  console.log(myStudentList); //['daina' ,'shreya']
//  console.log(poppedvalue); // prit removed value

//  let removedvalue = myStudentList.shift();// remove from first
//  console.log(removedvalue);

//  myStudentList.unshift('added on first'); // add on first place
//  console.log(myStudentList);

//  myStudentFaculty = ['management' , 'science' , 'law', 'education' , 'BCA'];
//  let poppedvalue =myStudentFaculty.pop();
//  console.log(myStudentFaculty);
//  console.log(poppedvalue);
//  let removedvalue = myStudentFaculty.shift();
//  console.log(removedvalue);
//  myStudentFaculty.unshift('business', 'fiance');
//  console.log(myStudentFaculty);

// let myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10];
// console.log(myArray[myArray.length - 1]);
// console.log(myArray.indexOf(5));
// console.log(myArray.lastIndexOf(5));

// myArray[myArray.indexOf(6)] =16;
// console.log(myArray);

// let myArraychunk = myArray.slice(2,5); // ( start, end-1 , immutable)
// console.log(myArraychunk);

// console.log(myArray.indexOf(100)); // -1

  // slice  (original change gardina)
 // splice// original change gardinxa value
//  myArray.splice(0,3); // MUTABLE
//  console.log(myArray);


//ARRAY DESTRUCTING
// let [first ,  second,  fourth] =[ 'samikshya' ,'daina', ' shreya', 'anisha'];
//  let first =myArrays[0];
//  let second =myArrays[1];
//  let third =myArrays[2];
// console.log(first);
// console.log(fourth);

// let [first , second, third ,,, seventh, eight ,nine ,ten] = ['january','feburary' ,'march','april','may','june','july','agust','september', 'november'];
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(eight);
// console.log(nine);
// console.log(ten);


//ARRAY SPREAD
// let firstArray = [1,2,3,4,5];
// let secondArray = [6,7,8,9,10];
// let joinedArray = [...firstArray, ...secondArray];
// console.log(joinedArray);
// console.log(...firstArray); // this called spread

// let [first ,  second, ...rest] =[ 'samikshya' ,'daina', ' shreya', 'anisha'];
// console.log(first);
// console.log(rest);




 // THURSDAY ---ASSIGNMENT-----


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


// // 1)Print all elements of an array.
// let elementArray=[5,10,15,20,25,30,35,40,45,50];
// console.log(elementArray[0]);
// console.log(elementArray[1]);
// console.log(elementArray[2]);
// console.log(elementArray[3]);
// console.log(elementArray[4]);
// console.log(elementArray[5]);
// console.log(elementArray[6]);
// console.log(elementArray[7]);
// console.log(elementArray[8]);
// console.log(elementArray[9]);
// console.log(elementArray.length);

// // 2)the length of an array without using a built-in function.
// let numberArray=[10,20,30,40,50];
// let count=0;
// while(numberArray[length]!==undefined){
//     length++;
// }
// console.log("length of the array:", length);

// // 3)Insert an element at a specific position in an array.
// let myArray=[1,3,5,7,9,11,13,15];
// let index=2;
// let number=10;
// let newArray=[];
// for(let i=0; i<index; i++){
//     newArray[i]=myArray[i];
// }
// newArray[index]=number;
// for(let i=index; i<myArray.length; i++){
//     newArray[i+1]=myArray[i];
// }
// console.log(newArray);

// // 4)Delete an element from an array.
// let numArray=[2,4,6,8,10,12,15];
// let removedArray=numArray.pop();
// console.log(numArray);

// // 5)Find the sum of all elements in an array.
// let numbArray=[4,8,12,16,20,24,28,32];
// let sum=0;
// for(let i=0; i<numbArray.length; i++){
//     sum=sum+numbArray[i];
// }
// console.log("sum of all elements: ", sum);

// // 6)Find the average of all elements in an array.
// let arrayNum=[10,20,30,40,50,60,70,80];
// let Sum=0;
// // let average=Sum / arrayNum.length;
// for(let i=0; i<arrayNum.length; i++){
//     Sum=Sum+arrayNum[i];
// }
// let average=Sum / arrayNum.length;
// console.log("average:", average);

// // 7)Find the maximum element in an array.
// let numbersArray=[15,8,12,40,28,50];
// let maximum=numbersArray[0];
// for(let i=1; i<numbersArray.length; i++){
//     if(numbersArray[i]>maximum){
//         maximum=numbersArray[i];
//     }
// }
// console.log("Maximum element:", maximum);

// // 8)Find the minimum element in an array.
// let numbeArray=[20,7,19,50,6,2];
// let minimum=numbeArray[0];
// for(let i=1; i<numbeArray.length; i++){
//     if(numbeArray[i]<minimum){
//         minimum=numbeArray[i];
//     }
// }
// console.log("Minimum element:", minimum);

// // 9)Reverse the elements of an array.
// let numberArray=[100,102,103,104,105];
// let reverse=[];
// for(let i=0;i<numberArray.length;i++){
//     reverse.unshift(numberArray[i]);
// }
// console.log("Reversed number:",reverse);

// // 10) Count the number of positive and negative elements in an array.
// let mynumberArray=[5,-2,8,7,-3,-14,12];
// let positiveNumber=0;
// let negativeNumber=0;
// for(let i=0; i<mynumberArray.length;i++){
//     if(mynumberArray[i]>0)positiveNumber++;
//     else if(mynumberArray[i]<0)negativeNumber++;        
// }
// console.log("Positive Number:", positiveNumber);
// console.log("Negative Number:", negativeNumber);

// // 11) Count even and odd numbers in an array.
// let numberList=[20,5,18,9,12,7,30];
// let even=0;
// let odd=1;
// for(let index=0; index<numberList.length; index++ ){
//     if(numberList[index]%2==0){
//     even=even+numberList[index];
//     }else if(myArray[index]%2!=0){
//         odd=odd+numberList[index]; 
//     }
// }
// console.log(even);
// console.log(odd);

// // 12)Find the second largest element in an array.
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
// function secondSmallestNumber(array){
// let smallest= Infinity, second= Infinity;
// for (let num of array){
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

// 16)count the frequency of each element is an array .
// let array=[1,2,3,2,1,4,2]
  // let frequency={};
