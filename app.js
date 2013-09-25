var data;
//data = {"name": "Gesamtbestand","expanded": "true"	};
		
//data = getFileById('0B4tksUtG91iOY0xIdUY2SmROSEk');
//handleClientLoad();

Ext.Loader.setConfig({
	enabled: true, // Allows dynamc loading of JavaSCript files
	disableCaching: false // Disable random parameter in the URLs path
});


Ext.application({
	name: 'Aap',
	controllers: [
		'Tree',
		'DataAdd',
		'DataEdit',
		'DataDisplay',
		'MainBody',
		'MainHeader'
	],

//	stores: ['AapStore'],


	init: function(){
//		handleClientLoad();
		Ext.require('Aap.util.TreeSerializer');

	},

	autoCreateViewport: true
});
