// let studentList = ['Ram', 'Hari', 'Shyam'];
// let poppedvalue = studentList.pop(); // remove from last
// console.log(studentList); 
// console.log(poppedvalue); // print removed value 

// let removedValue = studentList.shift(); //remove from first
// console.log(removedValue);

// studentList.unshift('Amar'); // add on first place

// console.log(studentList);

// let bcaStudent = ['Ram', 'Hari', 'Shyam', 'sita', 'Gita'];
// let poppedvalue = bcaStudent.pop();
// console.log(bcaStudent);
// console.log(poppedvalue);


// let removedValue = bcaStudent.shift();
// console.log(removedValue);

// bcaStudent.unshift('Jadu');
// console.log(bcaStudent);

// let myArray = [1, 2, 3, 4, 5, 7, 8, 9, 10, 5];
// console.log(myArray[myArray.length - 1]);
// console.log(myArray.indexOf(5));
// console.log(myArray.lastIndexOf(5));

// myArray[myArray.indexOf(7)] = 17;
// console.log(myArray);

// let myArraySubSet = myArray.slice(2, 5); // (start, end - 1), Immutable - doesnot change
// console.log(myArraySubSet);
// console.log(myArray);

// console.log(myArray.indexOf(100));


// myArray.splice(0, 3);   //splice - mutable change (n-1)
// console.log(myArray);


//--------------------------------------Array Destruction-------------------------------------------//

// let [first, , , fourth] =  ['Ram', 'Hari', 'Shyam', 'sita'];
// console.log(first);
// console.log(fourth);



// let [first, second, third , , , , , eight, ninth, tenth] = ['Ram', 'Hari', 'Shyam', 'sita', 'Shyam', 'Sanket', 'Sabal', 'Mohit', 'Aryan', 'Sangit']
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(eight);
// console.log(ninth);
// console.log(tenth);

//---------------------------------------Array Spread(also knows as packing and unpacking)----------------------------------------------//

// let firstArray = [1, 2, 3, 4 , 5];
// let secondArray = [6, 7, 8, 9, 10];

// let joinedArray = [...firstArray, ...secondArray]; // ... (three dot means) --> Array spread
// console.log(joinedArray);

// console.log(...firstArray);

// //---------------------------Rest Array--------------------------------------//
// let [first, second , ...rest] =  ['Ram', 'Hari', 'Shyam', 'sita']; //rest operator bring remaining value together and we need to put rest always in last(...rest)
// console.log(first);
// console.log(...rest);










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


