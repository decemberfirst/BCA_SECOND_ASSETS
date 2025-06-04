// console.log('shyam sold "if there is one thing I hate its people who smoke"'); //`backtig downside ESC button

// console.log(`
//     JONNY JONNY YES PAPA
//     EATING SUGAR NO PAPA
//     TELLING LIE NO PAPA
//     OPEN YOUR MOUTH HAHAHA`);
// console.log("my name is" + firstname) // concatenation\

// let yourFirstName = prompt('Enter Your First Name');
// let yourLastName = prompt('Enter Your Last Name');
// let yourEmail = prompt('Enter Your Email Address');
// console.log(`My name is ${yourFirstName} ${yourLastName}, My Email address ${yourEmail}`); //STRING INTERPOLATION // 

//BIM CALCULATOR (BODY MASS INDEX)
// let yourWeight = prompt('Enter Your Weight (Kg)');
// let yourHeight = prompt('Enter Your Height (meter)');
// let yourBim = (yourWeight/yourHeight**2);
// console.log(yourBim);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let chinaCurrency = 18.72;
// let convertedCurrency = Number(nepaliCurrency/chinaCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let bhutanCurrency = 1.60;
// let convertedCurrency = Number(nepaliCurrency/bhutanCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let bangaldeshCurrency = 1.12;
// let convertedCurrency = Number(nepaliCurrency/bangaldeshCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let bharatCurrency = 1.60;
// let convertedCurrency = Number(nepaliCurrency/bharatCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let pakistanCurrency = 0.49;
// let convertedCurrency = Number(nepaliCurrency/pakistanCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let mayanmarCurrency = 0.065;
// let convertedCurrency = Number(nepaliCurrency/mayanmarCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let sirlankaCurrency = 0.46;
// let convertedCurrency = Number(nepaliCurrency/sirlankaCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let japanCurrency = 0.95;
// let convertedCurrency = Number(nepaliCurrency/japanCurrency);
// console.log(convertedCurrency);

// let nepaliCurrency = prompt('Enter Nepali Currency (Rs)');
// let koreaCurrency = 0.094;
// let convertedCurrency = Number(nepaliCurrency/koreaCurrency);
// console.log(convertedCurrency);

//currrency converter
// let money=Number(prompt("Enter the amount in nepali Rs"));
//  let china = (money/0.053);
//  let bhutan = (money/0.63);
//  let myanmar = (money/15.36);
//  let shrilanka = (money/0.6);
//  let japan = (money/1.05);
//  let korea = (money/10.59);
//  let pakistan = (money/2.6);
//  let bangladesh = (money/0.63);
//  let bharat = (money/0.6);
//  console.log(`According to todays market exchange rate,${bharat} (INR),${china}( yuan),${bhutan} (BTN),${myanmar} (MMK),${shrilanka} (LKR),${japan} (YEN),${korea} (Won),${pakistan} (PKR),${bangladesh} (BDT)`);

let nepaliCurrency = Number(prompt('Enter Nepali Currency(Rs)'));
let australia = ((nepaliCurrency/87.17).toFixed(2));
let canada = ((nepaliCurrency/98.13).toFixed(2));
let russia = ((nepaliCurrency/1.65).toFixed(2));
let newzealand = ((nepaliCurrency/81.11).toFixed(2));
let mexico = ((nepaliCurrency/6.96).toFixed(2));
let kuwaiti = ((nepaliCurrency/443.60).toFixed(2));
let hongkong = ((nepaliCurrency/17.53).toFixed(2));
let uae= ((nepaliCurrency/37.03).toFixed(2));
let turkey = ((nepaliCurrency/3.54).toFixed(2));
let thailand =((nepaliCurrency/4.07).toFixed(2));
let swiss = ((nepaliCurrency/164.75).toFixed(2));
let southAfrica = ((nepaliCurrency/7.29).toFixed(2));
let romanian = ((nepaliCurrency/31.11).toFixed(2));
let netherlands = ((nepaliCurrency/75.67).toFixed(2));
let moroccan = ((nepaliCurrency/14.66).toFixed(2));
let malaysian = ((nepaliCurrency/31.17).toFixed(2));
let taiwan = ((nepaliCurrency/4.19).toFixed(2));
let Oman = ((nepaliCurrency/353.24).toFixed(2));
let Qatar = ((nepaliCurrency/37.30).toFixed(2));
let philippine = ((nepaliCurrency/2.41).toFixed(2));
let nigerian = ((nepaliCurrency/0.085).toFixed(2));
console.log(`According to today's market exchhange rate:
    AUD ${australia}
    CAD ${canada}
    RUB ${russia}
    NZD ${newzealand}
    MXN ${mexico}
    KWD ${kuwaiti}
    HKD ${hongkong}
    AED ${uae}
    TRY ${turkey}
    THB ${thailand}
    CHF ${swiss}
    ZAR ${southAfrica}
    RON ${romanian}
    ANG ${netherlands}
    MAD ${moroccan}
    MYR ${malaysian}
    TWD ${taiwan}
    OMR ${Oman}
    QAR ${Qatar}
    PHP ${philippine}
    NGN ${nigerian}`);