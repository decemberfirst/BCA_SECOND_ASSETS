//
// let {
//     animalType,
//     animalName:{
//         scientific:{name:scientificName},
//         callable:{name:callableName},
//     },
// }={
//     animalType:"Mammal",
//     animalHabitat:"House",
//     animalName:{
//         scientific:{
//             name:"HOMO_SAPIENS",
//         },
//         callable:{
//             name:"HUMAN",
//         },
//     },
// };

// console.log(scientificName);
// console.log(callableName);


// let {
//     memberRole,
//     memberPersonalDetails:{firstName},
//     memberFamilyDetails:{
//         inFantsDetails:{
//             firstChildren:{
//                 name:nameofStudent,
//                 address:{name:fullAddress},
//             }
//         },
//     },
// }={
//     memberId:"A100",
//     memberRole:"ADMIN",
//     memberPersonalDetails:{
//         firstName:"ram",
//         lastName:"neupane",
//         from:"butwal",
//         isMarried:true,
//     },
//     memberFamilyDetails:{
//         inFantsDetails:{
//             hasInfants:true,
//             numberofInfants:2,
//             firstChildren:{
//                 name:"Gita",
//                 address:{
//                     name:"butwal"
//                 },
//             },
//         },
//     },
// };
// console.log(memberRole);
// console.log(firstName);
// console.log(fullAddress);

let {
    animalType,
    animalName:{
        scientific:{name:scName},
        callable:{name:caName},
    },
}={
    animalType:"Reptile",
    animalHabitat:"Jungle",
    animalName:{
        scientific:{
            name:"Panthera Leo",
        },
        callable:{
            name:"Roar",
        },
    },
};

console.log(scName);
console.log(caName);


let {
    memberRole,
    memberPersonalDetails:{firstName},
    memberFamilyDetails:{
        inFantsDetails:{
            firstChildren:{
                name:nameofchild,
                address:{name:addressofChild},
            }
        },
    },
}={
    memberId:"CA202",
    memberRole:"Assistance",
    memberPersonalDetails:{
        firstName:"Rita",
        lastName:"thapa",
        from:"Manigram",
        isMarried:false,
    },
    memberFamilyDetails:{
        inFantsDetails:{
            hasInfants:true,
            numberofInfants:1,
            firstChildren:{
                name:"manu",
                address:{
                    name:"Manigram"
                },
            },
        },
    },
};
console.log(memberRole);
console.log(firstName);
console.log(addressofChild);