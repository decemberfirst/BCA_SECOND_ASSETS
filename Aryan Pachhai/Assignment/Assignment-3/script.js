console.log('JS has been loaded');

//------SUM OF TWO NUMBERS-----------
function add(x,y){
    console.log(`Addition = ${x + y}`);
}
add(2,2);

//------SUBTRACTION OF TWO NUMBERS-------
function sub(x,y){
    console.log(`Subtraction = ${x - y}`);
}
sub(2,2);

//------MULTIPLICATION OF TWO NUMBERS----------
function multiply(x,y){
    console.log(`Multiplication = ${x * y}`);
}
multiply(2,2);

//------DIVISION OF TWO NUMBERS-------------
function division(x,y){
    console.log(`Division = ${x / y}`);
}
division(2,2);

//------SQUARE OF A NUMBER----------------
function square(x){
    console.log(`Square = ${x * x}`);
}
square(2);

//------SQUARE OF A NUMBER----------------
function cubic(x){
    console.log(`Cubic = ${x * x * x}`);
}
cubic(3);

//------MAXIMUM AMONG TWO NUMBERS--------
function maximum(x,y){
    if(x>y){
        console.log(`${x} is maximum than ${y}`);
    }
    else{
        console.log(`${y} is maximum than ${x}`);
    }
}
maximum(3,9);


//------MINIMUM AMONG TWO NUMBERS--------
function minimum(x,y){
    if(x>y){
        console.log(`${x} is minimum than ${y}`);
    }
    else{
        console.log(`${y} is minimum than ${x}`);
    }
}
minimum(1,7);

//------TO CHECK EVEN NUMBER----------
function even(x){
    if(x%2==0){
        console.log(`${x} is even number`);
    }
    else{
        console.log(`${x} is odd number`);
    }
}
even(2);

//------TO CHECK ODD NUMBER----------
function odd(x){
    if(x%2==1){
        console.log(`${x} is odd number`);
    }
    else{
        console.log(`${x} is even  number`);
    }
}
odd(9);

//------FACTORIAL OF A NUMBER-----------------
function factorial(x){
    let factorial=1;
    for(let i=1;i<=x;i++){
        factorial *= i;
    }
    console.log(`The factorial of ${x} is ${factorial}`);
}
factorial(3);

//------TO CHECK PRIME NUMBER------------------
function prime(x) {
    if (x <= 1) {
        console.log(` ${x} is not a prime number`);
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

prime(6);   
prime(7);  






