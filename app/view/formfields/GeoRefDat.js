Ext.define('Aap.view.formfields.GeoRefDat', {
	extend: 'Ext.form.RadioGroup',
	xtype: 'georefdat',

    fieldLabel : 'Georeferenzdaten',
	labelWidth: 130,
	width: 240,
	defaultType: 'radiofield',
    defaults: {
    	flex: 1
    },
    layout: 'hbox',
    items: [
		{
			boxLabel : 'Ja',
			name: 'georefdat',
			inputValue: true
		}, {
			boxLabel: 'Nein',
			name: 'georefdat',
			inputValue: false
		}
	]

});
