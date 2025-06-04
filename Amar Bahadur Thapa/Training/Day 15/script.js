//---------------------------------------------------SWITCH CASE----------------------------------------------------//

// EXACTLY SAME AS IF ELSE IF
// ONLY SYNTATIC SUGAR (ANOTHER SYNTAX FOR IF ELSE)


// let userFromInput = 'Amar';

// switch(userFromInput) {
//     case 'Amar':
//         console.log('User name Matched');
//         break;
//     case 'Jadu':
//         console.log('User name Matched');
//         break;
//     case 'Other':
//         console.log('User name Matched');
//         break;
//         default:
//             console.log('None of these case matched')
// }


// let inputFromUser = Number(prompt('Enter the Number'));

// switch(inputFromUser) {
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
//             console.log('None of these case matched');
// }


// let num1 = Number(prompt('Enter First Number'));
// let num2 = Number(prompt('Enter Second Number'));
// let symbol = prompt('Enter Symbol(+,-,*,/,%)');

// switch(symbol){
//     case '+':
//         console.log(num1+num2);
//         break;
//     case '-':
//         console.log(num1-num2);
//         break;
//     case '*':
//         console.log(num1*num2);
//         break;
//     case '/':
//         if(num2 == 0){
//             console.log('Error');
//         }
//         else{
//             console.log(num1/num2);
//         }
//         break;
//         case '%':
//     console.log(num1%num2);
//         break;
//         default:
//             console.log('Invalid Operation');
// }


//-------------------------------Assignment---------------------------------//

// const currentBalance = 100000;
// let userInputOption = prompt('ENTER deposit, withdraw, check and exit as per your requirement.');

// switch(userInputOption){
//     case "deposit" :
//         let depositAmt = Number(prompt("ENTER THE AMOUNT YOU WANT TO DEPOSIT."));
//         console.log('YOUR TOTAL AMOUNT AFTER DEPOSIT IS ', depositAmt+currentBalance);
//         break;
    
//     case 'withdraw' :
//         let withdrawAmt = Number(prompt('ENTER THE AMOUNT YOU WANT TO WITHDARW.'));
//         if(currentBalance>=withdrawAmt){
//         console.log('YOUR TOTAL AMOUNT AFTER WITHDRAWL IS ', currentBalance-withdrawAmt);
//         break;}
//         else{
//             console.log("YOU DON'T HAVE SUFFICIENT BALANCE TO WITHDRAW.");
//             break;
//         }

//     case 'check' :
//         console.log("YOUR CURRENT BALANCE IS ", currentBalance);
//         break;

//     case 'exit' :
//         console.log('EXIT');
//         break;
    
//     default :
//     console.log('INVALID OPTION. TRY AGAIN USING EXIXTING OPTION.');
// }

