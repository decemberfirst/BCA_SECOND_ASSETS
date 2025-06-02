
// use strict 

// raw this points to window object
// (){} this points to current object


// this  is like a blank space to fillup later

let Name = {
    date: 2006,
    age() {
        console.log(2025 - this.date)
    },
};
Name.age();


let myObject={
    firstName:'sesha',
    lastname:'shrama',
    Name(){
        console.log('my name is ', this.firstName ,this.lastname)
    }
}
myObject.Name();




let latter={
    first:'shivangi',
    later(){
        console.log('best one is', this.first)
},
}

// latter.first='bani';
latter.later();


let calculate={
    length:100,
    breath:200,
    area(){
        console.log('area is ',this.length * this.breath)
    },
}

calculate.length=10;
calculate.breath=20;
//  calculate.area();

calculate.length=0;
calculate.breath=10;
calculate.area();




let detail={
    fullName:'shreeya',
    age:19,
    contact:9865320147,
    highschool:'tilottama',
    college:'nepathya',
    email:'@gamil.com',
}

console.log(detail['fullName']);
console.log(detail['age']);
console.log(detail.contact);
console.log(detail.highschool);
console.log(detail.college);
console.log(detail.email);