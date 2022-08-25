from math import factorial
from random import Random, randint

class Deck: {
    
}


def shuffle_deck(deck, seed=randint(0, factorial(104))):
    deal = []
    Random(seed).shuffle(deck)
    deal = deck
    return {
        "deal": deal,
        "seed": seed
    }

suits = ['H', 'S', 'D', 'C']

ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

fra = [r+s for s in suits for r in ranks]

palos = ['O', 'C', 'E', 'B']

esp48 = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'S', 'C', 'R']
esp40 = ['A', '2', '3', '4', '5', '6', '7', 'S', 'C', 'R']

hf40 = [b+p for p in palos for b in esp48]
hf48 = [b+p for p in palos for b in esp40]

# print(fra)

# print(shuffle_deck(fra, 1))

print(hf40)

print(shuffle_deck(hf40))