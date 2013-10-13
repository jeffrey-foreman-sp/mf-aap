from pyramid.response import Response
from pyramid.view import view_config
from pyramid.view import forbidden_view_config

from authomatic import Authomatic
from authomatic.adapters import WebObAdapter

from pyramid.security import Everyone
from pyramid.security import Authenticated
from pyramid.security import has_permission,view_execution_permitted, Allowed,ACLAllowed

from pyramid.security import ALL_PERMISSIONS
from pyramid.security import Allow
from pyramid.security import Authenticated
from pyramid.security import authenticated_userid,unauthenticated_userid
from pyramid.security import forget
from pyramid.security import remember

from pyramid.httpexceptions import HTTPForbidden
from pyramid.httpexceptions import HTTPFound
from pyramid.httpexceptions import HTTPNotFound


# Some interesting doc/project using security
#
# https://github.com/Pylons/shootout/
# http://docs.pylonsproject.org/projects/pyramid/en/1.5-branch/tutorials/wiki2/authorization.html


from config import CONFIG

from .models import (User,)

authomatic = Authomatic(config=CONFIG, secret='some random secret string')


@view_config(route_name='hello')
def hello(request):
    logged_in = authenticated_userid(request)
    
    return Response("""Logged in as %s <br>
    <a href="../authorized">Try accessing a protected ressource</a>""" % logged_in)
    
@view_config(permission='post', route_name='logout')
def logout(request):
    request.session.invalidate()
    request.session.flash(u'Logged out successfully.')
    headers = forget(request)
    
    return HTTPFound(location=request.route_url('home'), headers=headers)
    
@view_config(route_name='login')
def login(request):

    main_view = request.route_url('hello')
    came_from = request.params.get('came_from', main_view)

    # We will need the response to pass it to the WebObAdapter.
    response = Response()

    # Get the internal provider name URL variable.
    provider_name = request.matchdict.get('provider_name')

    # Start the login procedure.
    result = authomatic.login(WebObAdapter(request, response), provider_name)

    # Do not write anything to the response if there is no result!
    if result:
        # If there is result, the login procedure is over and we can write to response.
        response.write('<a href="..">Home</a>')

        if result.error:
            # Login procedure finished with an error.
            response.write(u'<h2>Damn that error: {}</h2>'.format(result.error.message))

        elif result.user:
            # Hooray, we have the user!

            
            # OAuth 2.0 and OAuth 1.0a provide only limited user data on login,
            # We need to update the user to get more info.
            if not (result.user.name and result.user.id):
                result.user.update()

            request.session['id'] = result.user.id

            login = result.user.email
            
            if User.is_known(login):
                
                headers = remember(request, result.user.email)
                request.session.flash(u'Logged in successfully.')
                return HTTPFound(location=came_from, headers=headers)

                
    # FIXME 
    #request.session.flash(u'Failed to login.')
    #return HTTPFound(location=came_from)
            

    # It won't work if you don't return the response
    return response

# Custom forbidden view
@forbidden_view_config()
def forbidden(request):
    return Response('forbidden')

@view_config(route_name='tree', request_method='GET', renderer='json')
def get_tree(request):
      return {'content':'Hello!'}

# FIXME This is ugly, depending if the user is logged or not, this method
# returns an error or success. How to do it better ?

@view_config(route_name='tree', request_method='POST',renderer='json')
def post_tree(request):
    acl = has_permission('post', request.context, request)

    post_data = request.POST

    if isinstance(acl, (ACLAllowed,Allowed)):
        # update authorized
        # FIXME save the file!
        return {'result':'ok'}

    else:
        return {'error':'forbidden'}
   
  
# Dummy method, to check authorization    
@view_config(route_name='authorized', permission='post')
def authorized(request):
    
    userid = authenticated_userid(request)

    return Response('User %s has permision "post"' % userid)

@view_config(route_name='home')
def home(request):

    userid = authenticated_userid(request) 
    if userid:
        txt ='''
        Logged in as %s <br>
        Try accessing a <a href="authorized">protected ressource</a> or <br />
         <a href="logout">logout</a><br />
        ''' % userid

    else:
        txt ='''
        <h1>Home</h1>
        You are not logged in<br />
        Try accessing a <a href="authorized">protected ressource</a><br />
        <br>
        Login with <a href="login/fb">Facebook</a>.<br />
        Login with <a href="login/tw">Twitter</a>.<br />
        Login with <a href="login/google">Google</a>.<br />
        <form action="login/oi">
            <input type="text" name="id" value="me.yahoo.com" />
            <input type="submit" value="Authenticate With OpenID">
        </form>
    '''
    return Response(txt)
