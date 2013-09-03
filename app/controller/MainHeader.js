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
       //         click: this.onToggleEdit,
                toggle: this.onToggleEditButton
			}	
		});
    },

    onInfoClick: function() {
		Ext.widget('information');
	},
  
	onToggleEditButton: function(button, pressed) {
    	if(!pressed){
  	 		button.setText('Bearbeiten');
   			Ext.getCmp('createbutton').hide();
			Ext.getCmp('editbutton').hide();
			Ext.getCmp('removebutton').hide();
			Ext.getCmp('exportbutton').show();
		}
    	else {
  		  	button.setText('Bearbeiten abschliessen');
   			Ext.getCmp('createbutton').show();
			Ext.getCmp('editbutton').show();
			Ext.getCmp('removebutton').show();
			Ext.getCmp('exportbutton').hide();
		}
	}

});

