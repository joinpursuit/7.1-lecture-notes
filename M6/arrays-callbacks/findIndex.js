// Without using the .indexOf array method, write your own findIndex function.

// The function should take an array and the string or number that is to be found.
// If the item is found, it should return the index position.
// If no matching item is found it should return -1.
// If there are multiple matches, only the first index positions should be returned.
// For example with the following array:
// findIndex(letters, 'a') should return 0. findIndex(letters, 2) should return -1.

// recommend reading docs on the charAt and charCodeAt
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
];

const nums = [2, 3, 1];

// Array.indexOf
// console.log(nums.indexOf(5)); // returns -1
// findIndex(nums, 5); // returns -1
// findIndex(nums, 1); // returns 2

// write function that take an array and a string/or number
// returns element's index at the first match (skips all other possible matches)
// OR no match returns -1
// findIndex is case sensitive

const findIndex = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    // access element at current index and compare to val
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

// e.g. in the letters find:
// a, f, 5
// 0, 5, -1

console.log(findIndex(letters, "a"));
console.log(findIndex(letters, "f"));
console.log(findIndex(letters, 5));
