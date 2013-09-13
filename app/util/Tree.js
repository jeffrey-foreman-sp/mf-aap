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
        getSelectedNode:  function() {
        	var treeelement = Ext.getCmp('treestructure');
			var selectionmodel = treeelement.getSelectionModel();
			var selectednode = selectionmodel.getSelection()[0]; // not very pretty
			return selectednode;
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
		isMetanode: function(selectednode) {
			var mn = selectednode.get('metanode');
			return mn;
		},


		//***********************************************************
		// check for inheritating node somewhere heigher in the streestructure 
		// input: currentnode (Ext.data.Model): starting point
		// output: (boolean)
		//		true = inheritating node present, 
		//   	false = no inheritating node present 
		//***********************************************************
		isInherited: function(node) { 
			var response = false;
			if (node.get('metanode') == true) {
				response = false;
			}
			else {
				node.bubble(function (resp) {
					console.log(this.get('name'));
					console.log(this.get('id'));
					console.log(this.get('metanode'));
					console.log(this.get('metaaap_id'));
					if (this.get('metanode') == true){
						response = true;
					}
				}, null, [response]);
			}
			return response;
		},
    
		
		//***********************************************************
		// get the metaaap_id from the parents nodes
		// input: currentnode (Ext.data.Model): starting point of cascading
		// output: parents_metaid (int): metaaap_id in one of the parent nodes 
		//***********************************************************
		getParentsMetaId: function(currentnode) { 
			var parents_metaid = 0;
			currentnode.bubble(function (p_metaid) {
				console.log(this.get('name'));
				console.log(this.get('metanode'));
				console.log(this.get('metaaap_id'));
				if (this.get('metanode') == true){
					parents_metaid = this.get('metaaap_id');
				}
			}, null, [parents_metaid]);
			return parents_metaid;
		},
   

		//***********************************************************
		// change the metaaap_id of all child nodes below the passed node
		// input:
		// 		currentnode (Ext.data.Model): starting point of cascading
		//		new_metaid (int): new value for the metaaap_id property 
		//***********************************************************
		setChildrensMetaId: function(currentnode, new_metaid) { 
			currentnode.cascadeBy(function (new_id) {
				this.set('metaaap_id', new_id);
				console.log(this.get('metaaap_id'));
			}, null, [new_metaid]);
		}

 
	}
});

