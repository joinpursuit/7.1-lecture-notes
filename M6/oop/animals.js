// Everything in js is an object
// Array -> prototype is an Object
// Object --> prototype is an Object
// Any class --> prototype is an Object
// further reading on prototypes is in Eloquent JS Classes
// TODO: add link to above ^

let miniHorse1 = {
  name: "Bubby",
  type: "miniature horse",
  age: 150,
  greeting: "baaahhh",
  walk: "trot trip trop",
};

let miniHorse2 = {
  name: "Bobby",
  type: "miniature horse",
  age: 149,
  greeting: "baaahhhp",
  walk: "trot trip trite",
};

// Encapsulation (en - capsule - ation)
// start with Animal
class Animal {
  // Q: How do we add non-method properties to a Class?
  // A: By using the constructor method!
  // constructor method is available to all classes
  // reserved word
  constructor(age, color, isPredator) {
    this.age = age;
    this.color = color;
    this.isPredator = isPredator;
  }
  // The underscore (_) denotes that _move() is a private method
  // private methods can only be called from within the class
  static _move() {
    console.log("zippy zoppy zappy!");
    // this is a reference to the current Animal
    return this;
  }
  // lack of underscore denotes that flex() is a public method
  // public methods can be called on the class
  static flex() {
    console.log("hmmmmmm!!!");
    this._move();
    return this;
  }
  // Setter function: sets a class's property using a built method
  // Getters + Setters are an example of encapsulation
  setAge(age) {
    this.age = age;
    return this;
  }
  // Getter function: gets a class's property using a built in method
  getAge() {
    return this.age;
  }
  setIsPredator(isPredator) {
    this.isPredator = isPredator;
    return this;
  }
}

const bubby = new Animal(150, "calico", false);
const bobby = new Animal(149, "speckled gray", true);
const babby = new Animal();

console.log(bubby, bobby);

bubby.setIsPredator(false);
console.log(bubby.setAge(150));
console.log(bubby.age);
console.log(bubby.getAge());

console.log(Math.abs(-1));
console.log(Animal.flex());

// Chaining methods e.g: array.map(<do something>).join().split().....
// can move
// have muscles

// Mammal inherits from Animal
// fur
// lactate
// paws??
// give birth
// warm blooded
// eat their young

// EquusGenus inherits from Mammal

// MiniatureHorse inherits from EquusGenus
class MiniatureHorse {}
