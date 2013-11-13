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
                    afterrender: this.onEditButtonBeforeRender,
		    click: this.onLoginButtonClick
		}	
	});
    },
    onEditButtonBeforeRender: function(button) {
        if (userid) {
            Ext.getCmp('login').setText('Abmelden');
            var  editButton = Ext.ComponentQuery.query('mainheader button[action=toggleedit]')[0]
            editButton.setText('Bearbeiten');
            editButton.toggle(false);
            editButton.show();
       }

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
		     // saving
             Aap.util.Data.saveAapData();
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
                // Note: 'userid' is only to display the right buttons, authorization is done server-side.
                if (userid) {
		            // reload and lock data
                    if (!Aap.util.Data.editAapData()) {
                        return false;
                    }
				
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
			}
			// check wherter the user is logged in
			//checkAuthImmediate(enableEdit);
            if (userid) {
			    enableEdit();
            }
		}

	},


	// ******************************************************************************
	// login or logout into google
	// ******************************************************************************
	onLoginButtonClick: function() {
		if (Ext.getCmp('login').pressed == true) {
			//googleLogout();
                        window.location.href='/logout';
			Ext.getCmp('login').setText('Abmelden');
            
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
                        window.location.href='/auth/google';
		}
	}

});






