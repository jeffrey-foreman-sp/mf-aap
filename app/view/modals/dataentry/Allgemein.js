Ext.define('Aap.view.modals.dataentry.Allgemein',{
	extend: 'Ext.form.Panel',
	alias: 'widget.dataentryallgemein',
	bodyPadding: 10,
	defaultType: 'textfield',
	id: 'allgemeinview',
	items: [
		{		
			fieldLabel: 'Titel',
			titel: 'name'
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
