Ext.define('Aap.store.TreeStore', {
	extend: 'Ext.data.TreeStore',
    model: 'Aap.model.TreeNode',
    storeId:'TreeStore',
    autoLoad:true,
    root: {
      name: 'Gesamtbestand',
	  expandable: false 
	}

});
