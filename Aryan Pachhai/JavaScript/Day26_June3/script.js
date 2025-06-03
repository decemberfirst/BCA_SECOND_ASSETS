console.log('JS has been loaded');


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

// // 1) Pass by value [Normal data type](Creates a different address and takes content )

// let first = 10;
// let second = first; // second = 10

// first = 20;

// console.log(a);
// console.log(b);


// let firstName = 'Ram';
// let secondName = firstName; // Pass by value

// secondName = 'SHYAM';

// console.log(firstName); // Ram
// console.log(secondName); // SHYAM

// // 2) Pass by reference / address [Special data type; Array, Object](Takes address as same rather than content)

// let myFirstObject = {
//   personName: 'Ram',
// };

// let myCopyOfFirstObject = myFirstObject;

// myFirstObject.personName = 'Shyam';

// let dogObject = {
//   animalName: 'Dog',
//   color: 'Shade of black',
// };

// let anotherDog = dogObject; 

// dogObject.color = 'Red';

// console.log(anotherDog);
// console.log(dogObject);


// // ------------- SHALLOW COPY AND DEEP COPY ------------------


// let myNestedObject={
//     address:{
//         permanent:'Butwal',
//         temporary:'Pokhara',
//     },
// };

// let myNestedObjectCopy= structuredClone(myNestedObject);  //(Deep copy) Works as pass by value
// myNestedObjectCopy.address.permanent='Kathmandu';

// console.log(myNestedObjectCopy);
// console.log(myNestedObject);

// let myNestedObjectCopy= myNestedObject;                   //(Shallow copy) Works as pass by reference
// myNestedObjectCopy.address.permanent='Kathmandu';

// console.log(myNestedObjectCopy);
// console.log(myNestedObject);



// let num1=69;
// let num2=num1;

//  num1=36;

// console.log(num1);
// console.log(num2);


// let myObject={
//     name:{
//         firstName:'Aryan',
//         lastName:'Pachhai',
//     },
// };

// let myObjectDups = myObject;

// console.log(myObject);
// console.log(myObjectDups);

// let myObjectCopy = structuredClone(myObject);
// myObjectCopy.name.firstName = 'Sun';

// console.log(myObject);
// console.log(myObjectCopy);




// let myPerson={
//     name:{
//         firstName:'Hari',
//         lastName:'Thapa',
//     },
//     address:{
//         permanent:'Bhairawaha',
//         temporary:'Butwal',
//     },
// }

// let myPerson1 =structuredClone(myPerson);
// myPerson1.name.firstName='Shyam';
// myPerson1.name.lastName='Poudel';
// myPerson1.address.permanent='Pokhara';
// myPerson1.address.temporary='Jhapa';


// let myPerson2 =structuredClone(myPerson);
// myPerson2.name.firstName='Sita';
// myPerson2.name.lastName='Magar';
// myPerson2.address.permanent='Kathamandu';
// myPerson2.address.temporary='Manigram';

// let myPerson3 =structuredClone(myPerson);
// myPerson3.name.firstName='Gita';
// myPerson3.name.lastName='Maharjan';
// myPerson3.address.permanent='Dholpa';
// myPerson3.address.temporary='Gulmi';


// console.log(myPerson);
// console.log(myPerson1);
// console.log(myPerson2);
// console.log(myPerson3);



//---------------------------------------FUNCTION----------------------------------------------
// Reuseable block of code to perform special task or action


//----Decalre--------
function sub(x,y) {
    console.log(x-y);
}

//--------Call--------
sub(6,9);


function add(x,y) {
    console.log(x+y);
}
add(6,9);


function multiply(x,y) {
    console.log(x*y);
}
multiply(1,5);


function div(x,y){
    console.log(x/y);
}
div(5,5);


function mod(x,y) {
    console.log(x%y);
}
mod(5,6);