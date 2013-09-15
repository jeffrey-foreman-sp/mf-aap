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
	
		nodeid = Aap.util.Tree.getSelectedNode().get('allgemein_id');
		var rec =  Ext.getStore('Allgemein').findRecord('id', nodeid);
		console.log(rec);
		var form = Ext.getCmp('edit_allg').getForm();
		console.log(form);
		form.loadRecord(rec);
		console.log('Load data from store to form!');
		
		 metaaap_id = Aap.util.Tree.getSelectedNode().get('metaaap_id');
		console.log(metaaap_id);
		 recm = Ext.getStore('MetaAap').findRecord('id', metaaap_id);
		console.log(recm);
		 formv = Ext.getCmp('edit_verf').getForm();
		console.log(formv);
		formv.loadRecord(recm);
		forma = Ext.getCmp('edit_arch');
		forma.loadRecord(recm);

		// only display data if node is inherited	
		selNode = Aap.util.Tree.getSelectedNode();
		if (Aap.util.Tree.isInherited(selNode) == true) {
			console.log('display only')
		}
		else {
			
		}	
    },

	doEditData: function(button){
		console.log("Clicked save button!");
		
		var form = Ext.getCmp('allgemeinedit').getForm();
		var record = form.getRecord();
		var values = form.getValues();	
		record.set(values);
		console.log('Write data from form to store!');

		var rec =  Ext.getStore('Allgemein').findRecord('id', nodeid);
		var form = Ext.getCmp('disp_allgemein');
		form.loadRecord(rec);

		var win = button.up('window');
		win.close();	
	}

});

