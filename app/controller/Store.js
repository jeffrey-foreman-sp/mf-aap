Ext.define('Aap.controller.Store', {
	extend: 'Ext.app.Controller',
	stores: ['AapStore'],
	models: ['AapModel'],

    init: function() {
        Ext.getStore('AapStore').addListener(
			'datachanged',
			this. onAapStoreDataChange,
			this
		);
	},

	onAapStoreDataChange: function(me) {
		console.log('data has been changed');
		Aap.util.Data.updateAapData();
		console.log('data has been updated');

	} 
   
	


});

