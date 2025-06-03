
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