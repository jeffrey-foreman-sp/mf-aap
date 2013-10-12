from pyramid.config import Configurator

from .models import (
    RootFactory,
    )

def get_user(request):
    # the below line is just an example, use your own method of
    # accessing a database connection here (this could even be another
    # request property such as request.db, implemented using this same
    # pattern).
   return {'id':50000}


def main(global_config, **settings):

    from pyramid.session import UnencryptedCookieSessionFactoryConfig
    session_factory = UnencryptedCookieSessionFactoryConfig('itsaseekreet')


    from pyramid.authentication import AuthTktAuthenticationPolicy
    from pyramid.authorization import ACLAuthorizationPolicy
    authn_policy = AuthTktAuthenticationPolicy('seekrit', hashalg='sha512')
    authz_policy = ACLAuthorizationPolicy()

    from pyramid.authentication import SessionAuthenticationPolicy
    from pyramid.authorization import ACLAuthorizationPolicy
    from pyramid.session import UnencryptedCookieSessionFactoryConfig

    authn_policy = SessionAuthenticationPolicy()
    authz_policy = ACLAuthorizationPolicy()
    
    config = Configurator(
        settings=settings,
        root_factory=RootFactory,
        authentication_policy=authn_policy,
        authorization_policy=authz_policy,
        session_factory=session_factory
    )
    #    session_factory = my_session_factory)
    #config.add_route('hello', '/')

    #config.set_authentication_policy(authn_policy)
    #config.set_authorization_policy(authz_policy)


    config.add_request_method(get_user, 'user', reify=True)
    
    config.add_route('home', '/')
    config.add_route('hello', '/hello')
    #config.add_view(home, route_name='home')

    config.add_route('authorized', '/authorized')
    #config.add_view(authorized, route_name='authorized')

    config.add_route('login', '/login/{provider_name}')
    #config.add_view(login, route_name='login')
    
    config.scan()
    return config.make_wsgi_app()
