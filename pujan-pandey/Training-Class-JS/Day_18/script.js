//Objects


//SYNTAX
// let variableName={
//     key:value;
//     key:value;
//     key:value;
//     key:value;
//     key:value;
// }

// console.log(student['key']);//Syntax 1
// console.log(student.key);//Syntax 2





// let student={
//     Sname:'Hira',
//     number:9814667788,
//     age:21,
//     profession:'mason',
// };

// console.log(student['Sname']);//Syntax 1
// console.log(student.Sname);//Syntax 2


// let stdRecord={
//     'first name':'Raman',
//     'last name':'Chettri',

// };
// console.log(stdRecord["first name"], stdRecord["last name"]);
// //This syntax is used whenever there is space in key


//changing the value

// let myObj={
//     nameOfStd:'Sham',
//     age:21,
//     profession:'Manager',

// }
// console.log(myObj.nameOfStd="Ram")
// console.log(myObj)
//delete myObj.name;
// console.log(myObj);




//Ps Qn

// let animal={
//     nameOfAnimal:'Zebra',
//     color:'Black & White',
//     type:'Wild',
//     isMammal:'Yes',
//     weight:20,
//     'has fur':"Yes",
// }
// console.log(animal)
// animal.weight=100;
// console.log('Name:', animal.nameOfAnimal, 'Color:', animal.color,'Type:', animal.type, "isMammal:", animal.isMammal, 'weight:',animal.weight )

//Adding key 
// let person={
//     personName:'Shyam',
//     dob:2004,
// }
// let dateOfBirth=2025-person.dob;
// person.age=dateOfBirth; //if the key exists it is update, if the key doesnot exist it is insert 
// console.log(person);



//---------Object Destructuring---------


let {nameOfS:Sname,age}={//alias=another name
    nameOfS:'Rahul',
    age:20,
}
console.log(Sname);




