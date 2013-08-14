Ext.define('HR.view.Viewport', {
	extend: 'Ext.container.Viewport',
//	requires: ['HR.view.company.List'],
	
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
					xtype: 'panel',
					height: 60
				},{
					xtype: 'panel',
					height: 740,	
					layout: {
						type: 'hbox',
						align: 'stretch'
					},
					items: [
						{
							xtype: 'panel',
							title: 'Geodatenbestand',
							flex: 1
						},{
							xtype: 'panel',
							title: 'Metadaten Allgemein',
							flex: 1,
							items: [
								{
									xtype: 'panel',
									title: 'Allgemein',
									flex: 1
								}
							]
						},{
							xtype: 'panel',
							title: 'Metadaten AAP',
							flex: 2, 
							layout: {
								type: 'hbox',
								align: 'stretch'
							},
							items: [
								{
									xtype: 'panel',
									title: 'Bewertung Nachhaltige Verfügbarkeit',
									flex: 1
								},{
									xtype: 'panel',
									title: 'Bewertung Archivwürdigkeit',
									flex: 1
								}	
							]	
						}
					]
				}
			]
		}
	]
});
