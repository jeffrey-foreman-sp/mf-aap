Ext.define('Aap.controller.Tree', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.Tree'],
	stores: ['AapStore'],
	models: ['AapModel'],
	views: [
		'mainbody.Tree'
	],
	
	init: function() {
		this.control({
			'tree': {
				afterrender: this.afterRenderTree
			},	
			'tree dataview': {
				beforedrop: this.beforedropNode,
				drop: this.dropNode
			}
		});
	}, 
	

	// ******************************************************************
	// disable drag and drop when initially render the tree
	// ******************************************************************
	afterRenderTree:  function() {
		Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
	},


	// ******************************************************************
	// open window asking for confirming the node drop
	// ******************************************************************
 	beforedropNode: function(node, data, overModel, dropPosition, dropHandlers) {
		dropHandlers.wait = true;
		Ext.MessageBox.show({
			title: 'Warnung!',
            msg: 'Durch das Verschieben werden die Metadaten der neuen übergeordneten Position übernommen!</br></br>Was möchten Sie tun?',
           	icon: Ext.MessageBox.WARNING, 
            buttons: Ext.MessageBox.YESNO,
            buttonText:{ 
                yes: "Daten verschieben!", 
                no: "Abbrechen!" 
            },
			fn: function(btn){
    		    if (btn === 'yes') {
					dropHandlers.processDrop();
   			    } 
				else {
    	  	    	dropHandlers.cancelDrop();
    	 		}
			}
		});
 	},  


	// ******************************************************************
	// drop the node a new position and change the meta attributes accordingly  they are inherited
	// ******************************************************************
    dropNode: function(node, data, overModel, dropPosition, eOpts) {
		var tree = Ext.getCmp('treestructure').getView();
		var target_node = tree.getRecord(node);
		var moved_node = data.records[0];
		var meta_id;	
		if (dropPosition != 'append') {
			target_node = target_node.parentNode;
		}

		// if the node at the new position has to inherit the metadata
		if (Aap.util.Tree.isInherited(target_node) == true || Aap.util.Tree.isMetanode(target_node) == true) {
			var node_data = Aap.util.Tree.getParentsMetadataNode(target_node).getData();
			Aap.util.Tree.setChildrensMetaData(moved_node, node_data);  
			Ext.getStore('AapStore').sync()
		}
		// if the node at the new position does not inherit the metadata, but was inherided at the old position
		else if (moved_node.get('inherited')==true) {
			moved_node.set('metanode', true);
			Ext.getStore('AapStore').sync()
		}
	
		// close folder if there are no more children nodes below
		Ext.getStore('AapStore').getRootNode().cascadeBy(function () {
			if (this.childNodes.length == 0) {
				this.collapse();
			}
		}, null, null);
   } 


});

