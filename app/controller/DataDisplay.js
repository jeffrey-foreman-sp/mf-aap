Ext.define('Aap.controller.DataDisplay', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
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
		var selectedTreeItem = Aap.util.Tree.getSelectedNode();
		var nodeid = selectedTreeItem.getId()
	
		if (selectedTreeItem.isRoot() == false) {
			var node = Ext.getStore('TreeStore').getNodeById(nodeid);

			// display allgemein record in form			
			var allgemein_id = node.get('allgemein_id');
			reca = Ext.getStore('Allgemein').findRecord('id', allgemein_id).getData();
			var allgemein = Ext.getCmp('disp_allg');
			allgemein.update(reca);
		
			// display metaaap  record in form			
			var metaaap_id = node.get('metaaap_id');
			var recm = Ext.getStore('MetaAap').findRecord('id', metaaap_id).getData();
			var formv = Ext.getCmp('disp_verf');
			formv.update(recm);
			var forma = Ext.getCmp('disp_arch');
			forma.update(recm);
		}
  }


});

