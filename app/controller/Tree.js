//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

Ext.define('Aap.controller.Tree', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['TreeStore'],
	models: ['TreeNode'],
	views: [
		'mainbody.Tree'
	],
	
	init: function() {
		this.control({
			'tree': {
				afterrender: this.initSelection,
			}
		});
	}, 

	initSelection: function() {
		console.log("Tree rendered");
		Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
	}

});

