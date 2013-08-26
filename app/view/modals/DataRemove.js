Ext.define('Aap.view.modals.DataRemove', {
    extend: 'Ext.window.Window',
    alias: 'widget.dataremove',
    layout: 'fit',
    autoShow: true,
	modal: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
				html: '<h1>Warnung</h1><p>Wollen Sie Die Daten wirklich unwiderrufbar löschen</p>'
            }
        ];
        this.buttons = [
            {
                text: 'Daten Löschen',
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
