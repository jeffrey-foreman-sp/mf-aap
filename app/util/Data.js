Ext.define('Aap.util.Data', {
    statics: {

		loadNewData: function(data) {
			Ext.getStore('AapStore').setRootNode(data);
		},

		storeToJson: function(iTreeStore) {
			var s =	new Aap.util.TreeSerializer(iTreeStore)
			var serialized = JSON.stringify(s.toString());	
			return serialized;
		},

		updateAapData: function() {
			var store = Ext.getStore('AapStore');
			var dta = Aap.util.Data.storeToJson(store);
			updateFile(file_id, dta);

		}		
	}
});

