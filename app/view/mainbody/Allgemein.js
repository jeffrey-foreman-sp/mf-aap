Ext.define('Aap.view.mainbody.Allgemein',{
	extend: 'Ext.panel.Panel',
	store: 'AapStore', 
	xtype: 'allgemein',
	alias: 'widget.displayallgemein',
	id: 'disp_allg',
	
	tpl: [
		'<table style="font-size: 12px;">',
		'<tr><td>Name: </td><td>{name}</td></tr>',
		'</table>',
		'<table style="font-size: 12px;">',
		'<tr><td>Name: </td><td>{name}</td></tr>',
		'<tr><td>Identifikator (Sammlung): </td><td>{ident}</td></tr>',
		'<tr><td>Georeferenzdaten: </td><td>{georefdat}</td></tr>',
		'<tr><td>Fachstelle des Bundes: </td><td>{fachst}</td></tr>',
		'<tr><td>Zugangsberechtigungsstufe: </td><td>{zugberech}</td></tr>',
		'<tr><td>eCH-Kategorie: </td><td>{echkateg}</td></tr>',
		'<tr><td>Nachführungsrythmus: </td><td>{nachfrhythm}</td></tr>',
		'<tr><td>Nachführungszeitraum: </td><td>{nachfzeitraum}</td></tr>',
		'<tr><td>Datenmenge (in GB): </td><td>{datenmenge}</td></tr>',
		'<tr><td>im Jahr: </td><td>{imjr}</td></tr>',
		'<tr><td>Datenzuwachs (GB pro Jahr): </td><td>{datenzuw}</td></tr>',
		'<tr><td>Bemerkung: </td><td>{bemerk}</td></tr>',
		'</table>'
	]	
});
