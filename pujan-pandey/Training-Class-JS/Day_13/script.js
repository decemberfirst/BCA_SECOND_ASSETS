//-----------------Switch Case------------------
//Exaactly same as if else if
//only syntactic sugar(another syntax for if else)



// let options = "Many";
// switch (options) {

//     case "Some":
//         console.log("Unmatched");
//         break;
//     case "Many":
//         console.log("Matched");
//         break;
//     case "Very":
//         console.log("Unmatched");
//         break;
//     case "Few":
//         console.log("Unmatched");
//         break;
//     default:
//         console.log("Not found")
// }


// let days = Number(prompt("Enter a Number"));
// switch (days) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Saturday")
//         break;
//     default:
//         console.log("Not a valid day")
// }



// --------------------Calculator-------------------------

// let first = Number(prompt("Enter a Number"));
// let second = Number(prompt("Enter a Second Number"));
// let sign = prompt("Enter a sign");
// switch (sign) {
//     case "+":
//         console.log(`The sum is ${first + second}`);
//         break;
//     case "-":
//         console.log(`The difference is ${first - second}`);
//         break;
//     case "/":
//         if (second == 0) {
//             console.log("undefined")
//         } else {
//             console.log(`${first / second}`);
//         }
//         break;
//     case "%":
//         console.log(`${first % second}`);
//         break;
//     case "*":
//         console.log(`${first * second}`);
//         break;
//     default:
//         console.log("Not a valid sign")
// }


alert("Namaste🙏  Sir/Madam Welcome Paisa Bazar!")
let userId=Number(prompt("Enter user id"))
let userPass=Number(prompt("Enter your password"));
let id=123;
let pass=123;
if(userId==id && userPass==pass){
let initialBalance = 100000;
let depositeAmount = Number(prompt("Enter the amount you want to deposite in to your Account"));
let withdrawAmount = Number(prompt("Enter the amount you want to withdraw from your Account"));
let currentBalance = initialBalance + depositeAmount - withdrawAmount;
let transaction = prompt("How can I help you Sir/Madan! For.... Balance enquiry=Balance; WithdrawAmount=withdrawn;  initalbalance = initial; deposit = deposit; fulldetail=detail; and exit=exit");

switch (transaction) {
    case "initial" || "Initial":
        console.log(`Your initial Balance is Rs. ${initialBalance}`);
        break;

    case "deposit" || "Deposit":
        console.log(`Rs. ${depositeAmount} is deposited in to your account. Balance available:Rs. ${currentBalance}, Thank u visit again!...😊`);
        break;
    case "withdrawn" || "Withdrawn":
        if (initialBalance > withdrawAmount) {
            console.log(`Rs. ${withdrawAmount} is withdrawn from your account. Balance available:Rs. ${currentBalance}, Thank u visit again!...😊`)
        } else {
            console.log("Opps!..😒 Dear sir/madam we are unable to perform your transaction due to Insufficient Balance in your Account")
        } break;
    case "balance" || "Balance":
        console.log(`Your current Balance is Rs. ${currentBalance}`)
        break;

    case "exit" || "Exit":
        console.log("Exit......Thank u visit again!...😊")
        break;
    case "detail" || "Detail":
        if (initialBalance >= withdrawAmount) {
            console.log(`Your initial Balance is Rs. ${initialBalance},Rs. ${depositeAmount} is deposited in to your account.,Rs. ${withdrawAmount} is withdrawn from your account.,Your current Balance is Rs. ${currentBalance}, Thank u visit again!...😊`)
        } else {
            console.log(`Your initial Balance is Rs. ${initialBalance}, Rs. ${depositeAmount} is deposited in to your account., Oops!..😒  Rs. ${withdrawAmount} isnot withdrawn from your account due to insufficient balance.`)
        }
        break;

    default:
        console.log("Invalid");
}
}else{
alert("Invalid id or password")
}
