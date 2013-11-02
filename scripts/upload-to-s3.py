#!/usr/bin/env python

import os, sys
from boto import config
from boto.s3.connection import S3Connection
from boto.s3.key import Key



def get_env():
    print "Upload to stagging;"
    print "1. dev"
    print "2. int"
    print "3. prod"

    choice = raw_input('Enter your choice [1-3] : ')

    choice = int(choice)

    stagging = {1: 'dev', 2: 'int', 3: 'prod'}

    return stagging.get(choice)


def upload(data_file, stagging='dev'):

    conn =  S3Connection(config.get('Credentials','aws_access_key_id'), config.get('Credentials','aws_secret_key'))
    
    bucket = conn.get_bucket('mf-aap')
    bucket.configure_versioning(True)
    k = Key(bucket)
    k.key = '%s/data.js' % stagging




    with open(data_file) as file:  
        data = file.read()
        k.set_contents_from_string(data)


if __name__ == '__main__':

    if len(sys.argv) < 2:
        sys.exit('Usage: %s <data file>' % sys.argv[0])

    data_file = sys.argv[1]

    boto_cfg = os.path.abspath('../boto.cfg')
    if not os.path.exists(boto_cfg):
        sys.exit('ERROR: Boto config file was not found in your root directory!')
    else:
        config.load_credential_file(boto_cfg)
        upload(data_file, stagging=get_env())

