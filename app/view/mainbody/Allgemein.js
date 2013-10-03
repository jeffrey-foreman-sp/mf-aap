Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.form.Panel',
	store: 'AapStore', 
	xtype: 'allgemein',
	alias: 'widget.displayallgemein',
	id: 'disp_allg',

	bodyPadding: 10,
	defaultType: 'displayfield',
	defaults: {
		width: '100%',	
		anchor: '100%',
		labelStyle: 'font-weight: bold; margin-bottom: 5px;',
		labelWidth: 180 
	},

	items: [
		{		
			fieldLabel: 'Titel',
			labelWidth: 30, 
			labelAlign: 'top',
			fieldStyle: 'text-align: left;',
			height: 100,
			name: 'name'
		},{		
			fieldLabel: 'Identifikator (Sammlung)',
			flex: 1,
			name: 'ident'
		},{		
			fieldLabel: 'Georeferenzdaten',
			name: 'georefdat'
		},{		
			fieldLabel: 'Fachhstelle des Bundes',
			name: 'fachst'
		},{		
			fieldLabel: 'Zugangsberechtigungsstufe',
			name: 'zugberech'
		},{		
			fieldLabel: 'eCH-Kategorie',
			name: 'echkateg'
		},{		
			fieldLabel: 'Nachführungszeitraum',
			name: 'nachfzeitr'
		},{		
			fieldLabel: 'Datenmenge (GB)',
			name: 'datenmenge'
			
		}, {
			fieldLabel: 'im Jahr',
			name: 'imjr'
		},{		
			fieldLabel: 'Datenzuwachs (GB pro Jahr)',
			name: 'datenzuw'
		},{		
			fieldLabel: 'Bemerkungen',
			labelAlign: 'top',
			labelStyle: 'font-weight: bold; margin-bottom: 5px; margin-top: 21px;',
			fieldStyle: 'text-align: left;',
			height: 100,
			name: 'bemerk'
		}
	]

});
