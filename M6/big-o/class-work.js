const getMiddleItem = (arr) => {
  return arr[Math.floor(arr.length / 2)];
};

// What is the size of the input?
// N : length of arr

// How many steps?
// 1. arr.length / 2
// 2. Math.floor
// 3. arr lookup

// O(3) ---> O(1)

const printEvenNums = (limit) => {
  const evens = [];
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
};

// What should we call the size of the input?
// limit

// How many steps does our alg take?
// O(1 + limit + 1) ----> O(limit)

// Assume twoDArray is a SQUARE MATRIX
//   N: 2
// [
//   [0, 1],
//   [2, 3]
// ]

//  N: 3
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

const loopTheLoop = (twoDArray) => {
  for (let i = 0; i < twoDArray.length; i++) {
    // iterates N times
    for (let j = 0; j < twoDArray[i].length; j++) {
      // Each N times, this iterates N times
      console.log(twoDArray[i][j]); // this line executes N x N = N^2 times
    }
  }
};

// How will we describe the size of twoDArray?
// N: 'side length' of twoDArray

// How many steps does the alg take in terms of N?
// O(N^2)
