/*
Del 0 al 31999 devuelven el mismo tablero que el FreeCell de MS,
utilizado por GoodSol y PysolFC.
Investigar cómo conseguir ampliar a 1000000. Implantar el utilizado
por PysolFC.

*/

/* El seed debe ser un número aleatorio entre 
1 y 9007198999999993 (16 dígitos).*/

function generateSeed() {

    const seed = Math.floor((Math.random() * 8999999999999999));

    return seed
}



// Microsoft Freecell Genarator

//No entiendo mucho cómo funciona esta parte, es una implantación en Javascript del sistema de 
//generar shuffles de Microsoft Freecell. Es interesante que los números sean los mismos, así que
//he mantenido esta parte. La he adaptado en lo posible para que genere shuffles con otras barajas.

/*
 * Microsoft C Run-time-Library-compatible Random Number Generator
 * Copyright by Shlomi Fish, 2011.
 * Released under the MIT/X11 License
 * ( http://en.wikipedia.org/wiki/MIT_License ).
 * */
/* This uses Joose 2.x-or-above, an object system for JavaScript - http://code.google.com/p/joose-js/ . */


Class('MSRand', {
    has: {
        seed: { is: rw, },
    },
    methods: {
        rand: function () {
            this.setSeed((this.getSeed() * 214013 + 2531011) & 0x7FFFFFFF);
            return ((this.getSeed() >> 16) & 0x7fff);
        },
        max_rand: function (mymax) {
            return this.rand() % mymax;
        },
        shuffle: function (deck) {
            if (deck.length) {
                var i = deck.length;
                while (--i) {
                    var j = this.max_rand(i + 1);
                    var tmp = deck[i];
                    deck[i] = deck[j];
                    deck[j] = tmp;
                }
            }
            return deck;
        },
    },
});

/*
 * Microsoft Windows Freecell / Freecell Pro boards generation.
 *
 * See:
 *
 * - http://rosettacode.org/wiki/Deal_cards_for_FreeCell
 *
 * - http://www.solitairelaboratory.com/mshuffle.txt
 *
 * Under MIT/X11 Licence.
 *
 * */

function deal_ms_fc_board(seed, ranks, suits) {
    var randomizer = new MSRand({ seed: seed });
    var num_cols = 1;

    var _perl_range = function (start, end) {
        var ret = [];

        for (var i = start; i <= end; i++) {
            ret.push(i);
        }

        return ret;
    };

    var columns = _perl_range(0, num_cols - 1).map(function () { return []; });
    var deck = _perl_range(0, suits.length * ranks.length - 1);

    randomizer.shuffle(deck);

    deck = deck.reverse()

    for (var i = 0; i < suits.length * ranks.length; i++) {
        columns[i % num_cols].push(deck[i]);
    }

    var render_card = function (card) {
        var suit = (card % suits.length);
        var rank = Math.floor(card / suits.length);

        return ranks.charAt(rank) + suits.charAt(suit);
    }

    var render_column = function (col) {
        return col.map(render_card);
    }
    return columns.map(render_column)[0];
}

/* Esta clase genera un objeto tipo DeckMap, que indicará 
los valores de cada rank y los colores de cada suit para cada tipo de baraja. */

class DeckMap {
    constructor(deckName, ranks, suits, matrix) {
        this.deckName = deckName
        this.suits = suits
        this.ranks = ranks
        this.matrix = matrix
    }
}

//En este apartado se establecen las constantes para generar distintos
//tipos de Barajas (francesa, Española de 40 cartas, de 48, etc).

//Se tienen que añadir los valores de RANKS y SUITS porque si se utilizan los mismos datos
//sacados de las Keys del objeto RANKS_VALUES los desordena y el resultado ya no es la misma
//disposición que el Freecell de MS. La cadena 'A23456789TJQK' se convierte en '23456789AJKT'
//si se utiliza Object.keys(FRENCH_RANKS_VALUES),join() y no he conseguido buscar la forma
//de dejarla de forma correcta programáticamente (de momento.). Hay datos repetidos, pero 
//tampoco es demasiado.

//Constantes Baraja Francesa 52 Cartas
const FRENCH_RANKS = 'A23456789TJQK'
const FRENCH_SUITS = 'CDHS'
const FRENCH_SUITS_COLORS = { "C": 'black', "D": 'red', "H": 'red', "S": 'black' }
const FRENCH_RANKS_VALUES = { 'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13 }
const FRENCH_MAP = { ranksValues: FRENCH_RANKS_VALUES, suitsColors: FRENCH_SUITS_COLORS }

//Constantes Baraja Española (40 y 48 Cartas)
const ESP40_RANKS = 'A234567SCR'
const ESP48_RANKS = 'A23456789SCR'
const ESP_SUITS = 'OCEB'
const ESP_SUITS_COLORS = { "O": 'black', "C": 'black', "E": 'red', "B": 'red' }
const ESP48_RANKS_VALUES = { 'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'S': 10, 'C': 11, 'R': 12 }
const ESP40_RANKS_VALUES = { 'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, 'S': 8, 'C': 9, 'R': 10 }

const ESP40_MAP = { ranksValues: ESP40_RANKS_VALUES, suitsColors: ESP_SUITS_COLORS }
const ESP48_MAP = { ranksValues: ESP48_RANKS_VALUES, suitsColors: ESP_SUITS_COLORS }

//Constantes Baraja Francesa Sin Figuras (40 Cartas)
const FRENCH_NO_FIGURES_RANKS = 'A23456789T'

//Aquí se crean diferentes tipos de barajas utilizando las constantes anteriores

//Baraja Francesa
const frenchDeck = new DeckMap('Baraja Francesa de 52 Cartas', FRENCH_RANKS, FRENCH_SUITS, FRENCH_MAP)

//Baraja Francesa sin Figuras
const frNoFig = new DeckMap('Baraja Francesa sin Figuras - 40 Cartas', FRENCH_NO_FIGURES_RANKS, FRENCH_SUITS, FRENCH_MAP)

//Baraja Española de 40 cartas (esp40Deck)
const espDeck40 = new DeckMap('Baraja Española de 40 Cartas', ESP40_RANKS, ESP_SUITS, ESP40_MAP)

//Baraja Española de 48 cartas (esp40Deck)
const espDeck48 = new DeckMap('Baraja Española de 48 Cartas', ESP48_RANKS, ESP_SUITS, ESP48_MAP)


function generateGameDeck(deckMap) {
    const seed = generateSeed()
    const dealArray = deal_ms_fc_board(seed, deckMap.ranks, deckMap.suits)

    const gameDeck = []
    dealArray.forEach(element => {
        cardRank = element[0]
        cardSuit = element[1]
        cardValue = deckMap.matrix.ranksValues[element[0]]
        cardColor = deckMap.matrix.suitsColors[element[1]]
        cardImg = `${element[0]}${element[1]}.png`
        gameDeck.push({ rank: cardRank, suit: cardSuit, value: cardValue, color: cardColor, cardImg: cardImg })

    });
    return { seed: seed, cards: gameDeck, deck: deckMap }
}

function generateGameDeckFromNumber(seed, deckMap) {
    const dealArray = deal_ms_fc_board(seed, deckMap.ranks, deckMap.suits)

    const gameDeck = []
    dealArray.forEach(element => {
        cardRank = element[0]
        cardSuit = element[1]
        cardValue = deckMap.matrix.ranksValues[element[0]]
        cardColor = deckMap.matrix.suitsColors[element[1]]
        cardImg = `${element[0]}${element[1]}.png`
        gameDeck.push({ rank: cardRank, suit: cardSuit, value: cardValue, color: cardColor, cardImg: cardImg })

    });
    return { seed: seed, cards: gameDeck, deck: deckMap }
}

gameSeed = generateGameDeck(frenchDeck)
console.log(gameSeed)

gameNumber = generateGameDeckFromNumber(6326814011889673, frenchDeck)
console.log(gameNumber)

gameSeed = generateGameDeck(frNoFig)
console.log(gameSeed)

gameSeed = generateGameDeck(espDeck40)
console.log(gameSeed)

gameSeed = generateGameDeck(espDeck48)
console.log(gameSeed)

gameNumber = generateGameDeckFromNumber(3011405342292310, espDeck48)
console.log(gameNumber.cards)