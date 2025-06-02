// --------------------SWITCH CASE--------------------
// EXACTLY SAME AS IF ELSE IF
// ONLY SYNTACTIC SUGAR (ANOTHER SYNTAX FOR IF ELSE)

// let myname='anisha';
// switch(myname){
//     case 'anisha':
//         console.log('user Name anisha');
//     break;
//     case 'pranshansha':
//         console.log('user Name pranshansha');
//     break;
//     case 'shreeya':
//         console.log('user Name shreeya');
//     break;
//     default:
//         console.log('none of the user Name matched');
// }
// let userDay=Number(prompt('Enter a days'));
// switch(userDay){
//     case 1:
//         console.log('Sunday');
//     break;
//     case 2:
//         console.log('Monday');
//     break;
//     case 3:
//         console.log('Tuesday');
//     break;
//     case 4:
//         console.log('Wednesday');
//     break;
//     case 5:
//         console.log('Thursday');
//     break;
//     case 6:
//         console.log('Friday');
//     break;
//     case 7:
//         console.log('Saturday');
//     break;
//     default:
//         console.log('none of the days matched');
// }

// let userInput=(prompt('Enter a number'));
// let userINput=(prompt('Enter a number'));
// let result=userInput+userINput;
// let symbol=(prompt('Enter your symbol(+,-,*,/,%)'));
// switch(symbol){
    // case '+': 
    // console.log(userInput + userINput);
    // break;
    // case '-': 
    // console.log(userInput - userINput);
    // break;
    // case '*': 
    // console.log(userInput * userINput);
    // break;
    // case '/': 
    // if(userINput==0){
    //     console.log('not divisible')
    // } else{
    // console.log(userInput / userINput);
    // }
    // break;
    // case '%': 
    // console.log(userInput % userINput);
    // break;
    // default:
    //     console.log('none of the symbol matched');
// }


// ASSIGNMENT
// Deposit money into their account.
// Withdraw money from their account.
// Check the current account balance.
// Exit the program.
// Bank Management System

let balance = 100000;
let amount;

do {
    amount = Number(prompt(
        "Welcome to the Bank Management System\n\n" +
        "1. Deposit Money\n" +
        "2. Withdraw Money\n" +
        "3. Check Balance\n" +
        "4. Exit\n\n" +
        "Enter your choice (1-4):"
    ));

    switch (amount) {
        case 1:
            let depositAmount = Number(prompt("Enter amount to deposit:"));
            if (depositAmount > 0) {
                balance += depositAmount;
                alert("Rs." + depositAmount + " deposited successfully.\nNew Balance: Rs." + balance);
            } else {
                console.log("Invalid deposit amount.");
            }
            break;

        case 2:
            let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
            if (withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                alert("Rs." + withdrawAmount + " withdrawn successfully.\nNew Balance: Rs." + balance);
            } else if (withdrawAmount > balance) {
                alert("Insufficient balance.");
            } else {
                console.log("Invalid withdrawal amount.");
            }
            break;

        case 3:
            alert("Current Balance: Rs." + balance);
            break;

        case 4:
            alert("Thank you for using our service!");
            break;

        default:
            alert("Invalid choice. Please select from 1 to 4.");
            break;
    }

} while (amount !== 4);

