// 1. Write a function to add two numbers.
// 2. Write a function to subtract one number from another.
// 3. Write a function to multiply two numbers.
// 4. Write a function to divide two numbers.
// 5. Write a function that returns the square of a number.
// 6. Write a function that returns the cube of a number.
// 7. Write a function to find the maximum of two numbers.
// 8. Write a function to find the minimum of two numbers.
// 9. Write a function to check if a number is even.
// 10. Write a function to check if a number is odd.
// 11. Write a function to calculate the factorial of a number.
// 12. Write a function to check if a number is prime


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function max(a, b) {
    return a > b ? a : b;
}

function min(a, b) {
    return a < b ? a : b;
}

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 !== 0;
}

function factorial(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}