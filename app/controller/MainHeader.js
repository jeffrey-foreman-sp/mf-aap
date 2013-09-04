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
	}

});

