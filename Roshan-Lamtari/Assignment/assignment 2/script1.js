// let myArraylist = ['ramesh', 'riya', 'hari', 'jay', 'kumar'];
// console.log(myArraylist[0]);
// console.log(myArraylist[1]);
// console.log(myArraylist[2]);
// console.log(myArraylist[3]);
// console.log(myArraylist[4]);

// for (let i = 0; i < myArraylist.length; i++) {
//     5
//     console.log(myArraylist[i]);
// }

// let myArray = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//     sum = sum + myArray[i];
//     // console.log(sum)

// }
// console.log(sum);

// .....................Even...............................

// let myEven=[100,101,102,103,104,105];

// let sum=0;
// for(let i=0;i < myEven.length;i++){
//     if (myEven[i]%2==0){

//    sum=sum + myEven[i];
//     }

// }
// console.log(sum);

// .......................Odd NUmber.............................. 

// let myOdd=[100,101,102,103,104,105];

// let sum=0;
// for(let i=0;i < myOdd.length;i++){
//     if (myOdd[i]%2==1){

//    sum=sum + myOdd[i];
//     }

// }
// console.log(sum);


// ......................greatest number..........................
// let myNuber=[499,100,1000,2,10];
// let sum=0;
// for(let i=0;i<myNuber.length;i++){
//     if(myNuber[i]>sum){
//         sum=myNuber[i];
        
//     }


// }
// console.log(sum);


// ......................lowest number.........................

// let myNumber=[499,100,1000,2,10];
// let sum=myNumber[0];
// let smallestsum=myNumber[0];
// for(let i=0;i<myNumber.length;i++){
//     if(myNumber[i]>sum){
//         sum=myNumber[i];
      
//     }
// }
// console.log(sum);
// for (let i=0;i<myNumber.length;i++){
//     if (myNumber[i]<smallestsum){
//         smallestsum=myNumber[i];
//     }
// }
//     console.log(smallestsum);

//     //ToDo:WAP TO REVERSE AN ARREY

   


//  ---------OBJECT----------------
// -------- we have to use curly bracket {} for object


// let person ={
//     name:'sushant',
//     age :19,
//     course:'BCA',
//     country:'nepal',
//     relationship:"married",
// }
// we can print object like this
// console.log(person.name)
// console.log(person.age)
// console.log(person.course)
// console.log(person.country)
// console.log(person.relationship)

// -----------or else we can print like this--------------
// console.log(person['name'])
// console.log(person['age'])
// console.log(person['course'])
// console.log(person['country'])
// console.log(person['relationship'])




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
// console.log(animal.animalName)
// console.log(animal.type)
// console.log(animal.color)
// console.log(animal.isMammal)
// console.log(animal.weight)
// console.log(animal['has fur'])

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

// let {name, address} = {
//     name : 'inosuke',
//     address: 'nepal'
// }

// console.log(name)
// console.log(address) 


// // 1. Create an object called person with properties: name, age, and city.
// let person ={
//     name:"aran",
//     age:19,
//     city:"japan",
// }

// // 2. Add a new property email to the person object.
// person.email ="aran@gmail.com"

// // 3. Change the value of the city property in the person object to "New York".
// person.city ="New york"
// // 4. Delete the age property from the person object.
// delete person.age
// // 5. Create an empty object called book.
// person.book ={};
// // 6. Add title: "The Alchemist" and author: "Paulo Coelho" to the book object.
// person.book.title = "The Alchemist";
// person.book.author = "Paulo Coelho";

// // 7. Access the name property from the person object using dot notation.
// console.log(person.name);
// // 8. Access the email property from the person object using bracket notation.
// console.log(person['email'])
// // 9. Check if the name property exists in the person object using the in operator.
// console.log("name" in person);






