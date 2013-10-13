
from pyramid.security import (
    Everyone,
    Authenticated,
    Allow,
    )

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