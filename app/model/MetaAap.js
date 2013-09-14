Ext.define('Aap.model.MetaAap', {
 	extend: 'Ext.data.Model',
	idgen: 'uuid',
	fields: [
        {name: "id", type: 'string'}, 
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
	],

	proxy: {
		type: 'ajax',
		api: {
			read: 'data/metaaapdata.json'
		},	
		reader: {
			type: 'json',
			root: 'children',
            successProperty: 'success'
		}
	}

});
