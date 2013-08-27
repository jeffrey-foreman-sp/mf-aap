Ext.define('Aap.view.mainbody.Archievwuerdigkeit',{
	extend: 'Ext.form.Panel',
	xtype: 'archievwuerdigkeit',
	bodyPadding: 10,
	defaultType: 'textfield',
	items: [
		{		
			xtype: 'container',
			html: '<h4>Zuständige Stelle</h4>'		
		},{		
			fieldLabel: 'Bewertung r+a',
			name: 'bewertungra'
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
			fieldLabel: 'Bewertung r+a',
			name: 'bewertungra'
		},{		
			fieldLabel: 'Begründung',
			name: 'begruendung'
		},{	
			xtype: 'container',
			html: '<h4>Bundesarchiv</h4>'		
		},{		
			fieldLabel: 'Bewertung h+s',
			name: 'bewertunghs'
		},{		
			fieldLabel: 'Begründung',
			name: 'begruendung'
		},{	
			fieldLabel: 'Art Sampling/Selektion',
			name: 'artsamplingselektion'
		},{	
			fieldLabel: 'Entscheid Archivwuerdikeit',
			name: 'enscheidarchivwuerdigkeit'
		},{		
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkungen'
		}
	]
});
