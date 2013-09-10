Ext.define('Aap.view.mainbody.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	store: 'Allgemein', 
	xtype: 'verfuegbarkeit',
	alias: 'widget.verfuegbarkeit',
	id: 'displayverfuegbarkeit',
	bodyPadding: 10,
	defaultType: 'displayfield',
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
			name: 'begrw'
		},{		
			fieldLabel: 'Entscheid Aufbewahrungsfrist',
			name: 'entsaufbew'
		},{		
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkaufbew'
		}
	]
});
