Ext.Loader.setConfig({
	enabled: true, // Allows dynamc loading of JavaSCript files
	paths: {
		'Ext': '.'
	}, 
	disableCaching: false // Disable random parameter in the URLs path
});

Ext.application({
	name: 'Aap',
	controllers: [
		'Tree',
		'DataEdit',
		'DataDisplay',
		'MainBody',
		'MainHeader'
	],

	stores: ['AapStore'],


	launch: function(){
		handleClientLoad();

/*		var store = this.getCompaniesStore();
		store.each(function(company){
			console.log('Company:' + company.get('name'));
		});
*/		
	},
	autoCreateViewport: true
});
