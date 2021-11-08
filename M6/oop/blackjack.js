// Factory is controlled way to generate class instances (objects)
class DeckOfCards {
  // constructor
  // no arguments, bc we're working with a standard 52 card playing deck
  constructor() {
    // our deck is stored as an array
    // we want the deck to store Cards
    // each deck should have N suits
    // each suit should 13 cards
    this.deck = [];
    // calling the class function create deck
    // will populate our array with cards
    this._createDeck();
  }

  // create a deck function
  // it can be private so that no one tries to call it on a
  // specific instance
  _createDeck() {
    // define suits
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    // loop through the card creator for each suit
    for (let suit of suits) {
      for (let i = 1; i <= 13; i++) {
        // How are we going to conditionally
        // add face values? (e.g. jack, king, queen, ace)
        // if...else? OR switch
        if (i === 1) {
          // for 1 its an Ace
          this.deck.push(new Card("Ace", i, suit));
        } else if (i === 11) {
          // for 11 its a Jack
          this.deck.push(new Card("Jack", i, suit));
        } else if (i === 12) {
          // for 12 its a Queen
          this.deck.push(new Card("Queen", i, suit));
        } else if (i === 13) {
          // for 13 its a King
          this.deck.push(new Card("King", i, suit));
        } else {
          // otherwise default card
          this.deck.push(new Card(i, i, suit));
        }
      }
    }
  }

  // a method that shuffles this.deck
  // pull a random card from the deck repeatedly
  // and swap it with another card
  // incrementally shuffling each card once
  shuffle() {
    // set a new variable equal to hold random card index
    let randomCard = 0;

    // you can pass a reference to the variable
    // pass by reference
    // let tempDeck = this.deck;

    // vs copying the value
    // pass by value
    let tempDeck = [...this.deck];

    // Loop up to the length of the deck, then stop shuffling
    for (let i = this.deck.length; i > 0; i--) {
      // pick a random card using Math.random + Math.floor
      randomCard = Math.floor(Math.random() * i);

      // swap the random card with the current card
      [tempDeck[i], tempDeck[randomCard]] = [tempDeck[randomCard], tempDeck[i]];
    }
    return tempDeck;
  }

  // a method that plays cards to two different players
  // one player, one computer,
  // each play removes two cards per player from the deck
}

// we want card properties for each card
// let's write a class for Card so each card is an object
class Card {
  constructor(face, value, suit) {
    this.face = face;
    this.value = value;
    this.suit = suit;
  }
}

const deck = new DeckOfCards();
const shuffled = deck.shuffle();
console.log(deck.deck[0], shuffled[0]);
