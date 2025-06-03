//........................Objects.................................................
// let person={
//    name:'Deebas gurung',
//    rollno:'10',
//    religion:'buddhism',
//    height:'5 ft 6 inch',
// }


//.....ACCESSING OBJECT.................
//......TWO  SYNTAX................

//.......BRACKET NOTATION........... 
//console.log(['name']);

//........DOT  NOTATION..........
//console.log(person.name);



// let animal={
//     name:'Gaurave',
//     typeof:'laudasur',
//     color:'white',
//     isMamal:false,
//     weight:15,
//     'HAS FUR':true,
// }
// console.log(animal['name']);
// console.log(animal['typeof']);
// console.log(animal['color']);
// console.log(animal['isMamal']);
// console.log(animal['weight']);
// console.log(animal['HAS FUR']);

// animal.weight=100;
// console.log(animal['weight']);
// delete animal.color;
// console.log(animal['color']);



// let currentdate=2025;
// let person={
//     name:'sujan',
//     dob:2005,
// }
// let age =currentdate-person.dob;
// console.log(age);
// person.age=age;
// console.log(person)



// let person={
//    name:'Deebas gurung',
//    rollno:'10',
//    religion:'buddhism',
//    height:'5 ft 6 inch',
// }
// console.log(person['name']);
// console.log(person['rollno']);
// console.log(person['religion']);
// console.log(person['height']);

// console.log(Object.values(person));
// console.log(Object.keys(person));

// let myentries=Object.entries(person);
// console.log(myentries);


// for(let index=0;index<myentries.length;index++){
//     let[key,values]=myentries[index];
//     console.log(`${key}:${values}`);
// }


// let person={
//     name:{
// firstname:'prem',
// middlename:'bahadur',
// lastname:'gurung',
//     },
//     location:{
//         permanent:'punampath',
//         temporary:'bombay',
//     },
//     color:{
//         color1:'black',
//         color2:'white',
//         color3:'blue',
//     },
//     'parential_info property':{
//         mothername:'Santa kumari Gurung',
//         fathername:'Dammar Bahadur Gurung',
//     }
// }
// console.log(person.name['firstname']);
// console.log(person.name['middlename']);
// console.log(person.name['lastname']);
// console.log(person.location['permanent']);
// console.log(person.location['temporary']);
// console.log(person.color['color1']);
// console.log(person.color['color2']);
// console.log(person.color['color3']);
// console.log(person.['parential_info property'].mothername);
// console.log(person['parential_info property'].fathername);


//..........ASSIGNMENT...........................
// let student={
//     name:'Deebas Gurung',
//     id:9029,
//     address:{
//         street:'2nd street',
//         city:'Bhairahawa',
//         zip:32901,
//     },
//     Faculty:'Humanities and Social science',
//     course:{name:'Bachelor of computer application ',
//           grade:3.14,
//     },
//     subject:{
//         subjectname1:'Mathematics II',
//         subjectcode1:'CAMT154',
//         subjectname2:'English II',
//         subjectcode2:'CAEN15',
//         subjectname3:'Financial Accounting',
//         subjectcode3:'CAAC152',
//         subjectname4:'Microprocessor and Computer Architecture',
//         subjectcode4:'CACS155',
//         subjectname5:'C Programming',
//         subjectcode5:'CACS151',
//         subjectname6:'Practical',
//         subjectcode6:'CACS101',
//     },
//     contact:{
//         email:'gurungdeebas@gmail.com',
//         phone1:9746413470,
//         phone2:9798671456,
//     }
// }

// console.log(student['name']);
// console.log(student['id']);
// console.log(student.address['street']);
// console.log(student.address['city']);
// console.log(student.address['zip']);
// console.log(student['Faculty']);
// console.log(student['course']);
// console.log(student.subject['subjectname1']);
// console.log(student.subject['subjectcode1']);
// console.log(student.subject['subjectname2']);
// console.log(student.subject['subjectcode2']);
// console.log(student.subject['subjectname3']);
// console.log(student.subject['subjectcode3']);
// console.log(student.subject['subjectname4']);
// console.log(student.subject['subjectcode4']);
// console.log(student.subject['subjectname5']);
// console.log(student.subject['subjectcode5']);
// console.log(student.subject['subjectname6']);
// console.log(student.subject['subjectcode6']);
// console.log(student.contact['email']);
// console.log(student.contact['phone1']);
// console.log(student.contact['phone2']);

// console.log(student.address['zip']);
// console.log(student.course.grade);


// student.course.another="Science";
// console.log(student.course.another);

// student.contact.email="student@example.com";
// console.log(student.contact.email);

// delete student.contact;
// console.log(student.contact);
