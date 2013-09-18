Ext.define('Aap.store.TreeStore', {
	extend: 'Ext.data.TreeStore',
    model: 'Aap.model.TreeNode',
    storeId:'TreeStore',
    autoLoad:true,
    root: {
    	name: 'Gesamtbestand',
		metaaap_id: '0',
		allgemein_id: '0',
		expandable: false 
	}
});
