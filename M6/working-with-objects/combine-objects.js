const computer = {
  brand: "Tandy",
  weight: 22,
  working: false,
  condition: "mint",
  price: 2894,
  array: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  powerUp() {
    return "the computer now is on";
  },
  powerDown() {
    return "the computer is now off";
  },
};

const box = {
  brand: "Tandy",
  joystick: "Classic Vintage 1000",
  keyboard: "Keyfun 5000",
  working: true,
};

// Let's combine objects using the spread operator!
const newComputer = { ...box, ...computer }; // O(n + m), n: number of keys in box; m: number of keys in computer
console.log(newComputer);

// How about using Object.assign?
const newComp = Object.assign({}, computer, box); // have you come accross this?
console.log(newComp);
