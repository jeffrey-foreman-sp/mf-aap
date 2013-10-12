
from pyramid.security import (
    Everyone,
    Authenticated,
    Allow,
    )

class RootFactory(object):
    __acl__ = [
        (Allow, Everyone, 'view'),
        (Allow, Authenticated, 'post')
    ]

    def __init__(self, request):
        pass  