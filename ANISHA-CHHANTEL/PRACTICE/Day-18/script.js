// 


// let listOfArray = ['gita','sita','nita','niru','rita'];
// for(let i=0;i<listOfArray.length;i++){
//     console.log(listOfArray[i]);
// }

// let myNumber=['2','4','6','8','10'];
// let sum=0;
// for (let i=0; i<myNumber.length;i++){
//     sum=sum+myNumber[i];
// }
// console.log(sum); 


//  Calculate sum of even numbers only
// let numberList=[50,51,52,53,54,55];
// let even=0;
// for(let index=0; index<numberList.length; index++ ){
//     if(numberList[index]%2==0){
//     even=even+numberList[index];
//     }
// }
// console.log(even);


// let myArray=[499,100,1000,500,205];
// let sum=0;
// for(let index=0; index<myArray.length; index++){
//     if(myArray[index]%2!=0){
//         sum=sum+myArray[index];
//     }
// }
// console.log(sum);


// let myArray=[499,100,1000,500,205];
// let greatest=0;
// let smallest=myArray[0];
// for(let i=0; i<myArray.length;i++){
//     if(myArray[i]>greatest){
//         greatest=myArray[i];
//     if(myArray[i]<smallest){
//         smallest=myArray[i];
//     }
// }
// }
// console.log(greatest);
// console.log(smallest);



// WAP TO REVERSE AN ARRAY
let numberArray=[100,102,103,104,105];
let reverse=[];
for(let i=0;i<numberArray.length;i++){
    reverse.unshift(numberArray[i]);
}
console.log(reverse);