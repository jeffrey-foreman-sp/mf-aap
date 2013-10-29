Ext.define('Aap.view.mainbody.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	store: 'AapStore', 
	xtype: 'verfuegbarkeit',
	alias: 'widget.verfuegbarkeit',
	bodyPadding: 10,
	id: 'disp_verf',
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
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'verf_zs_aufb'
		},{		
			fieldLabel: 'Begründung',
			height: 46,
			labelWidth: 80, 	
			name: 'verf_zs_begr'
		},{		
			xtype: 'container',
			style: 'margin-top: 22px; color: #606060 ',
			html: '<div style="margin-bottom: 10px; font-weight: bold;">Weitere Stellen</div>'		
		},{		
			fieldLabel: 'Aufbewahrungsfrist',
			name: 'verf_ws_aufb'
		},{		
			fieldLabel: 'Begründung',
			height: 46,
			labelWidth: 80, 	
			name: 'verf_ws_begr'
		},{		
			fieldLabel: 'Input durch',
			height: 46,
			name: 'verf_ws_inpu'
		},{		
			fieldLabel: 'Entscheid Aufbewahrungsfrist',
			labelWidth: 200,	
			style: 'margin-top: 125px',
			name: 'verf_ents'
		},{		
			labelAlign: 'top',
			labelStyle: 'font-weight: bold; margin-bottom: 5px;',
			fieldStyle: 'text-align: left;',
			height: 60,
			fieldLabel: 'Bemerkungen',
			name: 'verf_beme'
		}
	]


});
