//---------------Create a function to print name--------
// use parameters or take input from parameter
  
function parameter(name){
    console.log('my name is:'+ name)
}
parameter('Agraj');

// create afunction to calculate area of rectangle
// use parameter

function calculateArea(length,width){
    let area=length*width;
    console.log(`The area of rectangle is:${area}`);
}
calculateArea(20,40);

// create a function to print welcome message
// output should be Hello_name,welcome to our platform.
// its good to know you are from_address_
// see you next_dayname_

function welcomemessage(name,address,dayName){
    console.log(`Hello ${name}!welcome to our platform`);
    console.log(`Its good to know you are from ${address}`);
    console.log(`see you next ${dayName}`);
}
welcomemessage('Agraj','Nayamill','Saturday');