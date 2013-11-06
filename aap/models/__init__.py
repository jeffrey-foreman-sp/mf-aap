import os
import csv
import time
import uuid
import random
from pyramid.security import (
    Everyone,
    Authenticated,
    Allow,
    )
from boto import config
import boto.sdb
from boto.s3.connection import S3Connection
from boto.s3.key import Key

S3Lock = {}



class S3Storage(object):

    def __init__(self,keyname='dev/data.js', bucketname='mf-aap'):
       conn =  S3Connection(config.get('Credentials','aws_access_key_id'), config.get('Credentials','aws_secret_key')) 
       self.db = boto.sdb.connect_to_region('eu-west-1',
               aws_access_key_id=config.get('Credentials','aws_access_key_id'), 
               aws_secret_access_key=config.get('Credentials','aws_secret_key'))
       self.domain = self.db.create_domain('mf-aap')
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

class Lock(object):

    def __init__(self, domain='mf-aap'):
       self.db = boto.sdb.connect_to_region('eu-west-1',
               aws_access_key_id=config.get('Credentials','aws_access_key_id'),
               aws_secret_access_key=config.get('Credentials','aws_secret_key'))
       self.domain = self.db.create_domain('mf-aap')


    def acquireLock(self,id , lockDurationSeconds=900, acquireTimeoutSeconds=0.2,username=None):
        
        lockId         = uuid.uuid4()
        acquireTimeout = time.time() + acquireTimeoutSeconds
        while time.time() < acquireTimeout:
            try:
                # try to create the lock if it doesn't exist
                lockTimeout    = time.time() + lockDurationSeconds
                if self.db.put_attributes(self.domain, id, { 'timeout' : lockTimeout, 'lockId' : lockId,'username':username }, replace=False, expected_value=['lockId', False]):
                    return lockId
            except boto.exception.SDBResponseError, e:
                if e.status != 404 and e.status != 409:
                    raise e
            # couldn't create lock - check for stale lock
            attribs = self.db.get_attributes(self.domain, id, consistent_read=True)
            if attribs.has_key('timeout') and float(attribs['timeout']) < time.time():
                print "lock timed out - releasing with id: %s" % attribs['lockId']
                self.releaseLock(id, attribs['lockId'])  # lock has timed out, so delete it
            time.sleep(0.05)  # sleep and retry
        # couldn't acquire lock - throw error
        #raise SystemError("Unable to obtain lock for: %s" % id)
        return None

    def releaseLock(self, id, lockId):
        """ Releases previously acquired lock. id - ID of object to lock.  lockId - Lock ID returned from acquireLock() """
        print "releaseLock(%s, %s)" % (id, lockId)
        try:
            return self.db.delete_attributes(self.domain, id, [ 'timeout', 'lockId','username' ], expected_value=['lockId', lockId])
        except boto.exception.SDBResponseError, e:
            if e.status == 404 or e.status == 409:
                return False
            else:
                raise e


class User(object):
    @staticmethod
    def _get_users(filename='users.txt'):
        if os.path.exists(filename):
            f = open(filename, 'rw')
            try:
                reader = csv.DictReader(f)
                return reader
            except:
                f.close()
                return None
        return None 

    @classmethod
    def is_known(cls, username, filename):
        users = cls._get_users(filename)
        if users is not None:
            for user in users:
                if username == user.get('email'):
                    return True
        return False

class RootFactory(object):
    __acl__ = [
        (Allow, Everyone, 'view'),
        (Allow, Authenticated, 'post')
    ]

    def __init__(self, request):
        pass  
