Ext.define('Aap.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: ['Aap.view.MainHeader', 'Aap.view.mainbody.Allgemein'],
	
	layout: {
		type:  'vbox',
		align: 'center',
		pack: 'center'
	},
	autoScroll: true,
	items:[
		{
			xtype: 'panel',
			height: 800,
			width: 1200,
			style: 'margin-top: auto; margin-bottom: auto;',	
			layout: {
				align: 'stretch'
			},
			items: [
				{
					xtype: 'mainheader',
					height: 60
				},{
					xtype: 'mainbody',
					height: 740,	
					layout: {
						type: 'hbox',
						align: 'stretch'
					}
				}
			]
		}
	]
});
