Ext.define('Aap.view.formfields.BegrWs', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'begrws',	
	queryMode: 'local',
	store: new Ext.data.ArrayStore({
		id: 'bewzs_store',
		fields: [
            'full'
        ],
        data: [
            ['-'],
			['Rechtliche Relevanz'], 
			['Nutzung durch die zuständige Stelle'], 
			['Nutzung durch die Bundesverwaltung'], 
			['Nutzen für die Wissenschaft und Forschung'], 
			['Nutzen für Firmen'], 
			['Nutzen für Private'] 
		]  
	}),
    editable: false,
	valueField: 'full',
    displayField: 'full',
    triggerAction: 'all'


});
