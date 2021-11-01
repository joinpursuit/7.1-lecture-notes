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
  constructor(age, color, isPredator, name) {
    this.age = age;
    this.color = color;
    this.isPredator = isPredator;
    this.name = name;
  }
  // The underscore (_) denotes that _move() is a private method
  // private methods can only be called from within the class
  move() {
    console.log("zippy zoppy zappy!");
  }
  // lack of underscore denotes that flex() is a public method
  // public methods can be called on the class
  flex() {
    console.log("hmmmmmm!!!");
    this.move();
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

// console.log(bubby, bobby);

bubby.setIsPredator(false);
// console.log(bubby.setAge(150));
// console.log(bubby.getAge());

// example of a static function
// console.log(Math.abs(-1));

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
class MiniatureHorse extends Animal {
  // Do we need constructor?
  constructor(age, color, isPredator, name, isPonyBraided) {
    // Must call super constructor in derived class
    // before accessing 'this' or
    // returning from derived constructor
    super(age, color, isPredator, name);
    this.isPonyBraided = isPonyBraided;
  }

  move() {
    console.log("clip clop!!");
    // this refernce the current instance of the class
    return this;
  }

  winny() {
    console.log("neigh!! neigh!!");
    // super references the parent of the current instance of the class
    super.flex();
  }
}

const bibby = new MiniatureHorse(130, "green", false, "Bibby", true);

console.log(bibby);
// console.log(bibby.age, bibby.color, bibby.isPredator, bibby.name);
// console.log(bibby.flex());
// console.log(bibby.winny());
