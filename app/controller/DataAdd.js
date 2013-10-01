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


		// data handling if meta data is inherited
		if (Aap.util.Tree.isInherited(node) == true || Aap.util.Tree.isMetanode(node) == true) {
			var allg_values = Ext.getCmp('edit_allg').getForm().getValues();
			var node_data = Aap.util.Tree.getParentsMetadataNode(node).getData();

				
			if (Ext.getCmp('edit_allg').getForm().isValid()==true) {	

				newNode = ('Aap.model.AapModel',{
					metanode: false,
					loaded: true,
					leaf: false,
	
					modif: new Date(),
					erfass: new Date(),

					name: allg_values.name, 
					ident: allg_values.ident, 
					georefdat: allg_values.georefdat, 
					fachst: allg_values.fachst, 
					zugberech: allg_values.zugberech, 
					echkateg: allg_values.echkateg, 
					nachfzeitr: allg_values.nachfzeitr, 
					datenmenge: allg_values.datenmenge, 
					imjr: allg_values.imjr, 
					datenzuw: allg_values.datenzuw, 
					bemerk: allg_values.bemerk,

					verf_zs_aufb: node_data.verf_zs_aufb, 
					verf_zs_begr: node_data.verf_zs_begr,
					verf_zs_inpu: node_data.verf_zs_inpu,
					verf_ws_aufb: node_data.verf_ws_aufb,
					verf_ws_begr: node_data.verf_ws_begr,		
					verf_ents: node_data.verf_ents,
					verf_beme: node_data.verf_beme,

					arch_zs_bewe: node_data.arch_zs_bewe,
					arch_zs_begr: node_data.arch_zs_begr,
					arch_zs_inpu: node_data.arch_zs_inpu,
					arch_ws_bewe: node_data.arch_ws_bewe,
					arch_ws_begr: node_data.arch_ws_begr,
					arch_ba_bewe: node_data.arch_ba_bewe,
					arch_ba_begr: node_data.arch_ba_begr,
					arch_ents: node_data.arch_ents,					
					arch_beme: node_data.arch_beme
				});

				node.appendChild(newNode);
				node.expand();
	
				// close windows 
				var win = button.up('window');
	  	 		win.close();

			}

		}
	
		// data handling if meta data is not inherited
		else {
			var allg_values = Ext.getCmp('edit_allg').getForm().getValues();
			var verf_values = Ext.getCmp('edit_verf').getForm().getValues();
			var arch_values = Ext.getCmp('edit_arch').getForm().getValues();
			var node_data = Aap.util.Tree.getSelectedNode().getData();

			if (
				Ext.getCmp('edit_allg').getForm().isValid()==true 
				&& Ext.getCmp('edit_verf').getForm().isValid()==true
				&& Ext.getCmp('edit_arch').getForm().isValid()==true
			) {	

				function calcEntsarch(a,b,c) {
					var e = '';
					if (a=='A' || b=='A' || c=='A') {e='A'}
					else if (a=='S' || b=='S' || c=='S') {e='S'}
					else if (a=='N' || b=='N' || c=='N') {e='N'}
					return e
				}
				var entscheid_archivierung = calcEntsarch(arch_values.bewzs, arch_values.bewws, arch_values.bewba);
	
				newNode = ('Aap.model.AapModel',{
					metanode: false,
					loaded: true,
					leaf: false,

					modif: new Date(),
					erfass: new Date(),

					name: allg_values.name, 
					ident: allg_values.ident, 
					georefdat: allg_values.georefdat, 
					fachst: allg_values.fachst, 
					zugberech: allg_values.zugberech, 
					echkateg: allg_values.echkateg, 
					nachfzeitr: allg_values.nachfzeitr, 
					datenmenge: allg_values.datenmenge, 
					imjr: allg_values.imjr, 
					datenzuw: allg_values.datenzuw, 
					bemerk: allg_values.bemerk,

					verf_zs_aufb: node_data.verf_zs_aufb, 
					verf_zs_begr: node_data.verf_zs_begr,
					verf_zs_inpu: node_data.verf_zs_inpu,
					verf_ws_aufb: node_data.verf_ws_aufb,
					verf_ws_begr: node_data.verf_ws_begr,		
					verf_ents: Math.max(verf_values.verf_zs_aufb, verf_values.verf_ws_aufb),
					verf_beme: node_data.verf_beme,
	
	
					arch_zs_bewe: node_data.arch_zs_bewe,
					arch_zs_begr: node_data.arch_zs_begr,
					arch_zs_inpu: node_data.arch_zs_inpu,
					arch_ws_bewe: node_data.arch_ws_bewe,
					arch_ws_begr: node_data.arch_ws_begr,
					arch_ba_bewe: node_data.arch_ba_bewe,
					arch_ba_begr: node_data.arch_ba_begr,
					arch_arts: node_data.arch_arts,
					arch_ents: entscheid_archivierung,					
					arch_beme: node_data.arch_beme

				});

				// here function that inserts metanode = true
	
				node.appendChild(newNode);
				node.expand();

				// close windows 
				var win = button.up('window');
	    		win.close();
		
			}	

		}

    }



});

