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
		
       	

		var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
		var selectednode = Ext.getStore('TreeStore').getNodeById(nodeid); 
		console.log(selectednode);
		

		var dta =  Ext.getStore('Allgemein').findRecord('name', 'swisstopo').data;
		console.log(dta);


		vs = form.setValues(dta);
		
		var values = form.getValues();
//		console.log(values);

    }



});

