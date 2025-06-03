// 1. Add Two numbers
function sum(a,b){
    console.log(a + b);
}

sum(10,10);

// 2. Sub Two numbers
function sub(a,b){
    console.log(a - b);
}

sub(20,10);

// 3. mult Two numbers
function mult(a,b){
    console.log(a * b);
}

mult(2,2);

// 4. Divi Two numbers
function divi(a,b){
    console.log(a / b);
}

divi(2,4);

// 5. Square of a numbers
function sum(a){
    console.log(a*a);
}

sum(2);

// 6. Cube of a numbers
function sum(a){
    console.log(a*a*a);
}

sum(2);

// 7. Square of Two numbers
function sum(a){
    console.log(a*a);
}

sum(2);

// 8. Maximum of Two numbers
function max(a,b){
    if (a != b){
        if(a > b){
        console.log(`Number ${a} is greater then number ${b}`);
    }

    else{
         console.log(`Number ${b} is greater then number ${a}`);
    }
    }
    else{
        console.log("Both are equal");
        
    }
}

max(2,4);


// 9. Minimum of Two numbers
function min(a,b){
    if (a != b){
        if(a < b){
        console.log(`Number ${a} is less then number ${b}`);
    }

    else{
         console.log(`Number ${b} is less then number ${a}`);
    }
    }
    else{
        console.log("Both are equal");
        
    }
}

min(2,4);


// 10. ODD check
function odd(a){
    if(a % 2 != 0){
        console.log(`Number ${a} is a odd number`);
    }
    else{
        console.log(`Number ${a} is not a odd number`);
        
    }
}

odd(2);

// 11. factorial of a number 
function factorial(a){
   for(let i = a; i>0; i--){
    console.log(i);
   }
}

factorial(1);

// 12. Prime Check
function prime(a){
    let isPrime = true;
   for(let i = 2; i <= Math.sqrt(a); i++){
    if(a % i == 0){
        isPrime = false;
        break;
    }
   }

   if(isPrime){
    console.log(`Number ${a} is a prime`);
   }
   else{
    console.log(`Number ${a} is not a prime`);
   }
}

prime(2);