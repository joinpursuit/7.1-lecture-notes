
// let items = ["desk", "lamp", "cat", "chair"]

// console.log(items)
// console.log(...items)

let numbers = [10, 20, 56, 1, 12, 53]

// old way of doing things
function findMax(arr) {
  let max = 0
  arr.forEach(num => {
    if(num > max) {
      max = num
    }
  })
  return max
}

let max = findMax(numbers)
console.log(max)

console.log(Math.max(numbers))
// 26 and 27 are equivalent
// variadic function
console.log(Math.max(10, 20, 56, 1, 12, 53)) 
console.log(Math.max(...numbers))

let items = ["desk", "lamp", "cat", "chair"]
let office = ["rug", "window", ...items]

let nestedOffice = ["rug", items, "window"]

console.log(office)
console.log(nestedOffice)

// make items2 have all the values in office2
let items2 = ["desk", "lamp", "cat", "chair"]
let office2 = ["rug", "window"]


// method 1
// iterate through office2 and push into items2
// method 2
// .concat()

let items3 = items2.concat(office2)
console.log(items3)


let items4 = ["desk", "lamp", "cat", "chair"]
let office4 = ["rug", "window"]

// make a new array out of these two things
let items5 = [...items4, ...office4]
console.log(items5)

// clone array
let office10 = [...office4]

let office11 = office4

office4.push("plant")
office11.push("window")
// office4 and office11 are shared - same pointer
console.log(office4)
console.log(office11)

//office10 is a cloned array, a new array
console.log(office10)

/// ------ objects

let garage = {
  car: true,
  doors: 2
}

let house = {
  color: "green",
  driveway: true,
  floors: 2,
  ...garage
}

console.log(house)

// shorthand objects
// if the key and the value are the same name
// exclude the value
let school = {
  garage,
  house
}

console.log(school)
console.log(school.garage.doors)

let huge = 5555
let str = "jello"
console.log(...str)
// its alive

// console.log(huge[0])
// console.log(...huge)


// rest operator
// ...
// variadic function

function addAllNumbers(...allNumbers) {
  console.log(allNumbers)
  let total = 0
  allNumbers.forEach(num => {
    total += num
  })
  return total
}

console.log(addAllNumbers(1,2,3))
console.log(addAllNumbers(1,2,3,4,5,6))

// c is zipping all parameters after position 3
function funkyMath(a, b, ...c) {
  console.log("a", a)
  console.log("b", b)
  console.log("the rest of the nums", c)
  return a * b + c.reduce((acc, cv) => acc += cv)
}

console.log(funkyMath(1,2, 3,4,5,6))

