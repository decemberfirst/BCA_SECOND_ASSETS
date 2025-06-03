// let myCollageMemberList =[
//     {
//         id:1,
//         memberName:"sanjeev bhandari",
//         imagelink:'',
//         isPriniciapl:true,
//         isVicePrincipal:false,
//         subjectList:['E-commererce','computer-security'],
//         address:'Manigram',
//         isCoordinator:false,
//     },
//     {
//         id:2,
//         memberName:"shiva bhattarai",
//         imagelink:'',
//         isPriniciapl:false,
//         isVicePrincipal:true,
//         subjectList:['oop in c++','computer fundamentals and application'],
//         address:'Manigram',
//         isCoordinator:false,
//     },
//     {
//          id:3,
//         memberName:"aasish bhandari",
//         imagelink:'',
//         isPriniciapl:false,
//         isVicePrincipal:false,
//         subjectList:['web designing'],
//         address:'vumbai',
//         isCoordinator:true,
//     },
//     {
//          id:4,
//         memberName:"priya tamang",
//         imagelink:'',
//         isPriniciapl:false,
//         isVicePrincipal:false,
//         subjectList:['math','numerical method'],
//         address:'dharan',
//         isCoordinator:false,
//     },
//     {
//          id:5,
//         memberName:"kristika thapa",
//         imagelink:'',
//         isPriniciapl:false,
//         isVicePrincipal:false,
//         subjectList:['digital logic'],
//         address:'chitwan',
//         isCoordinator:false,
//     },
// ]

// for(let i=0; i<myCollageMemberList.length; i++){
//        console.log(myCollageMemberList[i].id)
//        console.log(myCollageMemberList[i].memberName)
//        console.log(myCollageMemberList[i].imagelink)
//        console.log(myCollageMemberList[i].isPriniciapl)
//        console.log(myCollageMemberList[i].isVicePrincipal)
//        console.log(myCollageMemberList[i].subjectList)
//        console.log(myCollageMemberList[i].address)
//        console.log(myCollageMemberList[i].isCoordinator)
       
// }


// ------------printing memberName and address using destructing method----------
// for(let i=0; i<myCollageMemberList.length; i++){
// let {memberName, address}= myCollageMemberList[i];
// console.log(memberName);
// console.log(address);

// }


// for(i=0; i<myCollageMemberList.length; i++){
//     let{memberName, address}=myCollageMemberList[i];
//     console.log(memberName)
//     console.log(address)
// }



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
// TODO: PRINT membererole, memberfirstname, first children name and, first children address name
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
