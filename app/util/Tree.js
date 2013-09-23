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
					if (this.get('metanode') == true){
						response = true;
					}
				}, null, [response]);
			}
			return response;
		},
    
		
		//***********************************************************
		// get the metadata from from a parents nodes
		// input: currentnode (Ext.data.Model): starting point of cascading
		// output: parents_metaid (int): metaaap_id in one of the parent nodes 
		//***********************************************************
		getParentsMetadataNode: function(currentnode) { 
			var metadata_node;
			
			currentnode.bubble(function () {
				if (this.get('metanode') == true){
					metadata_node = this;
				}
			}, null, null);
			return metadata_node;
		},
   
		//***********************************************************
		// get all nodes in children that are metanodes 
		// input:
		// 		currentnode (Ext.data.Model): starting point of cascading
		//		nodes that are metanodes (Array)
		//***********************************************************
		getMetanodesInChildren: function(node) { 
			var metanodes = new Array();		
			node.cascadeBy(function () {
				var ismetanode = this.get('metanode');
				if (ismetanode == true) {
					metanodes.push(this);
				}
			}, null, null)
			return metanodes;
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
				this.set('metanode', false);
			}, null, [new_metaid]);
		},
	

		//***********************************************************
		// change the metaaap_id to 0 on all child nodes below the passed node
		// 	exept on the last children
		// input:
		// 		currentnode (Ext.data.Model): starting point of cascading
		//***********************************************************
		setChildrensMetaId2: function(currentnode) { 
			currentnode.cascadeBy(function () {
				if (this.hasChildNodes == true) {this.set('metaaap_id', 0);}
				else if (currentnode.get('metanode') == false) {this.set('metanode', true);}
			}, null, null);
		}
	
 
	}
});

