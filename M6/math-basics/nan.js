// 1. Some operators from math are also used with strings
//    for example, + is used for string concatenation
let start = "Hello, ";
let introduce = "my name is ";
let name = "E.T.";
let expression = start + introduce + name;
// console.log("expression:", expression);

// 2. Other operators don't work with strings.
//    The * operator is one example:
let manyCats = "cat " * 5;
// console.log("manyCats:", manyCats);

let manyDogs = "dog " * 5;
// console.log("manyDogs:", manyDogs)

// 3. Does NaN === NaN?
console.log("manyCats === manyDogs:", manyCats == manyDogs);

// When does NaN come up?
// What is the type of NaN?
// Why is NaN === NaN false?
