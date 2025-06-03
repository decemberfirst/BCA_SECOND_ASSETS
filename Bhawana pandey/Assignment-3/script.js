let {animalType , animalName:{scientific:{name : scientificname}} , animalName:{callable:{name : callablename}}} = {
    animalType: "Insects",
    animalHabitat: "Houseflies",
    animalName: {
        scientific: {
            name: "Rhopalocera",
        },
        callable: {
            name : 'Butterfly',
        },
    },
};

console.log(animalType, scientificname, callablename);

 // friendrole,friendfirstname,firstsubjectname and first subject,address name

let {friendRole, 

    friendDetails:{friendPersonalDetails:{firstname}},

    friendDetails:{friendFamilyDetails:{SubjectDetails:{firstSubject:{name:firstSubjectname}}}},

    friendDetails:{friendFamilyDetails:{SubjectDetails:{firstSubject:{adress:{name:addressname}}}}},

    } = {
    friendId: "A100",
    friendRole: 'ADMIN',
    friendDetails: {
        friendPersonalDetails:{
            firstname: 'kirti',
            lastname: 'neupane',
            from: 'janakinagar',
            isStudent: true,
        },
        friendFamilyDetails:{
            friendDetails: {
                hasSubject: true,
                numberofSubject: 4,
                firstSubject: {
                    name:'BSC nursing',
                    adress:{
                        name:'Butwal',
                    },
                },
            },
        },
    },
};

console.log(friendRole,friendname,friendSubjectname,addressname);
