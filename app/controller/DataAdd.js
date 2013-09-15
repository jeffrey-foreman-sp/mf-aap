Ext.define('Aap.controller.DataAdd', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	views: ['modals.DataAdd'],

    init: function() {
        this.control({
            'dataadd':  {
                afterrender: this.afterPanelRendered
            },
			'dataadd button[action=save]': {
				click: this.addData
            }
        });
    },

    afterPanelRendered: function() {
        console.log('The "data add" panel was rendered');
		var selNode = Aap.util.Tree.getSelectedNode();
	
		// display metaaap data, but disable edit, if node is inherited	
		if (Aap.util.Tree.isInherited(selNode) == true || Aap.util.Tree.isMetanode(selNode)) {
        	console.log('inherited or metanode');
			var metaaap_id = Aap.util.Tree.getSelectedNode().get('metaaap_id');
			var	recm = Ext.getStore('MetaAap').findRecord('id', metaaap_id);
			Ext.getCmp('edit_verf').getForm().loadRecord(recm);
			Ext.getCmp('edit_arch').loadRecord(recm);
			
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
		}	
	},


	addData: function(button){
		console.log('data add');

		// get input from allgemein form
		var form1 = Ext.getCmp('edit_allg').getForm();
		var allg_values = form1.getValues();	

		// create new allgemein data and add it to th store
		newAllgemein = ('Aap.model.Allgemein', {
			name: allg_values.name, 
			ident: allg_values.ident, 
			georefdat: allg_values.georefdat, 
			fachst: allg_values.fachst, 
			zugberech: allg_values.zugberech, 
			echkateg: allg_values.echkateg, 
			nachfzeitr: allg_values.nachfzeitr, 
			datenmente: allg_values.datenmenge, 
			imjr: allg_values.imjr, 
			datenzuw: allg_values.datenzuw, 
			bemerk: allg_values.bemerk 
		});
		Ext.getStore('Allgemein').add(newAllgemein); 

		// create new metaaap data
		newMetaAap = ('Aap.model.MetaAap', {
		
		});
		Ext.getStore('Allgemein').add(newAllgemein); 
		
		// create tree node record and append to tree
		newTreeNode = Ext.create("Aap.model.TreeNode", {
			name: allg_values.name, 
			id: 'test',
			loaded: true,
			leaf: false
		});
       	var nodeid = Aap.util.Tree.getSelectedNode().get('id');
		var selectednode = Ext.getStore('TreeStore').getNodeById(nodeid); 
		selectednode.appendChild(newTreeNode);
		selectednode.expand();
        
		// close windows 
		var win = button.up('window');
    	win.close();


		var nodeid = Aap.util.Tree.getSelectedNode().get('id');
//		var dta =  Ext.getStore('Allgemein').findRecord('allgemein_id', nodeid).data;
//		var form = Ext.getCmp('allgemeinview').getForm();


//		form.setValues(dta);
		
//		var values = form.getValues();
//		console.log(values);

		// get selected node
/*		var store = Ext.getStore('TreeStore');
       	var treeelement = Ext.getCmp('treestructure');
		var selection = treeelement.getSelectionModel().getSelection()[0]; //not very pretty
*/


    }



});

