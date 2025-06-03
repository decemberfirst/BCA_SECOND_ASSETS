// data types in javascript

//string
//number, integer, float
//bignit
//boolean
//null( no value)
//symbol
//undefined( no value)

// collection of valuable information (partially true)
// raw facts and figures
// data is anything that can be recorded and captured
//data + some processing= information
// data type-> describes what type of data we are recording
// 1) string
// string is combination of characters, wrapped by single or double QUOTES (' ' OR " ")
console.log("test ");
let myname='Deebas';
let number='9867145';
console.log(typeof myname);
console.log(typeof number);
 
//typeof ( give what type of value varaible holds)
// console.log(myname + number );
// number(float ->1.2, 1.3)
// integer-> 100, 200
let number2 =10.1;//(more generic data type -. number)
console.log(typeof number2);

console.log(0.1+0.2); // (0.3)
//0 0 0 //0 (IEEE-754 FLOATING POINT REPRESENTATION)//;
//1 1 1 (2^n-1)

let mynumber = 9007199254740991;// max
let myminimumnumber =-9007199254740991;// min
console.log(myminimumnumber);

let mybinary = 0b1010;
console.log(mybinary);

let myoctal = 0o100;
console.log(myoctal);

let myhex = 0xf;
console.log(myhex);

// 3) big int

let mybigint = 1000n;
 let myanotherbigint = 10000n;
console.log(myanotherbigint);

//console.log(10n/10) error (both type must be same)

//boolean

//either yes or no, true or false, 0 or 1

let ismarried= true;
let canvote= false;// more when we get into if else...

let myvariable;

console.log(myvariable);// returns undefined value is not defined




