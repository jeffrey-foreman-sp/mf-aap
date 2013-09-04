//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

Ext.define('Aap.controller.Tree', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['TreeStore'],
	models: ['TreeNode'],
	views: [
		'modals.DataRemove',
		'modals.DataAdd',
		'modals.DataEdit'
	],
	
	init: function() {
		this.control({
			'tree': {
				afterrender: this.initSelection,
				drop: this.dropItem
			}
		});
	}, 

	initSelection: function() {
		console.log("Tree rendered");
	},
	dropItem: function() {
		console.log('item dropped');
	}

});

