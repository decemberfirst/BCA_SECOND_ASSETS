

  let  {animalType,animalName:{scientific:{name:scientificname},
  callable:{name:callableName},
},
}={
    animalType:'MAMAL',
    animalHabitat:'STABLE',
    animalName: {
        scientific:{
            name:"EQUUS CABALLUS",
        },
        callable:{
            name:'HORSE',
        },
    },
  };
  console.log (scientificname
  );
  console.log(callableName);
 
 let {memberRole,memberDetails:{memberPersonlDetails:firstName},
 memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{name:childrenName}}}},
 memberDetails:{memberFamilyDetails:{infantsDetails:{firstChildren:{address:{name:addressName}}}}}}
 = {
 memberId:'SD345',
 memberRole:'ADMIN',
 memberDetails:{
    memberPersonlDetails:{
        firstName:"MAHENDRA",
        lastNmae:"SALE",
        from:'RUPANDEHI',
        isMarried:false,
    },
    memberFamilyDetails:{
        infantsDetails:{
            hasInfants:true,
            numberpfInfants:2,
            firstChildren:{
                name:'GYANENDRA',
                address:{
                    name:'RUPANDEHI',
                },
            },
        },
    },
 },
 };

console.log(memberRole);
console.log(childrenName);
console.log(addressName);