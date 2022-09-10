# coding=utf-8

from math import factorial
from random import Random, randint
import numpy as np
from math import ceil, floor

# La clase Deck es un objeto que representa las diferentes barajas que puedan
# utilizarse, así como sus métodos: barajar, etc.

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


# Se especifica qué tipo de baraja se utiliza en este solitario en concreto, en este case la francesa

gameDeck = decks['frenchDeck']


# Se crea la partida. Esto genera un mazo de cartas de la baraja francesa en un orden concreto con dos datos:
# 1. deal > la lista con las cartas en desorden, cada carta es un objeto con atributos suit, rank, value, color, cardName y cardImg
# 2. seed > el número aleatorio concreto que ha generado este orden de cardas. Siempre que se utilice este seed el orden de las cartas será el mismo.

game = shuffleDeck(gameDeck)


print(game)


print(game['seed'])


deal = game['deal']


print(deal)


deal_cards = [c['cardName'] for c in deal]


print(deal_cards)


def create_rows(deal, num):
  chunk = ceil(len(deal) / num)
  t = [deal[i:i+num] for i in range(0, len(deal), num)]
  return t


t = create_rows(deal_cards, 8)


print(t)


rows = create_rows(deal_cards, 12)


print(rows)


for r in rows:
  print(r[0])


t1 = [r[0] for r in rows]


print(t1)


def t1(rows):
  indx = 0
  tableaus = []
  while indx < len(rows):
    try:
      tb = [r[indx] for r in rows]
      tableaus.append(tb)
    except:
      pass
    indx += 1

  return tableaus


tableaus = t1(rows)


print(tableaus)

