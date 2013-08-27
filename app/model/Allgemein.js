Ext.define('Aap.model.Allgemein', {
 	extend: 'Ext.data.Model',
	fields: [
        {name: "name", type: 'string'}, 
		{name: "ident", type: 'string'}, 
		{name: "georefdat", type: 'string'},
		{name: "fachst", type: 'string'}, 
		{name: "zugberech", type: 'string'}, 
		{name: "echkateg", type: 'string'}, 
		{name: "nachfzeitr", type: 'string'}, 
		{name: "datenmenge"}, 
		{name: "imjr"}, 
		{name: "datenzuw"}, 
		{name: "bemerk", type: 'string'},
		{name: "treenode_id", type: 'string'}
	],
	belongsTo: 'TreeNode'
	
});
