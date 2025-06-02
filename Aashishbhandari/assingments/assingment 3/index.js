let {memberRole,
memberDetails:{firstName},
memberFamilyDetails:{infantsDetails:{firstChildren:{name}}},
memberFamilyDetails:{infantsDetails:{firstChildren:{address:{name:address}}}},
}={
    memberID:"AC80",
    memberRole:"Admin",
    memberDetails:{
        memberPersonalDetails:{
            firstName:"Alex",
            secondName:"BHandari",
            from:"Bhumahi",
            isMarried:false,
        },
        memberFamilyDetails:{
            infantsDetails:{
                hasInfants:true,
                numberofInfants:2,
                firstChildren:{
                    name:"Aashish",
                    address:{
                        name:"Butwal",
                    },
                },
            },
        },
    },
};

console.log(memberRole);
console.log(firstName);
console.log(Name);














let {
    animalType,
    animalName : {
        scientific:{name: screntificName},
        callable: {name: collableName},

    },
} = {
    animalType: 'MAMMAL',
    animalHabitat: 'House',
    animalName: {
        scientific:{
            name: 'HOO_SAPIENS',
        },
        callable: {
            name: 'HUMAN'
        },

    },
};
console.log(collableName);
console.log(screntificName);