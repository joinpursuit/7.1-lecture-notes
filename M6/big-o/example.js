function printFacts(nums) {
  // 1. Print the sum of numbers 1 - 100
  let hundredSum = 0;
  for (let i = 1; i <= 100; i += 1) {
    hundredSum += i;
  }
  console.log("The sum of integers 1 - 100 is", hundredSum);

  // 2. Print the sum of all numbers in nums
  let numsSum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    numsSum += nums[i];
  }
  console.log("The sum of the numbers array is", numsSum);

  // 3. Find all numbers two elements of nums can add to
  let sumTo = [];
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      sumTo.push(nums[i] + nums[j]);
    }
  }
  console.log("Here is a list of all sums of two elements in our array", sumTo);
}

printFacts([5, 6, 7, 8, 9, 10]);

// How should I describe the size of my input?

// What is the worst case scenario?

// In the worst case scenario, how many steps did our algorithm take described in terms of the input?
// 1. Different steps get added
// 2. Drop Constants
// 3. Different inputs => different variables
// 4. Drop non-dominant terms
