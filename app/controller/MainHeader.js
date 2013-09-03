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
		console.log('test');
	}


});

