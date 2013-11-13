Ext.define('Aap.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: ['Aap.view.MainHeader', 'Aap.view.MainBody'],
	layout: {
		type:  'vbox',
		align: 'center',
		pack: 'center'
	},
	autoScroll: true,
	items:[
		{
			xtype: 'panel',
			height: 650,
			width: 1400,
			style: 'margin-top: auto; margin-bottom: auto;',
			border: 0,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'mainheader',
					margin: 5,
					height: 60
				},{
					xtype: 'mainbody',
					border: 0,
					flex: 1
				}
			]
		}
	]
});
