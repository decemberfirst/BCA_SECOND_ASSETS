// Symbol

const MySymbol=Symbol("abc");
console.log(MySymbol)// used to generate unique key(in object)

console.log(typeof MySymbol);


//null
const MyNull=null;
console.log(MyNull);
console.log(typeof MyNull)//(Biggest Bug In JS World);


//type conversions
let myNumber="10";
let mySecondNumber=10;
// + is an operator polymorphism (poly=many) (morph=form)
let ConvertedNumber=Number(myNumber);
sum=ConvertedNumber+mySecondNumber;
console.log(ConvertedNumber,sum);

// Boolean
const myBoolean=Boolean();  //False if the string is empty else true
console.log(myBoolean);//non zero numbers are true & empty is false

let myString=String(0);
console.log(myString);
console.log(true +1);



//Type coercion= it is automatically converted by js 
console.log("100"*20);


//Type casting
console.log(Number("100")-20);


//addition
console.log("100"+3);



