Ext.define('Aap.model.TreeNode', {
 	extend: 'Ext.data.Model',
	fields: [
        {name: "id", type: 'int'}, 
        {name: "name", type: 'string'}, 
        {name: "metanode", type: 'boolean'}, 
        {name: "allgemein_id", type: 'int'}, 
        {name: "metaaap_id", type: 'int'} 
    ],
	proxy: {
		type: 'ajax',
        url: 'data/treedata.json',
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	}
});
