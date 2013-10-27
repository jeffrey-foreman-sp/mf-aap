## -*- coding: utf-8 -*-

<%inherit file="base.mako"/>


% if userid:
    Logged in as ${userid} <br>
        Try accessing a <a href="authorized">protected ressource</a> or <br />
         <a href="logout">logout</a><br />

% else:
   <a href="login">login</a><br />
% endif


<h1>Welcome to AAP-Tools</h1>



