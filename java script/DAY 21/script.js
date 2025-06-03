
// // let myPerson = {
// //     name: 'chintan',
// //     from: 'gulmi',
// //     email: "chintankharal@gmail.com",
// //     phone: 9867226621,
// // };
// // console.log(myPerson.name);
// // console.log(myPerson.from);
// // console.log(myPerson.email);
// // console.log(myPerson.name);
// // console.log(Object.entries(myPerson))
// // console.log(Object.keys(myPerson));
// // let loop = (Object.keys(myPerson));
// // for (i = 0; i < loop.length; i++) {
// //     console.log(loop[i]);
// // }
// // let loopSecond = (Object.entries(myPerson));
// // for
// //     (i = 0; i < loopSecond.length; i++) {
// //     console.log(loopSecond[i])
// //     let [key, value] = loopSecond[i];
// //     console.log(`${key} -> ${value}`)
// // }


// let  person= {
//     name:{
//     firstname:'chintan',
//     lastname:" kharal"
        
//     }, location:{
//         permanent:"gulmi",
//         temporary:" butwal"
//     }, color:{
//         favcolor:['blue', 'green','yellow']
//     }, parential_info:{
//         father:"tilaram",
//         mother:" goma"
//     }

// }
// console.log(person.name.firstname);






//1.
 let student = {
    name: "Chintan Kharal",
    id: 101,
    address: {
        street: "Main Road",
        city: "Butwal",
        zip: 32907
    },
    faculty: "BCA",
    course: {
        courseName: "Computer Applications"
    },
    // subjects: [
    //     {subjectName: "Web Programming",
    //     subjectCode: "WP1812",
     
        
    // ],
    contact: {
        email: "chintankharal@gmail.com",
        phone1: "9867226621",
        phone2: "9865876895"
    }
};
//.2
console.log(student.address.zip);
console.log( student.course.courseName);


//3
student.course.department ="science";
console.log(student.course);

//4 
student.contact.email=" student@example.com";
console.log(student.contact.email);

//5
delete student.contact.phone1;
console.log(student.contact)

// console.log(student)


    
 








