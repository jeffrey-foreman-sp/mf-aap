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
            'dataedit #allgemeinview':  {
                afterrender: this.afterPanelRendered
            }
        });
    },

    afterPanelRendered: function() {
        console.log('The "data edit" panel was rendered');

		var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
		var dta =  Ext.getStore('Allgemein').findRecord('treenode_id', nodeid).data;
		var form = Ext.getCmp('allgemeinview').getForm();
		var values = form.getValues();
		form.setValues(dta);
		
//		var values = form.getValues();
//		console.log(values);
    }



});

