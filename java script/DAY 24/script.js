//   let personInformation ={
//  name:{
//     primaryName:{
//         first:'test',
//         second:'text',
//     },
//     secondaryName:{
//         first:'test',
//         second:'test',
//     },
//  },
//   };

//   let  {animalType,animalName:{scientific:{name:scientificname},
//   callable:{name:callableName},
// },
// }={
//     animalType:'MAMAL',
//     animalHabitat:'HOUSE',
//     animalName: {
//         scientific:{
//             name:" HOMO_SAPIENS",
//         },
//         callable:{
//             name:'HUMAN',
//         },
//     },
//   };
//   console.log (scientificname
//   );
//   console.log(callableName);
 
 let {memberRole,memberDetails:{memberPersonlDetails:firstName},
 memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{name:childrenName}}}},
 memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{address:{name:addressName}}}}}}
 = {
 memberId:'A100',
 memberRole:'ADMIN',
 memberDetails:{
    memberPersonlDetails:{
        firstName:"RAM",
        lastNmae:"NEUPANE",
        from:'BUTWAL',
        isMarried:'true',
    },
    memberFamilyDetails:{
        infantsDetails:{
            hasInfants:true,
            numberpfInfants:2,
            firstChildren:{
                name:'hari',
                address:{
                    name:'butwal',
                },
            },
        },
    },
 },
 };

console.log(memberRole);
console.log(childrenName);
console.log(addressName);