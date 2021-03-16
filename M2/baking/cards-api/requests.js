
const axios = require('axios')


const baseURL = "https://deckofcardsapi.com/api/deck/"
const newDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"


// shuffle the deck
// store the deck id
// draw a random card

async function shuffleDeck() {
  let result = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  // console.log(result.data)
  // destructuring

  // let deckID = result.data.deck_id
  // let remaining = result.data.remaining

  let { deck_id: deckID, remaining } = result.data
  // console.log(deckID)
  // console.log(remaining)

  return {
    deckID: deckID,
    remaining: remaining
  }
  // return variables???
  // call drawCard(deckID, remaining)
}

// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
async function drawCard(deckInfo) {
  let deckURL = `${baseURL}${deckInfo.deckID}/draw/?count=2`
  let cards = await axios.get(deckURL)
  console.log(cards)
  
}

async function doEverything() {
  let deckInfo = await shuffleDeck()
  // console.log(deckInfo)
  drawCard(deckInfo)

}

doEverything()
