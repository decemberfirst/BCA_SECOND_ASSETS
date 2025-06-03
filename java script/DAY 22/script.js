//  let myPerson ={
//     dob:2004,
//     age (){
//        console.log(2025- this.dob);
//     }
//  };
//  myPerson.age();
// //  console.log(myPerson.age());

// let myName ={
//     name:"chintan",
//     lastName:' kharal',
//     calculateName(){
//         console.log("my name is", this.name + this.lastName);
        
//     }
// };
// myName.calculateName();
// console.log(myName)

// let myAotherobject ={
//     name:'buddhi bahadur',
//     printName(){

//         console.log('my name is' + this .name)
//     }
// }
// myAotherobject.name()= ' buddhi sunar';
// myAotherobject.printName();


let area ={
    length:100,
    breadth:200,
     printArea(){
        console.log(this.length * this.breadth)
     }
}
area.printArea();
area.length=10
area.breadth=20
area.printArea();

area.length =0
area.breadth=10
area.printArea();


let personalDetail ={
    name:
}