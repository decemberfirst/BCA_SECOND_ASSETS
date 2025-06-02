
// let pin=5432;
// let attempt=3;
//   let userPin=Number(prompt("Enter your pin"));
// for (;;){
//     if(attempt && userPin==pin){
// console.log("Logged In");
// break;
//     }else{
//     userPin=Number(prompt("Enter your pin"));
//     console.log("Wrong Input or You have been blocked")
//     attempt--;
//     console.log(attempt)
//     }

// }





// for(variable initialize; condition; increment/decrement);
// use while loop when you don't know how much iteration it takes



//--------------------------------while loop---------------------------
//entry control loop
// let count=1;
// while(count<=10){
//     multiple=5*count;
//     console.log(`5*${count}=${multiple}`);
//     count++;
// }




//--------------------------------Do While Loop------------------------
//exit control loop

// do{
// console.log("Hello World")
// }while(false);

// let mycount=4;
// do{
//     console.log(mycount);
//     mycount--;
// }while(mycount>0);



// let multiply = 1;
// do {
//     multi = 5 * multiply;
//     console.log(`5*${multiply}=${multi}`)
//     multiply++;
// } while (multiply <= 10);




// let firstInput=Number(prompt("Enter a first number"));
// let secondInput=Number(prompt("Enter a second number"));
// while(firstInput<=secondInput ){
//     console.log(firstInput);
//     firstInput++;
// }



// let firstNumber=Number(prompt("Enter a number"));
// let secondNumber=Number(prompt("Enter a number"));
// while(firstNumber<=secondNumber){
//     console.log(firstNumber)
//     firstNumber++;
// }


//why?
// let i = 3;
// while (i) {
//   console.log( i );
//   i--;
// }

//even between 1-20;
// for(let i=1;i<20;i++){
//    if(i%2==0){
//     console.log(i);
//    }
// }

//multiplication table of user input
// let userInput=Number(prompt("Enter a number you want a multiplication"));
// for(let i=1;i<=10;i++){
//     multiply=userInput*i;
//     console.log(`${userInput}*${i} = ${multiply}`)

// }



//factorial of a number

// let factorial=Number(prompt("Enter a number you want factorial"));
// for(let i=1;i<=factorial;i++){
//     if(factorial%i==0){
//         console.log(i)
//     }
// }



//Time counter 10-0;

// for(let i=10;i>=0;i--){
//     console.log(i);
// if(i===0){
//         console.log("Time up")
//     }
// }




//*pattern
// let inp=(prompt("Enter a number of * you want"));
// for(let i=0;i<inp;i++){
//     let row=' ';//controls row
//     for(let j=0;j<=i;j++){
//         row+='*';//controls column

//     }console.log(row);
// }




//number pyramid

// let inputFromUser=prompt("Enter a number");
// for(let i=1; i<=inputFromUser;i++){
//     let row=' ';
//     for(let j=1;j<=i;j++)
//         {
//     row+=j + " ";

// }console.log(row)}





// let firstNumber=Number(prompt('Enter the first Number'))
// let secondNumber=Number(prompt('Enter the second'));
// for(let i=firstNumber+1;i<secondNumber;i++){
//    let total=0;
//     total+=i;
//     console.log(`The numbers between ${firstNumber} and ${secondNumber} are =${total}`)
// }

// let sum = 0;
// let firstNum = Number(prompt("Enter a number you wanna begin with"));
// let secondNum = Number(prompt("Enter a number you wanna endup"));
// for (let i=firstNum;i<=secondNum;i++) {
//     if (i % 2 == 0) {
//         sum = sum + i;
        
//     }
// }console.log(sum)





// let firstNum = Number(prompt("Enter a number you wanna begin with"));
// let secondNum = Number(prompt("Enter a number you wanna endup"));
// let i=firstNum;
// let sum= 0;
// while(i<=secondNum){
//  if (i % 2 == 0) {
//        sum = sum + i;
//     }
//        i++;
// }console.log(sum);


// let firstNum = Number(prompt("Enter a number you wanna begin with"));
// let secondNum = Number(prompt("Enter a number you wanna endup"));
// let sum=0;
// while(firstNum<=secondNum){
//  if ( firstNum % 2!=0) {
//        sum=sum + firstNum;
//        console.log(firstNum);
//     }
//        firstNum++;
// }console.log(sum);

// let firstNum = Number(prompt("Enter a number you wanna begin with"));
// let secondNum = Number(prompt("Enter a number you wanna endup"));
// let i=firstNum;
// let sum=0;
// do{
//     if (i % 2 == 0) {
//        sum += i;
//     }
//        i++;
  
//        console.log(i);
// }
// while(i<=secondNum);

// for(let i=100;i>=1;i--){
//    console.log(i);
// }


// let firstNumber=Number(prompt("Enter first Number"));
// let secondNumber=Number(prompt("Enter ssecond Number"));
// for(let i=firstNumber;i<=secondNumber;i++){
//    console.log(i)
// }




