from shuffle import shuffleDeck, shuffleDeckFromNumber, createGameDeck, decks

gameDeck = decks['frenchDeck']

game1 = shuffleDeck(gameDeck)
print(game1['game'])
print(game1['seed'])