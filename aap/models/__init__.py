import os
from pyramid.security import (
    Everyone,
    Authenticated,
    Allow,
    )
from boto import config
from boto.s3.connection import S3Connection
from boto.s3.key import Key


class S3Storage(object):

    def __init__(self,keyname='dev/data.js', bucketname='mf-aap'):
       conn =  S3Connection(config.get('Credentials','aws_access_key_id'), config.get('Credentials','aws_secret_key')) 
       bucket = conn.get_bucket(bucketname)
       k = Key(bucket)
       k.key = keyname
       self._key = k

    def read(self):
           return self._key.get_contents_as_string()

    def get(self, metadata):
       return self._key[metadata]
          

    def write(self, content):
        self._key.set_contents_from_string(content)




class User(object):

    @classmethod
    def is_known(cls, username):
        return username in ['procrastinatio@gmail.com']

class RootFactory(object):
    __acl__ = [
        (Allow, Everyone, 'view'),
        (Allow, Authenticated, 'post')
    ]

    def __init__(self, request):
        pass  
