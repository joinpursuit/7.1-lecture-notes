const computer = {
  brand: "Tandy",
  weight: 22,
  working: false,
  condition: "mint",
  price: 2894,
  powerUp() {
    return "the computer now is on";
  },
  powerDown() {
    return "the computer is now off";
  },
};

// // How can we iterate through all the key/value pairs?
for (let key in computer) {
  console.log("value:", computer[key]);
}

// // What are some ways to access the "brand" key?
console.log("first approach:", computer.brand);
console.log("second approach:", computer["brand"]);

// // Wrong ways:
// console.log("wrong 1:", computer[brand]); // Reference Error!
// console.log("wrong 2:", computer."brand"); // Syntax error!

// // How can we access the brand key using our variable?
let myKey = "brand";

// // right:
console.log("Third approach:", computer[myKey]);

// // wrong:
console.log("wrong:", computer.myKey); // undefined
console.log("wrong:", computer["myKey"]); // undefined!

// // Let's get a list of all the property names:
console.log("list of object properties:", Object.keys(computer));
console.log("Key value pairs as an iterable:", Object.entries(computer));

for (let [key, value] of Object.entries(computer)) {
  console.log(key, value);
}

// thought question: what is the difference between for... in and for... of?
