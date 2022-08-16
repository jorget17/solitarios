/* El seed debe ser un número aleatorio entre 
1 y 9007198999999993 (16 dígitos).

Los primeros 31999 devuelven el mismo tablero que el FreeCell de MS

*/

function generateSeed() {

    // const randomizerArray = [1000, 10000, 100000, 1000000, 1000000, 100000000, 1000000000, 10000000000, 10000000000];
    // const randomizer = randomizerArray[Math.floor(Math.random() * randomizerArray.length)];
    const seed = Math.floor((Math.random() * 9000000000000000));
    const deal = Math.floor(seed);
    
    return seed
}

const seed = generateSeed()

const game = deal_ms_fc_board(seed);

console.log(seed);

console.log(game);

const seed_hf40 = generateSeed()

const game_hf40 = deal_ms_fc_board_hf40(seed_hf40);

console.log(seed_hf40);

console.log(game_hf40);

const seed_hf48 = generateSeed()

const game_hf48 = deal_ms_fc_board_hf48(seed_hf48);

console.log(seed_hf48);

console.log(game_hf48);