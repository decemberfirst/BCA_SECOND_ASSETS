// Bitwise Operation

// Bitwise AND &
// Bitwise OR  |


//  Ternary operator

//  Syntax: condition ?What if true : If false

//  console.log(10 > 2? "Greater than 2" : "less than 2");

// To find greater or less than between two numbers
 /* let firstNumber = Number(prompt("enter a number"));
 let secondNumber = Number(prompt("enter a number"));
 console.log(firstNumber>secondNumber? `Greater than ${firstNumber}` : `less than ${firstNumber}`);
 alert(firstNumber>secondNumber? `Greater than ${firstNumber}` : `less than ${firstNumber}`); */

//To find User data security
/*  const Username = 'Agraj';
 const Password = 'Agraj12';
 
 let Name = prompt("Enter your name");
 let pass = prompt("Enter your password");
 
 console.log((Name == Username && pass == Password) && "You are logged in" || "Invalid username or password"); */

//To find the validity of voting age 18 and 40
 /* const Age = prompt("Enter your age");
 console.log((Age >= 18 && Age < 40) && "You are valid User for the Voting" || "Too Early Or Too old for voting"); */


//To find the greater than 10,negative or out of scope
/* const num1 = Number(prompt("Enter first number"));
const num2 =  Number(prompt("Enter second number"));

const result = num1 / num2;

console.log(
  result > 10
    ? "Result is greater than 10"
    : result < -1
    ? "Result is negative"
    : "Result is out of the scope"
); */


//Assignment

//1) To check if the number is even or odd
/* let A = Number(prompt("Enter a number"));

console.log(
     A % 2 == 0
    ? "The number is even"
    : "The number is odd"
);
 */

//2) Determine the greater of two numbers
/* let Num1 = Number(prompt("Enter your first number"));
let Num2 = Number(prompt("Enter your second number"));

console.log(
    Num1 > Num2 
    ? "The first number is greater"
    : "The Second number is greater"
);
 */

//3) Smallest of Two numbers
/* let Num1 = Number(prompt("Enter your first number"));
let Num2 = Number(prompt("Enter your second number"));

console.log(
    Num1 < Num2
    ? "First number is the smallest"
    : "Second number is the smallest"
); */

//4) Check if a number is positive, negative or zero.
/* let Num = Number(prompt("Enter a number"));
console.log(
    Num == 0
    ? "The number is Zero"
    : Num > 0
    ? "The number is positive"
    : "The number is negative"
); */


//5) Check if a number is divisible by 5.
/* let num = Number(prompt("Enter a number"));
console.log(
    num % 5 == 0
    ? "The number is divisible by 5"
    : "The number is not divisble by 5"
);
 */

//6. Assign “Pass” or “Fail” based on marks.
/*  let Marks = Number(prompt("Enter your Marks"));
 console.log(
    Marks >= 40
    ? "You are Pass"
    : "You Failed"
 ); */

// 7. Assign grade based on score (e.g., A if >90, else B).
/* let Marks = Number(prompt("Enter your Marks"));
console.log(
    Marks > 90
    ? "A"
    : Marks > 80
    ? "B"
    : Marks > 70
    ? "C"
    : Marks >= 40
    ? "D" : "F"
); */

// 8. Check if a person is eligible to vote (age ≥ 18).
/* let Age = Number(prompt("Enter your age"));
console.log(
    Age >= 18
    ? "You are eligible to vote"
    : "You can't vote"
); */

// 9. Determine if a year is a leap year (basic check).
/* let Year = Number(prompt("Enter a Year"));
console.log(
    Year % 4 == 0
    ? "The year is leap year"
    : "The year is not a leap year"
); */

// 10. Check if a string is empty or not.
/* let string = (prompt("Enter a String"));
console.log(
    string === ""  
    ? "The string is Empty"
    : "The string is not empty"
); */

// 11. Assign “Eligible” or “Not Eligible” for scholarship (based on passing all 5 subjects).
/* let English = Number(prompt("Enter your Marks in English"))
let Maths = Number(prompt("Enter your Marks in Maths"))
let C = Number(prompt("Enter your Marks in C"))
let FA = Number(prompt("Enter your Marks in FA"))
let MCA = Number(prompt("Enter your Marks in MCA"))
console.log(
    (English >= 40 && Maths >= 40 && C>= 40 && FA >= 40 && MCA >= 40)
    ? "You are Elligible for scholarship"
    : "You are not Elligible for scholarship"
); */

// 12. Check if username and password are correct (simple string comparison).
/* let userName = "Agraj"
let Password = "Agraj01"

let Name = prompt("Enter your Username");
let Pass = prompt("Enter your Password");
console.log(
    (userName == Name && Password == Pass)
    ? "Your UserName and Password is correct"
    : "Your UserName and Password is incorrect"
); */

// 13. **Assign “Day” or “Night” based on hour (24-hour format).
/* let Hour = Number(prompt("Enter the Time of the Day"));
console.log(
    Hour > 12
    ? "It is NIght"
    : "It is Day"
); */

// 14. Set result to "Pass" or "Fail" based on average marks.
/* let Marks = Number(prompt("Enter Your Marks"));
console.log(
    Marks >= 40
    ? "PASS"
    : "FAIL"
); */

// 15. Check if a number is prime or not (using ternary inside a loop or function).
/* let Num = Number(prompt("Enter a number"));

if (Num <= 1) {
    console.log("The number is not prime");
} else {
    let isPrime = true;

    for (let i = 2; i < Num; i++) {
        if (Num % i === 0) {
            isPrime = false;
        }
    }

    console.log(
        isPrime 
        ? "The number is prime" 
        : "The number is not prime"
    );
} */