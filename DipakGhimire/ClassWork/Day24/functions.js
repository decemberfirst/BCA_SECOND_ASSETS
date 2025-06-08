// Create a function to find sum of two numbers

// function sum(a,b){
//     let result = a + b;
//     console.log(result);
// }

// sum(2,2);


// Create a function to print welcome Message.

//  let name = prompt("Enter Your name");
// let address = prompt("Enter your address");

// function welcomeUser(name,address){
   

//     console.log(`Hello ${name}, welcome to our platform, its good to know you are from ${address}, se you next day `);
    
// }

// welcomeUser(name,address);


// StaticFunction => without a parameters :
// function StaticFunction(){
//     console.log("Hello World!");
// }


// Take two input from user
// find smallest
// let num1 = Number(prompt("Enter 1st number"));
// let num2 = Number(prompt("Enter 2nd number:"));

// function findSmallest(a,b){
   

//     if(num1!=num2){
//         if(num1<num2){
//             console.log("num1 is smallest then num2");
//     }
//     else{
//         console.log("num2 is smallest then num1");
//     }

//     }
//     else{
//         console.log("Both are equal");
        
//     }
// }

// findSmallest(num1,num2)


// Array:
// function sumArrayEle(array){
//     let sum = 0;

//     for(let i = 0; i<array.length; i++){
//         sum += array[i];
//     }

//     console.log(sum);
    
    
// }

// let arry = [1,2,3,4]
// sumArrayEle(arry);


// Function with return 
// function sum (a,b){
//     let sum = a + b;
//     return sum;
// }

// let result = sum(2,2);
// console.log(result);


let welcomeUser = (name) => {
    let message = `Hello, ${name}, Welcome to our website `;
    return message;
}

let result = welcomeUser("Deepak");
console.log(result);


