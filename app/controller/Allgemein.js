//------------------------------------------------------------------
// display control of "Allgemein" panel
//------------------------------------------------------------------
Ext.define('Aap.controller.Allgemein', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	views: [
		'modals.DataEdit'
	],

    init: function() {
        this.control({

            'panel#allgemeinview': {
              //  render: this.onPanelRendered
                afterrender: this.afterPanelRendered
            }
        });
    },

    afterPanelRendered: function() {
        console.log('The allgemeinview panel was rendered');
		var av = Ext.getCmp('allgemeinview');
		var form = av.getForm();
		var values = form.getValues();
		
		//load alway the swisstopo record
		var dta =  Ext.getStore('Allgemein').findRecord('name', 'swisstopo').data;

		vs = form.setValues(dta);
		
		var values = form.getValues();
		console.log(values);

    }



});

