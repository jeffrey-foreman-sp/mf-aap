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
                click: this.onToggleEdit
			}	
		});
    },

    onInfoClick: function() {
		Ext.widget('information');
	},
   
    onToggleEdit: function() {
		var	cb =  Ext.getCmp('createbutton');
		var eb =  Ext.getCmp('editbutton');
		var rb =  Ext.getCmp('removebutton');
		var ep =  Ext.getCmp('exportbutton');
		
		if(cb.hidden == false){
			cb.setVisible(false);
			eb.setVisible(false);
			rb.setVisible(false);
			ep.setVisible(true);
		} else {
		console.log('else');
			cb.setVisible(true);
			eb.setVisible(true);
			rb.setVisible(true);
			ep.setVisible(false);
		}
		

	}


});

