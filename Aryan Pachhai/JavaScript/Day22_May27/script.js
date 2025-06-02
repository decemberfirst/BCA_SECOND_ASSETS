console.log('JS has been loaded');

// let myPerson={
//     name:'Aryan',
//     from:'Butwal',
//     email:'aryanpachhai5@gmail.com',
//     phone:9867342233,
// };

// console.log(myPerson);

// console.log(Object.keys(myPerson));
// console.log(Object.values(myPerson));

// let myEntries=Object.entries(myPerson);
// for(let i=0;i<myEntries.length;i++){
//     let [keys, values] =myEntries[i];
//     console.log(myEntries[i]);          //Prints in array
//     console.log(`${keys} : ${values}`);
// }

//----------------PRINTS VALUES----------------------------

// console.log(`name:`,myPerson.name);
// console.log(`from:`,myPerson.from);
// console.log(`email:`,myPerson.email);
// console.log(`phone:`,myPerson.phone);

//----------------CHECKS SPECIFIC PROPERTY-------------------------

// console.log('name' in myPerson);
// console.log('from' in myPerson);
// console.log('email' in myPerson);
// console.log('phone' in myPerson);



//-----------------------------NESTED OBJECT/ARRAY-----------------------------


let person={
    name:{
        firstName:'Aryan',
        middleName:'KC',
        lastName:'Pachhai',
    },
    location:{
        permanent:'Butwal',
        temporary:'Manigram',
    },
    colors:['White','Black','Blue'],
    parential_info:{
        fatherName:'Bhakta Pachhai',
        motherName:'Sunita KC',
    },
}

let myEntry1=Object.entries(person.name);
for(let i=0;i<myEntry1.length;i++){
    let [keys, values] =myEntry1[i];       
    console.log(`${keys} : ${values}`);
}

let myEntry2=Object.entries(person.location);
for(let i=0;i<myEntry2.length;i++){
    let [keys, values] =myEntry2[i];       
    console.log(`${keys} : ${values}`);
}

let myEntry3=Object.entries(person.colors);
for(let i=0;i<myEntry3.length;i++){
    let [keys, values] =myEntry3[i];       
    console.log(`Favourite color : ${values}`);
}

let myEntry4=Object.entries(person.parential_info);
for(let i=0;i<myEntry4.length;i++){
    let [keys, values] =myEntry4[i];       
    console.log(`${keys} : ${values}`);
}

console.log(person.name);
console.log(person.location);
console.log(person.colors);
console.log(person.parential_info);