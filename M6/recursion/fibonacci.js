// Fibonacci Sequence is
// a series of numbers starting with 0 and 1 in which each number is the sum of the two preceding numbers
// [0, 1, 1, 2, 3, 5, 8, ...]

// Write recursive function which returns the value of the nth Fibonacci number
// e.g. value of the 3rd fib num is 1
// value of the 6th fib num is 5

const fibR = (n) => {
  // n === 13
  // e.g. 13 --> 12

  // BASE CASE
  if (n <= 1) {
    return 1;
  }

  return fibR(n - 1) + fibR(n - 2);
  // function call(s)
};

console.log(fibR(3));
console.log(fibR(5));
