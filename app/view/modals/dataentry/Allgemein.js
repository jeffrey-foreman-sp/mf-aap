Ext.define('Aap.view.modals.dataentry.Allgemein',{
	extend: 'Ext.form.Panel',
	requires: [
		'Aap.view.formfields.ZugBerech',	
		'Aap.view.formfields.EChKateg'	
	],
	alias: 'widget.dataentryallgemein',
	bodyPadding: 10,
	defaultType: 'textfield',
	defaults: {
			labelAlign: 'top',
			labelWidth: 40,
			labelStyle: 'margin-bottom: 5px;',
			msgTarget: 'side',
			width: 240
	},
	id: 'edit_allg',
	items: [
		{		
			fieldLabel: 'Titel',
			allowBlank: false,
			blankText: 'Dieses Feld ist obligatorisch!',
			name: 'name'
		},{		
			xtype: 'checkboxfield',
			checked: false,
			boxLabel: 'Bewertungsknoten: ',
			boxLabelAlign: 'before',
			id: 'metanode_field',
			name: 'metanode',
			inputValue: true,
			uncheckedValue: false
		},{		
			fieldLabel: 'Identifikator (Sammlung)',
			regex: /^\d{0,100}\.\d{0,100}$/,
			regexText: 'Der Identifikator muss der Zahl mit dem Muster "XXX.XX" entsprechen! (z.B. 153.23) ',
			name: 'ident'
		},{		
			xtype: 'checkboxfield',
			checked: false,
			boxLabel: 'Georeferenzdaten: ',
			boxLabelAlign: 'before',
			name: 'georefdat',
			inputValue: 'Ja',
			uncheckedValue: 'Nein'
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
					name: 'datenmenge',
					minValue: 0,
					style: 'margin-right: 5px;',
					flex: 4
				}, {
					xtype: 'numberfield',
					fieldLabel: 'Jahr',
					labelAlign: 'top',
					labelStyle: 'margin-bottom: 5px;',
					minValue: 0,
					name: 'imjr',
					flex: 2
				}
			]
		},{		
			xtype: 'numberfield',
			fieldLabel: 'Datenzuwachs (GB pro Jahr)',
			regex: /^-?\d*\.?\d*$/,
			regexText: 'Die Eingabe muss aus einer Ganzzahl bestehen',
			name: 'datenzuw'
		},{		
			xtype: 'textareafield',
			grow: true,
			defaultAlign: 'bl',
			fieldLabel: 'Bemerkungen',
			labelStyle: 'margin-bottom: 5px; margin-top: 52px;',
			name: 'bemerk'
		}
	]

	

		
});
