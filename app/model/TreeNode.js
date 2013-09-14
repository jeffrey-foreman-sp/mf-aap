Ext.define('Aap.model.TreeNode', {
 	extend: 'Ext.data.Model',
	idgen: 'uuid',
	fields: [
        {name: "id", type: 'string'}, 
        {name: "name", type: 'string'}, 
        {name: "erfass", type: 'date'}, 
        {name: "modif", type: 'date'}, 
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
