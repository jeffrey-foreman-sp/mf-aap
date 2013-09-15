Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.form.Panel',
	store: 'Allgemein', 
	xtype: 'allgemein',
	alias: 'widget.displayallgemein',
	bodyPadding: 10,
	id: 'disp_allg',
	defaultType: 'displayfield',
	items: [
		{		
			fieldLabel: 'Titel',
			name: 'name'
		},{		
			fieldLabel: 'Identifikator (Sammlung)',
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
			fieldLabel: 'Datenmenge (in GB)',
			name: 'datenmenge'
		},{		
			fieldLabel: 'im Jahr',
			name: 'imjr'
		},{		
			fieldLabel: 'Datenzuwachs jährl. (in GB)',
			name: 'datenzuw'
		},{		
			fieldLabel: 'Bemerkungen',
			name: 'bemerk'
		}
	]
});
