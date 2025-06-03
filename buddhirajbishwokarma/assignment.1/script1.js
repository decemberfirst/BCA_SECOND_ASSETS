let nestedObject ={
    address:{
        from:{
            permanent : "Nepal",
            temporary : " India"
        },
    },
};

let think = Object.entries(nestedObject.address.from);
for(let i = 0; i<think.length; i++){
    let [key,value] = think[i];
   console.log(`The Key IS :${key} and Valu IS : ${value}`)
};



let think1 = Object.values(nestedObject.address.from);
for(let i = 0; i<think1.length; i++){
    let value = think1[i];
   console.log(`The Valu IS : ${value}`);
}



