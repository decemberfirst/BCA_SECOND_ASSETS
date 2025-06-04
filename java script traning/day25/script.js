let {animalType,
    animalName:{
    scientific:{name:scientificName },
       callable: {name:callableName},
    },
    } ={
    animalType:'Mammal',
    animalHabitat:'House',
    animalName:{
    scientific:{
        name:'HOMO_SAPIENS'

    },
    callable:{
        name:'HUMAN'
    },
    },
}
 console.log(scientificName);
console.log(callableName);

//.................................
let {memberPersonDetails,
    memberFamilyDetails:{
        
    }

} = {
  memberId: "A100",
  memberRole: "ADMIN",
  memberDetails: {
memberPersonDetails:{
firstName: "ARM",
lastName: "Kumar",
from: "Butwal",
isMarried: true,

},
memberFamilyDetails:{
  infantDetails:{
hasInfants: true,
numberOfInfants: 2,
firstChildren:{
  name: "Hari",
  address:{
    name: "Butwal",
  },
},
},
},
},
};
console.log();
