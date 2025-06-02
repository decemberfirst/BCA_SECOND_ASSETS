// TASK

// TAKE A POSITIVE NUMBER INPUT FROM USER USING PROMPT, EXAMPLE "10"
// CONVERT THAT INPUT TO NEGATIVE NUMBER, EXAMPLE -10
// CONSOLE IT

// let positiveInput=prompt("Enter a positive input"); //returns string data
// let convertedNumber=Number(positiveInput); //input is converted to number
// console.log(-1*positiveInput); //negation of converted data
// console.log(-2*positiveInput);

//TAKE BIRTH YEAR LIKE(2004/2005) FROM USER
//OUTPUT THE ACTUAL AGE OF THE USER LIKE (18/19) AND SO ON

// let userBirthDate=prompt("Enter a Date of Birth");
// console.log(2025-userBirthDate);

// let length=20;
// let breadth=15;
// let height=32;
// let area=length*breadth*height;
// console.log(area);

// let userLength=(prompt("Enter a length"));     
// let userBreadth=(prompt("Enter a breadth"));
// let userHeight=(prompt("Enter a height"));
// let userArea=userLength*userBreadth*userHeight;
// console.log(userArea);

// let diaMeter=Number(prompt("Enter number of diameter of circle"));
// let PI=3.14;
// let radius=diaMeter/2;
// let area=PI*radius*radius;
// console.log(area);
// let r=20;
// console.log(2*PI*r);




//Assignment

 //area and Perimeter of 
 let length = Number(prompt("Enter a length"));
 const PI = 3.14;
 let Diameter = Number(prompt("Enter Diameter"));
 let radius = Diameter/2;
 let Breadth = Number(prompt("Enter a Breadth"))
 let Height = Number(prompt("Enter a Height"))

 //Sphere
console.log("The Area of Sphere is " ,(4*PI*radius*radius));
console.log("The perimeter of Sphere is " ,(2*PI*radius));
 
 //square
console.log("The Area of Square is " ,(length*length));
console.log("The perimeter of Square is " ,(4*length));

 //cone
console.log("The Area of Cone is " ,(PI*radius * (length+radius)));
console.log("The perimeter of Cone is " ,(2/PI*radius));

//  //hemisphere
 console.log("The Area of Hemisphere is ",(3*PI*radius*radius));
 console.log("The perimeter Hemisphere is " ,(2*PI*radius));

 //rectangle
 console.log("The Area of Rectangle is " ,(length*Breadth));
console.log("The perimeter of Rectangle is " ,(2*(length+Breadth)) );

 //triangle
 console.log("The Area of Triangle is " ,((1/2)*Breadth*Height));
console.log("The perimeter of Triangle is " ,(length+Breadth+Height));