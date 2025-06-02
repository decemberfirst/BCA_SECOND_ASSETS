let nestedObject = {
    address: {
        from: {
            permanent: 'nepal',
            temporary: 'India',
        },
    },
};

let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} -> ${temporary}`);


let {name:{secondaryName:{first}},name:{secondaryName:{second}}} = {
    name: {
        primaryName: {
            first: 'test',
            second: 'test',
        },

        secondaryName: {
            first: 'test',
            second: 'test',
        },
    },
};
console.log(first,second);
 
let {animalType , animalName:{scientific:{name : scientificname}} , animalName:{callable:{name : callablename}}} = {
    animalType: "MAMMAL",
    animalHabitat: "HOUSE",
    animalName: {
        scientific: {
            name: "HOMO_SAPIENS",
        },
        callable: {
            name : 'HUMAN',
        },
    },
};

console.log(animalType,"/",scientificname,"/",callablename);

/* console.log({
    animalType,
    callablename,
    scientificname
}) */


let {memberRole, 

    memberDetails:{memberPersonalDetails:{firstnamee}},

    memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{name:firstChildrenname}}}},

    memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{adress:{name:addressnamee}}}}},

    } = {
    memberId: "D001",
    memberRole: 'CEO',
    memberDetails: {
        memberPersonalDetails:{
            firstnamee: 'DIPENDRA',
            lastname: 'PUWARE',
            from: 'Butwal',
            isMarried: true,
        },
        memberFamilyDetails:{
            infantsDetails: {
                hasInfants: true,
                numberofInfants: 2,
                firstChildren: {
                    name:'diana',
                    adress:{
                        namee:'Butwal',
                    },
                },
            },
        },
    },
};

console.log(memberRole,firstnamee,firstChildrenname,addressnamee);

//(print meneberRole,memberfirstname,first children name and first children address name)









let {animalTypee, animalName:{scientific:{name : scientificnamee}} , animalName:{callable:{name : callablenamee}}} = {
    animalTypee: "Amphibians",
    animalHabitat: "Water and land",
    animalName: {
        scientific: {
            namee: "Anura",
        },
        callable: {
            namee : 'Frog',
        },
    },
};

console.log(animalType, scientificname, callablenamee);

 
//(print StudentRole,Studentfirstname,first Subject name and first Subject address name)

let {StudentRole, 

    StudentDetails:{StudentPersonalDetails:{firstname}},

    StudentDetails:{StudentFamilyDetails:{SubjectDetails:{firstSubject:{name:firstSubjectname}}}},

    StudentDetails:{StudentFamilyDetails:{SubjectDetails:{firstSubject:{adress:{name:addressname}}}}},

    } = {
    StudentId: "D101",
    StudentRole: 'ADMIN',
    StudentDetails: {
        StudentPersonalDetails:{
            firstname: 'DIANA',
            lastname: 'PUWARE',
            from: 'Butwal',
            isStudent: true,
        },
        StudentFamilyDetails:{
            SubjectDetails: {
                hasSubject: true,
                numberofSubject: 2,
                firstSubject: {
                    name:'MCA',
                    adress:{
                        name:'Butwal',
                    },
                },
            },
        },
    },
};

console.log(StudentRole,firstname,firstSubjectname,addressname);





