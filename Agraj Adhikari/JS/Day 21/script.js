let myPerson = {
    name: "Agraj",
    from: "Nayamill",
    email: "agrajadhikari@gmail.com",
    phone: "9800000000"
};


console.log(myPerson);
console.log(myPerson.name);
console.log(myPerson.from);
console.log(myPerson.email);
console.log(myPerson.phone);

console.log("name" in myPerson);
console.log("from" in myPerson);
console.log("email" in myPerson);
console.log("phone" in myPerson);

// if("name" in myPerson && "from" in myPerson && "another" in myPerson){
//     console.log(myPerson);
// }else{
//     console.log("donot exist");
// }


console.log(Object.entries(myPerson));
console.log(Object.keys(myPerson));
console.log(Object.values(myPerson));

let newVariable = (Object.entries(myPerson));

for(i=0; i<newVariable.length; i++){
    // console.log(newVariable[i]); 
    let[key, value] = newVariable[i];
    console.log(`${key} - > ${value}`);
} 


//Nested Objects  / Nested Arrays ........> Mostly used in Real World
// JSON -> Javascript object Notation

let object = {
    name: {
        firstName : "Agraj",
        middleName: "",
        secondName : "Adhikari"
    },
    location:{
        permanentAddress : "Nepal",
        temporaryAddress : "Australia"
    },
    colors:{
        favouriteColor: ["red", "blue", "green"]
    },
    parential_info:{
        fatherName: "Liladhar Adhikari",
        motherName: "Manju Aryal"
    }
};

console.log(object.name);
console.log(object.location);
console.log(object.colors);
console.log(object.parential_info);


//Asignment
//1
let Student = {
    name:"Agraj",
    ID: 93433,
    address: {
        street:"Paramount",
        city:"Tilottama",
        zip: 9977
    },
    Faculty:"Humanities",
    course:{
    courseName:"BCA",
    },
subject: [
        { subjectName: "Maths", subjectCode: 97673 },
        { subjectName: "C", subjectCode: 97672 },
        { subjectName: "Account", subjectCode: 97632 },
        { subjectName: "MCA", subjectCode: 97372 },
        { subjectName: "Moral", subjectCode: 27372 },
        { subjectName: "OPMaths", subjectCode: 37372 }
    ],
    Contact:{
        email:"agrajadhikari@gmail.com",
        Phone: [97866873158,2379713919]
    }
};

console.log(Student);
console.log(Student.Contact);

//2
console.log(Student.address.zip);
console.log(Student.course);

//3
Student.course.department = "Science";
console.log(Student);
console.log(Student.course.department);

//4
Student.Contact.email = "student@example.com";
console.log(Student);

//5 
delete Student.Contact.Phone;
console.log(Student);

 







