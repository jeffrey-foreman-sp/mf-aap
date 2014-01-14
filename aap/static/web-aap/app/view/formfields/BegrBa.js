Ext.define('Aap.view.formfields.BegrBa', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'begrba',	
	queryMode: 'local',
	store: new Ext.data.ArrayStore({
		id: 'bewzs_store',
		fields: [
            'full'
        ],
        data: [
            ['-'],
			['Nutzen für die Forschung'], 
			['Zeitgenössisches Interesse'], 
			['Brisanz'], 
			['Entwicklung / Verlauf'], 
			['Definitionsmacht'] 
		]  
	}),
    editable: false,
	valueField: 'full',
    displayField: 'full',
    triggerAction: 'all'


});
