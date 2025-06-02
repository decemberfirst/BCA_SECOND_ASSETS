let nestedObject = {
    address : {
        from : {
            permanent : "thailand",
            temporary : "vietnam"
        },
    },
};
let entries = Object.entries(nestedObject.address.from);
for(let i = 0; m<entries.length;i++){
    let[keys,values] = entries[i];
      console.log(`${keys} : ${values}`);
    

};