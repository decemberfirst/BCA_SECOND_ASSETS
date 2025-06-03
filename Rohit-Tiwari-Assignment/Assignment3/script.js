// Shallow Copy ...... and Deep Copy....

// ------------- SHALLOW COPY AND DEEP COPY ------------------

let a = 10;
let b = a;
b = 30;
console.log(a); // 10
console.log(b); // 30

let person = {
  personName: "Ram",
};

let anotherPerson = person;
console.log(anotherPerson);

person.personName = "CHANGED_NAME";

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
  personName: "Ram",
};

let myCopyOfFirstObject = myFirstObject;

myFirstObject.personName = "Shyam";

let dogObject = {
  animalName: "Dog",
  color: "Shade of black",
};

let anotherDog = dogObject; // pass by reference , pass by address

dogObject.color = "Red";

console.log(anotherDog);
console.log(dogObject);

let firstName = "Ram";
let secondName = firstName; // Pass by value

secondName = "SHYAM";

console.log(firstName); // Ram
console.log(secondName); // SHYAM

let myNestedObject = { address: { permanent: "Butwal", temporary: "Pokhara" } };

let myNestedObjectCopy = structuredClone(myNestedObject);
myNestedObjectCopy.address.permanent = "Kathmandu";

console.log(myNestedObjectCopy);
console.log(myNestedObject);

//wap on your own demonstrate pass by value and pass by reference
//finally use structuredalone to one of your program.

// to do
// Create ONE PERSON OBJECT WITH NAME - FIRST NAME, LAST NAME, ADDRESS - TEMPORARY AND PERMANENT ADDRESS....
// CHANGE NAME OF ALL VARIABLES
// MAKE SURE THAT CHANGE IN ONE OBJECT PROPERTY DOES NOT REFLECT TO ANOTHER

let personDetails = {
  firstName: "Rohit",
  lastName: "Tiwari",
  address: {
    temporary: "Syangjya",
    permanent: "Devdaha",
  },
};

let personDetails1 = structuredClone(personDetails);
let personDetails2 = structuredClone(personDetails1);
personDetails2.firstName = "Virat";
console.log(personDetails);
console.log(personDetails1);
console.log(personDetails2);

// Function.....

// DETERMINISTIC, NON-DETERMINISTIC

// ...................SYNTAX..............

function myEquation(x) {
  console.log(x + 2);
}

myEquation(2);

function add(x, y) {
  console.log(x + y);
}

add(3, 5);

// Resusable block of code to perform specific tasks or actions.

function sub(a, b) {
  console.log(a - b);
}
