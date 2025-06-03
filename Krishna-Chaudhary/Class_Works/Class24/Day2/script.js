// ..................Shallow Copy And Deep Copy...........................



// //................pass by reference in array or object only (Actual copy of address in the memory) i.e Deep Copy
let doggy = {
    dog : "german shepard",
    color : "Reddish"
};
let flappyBird = doggy;
flappyBird.color = "Brown";
console.log(doggy);
console.log(flappyBird);




// //.................Pass by value in normal datatypes like string number

let a=10;
let b =a;
a=50;
console.log(a);
console.log(b); /// its  copy the actual value not the address of the variable






//// In Nested Object 

let nestedObject = {
    Name:{
        "first Name ": "abc",
        "last Name" : "gujji"
    }
};


let nestedObjectcoppy = structuredClone(nestedObject); // structuredclone don't perform Deep copy
nestedObject.Name['first Name '] = "bcd";

console.log(nestedObject);
console.log(nestedObjectcoppy);


//create  one person nexted object with all the data 
let onePerson = {
    Name : {
        "first name" : 'buddhi',
        "Last name " : "raj"
    },
    Address : {
        permanent : "Bhaluhi",
        temporary : "Anywhere"
    },
};
let ppt = structuredClone(onePerson);
let ddt =structuredClone(onePerson);
let cct = structuredClone(onePerson);
onePerson.Address.temporary = "Nowhere";
console.log(onePerson);
console.log(ppt);
console.log(ddt);
console.log(cct);