// let myPoem = `JONNY JONNY YES PAPA 
// EATING SUGAR YES PAPA
// ELLING LIE NO PAPA 
// OPEN YOUR MOUTH HAHA`;

// console.log(myPoem);
// let firstname = "Mohit";
// let lastname = "sapkota";
// let DOB = 2006;
// console.log ('My name is ' + firstname + ' ' + lastname + ' My DOB is '+ DOB);
// console.log (` My name is ${firstName} ${lastname}. My DOB is ${DOB}`);

// let firstname = prompt("Enter your first name");
// let secondname = prompt("Enter your second name");
// let email = prompt("Enter your Email");
// console.log (`My name is ${firstname} ${lastname}. My DOB is ${DOB}`);
// console.log("Hello world")


// let weight = prompt("enter your wieght");
// let height = prompt("enter your height (FEET)");
// let hMeter = 0.3048*height;
// let actualHeight= (hMeter * hMeter)
// let BMI= weight /actualHeight ;
// //  console.log (`Your BMI is ${BMI.toFixed(2)}`) ; to fix last two digit after .
//  console.log (`Your BMI is ${BMI}`) ;

// let nepalicurrency = prompt ('Enter your currency');
// let  convertedmoney = (nepalicurrency*0.00714286);
// console.log("your nepali converted money is ", convertedmoney);


// let nepalimoney = Number(prompt("Enter your money amount"));
// let othercount = prompt("enter your country name");
// let othermoney = Number(nepalimoney*othercount);
// let india =(nepalimoney*1.60);
// let usd= (nepalimoney*140);
// let pakistan = (nepalimoney*2.03);
// let bhutan = (nepalimoney*0.625);
// let srilanka = (nepalimoney*2.12);
// let korea = (nepalimoney*10.47);
// let japan = (nepalimoney*1.07);
// let china = (nepalimoney* 0.0525);
// let convertedmoney = (nepalimoney/othermoney);
// console.log("Your converted money is " + convertedmoney);

// let nepalimoney = prompt("enter Money amount");
// if (country==="india");{
//     rate = nepalimoney*1.6;
// }
// else if (country==="usd"); {
//     rate = nepalimoney*140;
// }

let nepalimoney = Number(prompt("Enter your money amount in Nepali Rupees:"));
let country = prompt("Enter the country you want to convert to (india, usd, pakistan, bhutan, srilanka, korea, japan, china):").toLowerCase();

let rate;

if (country === "india") {
    rate = 0.625; // 1 NPR = 0.625 INR (Example, real rate may vary)
} else if (country === "usd") {
    rate = 0.0071; // 1 NPR = 0.0071 USD
} else if (country === "pakistan") {
    rate = 2.03; 
} else if (country === "bhutan") {
    rate = 0.625;
} else if (country === "srilanka") {
    rate = 2.12;
} else if (country === "korea") {
    rate = 10.47;
} else if (country === "japan") {
    rate = 1.07;
} else if (country === "china") {
    rate = 0.0525;
}
if (rate !== undefined) {
    let convertedMoney = nepalimoney * rate;
    console.log(`Your converted money is: ${convertedMoney} in ${country.toUpperCase()}`);
}
