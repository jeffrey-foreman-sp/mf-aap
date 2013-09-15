Ext.define('Aap.controller.DataEdit', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['Allgemein', 'MetaAap'],
	models: ['Allgemein', 'MetaAap'],
	views: [
		'modals.DataEdit'
	],

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
		
		// load allgemein data into form	
		var allgemein_id = Aap.util.Tree.getSelectedNode().get('allgemein_id');
		var rec =  Ext.getStore('Allgemein').findRecord('id', allgemein_id);
		var form = Ext.getCmp('edit_allg').getForm();
		form.loadRecord(rec);
		
		// load meta data into form
		var metaaap_id = Aap.util.Tree.getSelectedNode().get('metaaap_id');
		var	recm = Ext.getStore('MetaAap').findRecord('id', metaaap_id);
		Ext.getCmp('edit_verf').getForm().loadRecord(recm);
		Ext.getCmp('edit_arch').loadRecord(recm);

		// disable edit of metaaap when node is inherited	
		selNode = Aap.util.Tree.getSelectedNode();
		if (Aap.util.Tree.isInherited(selNode) == true) {
			Ext.getCmp('edit_verf').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			}, form);
			Ext.getCmp('edit_arch').getForm().getFields().each(function(field) {
   		    	field.setDisabled(true);  
			}, form);
		}
    },

	doEditData: function(button){
		console.log("Clicked save button!");
	
		// write record from form to store	
		console.log('Write data from form to store!');
		
		var form1 = Ext.getCmp('edit_allg').getForm();
		var record1 = form1.getRecord();
		var values1 = form1.getValues();	
		record1.set(values1);
		
		var form2 = Ext.getCmp('edit_verf').getForm();
		var record2 = form2.getRecord();
		var values2 = form2.getValues();	
		record2.set(values2);

		var form3 = Ext.getCmp('edit_arch').getForm();
		var record3 = form3.getRecord();
		var values3 = form3.getValues();	
		record3.set(values3);


		// display allgemein record in form			
		var node = Aap.util.Tree.getSelectedNode();
		
		var allgemein_id = node.get('allgemein_id');
		var reca = Ext.getStore('Allgemein').findRecord('id', allgemein_id);
		var forma = Ext.getCmp('disp_allg');
		forma.loadRecord(reca);
		
		var metaaap_id = node.get('metaaap_id');
		var recm = Ext.getStore('MetaAap').findRecord('id', metaaap_id);
		var formv = Ext.getCmp('disp_verf');
		formv.loadRecord(recm);
		var forma = Ext.getCmp('disp_arch');
		forma.loadRecord(recm);

		// close edite window
		var win = button.up('window');
		win.close();	
	}

});

