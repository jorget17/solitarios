#!/usr/bin/env python
# coding: utf-8

# In[4]:


import re
import pandas as pd
import numpy as np


# In[5]:


with open('./hodoku_generated_out.txt', 'r') as r:
    one_line = r.read()
    
    #1 convierte el texto en una sola linea
    one_line = re.sub(r'\n', r'salto_pag', one_line)
    
    #2 crea un salto de página antes de cada sudoku
    one_line = re.sub(r'(salto_pag)([0-9]{81})', r'\n\2', one_line)
    
    #3 elimina las estadisticas totales al final del documento
    one_line = re.sub(r'salto_pagsalto_pagStatistics total.*salto_pag$', r'', one_line)
    
    #4 elimina los pasos individuales para la resolucion de cada sudoku
    one_line = re.sub(r'\)salto_pag.*Statistics:salto_pag', r'|#ST', one_line)
    
    #5 arregla el nivel de dificultad y su valor numérico
    one_line = re.sub(r' \(([0-9]{3,7})', r'#\1', one_line)
    
    #6 elimina la numeración asignada por Hodoku a los sudokus
    one_line = re.sub(r' #[0-9]+ ', r'#', one_line)
    
    #7 extrae el numero de veces que se repiten los pasos
    one_line = re.sub(r'( +)([0-9]+)( -)', r'!\2¡', one_line)
    
    #8 elimina los espacios y el número anterior al /
    one_line = re.sub(r' +[0-9]+/ +[0-9]+:', r'', one_line)
    
    #9 elimina los salto_pag añadidos en el paso 1
    one_line = one_line.replace('salto_pag', '')
    
    #10 elimina el espacio entre el numero de pasos y el paso
    one_line = one_line.replace('¡ ', '¡')
    
    #11 elimina los espacios en blanco
    one_line = one_line.replace(' ', '')
    
    #12 elimina #ST!
    one_line = one_line.replace('#ST!', '')
    
    #13 sustituye los # por -
    one_line = one_line.replace('#', '-')

with open("./hg_one_line.txt", "w") as w:
    w.write(one_line)


# In[6]:


with open('./hg_one_line.txt', 'r') as input_text, open('hg_export.csv', 'w') as export_csv:
    lines = input_text.readlines()
    
    for line in lines:
        
        partes = line.split('|')
        
        sudoku_info = partes[0].split('-')
        
        sudoku, stat, hodoku_level, hodoku_value = sudoku_info 
                
        techniques_list = []
        
        stats = partes[1].split('!')
        
        for stat in stats:
            step = stat.split('¡')
            
            step_number, step_name = step
            
            step_string = f'{step_number} {step_name}'
            step_string = step_string.replace('\n', '')
            
            techniques_list.append(step_string)
            
            techniques = '·'.join(techniques_list)
            
        export_csv.write(f'{sudoku}|{hodoku_level}|{hodoku_value}|{techniques}\n')


# In[ ]:




