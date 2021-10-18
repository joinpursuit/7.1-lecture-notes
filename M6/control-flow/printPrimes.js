// Write a function that takes an integer and then returns an array of all the prime numbers up to that value

const { runMain } = require("module");

// what's an integer?
// what is a prime number?
// only divisible by 1 and itself
// 2, 3, ...
// how can we tell if a number is prime?
// first problem to solve with algo
// Are there arguments/givens?
// one integer
// What are we meant to show?
// an array prime numbers

// tell if a number is prime or not
// O(sqrt(n))
const isPrime = (num) => {
  if (!Number.isInteger(num)) {
    return false;
  } else if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(6.4));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(25));

// find all of the primes between 2 - given integer
// O(n(sqrt(n)))
const collectPrimes = (limit) => {
  let primes = [];

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

console.log(collectPrimes(11));
console.log(collectPrimes(7));
