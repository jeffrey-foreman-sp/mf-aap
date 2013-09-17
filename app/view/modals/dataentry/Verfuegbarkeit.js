Ext.define('Aap.view.modals.dataentry.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	requires: [	
		'Aap.view.formfields.BegrZs',	
		'Aap.view.formfields.BegrWs'	
	],
	xtype: 'dataentryverfuegbarkeit',
	bodyPadding: 10,
	defaults: {
			labelAlign: 'top',
			labelWidth: 40,
			labelStyle: 'margin-bottom: 5px;',
			width: 240,
	},
	defaultType: 'textfield',
	id: 'edit_verf',
	items: [
		{		
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Zuständige Stelle</p>'		
		},{		
			xtype: 'numberfield',
			minValue: 0,	
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'aufbewzs'
		},{		
			xtype: 'begrws',
			fieldLabel: 'Begründung',
			name: 'begrzs'
		},{		
			fieldLabel: 'Input durch',
			name: 'inpaufb'
		},{		
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Weitere Stellen</p>'		
		},{		
			xtype: 'numberfield',
			minValue: 0,	
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'aufbewws'
		},{		
			xtype: 'begrws',
			fieldLabel: 'Begründung',
			name: 'begrws'
		},{		
			xtype: 'container',
			flex: 1	
		},{		
			fieldLabel: 'Entscheid Aufbewahrungsfrist',
			margin: '200 0 0 0',
			name: 'entsaufbew'
		},{		
			xtype: 'textareafield',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkaufbew'
		}
	]
});
