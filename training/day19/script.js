// let AnimalInformation = {
//   animalType:"Mammal",
//   animalHabit:'house',
//   animalName:{
//     scientific: {
//       name:'HOMO_SAPIENS'
//     },
//     callable:{
//       name:'Human',
//     },
//   },
// };
// let {
//   animalType,
//   animalHabit,
//   animalName: {
//     scientific: { name: scientificName },
//     callable: { name: callableName },
//   }
// } = AnimalInformation;

// console.log(animalType);       
// console.log(animalHabit);     
// console.log(scientificName);   
// console.log(callableName);     
let {
    memberId,
    memberRole,
    memberDetails: {
        memberPersonalDetails: {
            firstName,
            lastName,
            from,
            isMarried
        },
        memberFamilyDetails: {
            infantDetails: {
                hasInfants,
                numberOfInfants,
            },
            firstChildren: {
                name,
                address: {
                    name: addressName,
                },
            }, 
        },
    },
} = {
  memberId:'A100',
memberRole:'Admin',
memberDetail:{
  memberPersonalDetails:{
    firstName:'mohit',
    lastName: 'Sapkota',
    from:'Kotihawa',
    isMarried:false,
  },
  memberFamilyDetails:{
    infantDetails:{
    hasInfants:true,
    numberOfInfants:2,
    firstChildren:{
      name:'Meow',
      address:{
        name:'butwal',
      },
    } ,
    },
  },
},
};
console.log(memberId);
console.log(memberRole);
console.log(firstName);
console.log(lastName);
console.log(from);
console.log(isMarried);
console.log(hasInfants);
console.log(numberOfInfants);
console.log(name);
console.log(addressName);
