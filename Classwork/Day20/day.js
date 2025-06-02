let myPerson ={
dob:2001,
age(){
    console.log(2025-this.dob);
},
    };
 myPerson.age()


 let myNumber={
dob:2005,
age:20,
calculateAge() {
    this.age =2005 -this.dob;

},
 };

 // now write function / menthod to print name like this:my name is Rohan Tiwari

 let myObject={
  firstName:'Aashish',
  lastName :'Bhandari',
  FullName(){
    console.log(this.firstName+this.lastName);
  },
    }
 
    myObject.FullName();



    let myAnotherObject ={
        name: 'Aashish',
        printName(){
            console.log('my name is '+this.name)
        }
    }

    myAnotherObject.name='Alex Bhandari';
    myAnotherObject.printName();




    // wap to Calculate area
    // first declare length and breath as 100,200
    // print Area 
    // chage length and breath to 10 and 20
// print area 
// change lenth and breath to 0 to 10
// print area


let rectangle ={
    length:'100',
    breath:'200',
    Area(){
        console.log(this.length+this.breath);

    }
}
rectangle.length=100;
rectangle.breath=200;

rectangle.length=0;
rectangle.breath=10;




let person1={
    name:'Aashish Bhandari',
    age:'21',
    address:'Butwal',
}



// git checkout -b yourname










































































































































