/*
Welcome to the online duct tape store!

Some Mathy things to look out for as we solve these problems:

- operator precadence
- Math.min, Math.max
- spread operator
- Math.abs
- Math.floor, Math.ceil, Math.round
- Number.prototype.toFixed
*/

// Prints the number of duct tapes and their total price
function logCart(quantity) {
  const price = 5;
}

// If three or more are purchased, add a 10% discount
function calculatePrice(quantity) {
  const price = 5;
}

// Returns the difference between the
// highest and lowest price
function priceRange(prices) {
  const bestPrice = Math.min(...prices);
  const worstPrice = Math.max(...prices);

  // Option 1: switch order. worstPrice - bestPrice
  // Option 2: use absolute value. HUH?!?
  //           - 'distance from zero'
  //           - always positive
  //           - Math.abs(n) === n if n >= 0
  //           -             === -n if n < 0
  //           - Ex: Math.abs(-5) === 5

  return Math.abs(bestPrice - worstPrice);
}

const prices = [5, 7, 6, 6, 4, 5, 6];
// best price: 4
// worst price: 7
// range: 7 - 4 === 3

// console.log(priceRange(prices)); // 3

// Prints 'Our price is the best!' or 'A competitor has a better price'
// Prints the difference between our price and the best competitors price
function compareCompetitors(prices, ourPrice) {}

// Donate the cents needed to round up to the nearest dollar
// Function should print something like 'Congratulations, you donated $0.59'
function calculateDonation(bill) {
  // ex: bill is $24.41, then my donation would be $0.59

  // Idea: round bill to the nearest dollar to find how much we pay.
  console.log("next dollar up:", Math.ceil(bill));

  const total = Math.ceil(bill);
  console.log("donation:", (total - bill).toFixed(2));
}

calculateDonation(24.41);

// WATCH OUT: Number.toFixed returns a STRING
