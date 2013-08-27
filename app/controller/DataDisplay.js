Ext.define('Aap.controller.DataDisplay', {
	extend: 'Ext.app.Controller',
	requires: [
		'Aap.util.SelectedNode'
 	],
	stores: ['Allgemein'],
	models: ['Allgemein'],
	views: [
		'mainbody.Allgemein',
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
		var nodeid = Aap.util.SelectedNode.getIdFromSelectedNode();
		if (nodeid != 'root') {
			var rec = Ext.getStore('Allgemein').findRecord('treenode_id', nodeid);	
			var form = Ext.getCmp('displayallgemein');
			form.loadRecord(rec);
		}
    }


});

