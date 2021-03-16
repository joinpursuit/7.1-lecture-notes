const shuffleDeck = require('./cards-api/requests').shuffleDeck
const { drawCard } = require('./cards-api/requests')

console.log(shuffleDeck)
console.log(drawCard)

async function playGame() {
  let deck = await shuffleDeck()
  let cards = await drawCard(deck)
  // split the deck remaining
  // discard some cards
  
  console.log(deck)
  console.log(cards)
}

playGame()