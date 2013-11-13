## -*- coding: utf-8 -*-

<%inherit file="base.mako"/>





<link href="http://www.swisstopo.admin.ch/internet/swisstopo.ConfigFavicon.ico" type="image/x-icon" rel="Shortcut Icon">
<link rel="stylesheet" type="text/css" href="client/ext-4.2.1/resources/css/ext-all.css">
<link rel="stylesheet" type="text/css" href="client/app/style/app.css">

%if debug:
    <script type="text/javascript" src="client/ext-4.2.1/ext-all-debug.js"></script>

% else:

    <script type="text/javascript" src="client/ext-4.2.1/ext-all.js"></script>

% endif
    <script type="text/javascript" src="client/app.js"></script>



</head>
<body>
<script>
% if userid:
   var userid =  "${userid}";
% else:
   var userid;
% endif
</script>
        
</body>
</html>



