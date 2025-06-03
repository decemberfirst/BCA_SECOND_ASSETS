// ASSIGNMENTS
// 1)
// let userMonth=Number(prompt('Enter a month'));
// switch(userMonth){
//     case 1:
//         console.log('Baishak');
//     break;
//     case 2:
//         console.log('Jestha');
//     break;
//     case 3:
//         console.log('Ashar');
//     break;
//     case 4:
//         console.log('Shrawan');
//     break;
//     case 5:
//         console.log('Bhadra');
//     break;
//     case 6:
//         console.log('Ashwin');
//     break;
//     case 7:
//         console.log('Kartik');
//     break;
//     case 8:
//         console.log('Mangshir');
//     break;
//     case 9:
//         console.log('Poush');
//     break;
//     case 10:
//         console.log('Magh');
//     break;
//     case 11:
//         console.log('Falgun');
//     break;
//     case 12:
//         console.log('Chaitra');
//     break;
//     default:
//         console.log('none of the months matched');
// }

// 2)
let userAlphabet=(prompt('enter your alphabet'));
let vowel;
switch(userAlphabet){
    case 'a':
        console.log('vowel');
    break;
    case 'e':
        console.log('volwel');
    break;
    case 'i':
        console.log('vowel');
    break;
    case 'o':
        console.log('vowel');
    break;
    case 'u':
        console.log('vowel');
    break;
    default:
        console.log('consonant');
}

// 3)
let userNumber=(prompt('enter your number'));
switch(userNumber){
    case 'A':
        console.log('excellent');
    break;
    case 'B':
        console.log('very good');
    break;
    case 'C':
        console.log('good');
    break;
    case 'D':
        console.log('satisfied');
    break;
    case 'E':
        console.log('poor');
    case 'F':
        console.log('fail');    
    break;
    default:
        console.log('Invalid ');
}
// 4)

// 5)
let userSignal=(prompt('enter your signal'));
switch(userSignal){
    case 'red':
        console.log('stop');
    break;
    case 'yellow':
        console.log('ready');
    break;
    case 'green':
        console.log('go');
    break;
    default:
        console.log('not rule');
}

// 6)
let userNum=(prompt('enter your Number'));
switch(userNum){
    case '0':
        console.log('zero');
    break;
    case '1':
        console.log('one');
    break;
    case '2':
        console.log('two');
    break;
    case '3':
        console.log('three');
    break;
    case '4':
        console.log('four');
    break;
    case '5':
        console.log('five');
    break;
    case '6':
        console.log('six');
    break;
    case '7':
        console.log('seven');
    break;
    case '8':
        console.log('eight');
    break;
    case '9':
        console.log('nine');
    break;
    default:
        console.log('not a number');
}

// 7)
let userDay=(prompt('enter your day type'));
switch(userNum){
    case 'sunday':
        console.log('weekday');
    break;
    case 'monday':
        console.log('weekday');
    break;
    case 'tuesday':
        console.log('weekday');
    break;
    case 'wednesday':
        console.log('weekday');
    break;
    case 'thursday':
        console.log('weekday');
    break;
    case 'friday':
        console.log('weekend');
    break;
    case 'saturday':
        console.log('weekend');
    break;
    default:
        console.log('not a day type');
}

// 8)
let userArea=(prompt('Enter your area'));
let userRadius=Number(prompt('Enter your radius'));
let userLenght=Number(prompt('Enter your length'));
let userHeight=Number(prompt('Enter your height'));
const PI=3.14;
switch(userArea){
    case 'rectangle':
        console.log('l*b');
    break;
    case 'triangle':
        console.log('PI*r*r');
    break;
    case 'square':
        console.log('l*l');
    break;
    default:
        console.log('not a area');
}
// 9)
let userdays=(prompt('enter your day type'));
switch(userdays){
    case 'january':
        console.log('31 days');
    break;
    case 'feburary':
        console.log('28 days');
    break;
    case 'march':
        console.log('31 days');
    break;
    case 'april':
        console.log('30 days');
    break;
    case 'may':
        console.log('31 days');
    break;
    case 'june':
        console.log('30 days');
    break;
    case 'july':
        console.log('31 days');
    break;
    case 'august':
        console.log('31 days');
    break;
    case 'september':
        console.log('30 days');
    break;
    case 'oct':
        console.log('31 days');
    break;
    case 'nov':
        console.log('28 days');
    break;
    case 'december':
        console.log('31 days');
    break;
    default:
        console.log('days not matched');
}

// 10)
let userLanguage=(prompt('enter your day type'));
switch(userLanguage){
    case 'english':
        console.log('english langauage');
    break;
    case 'nepali':
        console.log('nepali langauage');
    break;
    case 'french':
        console.log('french language');
    break;
    case 'spanish':
        console.log('spanish language');
    break;
    default:
        console.log('not any language');
}

// 11)
let userProblem=(prompt('enter your day type'));
switch(userProblem){
    case '1':
        console.log('Add');
    break;
    case '2':
        console.log('Subtract');
    break;
    case '3':
        console.log('Multiply');
    break;
    case '4':
        console.log('Divide');
    break;
    default:
        console.log('not any operator matched');
}

// 12)
let userAge=(prompt('enter your day type'));
switch(userAge){
    case '0-10':
        console.log('child');
    break;
    case '12-19':
        console.log('teen');
    break;
    case '20-35':
        console.log('adult');
    break;
    case '36-50':
        console.log('senior');
    break;
    default:
        console.log('not any age matched');
}

// 13)
let userMessage=(prompt('enter your day type'));
switch(userMessage){
    case '1':
        console.log('micro based message');
    break;
    case '2':
        console.log('window based message');
    break;
    case '3':
        console.log('linux based message');
    break;
    default:
        console.log('not any message matched');
}

// 14)
let userMonth=(prompt('enter your season by month'));
switch(userMonth){
    case 'march-may':
        console.log('spring season');
    break;
    case 'june-august':
        console.log('summer season');
    break;
    case 'september-november':
        console.log('autumn season');
    break;
    case 'december-february':
        console.log('winter season');
    break;
    default:
        console.log('not any season of month matched');
}
// 15)
let userSport=(prompt('enter your season by month'));
switch(userSport){
    case '1':
        console.log('football sport');
    break;
    case '2':
        console.log('volleyball sport');
    break;
    case '3':
        console.log('batminton sport');
    break;
    case '4':
        console.log('circket sport');
    break;
    default:
        console.log('not any sport matched');
}

// 16)
let userPlanet=(prompt('enter your season by month'));
switch(userPlanet){
    case 'MERCURY':
        console.log('closest planet to the sun');
    break;
    case 'VENUS':
        console.log('known as earths sister planet');
    break;
    case 'EARTH':
        console.log('only planet known to support life');
    break;
    case 'MARS':
        console.log('often called the Red planet');
    break;
    case 'JUPITER':
        console.log('largest planet in the solar');
    break;
    case 'SATURN':
        console.log('famous for its spectacular ring');
    break;
    case 'URANUS':
        console.log('planet that rotates on its side ');
    break;
    case 'NEPTUNE':
        console.log('farthest planet from the sun ');
    break;
    default:
        console.log('not any planet matched');
}

// 17)
let userItem=(prompt('enter your item'));
switch (userItem) {
    case "1":
        item = "Burger";
        price = 5.99;
    break;
    case "2":
        item = "Pizza";
        price = 8.99;
    break;
     case "3":
        item = "Pasta";
        price = 7.49;
    break;
    case "4":
        item = "Salad";
        price = 4.99;
    break;
    case "5":
         item = "Soda";
         price = 1.49;
    break;
    default:
        console.log("Please select a valid item from the menu.");  
}

// 18)
let userPrice=(prompt('Enter your item price'));
let totalItemPrice = price * quantity;
switch (totalItemPrice) {
    case (quantity >= 1 && quantity <= 3):
        totalItemPrice = totalItemPrice; // No discount
    break;
    case (quantity >= 4 && quantity <= 6):
       totalItemPrice = totalItemPrice * 0.90; // 10% discount
    break;
    case (quantity > 6):
        totalItemPrice = totalItemPrice * 0.80; // 20% discount
    break;
    default:
        totalItemPrice = totalItemPrice;
}

// 19)
let countryCode=(prompy('Enter your code'));
switch(countryCode){
    case "us":
        console.log('7% tax');
    break;
    case "in":
        console.log('18% tax');
    break;
    case "ca":
        console.log('5% tax');
    break;
    case "au":
        console.log('10% tax');
    break;
    default:
        console.log('tax rate not defined for this country code');
}

// 20)
let department=(prompt('Enter your department'));
switch(department){
    case"computer science":
        console.log('focuses on software development');
    break;
    case"mechanical engineer":
        console.log('focuses on the design and manufacturing');
    break;
    case"civil engineering":
        console.log('focuses on infrastructure design');
    break;
    case"bio":
        console.log('focuses on the study of living organisms');
    break;
    default:
        console.log('please select a department to view its information');
}

// 21)
let expression=(prompt('Enter your expression'));
switch(expression) {
    case value1:
        console.log('Code to execute if expression equals value1');
        break;
    case value2:
        console.log('Code to execute if expression equals value2');
        break;
    case value3:
        console.log('Code to execute if expression equals value3');
        break;
    default:
        console.log('Code to execute if none of the cases match');
}

// 22)
let couponCode=(prompt('Enter your coupon code'));
switch(couponCode) {
        case 'SAVE10':
            console.log('10% discount');
         break;
        case 'SAVE20':
          console.log('20% discount');
         break;
        case 'SAVE30':
             console.log('30% discount');
        break;
        case 'BLACKFRIDAY':
             console.log('50% discount for special event');
         break;
        default:
            console.log('Invalid coupon code');
}

// 23)
let userChoice=(prompt('welcome to the navigation support'));
switch(userChoice) {
        case '1':
            console.log('how To Navigate Website');
        break;
        case '2':
            console.log('how To Search Products');
        break;
        case '3':
            console.log('how To Reset Password');
        break;
        case '4':
            console.log('how To Access Account');
        break;
        case '5':
            console.log("Thank you for using Navigation Support. Goodbye!");
        break;
        default:
            console.log("Invalid choice. Please select a valid option.");
}

// 24)
let description=(prompt('Enter your description'));
switch (description) {
    case value1:
        console.log('code to be executed if expression === value1');
        break;
    case value2:
        console.log('code to be executed if expression === value2');
        break;
    case value3:
        console.log('code to be executed if expression === value3');
        break;
    default:
        console.log('code to be executed if none of the cases match');
        break;
}