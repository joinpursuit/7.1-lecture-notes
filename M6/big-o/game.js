// O(2) --> O(1)
const timesTwo = (x) => {
  for (i = 0; i < 2; i++) {
    x = x + x;
  }
  return x;
};

// O(3) --> O(1)
const timesThree = (x) => {
  for (i = 0; i < 3; i++) {
    x = x + x;
  }
  return x;
};

// O(N)
const game = (lowLimit, highLimit) => {
  // highLimit is th high end of the search range
  // lowLimit is the low end of the search range
  // N is the number of integers between lowLimit and highLimit

  // number we are searching for
  let number = Math.ceil(Math.random() * highLimit);

  // user input one guess at a time
  let guess = prompt(`Guess a number between ${lowLimit} and ${highLimit}`);

  guess = Number(guess);

  // The worst case scenario number of geusses is highLimit - lowLimit
  // e.g. if the lowLimit is 5 and the highLimit is 7, then the worst case scenario is 7 - 5, 2
  // e.g. highLimit 95 and lowLimit 15, worst case scenario is 80
  // basically time complexity = O(highLimit - lowLimit)
  while (guess !== number) {
    if (guess < number) {
      guess = prompt(`Too low! Guess again`);
    } else {
      guess = prompt(`Too high! Guess again`);
    }
    guess = Number(guess);
  }
  alert(`That's right! The number was ${number}`);
};

game();

// time complexity is O(N)
