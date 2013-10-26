## -*- coding: utf-8 -*-

<%inherit file="base.mako"/>


% if userid:
    Logged in as ${userid} <br>
        Try accessing a <a href="authorized">protected ressource</a> or <br />
         <a href="logout">logout</a><br />

% else:
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
% endif


