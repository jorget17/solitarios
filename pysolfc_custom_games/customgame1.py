## -*- coding: utf-8 -*-
## THIS FILE WAS GENERATED AUTOMATICALLY BY THE SOLITAIRE WIZARD
## DO NOT EDIT

from pysollib.customgame import CustomGame, registerCustomGame

class MyCustomGame(CustomGame):
    WIZARD_VERSION = 1
    SETTINGS = {
        'preset': 'FreeCell',
        'name': 'FreeCell By Suit - 6 FC - Only K',
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
