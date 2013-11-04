import os
import sys
import transaction
import csv

from sqlalchemy import engine_from_config

from pyramid.paster import (
    get_appsettings,
    setup_logging,
    )

from ..models import (
    DBSession,
    User,
    Lock,
    Base,
    )


def usage(argv):
    cmd = os.path.basename(argv[0])
    print('usage: %s <config_uri> <users list>\n'
          '(example: "%s development.ini")' % (cmd, cmd))
    sys.exit(1)

def get_users(filename):
    if os.path.exists(filename):
        f = open(filename, 'rw')
        try:
            reader = csv.DictReader(f)
            return reader
        except:
            f.close()
            return None
    return None 

def is_empty():
    return len(DBSession.query(User).all()) <= 0

def populate():
    users = get_users('users.csv')
    new_users = []
    for user in users:
         id, name = user.values()
         new_users.append(User(id,name))  

    DBSession.add_all(new_users)
    DBSession.commit()
    
def main(argv=sys.argv):
    if len(argv) != 2:
        usage(argv)
    config_uri = argv[1]
    setup_logging(config_uri)
    settings = get_appsettings(config_uri)
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.create_all(engine)
    if not is_empty():
        print >> sys.stderr, """Database is not empty.\nPlease delete "%s" before reloading. Exit""" % \
                settings.get('sqlalchemy.url')
    else:
        populate()

