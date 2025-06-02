let myCollegeMemberList =[
    {
        id:1,
        Name:'Aashish Bhandari',
        Student:true,
        isStudent:true,
        subject:['C-Program','computer-Security'],
        address:'Manigram',
        isCoodinator:false,

    },
{
     id:2,
        Name:'Sushant Bk',
        Student:true,
        isStudent:true,
        subject:['CFA','Maths'],
        address:'Butwal',
        isCoodinator:false,
},

  {
    id:3,
        Name :'Suraj Dumre ',
        
        isStudent:true,
        subject:['Digital-logy'],
        address:'Manigram',
        isCoodinator:false,

 },

   {
    id:4,
        Name :'Bishal Neupane ',
        
        isStudent:true,
        subject:['Science'],
        address:'Bhumahi',
        isCoodinator:false,

 },

   {
    id:5,
        Name :'Binay Adhakari ',
        
        isStudent:true,
        subject:['Account'],
        address:'Manigram',
        isCoodinator:false,

 },


]

// for(let i=0; i<myCollegeMemberList.length; i++){
//     console.log(myCollegeMemberList[i].id)
//     console.log(myCollegeMemberList[i].address)
//     console.log(myCollegeMemberList[i].subject)
//     console.log(myCollegeMemberList[i].Name)
// }


for(let i=0; i<myCollegeMemberList.length;i++){
    let {memerName,address,isCoodinator}=myCollegeMemberList[i];
    console.log(memerName);
    console.log(address);
    console.log(isCoodinator);

}



