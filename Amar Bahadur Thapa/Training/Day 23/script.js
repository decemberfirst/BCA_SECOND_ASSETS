let animalInformation = {
    animalType: 'Mamal',
    animalHabitat: 'Mouse',
    animalName: {
        scientific: {
        name: 'HOMO_SAPIENS',
    },
     callable: {
        name: 'Human',
     },
    },
};

// let {animalType, animalName:{scientific:{name:animal1},callable:{name:animal2}}}={
//      animalType: 'Mamal',
//     animalHabitat: 'Mouse',
//     animalName: {
//         scientific: {
//         name: 'HOMO_SAPIENS',
//     },
//      callable: {
//         name: 'Human',
//      },
//     },    
// }
// console.log(animalType);
// console.log(animal1);
// console.log(animal2);

// animalName:{scientific:{name:animal1},callable:{name:animal2},} // ----> Alias


let memberList = {
    memberId: 'A100',
    memberRole: 'ADMIN',
    memberDetails: {
        memberPersonalDetails: {
            firstName: 'Ram',
            lastName: 'Thapa',
            from: 'Butwal',
            isMarried: true,        
        },
        memberFamilyDetails: {
            infantsDetails: {
                hasInfants: true,
                memberOfInfants: 2,
                firstchild: {
                    name: 'Hari',
                    address: {
                        name: 'Butwal'
                    },
                },
            },
        },
    },
};

let {memberId,
    memberRole,
    memberDetails:{
        memberPersonalDetails:{
            firstName,lastName,from,isMarried
        },
        memberFamilyDetails:{
            infantsDetails:{
                hasInfants,memberOfInfants,
                firstchild:{
                    name,
                    address:{
                        name:addressName
                    },
                },
            },
        },
    }
} = {memberId: 'A100',
    memberRole: 'ADMIN',
    memberDetails: {
        memberPersonalDetails: {
            firstName: 'Ram',
            lastName: 'Thapa',
            from: 'Butwal',
            isMarried: true,        
        },
        memberFamilyDetails: {
            infantsDetails: {
                hasInfants: true,
                memberOfInfants: 2,
                firstchild: {
                    name: 'Hari',
                    address: {
                        name: 'Butwal'
                    },
                },
            },
        },
    },
}; 
console.log(memberRole);
console.log(firstName);
console.log(name);
console.log(addressName );