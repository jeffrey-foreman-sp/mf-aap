Ext.define('Aap.view.formfields.BewZs', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'bewzs',	
	queryMode: 'local',
	store: new Ext.data.ArrayStore({
		id: 'bewzs_store',
		fields: [
			'abbr',  // numeric value is the key
            'full'
        ],
        data: [
			['N', 'nicht archievwürdig'], 
			['S', 'Sampling / Selektion'], 
			['A', 'archievwürdig'] 
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
