Ext.define('Aap.view.modals.DataEntry', {
    extend: 'Ext.window.Window',
    alias: 'widget.dataentry',
//  title: 'Neuer Knoten',
//    layout: 'fit',
    autoShow: true,
	modal: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                bodyStyle: {
                    background: 'none',
                    padding: '10px',
                    border: '0'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        allowBlank: false,
                        fieldLabel: 'Name'
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: 'Speichern',
                action: 'save'
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
