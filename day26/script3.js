//let person={
    personName:'ram'
//};

//let anotherperson = person;
//console.log(anotherperson);

//person.personname='CHANGE_NAME'

//console.log(person);
//console.log(anotherperson);//

//pass by value vs pass by reference------
 
// 1) pass by value
//let first =10;
//let second= first;//second=10//

let myNestedobject ={
    address:{
        permanent:'Butwal',
         temporary:'pokhara'
        
    }
};
let myNestedobjectcopy=structuredclone (myNestedobject)
myNestedobjectcopy.address.permanent="kathmandu";

console.log(myNestedobjectcopy);
console.log(myNestedobject);



//wap on your own to demonstrate->pass by value and pass by reference
//finally use structuredclone to one of your program

//todo.....
//create one person object with name ->FIRST NAME ,LAST NAME,ADDRESS-> TEMPORARY AND PARNAMENT ADDRESS,
//COPY PERSON OBJECT TO THREE DIFFERENT VARIABLE 
//CHANGE NAME OF ALL VARIABLES
//MAKE SURE THAT CHANGE IN ONE OBJECT PROPERTY DOESNOT REFLECT TO ANOTHER ONE 
let










//function 





function sub (x,y) {
    console.log(x-y);  
}
sub(9,4)
sub(8,5)

function multi(x, y ) {
    console.log(x*y);
}
