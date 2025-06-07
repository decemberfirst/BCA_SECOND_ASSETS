//...... IF ELSE IF LADDER .............

/* let gpa = Number(prompt('Enter your GPA'));

if (gpa >= 3.7 && gpa <= 4.0) {
    console.log('Your grade is A+');
} else if (gpa >= 3.2 && gpa < 3.7) {
    console.log('Your grade is A');
} else if (gpa >= 2.8 && gpa < 3.7) {
    console.log('your grade is B');
} else {
    console.log('You are not listed');
}
 */

/* let Age = Number(prompt('Enter you age'));

if (Age >= 0 && Age <= 3) {
    console.log('You are infant');
} else if (Age > 3 && Age <= 12) {
    console.log('You are a child');
} else if (Age > 12 && Age <= 19) {
    console.log('You are tennageer');
} else if (Age > 19 && Age <= 30) {
    console.log('You are adult');
} else if (Age > 30 && Age <= 45) {
    console.log('You are middle aged');
} else if (Age > 45 && Age <= 70) {
    console.log('You are old')
} else {
    console.log('Ashes or Sperm');
}
 */
/* 
let Salary = Number(prompt("Enter your Salary"));

if (Salary >= 0 && Salary <= 100000) {
    console.log('No TAX');
} else if (Salary > 100000 && Salary < 1000000) {
    console.log('You are Taxed 15%');
} else if (Salary > 1000000) {
    console.log('You are Taxed 35%');
} else {
    console.log('Enter Valid Salary');
} */

// let Time = Number(prompt("Enter Time"));

// if(Time >=0 && Time <=12){
//     console.log('Morning');
// } else if(Time >12 && Time > 17){
//     console.log('Afternoon');
// }else if(Time > 17 && Time < 20){
//     console.log('Evening')
// }else{
//     console.log('Night');
// }


/* let A = Number(prompt("Enter a side"));
let B = Number(prompt("Enter a side"));
let C = Number(prompt("Enter a side"));


if (A == B && B == C) {
    console.log('Equilateral Triangle');
} else if (A != B &&  B != C) {
    console.log("Scalene Triangle");
} else if ((A == B) || (B == C) || (A == C)){
     console.log("Isolate triangle");
}else{
    console.log('Triangle not found');
}
 */
/* 
let weight = Number(prompt('Enter your weight'));
let height = Number(prompt('Enter your height'));

let BMI = weight / (height * height);

if (BMI < 18.5) {
    console.log('You are underweight');
} else if (BMI >= 18.5 && BMI < 24.9) {
    console.log('Normal Weight');
} else if (BMI >= 25 && BMI < 30) {
    console.log('Overweight');
} else if (BMI >= 30) {
    console.log('Obesity');
} else {
    console.log('Get medical help');
}
 */
/* 
    let A = Number(prompt("Enter a number"));
    let B = Number(prompt("Enter a number"));
    let C = Number(prompt("Enter a number"));

    if(A>B && B>C){
        console.log('A is greater');
    }else if(B>C && B>A){
        console.log('B is greater');
    }else{
        console.log('C is greater');
    }
 */

//Assignment

// 1.Electricity Bill Calculation
/* let unit = Number(prompt('Enter your Unit'));

if(unit < 100){
    console.log("Rs 1.5/unit");
}else if(unit>=100 && unit<300){
    console.log('Rs 2/unit')
}else if(unit == 300){
    console.log('Rs 3/unit');
} */

//2.Internet Data Usage Alert
/* let dataUsage = Number(prompt("Enter your data usage percentage"));
if (dataUsage < 50) {
    console.log("Normal usage");
} else if (dataUsage >= 50 && dataUsage < 90) {
    console.log("Warning");
} else {
    console.log("Over limit!");
} */

//3.Season Checker
/* let month = Number(prompt("Enter the month number"));
if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
} else if (month >= 3 && month <= 5) {
    console.log("Spring");
} else if (month >= 6 && month <= 8) {
    console.log("Summer");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} */

//4.Bank Interest Rate
/* let years = Number(prompt("Enter the number of years"));
if (years < 1) {
    console.log("Interest Rate: 5%");
} else if (years >= 1 && years < 3) {
    console.log("Interest Rate: 6.5%");
} else {
    console.log("Interest Rate: 7.5%");
}
 */

//5.Movie Rating Classifier
/* let movieRating = Number(prompt("Enter movie rating (out of 10)"));
if (movieRating >= 8) {
    console.log("Excellent");
} else if (movieRating >= 5) {
    console.log("Average");
} else {
    console.log("Poor");
} */

//6.Loan Approval Based on Credit Score
/* let creditScore = Number(prompt("Enter your credit score"));
if (creditScore >= 750) {
    console.log("Approved");
} else if (creditScore >= 600 && creditScore < 750) {
    console.log("Review required");
} else {
    console.log("Rejected");
} */

//7.Shipping Charges based on distance
/* let distance = Number(prompt("Enter shipping distance in km"));
if (distance < 10) {
    console.log("Shipping: Free");
} else if (distance >= 10 && distance < 50) {
    console.log("Shipping: ₹50");
} else {
    console.log("Shipping: ₹100");
} */

//8.Student Performance Evaluation
/* let marks = Number(prompt("Enter student's percentage"));
if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 70) {
    console.log("Good");
} else if (marks >= 50) {
    console.log("Average");
} else {
    console.log("Needs improvement");
} */

//9.Typing Speed Evaluation
/* let typingSpeed = Number(prompt("Enter typing speed (WPM)"));
if (typingSpeed >= 60) {
    console.log("Fast");
} else if (typingSpeed >= 40) {
    console.log("Average");
} else {
    console.log("Slow");
} */

//10.Language Level Based on test score
/* let languageScore = Number(prompt("Enter your language test score"));
if (languageScore >= 85) {
    console.log("Advanced");
} else if (languageScore >= 60) {
    console.log("Intermediate");
} else {
    console.log("Beginner");
}
 */

//11.Income Tax Bracket
/* let income = Number(prompt("Enter your income (in Lakhs)"));
if (income < 2.5) {
    console.log("No tax");
} else if (income >= 2.5 && income < 5) {
    console.log("Tax: 5%");
} else if (income >= 5 && income < 10) {
    console.log("Tax: 20%");
} else {
    console.log("Tax: 30%");
}
 */

//12. Water Quality Index
/* let waterQuality = Number(prompt("Enter the water quality index"));
if (waterQuality >= 0 && waterQuality <= 50) {
    console.log("Good");
} else if (waterQuality >= 51 && waterQuality <= 100) {
    console.log("Moderate");
} else if (waterQuality >= 101 && waterQuality <= 200) {
    console.log("Unhealthy");
} else {
    console.log("Dangerous");
} */

//13. Voting Eligibility
/* let age = Number(prompt("Enter your age"));
if (age < 18) {
    console.log("Not eligible");
} else if (age >= 18 && age < 60) {
    console.log("Eligible");
} else {
    console.log("Senior voter");
} */

//14. App Rating Feedback
/* let appRating = Number(prompt("Enter the app rating"));
if (appRating >= 4.5) {
    console.log("Excellent");
} else if (appRating >= 3) {
    console.log("Good");
} else {
    console.log("Poor");
} */

//15. Coffee Strength Selector
/* let coffeeStrength = Number(prompt("Enter coffee strength level (1-3)"));
if (coffeeStrength == 1) {
    console.log("Light");
} else if (coffeeStrength == 2) {
    console.log("Medium");
} else if (coffeeStrength == 3) {
    console.log("Strong");
} else {
    console.log("Invalid");
} */

//16. Bus Fare by Age
/* let passengerAge = Number(prompt("Enter your age for bus fare"));
if (passengerAge < 5) {
    console.log("Free");
} else if (passengerAge >= 5 && passengerAge < 18) {
    console.log("Half fare");
} else {
    console.log("Full fare");
} */

//17. Subscription Type
/* let subscription = Number(prompt("Enter subscription type (1-3)"));
if (subscription == 1) {
    console.log("Basic");
} else if (subscription == 2) {
    console.log("Standard");
} else if (subscription == 3) {
    console.log("Premium");
} else {
    console.log("Invalid option");
}
 */

//18. Game Difficulty Setting
/* let gameDifficulty = Number(prompt("Enter game difficulty (1-3)"));
if (gameDifficulty == 1) {
    console.log("Easy");
} else if (gameDifficulty == 2) {
    console.log("Medium");
} else if (gameDifficulty == 3) {
    console.log("Hard");
} else {
    console.log("Unknown difficulty");
} */

//19. Blood Pressure Status
/* let systolic = Number(prompt("Enter systolic pressure"));
let diastolic = Number(prompt("Enter diastolic pressure"));
if (systolic < 120 && diastolic < 80) {
    console.log("Normal");
} else if (systolic >= 120 && systolic < 140 || diastolic >= 80 && diastolic < 90) {
    console.log("Elevated");
} else {
    console.log("High blood pressure");
}
 */

//20. Mobile Battery Level
/* let battery = Number(prompt("Enter battery percentage"));
if (battery < 20) {
    console.log("Low");
} else if (battery >= 20 && battery < 80) {
    console.log("Normal");
} else {
    console.log("High");
} */

//21. CPU Temperature Monitor
/* let cpuTemp = Number(prompt("Enter CPU temperature in Celsius"));
if (cpuTemp < 50) {
    console.log("Safe");
} else if (cpuTemp >= 50 && cpuTemp < 75) {
    console.log("Warm");
} else {
    console.log("Danger!");
}
 */

//22. Body Temperature Status
/* let bodyTemp = Number(prompt("Enter body temperature in Celsius"));
if (bodyTemp < 36) {
    console.log("Low");
} else if (bodyTemp >= 36 && bodyTemp < 37.5) {
    console.log("Normal");
} else {
    console.log("Fever");
}
 */

//23. Credit Card Status
/* let billStatus = prompt("Enter credit card bill status (Paid/Due/Overdue)");
if (billStatus.toLowerCase() == "paid") {
    console.log("Active");
} else if (billStatus.toLowerCase() == "due") {
    console.log("Warning");
} else {
    console.log("Blocked");
}
 */

//24. Online Order Status
/* let orderStatus = Number(prompt("Enter order status code (0-3)"));
if (orderStatus == 0) {
    console.log("Ordered");
} else if (orderStatus == 1) {
    console.log("Packed");
} else if (orderStatus == 2) {
    console.log("Shipped");
} else if (orderStatus == 3) {
    console.log("Delivered");
} else {
    console.log("Invalid status");
}
 */

//25. Driving License Status
/* let licenseAge = Number(prompt("Enter your age"));
if (licenseAge < 18) {
    console.log("Ineligible");
} else if (licenseAge >= 18 && licenseAge < 65) {
    console.log("Eligible");
} else {
    console.log("Renewal required");
}
 */

//26. Fuel Efficiency Rating
/* let fuelEfficiency = Number(prompt("Enter fuel efficiency (km/l)"));
if (fuelEfficiency >= 20) {
    console.log("Excellent");
} else if (fuelEfficiency >= 15) {
    console.log("Good");
} else {
    console.log("Poor");
}
  */

//27. Mobile Signal Strength(bars)

/* let MobileStrength = Number(prompt('Enter Signal Strenghth(0-5)'));

if(MobileStrength >= 0 && MobileStrength <=1){
    console.log('Weak');
}else if(MobileStrength >=2 && MobileStrength <=3){
    console.log('Medium');
}else if(MobileStrength >= 4 && MobileStrength <= 5){
    console.log('Strength');
}else{
    console.log('Invalid User input');
} */

//28. Room Size(sqm)

/* let roomSize = Number(prompt('Enter Your Room Size(0-40)'));

if(roomSize >= 40){
    console.log('Large');
}else if(roomSize >=20 & roomSize < 40){
    console.log(Medium);
}else if(roomSize < 20){
    console.log('Small')
}else{
    console.log('Invalid room size');
}
 */

 

