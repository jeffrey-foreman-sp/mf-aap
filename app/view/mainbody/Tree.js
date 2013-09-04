Ext.define('Aap.view.mainbody.Tree' ,{

    extend: 'Ext.tree.Panel',
	alias: 'widget.tree',
	store: 'TreeStore',
	id: 'tree',

	viewConfig: {
		plugins: {
			ptype: 'treeviewdragdrop',
			dragText: 'Verschieben und Metadaten anpassen'
		},
		listeners: {       
            beforedrop: function(node, data, overModel, dropPosition, dropFunction, eOpts ) {
                console.log('beforedrop')
            },  
            drop: function(node, data, overModel, dropPosition, dropFunction, eOpts ) {
                console.log('drop')
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


