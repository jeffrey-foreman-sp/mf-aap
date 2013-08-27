Ext.define('Aap.controller.DataDisplay', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	views: [
		'mainbody.Allgemein'
	],

    init: function() {
        this.control({
            //'tree':  {
            'mainheader button':  {
                click: this.afterTreeRendered
            }
        });
    },


    afterTreeRendered: function() {
    	
		var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
		console.log(nodeid);  
		rec = Ext.getStore('Allgemein').findRecord('treenode_id', nodeid);	
		console.log(rec);  
		var form = Ext.getCmp('displayallgemein');
		console.log(form);  
		form.loadRecord(rec);
    }

});

