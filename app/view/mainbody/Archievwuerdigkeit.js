Ext.define('Aap.view.mainbody.Archievwuerdigkeit',{
	extend: 'Ext.form.FormPanel',
	xtype: 'archievwuerdigkeit',
	store: 'MetaAap', 
	alias: 'widget.archievwuerdigkeit',
	id: 'displayarchievwuerdigkeit',
	bodyPadding: 10,
	defaultType: 'displayfield',
	items: [
		{		
			xtype: 'container',
			html: '<h4>Zuständige Stelle</h4>'		
		},{		
			fieldLabel: 'Bewertung r+a',
			name: 'bewzs'
		},{		
			fieldLabel: 'Begründung',
			labelWidth: 200,
			anchor: '-13',
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
			fieldLabel: 'Art Sampling / Selektion',
			name: 'artsampl'
		},{	
			fieldLabel: 'Entscheid Archivwuerdikeit',
			name: 'entsarch'
		},{		
			grow: true,
			fieldLabel: 'Bemerkungen',
			name: 'bemerkarch'
		}
	]
});


