let MyPersonList = [1, 2, 3, 4, 5];

for (i = 0; i < MyPersonList.length; i++) {
    console.log(MyPersonList[i]);
}

let MyCollegeMemberList = [
    {
        id: 1,
        memberName: 'Sanjeev Bhandari',
        imageLink: 'https:/exampleimage.com',
        isPrincipal: true,
        isVicePrincipal: false,
        subjectList: ['E-commerce', 'Computer-Security'],
        address: 'Manigram',
        isCoordinator: false,
    },
    {
        id: 2,
        memberName: 'Shiva Bhattarai',
        imageLink: 'https:/exampleimage.com',
        isPrincipal: false,
        isVicePrincipal: true,
        subjectList: ['IT', 'Computer fundamental'],
        address: 'Manigram',
        isCoordinator: false,
    },
    {
        id: 3,
        memberName: 'Jagrit Gaire',
        imageLink: 'https:/exampleimage.com',
        isPrincipal: false,
        isVicePrincipal: false,
        subjectList: ['Webdev', 'Data Structuring'],
        address: 'Manigram',
        isCoordinator: true,
    },
    {
        id: 4,
        memberName: 'Arun Sahani',
        imageLink: 'https:/exampleimage.com',
        isPrincipal: false,
        isVicePrincipal: false,
        subjectList: ['Maths'],
        address: 'Manigram',
        isCoordinator: false,
    },
    {
        id: 5,
        memberName: 'Rohan Tiwari',
        imageLink: 'https:/exampleimage.com',
        isPrincipal: false,
        isVicePrincipal: false,
        subjectList: ['JS'],
        address: 'Manigram',
        isCoordinator: false,
    }
];

/* for(i=0; i<MyCollegeMemberList.length; i++){
    console.log(MyCollegeMemberList[i]);
    console.log(MyCollegeMemberList[i].id);
    console.log(MyCollegeMemberList[i].memberName);
    console.log(MyCollegeMemberList[i].imageLink);
    console.log(MyCollegeMemberList[i].isPrincipal);
    console.log(MyCollegeMemberList[i].isVicePrincipal);
    console.log(MyCollegeMemberList[i].subjectList);
    console.log(MyCollegeMemberList[i].address);
    console.log(MyCollegeMemberList[i].isCoordinator);
    console.log('...........................');
} */

 

for (i = 0; i < MyCollegeMemberList.length; i++) {
    let { memberName, id } = MyCollegeMemberList[i];
    console.log(`${id} - > ${memberName}`);
}


let nestedObject = {
    address: {
        from: {
            permanent: 'Nepal',
            temporary: 'India',
        },
    },
};

 
let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} -> ${temporary}`);
 




