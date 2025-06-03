//1. Write a function to add two numbers.
function add(x,y){
    console.log(x+y)
}
add(2,3);

//2. Write a function to subtract one number from another.

function sub(x,y){
    console.log(x-y)
}
sub(2,3);

//3. Write a function to multiply two numbers.

function multi(x,y){
    console.log(x*y)
}
multi(2,3);

//4. Write a function to divide two numbers.

function divi(x,y){
    console.log(x/y)
}
divi(20,2);

//5. Write a function that returns the square of a number.

let result = square(5);
console.log(result);

result = square(10); 
console.log(result);

//6. Write a function that returns the cube of a number.

function cube(num) {
  return num * num * num;
}


console.log("The cube of 2 is:", cube(2));   // Expected output: 8

//7
function max(x,y){
    if(x>y){
    console.log("Max is",x);
    }else{
        console.log("Max is",y);
    }
}

max(2,4);

//8
function min(x,y){
    if(x<y){
    console.log("Min is",x);
    }else{
        console.log("min is",y);
    }
}

min(2,4);

//9
function even(x){
    if(x%2 == 0){
        console.log("Even");
    }
}

even(2);

//10
function odd(x){
    if(x%2 == 1){
        console.log("Odd");
    }
}

odd(3);

//11
function factorial(x){
    let fact = 1;
    for(i=1; i <=x ; i++){
        fact *= i;
    }
        console.log(fact);
}

factorial(5)

//12
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

Prime(11);   
Prime(15);