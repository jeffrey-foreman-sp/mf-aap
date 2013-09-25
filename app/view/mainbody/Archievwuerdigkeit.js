Ext.define('Aap.view.mainbody.Archievwuerdigkeit',{
	extend: 'Ext.form.FormPanel',
	xtype: 'archievwuerdigkeit',
	store: 'AapStore', 
	alias: 'widget.archievwuerdigkeit',
	bodyPadding: 10,
	id: 'disp_arch',
	tpl: [
		'<p>Zuständige Stelle</p>',
		'<p>Bewertung r+a: <strong>{bewzs}</strong></p>',
		'<p>Begründung: <strong>{begrzs}</strong></p>',
		'<p>Input durch: <strong>{inparch}</strong></p>',
		'<p>Weitere Stellen</p>',
		'<p>Bewertung r+a: <strong>{bewws}</strong></p>',
		'<p>Begründung: <strong>{begrws}</strong></p>',
		'<p>Bundesarchiv</p>',
		'<p>Bewertung h+s: <strong>{bewba}</strong></p>',
		'<p>Begründung: <strong>{begrba}</strong></p>',
		'<p>Art Sampling / Selektion: <strong>{artsampl}</strong></p>',
		'<p>Entscheid Archivwuerdigkeit: <strong>{entsarch}</strong></p>',
		'<p>Bemerkungen: <strong>{bemerkarch}</strong></p>'
	]	
});


