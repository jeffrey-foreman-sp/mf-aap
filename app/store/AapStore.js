Ext.define('Aap.store.AapStore', {
	extend: 'Ext.data.TreeStore',
    model: 'Aap.model.AapModel',
    storeId: 'AapStore',
    autoLoad: true,
    root: {
    	name: 'Gesamtbestand',
		expandable: false 
	}
});
