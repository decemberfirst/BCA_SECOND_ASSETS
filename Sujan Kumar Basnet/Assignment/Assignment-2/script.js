let FamilyInformation={
    noofpeople:4,
    Oldest:'Suman Kumar Basnet',
    Parents:{
        fathername:{
            name:'Tek Bahadur Basnet',
        },
        mothername:{
            name:'Ghan Kumari Basnet',
     },
    },
    Sibling:{
        name:'Sujan kumar Basnet',
    }
};

let {Oldest,
    parents:{fathername:{name:Aapaname},mothername:{name:Aamaname}},
    sibling:{name:brothername},
}={
    noofpeople:4,
    Oldest:'Suman Kumar Basnet',
    parents:{
        fathername:{
            name:'Tek Bahadur Basnet',
        },
        mothername:{
            name:'Ghan Kumari Basnet',
     },
    },
    sibling:{
        name:'Sujan Kumar Basnet',
    }
};

console.log(Oldest);
console.log(Aapaname);
console.log(Aamaname);
console.log(brothername);




let studentlist={
    studentbatch:'2081',
    classdetails:{
        classteacherdetails:{
            firstname:'Shiva',
            lastname:'Bhattrai',
            from:'Manigram',
            ismarried:true,
        },
       trainerdetails: {
        personaldetails:{
        name:'Rohan Tiwari',
        name:'Alex Bhusal',
        coursedetails:{
            name:'BCA',
            sem:{
                name:'sixth',
            },
        },
       },
        },

    },
};

let {studentbatch,
    classdetails:{classteacherdetails:{firstname},classteacherdetails:{lastname}},
    classdetails:{trainerdetails:{personaldetails:{trainername: rohandai,trainername:alexdai}}},
    classdetails:{trainerdetails:{personaldetails:{coursedetails:{name:coursename}}}},
}={
    studentbatch:'2081',
    classdetails:{
        classteacherdetails:{
            firstname:'Shiva',
            lastname:'BHattrai',
            from:'Manigram',
            ismarried:true,
        },
       trainerdetails: {
        personaldetails:{
        trainername:'Rohan Tiwari',
        trainername:'Alex Bhusal',
        coursedetails:{
            name:'Bca',
            sem:{
                name:'sixth',
            },
        },
       },
        },

    },
};

console.log(studentbatch);
console.log(`${firstname}${lastname}`);
console.log(rohandai);
console.log(alexdai);
console.log(coursename);
