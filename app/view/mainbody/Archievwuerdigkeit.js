Ext.define('Aap.view.mainbody.Archievwuerdigkeit',{
	extend: 'Ext.form.FormPanel',
	xtype: 'archievwuerdigkeit',
	store: 'AapStore', 
	alias: 'widget.archievwuerdigkeit',
	bodyPadding: 10,
	id: 'disp_arch',
	tpl: [
		'<p>Zuständige Stelle</p>',
		'<p>Bewertung r+a: {bwezs}</p>',
		'<p>Begründung: {begrzs}</p>',
		'<p>Input durch: {inparch}</p>',
		'<p>Weitere Stellen</p>',
		'<p>Bewertung r+a: {bewws}</p>',
		'<p>Begründung: {begrws}</p>',
		'<p>Bundesarchiv</p>',
		'<p>Bewertung h+s: {bewba}</p>',
		'<p>Begründung: {begrba}</p>',
		'<p>Art Sampling / Selektion: {artsampl}</p>',
		'<p>Entscheid Archivwuerdigkeit: {entarch}</p>',
		'<p>Bemerkungen: {bemerkarch}</p>'
	]	
});


