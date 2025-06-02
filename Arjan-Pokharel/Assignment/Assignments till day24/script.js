//Day 8 Assignment

// 1. Check if a number is even or odd.

// let inputnum1 = Number(prompt("Enter Any Number."));
// let oddeven = inputnum1%2

// alert(oddeven == 0 ? "THE NUMBER IS EVEN." : "THE NUMBER IS ODD.");

//------------------------------------------------------------------------------------------------------------------------

// 2. Determine the greater of two numbers.

// let a= Number(prompt("Enter Any Number."));
// let b= Number(prompt('Enter Any Number.'));

// alert(a > b ? ${a} is Greater Than ${b}. : ${b} is Greater Than ${a}.);

// ----------------------------------------------------------------------------------------------------------------------

// 3. Find the smallest of two numbers.

// let a= Number(prompt("Enter Any Number"));
// let b= Number(prompt('Enter Any Number'));

// alert(a < b ? ${a} is Smaller Than ${b}. : ${b} is Smaller Than ${a}.);

//------------------------------------------------------------------------------------------------------------------------

// 4. Check if a number is positive, negative, or zero.

// let a= Number(prompt("Enter Any Number"));

// alert(a > 0 ? "Number is Positive." : a < 0 ? "Number is Negative." : "Number is Zero.");

//------------------------------------------------------------------------------------------------------------------------

// 5. Check if a number is divisible by 5.

// let a = Number(prompt("Enter Any Number"));
// let result = a%5

// alert(result == 0 ? "THE NUMBER IS DIVISIBLE BY 5." : "THE NUMBER NOT IS DIVISIBLE BY 5.");

//------------------------------------------------------------------------------------------------------------------------

// 6. Assign “Pass” or “Fail” based on marks.

// let marks = Number(prompt("ENTER YOUR MARKS."));

// alert(marks > 35 ? "PASS" : "Fail");

//------------------------------------------------------------------------------------------------------------------------

// 7. Assign grade based on score (e.g., A if >90, else B).

// let marks = Number(prompt("ENTER YOUR MARKS."));

// alert(marks > 50 ? "YOUR GRADE IS A." : marks > 40 ? "YOUR GRADE IS B." : marks > 30 ? "YOUR GRADE IS C." : marks > 20 ? "YOUR GRADE IS D." : "FAIL");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8. Check if a person is eligible to vote (age ≥ 18).

// let age = Number(prompt("ENTER YOUR AGE."))

// alert(age >= 18 ? "YOU ARE ELIGIBLE TO VOTE." : "YOU ARE TOO EARLY TO VOTE.");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9. Determine if a year is a leap year (basic check).

// let year = Number(prompt("ENTER THE YEAR."));

// alert(year%4 == 0 ? ${year} IS A LEAP YEAR : ${year} IS NOT A LEAP YEAR);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Check if a string is empty or not.

// let input = prompt("ENTER ANYTHING YOU DESIRE.");

// alert(input === "" ? "String is Empty." : "String is Not Empty.");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 11. Assign “Eligible” or “Not Eligible” for scholarship (based on passing all 5 subjects).

// let sub1 = Number(prompt("ENTER YOUR MARKS."));
// let sub2 = Number(prompt("ENTER YOUR MARKS."));
// let sub3 = Number(prompt("ENTER YOUR MARKS."));
// let sub4 = Number(prompt("ENTER YOUR MARKS."));
// let sub5 = Number(prompt("ENTER YOUR MARKS."));

// alert(sub1 > 35 && sub2 > 35 && sub3 > 35 && sub4 > 35 && sub5 > 35 ? "ELIGIBLE FOR SCHOLARSHIP." : "NOT ELIGIBLE FOR SCHOLARSHIP." );

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// 12. Check if username and password are correct (simple string comparison).

// const USERNAME = 'admin';
// const PASSWORD = 'admin';

// let user = prompt(Enter Your Username);
// let pass = prompt(Enter Your Password);

// alert(USERNAME == user && PASSWORD == pass ? 'You Are Logged in': 'Password Or Username Does Not Match' );

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// 13. **Assign “Day” or “Night” based on hour (24-hour format).

// let time = Number(prompt("ENTER TIME."));

// alert( time >= 1 && time <= 12 ? "Day" : "Night" );

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// 14. Set result to "Pass" or "Fail" based on average marks.

// let avg = Number(prompt("Enter your average marks."));

// alert(avg >= 35 ?"PASS" : "FAIL")

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// 15. Check if a number is prime or not (using ternary inside a loop or function).

// let num = Number(prompt("ENTER ANY NUMBER."));

// alert(num >= 1 && Math.sqrt(num) < 2 ? "THE NUMBER IS A PRIME NUMBER." : "THE NUMBER IS NOT A PRIME NUMBER")

//________________________________________________________________________________________________________________________________________________________



// Day 9 Assignment


// Using while loop

let user1 = Number(prompt('Enter the first number'));
let user2 = Number(prompt('Enter the second number'));

let sumOdd = 0;
let sumEven = 0;

let count = user1;

while(count <= user2){
    if(count % 2 == 0){
        sumEven += count;
    }else{
        sumOdd += count;
    }
    count++;
}

console.log(`Sum of Even Numbers = ${sumEven}`);
console.log(`Sum of Odd Numbers = ${sumOdd}`);


// Using do while loop

let user3 = Number(prompt('Enter the first number'));
let user4 = Number(prompt('Enter the second number'));

let sumOdd1 = 0;
let sumEven1 = 0;

let count1 = user3;

do{
    if(count1 % 2 == 0){
        sumEven1 += count1;
    }else{
        sumOdd1 += count1;
    }
    count1++;
}while(count1 <= user4);

console.log(`Sum of Even Numbers = ${sumEven1}`);
console.log(`Sum of Odd Numbers = ${sumOdd1}`);

//________________________________________________________________________________________________________________________________________________________

// Day 14 Assignment


let userName = prompt("Enter a Username:");
let Amount = 100000;
let run = true;

while(run) []

    let firstAction = Number(prompt("Enter 1 for displaying current balance. Enter 2 for Deposite. Enter 3 for withdraw and enter 4 to exit an program"));

    switch(firstAction){
        case 1:
            alert(`Current balance is ${Amount}`);
            break;
        
        case 2:
            let addBalance = Number(prompt("Enter balance you want to Deposite : "));
            Amount+=addBalance;
            break;
        
        case 3:
            let reduceBalance = Number(prompt("Enter balance you want to WithDraw : "));
            if(reduceBalance <= Amount){
                Amount-=reduceBalance;
            }
            else{
                alert("Unsuffient ammount");
            }
            break;
        case 4:
            run = false;
            break;

        default:
            alert("Please Enter right action ");

    }

//________________________________________________________________________________________________________________________________________________________

// Day 21 Assignment

// Question 1 :
let student = {
  name: "Arjan Pokharel",
  id: "0089",
  address: {
    street: "123 victor park",
    city: "Palpa",
    zip: "7722"
  },
  Faculty:
   "BCA",
  course: {
    courseNameFirst: "Computer Applications"
  },
  Subjects: {
    subjectName: "JavaScript",
    subjectCode: "JS1001"
  },
  contact: {
    email: "arjanpokharel2025@gmail.com",
    phone1: "9847012766",
    phone2: "9749786432"
  }
};

// Question 2 :
console.log(student.address.zip);
console.log(student.course.courseName);

// Question 3 :
student.course.courseNameSecond = "Science";

// Question 4 :
student.contact.email = "student@example.com";

// Question 5 :
delete student.contact.phone1;
delete student.contact.phone2;

console.log(student);


//________________________________________________________________________________________________________________________________________________________

