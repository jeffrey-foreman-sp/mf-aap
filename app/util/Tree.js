Ext.define('Aap.util.Tree', {
    statics: {
		
		//***********************************************************
		// get selection in tree
		// output: selection object 
		//***********************************************************
        getTreeSelection: function () {
        	var treeelement = Ext.getCmp('treestructure');
			var selectionmodel = treeelement.getSelectionModel();
			var selection = selectionmodel.getSelection();
			return selection;
        },

		//***********************************************************
		// get selection in tree
		// input: selection (object)
		// output: selection item (object)
		//***********************************************************
        getSelectedItem:  function() {
        	var treeelement = Ext.getCmp('treestructure');
			var selectionmodel = treeelement.getSelectionModel();
			var selectedItem = selectionmodel.getSelection()[0]; // not very pretty
			return selectedItem;
        },

		//***********************************************************
		// check whether tree item is selected or not
		// inpput: selection object 
		// output: true = selected, false = not selected (boolean)
		//***********************************************************
		SelectedNode: function(selection) {
			var length = selection.length;
			var isselectednode;
			if (length == 0)
				{ isselectednode = false; } 
			else 	
				{ isselectednode = true}
			return isselectednode;
		}, 

		//***********************************************************
		// check for inheritating node somewhere hieger in the 
		//	 treestructure
		// inpput: id of selected node (int) 
		// output: true = inheritating node present, 
		//   false = no inheritating node presen (boolean)
		//***********************************************************

		isInherited: function(id) {
		} 

    }
});

