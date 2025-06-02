// ---------------TODO IN CLASS------------------
// let {
//     animalType,
//     animalName:{name :scientificName},
//     callable:{name:callableName},
// }={
//     animalType:"MAMMAL",
//     animalHabitat:"house",
//     animalName:{
//         scientific:{
//             name:"HOMO_SAPINES",
//         },
//         callable:{
//             name:'HUMAN', // DESTRUCTURE animalType, animalName, scientific name, callable name
//         },
//     },
// };

// console.log(scientificName)
// console.log(callableName)


// ------------TODO:2 IN CLASSS----------------------- 

let {
    memberRole,
    memberDetails: {
        memberPersonalDetails: { firstName },
        memberFamilyDetails: {
            infantsDetails: {
                firstChildren: {
                    name: childrenName,
                    address: { name: addressName }
                }
            }
        }
    }
} 
={   
    memberID:"A100",
    memberRole:"ADMIN",
    memberDetails:{
        memberPersonalDetails:{
            firstName:'eren',
            lastName:"yeager",
            from:"japan",
            isMarried:true,
        },
        memberFamilyDetails:{
            infantsDetails:{
                hasInFants:true,
                numbeOfInfants:2,
                firstChildren:{
                    name:"jeak",
                    address:{
                        name:"paradise island",
                    }
                }
            }
        }
    }

}
console.log(memberRole);     
console.log(firstName);   
console.log(childrenName);
console.log(addressName);    