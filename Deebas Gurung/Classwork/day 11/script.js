//.............. IF ELSE IF LADDER ...............................
//  let grade=Number(prompt('enter the gpa'));
//  if(grade>=3.7 && grade<=4.0 ){
//     alert('you got A' );
//  }else if(grade<3.7 && grade>=3.2){
//     alert('you got B');
// }else if(grade<3.2 && grade>=2.8){
//     alert('you got C');
// }else if(grade<2.8 && grade>=2.4){
//     alert('you got D');
// }else if(grade<2.4 && grade>=2.0){
//     alert('you got E')
// }else {alert('you failed');}

//determine according to your age
// let income=Number(prompt('enter the income'));
// if(income>=1 && income<=10 ){
//    alert('you are infant' );
// }else if(income>=11 && income<=20){
//    alert('you are young');
// }else if(income>=21 && income<=40){
//    alert('you are adult');
// }else if(income>=41 && income<=80){
//     alert('you are old');
//  }else if(income>=81 && income<=100){
//     alert('you are too old');
//  }else {
//     alert('you were never borned or already in heaven');
//  }

//calaculate the tax to be paid
// let income=Number(prompt('enter the income'));
// if(income>100000 && income<=400000 ){
//    alert('you have to pay 5% tax' );
// }else if(income>400000 && income<=600000){
//    alert('you have to pay 10% tax');
// }else if(income>600000 && income<=100000){
//    alert('you have to pay 15% tax');
// }else if(income>100000 && income<=10000000000000000){
//     alert('you have to pay 20% tax');
//  }else {
//     alert('you donot have to pay task');
//  }

//find what time is rightnow
// let time=Number(prompt('enter the time'));
// if(time>1 && time<=12){
//       alert('its morning time' );
// }else if(time>12 && time<=15){
//     alert('its afternoon ');
// }else if(time>15 && time<=19){
//     alert('its evening')
// }else {alert('its night time');}

// find whether the triangle is equilateral,isoceles and scalar
// let a=Number(prompt('enter the length'));
// let b=Number(prompt('enter the length'));
// let c=Number(prompt('enter the length'));
// if(a==b && a==c){
//     alert('its a equilateral triangle');
// }else if(a==b||b==c||c==a){
//     alert('its a isoceles triangle');
// }else{
//     alert('its a scalar traingle');}

//find the bmi
// let weight=Number(prompt('enter the weight'));
// let height=Number(prompt('enter the height'));
// let bmi=weight/height**2;
// if (bmi>=1 && bmi<=18.5){
//     alert('underweight');
// }else if(bmi>18.5 && bmi<=25){
//     alert('healthy weight');
// }else if(bmi>25 && bmi<=30){
//     alert('overweight');
// }else if(bmi>30 && bmi<=34){
//     alert('obesity');
// }else{
//     alert('class 1 obesity');
// }

// find the greatest between three numbers
// let a=Number(prompt('enter the number'));
// let b=Number(prompt('enter the number'));
// let c=Number(prompt('enter the number'));
// if(a>b && a>c){
//     alert('enter a is greatest');
// }else if(b>a && b>c){
//     alert('enter b is greatest');
// }else {
//     alert('enter c is greatest');
// }



// Electricity Bill Calculation:
// let currentunit=Number(prompt('enter the  last unit consumed'));
// let previousunit=Number(prompt('enter the present unit consumed'));
// let unit=(currentunit-previousunit);
// if(unit<100){
//     alert('you have to pay Rs1.5 per unit');
// }else if(unit>=100 && unit<=300){
//     alert('you have to pay Rs 2 per unit');
// }else{
//     alert('you have to pay Rs 3 per unit');
// }

// Internet Data Usage Alert:
// let Usage = Number(prompt('enter the percentage of data used'));
// if(Usage<50){
//     alert('normal usage');
// } else if(Usage>=50 && Usage<=90){
//     alert('Warning');
// }else{
//     alert('Over limit!');
// }

//Season Checker (month number):
// let month=Number(prompt('enter the no of month'));
// if(month==12==1==2){
//     alert('Winter');
// }else if(month>=3 && month<=5){
//     alert('spring');
// }else if(month>=6 && month<=8){
//     alert('summer');
// }else {
//     alert('autmn');
// }

//Bank Interest Rate:
// let year=Number(prompt('enter the no of year'));
// if(year<1){
//     alert('you have to pay 5% tax ');
// }else if(year>=1 && year<=3){
//     alert('you have to pay 6.5% tax ')
// }else{
//     alert('you have to pay 7.5% tax ')
// }

//Movie Rating Classifier (out of 10):
// let rate=Number(prompt('enter the rate given to the movie'));
// if(rate>=8 && rate<=10){
//     alert('excellent');
// }else if(rate>=5 && rate<=7.9){
//     alert('average');
// }else{
//     alert('poor');
// }

//Loan Approval Based on Credit Score:
// let Credit=Number(prompt('enter the credit score'));
// if(Credit>=750){
//     alert('approved');
// }else if(Credit>=600 && Credit<=750){
//     alert('review');
// }else {
//     alert('rejected');
// }

//Shipping Charges Based on Distance:
// let Distance=Number(prompt('enter the distance'));
// if(Distance<10){
//     alert('free');
// }else if(Distance>=10 && Distance<=50){
//     alert('Rs 50 is charged');
// }else{
//     alert('Rs 100 is charged');
// }

//8. Student Performance Evaluation:
// let percentage=Number(prompt('enter the perctange'));
// if(percentage>=90){
//     alert('excellent');
// }else if(percentage>=70 && percentage<=90){
//     alert('good');
// }else if(percentage>=50 && percentage<=69){
//     alert('average');
// }else{
//     alert('needs improvement');}

//Typing Speed Evaluation (WPM):
// let WPM=Number(prompt('enter the no of Word '));
// if(WPM>=60){
//     alert('fast');
// }else if(WPM>=40 && WPM<=60){
//     alert('average');
// }else{
//     alert('needs improvement');
// }

//Language Level Based on Test Score
// let test=Number(prompt('enter the score'));
// if(test>=85){
//     alert('advanced');
// }else if(test>=60 && test<=80){
//     alert('intermediate');
// }else{
//     alert('beginner');
// }

//Income tax bracelet
// let amount=Number(prompt('enter the amount'));
// if(amount<2.5){
//     alert('No tax');
// }else if(amount>=2.5 && amount<=5){
//     alert('5% tax');
// }else if(amount>5 && amount<=10){
//     alert('20% tax');
// }else{
//     alert('30% tax');
// }

//Water Quality Index:
// let quality=Number(prompt('enter the number'));
// if(quality>=0 && quality<=50){
//     alert('good');
// }else if(quality>=51 && quality<=100){
//     alert('moderate');
// }else if(quality>=101 && quality<=200){
//     alert('unhealthy');
// }else{
//     alert('dangerous');
// }

// Voting Eligibility:
// let age=Number(prompt('enter the age'));
// if(age<=18){
//     alert('not eligible');
// }else if(age>18 && age<=60){
//     alert('eligible');
// }else{
//     alert('senior vote');
// }

//App Rating Feedback:
// let rate=Number(prompt('enter the rate'));
// if(rate>=4.5 && rate<=5){
//     alert('excellent');
// }else if(rate>=3 && rate<=4.4){
//     alert('good');
// }else{
//     alert('poor')
// }

//Coffee Strength Selector
// let strength=Number(prompt('enter the type'));
// if(strength==1){
//     alert('light');
// }else if(strength==2){
//     alert('medium');
// }else {
//     alert('poor');
// }

// Bus Fare by Age:
// let age=Number(prompt('enter the age'));
// if(age<=5){
//     alert('free');
// }else if(age>5 && age<18){
//     alert('half');
// }else{
//     alert('full');
// }

//. Subscription Type:
// let type=Number(prompt('enter the number'));
// if(type==1){
//     alert('basic')
// }else if(type==2){
//     alert('standard')
// }else if(type==3){
//     alert('premium')
// }else{
//     alert('invalid option')
// }

//Game Difficulty Setting:
// let Difficultylevel=Number(prompt('enter the level'));
// if(Difficultylevel==1){
//     alert('easy');
// }else if(Difficultylevel==2){
//     alert('standard');
// }else if(Difficultylevel==3){
//     alert('hard');
// }else{
//     alert('unknown');
// }

//Blood Pressure Status:
// let pressure1=Number(prompt('enter the measured blood pressure'));
// let pressure2=Number(prompt('enter the pressure'));
// if (pressure1<80 || pressure2<120){
//     alert('normal');
// }else if(pressure1>=80 && pressure1<=89||pressure2>=120 && pressure2<=139){
//     alert('elevated');
// }else{
//     alert('high');
// }

//Mobile Battery Level
// let Battery=Number(prompt('enter the battery level '));
// if(Battery<20){
//     alert('low');
// }else if(Battery>=20 && Battery<=80){
//     alert('normal');
// }else{
//     alert('high');
// }

//. CPU Temperature Monitor:
// let Temperature=Number(prompt('enter the temperature in celcious'));
// if(Temperature<50){
//     alert('safe');
// }else if(Temperature>=50 && Temperature<=80){
//     alert('warm');
// }else {
//    alert('danger');
// }

//Body Temperature:
// let temperature=Number(prompt('enter the temperature in celcious'));
// if(temperature<36){
//     alert('low');
// }else if(temperature<=36 && temperature>=37.5){
//     alert('noramal');
// }else{
//     alert('fever');
// }

// Credit Card Status
// let a=prompt('enter the condition');
// if(a='bill paid'){
// alert('active');
// }else if( a='payment due'){
//     alert('warning');
// }else{
//     alert('blocked');
// }

//Online Order Status Code:
// let orderstatus=Number(prompt('enter the no of orders'));
// if(orderstatus==0){
//     alert('ordered');
// }else if(orderstatus==1){
//     alert('packed');
// }else if(orderstatus==2){
//     alert('shipped');
// }else if(orderstatus==3){
//     alert('delivered');
// }else{
//     alert('invalid status');
// }

//Software Version Compatibility:
//  let version=Number(prompt('enter the software version'));
//  if(version<2.0){
//     alert('outdated');
//  }else if(version>=2.0 && version<=3.0){
//     alert('compatible');
//  }else{
//     alert('beta figured required');
//  }



