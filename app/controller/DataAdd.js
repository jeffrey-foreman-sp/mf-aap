Ext.define('Aap.controller.DataAdd', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	views: [
		'modals.DataAdd'
	],

    init: function() {
        this.control({
            'dataadd #allgemeinview':  {
              //  render: this.onPanelRendered
                afterrender: this.afterPanelRendered
            }
        });
    },

    afterPanelRendered: function() {
        console.log('The "data add" panel was rendered');
		
		var nodeid = Aap.util.Tree.getSelectedNode().get('id');
		var dta =  Ext.getStore('Allgemein').findRecord('allgemein_id', nodeid).data;
		var form = Ext.getCmp('allgemeinview').getForm();


//		form.setValues(dta);
		
//		var values = form.getValues();
//		console.log(values);

    }



});

