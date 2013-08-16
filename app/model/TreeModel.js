Ext.define('Aap.model.TreeModel', {
    extend: 'Ext.data.Model',
	fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' }
    ],
	data  : [
		{ "id": 1, "name": "Phil", "leaf": true },
    	{ "id": 2, "name": "Nico", "expanded": true, "children": [
    		{ "id": 3, "name": "Mitchell", "leaf": true }
    	]},
       		{ "id": 4, "name": "Sue", "loaded": true }
       	]
	
});
