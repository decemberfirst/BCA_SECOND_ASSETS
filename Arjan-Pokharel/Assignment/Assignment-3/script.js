//---------TODO PRINT memberRole, memberFirstName, first children name and first children--

let {
  memberRole,
  memberDetails: {
    memberPersonDetails: { firstName },
    memberFamilyDetails: {
      infantDetails: {
        firstChildren: {
          name: firstChildName,
          ...firstChildren
        }
      }
    }
  }
} = {
  memberId: "A100",
  memberRole: "ADMIN",
  memberDetails: {
    memberPersonDetails: {
      firstName: "ARM",
      lastName: "Kumar",
      from: "Butwal",
      isMarried: true,
    },
    memberFamilyDetails: {
      infantDetails: {
        hasInfants: true,
        numberOfInfants: 2,
        firstChildren: {
          name: "Hari",
          address: {
            name: "Butwal",
          },
        },
      },
    },
  },
};

console.log(memberRole);
console.log(firstName);
console.log(firstChildName);
console.log(firstChildren);     