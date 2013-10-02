Ext.define('Aap.util.Properties', {
    statics: {

		//***********************************************************
		// check whether any metadata has been set in the form
		// input: tree node (object)
		// output: true or false (boolean) 
		//***********************************************************
		hasMetaInput: function() {
			var out1 = false;	
			Ext.getCmp('edit_verf').getForm().getFields().each(function(){
				if (this.getValue()!=null && this.getValue()!="")  {out1 = true; console.log(this)}
			});	
	
			var out2 = false;	
			Ext.getCmp('edit_arch').getForm().getFields().each(function(){
				if (this.getValue()!=null && this.getValue()!="")  {out2 = true; console.log(this)}
			});	

			var  out = false;
			if (out1 == true || out2 == true) {out = true}
			return out;
		},


		//***********************************************************
		// set the metanode property
		// input: node to modify (object), node to check for inheritance (object)
		//***********************************************************
		setMetanodeProperty: function(node, node_to_check) {
//		setMetanodeProperty: function(node) {
			var response = false;
			var mi = Aap.util.Properties.hasMetaInput(node);
			console.log(mi);
			var ii = Aap.util.Tree.isInherited(node_to_check);
			console.log(ii);
			var im = Aap.util.Tree.isMetanode(node_to_check);
			console.log(im);
			if (mi==true && ii==false && im==false) {response = true}
			console.log(response);
			node.set('metanode', response)
		},		



		//***********************************************************
		// calculate the value for the "entsch_arch" property 
		// input: 'A', 'S' or 'N' (string)
		// output:  'A', 'S' or 'N'  (string)
		//***********************************************************
		calcEntsarch: function(a,b,c) {
			var e = '';
			if (a=='A' || b=='A' || c=='A') {e='A'}
			else if (a=='S' || b=='S' || c=='S') {e='S'}
			else if (a=='N' || b=='N' || c=='N') {e='N'}
			else {e=''}
			return e
		},


		//***********************************************************
		// get full description of eCHKategorie 
		// input: form input (string)
		// output: corresponding description (string)
		//***********************************************************
		chooseEchkateg: function(inp){
			var out = '';
			switch (inp){
				case 'A1': out = 'Basiskarten, Landschaftsmodelle'; break;
				case 'A2': out = 'Bodenbedekung, Bodennutzung'; break;
				case 'A3': out = 'Luft-, Satellitenbilder'; break;
				case 'B':  out = 'Ortsangaben, Referenzsysteme'; break;
				case 'C': out = 'Höhen'; break;
				case 'D': out = 'Politische und administrative Grenzen'; break;
				case 'E1': out = 'Raumplanung, Raumentwicklung'; break;
				case 'E2': out = 'Grundstückkataster'; break; 
				case 'F1': out = 'Geologie'; break;
				case 'F2': out = 'Boden'; break; 
				case 'F3': out = 'Naturbedinge Risiken'; break; 
				case 'G': out = 'Wald, Flora, Fauna'; break;
				case 'H': out = 'Meere'; break; 
				case 'I': out = 'Gewässer'; break;
				case 'K': out = 'Atmosphäre, Luft, Klima'; break; 
				case 'L1': out = 'Umweltschutz, Lärm'; break;  
				case 'L2': out = 'Natur- und Landschaftsschutz'; break; 
				case 'M': out = 'Bevölkerung, Gesellschaft, Kultur'; break; 
				case 'N': out = 'Gesundheit'; break; 
				case 'O': out  = 'Gebäude, Anlagen'; break; 
				case 'P': out = 'Verkehr'; break;
				case 'Q1': out = 'Energie'; break; 
				case 'Q2': out = 'Wasser- und Abfallsysteme'; break;  
				case 'Q3': out = 'Kommunikation'; break; 
				case 'R': out = 'Militär, Sicherheit'; break; 
				case 'S': out = 'Landwirtschaft'; break;  
				case 'T': out = 'Wirtschaftliche Aktivitäten'; break;  
			}
			return out;
		},


		//***********************************************************
		// calculate the value for the "entsch_arch" property 
		// input: 'A', 'B' or 'C' (string)
		// output:  Coressponidng description  (string)
		//***********************************************************
		chooseZugangsberech: function(inp){
			var out = '';
			switch (inp){
				case 'A': out = 'öffentlich zugängliche Geobasisdataen'; break;
				case 'B': out = 'beschränkt öffentlich zugängliche Geobasisdaten'; break;
				case 'C': out = 'nicht öffentlich zugängliche Geobasisdatenicht'; break;
			}	
			return out;
		},

	
		//***********************************************************
		// calculate the value for the "arch_zs_bewe", "arch_w_bewe" and "arch_ba_bewe" property 
		// input: 'N', 'S' or 'A' (string)
		// output:  Corresponidng description  (string)
		//***********************************************************
		chooseBewertung: function(inp){
			var out = '';
			switch (inp){
				case 'N': out = 'nicht archievwürdig'; break;
				case 'S': out = 'Sampling / Selektion'; break;
				case 'A': out = 'archievwürdig'; break;
			}
			return out;
		}


		
	}
});

