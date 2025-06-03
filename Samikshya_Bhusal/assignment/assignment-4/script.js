//------------------function----------------

//1. Write a function to add two numbers.
function add(x,y){
    console.log(x+y);
}
add(2,10);

//2.Write a function to subtract one number from another.
function sub(x,y){
    console.log(x-y);
}
sub(29,19);

//3. Write a function to multiply two numbers.
function mul(x,y){
    console.log(x*y);
}
mul(2,9);

//4.Write a function to divide two numbers.
function div(x,y){
    console.log(x/y);
}
div(9,3);

//5.Write a function that returns the square of a number.
function square(x){
    console.log(x**2);
}
square(9);

//6.. Write a function that returns the cube of a number.
function cube(x){
    console.log(x**3);
}
cube(2);

//7.Write a function to find the maximum of two numbers.
function max(x,y){
    if(x>y){
        console.log("max is",x);
    }else{
        console.log("max is",y);
    }
}
max(2,4);

//8.. Write a function to find the minimum of two numbers.

function min(x,y){
    if(x<y){
        console.log("min is",x);
    }else{
        console.log("min is",y);
    }
};
min(2,4);

//9.Write a function to check if a number is even.

function even(x){
    if(x%2==0){
        console.log("even");
    }
};
even(2);

//10.Write a function to check if a number is odd.

function odd(x){
    if(x%2==1){
        console.log("odd");
    }
};
odd(3);

//11.Write a function to calculate the factorial of a number.
function factorial(x){
    let fact=1;
    for(i=0;i<=x;i++){
        fact*=i;
    }
    console.log(fact);
};
factorial(5);

//12.
function prime(x){
    if(x<=1){
        console.log(x,'is not a prime number');
    }else{
        let isPrime=true;
        for(let i=2;i*i<=x;i++){
            if(x%i===0){
                isPrime=false;
            }
        }
        if(isPrime){
            console.log(x+"is aprime number");
        }else{
            console.log(x+'is not a prime number');
        }
    }
}
prime(11);
prime(15);