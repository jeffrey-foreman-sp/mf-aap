Ext.define('Aap.view.mainbody.Tree' ,{

    extend: 'Ext.tree.Panel',
	alias: 'widget.tree',
	store: 'AapStore',
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
			dataIndex: 'name',
			sortable: false,
			groupable: false,
			hidable: false,
			draggabel: false,
			menuDisabled: true, 
			flex: 1 
		},
		{
        	xtype: 'booleancolumn', 
            text: '  ',
            trueText: 'Vererbt',
            falseText: '', 
			menuDisabled: true,
			width: 55, 
            dataIndex: 'metanode'
		}
    ]



});


