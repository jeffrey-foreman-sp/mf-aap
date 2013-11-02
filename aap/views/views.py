from __future__ import print_function
import os
from pyramid.response import Response
from pyramid.view import view_config
from pyramid.view import forbidden_view_config

from oauth2client.client import flow_from_clientsecrets


from pyramid.security import Everyone
from pyramid.security import Authenticated
from pyramid.security import has_permission,view_execution_permitted, Allowed,ACLAllowed

from pyramid.renderers import render_to_response

from pyramid.security import ALL_PERMISSIONS
from pyramid.security import Allow
from pyramid.security import Authenticated
from pyramid.security import authenticated_userid,unauthenticated_userid
from pyramid.security import forget
from pyramid.security import remember

from pyramid.httpexceptions import HTTPForbidden, HTTPFound, HTTPOk, HTTPBadRequest, HTTPNotFound, HTTPBadGateway, HTTPInternalServerError

import json

# Some interesting doc/project using security
#
# https://github.com/Pylons/shootout/
# http://docs.pylonsproject.org/projects/pyramid/en/1.5-branch/tutorials/wiki2/authorization.html


from config import CONFIG

from aap.models import (User, S3Storage,)


@view_config(route_name='hello')
def hello(request):
    logged_in = authenticated_userid(request)

    return render_to_response('aap:templates/hello.mako',
                              {'login':logged_in},
                              request=request)
    
    
@view_config(permission='post', route_name='logout')
def logout(request):
    request.session.invalidate()
    request.session.flash(u'Logged out successfully.')
    headers = forget(request)
    
    return HTTPFound(location=request.route_url('home'), headers=headers)



@view_config(route_name='login')
def login(request):
    logged_in = authenticated_userid(request)

    return render_to_response('aap:templates/login.mako',
                              {},
                              request=request)
                              
@view_config(route_name='auth')
def auth(request):

    # return to this after auth
    main_view = request.route_url('home')
    came_from = request.params.get('came_from', main_view)

    # We will need the response to pass it to the WebObAdapter.
    response = Response()
    code = request.params.get('code', None)

    user_info_scope = ['https://www.googleapis.com/auth/userinfo.profile',
                                       'https://www.googleapis.com/auth/userinfo.email']

    flow = flow_from_clientsecrets(request.registry.settings['client_secrets.json'],
                                   scope=user_info_scope,
                                   redirect_uri=request.path_url)

    if code is None:
        # Get the internal provider name URL variable.
        provider_name = request.matchdict.get('provider_name')

        auth_uri = flow.step1_get_authorize_url()
                
        return HTTPFound(location=auth_uri)
    else:
        credentials = flow.step2_exchange(code)
        response.write('<a href="..">Home</a>')

        if credentials.id_token:
            
            request.session['id'] = credentials.id_token.get('id')

            login = credentials.id_token.get('email')
            
            if User.is_known(login):
                
                headers = remember(request, login)
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

@view_config(route_name='data', request_method='GET', renderer='json')
def get_tree(request):

    s3 = S3Storage(keyname=request.registry.settings['data_js'],
                   bucketname=request.registry.settings['bucket'])
    try:
        content = s3.read()
    except:
        return HTTPBadGateway('Cannot connect or get data from backend')
    return {"result": json.loads(content)}
    

# FIXME This is ugly, depending if the user is logged or not, this method
# returns an error or success. How to do it better ?

@view_config(route_name='data', request_method='POST',renderer='json')
def post_tree(request):
    acl = has_permission('post', request.context, request)

    if isinstance(acl, (ACLAllowed,Allowed)):
        try: 
            data = request.json
            json_data = json.dumps(data)
        except:
            return HTTPBadRequest() 
        try:
            s3 = S3Storage(keyname=request.registry.settings['data_js'],
                           bucketname=request.registry.settings['bucket'] )
            s3.write(json_data)
        except:
            return HTTPBadGateway('Cannot connect or write data to backend')
        return HTTPOk()

    else:
        return HTTPForbidden()
   
  
# Dummy method, to check authorization    
@view_config(route_name='authorized', permission='post')
def authorized(request):
    
    userid = authenticated_userid(request)

    return Response('User %s has permision "post"' % userid)

@view_config(route_name='home')
def home(request):
    debug = True if request.params.get('debug') is not None else False
    userid = authenticated_userid(request) 

    return render_to_response('aap:templates/home.mako',
                              {'userid':userid, 'debug': debug},
                              request=request)
