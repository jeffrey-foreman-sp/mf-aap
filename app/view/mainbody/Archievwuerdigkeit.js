Ext.define('Aap.view.mainbody.Archievwuerdigkeit',{
	extend: 'Ext.form.FormPanel',
	xtype: 'archievwuerdigkeit',
	store: 'AapStore', 
	alias: 'widget.archievwuerdigkeit',
	bodyPadding: 10,
	id: 'disp_arch',
	defaults: {
		width: '100%',	
		anchor: '100%',
		labelStyle: 'font-weight: bold; margin-bottom: 5px;',
		labelWidth: 140	
	},
//	defaultType: 'textfield',
	defaultType: 'displayfield',
	items: [
		{		
			xtype: 'container',
			style: 'margin-top: 0px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Zuständige Stelle</div>'		
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
			style: 'margin-top: 20px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Weiter Stellen</div>'		
		},{		
			fieldLabel: 'Bewertung r+a',
			name: 'bewws'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrws'
		},{	
			xtype: 'container',
			style: 'margin-top: 20px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Bundesarchiv</div>'		
		},{		
			fieldLabel: 'Bewertung h+s',
			name: 'bewba'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrba'
		},{	
			fieldLabel: 'Art Sampling / Selektion',
			style: 'margin-top: 35px',
			labelWidth: 180, 	
			name: 'artsampl'
		},{	
			fieldLabel: 'Entscheid Archivwürdikeit',
			labelWidth: 180, 	
			name: 'entsarch'
		},{		
			labelAlign: 'top',
			labelStyle: 'font-weight: bold; margin-bottom: 5px;',
			fieldStyle: 'text-align: left;',
			height: 100,
			fieldLabel: 'Bemerkungen',
			name: 'bemerkarch'
		}
	]

});


