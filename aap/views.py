from pyramid.response import Response
from pyramid.view import view_config

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

# https://github.com/Pylons/shootout/

# http://docs.pylonsproject.org/projects/pyramid/en/1.5-branch/tutorials/wiki2/authorization.html


from config import CONFIG

from .models import (User,)

authomatic = Authomatic(config=CONFIG, secret='some random secret string')

'''
@view_config(route_name='tutu')
def hello_world(request):
    
    return Response('Hello')'''

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

                

    #request.session.flash(u'Failed to login.')
    #return HTTPFound(location=came_from)
            
    ''''
            # Welcome the user.
            response.write(u'<h1>Hi {}</h1>'.format(result.user.name))
            response.write(u'<h2>Your id is: {}</h2>'.format(result.user.id))
            response.write(u'<h2>Your email is: {}</h2>'.format(result.user.email))

            # Seems like we're done, but there's more we can do...

            # If there are credentials (only by AuthorizationProvider),
            # we can _access user's protected resources.
            if result.user.credentials:

                # Each provider has it's specific API.
                if result.provider.name == 'fb':
                    response.write('Your are logged in with Facebook.<br />')

                    # We will access the user's 5 most recent statuses.
                    url = 'https://graph.facebook.com/{}?fields=feed.limit(5)'
                    url = url.format(result.user.id)

                    # Access user's protected resource.
                    access_response = result.provider.access(url)

                    if access_response.status == 200:
                        # Parse response.
                        statuses = access_response.data.get('feed').get('data')
                        error = access_response.data.get('error')

                        if error:
                            response.write(u'Damn that error: {}!'.format(error))
                        elif statuses:
                            response.write('Your 5 most recent statuses:<br />')
                            for message in statuses:

                                text = message.get('message')
                                date = message.get('created_time')

                                response.write(u'<h3>{}</h3>'.format(text))
                                response.write(u'Posted on: {}'.format(date))
                    else:
                        response.write('Damn that unknown error!<br />')
                        response.write(u'Status: {}'.format(response.status))

                if result.provider.name == 'tw':
                    response.write('Your are logged in with Twitter.<br />')

                    # We will get the user's 5 most recent tweets.
                    url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'

                    # You can pass a dictionary of querystring parameters.
                    access_response = result.provider.access(url, {'count': 5})

                    # Parse response.
                    if access_response.status == 200:
                        if type(access_response.data) is list:
                            # Twitter returns the tweets as a JSON list.
                            response.write('Your 5 most recent tweets:')
                            for tweet in access_response.data:
                                text = tweet.get('text')
                                date = tweet.get('created_at')

                                response.write(u'<h3>{}</h3>'.format(text.replace(u'\u2026', '...')))
                                response.write(u'Tweeted on: {}'.format(date))

                        elif access_response.data.get('errors'):
                            response.write(u'Damn that error: {}!'.\
                                                format(response.data.get('errors')))
                    else:
                        response.write('Damn that unknown error!<br />')
                        response.write(u'Status: {}'.format(response.status))



    '''
    # It won't work if you don't return the response
    return response

    
from pyramid.view import forbidden_view_config

'''@forbidden_view_config()
def forbidden(request):
    return Response('forbidden')'''

@view_config(route_name='tree', request_method='GET', renderer='json')
def get_tree(request):
      return {'content':'Hello!'}


        
@view_config(route_name='tree', request_method='POST',renderer='json')
def post_tree(request):
    acl = has_permission('post', request.context, request)

    post_data = request.POST

    if isinstance(acl, (ACLAllowed,Allowed)):
        # update authoried
        
        return {'result':'ok'}

    else:
        return {'error':'forbidden'}
   
    
    
    
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
