let myPerson = {
    dob: 2004,
    // age(){
    //     console.log(2025-this.dob);
    //     this.myAge = 2025-this.dob
    // },
    calculateAge(){
        this.age = 2025 -this.dob;
    },
}

myPerson.calculateAge(); 
console.log(myPerson);

//this keyword

let myObject = {
    name:"Agraj",
    lastName: "Adhikari",
    myname(){
        console.log(this.fullname = (`My name is, ${this.name}  ${this.lastName}`));
    },
}
myObject.myname();
console.log(myObject);



let anotherObject = {
    name:"Agraj Adhikari",
    printName(){
       console.log(this.name);
    }
}
 
anotherObject.name= "Agraj Adhikari2"
anotherObject.printName();

let Area  = {
    length: 100,
    breadth: 200,
    CalculateArea(){
        console.log(this.area = this.length * this.breadth);
    }
}

Area.CalculateArea();

Area.length = 10
Area.breadth = 20
Area.CalculateArea();

Area.length = 0
Area.breadth = 10
Area.CalculateArea();


let personalDetails = {
    Name: "Agraj",
    lastName: "Adhikari",
    Age: 21,
    Address: "Nayamill"
}

console.log(personalDetails);


 
 
 




