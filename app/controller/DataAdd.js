Ext.define('Aap.controller.DataAdd', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['AapStore'],
	models: ['AapModel'],
	views: ['modals.DataAdd'],

    init: function() {
        this.control({
            'dataadd':  {
                afterrender: this.afterAddPanelRendered
            },
			'dataadd button[action=save]': {
				click: this.addData
            }
        });
    },

    afterAddPanelRendered: function() {
        console.log('"Erstellen" window rendered!');
		var node = Aap.util.Tree.getSelectedNode();
	
		var node = Aap.util.Tree.getSelectedNode(); 
		
		// disable edit, but display metaaap when node is inherited	
		if (Aap.util.Tree.isInherited(node) == true || Aap.util.Tree.isMetanode(node) == true) {
			Ext.getCmp('edit_verf').getForm().loadRecord(node);
		 	Ext.getCmp('edit_arch').getForm().loadRecord(node);
			
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

		var node = Aap.util.Tree.getSelectedNode()
		// get values for allgmemein data

		// data handling if meta data is inherited
		if (Aap.util.Tree.isInherited(node) == true || Aap.util.Tree.isMetanode(node) == true) {
			 allg_values = Ext.getCmp('edit_allg').getForm().getValues();
			 node_data = Aap.util.Tree.getParentsMetadataNode(node).getData();


			 newNode = ('Aap.model.AapModel',{
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
				bemerk: allg_values.bemerk,

				aufbewzs: node_data.aufbewzs, 
				begrzs: node_data.begrzs,
				inpauf: node_data.inpaufb,
				aufbeww: node_data.aufbewws,
				begrw: node_data.begrw,		
				entsaufbew: node_data.entsaufbew,
				bemerkaufbew: node_data.bemerkaufbew,

	      		bewzs: node_data.bewzs,
				begrzs: node_data.begrzs,
				inparch: node_data.inparch,
				bewws: node_data.bewws,
				begrw: node_data.begrw,
				bewb: node_data.bewba,
				begrba: node_data.begrba,
				artsampl: node_data.artsampl,
				entsarch: node_data.entsarch,
				bemerkarch: node_data.bemerkarch,

				metanode: false
			});
		}

	
/*		var node = Aap.util.Tree.getSelectedNode(); 
	
		// get input from forms 
		var form1 = Ext.getCmp('edit_allg').getForm();
		var allg_values = form1.getValues();	
		var form2 = Ext.getCmp('edit_verf').getForm();
		var verf_values = form2.getValues();	
		var form3 = Ext.getCmp('edit_arch').getForm();
		var arch_values = form3.getValues();	


		if (Aap.util.Tree.isInherited(node) == false) {
			node.cascadeBy(function () {
				this.set('aufbewzs', verf_values.aufbewzs); 
				this.set('begrzs', verf_values.begrzs);
				this.set('inpauf', verf_values.inpauf);
				this.set('aufbeww', verf_values.aufbeww);
				this.set('begrw', verf_values.begrw);		
				this.set('entsaufbew', verf_values.entsaufbew);
				this.set('bemerkaufbew', verf_values.bemerkaufbew);

	      		this.set('bewzs', arch_values.bewzs);
				this.set('begrzs', arch_values.begrzs);
				this.set('inparch', arch_values.inparch);
				this.set('bewws', arch_values.bewws);
				this.set('begrw', arch_values.begrw);
				this.set('bewb', arch_values.bewb);
				this.set('begrba', arch_values.begrba);
				this.set('artsampl', arch_values.artsampl);
				this.set('entsarch', arch_values.entsarch);
				this.set('bemerkarch', arch_values.bemerkarch);

				this.set('metanode', false);
			}, null, null);
		node.set('metanode', true);
		}
		});
	//	Ext.getStore('Allgemein').add(newAllgemein); 


		
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
		var newTree = Ext.getStore('TreeStore').getNewRecords()[0].getId();  // not very pretty 
		console.log(newTree);
		var newIdTree = Ext.getStore('TreeStore').getNewRecords()[0].getId();  // not very pretty 
		console.log(newIdTree);

*/


		// close windows 
		var win = button.up('window');
    	win.close();

    }



});

