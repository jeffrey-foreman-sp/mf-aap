Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.panel.Panel',
	store: 'AapStore', 
	xtype: 'allgemein',
	alias: 'widget.displayallgemein',
	id: 'disp_allg',
	bodyPadding: 10,
	tpl: [
		'<p>Name: <strong>{name}</strong></p>',
		'<p>Identifikator (Sammlung): <strong>{ident}</strong></p>',
		'<p>Georeferenzdaten: <strong>{georefdat}</strong></p>',
		'<p>Fachstelle des Bundes: <strong>{fachst}</strong></p>',
		'<p>Zugangsberechtigungsstufe: <strong>{zugberech}</strong></p>',
		'<p>eCH-Kategorie: <strong>{echkateg}</strong></p>',
		'<p>Nachführungsrythmus: <strong>{nachfrhythm}</strong></p>',
		'<p>Nachführungszeitraum: <strong>{nachfzeitraum}</strong></p>',
		'<p>Datenmenge (in GB): <strong>{datenmenge}</strong></p>',
		'<p>im Jahr: <strong>{imjr}</strong></p>',
		'<p>Datenzuwachs (GB pro Jahr): <strong>{datenzuw}</strong></p>',
		'<p>Bemerkung: <strong>{bemerk}</strong></p>'
	]	
});
