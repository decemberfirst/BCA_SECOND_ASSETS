// -------------------LOOP------------------------
// -------FOR LOOP------------
// SYNTAX: for(initialize_count; condition; increment / decerement)

// for (count=1; count<=120; count++);
// console.log('Anisha chhantel');


// for(let count=1; count<=100; count++){
// console.log(Count);
// }

// for(let count=1;count<=100;count++){
//     console.log('count');
// }
// for(let count=100; count>=1;count--){
//     console.log('count');
// }

let A=(prompt('Enter your number'));
let B=(prompt('Enter your number'));
for(let A=1; A<=B; A=A+2 ){
    console.log(A);
}

let a=(prompt('Enter your number'));
let b=(prompt('Enter your number'));
for(let a=2;a<=B;a++){
    if(a%2==1){
    console.log(a);
    }
}
// for(let num=100; num>=1; num--){
//     console.log(num);
// }

// for(let even=0; even<=100; even+=2){
//     console.log(even);
// }

// for(let odd=1; odd<=100; odd+=2){
//     console.log(odd);
// }
// let userNumber1=Number(prompt('Enter your 1st Number'));
// let userNumber2=Number(prompt('Enter your 2nd Number'));
// for(let count=userNumber1; count<=userNumber2; count++){
//     if(count % 2 == 1){
//         console.log(count);
//     }
// }

// for(let table=1; table<=10; table++){
//     console.log(`5 X ${table} = ${5 * table}`);
// }

// for(let table=1; table<=10; table++){
//     console.log(`2 X ${table} = ${2 * table}`);
// }

//Assigment

//odd number

// let number1=Number(prompt('Enter a 1st number'));
// let number2=Number(prompt('Enter a 2nd number'));
// let sum=1;
// for(let count=number1; count<=number2;count++){
//     if(count % 2 ==1){
//         sum+=count;
//         console.log(`sum of odd numbers between ${number1} and ${number2}:${sum}`);
//     }
// }

// let evenNumber1=Number(prompt('Enter a 1st number'));
// let evenNumber2=Number(prompt('Enter a 2nd number'));
// let Sum=0;
// for(let count=evenNumber1; count<=evenNumber2; count++){
//     if(count % 2 ==0){
//         Sum+=count;
//         console.log(`sum of even numbers between ${evenNumber1} and ${evenNumber2}:${Sum}`);
//     }
// }


// ASSIGNMENT
// 1) Electricity Bill Calculation:
// let num=Number(prompt('Enter your bill calculation'));
// for (let i=0; i<num; i++){
//     if (num<=100){
//         console.log('your bill is 0');
//     }
//     else if (num>100 && num<=200){
//         console.log('your bill is 100');
//     }
//     else if (num>200 && num<=300){
//         console.log('your bill is 200');
//     }
//     else if (num>300 && num<=400){
//         console.log('your bill is 300');
//     }
//     else if (num>400 && num<=500){
//         console.log('your bill is 400');
//     }
//     else{
//         console.log('your bill is 500');
//     }
// }

// // 2) internet data usage
// let data=Number(prompt('Enter your internet data usage'));
// for (let i=0; i<data; i++){
//     if (data<50){
//         console.log('normal');
//     }
//     else if (data>50 && data<=100){
//         console.log('warning');
//     }
//     else if (data>100 && data<=150){
//         console.log('over limit');
//     }
    
//     else{
//         console.log('exceeded limit');
//     }
// }

// // 3) season cheaker(month number)
// let month=Number(prompt('enter your month number'));
// for (let i=0; i<month; i++){
//     if (month==1 || month==2 || month==3){
//         console.log('winter');
//     }
//     else if (month==4 || month==5 || month==6){
//         console.log('spring');
//     }
//     else if (month==7 || month==8 || month==9){
//         console.log('summer');
//     }
//     else if (month==10 || month==11 || month==12){
//         console.log('autumn');
//     }
//     else{
//         console.log('invalid month');
//     }
// }

// // 4) bank interest rate
// let bank=Number(prompt('enter your bank interest rate'));
// for (let i=0; i<bank; i++){
//     if (bank<=5){
//         console.log('low interest');
//     }
//     else if (bank>5 && bank<=10){
//         console.log('medium interest');
//     }
//     else if (bank>10 && bank<=15){
//         console.log('high interest');
//     }
//     else{
//         console.log('very high interest');
//     }
// }

//    // 5) movie rating classifier
// let movie=Number(prompt('enter your movie rating'));
// for (let i=0; i<movie; i++){
//     if (movie<=2){
//         console.log('bad');
//     }
//     else if (movie>2 && movie<=4){
//         console.log('average');
//     }
//     else if (movie>4 && movie<=6){
//         console.log('good');
//     }
//     else if (movie>6 && movie<=8){
//         console.log('very good');
//     }
//     else{
//         console.log('excellent');
//     }
// }

// // 6) loan aaproval based on credit score
// let credit=Number(prompt('enter your credit score'));
// for (let i=0; i<credit; i++){
//     if (credit<=600){
//         console.log('loan not approved');
//     }
//     else if (credit>600 && credit<=750){
//         console.log('loan approved with high interest');
//     }
//     else if (credit>750 && credit<=800){
//         console.log('loan approved with medium interest');
//     }
//     else{
//         console.log('loan approved with low interest');
//     }
// }

// // 7) shipping charge based on distance
// let distance=Number(prompt('enter your distance'));
// for (let i=0; i<distance; i++){
//     if (distance<=10){
//         console.log('shipping charge is 5');
//     }
//     else if (distance>10 && distance<=20){
//         console.log('shipping charge is 10');
//     }
//     else if (distance>20 && distance<=30){
//         console.log('shipping charge is 15');
//     }
//     else{
//         console.log('shipping charge is 20');
//     }
// }

// // 8) student performance evaluation
// let marks=Number(prompt('enter your marks'));
// for (let i=0; i<marks; i++){
//     if (marks<=40){
//         console.log('fail');
//     }
//     else if (marks>40 && marks<=60){
//         console.log('pass');
//     }
//     else if (marks>60 && marks<=80){
//         console.log('good');
//     }
//     else{
//         console.log('excellent');
//     }

// }

// // 9) typing speed evaluation
// let speed=Number(prompt('enter your typing speed'));
// for (let i=0; i<speed; i++){
//     if (speed<=20){
//         console.log('slow');
//     }
//     else if (speed>20 && speed<=40){
//         console.log('average');
//     }
//     else if (speed>40 && speed<=60){
//         console.log('fast');
//     }
//     else{
//         console.log('very fast');
//     }
// }

// // 10) language level based on test score
// let test=Number(prompt('enter your test score'));
// for (let i=0; i<test; i++){
//     if (test<=50){
//         console.log('beginner');
//     }
//     else if (test>50 && test<=70){
//         console.log('intermediate');
//     }
//     else if (test>70 && test<=90){
//         console.log('advanced');
//     }
//     else{
//         console.log('expert');
//     }
// }

// // 11) income tax bracket
// // let income=Number(prompt('enter your income'));
// // for (let i=0; i<income; i++){
// //     if (income<=25000){
// //         console.log('no tax');
// //     }
// //     else if (income>25000 && income<=500000){
// //         console.log('5% tax');
// //     }
// //     else if (income>50000 && income<=100000){
// //         console.log('10% tax');
// //     }
// //     else{
// //         console.log('20% tax');
// //     }
// // }

// // 12) water quality index
// let water=Number(prompt('enter water quality index'));
// for (let i=0; i<water; i++){
//     if (water<=50){
//         console.log('good');
//     }
//     else if (water>50 && water<=100){
//         console.log('average');
//     }
//     else if (water>100 && water<=150){
//         console.log('poor');
//     }
//     else{
//         console.log('very poor');
//     }
// }

// // 13) voting eligibility
// let age=Number(prompt('enter your age'));
// for (let i=0; i<age; i++){
//     if (age<18){
//         console.log('not eligible to vote');
//     }
//     else if (age>=18 && age<=25){
//         console.log('eligible to vote');
//     }
//     else if (age>25 && age<=35){
//         console.log('eligible to vote');
//     }
//     else{
//         console.log('eligible to vote');
//     }
// }

// // 14) app rating feedback
// let app=Number(prompt('enter your app rating'));
// for (let i=0; i<app; i++){
//     if (app<=2){
//         console.log('poor');
//     }
//     else if (app>2 && app<=4){
//         console.log('average');
//     }
//     else if (app>4 && app<=6){
//         console.log('good');
//     }
//     else if (app>6 && app<=8){
//         console.log('very good');
//     }
//     else{
//         console.log('excellent');
//     }
// }

// // 15) coffee strength selector
// let coffee=Number(prompt('enter your coffee strength'));
// for (let i=0; i<coffee; i++){
//     if (coffee<=2){
//         console.log('weak');
//     }
//     else if (coffee>2 && coffee<=4){
//         console.log('medium');
//     }
//     else if (coffee>4 && coffee<=6){
//         console.log('strong');
//     }
//     else{
//         console.log('extra strong');
//     }
// }

// // 16) bus fare by age
// let bus=Number(prompt('enter your age'));
// for (let i=0; i<bus; i++){
//     if (bus<=5){
//         console.log('free');
//     }
//     else if (bus>5 && bus<=12){
//         console.log('half fare');
//     }
//     else if (bus>12 && bus<=60){
//         console.log('full fare');
//     }
//     else{
//         console.log('senior citizen fare');
//     }
// }

// // 17) subscription type
// let subscription=Number(prompt('enter your subscription type'));
// for (let i=0; i<subscription; i++){
//     if (subscription==1){
//         console.log('basic');
//     }
//     else if (subscription==2){
//         console.log('standard');
//     }
//     else if (subscription==3){
//         console.log('premium');
//     }
//     else{
//         console.log('invalid subscription type');
//     }
// }

// // 18) game difficulty level
// let game=Number(prompt('enter your game level'));
// for (let i=0; i<game; i++){
//     if (game==1){
//         console.log('easy');
//     }
//     else if (game==2){
//         console.log('medium');
//     }
//     else if (game==3){
//         console.log('hard');
//     }
//     else{
//         console.log('invalid game difficulty level');
//     }
// }

// // 19) blood pressure status
// let bp=Number(prompt('enter your blood pressure'));
// for (let i=0; i<bp; i++){
//     if (bp<120){
//         console.log('normal');
//     }
//     else if (bp>=120 && bp<=139){
//         console.log('elevated');
//     }
//     else if (bp>=140 && bp<=159){
//         console.log('high blood pressure stage 1');
//     }
//     else{
//         console.log('high blood pressure stage 2');
//     }
// }

// // 20) mobile battery level
// let battery=Number(prompt('enter your battery level'));
// for (let i=0; i<battery; i++){
//     if (battery<=20){
//         console.log('low battery');
//     }
//     else if (battery>20 && battery<=50){
//         console.log('medium battery');
//     }
//     else if (battery>50 && battery<=80){
//         console.log('good battery');
//     }
//     else{
//         console.log('full battery');
//     }
// }

// // 21) cpu temperature monitor
// let cpu=Number(prompt('enter your cpu temperature'));
// for (let i=0; i<cpu; i++){
//     if (cpu<=50){
//         console.log('normal');
//     }
//     else if (cpu>50 && cpu<=70){
//         console.log('warning');
//     }
//     else if (cpu>70 && cpu<=90){
//         console.log('overheating');
//     }
//     else{
//         console.log('critical temperature');
//     }
// }

// // 22) body temperature
// let body=Number(prompt('enter your body temperature'));
// for (let i=0; i<body; i++){
//     if (body<=36.5){
//         console.log('normal');
//     }
//     else if (body>36.5 && body<=37.5){
//         console.log('slightly elevated');
//     }
//     else if (body>37.5 && body<=38.5){
//         console.log('fever');
//     }
//     else{
//         console.log('high fever');
//     }
// }

// // 23) credit  card status
// let creditcard=Number(prompt('enter your credit card status'));
// for (let i=0; i<creditcard; i++){
//     if (creditcard==1){
//         console.log('active');
//     }
//     else if (creditcard==2){
//         console.log('inactive');
//     }
//     else if (creditcard==3){
//         console.log('blocked');
//     }
//     else{
//         console.log('invalid credit card status');
//     }
// }

// // 24) online order status code
// let order=Number(prompt('enter your status code'));
// for (let i=0; i<order; i++){
//     if (order==1){
//         console.log('pending');
//     }
//     else if (order==2){
//         console.log('shipped');
//     }
//     else if (order==3){
//         console.log('delivered');
//     }
//     else{
//         console.log('invalid order status code');
//     }
// }

// // 25) driving liscence status by age
// let driving=Number(prompt('enter your age'));
// for (let i=0; i<driving; i++){
//     if (driving<18){
//         console.log('not eligible for driving licence');
//     }
//     else if (driving>=18 && driving<=25){
//         console.log('eligible for learning licence');
//     }
//     else if (driving>25 && driving<=35){
//         console.log('eligible for permanent licence');
//     }
//     else{
//         console.log('eligible for senior citizen licence');
//     }
// }

// // 26) mobile  signal strength
// let signal=Number(prompt('enter your signal strength'));
// for (let i=0; i<signal; i++){
//     if (signal<=20){
//         console.log('weak signal');
//     }
//     else if (signal>20 && signal<=50){
//         console.log('average signal');
//     }
//     else if (signal>50 && signal<=80){
//         console.log('good signal');
//     }
//     else{
//         console.log('excellent signal');
//     }
// }

// // 27) room size(sqm)
// let room=Number(prompt('enter your size'));
// for (let i=0; i<room; i++){
//     if (room<=10){
//         console.log('small room');
//     }
//     else if (room>10 && room<=20){
//         console.log('medium room');
//     }
//     else if (room>20 && room<=30){
//         console.log('large room');
//     }
//     else{
//         console.log('extra large room');
//     }
// }

// // 28) marathon completion
// let marathon=Number(prompt('enter your time'));
// for (let i=0; i<marathon; i++){
//     if (marathon<=2){
//         console.log('excellent');
//     }
//     else if (marathon>2 && marathon<=3){
//         console.log('good');
//     }
//     else if (marathon>3 && marathon<=4){
//         console.log('average');
//     }
//     else{
//         console.log('poor');
//     }
// }

// // 29) weather type by temperature
// let weather=Number(prompt('enter your temperature'));
// for (let i=0; i<weather; i++){
//     if (weather<=0){
//         console.log('snowy');
//     }
//     else if (weather>0 && weather<=15){
//         console.log('cold');
//     }
//     else if (weather>15 && weather<=25){
//         console.log('pleasant');
//     }
//     else{
//         console.log('hot');
//     }
// }

// // 30) File storage alert:
// let storage=(prompt('enter your storage'));
// for (let i=0; i<storage; i++){
//     if(storage<=0){
//     console.log('Normal');
//     }
//     else if(storage<70 && storage>=90){
//         console.log('Warning');
//     }
//     else{
//         console.log('Critical');
//     }
// }

// // 31) 