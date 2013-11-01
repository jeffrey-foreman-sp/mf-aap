# config.py

from authomatic.providers import oauth2, oauth1, openid

CLIENT_ID = '940625885159-jpaugeutvv8fidjrs1r4in0hqnsi1mvd.apps.googleusercontent.com'
CLIENT_SECRET = '7_OztzFGvc2i-wyIDgMZyVyl'

CONFIG = {
    'google': {
         'class_': 'authomatic.providers.oauth2.Google', # Can be a fully qualified string path.

         # Provider type specific keyword arguments:
         'short_name': 2, # use authomatic.short_name() to generate this automatically
         'consumer_key': CLIENT_ID,
         'consumer_secret': CLIENT_SECRET,
         'scope': ['https://www.googleapis.com/auth/userinfo.profile',
                   'https://www.googleapis.com/auth/userinfo.email']
    },
    
    'tw': { # Your internal provider name
        
        # Provider class
        'class_': oauth1.Twitter,
        
        # Twitter is an AuthorizationProvider so we need to set several other properties too:
        'consumer_key': '########################',
        'consumer_secret': '########################',
    },
    
    'fb': {
           
        'class_': oauth2.Facebook,
        
        # Facebook is an AuthorizationProvider too.
        'consumer_key': '########################',
        'consumer_secret': '########################',
        
        # But it is also an OAuth 2.0 provider and it needs scope.
        'scope': ['user_about_me', 'email', 'publish_stream'],
    },
    
    'oi': {
           
        # OpenID provider dependent on the python-openid package.
        'class_': openid.OpenID,
    }
}
