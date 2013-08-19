Ext.define('Aap.controller.Tree', {
    extend: 'Ext.app.Controller',

	views: [
		'mainbody.Tree'
	],
	
	stores: ['TreeStore'],
	models: ['TreeNode'],


/*	
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
        
    }
*/

});
