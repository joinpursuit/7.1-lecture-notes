// YOu can iterate through an array
// How do you iterate?
// Plain JS
// for, while, for...of
// Built in methods (idioms)
// forEach, every, map, find...

// I need to keep count of something while iterating
// for loop, e.g.
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {}

const testFunc = (count) => {
  arr.forEach((x) => {
    if (count % 2 === 0) {
      // then do something special to x
    }
    count++;
  });
};

const testFunc2 = (arr) => {
  // // to console.log each element
  // for (el of arr) {
  //   console.log(el);
  // }
  // // to update or use each element for some process/operation\
  // // but don't need to update the array
  // const arr2 = [4, 5, 6];
  // // to update each element
  // arr.forEach((el) => {
  //   arr2.push(el);
  // });
  // return arr2;
  // // operate on elements, update values, return array
  // return arr.map((el) => {
  //   return el + 2;
  // });
};

// console.log(testFunc2([1, 2, 3]));

const addTwo = (x) => {
  return x + 2;
};

const addTwoToEach = (arr) => {
  // callback which will be called within the function execution
  // here, map is the higher order function: takes a function as arg
  // and addTwoToEach is the callback ^^ which is the argument referred to here
  return arr.map(addTwo);
};

const addTwoToEachOld = (arr) => {
  // return the value of a function
  return arr.map((x) => {
    return addTwo(x);
  });
};

console.log(addTwoToEach([3, 4, 2, 4, 23, 4, 1]));
