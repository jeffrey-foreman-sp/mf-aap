Ext.define('HR.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: {
		type:  'vbox',
		align: 'stretch'
	},
	items:[
		{	xtype: 'toolbar',	
			items: [
				 {	xtype: 'button',
					text: 'Fill',
					action: 'load'
				},
				{	xtype: 'button',
					text: 'Commit',
					action: 'save',
					disabled: true
				}
			]
		},
		{	xtype: 'panel',
			title: 'Company List',
			flex: 1
		},
		{	xtype: 'splitter'
		}, 	
		{	xtype: 'panel',
			title: 'Associate List',
			flex: 1
		}
	]
});
