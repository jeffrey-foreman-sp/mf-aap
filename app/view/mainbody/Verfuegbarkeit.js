Ext.define('Aap.view.mainbody.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	store: 'AapStore', 
	xtype: 'verfuegbarkeit',
	alias: 'widget.verfuegbarkeit',
	bodyPadding: 10,
	id: 'disp_verf',
	defaults: {
		width: '100%',	
		anchor: '100%',
		labelStyle: 'font-weight: bold; margin-bottom: 5px;',
		labelWidth: 140	
	},
	//defaultType: 'textfield',
	defaultType: 'displayfield',
	items: [
		{		
			xtype: 'container',
			style: 'margin-top: 0px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Zuständige Stelle</div>'		
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
			style: 'margin-top: 22px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Weitere Stellen</div>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'aufbewws'
		},{		
			fieldLabel: 'Begründung',
			name: 'begrw'
		},{		
			fieldLabel: 'Entscheid Aufbewahrungsfrist',
			labelWidth: 200,	
			style: 'margin-top: 147px',
			name: 'entsaufbew'
		},{		
			labelAlign: 'top',
			labelStyle: 'font-weight: bold; margin-bottom: 5px;',
			fieldStyle: 'text-align: left;',
			height: 100,
			fieldLabel: 'Bemerkungen',
			name: 'bemerkaufbew'
		}
	]


});
