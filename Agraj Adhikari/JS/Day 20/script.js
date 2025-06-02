/* //OBJECT

let Player = {
    Name: 'Steve Smith',
    Age: 34,
    country: 'Australia',
    Status: 'Batsman'
};

// Player.Name = 'David';
 
console.log(Player.Name);
console.log(Player.Age);
console.log(Player.country);
console.log(Player.Status);

console.log(Player);

let Girl = {
    "first name": 'Diana',
    "last name": 'Puware',
}

// Girl['first name'] = 'Shreya';

console.log(Girl["first name"]);
console.log(Girl["last name"]) ;

//to delete property
//synatx: delete variable.propertyname

let Animal = {
    name: 'Dog',
    type: 'Bull',
    color: 'Black',
    isMamamal: true,
    weight: 25
};

console.log(Animal);
console.log(Animal.name);
console.log(Animal.type);
console.log(Animal.color);
console.log(Animal.isMamamal);
console.log(Animal.weight);

Animal.weight = 100;
console.log(Animal.weight);
delete Animal.color;

Animal["Has fur"] = false;

console.log(Animal);

let Person = {
    Name: 'Agraj',
    DOB: 2004,
};

let Age = 2025 - Person.DOB;

Person.Age = Age;


console.log(Person.Age);

//OBJECT DESTRUZCZTURING

let {name: myname, old, color}={
    name: "Agraj",
    old: 20,
    color: "Green",
};

console.log(myname); */

//1
let Person = {
    Name: 'Agraj',
    Age: 20,
    city: "Sydney"
};

console.log(Person);

//2
Person.email = "agrajadhikari@";

console.log(Person);

//3
Person.city = "Melbourne";
console.log(Person);

//4
delete Person.Age;
console.log(Person);

//5
let book = {};
// let book = Object.create({})

//6

book["The Alchemist"] = "Agraj";
book.author = "paulo Coelho";

console.log(book);

//7 
console.log(Person.Name);

//8
console.log(Person["email"]);

//9
console.log("Name" in Person);






 



