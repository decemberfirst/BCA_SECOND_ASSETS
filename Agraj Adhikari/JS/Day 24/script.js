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

    memberDetails:{memberPersonalDetails:{firstname}},

    memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{name:firstChildrenname}}}},

    memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{adress:{name:addressname}}}}},

    } = {
    memberId: "A100",
    memberRole: 'ADMIN',
    memberDetails: {
        memberPersonalDetails:{
            firstname: 'RAM',
            lastname: 'Neupane',
            from: 'Butwal',
            isMarried: true,
        },
        memberFamilyDetails:{
            infantsDetails: {
                hasInfants: true,
                numberofInfants: 2,
                firstChildren: {
                    name:'Hari',
                    adress:{
                        name:'Butwal',
                    },
                },
            },
        },
    },
};

console.log(memberRole,firstname,firstChildrenname,addressname);

//(print meneberRole,memberfirstname,first children name and first children address name)

