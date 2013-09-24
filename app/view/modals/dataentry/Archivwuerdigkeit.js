Ext.define('Aap.view.modals.dataentry.Archivwuerdigkeit',{
	extend: 'Ext.form.Panel',
	requires: [	
		'Aap.view.formfields.BewZs',	
		'Aap.view.formfields.BegrZs',	
		'Aap.view.formfields.BegrWs',	
		'Aap.view.formfields.BegrBa'	
	],
	xtype: 'dataentryarchivwuerdigkeit',
	bodyPadding: 10,
	defaults: {
		labelAlign: 'top',
		labelWidth: 40,
		labelStyle: 'margin-bottom: 5px;',
		width: 240
	},
	defaultType: 'textfield',
	id: 'edit_arch',
	items: [
		{		
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Zuständige Stelle</p>'		
		},{		
			xtype: 'bewzs',
			fieldLabel: 'Bewertung r+a',
			name: 'bewzs'
		},{		
			xtype: 'begrzs',
			fieldLabel: 'Begründung',
			name: 'begrzs'
		},{		
			fieldLabel: 'Input durch',
			name: 'inparch'
		},{		
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Weitere Stellen</p>'		
		},{		
			xtype: 'bewzs',
			fieldLabel: 'Bewertung r+a',
			name: 'bewws'
		},{		
			xtype: 'begrws',
			fieldLabel: 'Begründung',
			name: 'begrws'
		},{	
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Bundesarchiv</p>'		
		},{		
			xtype: 'bewzs',
			fieldLabel: 'Bewertung h+s',
			name: 'bewba'
		},{		
			xtype: 'begrba',
			fieldLabel: 'Begründung',
			name: 'begrba'
		},{	
			fieldLabel: 'Art Sampling / Selektion',
			margin: '30 0 0 0',
			name: 'artsampl'
		},{	
			fieldLabel: 'Entscheid Archivwürdikeit',
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
