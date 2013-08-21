//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

Ext.define('Aap.controller.Tree', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
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

	//var newNode = Ext.create("Aap.model.TreeNode", {name: "TestOffice"});
		
		var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();				
		var store = Ext.getStore('TreeStore');
	
		var selectednode = store.getNodeById(nodeid); 
		selectednode.appendChild({
			name: 'newNode',
			leaf: true
		});
		selectednode.expand();


	}

});

