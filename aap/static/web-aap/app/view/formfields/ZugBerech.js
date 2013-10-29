Ext.define('Aap.view.formfields.ZugBerech', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'zugberech',	
	queryMode: 'local',
	store: new Ext.data.ArrayStore({
		id: 'zugberech_store',
		fields: [
			'abbr',  // numeric value is the key
            'full'
        ],
        data: [
			['A', 'öffentlich zugängliche Geobasisdataen'], 
			['B', 'beschränkt öffentlich zugängliche Geobasisdaten'], 
			['C', 'nicht öffentlich zugängliche Geobasisdaten'] 
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
