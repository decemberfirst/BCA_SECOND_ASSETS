console.log('JS has been loaded');

// FIND LENGTH OF ARRAY WITHOUT USING .length

let myArray = [1,2,3,4,5,6,7,8,9];
let length=0;
let index=0;
let element =myArray[index];
while(element != undefined){
     length++;
     index++
     element=myArray[index];
}
console.log(length);

