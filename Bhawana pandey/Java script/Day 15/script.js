// month name,display month name for a number (1-12)
// let monthName=Number(prompt('enter a month name'));
// switch(monthName){
//     case 1:
//         console.log('january');
//         break;
//     case 2:
//         console.log('feburary');
//         break;
//     case 3:
//         console.log('march');
//         break;
//     case 4:
//         console.log('april');
//         break;
//     case 5:
//         console.log('may');
//         break;
//     case 6:
//         console.log('june');
//         break;
//     case 7:
//         console.log('july');
//         break;
//     case 8:
//         console.log('august');
//         break;
//     case 9:
//         console.log('october');
//         break;
//     case 10:
//         console.log('september')
//         break;
//     case 11:
//         console.log('november')
//         break;
//     case 12:
//         console.log('december');
//         break;
//         default:
//      console.log('None of the case match');
// }


// vowel or consonant check if an alphabet is a vowel or consonant (a/A)
// let alphabet=prompt('enter alphabet');
// switch(alphabet){
//     case 'a':
//     case 'e':
//     case 'i':
//     case '0':
//     case 'u':
//         console.log('it is a vowel letter');
//         break;
//         default:
//             console.log('invaild vowel letter');
            
// }


// grade to remarks convert grade (A-f) into remarks (excellent ,good ....)
// let gradeMark=prompt('enter remark (a-f)');
// switch(gradeMark){
//     case 'a':
//         console.log('Excellent');
//         break;
//      case 'b':
//         console.log('very good');
//         break;
//      case 'c':
//         console.log('good');
//         break;
//      case 'd':
//         console.log('average');
//         break;
//      case 'e':
//         console.log('not satisfy');
//         break;
//       case 'f':
//         console.log('very bad');
//         break;
//         default:
//             console.log('invalid');
// }


// even or odd check use switch with modulo to check even or good. 
// let userNumber=Number(prompt('enter number odd or even'));
// let bhawana=userNumber%2;
// switch(bhawana){
//     case 0:
//         console.log(`${userNumber} is even `);
//         break;
//         case 1:
//         console.log(`${userNumber} is odd `);
//         break;
//         default:
//             console.log('invalid input please enter the valid number')
// }


// Traffic signal meaning display action for red, yellow,or green.
// let signal=prompt('enter traffic signalcolor(red,yellow,green)');
// switch(signal){
//     case 'red':
//         console.log('stop');
//         break;
//      case 'yellow':
//         console.log('get ready');
//         break;
//     case 'green':
//         console.log('go');
//         break;
//         default:
//       console.log('invalid input please enter the valid number');
// }


// number to word (0-9) convert a digit into its word form
// let digitNumber=Number(prompt('enter digit (0-9)'));
// switch(digitNumber){
//     case 0:
//         console.log('Zero');
//         break;
//      case 1:
//         console.log('one');
//         break;
//          case 2:
//         console.log('two');
//         break;
//      case 3:
//         console.log('three');
//         break;
//          case 4:
//         console.log('four');
//         break;
//      case 5:
//         console.log('five');
//         break; 
//      case 6:
//         console.log('six');
//         break;
//      case 7:
//         console.log('seven');
//         break; 
//         case 8:
//         console.log('eight');
//         break;
//      case 9:
//         console.log('nine');
//         break;
//         default:
//             console.log('invalid number');
// }


// data type identity weekday or weekend
// let week=Number(prompt('enter weekday or weekend' ));
// switch(week){
//     case  1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('its weekday');
//         break;
//     case  6:
//     case  7:
//         console.log('its weekend');
//         break;
//         default:
//             console.log('invalid');

// }


// shape area calculator switch between different shape to calculate area

// let shape = prompt("Enter the shape (circle, rectangle, triangle): ");
//     let area;
//     switch (shape) {
//         case 'circle':
//             let radius = Number(prompt("Enter the radius of the circle: "));
//             area = Math.PI * radius * radius;
//             console.log(`Area of the circle: ${area}`);
//             break;
//         case 'rectangle':
//             let length = Number(prompt("Enter the length of the rectangle: "));
//             let width = Number(prompt("Enter the width of the rectangle: "));
//             area = length * width;
//                         console.log(`Area of the rectangle: ${area}`);
//             break;
//         case 'triangle':
//             let base = Number(prompt("Enter the base of the triangle: "));
//             let height = Number(prompt("Enter the height of the triangle: "));
//             area = 0.5 * base * height;
//             console.log(`Area of the triangle: ${area}`);
//             break;
//         default:
//             console.log("Invalid shape. Please enter circle, rectangle, or triangle.");
//     }


// month days count print number of days in a given month
// let month = Number(prompt("Enter a month number (1-12): "));
//     let year = Number(prompt("Enter the year: "));
//     let days;
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             days = 31;
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             days = 30;
//             break;
//         case 2:
//             if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//                 days = 29; // Leap year
//             } else {
//                 days = 28; // Non-leap year
//             }
//             break;
//         default:
//             console.log("Invalid month number. Please enter a number between 1 and 12.");
//     }


//     if (days) {
//         console.log(`Number of days in month ${month} of year ${year}: ${days}`);

//     }


    // languge selector display greeting based on language code(english.france.spainaish)
// let language = prompt("Enter the language code (en, fr, es): ").toLowerCase();
//     switch (language) {
//         case 'en':
//             console.log("Hello");
//             break;
//         case 'fr':
//             console.log("bonjour");
//             break;
//         case 'es':
//             console.log(" hola");
//             break;
//         default:
//             console.log("Invalid language code. Please enter en, fr, or es.");
//     }



    //currency converter convert between different currencies using switch case
// let amount = Number(prompt("Enter the amount: "));
// let currency = prompt("Enter the currency (USD, EUR, INR): ").toUpperCase();
//     let convertedAmount;
//     switch (currency) {
//         case 'USD':
//             convertedAmount = amount * 74.5; // Example conversion rate
//             console.log(`Converted amount in INR: ${convertedAmount}`);
//             break;
//         case 'EUR':
//             convertedAmount = amount * 88.5; // Example conversion rate
//             console.log(`Converted amount in INR: ${convertedAmount}`);
//             break;
//         case 'INR':
//             convertedAmount = amount; // No conversion needed
//             console.log(`Converted amount in INR: ${convertedAmount}`);
//             break;
//         default:
//             console.log("Invalid currency. Please enter USD, EUR, or INR.");
//     }


    //menu driven program(math) menu to choose add subtract multiply and divide(option 1:add ,option 2:subtract, option 3:multiply, option 4:divide)
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let option = Number(prompt("Choose an option:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit"));
// switch (option) {
//     case 1:
//         console.log(`Result: ${num1 + num2}`);
//         break;
//     case 2:
//         console.log(`Result: ${num1 - num2}`);
//         break;
//     case 3:
//         console.log(`Result: ${num1 * num2}`);
//         break;
//     case 4:
//         if (num2 !== 0) {
//             console.log(`Result: ${num1 / num2}`);
//         } else {
//             console.log("Cannot divide by zero.");
//         }
//         break;
//     case 5:
//         console.log("Exiting the program.");
//         break;
//     default:
//         console.log("Invalid option. Please choose a valid option.");
// }




// age group classifier classify age into ChannelSplitterNode,teen,adult,senior
// let age = Number(prompt("Enter your age: "));
//     switch (true) {
//         case (age >= 0 && age <= 12):
//             console.log("Child");
//             break;
//         case (age >= 13 && age <= 19):
//             console.log("Teenager");
//             break;
//         case (age >= 20 && age <= 59):
//             console.log("Adult");
//             break;
//         case (age >= 60):
//             console.log("Senior");
//             break;
//         default:
//             console.log("Invalid age. Please enter a valid age.");
//     }


    //seasons by month display the season based on the month number (1-12)
// let month1 = Number(prompt("Enter a month number (1-12): "));
//     switch (month1) {
//         case 1:
//         case 2:
//         case 3:
//             console.log("Winter");
//             break;
//         case 4:
//         case 5:
//         case 6:
//             console.log("Spring");
//             break;
//         case 7:
//         case 8:
//         case 9:
//             console.log("Summer");
//             break;
//         case 10:
//         case 11:
//         case 12:
//             console.log("Fall");
//             break;
//         default:
//             console.log("Invalid month number. Please enter a number between 1 and 12.");
//     }




//     //sports selector display the sport based on the sport code (cricket, football, basketball)
// let sportCode = prompt("Enter the sport code (cricket, football, basketball): ").toLowerCase();
//     switch (sportCode) {
//         case 'cricket':
//             console.log("You selected Cricket.");
//             break;
//         case 'football':
//             console.log("You selected Football.");
//             break;
//         case 'basketball':
//             console.log("You selected Basketball.");
//             break;
//         default:
//             console.log("Invalid sport code. Please enter cricket, football, or basketball.");
//     }



//     //planet facts display a fun fact about a selectedS
// let planet = prompt("Enter the planet name (mercury, venus, earth, mars, jupiter, saturn, uranus, neptune): ").toLowerCase();
//     switch (planet) {
//         case 'mercury':
//             console.log("Mercury is the closest planet to the Sun.");
//             break;
//         case 'venus':
//             console.log("Venus is known as the Earth's twin.");
//             break;
//         case 'earth':
//             console.log("Earth is the only planet known to support life.");
//             break;
//         case 'mars':
//             console.log("Mars is known as the Red Planet.");
//             break;
//         case 'jupiter':
//             console.log("Jupiter is the largest planet in our solar system.");
//             break;
//         case 'saturn':
//             console.log("Saturn is famous for its rings.");
//             break;
//         case 'uranus':
//             console.log("Uranus rotates on its side.");
//             break;
//         case 'neptune':
//             console.log("Neptune is known for its strong winds and storms.");
//             break;
//         default:
//             console.log("Invalid planet name. Please enter a valid planet name.");
//     }


//     //billing system choose item for menu and display price
// let item = prompt("Enter the item name (burger, pizza, pasta, salad): ");
//     let price;
//     switch (item) {
//         case 'burger':
//             price = 50;
//             break;
//         case 'pizza':
//             price = 100;
//             break;
//         case 'pasta':
//             price = 80;
//             break;
//         case 'salad':
//             price = 30;
//             break;
//         default:
//             console.log("Invalid item. Please enter a valid item name.");
//     }
//     if (price) {
//         console.log(`The price of ${item} is ${price} rs.`);
//     }



 
    //electricity bill slbas switch based on units to apply diffrent triffs
// let units = Number(prompt("Enter the number of units consumed: "));
//     let bill;
//     switch (true) {
//         case (units <= 100):
//             bill = units * 5; // Example rate
//             break;
//         case (units > 100 && units <= 300):
//             bill = units * 10; // Example rate
//             break;
//         case (units > 300):
//             bill = units * 15; // Example rate
//             break;
//         default:
//             console.log("Invalid input. Please enter a valid number of units.");
//     }
//     if (bill) {
//         console.log(`Your electricity bill is: ${bill}rs.`);
//     }

//academic department info display information for a chosen department
// let department = prompt("Enter the department (CS, EE, ME): ").toUpperCase();
//     switch (department) {
//         case 'CS':
//             console.log("Computer Science Department: Focuses on programming and software development.");
//             break;
//         case 'EE':
//             console.log("Electrical Engineering Department: Focuses on electrical systems and circuits.");
//             break;
//         case 'ME':
//             console.log("Mechanical Engineering Department: Focuses on mechanical systems and design.");
//             break;
//         default:
//             console.log("Invalid department. Please enter CS, EE, or ME.");
//     }



    //login role in check check of the user is admin , teacher, student(diff case for username&& passwords for each roles)

// let username = prompt("Enter your username: ");
//     let password = prompt("Enter your password: ");
//     let role;
//     switch (username) {
//         case 'admin':
//             if (password === 'admin123') {
//                 role = 'Admin';
//             } else {
//                 console.log("Invalid password for admin.");
//             }
//             break;
//         case 'teacher':
//             if (password === 'teacher123') {
//                 role = 'Teacher';
//             } else {
//                 console.log("Invalid password for teacher.");
//             }
//             break;
//         case 'student':
//             if (password === 'student123') {
//                 role = 'Student';
//             } else {
//                 console.log("Invalid password for student.");
//             }
//             break;
//         default:
//             console.log("Invalid username.");
//     }


    //discount application switch based on coupon code to apply discounts
    let couponCode = prompt("Enter the coupon code (coupon10 , coupon20): ").toUpperCase();
    let discount;
    
    







    //flight class information show features for economy,bussiness or firstclass

    // let flightClass = prompt("Enter the flight class (economy, business, first): ").toLowerCase();
    // switch (flightClass) {
    //     case 'economy':
    //         console.log("Economy Class: Affordable and comfortable seating.");
    //         break;
    //     case 'business':
    //         console.log("Business Class: Extra legroom and premium services.");
    //         break;
    //     case 'first':
    //         console.log("First Class: Luxurious seating and top-notch amenities.");
    //         break;
    //     default:
    //         console.log("Invalid flight class. Please enter economy, business, or first.");
    // }



    // //customer support menu switch to nagative support options
    // let supportOption = prompt("Enter the support option (technical, billing, general): ").toLowerCase();
    // switch (supportOption) {
    //     case 'technical':
    //         console.log("Technical Support: Please describe your technical issue.");
    //         break;
    //     case 'billing':
    //         console.log("Billing Support: Please provide your billing details.");
    //         break;
    //     case 'general':
    //         console.log("General Support: How can we assist you today?");
    //         break;
    //     default:
    //         console.log("Invalid support option. Please enter technical, billing, or general.");
    // }






    //movie genre decerotion switch to display info based on movie genre selected
//     let genre = prompt("Enter the movie genre (action, comedy, drama, horror): ").toLowerCase();
//     switch (genre) {
//         case 'action':
//             console.log("Action movies are known for their fast-paced sequences and thrilling stunts.");
//             break;
//         case 'comedy':
//             console.log("Comedy movies aim to make the audience laugh with humor and funny situations.");
//             break;
//         case 'drama':
//             console.log("Drama movies focus on character development and emotional storytelling.");
//             break;
//         case 'horror':
//             console.log("Horror movies are designed to scare and thrill the audience with suspenseful elements.");
//             break;
//         default:
//             console.log("Invalid genre. Please enter action, comedy, drama, or horror.");
//     }













