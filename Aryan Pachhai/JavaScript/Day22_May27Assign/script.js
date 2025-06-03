console.log('JS has been loaded');

let student={
    name:'Aryan',
    id:67168,
    address:{
        street:7,
        city:'Butwal',
        zip:4848,
    },
    faculty:'Humanity and Social Science',
    course:{
        courseName:'BCA',
    },
    subject:{
        subName:['MCA','Math','English','C','Account','Nepali'],
        subCode:['MC1069','M1070','E1071','C1072','A1073','N1074'],
    },
    contact:{
        email:'aryanpachhai5@gmail.com',
        phone:[9812345678,9887654321],
    },
}
console.log(student);

console.log(`zipCode : ${student.address.zip}`);
console.log(`course : ${student.course.courseName}`);

student.course.department='Science';
console.log(student.course.department);
console.log(student.course);

student.contact.email='student@gmail.com';
console.log(student.contact.email);
console.log(student.contact);

delete student.contact.phone;
console.log(student.contact.phone);
console.log(student.contact);