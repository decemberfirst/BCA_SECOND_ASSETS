// ------------- SHALLOW COPY AND DEEP COPY ------------------

let a = 10;
let b = a;
b = 30;
console.log(a); // 10
console.log(b); // 30

let person = {
  personName: 'Ram',
};

let anotherPerson = person;
console.log(anotherPerson);

person.personName = 'CHANGED_NAME';

console.log(person); // {personName: "Ram"}
console.log(anotherPerson); // {personName: "CHANGED_NAME"}

// -------------------- PASS BY VALUE VS PASS BY REFERENCE ---------

// 1) Pass by value

let first = 10;
let second = first; // second = 10

first = 20;

console.log(a);
console.log(b);

// ------------ FOR SPECIAL TYPES -------------

let myFirstObject = {
  personName: 'Ram',
};

let myCopyOfFirstObject = myFirstObject;

myFirstObject.personName = 'Shyam';

let dogObject = {
  animalName: 'Dog',
  color: 'Shade of black',
};

let anotherDog = dogObject; // pass by reference , pass by address

dogObject.color = 'Red';

console.log(anotherDog);
console.log(dogObject);

let firstName = 'Ram';
let secondName = firstName; // Pass by value

secondName = 'SHYAM';

console.log(firstName); // Ram
console.log(secondName); // SHYAM


//  ---------------------
let myNestedObject ={
    address:{
        permanent:"butwal",
        temporary:"pokhara",
    },
};

let myNestedObjectCopy =structuredClone(myNestedObject); //now it works as pass by value
myNestedObjectCopy.address.permanent ="kathmandu";

// let myNestedObjectCopy = myNestedObject;

// mynestedObject.address.permanent ="kathmandu";

console.log(myNestedObjectCopy);
console.log(myNestedObject)


// TODO: 
// WAP ON YOUR OWN TO DEMONSTRATE PASS BY VALUE AND PASS BY REFERENCE
// FINALLY USE structuredClone to onr of your program

// TODO:
// CREATE ONE PERSON OBJECT WITH NAME -> FIRST NAME, LAST NAME, ADDRESS -> TEMPORARY AND PERMANENT ADDRESS,
// COPY PERSON OBJECT TO THREE DIFFERENT VARIABLES
// MAKE SURE THAT CHANGE IN ONE OBJECT PROPERTY DOESNOT REFLECT TO ANOTHER ONE


let personObj = {
  name: {
    firstName: "eren",
    lastName: "yeager"
  },
  address: {
    permanent: "japan",
    temporary: "nepal"
  }
};

// Deep copy using structuredClone
let personCopy1 = structuredClone(personObj);
let personCopy2 = structuredClone(personObj);
let personCopy3 = structuredClone(personObj);

// Change properties in each copy
personCopy1.name.firstName = "mikasa";
personCopy2.address.temporary = "paradise island";
personCopy3.name.lastName = "ackerman";

// Print all objects to show changes do not affect others
console.log("Original:", personObj);
console.log("Copy 1:", personCopy1);
console.log("Copy 2:", personCopy2);
console.log("Copy 3:", personCopy3);