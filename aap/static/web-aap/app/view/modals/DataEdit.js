Ext.define('Aap.view.modals.DataEdit', {
    extend: 'Ext.window.Window',
	requires: [
		'Aap.view.modals.dataentry.Allgemein',
		'Aap.view.modals.dataentry.Verfuegbarkeit',	
		'Aap.view.modals.dataentry.Archivwuerdigkeit'		
	],
    alias: 'widget.dataedit',
	autoShow: true,
	modal: true,
	resizable: false,
	id: 'dataedit',
	initComponent: function () {
        this.items = [
            {
				xtype: 'panel',
				title: 'Metadaten Bearbeiten',
				id: 'metabearbeiten',
				layout: {
					type: 'hbox',
					align: 'stretch'
				},
				defaults: {
					margin: 10
				},		
				items: [
					{
						xtype: 'dataentryallgemein',
						title: 'Allgemein'
					},
					{
						xtype: 'dataentryverfuegbarkeit',
						title: 'Bewertung Nachhaltige Verfügbarkeit'
					},
					{
						xtype: 'dataentryarchivwuerdigkeit',
						title: 'Bewertung Archivwürdigkeit'
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
