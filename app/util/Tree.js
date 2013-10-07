Ext.define('Aap.util.Tree', {
    statics: {

		//***********************************************************
		// convert tree to JSON 
		// input: tree (Ext.data.TreeStore instance) 
		// output: selection object 
		//***********************************************************
		treeToJSON: function() {
			var store = Ext.getStore('AapStore');
			var s = new Aap.util.TreeSerializer(store)
			var serialized = JSON.stringify(s.toString());
			return serialized;
		},
		
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
			if (node.isRoot() == false) {
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
		// change the metadata of all child nodes below the passed node
		// input:
		// 		currentnode (Ext.data.Model): starting point of cascading
		//		metadta (obj): new values for the metadata properties
		//***********************************************************
		setChildrensMetaData: function(currentnode, new_metadata) { 
			currentnode.cascadeBy(function (new_metadata) {
				this.set('modif', new Date());
				this.set('metanode', false);
				this.set('inherited', true);
				this.set('verf_zs_aufb', new_metadata.verf_zs_aufb); 
				this.set('verf_zs_begr', new_metadata.verf_zs_begr);
				this.set('verf_ws_aufb', node_data.verf_ws_aufb);
				this.set('verf_ws_begr', node_data.verf_ws_begr);
				this.set('verf_ws_inpu', node_data.verf_ws_inpu);
				this.set('verf_ents', node_data.verf_ents);
				this.set('verf_beme', node_data.verf_beme);

				this.set('arch_zs_bewe', node_data.arch_zs_bewe);
				this.set('arch_zs_bewe_text', node_data.arch_zs_bewe_text);
				this.set('arch_zs_begr', node_data.arch_zs_begr);
				this.set('arch_ws_bewe', node_data.arch_ws_bewe);
				this.set('arch_ws_bewe_text', node_data.arch_ws_bewe_text);
				this.set('arch_ws_begr', node_data.arch_ws_begr);
				this.set('arch_ws_inpu', node_data.arch_ws_inpu);
				this.set('arch_ba_bewe', node_data.arch_ba_bewe);
				this.set('arch_ba_bewe_text', node_data.arch_ba_bewe_text);
				this.set('arch_ba_begr', node_data.arch_ba_begr);
				this.set('arch_arts', node_data.arch_arts);
				this.set('arch_ents', node_data.arch_ents);
				this.set('arch_ents_text', node_data.arch_ents_text);
				this.set('arch_beme', node_data.arch_beme);
			}, null, [new_metadata]);
		},
	

		//***********************************************************
		// change 
		// 	exept on the last children
		// input:
		// 		currentnode (Ext.data.Model): starting point of cascading
		//***********************************************************
		setChildrensMetaData2: function(movednode) { 
				
			movednode.cascadeBy(function () {
					this.set('verf_zs_aufb', node_data.verf_zs_aufb); 
					this.set('verf_zs_begr', node_data.verf_zs_begr);
					this.set('verf_ws_aufb', node_data.verf_ws_aufb);
					this.set('verf_ws_begr', node_data.verf_ws_begr);
					this.set('verf_ws_inpu', node_data.verf_ws_inpu);
					this.set('verf_ents', node_data.verf_ents);
					this.set('verf_beme', node_data.verf_beme);

					this.set('arch_zs_bewe', node_data.arch_zs_bewe);
					this.set('arch_zs_bewe_text', node_data.arch_zs_bewe_text);
					this.set('arch_zs_begr', node_data.arch_zs_begr);
					this.set('arch_ws_bewe', node_data.arch_ws_bewe);
					this.set('arch_ws_bewe_text', node_data.arch_ws_bewe_text);
					this.set('arch_ws_begr', node_data.arch_ws_begr);
					this.set('arch_ws_inpu', node_data.arch_ws_inpu);
					this.set('arch_ba_bewe', node_data.arch_ba_bewe);
					this.set('arch_ba_bewe_text', node_data.arch_ba_bewe_text);
					this.set('arch_ba_begr', node_data.arch_ba_begr);
					this.set('arch_arts', node_data.arch_arts);
					this.set('arch_ents', node_data.arch_ents);
					this.set('arch_ents_text', node_data.arch_ents_text);
					this.set('arch_beme', node_data.arch_beme);
			}, null, null);
		},


		//***********************************************************
		// change the attribut of the node to not inheriting
		// input: node which is going to be edited (node object)
		//********************************************************
		setMetanodeFalse: function(node) {
			
			// remove the inherited values of the node
			node.set('verf_zs_aufb', ''); 
			node.set('verf_zs_begr', '');
			node.set('verf_ws_aufb', '');
			node.set('verf_ws_begr', '');
			node.set('verf_ws_inpu', '');
			node.set('verf_ents', '');
			node.set('verf_beme', '');

			node.set('arch_zs_bewe', '');
			node.set('arch_zs_bewe_text', '');
			node.set('arch_zs_begr', '');
			node.set('arch_ws_bewe', '');
			node.set('arch_ws_bewe_text', '');
			node.set('arch_ws_begr', '');
			node.set('arch_ws_inpu', '');
			node.set('arch_ba_bewe', '');
			node.set('arch_ba_bewe_text', '');
			node.set('arch_ba_begr', '');
			node.set('arch_arts', '');
			node.set('arch_ents', '');
			node.set('arch_ents_text', '');
			node.set('arch_beme', '');
				
			//declare childnodes as metanodes if they where inherited before	
			if (node.hasChildNodes() == true) {
				if (Aap.util.Tree.isInherited(node.childNodes[0])==true) {
		  			for (var i=0; i<node.childNodes.length; i++) {
						node.childNodes[i].set('metanode', true)
						node.childNodes[i].set('inherited', false)
					}
				}
			}
			
			// set metanode to true	
			node.set('metanode', false);
		}	
		

	}
});

