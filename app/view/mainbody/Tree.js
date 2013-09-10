Ext.define('Aap.view.mainbody.Tree' ,{

    extend: 'Ext.tree.Panel',
	alias: 'widget.tree',
	store: 'TreeStore',
	id: 'tree',

	viewConfig: {
		plugins: {
			ptype: 'treeviewdragdrop',
			dragText: 'Verschieben und Metadaten anpassen'
		}
	},
	
	columns: [
		{ 
			xtype: 'treecolumn', 
			header: 'Geodatenbestand',
			sortable: false,
			dataIndex: 'name', 
			flex: 1 
		}
    ]





});


