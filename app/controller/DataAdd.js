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
                afterrender: this.afterPanelRendered
            },
			'dataadd button[action=save]': {
				click: this.doAddData
            }
        });
    },

    afterPanelRendered: function() {
        console.log('The "data add" panel was rendered');
		
		var nodeid = Aap.util.Tree.getSelectedNode().get('id');
//		var dta =  Ext.getStore('Allgemein').findRecord('allgemein_id', nodeid).data;
//		var form = Ext.getCmp('allgemeinview').getForm();


//		form.setValues(dta);
		
//		var values = form.getValues();
//		console.log(values);

	// create new node	
		var newNode = Ext.create("Aap.model.TreeNode", {
			name: "name", 
			leaf: false
		});
	
		// append new node	
       	var nodeid = Aap.util.Tree.getSelectedNode().get('id');
		var selectednode = store.getNodeById(nodeid); 
       	console.log(selectednode);
		selectednode.appendChild(newNode);
		selectednode.expand();
        
		// close windows 
		var win = button.up('window');
    	win.close();





    }



});

