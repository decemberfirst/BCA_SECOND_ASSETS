 //type coertion, (Internal Things)

 console.log('100' - 20);

 console.log(- + -10);

 console.log('abc'+null-true+false);

 
 /*User1 = Number(prompt("Enter a number"));
 console.log("0" - User1);*/

  /*User2 = Number(prompt("Enter any number"));
 console.log( User2 * -1 );*/

 /*User = Number(prompt("Enter your birth Year"));
console.log(2025 - User); */

/*let length = Number(prompt("Enter length"));
let Breadth = Number(prompt("Enter Breadth"));
let height = Number(prompt("Enter height"));

console.log(length*Breadth*height);*/

 

/*let Diameter = Number(prompt("Enter Diameter"));
console.log("The radius is " + (Diameter / 2).toFixed(2));

let PI = 3.14;
console.log("Area of circle is " + (PI * (Diameter / 2) * (Diameter / 2)).toFixed(2));
console.log("Perimeter of circle is " + (2 * PI * (Diameter / 2)).toFixed(2));*/
//Math.round for roundoff

//Assignment

 //area and Perimeter of 
 let length = Number(prompt("Enter a length"));
 const PI = 3.14;
 let Diameter = Number(prompt("Enter Diameter"));
 let radius = Diameter/2;
 let Breadth = Number(prompt("Enter a Breadth"))
 let Height = Number(prompt("Enter a Height"))
 let Thankyou = (alert("Thanks for the input"));

 //Sphere
console.log("The Area of Sphere is " + Math.round(4*PI*radius*radius));
console.log("The perimeter of Sphere is " + Math.round(2*PI*radius));
 
 //square
console.log("The Area of Square is " + Math.round(length*length));
console.log("The perimeter of Square is " + Math.round(4*length));

 //cone
console.log("The Area of Cone is " + Math.round(PI*radius * (length+radius)));
console.log("The perimeter of Cone is " + Math.round(2/PI*radius));

 //hemisphere
 console.log("The Area of Hemisphere is " + Math.round(3*PI*radius*radius));
 console.log("The perimeter Hemisphere is " + Math.round(2*PI*radius));

 //rectangle
 console.log("The Area of Rectangle is " + Math.round(length*Breadth));
console.log("The perimeter of Rectangle is " + Math.round (2*(length+Breadth)) );

 //triangle
 console.log("The Area of Triangle is " + Math.round((1/2)*Breadth*Height));
console.log("The perimeter of Triangle is " + Math.round (length+Breadth+Height));
 

 



