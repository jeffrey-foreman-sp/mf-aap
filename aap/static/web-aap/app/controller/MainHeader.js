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
         //     	toggle: this.toggleLoginButton ,
				click: this.onLoginButtonClick
			}	
		});
    },


	// ******************************************************************************
	// open the information window
	// ******************************************************************************
    onInfoClick: function() {
		Ext.widget('information');
	},

  
	// ******************************************************************************
	// enabel and disable the edit buttons
	// ******************************************************************************
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
                            console.log('enable edit');
				//if (authResult && !authResult.error) {
					// Access token has been successfully retrieved, requests can be sent to the API.
				
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
			 //	}
			}
			// check wherter the user is logged in
			//checkAuthImmediate(enableEdit);
			enableEdit();
		}

	},


	// ******************************************************************************
	// login or logout into google
	// ******************************************************************************
	onLoginButtonClick: function() {
		if (Ext.getCmp('login').pressed == true) {
                        console.log('go to logout');
			//googleLogout();
                        window.location.href='/logout';
			Ext.getCmp('login').setText('Anmelden');
            
			var  editButton = Ext.ComponentQuery.query('mainheader button[action=toggleedit]')[0]
	 		editButton.setText('Bearbeiten');
			editButton.toggle(false);
			editButton.hide();

			// toggle tree buttons
   			Ext.getCmp('createbutton').hide();
			Ext.getCmp('editbutton').hide();
			Ext.getCmp('removebutton').hide();
			Ext.getCmp('exportbutton').show();
		
			// unlock drag&drop
			Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
		}
		else {
			//checkAuth(handleAuthResult);
			console.log('go to login');
                        //window.location.href='/auth/google';
		}
	}

});






