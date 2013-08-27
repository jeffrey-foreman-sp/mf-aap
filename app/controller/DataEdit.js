Ext.define('Aap.controller.DataEdit', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	views: [
		'modals.DataEdit'
	],

    init: function() {
        this.control({
            'dataedit #allgemeinedit ':  {
                afterrender: this.afterPanelRendered
            },
			'dataedit button[action=save]': {
				click: this.doEditData
			},
        });
    },

    afterPanelRendered: function() {
        console.log('The "data edit" panel was rendered!');

		nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
//		dta =  Ext.getStore('Allgemein').findRecord('treenode_id', nodeid).data;
		var rec =  Ext.getStore('Allgemein').findRecord('treenode_id', nodeid);
		var form = Ext.getCmp('allgemeinedit').getForm();
		form.loadRecord(rec);
		console.log('Load data from store to form!');
    },

	doEditData: function(button){
		console.log("Clicked save button!");
		
		var form = Ext.getCmp('allgemeinedit').getForm();
		var record = form.getRecord();
		var values = form.getValues();	
		record.set(values);
		console.log('Write data from form to store!');

		var rec = Ext.getStore('Allgemein').findRecord('treenode_id', nodeid);	
		var form = Ext.getCmp('displayallgemein');
		form.loadRecord(rec);

		var win = button.up('window');
		win.close();	
	},

});

