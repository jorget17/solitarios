# coding=utf-8

from math import factorial
from random import Random, randint

class Deck: 
    def __init__(self, deckName, ranks, suits, matrix):
        self.deckName = deckName
        self.ranks = ranks
        self.suits = suits
        self.matrix = matrix

    def getCards(self):
        return [r+s for s in self.suits for r in self.ranks]

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

def generateCards(deck):
    pass

def createGameDeck (deck):
    pass

decks = {
        'frenchDeck' : Deck('Baraja Francesa de 52 Cartas',
        'A23456789TJQK', 'CSDH', 
        {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
        '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13},
        'suitsColors': {'C': 'black', 'S': 'black', 'H': 'red', 'D': 'red'}}),

        'french2Decks' : Deck('Doble Baraja Francesa - 104 Cartas',
        'A23456789TJQKA23456789TJQK', 'CSDH',
        {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
        '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13},
        'suitsColors': {'C': 'black', 'S': 'black', 'H': 'red', 'D': 'red'}}),

        'esp48' : Deck('Baraja Española de 48 Cartas',
        'A23456789SCR', 'OCEB',
        {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
        '8': 8, '9': 9, 'S': 10, 'C': 11, 'R': 12},
        'suitsColors': {'O': 'black', 'C': 'black', 'E': 'red', 'B': 'red'}}),

        'esp40' : Deck('Baraja Española de 40 Cartas',
        'A234567SCR', 'OCEB',
        {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
        'S': 8, 'C': 9, 'R': 10},
        'suitsColors': {'O': 'black', 'C': 'black', 'E': 'red', 'B': 'red'}})

}