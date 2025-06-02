// let myData=['Raman','Shyam','Gyan','James'];
// console.log(myData.unshift("Jiman"));
// console.log(myData);
// console.log(myData.shift());
// console.log(myData);
// console.log(myData.push("Jiman"));
// console.log(myData);
// console.log(myData.pop("Jiman"));
// console.log(myData);





// let myArray=[0,1,2,3,4,5,6,5,8,5,10];
// console.log(myArray.length)
// console.log(myArray[myArray.length-1]);
// console.log(myArray.indexOf(5));//first 5
// console.log(myArray.lastIndexOf(5));//last 5
// let spliceOfArray=myArray.splice(0,6);
// console.log(myArray)
// console.log(myArray[myArray.lastIndexOf(5)]=23);
// console.log(myArray);
// console.log(myArray.lastIndexOf(5))
// myArray[myArray.indexOf(6)]=16;
// console.log(myArray);


// // ..............slice..............
// let myArrayChunk=myArray.slice(2,5);
// //start,end-1 , immutable
// console.log(myArray);


//----------------splice-----------------
// myArray.splice(0,3);//Mutable
// console.log(myArray)





//-----------------Array -----------Destructring-----------------
// let[first,second,third,,,,seventh,eighth,ninth,tenth]=['ram','shyam','hari','krishna','madan','jeewan','man','bahadur','sham','rama'];
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(seventh);
// console.log(eighth);
// console.log(ninth);
// console.log(tenth);

//-----------------------Array Spread(...firstArray,...secondArray)-------------------------
// let firstArray=[1,2,3,4,5];
// let secondArray=[6,7,8,9,10];
// let joinedArray=[...firstArray,...secondArray];//combine the array
// console.log(joinedArray);
// console.log(...firstArray);//output 1 2 3 4 5


// console.log(rest)//output of rest is array
// let [first,second,third,...rest]=['hari','shyam','ram','sham','jin'];
// console.log(first)//output assigning variable is string


// let [first,second,,,,,seventh,eighth]=['hari','krishna','bashanta','shayam','gyan','sulav','saimon','aman'];
// console.log(first,second,seventh,eighth);


// let firstArray=[1,2,3,4,5,6];
// let secondArray=[7,8,9,10,11,12];
// let joinArray=[...secondArray,...firstArray];
// console.log(joinArray);




// let [first,second,...rest]=['hari','krishna','bashanta','shayam','gyan','sulav','saimon','aman'];
// console.log(rest);


// let old=[12,34,45,67,98,10,76,88,76,12];
// console.log(old.slice(1,5))
// console.log(old)
//  console.log(old.splice(1,5));
//  console.log(old)
//  console.log(old);
//  (old[old.indexOf(34)]=13)
//  console.log(old);