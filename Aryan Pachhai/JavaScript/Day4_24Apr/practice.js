console.log('JavaScript has been loaded');

// DATA TYPE

// 1) STRING : Combination of character wrapped inside single/double quotes('' or "")

let myString='Aryan';
console.log(myString);
console.log(typeof myString);

// 2) NUMBER (INTEGER,FLOAT) ; During showing data type both will show number

let myNumber=20;
console.log(myNumber);
console.log(typeof myNumber); //Integer ; Part before decimal

let myfloat=9.22;
console.log(myfloat);
console.log(typeof myfloat); //Float ; Part after decimal

let MaxNumber= 9007199254740991; //Max number (2^53)
console.log(MaxNumber);
let MinNumber= -9007199254740991; //Min number (-2^53)
console.log(MinNumber);

let binary= 0b1011; //Binary number
console.log(binary);
let octal= 0o43; //Octal number
console.log(octal);
let hexadecimal=0xD; //Hexadecimal number
console.log(hexadecimal);

// 3) BIGINT (Big Integer); But won't show the decimal value
// While adding integer and bigint(10n + 10) , error occurs

let bigInt= 1000000000000n;
console.log(bigInt);
console.log(typeof bigInt);

// 4) UNDEFINED

let myvalue;
console.log(myvalue);
console.log(typeof myvalue);

// 5) SYMBOL

let mySymbol=Symbol('abs');
console.log(mySymbol);
console.log(typeof mySymbol);


// 6) NULL; Biggest bug in JS world

let myNullValue=null;
console.log(myNullValue);
console.log(typeof myNullValue);

