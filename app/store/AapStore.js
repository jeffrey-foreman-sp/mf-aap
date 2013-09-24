Ext.define('Aap.store.AapStore', {
	extend: 'Ext.data.TreeStore',
    model: 'Aap.model.AapModel',
    storeId: 'AapStore',
    autoLoad: true,
    root: {
    	name: 'Gesamtbestand',
		expandable: false 
	},
	
	proxy: {
		type: 'ajax',
        url: 'data/aapdata.json',
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	}

});
