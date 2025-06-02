// let myStudentList = ['Aashish', 'Bishal', 'Suraj'];

// myStudentList.unshift('added on first');
// //  add on first place
// console.log(myStudentList);

// let removedValue = myStudentList.shift();
// // remove from first
// console.log(removedValue);

// let poppedValue =myStudentList.pop(); 
// // remove feom last 
// console.log(myStudentList);



// let myStudentList = ['Alex', 'Bishal', 'Chintan', 'Agraj', 'Sushant'];

// myStudentList.unshift('Alex');
// console.log(myStudentList);

// myStudentList.shift('Alex');
// console.log(myStudentList);

// myStudentList.pop();
// console.log(myStudentList);


// let myArray = [1,2,3,4,5,6,7,8,9,10];
// console.log(myArray[[myArray.length -1]]);
// console.log(myArray.indexOf(5));
// console.log(myArray.lastIndexOf(5));


// myArray[myArray.indexOf(6)] =16;
// console.log(myArray);


// myArrayChunk = myArray.slice(2,5);
// console.log(myArrayChunk);


// console.log(myArray);


// myArray.splice(0, 3);
// console.log(myArray);

//--------------------Array Destructuring--------------


// let [first, , third] = ['ram ', 'Shyam', 'hari', 'sita'];
// console.log(first);
// console.log(third);




// let [first,,,, fifth,sixth,seventh,eighth,nineth,tenth]=['ram', ' sita', 'hari','bishnu','aashish', 'shyam','agraj','chintan', 'sushant','safal']
/* console.log(first);
console.log(fifth);
console.log(sixth);
console.log(seventh);
console.log(eighth);
console.log(nineth);
console.log(tenth); */
// console.log(first, fifth,sixth,seventh,eighth,nineth,tenth);













/////////////// day17 ----------------------------------


let firstArry =[1,2,3,4,5];
let secondArry = [6,7,8,9,10];

let joinedArray = [...firstArry,...secondArry];
console.log(
    joinedArray,...firstArry);

 

    let [ first ,,,, fourth,fifth,sixth,seventh , eighth]= ['bishal','sita', 'bishnu','hement', 'ghass' , 'ram', 'agraj',' sushant' , 'Alex']
    console.log(first);
        console.log(fifth);
            console.log(sixth);
                console.log(seventh);
    
                    console.log(eighth);
                   

let myStudent = ['Alex','Bishal','Niraj','Suraj','Binay'];


myStudent.unshift('Alex');
console.log(myStudent);


myStudent.shift('Bishal');
console.log(myStudent);

myStudent.pop('');
console.log(myStudent);







let myArray =[1,2,3,4,5,6,7,8,9,10];
console.log(myArray[myArray.length-1]);
console.log(myArray.indexOf(5));
console.log(myArray.lastIndexOf(5));

myArray = [myArray.indexOf(6)] =16;
console.log(myArray);

myArrayChuck =myArray.slice(2,5);
console.log(myArrayChuck);
console.log(myArray);


myArray.splice(0,3);
console.log(myArray);
















//--------------------------------------Day18---------------------------------------

let myArraylist = [1,2,3,4,5];
let sum =0;
for(let i=0; i<myArraylist.length;i++){
sum=sum+myArray[i];
}

console.log(sum);



//Calculate the sum of even number only -------------------
let myList =[100,101,102,103,104,105];
let add=0;

for(let i=0; i<myList.length; i++){
    if(myList[i]%2==0){
        add=add+myList[1];
    }
}

console.log(add);


//----------------find the greatest number from the array ------------

let myNumber =[499,100,1000,2,10];
let greatest =0;
for (let i=0; i<myNumber.length; i++);
if(myNumber[i]>greatest){
    greatest=myNumber[0];
}
console.log(greatest);


//-------------way to the revers------------

let mymobile = [1,2,3,4,5,];
let revers = [];

for (let index=0; index<mymobile.length; index++){
    revers.unshift(mymobile[index]);
}
console.log(revers);









    












