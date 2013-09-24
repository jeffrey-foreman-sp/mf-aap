//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

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
				afterrender: this.initSelection
			},	
			'tree dataview': {
				beforedrop: this.beforedropNode,
				drop: this.dropNode
			}
		});
	}, 


	initSelection:  function() {
		Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
	},

 	beforedropNode: function(node, data, overModel, dropPosition, dropHandlers) {
    	console.log('beforedrop')
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

    dropNode: function(node, data, overModel, dropPosition, eOpts) {
   		console.log('drop');
		var tree = Ext.getCmp('treestructure').getView();
		var target_node = tree.getRecord(node);
		var moved_node = data.records[0];
		var meta_id;	
		if (dropPosition != 'append') {
			target_node = target_node.parentNode;
			console.log('not append');
		}

		// if the node at the new position has to inherit the metadata
		if (Aap.util.Tree.isInherited(target_node) == true || Aap.util.Tree.isMetanode(target_node) == true) {
			node_data = Aap.util.Tree.getParentsMetadataNode(target_node).getData();
			Aap.util.Tree.setChildrensMetaData(moved_node, node_data);  
		}
		else {
			Aap.util.Tree.setChildrensMetaData2(moved_node);
		}

    } 

});

