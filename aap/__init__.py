from pyramid.authentication import SessionAuthenticationPolicy
from pyramid.authorization import ACLAuthorizationPolicy
from pyramid_beaker import session_factory_from_settings
from pyramid.config import Configurator

from aap.lib.helpers import parse_credentials

import boto

from .models import (
    RootFactory,
    )

credentials = parse_credentials()

def main(global_config, **settings):

    session_factory = session_factory_from_settings(settings)
    
    boto.config.load_credential_file(settings['boto_cfg'])
    if not boto.config.has_section('Credentials'):
        boto.config.add_section('Credentials')

    #boto.config.set('Credentials','aws_access_key_id',credentials['Access Key Id'])
    #boto.config.set('Credentials','aws_secret_key',credentials['Secret Access Key'])
    #boto.config.set('Credentials','username',credentials['User Name'])

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
    config.add_route('view_data', '/data')
    config.add_route('edit_data', '/data/edit')

    config.add_route('authorized', '/authorized')
    #config.add_view(authorized, route_name='authorized')

    config.add_route('login', '/login')
    config.add_route('auth', '/auth/{provider_name}')
    config.add_route('logout', '/logout')
    config.add_route('is_locked', '/is_locked')
    config.add_route('unlock', '/unlock')
    config.add_static_view('client', 'aap:static/web-aap', cache_max_age=0)
    config.add_static_view('app', 'aap:static/web-aap/app', cache_max_age=0)
   
    
    config.scan()
    return config.make_wsgi_app()
