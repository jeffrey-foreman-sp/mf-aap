Ext.define('Aap.util.SelectedNode', {
    statics: {
        getIdFromSelectedNode: function () {
        	var treeelement = Ext.getCmp('treestructure');
			var selectionmodel = treeelement.getSelectionModel();
			var selection = selectionmodel.getSelection()[0];
			var nodeid = selection.internalId;	
			return nodeid;
        },
		isSelectedNode: function() {
        	var treeelement = Ext.getCmp('treestructure');
			var selectionmodel = treeelement.getSelectionModel();
			var selection = selectionmodel.getSelection()
			var length = selection.length;
			var isselectednode;
			if (length == 0)
				{ isselectednode = false; } 
			else 	
				{ isselectednode = true}
			return isselectednode;
		} 

    }
});

