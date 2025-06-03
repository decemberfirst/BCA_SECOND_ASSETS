// push is used to add new value -add value at last
// pop is used to remove value from last
// shift is used to remove value from first
// unshift is used to add value from first
// lenght is used to see total number of value


// let myStudentList = ['sushant', 'kumar', 'anuj', 'kamlesh']
// console.log(myStudentList[1]);
// console.log(myStudentList.length);
// myStudentList.push('my new value');
// console.log(myStudentList);
// console.log(myStudentList.length)


// assingment
// let myFriends =["kumar","anuj", "kamlesh","sujan"];
// console.log(myFriends[0]);
// myFriends.push("aman");
// console.log(myFriends[1]);
// myFriends.push("aasish");
// console.log(myFriends[2]);
// myFriends.push("abishek");
// console.log(myFriends[3]);
// myFriends.push("yamal");
// console.log(myFriends[4]);
// myFriends.push("pedri");
// console.log(myFriends[5]);
// myFriends.push("gavi");
// console.log(myFriends[6]);
// myFriends.push("cubarsi");
// console.log(myFriends);


/*let nameList =['sushant','atal','santosh'];
let poppedvalue =nameList.pop();//remove from last
console.log(nameList);//['sushant','atal']
console.log(poppedvalue)//print removed value--'santosh'

let removedValue =nameList.shift(); //remove from first
console.log(removedValue)

nameList.unshift('added on first'); //add on first place
console.log(nameList)*/


// let playerName =['balde','kounde','inigo','garcia','araujo'];
// // console.log(playerName)
// let removedPlayers =playerName.shift();//first name will be removed
// console.log(playerName);
// playerName.unshift('fort');
// console.log(playerName);



// --------------------------------------------------
// let myArray =[1,2,3,4,5,6,7,8,9,10];
// console.log(myArray[myArray.length-1]);
// console.log(myArray.indexOf(5));
// console.log(myArray.lastIndexOf(5));

// myArray[myArray.indexOf(6)]=16;
// console.log(myArray);

// let myArrayChunk =myArray.slice(2,5); //this print value from 2 to 5 (last-1) 5-1
// console.log(myArrayChunk)

// console.log(myArray)

// myArray.splice(0,3);
// console.log(myArray)

//   -----------------------ARRAY DESTRUCTING--------------------
// let [first, second, third] =['ram', 'shyam','hari','sita'];

// console.log(first);
// console.log(third);


// let [fifth, , ,eighth] =['atal','santosh','roshan','alvarez',]
// console.log(fifth);
// console.log(eighth);

// -----------------ARRAY SPREAD----------------------

// let firstArray =[1,2,3,4,5,];
// let secondArray =[6,7,8,9,10];

// let joinedArray =[...firstArray, ...secondArray];
// console.log(joinedArray)

// console.log(...firstArray, ...secondArray)

// // -------------------rest operator---------- ...(3 dot are used in front and most be in last )
// // rest operator are used in last and add values of all the variables
// let [muslim, catholic, ...hindu] =['allah', 'jesus', 'shiva', 'krishna','bishnu','sarswati']

// console.log(hindu)


// ----------------------------ARRAY DESTRUCTING-----------
// let [name, caste, race, religion] =['aasish','bhandari','brown','hindu'];

// console.log(caste);
// console.log(race);


// let [china,,,nepal] =['chinese','indian','japanese','nepali'];
// console.log(china);
// console.log(nepal);


// -----------------array spread--------------- used to connect two diffrent variables

// let arrayOne ="123456789";
// let arrayTwo ="987654321";
// let arrayAdd=[...arrayOne, ...arrayTwo];
// console.log(arrayAdd)