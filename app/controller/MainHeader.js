Ext.define('Aap.controller.MainHeader', {
	extend: 'Ext.app.Controller',
	views: [
		'modals.Information'
	],

    init: function() {
        this.control({
			'mainheader button[action=openinfo]': {
                click: this.onInfoClick
			},	
			'mainheader button[action=toggleedit]': {
                click: this.onEditButtonClick
			},	
			'mainheader button[action=login]': {
           	// 	render: this.renderLoginButton,
              	toggle: this.toggleLoginButton ,
				click: this.onLoginButtonClick
			}	
		});
    },

    onInfoClick: function() {
		Ext.widget('information');
	},
  
	onEditButtonClick: function(button, pressed) {
		if(button.pressed==true){
		
			// toggle header button
  	 		button.setText('Bearbeiten');
			button.toggle(false);

			// toggle tree buttons
   			Ext.getCmp('createbutton').hide();
			Ext.getCmp('editbutton').hide();
			Ext.getCmp('removebutton').hide();
			Ext.getCmp('exportbutton').show();
		
			// unlock drag&drop
			Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
		}	
    	else {

			function enableEdit(authResult) {
				console.log(authResult);
				if (authResult && !authResult.error) {
					// Access token has been successfully retrieved, requests can be sent to the API.
					console.log('Authentication successfull');
				
					// toggle header button
	  		  		button.setText('Bearbeiten abschliessen');
					button.toggle(true);


				
					// toggle tree buttons
	   				Ext.getCmp('createbutton').show();
					Ext.getCmp('editbutton').show();
					Ext.getCmp('removebutton').show();
					Ext.getCmp('exportbutton').hide();
				
					// unlock drag&drop
					Ext.getCmp('treestructure').getView().getPlugin().dragZone.unlock();
			 	
				} 
				else  {
				    // No access token could be retrieved, show the button to start the authorization flow.
					console.log('Authentication not successfull');
				}

			}
			checkAuthImmediate(enableEdit);
		}

	},


	onLoginButtonClick: function() {
		if (Ext.getCmp('login').pressed == true) {
			Ext.getCmp('login').onClick = googleLogout();
			Ext.getCmp('login').onClick = Ext.getCmp('toggleedit').hide();

            var  button = Ext.ComponentQuery.query('mainheader button[action=toggleedit]')[0]
	
			// toggle header button
  	 		button.setText('Bearbeiten');
			button.toggle(false);

			// toggle tree buttons
   			Ext.getCmp('createbutton').hide();
			Ext.getCmp('editbutton').hide();
			Ext.getCmp('removebutton').hide();
			Ext.getCmp('exportbutton').show();
		
			// unlock drag&drop
			Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
		}
		else {
			Ext.getCmp('login').onClick = handleClientLoad(); 
		}
	},


  	toggleLoginButton: function() {
		if (Ext.getCmp('login').pressed == true) {
			Ext.getCmp('login').setText('Abmelden');
		}	  		
		else {
			Ext.getCmp('login').setText('Anmelden');
		}

		
	}

});

