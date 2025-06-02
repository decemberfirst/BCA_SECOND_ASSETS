//.........SWITCH CASE...........

/* let caseToMatch = 'ola';

switch(caseToMatch){
    case 'Hello':
        console.log('Case matched at Hello');
        break;
    case 'other' :
        console.log('Case matched at other');
        break;
    case 'Agraj':
        console.log('case matched at Agraj');
        break;
    default:
        console.log('None of them matched');
} */

/* 
user1 = Number(prompt('Enter a number'));

switch(user1){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('None of them matched');
} */


/* let firstNumber = Number(prompt('Enter a number'));
let SecondNumber = Number(prompt('Enter a number'));
let Symbol = (prompt('Enter a Symbol'));

switch(Symbol){
    case '+':
        console.log(firstNumber + SecondNumber);
        break;
    case '-':
        console.log(firstNumber - SecondNumber);
        break;
    case '*':
        console.log(firstNumber * SecondNumber);
        break;
    case '/':
        if(SecondNumber == 0){
            console.log('Error:Can not be divided by 0');
        }else{
        console.log(firstNumber / SecondNumber);
        }
        break;
    case '%':
        console.log(firstNumber % SecondNumber);
        break;
    default:
        console.log('Invalid');
} */


/* let accountBalance = 100000;
let Option = prompt("Withdraw, Deposit, Check ?");

switch(Option){
    case 'Withdraw':
        let Withdraw = Number(prompt("Enter Withdraw Amount"));
        if(accountBalance >= Withdraw){
        console.log("You have Withdrawn the amount", Withdraw);
        console.log("Your current Balance after Withdraw is",accountBalance - Withdraw);
        }else{
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
        console.log('Enter Valid data');
}
   */


const Username = "Agraj";
const Pin = "1234";

let ID = prompt('Enter you username');
let pass = prompt('Enter your Pin');

if(ID == Username && Pin == pass){
    let accountBalance = 100000;
let Option = prompt("Withdraw, Deposit, Check ?");

switch(Option){
    case 'Withdraw':
        let Withdraw = Number(prompt("Enter Withdraw Amount"));
        if(accountBalance >= Withdraw){
        console.log("You have Withdrawn the amount", Withdraw);
        console.log("Your current Balance after Withdraw is",accountBalance - Withdraw);
        }else{
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
        console.log('Enter Valid data');
}
}else{
    alert('Invalid username and password');
}

