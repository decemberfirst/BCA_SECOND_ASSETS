// Array :collection of items
// examples:

// push  (add to end)

let listofstudent=['name','rollno','address']
console.log(listofstudent[0]);
console.log(listofstudent[1]);
console.log(listofstudent[2]);

listofstudent.push('phone no');
console.log(listofstudent[3]);

// POP  (delete from end and return)

let listofname=['riya','priya','reha'];
let popedvalue=listofname.pop();
console.log(listofname);
console.log(popedvalue);

// SHIFT  (add to start)

let removedvalue=listofname.shift();
console.log(removedvalue);

// UNSHIFT  (delete from start and return)

listofname.unshift('added on first');
console.log(listofname);

// SLICE  (return a piece of array)
let myarraychunk=myarray.slice(20,50); //(start,end -1),immutiable
console.log(myarraychunk);
console.log(myarraychunk);

// SPLICE  (change original array)

myarraychunk.splice(0,3); 
console.log(myarraychunk);

// ARRAY DETURCTION  (extracts values from an arrays into variable)

let [first, , , fourth] =['ram','shyam','hari','sita'];
console.log(first);
console.log(fourth);

// ARRAY SPREAD  (... expands an array elements )
let[First, second, ...rest]=['ram','shyam','hari','sita']
console.log(...rest);

// iteration  ()

let myNumbers=['10','20','30','40','50'];
let sum=0;
for( let index =0; index<myNumbers ;index++);{
    sum=sum+myNumbers[index];
}
console.log(sum);

// OBJECT 

// ARRAY : STORING ORDER LIST OF ITEMS 
// OBJECTS : STORING KEY VALUES PAIRS (unppaired)

let student = {
    name:'prashansha',
    age:'20',
    country:'nepal',
    number:'9746373848',
};
console.log(student.name);
console.log(student.age);
console.log(student.country);
console.log(student.number);

let anothername={
    'first name':'anisha',
    'last name':'chhantel',
};
console.log(anothername['first name']);
console.log(anothername['last name']);
let thirdobject={
    name:'shreeya',
    address:'manigram',
    rollno:'26',
};
console.log(thirdobject);

// ..............OBJECT DESTRUCTION.........

syntax:
let variablename={
   key: value,
   key: value
}

let{
    address:myaddress, //alias
    name,
    doesnotexist,
}={
    // order doesnot matter
    name:'anisha',
    address:'manigram',

};
console.log(myaddress);
