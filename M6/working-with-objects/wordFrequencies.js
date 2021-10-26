// split sentence into individual words
// initialize my frequency object
// iterate through words

// check if current word is already in frequency object
// If yes: increment word frequency
// If no: set frequency[current word] to 1
function findWordFrequency(sentence) {
  const words = sentence.split(" ");
  const frequency = {};
  for (let word of words) {
    if (frequency[word]) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}

function sum(nums) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
}

function copyString(str) {}

const example1 =
  "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo";
console.log(findWordFrequency(example1));
const example2 = "Rose rose to look at her rose";
console.log(findWordFrequency(example2));

const example3 = "look, if you look at the sun it hurts";
console.log(findWordFrequency(example3));
// { look,: 1, look: 1, ... }
