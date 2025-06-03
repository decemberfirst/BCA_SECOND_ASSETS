// ...............ASSIGNMENT OPERATORS...............

// let ABCD = 5;




// ...............SHOTHAND OPERATOR...............

// let a = b = c = d = e = f = 6;
// console.log(f);


// ...............COMPOUND OPERATOR...............
// let Value = 20;
// console.log(Value +=5);//Subtract
// console.log(Value +=5);//ADD
// console.log(Value *=5);//Multiply
// console.log(Value /=5);//Divide


// let Dollar = Number(prompt("Enter currency in dollar"));
// // console.log(Dollar *=130);
// alert(`Dollar converted into RS.${Dollar*=130} NPR`);

// let NPR = Number(prompt("Enter Nepalese Currency"));
// alert(`Nepalese converted into $${NPR/=130}`);


// let A = C= E = G = Number(prompt("Enter Any Number"));
// let B = D = F = H = Number(prompt("Enter Any Number"));

// console.log(A-=B);//SUB
// console.log(C+=D);//ADD
// console.log(E*=F);//MUL
// console.log(G/=H);//DIV
 

// console.log(`The Value of A-B is=${A-=B}\n The Value of C+D is=${C+=D}\nThe Value of E*F is=${E*=F}\nThe Value of G/H is=${G/=H}\n`)

//Increment and decrement operator

// let value = 44;
// let AfterValue = ++value;
// let Value = 44;
// let Aftervalue = ++value;
// console.log(AfterValue);//Preincrement
// console.log(value)
// console.log(Aftervalue);//Postincrement
// console.log(Value)


// let value = 44;
// let AfterValue = --value;
// let Value = 44;
// let Aftervalue = Value--;
// console.log(AfterValue);//Predecrement
// console.log(value);
// console.log(Aftervalue);//Postdecrement
// console.log(Value);

let myNumber =20;
let mySecondNumber =100;
let myResult = ++myNumber + myNumber-- +mySecondNumber-- - --mySecondNumber;
console.log(myResult);