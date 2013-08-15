Ext.define('Aap.view.mainbody.Geodatenstand', {
	extend: 'Ext.panel.Panel',
	requires: ['Aap.view.mainbody.Tree'],
	xtype: 'geodatenstand',
	layout: {
		type:  'vbox',
		align: 'stretch',
	},
	items:[
		{
			xtype: 'tree',
			flex: 1,
			border: 0
		},{
			xtype: 'panel',
			height: 60,
			border: 0/*,
			style: {
		    	'border-top-style': 'solid',
		    	'border-top-width': 1
			}*/	
		}
	]
});
