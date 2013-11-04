import os
import datetime
import time
import uuid
import random
import json

from boto import config
from boto.s3.connection import S3Connection
from boto.s3.key import Key

from pyramid.security import (
    Everyone,
    Authenticated,
    Allow,
)

from sqlalchemy import (
    Column,
    Integer,
    Text,
    DateTime,
    exc,
)

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import (
    scoped_session,
    sessionmaker,
    object_session,
)

from zope.sqlalchemy import ZopeTransactionExtension

DBSession = scoped_session(sessionmaker(extension=ZopeTransactionExtension()))
DBSession = scoped_session(sessionmaker())

Base = declarative_base()


class S3Storage(object):

    def __init__(self, keyname='dev/data.js', bucketname='mf-aap'):
        conn = S3Connection(config.get('Credentials', 'aws_access_key_id'), config.get('Credentials', 'aws_secret_key'))
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


class Lock(Base):
    __tablename__ = 'locks'

    id = Column(Text, primary_key=True)
    attributes = Column(Text)

    def __init__(self, id, attributes):
        self.id = id
        self.attributes = attributes

    @classmethod
    def acquire_lock(class_, id, lock_duration, acquire_timeout_seconds):
        lockId = uuid.uuid4().hex
        acquire_timeout = time.time() + acquire_timeout_seconds
        while time.time() < acquire_timeout:
            lock = DBSession.query(class_).get(id)
            if lock:
                # check for staled lock
                attribs = json.loads(lock.attributes)
                if 'timeout' in attribs and float(attribs['timeout']) < time.time():
                    # lock has timed out --> delete
                    print "stalled"
                    class_.release_lock(id, attribs['lockId'])
            else:
                # try create one
                lock_timeout = time.time() + lock_duration
                Lock = class_
                lock = Lock(id, json.dumps({'timeout': lock_timeout, 'lockId': lockId}))
                DBSession.add(lock)
                DBSession.flush()

                return lockId

            time.sleep(0.05)
        #
        return False

    @classmethod
    def release_lock(class_, id, lockId):
        try:
            lock = DBSession.query(class_).get(id)
            if lock:
                DBSession.delete(lock)
                DBSession.flush()

                return True
            else:
                return False
        except exc.SQLAlchemyError as e:
            raise e


class User(Base):

    """ The SQLAlchemy declarative model class for a User object. """
    __tablename__ = 'users'

    id = Column(Text, primary_key=True)
    name = Column(Text)
    last_login = Column(DateTime, default=datetime.datetime.utcnow)

    def __init__(self, id, name):
        self.id = id
        self.name = name

    @classmethod
    def get(class_, id):
        return DBSession.query(class_).get(id)

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
