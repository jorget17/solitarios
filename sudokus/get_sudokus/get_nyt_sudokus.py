"""
sudoku.py -- scrape common web sources for Sudokus
"""

import json
from datetime import datetime
from dataclasses import dataclass

import requests
from bs4 import BeautifulSoup

sudokuexchange_head = "https://sudokuexchange.com/play/?s="


@dataclass
class Puzzle:
    name: str
    source_url: str
    sudokuexchange_url: str

    def __repr__(self):
        # format as markdown
        return f"**{self.name}** ([source]({self.source_url})): [SudokuExchange link]({self.sudokuexchange_url})"


def get_nytimes():
    """Scrape all three NY Times puzzles"""

    nyt_url = "https://www.nytimes.com/puzzles/sudoku/easy"
    text = requests.get(nyt_url).text
    soup = BeautifulSoup(text, features="html.parser")

    # find the script that starts with `window.gameData =`
    # usually the first but who knows
    for script in soup.find_all("script", type="text/javascript"):
        if not script.contents:
            continue

        contents = script.contents[0]
        start_str = "window.gameData = "
        if contents.startswith(start_str):
            contents = contents.replace(start_str, "")
            puzzle_info = json.loads(contents)

            break

    # now we have puzzle_info as a dict with keys easy, medium, hard
    # and some levels of nesting; get the puzzle information and
    # create the SudokuExchange link
    puzzles = []
    for difficulty in ("easy", "medium", "hard"):
        digits = puzzle_info[difficulty]["puzzle_data"]["puzzle"]
        digits_str = "".join(str(x) for x in digits)

        source_url = nyt_url.replace("easy", "difficulty")
        se_url = f"{sudokuexchange_head}{digits_str}"
        puzzles.append(Puzzle(f"NY Times {difficulty}", source_url, se_url))

    return puzzles

if __name__ == "__main__":
    nytimes_puzzles = get_nytimes()
    for puzzle in nytimes_puzzles:
        print(puzzle)
