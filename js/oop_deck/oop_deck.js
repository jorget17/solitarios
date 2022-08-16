const FRENCH_SUITS = ["C", "D", "H", "S"]
const FRENCH_SUITS_BLACK = ['C', 'S']
const FRENCH_RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]
const FRENCH_VALUE_MAP = {
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "T": 10,
    "J": 11,
    "Q": 12,
    "K": 13
  }

const HF_SUITS = ["O", "C", "S", "B"]
const HF_SUITS_BLACK = ['O', 'C']
const HF40_RANKS = ["A", "2", "3", "4", "5", "6", "7", "S", "C", "R"]
const HF48_RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "S", "C", "R"]

const HF40_VALUE_MAP = {
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "S": 8,
    "C": 9,
    "R": 10
  }

  const HF48_VALUE_MAP = {
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "S": 10,
    "C": 11,
    "R": 12
  }

class Variant {

    constructor(suits, ranks, same_color, value_map) {
        this.suits = suits
        this.ranks = ranks
        this.same_color = same_color
        this.value_map = value_map
    }

    get numberOfRanks() {
        return this.ranks.length
    }

    get numberOfSuits() {
        return this.suits.length
    }

    get numberOfCards() {
        return this.suits.length * this.ranks.length
    }
} 

class Deck {
    constructor(variant, cards = freshDeck(variant)) {
      this.cards = cards
    }
  
    get numberOfCards() {
      return this.cards.length
    }

    pop() {
      return this.cards.shift()
    }
  
    push(card) {
      this.cards.push(card)
    }
  
    shuffle() {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
      }
    }
  }

  class Card {
    constructor(suit, rank) {
      this.suit = suit
      this.rank = rank
    }

    get cardName() {
      return this.rank + this.suit
    }

    get img() {
      return `${this.rank}${this.suit}.pgn`
    }
  
/*     get color() {
      return this.suit === "C" || this.suit === "S" ? "black" : "red"
    } */
  }

  function freshDeck(variant) {
    return variant.suits.flatMap(suit => {
      return variant.ranks.map(rank => {
        return new Card(suit, rank)
      })
    })
  }

const french_deck = new Variant(FRENCH_SUITS, FRENCH_RANKS, FRENCH_SUITS_BLACK, FRENCH_VALUE_MAP)
const hf48_deck = new Variant(HF_SUITS, HF48_RANKS, HF_SUITS_BLACK, HF48_VALUE_MAP)
const hf40_deck = new Variant(HF_SUITS, HF40_RANKS, HF_SUITS_BLACK, HF40_VALUE_MAP)


console.log(hf48_deck.ranks, hf48_deck.suits, hf48_deck.value_map, hf48_deck.same_color)
console.log(hf40_deck.ranks, hf40_deck.suits, hf40_deck.value_map, hf40_deck.same_color)
console.log(french_deck.ranks, french_deck.suits, french_deck.value_map, french_deck.same_color)

const french = new Deck(french_deck)
const hf48 = new Deck(hf48_deck)
const hf40 = new Deck(hf40_deck)

console.log(french)
console.log(hf48)
console.log(hf40)

console.log(hf40.cards[0].cardName, hf40.cards[0].img)
console.log(hf48.cards[1].cardName, hf48.cards[1].img)
console.log(french.cards[2].cardName, french.cards[2].img)

