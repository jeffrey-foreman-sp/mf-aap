Ext.define('Aap.store.Allgemein', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Allgemein',
    storeId: 'Allgemein',
    autoLoad:true,
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/allgemeindata.json',
			update: 'data/update.json',
		},	
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	}
});
