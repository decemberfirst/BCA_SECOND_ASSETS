//------------------------------------------------shorthand Operator----------------------------------------------------//
// let a = b = c = d = e = 10;
// console.log(a);

//-------------------------------------------------COMPUND OPERATOR-----------------------------------------//

// let myVar = 20;
// console.log(myVar *= 10);

// let usDollar = Number(prompt('Enter the Amount($)'));
// usDollar *= 135.25;
// console.log(`NPR ${usDollar}`);
// alert(`NPR ${usDollar}`);

// let a = b = c = d = Number(prompt('Enter the Number'));
// let A = B = C = D = Number(prompt('Enter the Number'));
// console.log(a += A);
// console.log(b -= B);
// console.log(c *= C);
// console.log(d /= D);

//---------------------------------INCREMENT AND DECERMENT OPERATOR-----------------------------------------//
//(++myvalue--> Preincrement // (myvalue++--> Postincrement))
// let myValue = 15;
// let result = ++myValue;
// console.log(myValue);
// console.log(result);

// let myValue = 15;
// let result = myValue++;
// console.log(myValue);
// console.log(result);

// let mynumber = 20;
// let result = ++mynumber;
// console.log(mynumber);
// console.log(result);

// let mynumber = 20;
// let result = mynumber--;
// console.log(mynumber);
// console.log(result);

let myNumber = 20;
let mySecondNumber = 100;
console.log(++myNumber + myNumber-- + mySecondNumber-- - --mySecondNumber);