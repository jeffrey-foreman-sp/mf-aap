Ext.define('Aap.view.modals.dataentry.Archivwuerdigkeit',{
	extend: 'Ext.form.Panel',
	xtype: 'dataentryarchivwuerdigkeit',
	bodyPadding: 10,
	defaultType: 'textfield',
	id: 'edit_arch',
	items: [
		{		
			xtype: 'container',
			html: '<h4>Zuständige Stelle</h4>'		
		},{		
			fieldLabel: 'Bewertung r+a',
			name: 'bewzs'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrzs'
		},{		
			fieldLabel: 'Input durch',
			name: 'inparch'
		},{		
			xtype: 'container',
			html: '<h4>Weiter Stellen</h4>'		
		},{		
			fieldLabel: 'Bewertung r+a',
			name: 'bewws'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrws'
		},{	
			xtype: 'container',
			html: '<h4>Bundesarchiv</h4>'		
		},{		
			fieldLabel: 'Bewertung h+s',
			name: 'bewba'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrba'
		},{	
			fieldLabel: 'Art Sampling/Selektion',
			name: 'artsampl'
		},{	
			fieldLabel: 'Entscheid Archivwuerdikeit',
			name: 'entsarch'
		},{		
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkarch'
		}
	]
});
