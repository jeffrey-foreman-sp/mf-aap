from __future__ import print_function
import os
from pyramid.response import Response
from pyramid.view import view_config
from pyramid.view import forbidden_view_config

from oauth2client.client import flow_from_clientsecrets, FlowExchangeError


from pyramid.security import Everyone
from pyramid.security import Authenticated
from pyramid.security import has_permission,view_execution_permitted, Allowed,ACLAllowed

from pyramid.renderers import render_to_response

from pyramid.security import ALL_PERMISSIONS
from pyramid.security import Allow
from pyramid.security import Authenticated
from pyramid.security import authenticated_userid,unauthenticated_userid
from pyramid.security import forget, remember


from pyramid.httpexceptions import HTTPForbidden, HTTPUnauthorized, HTTPFound, HTTPOk, HTTPBadRequest, HTTPNotFound, HTTPBadGateway, HTTPInternalServerError, HTTPConflict

import json


from aap.models import (User, S3Storage,Lock,)




@view_config(route_name='hello')
def hello(request):
    logged_in = authenticated_userid(request)

    return render_to_response('aap:templates/hello.mako',
                              {'login':logged_in},
                              request=request)
    
    
@view_config(route_name='logout')
def logout(request):
    request.session.invalidate()
    request.session.flash(u'Logged out successfully.')
    headers = forget(request)
    
    return HTTPFound(location=request.route_url('home').replace(request.registry.settings['wsgi_path'],''), 
               headers=headers)



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
    came_from = request.params.get('came_from', main_view).replace(request.registry.settings['wsgi_path'],'')
    provider_name = request.matchdict.get('provider_name')

    # We will need the response to pass it to the WebObAdapter.
    response = Response()
    code = request.params.get('code', None)
    credentials = None
    redirect_to = request.route_url('auth', provider_name=provider_name).replace(request.registry.settings['wsgi_path'],'')

    user_info_scope = ['https://www.googleapis.com/auth/userinfo.profile',
                                       'https://www.googleapis.com/auth/userinfo.email']

    flow = flow_from_clientsecrets(request.registry.settings['client_secrets.json'],
                                   scope=user_info_scope,
                                   redirect_uri=redirect_to)

    if code is None:
        # Get the internal provider name URL variable.

        auth_uri = flow.step1_get_authorize_url()
                
        return HTTPFound(location=auth_uri)
    else:
        try:
            credentials = flow.step2_exchange(code)
        except FlowExchangeError:
            return HTTPUnauthorized(location=came_from)

        if credentials is not None and credentials.id_token:
            
            request.session['id'] = credentials.id_token.get('id')

            login = credentials.id_token.get('email')
            if User.is_known(login,request.registry.settings['authorized_users']):
                
                headers = remember(request, login)
                request.session.flash(u'Logged in successfully.')
                return HTTPFound(location=came_from, headers=headers)
            else:
                return Response(body='<h1>401 Unauthorized</h1>You may not edit. Return to <a href="/">home</a>',status='401 Unauthorized', status_code=401)

                
    # FIXME 
    #request.session.flash(u'Failed to login.')
    #return HTTPFound(location=came_from)
            

    # It won't work if you don't return the response
    return response

# Custom forbidden view
@forbidden_view_config()
def forbidden(request):
    return Response('forbidden')

@view_config(route_name='view_data', request_method='GET', renderer='jsonp')
def view_data(request):

    s3 = S3Storage(keyname=request.registry.settings['data_js'],
                   bucketname=request.registry.settings['bucket'])
    try:
        content = s3.read()
    except:
        return HTTPBadGateway('Cannot connect or get data from backend')
    return {"result": json.loads(content)}

@view_config(route_name='export_data', renderer='jsonp')
def export_data(request):

    

    s3 = S3Storage(keyname=request.registry.settings['data_js'],
                   bucketname=request.registry.settings['bucket'])
    try:
        content = s3.read()

    except:
        return HTTPBadGateway('Cannot connect or get data from backend')

    js = json.loads(content)
    #js = js['result']
    res = []
    _flatten(res,js)
    return {"data":res, "length": len(res)}
    

# FIXME This is ugly, depending if the user is logged or not, this method
# returns an error or success. How to do it better ?

@view_config(route_name='edit_data', permission='post',renderer='json')
def edit_tree(request):
    logged_in = authenticated_userid(request)
    keyname = request.registry.settings['data_js']
    lock = Lock()
    
    if request.method == 'GET':
        
        s3 = S3Storage(keyname=keyname,
                   bucketname=request.registry.settings['bucket'])
        
        lock_id = lock.acquire(keyname , duration=900, username=logged_in)
        if lock_id:
            try:
                content = s3.read()
            except:
                return HTTPBadGateway('Cannot connect or get data from backend')
            return {"result": json.loads(content)}
        else:
            return HTTPConflict('Resource is already locked')

    elif request.method == 'POST':
        try:
            data = request.json
            json_data = json.dumps(data)
        except:
            return HTTPBadRequest()
        try:
            s3 = S3Storage(keyname=request.registry.settings['data_js'],
                           bucketname=request.registry.settings['bucket'] )
            s3.write(json_data)
            lock_id = lock.release(keyname)
        except:
            return HTTPBadGateway('Cannot connect or write data to backend')
        return HTTPOk()

    else:
        return HTTPBadRequest() 
       
@view_config(route_name='is_locked', permission='post', renderer='json')
def is_locked(request):
    keyname = request.registry.settings['data_js']
    lock = Lock()

    return lock.is_locked(keyname)

@view_config(route_name='unlock', permission='post')
def unlock(request):
    logged_in = authenticated_userid(request)
    keyname = request.registry.settings['data_js']
    lock = Lock()

    res = lock.release(keyname)
    if res != False:
        return HTTPOk('unloked')
    else:
        return HTTPNotFound('lock not found')

       
  
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

def _flatten(res, structure, path="", flattened=None):
    attribs = ['name', 'id','parentId', 'erfass','bemerk','arch_zs_bewe_text','arch_ws_bewe_text']
    if flattened is None:
        flattened = {}
    if type(structure) not in(dict,list):
        flattened['path'] = path
        res.append(flattened)

    elif isinstance(structure, list):
        for i, item in enumerate(structure):
            _flatten(res,item, path, flattened)
    else:
        if 'name' in structure.keys():
            new_val = structure['name']
            filtered = dict(zip(attribs, [structure[k] for k in attribs]))
        if 'children' in structure.keys():
            _flatten(res,structure['children'], path + "/" + new_val, filtered)
        else:
            _flatten(res,'', path + "/" + new_val, filtered)

    return flattened

