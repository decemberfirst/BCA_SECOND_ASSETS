//Add, sub, multiplication, division, & modulus
function calculation(x,y){
let sum=x+y;
let multiplication=x*y;
let division=x/y;
let modulus=x%y;
console.log('Sum:' ,sum);
console.log('Product:' ,multiplication);
console.log('Quotient:' ,division);
console.log('Remander:' ,modulus);

}
calculation(100,50);

//Square of a Number
function squareOfANumber(x){
    let squareOfANumber=x**2;
    console.log('The square of ',x +' is',squareOfANumber);
}
squareOfANumber(25);




//Cube of a Number
function cubeOfANumber(y){
    let cubeOfANumber=y**3;
    console.log('The cube of ',y +' is',cubeOfANumber);
}
cubeOfANumber(25);


//Find maximum of two numbers
function findMaximumValue(){
    let a=10;
    let b=30;
    if(a>b){
        console.log(`${a} is the maximum`);
    }else{
        console.log(`${b} is the maximum`);
    }
}
findMaximumValue();


//Find minimum of two numbers
function findMinimumValue(){
    let a=10;
    let b=30;
    if(a>b){
        console.log(`${b} is the minimum`);
    }else{
        console.log(`${a} is the minimum`)
    }
}
findMinimumValue();


//Is even or Not?
function isEven(){
    let a=133;
    if(a%2==0){
        console.log(`${a} is an even number`);
    }else{
        console.log(`${a} is an odd number`)
    }
}
isEven();



//Is Prime?
function isPrime(){
    let num=23;
 numberIsPrime=true;
 for(let i=2;i<num;i++){
    if(num%i==0){
        numberIsPrime=false;
    }
 }   
 if(numberIsPrime){
    console.log(`${num} is a Prime Number`);
 }else{
    console.log(`${num} is not a Prime Number`);
 }
}
isPrime();


//To find the Factorial of a number
function factorialOfANumber(){
    let givenNumber=5;
    factorial=1;
    for(let i=1;i<=givenNumber;i++){
        factorial*=i;
    }
     console.log(`The factorial of a ${givenNumber} is `,factorial);
}
factorialOfANumber();