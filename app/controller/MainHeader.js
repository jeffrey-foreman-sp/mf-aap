Ext.define('Aap.controller.MainHeader', {
	extend: 'Ext.app.Controller',
	views: [
		'modals.Information'
	],

    init: function() {
        this.control({
			'mainheader button[action=openinfo]': {
                click: this.onClick
			}	
		});
    },

    onClick: function() {
		Ext.widget('information');
	}
   


});

