Ext.define('Aap.store.Allgemein', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Allgemein',
    storeId: 'Allgemein',
    autoLoad:true,
	proxy: {
		type: 'ajax',
        url: 'data/allgemeindata.json',
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	}/*,
    root: true*/

});
