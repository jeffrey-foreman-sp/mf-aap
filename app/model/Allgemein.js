Ext.define('Aap.model.Allgemein', {
 	extend: 'Ext.data.Model',
	idgen: 'uuid',
	
	fields: [
        {name: "id", type: 'string'}, 
        {name: "name", type: 'string'}, 
		{name: "ident", type: 'float'}, 
		{name: "georefdat", type: 'boolean'},
		{name: "fachst", type: 'string'}, 
		{name: "zugberech", type: 'string'}, 
		{name: "echkateg", type: 'string'}, 
		{name: "nachfzeitr", type: 'string'}, 
		{name: "datenmenge", type: 'int'}, 
		{name: "imjr", type: 'float'}, 
		{name: "datenzuw", type: 'float'}, 
		{name: "bemerk", type: 'string'}
	],
	
	validations: [
//		{type: 'presence', field: 'name'}
		
	],
			
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/allgemeindata.json'
		},	
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	}

	
});
