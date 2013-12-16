Ext.define('Aap.view.mainbody.Tree' ,{

    extend: 'Ext.tree.Panel',
	alias: 'widget.tree',
	store: 'AapStore',
	id: 'tree',

	viewConfig: {
        markDirty: false,
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
			draggable: false,
			menuDisabled: true, 
			flex: 3 
		},
		{
        	xtype: 'booleancolumn', 
            header: 'Bewertungsknoten:',
            text: '  ',
            trueText: 'Ja',
            falseText: '', 
			menuDisabled: true,
			width: 40, 
            dataIndex: 'metanode'
		}
    ]


});


