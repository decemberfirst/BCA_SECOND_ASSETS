// //1.  Even or Odd
// let Number=20;
// console.log(`${Number%2==0?"Even":"Odd"}`);

// //2.  Greater of two Numbers
// let firstNum=2;
// let secondNum=24;
// console.log(`${firstNum>secondNum?"First Number is Greater":"Second Number is Greater"}`)

// //3.  Smallest of two numbers
// let firstNumber=20;
// let secondNumer=12;
// console.log(`${firstNumber<secondNumer?"First Number is Smaller":"Second Number is Smaller"}`)

// //4.  Positive, Negative, zero
//  let a=-1;
//  console.log(`Is ${a<0?"Negative":a>0?" Positive":"Zero"}`)


//  //5.  Is divisible by 5
//  let b=25;
//  console.log(`Is ${b%5==0?"Divisible":"not divisible"} by 5`)


//  //6. "Pass" or "Fail"
//  let passMarks=40;
//  console.log(`Is ${passMarks>+40?"Passed":"Failed"}`)


//  //7. Assign Grade

// let grade=95;
// console.log(`Your grade is ${grade>95?"A":"B"}`)


// //8. Is a person eligible to vote

// let age=42;
// console.log(`${age>=18 && age<40?"Yes, you can vote":"You cannot vote"}`)


// //9. Is a leap year or not
// let year=2024;
// console.log(`Is a ${year%4==0?"Leap Year":"not a leap year"}`)


// //10. Check if a string is empty or not
// let word="";
// console.log(`${word.length==0?"String IS Empty":"String Is Not Empty"}`)


// //11. Eligible or Not Eligible

// let subject1=40;
// let subject2=60;
// let subject3=40;
// let subject4=90;
// let subject5=50;
// console.log(`${subject1>=40 && subject2>=40 && subject3>=40 && subject4>=40 && subject5>=40?"Eligible For scholarship":"Is not eligible for scholarship"}`)


// //12. Username and password correct or not

// let userName="ramchandra";
// let password="khana";
// let userInput=prompt("Enter your Username")
// let input=prompt("Enter your Password")
// console.log(`${userName==userInput && password==input?"Correct":"Username or Password is not correct"}`)

// .Number



// //13. Assign Day or Night

// let day=24;
// console.log(`${day>12?"Night":"Day"}`)



// //14. Pass or Fail on average marks

// let sub1=20;
// let sub2=80;
// let sub3=50;
// let sub4=40;
// let sub5=40;
// let averageMarks=sub1+sub2+sub3+sub4+sub5;
// console.log(`${averageMarks>=200?"Passed according to his/her average marks":"Failed according to his/her average marks"}`)













//Practice Qns 

//1. Electricity Bill Calculation
// let unitOfElectricity=Number(prompt("Enter unit of electricity consumed"));
// if(unitOfElectricity<100){
//     console.log("Your total bill is Rs.", 1.5*unitOfElectricity)
// }else if(unitOfElectricity>100 && unitOfElectricity<300){
// console.log("Your total bill is Rs.", 2*unitOfElectricity)
// }else if(unitOfElectricity==300){
// console.log("Your total is Rs.", 3*unitOfElectricity)
// }else{
//     console.log("Enter a valid unit consumed")
// }


//2. Internet data Usage Data Alert
// let dataUsage=Number(prompt("Enter data used"));
// if(dataUsage<50 && dataUsage>0){
//     console.log("Normal Usage");
// }else if(dataUsage>=50 && dataUsage<90){
//     console.log("Warning!")
// }else if(dataUsage>=90 && dataUsage<=100){
//     console.log("OverLimit!")
// }else{
//     console.log("Invalid data usage")
// }


//3. Season Check
// let season=Number(prompt("Enter a month number"));
// if(season==1||season==2||season==12){
//     console.log("Is a winter")
// }else if(season==3||season==4||season==5){
//     console.log("Spring")
// }else if(season==6||season==7||season==8){
//     console.log("Is Summer")
// }else if(season==9||season==10||season==11){
//     console.log("Autumn")
// }else{
//     console.log("Invalid")
// }


//4. Bank Interest Rate
// let amount=100000;
// let bankInterestRate=Number(prompt("Enter your year to invest"));
// if(bankInterestRate<=1 && bankInterestRate>0){
//     console.log(`Your total amount is ${amount + (amount*5/100)}`)
// }else if(bankInterestRate>1 && bankInterestRate<3){
//     console.log(`Your total amount is ${amount + (amount*6.5/100)}`)
// }else if(bankInterestRate==3){
//     console.log(`Your total amount is ${amount + (amount*7.5/100)}`)
// }else{
//         console.log("Invalid")
//      }


//5. Rating

// let rating=Number(prompt("Rate the movie out of 10"));
// if(rating==8||rating==9||rating==10){
//     console.log("Excellent");
// }else if (rating>=5 && rating<=7.9){
// console.log("Average")
// }else if(rating<5&&rating>0){
//     console.log("Poor")
// }else{
//     console.log("Invalid")
// }



//6. Loan Approval based on Credit
// let creditScore=Number(prompt("Enter total credit score"));
// if(creditScore>=750 && creditScore<1000){
//     console.log("Approved")
// }else if(creditScore>=600 && creditScore<750){
//     console.log("Review")
// }else if(creditScore<600){
//     console.log("Rejected")
// }else{
//     console.log("Invalid score")
// }



//7. Shipping Charges Based on Distance 

// let distance=Number(prompt("Enter your distance"))
// if(distance<=10 && distance>0){
// console.log("Free")
// }else if(distance>=10 && distance<50){
//     console.log("Shipping cost Rs. 50 added")
// }else if(distance==50){
//     console.log("Shipping Cost Rs. 100 added")
// }else{
//     console.log("Invalid Input")
// }

//8. Student Performance Evaluation

// let percentage=Number(prompt("Enter your percentage"));
// if(percentage>=90 && percentage<=100){
//     console.log("Excellent");

// }else if(percentage>=70 && percentage<=90){
//     console.log("Good")
// }else if(percentage>=50 && percentage<=69){
//     console.log("Average")
// }else if(percentage<50){
// console.log("Need Improvement")
// }
// else{
//     console.log("Invalid")
// }



// 9. Typing Speed Evaluation

// let speed=Number(prompt("Enter your Speed"));
// if(speed>=60 && speed<=100){
//     console.log("Fast")
// }else if(speed>=40 && speed<=60){
// console.log("Average")
// }else if (speed<40 && speed>0){
//     console.log("Slow")
// }else{
//     console.log("Error")
// }


//10. Language Level Based On test Score

// let language=Number(prompt("Enter your test score"));
// if(language>=85 && language<=100){
//     console.log("Fast")
// }else if(language>=60 && language<=84){
// console.log("Average")
// }else if (language<60 && language>0){
//     console.log("Beginner")
// }else{
//     console.log("Error")

// }

// 11. Income Tax

// let income =Number(prompt("Enter your Income"));
// if(income>=0 && income<=2.5){
//     console.log("No Tax")
// }else if(income>=2.5 && income<5){
// console.log("5%")
// }else if(income>=5 && income<10){
// console.log("20%")
// }else if(income==10){
//     console.log("30%")
// }else{
//     console.log("Error")
// }


// 12. Water Quality Index

// let airQuality=Number(prompt("Enter air Quality"));
// if(airQuality<=50 && airQuality>0){
// console.log("Good")
// }else if(airQuality>=51 && airQuality<=100){
//     console.log("Moderate")
// }
// else if(airQuality>=101 && airQuality<200){
// console.log("Unhealthy")
// }
// else if(airQuality==200){
//     console.log("Dangerous")
// }else{
//     console.log("Error")
// }



// 13. Voting Eligibility

// let age=Number(prompt("Enter your age"));
// if(age<=18 && age>0){
//     console.log("Not eligible")
// }else if(age>=18 && age<60){
//     console.log("Eligible")

// }else if(age==60){
//     console.log("Senior Voter")

// }else{
//     console.log("Error")
// }


// 14. App rating FeedBack

// let ratingApp=Number(prompt("Rate the app"));
// if(ratingApp>=4.5 && ratingApp<=5){
// console.log("Excellent")
// }else if(ratingApp>=3.4 && ratingApp<=4.4){
//     console.log("Good")
// }
// else if(ratingApp>=1 && ratingApp<=2.9){
//     console.log("Poor")
// }

// else{
//     console.log("Error")
// }

// 15. Coffee Strength Selector

// let strength = Number(prompt("Enter a strength"));
// if (strength > 0 && strength <= 5) {
//     console.log("Light")
// }
// else if (strength >= 4 && strength <= 8) {
//     console.log("Medium")
// } else if (strength >= 9 && strength <= 10) {
//     console.log("Strong")
// }
// else {
//     console.log("Invalid")
// }


// 16. Bus Fare by Age

// let yourAge=Number(prompt("Enter your age"));
// if(yourAge<=5 && yourAge>0){
//     console.log("Free0")
// }else if(yourAge>5 && yourAge<18){
//     console.log("Half")
// }else if(yourAge==18 && yourAge<19){
//     console.log("Full")
// }else{
//     console.log("Error")
// }

// 17. Game Difficulty Setting

// let difficulty=Number(prompt("Enter your level of game"));
// if(difficulty>0 && difficulty<=20){
//     console.log("Easy")

// }else if(difficulty>20 && difficulty<=40){
//     console.log('Medium')
// }
// else if(difficulty>40 && difficulty<=100){
//     console.log("Hard")
// }
// else{
//     console.log('Invalid')
// }

// 18. Subscription Type

// let type=Number(prompt("Enter your type of subscription"));
// if(type==1){
// console.log("Basic")
// }else if(type==2){
// console.log("Standard")
// }else if(type==3){
// console.log("Premium")
// }else{
// console.log("Invalid")
// }



// 19. Mobile Battery Level

// let mobile=Number(prompt("Enter your battery percentage"));
// if(mobile<20 && mobile>0){
//     console.log("Low");
// }else if(mobile>=20 && mobile<80){
// console.log("Normal")
// }else if(mobile>=80 && mobile<=100){
// console.log("High")
// }else{
//     console.log("Invalid")
// }



// 20. CPU Temperature Monitor

// let temperature=Number(prompt("Enter monitor's temperature"));
// if(temperature<50 && temperature>0){
// console.log('Low')
// }else if(temperature>=50 && temperature<75){
// console.log("Warm")
// }else if(temperature==75){
//     console.log("Danger")
// }else{
//     console.log("Error")
// }


// 21. BBody Temperature

// let temp=Number(prompt("Enter body's temperature"));
// if(temp<36 && temp>0){
// console.log('Low')
// }else if(temp>=36 && temp<37.5){
// console.log("Normal")
// }else if(temp==37.5){
//     console.log("Fever")
// }else{
//     console.log("Error")
// }


// 22. Online Order status code

// let card=Number(prompt("Enter your card no."));
// if(card==0){
// console.log("Ordered")
// }else if(card==1){
// console.log("Packed")
// }else if(card==2){
// console.log("Shipped")
// }else if(card==3){
// console.log("Delivered")
// }
// else{
//     console.log("Error")
// }



// 23. Fuel Efficiency

// let fuel=Number(prompt("Enter your fuel status"));
// if(fuel==20){
// console.log("Excellent")
// }else if(fuel>=15 && fuel<=20){
// console.log("Good")
// }else if(fuel<15 && fuel<0){
// console.log("Poor")
// }else{
// console.log("Invalid")
// }


// 24. Computer BOot Time


// let bootTime=Number(prompt("Enter your boot time"));
// if(bootTime<10 && bootTime>0){
//     console.log("Fast")

// }else if(bootTime>10 && bootTime<30){
//     console.log("Average")
// }else if(bootTime==30){
// console.log("Slow")
// }else{
//     console.log("Invalid")
// }






//----------------Loop----------------

// let fname="Aman";

// if(fname="Aman"){   
// console.log(`${fname}`)
// }
// let A=Number(prompt("Enter a number"));
// let B=Number(prompt("Enter a number"));
// for(let count=A; count<=B; count++){
//     if(count % 2==1){
// console.log(count)
//     }
// }
// let sum=0;
// let firstNum=Number(prompt("Enter your first Number"));
// let secondNum=Number(prompt("Enter your second Number"));
// for(let count=firstNum;count<secondNum;count++){
//     if(count%2==1){
//         sum=sum + count;
//         console.log("The sum of even numbers is:", sum)
//     }
// }

// let sumOFOdd=0;
// let firstNum1=Number(prompt("Enter your first Number"));
// let secondNum2=Number(prompt("Enter your second Number"));
// for(let count=firstNum1;count<secondNum2;count++){
//     if(count%2==1){
//         sumOFOdd=sumOFOdd + count;
//         console.log("The sum of odd numbers is:", sumOFOdd)
//     }
// }
//1-12 months

// let user=Number(prompt("Enter 1-12 for month"));
// switch(user){
//     case 1:
//         console.log("January");
//         break;
//           case 2:
//         console.log("February");
//         break;
//           case 3:
//         console.log("March");
//         break;
//           case 4:
//         console.log("April");
//         break;
//           case 5:
//         console.log("May");
//         break;

//           case 6:
//         console.log("June");
//         break;
//           case 7:
//         console.log("July");
//         break;
//           case 8:
//         console.log("August");
//         break;

//           case 9:
//         console.log("September");
//         break;
//           case 10:
//         console.log("October");
//         break;
//           case 11:
//         console.log("November");
//         break;
//           case 12:
//         console.log("December");
//         break;
//         default:
//             console.log("Invalid input")


// }

//Vowel or consonant
// let user=(prompt("Enter a letter"));
// switch(user){
//     case "a":
//         console.log("Vowel");
//         break;
//           case "e":
//         console.log("Vowel");
//         break;
//           case "i":
//         console.log("Vowel");
//         break;
//           case "o":
//         console.log("Vowel");
//         break;
//           case "u":
//         console.log("Vowel");
//         break;
//         default:
//             console.log("Consonant")


// }




//A-F to grades god excellent


// let user = (prompt("Enter a A-F"));
// switch (user) {
//     case "a":
//         console.log("Excellent");
//         break;
//     case "b":
//         console.log("Good");
//         break;
//     case "c":
//         console.log("Average");
//         break;
//     case "d":
//         console.log("Acceptable");
//         break;
//     case "e":
//         console.log("Need more practice");
//         break;
//     case "f":
//         console.log("Not sufficient");
//         break;
//     default:
//         console.log("Invalid")


// }

//Even or odd


// let user = Number(prompt("Enter a number"));
// let check=user%2;
// switch (check) {
//     case 1:
//         console.log("odd");
//         break;
//     case 0:
//         console.log("even");
//         break;
//     default:
//         console.log("Invalid");
// }

//
// let user =(prompt("Enter a RGY"));
// switch (user) {
//     case "R"||"r":
//         console.log("Red");
//         break;
//     case "G"||"g":
//         console.log("Green");
//         break;
//          case "Y"||"y":
//         console.log("Yellow");
//         break;
//     default:
//         console.log("Invalid");
// }



//Number to Words(0-9)
// let user =Number(prompt("Enter a 0-9"));
// switch (user) {
//     case 0:
//         console.log("Zero");
//         break;
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     case 4:
//         console.log("Four");
//     case 5:
//         console.log("Five");
//         break;
//     case 6:
//         console.log("Six");
//         break;
//     case 7:
//         console.log("Seven");
//         break;
//     case 8:
//         console.log("Eight");
//         break;
//     case 9:
//         console.log("Nine");
//         break;
//     default:
//         console.log("invalid")

// }


//

// let user =Number(prompt("Enter a 1-7"));
// switch (user) {
//     case 1:
//         console.log("Weekday");
//         break;
//     case 2:
//         console.log("Weekday");
//         break;
//     case 3:
//         console.log("Weekday");
//         break;
//     case 4:
//         console.log("Weekday");
//     case 5:
//         console.log("Weekday");
//         break;
//     case 6:
//         console.log("Weekday");
//         break;
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("invalid")

// } 

//Language
// let user =Number(prompt("Enter a 1-7"));
// switch (user) {
//     case 0:
//         console.log("English");
//         break;
//     case 1:
//         console.log("Nepali");
//         break;
//     case 2:
//         console.log("French");
//         break;
//     case 3:
//         console.log("Finish");
//         break;
//     case 4:
//         console.log("Spanish");
//         break;
//     case 5:
//         console.log("Nepali");
//         break;
//     case 6:
//         console.log("Urdu");
//         break;
//     case 7:
//         console.log("Bangali");
//         break;
//     default:
//         console.log("invalid")

// } 




// currency conveter
// let user2=Number(prompt("Enter amount in Nepali Rupees"));
// let user =Number(prompt("Enter a Number 0-3"));

// switch (user) {
//     case 0:
//         console.log(`Indian Rs. ${user2 * 1.6 }`);
//         break;
//     case 1:
//         console.log(`American USD ${user2 * 0.0073}`);
//         break;
//     case 2:
//         console.log(`Swiss ${user2 * 0.0061 }`);
//         break;
//     case 3:
//         console.log(`Srilankan Rs. ${user2 * 2.19 }`);
//         break;
//     default:
//         console.log("invalid")

// } 


//Addition,subtraction,multiplication,division,modulus
// let user2 = Number(prompt("Enter a first Number"));
// let user1 = Number(prompt("Enter a Second Number"));
// let user = Number(prompt("Enter a Number 0-4"));

// switch (user) {
//     case 0:
//         console.log(`Addition: ${user2 + user1}`);
//         break;
//     case 1:
//         console.log(`Subtraction: ${user2 - user1}`);
//         break;
//     case 2:
//         console.log(`Multiplication: ${user2 * user1}`);
//         break;
//     case 3:
//         console.log(`Division: ${user2 / user1}`);
//         break;
//     case 4:
//         console.log(`Modulus: ${user2 % user1}`);
//         break;
//     default:
//         console.log("invalid")

// } 



//age 
// let user1 = Number(prompt("Enter a Second Number"));
// let user=Number(prompt("Enter a number between 0-3"))

// switch (user) {
//     case (user1<=10):
//         console.log(` ${ user1} is child`);
//         break;
//     case (user1<=20):
//         console.log(`${user1} is Teen `);
//         break;
//   case (user1<=40):
//         console.log(` ${ user1} is Adult`);
//         break;
//     case (user1>=40):
//         console.log(`Division: ${user1}`);
//         break;
//     default:
//         console.log("invalid")

// } 




//-------------------Array------------




//reverse of a an array

// let myArray=[1,2,3,4,4,5,6,7,7];
// let newArray=[];
// for(let i=0;i<myArray.length;i++){
//     newArray.unshift(myArray[i]);
// }
// console.log(newArray);


//greatest number in an array

// let arr=[12,33,44,5,5,6];
// let greatest=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>greatest){
//    greatest=arr[i];
//     }
// }console.log(`${greatest} is the greatest number of an array`)



// //smallest and array in an array
// let arr=[12,33,44,5,3,6];
// let smallest=arr[0];
// let greatest=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<smallest){
//      smallest=arr[i];
//     }
//     if(arr[i]>greatest){
// greatest=arr[i];
//     }
// }console.log(`${smallest} is the smallest number of an array`)
// console.log(`${greatest} is the greatest number of an array`)




//Prime number

// let userInput=prompt("Enter a number");
// let isPrime=true;
// for(let divide=2;divide<=userInput-1;divide++){
//   if(userInput%divide==0){
//     isPrime=false;
//     break;
//   }
// }
// if(isPrime){
//     console.log(userInput, "is a prime number")
// }else{
//     console.log(userInput, 'is not a prime number')
// }



//Prime Number
// let userInput=13;
// let isPrime=true;
// for(let divide=2;divide<=userInput-1;divide++){
//     if(userInput%divide==0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
// console.log(`${userInput} is a prime number`)
// }else{
//     console.log(`${userInput} is not a prime number`)
// }




//Print all the elements of an array

// let myArray=["Ram","Shyam","Hari","Gita","Sita"];
// for(i=0;i<myArray.length;i++){
//     console.log(myArray[i]);
// }


//Length of an array with out build-in Function

//1.
// let array=[0,1,4,5,6,7,8,9,2,3,4,5];
// let i=0;
// while(array[i]!=undefined){
//     i++;
// }
// console.log(i);


//2:

// let myArray1 =[1, 3, 5, 7, 9];
// let length=0;
// let i=0;
// let element = myArray1[i];
// while (element != undefined) {
//     length++;
//     i++;
//     element =myArray1[i];
// } console.log(length);


//Add element in an Array

// let sName=['raman','aman','shayam','khem'];
// sName.unshift('ram');
// sName.push('jiwa');
// sName.push('bududev');
// sName.push('badri');
// sName.push('kedar');
// sName.push('saimon');
// sName.push('aman');
// sName.unshift('naman');
// sName.unshift('jison');
// sName.unshift('jacks');
// sName.unshift('wills');
// sName.unshift('markram');
// sName.unshift('flintof');
// console.log(sName);



//Delete  elements from an Array
// let sName=['raman','aman','shayam','khem','rama','shyamlal','gyanprasad'];
// sName.shift();
// sName.pop();
// sName.shift();  
// sName.pop();                            
// console.log(sName); 



//Sum of all the elements of an array

// let sum=[5,2,4,6];
// let add=0;
// for(let i=0;i<sum.length;i++){
//     add+=sum[i];
// }console.log(add);


//Maximum and minimum element in an array

// let array=[10,2,4,56,77,88,99,19];
// let maximum=0;
// let minimum=array[0];
// for(let i=0;i<array.length;i++){
//     if(array[i]>maximum){
//         maximum=array[i];
//     }else if(array[i]<minimum){
// minimum=array[i];
//     }
// }
// console.log(maximum,"is the maximum Number");
// console.log(minimum, "is the minimum Number");


//Reverse the elements of an array

// let array=['one','two','three','four','five','six','seven'];
// let reversedArray=[];
// for(let i=0;i<array.length;i++){
//     reversedArray.unshift(i);
// }
// console.log(reversedArray)



//Count the positive and negative elements of an array

// let arr = [1, 3, 0, 4, 5, -3, -5, -44, 55, 66, 7, 8, 9];
// let positive = 0;
// let negative = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positive++;
//     }else if(arr[i]<0){
//         negative++;
//     }
// }
// console.log('The total number of positive elements is', positive);
// console.log('The total number of negative elements is', negative);



//Count even and odd elements of an array

// let arr = [1, 3, 0, 4, 5, -3, -5, -44, 55, 66, 7, 8, 9];
// let even = 0;
// let odd= 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//         even++;
//     }else if(arr[i]%2!=0){
//         odd++;
//     }
// }
// console.log('The total number of odd elements is', odd);
// console.log('The total number of even elements is', even);




//Second Largest element in an array  //Not solved

// let array=[10,2,4,56,77,88,99,19];
// let maximum=0;
// for(let i=0;i<array.length;i++){
//     if(array[i]>maximum){
//         maximum=array[i];
//     }
// }
// console.log(maximum,"is the maximum Number");



//Copying the elements to another array
// let sdtName=['Swastik','Pankaj','Hiramani','Shyamlal','Badri'];
// let newArray=[];
// for(let i=0; i<sdtName.length;i++){
//     newArray.push(sdtName[i]);
// }console.log(newArray);



//Check if an array consist an specific element  
// let myArray=['a','e','i','o','u','a','b'];
// let userInput=prompt('Enter a letter')
// for(let i=0;i<myArray.length;i++){
// if(userInput==myArray[i]){
//     console.log('Element is present in the array at index', i);
//     break;
// }else{
//     console.log(i,'The element you entered is not available in the array');

// }
// }


//includes

// let a=[1,2,3,45,6,7];
// if(a.includes(45)){
//     console.log("Is in the array")
// }else{
//     console.log( 'Is not available in the array')
// }





// // object creation
// let myObject={
//     name:'Aman',
//     age:21,
//     city:'Galyang',
// }
// console.log('Name:', myObject.name)
// console.log('Age:', myObject.age)
// console.log('City:' ,myObject.city)
// let add=myObject.email='aman.rana21@gmail.com';//added age key
// console.log(myObject)
// console.log('Email:' ,myObject.email)
// let change=myObject.city='New York';// changed value of a key
// console.log(myObject);
// let delt=delete myObject.age;// deleted a key
// console.log(myObject);



// //Book

// let book={
//     title:'The Alchemist',
//     author:'Paulo Coelho',

// }
// console.log('title' in book);

//Object
// let Student = {
//     name: 'Aman',
//     id: 21,
//     address: {
//         street:'Kathmandu',
//         zip: 9080,
//         city: 'Bara',
//     },
//     faculty: 'Management',
//     course:{
// courseName:'Account',
//     } ,
//     subjects: {
//         subjectName1: 'Account',
//         subjectCode1: '23232',
//         subjectName2: 'Maths',
//         subjectCode2: '20222',
//         subjectName3: 'Computer',
//         subjectCode3: '03030',

//     },
//     contact: {
//         email: 'amanbahadurthapa21@gmail.com',
//         phone1: 9823982398,
//         phone2: 9848234944,
//     }

// }
// console.log(Student.address.zip);
// console.log(Student.course);
// let add=Student.course.department='science';
// console.log(Student);
// let updateEmail=(Student.contact.email='student@example.com');
// let removePhn1=(delete Student.contact.phone1);
// let removePhn2=(delete Student.contact.phone2);
// console.log(Student)


