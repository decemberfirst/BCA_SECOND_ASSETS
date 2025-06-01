// 1. Print all elements
let nums1 = [12, 25, 37, 48];
for (let i = 0; i < 4; i++) {
  console.log(nums1[i]);
}

// 2. Find array length without .length
let data2 = [5, 15, 25, 35, 45];
let size2 = 0;
for (let i in data2) {
  size2++;
}
console.log(size2);

// 3. Insert at specific position
let nums3 = [10, 20, 40, 50];
let insertVal = 30;
let insertPos = 2;
for (let i = 4; i > insertPos; i--) {
  nums3[i] = nums3[i - 1];
}
nums3[insertPos] = insertVal;
for (let i = 0; i < 5; i++) {
  console.log(nums3[i]);
}

// 4. Delete element at index
let values4 = [9, 8, 7, 6, 5];
let delIndex = 1;
for (let i = delIndex; i < 4; i++) {
  values4[i] = values4[i + 1];
}
for (let i = 0; i < 4; i++) {
  console.log(values4[i]);
}

// 5. Sum of array elements
let points5 = [13, 26, 39];
let total5 = 0;
for (let i = 0; i < 3; i++) {
  total5 += points5[i];
}
console.log(total5);

// 6. Average of elements
let marks6 = [60, 70, 80, 90];
let total6 = 0;
for (let i = 0; i < 4; i++) {
  total6 += marks6[i];
}
let avg6 = total6 / 4;
console.log(avg6);

// 7. Maximum value
let nums7 = [45, 12, 78, 33];
let maxVal = nums7[0];
for (let i = 1; i < 4; i++) {
  if (nums7[i] > maxVal) {
    maxVal = nums7[i];
  }
}
console.log(maxVal);

// 8. Minimum value
let nums8 = [99, 34, 21, 87];
let minVal = nums8[0];
for (let i = 1; i < 4; i++) {
  if (nums8[i] < minVal) {
    minVal = nums8[i];
  }
}
console.log(minVal);

// 9. Reverse array
let list9 = [1, 2, 3, 4, 5];
for (let i = 4; i >= 0; i--) {
  console.log(list9[i]);
}

// 10. Count positive and negative
let nums10 = [-2, 4, -6, 8, 0];
let posCount = 0, negCount = 0;
for (let i = 0; i < 5; i++) {
  if (nums10[i] > 0) {
    posCount++;
  } else if (nums10[i] < 0) {
    negCount++;
  }
}
console.log(posCount);
console.log(negCount);

// 11. Count even and odd
let digits11 = [11, 22, 33, 44, 55];
let even11 = 0, odd11 = 0;
for (let i = 0; i < 5; i++) {
  if (digits11[i] % 2 === 0) {
    even11++;
  } else {
    odd11++;
  }
}
console.log(even11);
console.log(odd11);

// 12. Second largest
let scores12 = [25, 50, 75, 100];
let max12 = -Infinity, secMax = -Infinity;
for (let i = 0; i < 4; i++) {
  if (scores12[i] > max12) {
    secMax = max12;
    max12 = scores12[i];
  } else if (scores12[i] > secMax && scores12[i] != max12) {
    secMax = scores12[i];
  }
}
console.log(secMax);

// 13. Second smallest
let scores13 = [35, 20, 10, 15];
let min13 = Infinity, secMin = Infinity;
for (let i = 0; i < 4; i++) {
  if (scores13[i] < min13) {
    secMin = min13;
    min13 = scores13[i];
  } else if (scores13[i] < secMin && scores13[i] != min13) {
    secMin = scores13[i];
  }
}
console.log(secMin);

// 14. Copy one array to another
let src14 = [5, 10, 15, 20];
let dest14 = [];
for (let i = 0; i < 4; i++) {
  dest14[i] = src14[i];
}
for (let i = 0; i < 4; i++) {
  console.log(dest14[i]);
}

// 15. Check element exists
let check15 = [3, 6, 9, 12];
let found15 = 0;
let searchVal = 9;
for (let i = 0; i < 4; i++) {
  if (check15[i] === searchVal) {
    found15 = 1;
  }
}
console.log(found15);

// 16. Count frequency of elements
let freq16 = [2, 4, 2, 4, 2];
let visited16 = [];
for (let i = 0; i < 5; i++) {
  let count = 1;
  let repeat = 0;
  for (let j = 0; j < visited16.length; j++) {
    if (visited16[j] === freq16[i]) {
      repeat = 1;
    }
  }
  if (repeat === 0) {
    for (let k = i + 1; k < 5; k++) {
      if (freq16[i] === freq16[k]) {
        count++;
      }
    }
    visited16.push(freq16[i]);
    console.log(freq16[i] + " => " + count);
  }
}

// 17. Remove duplicates
let dup17 = [1, 1, 2, 3, 3];
let unique17 = [];
for (let i = 0; i < 5; i++) {
  let exists = 0;
  for (let j = 0; j < unique17.length; j++) {
    if (dup17[i] === unique17[j]) {
      exists = 1;
    }
  }
  if (exists === 0) {
    unique17.push(dup17[i]);
  }
}
for (let i = 0; i < unique17.length; i++) {
  console.log(unique17[i]);
}

// 18. First occurrence index
let occ18 = [5, 8, 5, 9];
let key18 = 5;
let idx18 = -1;
for (let i = 0; i < 4; i++) {
  if (occ18[i] === key18) {
    idx18 = i;
    break;
  }
}
console.log(idx18);

// 19. Last occurrence index
let occ19 = [7, 6, 7, 5];
let key19 = 7;
let idx19 = -1;
for (let i = 0; i < 4; i++) {
  if (occ19[i] === key19) {
    idx19 = i;
  }
}
console.log(idx19);

// 20. Merge arrays
let a20 = [1, 2];
let b20 = [3, 4];
let merged20 = [];
for (let i = 0; i < 2; i++) {
  merged20[i] = a20[i];
}
for (let i = 0; i < 2; i++) {
  merged20[i + 2] = b20[i];
}
for (let i = 0; i < 4; i++) {
  console.log(merged20[i]);
}

// 21. Swap first and last
let vals21 = [11, 22, 33, 44];
let temp21 = vals21[0];
vals21[0] = vals21[3];
vals21[3] = temp21;
for (let i = 0; i < 4; i++) {
  console.log(vals21[i]);
}

// 22. Left shift by one
let arr22 = [10, 20, 30, 40];
let temp22 = arr22[0];
for (let i = 0; i < 3; i++) {
  arr22[i] = arr22[i + 1];
}
arr22[3] = temp22;
for (let i = 0; i < 4; i++) {
  console.log(arr22[i]);
}

// 23. Right shift by one
let arr23 = [100, 200, 300, 400];
let temp23 = arr23[3];
for (let i = 3; i > 0; i--) {
  arr23[i] = arr23[i - 1];
}
arr23[0] = temp23;
for (let i = 0; i < 4; i++) {
  console.log(arr23[i]);
}

// 24. Check if sorted
let sorted24 = [1, 2, 3, 4];
let asc24 = 1, desc24 = 1;
for (let i = 1; i < 4; i++) {
  if (sorted24[i] < sorted24[i - 1]) {
    asc24 = 0;
  }
  if (sorted24[i] > sorted24[i - 1]) {
    desc24 = 0;
  }
}
console.log(asc24 || desc24);

// 25. Sort ascending
let sort25 = [9, 1, 4, 3];
for (let i = 0; i < 3; i++) {
  for (let j = i + 1; j < 4; j++) {
    if (sort25[i] > sort25[j]) {
      let temp = sort25[i];
      sort25[i] = sort25[j];
      sort25[j] = temp;
    }
  }
}
for (let i = 0; i < 4; i++) {
  console.log(sort25[i]);
}

// 26. Sort descending
let sort26 = [2, 8, 1, 7];
for (let i = 0; i < 3; i++) {
  for (let j = i + 1; j < 4; j++) {
    if (sort26[i] < sort26[j]) {
      let temp = sort26[i];
      sort26[i] = sort26[j];
      sort26[j] = temp;
    }
  }
}
for (let i = 0; i < 4; i++) {
  console.log(sort26[i]);
}

// 27. Count zeros
let data27 = [0, 3, 0, 5, 7];
let zeroCount = 0;
for (let i = 0; i < 5; i++) {
  if (data27[i] === 0) {
    zeroCount++;
  }
}
console.log(zeroCount);

// 28. Sum of elements at even indices
let data28 = [2, 4, 6, 8, 10];
let evenSum = 0;
for (let i = 0; i < 5; i += 2) {
  evenSum += data28[i];
}
console.log(evenSum);

// 29. Sum of elements at odd indices
let data29 = [1, 3, 5, 7, 9];
let oddSum = 0;
for (let i = 1; i < 5; i += 2) {
  oddSum += data29[i];
}
console.log(oddSum);

// 30. Print elements greater than given number
let data30 = [10, 20, 30, 40];
let check30 = 25;
for (let i = 0; i < 4; i++) {
  if (data30[i] > check30) {
    console.log(data30[i]);
  }
}
