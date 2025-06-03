let myPerson={
    dob:2001,
    age(){
        console.log(2025 - this.dob);
    },
};
myPerson.age();

let personAge={
    dob:2005,
    age(){
        console.log(2025 - this.dob);
    },
};
personAge.age();

let myObject={
    firstName:'rita',
    lastName:'thapa',
    fullName(){
        console.log(this.firstName,this.lastName );
    },
};
myObject.fullName();
 
//WRITE ONCE USE ANYWHER (WOUA)

let nameObject={
    name:'hari parsad',
    printName(){
        console.log('my name is',this.name)
    },
};
nameObject.name='prashansha neupane';
nameObject.printName();

let area={
    length:100,
    breadth:200,
    print(){
        console.log('the area of rectangle is',this.length*this.breadth)
    },
};
area.length=10,
area.breadth=20;

area.length=0,
area.breadth=10,

area.print();

