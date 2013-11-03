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
                        var root = s.tree.getRootNode();

                        return root.serialize().children;
		},


		//***********************************************************
		// update the data (on google drive / the server) 
		//***********************************************************
		updateAapData: function() {
			var store = Ext.getStore('AapStore');
			var json = Aap.util.Data.storeToJson(store);
			//console.log('here the execution of the update function');

                        Ext.Ajax.request({
                            url: 'data',
                            method: 'POST',
                            jsonData: json,
                            success: function() {
                                  Ext.MessageBox.alert('Status', 'Datei wurden erfolgreich gespeichert.');
                            },
                            failure: function() {
                                Ext.MessageBox.show({
                                    title: 'Fehler beim Uploaden',
                                    msg: 'Die Dateien konnten nicht gespeichert werden',
                                    buttons: Ext.MessageBox.OK,
                                    animateTarget: 'mb9',
                                    icon: Ext.MessageBox.ERROR
                                });
                            }
                         });

		}	

	
	}
});

