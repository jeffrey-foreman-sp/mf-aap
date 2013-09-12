Ext.define('Aap.controller.tree.Leaf', {
	views: [
		'mainbody.Tree'
	],
    statics: {

		//***********************************************************
		// set dropPosition record as leaf=true if not already the case
		// inpput: node 
		//***********************************************************
		leafToDropPosition: function(node, data, overModel, dropPosition, dropHandlers) {
			var tree = Ext.getCmp('treestructure').getView();
			var rec = tree.getRecord(node);
			rec.set('leaf', false);
			rec.set('loaded', true);

			console.log(rec);
		}
    }
});

