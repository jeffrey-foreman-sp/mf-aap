Ext.define('Aap.view.mainbody.Archievwuerdigkeit',{
	extend: 'Ext.form.FormPanel',
	xtype: 'archievwuerdigkeit',
	store: 'AapStore', 
	alias: 'widget.archievwuerdigkeit',
	bodyPadding: 10,
	id: 'disp_arch',
	autoScroll: true,
	defaults: {
		width: '100%',	
		anchor: '100%',
		labelStyle: 'font-weight: bold; margin-bottom: 5px;',
		labelWidth: 140	
	},
	defaultType: 'displayfield',
	items: [
		{		
			xtype: 'container',
			style: 'margin-top: 0px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Zuständige Stelle</div>'		
		},{		
			fieldLabel: 'Bewertung r+a',
			labelWidth: 100, 	
			name: 'arch_zs_bewe'
		},{		
			fieldLabel: 'Begründung',
			height: 46,
			labelWidth: 100, 	
			name: 'arch_zs_begr'
		},{		
			xtype: 'container',
			style: 'margin-top: 20px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Weiter Stellen</div>'		
		},{		
			fieldLabel: 'Bewertung r+a',
			labelWidth: 100, 	
			name: 'arch_ws_bewe'
		},{		
			fieldLabel: 'Begründung',
			height: 46,
			labelWidth: 100, 	
			name: 'arch_ws_begr'
		},{		
			fieldLabel: 'Input durch',
			labelWidth: 100, 	
			name: 'arch_ws_inpu'
		},{	
			xtype: 'container',
			style: 'margin-top: 20px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Bundesarchiv</div>'		
		},{		
			fieldLabel: 'Bewertung h+s',
			labelWidth: 100, 	
			name: 'arch_ba_bewe'
		},{		
			fieldLabel: 'Begründung',
			height: 46,
			labelWidth: 100, 	
			name: 'arch_ba_begr'
		},{	
			fieldLabel: 'Art Sampling / Selektion',
			style: 'margin-top: 5px',
			labelWidth: 160, 	
			name: 'arch_arts'
		},{	
			fieldLabel: 'Entscheid Archivwürdigkeit',
			labelWidth: 170, 	
			name: 'arch_ents'
		},{		
			labelAlign: 'top',
			labelStyle: 'font-weight: bold; margin-bottom: 5px;',
			fieldStyle: 'text-align: left;',
			height: 60,
			fieldLabel: 'Bemerkungen',
			name: 'arch_beme'
		}
	]

});


