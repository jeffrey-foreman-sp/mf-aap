Ext.define('Aap.view.modals.dataentry.Allgemein',{
	extend: 'Ext.form.Panel',
	alias: 'widget.dataentryallgemein',
	bodyPadding: 10,
	defaultType: 'textfield',
	id: 'allgemeinedit',
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
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerk'
		}
	]
});
