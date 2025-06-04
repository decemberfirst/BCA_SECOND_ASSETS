// Assignment practice two times what we have done.

//--------------------------------POPPED VALUE---------------------------------------------------//

// let studentNameList = ['Ram', 'Hari', 'Sita', 'Gita', 'Bijay'];
// let studentPoppedValue = studentNameList.pop(); // REMOVED VALUE FROM LAST  
// console.log(studentNameList);
// console.log(studentPoppedValue);

// let bcaStudent = ['Amar', 'Sabal', 'Sanket', 'Royal', 'Aryan'];
// let bcaStudentPoppedValue = bcaStudent.pop();
// console.log(bcaStudent);
// console.log(bcaStudentPoppedValue);


//--------------------------------ARRAY SHIFT (REMOVE VALUE FROM FIRST)-------------------------------//
// let bcaStudent = ['Royal', 'Sabal', 'Sanket', 'Amar', 'Aryan'];
// let removedData = bcaStudent.shift(); // REMOVED VALUE FROM FIRST   //Royal
// console.log(removedData);

// let bcaStudent = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Samgit'];
// let removedValue = bcaStudent.shift();
// console.log(removedValue);

//-----------------------------ARRAY UNSHIFT (ADD VALUE IN FIRST)-------------------------------------------//

// let bcaStudent = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit'];
// let addValue = bcaStudent.unshift('Amar'); ADD VALUE IN FIRST  // AMAR
// console.log(bcaStudent);

// let bcaStudent = ['Royal', 'Sabal', 'Sanket', 'Amar', 'Aryan'];
// let myAddValue = bcaStudent.unshift('Sangit');
// console.log(bcaStudent);

//--------------------------------TO find INDEX VALUE---------------------------------------//

// let myArray = ['abc', 'def', 'ghi', 'jkl', 'mno'];
// console.log(myArray[myArray.length - 1]);
// console.log(myArray.indexOf('mno'));
// console.log(myArray.lastIndexOf('ghi'));
// myArray[myArray.indexOf('ghi')] = 'Amar';
// console.log(myArray);


// let bcaStudent = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit'];
// console.log(bcaStudent[bcaStudent.length - 1]);
// console.log(bcaStudent.indexOf('Sumit'));
// console.log(bcaStudent.lastIndexOf('Krishna'));
// bcaStudent[bcaStudent.indexOf('Manish')] = 'Sanket';
// console.log(bcaStudent);

//---------------------------------ARRAY SLICE (Immutable --> doesnot change)---------------------------------------//

// let bcaStudent = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit'];
// let bcaStudentChunk = bcaStudent.slice(0,3); 
// console.log(bcaStudentChunk);
// console.log(bcaStudent);

// let bcaStudent = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit', 'Ram', 'Hari', 'Sita', 'Gita', 'Bijay'];
// let bcaStudentChunk = bcaStudent.slice(3, 7);
// console.log(bcaStudentChunk);
// console.log(bcaStudent);

//------------------------------ARRAY SPLICE (Mutable --> Change)-------------------------------//

// let bcaStudent = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit'];
// let bcaStudentChunk =  bcaStudent.splice(1, 3);
// console.log(bcaStudentChunk);
// console.log(bcaStudent);

// let bcaStudent = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit', 'Ram', 'Hari', 'Sita', 'Gita', 'Bijay'];
// let bcaStudentChunk =  bcaStudent.splice(1, 7);
// console.log(bcaStudentChunk);
// console.log(bcaStudent);

//-------------------------------------ARRAY DESTRUCTION-------------------------------------------//

// let [first, , , fourth, fifth]= ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit'];
// console.log(first);
// console.log(fourth);
// console.log(fifth);

// let [ , , , fourth, fifth, sixth, , , ninth, ] = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit', 'Ram', 'Hari', 'Sita', 'Gita', 'Bijay'];
// console.log(fourth);
// console.log(fifth);
// console.log(sixth);
// console.log(ninth);

//---------------------------------------ARRAY SPREAD (... (THREE DOT) MEANS ARRAY SPREAD)---------------------------------------//

// let myfirstArray = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit'];
// let mySecondArray = ['Royal', 'Sabal', 'Sanket', 'Amar', 'Aryan'];
// let myJoinedArray = [...myfirstArray, ...mySecondArray];
// console.log(myJoinedArray);

// let myfirstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let mySecondArray = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// let myJoinedArray = [...myfirstArray, ...mySecondArray];
// console.log(myJoinedArray);

//-----------------------------ARRAY REST (...rest)-------------------------------------//

// let [first, , , fourth, fifth, sixth, ...rest] = ['Krishna', 'Manish', 'Sumit', 'Mohit', 'Sangit', 'Ram', 'Hari', 'Sita', 'Gita', 'Bijay'];
// console.log(first);
// console.log(fourth);
// console.log(fifth);
// console.log(sixth);
// console.log(...rest);

// let [ , , third, ,fifth, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(third);
// console.log(fifth);
// console.log(...rest);

// let myNumbers = [2000, 5000, 8000, 12000, 33000];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     mySum = mySum + myNumbers[index];
// }
// console.log(mySum); // 4 // sum = 27000 + 33000 // 60000 

// let myNumbers = [2000, 5000, 8000, 12000, 33000];
// let myDifference = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     myDifference = myDifference - myNumbers[index];
// }
// console.log(myDifference);  // 4 // Difference = -27000 - 33000 = -60000

//-----------------------------------SUM OF EVEN NUMBER-------------------------------------//

// let myNumbers = [100, 105, 108, 109, 112];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2==0){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);

// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20];
// let mySum = 0;
// for(index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 0){
//         mySum = mySum + myNumbers[index];
//     }
// }
// console.log(mySum);  // 19 // 20 // 18 % 2 == 0  // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20  sum = 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20 = 110 


// let myNumbers = [15, 18, 21, 22, 25, 28, 31, 34, 12, 18];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 0){
//         mySum = mySum + myNumbers[index];
//     }
// }
// console.log(mySum);  // 9 // 18 // 22 % 2 == 0 // mySum = 40+2

//-------------------------------SUM OF ODD NUMBER-----------------------------------//

// let myNumbers = [100, 105, 108, 109, 112, 115, 118, 121];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

// let myNumbers = [10, 15, 18, 19, 12, 15, 18, 21];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

// let myNumbers = [10, 15, 18, 19, 12, 15, 18, 21];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

// let myNumbers = [1001, 1015, 1019, 205, 12, 14, 18, 22];
// let mySum = 0;
// for(let index = 0; index<myNumbers.length; index++){
//     if(myNumbers[index] % 2 == 1){
//         mySum = mySum + myNumbers[index];
//     }  
// }
// console.log(mySum);  

//---------------------------TO FIND THE GERATEST NUMBER-----------------------------//

// let myNumbers = [101, 100, 400, 500, 5000];
// let greatestNum = 0;
// for(let index=0; index<myNumbers.length; index++){
//     if(myNumbers[index]>greatestNum){
//         greatestNum = myNumbers[index];
//     }
// }
// console.log(greatestNum);

// let myNumbers = [1000, 1105, 1400, 1550, 6000];
// let greatestNum = 0;
// for(let index=0; index<myNumbers.length; index++){
//     if(myNumbers[index]>greatestNum){
//         greatestNum = myNumbers[index];
//     }
// }
// console.log(greatestNum);

//---------------------------------TO FIND THE GREATEST AND SMALLEST NUMBER------------------------------//

// let myNumbers = [500, 100, 1200, 6, 10];
// let greatestNum = 0;
// let smallestNum =myNumbers[0];
// for(let i = 0; i<myNumbers.length; i++){
//     if(myNumbers[i]>greatestNum){
//         greatestNum = myNumbers[i]
//     }
//     else if(myNumbers[i]<smallestNum){
//         smallestNum = myNumbers[i];
//     }
// }
// console.log(greatestNum);
// console.log(smallestNum);

// let myNumbers = [6000, 100, 1000, 2, 10];
// let greatestNum = 0;
// let smallestNum =myNumbers[0];
// for(let i = 0; i<myNumbers.length; i++){
//     if(myNumbers[i]>greatestNum){
//         greatestNum = myNumbers[i]
//     }
//     else if(myNumbers[i]<smallestNum){
//         smallestNum = myNumbers[i];
//     }
// }
// console.log(greatestNum);
// console.log(smallestNum);

//------------------------------------ARRAY REVERSED---------------------------------------------------//

// let myNumbers = [500, 100, 1000, 2, 10];
// let reversed = []; 
// for(let i=0; i<myNumbers.length; i++){
//     reversed.unshift(myNumbers[i]);
// }
// console.log(reversed);

// let myNumbers = [5, 4, 3, 2, 1];
// let reversed = []; 
// for(let i=0; i<myNumbers.length; i++){
//     reversed.unshift(myNumbers[i]);
// }
// console.log(reversed);


// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let length = 0;
// let index = 0;
// let element = myArray[index];

// while(element != undefined){
//     length++;
//     index++;
//     element = myArray[index];
// }
// console.log(length);


//----------------------------------- 1. (Print all elements of an array)--------------------------------------------------//

// let myArray = [1, 2, 3, 4, 'Amar', 'Sabal', 'Sanket'];
// for(let i = 0; i<myArray.length; i++){
//     console.log(myArray[i]);
// }

//---------------------------------- 2. (Find the length of an array without using a built-in function)---------------------//

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// let length = 0;
// let index = 0;
// let element = myArray[index];

// while(element !== undefined){
//     length++;
//     index++;
//     element = myArray[index];
// }
// console.log('Length of the array: ', length);

//------------------------------- 3.  (Insert an element at a specific position in an array)---------------------------------//

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// myArray.splice(3,0, 100); 
// console.log(myArray);

//-------------------------------- 4. (Delete an element from an array)------------------------------------------//

// let myArray = ['Apple', 'Mango', 'Banana', 'Graphes', 'Litchi'];
// let myPoppedArray = myArray.pop();
// console.log(myPoppedArray);

//----------------------------------- 5. (Find the sum of all elements in an array)-----------------------------------------//

// let myArray = [100, 200, 500, 800, 1000];
// let mySum = 0;
// for(let i = 0; i<myArray.length; i++){
//     mySum = mySum + myArray[i];
// }
// console.log(mySum); 

//------------------------------------- 6. (Find the average of all elements in an array)-------------------------//

// let myArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// let average = 0;
// let sum = 0;
// for(let i = 0; i<myArray.length; i++){
//     sum = sum + myArray[i];
//     average = sum / myArray.length;
// }
// console.log(average);

// let myArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// let myMaxNumber = myArray[0];
// for(let i = 0; i<myArray.length; i++){
//     if(myArray[i] > myMaxNumber){
//         myMaxNumber = myArray[i];
//     }
// }
// console.log('Maximum value:', myMaxNumber);


// let myArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// let myMinNumber = myArray[0];
// for(let i = 0; i<myArray.length; i++){
//     if(myArray[i] < myMinNumber){
//         myMaxNumber = myArray[i];
//     }
// }
// console.log('Minimum value:', myMinNumber);


//------------------------------------ 9. (Reverse the elements of an array)-------------------------------//

// let myArray = [100, 200, 300, 400, 500];
// let reversed = [];
// for(let i = 0; i<myArray.length; i++){
//     reversed.unshift(myArray[i]);
// }
// console.log(reversed);

//--------------------------------- 10. (Count the number of positive and negative elements in an array)------------------//

// let myArray = [10, -11, 12, -13, 14, -15, 16, 17, 18, -19, 20];
// let positiveNum = 0;
// let negativeNum = 0;
// for(let i = 0; i<myArray.length; i++){
//     if(myArray[i]>0){
//         positiveNum++;
//     } else if (myArray[i]<0){
//         negativeNum++;
//     }
// }
// console.log('Positive Numbers:', positiveNum);
// console.log('Negative Numbers:', negativeNum);

//--------------------------------- 11. (Count even and odd numbers in an array)---------------------------------//

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 24, 26, 27, 30];
// let evenNum = 0;
// let oddNum = 0;
// for(let i = 0; i<myArray.length; i++){
//     if(myArray[i] % 2 == 0){
//         evenNum++;
//     } else if (myArray[i] % 2 == 1){
//         oddNum++
//     }
// }
// console.log('Even Numbers:', evenNum);
// console.log('Odd Numbers:', oddNum); 


//--------------------------------- 12. (Find the second largest element in an array)-----------------------------------//

//--------------------------------- 13. (Find the second smallest element in an array)-----------------------------------//

//--------------------------------- 14. (Copy all elements from one array to another)----------------------------------//

// let orginalArray = ['Ram', 'Sita', 'Laxman', 'Gita', 'Hari'];
// let copiedArray = [];

// for (let i = 0; i < orginalArray.length; i++) {
//     copiedArray = orginalArray;
// }
// console.log('Orginal Array:',orginalArray);
// console.log('Copied Array:',copiedArray);

//------------------------------------ 15. (CHECK IF ARRAY CONTAIN SPECIFIC ELEMENT)-----------------------------------//

// let myArray= ['Ram', 'Sita', 'Laxman', 'Gita', 'Hari'];
// let checkArray=[];
// let empty=(checkArray=[]);
// for(let i=0;i<myArray.length;i++){
//     if(myArray[i]=='Gita'){
//        checkArray=myArray[i];
//     }
// }
// if(empty==1){
//     console.log('The specific element isnot present');
// }
// else{
// console.log(`The specific element ${checkArray} is present`);
// }

//----------------------------------- 16. (INDEX OF FIRST OCCURRENCE)------------------------------------------------//

// let myNum=[1,2,3,4,5];
// let firstIndex=myNum.indexOf(1);
// console.log(firstIndex);

//------------------------------------19. (INDEX OF LAST OCCURRENCE)----------------------------------------------------//

// let myValue=[1,2,3,4,5];
// let lastIndex=myNum.indexOf(5);
// console.log(lastIndex);


//---------------------------------------- 20. (MERGE TWO ARRAY)------------------------------------------------//


// let firstArray=[1,2,3,4,5];
// let secondArray=[6,7,8,9,10];
// let thirdArray=[...firstArray,...secondArray];
// console.log(thirdArray);

//------------------------------------- 21. (SWAP FIRST AND LAST ELEMENT OF ARRAY)------------------------------//

// let userValue=[1,2,3,4,5];
// let firstArray=userValue.shift();
// let lastArray=userValue.pop();
// let firstSwap=userValue.push(firstArray);
// let lastSwap=userValue.unshift(lastArray);
// console.log(userValue);

//-------------------------------------- 28. (SUM OF ELEMENTS AT EVEN INDICES)------------------------------//

// let myNum=[100, 101, 102, 103, 104, 105];
// let sum=0;
// for(let i=0;i<myNum.length;i++){
//     let rem=myNum[i]%2;
//     if(rem==0){
//         sum+=myNum[i];
//     }
//     else{

//     }
// }
// console.log(sum);


//---------------------------------- 29. (SUM OF ELEMENTS AT ODD INDICES)-----------------------------//

// let myArray=[1000, 1001, 1002, 1003, 1004, 1005];
// let sum=0;
// for(let i=0;i<myArray.length;i++){
//     let rem=myArray[i]%2;
//     if(rem==1){
//         sum+=myArray[i];
//     }
// }
// console.log(sum);


//-------------------------------- Question 1: Create a JavaScript object named student with the following structure----------------//

let studentData = {
    student: {
        Name: 'Amar Thapa',
        Id: 1004, 
    },

    address: {
        street: 'Manigram',
        city: 'Tilottama',
        zip: 32903,
    },
    
    faculty: 'Humanities and Social Sciences',

    course: {
        Name: 'Bachelor of Computer Application (BCA)'  
    },

    subject: {
        Name: 'English II',
        code: 'CAEN153',
        grade: 'A',
    },

    subject2:{
        Name: 'C Programming',
        code: 'CACS151',
        grade: 'B+',
    },

    subject3:{
        Name: 'Financial Accounting',
        code: 'CAAC152',
        grade: 'A',
    },

    subject4:{
        Name: 'Mathematics II',
        code: 'CAMT154',
        grade: 'A'
    },

    subject5:{
        Name: 'Microprocessor and Computer Architecture',
        code: 'CACS155',
        grade: 'B+',
    },
    
    subject6:{
        Name: 'Computer Fundamentals and Applications',
        code: 'CACFA156',
        grade: 'A',
    }, 

    contact: {
        Email: 'amar123@gamil.com',
        phone: [9894844484, 97811545145],
    },
}

// Student Name and Id //

console.log('Student Name:', studentData.student.Name);
console.log('Student Id:', studentData.student.Id);

// Student Address //

console.log('Street:', studentData.address.street);
console.log('City:', studentData.address.city);
console.log('zip Code:', studentData.address.zip);

// student facuilty // 

console.log('Faculty:', studentData.faculty);

// student course // 

console.log('Course:', studentData.course.Name)

// Student subject, subject code, grade  //

console.log('Course Title:',studentData.subject.Name);
console.log('Course Code:', studentData.subject.code);

console.log('Course Title:',studentData.subject2.Name);
console.log('Course Code:', studentData.subject2.code);

console.log('Course Title:',studentData.subject3.Name);
console.log('Course Code:', studentData.subject3.code);

console.log('Course Title:',studentData.subject4.Name);
console.log('Course Code:', studentData.subject4.code);

console.log('Course Title:',studentData.subject5.Name);
console.log('Course Code:', studentData.subject5.code);

console.log('Course Title:',studentData.subject6.Name);
console.log('Course Code:', studentData.subject6.code);

// Student contact // 

console.log('Email:', studentData.contact.Email);
console.log('Phone Number 1 :', studentData.contact.phone[0]);
console.log('Phone Number 2:', studentData.contact.phone[1]);


// -------Question 2 :Given the student object you created, how do you access the student’s zip code and the course grade?--------//

console.log('zip Code:', studentData.address.zip);

console.log('Grade:', studentData.subject.grade);
console.log('Grade:', studentData.subject2.grade);
console.log('Grade:', studentData.subject3.grade);
console.log('Grade:', studentData.subject4.grade);
console.log('Grade:', studentData.subject5.grade);
console.log('Grade:', studentData.subject6.grade);

//-------- Question 3: Add a new nested property department inside the course object with the value "Science"------------//

studentData.course.department = 'Science';
console.log('Department:', studentData.course.department);

//---------- Question 4:Change the student’s email address inside the contact object to "student@example.com"-------------//

studentData.contact.Email = 'amar789@gmail.com'
console.log('Updated Email:', studentData.contact.Email);

//------------ Question 5: Remove the phone property from the contact object-------------------------------//

delete studentData.contact.phone;
console.log('Update Contact:', studentData.contact);


// let myPerson = {
//     dob: 2004,
//     age () {
//         console.log(2025 - this.dob);
//         // this.myAge = 2025 - this.dob;
//     },
// };
// myPerson.age();
// // console.log(myPerson.myAge);

// let myPerson = {
//     firstName: 'Amar',
//     middleName: 'Bahadur',
//     lastName: 'Thapa',
//     fullname () {
//         console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
//     },
// };
// myPerson.fullname();

// let myObject = {
//     name: 'Amar Thapa',
//     printName () {
//         console.log('My name is: ', this.name);
//     },
// };
// myObject.printName();

// let area = {
//     length: 100,
//     breadth: 200,
//     calculateArea () {
//         console.log('Area of rectangle:', this.length * this.breadth);
//     }
// };
// area.calculateArea();

// area.length = 10;
// area.breadth = 20;
// area.calculateArea();

// area.length = 0;
// area.breadth = 10;
// area.calculateArea();

// let myDetails = {
//     name: 'Abc',
//     age: 21,
//     email: 'abc123@gmail.com',
//     phone: 98753465454,
//     address: 'Nepal',
//     bg: 'A+',
//     printData () {
//         console.log(`Name: ${this.name}`)
//     },
// };



