// DESTRUCTURE  ANIMALTYPE, ANIMALNAME,SCIENTIFICNAME, CALLABLE NAME
// let AnimalInformation ={
//     animalType: 'Mammal',
//     animalHabitat: 'HOUSE',
//     animalName:{
//         scientific:{
//             name: 'HOMO_SAPIENS',
//         },
//         callable:{
//             name:'HUMAN', // 
//         }
//     }
// }



// let{
//     animalType,
//     animalName:{
//         scientific:{name: scientificName},
//         callable:{ name: callableName}, // allias

//     },
// } ={
//     animalType: 'Mammal',
//     animalHabitat: 'House',
//     animalName:{
//         scientific:{
//             name:'HOMO SAPIENS'
//         }
//     }
// }















//TODO: Print MemberRole,  memberFirstName, firstChildren name and first children address name.

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