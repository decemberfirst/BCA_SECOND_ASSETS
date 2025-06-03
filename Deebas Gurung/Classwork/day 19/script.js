//...............................ITERATING OVER ARRAY.......................................
// let numbers=[1,2,3,4,5];
// let sum=0;
// for(let i=0; i<numbers.length;i++){
// sum=sum+numbers[i];
// }
// console.log(sum);


// let mylist=[100,101,103,104,105];
// let sum=0;
// for(let i=0; i<mylist.length; i++){
//     if(mylist[i]%2==0){
// sum=sum+mylist[i]
//     }
// }
// console.log(sum);

// let mylist2=[1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010];
// let sum=0;
// for(let i=0;i<mylist2.length; i++){
//     if(mylist2[i]%2 !=0){
//         sum=sum+mylist2[i];
//     }
// }
// console.log(sum);


// let [a,b,c,d,e]=[499,100,1000,2,10];
// if(a>b && a>c && a>d && a>e){
//     console.log(`${a} is greatest`);
// }else if(b>a && b>c && b>d && b>e){
//     console.log(`${b} is greatest`);
// }else if(c>a && c>b && c>d && c>e){
//     console.log(`${c} is greatest`);
// }else if(d>a && d>b && d>c && d>e){
//     console.log(`${d} is greatest`);
// }else{
//     console.log(`${e} is greatest`);
// }

// let mynumbers=[499,100,1000,2,10];
// let greatest=0;
// for(let i=0;i<mynumbers.length;i++){
//     if(mynumbers[i]>greatest){
//         greatest= mynumbers[i];
//     }
// }
// console.log(greatest);

// let num=[499,100,1000,2,10];
// let smallest=num[0];
// for(let i=0; i<num;i++){
//     if(num[i]<smallest){
//         smallest=num[i];
//     }
// }
// console.log(smallest);

// let num=[499,100,1000,2,10];
// let greatest=0;
// let smallest=num[0];
// for(let i=0; i<num ; i++){
//     if(num[i]>greatest){
//         greatest=num[i];
//     }else if(num[i]<smallest){
//         smallest=num[i]
//     }
// }
// console.log(greatest);
// console.log(smallest);


// let num1=[1,2,3,4,5];
// let revnum=[];
// for(let i=0; i<num1.length; i++){
//     revnum.unshift(num)
// }



//.............ASSIGNMENT.........................

// let girlname=['anjel', 'nisha','nistha'];
// let poppedvalue=girlname.pop();
// console.log(poppedvalue);
// console.log(girlname);

// girlname.unshift('isha');
// console.log(girlname);

// girlname.shift();
// console.log(girlname);

// let num=[2,4,6,8,10,12,14,16,18,20];
// console.log(num.length-1);
// console.log(num.indexOf(10));
// console.log(num.lastIndexOf(14));

// num[num.indexOf(8)]=25;
// console.log(num);

// let numcut=num.slice(2,5);
// console.log(numcut);

// num.splice(0,6);
// console.log(num);

// ..............ARRAY DESTRUCTURING...........................
// let[first,,,fourth]=['patience','respect','understanding','loyalty'];
// console.log(first);
// console.log(fourth);

// let[first,second,...rest]=['patience','respect','understanding','loyalty'];
// console.log(first);
// console.log(second);
// console.log(...rest);

//................ARRAY SPREAD.............
// let firstArray1=[1,2,3,4,5];
// let secondArray1=[6,7,8,9,10];
// let joinedArray2=[...firstArray1,...secondArray1];
// console.log(...firstArray1);
// console.log(joinedArray2);




//...............Iterating Array...................
// let num2=[1,2,3,4,5];
// let sum=0;
// for(let index=0;index<num2.length;index++){
//     sum=sum+num2[index];
// }
// console.log(sum);


// let num3=[100,101,103,104,105];
// let sum=0;
// for(let index=0; index<num3.length;index++){
//     if(num3[index]%2==0){
//         sum=sum+num3[index];
//     }
// }
// console.log(sum);

// let mylist3=[500,501,502,503,504,505];
// let sum=0;
// for(let index=0; index<mylist3.length;index++){
//     if(mylist3[index]%2 !=0){
//         sum=sum+mylist3[index];
//     }
// }

// console.log(sum);

// let mylist4=[500,501,506,503,504,505];
// let greatest=0;
// for(let index=0;index<mylist4.length;index++){
//     if(mylist4[index]>greatest){
//         greatest=mylist4[index];
//     }
// }
// console.log(greatest);

// let mylist5=[500,501,506,503,504,505];
// let smallest=mylist5[0];
// for(let index=0; index<mylist5.length; index++){
//     if(mylist5[index]<smallest){
//         smallest=mylist5[index];
//     }
// }
// console.log(smallest);



