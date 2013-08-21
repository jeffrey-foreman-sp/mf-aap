Ext.define('Aap.util.SelectedNode', {
    statics: {
        getIdFromSelectedNode: function () {
        	var treeelement = Ext.getCmp('treestructure');
			var selectionmodel = treeelement.getSelectionModel();
			var selection = selectionmodel.getSelection()[0];
			var nodeid = selection.getId();	
			return nodeid;
        }
    }
});

