let {
    memberDetalis:{memberpersonalDetails:{firstName}},
    memberDetalis:{memberfamilyDetails:{infantsDetails:{hasInfants}}},
    memberDetalis:{memberfamilyDetails:{infantsDetails:{firstCHildren:{name:manname}}}}
} = {
    memberId:'A100',
    memerROLE:'ADMIN',
    memberDetalis:{
        memberpersonalDetails:{
            firstName:"ram",
            lastName:'NEUPANE',
            from:'butwal',
            ismarried:true,

        },
        memberfamilyDetails:{
            infantsDetails:{
                hasInfants:'true',
                numberOfInfants:2,
                firstCHildren:{
                    Name:'HARI',
                    address:{
                        name:'BUTWAL',
                    },
                },

            },
        },
    },

};
console.log(firstName);
console.log(manname);
