Ext.define('Aap.controller.DataDisplay', {
	extend: 'Ext.app.Controller',
	requires: [
		'Aap.util.Tree'
 	],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	views: [
		'mainbody.Tree'
	],

    init: function() {
        this.control({
            'tree':  {
                itemclick: this.selectionchange
            }
        });
    },

    selectionchange: function() {
		var selectedTreeItem = Aap.util.Tree.getSelectedItem();
		var nodeid = selectedTreeItem.getId()
	
		if (nodeid != 'root') {
			var node = Ext.getStore('TreeStore').getNodeById(nodeid);

			var allgemein_id = node.get('allgemein_id');
			var reca = Ext.getStore('Allgemein').findRecord('id', allgemein_id);	
			var forma = Ext.getCmp('displayallgemein');
			forma.loadRecord(reca);
		
			var metaaap_id = node.get('metaaap_id');
			var recm = Ext.getStore('MetaAap').findRecord('id', metaaap_id);	

			var formv = Ext.getCmp('displayverfuegbarkeit');
			formv.loadRecord(recm);

			var forma = Ext.getCmp('displayarchievwuerdigkeit');
			forma.loadRecord(recm);
		}
  }


});

