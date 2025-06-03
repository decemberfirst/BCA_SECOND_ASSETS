// array practice


// -----------------push method---/ to add a new element to the pet array, we can use the following code:
// const pet =["cat","dog,","bunny"]
// pet.push("parrot");
// console.log(pet)


// ---------------pop method ----/ to remove the last element from the array

// const pet =["car","dog","rabbit"];
// pet.pop();
// console.log(pet)


// Given the following JavaScript code, what will be the output after executing the code snippet?

// const animals =["bear","tiger","lion"]
// animals.push("rhino","elephant");
// const removed = animals.pop();
// console.log(animals);
// console.log(removed)


// ----------------------
// let userName ="sushant"
// userName= userName.repeat(5)//how many times i want to repeat
// userName=userName.length //to find the lenght of a value
// userName=userName.toLowerCase //to make the string to uppercase or toLowerCase  for lower case


// ----------------MODIFYING ARRAYS-------------------------
// let fruits = ["apple","banana","mango","grape"]
// fruits[0] ="strawberry" // straweberry will replace apple
// console.log(fruits)

// let fruits = ["apple","banana","mango","grape"]
// console.log(fruits[2])

// --------------------------replace values
// let phoneNumnber ="123-456-789";
// phoneNumnber =phoneNumnber.replaceAll("-","")  // here i replace all the -. or i can replace any number with different characters
// console.log(phoneNumnber)

// --------------------INDEX OF----------------
// let uName ="hello my name is sushant and"
// console.log(uName.indexOf("sushant"))

// -------------------SLICE AND SPLICE-------ONE OF THE COMPLEX METHOD IN ARRAYS

// ------------------------------------SLICE----------------------->

// let birds =['crow','pigeon','owl','eagle']
// let newBirds =birds.slice(1,3)
// console.log(birds.slice(0,2))


// -----------SLICE EXERCISES-------------------
// Given: Task: Create a new array that contains [20, 30, 40] using slice().
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(1,4))


// // Given: Task: Get the first two elements using slice()

// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors.slice(0,2))

// Given: Task: Get the last 3 elements using slice()
// let nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.slice(-3)) //-3 will give you last 3 elements


// Given:  Task: Use slice() to get ["rabbit", "parrot"] using negative indexes.
// let animals = ["cat", "dog", "rabbit", "parrot", "hamster"];
// console.log(animals.slice(-3, -1))


// Given:
// Task: Use slice to create a new array from index 1 to 3.
// Then print both arrays to prove the original is not changed.
// let original = [100, 200, 300, 400];
// let arr =original.slice(1,3)
// console.log("original" ,original);
// console.log("arr" ,arr);

// Given:Task: Use slice() to make a full copy of the array
// let data = [1, 2, 3, 4];
// let array2 =data.slice() // using() will return full copy of the entire array
// console.log(array2)


// let hisName = "eren yeager";
// let hisNameArray =hisName.slice(3,8)
// console.log(hisNameArray) // returns n yea--- counts even space to

// -------------------------------SPLICE-----------------------------
// ------SPLICE CHANGE ORIGINAL ARRAYS-->(ADD,REMOVE,REPLACE)
//  1. Remove elements
// let arr = [10, 20, 30, 40, 50];
// arr.splice(2, 2);  // Start at index 2, remove 2 items

// console.log(arr);  // [10, 20, 50]

// let arr1 = [1,2,3,4,5,6,7,8,9]
// arr1.splice(3,2,103,104,105) //it removes from index 3 to 2 numbers and add new numbers
// console.log(arr1)

//  2. Add elements
// let arr2 = [10, 20, 50];
// arr2.splice(2, 0, 30, 40);  // Insert 30, 40 at index 2

// --------------another exercise of adding elements
// let arrAdd = [10,20,30,40,50];
// arrAdd.splice(2,0,22,25,28)
// console.log(arrAdd)

// --------> Adding element at last
// let arrAdd1 =[11,22,33,44]
// arrAdd1.splice(4,0,100,200)
// console.log(arrAdd1)

// console.log(arr2);  // [10, 20, 30, 40, 50]

// // 3. Replace elements
// let arr3 = [10, 20, 99, 100];
// arr3.splice(2, 2, 30, 40); // Remove 99, 100, add 30, 40
// console.log(arr3);  // [10, 20, 30, 40]


// -----------------------practice another-----------
// let arr_replace = [20,30,40,50,60]
// arr_replace.splice(1,3,100,200,300)
// console.log(arr_replace)


// // 4. Get removed items
// let arr4 = [1, 2, 3, 4, 5];
// let removed = arr4.splice(1, 2);  // Removes 2 and 3

// console.log(removed); // [2, 3]
// console.log(arr4);     // [1, 4, 5]

// -------- remove practice
// 1
// let arr_rem = [20,30,40,50,60]
// arr_rem.splice(1,3)
// console.log(arr_rem);

// 2
// let arr_rem1 =[1,2,3,4,5,6,7,8,9,10,11,12]
// arr_rem1.splice(2,5) //--> what it does is it removes from index 2 to 5 for eg here it removes--------->3,4,5,6,7
// console.log(arr_rem1);



// -------------------- 10 splice questions for practice------------------------
// 1) Insert "orange" at index 2 in this array: ["apple", "banana", "mango", "grape"].
// let fruits = ["apple", "banana", "mango", "grape"]
// fruits.splice(2,0,"orange")
// console.log(fruits)

//2) Remove 1 element from index 3 in this array: ["a", "b", "c", "d", "e"].
// let characters = ["a", "b", "c", "d", "e"];
// characters.splice(3,1)
//  console.log(characters);
 

// 3)Replace "banana" with "kiwi" in this array: ["apple", "banana", "mango"].
// let fruits2 = ["apple", "banana", "mango"]
// fruits2.splice(1,1,"kiwi")
// console.log(fruits2);


// 4) Insert "x", "y" at index 1 in this array: [10, 20, 30, 40].
// let XandY = [10, 20, 30, 40];
// XandY.splice(1,0,"x","y")
// console.log(XandY);


// 5) Remove the last 2 elements using .splice() in: [1, 2, 3, 4, 5, 6].
    //    let elems = [1, 2, 3, 4, 5, 6]
    //    elems.splice(4,2)
    //    console.log(elems);
                   

// 6) Remove all elements starting from index 2 in: ["one", "two", "three", "four", "five"].
        //    let nums = ["one", "two", "three", "four", "five"]
        //    nums.splice(2)  //------> remove all the elements after index 2
        //    console.log(nums);
           

// 7)Replace two elements at index 1 with "new1" and "new2" in: [100, 200, 300, 400].

// let replace_element = [100, 200, 300, 400]
// replace_element.splice(1,2,"new1","new2")
// console.log(replace_element)

// 8)Insert "start" at the beginning of this array using .splice(): ["middle", "end"].

// let insert =  ["middle", "end"]
// insert.splice(0,0,"start")
// console.log(insert)

// 9)Remove everything except the first element using .splice() in: [5, 10, 15, 20, 25].
// let element_first = [5, 10, 15, 20, 25];
// element_first.splice(1)
// console.log(element_first)

// 10)Insert "a", "b", "c" at index 2 without deleting anything in: [0, 1, 2, 3, 4].
// let numberTo4 = [0, 1, 2, 3, 4]
// numberTo4.splice(2,0,"a","b","c")
// console.log(numberTo4)



// object practice


// const person = {
//   firstName: "erennnn",
//   lastName: "yeaggggerrrrrr",
//   age: 19,
//   hobbies: ["reading", "gaming", "hiking"],
//   address: {
//     street: "everest street",
//     city: "manigram",
//     zipCode: 54321
//   }
// };


// console.log(person.firstName); 
// console.log(person.address.city);

// // Updating age
// person.age = 26;

// // Add new property
// person.job = "Student";


// console.log(person.address.zipCode); 
