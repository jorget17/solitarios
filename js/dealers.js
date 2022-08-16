/* El seed debe ser un número aleatorio entre 
1 y 9007198999999993 (16 dígitos).

Los primeros 31999 devuelven el mismo tablero que el FreeCell de MS

*/

function generateSeed() {

    // const randomizerArray = [1000, 10000, 100000, 1000000, 1000000, 100000000, 1000000000, 10000000000, 10000000000];
    // const randomizer = randomizerArray[Math.floor(Math.random() * randomizerArray.length)];
    const seed = Math.floor((Math.random() * 8999999999999999));
    const deal = Math.floor(seed);
    
    return seed
}

const french_ranks = 'A23456789TJQK';
const french_suits = 'CDHS';

const hf40_ranks = 'A234567SCR';
const hf48_ranks = 'A23456789SCR';

const hf_suits = 'OCEB';

// const seed = generateSeed()

// const seed = 1

// const seed = 11982

const seed = 4609202062120333

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

