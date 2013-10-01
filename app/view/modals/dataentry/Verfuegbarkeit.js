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
			width: 240
	},
	defaultType: 'textfield',
	id: 'edit_verf',
	items: [
		{		
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Zuständige Stelle</p>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			xtype: 'numberfield',
			minValue: 0,
			name: 'verf_zs_aufb'
		},{		
			xtype: 'begrws',
			fieldLabel: 'Begründung',
			name: 'verf_zs_begr'
		},{		
			fieldLabel: 'Input durch',
			name: 'verf_zs_inpu'
		},{		
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Weitere Stellen</p>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			xtype: 'numberfield',
			minValue: 0,
			name: 'verf_ws_aufb'
		},{		
			xtype: 'begrws',
			fieldLabel: 'Begründung',
			name: 'verf_ws_begr'
		},{		
			xtype: 'container',
			flex: 1	
		},{		
			xtype: 'textareafield',
			margin: '245 0 0 0',
			fieldLabel: 'Bemerkungen',
			name: 'verf_beme'
		}
	]
});
