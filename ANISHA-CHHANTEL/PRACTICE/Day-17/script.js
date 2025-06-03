// let listOfStudent=['anisha', 'samikshya', 'prashansha', 'shreeya'];
// let removedValue=listOfStudent.pop();
// console.log(listOfStudent);
// console.log(removedValue);  //print removed value

// let deletValue = listOfStudent.shift();  //remove from first
// console.log(deletValue);

// listOfStudent.unshift('purnima');  //add on first
// console.log(listOfStudent);


// let studentData=['name', 'address', 'rollno', 'college', 'phone'];
// let popedData=studentData.pop();
// console.log(studentData);
// console.log(popedData);

// let removedData=studentData.shift();
// console.log(removedData);

// studentData.unshift('age');
// console.log(studentData);


// let array=[2,4,6,8,10,12,14];
// console.log(array[array.length -1]);
// console.log(array.indexOf(10));
// console.log(array.lastIndexOf(10));

// array[array.indexOf(8)]=20;
// console.log(array);

// let arrayChunk=array.slice(2,5);   //(start end -1), IMMUTABLE
// console.log(arrayChunk);
// console.log(array);

// console.log(array.indexOf(50));

// array.splice(4, 10);   //MUTABLE
// console.log(array);



// ---------------------ARRAY DESTRUCTURING----------------
// let [first , , , fourth]=['mina', 'gita', 'sita', 'rita'];  //skip garna comma(,) chainxa.
// console.log(first);
// console.log(fourth);


// let [first,second,third, , , , ,eight ,nine ,ten ,]=['sita', 'gita','mina','hari','shyam','shreeya','anisha','diana','purnima','prashansha'];
// console.log(first,second,third);
// console.log(eight,nine,ten);


//---------------------------- ARRAY SPREAD---------------------
// let arrayFirst=[1,2,3,4,5,6,7];
// let arraySecond=[8,9,10,11,12];
// let joinedArray=[...arrayFirst,...arraySecond];
// console.log(joinedArray);
// console.log(...arrayFirst,...arraySecond);

// let[first,second,...rest]=['mina','rita','gita','hari'];  //rest must be in last
// console.log(...rest);


// ASSIGNMENT

let numberOfStudent=['manu', 'rita', 'sita', 'geeta'];
let deletedValue=numberOfStudent.pop();
console.log(listOfStudent);
console.log(deletedValue);

let removedValue = listOfStudent.shift();  
console.log(removedValue);

numberOfStudent.unshift('anu');  
console.log(numberOfStudent);

let subjectData=['account', 'microprocessor', 'maths', 'cprogramming', 'english'];
let popedData=subjectData.pop();
console.log(subjectData);
console.log(popedData);

let removedData=subjectData.shift();
console.log(removedData);

subjectData.unshift('science');
console.log(subjectData);

let numberArray=[5,10,15,20,25,30,35,40,45,50];
console.log(numberArray[numberArray.length -1]);
console.log(numberArray.indexOf(20));
console.log(numberArray.lastIndexOf(20));

numberArrayy[numberArray.indexOf(20)]=32;
console.log(numberArray);

let numberArraychunk=numberArray.slice(3,8);   
console.log(numberArraychunk);
console.log(numberArray);

console.log(numberArray.indexOf(50));

array.splice(10,40);   
console.log(numberArray);

let [first , , , fourth]=['mina', 'gita', 'sita', 'rita'];  
console.log(first);
console.log(fourth);


let [one,two,three, , , , ,eight ,nine ,ten ,]=['sita', 'gita','mina','hari','shyam','shreeya','anisha','diana','purnima','prashansha'];
console.log(one,two,three);
console.log(eight,nine,ten);

let numberArrayFirst=[4,6,8,10,12,14];
let numberArraySecond=[15,16,17,18,19,20];
let joinedArray=[...numberArrayFirst,...numberArraySecond];
console.log(joinedArray);
console.log(...numberArrayFirst,...numberArraySecond);

let[once,twice,...rest]=['one','two','three','four'];  
console.log(...rest);
