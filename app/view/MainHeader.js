Ext.define('Aap.view.MainHeader',{
	extend: 'Ext.panel.Panel',
	xtype: 'mainheader',
	buttonAlign: 'center',
	layout: {
	        type: 'hbox',
	},
	defaults: {
//		border: 0
	},
	items: [
		{
			xtype: 'panel',
			flex: 4
		},{
			xtype: 'panel',
			flex: 1,
			items: [
				{
					xtype: 'button',
					text: 'Anmelden'
				}
			]
		},{
			xtype: 'panel',
			flex: 1,
			items: [
				{
					xtype: 'button',
					text: 'Bearbeiten'
				}
			]
		},{
			xtype: 'panel',
			flex: 1,
			items: [
				{
					xtype: 'button',
					text: 'Informationen'
				}
			]
		}
	]

});
