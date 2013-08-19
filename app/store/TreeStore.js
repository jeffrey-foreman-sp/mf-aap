Ext.define('Aap.store.TreeStore', {
	extend: 'Ext.data.TreeStore',
    model: 'Aap.model.TreeModel',
    storeId:'TreeStore',
    autoLoad:true,
	proxy: {
		type: 'ajax',
		//url: 'http://mf1t.bgdi.admin.ch/~ltbar/aap-tool/data/treedata.json',
        url: 'data/treedata.json',
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	},
    root: true

	/*root: {
        text: 'Tree',
		expanded: true
    }*/

});
