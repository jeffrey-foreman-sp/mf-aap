Ext.define('Aap.view.formfields.BegrZs', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'begrzs',	
	queryMode: 'local',
	store: new Ext.data.ArrayStore({
		id: 'bewzs_store',
		fields: [
            'full'
        ],
        data: [
			['Rechtliche Relevanz'], 
			['Gewährleistung der Rechtssicherheit'], 
			['Nachweis der Geschäftspraxis'] 
		]  
	}),
	valueField: 'full',
    displayField: 'full',
    triggerAction: 'all'


});
