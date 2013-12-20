#!/usr/bin/env python

import os.path
import csv 
from cStringIO import StringIO

def parse_credentials(filename='credentials.csv'):

    if os.path.exists(filename):
        f = open(filename, 'r')
        try:
            reader = csv.DictReader(f)
            return reader.next()
        finally:
            f.close()      

def json_to_csv(data):
    f =  StringIO()
    export = None
    try:
        fieldnames = ['amt','name', 'ident', 'stufe','metanode', 'georefdat', 'fachst', 'zugberech', 'zugberech_text', 'echkateg', 'echkateg_text', 'nachfzeitr', 'nachfrhythm', 'datenmenge', 'imjr', 'datenzuw', 'bemerk', 'verf_zs_aufb', 'verf_zs_begr', 'verf_ws_aufb', 'verf_ws_begr', 'verf_ws_inpu', 'verf_ents', 'verf_beme', 'arch_zs_bewe', 'arch_zs_bewe_text', 'arch_zs_begr', 'arch_ws_bewe', 'arch_ws_bewe_text', 'arch_ws_begr', 'arch_ws_inpu', 'arch_ba_bewe', 'arch_ba_bewe_text', 'arch_ba_begr', 'arch_arts', 'arch_ents', 'arch_ents_text', 'arch_beme', 'erfass', 'id', 'parentId', 'ident_prefix', 'ident_suffix', 'modif', 'inherited','path']
        writer = csv.DictWriter(f, fieldnames=fieldnames,quoting=csv.QUOTE_NONNUMERIC)
        headers = dict( (n,n) for n in fieldnames )
        writer.writerow(headers)
        for i in data:
            writer.writerow(DictEncodingProxy(i,'cp1252'))
            #writer.writerow({k:'' if v is None else v.encode('utf8') for k,v in i.items()})
        export = f.getvalue()
    finally:
        f.close()

    return export


class DictEncodingProxy(object):
    def __init__(self, d, encoding='utf-8'):
        self.d = d
        self.encoding = encoding
    def __iter__(self):
        return self.d.__iter__()
    def get(self, item, default=None):
        i = self.d.get(item, default)
        if isinstance(i, unicode):
            return i.encode(self.encoding)
        return i

