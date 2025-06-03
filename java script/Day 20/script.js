// let a = [1, 2, 3, 1, 4, 5];
// let toFind = 2;

// if (a.includes(toFind)) {
//     console.log(`${toFind} exists in the array`);

// } else {
//     console.log(`${toFind} doesnot exist in the array`);
// }

// let stuDent =
// {
//     name: "chintan",
//     age: 21,
//     country: "nepal",
//     Number: 9804466537,
// }
// console.log(stuDent.name);
// console.log(stuDent.age);
// console.log(stuDent.country);
// console.log(stuDent.Number);


// //  if there  is space between keys this synatax doesnot work  console.log(stuDent.firstr.name);
// stuDent.name = "ram";
// console.log(stuDent);

// //delete property

// delete stuDent.name;
// console.log(stuDent);

// //WAP TO INPUT ANIMAl NAME, TYPE, COLOR,ISMAMMAL, AND WEIGHT

// let animalType = {
//     name: "dog",
//     type: " pet",
//     color: "white",
//     ismamal: true,
//     weight: 14,


// };
// console.log(animalType.name);
// console.log(animalType.type);
// console.log(animalType.color);
// console.log(animalType.ismamal);
// console.log(animalType.weight);
// animalType["has fur"] = false;

//  animalType.weight =100;
//  console.log(animalType);

//   delete animalType.color;
//   console.log(animalType);




//   // create person object




//   let person = {
//     name: "hari",
//     DOB:2005,
//   }
//   let 
//   age = 2025- person.DOB;
// person.age =  age;
// console .log( person.age);




// let { address: myaddress,
//     name,
//     doesnotexist
// } = {
//      name:'chintan', 
//      address:'nayamil',
// };
// console.log(myaddress);



//  Create an object called person with properties: name, age, and city.
let person = {
    name: 'chintan',
    age: 20,
    city: "rupandehi",
}
console.log(person.name);
console.log(person.age);
console.log(person.city);

//. Add a new property email to the person object.



person.email = "chintankharal@gmail.com",
    console.log(person.email);

//    Change the value of the city property in the person object to "New York".


person.city = "new york";
console.log(person.city);

// Delete the age property from the person object.


delete person.age;

// Create an empty object called book.



let book = {

}

//. Add title: "The Alchemist" and author: "Paulo Coelho" to the book object.

book["the alchemist"] = "chintan kharal";
book.author = " paulo hrber";
console.log(book.author);

//Access the name property from the person object using dot notation.

console.log(person.name);

// Access the email property from the person object using bracket notation.


console.log(person["age"]);

// Check if the name property exists in the person object using the in operator.

console.log("name" in person);
