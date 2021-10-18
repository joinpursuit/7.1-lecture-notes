// Workflow:

// 1. Understand the prompt
//    - Ask clarifying questions
//    - Come up with additional example inputs, and their expected outputs

// 2. Brainstorm possible approaches
//    - After narrowing down your approach, pseudo code

// 3. Implement your solution
//    - Execute your code frequently as you work
//    - Verbalize your thought process along the way

// 4. Analyze your solution
//    - What is the time complexity? Could it be improved?
//    - What is the space complexity? Could it be improved?
//    - Are there edge cases you forgot to handle?

// PROMPT:

/**
 * Finds the index of n in a sorted array. Returns -1 if n isn't found.
 *
 * Ex: search([5, 20, 21, 22, 81], 21) // => 2
 * Ex: search([5, 20, 21, 22, 81], 6)  // => -1
 *
 * @param {Number[]} sorted - array to search
 * @param {Number} n - number to look for
 * @returns {Number} - index of n or -1
 */
function search(sorted, n, start = 0, end = null) {
  // console.log("searching", sorted, "for", n);
  // console.log("search window starts at", start, "and ends at", end);
  if (end === null) end = sorted.length;

  // base case: window doesn't contain any elements
  if (end - start <= 0) return -1;

  const midpoint = Math.floor((end - start) / 2) + start; // 3 to 5 midpoint: 4
  const midelement = sorted[midpoint];

  if (n < midelement) {
    return search(sorted, n, start, midpoint);
  } else if (n === midelement) {
    return midpoint;
  } else {
    return search(sorted, n, midpoint + 1, end);
  }
}

console.log(search([5, 20, 21, 22, 81], 21)); // => 2
console.log(search([5, 20, 21, 22, 81], 22)); // => 3
console.log(search([-10, 0, 10, 11], 10)); // => 2
console.log(search([-10, 0, 10], 7)); // => -1

// Option:
// I can use builtin array method .indexOf to search sorted for n

// Option:
// scan through the array one element at a time, checking each element to see if it equals n

// Option [we'll go with this option]:
// try to rule out half of the array by comparing n to the middle element

// Definition of log (base 2):
// log(n) is the number of times I
// chop n in half until n is one.

// 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1
// log(64) = 6
// number of recursive calls: log(l) where l is the length of sorted
// IF the stuff i do before my recursive call is all constant time, then
// my function is O(log(l)) (where l is the length of sorted)

// console.log(search([5, 20, 21, 22, 81], 22));
// -> window: 0 to 5
// -> window: 3 to 5
// -> window: 3 to 4
// -> found 22 at index 3!
