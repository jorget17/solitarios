#!/usr/bin/env python
# coding: utf-8

# In[1]:


import re
import pandas as pd
import numpy as np


# In[2]:


with open("./hodoku_out.txt") as r:
    one_line = r.read().replace(r"    Statistics:", "ST#")
    one_line = one_line.replace('\n', 'salto_pag')
    one_line = re.sub(r'(salto_pag\d{81})', r'\n\1', one_line)
    one_line = re.sub(r'|||Statistics total.*$', '', one_line)
    one_line = re.sub(r'\)salto_pag.*ST#salto_pag', r'#ST!', one_line)
    one_line = re.sub(r'(\d{81}#)', r'\1|', one_line)
    one_line = re.sub(r'\s#\d*\s', r'#', one_line)
    one_line = re.sub(r'\d*:\s', '', one_line)
    one_line = re.sub(r'\s-\s*\d*\/', '', one_line)
    one_line = re.sub(r'(\d*#ST)', r'#\1', one_line)
    one_line = one_line.replace(r' (#', r'#')
    one_line = re.sub(r'salto_pagsalto_pag$', r'', one_line)
    one_line = one_line.replace(r'salto_pag', '!')
    one_line = re.sub(r'(!)(\d{81}#)', r'\2|', one_line)
    one_line = one_line.replace(r'|', '')
    one_line = one_line.replace(r'#', r'!')
    one_line = one_line.replace(r'!ST!', '|')

with open("./one_line.txt", "w") as w:
    w.write(one_line)


# In[3]:


with open('./one_line.txt', 'r') as input_text, open('export.csv', 'w') as export_csv:
    lines = input_text.readlines()
    
    for line in lines:
        partes = line.split('|')
        sudoku_info = partes[0].split('!')
        
        sudoku = sudoku_info[0]
        sudoku_data = sudoku_info[1].split('-')
        
        day = sudoku_data[0]
        month = sudoku_data[1]
        year = sudoku_data[2]
        origin = sudoku_data[3]
        dif = sudoku_data[4]
        num = sudoku_data[5]
        
        hodoku_level = sudoku_info[2]
        hodoku_value = int(sudoku_info[3])
        
        techniques_list = []
        
        stats = partes[1].split('!')
        for stat in stats:
            number = int(re.search('[0-9]+', stat).group(0))
            stat = re.sub('[\s]+', '', stat)
            technique = re.search('[A-Za-z\s0-9]+', stat)
            technique = re.sub('^[0-9]+', '', stat)
            
            tech_string = f'{number} {technique}'     
            
            techniques_list.append(tech_string)
            
            techniques = '·'.join(techniques_list)
            
        export_csv.write(f'{sudoku}|{day}|{month}|{year}|{origin}|{dif}|{num}|{hodoku_level}|{hodoku_value}|{techniques}\n')


# In[ ]:




