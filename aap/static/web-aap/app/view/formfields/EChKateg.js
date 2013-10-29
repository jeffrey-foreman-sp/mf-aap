Ext.define('Aap.view.formfields.EChKateg', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'echkateg',	
	queryMode: 'local',
	store: new Ext.data.ArrayStore({
		id: 'echkateg_store',
		fields: [
			'abbr',  // numeric value is the key
            'full'
        ],
        data: [
			['A1', 'Basiskarten, Landschaftsmodelle'], 
			['A2', 'Bodenbedekung, Bodennutzung'], 
			['A3', 'Luft-, Satellitenbilder'], 
			['B', 'Ortsangaben, Referenzsysteme'], 
			['C', 'Höhen'], 
			['D', 'Politische und administrative Grenzen'], 
			['E1', 'Raumplanung, Raumentwicklung'], 
			['E2', 'Grundstückkataster'], 
			['F1', 'Geologie'], 
			['F2', 'Boden'], 
			['F3', 'Naturbedinge Risiken'], 
			['G', 'Wald, Flora, Fauna'], 
			['H', 'Meere'], 
			['I', 'Gewässer'], 
			['K', 'Atmosphäre, Luft, Klima'], 
			['L1', 'Umweltschutz, Lärm'], 
			['L2', 'Natur- und Landschaftsschutz'], 
			['M', 'Bevölkerung, Gesellschaft, Kultur'], 
			['N', 'Gesundheit'], 
			['O', 'Gebäude, Anlagen'], 
			['P', 'Verkehr'], 
			['Q1', 'Energie'], 
			['Q2', 'Wasser- und Abfallsysteme'], 
			['Q3', 'Kommunikation'], 
			['R', 'Militär, Sicherheit'], 
			['S', 'Landwirtschaft'], 
			['T', 'Wirtschaftliche Aktivitäten'] 
		]  
	}),
	valueField: 'abbr',
    displayField: 'full',
    triggerAction: 'all',
	
	tpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
            '<div class="x-boundlist-item">{abbr} - {full}</div>',
        '</tpl>'
    ),
    // template for the content inside text field
    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
            '{abbr} - {full}',
        '</tpl>'
    )



});
