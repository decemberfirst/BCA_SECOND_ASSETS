
let nestedObject = {
    address : {
        from : {
            permanent : "usa",
            temporary : "philipin"
        },
    },
};
let entry = Object.entries(nestedObject.address.from);
for(let m = 0; m<entry.length;m++){
    let[keys,values] = entry[m];
      console.log(`${keys} : ${values}`);
    

};