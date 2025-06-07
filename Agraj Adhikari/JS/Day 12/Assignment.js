// 29. Marathon Completion Time

/* let Time = Number(prompt('Enter Time in hours(3-5'));

if(Time < 3){
    console.log('Elite');
}else if(Time >= 3 && Time < 5){
    console.log('Average');
}else{
    console.log('Slow')
};  
 */

//30. Planet Classification by Size
/* let Size = Number(prompt('Enter Size in km(0 - 7000)'));

if(Size < 2000){
    console.log('Dwarf');
}else if(Size >=2000 && Size < 7000){
    console.log('Terrestrial');
}else{
    console.log('Gas Giant');
};  

 */

//31. Internet Speed Test
/* let Speed = Number(prompt('Enter Speed in Mbps(0 - 100'));

if(Speed < 30){
    console.log('Slow');
}else if(Speed >= 30 && Speed < 100){
    console.log('Moderate');
}else{
    console.log('invalid')
};  
 */

//32. Online Exam Result
/* 
let Marks = Number(prompt('Enter Marks in Percentage'));

if(Marks < 50){
    console.log('Failed');
}else if(Marks >= 50 && Marks < 79){
    console.log('Passed');
}else{
    console.log('Invalid')
};  
 */

//33. Laptop Battery Health

/* let Health = Number(prompt('Enter Battery Health in Percentage'));

if(Health < 60){
    console.log('Poor');
}else if(Health >= 60 && Health < 90){
    console.log('Good');
}else{
    console.log('Excellent')
};   */


//34. Sleep Duration

/* let Duration = Number(prompt('Enter Sleep Duration'));

if(Duration < 6){
    console.log('Insufficient');
}else if(Duration >= 6 && Duration <= 8){
    console.log('Ideal');
}else{
    console.log('Excessive')
};  
 */

//35. Reading Level by Age

/* let level = Number(prompt('Enter Reading level(5-12'));

if(level >= 5 && level <= 7 ){
    console.log('Beginner');
}else if( level >= 8 && level <= 12){ 
    console.log('Intermediate');
}else if(level >= 12){
    console.log('Advanced')
}else{
    console.log('Invalid');
}
 */

//36. Movie Ticket Pricing by Time

/* let Ticket = (prompt('Enter time of the day'));

if(Ticket == "Morning"){
    console.log('100');
}else if(Ticket == "Afternoon"){
    console.log('150');
}else if(Ticket == "Evening"){
    console.log('200')
}else{
    console.log('Invalid Time');
}
 */

//37. Heart Rate
/* let heartRate = Number(prompt("Enter Heart Rate (bpm)"));
if (heartRate < 60) {
    console.log("Low");
} else if (heartRate >= 60 && heartRate <= 100) {
    console.log("Normal");
} else {
    console.log("High");
} */

//38. Product Warranty Status
/* let warrantyYears = Number(prompt("Enter Product Age (years)"));
if (warrantyYears < 1) {
    console.log("Under warranty");
} else if (warrantyYears >= 1 && warrantyYears <= 2) {
    console.log("Limited warranty");
} else {
    console.log("Expired");
} */

//39. Student Attendance
/* let attendance = Number(prompt("Enter Attendance Percentage"));
if (attendance >= 90) {
    console.log("Eligible for exam");
} else if (attendance >= 75 && attendance < 90) {
    console.log("Warning");
} else {
    console.log("Not eligible");
} */

//40. Sleep Quality Rating
// let Duration = prompt("Enter Sleep Duration)");

// if(Duration < 6){
//     console.log('Poor');
// }else if(Duration >= 6 && Duration <= 8){
//     console.log('Good');
// }else{
//     console.log('invalid')
// }; 

//41. BMI checker
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
 
//42. Weather Type by Temperature
/* let temperature = Number(prompt("Enter Temperature (°C)"));
if (temperature < 15) {
    console.log("Cold");
} else if (temperature >= 15 && temperature <= 25) {
    console.log("Pleasant");
} else {
    console.log("Hot");
} */

//43. Battery Charge Mode
/* let battery = Number(prompt("Enter Battery Percentage"));
if (battery < 20) {
    console.log("Power saving");
} else if (battery >= 20 && battery <= 80) {
    console.log("Normal");
} else {
    console.log("Charging complete");
} */

//44. Typing Test Result
/*let accuracy = Number(prompt("Enter Typing Accuracy (%)"));
if (accuracy > 95) {
    console.log("Perfect");
} else if (accuracy >= 80 && accuracy <= 95) {
    console.log("Good");
} else {
    console.log("Needs improvement");
} */

//45. Computer Boot Time
/* let bootTime = Number(prompt("Enter Boot Time (seconds)"));
if (bootTime < 10) {
    console.log("Fast");
} else if (bootTime >= 10 && bootTime <= 30) {
    console.log("Average");
} else {
    console.log("Slow");
} */

//46. Review
/* let reviewStars = Number(prompt("Enter Review Stars"));
if (reviewStars === 5) {
    console.log("Excellent");
} else if (reviewStars >= 3 && reviewStars <= 4) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
} */

//47. Plant Watering Schedule
/* let soilMoisture = Number(prompt("Enter Soil Moisture Percentage"));
if (soilMoisture < 30) {
    console.log("Water now");
} else if (soilMoisture >= 30 && soilMoisture <= 60) {
    console.log("Check tomorrow");
} else {
    console.log("No watering needed");
} */

//48. File Storage Alert
/* let storageUsage = Number(prompt("Enter Storage Usage Percentage"));
if (storageUsage < 70) {
    console.log("Normal");
} else if (storageUsage >= 70 && storageUsage <= 90) {
    console.log("Warning");
} else {
    console.log("Critical");
} */

//49. TAX Calculator
/* let Salary = Number(prompt("Enter your Salary"));

if (Salary >= 0 && Salary <= 100000) {
    console.log('No TAX');
} else if (Salary > 100000 && Salary < 1000000) {
    console.log('You are Taxed 15%');
} else if (Salary > 1000000) {
    console.log('You are Taxed 35%');
} else {
    console.log('Enter Valid Salary');
} */

//50. Software Version Compatibility
/* let softwareVersion = Number(prompt("Enter the software version")); 
if (softwareVersion < 2.0) { 
    console.log("Outdated"); 
} else if (softwareVersion >= 2.0 && softwareVersion < 3.0) { 
    console.log("Compatible"); 
} else if (softwareVersion === 3.0) { 
    console.log("Beta feature required"); 
} else { 
    console.log("Unknown version"); 
} 
*/




