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
		console.log("'Edit' window rendered!");
			
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
		console.log("Clicked save button!");
		
		// get node
		var node = Aap.util.Tree.getSelectedNode(); 
	
		// write allgemein from form to store	
		 form1 = Ext.getCmp('edit_allg').getForm();
		var record1 = form1.getRecord();
		var values1 = form1.getValues();	

		var form2 = Ext.getCmp('edit_verf').getForm();
		var verf_values = form2.getValues();	
		var form3 = Ext.getCmp('edit_arch').getForm();
		var arch_values = form3.getValues();	

		if (form1.isValid() == true) {	

			record1.set(values1);
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

			// display record in form			
			var node_data = Aap.util.Tree.getSelectedNode().getData();
			var allgemein = Ext.getCmp('disp_allg');
			allgemein.update(node_data);
			var formv = Ext.getCmp('disp_verf');
			formv.update(node_data);
			var forma = Ext.getCmp('disp_arch');
			forma.update(node_data);
	
			// close edite window
			var win = button.up('window');
			win.close();	

		}
	}

});

