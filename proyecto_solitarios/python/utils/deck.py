# coding=utf-8

from math import factorial
from random import Random, randint

# La clase Deck es un objeto que representa las diferentes barajas que puedan
# utilizarse, así como sus métodos: barajarse, etc.

class Deck:
    def __init__(self, deckName, ranks, suits, matrix):
        self.deckName = deckName
        self.ranks = ranks
        self.suits = suits
        self.matrix = matrix

    def getCards(self):
        cardList = [r+s for s in self.suits for r in self.ranks]
        cards = []
        for c in cardList:
            rank = c[0]
            suit = c[1]
            value = self.matrix['ranksValues'][c[0]]
            color = self.matrix['suitsColors'][c[1]]
            cards.append({'rank': rank, 'suit': suit, 'value': value,
                         'color': color, 'cardName': f'{rank}{suit}',
                          'cardImg': f'{rank}{suit}.png'})
        return cards

    def getLenght(self):
        return len(self.getCards())


def shuffleDeck(deck): # Baraja las cartas con un seed aleatorio
    deal = []
    seed = randint(0, factorial(deck.getLenght()))
    sortedDeck = deck.getCards()
    Random(seed).shuffle(sortedDeck)
    deal = sortedDeck
    return {'deal': deal,
            'seed': seed}


def shuffleDeckFromNumber(deck, seed): # Baraja las cartas con un seed determinado
    deal = []
    sortedDeck = deck.getCards()
    Random(seed).shuffle(sortedDeck)
    deal = sortedDeck
    return {'deal': deal,
            'seed': seed}


# Objeto que representa las diferentas barajas que se utilizan en todos los solitarios.
# Cada solitario utiliza una baraja concreta que importa de este único objeto.

# La baraja se selecciona asignando una variable al inicio de cada solitario que
# apunta al objeto decks. Por ejemplo, para jugar un solitario con la baraja española
# de 40 cartas se utilizaría lo siguiente:

# gameDeck = decks['esp40']

decks = {
    'frenchDeck': Deck('Baraja Francesa de 52 Cartas',
                       'A23456789TJQK', 'CSDH',
                       {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
                                        '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13},
                        'suitsColors': {'C': 'black', 'S': 'black', 'H': 'red', 'D': 'red'}}),

    'french2Decks': Deck('Doble Baraja Francesa - 104 Cartas',
                         'A23456789TJQKA23456789TJQK', 'CSDH',
                         {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
                                          '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13},
                          'suitsColors': {'C': 'black', 'S': 'black', 'H': 'red', 'D': 'red'}}),

    'esp48': Deck('Baraja Española de 48 Cartas',
                  'A23456789SCR', 'OCEB',
                  {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
                                   '8': 8, '9': 9, 'S': 10, 'C': 11, 'R': 12},
                   'suitsColors': {'O': 'black', 'C': 'black', 'E': 'red', 'B': 'red'}}),

    'esp40': Deck('Baraja Española de 40 Cartas',
                  'A234567SCR', 'OCEB',
                  {'ranksValues': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
                                   'S': 8, 'C': 9, 'R': 10},
                   'suitsColors': {'O': 'black', 'C': 'black', 'E': 'red', 'B': 'red'}})

}
