// let month = Number(prompt("Enter Month"));
// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//         case 2:
//         console.log("Febrary")
//         break;
//         case 3:
//         console.log("March")
//         break;
//         case 4:
//         console.log("April")
//         break;
//         case 5:
//         console.log("May")
//         break;
//         case 6:
//         console.log("jun")
//         break;
//         case 7:
//         console.log("July")
//         break;
//         case 8:
//         console.log("August")
//         break;
//         case 9:
//         console.log("September")
//         break;
//         case 10:
//         console.log("October")
//         break;
//         case 11:
//         console.log("November")
//         break;
//         case 12:
//         console.log("December")
//         break;
//         default :
//         console.log("None")
// }


// let userinput = prompt("Enter Alphabet");
// switch (userinput){
//     case "a":
//         console.log("Its Alphabet")
//         break;
//         case "A":
//         console.log("Its Alphabet")
//         break;
//         case "e":
//         console.log("Its Alphabet")
//         break;
//         case "E":
//         console.log("Its Alphabet")
//         break;
//         case "i":
//         console.log("Its Alphabet")
//         break;
//         case "I":
//         console.log("Its Alphabet")
//         break;
//         case "o":
//         console.log("Its Alphabet")
//         break;
//         case "O":
//         console.log("Its Alphabet")
//         break;
//         case "u":
//         console.log("Its Alphabet")
//         break;
//         case "U":
//         console.log("Its Alphabet")
//         default: {
//             console.log("Its consonent")
//         }
// }

// let grade = prompt("Enter Marks");
// switch (grade){
//     case "A":
//         case "a":
//             console.log("Excellent");
//             break;
//             case "b":
//         case "B":
//             console.log("Very Good");
//             break;
//             case "c":
//         case "C":
//             console.log("Good");
//             break;
//             case "d":
//         case "D":
//             console.log("nice");
//             break;
//             case "e":
//         case "E":
//             console.log("Not Bad");
//             break;
//             case "f":
//         case "F":
//             console.log("Fail");
//             break;
// }


// let userInput = Number(prompt("Enter Number"));

// switch (true) {
//     case (userInput % 2 === 0):
//         console.log("It's even");
//         break;
//     case (userInput % 2 !== 0):
//         console.log("It's odd");
//         break;
//     default:
//         console.log("Not a number");
// }


// let userInput = prompt("Enter Number");
// switch (userInput){
//     case "green":
//         console.log("Go");
//         break;
//          case "yellow":
//         console.log("Ready");
//         break;
//  case "red":
//         console.log("Stop");
//         break;
//         default:{
//             console.log("Its nothing")
//         }
// }

// let userInput = Number(prompt("Enter Number"));
// switch (userInput){
//     case 0:
//         console.log("Zero");
//         break;
//            case 1:
//         console.log("One");
//         break;
//            case 2:
//         console.log("Two");
//         break;
//            case 3:
//         console.log("Three");
//         break;
//            case 4:
//         console.log("Four");
//         break;
//            case 5:
//         console.log("Five");
//         break;
//            case 6:
//         console.log("Six");
//         break;
//            case 7:
//         console.log("Seven");
//         break;
//            case 8:
//         console.log("Eight");
//         break;
//            case 9:
//         console.log("Nine");
//         break;
//         default: {
//             console.log("Dont Know")
//         }
// }

// let userInput = prompt("Enter day");
// switch (userInput){
//     case "sunday":
//         console.log("No weekend");
//         break;
//             case "monday":
//         console.log("No weekend");
//         break;
//             case "tuesday":
//         console.log("No weekend");
//         break;
//             case "wednesday":
//         console.log("No weekend");
//         break;
//             case "thursday":
//         console.log("No weekend");
//         break;
//             case "friday":
//         console.log("Its weekend");
//         break;
//             case "saturday":
//         console.log("Its weekend");
//         break;
//         default:
//             {
//                 console.log("Its Not")
//             }
// }


let circle = prompt("ENTER ANY SHAPE");
const PI = 3.14;
switch(circle){

    case "circle":
        let R = Number(prompt('ENTER THE RADIUS OF CIRCLE'));
        console.log('AREA OF CIRCLE IS', PI*R*R);
        break;
    
    // case "square":
    //     let L = Number(prompt("ENTER THE LENGTH OF SQUARE"));
    //     console.log("AREA OF SQUARE IS ", L*L);
    //     break;
    
    // case "rectangle" :
    //     let len = Number(prompt("ENTER THE LENGTH OF RECTANGLE"));
    //     let b = Number(prompt("ENTER THE BREADTH OF RECTANGLE"));
    //     console.log("AREA OF RECTANGLE IS ", len*b);
    //     break;
    
    default:
        console.log("NOT A SHAPE");
} 
