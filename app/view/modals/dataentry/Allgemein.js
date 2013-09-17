Ext.define('Aap.view.modals.dataentry.Allgemein',{
	extend: 'Ext.form.Panel',
	requires: [
		'Aap.view.formfields.ZugBerech',	
		'Aap.view.formfields.GeoRefDat',	
		'Aap.view.formfields.EChKateg'	
	],
	alias: 'widget.dataentryallgemein',
	bodyPadding: 10,
	defaultType: 'textfield',
	defaults: {
			labelAlign: 'top',
			labelWidth: 40,
			labelStyle: 'margin-bottom: 5px;',
			width: 240,
	},
	id: 'edit_allg',
	items: [
		{		
			fieldLabel: 'Titel',
			allowBlank: false,
			blankText: 'Dieses Feld ist obligatorisch!',
			emptyText: 'Text',
			msgTarget: 'side',
			name: 'name'
		},{		
			fieldLabel: 'Identifikator (Sammlung)',
			regex: /\d\d\d\.\d\d/,
			emptyText: 'z.B. 132.42',
			regexText: 'Der Identifikator muss der Zahl mit dem Muster "XXX.XX" entsprechen! (Z.B. 153.23) ',
			msgTarget: 'side',
			name: 'ident'
		},{		
			xtype: 'georefdat', 
			width: 140,
		},{		
			fieldLabel: 'Fachhstelle des Bundes',
			emptyText: 'Text',
			name: 'fachst',
		},{		
			xtype: 'zugberech', 
			fieldLabel: 'Zugangsberechtigungsstufe',
			emptyText: 'Auswahl',
			name: 'zugberech'
		},{		
			xtype: 'echkateg', 
			fieldLabel: 'eCH-Kategorie',
			emptyText: 'Auswahl',
			name: 'echkateg'
		},{		
			fieldLabel: 'Nachführungszeitraum',
			emptyText: 'Text oder Zahl',
			name: 'nachfzeitr'
		},{		
			fieldLabel: 'Nachführungsrhythmus',
			emptyText: 'Text oder Zahl',
			name: 'nachfrhythm'
		},{	

			xtype: 'fieldcontainer',
			layout: 'hbox',
			columnWidth: 0.4,
			items: [
				{
					xtype: 'numberfield',
					fieldLabel: 'Datenmenge (in GB)',
					labelAlign: 'top',
					labelStyle: 'margin-bottom: 5px;',
					emptyText: 'Zahl',
					name: 'datenmenge',
					style: 'margin-right: 5px;',
					flex: 4
				}, {
					xtype: 'numberfield',
					fieldLabel: 'Jahr',
					labelAlign: 'top',
					labelStyle: 'margin-bottom: 5px;',
					emptyText: 'Zahl',
					minValue: 2000,
					name: 'datenmenge',
					name: 'imjr',
					flex: 2
				}
			]
		},{		
			xtype: 'numberfield',
			fieldLabel: 'Datenzuwachs (GB pro Jahr)',
			emptyText: 'Zahl',
			minValue: 0,
			name: 'datenzuw'
		},{		
			xtype: 'textareafield',
			emptyText: 'Text',
			grow: true,
			anchor: '100%',
			defaultAlign: 'bl',
			fieldLabel: 'Bemerkungen',
			name: 'bemerk'
		}
	],

	

		
});
