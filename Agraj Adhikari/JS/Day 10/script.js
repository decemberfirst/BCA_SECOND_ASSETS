 //.......OPERATOR PRECEDENCE AND ASSOCIATIVITY........

 console.log(10 +40 / 12);

 console.log(4 * [5 /100]);

 myvar = 10;

myvar = myvar + 1 + myvar++;

//1 0 0
//0 1 0
//....
//1 1 0 => 6 

//Unary operator 
//myvar++ 



//..........CONDITIONAL STATEMENTS...........

//if else
//for loop 
//While loop
//do while loop


// let one = Number(prompt("Enter a number"));
// let two = Number(prompt("Enter a number"));

// if(one>two) {
//     alert("The smallest number is", one);
// }else{
//     alert('the smallest number is two');
// }

// let year = Number(prompt("Enter the year"));

// if(year%2 == 0){
//     alert("IT is a leap year");
// }else{
//     alert("not a leap year");
// }

// let A = Number(prompt('Enter price'));
// let B = Number(prompt('Enter price'));
// let C = Number(prompt('Enter price'));
// let D = Number(prompt('Enter price'));
// let E = Number(prompt('Enter price'));

// let sum = (A + B + C + D + E);
// console.log(sum);

// let discount = (sum/100)*15;
// console.log(discount);

// if ( sum >= 1500){
//     alert('you are discounted ' + discount );
// }else{
//     alert('You are not elligible discounted');
// }

// let Character = prompt("Enter a character");

// if (Character == "a" || Character == "e" || Character == "i" ||Character == "o" || Character == "u" || Character == "A" || Character == "E" || Character == "I" || Character == "O" || Character == "U"){
//     alert('It is a volume');
// } else {
//     alert('It is a consonant');
// }

// let Days = (prompt("Enter the Days"));

// if(Days == "friday" || Days == "Friday" || Days == "saturday" ||  Days == "Saturday"){
//     alert("It is a weekend");
// }else{
//     alert("it is not a weekend");
// }

// let Time = Number(prompt("Enter your time"));

// if(Time >= 0 && Time  <= 12){
//     alert("IT is Day");
// }else if(Time > 12 && Time <= 24){
//     alert('It is a Night');
// }else{
//     alert('Invalid Time');
// }

// let Weight = prompt("Enter your Weight");
// let Height = prompt("Enter your height");

// let BMI = Weight / (Height*Height);

// if(BMI <= 24){
//     alert('Your BMI is fine');
// }else{
//     alert('You are unhealthy');
// }


let SChar = prompt("Enter a special Char");

if(SChar == "!" || SChar == "@" || SChar == "$" || SChar == "_" || SChar == "&" || SChar == "~" ||  SChar == "`" || SChar == "%" || SChar == "^" || SChar == "*"  ){
    alert("It is a special Char");
}else{
    alert("Not a special Char");
}





