
//1)  Write a function to add two numbers.

function Add(x,y){
    console.log("Addition",x+y);
}

Add(2,11);

//2)  Write a function to subtract one number from another.

function Sub(x,y){
    console.log("Subtraction",x-y);
}

Sub(11,2);

//3)  Write a function to multiply two numbers.

function mult(x,y){
    console.log("Multiply",x*y);
}

mult(11,2);

//4) Write a function to divide two numbers.

function div(x,y){
    console.log("division",x/y);
}

div(25,5);

//5)  Write a function that returns the square of a number.

function Square(x){
    console.log("Square",x**2);
}

Square(2);

//6)  Write a function that returns the cube of a number.

function cube(x){
    console.log("Cube", x**3);
}

cube(3);

//7)  Write a function to find the maximum of two numbers.

function max(x,y){
    if(x>y){
    console.log("Maximum is",x);
    }else{
        console.log("Maximum is",y);
    }
}

max(2,4);

//8) Write a function to find the minimum of two numbers.

function min(x,y){
    if(x<y){
    console.log("Minimum is",x);
    }else{
        console.log("minimum is",y);
    }
}

min(2,4);

//9)  Write a function to check if a number is even.

function even(x){
    if(x%2 == 0){
        console.log("Even");
    }
}

even(2);

//10) Write a function to check if a number is odd.

function odd(x){
    if(x%2 == 1){
        console.log("Odd");
    }
}

odd(3);

//11) Write a function to calculate the factorial of a number.

function factorial(x){
    let fact = 1;
    for(i=1; i <=x ; i++){
        fact *= i;
    }
        console.log(fact);
}

factorial(5)

//12) Write a function to check if a number is prime

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
            console.log(x + " is a prime number");
        } else {
            console.log(x + " is not a prime number");
        }
    }
}

Prime(20);   
Prime(35);