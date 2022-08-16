"use strict";
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
        rand: function() {
            this.setSeed((this.getSeed() * 214013 + 2531011) & 0x7FFFFFFF);
            return ((this.getSeed() >> 16) & 0x7fff);
        },
        max_rand: function(mymax) {
            return this.rand() % mymax;
        },
        shuffle: function(deck) {
            if (deck.length) {
                var i = deck.length;
                while (--i) {
                    var j = this.max_rand(i+1);
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
 
function render_deck(ranks, suits, seed) {
    var randomizer = new MSRand({ seed: seed });
    var num_cols = 1;
 
    var _perl_range = function(start, end) {
        var ret = [];
 
        for (var i = start; i <= end; i++) {
            ret.push(i);
        }
 
        return ret;
    };

    var columns = _perl_range(0, num_cols-1).map(function () { return []; });
    var deck = _perl_range(0, suits.length*ranks.length-1);
 
    randomizer.shuffle(deck);
 
    deck = deck.reverse()
 
    for (var i = 0; i < (ranks.length * suits.length); i++) {
        columns[i % num_cols].push(deck[i]);
    }
 
    var render_card = function (card) {
        var suit = (card % suits.length);
        var rank = Math.floor(card / suits.length);
 
        return ranks.charAt(rank) + suits.charAt(suit);
    }
 
    var render_column = function(col) {
        return col.map(render_card).join(",");
    }

    let game_string = columns.map(render_column).join("");
 
    return game_string.split(',');
     
}