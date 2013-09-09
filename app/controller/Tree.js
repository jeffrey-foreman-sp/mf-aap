//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

Ext.define('Aap.controller.Tree', {
	extend: 'Ext.app.Controller',
	requires: ['Aap.util.SelectedNode'],
	stores: ['TreeStore'],
	models: ['TreeNode'],
	views: [
		'mainbody.Tree'
	],
	
	init: function() {
		this.control({
			'tree': {
				afterrender: this.initSelection,
			},	
			'tree dataview': {
				beforedrop: this.beforedropNode,
				drop: this.dropNode
			}
		});
	}, 

 	beforedropNode: function(node, data, overModel, dropPosition, dropHandlers) {
    	console.log('beforedrop')
		dropHandlers.wait = true;
		Ext.MessageBox.confirm('Warnung', 'Are you sure', function(btn){
    	    if (btn === 'yes') {
    	        dropHandlers.processDrop();
   		    } 
			else {
      	    	dropHandlers.cancelDrop();
     		}
		});
 	},  

    dropNode: function(node, data, overModel, dropPosition, dropFunction, eOpts ) {
    	console.log('drop')
    }, 

	initSelection: function() {
		console.log("Tree rendered");
		Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
	}

});

