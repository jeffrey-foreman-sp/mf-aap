from pyramid.response import Response
from pyramid.view import view_config

from authomatic import Authomatic
from authomatic.adapters import WebObAdapter


from config import CONFIG

authomatic = Authomatic(config=CONFIG, secret='some random secret string')

'''
@view_config(route_name='tutu')
def hello_world(request):
    
    return Response('Hello')'''

@view_config(route_name='login')
def login(request):

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

    # It won't work if you don't return the response
    return response

@view_config(route_name='authorized')
def authorized(request):
    owner = authenticated_userid(request) or 'anonymous'
    session = request.session
    if 'procrastinatio' in session:
        session['procrastinatio'] = 'yes'
    session['abc'] = '123'

    username = session.get('username')
    if username:
        return Response('%s was in the session') % username
    else:
        return Response('%s was not in the session') % owner

@view_config(route_name='home')
def home(request):
    return Response('''
        Login with <a href="login/fb">Facebook</a>.<br />
        Login with <a href="login/tw">Twitter</a>.<br />
        Login with <a href="login/google">Google</a>.<br />
        <form action="login/oi">
            <input type="text" name="id" value="me.yahoo.com" />
            <input type="submit" value="Authenticate With OpenID">
        </form>
    ''')
