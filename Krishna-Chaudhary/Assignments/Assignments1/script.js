let nestedObject = {
    address : {
        from : {
            permanent : "nepal",
            temporary : "india"
        },
    },
};
let entries = Object.entries(nestedObject.address.from);
for(let m = 0; m<entries.length;m++){
    let[keys,values] = entries[m];
      console.log(`${keys} : ${values}`);
    

};

