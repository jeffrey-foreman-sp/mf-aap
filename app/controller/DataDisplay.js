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

    selectionchange: function() {
		var node_data = Aap.util.Tree.getSelectedNode().getData();
	
		// display record in form			
		var allgemein = Ext.getCmp('disp_allg');
		allgemein.update(node_data);
		var formv = Ext.getCmp('disp_verf');
		formv.update(node_data);
		var forma = Ext.getCmp('disp_arch');
		forma.update(node_data);
	
  }


});

