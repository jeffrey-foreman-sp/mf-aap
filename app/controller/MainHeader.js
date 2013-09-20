Ext.define('Aap.controller.MainHeader', {
	extend: 'Ext.app.Controller',
//	requires: ['Aap.util.Google'],
	views: [
		'modals.Information'
	],

    init: function() {
        this.control({
			'mainheader button[action=openinfo]': {
                click: this.onInfoClick
			},	
			'mainheader button[action=toggleedit]': {
                toggle: this.onToggleEditButton
			},	
			'mainheader button[action=togglelogin]': {
                click: this.onLogoutButtonClick
			}	
		});
    },

    onInfoClick: function() {
		Ext.widget('information');
	},
  
	onToggleEditButton: function(button, pressed) {
    	if(!pressed){
		
			// toggle header button
  	 		button.setText('Bearbeiten');

			// toggle tree buttons
   			Ext.getCmp('createbutton').hide();
			Ext.getCmp('editbutton').hide();
			Ext.getCmp('removebutton').hide();
			Ext.getCmp('exportbutton').show();
		
			// unlock drag&drop
			Ext.getCmp('treestructure').getView().getPlugin().dragZone.lock();
		}	
    	else {
		
			// toggle header button
  		  	button.setText('Bearbeiten abschliessen');
			
			// toggle tree buttons
   			Ext.getCmp('createbutton').show();
			Ext.getCmp('editbutton').show();
			Ext.getCmp('removebutton').show();
			Ext.getCmp('exportbutton').hide();

			// unlock drag&drop
			Ext.getCmp('treestructure').getView().getPlugin().dragZone.unlock();
		}
	},

	onLogoutButtonClick: function() {
//		var button = Ext.ComponentQuery.query('button[action=togglelogin]')[0]; 
//		console.log(button.getText());
//			button.setText('Anmelden');
//		if (button.getText() == 'Abmelden von Google') { 
//			window.open('https://accounts.google.com/logout', '_blank');
//			button.setText('Anmelden');
//		}
//			button.toggle();
//  			button.setText('Anmelden');
			
	}







});

