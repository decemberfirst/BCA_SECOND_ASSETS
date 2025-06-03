// let animal = {
//     name : 'dog',
//     type : "pitbul",
//     from : 'phokhara',
//     color : "pink",
//     age : 10,
//     isMamal : 'mamal',
//     hasFur : "fur",
//     weight:'50kg',

// };
// console.log(animal['name']);
// console.log(animal['type']);
// console.log(animal['from']);
// console.log(animal['color']);
// console.log(animal['age']);
// console.log(animal['isMamal']);
// console.log(animal['hasFur']);
// animal["weight"] = '100kg';
// console.log(animal['weight']);
// delete animal.color;
// console.log(animal['color']);

// ..............person Object................



// let person = {
//     name:'sangit',
//     dob : 2003,
//     year : 2025,
//     age : this.year-this.dob,
// };
// console.log(person['age']);
// console.log(Object.keys(person));
// console.log(Object.entries(person));
// person['age'] = 2025-2004;
// person['age'] = person['year']-person['dob'];
// console.log(person['age']);



// ...................Entries.....................

// let person = {
//     name : 'sangit',
//     lastName : 'pandey',
//     age : '20',
//     color : 'brown',
//     type : 'aryan',
// }


// console.log(Object.entries(person))




//  let myEntries =Object.entries(person);
// for (let i =0; i < myEntries.length; i++){
//     let[key , value] = myEntries[i];  // name: something
//     console.log(`${key}: ${value}`);
    
// }


// let person={
//     name:{
//         firstName : 'sangit',
//         lastName : 'pandey',
//     },
//     address:{
// temporary : 'singaha',
// permanent : 'singaha',

//     },
//     favColor:{
//         color:['black','white','gray'],
// },
// parentName:{

//     father: 'KrishnaPandey',
//     mother: 'BimalaPandey',
// },


// }

// let myEntries = Object.entries(person)
// for(let i=0;i<myEntries.length;i++){
// }
// console.log(`${person.name.firstName}: ${person.name.lastName}`);
// console.log(`${person.address.temporary}: ${person.address.permanent}`);
// console.log(`${person.favColor.color[0]}: ${person.favColor.color[1]}`);
// console.log(`${person.parentName.father}: ${person.parentName.mother}`);