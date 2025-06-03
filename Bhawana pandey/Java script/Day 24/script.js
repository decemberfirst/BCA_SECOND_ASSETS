// let AnimalInformation ={
//     animalType: 'mammal',
//     animalHbaitat: 'house',
//     animalName: {
//         scientific:{
//             name: 'HOMO_SAPIENS',
//         },
//         callable:{
//             name: 'HUMAN',
//         },
//     },
// }; 

// let {
//     animalType,
//     animalName: {
//         scientific: { name: scientificName },
//         callable: { name: callableName },
//     },
// } = {
//     animalType: 'mammal',
//     animalHbaitat: 'house',
//     animalName: {
//         scientific: {
//             name: 'HOMO_SAPIENS',
//         },
//         callable: {
//             name: 'HUMAN',
//         },
//     },
// };
// console.log(scientificName);
// console.log(callableName);


let memberList={
    memberId: "A100",
    memberRole:'ADMIN',
    memberDetails:{
        memberPersonalDetails:{
            firstname:'shristi',
            lastname:'pandey',
            from:'manigram',
            ismarried:'true',
        },
        memberFamilyDetails:{ 
            infantDetails:{
                hasInfants:'true',
                numberofInfants:2,
                firstchildren:{
                    name:'shreyansh',
                    address:{
                        name:'manigram',
                    },
                },
            },
        },
        },
    };

let {memberRole, 

    memberDetails:{memberPersonalDetails:{firstname}},

    memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{name:firstChildrenname}}}},

    memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{adress:{name:addressname}}}}},

    } = {
    memberId: "A100",
    memberRole: 'ADMIN',
    memberDetails: {
        memberPersonalDetails:{
            firstname: 'shristi',
            lastname: 'pandey',
            from: 'manigram',
            isMarried: true,
        },
        memberFamilyDetails:{
            infantsDetails: {
                hasInfants: true,
                numberofInfants: 2,
                firstChildren: {
                    name:'shreyansh',
                    adress:{
                        name:'Butwal',
                    },
                },
            },
        },
    },
};

console.log(memberRole,firstname,firstChildrenname,addressname);

