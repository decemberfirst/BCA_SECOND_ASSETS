let nestedObject={
    address:{
        from:{
            permanent:'Nepal',
            temporary:'China',
        }
    }
}
 // console.log(nestedObject.address.from);
    let addressOfTheUser=Object.entries(nestedObject.address.from);
    // console.log(addressOfTheUser);
    for(let i=0; i<addressOfTheUser.length; i++){
        const [ first,second] = addressOfTheUser[i];
        console.log(first);
        console.log(second);
    



    }

