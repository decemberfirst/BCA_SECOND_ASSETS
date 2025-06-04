//1
function Add(x, y) {
  console.log("Add", x + y);
}
Add(2, 11);

//2
function Sub(x, y) {
  console.log("Sub", x - y);
}
Sub(11, 2);

//3
function mult(x, y) {
  console.log("Mult", x * y);
}
mult(11, 2);

//4
function div(x, y) {
  console.log("div", x / y);
}
div(25, 5);

//5
function sqr(x) {
  console.log("sqr", x ** 2);
}
sqr(2);

//6
function cube(x) {
  console.log("cube", x ** 3);
}
cube(3);

//7
function max(x, y) {
  if (x > y) {
    console.log("Max is", x);
  } else {
    console.log("Max is", y);
  }
}
max(2, 4);

//8
function min(x, y) {
  if (x < y) {
    console.log("Min is", x);
  } else {
    console.log("min is", y);
  }
}
min(2, 4);

//9
function even(x) {
  if (x % 2 == 0) {
    console.log("Even");
  }
}
even(2);

//10
function odd(x) {
  if (x % 2 == 1) {
    console.log("Odd");
  }
}
odd(3);

//11
function factorial(x) {
  let fact = 1;
  for (i = 1; i <= x; i++) {
    fact *= i;
  }
  console.log(fact);
}
factorial(5);

//12
function Prime(x) {
  if (x <= 1) {
    console.log(x, "is not a prime number");
  } else {
    let isPrime = true;

    for (let i = 2; i * i <= x; i++) {
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
