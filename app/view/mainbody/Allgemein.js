Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.panel.Panel',
	store: 'Allgemein', 
	xtype: 'allgemein',
	alias: 'widget.displayallgemein',
	id: 'disp_allg',
	bodyPadding: 10,
	tpl: [
		'<p>Name: {name}</p>',
		'<p>Identifikator (Sammlugn): {ident}</p>',
		'<p>Georeferenzdaten: {georefdat}</p>',
		'<p>Fachstelle des Bundes: {fachst}</p>',
		'<p>Zugangsberechtigungsstufe: {zugberech}</p>',
		'<p>eCH-Kategorie: {echkateg}</p>',
		'<p>Nachführungsrythmus: {nachfrhythm}</p>',
		'<p>Nachführungszeitraum: {nachfzeitraum}</p>',
		'<p>Datenmenge (in GB): {datenmenge}</p>',
		'<p>im Jahr: {imjr}</p>',
		'<p>Datenzuwachs (GB pro Jahr): {datenzuw}</p>'
	]	
});
