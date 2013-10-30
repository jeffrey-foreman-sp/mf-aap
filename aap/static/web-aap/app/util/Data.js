Ext.define('Aap.util.Data', {
    statics: {


		//***********************************************************
		// load the new data by setting a new root node
		//***********************************************************
		loadDataToTree: function(data) {
			Ext.getStore('AapStore').getRootNode().appendChild(data);
		},


		//***********************************************************
		// serialize the tree (node tree -> json file)
		//***********************************************************
		storeToJson: function(iTreeStore) {
			var s =	new Aap.util.TreeSerializer(iTreeStore)
			var serialized = JSON.stringify(s.toString());	
			return serialized;
		},


		//***********************************************************
		// update the data (on google drive / the server) 
		//***********************************************************
		updateAapData: function() {
			var store = Ext.getStore('AapStore');
			var dta = Aap.util.Data.storeToJson(store);
//			updateFile(file_id, dta); // update function using the google drive api
			console.log('here the execution of the update function');

                        var writer = Ext.create('Ext.data.writer.Json');

                        Ext.Ajax.request({
                            url: 'data',
                            method: 'POST',
                            params: {
                                requestParam: 'notInRequestBody'
                            },
                            jsonData: dta,
                            success: function() {
                                  console.log('update - success');
                            },
                            failure: function() {
                                console.log('update - woops');
                            }
                         });

		}	

	
	}
});

