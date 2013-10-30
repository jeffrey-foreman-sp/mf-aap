## -*- coding: utf-8 -*-

<%inherit file="base.mako"/>





<link href="http://www.swisstopo.admin.ch/internet/swisstopo.ConfigFavicon.ico" type="image/x-icon" rel="Shortcut Icon">
<link rel="stylesheet" type="text/css" href="client/ext-4.2.1/resources/css/ext-all.css">

%if debug:
    <script type="text/javascript" src="client/ext-4.2.1/ext-all-debug.js"></script>

% else:

    <script type="text/javascript" src="client/ext-4.2.1/ext-all.js"></script>

% endif
    <script type="text/javascript" src="client/app.js"></script>



</head>
<body>
% if userid:
    Logged in as ${userid} <br>
    Try accessing a <a href="authorized">protected ressource</a> or <br />
    <a href="logout">logout</a><br />
% else:
   <a href="login">login</a><br />
% endif


<h1>Welcome to AAP-Tools</h1>
        
</body>
</html>



