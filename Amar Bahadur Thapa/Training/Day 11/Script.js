//-------------------------------------IF ELSE IF LADDER-----------------------------------------------------//let
// let GPA = Number(prompt('Enter the GPA'));
// if (GPA>=3.7 && GPA<=4.0){
//     console.log('A+ Grade');
// } else if(GPA<=3.7 && GPA>=3.6){
//     console.log('A grade');
// } else if (GPA<=3.6 && GPA>=3.4){
//     console.log('B+ Grade');
// } else if (GPA<=3.4 && GPA>=3.2){
//     console.log('B Grade');
// } else if (GPA<=3.2 && GPA>=2.8){
//     console.log('C+ Grade');
// } else if(GPA<=2.8 && GPA>=2.6){
//     console.log('C Grade');
// } else (GPA<=2.6 && GPA>=2.3){
//     console.log('C+ Grade');
// }   


// let userAge = Number(prompt('Enter the Age'));

// if (userAge>=1 && userAge<=10){
//     console.log('You are infant');
// } else if(userAge>=11 && userAge<=20){
//     console.log('You are young');
// } else if (userAge>=21 && userAge<=40){
//     console.log('You are adult');
// } else if (userAge>=40 && userAge<=60){
//     console.log('You are old');
// } else if (userAge>=60 && userAge<=100){
//     console.log('You are too old');
// } else{
//     console.log('You are dead');
// }

// let salary = Number(prompt('Enter the Salary'));
// if(salary>1 && salary<=4){
//     console.log('You have to pay 10% tax');
// } else if (salary>4 && salary<=6){
//     console.log('You have to pay 15% tax');
// } else if (salary>6 && salary<=8){
//     console.log('You have to pay 20% tax');
// } else{
//     console.log('You dont have to pay tax');
// }

// let time = Number(prompt('Enter the time'));
// if (time>1 && time<=12){
//     console.log('Morning');
// } else if (time>12 && time<=15){
//     console.log('Afternoon');
// } else if (time>15 && time<=24){
//     console.log('Evening');
// } else {
//     console.log('Nothing');
// }

// let angle1 = Number(prompt('Enter the Side'));
// let angle2 = Number(prompt('Enter the Side'));
// let angle3 = Number(prompt('Enter the Side'));

// if (angle1==angle2 && angle2==angle3){
//     alert('Equilateral Triangle');
// } else if (angle1==angle2 || angle2==angle3 || angle3==angle1){
//     alert('Isoceles Triangle');
// } else {
//     alert('Scalar Triangle');
// }

// let weight = Number(prompt('Enter the Weight'));
// let height = Number(prompt('Enter the Height'));
// let bmi = weight/height**2;

// if (bmi>1 && bmi<=18.5){
//     console.log('UnderWeight');
//     alert('UnderWeight');
// } else if (bmi>18.5 && bmi<=25){
//     console.log('Healthy');
//     alert('Healthy');
// } else if (bmi>25 && bmi<=30){
//     console.log('overweight');
//     alert('Overweight');
// } else if (bmi>30 && bmi<=34){
//     console.log('Obesity');
//     alert('Obesity');
// } else {
//     console.log('Class 1 Obesity');
//     alert('Class 1 Obesity');
// }

let a = Number(prompt('Enter the Number'));
let b = Number(prompt('Enter the Number'));
let c = Number(prompt('Enter the Number'));

if(a>b && a>c){
    alert('A is the greatest Number');
} else if(b>a && b>c) {
    alert('B is the greatest Number');
} else {
    alert('C is the greater Number');
}