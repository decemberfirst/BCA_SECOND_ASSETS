// // //  // --------SWITCH CASE ----

// // //  //--EXACTLY SAME AS IF ELSE IF--
// // //  // ONLY SYNTACTIC SUGAR( ANOTHER SYNTAX FOR IF ELSE)



// // //  let  doneMatch ="chintan";
// // //  switch(doneMatch){
// // //     case "nepal ":
// // //         console.log("case for nepal  matched");
// // //         break;;
// // //          case "chintan":

// // //             console.log("case for chintan  matched"); break;;
// // //             case "agraj":
// // //             console.log("case for agraj  matched");
// // //              break;;
// // //              default: console.log("none of the case matched")
// // //  }


 let userProm =  Number(prompt("Enter a number"));
 switch(userProm){
    case(1):
    console.log("sunday")
    break;;
    case(2):
    console.log("monday")
    break;;
    case(3):
    console.log("tuesday")
    break;;
    case(4):
// // //     console.log("wednesday")
// // //     break;;
// // //     case(5):
// // //     console.log("thursday")
// // //     break;;
// // //     case(6):
// // //     console.log("friday")
// // //     break;;
// // //     case(7):
// // //     console.log("saturday")
// // //     break;;
// // //     default: console.log("none of the case matched")
// // //  }


// // let firstNumber = Number(prompt("Enter a  fi number"));
// // let secondNumber = Number(prompt("Enter a number"));
// // let signal = (prompt("Enter a symbol"));
// // switch (signal) {
// //   case "+":
// //     console.log(firstNumber + secondNumber)
// //     break;
// //   case "-":
// //     console.log(firstNumber - secondNumber)
// //     break;
// //   case "*":
// //     console.log(firstNumber * secondNumber)
// //     break;
// //   case "/":
// //     if (secondNumber == 0) {
// //       console.log("invalid nbr")
// //     } else {
// //       console.log(firstNumber / secondNumber)
// //     }
// //     break;
// //   case "%":
// //     console.log(firstNumber % secondNumber)
// //     break;
// //   default: console.log("invalid")
// // }

// //    Question: Bank Management System Using Switch Statement
// // Write a program to simulate a simple bank management system using a menu-driven approach with a switch statement. The program should allow the user to:

// // Deposit money into their account.
// // Withdraw money from their account.
// // Check the current account balance.
// // Exit the program.
// // Assume the account starts with an initial balance of 100000 rs. When the user selects an option, perform the appropriate action:

// // For Deposit, prompt the user to enter the deposit amount and add it to the balance.
// // For Withdraw, prompt the user to enter the withdrawal amount. Deduct it from the balance only if there are sufficient funds.
// // For Check Balance, display the current balance.
// // For Exit, terminate the program

// let balance = 100000; // Initial balance
//  {
//   let action = prompt("Choose an option: \n1. Deposit \n2. Withdraw \n3. Check Balance \n4. Exit");
  
//   switch (action) {
//     case "1":
//       let depositAmount = Number(prompt("Enter deposit amount:"));
//       if (depositAmount > 0) {
//         balance += depositAmount;
//         console.log(`Successfully deposited ${depositAmount} rs. New balance: ${balance} rs.`);
//       } else {
//         console.log("Invalid amount! Please enter a valid number.");
//       }
//       break;
      
//     case "2":
//       let withdrawAmount = Number(prompt("Enter withdrawal amount:"));
//       if (withdrawAmount > 0 && withdrawAmount <= balance) {
//         balance -= withdrawAmount;
//         console.log(`Successfully withdrew ${withdrawAmount} rs. Remaining balance: ${balance} rs.`);
//       } else {
//         console.log("Insufficient funds or invalid amount.");
//       }
//       break;

//     case "3":
//       console.log(`Current account balance: ${balance} rs.`);
//       break;

//     case "4":
//       console.log("Exiting the program. Thank you!");
//       break;

//     default:
//       console.log("Invalid option! Please choose a valid number.");
//   }

//   if (action === "4") break;  "Exit"
// }








// let accountBalance = 100000;
// let Option = prompt("Withdraw, Deposit, Check ?");

// switch(Option){
//     case 'Withdraw':
//         let Withdraw = Number(prompt("Enter Withdraw Amount"));
//         if(accountBalance >= Withdraw){
//         console.log("You have Withdrawn the amount", Withdraw);
//         console.log("Your current Balance after Withdraw is",accountBalance - Withdraw);
//         }else{
//             console.log('Insufficient fund');
//         }
//         break;
//     case 'Deposit':
//         let Deposit = Number(prompt("Enter Deposit Amount"));
//         console.log("You have Deposited the amount", Deposit);
//         console.log("Your Current Balance after deposit is",accountBalance + Deposit);
//         break;
//     case 'Check':
//         console.log("You have total of",accountBalance);
//         break;
//     default:
//         console.log('Enter Valid data');
// }

let userName ="chintan"
let passWord ="Chintan123"
 let  ID = prompt("Enter your id");
 let passLock = prompt("Enter your password");
 if( userName==ID && passWord==passLock){let accountBalance = 100000;
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
 } else{
  console.log("username or passowrd is incorrect")
 }

