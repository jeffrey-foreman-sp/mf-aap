Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.panel.Panel',
	xtype: 'mainbody',
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
});
