console.log('JS has been loaded');

// let myPerson={
//     dob:2001,
//     age() {
//         console.log(2025-this.dob);
//     },
// };
// myPerson.age();

// let myStd={
//     dob:2001,
//     myAage() {
//         this.myStdAge=2025-this.dob
//     }
// };
// myStd.myAage();
// console.log(myStd.myStdAge);


// let myObject={
//     name:'Aryan ',
//     lastName:'Pachhai',
//     myValue() {
//         this.myFullName= this.name+this.lastName;
//         console.log(this.myFullName);
//     }
// }
// myObject.myValue();


// let anotherObject={
//     name:'Aryan Pachhai',
//     printName(){
//         console.log(`My name is ${this.name}`);
//     },
// }
// anotherObject.name='Aryan KC';
// anotherObject.printName();


// let myValue={
//     length:100,
//     breadth:200,
//     calculateArea(){
//         this.area=this.length*this.breadth;
//         console.log(`Area = ${this.area}`);
//     },
// } 

// myValue.calculateArea();

// myValue.length=10;
// myValue.breadth=20;
// myValue.calculateArea();

// myValue.length=0;
// myValue.breadth=10;
// myValue.calculateArea();



let myInfo={
    name:'Aryan Pachhai',
    age:18,
    email:'aryanpachhai5@gmail.com',
    phone:9867431111,
    address:'Butwal',
}

console.log(myInfo);

console.log(`Name :${myInfo.name}`);
console.log(`Age :${myInfo.age}`);
console.log(`Email :${myInfo.email}`);
console.log(`Phone :${myInfo.phone}`);
console.log(`Address :${myInfo.address}`);



let myEntries=Object.entries(myInfo);
for(let i=0;i<myEntries.length;i++){
    let [keys, values] =myEntries[i];          
    console.log(`${keys} : ${values}`);
}


