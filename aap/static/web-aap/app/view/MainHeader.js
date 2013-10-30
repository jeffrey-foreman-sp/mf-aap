Ext.define('Aap.view.MainHeader',{
	extend: 'Ext.panel.Panel',
	xtype: 'mainheader',
	layout: {
	        type: 'hbox',
			align: 'stretch'
	},
	defaults: {
		border: 0
	},
	items: [
		{
			xtype: 'panel',
			flex: 4,
			layout: {
				type: 'hbox',
				align: 'middle',
				pack: 'start'
			},
			items: [
				{
					ytype: 'panel',
					border: 0,
					html: '<div style="font-size: 30px; margin: auto 20;">AAP-Tool</div>'
				}
			]
		},{
			xtype: 'panel',
			flex: 2,
			layout: {
				type: 'hbox',
				align: 'middle',
				pack: 'end'
			},
			defaults: {
				margin: '0 20 0 0'
			},
			items: [
				{
					xtype: 'button',
					text: 'Bearbeiten',
					id: 'toggleedit',
					action: 'toggleedit',
					hidden: false,
					pressed: false
				},{
					xtype: 'button',
					id: 'login',
					text: 'Anmelden',
					action: 'login',
					pressed: false
				},{
					xtype: 'button',
					action: 'openinfo',
					text: 'Informationen'
				}
			]
		}
	]

});
