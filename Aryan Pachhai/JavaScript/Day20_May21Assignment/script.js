console.log('JS has been loaded');

//-------------------1)PRINT ALL NUMBERS OF ARRAY-----------------------------------

// let userNum=[1,2,3,4,5];
// for(let i=0;i<userNum.length;i++){
//     console.log(userNum[i]);
// }


//-------------------2)FIND LENGTH OF ARRAY WITHOUT IN-BUILT FUNCTION---------------------------

// let userNum=[6,7,8,9,10];
// let length=0;
// let index=0;
// let element = userNum[index];
// while(element!=undefined){
//     length++;
//     index++;
//     element=userNum[index];
// }
// console.log(length);    


//-------------------3)INSERT AN ELEMENT IN SPECIFIC POSITION IN ARRAY-------------------------------------

// let userValue=['Hi','Hello','Hola'];
// let frontInsert= userValue.unshift('Namaste');
// console.log(userValue);
// let backInsert=userValue.push('Konichiwa');
// console.log(userValue);


//-------------------4)DELETE AN ELEMENT FROM AN ARRAY----------

// let myValue=['Ram','Hari','Shyam']
// let frontDelete=myValue.shift();
// console.log(myValue);
// let backDelete=myValue.pop();
// console.log(myValue);   


//-------------------5)SUM OF ALL ELEMENTS----------------------

// let myNum=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<myNum.length;i++){
//     sum+=myNum[i];
// }
// console.log(`The sum of all elements is ${sum}`);


//-------------------6)AVERAGE OF ALL ELEMENTS-------------------

// let userNum=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<userNum.length;i++){
//     sum+=userNum[i];
// }
// let average=sum/2;
// console.log(`The average of all elements is ${average}`);


//-------------------7)Maximum element---------------------------

// let userValue=[342,3412,4643,5,13];
// let maximum=0;
// for(let i=0;i<userValue.length;i++){
//     if(maximum<userValue[i]){
//         maximum=userValue[i];
//     }
// }
// console.log(`The maximum element is ${maximum}`);


//-------------------8)Minimum element---------------------------

// let userNum=[241,2,8932,92,21];
// let minimum=userNum[0];
// for(let i=0;i<userNum.length;i++){
//     if(minimum>userNum[i]){
//         minimum=userNum[i];
//     }
// }
// console.log(`The minimum element is ${minimum}`);


//-------------------9)Reverse element---------------------------

// let myInput=[1,2,3,4,5];
// let revArray=[];
// for(let i=0;i<myInput.length;i++){
//     revArray.unshift(myInput[i]);
// }
// console.log(revArray);


//-------------------10)COUNT NUMBER OF +VE AND -VE ELEMENTS-------------

// let userNum=[1,2,3,4,-3,-2,-1,-69,-12];
// let positiveNum=0;
// let negativeNum=0;
// for(let i=0;i<userNum.length;i++){
//     if(userNum[i]>0){
//         positiveNum++;
//     }
//     else if(userNum[i]<0){
//         negativeNum++;
//     }
// }
// console.log(`The number of +ve elements is ${positiveNum}`);
// console.log(`The number of -ve elements is ${negativeNum}`);


//-------------------11)COUNT EVEN AND ODD NUMBER---------------------

// let myInput=[1,2,3,4,5,6,7];
// let evenNum=0;
// let oddNum=0;
// for(let i=0;i<myInput.length;i++){
//     if(myInput[i]%2==0){
//         evenNum++;
//     }
//     else if(myInput[i]%2==1){
//         oddNum++;
//     }
// }
// console.log(`The number of even number is ${evenNum}`);
// console.log(`The number of odd number is ${oddNum}`);


//-------------------12)FIND 2ND LARGEST ELEMENT---------------------

// let userValue=[213,21,434,99,2];
// let largestNum=0;
// let secondLargestNum=0;
// for(let i=0;i<userValue.length;i++){
//     if(userValue[i]>largestNum){
//         secondLargestNum=largestNum;
//         largestNum=userValue[i];
//     }
//     else if(userValue[i]>secondLargestNum && userValue[i]<largestNum){
//         secondLargestNum=userValue[i];
//     }
// }
// console.log(secondLargestNum);



//-------------------13)FIND 2ND SMALLEST NUMBER---------------------

// let userNum=[212,2,243,54,1];
// let smallestNum=0;
// let secondSmallestNum=userNum[0];
// for(let i=0;i<userNum.length;i++){
//     if(userNum[i]<smallestNum){
//         secondSmallestNum=smallestNum;
//         smallestNum=userNum[i];
//     }
//     else if(userNum[i]<secondSmallestNum && userNum[i]>smallestNum){
//         secondSmallestNum=userNum[i];
//     }
// }
// console.log(secondSmallestNum);


//-------------------14)COPY ALL ELEMENT FROM ONE ARRAY TO ANOTHER--------


// let myInput=[1,2,3,4,5];
// let copyArray=[];
// for(let i=0;i<myInput.length;i++){
//     copyArray.push(myInput[i]);
// }
// console.log(copyArray);


//-------------------15)CHECK IF ARRAY CONTAIN SPECIFIC ELEMENT------------------

// let myInput=['Ram','Shyam','Hari','Gita'];
// let checkArray=[];
// let empty=(checkArray=[]);
// for(let i=0;i<myInput.length;i++){
//     if(myInput[i]=='Gita'){
//        checkArray=myInput[i];
//     }
// }
// if(empty==1){
//     console.log('The specific element isnot present');
// }
// else{
// console.log(`The specific element ${checkArray} is present`);
// }


//-------------------18)INDEX OF FIRST OCCURRENCE----------------

// let myNum=[1,2,3,4,5];
// let firstIndex=myNum.indexOf(1);
// console.log(firstIndex);

//-------------------19)INDEX OF LAST OCCURRENCE------------------

// let myValue=[1,2,3,4,5];
// let lastIndex=myNum.indexOf(5);
// console.log(lastIndex);


//-------------------20)MERGE TWO ARRAY ----------------------


// let firstArray=[1,2,3,4,5];
// let secondArray=[6,7,8,9,10];
// let thirdArray=[...firstArray,...secondArray];
// console.log(thirdArray);


//-------------------21)SWAP FIRST AND LAST ELEMENT OF ARRAY-------------------------

// let userValue=[1,2,3,4,5];
// console.log(userValue);
// let firstArray=userValue.shift();
// let lastArray=userValue.pop();
// let firstSwap=userValue.push(firstArray);
// let lastSwap=userValue.unshift(lastArray);
// console.log(userValue);


//--------------------22)SHIFT TO LEFT BY ONE POSITION----------

// let userNum=[1,2,3,4,5];
// console.log(userNum);
// let shiftArray=userNum.shift();
// userNum.push(shiftArray);
// console.log(userNum);


//---------------------23)SHIFT TO RIGHT BY ONE POSITION---------------------------

// let userNum=[1,2,3,4,5];
// console.log(userNum);
// let shiftArray=userNum.pop();
// userNum.unshift(shiftArray);
// console.log(userNum);


//--------------------------28)SUM OF ELEMENTS AT EVEN INDICES--------------------

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


//--------------------------29)SUM OF ELEMENTS AT ODD INDICES--------------------


// let myNum=[1000, 1001, 1002, 1003, 1004, 1005];
// let sum=0;
// for(let i=0;i<myNum.length;i++){
//     let rem=myNum[i]%2;
//     if(rem==1){
//         sum+=myNum[i];
//     }
//     else{

//     }
// }
// console.log(sum);