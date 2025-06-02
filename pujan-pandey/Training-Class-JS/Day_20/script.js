// let myPerson={
//     dob:2001,
//     calculateAge(){
//         // console.log(2025-this.dob)
//         this.age=2025-this.dob;
//     },

// }
// // /this keyword
// myPerson.calculateAge();
// console.log(myPerson);


//Qn 
// let myObject={
//     name:'Shyam',
//     lastName:'Palli',
//     fullname(){
// this.fullName=this.name +" "+ this.lastName;
//     }
// }
// myObject.fullname();
// console.log(myObject)





//Qn
// let obj={
//     name:'BuduDev',
//     printName(){
// console.log('His name is', this.name)
//     }
// }
// obj.printName();
// obj.name='BuduDev Badri';
// console.log(obj);



//qn
// let area={
//     length:100,
//     breadth:200,
//     printArea(){
//         console.log(`areaOFRectangle=${this.length * this.breadth}`);
//         this.totalArea=this.length*this.breadth;
//     }
    
// }
// area.printArea();
// console.log(area)
// area.length=10;
// area.breadth=20;
// area.printArea();
// console.log(area)
// area.length=0;
// area.breadth=10;
// area.printArea();
// console.log(area);


//qn
let personal={
    fName:'ram',
    lName:'poudel',
    contact:9800,
    address:'Nepal',
    printName(){
        console.log('Name:',this.fName);
    },
  printAddress(){
console.log('Address:',this.address)
}
}
personal.printAddress();
personal.printName();