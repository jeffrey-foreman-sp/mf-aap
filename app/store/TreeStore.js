Ext.define('Ext.store.TreeStore', {
	extend: 'Ext.data.TreeStore',
    model: 'Aap.model.TreeModel',
    root: {
        name: 'Daten',
	}
});
