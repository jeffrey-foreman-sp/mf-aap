Ext.define('Aap.view.mainbody.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	xtype: 'verfuegbarkeit',
	bodyPadding: 10,
	defaultType: 'textfield',
	items: [
		{		
			xtype: 'container',
			html: '<h4>Zuständige Stelle</h4>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'aufbewahrungsfrist'
		},{		
			fieldLabel: 'Begründung',
			name: 'begruendung'
		},{		
			fieldLabel: 'Input durch',
			name: 'inputdurch'
		},{		
			xtype: 'container',
			html: '<h4>Weiter Stellen</h4>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'aufbewahrungsfrist'
		},{		
			fieldLabel: 'Begründung',
			name: 'begruendung'
		},{		
			fieldLabel: 'Entscheid Aufbewahrungsfrist',
			name: 'enscheidaufbewahrungsfrist'
		},{		
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkungen'
		}
	]
});
