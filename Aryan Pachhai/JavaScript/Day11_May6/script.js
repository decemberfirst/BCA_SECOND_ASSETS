console.log('Hello');


// IF ELSE IF LADDER


// Grade by marks

// let myMarks=Number(prompt('Enter your marks'));
// if(myMarks>=90 && myMarks<=100){
//     console.log('Your grade is A');
// }
// else if(myMarks>=80 && myMarks<90){
//     console.log('Your grade is B');
// }
// else if(myMarks>=70 && myMarks<80){
//     console.log('Your grade is C')
// }
// else if(myMarks>=60 && myMarks<70){
//     console.log('Your grade is D');
// }
// else if(myMarks>=40 && myMarks<60){
//     console.log('Your grade is E');
// }
// else if(myMarks>100 || myMarks<0){
//     console.log('Give vaild marks');
// }
// else{
//     console.log('Your grade is F');
// }

// // Grade by GPA 

// let myGpa=Number(prompt('Enter your GPA'));
// if(myGpa>=3.6 && myGpa<=4){
//     console.log('Your grade is A+');
// }
// else if(myGpa>=3.2 && myGpa<3.6){
//     console.log('Your grade is A');
// }
// else if(myGpa>=2.8 && myGpa<3.2){
//     console.log('Your grade is B')
// }
// else if(myGpa>=2 && myGpa<2.8){
//     console.log('Your grade is C');
// }
// else if(myGpa>=1.6 && myGpa<2){
//     console.log('your grade is D');
// }
// else if(myGpa>=0.8 && myGpa<1.6){
//     console.log('Your grade is E')
// }
// else if(myGpa>4 || myGpa<0){
//     console.log('Give valid GPA');
// }
// else{
//     console.log('Your grade is F');
// }


// 0-12 child
// 

// let myAge=Number(prompt('Enter your age'));
// if(myAge>0 && myAge<=12){
//     console.log('You are a child');
// }
// else if(myAge>12 && myAge<=19){
//     console.log('You are a teen');
// }
// else if(myAge>19 && myAge<=50){
//     console.log('You are a adult');
// }
// else if(myAge>50 && myAge<=120){
//     console.log('You are old');
// }
// else{
//     console.log('You are dead or not born');
// }


// let mySalary=Number(prompt('Enter your salary'));
// if(mySalary>0 && mySalary<400000){
//     console.log(`You donot have to play tax. Your salary is ${mySalary}`);
// }
// else if(mySalary>=400000 && mySalary<=800000){
//     console.log(`You have to pay 5% tax. Your salary is ${mySalary-mySalary*0.05}`);
// }
// else if(mySalary>800000 && mySalary<=1200000){
//     console.log(`You have to pay 10% tax. Your salary is ${mySalary-mySalary*0.1}`);
// }
// else if (mySalary>1200000 && mySalary<1600000){
//     console.log(`Your have to pay 15% tax. Your salary is ${mySalary-mySalary*0.15}`);
// }
// else{
//     console.log(`You have to pay 20% tax. Your salary is ${mySalary-mySalary*0.2}`);
// }


// let myTime=Number(prompt('Enter time in hour'));
// if (myTime>24 || myTime<0){
//     console.log('Give valid hour');
// }
// else if(myTime>=6 && myTime<12){
//     console.log('Morning');
// }
// else if(myTime>=12 && myTime<17){
//     console.log('Afternoon')
// }
// else if(myTime>=17 && myTime<20){
//     console.log('Evening');
// }
// else{
//     console.log('Night');
// }

// let mySide1=Number(prompt('Enter 1st side'));
// let mySide2=Number(prompt('Enter 2nd side'));
// let mySide3=Number(prompt('Enter 3rd side'));
//  if(mySide1==mySide2 && mySide1==mySide3 && mySide2==mySide3){
//     console.log('Equilateral');
// }
// else if(mySide1==mySide2 || mySide2==mySide3 || mySide1==mySide3){
//     console.log('Isoceles');
// }
// else{
//     console.log('Scalar');
// }

// let myHeight=Number(prompt('Enter your height in meter'));
// let myWeight=Number(prompt('Enter your weight in kg'));
// let result=(myWeight)/(myHeight*myHeight);
// if(result<0 || result>40){
//     console.log('Enter vaild height and weight');
// }
// else if(result>0 && result<16){
//     console.log('Severe Thickness');
// }
// else if(result>=16 && result<=17){
//     console.log('Moderate Thickness');
// }
// else if(result>17 && result<=18.5){
//     console.log('Mild Thickness');
// }
// else if(result>18.5 && result<=25){
//     console.log('Normal');
// }
// else if(result>25 && result<=30){
//     console.log('Overweight');
// }
// else{
//     console.log('Obese');
// }

// let myCelsius=Number(prompt('Enter temperature in celsius'));
// if(myCelsius<=-10){
//     console.log('Very cold');
// }
// else if(myCelsius>-10 && myCelsius<=10){
//     console.log('Cold');
// }
// else if(myCelsius>10 && myCelsius<=20){
//     console.log('Cool');
// }
// else if(myCelsius>20 && myCelsius<=25){
//     console.log('Mild');
// }
// else if(myCelsius>25 && myCelsius<=30){
//     console.log('Warm');
// }
// else {
//     console.log('Hot');
// }

let num1=Number(prompt('Enter a number'));
let num2=Number(prompt('Enter another number'));
let num3=Number(prompt('Enter another number'));
if(num1>num2 && num1>num3){
    console.log(`${num1} is greatest`);
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is greatest`);
}
else if(num1==num2 && num2==num3 && num1==num3){
    console.log('All number are same');
}
else{
    console.log(`${num3} is greatest`);
}