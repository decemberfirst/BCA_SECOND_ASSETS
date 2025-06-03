console.log('JS has been loaded');


//-----------ARRAY----------------------

// let myValue=['Ryan','Ayan','Abhiyan','Abhinav'];

// //Prints value according to index (Starts from 0)
// console.log(myValue[0]);
// console.log(myValue[1]);
// console.log(myValue[2]);
// console.log(myValue[3]);

// //Shows length of array(Starts from 1)
// console.log(myValue.length);

// //Pushes content into array from back
// myValue.push('Ashok');
// console.log(myValue);
// console.log(myValue[4]);

// //Deletes value from back
// myValue.pop();
// console.log(myValue);

// //Pushes content into array from front
// myValue.unshift('Ali');
// console.log(myValue);
// console.log(myValue[0]);

// //Deletes value from front
// myValue.shift();
// console.log(myValue);



// let myNum=[1,2,3,4,5,6,7,8,9,6];

// //Shows index of value from left side
// console.log(myNum.indexOf(6));

// //Shows index of value from right side
// console.log(myNum.lastIndexOf(6));

// //Syntax: variable.slice(start , end-1); IMMUTABLE
// //Takes out needed value without disturbing original value 
// let slicedValue=myNum.slice(1,5);
// console.log(slicedValue);
// console.log(myNum);

// //Syntax: variable.splice(start , end); MUTABLE
// //Takes out needed value changing original value
// let splicedValue=myNum.splice(1,4);
// console.log(splicedValue);
// console.log(myNum);

// let [first,,,second]=['Ayan','Ryan','Abhi','Ashok'];

// //Array Destructuring (To skip unneeded value)
// console.log(first);
// console.log(second);

// let myFirstNum=[1,2,3,4,5];
// let mySecondNum=[6,7,8,9,10];

// //Array Spread(Adds multiple value)
// let addedNum=[...myFirstNum , ...mySecondNum];
// console.log(addedNum);

// //Rest Operator
// let [firstNum,secondNum,...rest]=[10,20,30,40,50];
// console.log(firstNum);
// console.log(secondNum);
// console.log(rest);    //Prints in array
// console.log(...rest); 



//-------------ITERATING OVER ARRAY--------------


//--------SUM OF NUMBER

// let myNum=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<myNum.length;i++){
//     sum+=myNum[i];
// }
// console.log(`The sum is ${sum}`);

//-------SUM OF EVEN NUMBERS

// let myNum=[10,11,12,13,14,15];
// let sum=0;
// for(let i=0;i<myNum.length;i++){
//     if(myNum[i]%2==0){
//         sum+=myNum[i];
//     }
// }
// console.log(`The sum of even numbers is ${sum}`);

//--------SUM OF ODD NUMBERS

// let myNum=[100,101,102,103,104,105];
// let sum=0;
// for(let i=0;i<myNum.length;i++){
//     if(myNum[i]%2==1){
//         sum+=myNum[i];
//     }
// }
// console.log(`The sum of odd numbers is ${sum}`);


//---------GREATEST FROM ARRAY

// let myNum=[100,1100,1,10,69];
// let greatest=0;
// for(let i=0;i<myNum.length;i++){
//     if(greatest<myNum[i]){
//         greatest=myNum[i];
//     }
// }
// console.log(`The greatest number is ${greatest}`);


//--------SMALLEST FROM ARRAY


// let myNum=[100,1100,1,10,69];
// let smallest=myNum[0];
// for(let i=0;i<myNum.length;i++){
//     if(smallest>myNum[i]){
//         smallest=myNum[i];
//     }
// }
// console.log(`The smallest number is ${smallest}`);


//--------REVERSE


// let myNum=[1,2,3,4,5];
// let reverse=[];
// for(let i=0;i<myNum.length;i++){
//     reverse.unshift(myNum[i]);
// }
// console.log(reverse);


//-------FIND LENGTH WITHOUT USING INBULIT LENGTH

// let myNum=[1,2,3,4,5];
// let length=0;
// let index=0;
// let array=myNum[index];
// while(array != undefined){
//     length++;
//     index++;
//     array=myNum[index];
// }
// console.log(length);



// let myNum=[4,3,1,5,2,6];

// //Sorting
// console.log(myNum.sort()); //IMMUTABLE

// //Include(Checking specific value)

// let myValue=4;
// if(myNum.includes(myValue)){
//     console.log(`${myValue} exists in array`);
// }
// else{
//     console.log(`${myValue} doesnot exists in array`);
// }



//--------------------OBJECT(SIMILIAR TO ARRAY BUT SPECIFIES CONTENT)----------------


// let myInfo={
//     name:'Aryan',
//     age:18,
//     course:'BCA',
//     address:'Butwal',
//     phone:9873426231,
// }
// console.log(myInfo);

// //---------PRINT FORMAT(Dot and Bracket Notation)

// //Dot Notation

// console.log(myInfo.name);
// console.log(myInfo.age);
// console.log(myInfo.course);
// console.log(myInfo.address);
// console.log(myInfo.phone);

// //Bracket Notation

// console.log(myInfo['name']);
// console.log(myInfo['age']);
// console.log(myInfo['course']);
// console.log(myInfo['address']);
// console.log(myInfo['phone']);

// let myInfo={
//     name:'Aryan',
//     course:'BCA',
// } 
// console.log(myInfo);

// //Adds property in object

// myInfo.address='Butwal';
// console.log(myInfo.address);
// console.log(myInfo);

// //Deletes property from object

// delete myInfo.address;
// console.log(myInfo.address);
// console.log(myInfo);

// // Object Destructuring

// let {name,course,age : myAge}={
//     name:'Aryan',
//     course:'BCA',
//     age:18,
// }
// console.log(name);
// console.log(course);
// console.log(myAge);


// //In operator

// let myInfo={
//     name:'Aryan',
//     age:18,
// }
// console.log('name' in myInfo);



// let myPerson={
//     name:'Ryan',
//     address:'Butwal',
//     phone:9866361234,
// }

// //Keys(variable of property in object)

// console.log(Object.keys(myPerson));

// //Values(value of property in object)

// console.log(Object.values(myPerson));

// //Entries(To show overall keys and values of object)
// let myEntry=Object.entries(myPerson);
// console.log(myEntry);
// for(let i=0;i<myEntry.length;i++){
//     let [keys,values]=myEntry[i];
//     console.log(myEntry[i]);
//     console.log(`${keys} : ${values}`);
// }


// //Nested Object//Array

// let myInfo={
//     name:{
//         firstName:'Aryan',
//         lastName:'Pachhai',
//     },
//     address:{
//         temporary:'Manigram',
//         permanent:'Butwal',
//     },
//     color:['White','Black','Blue'],
//     parent:{
//         motherName:'Sunita Pachhai',
//         fatherName:'Bhakta Pachhai',
//     },
// }

// console.log(myInfo);

// let myEntry1=Object.entries(myInfo.name);
// for(let i=0;i<myEntry1.length;i++){
//     let [keys,values]=myEntry1[i];
//     console.log(`${keys} : ${values}`);
// }

// let myEntry2=Object.entries(myInfo.address);
// for(let i=0;i<myEntry2.length;i++){
//     let [keys,values]=myEntry2[i];
//     console.log(`${keys} : ${values}`);
// }

// let myEntry3=Object.entries(myInfo.color);
// for(let i=0;i<myEntry3.length;i++){
//     let [keys,values]=myEntry3[i];
//     console.log(`${keys} : ${values}`);
// }

// let myEntry4=Object.entries(myInfo.parent);
// for(let i=0;i<myEntry4.length;i++){
//     let [keys,values]=myEntry4[i];
//     console.log(`${keys} : ${values}`);
// }


//'this' syntax


// let myPerson={
//     dob:2007,
//     age(){
//         console.log(2025-this.dob);  
//     },
// }
// myPerson.age();


// let myPerson={
//     dob:2007,
//     myAge(){
//         this.age=2025-this.dob;
//     },
// }
// myPerson.myAge();
// console.log(myPerson.age);

