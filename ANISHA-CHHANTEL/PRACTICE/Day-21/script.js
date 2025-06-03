// 
// let myPerson ={
//     name: 'anisha',
//     from: 'manigram',
//     email :'anisha0@gmail.com',
//     phone: 9751146368,
// };
// console.log(myPerson['name']);
// console.log(myPerson['from']);
// console.log(myPerson['email']);
// console.log(myPerson['phone']);
// console.log(myPerson);

// console.log(Object.values(myPerson));      //print values only
// console.log(Object.keys(myPerson));       // print keys only
// console.log(Object.entries(myPerson));   // print both keys and values in array


// let myEntries= Object.entries(myPerson);     // OBJECT(O) must be in capital
// for(let i=0; i<myEntries.length; i++){
//     let [key, value]=myEntries[i];
//     console.log(`${key} : ${value}`);
// }

// let person={
//     name:'hari',
//     location:'butwal',
//     color:'blue',
// };
// let person2={
//     name:{
//         firstName:'hari',
//         middleName:'bahadur',
//         lastName:'thapa',
//     },
//     location:{
//         permanent:'butwal',
//         temporary:'manigram',
//     },
//     color:{
//         favcolor:'blue',
//         leastcolor:'black',
//         hatecolor:'orange',
//     },
//     parential_info:{
//         motherName:'sita kumari thapa',
//         fatherName:'ram bahadur thapa',
//     }
// };
// console.log(person2.name.firstName);
// console.log(person2.name.middleName);
// console.log(person2.name.lastName);


// console.log(person2.location.permanent);
// console.log(person2.location.temporary);

// console.log(person2.color.favcolor);
// console.log(person2.color.leastcolor);
// console.log(person2.color.hatecolor);

// console.log(person2.parential_info.motherName);
// console.log(person2.parential_info.fatherName);


//---------------- Assignment (02/13)----------
// 1)Create a JavaScript object named student with the following structure:
// * name (string)
// * id (number)
// * address (object): street, city, zip
// * Faculty 
// * course :courseName
// Subjects(object):subjectName,subjectCode(min6)
// * contact (object): email, phone1,phone2


let studentObject={
    name:'rita',
    id:2006,
    address:{
        street:'123 street',
        city:'new york',
        zip:'7890'
},
faculty:"engineering",
course:{
    courseName:'computer science'
},
subject:{
    subjectName:'computer',
    subjectCode:CA1025,

    subjectName1:'english',
    subjectCode1:'cs2042',

    subjectName2:'nepali',
    subjectCode2:'CS8023',
},
contact:{
    email:'ritathapa0@gmail.com',
    phone1:9812647820,
    phone2: 9763452042,
}
};
console.log(studentObject.name);
console.log(studentObject.id);

console.log(studentObject.address.street);
console.log(studentObject.address.city);
console.log(studentObject.address.zip);

console.log(studentObject.faculty);

console.log(studentObject.course.courseName);

console.log(studentObject.subject.subjectName);
console.log(studentObject.subject.subjectCode);

console.log(studentObject.contact.email);
console.log(studentObject.contact.phone1);
console.log(studentObject.contact.phone2);

// 2)Given the student object you created, 
// how do you access the student’s zip code and the course grade?

let courseGrade=studentObject.course.courseName;
console.log(courseGrade);

// 3)Add a new nested property department inside 
// the course object with the value "Science".
studentObject.course.department='engineering';
console.log(studentObject.course.department); 

// 4)Change the student’s email address
//  inside the contact object to "student@example.com".
studentObject.contact.email="student@example.com";
console.log(studentObject.contact.email);

// 5)Remove the phone property from the contact object.

delete studentObject.contact.phone1;
delete studentObject.contact.phone2;
console.log(studentObject.contact);
