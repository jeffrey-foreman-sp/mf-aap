Ext.define('Aap.view.mainbody.Geodatenstand', {
	extend: 'Ext.panel.Panel',
//	requires: ['Aap.view.MainHeader', 'Aap.view.MainBody'],
	xtype: 'geodatenstand',
	layout: {
		type:  'vbox',
		align: 'stretch',
	},
	items:[
		{
			xtype: 'panel',
			flex: 1,
			border: 0
		},{
			xtype: 'panel',
			height: 60,
			border: 0
		}
	]
});
