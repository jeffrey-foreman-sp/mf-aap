Ext.define('Aap.view.mainbody.TreeTools' ,{

    extend: 'Ext.panel.Panel',
	alias: 'widget.treetools',

	id: 'treetools',

	style: {
	   	'border-top-style': 'solid',
	   	'border-top-width': 1
	},
	layout: {
		type: 'hbox',
		align: 'middle',
		pack: 'center'
	},
	defaults: {
			margin: '0 10 0 10'
	},
	items: [
		{
			xtype: 'button',
			action: 'create',
			id: 'createbutton',
			hidden: true,	
			text: 'Erstellen'
		},{
			xtype: 'button',
			action: 'edit',
			id: 'editbutton',
			hidden: true,	
			text: 'Beartbeiten'
		},{
			xtype: 'button',
			action: 'remove',
			id: 'removebutton',
			hidden: true,	
			text: 'Löschen'
		},{
			xtype: 'button',
			action: 'export',
			id: 'exportbutton',
			text: 'Exportieren'
		}
	]


});


