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
			'mainbody': {
				afterrender: this.afterAppLoad
			},
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

	
	// ******************************************************************************
	// handle the google client load after rendering the main body
	// ******************************************************************************
	afterAppLoad: function() {
		Ext.Ajax.request({
                   url: 'data',
                   success: function(response, opts) {
                        var resp = JSON.parse(response.responseText);
                        Aap.util.Data.loadDataToTree(resp.result);
                        console.dir(resp.result);
                   },
                   failure: function(response, opts) {
                         console.log('server-side failure with status code ' + response.status);
                    }
                });

	},


	// ******************************************************************************
	// handle the google client load after rendering the main body
	// ******************************************************************************
	initSelection: function() {
		var rn = Ext.getStore('AapStore').getRootNode();	
		Ext.getCmp('treestructure').getSelectionModel().select(rn);
	},


	// ******************************************************************************
	// open the "add node" window if a node is selected
	// ******************************************************************************
	onAddNode: function() {
		var selection = Aap.util.Tree.getTreeSelection();		
		var selected = Aap.util.Tree.isSelectedNode(selection);		
		if (selected == true ) {
			var view = Ext.widget('dataadd');
		}
	},


	// ******************************************************************************
	// open the "edit" window if a node is selected (which is not the root node)
	// ******************************************************************************
	openDataEdit: function() {
		var selection = Aap.util.Tree.getTreeSelection();		
		var selected = Aap.util.Tree.isSelectedNode(selection);		
		if (selected == true ) {
			var nodeid = Aap.util.Tree.getSelectedNode().get('id');
			if (nodeid != "root"){
				var view = Ext.widget('dataedit');
			} 
		}
	},

	// ******************************************************************************
	// open message window asking for confirmation before deleting the selected node 
	// ******************************************************************************
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
						var parentNode = Aap.util.Tree.getSelectedNode().parentNode;
						var childrenOfParent = Aap.util.Tree.getSelectedNode().parentNode.childNodes.length
						Aap.util.Tree.getSelectedNode().remove();
						if (childrenOfParent == 1) {
							parentNode.collapse();
							parentNode.set('expandable', false);
						}
					} 
				}
			})
		}
	}


});

