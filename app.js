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

	stores: ['AapStore'],


	launch: function(){
//		handleClientLoad();

	},
	autoCreateViewport: true
});
