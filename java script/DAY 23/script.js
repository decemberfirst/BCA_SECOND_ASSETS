 let myProjectmember = [
    {
        id:1,
        memberName: 'Chintan kharal',
     imagelink: ' https://exampleimage.com',
     isBoss:  true,
     isManager:false,
     languagelist :[ " js", 'python', 'csharp'],
     address:' nayamill',
    },
     {
        id:2,
        memberName: 'Agraj  adhikari',
     imagelink: ' https://exampleimage.com',
     isBoss:  false,
     isManager:true,
     languagelist :[ " js", 'python'," c++"],
     address:' nayamill',
    },
    {
        id:3,
        memberName: 'Buddhiraj biswakarma',
     imagelink: ' https://exampleimage.com',
     isBoss:  false,
     isManager:false,
     languagelist :[ " js", 'python'," c++"],
     address:' buddhanagar',
     isassistantmanager :true,    },

     {
        id:4,
        memberName: 'rajesh sale',
     imagelink: ' https://exampleimage.com',
     isBoss:  false,
     isManager:true,
     languagelist :[ " js", 'python'," c++"],
     address:' nayamill',
    },
    {
        id:5,
        memberName: ' mausam   rimal',
     imagelink: ' https://exampleimage.com',
     isBoss:  false,
     isManager:true,
     languagelist :[ " js", 'python'," c++"],
     address:'  gulmi',
    },

 ]
  for(i=0; i<myProjectmember.length; i++)
//   console.log(myProjectmember[i]);
//  console.log(myProjectmember[i].id);
//   console.log(myProjectmember[i].memberName);
//    console.log(myProjectmember[i].imagelink);
//     console.log(myProjectmember[i].isBoss);
//      console.log(myProjectmember[i].address);
//   }



{
    let{id,memberName,address,languagelist} = myProjectmember[i];
    console.log(`${id}<->${ memberName} <->${languagelist}`);
    
}