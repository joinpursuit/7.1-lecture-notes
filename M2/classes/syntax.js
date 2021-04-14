

// let userOne = {
//   name: "Anne",
//   userId: 6021
// }

// let userTwo = {
//   name: "Ben",
//   userId: 6022
// }

// let userThree = {
//   name: "Cal",
//   userId: 6023
// }

let userFour = {
  name: "Dan",
  userID: 6024
}
// console.log(userFour)

// let userArray = [userOne, userTwo, userThree, userFour]

// userArray.forEach(user => {
//   console.log(user.userId)
// })

function User(name, userId) {
  this.name = name
  this.userId = userId
}

let userOne = new User("jimmy", 1234)

// console.log(userOne)
// console.log(userOne.name)

// {
//   name: "",
//   userId: ""
// }

class UserClass {
  constructor(name, userId, hobbies) {
    this.name = name
    this.userId = userId
    this.student = true
    this.hobbies = hobbies
  }
}

let userClassOne = new UserClass("jimmy", 1234)
// let userClassTwo = new UserClass("alex", 4567)
let userClassThree = new UserClass("daniel", 123, "hello")

console.log(userClassOne)
console.log(userClassOne.student)
console.log(userClassOne.hobbies)

// console.log(userClassTwo.userId)

console.log(userClassThree.hobbies)

// let userArray = [userClassOne, userClassTwo, userClassThree]
// console.log(userArray)

// let userClassFour = new UserClass("geormary", 3333, "astrology")
// userArray.push(userClassFour)

let incomingUsers = [{name: "jimmy", userId: 1111}, {name: "myra", userId: 3333}]
let classUsers = []
incomingUsers.forEach(user => {
  let temp = new UserClass(user.name, user.userId)
  classUsers.push(temp)
})

// console.log(classUsers[1].name)

class Animal {

  // one parameter - name
  // this depends on something being passed in
  // let a = new Animal("a name here")
  // a.name === "a name here"
  constructor(name) {
    this.name = name
    this.hunger = 10
  }

  speak() {
    return "I am " + this.name
  }

  feed(num) {
    this.hunger -= num
  }
}

let a = new Animal("sparky")
console.log(a.hunger)
a.feed(3)
console.log(a.hunger)
// let animal = {
//   name: "spot",
//   speak: function() {
//     return "I am " + this.name 
//   }
// }



class Dog extends Animal {

  // name === "waow"
  constructor(name, hairLength) {
    // name === "waow"
    super(name)
    this.hairLength = hairLength
  }

  bark() {
    return "woof"
  }

  feed() {
  }
}

let shiba = new Dog("waow", "short")
console.log(shiba.name)
console.log(shiba.hairLength)
console.log(shiba.hunger)
shiba.feed(5)
console.log(shiba.hunger)
console.log(shiba.bark())
console.log(shiba.speak())
// shiba.bark()

// let an = {
//   name: "spot",
//   speak: function() {
//     console.log(this.name)
//   }
// }

// an.speak()

let woof = new Animal("spot")
console.log(woof)
console.log(woof.speak())
// console.log(woof.hunger)
// woof.feed(5)
// woof.energy = 10
// console.log(woof.hunger)
// console.log(woof.energy)

// let meow = new Animal("harry")
// console.log(meow.energy)

// class Car {
//   constructor(color) {
//     this.color = color
//     this.wheels = 4
//     this.engine = true
//   }

//   paint(color) {
//     this.color = color
//   }

//   static getWheels() {
//     return "i have 4 wheels"
//   }
// }

// let subaru = new Car("white")
// subaru.paint("red")
// subaru.getWheels()

// console.log(Car.getWheels())
// console.log(Car.paint())

