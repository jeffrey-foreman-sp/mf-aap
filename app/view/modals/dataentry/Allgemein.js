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
			width: 240
	},
	id: 'edit_allg',
	items: [
		{		
			fieldLabel: 'Titel',
			allowBlank: false,
			blankText: 'Dieses Feld ist obligatorisch!',
			msgTarget: 'side',
			name: 'name'
		},{		
			fieldLabel: 'Identifikator (Sammlung)',
			regex: /\d\d\d\.\d\d/,
			regexText: 'Der Identifikator muss der Zahl mit dem Muster "XXX.XX" entsprechen! (z.B. 153.23) ',
			msgTarget: 'side',
			name: 'ident'
		},{		
			xtype: 'georefdat', 
			width: 140
		},{		
			fieldLabel: 'Fachhstelle des Bundes',
			name: 'fachst'
		},{		
			xtype: 'zugberech', 
			fieldLabel: 'Zugangsberechtigungsstufe',
			name: 'zugberech'
		},{		
			xtype: 'echkateg', 
			fieldLabel: 'eCH-Kategorie',
			name: 'echkateg'
		},{		
			fieldLabel: 'Nachführungszeitraum',
			name: 'nachfzeitr'
		},{		
			fieldLabel: 'Nachführungsrhythmus',
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
					minValue: 0,
					name: 'datenmenge',
					style: 'margin-right: 5px;',
					flex: 4
				}, {
					xtype: 'numberfield',
					fieldLabel: 'Jahr',
					labelAlign: 'top',
					labelStyle: 'margin-bottom: 5px;',
					minValue: 2000,
					name: 'datenmenge',
					name: 'imjr',
					flex: 2
				}
			]
		},{		
			xtype: 'numberfield',
			fieldLabel: 'Datenzuwachs (GB pro Jahr)',
			name: 'datenzuw'
		},{		
			xtype: 'textareafield',
			grow: true,
			defaultAlign: 'bl',
			fieldLabel: 'Bemerkungen',
			labelStyle: 'margin-bottom: 5px; margin-top: 60px;',
			name: 'bemerk'
		}
	]

	

		
});
