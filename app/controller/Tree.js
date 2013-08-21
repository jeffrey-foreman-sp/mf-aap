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

/*		var treeelement = Ext.getCmp('treestructure');
		var selectionmodel = treeelement.getSelectionModel();
		var selection = selectionmodel.getSelection()[0];
		var nodeid = selection.getId();	
*/

		var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();				
		var store = Ext.getStore('TreeStore');
		var newNode = Ext.create("Aap.model.TreeNode", {name: "TestOffice"});
		
		var selectednode = store.getNodeById(nodeid); 
		selectednode.appendChild("newNode");
		selectednode.expand();


	}

});

