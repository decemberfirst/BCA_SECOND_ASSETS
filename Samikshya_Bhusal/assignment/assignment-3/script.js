// let memberList = {
//     memberId: 'A100',
//     memberRole: 'ADMIN',
//     memberDetails: {
//         memberPersonalDetails: {
//             firstName: 'RAM',
//             lastName: 'NEUPANE',
//             from: 'butwal',
//             isMarried: true,
//         },
//         memberFamilyDetails: {
//             infantsDetails: {
//                 hasInfants: true,
//                 memberOfInfant: 2,
//                 firstchildern: {
//                        
//                     name: 'hari',
//                      address:{
 //                         name:"butwal"
 //                    },
//                 },
//             },
//         },
//     },
// };


let { memberRole,
    memberDetails: { memberPersonalDetails: { firstName } },
    memberDetails: { memberFamilyDetails: { infantsDetails: { firstchildern: { name: firstchildernName } } } },
    memberDetails: { memberFamilyDetails: { infantsDetails: { firstchildern: { address: { name: addressName } } } } },

} = {
    memberId: 'A100',
    memberRole: 'ADMIN',
    memberDetails: {
        memberPersonalDetails: {
            firstName: 'RAM',
            lastName: 'NEUPANE',
            from: 'butwal',
            isMarried: true,
        },
        memberFamilyDetails: {
            infantsDetails: {
                hasInfants: true,
                memberOfInfant: 2,
                firstchildern: {
                    name: 'HARI',
                    address:{
                        name:'butwal',
                    }
                },
            },
        },
    },
};
console.log(memberRole, firstName, firstchildernName, addressName);