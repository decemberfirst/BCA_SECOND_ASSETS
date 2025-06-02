let AnimalInformation = {
  animalType: "Mammals",
  animalHabitat: "House",
  animalName: {
    scientific: {
      name: "HOMO_SAPIENS",
    },
    callable: {
      name: "HUMAN", // Destrucuture animalType, animalName, scientific name, callable name
    },
  },
};

let {
  animalType,
  animalName: {
    scientific: { name: scientificName }, //ALIAS ...........
    callable: { name: callableName },
  },
} = AnimalInformation;
console.log(animalType);
console.log(callableName);

let MemberList = {
  memberId: "A100",
  memberRole: "Admin",
  memberDetails: {
    memberPersonalDetails: {
      firstName: "Ram",
      lastName: "Sharma",
      from: "Butwal",
      isMarried: true,
    },
    memberFamilyDetails: {
      infantsDetails: {
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
// To...do ... print memberRole, memberFirstName, first children name and first children address name ...

let {
  memberId,

  memberRole,

  memberDetails: {
    memberPersonalDetails: { firstName },
    memberFamilyDetails: {
      infantsDetails: {
        firstChildren: {
          name: childrenName,
          address: { name: addressName },
        },
      },
    },
  },
} = MemberList;
console.log(firstName);
console.log(childrenName);
console.log(addressName);
