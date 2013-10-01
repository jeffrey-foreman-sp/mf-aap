Ext.define('Aap.controller.MainBody', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['AapStore'],
	models: ['AapModel'],
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
		var rn = Ext.getStore('AapStore').getRootNode();	
		Ext.getCmp('treestructure').getSelectionModel().select(rn);
	},

	onAddNode: function() {
		var selection = Aap.util.Tree.getTreeSelection();		
		var selected = Aap.util.Tree.isSelectedNode(selection);		
		if (selected == true ) {
			var view = Ext.widget('dataadd');
		}
	},

	openDataEdit: function() {
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
					//	var store = Ext.getStore('AapStore');
					//	var nodeid = Aap.util.Tree.getSelectedNode().get('id');
					//	var selectednode = store.getNodeById(nodeid); 
					//	selectednode.remove();
					var parentNode = Aap.util.Tree.getSelectedNode().parentNode;
					var childrenOfParent = Aap.util.Tree.getSelectedNode().parentNode.childNodes.length
					Aap.util.Tree.getSelectedNode().remove();
					if (childrenOfParent == 1) (parentNode.collapse())
					} 
				}
			})
		}
	}

});

