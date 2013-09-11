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
		isSelectedNode: function(selection) {
			var length = selection.length;
			var isselectednode;
			if (length == 0)
				{ isselectednode = false; } 
			else 	
				{ isselectednode = true}
			return isselectednode;
		}, 

		//***********************************************************
		// check whether node is starting point of meta data inhertance 
		// inpput: id of selected node (int) 
		// output: (boolean)	
		//		true = is meta node, 
		//   	false = is not meta node 
		//***********************************************************
		isMetanode: function(selectedItem) {
			var selitem = selectedItem
			var mn = selitem.get('metanode');
			return mn;
		},

 		//***********************************************************
		// check for inheritating node somewhere heigher in the 
		//	 treestructure
		// inpput: id of selected node (int) 
		// output: (boolean)
		//		true = inheritating node present, 
		//   	false = no inheritating node presen 
		//***********************************************************
		isInherited: function() {
			var response = false;
			var currentitem = Aap.util.Tree.getSelectedItem();
	
			function checkForInheritance(currentitem){	
				if (currentitem.parentNode.isRoot() == true) {
					return false;
				}
				else if (Aap.util.Tree.isMetanode(currentitem) == true) {	
					return true;
				}
				else {
					var parentid = currentitem.parentNode.get('id');
					var currentitem = Ext.getStore('TreeStore').getNodeById(parentid);
					return checkForInheritance(currentitem);
				}
			} 
		
			if (Aap.util.Tree.isMetanode(currentitem) == true) {	
				return false;
			} 
			else {
				var response = checkForInheritance(currentitem);	
				return response;
			}
		}		
    }
});

