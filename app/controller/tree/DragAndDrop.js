Ext.define('Aap.controller.tree.DragAndDrop', {
	views: ['mainbody.Tree'],
	requires: ['Aap.util.Tree'],
    statics: {

		//***********************************************************
		// 
		// 
		//***********************************************************

	Drop: function(node, data, overModel, dropPosition, eOpts) {

		/*
		var tree = Ext.getCmp('treestructure').getView();
		var rec = tree.getRecord(node);
		if (Aap.util.Tree.isMetanode(rec) == true) {
			console.log('ismetanoded');
		}
		if (Aap.util.Tree.isInherited(rec) == true) {
			console.log('inheriteddd');
		}
   		console.log('drop');
*/
		
    }, 

    }
});

