// let animal = {
//     name : 'cat',
// }
// console.log(animal['name']);

// let animal = {
//     name : 'Dog',
//     type : 'Bhusiya',
//     color : 'Brown',
//     isMamal : 'Yes',
//     weight : '16 kg',
//     age : '8 years',
//     hasFur : 'Yes'
// }
// console.log(animal['name']);
// console.log(animal['type']);
// console.log(animal['color']);
// console.log(animal['isMamal']);
// console.log(animal['age']);
// console.log(animal['hasFur']);
// animal['weight'] = '100 kg'
// console.log(animal['weight']);
// delete animal.name;
// console.log(animal['name']);


// let person = {
//     name : 'Ram',
//     dob : 2001,
//     year : 2025,
// }
// person['age'] = person['year'] - person['dob']
// console.log(person['name']);
// console.log(person['dob']);
// console.log(person['age']); 


// let myPersons = {
//     name : 'Ram',
//     from : 'Butwal',
//     email : 'ram12@gmail.com' 
// }
// console.log(Object.values(myPersons)); // values
// console.log(Object.keys(myPersons)); // key
// console.log(Object.entries(myPersons)); // values and key

// let myEntries = Object.entries(myPersons);
// console.log(myEntries)
// for(let i = 0;  i<myEntries.length; i++){
//     let [key, value] = myEntries[i];
//     console.log(`${key} : ${value}`);
// }


// let myObject = {
//     name : {
//         firstName: 'Amar',
//         middleName: 'Bahadur',
//         lastName : 'Thapa',
//     },

//     location: {
//         temporary: 'Manigram',
//         permanent : 'Butwal',
//     },

//     favColor : {
//         color : ['Red', 'Green', 'blue'],
//     },

//     parentName : {
//         fatherName : 'Yan Raj Thapa',
//         motherName : 'Jiv Kumari Thapa',
//     },
// }
// // Name section //

// console.log(myObject.name.firstName);
// console.log(myObject.name.middleName);
// console.log(myObject.name.lastName);

// // location Section // 

// console.log(myObject.location.temporary);
// console.log(myObject.location.permanent);

// // color section //
// console.log(myObject.favColor.color[0]);
// console.log(myObject.favColor.color[1]);
// console.log(myObject.favColor.color[2]);

// // parent Name //
// console.log(myObject.parentName.fatherName);
// console.log(myObject.parentName.motherName);

//-------------------------------- Question 1: Create a JavaScript object named student with the following structure----------------//

let studentData = {
    student: {
        Name: 'Amar Thapa',
        Id: 1004, 
    },

    address: {
        street: 'Manigram',
        city: 'Tilottama',
        zip: 32903,
    },
    
    faculty: 'Humanities and Social Sciences',

    course: {
        Name: 'Bachelor of Computer Application (BCA)'  
    },

    subject: {
        Name: 'English II',
        code: 'CAEN153',
        grade: 'A',
    },

    subject2:{
        Name: 'C Programming',
        code: 'CACS151',
        grade: 'B+',
    },

    subject3:{
        Name: 'Financial Accounting',
        code: 'CAAC152',
        grade: 'A',
    },

    subject4:{
        Name: 'Mathematics II',
        code: 'CAMT154',
        grade: 'A'
    },

    subject5:{
        Name: 'Microprocessor and Computer Architecture',
        code: 'CACS155',
        grade: 'B+',
    },
    
    subject6:{
        Name: 'Computer Fundamentals and Applications',
        code: 'CACFA156',
        grade: 'A',
    }, 

    contact: {
        Email: 'amar123@gamil.com',
        phone: [9894844484, 97811545145],
    },
}

// Student Name and Id //

console.log('Student Name:', studentData.student.Name);
console.log('Student Id:', studentData.student.Id);

// Student Address //

console.log('Street:', studentData.address.street);
console.log('City:', studentData.address.city);
console.log('zip Code:', studentData.address.zip);

// student facuilty // 

console.log('Faculty:', studentData.faculty);

// student course // 

console.log('Course:', studentData.course.Name)

// Student subject, subject code, grade  //

console.log('Course Title:',studentData.subject.Name);
console.log('Course Code:', studentData.subject.code);

console.log('Course Title:',studentData.subject2.Name);
console.log('Course Code:', studentData.subject2.code);

console.log('Course Title:',studentData.subject3.Name);
console.log('Course Code:', studentData.subject3.code);

console.log('Course Title:',studentData.subject4.Name);
console.log('Course Code:', studentData.subject4.code);

console.log('Course Title:',studentData.subject5.Name);
console.log('Course Code:', studentData.subject5.code);

console.log('Course Title:',studentData.subject6.Name);
console.log('Course Code:', studentData.subject6.code);

// Student contact // 

console.log('Email:', studentData.contact.Email);
console.log('Phone Number 1 :', studentData.contact.phone[0]);
console.log('Phone Number 2:', studentData.contact.phone[1]);


// -------Question 2 :Given the student object you created, how do you access the student’s zip code and the course grade?--------//

console.log('zip Code:', studentData.address.zip);

console.log('Grade:', studentData.subject.grade);
console.log('Grade:', studentData.subject2.grade);
console.log('Grade:', studentData.subject3.grade);
console.log('Grade:', studentData.subject4.grade);
console.log('Grade:', studentData.subject5.grade);
console.log('Grade:', studentData.subject6.grade);

//-------- Question 3: Add a new nested property department inside the course object with the value "Science"------------//

studentData.course.department = 'Science';
console.log('Department:', studentData.course.department);

//---------- Question 4:Change the student’s email address inside the contact object to "student@example.com"-------------//

studentData.contact.Email = 'amar789@gmail.com'
console.log('Updated Email:', studentData.contact.Email);

//------------ Question 5: Remove the phone property from the contact object-------------------------------//

delete studentData.contact.phone;
console.log('Update Contact:', studentData.contact);


//