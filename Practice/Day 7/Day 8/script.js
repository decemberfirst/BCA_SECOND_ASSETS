// console.log(());
//            bitwise operator
// bitwise and
// console.log(2&3);


// // 
// console.log("")


//TERNARY OPERATOR
// SYNTAX: CONDITION ? WAHT IFF TRUE : IF FALSE

// let input1= Number(prompt('ENTER A NUMBER'))
// let input2 =Number(prompt("enter another number"))

// alert(input1 > input2? `${input1} is Greater than ${input2}` : `${input1}less than ${input2}`);

//  const USERNAME = 'admin'
// const PASSWORD = "admin"

// let userName =prompt("Enter your username")
// let passWord =prompt("Enter your password")

// console.log(USERNAME==userName && passWord==PASSWORD? `welcome back to home`: "incorrect username or password try again")


// const USERNAME = 'admin'
// const PASSWORD = "admin"

// let userName =prompt("Enter your username")
// let passWord =prompt("Enter your password")


// if(userName==USERNAME && passWord==PASSWORD){
//     console.log("welcome back") 
// } else {
//     console.log("invalid password")
// }


// let userAge = Number(prompt("enter your age "))

// console.log(userAge>=18 && userAge <=40 ? `you can vote`: `you cannot vote`)


// let Number1 = Number(prompt("enter a number"))
// let Number2 = Number(prompt("enter another number"))
// let result = Number1/Number2

// console.log(result >10  || result <-1 ? `result is greater than 10` : `result is out of scope`)

// let number = Number(prompt('enter a number'))
// let result = number%2;

// console.log(result = number%2 == 0? "number is even" : "number is odd")


// --------------- assingment questions---------------

// ### **Basic Ternary Operator Assignments**

// 1. Check if a number is even or odd.
// 2. Determine the greater of two numbers.
// 3. Find the smallest of two numbers.
// 4. Check if a number is positive, negative, or zero.
// 5. Check if a number is divisible by 5.
// 6. Assign “Pass” or “Fail” based on marks.
// 7. Assign grade based on score (e.g., A if >90, else B).
// 8. Check if a person is eligible to vote (age ≥ 18).
// 9. Determine if a year is a leap year (basic check).
// 10. Check if a string is empty or not.
// 11. Assign “Eligible” or “Not Eligible” for scholarship (based on passing all 5 subjects).
// 12. Check if username and password are correct (simple string comparison).
// 13. **Assign “Day” or “Night” based on hour (24-hour format).
// 14. Set result to "Pass" or "Fail" based on average marks.
// 15. Check if a number is prime or not (using ternary inside a loop or function).


// 1)Check if a number is even or odd.

// let number = Number(prompt('enter a number'))
// let result = number%2

// console.log(result= number%2==0? `number is even` : `number is odd`)

// 2)Determine the greater of two numbers.

// let number1 = Number(prompt(`enter number 1`))
// let number2 = Number(prompt(`enter number 2`))

// console.log(number1>number2? `number 1 is greater` : `number 2 is greater`)


// 3. Find the smallest of two numbers.

// let number1 = Number(prompt(`enter number 1`))
// let number2 = Number(prompt(`enter number 2`))

// console.log(number1<number2? `number 1 is smaller` : `number 2 is smaller`)


// 4. Check if a number is positive, negative, or zero.
// not done

// let number = Number(prompt(`enter a number`))
// console.log(number>0 && number <0? `number is positive`: `number is negative` : `number is zero`)


// 5. Check if a number is divisible by 5.
// let num = Number(prompt("enter your number"))
// console.log(num%5==0? `Number is divisible by 5` : " Number is not divisible bt 5")


    
// let number = Number(prompt(`enter a number`))
// console.log(number%5==0 ? `number is divisible by 5` : `number is not divisible by 5`)


// 6. Assign “Pass” or “Fail” based on marks.
// let marks = Number(prompt("enter your marks"))
// console.log(marks>=40? `you are passed` : `you are failed`)




// 7. Assign grade based on score (e.g., A if >90, else B).
// let score =Number(prompt("enter your marks"))

// if(
//     score >= 90
// ){
//     console.log("your grade is A+")
// } else if (
//     score < 90 && score>= 80
// ){
//     console.log("your grade is A")
// } else if (
//     score <80 && score >=70
// ){
//     console.log("your grade is B+")
// } else if (
//     score <70 && score >=60 
// ){
//     console.log("your grade is B")
// }
// else if (
//     score <60 && score >=50 
// ){
//     console.log("your grade is c+")
// }
// else {
//     console.log("you are failed")
// }





// let score =Number(prompt(`enter your score`))
// console.log(score>90? "your grade is A " : "Your grade is B")

// 8. Check if a person is eligible to vote (age ≥ 18).
// let age =Number(prompt(`enter your age`))
// console.log(age>=18? "your can vote " : "Your cannot vote")

// 9. Determine if a year is a leap year (basic check).
    

// 10. Check if a string is empty or not.

// 11. Assign “Eligible” or “Not Eligible” for scholarship (based on passing all 5 subjects).
// let subject1= Number(prompt("enter your marks"))
// let subject2= Number(prompt("enter your marks"))
// let subject3= Number(prompt("enter your marks"))
// let subject4= Number(prompt("enter your marks"))
// let subject5= Number(prompt("enter your marks"))
// console.log(subject1>=40 && subject2>=40 && subject3>=40 && subject4>=40 && subject5>=40? "you are eligable" : "you are not eligable for scholarship")



// 12. Check if username and password are correct (simple string comparison).

// const userName = "admin";
// const passWord = "admin";
// let username = prompt("enter your username")
// let password =prompt("enter your password")
// console.log(userName==userName && password==passWord? `welcome to the page` : `username or password incorrect`)

// 13. **Assign “Day” or “Night” based on hour (24-hour format).

// 14. Set result to "Pass" or "Fail" based on average marks.
// let result = Number(prompt('enter your result'))
// let pass = result>=40;
// console.log(pass? `you are passed` :'you are failed')


// 15. Check if a number is prime or not (using ternary inside a loop or function).
