// 1. Add Two numbers

function sum(a,b) {
    console.log('Add: ',a + b);
}
sum(10,30);

// 2. Subtract Two numbers

function sub(a,b) {
    console.log('Subtract: ', a - b);
}
sub(50,20);

// 3. Multiply Two numbers

function mult(a,b) {
    console.log('Multiply: ', a * b);
}
mult(8,8);

// 4. Divide Two numbers

function divi(a,b) {
    console.log('Divide: ',a / b);
}
divi(50,5);

// 5. Square of a numbers

function square(n) {
    console.log('Square: ', n * n);
}
square(5);

// 6. Cube of a numbers

function cube(n) {
    console.log('Cube: ', n * n * n);
}
cube(5);

// 7. Find the maximum of two numbers

function max(a,b) {
    console.log('Max: ', a > b ? a : b);
}
max(50,20);

//a > b → This is the condition being tested. It checks: “Is a greater than b?”
// ? a : b → This is the ternary part:
// If the condition (a > b) is true, it returns a.
// If the condition is false, it returns b.

// 9. Minimum of Two numbers

function min(a,b) {
    console.log('Minimum: ', a < b ? a : b)
}
min(20,10);

//a < b → This is the condition being tested. It checks: “Is a greater than b?”
// ? a : b → This is the ternary part:
// If the condition (a < b) is true, it returns b.
// If the condition is false, it returns a.

// 9. Check if a number is even

function even(n) {
    console.log('Even: ', n % 2 == 0);
}
even(2);

// 10. Check if a number is odd

function odd(n) {
    console.log('Odd: ', n % 2 !== 0);
}
odd(7);

// 11. Calculate the factorial of a number

function factorial(n){
    if(n < 0){
        console.log('Factorial: Error - Negative number');
    }
    let result = 1;
    for(i = 2; i<=n; i++) {
        result = result * i; // result *= i;
    }
    console.log('Factorial: ', result);
}
factorial(4);

// 12. Write a function to check if a number is prime

function Prime(x) {
    if (x <= 1) {
        console.log(x, "is not a prime number");
    } else {
        let isPrime = true;

        for (let i = 2; i*i <= x; i++) {
            if (x % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${x} is a prime number`);
        } else {
            console.log(`${x} is not a prime number`);
        }
    }
}

Prime(5);   
Prime(6);   