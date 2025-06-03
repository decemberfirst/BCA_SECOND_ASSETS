const MySymbol = Symbol("abc");
console.log(MySymbol);// used to generate unique key (in object), will cover later
console.log(typeof MySymbol);

//Null
let MyNullVariable = null;
console.log(MyNullVariable);
console.log(typeof MyNullVariable);//biggest bug in js


//Type Conversions
let number = '30';
console.log(number + 30); //+ is an operator polymorphism (poly-> many)(morph -> form)

let Mynumber22 = 30;
console.log(Mynumber22 + 30);

let MyConvertedNumber = Number(number);
console.log(MyConvertedNumber +40);


// Some Tweaks (edge cases) While converting to number type
let HariRam = Number("sangit");
console.log(HariRam);
let HariRam1 = Number(123);
console.log(HariRam1);
let HariRam2 = Number(true);
console.log(HariRam2);
let HariRam3 = Number(false);
console.log(HariRam3);


console.log(HariRam);

let HariRam4 = Number(true / false);
console.log(HariRam4);


let boolean9090 = Boolean("");//empty string throws false cause there is no value less than 1
console.log(boolean9090);

let boolean9000 = Boolean("false");//it will throw true cause it has more than zero
console.log(boolean9000);

let boolean69 = Boolean(111111);
console.log(boolean69);//shows true non zero value are true and zero value = false


let Valueofstring = String("123🤪");//it will display output as string but not for BigInt
console.log(Valueofstring);

console.log(true + 1);

console.log("100"-10);

console.log("100" * 36);

console.log("200" + 100);


let name = "sangit";
console.log(name);
console.log("Sangit..");
let UserName;
UserName = prompt("Enter Name");
console.log(UserName);