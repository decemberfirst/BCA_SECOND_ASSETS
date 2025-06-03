let myName={
    name:'diana',
    from:'butwal',
    email:'diana@gmail.com',
    phone:980000000,
};
// //todo print each keys and values for the given object myName
console.log(myName.name);
console.log(myName.from);
console.log(myName.email);
console.log(myName.phone);


console.log(Object.values(myName));
console.log(Object.keys(myName));
console.log(Object.entries(myName));

let myName1=Object.entries(myName);
for(let i=0;i<myName1.length;i++){
    let[key,value]=myName1[i];
    console.log(`${key}:${value}`);
}





//todo check weather particular key exists or not
console.log('name'in myName);
console.log('from'in myName);
console.log('email'in myName);
console.log('phone'in myName);





//nested obkects/nested arrays------------------->mostly used in real world
//create nested objects
//create object name person
//break name property into firdtname,middlename,lastname
//add location,break down into permanent and temporery
//add colors,store 3 favourite color of user in list
//add parential_info property,break down into father and mother name
let person = {
    name: {
        firstname: 'Diana',
        middlename: 'puware',
        lastname: 'magar'
    },
    location: {
        permanent: 'Butwal',
        temporary: 'Kathmandu'
    },
    colors: ['Blue', 'yellow', 'white'],
    parential_info: {
        father: 'Dipendra puware',
        mother: 'Deepa puware'
    }
};

console.log(person);
console.log('First Name:', person.name.firstname);
console.log('Middle Name:', person.name.middlename);
console.log('Last Name:', person.name.lastname);
console.log('Permanent Address:', person.location.permanent);
console.log('Temporary Address:', person.location.temporary);
console.log('Favorite Colors:', person.colors);
console.log('Father\'s Name:', person.parential_info.father);
console.log('Mother\'s Name:', person.parential_info.mother);



