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
		var selNode = Aap.util.Tree.getSelectedNode();

		// ------------------------------------------------
		
		// get input from allgemein form
		var form1 = Ext.getCmp('edit_allg').getForm();
		var allg_values = form1.getValues();	

		// create new allgemein record with data from the form data and add it to the storand add it to the storee
		var newAllgemein = ('Aap.model.Allgemein', {
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

		// ------------------------------------------------
		
		// get input from verfuegbarkeit form
		var form2 = Ext.getCmp('edit_verf').getForm();
		var verf_values = form2.getValues();	
		
		// get input from metaaap form
		var form3 = Ext.getCmp('edit_arch').getForm();
		var arch_values = form3.getValues();	
		
		// create new metaaap record if the record not has to be inherited and add it to the store 
		if (Aap.util.Tree.isInherited(selNode) == false && Aap.util.Tree.isMetanode(selNode) == false) {
			var newMetaAap = ('Aap.model.MetaAap', {
				aufbewzs: verf_values.aufbewzs, 
				begrzs: verf_values.begrzs, 
				inpauf: verf_values.inpauf,
				aufbeww: verf_values.aufbeww,
				begrw: verf_values.begrw,		
				entsaufbew: verf_values.entsaufbew,
				bemerkaufbew: verf_values.bemerkaufbew,
      			bewzs: arch_values.bewzs,
				begrzs: arch_values.begrzs,
				inparch: arch_values.inparch,
				bewws: arch_values.bewws,
				begrw: arch_values.begrw,
				bewb: arch_values.bewb,
				begrba: arch_values.begrba,
				artsampl: arch_values.artsampl,
				entsarch: arch_values.entsarch,
				bemerkarch: arch_values.bemerkarch
			});
		Ext.getStore('MetaAap').add(newMetaAap); 
		}

		// ------------------------------------------------

		// get the id of the new allgmemein record in order to add it to the tree node
		var newIdAllgemein = Ext.getStore('Allgemein').getNewRecords()[0].getId();  // not very pretty 
		//Ext.getStore('Allgemein').getNewRecords()[0].internalId = newIdAllgemein;   //not very pretty 

		// get the ids from the metaaap record in order to add it to the tree store
		if (Aap.util.Tree.isInherited(selNode) == false && Aap.util.Tree.isMetanode(selNode) == false) {
			var newIdMetaAap = Ext.getStore('MetaAap').getNewRecords()[0].getId();  // not very pretty 
			console.log('if');
			console.log(newIdMetaAap);

			var isMetanode = true;
		}
		else {
			var nodeid = selNode.get('id');
			var newIdMetaAap = Ext.getStore('TreeStore').getNodeById(nodeid).getId();
			console.log('else');
			console.log(newIdMetaAap);

			var isMetanode = false;
		}

		// create tree node record and append to tree
		var newTreeNode = Ext.create("Aap.model.TreeNode", {
			name: allg_values.name, 
			allgemein_id: newIdAllgemein, 
			metaaap_id: newIdMetaAap, 
			metanode: isMetanode,
			loaded: true,
			leaf: false
		});
		console.log(newTreeNode);
       	var nodeid = Aap.util.Tree.getSelectedNode().get('id');
		var selectednode = Ext.getStore('TreeStore').getNodeById(nodeid); 
		selectednode.appendChild(newTreeNode);
		selectednode.expand();
		var newTree = Ext.getStore('TreeStore').getNewRecords()[0]/*.getId()*/;  // not very pretty 
		console.log(newTree);
		var newIdTree = Ext.getStore('TreeStore').getNewRecords()[0].getId();  // not very pretty 
		console.log(newIdTree);




		// close windows 
		var win = button.up('window');
    	win.close();

    }



});

