//-----------SWITCH CASE-----------------
// EXCATLY SAME AS IF ELSE IF
// ONLY SYNTACTIC SUGAR (ANOTHER SYNTAX FOR IF ELSE)

// let userTOMatch = 'bhawana'
// switch(userTOMatch){
//     case 'pandey':
//         console.log('case for pandey match');
//         break;
//     case 'bhawana':
//         console.log('case for bhawana match');
//         break;
//     case 'sunday':
//         console.log('case for sunday match');
//         break;
//         default:
//             console.log('None of the case match');
// }

// let dayToMatch = Number(prompt('enter day number'));
// switch(dayToMatch){
//     case 1:
//         console.log('sunday');
//         break;
//     case 2:
//         console.log('monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('wednesday')
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('friday');
//         break;
//     case 7:
//         console.log('saturday');
//         break;
//     default:
//         console.log('None of the case match');
    
// }
 
// input two numberfrom user and perform + - * %

// let userNumber=Number(prompt('enter first num'));
// let myNumber=Number(prompt('enter second num'));
// let matchsymbol=prompt('enter matchsymbol (+,-,*,/,%');
// switch(matchsymbol){
//     case '+':
//         console.log(userNumber + myNumber);
//         break;
//     case '-':
//         console.log(userNumber - myNumber);
//         break;
//     case '*':
//         console.log(userNumber * myNumber);
//         break;
//     case '/':
//         if(myNumber==0){
//             console.log('cannot divided by zero');
//             break;
//         }else{
//         console.log(userNumber / myNumber);
//         break;
//         }
//     case '%':
//         console.log(userNumber % myNumber);
//         default:
//             console.log('none of the case match');

// }


let accountBalance = 100000;
let Option = prompt("Withdraw, Deposit, Check ?");

switch(Option){
    case 'Withdraw':
        let Withdraw = Number(prompt("Enter Withdraw Amount"));
        if(accountBalance >= Withdraw){
        console.log("You have Withdrawn the amount", Withdraw);
        console.log("Your current Balance after Withdraw is",accountBalance - Withdraw);
         } else{
            console.log('Insufficient fund');
        }
        break;
    case 'Deposit':
        let Deposit = Number(prompt("Enter Deposit Amount"));
        console.log("You have Deposited the amount", Deposit);
        console.log("Your Current Balance after deposit is",accountBalance + Deposit);
        break;
    case 'Check':
        console.log("You have total of",accountBalance);
        break;
    default:
        console.log('EnterValid data')  ;
    } 
