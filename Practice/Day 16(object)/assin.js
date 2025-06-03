// 1. Create an object called person with properties: name, age, and city.
// let person ={
//     name:"mikasa",
//     age:19,
//     city:"japan",
// }

// // 2. Add a new property email to the person object.
// person.email ="mikasa@gmail.com"

// // 3. Change the value of the city property in the person object to "New York".
// person.city ="New york"
// // 4. Delete the age property from the person object.
// delete person.age
// // 5. Create an empty object called book.
// person.book ={};
// // 6. Add title: "The Alchemist" and author: "Paulo Coelho" to the book object.
// person.book.title = "The Alchemist";
// person.book.author = "Paulo Coelho";

// // 7. Access the name property from the person object using dot notation.
// console.log(person.name);
// // 8. Access the email property from the person object using bracket notation.
// console.log(person['email'])
// // 9. Check if the name property exists in the person object using the in operator.
// console.log("name" in person); 


//-------------------------------- Question 1: Create a JavaScript object named student with the following structure----------------//

// let studentData = {
//     student: {
//         Name: 'Eren yeager',
//         Id: 1024, 
//     },

//     address: {
//         street: '',st line
//         city: 'tokyo',
//         zip: 30009,
//     },
    
//     faculty: 'sience and technology',

//     course: {
//         Name: 'Bachelor of Computer Application (BCA)'  
//     },

//     subject: {
//         Name: 'English II',
//         code: 'CAEN153',
//         grade: 'A',
//     },

//     subject2:{
//         Name: 'C Programming',
//         code: 'CACS151',
//         grade: 'B+',
//     },

//     subject3:{
//         Name: 'Financial Accounting',
//         code: 'CAAC152',
//         grade: 'A',
//     },

//     subject4:{
//         Name: 'Mathematics II',
//         code: 'CAMT154',
//         grade: 'A'
//     },

//     subject5:{
//         Name: 'Microprocessor and Computer Architecture',
//         code: 'CACS155',
//         grade: 'B+',
//     },

//     contact: {
//         Email: 'eren123@gamil.com',
//         phone: [981213455, 99102993023],
//     },
// }

// // Student Name and Id //

// console.log('Student Name:', studentData.student.Name);
// console.log('Student Id:', studentData.student.Id);

// // Student Address //

// console.log('Street:', studentData.address.street);
// console.log('City:', studentData.address.city);
// console.log('zip Code:', studentData.address.zip);

// // student facuilty // 

// console.log('Faculty:', studentData.faculty);

// // student course // 

// console.log('Course:', studentData.course.Name)

// // Student subject, subject code, grade  //

// console.log('Course Title:',studentData.subject.Name);
// console.log('Course Code:', studentData.subject.code);

// console.log('Course Title:',studentData.subject2.Name);
// console.log('Course Code:', studentData.subject2.code);

// console.log('Course Title:',studentData.subject3.Name);
// console.log('Course Code:', studentData.subject3.code);

// console.log('Course Title:',studentData.subject4.Name);
// console.log('Course Code:', studentData.subject4.code);

// console.log('Course Title:',studentData.subject5.Name);
// console.log('Course Code:', studentData.subject5.code);

// // Student contact // 

// console.log('Email:', studentData.contact.Email);
// console.log('Phone Number 1 :', studentData.contact.phone[0]);
// console.log('Phone Number 2:', studentData.contact.phone[1]);


// // -------Question 2 :Given the student object you created, how do you access the student’s zip code and the course grade?--------//

// console.log('zip Code:', studentData.address.zip);

// console.log('Grade:', studentData.subject.grade);
// console.log('Grade:', studentData.subject2.grade);
// console.log('Grade:', studentData.subject3.grade);
// console.log('Grade:', studentData.subject4.grade);
// console.log('Grade:', studentData.subject5.grade);


// //-------- Question 3: Add a new nested property department inside the course object with the value "Science"------------//

// studentData.course.department = 'Science';
// console.log('Department:', studentData.course.department);

// //---------- Question 4:Change the student’s email address inside the contact object to "student@example.com"-------------//

// studentData.contact.Email = 'amar789@gmail.com'
// console.log('Updated Email:', studentData.contact.Email);

// //------------ Question 5: Remove the phone property from the contact object-------------------------------//

// delete studentData.contact.phone;
// console.log('Update Contact:', studentData.contact);