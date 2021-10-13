// 1  + 2   = 3
// 3  + 3   = 6
// 6  + 4   = 10
// 10 + 5   = 15
// 15 + 6   = 21
// 21 + 7   = 28
// 28 + 8   = 36
// 36 + 9   = 45
// 45 + 10  = 55
// 55 + no numbers left means our answer is 55

// Write a recursive function that adds a range of numbers together
// Example: 1 - 15

// O(n)
const sumNums = (max, min, sum = 0) => {
  if (max <= min) {
    console.log(sum);
    return sum;
  }

  sum += max;
  max -= 1;
  // ex. 15, 14, 13, 12, ...  , 1
  // 15 + 14 + 13 + 1

  sumNums(max, min, sum);
};

sumNums(13, 3);
sumNums(3, 0);
