let myFriendList = [
    {
        id:1,
        memberName:'anisha chhantel',
        imageLink:'https://exampleimage.com',
        isprincipal: false,
        isviceprincipal:false,
        subjectList: ['BCA', 'computer-security'],
        address:'manigram',
        iscorrdinator:'false',
    },
    {
         id:2,
        memberName:'diana magar',
        imageLink:'https://exampleimage.com',
        isprincipal: false,
        isviceprincipal:false,
        subjectList: ['BCA', 'computer-security'],
        address:'belbas',
        iscorrdinator:'false',
    },
    {
        id:3,
         memberName:'samikshya bhushal',
        imageLink:'https://exampleimage.com',
        isprincipal: false,
        isviceprincipal:false,
        subjectList: ['BCA', 'computer-security'],
        address:'butwal',
        iscorrdinator:'false',
    },
    {
        id:4,
         memberName:'prashansha neupane',
        imageLink:'https://exampleimage.com',
        isprincipal: false,
        isviceprincipal:false,
        subjectList: ['BCA', 'computer-security'],
        address:'butwal',
        iscorrdinator:'false',
    },
    {
        
        id:4,
        memberName:'shreeya pun',
        imageLink:'https://exampleimage.com',
        isprincipal: false,
        isviceprincipal:false,
        subjectList: ['BCA', 'E-commerce'],
        address:'manigram',
        iscorrdinator:'false',
    },
]

for(i=0; i<myFriendList.length;i++){
// console.log(myFriendList[i].id);
// console.log(myFriendList[i].memberName);
// console.log(myFriendList[i].imageLink);
// console.log(myFriendList[i].isprincipal);
// console.log(myFriendList[i].isviceprincipal);
// console.log(myFriendList[i].subjectList);
// console.log(myFriendList[i].address);
// console.log(myFriendList[i].iscorrdinator);
let {id,memberName,imageLink,isprincipal,isviceprincipal,subjectList,address,iscorrdinator}=myFriendList[i];
console.log(`${id}<->${memberName}<->${id}<->${imageLink}<->${id}<->${isprincipal}<->${id}<->${isviceprincipal}`);
};

let nestedObject = {
    address: {
        from: {
            permanent: 'nepal',
            temporary: 'sayanja',
        },
    },
};


let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} ->${temporary}`);
