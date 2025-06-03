// SORTING
// let toFind=5;
// let a=[5,1,5,6,3,1];
// console.log(a.includes(500));// TRUE / FALSE OUTPUT
// // PUT THIS IN IF ELSE AND SHOW MEANINGFUL MSG NOW:
// if(a.includes(toFind)){
//     // put your statement there
//     console.log(`${toFind} exists in the array`);
// }else{
// // put your statement here
// console.log(`${toFind} doesnot exist in the array`);
// }

// //-----------------OBJECTS----------------

// let person={
//     name: 'bhawana pandey',
//     age: 19,
//     address: 'manigram',
//     faculty: BCA
// };

// // ACCESSING OBJECT
// TWO SYNTAX

// console.log(person['name']);
// console.log(person['age']);
// console.log(person['address']);
// console.log(person['faculty']);

// console.log(person.name);
// console.log(person.age);
// console.log(person.address);
// console.log(person.faculty);

// let myAnotherObject = {
//     ' first name ':'bhawana',
//     ' last name ' :'pandey',
// };
// console.log(myAnotherObject.last name)
// console.log(myAnotherObject.first name) // if there is space between keys this syntax doesnot work
 
// console.log(myAnotherObject['first name']);
//  console.log(myAnotherObject['last name']);

//  let myThirdObject = {
//     name: 'kirti',
//     address: 'janakinagar',
//     contact: 9764328651,
//  };

//  console.log(myThirdObject);
//  myThirdObject.name ='bhawana'; // update property name -> bhawana
//  console.log(myThirdObject);

 // to delete property
 // syntax delete variable .property name

//  delete myThirdObject.name; // delete name property
//  console.log(myThirdObject);

 // TO DO: WAP TO INPUT NANIMAL NAME, TYPE ,COLOR,ISMAMAL,AND WEIGHT
 // READ ALL THE VALUES
 // UPDATE WEIGHT TO 100
 // DELTE KEY COLOR

//  let myanimalBio ={
//     name: 'dog',
//     color: 'brown',
//     type: 'domestic',
//     weight : 50,
//     mammal: ' domsetic mammal ',
//  }
//  console.log(myanimalBio['name']);
//  console.log(myanimalBio['color']);
//  console.log(myanimalBio['type']);
//  console.log(myanimalBio['weight']);
//  console.log(myanimalBio['mammal']);

//  myanimalBio.weight='100',
//  console.log(myanimalBio);

//  delete myanimalBio.color;
//  console.log(myanimalBio);

 // CREATE PERSON OBJECT
 // INPUT NAME,DOY
 // USE DOB TO CALCULATE AGE
 // ADD CALCULATED AGE TO THE OBJECT

//  let myThirdObject ={
//     name: 'kirti neupane',
//     DOY: 2006,
//  };
//  let a= 2025- myThirdObject.DOY;
//  myThirdObject.age=a; // same syntax for update and insert
//  console.log(myThirdObject);
 
 //--------------OBJECT DESTRUCTING------------

//  let [ad, second,third]=[10,20,30,40,50];
//  let{
//     address:myaddress, 
//     name,
//     doesnotExist,
//  }= {
//     // order dosenot matter
//     name:'bhawana',
//     address:'manigram',
//  };
//  console.log(myaddress);
//  console.log(name);
//  console.log(doesnotExist);
  
 // ASSIGNMENT

 // 1) create an object called person with properties: name,age,and city.
let personObject ={
    name: 'Bipika',
    age: 15,
    city: 'palpa'
 }
 console.log(personObject['name']);
 console.log(personObject['age']);
 console.log(personObject['city']);

personObject.email='bhawana321pandey@gmail.com';
console.log(personObject.email);

personObject.city='kathmandu';
console.log(personObject.city);

delete personObject.age;
console.log(personObject.age);

let book ={};//array-index anushar chalxa object-key anushar chalxa
console.log(book);
book["The alchemist"]="Bhawana";
book.author="paulo cheolho";
console.log(book);

console.log(personObject.name);
console.log(personObject["email"]);
console.log('name'in personObject);



