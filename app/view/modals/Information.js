Ext.define('Aap.view.modals.Information', {
    extend: 'Ext.window.Window',
    alias: 'widget.information',
    layout: 'fit',
    autoShow: true,
	modal: true,
	width: 600,
	height: 500,
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
				html: '<iframe style="width: 100%; height: 100%;" src="https://sites.google.com/site/aapdokumentation/"></iframe>'
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
