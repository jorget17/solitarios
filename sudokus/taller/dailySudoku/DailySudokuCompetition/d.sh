#!/bin/bash
i=1
while [ $i -le 906 ]
do
    wget https://www.sudoku.org.uk/PrintWeeklySudoku.asp?number=$i
    i=$(( $i + 1 ))
done
