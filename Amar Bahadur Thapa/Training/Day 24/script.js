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

// // 1) Pass by value (create a different address and take content)

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

// let anotherDog = dogObject; // pass by reference , pass by address [special data type: Array and object](takes address rather than content)

// dogObject.color = 'Red';

// console.log(anotherDog);
// console.log(dogObject);

// let firstName = 'Ram';
// let secondName = firstName; // Pass by value

// secondName = 'SHYAM';

// console.log(firstName); // Ram
// console.log(secondName); // SHYAM


//----------------------Shallow copy and Deep copy---------------------------------//

// let myNestedObject = {
//     address: {
//         permanent: 'Butwal',
//         temporary: 'Pokhara',
//     },
// };

// let myNestedObjectCopy = structuredClone(myNestedObject);  // (Deep copy) It works pass by value
// myNestedObjectCopy.address.permanent = 'Kathmandu';

// console.log(myNestedObjectCopy);
// console.log(myNestedObject);

// let myNestedObjectCopy = myNestedObject;  // (Shallow copy) It works pass by reference
// myNestedObjectCopy.address.permanent = 'Kathmandu';

// console.log(myNestedObjectCopy);
// console.log(myNestedObject);



// let myObject = {
//     productDetail: 'Laptop',
//     price: '$1400', 
// };

// let myCopyObject = myObject;
// myObject.price = '$1500';

// console.log(myObject);
// console.log(myCopyObject);

// let myObject = {
//     productDetail: 'Laptop',
//     price: '$1400', 
// };
// let myCopyObject = structuredClone(myObject);
// myObject.price = '$1500';
// console.log(myObject);
// console.log(myCopyObject);


// let personObject = {
//     name: {
//         firstName: 'Ram',
//         lastName: 'Thapa',
//     },
//     address: {
//         temporary: 'Kathmandu',
//         permanent: 'Butwal',
//     },
// };

// let personObjectCopy = structuredClone(personObject);
// personObjectCopy.name.firstName = 'Shyam';
// personObjectCopy.name.lastName = 'Bhattrai';
// personObjectCopy.address.temporary = 'Palpa';
// personObjectCopy.address.permanent = 'Butwal';

// let personObjectCopy1 = structuredClone(personObject);
// personObjectCopy1.name.firstName = 'Hari';
// personObjectCopy1.name.lastName = 'Basnet';
// personObjectCopy1.address.temporary = 'Pokhara';
// personObjectCopy1.address.permanent = 'Kathmandu';

// let personObjectCopy2 = structuredClone(personObject);
// personObjectCopy2.name.firstName = 'Sita';
// personObjectCopy2.name.lastName = 'Chhetri';
// personObjectCopy2.address.temporary = 'Kathmandu';
// personObjectCopy2.address.permanent = 'Pokhara';


// console.log(personObject);
// console.log(personObjectCopy);
// console.log(personObjectCopy1);
// console.log(personObjectCopy2);


//-------------------------------Function---------------------------------------//

// reuseable block of code  to perform special task or action.

// function add(x, y){
//     console.log(x + y);  //declear
// }

// add(2, 2); // call

// function sub(x, y){
//     console.log(x - y); 
// };

// sub(10, 5);

// function multiply(x, y){
//     console.log(x * y); 
// };

// multiply(10, 5);


// function divide(x, y){
//     console.log(x / y); 
// };

// divide(10, 5);

// function modulus(x, y){
//     console.log(x % y); 
// };

// modulus(10, 5);




