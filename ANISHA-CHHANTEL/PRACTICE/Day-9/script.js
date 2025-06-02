// -------------------------ASSIGNMENT OPERATORS-----------------------------
// let first =10;
// const SECOND= 10;

// // SHORTHAND OPERATOR
// let a=b=c=d=e=10;
// console.log(c);
// console.log(e);

// = , == , ===

// -----------------------COMPOUND OPERATORS-------------------------------
// let myVar = 15;
// console.log((myVar += 15)); //equivalent to myVar = myVar + 15
// // myVar -=5   (Arithematic(-) , Assignment(=))

// let myValue=(prompt('Enter a currency'));
// let NPR=136.57;
// console.log(`According to todays ${myValue} is equal to ${myValue*=NPR} NPR`);
// console.log((myValue*=NPR).toFixed(2));

// let a= b = c =Number(prompt('Enter your first number'));
// let A = B = C=Number(prompt('Enter your second number'));

// console.log(a+= A);
// console.log(b-= B);
// console.log(c*= C);


// -------------------------INCREMENT / DECEREMENT OPERATOR------------------
// let myVar=20;
// console.log(myVar++);  //console.log(++myVar)

let myFirstValue = 15;    //POST
let mySecondValue = myFirstValue++;
console.log(myFirstValue);
console.log(mySecondValue); 

let myNumber1 = 30;   //PRE
let myNumber2 = ++myNumber1;
console.log(myNumber1);
console.log(myNumber2);


// -----------CHALLANGING QUESTIONS---------------
let myNum = 20;
let mySecondNum = 100;
let myResult = ++myNum + myNum-- + mySecondNum-- - --mySecondNum;
console.log(myResult);