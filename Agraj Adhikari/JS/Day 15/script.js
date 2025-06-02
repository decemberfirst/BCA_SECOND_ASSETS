//1.MONTHS DISPLAY
/*  user1 = Number(prompt('Enter a number'));

switch(user1){
    case 1:
        console.log('JAN');
        break;
    case 2:
        console.log('FEB');
        break;
    case 3:
        console.log('MAR');
        break;
    case 4:
        console.log('APR');
        break;
    case 5:
        console.log('MAY');
        break;
    case 6:
        console.log('JUN');
        break;
    case 7:
        console.log('JUL');
        break;
    case 8:
        console.log('AUG');
        break;
    case 9:
        console.log('SEP');
        break;
    case 10:
        console.log('OCT');
        break;
    case 11:
        console.log('NOV');
        break;
    case 12:
        console.log('DEC');
        break;
    default:
        console.log('None of them matched');
}    */


//2.VOWEL Or Consonant
/* 
let Character = prompt("Enter a Character");

switch(Character){
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'i':
    case 'I':
    case 'O':
    case 'o':
    case 'U':
    case 'u':
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
} */


//3.Grade to Remarks

/* let Grade = prompt("Enter your Grade");

switch(Grade){
    case 'A':
    case 'a':
        console.log('Excellent');
        break;
    case 'B':
    case 'b':
        console.log('Good');
        break;
    case 'C':
    case 'c':
        console.log('Average');
        break;
    case 'D':
    case 'd':
        console.log('Not Good');
        break;
    case 'F':
    case 'f':
        console.log('Failed');
        break;
    default:
        alert('Not valid');
} */

//4. Even or ODD
/* let Num = Number(prompt('Enter a number'));

let Check = (Num % 2);

switch(Check){
    case 0:
        console.log('Even');
        break;
    default:
        console.log('Odd');
}
 */

//5.Traffic signal check
/* let Signal = prompt("Enter a signal");

switch(Signal){
    case 'Red':
        console.log("Stop");
        break;
    case 'Green':
        console.log('Go');
        break;
    case 'Yellow':
        console.log('Ready');
        break;
    default:
        console.log('Invalid Signal');
} */

//6. Number to Word

/* let wordNum = Number(prompt('Enter a number'));

switch(wordNum){
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    case 5:
        console.log('Five');
        break;
    case 6:
        console.log('Six');
        break;
    case 7:
        console.log('Seven');
        break;
    case 8:
        console.log('Eight');
        break;
    case 9:
        console.log('Nine');
        break;
    default:
        console.log('Invalid number');
} */

//7 Day Type

/* let Day = prompt('Enter a day');

switch(Day){
    case "Friday":
        console.log('Weekend');
        break;
    case "Saturday":
        console.log('Weekend');
        break;
    default:
        console.log("Weekdays");
} */

//8 Shape Area Calculator

/* let Shape = prompt("Enter a Shape");

switch(Shape){
    case "Square":
        let length = Number(prompt("Enter a number")); 
        let square = 4 * length
        console.log(square);
        break;
    default:
        console.log('Invalid')
} */

//9 Months Days Count

/* let Month = Number(prompt('Enter a Month(1-12)'));

switch(Month){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('28 days in this month');
        break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log('30 days in this month');
        break;
    default:
        console.log('Invalid');
} */

//10 Language Selector 

/* let greeting = prompt("Enter a language (En,Esp,NP");

switch(greeting){
    case 'En':
        console.log("Hello");
        break;
    case 'NP':
        console.log('Namaste');
        break;
    case 'Esp':
        console.log('HOla,amigo');
        break;
    default:
        console.log('Invalid lang');
} */

//11 Currency Converter

/* let currency = prompt("Enter currency: USD, EUR, GBP");
let amount = Number(prompt("Enter amount"));

switch (currency) {
    case 'USD':
        console.log(`Converted amount: ${amount * 132} NPR`);
        break;
    case 'EUR':
        console.log(`Converted amount: ${amount * 143} NPR`);
        break;
    case 'GBP':
        console.log(`Converted amount: ${amount * 165} NPR`);
        break;
    default:
        console.log('Invalid currency');
} */

//12 Menu Driven Math program

/* let option = Number(prompt("Choose operation: 1-Add, 2-Subtract, 3-Multiply, 4-Divide"));
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

switch (option) {
    case 1:
        console.log(`Result: ${num1 + num2}`);
        break;
    case 2:
        console.log(`Result: ${num1 - num2}`);
        break;
    case 3:
        console.log(`Result: ${num1 * num2}`);
        break;
    case 4:
        console.log(`Result: ${num1 / num2}`);
        break;
    default:
        console.log('Invalid option');
} */

//13 Age Group Classifier
/* let age = Number(prompt('Enter your age'));

switch (true) {
    case (age >= 0 && age <= 12):
        console.log('Child');
        break;
    case (age >= 13 && age <= 19):
        console.log('Teen');
        break;
    case (age >= 20 && age <= 59):
        console.log('Adult');
        break;
    case (age >= 60):
        console.log('Senior');
        break;
    default:
        console.log('Invalid age');
}
 */

//14 OS Based Message

/* let os = prompt('Enter your OS name (macos/windows/linux)').toLowerCase();

switch (os) {
    case 'macos':
        console.log('You are using macOS');
        break;
    case 'windows':
        console.log('You are using Windows');
        break;
    case 'linux':
        console.log('You are using Linux');
        break;
    default:
        console.log('Unknown OS');
}
 */

//15 Season by Month
/* 
let month = Number(prompt('Enter month number (1-12)'));

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('Invalid month');
} */

//16 Sports Selector
/* let sport = prompt('Enter a sport name').toLowerCase();

switch (sport) {
    case 'football':
        console.log('Football: Played with 11 players on each team, goal-based game.');
        break;
    case 'cricket':
        console.log('Cricket: Played with bat and ball, has innings, overs and wickets.');
        break;
    case 'basketball':
        console.log('Basketball: Teams of 5 players score by shooting ball into hoop.');
        break;
    default:
        console.log('Unknown sport');
} */

//17 Planet Facts
/* let planet = prompt('Enter a planet name').toLowerCase();

switch (planet) {
    case 'mars':
        console.log('Mars: Known as the Red Planet.');
        break;
    case 'jupiter':
        console.log('Jupiter: Largest planet in our solar system.');
        break;
    case 'venus':
        console.log('Venus: Hottest planet with a thick atmosphere.');
        break;
    default:
        console.log('No info available for this planet.');
} */

//18 Billing System
/* let item = prompt('Enter item name (burger, pizza, soda)').toLowerCase();

switch (item) {
    case 'burger':
        console.log('Price: $5');
        break;
    case 'pizza':
        console.log('Price: $8');
        break;
    case 'soda':
        console.log('Price: $2');
        break;
    default:
        console.log('Item not available');
} */

//19 ELectricity Bill Slabs
/* let units = Number(prompt('Enter consumed units'));

switch (true) {
    case (units <= 50):
        console.log('Rate: ₹3/unit');
        break;
    case (units <= 100):
        console.log('Rate: ₹5/unit');
        break;
    case (units <= 200):
        console.log('Rate: ₹8/unit');
        break;
    default:
        console.log('Rate: ₹10/unit');
} */

//20 Tax Calculator by region
/* 
let region = prompt('Enter country code (us/in/uk)').toLowerCase();

switch (region) {
    case 'us':
        console.log('Tax rate: 10%');
        break;
    case 'in':
        console.log('Tax rate: 18%');
        break;
    case 'uk':
        console.log('Tax rate: 20%');
        break;
    default:
        console.log('Unknown region');
} */

//21 Academic department info
/* let department = prompt('Enter department (cse, ece, mech)').toLowerCase();

switch (department) {
    case 'cse':
        console.log('Computer Science: Focuses on software and programming.');
        break;
    case 'ece':
        console.log('Electronics: Deals with circuits, signals, and communication.');
        break;
    case 'mech':
        console.log('Mechanical: Concerned with machines and engines.');
        break;
    default:
        console.log('Unknown department');
} */

//22 Login Role check
/* let username = prompt('Enter username');
let password = prompt('Enter password');

switch (true) {
    case (username === 'admin' && password === 'admin123'):
        console.log('Welcome Admin');
        break;
    case (username === 'teacher' && password === 'teach123'):
        console.log('Welcome Teacher');
        break;
    case (username === 'student' && password === 'stud123'):
        console.log('Welcome Student');
        break;
    default:
        console.log('Invalid credentials');
} */

//23 Discount Application
/* let coupon = prompt('Enter coupon code').toLowerCase();

switch (coupon) {
    case 'save10':
        console.log('You got 10% off');
        break;
    case 'save20':
        console.log('You got 20% off');
        break;
    case 'save50':
        console.log('You got 50% off');
        break;
    default:
        console.log('Invalid coupon');
} */

//24 Flight Class Information
/* let flightClass = prompt('Enter class (economy/business/first)').toLowerCase();

switch (flightClass) {
    case 'economy':
        console.log('Economy: Basic seating and services.');
        break;
    case 'business':
        console.log('Business: Extra comfort and meals.');
        break;
    case 'first':
        console.log('First Class: Luxury seating and exclusive services.');
        break;
    default:
        console.log('Invalid class');
} */

//25 Customer Support Menu 
/* let option = Number(prompt('Enter option (1-3): 1.Billing 2.Technical 3.General'));

switch (option) {
    case 1:
        console.log('You selected Billing Support.');
        break;
    case 2:
        console.log('You selected Technical Support.');
        break;
    case 3:
        console.log('You selected General Support.');
        break;
    default:
        console.log('Invalid option');
} */

// 26 Movie Genre Description
/* let genre = prompt('Enter movie genre').toLowerCase();

switch (genre) {
    case 'action':
        console.log('Action: Full of excitement, fights, and stunts.');
        break;
    case 'comedy':
        console.log('Comedy: Funny and entertaining.');
        break;
    case 'drama':
        console.log('Drama: Emotional and story-driven.');
        break;
    case 'horror':
        console.log('Horror: Scary and thrilling.');
        break;
    default:
        console.log('Unknown genre');
}

 */





