// -----------------BREAK AND CONTINUE----------------------

// BREAK

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// for (let i=1; i<=100; i++) {
//     if (i % 2==0){
//         continue;
//     }else {
//         console.log(i)
//     }
// }

// for (let i=1; i<=100; i++) {
//     if (i % 5==0){
//         continue;
//     }else{
//         console.log(i)
//     }
// }

// for(let i=1; i<=50; i++) {
//     if(i% 6==0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// let userNumber=5;
// let isPrime = true;
// for(let divide=2; divide<=userNumber -1; divide++){
//     if(userNumber % divide==0){
//         isPrime = false;
//     break;
//     }
// }

// if(isPrime){
//     console.log('The number is prime');
// }else{
//     console.log('The number is not prime');
// }


// -----------------ARRAYS---------------------
// let listOfStudent=['abc', 'cde', 'fgh', 'ijk'];
// console.log(listOfStudent[2]);
// listOfStudent.push('new value');
// console.log(listOfStudent);
// console.log(listOfStudent.length);


// ASSIGNMENT
let studentList=['anisha', 'samikshya', 'prashansha', 'shreeya', 'diana'];
console.log(studentList[0]);
console.log(studentList[1]);
console.log(studentList[2]);
console.log(studentList[3]);
console.log(studentList[4]);
console.log(studentList.length);

studentList.push('bhawana');
console.log(studentList[5]);

studentList.push('purnima');
console.log(studentList[6]);

studentList.push('aruna');
console.log(studentList[7]);

studentList.push('ambika');
console.log(studentList[8]);

studentList.push('manisha');
console.log(studentList[9]);

console.log(studentList);
console.log(studentList.length);

