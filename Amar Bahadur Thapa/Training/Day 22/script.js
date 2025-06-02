// let myPersonList = [1, 2, 3, 4, 5];
// for(let i = 0; i<myPersonList.length; i++){
//     console.log(myPersonList[i]);
// }

// JSON -->> JAVASCRIPT OBJECT NOTATION

let myCollegeMemberList = [
    {
        id: 1,
        memberName: 'Sanjeev Bhandari',
        imageLink: 'https://www.nepathyacollege.edu.np/assets/sanjeev3.1-9759d81f.png',
        isPrincipal: true,
        isViceprinciple: false,
        subjectList: ['E-commerce', 'Computer-Security'],
        address: 'Manigram',
        isCoordinator: false,
    },

    {
        id: 2,
        memberName: 'Shiva Bhattari',
        imageLink: 'https://www.nepathyacollege.edu.np/assets/about5-602a8fea.png',
        isPrincipal: false,
        isViceprinciple: true,
        subjectList: ['Computer Application', 'Computer-Security'],
        address: 'Manigram',
        isCoordinator: false,
    },

    {
        id: 3,
        memberName: 'Arun shahani',
        imageLink: 'https://www.google.com/imgres?q=nepathya%20college%20arun%20sahani&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1984486028406345&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fnepathyacollege%2Fposts%2Fwishing-you-the-best-and-plenty-of-success-in-your-new-role-congratulations-arun%2F1984486088406339%2F&docid=W5xbBjmwxD_8FM&tbnid=LjkzAW3zaesYIM&vet=12ahUKEwjdir654c-NAxXBZ2wGHSckEHwQM3oECBQQAA..i&w=1440&h=810&hcb=2&ved=2ahUKEwjdir654c-NAxXBZ2wGHSckEHwQM3oECBQQAA',
        isPrincipal: false,
        isViceprinciple: false,
        subjectList: ['Math', 'Opt.Math'],
        address: 'Manigram',
        isCoordinator: true,   
    }, 

    {
        id: 4,
        memberName: 'Narayan Tiwari',
        imageLink: 'https://www.nepathyacollege.edu.np/assets/about5-602a8fea.png',
        isPrincipal: false,
        isViceprinciple: false,
        subjectList: ['Digital logic', 'Math'],
        address: 'Manigram',
        isCoordinator: false,
    },

    {
        id: 5,
        memberName: 'Sabal Bhusal',
        imageLink: 'https://www.nepathyacollege.edu.np/assets/about5-602a8fea.png',
        isPrincipal: false,
        isViceprinciple: false,
        subjectList: ['Microprocessor 8085', 'Math'],
        address: 'Manigram',
        isCoordinator: false,
    }
];
// for(let i = 0; i<myCollegeMemberList.length; i++){
//     console.log(myCollegeMemberList[i].id);
//     console.log(myCollegeMemberList[i].memberName);
//     console.log(myCollegeMemberList[i].imageLink);
//     console.log(myCollegeMemberList[i].isPrincipal);
//     console.log(myCollegeMemberList[i].isViceprinciple);
//     console.log(myCollegeMemberList[i].subjectList);
//     console.log(myCollegeMemberList[i].address);
//     console.log(myCollegeMemberList[i].isCoordinator);
//     console.log('-------------------------------------------');
// }

for(let i = 0; i<myCollegeMemberList.length; i++){
    let{memberName, isPrincipal, address} = myCollegeMemberList[i];
    console.log(memberName);
    console.log(isPrincipal);
    console.log(address);
    console.log('------------------------------------------');
}