/* El seed debe ser un número aleatorio entre 
1 y 9007198999999993 (16 dígitos).

Los primeros 31999 devuelven el mismo tablero que el FreeCell de MS

*/

function generateSeed() {

    const seed = Math.floor((Math.random() * 8999999999999999));

    return seed
}

const french_ranks = 'A23456789TJQK';
const french_suits = 'CDHS';
const french_values = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'T': 10,
    'J': 11,
    'Q': 12,
    'K': 13
}

const french_colors = { 'C': 'black', 'D': 'red', 'H': 'red', 'S': 'black' };

const hf40_ranks = 'A234567SCR';

const hf40_values = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    'S': 8,
    'C': 9,
    'R': 10
};

const hf48_ranks = 'A23456789SCR';

const hf48_values = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'S': 10,
    'C': 11,
    'R': 12
};

const hf_suits = 'OCEB';

const hf_colors = { 'O': 'black', 'C': 'black', 'E': 'red', 'B': 'red' };

// const seed = generateSeed()

// const seed = 1

// const seed = 11982

const seed = 11982

const game = deal_ms_fc_board(seed);

console.log(seed);

console.log(game);

const game_deck = render_deck(french_ranks, french_suits, seed);

console.log(game_deck);

// const seed_hf40 = generateSeed()

const game_hf40 = deal_ms_fc_board_hf40(seed);

// console.log(seed_hf40);

console.log(game_hf40);

const game_deck_40 = render_deck(hf40_ranks, hf_suits, seed);
console.log(game_deck_40);

// const seed_hf48 = generateSeed();

const game_hf48 = deal_ms_fc_board_hf48(seed);

// console.log(seed_hf48);

console.log(game_hf48);

const game_deck_48 = render_deck(hf48_ranks, hf_suits, seed);

console.log(game_deck_48);

// const seed_deck = generateSeed();

// const game_deck = render_deck(seed);

// console.log(seed_deck);

