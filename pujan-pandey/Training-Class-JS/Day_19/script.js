// //print each keys and values for the given objects
// //Loop in object
// let myPerson={
//     name:'Raaman',
//     age:21,
//     contact:9825,
//     address:'Japan'
// }
// let newKey=(Object.keys(myPerson));//output is in array, only keys
// let newValue=(Object.values(myPerson));//output is in array, only values
// let myEntries=Object.entries(myPerson);

// //first method
// for(let i=0;i<myEntries.length;i++){
//  let[key,value]=(myEntries[i]);
//  console.log(`${key}:${value}`)
// }
// // for(let i=0;i<newKey.length;i++){
// //     console.log(newKey[i]);//print each key
// // }
// // for(let i=0;i<newValue.length;i++){
// //     console.log(newValue[i]);//print each value
// // }


// //second method
// // for(let [key,value] of Object.entries(myPerson)){
// //     console.log(`${key}:${value}`)
// // }




//Ps Qn

// let person={
//     name:{
//         firstName:'Raman',
//         middleName:'Bahadur',
//         lastName:'Thapa'
//     },
//     address:{
//         temporaryAddress:'Palpa',
//         permanentAddress:'Syangja',
//     },
//     'favourite color':{
//       color:['red','green','pink']
//     },
//     parents:{
//         father:'Shyamlal Thapa',
//         mother:'Dipa Thapa',
//     }
// }
// console.log(person.name.firstName)
// console.log(person.name.middleName)
// console.log(person.name.lastName)
// console.log(person.address.temporaryAddress)
// console.log(person.address.permanentAddress)
// let arr=(person['favourite color'].color)
// for(let i=0;i<arr.length;i++){
// console.log(arr[i])
// }
// console.log(person.parents.father)
// console.log(person.parents.mother)

// let myObject={
//     name:'Amar',
//     age:34,
//     sector:'Private',
//     schooling:'Manakamana H.S.S',
//     bachelors:'Nepathya College',
//     masters:'MCA',
// }
// let obj=Object.entries(myObject);
// console.log(obj);
// for(i=0;i<obj.length;i++){
//     let[key,value]=obj[i];
//     console.log(`${key}:${value}`)
// }



//Prime Number 
// let myNumber=139;
// let isPrime=true;
// for(i=2;i<myNumber-1;i++){
//     if(myNumber%i==0){
//         isPrime=false;
//     }
// }
// if(isPrime){
// console.log(myNumber, 'is a prime Number');
// }else{
    // console.log(myNumber,"is a Composite Number");
// }


let obj={
    Class:9,
    RollNo:21,
    Section:'b',
    details(){
        console.log('Class:',this.Class, 'RollNo:',this.RollNo, 'Section:',this.Section)
    }
}
obj.details();
obj.Class='bachelors';
obj.RollNo=32;
obj.details();
