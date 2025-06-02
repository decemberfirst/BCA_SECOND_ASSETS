//..............
// let MemberList = {
//     memberId: 'A120',
//     memberRole: 'Admin',
//     memberDetails: {
//         memberPersonalDetails: {
//             firstName: 'Ram',
//             lastName: 'Magar',
//             from: 'Butwal',
//             isMarried: true

//         },
//         familyMemberDetails: {
//             infantsDetails: {
//                 hasInfants: true,
//                 numberOfInfants: 2,
//                 firstChildren: {
//                     name: 'Hari',
//                     address: {
//                         name: 'Butwal',
//                     },
//                 },
//             },
//         },
//     }
// }
let {memberRole,memberDetails:
    {memberPersonalDetails:{
firstName
},familyMemberDetails:{
    infantsDetails:{
        firstChildren:{
            address:{
                name
            }
        }
    }
}}} = {
    memberId: 'A120',
    memberRole: 'Admin',
    memberDetails: {
        memberPersonalDetails: {
            firstName: 'Ram',
            lastName: 'Magar',
            from: 'Butwal',
            isMarried: true

        },
        familyMemberDetails: {
            infantsDetails: {
                hasInfants: true,
                numberOfInfants: 2,
                firstChildren: {
                    name: 'Hari',
                    address: {
                        name: 'Butwal',
                    },
                },
            },
        },
    }
}
console.log(memberRole);
console.log(firstName);
console.log(name);
