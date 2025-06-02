//  SORTING

// key pair is used in object
// let toFind = 10;
// let num = [5,10,15,20,25,30];
// console.log(num.includes(50));

// if(num.includes(toFind)){
//     console.log(`${toFind} exists in the array`);
// } else {
//     console.log(`${toFind} doesnot exists in the array`);
// }


// ------------------------OBJECT---------------------
// syntax :
// let variableName={
    // key :value,
    // key :value;
// };
// console.log(variableName.key);


// let personData={
//     name:"manisha",
//     age:19,
//     grade:"12",
//     faculty:"science",
//     phone:9715416368,
// };
// console.log(personData.name);
// console.log(personData.age);
// console.log(personData.grade);
// console.log(personData.faculty);
// console.log(personData.phone);

// let anotherData={   
//     'first name':'anu',
//     'last name':'thapa',
// }; 
// console.log(anotherData['first name']);
// console.log(anotherData['last name']);


// let thirdData= {
//     name:'prashansha',
//     address:'butwal',
//     rollno:17,
// };
// console.log(thirdData);
// thirdData.name='samikshya';

// SYNTAX: DELETE VARIABLE.PROPERTYNAME
// delete thirdData.name;
// console.log(thirdData);

// let animalObject={
//     name:'lion',
//     type:'carniverse',
//     color:'yellow',
//     isMammal:'yes',
//     weight:200,
//     'has fur':'yes'
// };
// console.log(animalObject.name);
// console.log(animalObject.type);
// console.log(animalObject.color);
// console.log(animalObject.weight);
// console.log(animalObject['has fur']);
// console.log(animalObject);
// animalObject.weight=100;
// delete animalObject.color;
// console.log(animalObject);

// let personObject={
//     name:'shreeya',
//     dob:2006,
// };
// let age = 2025 - personObject.dob;
// console.log(age);
// personObject.age=age;

//-----------------------OBJECT DESTRUCTURING-------------------------

// -----------------------another name means alisas-------------------
// let{
//     address:myaddress,
//     firstName
// }={
//     address:'manigram',
//     firstName:'mina',
// };
// console.log(myaddress);
// console.log(firstName);


// ------------Assignment (02/12)--------
let personsObject={
    name:'rita',
    age: 20,
    city:'nepal',
};
console.log(personsObject.name);
console.log(personsObject.age); 
console.log(personsObject.city);    //1

console.log(personsObject.name);   //7

let anotherObject={
    email:'ritathapa0@gmail.com'
};
console.log(anotherObject);   //2

console.log(anotherObject['email']);   //8


personsObject.city='new york';
console.log(personsObject);   // 3

delete personsObject.age;
console.log(personsObject);   // 4

// console.log(personsObject.book);    (5)

let book={

};
console.log(book);   // 5

bookObject={
    'Title':'The Alchemist',
    'Author':'Paulo Coelho',
};
console.log(bookObject);   //6

console.log('name' in personsObject);   //9