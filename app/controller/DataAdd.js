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
		var node = Aap.util.Tree.getSelectedNode(); 
		
		// disable edit, but display metaaap when node is inherited	
		if (Aap.util.Tree.isInherited(node) == true || Aap.util.Tree.isMetanode(node) == true) {

			//load (that are inherited) records into form
			Ext.getCmp('edit_verf').getForm().loadRecord(node);
		 	Ext.getCmp('edit_arch').getForm().loadRecord(node);

			// disable the form fiels in order to prevent editing
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
		}

	},

	addData: function(button){

		var node = Aap.util.Tree.getSelectedNode()

		// data handling if meta data is inherited
		if (Aap.util.Tree.isInherited(node) == true || Aap.util.Tree.isMetanode(node) == true) {
			var allg_values = Ext.getCmp('edit_allg').getForm().getValues();
			var node_data = Aap.util.Tree.getParentsMetadataNode(node).getData();

				
			if (Ext.getCmp('edit_allg').getForm().isValid()==true) {	

				var newNode = Aap.model.AapModel.create({
					loaded: true,
					leaf: false,
					metanode: false,
	
					modif: new Date(),
					erfass: new Date(),

					name: allg_values.name, 
					ident: allg_values.ident, 
					georefdat: allg_values.georefdat, 
					fachst: allg_values.fachst, 
					zugberech: allg_values.zugberech, 
					zugberech_text: Aap.util.Properties.chooseZugangsberech(allg_values.zugberech), 
					echkateg: allg_values.echkateg, 
					echkateg_text: Aap.util.Properties.chooseEchkateg(allg_values.echkateg), 
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
					arch_zs_bewe_text: node_data.arch_zs_bewe_text,
					arch_zs_begr: node_data.arch_zs_begr,
					arch_zs_inpu: node_data.arch_zs_inpu,
					arch_ws_bewe_text: node_data.arch_ws_bewe_text,
					arch_ws_begr: node_data.arch_ws_begr,
					arch_ba_bewe_text: node_data.arch_ba_bewe_text,
					arch_ba_begr: node_data.arch_ba_begr,
					arch_ents: node_data.arch_ents,					
					arch_ents_text: node_data.arch_ents_text,					
					arch_beme: node_data.arch_beme
				});

				Aap.util.Properties.setMetanodeProperty(newNode, node);
//				Aap.util.Properties.setMetanodeProperty(newNode);
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

			if (
				Ext.getCmp('edit_allg').getForm().isValid()==true 
				&& Ext.getCmp('edit_verf').getForm().isValid()==true
				&& Ext.getCmp('edit_arch').getForm().isValid()==true
			) {	

				var newNode = Aap.model.AapModel.create({
					metanode: false,
					loaded: true,
					leaf: false,
					metanode: false,

					modif: new Date(),
					erfass: new Date(),

					name: allg_values.name, 
					ident: allg_values.ident, 
					georefdat: allg_values.georefdat, 
					fachst: allg_values.fachst, 
					zugberech: allg_values.zugberech, 
					zugberech_text: Aap.util.Properties.chooseZugangsberech(allg_values.zugberech), 
					echkateg: allg_values.echkateg, 
					echkateg_text: Aap.util.Properties.chooseEchkateg(allg_values.echkateg), 
					nachfzeitr: allg_values.nachfzeitr, 
					datenmenge: allg_values.datenmenge, 
					imjr: allg_values.imjr, 
					datenzuw: allg_values.datenzuw, 
					bemerk: allg_values.bemerk,

					verf_zs_aufb: verf_values.verf_zs_aufb, 
					verf_zs_begr: verf_values.verf_zs_begr,
					verf_zs_inpu: verf_values.verf_zs_inpu,
					verf_ws_aufb: verf_values.verf_ws_aufb,
					verf_ws_begr: verf_values.verf_ws_begr,		
					verf_ents: Math.max(verf_values.verf_zs_aufb, verf_values.verf_ws_aufb),
					verf_beme: verf_values.verf_beme,
	
	
					arch_zs_bewe: arch_values.arch_zs_bewe,
					arch_zs_bewe_text: Aap.util.Properties.chooseBewertung(arch_values.arch_zs_bewe),
					arch_zs_begr: arch_values.arch_zs_begr,
					arch_zs_inpu: arch_values.arch_zs_inpu,
					arch_ws_bewe: arch_values.arch_ws_bewe,
					arch_ws_bewe_text: Aap.util.Properties.chooseBewertung(arch_values.arch_ws_bewe),
					arch_ws_begr: arch_values.arch_ws_begr,
					arch_ba_bewe: arch_values.arch_ba_bewe,
					arch_ba_bewe_text: Aap.util.Properties.chooseBewertung(arch_values.arch_ba_bewe),
					arch_ba_begr: arch_values.arch_ba_begr,
					arch_arts: arch_values.arch_arts,
					arch_ents: Aap.util.Properties.calcEntsarch(arch_values.arch_zs_bewe, arch_values.arch_zs_bewe, arch_values.arch_ba_bewe),
					arch_ents_text: Aap.util.Properties.chooseBewertung(Aap.util.Properties.calcEntsarch(arch_values.arch_zs_bewe, arch_values.arch_zs_bewe, arch_values.arch_ba_bewe)),
					arch_beme: arch_values.arch_beme

				});

				Aap.util.Properties.setMetanodeProperty(newNode, node);
//				Aap.util.Properties.setMetanodeProperty(newNode);
				node.appendChild(newNode);
				node.expand();

				// close windows 
				var win = button.up('window');
	    		win.close();
		
			}	

		}

    }



});

