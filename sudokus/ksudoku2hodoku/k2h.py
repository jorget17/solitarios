# -*- coding: utf-8 -*-
import numpy as np

# Paso 1: convertir las letras de ksudoku en números

ksudoku = input('Introduce el KSudoku: ')

# Puesto que el orden en el que se producen las sustituciones es irrelevante, vamos a usar un diccionario
# para albergar todos los cambios

d = {'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5', 'g': '6', 'h': '7', 'i': '8', 'j': '9', '_': '0'}

def replace_all(text, dic):
    for i, j in dic.items():
        text = text.replace(i, j)
    return text

ksudoku = replace_all(ksudoku, d)

# Paso 2: Separar toda la cadena en listas más pequeñas que representen las columnas

columnas = [ksudoku[index : index + 9] for index in range(0, len(ksudoku), 9)]

# Paso 3: Separar cada número en elementos individuales dentro de la columna, para poder transponer

columnas = [[numero for numero in conjunto] for conjunto in columnas]

filas = np.transpose(columnas)

filas = filas.tolist()

filas = [''.join(fila[:]) for fila in filas]

hodoku = ''.join(filas)

with open('./h.txt', 'w') as h:
    h.write(hodoku)

