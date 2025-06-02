let {
  animalType,
  animalName: {
    scientific: { name: nyme },
    capable: { name: namme },
  },
  }
 = {
  animalType: "Mammal",
  animalHabitat: "House",
  animalName: {
    scientific: {
      name: "Homo_Sapiens",
    },
    capable: {
      name: "Human",
    },
  },
};

console.log(animalType);
console.log(nyme);
console.log(namme);




let {
    memberRole,
    memberDetail: {memberPersonalDetail: {firstName,}, memberFamilyDetail: {infantDetails: {firstChildren: {Name, Address: {Name: naam}}}}}
    
} = {
    memberId : "A1000",
    memberRole : "Admin",
    memberDetail : {
        memberPersonalDetail :{
            firstName : "Ram",
            lastNAme : "Neupane",
            from : "Butwal",
            isMarried : true,
            
        },
        memberFamilyDetail : {
            infantDetails:{
                hasInfants : true,
                numberOfInfants : 2,
                firstChildren : {
                    Name :"Hari",
                    Address : {
                        Name :"Butwal",
                    },
                },
            },
        },
    },
};
console.log(firstName);
console.log(Name);
console.log(naam);
