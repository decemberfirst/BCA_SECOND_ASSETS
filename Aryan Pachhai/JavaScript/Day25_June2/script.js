console.log('JS has been loaded');

// let animalInformation={
//     animalType:'Mammal',
//     animalHabitat:'House',
//     animalName:{
//         scientific:{
//             name:'Homo-Sapiens',
//         },
//         callable:{
//             hname:'Human'
//         }
//     },
// };

// let {animalType,
//     animalHabitat,
//     animalName:{
//       scientific:{name : scientificName},
//       callable:{name : callableName},
//     }
//     }={
//     animalType:'Mammal',
//     animalHabitat:'House',
//     animalName:{
//         scientific:{
//             name:'Homo-Sapiens',
//         },
//         callable:{
//             name:'Human'
//         }
//     },
// }

// console.log(animalType);
// console.log(animalHabitat);
// console.log(scientificName);
// console.log(callableName);





let {memberId,
    memberRole,
    memberDetails:{
        memberPersonalDetails:{
            firstName,lastName,from,isMarried
        },
        memberFamilyDetails:{
            infantDetails:{
                hasInfants,numberOfInfants,
                firstChildren:{
                    name,
                    address:{
                        name : addressName,
                    }
                }
            }
        },
    },
}={
    memberId:'A100',
    memberRole:'Admin',
    memberDetails:{
        memberPersonalDetails:{
            firstName:'Shyam',
            lastName:'Thapa',
            from:'Manigram',
            isMarried:true,
        },
        memberFamilyDetails:{
            infantDetails:{
                hasInfants:true,
                numberOfInfants:2,
                firstChildren:{
                    name:'Gita',
                    address:{
                        name:'Butwal',
                    },
                },
            },
        },
    },   
};

console.log(memberRole);
console.log(firstName);
console.log(name);
console.log(addressName);