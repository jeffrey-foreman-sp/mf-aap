Ext.define('Aap.view.mainbody.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	store: 'AapStore', 
	xtype: 'verfuegbarkeit',
	alias: 'widget.verfuegbarkeit',
	bodyPadding: 10,
	id: 'disp_verf',
	tpl: [
		'<p>Zuständige Stelle</p>',
		'<p>Aufbewahrungsfrist: <strong>{aufbewzs}</strong></strong></p>',
		'<p>Begründung: <strong>{begrzs}</strong></p>',
		'<p>Input durch: <strong>{inpaufb}</strong></p>',
		'<p>Weitere Stellen</p>',
		'<p>Aufbewahrungsfrist: <strong>{aufbewws}</strong></p>',
		'<p>Begründung: <strong>{begrw}</strong></p>',
		'<p>Entscheid Aufbewahrungsfrist: <strong>{entsaufbew}</strong></p>',
		'<p>Bemerkungen: <strong>{bemerkaufbew}</strong></p>'
	]
});
