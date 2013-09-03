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
			text: 'Erstellen'
		},{
			xtype: 'button',
			action: 'edit',
			text: 'Beartbeiten'
		},{
			xtype: 'button',
			action: 'remove',
			text: 'Löschen'
		}
	]


});


