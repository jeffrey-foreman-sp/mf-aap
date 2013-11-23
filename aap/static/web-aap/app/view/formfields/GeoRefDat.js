Ext.define('Aap.view.formfields.GeoRefDat', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'georefdat',	
	queryMode: 'local',
	store: new Ext.data.ArrayStore({
		id: 'georefdat_store',
		fields: [
            'full'
        ],
        data: [
            [''],
			['Ja'], 
			['Nein'] 
		]  
	}),
    editable: false,
	valueField: 'full',
	displayField: 'full',
    triggerAction: 'all'


});
