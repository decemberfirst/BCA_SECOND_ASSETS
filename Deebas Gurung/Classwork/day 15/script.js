//....................SWITCH CASE..............
// EXACTLY SAME AS IF ELSE IF
// ONLY SYNTACTIC SUGAR (ANOTHER SYNTAX FOR IF ELSE)

// let okay='not okay';
// switch(okay){
//     case'not ok':
//     console.log('case for not okk matched');
//     break;
//     case'ok':
//     console.log('case for okay matched');
//     break;
//     case'not okay':
//     console.log('case for not okay matched');
//     break;
//     default:
//         console.log('none of the case matched');
// }


// let day=prompt('enter a number');
// switch(day){
//     case"1":
//     console.log('sunday');
//     break;
//      case"2":
//     console.log('monday');
//     break;
//      case"3":
//     console.log('tuesday');
//     break;
//      case"4":
//     console.log('wednesday');
//     break;
//      case"5":
//     console.log('thursday');
//     break;
//      case"6":
//     console.log('friday');
//     break;
//     case'7':
//     console.log('saturday');
//     break;
//    default:
//     console.log('not a day');
// }

// let a=Number(prompt('enter a number'));
// let b=Number(prompt('enter a number'));
// let operation='/';
// switch(operation){
//     case'-':
//         console.log(`${a-b}`);
//         break;
//     case '+':
//         console.log(`${a+b}`);
//         break;
//     case "*":
//         console.log(`${a*b}`);
//         break;
//     case'/':
//      console.log(`${a/b}`);
//      if(a==0){
//         console.log('error');
//      }
//      break;
//     case '%':
//     console.log(`${a%b}`);
//     break;
//     default:
//         console.log('incorrect input');

// }


//Question: Bank Management System Using Switch Statement
// Write a program to simulate a simple bank management system using a menu-driven approach with a switch statement. The program should allow the user to:

// Deposit money into their account.
// Withdraw money from their account.
// Check the current account balance.
// Exit the program.
// Assume the account starts with an initial balance of 100000 rs. When the user selects an option, perform the appropriate action:

// For Deposit, prompt the user to enter the deposit amount and add it to the balance.
// For Withdraw, prompt the user to enter the withdrawal amount. Deduct it from the balance only if there are sufficient funds.
// For Check Balance, display the current balance.
// For Exit, terminate the program

const balance=100000;
let option=prompt('enter the option that you need');
switch(option){
    case 'Withdraw':
        let Withdraw = Number(prompt('Enter the Withdraw amount'));
        if(balance<=Withdraw){
              console.log('Unsufficenet balanace');
        }else{
            console.log('Your new balance after withdrawn is',balance-Withdraw);
        }
        break;
    case 'deposit':
        let deposit = Number(prompt('Enter the deposited  amount'));
        console.log('You have deposited',deposit);
            console.log('Your new balance after depodit is',`${balance+deposit}`);
        break;
    case 'check':
           console.log(balance);
       break;
    default:
           console.log('exited');
    }
    