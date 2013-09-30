Ext.define('Aap.util.Data', {
    statics: {

		chooseEchkateg: function(inp){
			var out = 'unbekannt';
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
		}
		
	}
});

