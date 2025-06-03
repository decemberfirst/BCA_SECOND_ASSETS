console.log('JavaScript has been loaded');


// TYPE COERTION(JS INTERNAL KNOWLEAGE )
// console.log('100'-20);
// console.log('100'+200);
// console.log('abc'+null-true+false);
// console.log('20'-10+200-'30');
// console.log('abc'+true*2);

// let num1=Number(prompt('Enter a positive number'));
// let negNumber=-num1;
// console.log(negNumber);

// let num1=Number(prompt('Enter first  number'));
// let num2=Number(prompt('Enter second  number'));
// let num3=Number(prompt('Enter third  number'));
// let output1=num1/0;
// console.log(output1);
// let output2=num2*num3;
// console.log(output2);
// let output3=output1*output2;
// console.log(output3);

// let string1=prompt('Enter first  number');
// let string2=prompt('Enter second  number');
// let string3=prompt('Enter third  number');
// let outputString1=string1/0;
// console.log(outputString1);
// let outputString2=string2*string3;
// console.log(outputString2);
// let outputString3=outputString1*outputString2;
// console.log(outputString3);

// // TO FIND AGE OF USER

// // In AD
// let birthYearInAd=Number(prompt('Enter birth year in AD'));
// let ageInAd=2025-birthYearInAd;
// console.log(ageInAd);

// // IN BS
// let birthYearInBs=Number(prompt('Enter birth year in BS'));
// let ageInBs=2082-birthYearInBs;
// console.log(ageInBs);

// TO FIND AREA 
// let length=Number(prompt('Enter length'));
// let breadth=Number(prompt('Enter breadth'));
// let height=Number(prompt('Enter height'));
// let area= length*breadth*height;
// console.log(area);

// TO FIND AREA AND PERIMETER BY ASKING USER DIAMETER
// let diameter=Number(prompt('Enter diameter'));
// let radius=diameter/2;
// const pi=3.14;
// let area= pi*radius*radius;
// let perimeter= 2*pi*radius;
// console.log(area);
// console.log(perimeter);

// console.log(parseFloat(area).toFixed(2));
// console.log(parseFloat(perimeter).toFixed(2));

// console.log(Math.floor(area));
// console.log(Math.floor(perimeter));

/**Assignment
 * Area and perimeter of
 * 1)Square
 * 2)Sphere
 * 3)Cone
 * 4)Halfsphere
 * 5)Rectangle
 * 6)Triangle
 */

//1)
// let side=Number(prompt('Enter side length'));
// let area=side*side;
// let perimeter=4*side;
// console.log('The area of square is :', area);
// console.log('The perimeter of square is :',perimeter);

//2)
// let radius=Number(prompt('Enter radius'));
// const pi=3.14;
// let area= 4*pi*radius*radius;
// let perimeter= 2*pi*radius;
// console.log('The area of sphere is:',area);
// console.log('The perimeter of sphere is:',perimeter);

//3)
// let radius=Number(prompt('Enter radius'));
// let length=Number(prompt('Enter length'));
// const pi=3.14;
// let area=pi*radius*radius+pi*radius*length;
// console.log('The surface area of cone is :',area);

//4)
// let radius=Number(prompt('Enter radius'));
// const pi=3.14;
// let area= 2*pi*radius*radius;
// let perimeter= pi*radius;
// console.log('The area of halfsphere is:',area);
// console.log('The perimeter of halfsphere is:',perimeter);

//5)
// let breadth=Number(prompt('Enter breadth'));
// let height=Number(prompt('Enter height'));
// let area=breadth*height;
// let perimeter=2*breadth+2*height;
// console.log('The area of rectangle is:',area);
// console.log('The perimeter of rectangel is:',perimeter);

//6)
// let side1=Number(prompt('Enter length'));
// let base=Number(prompt('Enter base'));
// let side2=Number(prompt('Enter another length'));
// let height=Number(prompt('Enter height'));
// let area=0.5*base*height;
// let perimeter=side1+base+side2;
// console.log('The area of triangle is:',area);
// console.log('The perimeter of triangle is:',perimeter);