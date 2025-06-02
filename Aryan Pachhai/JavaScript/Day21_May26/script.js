


//-------------------------SORTING-----------------------

// let array=[5,2,4,1,3];
// let sorted=array.sort(); //IMMUTABLE


//--------------------INCULDE(CHECK SPECIFIC VALUE)---------------------

// let myNum=4;
// let a=[4,3,2,1,5,6];
// if(a.includes(myNum)){
//     console.log(`${myNum} exist in the array`);    
// }
// else{
//     console.log(`${myNum} does not exist in the array`);    
// }

`${myValue} exists in array`

//-----------------OBJECT(SIMILAR TO ARRAY BUT SPECIFIES VALUE)------------------------

//----------------Simple Syntax(Dot notation)------------------

// let student={
//     name:"Aryan Pachhai",
//     age:18,
//     course:"BCA",
//     address:"Kalikanagar",
//     phone:9867391293,
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);
// console.log(student.address);
// console.log(student.phone);

//---------------------Complex Syntax(Bracket notation)------------------

// let input={
//     "first name":"Amar",
//     "student age":20,
// }
// console.log(input["first name"]);
// console.log(input["student age"]);


// let object={
//     "name":"Amar",
//     "age":20,
// }
// console.log(object["name"]); //(Doesnot shows in array)
// console.log(object["age"]);

// object.name="Aryan"; //Adds content and works as 'var'(Shows in Array)
// console.log(object);

// delete object.name; //Deletes content(Shows in Array)
// console.log(object);

//--------------------- CREATE AN ANIMAL OBJECT----------------------------------------
             /*INPUT ANIMAL NAME,TYPE,COLOR,isMAMMAL,WEIGHT,HAS FUR*/

let ani={
    name:"Wolf",
    type:"Carnivores",
    color:"Grey",
    isMammal:true,
    weight:80,
    "has fur":true,
};
console.log(ani.name);
console.log(ani.type);
console.log(ani.color);
console.log(ani.isMammal);
console.log(ani.weight);
console.log(ani["has fur"]);

ani.weight=100;
delete ani.color;
console.log(ani);



                       /* CREATE PERSON OBJECT
                          INPUT` NAME,DOY
                          USE DOY TO CALCULATE THE AGE
                          ADD CALCULATED AGE TO THE OBJECT*/


let person={
    name:"Aryan",
    DOY:2007,
}
let age=2025-person.DOY;
person.age=age;
console.log(person);



//-------------------OBJECT DESTRUCTING------------------

// let{name,address,age:myage}={
//     name:"Aryan",
//     address:"Kalikanagar",
//     age:18,
// }
// console.log(name);
// console.log(address);
// console.log(myage);