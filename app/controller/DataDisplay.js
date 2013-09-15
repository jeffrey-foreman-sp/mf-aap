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
		var selectedTreeItem = Aap.util.Tree.getSelectedNode();
		var nodeid = selectedTreeItem.getId()
	
		if (selectedTreeItem.isRoot() == false) {
			var node = Ext.getStore('TreeStore').getNodeById(nodeid);
console.log(node);

			var allgemein_id = node.get('allgemein_id');
			var reca = Ext.getStore('Allgemein').findRecord('id', allgemein_id);
			var forma = Ext.getCmp('disp_allg');
		
			forma.loadRecord(reca);
		
			var metaaap_id = node.get('metaaap_id');
			var recm = Ext.getStore('MetaAap').findRecord('id', metaaap_id);
			var formv = Ext.getCmp('disp_verf');
			formv.loadRecord(recm);
			var forma = Ext.getCmp('disp_arch');
			forma.loadRecord(recm);
		}
  }


});

