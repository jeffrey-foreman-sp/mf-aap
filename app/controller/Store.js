Ext.define('Aap.controller.Store', {
	extend: 'Ext.app.Controller',
	stores: ['AapStore'],
	models: ['AapModel'],

    init: function() {
        Ext.getStore('AapStore').addListener(
			'datachanged',
			this.onAapStoreDataChange,
			this
		);
	},

	// ******************************************************************************
	// function in order update the store
	// ******************************************************************************
	onAapStoreDataChange: function(me) {
		//Aap.util.Data.updateAapData();
		console.log('should be updated here');
	} 
   

});

