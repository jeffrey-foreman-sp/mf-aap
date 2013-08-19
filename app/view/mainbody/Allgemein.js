Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.form.Panel',
	xtype: 'allgemein',
	bodyPadding: 10,
	defaultType: 'textfield',
	items: [
		{		
			fieldLabel: 'Titel',
			name: 'titel'
		},{		
			fieldLabel: 'Identifikator (Sammlung)',
			name: 'identifikator'
		},{		
			fieldLabel: 'Georeferenzdaten',
			name: 'georeferenzdaten'
		},{		
			fieldLabel: 'Fachhstelle des Bundes',
			name: 'fachstelledesbundes'
		},{		
			fieldLabel: 'Zugangsberechtigungsstufe',
			name: 'zugangberechtigungsstufe'
		},{		
			fieldLabel: 'eCH-Kategorie',
			name: 'echkategorie'
		},{		
			fieldLabel: 'Nachführungszeitraum',
			name: 'nachfuerungszeitraum'
		},{		
			fieldLabel: 'Datenmenge (in GB)',
			name: 'datenmengeingb'
		},{		
			fieldLabel: 'im Jahr',
			name: 'imjahr'
		},{		
			fieldLabel: 'Datenzuwachs jährl. (in GB)',
			name: 'datenzuwachsjaehrlich'
		},{		
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerkungen'
		}
	]
});
