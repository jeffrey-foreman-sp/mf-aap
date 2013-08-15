Ext.define('Aap.view.Header',{
	extend: 'Ext.panel.Panel',
	xtype: 'header',
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
				margin: '10 20 10 20'
			},
			items: [
				{
					xtype: 'button',
					text: 'Bearbeiten'
				},{
					xtype: 'button',
					text: 'Anmelden'
				},{
					xtype: 'button',
					text: 'Informationen'
				}
			]
		}
	]

});
