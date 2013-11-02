#!/usr/bin/env python

import os.path
import csv 

def parse_credentials(filename='credentials.csv'):

    if os.path.exists(filename):
        f = open(filename, 'r')
        try:
            reader = csv.DictReader(f)
            return reader.next()
        finally:
            f.close()      

