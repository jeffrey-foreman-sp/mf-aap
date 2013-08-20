//------------------------------------------------------------------
// Add a node to data tree
//------------------------------------------------------------------

Ext.define('Aap.controller.tree.AddNode', {
	extend: 'Ext.app.Controller',
	stores: ['TreeStore'],
	models: ['TreeNode'],
//	views: [
//		'mainbody.Tree'
//	],
	
	init: function() {
		this.control({
			'mainbody button[action=create]': {
				click: this.addNode
			}
		});
	}, 

	addNode: function() {
		console.log('will add a node here');
		var store = Ext.getStore('TreeStore');
		var newNode = Ext.create("Aap.model.TreeNode", {name: "TestOffice"});
		store.getNodeById(1).appendChild("newNode");
	}

});

