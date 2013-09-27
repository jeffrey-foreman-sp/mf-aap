Ext.define('Aap.util.Data', {
    statics: {

		loadNewData: function(data) {
			Ext.getStore('AapStore').setRootNode(data);
		},

		storeToJson: function(iTreeStore) {
			var s =	new Aap.util.TreeSerializer(iTreeStore)
			var serialized = JSON.stringify(s.toString());	
			return serialized;
		}
	
	}
});

