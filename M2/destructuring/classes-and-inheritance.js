class Animal {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log('I am', this.name)
    }
}

function Animal2(name) {
    this.name = name
}

Animal2.prototype.greet = function() {
    console.log('I am', this.name)
}

// 'extends' means Dog.prototype.__proto__ should be set to Animal.prototype
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.species = 'dog'
        this.noise = 'bark'
    }
}

// 'extends' keyword makes sure that Dog.prototype.__proto__ is linked to Animal.prototype

const fido = new Dog('fido')
fido.greet()
console.log(fido.__proto__ === Dog.prototype)
console.log(Dog.prototype.__proto__ === Animal.prototype)
console.log(fido.__proto__.__proto__ === Animal.prototype)

class MyArray {
    constructor() {
        this.length = 0
    }

    forEach() {

    }
}