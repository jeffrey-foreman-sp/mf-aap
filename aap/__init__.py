from pyramid.config import Configurator


def main(global_config, **settings):
    config = Configurator(settings=settings)
    #config.add_route('hello', '/')


    config.add_route('home', '/')
    #config.add_view(home, route_name='home')

    config.add_route('authorized', '/authorized')
    #config.add_view(authorized, route_name='authorized')

    config.add_route('login', '/login/{provider_name}')
    #config.add_view(login, route_name='login')
    
    config.scan()
    return config.make_wsgi_app()
