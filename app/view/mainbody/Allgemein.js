Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.form.Panel',
	store: 'Allgemein', 
	xtype: 'allgemein',
	bodyPadding: 10,
	defaultType: 'textfield',
	items: [
		{		
			fieldLabel: 'Titel',
			name: 'titel'
		},{		
			fieldLabel: 'Identifikator (Sammlung)',
			name: 'identifi'
		},{		
			fieldLabel: 'Georeferenzdaten',
			name: 'georefdat'
		},{		
			fieldLabel: 'Fachhstelle des Bundes',
			name: 'fachst'
		},{		
			fieldLabel: 'Zugangsberechtigungsstufe',
			name: 'zugangsbe'
		},{		
			fieldLabel: 'eCH-Kategorie',
			name: 'echkateg'
		},{		
			fieldLabel: 'Nachführungszeitraum',
			name: 'zeitrnachf'
		},{		
			fieldLabel: 'Datenmenge (in GB)',
			name: 'datenmengegb'
		},{		
			fieldLabel: 'im Jahr',
			name: 'imjr'
		},{		
			fieldLabel: 'Datenzuwachs jährl. (in GB)',
			name: 'datenzuwj'
		},{
			





		},{
			xtype: 'textareafield',
			grow: true,
			anchor: '100%',
			fieldLabel: 'Bemerkungen',
			name: 'bemerk'
		}
	]
});
