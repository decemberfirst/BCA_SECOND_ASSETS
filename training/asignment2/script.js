// 13



// 14 age group classifier

// let age =18;
// switch(true){
//      case(age>0 && age<=12):
//           console.log("young");
//           break;
//      case(age>=13 && age<=19):
//           console.log("teenager");
//           break;
//     case(age>19 && age<=40):
//           console.log("adult");
//           break;
//     case(age>40 && age<=80):
//           console.log("old");
//           break;
//     case(age>80 && age<=100):
//           console.log("too  old");
//           break;    
//     case(age>100):
//           console.log("you should be in heaven");
//           break;        
//           default:
//             console.log('not an age')
// }

// 15 os based message
//  let operatingSystem ="windows"
//    switch(operatingSystem){
//     case "windows":
//         console.log("welcome to windows");
//         break;
//     case "linux":
//         console.log("wlecome to free and opensource operating system");
//         break;
//     case "mac":
//         console.log("welcome to mac by apple");
//         break;
//      default:
//         console.log("not a valid os")           
//    }

// 16 season based on month

// let month ="janaury";
// switch(month){
//     case("janaury" || "february" || "march"):
//          console.log("its summer season")
//          break;
//        case("april" || "may" || "june"):
//              console.log("its autumn");
//              break;
//         case("july" || "august" || "september"):
//              console.log("its rainy");
//              break;
//          case("october" || "november" || "december"):
//              console.log("its winter");
//              break;      
//          default:
//             console.log("please enter a valid month")         
// }

// 17  rules of football or cricket
// let sports ="football";

// switch(sports){
//     case "football":
//         console.log(`dont touch ball with hand
//                     dont foul on opponent`);
//           break;           
//     case "cricket":
//         console.log(`outside stadium will bne given 6 runs 
//                      if went outside with touching ground will 
//                      be given 4 runs`);
//           break;   
//       default:
//         console.log("please enter a valid sports")
// }

// 18 display the facts about every planet

// let planet ="earth";
//    switch(planet){
//     case "earth":
//         console.log("only known planet with human life");
//         break;
//     case "mercury":
//         console.log("closest to the sun");
//         break;
//    case "venus":
//         console.log("hottest planet");
//         break;
//    case "mars":
//         console.log("known as the red planet");
//         break;
//    case "jupiter":
//         console.log("largest planet");
//         break;
//    case "saturn":
//         console.log("known for its prominent ring system");
//         break;
//    case "uranus":
//         console.log("An ice giant with bluish color (due to methane)");
//         break;
//   case "neptune":
//         console.log("farthest planet from the sun");
//         break;
//   default: 
//       console.log("enter a valid planet name")                                    

//    }

// 19
//  let fruit ="apple";

// switch(fruit){
//     case "apple":
//         console.log("apple are $1.50 each");
//         break;
//     case "banana":
//         console.log("banana are 0.75 each");
//         break;
//     case "orange":
//         console.log("orange are 1.25 each");
//         break;
//     default:
//     console.log("sorry, we don't have that fruit ");
// }
 
//20 Electricity Bill Slabs Switch based on units to apply different tariffs.

// let electricityBill = 78;

// switch(true){
//     case (electricityBill>=1000):
//         console.log("you electricity bill is RS 1900");
//         break;
             
//      case (electricityBill>=500):
//         console.log("you electricity bill is RS 899");
//          break;
//     case (electricityBill>=300):
//         console.log("you electricity bill is RS 599");
//          break;
//     case (electricityBill>=100):
//         console.log("you electricity bill is RS 299");
//          break;
//     case (electricityBill>=0 && electricityBill<100):
//         console.log("you dont have to pay bill");
//          break;     
//     default:
//         console.log("please enter any valid electricity bill")

// }

// Tax Calculator by Region Apply tax rate based on country code.

// let countryCode = "aus"
// let income = 60000

// switch(countryCode){
//     case "nep":
//         console.log("you have to pay 30% TAX");
//         console.log(⁠ your tax is RS: ${income*15/100} ⁠);
//         break; 
//     case "us":
//         console.log("you have to pay 40% TAX");
//         console.log(⁠ your tax is $ ${income*40/100} ⁠);
//         break; 
//     case "ind":
//         console.log("you have to pay 19% TAX");
//         console.log(⁠ your tax is RS ${income*19/100} ⁠);
//         break; 
//     case "aus":
//         console.log("you have to pay 29% TAX");
//         console.log(⁠ your tax is aud $ ${income*29/100} ⁠);
//         break;       
//      case "ph":
//         console.log("you have to pay 12% TAX");
//         console.log(⁠ your tax is ${income*12/100} pesos ⁠);
//         break;     
//     default:
//         console.log("please enter a valid country code")          
// }

// 22Academic Department Info Display information for a chosen department.

// let department ="bca"

// switch(department){
//     case "bca":
//         console.log(`head: atal tharu
//             core subjects: programming, dsa, networking, os, dbms
//             scope: web developer, software developer, ai/ml enginner, app developer, dba`);
//             break; case "bca":
//         console.log(`head: aasish bhandari
//             core subjects: finance, account, marketing`);
//             break;
//     default:
//         console.log("please enter a valid course name")
// }


// 23 Login Role Check if the user is Admin, Teacher, Student.(diff case for usernames && password for each roles)

// let userName ="teacher";
// let password="teacher123";

// switch(true){
//     case(userName=="admin" && password=="admin"):
//        console.log("welcome admin");
//        break;
//      case(userName=="teacher" && password=="teacher123"):
//        console.log("welcome teacher");
//        break;
//      case(userName=="student123" && password=="student123"):
//        console.log("welcome admin");
//        break;    
//     default:
//         console.log("please enter valid username or password")     
// }

// 24. Discount Application Switch based on coupon code to apply discounts.

// let couponCard ="xeeb123#()20";

// switch(couponCard){
//    case "xeeb123#()20":
//          console.log("you get 25% discount");
//          break;
//      case "abcsus10":
//          console.log("you get 10% discount");
//          break;
//      default:
//         console.log("sorry you did not get any discount")    
// }
      
// 25 Flight Class Information Show features for Economy, Business, or First class.

// let flightClass ="economy"

// switch(flightClass){
//     case "economy":
//         console.log(`features for economy are:
//             luggage upto 30kg
//             free candy`);
//         break;    
//      case "business":
//         console.log(`features for bsuiness are:
//            luggage upto 80kg
//         big room for comfort
//         unlimited food`);
//         break;    
//      case "First class":
//         console.log(`features for First class are:
//             luggage upto 150kg
//            private caretaker
//            top hospitality
//            `);
//         break;  
//     default:
//         console.log("please select a proper flight class")              
// }

// 26 Customer Support Menu Switch to navigate support options


// let option =2

// switch(option){
//     case 1:
//          console.log("Live Chat:");
//         console.log("please call us on +1234567 for live chat");
//         break;
//      case 2:
//          console.log("refund");
//         console.log("check at refund section on our app to meet criteria");
//         break;
//      case 3:
//          console.log("order track");
//         console.log("please visit our order section to track your order");
//         break;   
//     default:
//         console.log("something went wrong")         
// }