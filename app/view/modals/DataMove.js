Ext.define('Aap.view.modals.DataMove', {
    extend: 'Ext.window.Window',
    alias: 'widget.datamove',
    layout: 'fit',
    autoShow: true,
	modal: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
				html: '<h1>Warnung</h1><p>Durch das Verschieben werden die Metadaten der neuen übergeorneten Position übernommen!</p><p>Was möchten Sie tun?</p>'
            }
        ];
        this.buttons = [
            {
                text: 'Daten Verschieben',
                action: 'confirm'
			},
			{
                text: 'Abbrechen',
                scope: this,
                handler: this.close
            }
        ];
        this.callParent(arguments);
    }
});
