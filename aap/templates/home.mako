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


<link href="http://www.swisstopo.admin.ch/internet/swisstopo.ConfigFavicon.ico" type="image/x-icon" rel="Shortcut Icon">



        <link rel="stylesheet" type="text/css" href="client/ext-4.2.1/resources/css/ext-all.css">

    <script type="text/javascript" src="client/ext-4.2.1/ext-all-debug.js"></script>

    <script type="text/javascript" src="client/app.js"></script>

     <script src="client/googledrive/gd.js"> </script>

        <script src="https://apis.google.com/js/client.js?onload=gapiLoad"> </script> 


</head>
        <body>
        <script src="client/data/data.js"> </script>
        </body>
</html>



