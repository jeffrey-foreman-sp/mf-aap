## -*- coding: utf-8 -*-

<%inherit file="base.mako"/>


<h1>Login</h1>
        You are not logged in<br />
        Try accessing a <a href="authorized">protected ressource</a><br />
        <br>
        Login with <a href="auth/fb">Facebook</a>.<br />
        Login with <a href="auth/tw">Twitter</a>.<br />
        Login with <a href="auth/google">Google</a>.<br />
        <form action="auth/oi">
            <input type="text" name="id" value="me.yahoo.com" />
            <input type="submit" value="Authenticate With OpenID">
        </form>



