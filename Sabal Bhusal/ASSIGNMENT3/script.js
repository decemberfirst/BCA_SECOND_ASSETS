let {animalType , animalName:{scientific:{name : scientificname}} , animalName:{callable:{name : callablename}}} = {
    animalType: "Amphibians",
    animalHabitat: "Water and land",
    animalName: {
        scientific: {
            name: "Anura",
        },
        callable: {
            name : 'Frog',
        },
    },
};

console.log(animalType, scientificname, callablename);

 
//(print StudentRole,Studentfirstname,first Subject name and first Subject address name)

let {StudentRole, 

    StudentDetails:{StudentPersonalDetails:{firstname}},

    StudentDetails:{StudentFamilyDetails:{SubjectDetails:{firstSubject:{name:firstSubjectname}}}},

    StudentDetails:{StudentFamilyDetails:{SubjectDetails:{firstSubject:{adress:{name:addressname}}}}},

    } = {
    StudentId: "A100",
    StudentRole: 'ADMIN',
    StudentDetails: {
        StudentPersonalDetails:{
            firstname: 'sabal',
            lastname: 'bhusal',
            from: 'Butwal',
            isStudent: true,
        },
        StudentFamilyDetails:{
            SubjectDetails: {
                hasSubject: true,
                numberofSubject: 2,
                firstSubject: {
                    name:'Maths',
                    adress:{
                        name:'Butwal',
                    },
                },
            },
        },
    },
};

console.log(StudentRole,firstname,firstSubjectname,addressname);