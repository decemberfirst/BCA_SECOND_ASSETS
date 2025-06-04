//  addition of number...
function add(x, y) {
  console.log(x + y);
}

add(3, 5);

// Resusable block of code to perform specific tasks or actions.

// subtraction of two numbers
function sub(a, b) {
  console.log(a - b);
}

sub(5, 1);

// multiplicaition of two numbers
function mul(c, d) {
  console.log(c * d);
}
mul(3, 1);

// modulus of number..
function modulus(i, j) {
  console.log(i % j);
}
modulus(5, 2);

// function to divide two numbers...

function divide(m, n) {
  console.log(m / n);
}

divide(10, 5);

//  function to returns square of a number...
function square(l) {
  console.log(l * l);
}
square(5);

// function to return cube of a number
function cube(c) {
  console.log(c * c * c);
}
cube(5);

// function to find the maximum of two numbers..
function maximum(q, r) {
  if (q > r) {
    console.log(`${q} is greater`);
  } else {
    console.log(`${r} is greater`);
  }
}
maximum(3, 4);

// function to find the minimum of two numbers

function minimum(s, t) {
  if (s < t) {
    console.log(`${s} is smaller`);
  } else {
    console.log(`${t} is smaller`);
  }
}
minimum(3, 4);

// function to check whether the number is even or not

function even(z) {
  if (z % 2 == 0) {
    console.log(`${z} is even`);
  } else {
    console.log(`${z} is not a even number`);
  }
}
even(5);

// function to check whether the number is odd or not...

function odd(p) {
  if (p % 2 == 1) {
    console.log(`${p} is odd`);
  } else {
    console.log(`${p} is not a odd number`);
  }
}
odd(17);

// function to check whether the number is prime or not....

function primeCheck(u) {
  let count = 0;
  for (let i = 0; i <= u; i++) {
    if (u % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(`${u} is prime`);
  } else {
    console.log(`${u} is not a prime `);
  }
}
primeCheck(3);
