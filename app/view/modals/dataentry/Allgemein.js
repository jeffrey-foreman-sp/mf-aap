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
			fieldLabel: 'Identifikator (Sammlung)',
	//		regex: /^\d\.\d$/,
			regexText: 'Der Identifikator muss der Zahl mit dem Muster "XXX.XX" entsprechen! (z.B. 153.23) ',
			name: 'ident'
		},{		
			xtype: 'checkboxfield',
			checked: false,
			boxLabel: 'Georeferenzdaten',
			boxLabelAlign: 'before',
			name: 'georefdat',
			inputValue: 'X'
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
