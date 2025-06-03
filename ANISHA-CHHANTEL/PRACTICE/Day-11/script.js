//  --------------------IF ELSE IF LADDER-----------------------
// let grade = (prompt('Enter your grade'));
// if(grade >=3.7 && grade <= 3.7){
//     console.log('A+ grade');
// } else if (grade >=3.7 && grade <=3.5) {
//     console.log('B+ grade ');
// } else {
//     console.log('c+ grade');
// }
    


// let userAge=(prompt('Enter your age'));
// if(userAge <=12 && userAge <= 0 ){
//     console.log('You are infant');
// } else if(userAge>=11 && userAge<=20){
//     console.log('You are young');
// } else if(userAge>=21 && userAge<=40){
//     console.log('You are old');
// } else if(userAge>=81 && userAge<=100){
//     console.log('You are too old');
// } else{
//     console.log('You were never born or already in heaven');
// }


// let userSalary=(prompt('Enter your salary'));
// if(userSalary <100 && userSalary>=0){
//     console.log("10% tax")
// } else if(userSalary <2.5 && userSalary >=1.0){
//     console.log('50% tax');
// }else {
//     console.log(100% tax);
// }

// let userTime=(prompt('Enter your time'));
// if(userTime <4 && userTime>=12){
//     console.log('It  is morning');
// } else if(userTime<1 && userTime>=4){
//     console.log('it is a aternoon');
// }else if(userTime<4 && userTime>=7){
//     console.log('it is evening');
// }else{
//     console.log('it is night');
// }

// let userSide1=(prompt('Enter your 1st side'));
// let userSide2=(prompt('Enter your 2nd side'));
// let userSide3=(prompt('Enter your 3rd side'));
// if(userSide1==userSide2&&userSide2==userSide3){
//     console.log('equilater');  //ALL SIDE EQUAL
// }else if(userSide1==userSide2||userSide2==userSide3||userSide1==userSide3){   
//     console.log('isolater');  //TWO SIDE EQUAL
// }else{
//     console.log('scalar');  //ALL DIFFERENT
// }

// let userWeight=(prompt('Enter your weight'));
// let userHeight=(prompt('Enter your height'));
// let BMI=(userWeight/userHeight*userHeight)
// if(BMI<18.5 && BMI>=0){
//     console.log('normal weight');
// } else if(BMI<24.9 && BMI>=18.5){
//     console.log('under weight');
// }else if(BMI<29.9 && BMI>=24.9){
//     console.log('over weight');
// }else{
//     console.log('obese');
// }

// let userInputNumber=Number(prompt('Enter your 1st number'));
// let userInputNumber2=Number(prompt('Enter your 2st number'));
// let userInputNumber3=Number(prompt('Enter your 3st number'));
// if(userInputNumber>userInputNumber2&& userInputNumber>userInputNumber3){
//     console.log('Display 1st is greater');
// }else if(userInputNumber2>userInputNumber&&userInputNumber2>userInputNumber3){
//     console.log('Display 2nd is greater');
// }else{
//     console.log('Display 3rd is greater');
// }




// ASSIGNMENT
// 1) Electricity Bill Calculation:
let userUnit=(prompt('Enter your unit'));
if(userUnit<100 && userUnit>=0){
    console.log('its 1.5 unit');
}else if(userUnit<300 && userUnit>=100){
    console.log('its 2 unit');
}else{
    console.log('its 3 unit');
}

// 2) Internet Data Usage Alert:
let userData=(prompt('Enter your data'));
if(userData<50 && userData>=0){
    console.log('it is a normal usages');
}else if(userData<90 && userData>=50){
    console.log('it is a warning');
}else{
    console.log('it is a over limit');
}

// 3) Season Checker (month number): 
let userNumber=(prompt('Enter your number'));
if (userNumber<12 && userNumber>=1,2){
    console.log('it is winter');
}else if(userNumber<5 && userNumber>=3){
    console.log('it is spring');
}else if(userNumber<8 && userNumber>=6){
    console.log('it is summer');
}else{
    console.log('it is autumn');
}

// 4) Bank Interest Rate:
let userRate=(prompt('Enter your rate'));
if (userRate<1 && userRate>=0){
    console.log('5% interest');
} else if(userRate<3 && userRate>=1){
    console.log('6.5% interest');
}else{
    console.log('7.5% interest');
}

// 5) Movie Rating Classifier (out of 10):
let userRating=(prompt('Enter your rating'));
if(userRating<10 && userRating>=8){
    console.log('Excellent');
} else if(userRating<7.9 && userRating>=5){
    console.log('Average');
}else{
    console.log('Poor');
}

// 6) Loan Approval Based on Credit Score:
let userLoan=(prompt('Enter your amount'));
if (userLoan<750 && userLoan>=0){
    console.log('Approved');
}else if(userLoan<600 && userLoan>=750){
    console.log('Review');
}else{
    console.log('Rejected');
}

// 7)  Shipping Charges Based on Distance:
let userDistance=(prompt('Enter your distance'));
if (userDistance<10 && userDistance>=0){
    console.log('it cost free');
}else if(userDistance<50 && userDistance>=10){
    console.log('it cost 50');
}else{
    console.log('it cost 100');
}

// 8) Student Performance Evaluation:
let userEvaluation=(prompt('Enter your evaluation'));
if(userEvaluation<90 && userEvaluation>=0){
    console.log('Excellent');
}else if(userEvaluation<70 && userEvaluation>=70){
    console.log('Good');
}else if(userEvaluation<69 && userEvaluation>=50){
    console.log('Average');
}else{
    console.log('Needs improvement');
}

// 9) Typing Speed Evaluation (WPM):
let userSpeed=(prompt('Enter your speed'));
if(userSpeed<60 && userSpeed>=0){
    console.log('Fast');
}else if(userSpeed<40 && userSpeed>=60){
    console.log('Average');
}else{
    console.log('Slow');
}

// 10) Language Level Based on Test Score:
let userScore=(prompt('Enter your score'));
if(userScore<0 && userScore>=85){
    console.log('Advanced');
} else if(userScore<60 && userScore>=84){
    console.log('Intermediate');
}else{
    console.log('Beginner');
}

// 11) Income Tax Bracket:
let userIncome=(prompt('Enter your income'));
if(userIncome<2.5 && userIncome>=0){
    console.log('No tax');
} else if(userIncome<5 && userIncome>=2.5){
    console.log('5% tax');
}else if(userIncome<10 && userIncome>=5){
    console.log('20% tax');
}else {
    console.log('30% tax');
}

// 12) Water Quality Index:
let userIndex=(prompt('Enter your index'));
if(userIndex<50 && userIndex>=0){
    console.log('Good');
}else if(userIndex<100 && userIndex>=51){
    console.log('Moderate');
}else if(userIndex<200 && userIndex>=101){
    console.log('Unhealthy');
}else{
    console.log('Dangerous');
}

// 13) Voting Eligibility:
let userAge=(prompt('Enter your age'));
if(userAge<18 && userAge>=0){
    console.log('Not eligible');
}else if(userAge<60 && userAge>=18){
    console.log('Eligible');
}else{
    console.log('Senior voter');
}

// 14) App Rating Feedback:
let userFeedback=(prompt('Enter your app rating'));
if(userFeedback<5 && userFeedback>=4.4){
    console.log('excellent');
}else if(userFeedback<4.4 && userFeedback>=3){
    console.log('Good');
}else{
    console.log('Poor');
}

// 15)  Coffee Strength Selector:
let userStrength=(prompt('Enter your strength'));
if(userStrength<50 && userStrength>=0){
    console.log('light');
}else if(userStrength<100 && userStrength>=51){
    console.log('Medium');
}else if(userStrength<200 && userStrength>=101){
    console.log('Strong');
}else{
    console.log('Invalid');
}

// 16) Bus Fare by Age:
let userAGe=(prompt('Enter your age'));
if(userAGe<5 && userAGe>=0){
    console.log('Free ');
}else if(userAGe<18 && userAGe>=5){
    console.log('Half ');
}else{
    console.log('Full ');
}

// 17). Subscription Type:
let userType=(prompt('Enter your type '));
if( userType<1 && userType>=0){
    console.log('Basic');
}else if(userType<2 && userType>=1 ){
    console.log('Standard');
}else if(userType <3 && userType>=2 ){
    console.log('Premium');
}else{
    console.log('Invalid option ');
}

//  18) Game Difficulty Setting:
let userSetting =(prompt('Enter your setting'));
if( userSetting<1 &&userSetting >=0){
    console.log('Easy');
}else if(userSetting<2 &&userSetting >=1 ){
    console.log('Medium');
}else if( userSetting<3 && userSetting>=2 ){
    console.log('Hard');
}else{
    console.log(' unknown');
}


// 19) Blood Pressure Status:
let usercard =(prompt('Enter your pressure'));
if(usercard<80 &&usercard>=120){
    console.log('Normal');
}else if(usercard<120 && usercard>=80){
    console.log('Elevated');
}else{
    console.log(' High');
}


// 20) Mobile Battery Level:
let userBattery=(prompt('Enter your battery'));
if(userBattery<20 && userBattery>=0){
    console.log('Low');
}else if(userBattery<80 && userBattery>=20 ){
    console.log('Normal');
}else{
    console.log('High ');
}

// 21) CPU Temperature Monitor:
let userTemperature =(prompt('Enter your temperature'));
if(userTemperature <50 &&userTemperature >=0){
    console.log('Safe');
}else if(userTemperature<75 &&userTemperature >=50 ){
    console.log('Warm');
}else{
    console.log(' Danger');
}

// 22) Body Temperature:
let userBodyTemperature =(prompt('Enter your Body Temperature '));
if( userBodyTemperature<36 && userBodyTemperature>=0){
    console.log('Low');
}else if(userBodyTemperature<37 && userBodyTemperature>=36 ){
    console.log('Normal');
}else{
    console.log('Fever ');
}

// 23) File storage alert:
let userStorage=(prompt('Enter your storage'));
if(userStorage<70 && userStorage>=0){
    console.log('Normal');
}else if(userStorage<90 && userStorage>=70){
    console.log('Warning');
}else{
    console.log('Critical');
}

 // 24) Online Order Status Code:
let userCode=(prompt('Enter your Status Code'));
if(userCode <0 && userCode>=0){
    console.log('Ordered');
}else if(userCode<1 && userCode>=0 ){
    console.log('Packed');
}else if(userCode <2 && userCode>=1 ){
    console.log('Shipped');
}else if(userCode<3 && userCode >=2 ){
    console.log('Delivered');
}else{
    console.log('Invalid status ');
}

// 25) Software Version Compatibility:
let userCompatibility =(prompt('Enter your Software Version Compatibility'));
if(userCompatibility <2.0 && userCompatibility>=0){
    console.log(' Outdated');
}else if(userCompatibility<3.0 && userCompatibility>=2.0 ){
    console.log('Compatible');
}else{
    console.log(' Beta feature required');
}

// 26) Driving License Status by Age:
let userInputAge =(prompt('Enter your Status '));
if(userInputAge <18 && userInputAge>=0){
    console.log('Ineligible');
}else if(userInputAge<65 && userInputAge>=18 ){
    console.log('Eligible');
}else{
    console.log(' Renewal required ');
}

// 27) Fuel Efficiency (km/l):
let fuel=Number(prommpt('enter number'));
if (fuel>=20){
    console.log('excellent');
} else if(fuel>15 && fuel<20){
    console.log('good');
} else {
    console.log('poor');
}

 // 28) Mobile Signal Strength (bars):
 let userSignal=Number(prompt('enter a number'));
if (userSignal==0 && userSignal==1){
    console.log('weak');
} else if(userSignal==3&& userSignal==2){
    console.log('medium');
} else{
    console.log('strong');
}

// 29) Room Size (sqm):
let inputSize=(prompt('Enter your Room Size'));
if( inputSize<20 &&inputSize >=0){
    console.log(' Small');
}else if(inputSize<40 && inputSize>=20 ){
    console.log('Medium');
}else{
    console.log('Large ');
}

// 30) Marathon Completion Time (hours):
let userHour=(prompt('Enter your hour'));
if(userHour <3 &&userHour >=0){
    console.log(' Elite');
}else if(userHour<5 && userHour>=3 ){
    console.log('Average');
}else{
    console.log('Slow ');
}

