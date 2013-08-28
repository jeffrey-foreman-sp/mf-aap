Ext.define('Aap.model.TreeNode', {
 	extend: 'Ext.data.Model',
	fields: [
        'name' 
    ],
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
	associations: [
		{type: 'hasOne', model: 'Aap.model.Allgemein'}
	]
});
