Ext.define('Aap.controller.DataDisplay', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['AapStore'],
	models: ['AapModel'],
	views: ['mainbody.Tree'],

    init: function() {
        this.control({
            'tree':  {
                itemclick: this.selectionchange
            }
        });
    },

	// load data into forms when clicking on a node in tree
    selectionchange: function() {
		var node = Aap.util.Tree.getSelectedNode(); 
		if (node != 'root') {
			Ext.getCmp('disp_allg').getForm().loadRecord(node);
			Ext.getCmp('disp_verf').getForm().loadRecord(node);
		 	Ext.getCmp('disp_arch').getForm().loadRecord(node);
		}
    }

});

