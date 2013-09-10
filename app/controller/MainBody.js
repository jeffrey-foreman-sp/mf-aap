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
			'dataadd button[action=save]': {
				click: this.doAddNode
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
		var selected = Aap.util.SelectedNode.isSelectedNode();		
		if (selected == true ) {
			var view = Ext.widget('dataadd');
		}
	},

	doAddNode: function(button){
		console.log('data add');
		var store = Ext.getStore('TreeStore');
       	var treeelement = Ext.getCmp('treestructure');
		var selection = treeelement.getSelectionModel().getSelection()[0]; //not very pretty
        var win = button.up('window');
		
		var newNode = Ext.create("Aap.model.TreeNode", {
			name: "name", 
			leaf: false
		});
		
       	var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
		var selectednode = store.getNodeById(nodeid); 
		selectednode.appendChild(newNode);
		selectednode.expand();
    	win.close();
	},

	openDataEdit: function() {
		console.log('Clicked on "Bearbeiten button!"');
		var selected = Aap.util.SelectedNode.isSelectedNode();		
		if (selected == true ) {
			var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
			if (nodeid != "root"){
				var view = Ext.widget('dataedit');
			} else {
       	   		console.log('Editing the root node is impossible!\nClick on a different item in the data tree!');
			}
		}
	},

	onDataRemove: function() {
		var selected = Aap.util.SelectedNode.isSelectedNode();		
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
						var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
						var selectednode = store.getNodeById(nodeid); 
						selectednode.remove();
					} 
				}
			})
		}
	}

});

