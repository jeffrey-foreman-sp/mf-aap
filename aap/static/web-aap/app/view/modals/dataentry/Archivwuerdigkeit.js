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
			name: 'arch_zs_bewe'
		},{		
			xtype: 'begrzs',
			fieldLabel: 'Begründung',
			name: 'arch_zs_begr'
		},{		
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Weitere Stellen</p>'		
		},{		
			xtype: 'bewzs',
			fieldLabel: 'Bewertung r+a',
			name: 'arch_ws_bewe'
		},{		
			xtype: 'begrws',
			fieldLabel: 'Begründung',
			name: 'arch_ws_begr'
		},{		
			fieldLabel: 'Input durch',
			name: 'arch_ws_inpu'
		},{	
			xtype: 'container',
			html: '<p style="font-weight: bold; margin: 10 0 5 0;">Bundesarchiv</p>'		
		},{		
			xtype: 'bewzs',
			fieldLabel: 'Bewertung h+s',
			name: 'arch_ba_bewe'
		},{		
			xtype: 'begrba',
			fieldLabel: 'Begründung',
			name: 'arch_ba_begr'
		},{	
			fieldLabel: 'Art Sampling / Selektion',
			margin: '75 0 0 0',
			name: 'arch_arts'
		},{		
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'arch_beme'
		}
	]
});
