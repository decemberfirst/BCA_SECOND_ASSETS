// 30 print all the elements that are greatest than a given number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 5;
const result = arr.filter((element) => element > num);
console.log(result); 

//29 find the sum of elements at odd indices
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr1.reduce((acc, curr, index) => {
  if (index % 2 !== 0) {
    return acc + curr;
  }
  return acc;
}, 0);

console.log(sum); 

//28 find the sum of elements at even indices
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum1 = arr2.reduce((acc, curr, index) => {
  if (index % 2 === 0) {
    return acc + curr;
  }
  return acc;
}, 0);
console.log(sum1);


//27 count the number of zeros in an array
const arr3 = [0, 1, 2, 0, 3, 4, 0, 5];
const countZeros = arr3.reduce((acc, curr) => {
  if (curr === 0) {
    return acc + 1;
  }
  return acc;
}, 0);
console.log(countZeros);




//26 sort the array in descending order
const arr4 = [5, 2, 8, 1, 4];
const sortedArr = arr4.sort((a, b) => b - a);
console.log(sortedArr);


//25 sort the array in ascending order
const arr5 = [5, 2, 8, 1, 4];
const sortedArr1 = arr5.sort((a, b) => a - b);
console.log(sortedArr1);


//24 check if an array is sorted in (ascending  or desending) order
const arr6 = [1, 2, 3, 4, 5];
const isSorted = arr6.every((value, index, array) => {
  if (index === 0) return true;
  return value >= array[index - 1];
});
console.log(isSorted);




//23 shift all elements to the left by one position
const arr7 = [1, 2, 3, 4, 5];
const shiftedArr = arr7.slice(1).concat(arr7[0]);
console.log(shiftedArr);


//22 shift all elements to the right by one position
const arr8 = [1, 2, 3, 4, 5];
const shiftedArr1 = [arr8[arr8.length - 1]].concat(arr8.slice(0, arr8.length - 1));
console.log(shiftedArr1);


//21merge two arrays into third array
const arr9 = [1, 2, 3];
const arr10 = [4, 5, 6];
const mergedArr = arr9.concat(arr10);
console.log(mergedArr);





//20 swap the first and last elements of an array
const arr11 = [1, 2, 3, 4, 5];
const swapArr = [...arr11];
swapArr[0] = arr11[arr11.length - 1];
swapArr[arr11.length - 1] = arr11[0];
console.log(swapArr);


//19 find the index of the last occurrence of a given element
const arr12 = [1, 2, 3, 4, 5, 3];
const elementToFind = 3;
const lastIndex = arr12.lastIndexOf(elementToFind);
console.log(lastIndex); 


//18 find the index of the first occurrence of a given element
const arr13 = [1, 2, 3, 4, 5, 3];
const elementToFind1 = 3;
const firstIndex = arr13.indexOf(elementToFind1);
console.log(firstIndex);



//17 remove  duplicate elements from an array
const arr14 = [1, 2, 3, 4, 5, 3, 2];
const uniqueArr = [...new Set(arr14)];
console.log(uniqueArr);



//16 count the frequency of each element in an array
const arr15 = [1, 2, 3, 4, 5, 3, 2];
const frequency = arr15.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(frequency);




//15 check if an array contains a specific element
const arr16 = [1, 2, 3, 4, 5];
const elementToCheck = 3;
const containsElement = arr16.includes(elementToCheck);
console.log(containsElement); 


//14 copy all elements of an array to another array
const arr17 = [1, 2, 3, 4, 5];
const copiedArr = [...arr17];
console.log(copiedArr);


//13 find the second smallest element in an array
const arr18 = [5, 2, 8, 1, 4];
const secondSmallest = arr18.sort((a, b) => a - b)[1];
console.log(secondSmallest);


//12 find the second largest element in an array
const arr19 = [5, 2, 8, 1, 4];
const secondLargest = arr19.sort((a, b) => b - a)[1];
console.log(secondLargest);

//11 count even and odd numbers in an array
const arr20 = [1, 2, 3, 4, 5, 6];
const count = arr20.reduce(
  (acc, curr) => {
    if (curr % 2 === 0) {
      acc.even++;
    } else {
      acc.odd++;
    }
    return acc;
  },
  { even: 0, odd: 0 }
);
console.log(count);

//10 count positive and negative numbers in an array
const arr21 = [1, -2, 3, -4, 5, -6];
const count1 = arr21.reduce(
  (acc, curr) => {
    if (curr > 0) {
      acc.positive++;
    } else if (curr < 0) {
      acc.negative++;
    }
    return acc;
  },
  { positive: 0, negative: 0 }
);

console.log(count1);


//9 reverse the elements of an array
const arr22 = [1, 2, 3, 4, 5];
const reversedArr = arr22.reverse();
console.log(reversedArr);

//8 find the minimum element in an array
const arr23 = [5, 2, 8, 1, 4];
const minElement = arr23.reduce((acc, curr) => (curr < acc ? curr : acc), arr23[0]);
console.log(minElement);


//7 find the maximum element in an array

const arr24 = [5, 2, 8, 1, 4];
const maxElement = arr24.reduce((acc, curr) => (curr > acc ? curr : acc), arr24[0]);
console.log(maxElement);


//6 find the average of all elements in an array
const arr25 = [1, 2, 3, 4, 5];
const average = arr25.reduce((acc, curr) => acc + curr, 0) / arr25.length;
console.log(average);


//5 find the sum of all elements in an array
const arr26 = [1, 2, 3, 4, 5];
const sum2 = arr26.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

//4 delete an element from an array
const arr27 = [1, 2, 3, 4, 5];
const elementToDelete = 3;
const newArr = arr27.filter((element) => element !== elementToDelete);
console.log(newArr);

//3 insert an element at a specific position in an array
const arr28 = [1, 2, 3, 4, 5];
const elementToInsert = 6;
const positionToInsert = 2;
const newArr1 = [
  ...arr28.slice(0, positionToInsert),
  elementToInsert,
  ...arr28.slice(positionToInsert)
];
console.log(newArr1);


//2 find the length of an array without using a built-in  function
const arr29 = [1, 2, 3, 4, 5];
let length = 0;
for (let i = 0; i < arr29.length; i++) {
  length++;
}
console.log(length);

//1 print all the elements of an array
const arr30 = [1, 2, 3, 4, 5];
arr30.forEach((element) => {
  console.log(element);
});