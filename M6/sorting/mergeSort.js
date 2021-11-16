// define a function mergeSort which takes two sorted arrays
// and returns a single sorted array
const merge = (left, right) => {
  // define a result array to store sorted numbers
  let res = [];

  // when both arrays are [] stop looping
  while (left.length && right.length) {
    // this log tells us how our arrays are shrinking + growing
    // console.log(left.length, right.length, res.length);

    // compare the 0 el of left to right
    // if left 0 el is less than right 0 el
    if (left[0] < right[0]) {
      // add left 0 el to the sorted array.
      // remove first el of left
      res.push(left.shift());
    } else {
      // add right 0 el to sorted array
      // remove first el of right
      res.push(right.shift());
    }
  }

  // return the result
  return [...res, ...left, ...right];
};

// define two sample sorted arrays
let left = [1, 6, 8, 10, 14, 20, 21, 22];
let right = [2, 3, 4, 5, 7, 9, 11, 12, 13, 15, 16, 17, 18, 19];
// console log the result of merge with sample arrays
console.log(merge(left, right));
// my test result for the two sample arrays should be
// a sorted array of numbers 1-20

// function to divide a given unsorted array
// into many arrays of just one element
// and then zipper them back together with a call to the merge function
const mergeSort = (arr) => {
  //split arr in half
  let half = arr.length / 2;

  // Define Base case -- when does recursion stop??
  if (arr.length <= 1) {
    return arr;
  }

  // define left and right
  let left = arr.splice(0, half);
  let right = arr;

  return merge(mergeSort(left), mergeSort(right));
};

let unsorted = [
  13, 15, 16, 2, 34, 3, 12, 4, 5, 7, 200, 3000, 9, 11, 17, 18, 19, -34,
];

console.log(mergeSort(unsorted));
