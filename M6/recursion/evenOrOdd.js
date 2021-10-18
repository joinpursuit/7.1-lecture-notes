// 5
// 5 - 2 = 3
// 3 - 2 = 1
// 1 means the number is odd

// 6
// 6 - 2 = 4
// 4 - 2 = 2
// 2 - 2 = 0
// 0 means the number is even

// Write a recursive function that calculates wether a given number is even or odd
// by decrementing the given number by 2 until we get either 0 or 1!

// O(n/2) remove constants --> O(n)
const isEvenOrOdd = (num) => {
  //BASE CASE
  if (num === 1) {
    console.log("ODD");
    return;
  } else if (num == 0) {
    console.log("EVEN");
    return;
  }

  // RULES
  num = num - 2;
  // e.g. 6 -> 4 -> 2 -> 0

  // CALL FUNCTION AGAIN
  isEvenOrOdd(num);
};

isEvenOrOdd(15);
isEvenOrOdd(4);
