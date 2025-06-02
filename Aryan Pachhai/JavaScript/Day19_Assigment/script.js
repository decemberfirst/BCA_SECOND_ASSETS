console.log('JS has been loaded');

//-------------------------POP------------------

// let userInput=['Ram','Hari','Gita'];
// userInput.pop();
// console.log(userInput);


//-----------------Shift--------------------------

// let userInput=['Gita','Sita','Rita'];
// userInput.shift();
// console.log(userInput);


//-------------------Unshift------------------------

// let userInput=['Helllo','Hi','Hola'];
// userInput.unshift('Namaste');
// console.log(userInput);


//---------------------------Index/Lastindex---------------------

// let userValue=[1,2,3,4,5,6,7,8,9,10,5];
// console.log(userValue.indexOf(5));
// console.log(userValue.lastIndexOf(5));


//---------------------------Slice/Splice----------------------------

// let userValue=[1,2,3,4,5,6,7,8,9,10];
// console.log(userValue.splice(1,5));

// let userValue=[1,2,3,4,5,6,7,8,9,10];
// console.log(userValue.slice(1,5));


//-----------------------------Array Destructuring----------------------------

// let [value1,value2,,,value3,value4]=['A','B','C','D','E','F'];
// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4);


//---------------------------------Array Spread-----------------------------

// let firstArray=[1,2,3,4,5];
// let secondArray=[6,7,8,9,10];
// let addedArray=[...firstArray,...secondArray];
// console.log(addedArray);
// console.log(...addedArray);


//-------------------------------------Rest Operator--------------------------

// let [a,b,...rest]=[10,20,30,40,50];
// console.log(a);
// console.log(b);
// console.log(rest);
// console.log(...rest);


//--------------------------------Iterating over array-------------------------------------

//......................SUM OF NUMBER----------------------

// let userNum=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<userNum.length;i++){
//     sum+=userNum[i];
// }
// console.log(sum);


//-------------------SUM OF EVEN NUMBER-----------------------------

// let userNum=[10,11,12,13,14,15];
// let sum=0;
// for(let i=0;i<userNum.length;i++){
//     if(userNum[i]%2==0){
//         sum+=userNum[i];
//     }
// }
// console.log(sum);


//-----------------SUM OF ODD NUMBER---------------------------

// let userNum=[10,11,12,13,14,15];
// let sum=0;
// for(let i=0;i<userNum.length;i++){
//     if(userNum[i]%2==1){
//         sum+=userNum[i];
//     }
// }
// console.log(sum);


//----------------------GREATEST / SMALLEST----------------------

// let userNum=[214,532,5464,2,50];
// let greatest=0;
// let smallest=userNum[0];
// for(let i=0;i<userNum.length;i++){
//     if(greatest<userNum[i]){
//         greatest=userNum[i];
//     }
//     if(smallest>userNum[i]){
//         smallest=userNum[i];
//     }
// }
// console.log(greatest);
// console.log(smallest);


//-------------------------------REVERSE ARRAY------------------

// let userInput=[1,2,3,4,5];
// let revNum=[];
// for(let i=0;i<userInput.length;i++){
//     revNum.unshift(userInput[i]);
// }
// console.log(revNum);
// console.log(...revNum);