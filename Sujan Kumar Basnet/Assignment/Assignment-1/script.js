// let myPersonList=[
//     {
//         id:1,
//         name:"Atal Tharu",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Basghadi",
//         phone:9847204752,
//     },
//     {
//         id:2,
//         name:"Sujan Kumar Basnet",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Shankarnagar",
//         phone:9841534125,
//     },
//     {
//         id:3,
//         name:"Gaurav Aryal",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Sainamaina",
//         phone:9767012356,
//     },
//     {
//         id:4,
//         name:"Sushant BK",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Manigram",
//         phone:9848168123,
//     },
//     {
//         id:5,
//         name:"Aryan Jadu",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Kalikanagar",
//         phone:9845845946,
//     },
// ]
// for(let i=0; i<myPersonList.length;i++){
//     console.log(myPersonList[i].id);
//     console.log(myPersonList[i].name);
//     console.log(myPersonList[i].imageLink);
//     console.log(myPersonList[i].isStudent);
//     console.log(myPersonList[i].isTeacher);
//     console.log(myPersonList[i].address);
//     console.log(myPersonList[i].phone);
//     console.log('--------------------------------------------');
// }

// let myPersonList=[
//     {
//         id:1,
//         name:"Atal Tharu",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Basghadi",
//         phone:9847204752,
//     },
//     {
//         id:2,
//         name:"Sujan Kumar Basnet",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Shankarnagar",
//         phone:9841534125,
//     },
//     {
//         id:3,
//         name:"Gaurav Aryal",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Sainamaina",
//         phone:9767012356,
//     },
//     {
//         id:4,
//         name:"Sushant BK",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Manigram",
//         phone:9848168123,
//     },
//     {
//         id:5,
//         name:"Aryan Jadu",
//         imageLink:'http://exampleimage.com',
//         isStudent:true,
//         isTeacher:false,
//         address:"Kalikanagar",
//         phone:9845845946,
//     },
// ]
// for(let i=0; i<myPersonList.length;i++){
//     let {id,name,address}=myPersonList[i];
//     console.log(id);
//     console.log(name);
//     console.log(address);
// }

let classObject={
    add:{
        from:{
            permanent:'Nepal',
            temporary:'Japan',
        },
    },
};
let entries=Object.entries(classObject.add.from);
for(let i=0; i<entries.length; i++){
    let [keys,values]=entries[i];
    console.log(`${keys}: ${values}`);
}