Ext.define('Aap.view.mainbody.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	store: 'AapStore', 
	xtype: 'verfuegbarkeit',
	alias: 'widget.verfuegbarkeit',
	bodyPadding: 10,
	id: 'disp_verf',
	defaultType: 'textfield',
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
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkaufbew'
		}
	]


});
