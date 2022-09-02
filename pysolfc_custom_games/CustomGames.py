## -*- coding: utf-8 -*-
## THIS FILE WAS GENERATED AUTOMATICALLY BY THE SOLITAIRE WIZARD
## DO NOT EDIT

from pysollib.customgame import CustomGame, registerCustomGame

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

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'name': 'Blind FreeCell',
        'rows_max_move': 'Top card',
        'rows_super_move': 1,
        'reserves_num': 4,
        'deal_face_down': 1,
        'deal_face_up': 5,
        'gameid': 200007,
        }

registerCustomGame(MyCustomGame)
