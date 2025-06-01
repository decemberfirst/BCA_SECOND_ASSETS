// TO - DO --- Now destructive permanent and Temporary.....

let nestedobject = {
  address: {
    from: {
      permanent: "Nepal",
      temporary: "India",
    },
  },
};
// console.log(nestedobject.address.from.temporary);

let {
  address: {
    from: { permanent, temporary },
  },
} = nestedobject;
console.log(permanent);
console.log(temporary);
