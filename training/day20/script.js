// // ------------- SHALLOW COPY AND DEEP COPY ------------------

// let a = 10;
// let b = a;
// b = 30;
// console.log(a); // 10
// console.log(b); // 30

// let person = {
//   personName: 'Ram',
// };

// let anotherPerson = person;
// console.log(anotherPerson);

// person.personName = 'CHANGED_NAME';

// console.log(person); // {personName: "Ram"}
// console.log(anotherPerson); // {personName: "CHANGED_NAME"}

// // -------------------- PASS BY VALUE VS PASS BY REFERENCE ---------

// // 1) Pass by value

// let first = 10;
// let second = first; // second = 10

// first = 20;

// console.log(a);
// console.log(b);

// // ------------ FOR SPECIAL TYPES -------------

// let myFirstObject = {
//   personName: 'Ram',
// };

// let myCopyOfFirstObject = myFirstObject;

// myFirstObject.personName = 'Shyam';

// let dogObject = {
//   animalName: 'Dog',
//   color: 'Shade of black',
// };

// let anotherDog = dogObject; // pass by reference , pass by address

// dogObject.color = 'Red';

// console.log(anotherDog);
// console.log(dogObject);

// let firstName = 'Ram';
// let secondName = firstName; // Pass by value

// secondName = 'SHYAM';

// console.log(firstName); // Ram
// console.log(secondName); // SHYAM

// let myNestedObject = {
//     address:{
//         permanent:'Butwal',
//         temprorary:'Pokhara',
//     },
// };
// let myNestedObjectCopy = structuredClone(myNestedObject);
// myNestedObjectCopy.address.permanent = 'Kathmandu';

// console.log(myNestedObjectCopy);
// console.log(myNestedObject);


// let myNestedObject = {
//     student:{
//         name:'Mohit Sapkota',
//         class:'BCA 2nd sem',

//     },
// };
// let myNestedObjectCopy = structuredClone(myNestedObject);
// myNestedObjectCopy.student.name = 'Sabal Bhusal';
// console.log(myNestedObjectCopy);
// console.log(myNestedObject);

//reusable block of code to perform specific task

function add(x,y){
console.log(x+y);
}
add (2,3);

function subtract(x,y){
console.log(x-y);
}
subtract (2,3);

function multiply(x,y){
console.log(x*y);
}
multiply(2,3);

function divide(x,y){
console.log(x/y);
}
divide (2,3);


