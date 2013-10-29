
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
		'Store',
		'MainHeader'
	],

	init: function(){
		Ext.require('Aap.util.TreeSerializer');
		Ext.require('Aap.util.Data');
		Ext.require('Aap.util.Properties');

	},

	autoCreateViewport: true
});
