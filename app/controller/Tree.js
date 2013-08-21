//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

Ext.define('Aap.controller.Tree', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['TreeStore'],
	models: ['TreeNode'],
	views: [
		'mainbody.AddNode'
	],
	
	init: function() {
		this.control({
			'mainbody button[action=create]': {
				click: this.onAddNode
			},
			'addnode button[action=save]': {
				click: this.doAddNode
			}
		});
	}, 

	onAddNode: function() {
		var view = Ext.widget('addnode');
	},

	doAddNode: function(button){

		var store = Ext.getStore('TreeStore');
       	var treeelement = Ext.getCmp('treestructure');
		var selection = treeelement.getSelectionModel().getSelection()[0]; //not very pretty

        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
		
		var newNode = Ext.create("Aap.model.TreeNode", {
			name: values.name, 
			leaf: true
		});
		
        if (form.getForm().isValid()) {
			var selected = Aap.util.SelectedNode.isSelectedNode();		
			if (selected == true ) {
        	   	var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();				
				var selectednode = store.getNodeById(nodeid); 
				selectednode.appendChild(newNode);
				selectednode.expand();
        	}
			else { 
				store.getRootNode().appendChild(newNode);
			}
        	 win.close();
		}
	}

});

