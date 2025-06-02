let myPersonalList=[
    {
        id:1,
        memberName: 'bhawana pandey',
        imageLink: 'https://googleimage.com',
        isPrinciple: false,
        isvicePrinciple: true,
        subjectList: ['e-commerce','english' ],
        address:'manigram',
        isCoordinator: false,
    },
    {
        id:2,
        memberName: 'hari pandey',
        imageLink: 'https://googleimage.com',
        isPrinciple: true,
        isvicePrinciple: false,
        subjectList: ['maths','social' ],
        address:'butwal',
        isCoordinator: false,
    },
    {
        id:3,
        memberName: 'diana puware',
        imageLink: 'https://googleimage.com',
        isPrinciple: false,
        isvicePrinciple: false,
        subjectList: ['computer' ],
        address:'butwal',
        isCoordinator: true,
    },
    {
        id:4,
        memberName: 'rita thapa',
        imageLink: 'https://googleimage.com',
        isPrinciple: true,
        isvicePrinciple: false,
        subjectList: ['nepali' ],
        address:'butwal',
        isCoordinator: false,
    },
    {
        id:5,
        memberName: 'gita pun',
        imageLink: 'https://googleimage.com',
        isPrinciple: false,
        isvicePrinciple: true,
        subjectList: ['music'],
        address:'belbas',
        isCoordinator: false,
    },
]

for(i=0; i<myPersonalList.length; i++){
// console.log(myPersonalList[i].id);
// console.log(myPersonalList[i].memberName);
// console.log(myPersonalList[i].imageLink);
// console.log(myPersonalList[i].isPrinciple);
// console.log(myPersonalList[i].isvicePrinciple);
// console.log(myPersonalList[i].subjectList);
// console.log(myPersonalList[i].isCoordinator);
let {id, memberName,imageLink,isPrinciple,isvicePrinciple,subjectList,address,isCoordinator}=myPersonalList[i];
console.log(`${id}  ${memberName} ${imageLink} ${isPrinciple} ${isvicePrinciple} ${subjectList} ${address} ${isCoordinator}`);
};

let nestedObject = {
    address: {
        from: {
            permanent: 'nepal',
            temporary: 'India',
        },
    },
};

let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} -> ${temporary}`);