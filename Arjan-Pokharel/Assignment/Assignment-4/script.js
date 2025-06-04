//-----Using function to add two numbers

function add(x, y) { //declare
  console.log(x + y);
}
add(2, 3); //call
add(5, 7);
add(10, 15);

//-----Using function to get square of a number

function square(x) { //declare
  console.log(x * x);
}
square(2); // call
square(4);
square(6);

//-----Using function to get cube of a number

function cube(x) { //declare
  console.log(x * x * x);
}
cube(2); // call
cube(3);
cube(5);

//-----Using function to find maximum between two numbers

function max(x, y) { //declare
  if (x > y) {
    console.log(x);
  } else {
    console.log(y);
  }
}
max(5, 3); // call
max(10, 10);
max(7, 9);

//-----Using function to find minimum between two numbers

function min(x, y) { //declare
  if (x < y) {
    console.log(x);
  } else {
    console.log(y);
  }
}
min(5, 3); // call
min(10, 10);
min(7, 9);

//-----Using function to check if number is even

function even(x) { //declare
  if (x % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Not Even");
  }
}
even(2); // call
even(5);
even(10);

//-----Using function to check if number is odd

function odd(x) { //declare
  if (x % 2 !== 0) {
    console.log("Odd");
  } else {
    console.log("Not Odd");
  }
}
odd(3); // call
odd(6);
odd(9);


//-----Using function to find factorial of a number
function fact(x) { //declare
let f = 1;
for (let i = 1; i <= x; i++) {
  f = f * i;
}
console.log(f);
}
fact(3); // call
fact(5);
fact(1);

//-----Using function to check if number is prime

function prime(x) { //declare
  let isPrime = true;
  if (x <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  console.log(isPrime ? "Prime" : "Not Prime");
}
prime(2); // call
prime(4);
prime(7);
