Ext.define('Aap.view.modals.dataentry.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	xtype: 'dataentryverfuegbarkeit',
	bodyPadding: 10,
	defaultType: 'textfield',
	id: 'edit_verf',
	items: [
		{		
			xtype: 'container',
			html: '<h4>Zuständige Stelle</h4>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'aufbewzs'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrzs'
		},{		
			fieldLabel: 'Input durch',
			name: 'inpaufb'
		},{		
			xtype: 'container',
			html: '<h4>Weiter Stellen</h4>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'aufbewws'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrws'
		},{		
			fieldLabel: 'Entscheid Aufbewahrungsfrist',
			name: 'entsaufbew'
		},{		
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkaufbew'
		}
	]
});
