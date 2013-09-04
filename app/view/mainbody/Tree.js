Ext.define('Aap.view.mainbody.Tree' ,{

    extend: 'Ext.tree.Panel',
	alias: 'widget.tree',
	store: 'TreeStore',
	id: 'tree',
	viewConfig: {
		plugins: {
			ptype: 'treeviewdragdrop'
		},
		listeners: {       
            beforedrop: function(node, data, overModel, dropPosition, dropFunction, eOpts ) {
                console.log('beforedrop')
            }
		}   
	},
	
	columns: [
		{ 
			xtype: 'treecolumn', 
			header: 'Geodatenbestand',
			dataIndex: 'name', 
			flex: 1 
		}
    ]

});


