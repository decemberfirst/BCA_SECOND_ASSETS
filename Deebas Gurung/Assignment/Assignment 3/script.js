// 1. Write a function to add two numbers.
function add(x,y){
    console.log(x+y);
}
add(10,5);


// 2. Write a function to subtract one number from another.
function sub(x,y){
    console.log(x-y);
}
sub(12,8);
// 3. Write a function to multiply two numbers.
function mul(x,y){
    console.log(x*y);
}
mul(4,9);
// 4. Write a function to divide two numbers.
function div(x,y){
    console.log(x/y);
}
div(15,3);
// 5. Write a function that returns the square of a number.
function square(x){
   console.log(x**2);
}

square(5);
// 6. Write a function that returns the cube of a number.
function cube(x){
    console.log(x**3);
}
cube(6);

// 7. Write a function to find the maximum of two numbers.
function max(x,y){
    if(x>y){
        console.log (x);
        }else{
            console.log(y);
        }
}
max(9,10);
// 8. Write a function to find the minimum of two numbers.
function min(x,y){
    if(x<y){
        console.log(x);
        }else{
        console.log(y);
        }
}
min(15,13);
// 9. Write a function to check if a number is even.
function even(x){
    if(x%2==0){
        console.log('even');
    }
}
even(8);

// 10. Write a function to check if a number is odd.

function odd(x){
    if(x%2==1){
        console.log('odd');
    }
}
odd(11);
// 11. Write a function to calculate the factorial of a number.
function fac(i){
    let fact = 1;
    for(let i=1; i<=5; i++){
        fact *= i;
    }
      console.log(fact);
}
fac(5);

// 12. Write a function to check if a number is prime
