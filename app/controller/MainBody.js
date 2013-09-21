//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

Ext.define('Aap.controller.MainBody', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['TreeStore'],
	models: ['TreeNode'],
	views: [
		'modals.DataAdd',
		'modals.DataEdit'
	],
	
	init: function() {
		this.control({
			'tree': {
				afterrender: this.initSelection
			},
			'mainbody button[action=create]': {
				click: this.onAddNode
			},
			'mainbody button[action=edit]': {
				click: this.openDataEdit
			},
			'mainbody button[action=remove]': {
				click: this.onDataRemove
			},
			'dataremove button[action=confirm]': {
				click: this.doDataRemove
			}
		});
	}, 

	initSelection: function() {
//		console.log('Root node selected after rendering of tree');
		var rn = Ext.getStore('TreeStore').getRootNode();	
		Ext.getCmp('treestructure').getSelectionModel().select(rn);
	},

	onAddNode: function() {
		var selection = Aap.util.Tree.getTreeSelection();		
		var selected = Aap.util.Tree.isSelectedNode(selection);		
		if (selected == true ) {
			var view = Ext.widget('dataadd');
		console.log(view);
		}
	},

	openDataEdit: function() {
		console.log('Clicked on "Bearbeiten button!"');
		var selection = Aap.util.Tree.getTreeSelection();		
		var selected = Aap.util.Tree.isSelectedNode(selection);		
		if (selected == true ) {
			var nodeid = Aap.util.Tree.getSelectedNode().get('id');
			if (nodeid != "root"){
				var view = Ext.widget('dataedit');
			} else {
       	   		console.log('Editing the root node is impossible!\nClick on a different item in the data tree!');
			}
		}
	},

	onDataRemove: function() {
		var selection = Aap.util.Tree.getTreeSelection();
		var selected = Aap.util.Tree.isSelectedNode(selection);		
		if (selected == true ) {
			Ext.MessageBox.show({
				title: 'Warnung!',
        	    msg: 'Wollen Sie die Daten wirklich unwiderrufbar löschen?',
        	    buttons: Ext.MessageBox.YESNO,
        	   	icon: Ext.MessageBox.WARNING, 
				buttonText:{ 
        	        yes: "Daten löschen!", 
        	        no: "Abbrechen!" 
        	    },
				fn: function(btn){
    			    if (btn === 'yes') {
						var store = Ext.getStore('TreeStore');
						var nodeid = Aap.util.Tree.getSelectedNode().get('id');
						var selectednode = store.getNodeById(nodeid); 
						selectednode.remove();
					} 
				}
			})
		}
	}

});

