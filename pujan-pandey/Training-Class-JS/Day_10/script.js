// // ------------------OPERATOR PRECEDENCE AND ASSOCAIATIVITY --------------
// console.log(10+40/12); //(Operator Precedence and assosiativity table)
// console.log(4*[5/100]);
// myVar=10;
// myVar=myVar + 1 +myVar++;



//-----------------Conditional Statement---------------

//if else
// for loop
//while loop
// do while loop(3+ more after we complete array session  ...)

//..............Input two Number from user and find smallest among them------


// let firstNumber=Number(prompt("Enter a number"));
// let secondNumber=Number(prompt("Enter a number"));
// if(firstNumber>secondNumber){
//     alert(secondNumber+" is smallest ")
// }else{
//     alert(firstNumber+ " is smallest")
// }



// let year=Number(prompt("Enter a year"));
// if(year%4==0){
//     alert("Is a leap year")

// }else{
//     alert("Is not a leap year")

// }




// let apple=400;
// let ball=400;
// let cat=100;
// let dog=200;
// let elephant=600;
// let total=apple+ball+cat+dog+elephant;
// if(total>1000){
//     alert("Discount allowed")
// }else{
//     alert("Not allowed")
// }


// let character=prompt("Enter a character")
// if(
//     character=="a"||
//     character=="e"||
//     character=="i"||
//     character=="o"||
//     character=="u"||
//     character=="A"||
//     character=="E"||
//     character=="I"||
//     character=="O"||
//     character=="U"
// ){
//     alert("Is a vowel")
// }else{
//     alert("Is not a vowel")
// }




// let userInput=prompt("Enter a day");
// if(userInput=="sunday"||userInput=="saturday"){
//     alert("weekend")
// }else{
//     alert("IS not a weekend")
// }




// let userInput=Number(prompt("Enter a time in 24 hrs"));
// if(userInput<24 && userInput>=0){
// if(userInput>12){
//     alert(userInput +" p.m")
// }else{
//     alert(userInput + " a.m")
// }
// }else{
//     alert("Not a valid time")
// }



let userInput=prompt("Enter a special character");
if(userInput=="@"||
    userInput=="#"||
    userInput=="!"||
    userInput=="$"
){
    alert("Is a special character")
}else{
    alert("Not a special character")
}