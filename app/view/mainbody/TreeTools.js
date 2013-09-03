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
			text: 'Erstellen'
		},{
			xtype: 'button',
			action: 'edit',
			id: 'editbutton',
			text: 'Beartbeiten'
		},{
			xtype: 'button',
			action: 'remove',
			id: 'removebutton',
			text: 'Löschen'
		},{
			xtype: 'button',
			action: 'export',
			id: 'exportbutton',
			hidden: true,	
			text: 'Exportieren'
		}
	]


});


