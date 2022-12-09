#!/usr/bin/env python
# coding: utf-8

# In[1]:


import re
import pandas as pd
import numpy as np


# In[3]:


with open('./hg.txt', 'r') as r:
    hg = r.read()
    
    #1 convierte el texto en una sola linea
    hg = hg.replace('.', '0')


with open("./hg.txt", "w") as w:
    w.write(hg)