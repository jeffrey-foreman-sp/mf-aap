from pyramid.authentication import SessionAuthenticationPolicy
from pyramid.authorization import ACLAuthorizationPolicy
from pyramid.session import UnencryptedCookieSessionFactoryConfig
from pyramid.config import Configurator

import boto

from .models import (
    RootFactory,
    )


def main(global_config, **settings):

    session_factory = UnencryptedCookieSessionFactoryConfig('itsaseekreet')

    boto.config.load_credential_file(settings['boto_cfg'])

    authn_policy = SessionAuthenticationPolicy()
    authz_policy = ACLAuthorizationPolicy()
    
    config = Configurator(
        settings=settings,
        root_factory=RootFactory,
        authentication_policy=authn_policy,
        authorization_policy=authz_policy,
        session_factory=session_factory
    )


        
    config.add_route('home', '/')
    config.add_route('hello', '/hello')
    #config.add_view(home, route_name='home')
    config.add_route('data', '/data')

    config.add_route('authorized', '/authorized')
    #config.add_view(authorized, route_name='authorized')

    config.add_route('login', '/login')
    config.add_route('auth', '/auth/{provider_name}')
    config.add_route('logout', '/logout')
    config.add_static_view('client', 'aap:static/web-aap', cache_max_age=0)
    config.add_static_view('app', 'aap:static/web-aap/app', cache_max_age=0)
   
    
    config.scan()
    return config.make_wsgi_app()
