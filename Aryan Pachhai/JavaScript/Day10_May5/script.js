console.log('JS has been loaded');

// Operator Precedence And Assosiativity

console.log( 2 * 5 /5); //Operator Precedence And Assosiativity table

let myVar=2;
myVar=myVar + 1 +myVar++;

console.log(2 << 3 || 5 + 2 - (true - false));

// Conditional Statement

/**
 * 1) if else
 * 2) for loop
 * 3) while loop
 * 4) do while loop ()
 */

// Find smallest among two number from user
// let myValue=Number(prompt('Enter a number'));
// let my2ndValue=Number(prompt('Enter another number'));
// if(myValue>my2ndValue){
//    console.log(`${my2ndValue} is the smallest`);
//    alert(`${my2ndValue} is the smallest`);
// }
// else{
//    console.log(`${myValue} is the smallest`);
//    alert(`${myValue} is the smallest`);
// }

// Find leap year
// let myYear=Number(prompt('Enter year'));
// if(myYear%4==0){
//     console.log(`${myYear} is leap year`);
// }
// else{
//     console.log(`${myYear} is not a leap year`);
// }



// let my1stPrice=Number(prompt('Enter 1st item amount'));
// let my2ndPrice=Number(prompt('Enter 2nd item amount'));
// let my3rdPrice=Number(prompt('Enter 3rd item amount'));
// let my4thPrice=Number(prompt('Enter 4th item amount'));
// let my5thPrice=Number(prompt('Enter 5th item amount'));
// let total=my1stPrice+my2ndPrice+my3rdPrice+my4thPrice+my5thPrice;
// if(total>1000){
//     console.log(`You are eligible for 5% discount. Your amount will be ${total-total*0.5}`);
//     alert('You are eligible for 5% discount');
// }
// else{
//     console.log('You are not eligible for discount');
//     alert('You are not eligible for discount');
// }

// let myChar=prompt('Enter a character');
// const my1stVowel='a';
// const my2ndVowel='e';
// const my3rdVowel='i';
// const my4thVowel='o';
// const my5thVowel='u';
// const my6thVowel='A';
// const my7thVowel='E';
// const my8thVowel='I';
// const my9thVowel='O';
// const my10thVowel='U';
// if(myChar==my1stVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my2ndVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');    
// }
// else if(myChar==my3rdVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my4thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my5thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my6thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my7thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my8thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my9thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else if(myChar==my10thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else{
//     console.log('The character is consonant');
//     alert('The character is consonant');
// }

// if(myChar==my1stVowel || myChar==my2ndVowel || myChar==my3rdVowel || myChar==my4thVowel || myChar==my5thVowel || myChar==my6thVowel || myChar==my7thVowel || myChar==my8thVowel || myChar==my9thVowel || myChar==my10thVowel){
//     console.log('The character is vowel');
//     alert('The character is vowel');
// }
// else{
//     console.log('The character is consonant');
//     alert('The character is consonant');
// }


// Weekend or not 

// let myWeekend=prompt('Enter day in small letter');
// if(myWeekend=='friday'||myWeekend=='saturday'){
//     console.log('The day is a weekend');
//     alert('The day is a weekend');
// }
// else{
//     console.log('The day isnot a weekend');
//     alert('The day isnot a weekend');
// }

// Day or night time 

// let myTime=Number(prompt('Enter time in hour'));

// if(myTime && (myTime>=0 && myTime<12)){
//     console.log('It is day time');
//     alert('It is day time');
// }
// else{
//     console.log('It is night time');
//     alert('It is night time');
// }

// Special charaacter or not
// let myValue=prompt('Enter special character');
// if(myValue=='!' || myValue=='@' ||myValue=='#'||myValue=='$'||myValue=='_'||myValue=='~'){
//     console.log('Special character');
// }
// else{
//     console.log('Not special character');
// }


// BMI Calculator

let myHeight=Number(prompt('Enter your height in meter'));
let myWeight=Number(prompt('Enter your weight in kg'));
let result=(myWeight)/(myHeight*myHeight);
if(result<16){
    console.log('Severe Thickness');
}
else if(result>=16 && result<=17){
    console.log('Moderate Thickness');
}
else if(result>17 && result<=18.5){
    console.log('Mild Thickness');
}
else if(result>18.5 && result<=25){
    console.log('Normal');
}
else if(result>25 && result<=30){
    console.log('Overweight');
}
else{
    console.log('Obese');
}
