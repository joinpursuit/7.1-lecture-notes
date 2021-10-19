function median(values) {
  // Step 1: Sort your array.
  values.sort((a, b) => a - b);
  console.log(values);
  // is array even length?
  if (values.length % 2 === 0) {
    // if yes:
    // first middle value:
    const value1 = values[values.length / 2];
    const value2 = values[values.length / 2 - 1];

    // return their avg:
    return (value1 + value2) / 2;
  } else {
    // if no:
    return values[Math.floor(values.length / 2)];
  }
}

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

// console.log(median(nums));

// console.log("Median (want 3):", median([1, 2, 3, 4, 5]));

// // console.log("Median (want 3):", median([2, 4, 1, 3, 5]));

// console.log("Median (want 2.5):", median([2, 4, 1, 3]));

// Some Mathy things to look out for as you solve this problem:

// Array.prototype.sort
//  -> Don't spend too long thinking about how to sort,
//     we will talk more about this later
// Modulo operator
// Operator precedance
