console.log('JS has been loaded');


//---------------------------(POP , SHIFT , UNSHIFT)

// let userInput=['Aryan', 'Hellow', 'Hi', 'Hola'];
// let poppedValue = userInput.pop(); // To remove content from last
// console.log(userInput);
// console.log(poppedValue); //prints remove value

// let removeValue=userInput.shift(0); //remove content from first
// console.log(removeValue);

// let addedValue=userInput.unshift('Myfriend'); //adds content from first
// console.log(userInput);



// let userValue=['Hi','Hello','Hola','Namaste','Konichiwa'];
// console.log(userValue);

// userValue.pop(4);
// console.log(userValue);

// userValue.unshift('Namsate');
// console.log(userValue);

// userValue.shift(0);
// console.log(userValue);


//-----------------------------------------(INDEX, LASTINDEX, SLICE, SPLICE, TRICKY PROBLEM)-------------------------------------

// let myValue=[1,2,3,4,5,6,7,8,9,10,5];
// console.log(myValue[myValue.length-1]);  //without counting the index,shows content 
// console.log(myValue.indexOf(5));         //shows content from first 
// console.log(myValue.lastIndexOf(5));     //shows content from start 
// myValue[myValue.indexOf(6)] =16;         //changes the value of given index
// console.log(myValue); 

// let myValueChunk = myValue.slice(2 ,5);  //(start, end -1), IMMUTABLE
// console.log(myValueChunk);

// let myValue=[1,2,3,4,5,6,7,8,9,10,5];
// let removeValue = myValue.splice(0,6);
// console.log(myValue);
// console.log(removeValue);


// let myValue=[1,2,3,4,5,6,7,8,5,9,10,5];
// let myIndex= myValue.indexOf(5);
// console.log(myIndex);
// let myLastIndex= myValue.lastIndexOf(5);
// console.log(myLastIndex);
// let myMiddleIndex = myValue.slice(myIndex+1 , myLastIndex);
// console.log(myMiddleIndex);
// console.log(myMiddleIndex.indexOf(5));


//--------------------------------(ARRAY DESTRUCTURING)----------------------------------------------

// let [first,,,fourth]=['Ram','Shyam','Hari','Gita']; //(,,) to skip non-use content
// console.log(first);
// console.log(fourth);


// let [value1,value2,value3,,,,,value4,value5,value6]=['A','B','C','D','E','F','G','H','I','J'];
// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4);
// console.log(value5);
// console.log(value6);


//----------------------------------(ARRAY SPREAD)---------------------------------------

// let firstArray= [1,2,3,4,5];
// let secondArray= [6,7,8,9,10];
// let addedArray=[...firstArray, ...secondArray];
// console.log(addedArray);

// console.log(...firstArray);
// console.log(...secondArray);
// console.log(...addedArray);

// let a,b,rest;
// [a,b]=[10,20];
// console.log(a);
// console.log(b);
// [a,b, ...rest]=[10,20,30,40,50];
// console.log(rest);

// let [a,b,...rest]=['Ram','Shyam','Hari','Gita','Sita']; //rest operator
// console.log(a);
// console.log(b);
// console.log(rest);     //prints Array
// console.log(...rest);  //prints String
