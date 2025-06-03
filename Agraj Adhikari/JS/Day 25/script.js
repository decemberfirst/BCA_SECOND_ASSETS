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

console.log(myFirstObject);
console.log(myCopyOfFirstObject);

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


let myNestedObject = {
    address: {
        permanent : "Palpa",
        temporary: "Butwal"
    }
};

// let myNestedObjectCopy = myNestedObject;
let myNestedObjectCopy = structuredClone(myNestedObject);
myNestedObject.address.permanent = "Kathmandu";

console.log(myNestedObject);
console.log(myNestedObjectCopy);


//WAP TO DEMONSTRATE PASS BY VALUE AND PASS BY REFERENCE 

//PASS BY VALUE
let name = "AgrajAdhikari";
let fName = name;

fName = "Agraj"

console.log(name);
console.log(fName);

//PASS BY REFERENCE 

let studentName = {
    fName: "Agraj",
    sName: "Adhikari",
}

// let copyofStudentName = studentName;

// copyofStudentName.sName = "Smith";
// copyofStudentName.fName = "Steve";

// console.log(studentName);
// console.log(copyofStudentName);




//Finally use structuredclone to one of your program

let copyofStudentName = structuredClone(studentName);
copyofStudentName.sName = "Smith";
copyofStudentName.fName = "Steve";

console.log(studentName);
console.log(copyofStudentName);


//CREATE ONE PERSONOBJECT WITH NAME -> FirstName, LastName 
// ADDRESS -> Temporary And Permanent Address
//Copy person object to three different variables
// Make sure that changes in one object property doesnot Reflect to another one

let personObject = {
    Name : {
    fiName : "Shreeya",
    SeName : "Pun"
    },
    Address : {
        temporary : "Australia",
        permanent : "Nepal"
    }
};

let firstVariable = structuredClone(personObject);
firstVariable.Name.fiName =  "Diana";
firstVariable.Name.SeName =  "Puware";

let secondVariable = structuredClone(personObject);
secondVariable.Name.fiName =  "Chintan";
secondVariable.Name.SeName =  "Kharel";

let thirdVariable = structuredClone(personObject);
thirdVariable.Name.fiName =  "Agraj";
thirdVariable.Name.SeName =  "Adhikari";

console.log(personObject);
console.log(firstVariable);
console.log(secondVariable);
console.log(thirdVariable);


//Function
//reusable block of code to perform specific task/action

function add(x, y){
    console.log("sum",x + y);
}
add(2,2);
add(4,4);
add(10,30);


function sub(x,y){
    console.log("Sub",x-y);
}
sub(10,2);
sub(100,50);
sub(2025,2004);

function mul(x,y){
    console.log("Mul",x*y);
}
mul(10,2);
mul(100,50);
mul(20,20);

function div(x,y){
    console.log("div",x/y);
}
div(10,2);
div(100,50);
div(2025,25);

function mod(x,y){
    console.log("mod",x%y);
}
mod(10,3);
mod(100,50);
mod(2025,26);




