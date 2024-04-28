## -*- coding: utf-8 -*-
## THIS FILE WAS GENERATED AUTOMATICALLY BY THE SOLITAIRE WIZARD
## DO NOT EDIT

from pysollib.customgame import CustomGame, registerCustomGame

# Six Off - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Six Off',
        'skill_level': 'Mostly skill',
        'rows_type': 'Same suit',
        'rows_base_card': 'King',
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 6,
        'deal_face_up': 6,
        'gameid': 200001,
            }

registerCustomGame(MyCustomGame)

# Five Off - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Five Off',
        'skill_level': 'Mostly skill',
        'rows_type': 'Same suit',
        'rows_base_card': 'King',
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 5,
        'deal_face_up': 5,
        'gameid': 200002,
            }

registerCustomGame(MyCustomGame)

# Free Seven - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Free Seven',
        'skill_level': 'Mostly skill',
        'rows_num': 7,
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'deal_face_up': 6,
        'gameid': 200003,
            }

registerCustomGame(MyCustomGame)

# Warm Bath - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Warm Bath',
        'rows_num': 9,
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 2,
        'deal_type': 'Triangle',
        'gameid': 200004,
        }

registerCustomGame(MyCustomGame)

# Hot Bath - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Hot Bath',
        'rows_num': 10,
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 2,
        'deal_type': 'Triangle',
        'gameid': 200005,
        }

registerCustomGame(MyCustomGame)

# Base FreeCell - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Base FreeCell',
        'skill_level': 'Mostly skill',
        'found_base_card': 'Any',
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'deal_face_up': 6,
        'deal_found': 1,
        'gameid': 200006,
        }

registerCustomGame(MyCustomGame)

# Blind FreeCell - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Blind FreeCell',
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 4,
        'deal_face_down': 1,
        'deal_face_up': 5,
        'gameid': 200007,
        }

registerCustomGame(MyCustomGame)

# Fourty Thieves And Two Free Cells - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Fourty Thieves And Two Free Cells',
        'skill_level': 'Mostly skill',
        'decks': 'Two',
        'talon': 'Deal to waste',
        'rows_num': 10,
        'rows_type': 'Same suit',
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 2,
        'deal_face_up': 4,
        'deal_max_cards': 40,
        'gameid': 200008,
            }

registerCustomGame(MyCustomGame)

# Fourty Thieves And A Free Cell - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Fourty Thieves And A Free Cell',
        'skill_level': 'Mostly skill',
        'decks': 'Two',
        'talon': 'Deal to waste',
        'rows_num': 10,
        'rows_type': 'Same suit',
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 1,
        'deal_face_up': 4,
        'deal_max_cards': 40,
        'gameid': 200009,
            }

registerCustomGame(MyCustomGame)

# Empty Streets - Invented by El Cartero Solitario

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'name': 'Empty Streets',
        'found_equal': 0,
        'rows_num': 10,
        'rows_type': 'Any suit but the same',
        'rows_max_move': 'Top card',
        'rows_wrap': 1,
        'rows_super_move': 1,
        'reserves_num': 0,
        'reserves_max_accept': 0,
        'gameid': 200010,
        }

registerCustomGame(MyCustomGame)

# Four by Ten - Invented by Thomas Warfield in Pretty Good Solitaire

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'Four by Ten',
        'skill_level': 'Mostly skill',
        'rows_num': 4,
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 10,
        'deal_face_up': 13,
        'gameid': 200011,
            }

registerCustomGame(MyCustomGame)
