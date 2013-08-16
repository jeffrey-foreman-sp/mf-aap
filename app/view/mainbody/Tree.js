Ext.define('Aap.view.mainbody.Tree' ,{

    extend: 'Ext.tree.Panel',
	alias: 'widget.mainbodytree',
   	title: 'Daten',
//	store: 'treestore',	

	columns: [
		{ 
			xtype: 'treecolumn', 
			header: 'Name', 
			dataIndex: 'name', 
			flex: 1 
		}
    ]

});


