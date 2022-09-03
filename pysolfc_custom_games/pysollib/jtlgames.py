#!/usr/bin/env python
# -*- mode: python; coding: utf-8; -*-
# ---------------------------------------------------------------------------
#
# Copyright (C) 1998-2003 Markus Franz Xaver Johannes Oberhumer
# Copyright (C) 2003 Mt. Hood Playing Card Co.
# Copyright (C) 2005-2009 Skomoroh
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
# ---------------------------------------------------------------------------

from pysollib.game import Game
from pysollib.gamedb import GI, GameInfo, registerGame
from pysollib.games.spider import Spider_AC_Foundation
from pysollib.hint import DefaultHint
from pysollib.hint import FreeCellSolverWrapper, FreeCellType_Hint
from pysollib.layout import Layout
from pysollib.mfxutil import kwdefault
from pysollib.stack import \
        AC_FoundationStack, \
        AC_RowStack, \
        BasicRowStack, \
        FreeCell_AC_RowStack, \
        FreeCell_SS_RowStack, \
        InitialDealTalonStack, \
        KingAC_RowStack, \
        OpenStack, \
        RK_FoundationStack, \
        ReserveStack, \
        SS_FoundationStack, \
        Stack, \
        StackWrapper, \
        SuperMoveAC_RowStack, \
        SuperMoveRK_RowStack, \
        isAlternateColorSequence
from pysollib.util import ACE, ANY_SUIT, KING, NO_RANK, UNLIMITED_CARDS

from pysollib.games.freecell import FreeCell

# ************************************************************************
# * Hot Bath
# - Same as Bath but Empty Spaces can be filled with any card -
# ************************************************************************

class HotBath(FreeCell):
    Solver_Class = FreeCellSolverWrapper()
    RowStack_Class = StackWrapper(SuperMoveAC_RowStack)

    def createGame(self):
        FreeCell.createGame(self, rows=10, reserves=2)

    def startGame(self):
        for i in range(6):
            self.s.talon.dealRow(rows=self.s.rows[i:], frames=0)
        self.startDealSample()
        self.s.talon.dealRow(rows=self.s.rows[6:])
        self.s.talon.dealRow(rows=self.s.rows[7:])

# ************************************************************************
# * Warm Bath
# - Same as Bath but Empty Spaces can be filled with any card. Only 9 Tableaus.
# ************************************************************************

class WarmBath(FreeCell):
    Solver_Class = FreeCellSolverWrapper()
    RowStack_Class = StackWrapper(SuperMoveAC_RowStack)

    def createGame(self):
        FreeCell.createGame(self, rows=9, reserves=2)

    def startGame(self):
        for i in range(6):
            self.s.talon.dealRow(rows=self.s.rows[i:], frames=0)
        self.startDealSample()
        self.s.talon.dealRow(rows=self.s.rows[2:])
        self.s.talon.dealRow(rows=self.s.rows[3:])

# ************************************************************************
# * Register Games with id 300.000 and up
# ************************************************************************

registerGame(GameInfo(300000, HotBath, "Hot Bath",
                      GI.GT_FREECELL | GI.GT_OPEN, 1, 0, GI.SL_SKILL))
registerGame(GameInfo(300001, WarmBath, "Warm Bath",
                      GI.GT_FREECELL | GI.GT_OPEN, 1, 0, GI.SL_SKILL))
