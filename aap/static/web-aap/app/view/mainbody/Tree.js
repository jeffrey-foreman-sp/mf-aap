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
			draggable: true,
			menuDisabled: true, 
			flex: 1 
		},
		{
        	xtype: 'booleancolumn', 
            text: '  ',
            trueText: 'Vererbungsknoten',
            falseText: '', 
			menuDisabled: true,
			width: 105, 
            dataIndex: 'metanode'
		}
    ]


});


