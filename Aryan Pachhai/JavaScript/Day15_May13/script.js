console.log('JS has been loaded');

// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));
// for(let num=num1;num<=num2;num++){
//     if(num%2==1){
//         console.log(num);
//     }
// }


//                                       SWITCH CASE

// SAME AS IF ELSE IF
// ONLY SYNTACTIC SUGAR (ANOTHER SYNTAX FOR IF ELSE) 

// let userName='Aryan';
// switch(userName){
//     case 'Aryan':
//         console.log('User name matched as Aryan');
//         break; //Without the break all the output behide the orignal output will be printed  
//     case 'Other':
//         console.log('Username matched for other');
//         break;
//     case 'Ram':
//         console.log('Username matched for Ram');
//         break;        
//         default://
//             console.log('None of the username matched')
// }

// let dayNumber=Number(prompt('Enter day number'));
// switch(dayNumber){
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break; 
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;    
//     case 6:
//         console.log('Friday');
//         break;    
//     case 7:
//         console.log('Saturday');
//         break;
//         default:
//             console.log('Not a day number');
// }



// let num1=Number(prompt('Enter a number'));
// let num2=Number(prompt('Enter another number'));
// let operator=prompt('Enter operator');
// switch(operator){
//     case '+':
//         console.log(`${num1} + ${num2} = ${num1+num2}`)
//         break;
//     case '-':
//         console.log(`${num1} - ${num2} = ${num1-num2}`)
//         break;    
//     case '*':
//         console.log(`${num1} * ${num2} = ${num1*num2}`)
//         break;
//     case '/':
//         if(num2==0){
//             console.log('Error');
//         }
//         else{
//             console.log(`${num1} / ${num2} = ${num1/num2}`)
//         }
//         break;
//         default:
//             console.log('Invalid operator');
// }




//                                                BANK MANAGEMENT SYSTEM


// let userBalance=100000;
// let operation=prompt('Enter operation you want to apply');
// switch(operation){
//     case 'Deposit':
//         let userDeposit=Number(prompt('Enter deposite amount'));
//         userBalance +=userDeposit;
//         console.log(`The user has deposited ${userDeposit} amount`);
//         console.log(`The user balance is ${userBalance}`);
//         break;
//     case 'Withdraw':
//         let userWithdraw=Number(prompt('Enter withdrawal amount'));
//         if(userBalance<=userWithdraw){
//             console.log('Insufficent balance');
//         }
//         else{
//         userBalance -=userWithdraw;
//         console.log(`The user has withdraw ${userWithdraw} amount`);
//         console.log(`The user balance is ${userBalance}`);
//          }
//         break;
//     case 'Balance':
//         console.log(`The user total balance is ${userBalance}`);
//         break;
//     case 'Exit':
//         console.log('Program terminated');
//         break;
//         default:
//             console.log('Enter valid operation');        
            
// }




