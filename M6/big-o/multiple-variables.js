function oneArrayPairs(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // iterates N times
    for (let j = 0; j < arr.length; j += 1) {
      // each time the outer loop runs, iterates N times
      console.log("pair:", arr[i], arr[j]); // executes N x N = N^2 times
    }
  }
}

// oneArrayPairs([1, 2, 3]);
// // same as:
// arrayPairs([1, 2, 3], [1, 2, 3])

// How do we describe input size?
// N: length of arr

// What's the worst case scenario?
// every case is worst case

// How many steps are there in terms of N?
// O(N^2)

function arrayPairs(arr1, arr2) {
  for (let i = 0; i < arr1.length; i += 1) {
    // iterates A times
    for (let j = 0; j < arr2.length; j += 1) {
      // each A times, this iterates B times
      console.log("pair:", arr1[i], arr2[j]); // executes A x B times
    }
  }
}

arrayPairs([1, 2], [3, 4, 5, 6]); // [1,3]  [1, 4], [2, 3], [2, 4]

// How should we describe size of input?
// A: length of arr1
// B: length of arr2

// Is there a worst case scenario?
// every case is worst case scenario

// Describe number of steps in worst case scenario:
// O(AxB)
