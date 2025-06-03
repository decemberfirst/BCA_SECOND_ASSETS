let myObject ={
    name: 'Bhawana',
    from: 'name',
    email: 'bhawana321@gmail.com',
    phone: '9765243851',
}; 
// print each keys and values for the given object 
console.log(myObject.name);
console.log(myObject.from);
console.log(myObject.email);
console.log(myObject.phone);

let keys = Object.keys(myObject);
let values= Object.values(myObject); 

let myEntries = Object.entries(myObject);
for(let i =0; i<myEntries. length; i++){
    let [key,value]=myEntries[i];
    // console.log(`${key} : ${value}`);
}
// check whether particular key exists or not
console.log('name' in myObject );
console.log('from' in myObject );
console.log('email' in myObject );
console.log('phone' in myObject);


// NESTED OBJECTS / NESTED ARRAYS----------->MOSTLY USED IN REAL WORLD
// JSON --> JAVASCRIPT OBJECT NOTATION
  
// create nested object
// create object name person
// break name property into firstname, middlename, lastname
// add location, break down into permanent and temporary
// add colors, store 3 favourite color of user in list
// add parential_info property, break down into father and mother name 
// at last print all of them

let myintro={
    name:{
    firstname:'Bhawana',
    middlename:'shri',
    lastname:'pandey',
    },
    address:{
        permanent:'manigram',
        Temporary:'syanja',
    },
    color:['purple', 'yellow', 'black'],
    perential_info:{
        mother:'kala pandey',
        father:'damodar pandey',
    }
};
console.log(myintro);
console.log('firstname:',myintro.name.firstname);
console.log('middlename:',myintro.name.middlename);
console.log('lastname:',myintro.name.lastname);
console.log('parmanent address:',myintro.location.permanent);
console.log('temporary address:',myintro.location.Temporary);
console.log('favourite colors:',myintro.location.colors);
console.log('mother/s name:',myintro.parential_info.mother);
console.log('father/s address:',myintro.parential_info.father);



