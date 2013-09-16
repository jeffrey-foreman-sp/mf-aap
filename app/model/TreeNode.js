Ext.define('Aap.model.TreeNode', {
 	extend: 'Ext.data.Model',
	idgen: 'uuid',
	fields: [
        {name: "id", type: 'string'}, 
        {name: "name", type: 'string'}, 
        {name: "erfass", type: 'date'}, 
        {name: "modif", type: 'date'}, 
        {name: "metanode", type: 'boolean'}, 
        {name: "allgemein_id", type: 'string'}, 
        {name: "metaaap_id", type: 'string'} 
    ],
	proxy: {
		type: 'ajax',
        url: 'data/treedata.json',
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	},

	add: function() {
		console.log('test');


	}

});
