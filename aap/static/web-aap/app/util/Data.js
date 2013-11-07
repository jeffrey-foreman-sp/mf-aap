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


        editAapData: function() {
            var editable = false;

            Ext.Ajax.request({
               url: 'data/edit',
               async: false,
               success: function(response, opts) {
                   editable = true;
                   var resp = JSON.parse(response.responseText);
                   Aap.util.Data.loadDataToTree(resp.result);
               },
               failure: function(response, opts) {
                   console.log('server-side failure with status code ' + response.status);
                   editable = false;
               }
            });
            return editable;
        },
		//***********************************************************
		// update the data (on google drive / the server) 
		//***********************************************************

		saveAapData: function() {
			var store = Ext.getStore('AapStore');
			var json = Aap.util.Data.storeToJson(store);
			//console.log('here the execution of the update function');

                        Ext.Ajax.request({
                            url: 'data/edit',
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

