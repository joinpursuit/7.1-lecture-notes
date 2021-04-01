const searchEngines = ['google', 'duckduckgo']
// const firstEngine = searchEngines[0]
// const secondEngine = searchEngines[1]

// Same thing!
// const [firstEngine, secondEngine] = searchEngines

// console.log(firstEngine, secondEngine)

const genres = ['comedy', 'romance', 'drama', 'horror']
//const [firstGenre, secondGenre] = genres
const [firstGenre, ...remainingGenres] = genres
const cloneOfGenres = [...genres] 

console.log(cloneOfGenres)
console.log(firstGenre)
console.log(remainingGenres)

// Note: we took a little detour to revist mutability and pass by reference. Great stuff!

const movies = [
    {genre: 'comedy', title: 'step brothers'},
    {genre: 'horror', title: 'saw'}
]

const [stepBros, saw] = movies
stepBros.genre = 'buddy comedy'
console.log(movies)
// movies[0] and stepBros are two names for one object

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const [row1, row2, row3] = matrix
row1.push(88)
console.log(row1)
console.log(matrix)


// Now for destructuring objects... 

const classTopics = {
	monday: 'React Elements & Components',
	tuesday: 'Functional Components vs. Class Components',
	wednesday: 'Review',
	thursday: 'React Props'
}



const date = {
    day: 1,
    month: 4,
    year: 2021
}

let { day, month, year } = date
day = 2
console.log('day:', day)
console.log(date)

// const monday = 'My favorite day of the week becuase I missed all of your beautiful faces'

// const { tuesday } = classTopics 
//console.log(tuesday)

// const {monday: mondayTopic, thursday} = classTopics
// console.log("mondayTopic: ", mondayTopic)
// console.log("monday: ", monday)
// console.log(thursday)


const {wednesday, ...restOfTopics} = classTopics
console.log('wed:', wednesday)
console.log('rest:', restOfTopics)

function logDate(date) {
    console.log(date.day)
    console.log(date.month)
    console.log(date.year)
}

function logDate2([day, month, year]) {
    console.log(day)
    console.log(month)
    console.log(year)
}

logDate2([1, 4, 2021])