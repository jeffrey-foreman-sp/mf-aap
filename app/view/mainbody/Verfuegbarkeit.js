Ext.define('Aap.view.mainbody.Verfuegbarkeit',{
	extend: 'Ext.form.Panel',
	store: 'Allgemein', 
	xtype: 'verfuegbarkeit',
	alias: 'widget.verfuegbarkeit',
	bodyPadding: 10,
	id: 'disp_verf',
	tpl: [
		'<p>Zuständige Stelle</p>',
		'<p>Begründung: {begrzs}</p>',
		'<p>Input durch: {inpaufb}</p>',
		'<p>Weitere Stellen</p>',
		'<p>Aufbewahrungsfrist: aufbewws</p>',
		'<p>Begründung: {begrw}</p>',
		'<p>Entscheid Aufbewahrungsfrist: {entsaufbew}</p>',
		'<p>Bemerkungen: {bemerkaufbew}</p>'
	]
});
