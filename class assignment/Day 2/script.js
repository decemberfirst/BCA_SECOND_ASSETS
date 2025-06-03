// TODO:
// CREATE ONE PERSON OBJECT WITH NAME -> FIRST NAME, LAST NAME, ADDRESS -> TEMPORARY AND PERMANENT ADDRESS,
// COPY PERSON OBJECT TO THREE DIFFERENT VARIABLES
// MAKE SURE THAT CHANGE IN ONE OBJECT PROPERTY DOESNOT REFLECT TO ANOTHER ONE


let personObj = {
  name: {
    firstName: "eren",
    lastName: "yeager"
  },
  address: {
    permanent: "japan",
    temporary: "nepal"
  }
};

// Deep copy using structuredClone
let personCopy1 = structuredClone(personObj);
let personCopy2 = structuredClone(personObj);
let personCopy3 = structuredClone(personObj);

// Change properties in each copy
personCopy1.name.firstName = "mikasa";
personCopy2.address.temporary = "paradise island";
personCopy3.name.lastName = "ackerman";

// Print all objects to show changes do not affect others
console.log("Original:", personObj);
console.log("Copy 1:", personCopy1);
console.log("Copy 2:", personCopy2);
console.log("Copy 3:", personCopy3);