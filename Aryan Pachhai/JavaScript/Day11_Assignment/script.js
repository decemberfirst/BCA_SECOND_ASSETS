console.log('JS has been loaded');

// -----------------------1) Electricity Bill Calculation--------------------------------------

// let myUnit=Number(prompt('Enter electricity unit'));
// if(myUnit<0){
//     console.log('Give vaild unit');
// }
// else if(myUnit<100){
//     console.log(`Your electricity bill is ${1.5*myUnit}`);
// }
// else if(myUnit>=100 && myUnit<=300){
//     console.log(`Your electricity bill is ${2*myUnit}`);
// }
// else{
//     console.log(`Your electricity bill is ${3*myUnit}`);
// }


// ---------------------2) Internet Data Usage Alert------------------------------------

// let myUsage=Number(prompt('Enter usage of Internet in %'));
// if(myUsage<0 || myUsage>100){
//        console.log('Enter valid data usage in %');
//        alert('Enter valid data usage in %');
// }
// else if(myUsage<50){
//     console.log(`Normal Usage . You have used ${myUsage}% of data`);
//     alert(`Normal Usage . You have used ${myUsage}% of data`);
// }
// else if(myUsage>=50 && myUsage<=90){
//     console.log(`Warning . You have used ${myUsage}% of data`);
//     alert(`Warning . You have used ${myUsage}% of data`);
// }
// else{
//     console.log(`Over Limit . You have used ${myUsage}% of data`);
//     alert(`Over Limit . You have used ${myUsage}% of data`);
// }


// -----------------------3) Season Checker------------------------------------------

// let myMonth=Number(prompt('Enter month in number wise'));
// if(myMonth<=0 || myMonth>=13){
//     console.log('Give vaild month number');
// }
// else if(myMonth>=3 && myMonth<=5){
//     console.log('It is Spring season');
// }
// else if(myMonth>=6 && myMonth<=8){
//     console.log('It is Summer season');
// }
// else if(myMonth>=9 && myMonth<=11){
//     console.log('It is Autumn season');
// }
// else{
//     console.log('It is Winter season');
// }


// -------------------------4) Bank Interest Rate---------------------------------------------

// let myTime=Number(prompt('Enter time period in year'));
// if(myTime<=0){
//     console.log('Give valid year time period');
// }
// else if(myTime<1){
//     console.log('Your Interest rate is 5%');
// }
// else if(myTime>=1 && myTime<=3){
//     console.log('Your Interest rate is 6.5%');
// }
// else{
//     console.log('Your Interest rate is 7.5%');
// }

//--------------------------------5) Movie Rating Classifier-----------------------------

// let movieRating=Number(prompt('Enter your movie rating'));
// if(movieRating<0 || movieRating>10){
//     console.log('Give valid rating');
// }
// else if(movieRating>=8 && movieRating<=10){
//     console.log('The movie rating is Excellent');
// }
// else if(movieRating>=5 && movieRating<8){
//     console.log('The movie rating is Average');
// }
// else{
//     console.log('The movie rating is Poor');
// }


//------------------------------6) Loan Approval Based on Credit score-------------------------------------

// let myCreditScore=Number(prompt('Enter your credit score'));
// if(myCreditScore<0){
//     console.log('Not vaild credit score. Enter again');
// }
// else if(myCreditScore>=750){
//     console.log('Your loan is approved');
// }
// else if(myCreditScore>=600 && myCreditScore<750){
//     console.log('Need to review for loan approval');
// }
// else{
//     console.log('Your loan approval has been rejected');
// }

 
//------------------------7) Shipping Charges Based on Distance------------------------------------

// let myDistance=Number(prompt('Enter your distance in kilometer'));
// if(myDistance<0){
//     console.log('Enter vaild distance');
// }
// else if(myDistance<10){
//     console.log('The shipping charges is FREE');
// }
// else if(myDistance>=10 && myDistance<=50){
//     console.log('The shippinf charges is Rs50');
// }
// else{
//     console.log('The shiiping charges is Rs100');
// }


//-----------------------8) Student Performance Evaluation------------------------------

// let myPercentage=Number(prompt('Enter your percentage'));
// if(myPercentage<0 || myPercentage>100){
//     console.log('Enter valid percentage');
// }
// else if(myPercentage>=90){
//     console.log('The student performance is Excellent');
// }
// else if(myPercentage>=70 && myPercentage<90){
//     console.log('The student performance is Good');
// }
// else if(myPercentage>=50 && myPercentage<70){
//     console.log('The student performance is Average');
// }
// else{
//     console.log('The student needs improvement');
// }


//--------------------------------9) Typing speed evaluation(WPM)---------------------------------

// let myWpm=Number(prompt('Enter your words per minute(WPM)'));
// if(myWpm>=60){
//     console.log('Your typing speed is Fast');
// }
// else if(myWpm>=40 && myWpm<60){
//     console.log('Your typing speed is Average');
// }
// else if(myWpm<0){
//     console.log('Enter valid WPM');
// }
// else{
//     console.log('Your typing speed is Slow');
// }


//-------------------------10) Language Level Based on Test Score----------------------

// let myLevel=Number(prompt('Enter your test score'));
// if(myLevel<0 || myLevel>100){
//     console.log('Enter valid test score');
// }
// else if(myLevel>=85){
//     console.log('You are Advanced in language level');
// }
// else if(myLevel>=60 && myLevel<85){
//     console.log('You are Intermediate in language level');
// }
// else{
//     console.log('You are Beginner in language level');
// }


//----------------------------11) Income Tax Bracket----------------------------------------

// let myIncome=Number(prompt('Enter your income in lakh'));
// if(myIncome<0){
//     console.log('Enter valid income');
// }
// else if(myIncome>2.5 && myIncome<=5){
//     console.log('You have to pay 5% tax');
// }
// else if(myIncome>5 && myIncome<=10){
//     console.log('You have to pay 20% tax');
// }
// else if(myIncome>10){
//     console.log('You have to pay 30% tax');
// }
// else{
//     console.log('You donot have to pay tax');
// }


// -----------------------12) Water Quality Index--------------------------------------

// let waterQuality=Number(prompt('Enter your water quality index'));
// if(waterQuality<0){
//     console.log('Enter valid water index');
// }
// else if(waterQuality>200){
//     console.log('Water quality is dangerous');
// }
// else if(waterQuality>100 && waterQuality<=200){
//     console.log('Water quality is unhealthy');
// }
// else if(waterQuality>50 && waterQuality<=100){
//     console.log('Water quality is moderate');
// }
// else{
//     console.log('Water quality is good');
// }


// ---------------------------------13) Voting Eligibility----------------------------------

// let myAge=Number(prompt('Enter your age'));
// if(myAge<0 || myAge>120){
//     console.log('Enter valid age');
// }
// else if(myAge>60){
//     console.log('You are a senior voter');
// }
// else if(myAge>=18 && myAge<=60){
//     console.log('You are eligible for voting');
// }
// else{
//     console.log('You are not eligible for voting');
// }


//--------------------------------14) App rating feedback------------------------------------

// let myRating=Number(prompt('Enter your rating'));
// if(myRating<1 || myRating>5){
//        console.log('Enter valid rating');
// }
// else if(myRating>=4.5 && myRating<=5){
//     console.log('Excellent');
// }
// else if(myRating>=3 && myRating<4.5){
//     console.log('Good');
// }
// else{
//     console.log('Poor');
// }


//------------------------------15) Coffee Strength Selector---------------------------------------

// let myValue=prompt('Enter your coffee strength');
// if(myValue=='Light'){
//     console.log('You have choosen Light strength coffee');
// }
// else if(myValue=='Medium'){
//     console.log('You have choosen Medium strength coffee');
// }
// else if(myValue=='Strong'){
//     console.log('You have choosen Strong strength coffee');
// }
// else{
//     console.log('Invalid');
// }


//-------------------------------16) Bus Fare by age------------------------------------------

// let myAge=Number(prompt('Enter your age'));
// if(myAge<0){
//     console.log('Invalid Age');
// }
// else if(myAge>18){
//     console.log('You have to pay full for bus fare');
// }
// else if(myAge<=18 && myAge>5){
//     console.log('You have to pay half for bus fare');
// }
// else{
//     console.log('You donot have to pay for bus fare');
// }


// ---------------------------------17) Subscription Type--------------------------------------

// let mySub=prompt('Enter your subscription type');
// if(mySub=='Basic'){
//     console.log('You have choosen basic subscription');
// }
// else if(mySub=='Standard'){
//     console.log('You have choosen standard subscription');
// }
// else if(mySub=='Premium'){
//     console.log('You have choosen premium subscription');
// }
// else{
//     console.log('Invalid option');
// }


//----------------------------18) Game Difficulty Setting----------------------------------

// let myDifficulty=prompt('Enter you difficulty mode');
// if(myDifficulty=='Easy' || myDifficulty=='easy' || myDifficulty=='EASY'){
//     console.log('You have choosen easy setting');
// }
// else if(myDifficulty=='Medium' || myDifficulty=='medium' || myDifficulty=='MEDIUM'){
//     console.log('You have choosen medium setting');
// }
// else if(myDifficulty=='Hard' || myDifficulty=='hard' || myDifficulty=='HARD'){
//     console.log('You have choosen hard setting');
// }
// else{
//     console.log('Unknown');
// }


//------------------------------19) Blood Pressure Status-------------------------------------------

// let myBp1=Number(prompt('Enter upper number(systolic)'));
// let myBp2=Number(prompt('Enter lower number(diastolic)'));
// if(myBp1<=0 || myBp2<=0 || myBp1>=200 || myBp2>=200){
//     console.log('Invaild data');
// }
// else if(myBp1<=120 && myBp2<=80){
//     console.log('Your blood pressure is Normal');
// }
// else if(myBp1>120 && myBp2>80 && myBp1<140 && myBp2<90){
//     console.log('Your blood pressure is Elevated');
// }
// else{
//     console.log('Your blood pressure is High')
// }


//-----------------------------20) Mobile battery level--------------------------------

// let myBattery=Number(prompt('Enter your battery %'));
// if(myBattery<0 || myBattery>100){
//     console.log('Invalid data')
// }
// else if(myBattery>=80){
//     console.log('Your battery level is High');
// }
// else if(myBattery>=20 && myBattery<80){
//     console.log('Your battery level is Normal');
// }
// else{
//     console.log('Your battery level is Low');
// }


//-----------------------------21) CPU temperature monitor-------------------------------------

// let myTemp=Number(prompt('Enter temperature in celsius'));
// if(myTemp<20){
//     console.log('Cold');
// }
// else if(myTemp>75){
//     console.log('Danger');
// }
// else if(myTemp>=50 && myTemp<=75){
//     console.log('Warm');
// }
// else{
//     console.log('Safe');
// }


//------------------------22) Body Temperature----------------------------------------------

// let myBodyTemp=Number(prompt('Enter your body temperature'));
// if(myBodyTemp<30 || myBodyTemp>45){
//     console.log('Invalid');
// }
// else if(myBodyTemp>37.5){
//     console.log('Fever');
// }
// else if(myBodyTemp>=36 && myBodyTemp<=37.5){
//     console.log('Normal');
// }
// else{
//     console.log('Low');
// }


// --------------------------23) Credit Card Status-----------------------------------

// let myCard=prompt('Enter card status')
// if(myCard=='Bill_paid'){
//     console.log('Active');
//     alert('Active');
// }
// else if(myCard=='Payment_due'){
//     console.log('Warning');
//     alert('Warning');
// }
// else if(myCard=='Overdue'){
//     console.log('Blocked');
//     alert('Blocked');
// }
// else{
//     console.log('Invalid');
// }


//---------------------24) Online order status code--------------------------------

// let myCode=Number(prompt('Enter code'));
// if(myCode==0){
//     console.log('Ordered');
// }
// else if(myCode==1){
//     console.log('Packed');
// }
// else if(myCode==2){
//     console.log('Shipped');
// }
// else if(myCode==3){
//     console.log('Delivered');
// }
// else{
//     console.log('Invalid Status');
// }


//---------------------25) Software Version Compatibility-----------------------------------

// let myVersion=Number(prompt('Enter your version'));
// if(myVersion<0 || myVersion>3){
//     console.log('Invalid');
// }
// else if(myVersion==3.0){
//     console.log('Beta feature required');
// }
// else if(myVersion>=2.0 && myVersion<3.0){
//     console.log('Compatible');
// }
// else{
//     console.log('Outdated');
// }


//-----------------------26) Driving License Status-------------------------------

// let myAge=Number(prompt('Enter your age'));
// if(myAge<0 || myAge>120){
//     console.log('Invalid Age');
// }
// else if(myAge<18){
//     console.log('You are ineligible for driving license');
// }
// else if(myAge>=18 && myAge<65){
//     console.log('You are eligible for driving license');
// }
// else{
//     console.log('Renewal is required');
// }


//----------------------27) Fuel Efficiency---------------------------------

// let myDistance=Number(prompt('Enter your range in kilometer'));
// let myLevel=Number(prompt('Enter your fuel level'));
// let efficiency=myDistance/myLevel;
// if(efficiency<0 ||efficiency>20){
//     console.log('Enter valid value');
// }
// else if(efficiency==20){
//     console.log('Your fuel efficiency is excellent');
// }
// else if(efficiency<20 && efficiency>=15){
//     console.log('Your fuel effficency is Good');
// }
// else{
//     console.log('Your fuel efficiency is poor');
// }


//-----------------------------28) Mobile Signal Strength(bars)----------------------------------

// let mySignalBar=Number(prompt('Enter your bar signal'));
// if(mySignalBar<0 || mySignalBar>5){
//     console.log('Invalid value');
// }
// else if(mySignalBar>=4 && mySignalBar<=5){
//     console.log('You have strong signal');
// }
// else if(mySignalBar>=2 && mySignalBar<=3){
//     console.log('You have medium signal');
// }
// else{
//     console.log('You have weak signal');
// }


//--------------------------29) Room size (sqm)--------------------------------------------------------------------------

// let myRoomSize=Number(prompt('Enter your room size'));
// if(myRoomSize<0 || myRoomSize>100){
//     console.log('Invaild value');
// }
// else if(myRoomSize>40){
//     console.log('You have a large room');
// }
// else if(myRoomSize>=20 && myRoomSize<=40){
//     console.log('You have a medium room');
// }
// else{
//     console.log('You have a small room');
// }


//----------------------------------30) Marathon Completion Time(hours)------------------------------------------

// let myTime=Number(prompt('Enter your time in hour'));
// if(myTime<0 || myTime>6){
//     console.log('Invalid time');
// }
// else if(myTime>5){
//     console.log('SLOW');
// }
// else if(myTime>=3 && myTime<=5){
//     console.log('AVERGAE');
// }
// else{
//     console.log('ELITE');
// }


//-----------------------------31) Planet Classification by Size-----------------------------------------------------

// let planetSize=Number(prompt('Enter planet radius in kilometer'));
// if(planetSize<0 || planetSize>10000){
//     console.log('Invalid value');
// }
// else if(planetSize>=7000){
//     console.log('Gas Giant');
// }
// else if(planetSize>=2000 && planetSize<7000){
//     console.log('Terrestrial');
// }
// else{
//     console.log('Dwarf');
// }


//--------------------------------------32) Internet Speed test---------------------------------------------


// let myMbps=Number(prompt('Enter your Internert mbps'));
// if(myMbps<0 || myMbps>150){
//     console.log('Invaild value');
// }
// else if(myMbps>=100){
//     console.log('Your Internet speed is Fast');
// }
// else if(myMbps>=30 &&myMbps<100){
//     console.log('Your Internet speed is Moderate');
// }
// else{
//     console.log('Your Internet speed is Slow ');
// }


//---------------------------33) Online Exam Result------------------------------------------------

// let myPercentage=Number(prompt('Enter your percentage'));
// if(myPercentage<0 || myPercentage>100){
//     console.log('Invalid percentage');
// }
// else if(myPercentage>=80){
//     console.log('You have passed with distinction');
// }
// else if(myPercentage>=50 && myPercentage<80){
//     console.log('You have passed ');
// }
// else{
//     console.log('You have failed');
// }


//-----------------------------34) Laptop Battery Health-----------------------------------------

// let myBattery=Number(prompt('Enter your battery health'));
// if(myBattery<0 || myBattery>100){
//     console.log('Invalid value');
// }
// else if(myBattery>=90){
//     console.log('You have excellent battery health');
// }
// else if(myBattery>=60 && myBattery<90){
//     console.log('You have good battery health');
// }
// else{
//     console.log('You have poor battery health');
// }