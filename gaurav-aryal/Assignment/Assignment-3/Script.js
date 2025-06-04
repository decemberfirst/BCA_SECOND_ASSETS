//1. ADDITION

// function add(x,y){
//     console.log(x+y);
// }
// add(9,5);


//2. SUBTRACTION

// function sub(x,y){
//     console.log(x-y);
// }
// sub(9,5);


//3. MULTIPLY

// function mul(x,y){
//     console.log(x*y);
// }
// mul(9,5);


//4. DIVISION

// function div(x,y){
//     console.log(x/y);
// }
// div(9,5);



//5.SQUARE 
function sqr(x){
    console.log(x**2);
}

sqr(5);

//6 CUBE
function cube(x){
    console.log(x**3);
}

cube(4);

//7 MAXIMUM
function max(x,y){
    if(x>y){
    console.log("Max is",x);
    }else{
        console.log("Max is",y);
    }
}

max(9,5);

//8 MINIMUM
function min(x,y){
    if(x<y){
    console.log("Min is",x);
    }else{
        console.log("min is",y);
    }
}

min(2,4);

//9 EVEN
function even(x){
    if(x%2 == 0){
        console.log("Even");
    }
}

even(2);

//10 ODD
function odd(x){
    if(x%2 == 1){
        console.log("Odd");
    }
}

odd(3);

//11 FACTORIAL
function factorial(x){
    let fact = 1;
    for(i=1; i <=x ; i++){
        fact *= i;
    }
        console.log(fact);
}

factorial(6)

//12 PRIME
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

Prime(9);   
Prime(7);   