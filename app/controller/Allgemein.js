//------------------------------------------------------------------
// display control of "Allgemein" panel
//------------------------------------------------------------------
Ext.define('Aap.controller.Allgemein', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	
	views: [
		'modals.DataEdit'
	],

    init: function() {
        this.control({

            'panel#allgemeinview': {
              //  render: this.onPanelRendered
                afterrender: this.afterPanelRendered
            }
        });
    },

    afterPanelRendered: function() {
        console.log('The allgemeinview panel was rendered');
		var av = Ext.getCmp('allgemeinview');
		var form = av.getForm();
		var values = form.getValues();
		
		form = form.setValues(
		{ 
			/*"nodeid":"1112faf",*/
			titel:"bsp", 
			ident: "bspident", 
			georefdat:"bspgeorefdat",
			fachst:"bspfach", 
			zugberech:"bspzugangsbe", 
			echkateg:"bspechkateg", 
			nachfzeitr:"bspzeitrnachf", 
			datenmenge:"bspdatenmende", 
			imjr:"bspimjr", 
			datenzuw:"bspdatenzuw", 
			bemerk:"bspbemerk"
		}
		);

		var values = form.getValues();





    }


/*
	init: function() {
		this.control({
			'mainbody button[action=create]': {
				click: this.onAddNode
			},
			'dataedit[caller=oan] button[action=save]': {
				click: this.doAddNode
			},
			'mainbody button[action=edit]': {
				click: this.onEditData
			},
			'dataedit[caller=oed] button[action=save]': {
				click: this.doEditData
			},
			'mainbody button[action=remove]': {
				click: this.onRemoveNode
			},
			'removenode button[action=confirm]': {
				click: this.doRemoveNode
			}
		});
	}, 

	onAddNode: function() {
		var view = Ext.widget('dataedit');
		view.caller = 'oan';
	},

	doAddNode: function(button){
		console.log('node add');
		var store = Ext.getStore('TreeStore');
       	var treeelement = Ext.getCmp('treestructure');
		var selection = treeelement.getSelectionModel().getSelection()[0]; //not very pretty
		
        var win = button.up('window')/*,
            form = win.down('form'),
            values = form.getValues();
		
		var newNode = Ext.create("Aap.model.TreeNode", {
//		name: values.name, 
		name: "name", 
			leaf: false
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
    	win.close();/*
		}
		
	},

	onEditData: function() {
		var selected = Aap.util.SelectedNode.isSelectedNode();		
		if (selected == true ) {
			var view = Ext.widget('dataedit');
			view.caller = 'oed';
		}
	},

	doEditData: function(button){
		console.log('data edit');
		var win = button.up('window');
		win.close();	
	},

	onRemoveNode: function() {
		var selected = Aap.util.SelectedNode.isSelectedNode();		
		if (selected == true ) {
			var view = Ext.widget('removenode');
		}
	},

	doRemoveNode: function(button) {
		console.log('remove node');
		var store = Ext.getStore('TreeStore');
       	var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
		var selectednode = store.getNodeById(nodeid); 
		selectednode.remove();
        var win = button.up('window');
       	win.close();
	}
*/

});

