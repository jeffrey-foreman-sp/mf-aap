Ext.define('Aap.view.modals.Information', {
    extend: 'Ext.window.Window',
    alias: 'widget.information',
    layout: 'fit',
    autoShow: true,
	modal: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
				html: '<h1>Informationen</h1><p>Hier infotext</p><iframe src="http://www.geo.admin.ch/"></p></iframe>'
            }
        ];
        this.buttons = [
			{
                text: 'Schliessen',
                scope: this,
                handler: this.close
            }
        ];
        this.callParent(arguments);
    }
});
