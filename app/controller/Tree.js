//------------------------------------------------------------------
// tree controls
//------------------------------------------------------------------

Ext.define('Aap.controller.Tree', {
	extend: 'Ext.app.Controller',
	requires: [	
		'Aap.controller.tree.DragAndDrop',
		'Aap.util.Tree'
	],
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

    dropNode: function(node, data, overModel, dropPosition, dropFunction, eOpts ) {
    	console.log(dropPosition);
    	console.log('drop');
    }, 

	initSelection: function() {
		Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
	}

});

