// Q1. Which one works - 1 or 2?

await function getJoke1() {
    const jokes = async axios.get(
        'https://official-joke-api.appspot.com/jokes/programming/random'
    )
    return jokes.data
}

async function getJoke2() {
    const jokes = await axios.get(
        'https://official-joke-api.appspot.com/jokes/programming/random'
    )
    return jokes.data 
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Q2. True or false: The code below will run without any errors

await getJoke2()

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Q3. True or false: The order of the console logs will be:
// 1
// 3
// 2

function wait1Second() {
    return new Promise(resolve => setTimeout(() => resolve(), 1000))
}

async function asyncPrinting() {
    console.log(1)
    await wait1Second()
    console.log(2)
}

asyncPrinting()
console.log(3)

//
//
//
//
//
//
//
//
//
//
//
// Q4. True or false: 1 and 2 are equivalent to one another:

function getBreakingBadCharacter1() {
    return axios.get('https://breakingbadapi.com/api/characters')
        .then(response => {
            return response.data
        })
}

async function getBreakingBadCharacter2() {
    const response = await axios.get('https://breakingbadapi.com/api/characters')
    return response.data
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Q5. True or false: the following code will print data about Venezuela.

fetch('https://restcountries.eu/rest/v2/name/venezuela')
    .then(response => response.json)
    .then(body => console.log(body))

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Q6. What will be logged: true or false?

function oneV1() {
    return 1
}

async function oneV2() {
    return 1
}

console.log(oneV1() === oneV2())