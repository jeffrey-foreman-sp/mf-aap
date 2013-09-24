Ext.define('Aap.model.AapModel', {
 	extend: 'Ext.data.Model',
	idgen: 'uuid',
	
	fields: [
        {name: "id", type: 'string'}, 
        {name: "name", type: 'string'}, 
        {name: "erfass", type: 'date'}, 
        {name: "modif", type: 'date'}, 
        {name: "metanode", type: 'boolean'}, 
		
		{name: "ident", type: 'float'}, 
		{name: "georefdat", type: 'boolean'},
		{name: "fachst", type: 'string'}, 
		{name: "zugberech", type: 'string'}, 
		{name: "echkateg", type: 'string'}, 
		{name: "nachfzeitr", type: 'string'}, 
		{name: "nachfrhythm", type: 'string'}, 
		{name: "datenmenge", type: 'int'}, 
		{name: "imjr", type: 'float'}, 
		{name: "datenzuw", type: 'float'}, 
		{name: "bemerk", type: 'string'},
		
		{name: "aufbewzs", type: 'int'}, 
		{name: "begrzs", type: 'string'}, 
		{name: "inpaufb", type: 'string'}, 
		{name: "aufbewws", type: 'int'},
		{name: "begrw", type: 'string'}, 
		{name: "entsaufbew", type: 'int'}, 
		{name: "bemerkaufbew", type: 'string'}, 
        
        {name: "bewzs", type: 'string'}, 
		{name: "begrzs", type: 'string'}, 
		{name: "inparch", type: 'string'}, 
		{name: "bewws", type: 'string'},
		{name: "begrws", type: 'string'}, 
		{name: "bewba", type: 'string'}, 
		{name: "begrba", type: 'string'}, 
		{name: "artsampl", type: 'string'}, 
		{name: "entsarch", type: 'string'}, 
		{name: "bemerkarch", type: 'string'} 
    ]
});
