//-------------BITWISE OPERATOR----------------

// //BITWISE AND
console.log(0 & 7); 
console.log(8>>1);//right shift
console.log(4<<2)//left shift


// //TERNARY OPERATOR
// //SYNTAX: condition? what if true if false

// console.log(10>2?"Is greater than 2":"Is smaller")



// let firstNumber=Number(prompt("Enter a first number"));
// let secondNumber=Number(prompt("Enter a second number"));
// alert(firstNumber>secondNumber?`Is Greater`:` Is Smaller`);


// //Login

// const userName="Gyanendra";
// const password="Gyanendra000";
// let userInput=(prompt("Username"));
// let Password=(prompt("Password"));
// alert(userName==userInput && password==Password?"Logged In successfully":"Failed to login")


//Voting Age

// const userInput=(prompt("Enter your age."))
// alert(userInput>=18 && userInput<40?"You can vote":"You cannot vote you are too early or over aged")



// const first=Number(prompt("Enter a number"));
// const Second=Number(prompt("Enter a number"));
// let divide=first/Second;
// alert(divide>10 ||divide<-1?"Result is Greater Than 10 or result is negative":"Condition out of scope")


 let input=Number(prompt("Enter a number"));
 oddEven=input%2;
 alert(`${oddEven==0?"Even":"Odd"}`)

 