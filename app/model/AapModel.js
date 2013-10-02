Ext.define('Aap.model.AapModel', {
 	extend: 'Ext.data.Model',
	idgen: 'uuid',
	
	fields: [
        {name: "id", type: 'string'}, 
        {name: "name", type: 'string'}, 
        {name: "erfass", type: 'date'}, 
        {name: "modif", type: 'date'}, 
        {name: "metanode", type: 'boolean'}, 
		
		{name: "ident"}, 
		{name: "ident_prefix"}, 
		{name: "ident_suffix"}, 
		{name: "georefdat", type: 'string'},
		{name: "fachst", type: 'string'}, 
		{name: "zugberech", type: 'string'}, 
		{name: "zugberech_text", type: 'string'}, 
		{name: "echkateg", type: 'string'}, 
		{name: "echkateg_text", type: 'string'}, 
		{name: "nachfzeitr", type: 'string'}, 
		{name: "nachfrhythm", type: 'string'}, 
		{name: "datenmenge"}, 
		{name: "imjr"}, 
		{name: "datenzuw"}, 
		{name: "bemerk", type: 'string'},
		
		{name: "verf_zs_aufb"}, 
		{name: "verf_zs_begr", type: 'string'}, 
		{name: "verf_zs_inpu", type: 'string'}, 
		{name: "verf_ws_aufb"},
		{name: "verf_ws_begr", type: 'string'}, 
		{name: "verf_ents"}, 
		{name: "verf_beme", type: 'string'}, 
        
   		{name: "arch_zs_bewe", type: 'string'}, 
   		{name: "arch_zs_bewe_text", type: 'string'}, 
		{name: "arch_zs_begr", type: 'string'}, 
		{name: "arch_zs_inpu", type: 'string'},
		{name: "arch_ws_bewe", type: 'string'}, 
		{name: "arch_ws_bewe_text", type: 'string'}, 
		{name: "arch_ws_begr", type: 'string'}, 
		{name: "arch_ba_bewe", type: 'string'}, 
		{name: "arch_ba_bewe_text", type: 'string'}, 
		{name: "arch_ba_begr", type: 'string'}, 

		{name: "arch_arts", type: 'string'}, 
		{name: "arch_ents", type: 'string'}, 
		{name: "arch_ents_text", type: 'string'}, 
		{name: "arch_beme", type: 'string'} 
    ]
});
