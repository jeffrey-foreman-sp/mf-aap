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
			var rec = Ext.getStore('Allgemein').findRecord('id', allgemein_id);	
			var form = Ext.getCmp('displayallgemein');
			form.loadRecord(rec);
		}
  }


});

