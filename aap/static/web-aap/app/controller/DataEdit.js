Ext.define('Aap.controller.DataEdit', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['AapStore'],
	models: ['AapModel'],
	views: ['modals.DataEdit'],

    init: function() {
        this.control({
			'dataedit  dataentryallgemein checkboxfield[name=metanode]': {
				change: this.metanodeWarning //metanodeDeclarationChange
			},
            'dataedit':  { 
                afterrender: this.afterPanelRendered
            },
			'dataedit button[action=save]': {
				click: this.doEditData
			}
        });
    },

    metanodeWarning: function() {
        Ext.create('Ext.window.MessageBox',{
                buttonText: {
                    yes : 'Knoteneinstellung wechseln',
                    no : 'Abbrechen'
                }
        }).confirm('Warnung', 'Durch das Wechseln der Knoteneinstellung werden Metadaten gelöscht!<br>Was möchten Sie tun?', function (button) {
                if (button==='no') return; 
                    this.metanodeDeclarationChange();
        }, this);
    },
	// ******************************************************************************
	// enable form fields and load data into it if the "bewertungsknoten" box is checeked
	// ******************************************************************************
	metanodeDeclarationChange: function() {
        console.log('metanodeDeclarationChange');
		var mn_value = Ext.ComponentQuery.query('dataedit dataentryallgemein checkboxfield[name=metanode]')[0].getValue();
		if (mn_value == true) {
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		    	field.setDisabled(false);  
			});
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   		    	field.setDisabled(false);  
			});
			var node = Aap.util.Tree.getSelectedNode(); 
			Ext.getCmp('edit_verf').getForm().loadRecord(node);
	 		Ext.getCmp('edit_arch').getForm().loadRecord(node);
		} 
		else { 	
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		    	field.setValue('');  
			});
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   		    	field.setValue('');  
			});
		} 
	
	},


	// ******************************************************************************
	//  load data into form fields afte the panel has been rendered
	//  - disable the form fields if the meta data is inherited from superiour tree node 
	//  - enable the form fields if the node is a metanode itself
	// ******************************************************************************
    afterPanelRendered: function() {
		var node = Aap.util.Tree.getSelectedNode(); 
		
		// load node data into forms
		Ext.getCmp('edit_allg').getForm().loadRecord(node);
		Ext.getCmp('edit_verf').getForm().loadRecord(node);
	 	Ext.getCmp('edit_arch').getForm().loadRecord(node);

		Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   	    	field.setDisabled(true);  
		});
		Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   	    	field.setDisabled(true);  
		});
	
		if (Aap.util.Tree.isInherited(node) == true) {
			Ext.ComponentQuery.query('dataedit dataentryallgemein checkboxfield[name=metanode]')[0].setDisabled(true);
		}

		if (Aap.util.Tree.isMetanode(node) == true) {
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		   		field.setDisabled(false);  
			});
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   	    		field.setDisabled(false);  
			});
		}

    },

	
	// ******************************************************************************
	//  load data into form fields afte the panel has been rendered
	//  - disable the form if the meta data is inherited from superiour tree node 
	// ******************************************************************************
	doEditData: function(button){
		
		node = Aap.util.Tree.getSelectedNode(); 
	
		// write allgemein from form to store	
		var form1 = Ext.getCmp('edit_allg').getForm();
		var record1 = form1.getRecord();
		var allg_values = form1.getValues();	

		var form2 = Ext.getCmp('edit_verf').getForm();
		
		var verf_values = form2.getValues();	
		var form3 = Ext.getCmp('edit_arch').getForm();
		var arch_values = form3.getValues();	

		// write values to attributes if the form validation has been accepted ***********************
		if (form1.isValid()==true && form2.isValid()==true && form3.isValid()==true) {	

			// set all metadata to empty if the node has changed to not to be a metanode anymore , 
			if (allg_values.metanode==false) { Aap.util.Tree.setMetanodeFalse(node); }

			// set the values of the allemein attributes	
			record1.set(allg_values);
			node.set('qtip',allg_values.name);
			node.set('zugberech_text',Aap.util.Properties.chooseZugangsberech(allg_values.zugberech));
			node.set('echkateg_text',Aap.util.Properties.chooseEchkateg(allg_values.echkateg));
			node.set('ident_prefix', Aap.util.Properties.getPrefix(allg_values.ident)) ;
			node.set('ident_suffix', Aap.util.Properties.getSuffix(allg_values.ident)) ;
	
			//set the values for the metadata attributes	
			if (allg_values.metanode==true) {
				node.cascadeBy(function () {
					this.set('modif', new Date());
					this.set('metanode', false);
					this.set('inherited', true);
					this.set('verf_zs_aufb', verf_values.verf_zs_aufb); 
					this.set('verf_zs_begr', verf_values.verf_zs_begr);
					this.set('verf_ws_aufb', verf_values.verf_ws_aufb);
					this.set('verf_ws_begr', verf_values.verf_ws_begr);
					this.set('verf_ws_inpu', verf_values.verf_ws_inpu);
					this.set('verf_ents', Math.max(verf_values.verf_zs_aufb, verf_values.verf_ws_aufb));
					this.set('verf_beme', verf_values.verf_beme);
	      			this.set('arch_zs_bewe', arch_values.arch_zs_bewe);
					this.set('arch_zs_bewe_text', Aap.util.Properties.chooseBewertung(arch_values.arch_zs_bewe));
					this.set('arch_zs_begr', arch_values.arch_zs_begr);
					this.set('arch_ws_bewe', arch_values.arch_ws_bewe);
					this.set('arch_ws_bewe_text', Aap.util.Properties.chooseBewertung(arch_values.arch_ws_bewe));
					this.set('arch_ws_begr', arch_values.arch_ws_begr);
					this.set('arch_ws_inpu', arch_values.arch_ws_inpu);
					this.set('arch_ba_bewe', arch_values.arch_ba_bewe);
					this.set('arch_ba_bewe_text', Aap.util.Properties.chooseBewertung(arch_values.arch_ba_bewe));
					this.set('arch_ba_begr', arch_values.arch_ba_begr);
					this.set('artsampl', arch_values.artsampl);
					this.set('arch_ents', Aap.util.Properties.calcEntsarch(arch_values.arch_zs_bewe, arch_values.arch_ws_bewe, arch_values.arch_ba_bewe));
					this.set('arch_ents_text', Aap.util.Properties.chooseBewertung(arch_values.arch_zs_bewe, arch_values.arch_ws_bewe, arch_values.arch_ba_bewe));
					this.set('arch_beme', arch_values.arch_beme);
				}, null, null);
				node.set('metanode', true);
				node.set('inherited', false);
			}
			Ext.getStore('AapStore').sync();


			// display record in form			
			var node = Aap.util.Tree.getSelectedNode();
			Ext.getCmp('disp_allg').getForm().loadRecord(node);
			Ext.getCmp('disp_verf').getForm().loadRecord(node);
		 	Ext.getCmp('disp_arch').getForm().loadRecord(node);
	
			// close edite window
			var win = button.up('window');
			win.close();	

		}
	}

});

