let Word = "Shyam said ";
let Sentence = '"if there is one thing i hate its people who smoke!"';

console.log(Word + Sentence);

console.log(
"jonny jonny yes papa\n",
"Eating Sugar no papa\n",
"telling lie no papa\n",
"open your mouth haha!!!\n"
); 

//backtick commonly used for multiline strings
console.log(
`Jonny jonny yes papa
Eating sugar no papa
telling lie no papa
open your mouth hahaha!!!`
);

let firstname = prompt('Enter your name');
let lastname = prompt('Enter your lastname');
let DOB =  prompt('Enter your DOB');
let Mail =  prompt('Enter your Gmail');
let Feedback = alert("Thanks for the data");

console.log('My name is ' + firstname + ' ' + lastname + ' My DOB is ' + DOB);

console.log(`My name is ${firstname} ${lastname}, My DOB is ${DOB}, My gmail is ${Mail} `); //string interpolation


//To find BMI 
let Height = Number(prompt("Enter your Height"));
let Weight = Number(prompt("Enter Your Weight"));
let BMI = Weight/(Height*Height);

console.log("Your BMI is",  BMI);

//To find exchange rate of differnet countries
let nepaliCurr = Number(prompt("Enter Your Nepali currency"));

console.log("The currency in USD is", (nepaliCurr/136));
console.log("The currency in CHINA is",  (nepaliCurr/18));
console.log("The currency in INDIA is",  (nepaliCurr/1.6));
console.log("The currency in Bhutan is",  (nepaliCurr/1.6));
console.log("The currency in Japan is",  (nepaliCurr/0.95));
console.log("The currency in Korea is",  (nepaliCurr/10.59));
console.log("The currency in Srilanka is",  (nepaliCurr/0.46));
console.log("The currency in Mayanmar is", (nepaliCurr/0.06));    
console.log("The currency in Pakistan is", (nepaliCurr/2.06));   

//Assignment
console.log("The currency in UAE is",  (nepaliCurr / 37.02).toFixed(2));
console.log("The currency in Saudi Arabia is",  (nepaliCurr / 36.25).toFixed(2));
console.log("The currency in South Africa is", (nepaliCurr / 7.44).toFixed(2));
console.log("The currency in Egypt is",  (nepaliCurr / 4.40).toFixed(2));
console.log("The currency in Nigeria is",  (nepaliCurr / 0.17).toFixed(2));
console.log("The currency in Kenya is",  (nepaliCurr / 0.87).toFixed(2));
console.log("The currency in UK is",  (nepaliCurr / 171.44).toFixed(2));
console.log("The currency in Germany is",  (nepaliCurr / 146.92).toFixed(2));
console.log("The currency in France is",  (nepaliCurr / 146.92).toFixed(2));
console.log("The currency in Italy is",  (nepaliCurr / 146.92).toFixed(2));
console.log("The currency in Spain is",  (nepaliCurr / 146.92).toFixed(2));
console.log("The currency in Canada is",  (nepaliCurr / 99.12).toFixed(2));
console.log("The currency in Mexico is",  (nepaliCurr / 7.66).toFixed(2));
console.log("The currency in Brazil is",  (nepaliCurr / 26.64).toFixed(2));
console.log("The currency in Argentina is",  (nepaliCurr / 0.15).toFixed(2));
console.log("The currency in Australia is",  (nepaliCurr / 90.07).toFixed(2));
console.log("The currency in Russia is",  (nepaliCurr / 1.45).toFixed(2));
console.log("The currency in Turkey is",  (nepaliCurr / 4.16).toFixed(2));
console.log("The currency in Indonesia is",   (nepaliCurr / 0.0086).toFixed(2));