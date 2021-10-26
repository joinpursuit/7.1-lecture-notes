let str = "Welcome!";

console.log(str);

// access certain letter?
console.log(str[1]);

// How can I update a certain letter?
console.log((str[1] = "a"));
console.log(str); // <-- this doesn't achieve our goal

// accesing multiple chars of a str?
console.log(str.match("e")); // <-- not what we're looking for
console.log(str.charAt(1)); // <-- not what we're looking for
// sneak preview: regex can achieve this as well
console.log(str.substring(0, str.length));
console.log(str.substring(0, 2));
console.log(str.substring(0, str.length + 2));
console.log(str.substring(0));

let str2 = "Hello";
let every2 = "";

for (let i = 0; i < str2.length; i = i + 2) {
  every2 += str2[i];
}

console.log(every2);

let str3 = "Goodbye";
let everyO = "";

for (let char of str3) {
  if (char === "o") {
    everyO += char;
  }
}

console.log(everyO);

// How can we reverse a string?
let str4 = "Mamma Mia!";
// console.log(str4.reverse()); <-- can't use reverse Array method on a string
let str4Arr = str4.split(""); // <-- String method .split() doesn't mutate string
console.log(str4Arr.reverse()); // <-- Array method .reverse() mutates the array
str4 = str4Arr.join("");
console.log(str4);
console.log(typeof str4);

// How can we reverse the word order in a string while keeping the exclamation point at the end?!
// regex makes this entire solution possible in a single line!
let str5 = "Mamma Mia!";
let str5Arr = str5.split(" ");

// Function to remove excalamation point
const removeEx = (arr) => {
  let res = [];
  for (let str of arr) {
    let tempArr = str.split("");
    tempArr = tempArr.filter((c) => {
      return c !== "!";
    });
    res.push(tempArr.join(""));
  }
  return res;
};

console.log((str5Arr = removeEx(str5Arr)));
console.log(str5Arr.reverse());
str5 = str5Arr.join(" ");
console.log(str5.concat("!"));
