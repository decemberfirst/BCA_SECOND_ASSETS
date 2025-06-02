// console.log('100' - 20);
// console.log('100' + 200);
// console.log('abc' + null - true + false);
// console.log('abc' + true * 2);

// let myNumber = prompt("Enter Positive Number");
// let convertedNumber = Number(myNumber);
// console.log(-1 * convertedNumber);

//  let myPositiveNumber = prompt('Enter Positive Number');
//  let myNegativeNumber = prompt('Enter Negative Number');
//  let myMultiplyNumber = prompt('Enter Multiply Number');
//  let myDivisionNumber = prompt('Enter Division Number');
//  let myConvertedNumber = Number(myPositiveNumber, myNegativeNumber, myMultiplyNumber, myDivisionNumber);
//  console.log(myConvertedNumber);

// let myBirthYear = prompt('Enter Birth Date');
// let myConvertedAge = Number(myBirthYear);
// console.log(2025 - myConvertedAge);

// let myLength = prompt('Enter Length');
// let myBreadth = prompt('Enter Breadth');
// let myHeight = prompt('Enter Height');
// let myArea= Number(myLength * myBreadth * myHeight);
// console.log(myArea);

// let myPiNumber = 3.14;
// let myRadius1 = Number(prompt('Enter My Radius1'));
// let myArea = Number(myPiNumber * myRadius1 * myRadius1);
// let myPerimeter = Number(2 * myPiNumber * myRadius1);
// console.log(myArea);
// console.log(myPerimeter);

//--------------------------------------(Assignment)---------------------------------------//

//Area and Perimeter of 
//sphere
//square
//cone
//halfsphere
//rectangle
//traingle


//-----------------------------------(sphere)----------------------------------------------//

// let PI=3.14;
// let r=Number(prompt("Enter radious"));
// let area= 4*PI*r*r;
// let peri= 2*PI*r;
// console.log(area);
// console.log(peri);

//------------------------------------(square)--------------------------------------------//

// let l= Number(prompt("enter length"));
// let area= l*l;
// let peri= 4*l;
// console.log(area);
// console.log(peri);

//---------------------------------------(cone)---------------------------------------------//

// let PI=3.14;
// let r= Number(prompt("Enter radius"));
// let area= PI*r*r;
// let peri= 2*PI*r;
// console.log(area);
// console.log(peri);

//-------------------------------------(half-sphere)---------------------------------------//

// let PI=3.14;
// let r=Number(prompt("Enter radius"));
// let area= (4*PI*r*r)/2;
// let peri= (2*PI*r)/2;
// console.log(area);
// console.log(peri);

//--------------------------------------(rectangle)----------------------------------------//

// let l=Number(prompt("Enter length"));
// let b=Number(prompt("Enter breadth"));
// let area= l*b;
// let peri= 2*(l+b);
// console.log(area);
// console.log(peri);

//--------------------------------------(triangle)------------------------------------------//

let a=Number(prompt("Enter a length of a side"));
let b=Number(prompt("Enter a length of a side"));
let c=Number(prompt("Enter a length of a side"));
let h=Number(prompt("Enter the height"));
let area= 1/2*c*h;
let peri= a+b+c;
console.log(area);
console.log(peri);