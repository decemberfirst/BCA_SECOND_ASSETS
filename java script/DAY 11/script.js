// // ----- IF ELSE IF LATER -----
//  let  userGpa = Number(prompt("Enter your gpa"));
//  if ( userGpa>= 3.7 && userGpa<= 4.0){
//     console.log("your gpa is A+")
//  } else if( userGpa>= 3.2 && userGpa<= 3.7){
//     console.log( 'your gpa is A')
//  } else if ( userGpa>=2.8 && userGpa<= 3.2){
//     console.log ('your gpa is B+')
//  } else{ 
//     console.log('your gpa is not listed')
//  } 
 
// let userAge = Number(prompt('Enter your age'));
// if ( userAge>=0 && userAge<= 13){
//     console.log(" your are child")
// } else if ( userAge>= 13 && userAge<=20){
//     console.log("you are a teen")
// } else if ( userAge>= 20 && userAge<=45){
//     console.log( "you are adult")
// } else if( userAge>=45 && userAge<=80){
//     console.log (" you are old")
// } else{ console.log( "you are dead")}

// let userSalary = Number(prompt('Enter your salary'));
// if( userSalary>=0 && userSalary<=100000){
//     console.log(" you are free from tax")
// } else if( userSalary>=100000 && userSalary<= 250000){
//     console.log (" your tax is 13%")}
//     else if( userSalary>= 250000 && userSalary<= 500000){
//         console.log( "your tax is 20% ")
//     } else(console.log( "enter valid salary"))



// let userTime =Number(prompt("Enter time"));
// if( userTime<0 && userTime>12){
//     console.log("The time is morning")
// } else if( userTime<12 && userTime>18){
//     console.log("The time is afternoon")
// } else if( userTime<18 && userTime>24
// ){
//     console.log ( "the time is night")
// } else{console.log( "enter valid time")}


// let A = Number(prompt("Enter a side"));
// let B = Number(prompt("Enter a side"));
// let C=  Number(prompt("Enter a side"));
// if( A == B && B == C ){
//     console.log("Equilataral traingle")
// }
//  else if(A==B  || B==C ||A==C){
//     console.log(" Isoceles  triangle")
//  } else{ console.log( "scaler triangle")}

// let A = Number( prompt( "enter first number"));
// let B = Number ( prompt("enter second number"));
// let C = Number( prompt( "Enter third number"));

// if ( A>B && A>C){ console.log("A is greatest")}
// else if (B>C){
//     console.log( "B is greatest")
// }
// else{ console.log("c is greatest")}

// 1. Electricity Bill Calculation:
//     * <100 units: ₹1.5/unit
//     * 100–300 units: ₹2/unit
//     * 300 units: ₹3/unit


// let userUnit = Number(prompt("Enter your unit"));
// if(userUnit<=100)
//     { console.log("The amt per unit is 1.5")}
// else if(userUnit<=300 && userUnit>=100){
//     console.log("The amt per unit is 2rs ")
// } else{
//     console.log ("the amt per unit is 3")
// }

// // 2 . Internet Data Usage Alert:
// //     * <50%: “Normal usage”
// //     * 50–90%: “Warning”
// //     * 90%: “Over limit!”
// let dataUsage = Number(prompt("Enter your internet data percent"));
// if(dataUsage<50)
//     {
//     console.log("Normal usage")
// }
// else if(dataUsage<=90  && dataUsage>=50){
//     console.log("warning")
// } else{console.log("over limit")}

// //3
// let month = Number(prompt("Enter the month number"));
// if (month == 12 || month == 1 || month == 2) {
//     console.log("Winter");
// } else if (month >= 3 && month <= 5) {
//     console.log("Spring");
// } else if (month >= 6 && month <= 8) {
//     console.log("Summer");
// } else if (month >= 9 && month <= 11) {
//     console.log("Autumn");
// }

// //4
//  let years = Number(prompt("Enter the number of years"));
// if (years < 1) {
//     console.log("Interest Rate: 5%");
// } else if (years >= 1 && years < 3) {
//     console.log("Interest Rate: 6.5%");
// } else {
//     console.log("Interest Rate: 7.5%");
// }
 
// //5
//  let movieRating = Number(prompt("Enter movie rating (out of 10)"));
// if (movieRating >= 8) {
//     console.log("Excellent");
// } else if (movieRating >= 5) {
//     console.log("Average");
// } else {
//     console.log("Poor");
// } 

// //6
//  let creditScore = Number(prompt("Enter your credit score"));
// if (creditScore >= 750) {
//     console.log("Approved");
// } else if (creditScore >= 600 && creditScore < 750) {
//     console.log("Review required");
// } else {
//     console.log("Rejected");
// } 

// //7
// let distance = Number(prompt("Enter shipping distance in km"));
// if (distance < 10) {
//     console.log("Shipping: Free");
// } else if (distance >= 10 && distance < 50) {
//     console.log("Shipping: ₹50");
// } else {
//     console.log("Shipping: ₹100");
// } 

// //8
//  let marks = Number(prompt("Enter student's percentage"));
// if (marks >= 90) {
//     console.log("Excellent");
// } else if (marks >= 70) {
//     console.log("Good");
// } else if (marks >= 50) {
//     console.log("Average");
// } else {
//     console.log("Needs improvement");
// } 

// // 9
//  let typingSpeed = Number(prompt("Enter typing speed (WPM)"));
// if (typingSpeed >= 60) {
//     console.log("Fast");
// } else if (typingSpeed >= 40) {
//     console.log("Average");
// } else {
//     console.log("Slow");
// } 

// // 10
//  let languageScore = Number(prompt("Enter your language test score"));
// if (languageScore >= 85) {
//     console.log("Advanced");
// } else if (languageScore >= 60) {
//     console.log("Intermediate");
// } else {
//     console.log("Beginner");
// }
 

// // 11 Tax
//  let income = Number(prompt("Enter your income (in Lakhs)"));
// if (income < 2.5) {
//     console.log("No tax");
// } else if (income >= 2.5 && income < 5) {
//     console.log("Tax: 5%");
// } else if (income >= 5 && income < 10) {
//     console.log("Tax: 20%");
// } else {
//     console.log("Tax: 30%");
// }
 

// // 11. Water Quality Index
// let waterQuality = Number(prompt("Enter the water quality index"));
// if (waterQuality >= 0 && waterQuality <= 50) {
//     console.log("Good");
// } else if (waterQuality >= 51 && waterQuality <= 100) {
//     console.log("Moderate");
// } else if (waterQuality >= 101 && waterQuality <= 200) {
//     console.log("Unhealthy");
// } else {
//     console.log("Dangerous");
// }

// // 12. Voting Eligibility
// let age = Number(prompt("Enter your age"));
// if (age < 18) {
//     console.log("Not eligible");
// } else if (age >= 18 && age < 60) {
//     console.log("Eligible");
// } else {
//     console.log("Senior voter");
// } 

// // 13. App Rating Feedback
// let appRating = Number(prompt("Enter the app rating"));
// if (appRating >= 4.5) {
//     console.log("Excellent");
// } else if (appRating >= 3) {
//     console.log("Good");
// } else {
//     console.log("Poor");
// }

// // 14. Coffee Strength Selector
// let coffeeStrength = Number(prompt("Enter coffee strength level (1-3)"));
// if (coffeeStrength == 1) {
//     console.log("Light");
// } else if (coffeeStrength == 2) {
//     console.log("Medium");
// } else if (coffeeStrength == 3) {
//     console.log("Strong");
// } else {
//     console.log("Invalid");
// }

// // 15. Bus Fare by Age
// let passengerAge = Number(prompt("Enter your age for bus fare"));
// if (passengerAge < 5) {
//     console.log("Free");
// } else if (passengerAge >= 5 && passengerAge < 18) {
//     console.log("Half fare");
// } else {
//     console.log("Full fare");
// }

// // 16. Subscription Type
// let subscription = Number(prompt("Enter subscription type (1-3)"));
// if (subscription == 1) {
//     console.log("Basic");
// } else if (subscription == 2) {
//     console.log("Standard");
// } else if (subscription == 3) {
//     console.log("Premium");
// } else {
//     console.log("Invalid option");
// }

// // 17. Game Difficulty Setting
// let gameDifficulty = Number(prompt("Enter game difficulty (1-3)"));
// if (gameDifficulty == 1) {
//     console.log("Easy");
// } else if (gameDifficulty == 2) {
//     console.log("Medium");
// } else if (gameDifficulty == 3) {
//     console.log("Hard");
// } else {
//     console.log("Unknown difficulty");
// }

// // 18. Blood Pressure Status
// let systolic = Number(prompt("Enter systolic pressure"));
// let diastolic = Number(prompt("Enter diastolic pressure"));
// if (systolic < 120 && diastolic < 80) {
//     console.log("Normal");
// } else if (systolic >= 120 && systolic < 140 || diastolic >= 80 && diastolic < 90) {
//     console.log("Elevated");
// } else {
//     console.log("High blood pressure");
// }

// // 19. Mobile Battery Level
// let battery = Number(prompt("Enter battery percentage"));
// if (battery < 20) {
//     console.log("Low");
// } else if (battery >= 20 && battery < 80) {
//     console.log("Normal");
// } else {
//     console.log("High");
// }

// // 20. CPU Temperature Monitor
// let cpuTemp = Number(prompt("Enter CPU temperature in Celsius"));
// if (cpuTemp < 50) {
//     console.log("Safe");
// } else if (cpuTemp >= 50 && cpuTemp < 75) {
//     console.log("Warm");
// } else {
//     console.log("Danger!");
// }

// // 21. Body Temperature Status
// let bodyTemp = Number(prompt("Enter body temperature in Celsius"));
// if (bodyTemp < 36) {
//     console.log("Low");
// } else if (bodyTemp >= 36 && bodyTemp < 37.5) {
//     console.log("Normal");
// } else {
//     console.log("Fever");
// }

// // 22. Credit Card Status
// let billStatus = prompt("Enter credit card bill status (Paid/Due/Overdue)");
// if (billStatus.toLowerCase() == "paid") {
//     console.log("Active");
// } else if (billStatus.toLowerCase() == "due") {
//     console.log("Warning");
// } else {
//     console.log("Blocked");
// }

// // 23. Online Order Status
// let orderStatus = Number(prompt("Enter order status code (0-3)"));
// if (orderStatus == 0) {
//     console.log("Ordered");
// } else if (orderStatus == 1) {
//     console.log("Packed");
// } else if (orderStatus == 2) {
//     console.log("Shipped");
// } else if (orderStatus == 3) {
//     console.log("Delivered");
// } else {
//     console.log("Invalid status");
// }

// // 24. Driving License Status
// let licenseAge = Number(prompt("Enter your age"));
// if (licenseAge < 18) {
//     console.log("Ineligible");
// } else if (licenseAge >= 18 && licenseAge < 65) {
//     console.log("Eligible");
// } else {
//     console.log("Renewal required");
// }

// // 25. Fuel Efficiency Rating
// let fuelEfficiency = Number(prompt("Enter fuel efficiency (km/l)"));
// if (fuelEfficiency >= 20) {
//     console.log("Excellent");
// } else if (fuelEfficiency >= 15) {
//     console.log("Good");
// } else {
//     console.log("Poor");
// }
// mobile signal strenght
//  let mobileSignal =Number (prompt("Enter signal strength"));
//  if( mobileSignal>=4 && mobileSignal<=5){ console.log("Signal is strong")}
//  else if(mobileSignal>=2 && mobileSignal<= 3){console.log("signal is medium")}
//  else{
//     console.log(" signal is weak")
//  }
// //  //room size
//  let roomSize =Number (prompt("Enter  room size in sqm"));

// // ----- IF ELSE IF LATER -----
//  let  userGpa = Number(prompt("Enter your gpa"));
//  if ( userGpa>= 3.7 && userGpa<= 4.0){
//     console.log("your gpa is A+")
//  } else if( userGpa>= 3.2 && userGpa<= 3.7){
//     console.log( 'your gpa is A')
//  } else if ( userGpa>=2.8 && userGpa<= 3.2){
//     console.log ('your gpa is B+')
//  } else{ 
//     console.log('your gpa is not listed')
//  } 
 
// let userAge = Number(prompt('Enter your age'));
// if ( userAge>=0 && userAge<= 13){
//     console.log(" your are child")
// } else if ( userAge>= 13 && userAge<=20){
//     console.log("you are a teen")
// } else if ( userAge>= 20 && userAge<=45){
//     console.log( "you are adult")
// } else if( userAge>=45 && userAge<=80){
//     console.log (" you are old")
// } else{ console.log( "you are dead")}

// let userSalary = Number(prompt('Enter your salary'));
// if( userSalary>=0 && userSalary<=100000){
//     console.log(" you are free from tax")
// } else if( userSalary>=100000 && userSalary<= 250000){
//     console.log (" your tax is 13%")}
//     else if( userSalary>= 250000 && userSalary<= 500000){
//         console.log( "your tax is 20% ")
//     } else(console.log( "enter valid salary"))



// let userTime =Number(prompt("Enter time"));
// if( userTime<0 && userTime>12){
//     console.log("The time is morning")
// } else if( userTime<12 && userTime>18){
//     console.log("The time is afternoon")
// } else if( userTime<18 && userTime>24
// ){
//     console.log ( "the time is night")
// } else{console.log( "enter valid time")}


// let A = Number(prompt("Enter a side"));
// let B = Number(prompt("Enter a side"));
// let C=  Number(prompt("Enter a side"));
// if( A == B && B == C ){
//     console.log("Equilataral traingle")
// }
//  else if(A==B  || B==C ||A==C){
//     console.log(" Isoceles  triangle")
//  } else{ console.log( "scaler triangle")}

// let A = Number( prompt( "enter first number"));
// let B = Number ( prompt("enter second number"));
// let C = Number( prompt( "Enter third number"));

// if ( A>B && A>C){ console.log("A is greatest")}
// else if (B>C){
//     console.log( "B is greatest")
// }
// else{ console.log("c is greatest")}

// 1. Electricity Bill Calculation:
//     * <100 units: ₹1.5/unit
//     * 100–300 units: ₹2/unit
//     * 300 units: ₹3/unit


// let userUnit = Number(prompt("Enter your unit"));
// if(userUnit<=100)
//     { console.log("The amt per unit is 1.5")}
// else if(userUnit<=300 && userUnit>=100){
//     console.log("The amt per unit is 2rs ")
// } else{
//     console.log ("the amt per unit is 3")
// }

// // 2 . Internet Data Usage Alert:
// //     * <50%: “Normal usage”
// //     * 50–90%: “Warning”
// //     * 90%: “Over limit!”
// let dataUsage = Number(prompt("Enter your internet data percent"));
// if(dataUsage<50)
//     {
//     console.log("Normal usage")
// }
// else if(dataUsage<=90  && dataUsage>=50){
//     console.log("warning")
// } else{console.log("over limit")}

// //3
// let month = Number(prompt("Enter the month number"));
// if (month == 12 || month == 1 || month == 2) {
//     console.log("Winter");
// } else if (month >= 3 && month <= 5) {
//     console.log("Spring");
// } else if (month >= 6 && month <= 8) {
//     console.log("Summer");
// } else if (month >= 9 && month <= 11) {
//     console.log("Autumn");
// }

// //4
//  let years = Number(prompt("Enter the number of years"));
// if (years < 1) {
//     console.log("Interest Rate: 5%");
// } else if (years >= 1 && years < 3) {
//     console.log("Interest Rate: 6.5%");
// } else {
//     console.log("Interest Rate: 7.5%");
// }
 
// //5
//  let movieRating = Number(prompt("Enter movie rating (out of 10)"));
// if (movieRating >= 8) {
//     console.log("Excellent");
// } else if (movieRating >= 5) {
//     console.log("Average");
// } else {
//     console.log("Poor");
// } 

// //6
//  let creditScore = Number(prompt("Enter your credit score"));
// if (creditScore >= 750) {
//     console.log("Approved");
// } else if (creditScore >= 600 && creditScore < 750) {
//     console.log("Review required");
// } else {
//     console.log("Rejected");
// } 

// //7
// let distance = Number(prompt("Enter shipping distance in km"));
// if (distance < 10) {
//     console.log("Shipping: Free");
// } else if (distance >= 10 && distance < 50) {
//     console.log("Shipping: ₹50");
// } else {
//     console.log("Shipping: ₹100");
// } 

// //8
//  let marks = Number(prompt("Enter student's percentage"));
// if (marks >= 90) {
//     console.log("Excellent");
// } else if (marks >= 70) {
//     console.log("Good");
// } else if (marks >= 50) {
//     console.log("Average");
// } else {
//     console.log("Needs improvement");
// } 

// // 9
//  let typingSpeed = Number(prompt("Enter typing speed (WPM)"));
// if (typingSpeed >= 60) {
//     console.log("Fast");
// } else if (typingSpeed >= 40) {
//     console.log("Average");
// } else {
//     console.log("Slow");
// } 

// // 10
//  let languageScore = Number(prompt("Enter your language test score"));
// if (languageScore >= 85) {
//     console.log("Advanced");
// } else if (languageScore >= 60) {
//     console.log("Intermediate");
// } else {
//     console.log("Beginner");
// }
 

// // 11 Tax
//  let income = Number(prompt("Enter your income (in Lakhs)"));
// if (income < 2.5) {
//     console.log("No tax");
// } else if (income >= 2.5 && income < 5) {
//     console.log("Tax: 5%");
// } else if (income >= 5 && income < 10) {
//     console.log("Tax: 20%");
// } else {
//     console.log("Tax: 30%");
// }
 

// // 11. Water Quality Index
// let waterQuality = Number(prompt("Enter the water quality index"));
// if (waterQuality >= 0 && waterQuality <= 50) {
//     console.log("Good");
// } else if (waterQuality >= 51 && waterQuality <= 100) {
//     console.log("Moderate");
// } else if (waterQuality >= 101 && waterQuality <= 200) {
//     console.log("Unhealthy");
// } else {
//     console.log("Dangerous");
// }

// // 12. Voting Eligibility
// let age = Number(prompt("Enter your age"));
// if (age < 18) {
//     console.log("Not eligible");
// } else if (age >= 18 && age < 60) {
//     console.log("Eligible");
// } else {
//     console.log("Senior voter");
// } 

// // 13. App Rating Feedback
// let appRating = Number(prompt("Enter the app rating"));
// if (appRating >= 4.5) {
//     console.log("Excellent");
// } else if (appRating >= 3) {
//     console.log("Good");
// } else {
//     console.log("Poor");
// }

// // 14. Coffee Strength Selector
// let coffeeStrength = Number(prompt("Enter coffee strength level (1-3)"));
// if (coffeeStrength == 1) {
//     console.log("Light");
// } else if (coffeeStrength == 2) {
//     console.log("Medium");
// } else if (coffeeStrength == 3) {
//     console.log("Strong");
// } else {
//     console.log("Invalid");
// }

// // 15. Bus Fare by Age
// let passengerAge = Number(prompt("Enter your age for bus fare"));
// if (passengerAge < 5) {
//     console.log("Free");
// } else if (passengerAge >= 5 && passengerAge < 18) {
//     console.log("Half fare");
// } else {
//     console.log("Full fare");
// }

// // 16. Subscription Type
// let subscription = Number(prompt("Enter subscription type (1-3)"));
// if (subscription == 1) {
//     console.log("Basic");
// } else if (subscription == 2) {
//     console.log("Standard");
// } else if (subscription == 3) {
//     console.log("Premium");
// } else {
//     console.log("Invalid option");
// }

// // 17. Game Difficulty Setting
// let gameDifficulty = Number(prompt("Enter game difficulty (1-3)"));
// if (gameDifficulty == 1) {
//     console.log("Easy");
// } else if (gameDifficulty == 2) {
//     console.log("Medium");
// } else if (gameDifficulty == 3) {
//     console.log("Hard");
// } else {
//     console.log("Unknown difficulty");
// }

// // 18. Blood Pressure Status
// let systolic = Number(prompt("Enter systolic pressure"));
// let diastolic = Number(prompt("Enter diastolic pressure"));
// if (systolic < 120 && diastolic < 80) {
//     console.log("Normal");
// } else if (systolic >= 120 && systolic < 140 || diastolic >= 80 && diastolic < 90) {
//     console.log("Elevated");
// } else {
//     console.log("High blood pressure");
// }

// // 19. Mobile Battery Level
// let battery = Number(prompt("Enter battery percentage"));
// if (battery < 20) {
//     console.log("Low");
// } else if (battery >= 20 && battery < 80) {
//     console.log("Normal");
// } else {
//     console.log("High");
// }

// // 20. CPU Temperature Monitor
// let cpuTemp = Number(prompt("Enter CPU temperature in Celsius"));
// if (cpuTemp < 50) {
//     console.log("Safe");
// } else if (cpuTemp >= 50 && cpuTemp < 75) {
//     console.log("Warm");
// } else {
//     console.log("Danger!");
// }

// // 21. Body Temperature Status
// let bodyTemp = Number(prompt("Enter body temperature in Celsius"));
// if (bodyTemp < 36) {
//     console.log("Low");
// } else if (bodyTemp >= 36 && bodyTemp < 37.5) {
//     console.log("Normal");
// } else {
//     console.log("Fever");
// }

// // 22. Credit Card Status
// let billStatus = prompt("Enter credit card bill status (Paid/Due/Overdue)");
// if (billStatus.toLowerCase() == "paid") {
//     console.log("Active");
// } else if (billStatus.toLowerCase() == "due") {
//     console.log("Warning");
// } else {
//     console.log("Blocked");
// }

// // 23. Online Order Status
// let orderStatus = Number(prompt("Enter order status code (0-3)"));
// if (orderStatus == 0) {
//     console.log("Ordered");
// } else if (orderStatus == 1) {
//     console.log("Packed");
// } else if (orderStatus == 2) {
//     console.log("Shipped");
// } else if (orderStatus == 3) {
//     console.log("Delivered");
// } else {
//     console.log("Invalid status");
// }

// // 24. Driving License Status
// let licenseAge = Number(prompt("Enter your age"));
// if (licenseAge < 18) {
//     console.log("Ineligible");
// } else if (licenseAge >= 18 && licenseAge < 65) {
//     console.log("Eligible");
// } else {
//     console.log("Renewal required");
// }

// // 25. Fuel Efficiency Rating
// let fuelEfficiency = Number(prompt("Enter fuel efficiency (km/l)"));
// if (fuelEfficiency >= 20) {
//     console.log("Excellent");
// } else if (fuelEfficiency >= 15) {
//     console.log("Good");
// } else {
//     console.log("Poor");
// }
// mobile signal strenght
 let mobileSignal =Number (prompt("Enter signal strength"));
 if( mobileSignal>=4 && mobileSignal<=5){ console.log("Signal is strong")}
 else if(mobileSignal>=2 && mobileSignal<= 3){console.log("signal is medium")}
 else{
    console.log(" signal is weak")
 }
//  //room size
//  let roomSize =Number (prompt("Enter  room size in sqm"));



