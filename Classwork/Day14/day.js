// for(let count=1; count<=100; count++){
//     console.log(count);
// }


// let a = Number(prompt('Enter first number '));
// let b = Number(prompt('Enter second number '));
// for (let count=a; count<=b; count++){
//     console.log(count)
// }    if (count % 2 ==1 ){
//     console.log(count);
// }
    

// let a = Number(prompt('Enter the number'))
// let b = Number(prompt('Enter the number'))
//  for( let count=a; count<=b; count++){
//     if (count % 2 ==1 ){
//         console.log(count);
//     }
    
//  }









//  ---------------------------Switch case-----------------------------------
// EXACTLY SAME AS IF ELSE IF
// ONLY SYNTACTIC SUGAR (ANOTHER SYNTAX FOR IF ELSE)



// let matchTheName = 'Aashish';
// switch(matchTheName){
//     case'Aashish':
//     console.log('Cash for Aashish');
//     break;
//     case'Bishal':
//     console.log('Case for Bishal Matched');
//     break;
//     case'Roshan':
//     console.log('case for not Mached');
//     break;
// }

// let a =Number(prompt('Enter the number'));
// let b =Number(prompt('Enter the number'));
// let opperation= '/';
// switch(opperation){
//     case'-':
//     console.log(`${a-b}`);
//     break;

//     case'*':
//     console.log(`${a*b}`);
//     break;

//     case'/':
//     console.log(`${a/b}`);
//     if(a==0){
//         console.log('error');
//     }
//     break;

//     case'%':
//     console.log(`${a%b}`);
    
//     default:
//     console.log('error');
// }
    




// let amout=100000;
// let run=true;

// while(run){
//     let action= Number(prompt('Enter 1 for diplaying blance Enter 2 for deposit money Enter 3 for withdraw Enter 4 for exit '));
    

//     switch(action){
//         case 1:
//             alert(amout)
//             break;
//         case 2:
//             let deposit=Number(prompt('Enter amount of money for deposit'));
//             amout+=deposit;
//             break;
//         case 3:
//             let withdraw=Number(prompt('Enter amount of money to withdraw'));
//             if (withdraw<=amout){
//                 amout-=withdraw;
//             }
//             else{
//                 alert('Enter subcent amount')
//             }
//             break;
//         case 4:
//             run=false;
//             break;

//         default:
//             alert('Enter right action')
//     }

// }
 

