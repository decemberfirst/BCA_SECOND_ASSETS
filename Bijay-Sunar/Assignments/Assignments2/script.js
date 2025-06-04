// ....................function.......................

/// Reusable block of the code to perform specific task.

//2. Write a function to subtract one number from another.

// let z;
// function Subtraction(x,y){
//     z =(x-y);
// }
// Subtraction(20, 5);

// console.log(z);

// function Subtraction(x,y){
//      console.log(x%y);
// };
// Subtraction(9 , 2);


//1. Write a function to add two numbers.
function add(x,y){
    console.log("The Sum IS : ",x+y);
}
add(2,3);

// 3. Write a function to multiply two numbers.
function multiply(x,y){
    console.log("The Multiply IS : ",x*y);
}
multiply(2,3);
// 4. Write a function to divide two numbers.
function divide(x,y){
    console.log("The Divide IS : ",x/y);
}
divide(12,3);
// 5. Write a function that returns the square of a number.
function squareNumber(x){
    console.log("The Square Of The Number IS :",x*x);
}
squareNumber(5);
// 6. Write a function that returns the cube of a number.
function cubeNumber(x){
    console.log("The Cube Of The Number IS :",x*x*x);
}
cubeNumber(2);
// 7. Write a function to find the maximum of two numbers.
// function maximumNumber(x,y){
//     console.log(x>y?⁠ The First Number ${x} Is Greater `:`The Second Number ${y} IS Greater ⁠);
// }
// x=Number(prompt("Enter The First Number"));
// y= Number(prompt("Enter The Second Number"));
// maximumNumber(x,y);
// 8. Write a function to find the minimum of two numbers.
// function minimumNumber(x,y){
//     console.log(x<y?⁠ The First Number ${x} Is Smaller `:`The Second Number ${y} IS Smaller ⁠);
// }
// x=Number(prompt("Enter The First Number"));
// y= Number(prompt("Enter The Second Number"));
// minimumNumber(x,y);
// 9. Write a function to check if a number is even.
// function evenNumber(x){
//     console.log(x%2==0?⁠ The Number Is Even `:`The Number Is Odd ⁠);
// }
// x=Number(prompt("Enter The Number Which You Want to Check"));

// evenNumber(x);
// 10. Write a function to check if a number is odd.
// function evenNumber(x){
//     console.log(x%2==1?⁠ The Number Is Odd `:`The Number Is Even ⁠);
// }
// x=Number(prompt("Enter The Number Which You Want to Check"));

// evenNumber(x);
// 11. Write a function to calculate the factorial of a number.
// let result =1;
// function factorial(x){
//     for(let i=x;i>=1;i--){
//         result = result*i;
//     };
 
// };
// x = Number(prompt("Enter The Number For Factorial"));
// factorial(x);
//    console.log(result);
// 12. Write a function to check if a number is prime
let input = Number(prompt("Enter The Number You Want To Check Whether It IS Prime Or Not"));
let result;
function primeNumber(input){
for(let i=2;i<input ;i++){
if (input%i ===0){
    result = (`The Number ${input}: IS Not Prime Number`);
    break;
}
else {
     result = (`The Number ${input}: IS Prime Number`);
}
};
}
primeNumber(input);
console.log(result);