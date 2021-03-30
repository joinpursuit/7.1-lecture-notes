function add(n, m) {
    return n + m
}

function subtract(n, m) {
    return n - m
}

// console.log(add.prototype)
// console.log(subtract.prototype)
// console.log(add.prototype === subtract.prototype)

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`)
}

// Because I used the new keyword, 'this' refers 
//to a blank object inside the Person function
const alvi = new Person('Tamzeed', 27)

// console.log(alvi) // Tamzeed 27
// console.log(alvi.__proto__ === Person.prototype)

const esay = new Person('Esay', 31)

//alvi.greet()
//esay.greet()




const sadMistake = Person('Oh boy', 0)

// Let's visit some old friends: Object and Array!

const temps = [43, 60, 32, 212]
const temps2 = new Array(43, 60, 32, 212)
// console.log(temps2.__proto__ === Array.prototype)

let obj1 = {}
let obj2 = new Object()
// console.log(obj2.__proto__ === Object.prototype)

// What happens when we call temps.forEach():
// First, check if temps has its own property named forEach
// But it doesn't!
// Then, check if temps.__proto__ has a property named forEach
                // Array.prototype
// It does!
// temps.forEach(t => console.log('curr temp is:', t))

// What happens when we call alvi.hasOwnProperty:
// First, check if alvi.hasOwnProperty is a thing we defined.
// NOPE
// Next, check alvi.__proto__ for hasOwnProperty
// Did we ever define Person.prototype.hasOwnProperty????
// NOPE
// Next, check alvi.__proto__.__proto__ (Person.prototype.__proto__ aka Object.prototype)
// We luck out: Object.prototype.hasOwnProperty exists!
// console.log(alvi.hasOwnProperty('age'))
// console.log(Person.prototype.__proto__ === Object.prototype)


// What's the diff between .__proto__ and .prototype?
// .prototype only exists for functions!
// every javascript value has a .__proto__ though!


function Dog(noise) {
    this.noise = noise
}

Dog.prototype.bark = () => {
    console.log(this.noise)
}

const barkingDog = new Dog('bark!')
const woofingDog = new Dog('woof!')
const roofingDog = new Dog('roof!')

// We check for .bark defined directly on barkingDog - but it doesn't exist!
// So it checks barkingDog.__proto__ ... which is just Dog.prototype!
// barkingDog.bark()
// woofingDog.bark()
// roofingDog.bark()

// console.log(Dog.__proto__ === Dog.prototype)
// console.log(Dog.prototype)


function MyArray() {
    this.length = 0
}

MyArray.prototype.push = function (newElement) {
    // (this[0] = 20)
    this[this.length] = newElement
    this.length++
}

// Remove the last element of the array and return it!
MyArray.prototype.pop = function() {
    const val = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    return val
}

const nums = new MyArray()
nums.push(20)
// console.log(nums[0])
// console.log(nums.pop())
// console.log(nums)


const numsEx = [20, 31, 90] // {0: 20, 1: 31, 2: 90, length: 3}
nums.push(64) // This creates a key/val pair of 3: 64, and increments length: 4
const lastEl = nums.pop()



function Counter () {
    this.count = 0
}

Counter.prototype.increment = function () {
    this.count++
}

// This method returns a getCount function that always gets the right count.
Counter.prototype.getter = function() {
    // When I called getter, 'this' refers to whatever is before the dot!
    return () => {
        // So, in here, 'this' refers to whatever is before the dot!
        // And it's permanently bound to that value
        return this.count
    }
}

const firstCounter = new Counter()
const getCount = firstCounter.getter() // 'this' refers to firstCounter inside getCount
console.log(getCount())
firstCounter.increment()
console.log(getCount())