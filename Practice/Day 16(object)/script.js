// ---------OBJECT----------------
// -------- we have to use curly bracket {} for object


// let person ={
//     name:'sushant',
//     age :19,
//     course:'BCA',
//     country:'nepal',
//     relationship:"married",
// }
// we can print object like this ------->DOT NOTATION
// console.log(person.name)
// console.log(person.age)
// console.log(person.course)
// console.log(person.country)
// console.log(person.relationship)

// -----------or else we can print like this-----> BRACKET NOTATION
// console.log(person['name'])
// console.log(person['age'])
// console.log(person['course'])
// console.log(person['country'])
// console.log(person['relationship'])



// 
// let anotherObject ={
//     'first name': 'sushant',
//     'relationship status': 'married',
// }
// console.log(anotherObject['first name']);
// console.log(anotherObject['relationship status'])


// ----- to change value of the variable in the object
// let myThirdObject ={
//     name: 'sushant',
//     address:'USA',
//     netWorth:99999999,
// }
// console.log(myThirdObject)
// myThirdObject.address ='Nepal';
// console.log(myThirdObject)

// ----------------to delete the value from the object------------
// delete myThirdObject.netWorth;
// console.log(myThirdObject)


// ---------PRACTICE QUESTION
// CREATE AN ANIMAL OBJECT
// INPUT ANIMAL NAME, TYPE, COLOR, isMammal, WEIGHT, HAS FUR,
// READ ALL THE VALUES
// UPDATE WEIGHT TO 100
// DELETE KEY COLOR


// let animal ={
//        animalName:"rhino",
//        type:"omnivourus",
//        color:'grey',
//        isMammal:true,
//        weight:189,
//        'has fur':false,
// }

// animal.weight = 100
// delete animal.color
// console.log(animal)

// CREATE PERSON OBJECT
// INPUT NAME, DOB
// USE DOB TO CALCULATE AGE
// ADD CALCULATED AGE TO THE OBJECT

// let person ={
//     name: "eren",
//     DOB:2007
// }

// let age = 2025 - person.DOB;
// person.age = age;
// console.log(person)



// -------------------OBJECT DESTRUCTRING--------------

// let {name, address, collage} = {
//     name : 'inosuke',
//     address: 'nepal',
//     collage: 'nepathya'
// }

// console.log(name)
// console.log(address)
// console.log(collage)


// PRACTICE QUESTION
// PRINT EACH KEYS AND VALUES FOR THE GIVEN OBJECT
// MY PERSONS
// CHECK WHETHER PARTICUALAR KEY EXISTS OR NOT

// KEY VALUES AND ENTRIES
// let myPersons ={
//     name:"eren",
//     age:20,
//     country:"japan",
// }
// console.log(Object.values(myPersons))// values
// console.log(Object.keys(myPersons))// keys

// let myEntries =Object.entries(myPersons);

// for(let i=0; i< myEntries.length; i++){
//     let [key, value] = myEntries[i];
//     console.log(`${key}: ${value}`)
// }



// PRACTICE QUESTIONS
// CREATE NESTED OBJECTS
// CREATE OBJECT NAME PERSON
// BREAK NAME PROPERTY INTO FIRSTNAME, MIDDLENAME, LASTNAME
// ADD LOCATION, BREAK DOWN INTO PERMANENT AND TEMPORARY
// ADD COLORS, STORE 3 FAVOURITE COLOR OF USER IN LIST
// ADD PARENTIAL_INFO PROPERTY, BREAK DOWN INTO FATHER AND MOTHER NAME
// AT LAST PRINT ALL OF THEM


// let person ={
//     name:{
//         firstname:"eren",
//         middlename:"titan",
//         lastname:"yeager"
//     },
//      location:{
//             permanent:"japan",
//             temporary:"usa"
//         },
//     color:["black","golden","red"],
//     parential_info:{
//         father_name:'jeak yeager',
//         mother_name:'yeda yeager',
//     }
// }
// console.log(person)



// CREATE NESTED OBJECT
// let person = {
//     name: {
//         firstName: "John",
//         middleName: "Michael",
//         lastName: "Doe"
//     },
//     location: {
//         permanent: "123 Main St, Hometown, USA",
//         temporary: "456 Elm St, Worktown, USA"
//     },
//     colors: ["Blue", "Green", "Black"], // 3 favourite colors
//     parental_info: {
//         father: "Robert Doe",
//         mother: "Susan Doe"
//     }
// };

// // PRINT ALL OF THEM
// console.log("Person Object:");
// console.log("Full Name:", person.name.firstName, person.name.middleName, person.name.lastName);
// console.log("Permanent Address:", person.location.permanent);
// console.log("Temporary Address:", person.location.temporary);
// console.log("Favourite Colors:", person.colors.join(", "));
// console.log("Father's Name:", person.parental_info.father);
// console.log("Mother's Name:", person.parental_info.mother);













