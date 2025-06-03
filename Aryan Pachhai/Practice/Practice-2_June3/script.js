console.log('JS has been loaded');

//------------PASS BY VALUE--------------------------
//Normal data type; Create a seprate address with content

// let num1=9;
// let num2=num1;

// num1=6;

// console.log(num1);
// console.log(num2);

//----------PASS BY REFERENCE/ADDRESS-----------------
//Specail data type(Array,Object); Takes address as same

// let myObject={
//     name:'Ram',
//     address:'Butwal',
// };
// let myObjectCopy=myObject;

// myObjectCopy.name='Shyam';

// console.log(myObject);
// console.log(myObjectCopy)


//-----------DEEP COPY---------------------
//Works as pass by value

// let myPerson={
//     name:{
//         firstName:'Gita',
//         lastName:'Magar',
//     },
//     phone:{
//         phone1:9813235634,
//         phone2:9826257472,
//     },
// }

// let myPersonCopy=structuredClone(myPerson);
// myPersonCopy.name.firstName='Laxmi';

// console.log(myPerson);
// console.log(myPersonCopy);

//-----------SHALLOW COPY-------------
//Works as pass by refernce/address

// let myInfo={
//     userId:'A7771',
//     name:{
//         firstName:'Sam',
//         lastName:'Thapa',
//     },
//     address:{
//         permanent:'Manigram',
//         temporary:'Gulmi',
//     },
// }

// let myInfoCopy=myInfo;
// myInfoCopy.address.permanent='Kathmandu';

// console.log(myInfo);
// console.log(myInfoCopy);



// let myNestedObject={
//     name:{
//         firstName:'Shyam',
//         lastName:'Rai',
//     },
//     parentName:{
//         fatherName:'Dal Rai',
//         motherName:'Laxmi Rai',
//     },
//     address:{
//         permanent:'Ilam',
//         temporary:'Jhapa',
//     },
// }

// let myNestedObjectCopy1=structuredClone(myNestedObject);
// myNestedObjectCopy1.name.firstName='Doma';
// myNestedObjectCopy1.address.temporary='Kathmandu';

// let myNestedObjectCopy2=structuredClone(myNestedObject);
// myNestedObjectCopy2.name.firstName='Hari';
// myNestedObjectCopy2.name.lastName='Magar';
// myNestedObjectCopy2.address.permanent='Palpa';
// myNestedObjectCopy2.address.temporary='Butwal';
// myNestedObjectCopy2.parentName.fatherName='James Magar';
// myNestedObjectCopy2.parentName.motherName='Sita Magar';

// let myNestedObjectCopy3=structuredClone(myNestedObject);
// myNestedObjectCopy3.name.firstName='Nabin';
// myNestedObjectCopy3.name.lastName='Magar';
// myNestedObjectCopy3.address.permanent='Palpa';
// myNestedObjectCopy3.address.temporary='Pokhara';
// myNestedObjectCopy3.parentName.fatherName='James Magar';
// myNestedObjectCopy3.parentName.motherName='Sita Magar';


// console.log(myNestedObject);
// console.log(myNestedObjectCopy1);
// console.log(myNestedObjectCopy2);
// console.log(myNestedObjectCopy3);


//-------------FUNCTION-------------------
//Resusable block of code to perform special tasks/actions

function add(x,y){
    console.log(x+y);
}
add(2,2);

// function table(x){
//     for(let i=1;i<=10;i++){
//         console.log(`${x} * ${i} = ${x * i}`);
//     }
// }
// table(5);