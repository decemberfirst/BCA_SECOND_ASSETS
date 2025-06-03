console.log('JS has been loaded');


// let myPersonList=[1,2,3,4,5];
// for(let i=0;i<myPersonList.length;i++){
//     console.log(myPersonList[i]);
// }


let myCollegeMemberList=[
    {
        id:1,
        memberName:'Sanjeev Bhandari',
        imageLink:'',
        isPrincipal:true,
        isVicePrincipal:false,
        subjectList:['E-commerce','Computer-Security'],
        address:'Manigram',
        isCoordinator:false,
    },
    {
        id:2,
        memberName:'Shiva Bhattrai',
        imageLink:'',
        isPrincipal:false,
        isVicePrincipal:true,
        subjectList:['Computer-Application','E-commerce'],
        address:'Manigram',
        isCoordinator:false,
    },
    {
        id:3,
        memberName:'Pooja Sharma',
        imageLink:'',
        isPrincipal:false,
        isVicePrincipal:false,
        subjectList:['Digital-Logic','Math'],
        address:'Bhairawaha',
        isCoordinator:true,
    },
    {
        id:4,
        memberName:'Arjun Shahani',
        imageLink:'',
        isPrincipal:false,
        isVicePrincipal:false,
        subjectList:['Speech','Math'],
        address:'Bhairawaha',
        isCoordinator:true,
    },
    {
        id:5,
        memberName:'Amar Magar',
        imageLink:'',
        isPrincipal:false,
        isVicePrincipal:false,
        subjectList:['Digital-Logic','Math'],
        address:'Manigram',
        isCoordinator:false,
    },
]
// for(let i=0;i<myCollegeMemberList.length;i++){
//     console.log(myCollegeMemberList[i].id);
//     console.log(myCollegeMemberList[i].memberName);
//     console.log(myCollegeMemberList[i].imageLink);
//     console.log(myCollegeMemberList[i].isPrincipal);
//     console.log(myCollegeMemberList[i].isVicePrincipal);
//     console.log(myCollegeMemberList[i].subjectList);
//     console.log(myCollegeMemberList[i].address);
//     console.log(myCollegeMemberList[i].isCoordinator);

//     console.log('-----------------------------------------------------------------------------');
// }



for(let i=0;i<myCollegeMemberList.length;i++){
    let {memberName,imageLink,subjectList}=myCollegeMemberList[i];
    console.log(memberName);
    console.log(imageLink);
    console.log(subjectList);

    console.log('-----------------------------------------------------------------------------');
}


