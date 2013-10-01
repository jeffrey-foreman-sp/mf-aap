Ext.define('Aap.controller.DataEdit', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['AapStore'],
	models: ['AapModel'],
	views: ['modals.DataEdit'],

    init: function() {
        this.control({
            'dataedit':  { 
                afterrender: this.afterPanelRendered
            },
			'dataedit button[action=save]': {
				click: this.doEditData
			}
        });
    },

    afterPanelRendered: function() {
			
		var node = Aap.util.Tree.getSelectedNode(); 
		
		// load node data into forms
		Ext.getCmp('edit_allg').getForm().loadRecord(node);
		Ext.getCmp('edit_verf').getForm().loadRecord(node);
	 	Ext.getCmp('edit_arch').getForm().loadRecord(node);

		// disable edit of metaaap when nodde is inherited	
		if (Aap.util.Tree.isInherited(node) == true) {
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			});
		}
    },

	doEditData: function(button){
		
		// get node
		var node = Aap.util.Tree.getSelectedNode(); 
	
		// write allgemein from form to store	
		var form1 = Ext.getCmp('edit_allg').getForm();
		var record1 = form1.getRecord();
		var values1 = form1.getValues();	

		var form2 = Ext.getCmp('edit_verf').getForm();
		
		var verf_values = form2.getValues();	
		var form3 = Ext.getCmp('edit_arch').getForm();
		var arch_values = form3.getValues();	


		var a = arch_values.bewzs;
		var b =  arch_values.bewws;
		var c = arch_values.begrba;
	
		function calcEntsarch(a,b,c) {
			var e  ;
			if (a=='A' || b=='A' || c=='A') {e='A'}
			else if (a=='S' || b=='S' || c=='S') {e='S'}
			else if (a=='N' || b=='N' || c=='N') {e='N'}
			else {e=''}
			return e
		}

	
		if (form1.isValid()==true && form2.isValid()==true && form3.isValid()==true) {	

			record1.set(values1);
			if (Aap.util.Tree.isInherited(node) == false) {
				node.cascadeBy(function () {

					this.set('modif', new Date());
					this.set('verf_zs_aufb', verf_values.verf_zs_aufb); 
					this.set('verf_zs_begr', verf_values.verf_zs_begr);
					this.set('verf_zs_inpu', verf_values.verf_zs_inpu);
					this.set('verf_ws_aufb', verf_values.verf_ws_aufb);
					this.set('verf_ws_begr', verf_values.verf_ws_begr);
					this.set('verf_ents', Math.max(verf_values.verf_zs_aufb, verf_values.verf_ws_aufb));
					this.set('verf_beme', verf_values.verf_beme);
	      			this.set('arch_zs_bewe', arch_values.arch_zs_bewe);
					this.set('arch_zs_begr', arch_values.arch_zs_begr);
					this.set('arch_zs_inpu', arch_values.arch_zs_inpu);
					this.set('arch_ws_bewe', arch_values.arch_ws_bewe);
					this.set('arch_ws_begr', arch_values.arch_ws_begr);
					this.set('arch_ba_bewe', arch_values.arch_ba_bewe);
					this.set('arch_ba_begr', arch_values.arch_ba_begr);
					this.set('artsampl', arch_values.artsampl);
					this.set('arch_ents', calcEntsarch(arch_values.arch_zs_begr, arch_values.arch_ws_begr, arch_values.arch_ba_begr));
					this.set('arch_beme', arch_values.arch_beme);

					this.set('metanode', false);
				}, null, null);
			Aap.util.Properties.setMetanodeProperty(node);
			}
			Ext.getStore('AapStore').update();


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

