Ext.define('Aap.controller.tree.Leaf', {
	views: [
		'mainbody.Tree'
	],
    statics: {

		//***********************************************************
		// set dropPosition record as leaf=true if not already the case
		// inpput: node 
		//***********************************************************
		enableDropOnLeaf: function(node, data, overModel, dropPosition, dropHandlers) {
			var tree = Ext.getCmp('treestructure').getView();
			var rec = tree.getRecord(node);
			rec.set('leaf', false);
			rec.set('loaded', true);
			rec.set('expanded', true);
			console.log(rec);
			dropHandlers.processDrop();
		}
    }
});

