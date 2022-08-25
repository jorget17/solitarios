from math import factorial
from random import Random, randint

class Deck: 
    def __init__(self, ranksValues, suitsColors):
        self.ranksValues = ranksValues
        self.suitsColors = suitsColors

    def getRanks(self):
        return [r for r in self.ranksValues]

    def getSuits(self):
        return [s for s in self.suitsColors]

    def getCards(self):
        return [r+s for s in self.getSuits() for r in self.getRanks()]

    def getLenght(self):
        return len(self.getCards())


def shuffleDeck(deck):
    game = []
    seed = randint(0, factorial(deck.getLenght()))
    orderedDeck = deck.getCards()
    Random(seed).shuffle(orderedDeck)
    game = orderedDeck
    return {'game': game,
            'seed': seed}

def shuffleDeckFromNumber(deck, seed):
    game = []
    orderedDeck = deck.getCards()
    Random(seed).shuffle(orderedDeck)
    game = orderedDeck
    return {'game': game,
            'seed': seed}

decks = {'frenchDeck' : Deck({'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13},
        {'C': 'black', 'S': 'black', 'D': 'red', 'H': 'red'}),

        'esp48' : Deck({'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'S': 10, 'C': 11, 'R': 12},
        {'O': 'black', 'C': 'black', 'E': 'red', 'B': 'red'}),

        'esp40' : Deck({'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, 'S': 8, 'C': 9, 'R': 10},
        {'O': 'black', 'C': 'black', 'E': 'red', 'B': 'red'})

}