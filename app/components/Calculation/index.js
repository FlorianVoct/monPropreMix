/**
*
* Calculation
*
*/

// Pour les niveaux de consommation
export const conso_initiale = {
  elecspe : 100,
  conso_elecspe : 15.4, // en Mtep ?
	transport : 100,
	industrie : 100,
	chauffage : 100,
}

// Pour la population
export const population_initiale = {
  population : 65
}

// Pour le transport
export const transport_initiale = {
  conso_transport : 49.18, // en Mtep
  ener : [2, 3, 4, 5], //2 pour pétrole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
  enertxt : ["Pétrole", "Gaz", "Electricité", "Agrocarburant"], //2 pour p�trole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
  ptg_init : [92, 0, 2, 6], //Les valeurs initiales de pourcentage selon chaque �nergie
  lock_init : [true, true, true, true] // les valeurs initiale de lock dans le mix secteur
}

// Pour le Chauffage
export const chauffage_initiale = {
  conso_chauffage : 53.26, // en Mtep
	ener : [1, 2, 3, 4, 5], //2 pour p�trole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
	enertxt : ["Charbon", "Pétrole", "Gaz", "Electricité", "Bois-énergie (et Divers)"], //2 pour p�trole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
	ptg_init : [1, 20, 41, 19, 19], //Les valeurs initiales de pourcentage selon chaque �nergie
  lock_init : [true, true, true, true, true] // les valeurs initiale de lock dans le mix secteur
}

// Pour l'industrie
export const industrie_initiale = {
  conso_industrie : 36.55, // en Mtep
	ener : [1, 2, 3, 4, 5], //2 pour p�trole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
	enertxt : ["Charbon", "Pétrole", "Gaz", "Electricité", "ENR - Divers"], //2 pour p�trole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
	ptg_init : [13, 24, 27, 30, 6], //Les valeurs initiales de pourcentage selon chaque �nergie
  lock_init : [true, true, true, true, true] // les valeurs initiale de lock dans le mix secteur
}

// Pour l'électtricité
export const electricite_initiale = {
  conso_electricite : 0, // en Mtep
	ptg_conso_electricite : 0, // enn ptg
	ener : [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14], //2 pour p�trole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
	enertxt : ["Charbon","Pétrole", "Gaz", "Nucléaire", "Hydraulique", "Eolien terrestre", "Eolien Offshore", "Energie marine", "Solaire PV", "Bois-énergie", "Biogaz", "Divers"], //2 pour p�trole, 3 pour gaz, 4 pour �lectricit�, 5 pour agrocarburants
	ptg_init : [3, 1, 4, 75, 12, 3, 0, 0, 1, 1, 0, 0], //Les valeurs initiales de pourcentage selon chaque �nergie
  lock_init : [true, true, true, true, true, true, true, true, true, true, true, true], // les valeurs initiale de lock dans le mix secteur
}

// Conversion énergie finale / énergie primaire
export const conversion = {
  conv_elecenr : 0.30,// hypoth�se total... en plus d'�tre une moyenne biogaz/bois etc...
  conv_elecfos : 0.292,
  conv_elecnuc : 0.243,
  conv_gaz : 0.95,
  conv_charbon : 0.82,
  conv_petrole : 0.81,
  conv_enr : 0.63,
}

// Pour les GES
export const emmissionGES = {
  emission1990 : 383.3,
  emissionfacteur4 : 383.3/4,
  emission_charbon : 4.1,
  emission_petrole : 3.0,
  emission_gaz : 2.4,
}


// Pour les textes
export const enertxt =  ["Charbon", "Pétrole", "Gaz",
"Nucléaire", "Biomasse", "Hydraulique",
"Eoliennes", "Solaire PV", "Divers et déchets"];

// Pour les couleurs des graphiques
// export const color = {
//   charbon : Color(139, 69, 19);
//   petrole : Color.red;//new Color(238, 0, 0);
//   gaz : new Color(250, 154, 12);//orange fonc�
//   nucleaire : new Color(139, 10, 80);
//   enr : Color.green.darker();//new Color(34, 139, 34);
//   electricite : Color.yellow;
//   photovoltaique : Color.yellow;
//   hydro : Color.blue.darker();
//   eolienter : new Color(0, 255, 255);
//   eolienmer : new Color(192, 192, 192);
//   marines : new Color(255, 255, 255);
//   bois : Color.green.darker();
//   biogaz : Color.green;
//   divers : new Color(128, 64, 64);;
// }

export function calculMixEnergetique(conso, ptg_transport, ptg_chauffage, ptg_industrie,
  ptg_electricite){
  let energie = [];
	let ptg_energie = [];

	// Pour l'électricité
	let conso_electricite = (ptg_chauffage[3]*chauffage_initiale.conso_chauffage*conso.chauffage+
						ptg_industrie[3]*industrie_initiale.conso_industrie*conso.industrie+
						ptg_transport[2]*transport_initiale.conso_transport*conso.transport+
						conso.elecspe*conso_initiale.conso_elecspe*100)/10000;
	let ptg_conso_electricite= Math.round(conso_electricite*100/38.6461, 0);

	// Charbon
	energie[0]=(ptg_chauffage[0]*chauffage_initiale.conso_chauffage*conso.chauffage+
				ptg_industrie[0]*industrie_initiale.conso_industrie*conso.industrie)/(conversion.conv_charbon*10000)+
				ptg_electricite[0]*conso_electricite/(conversion.conv_elecfos*100);

	// Pétrole
	energie[1]=(ptg_chauffage[1]*chauffage_initiale.conso_chauffage*conso.chauffage+
			ptg_industrie[1]*industrie_initiale.conso_industrie*conso.industrie+
			ptg_transport[0]*transport_initiale.conso_transport*conso.transport)/(conversion.conv_petrole*10000)+
			ptg_electricite[1]*conso_electricite/(100*conversion.conv_elecfos);

	// Gaz
	energie[2]=(ptg_chauffage[2]*chauffage_initiale.conso_chauffage*conso.chauffage+
			ptg_industrie[2]*industrie_initiale.conso_industrie*conso.industrie+
			ptg_transport[1]*transport_initiale.conso_transport*conso.transport)/(conversion.conv_gaz*10000)+
			ptg_electricite[2]*conso_electricite/(conversion.conv_elecfos*100);

	// Nucl�aire
	energie[3]=ptg_electricite[3]*conso_electricite/(100*conversion.conv_elecnuc);

	// ENR bient�t biomass
	energie[4]=(ptg_chauffage[4]*chauffage_initiale.conso_chauffage*conso.chauffage+
			ptg_transport[3]*transport_initiale.conso_transport*conso.transport)/(conversion.conv_enr*10000)+
			(ptg_electricite[9]+ptg_electricite[10])*conso_electricite/(conversion.conv_elecenr*100);

	// Hydro + Marines
	energie[5]= (ptg_electricite[4]+ptg_electricite[7])*conso_electricite/100;

	// Eolien terrestre+offshore
	energie[6]=(ptg_electricite[5]+ptg_electricite[6])*conso_electricite/100;

	// Solaire PV
	energie[7]=ptg_electricite[8]*conso_electricite/100;

	// Divers et d�chets
	energie[8]=ptg_electricite[11]*conso_electricite/(conversion.conv_elecenr*100)+
			ptg_industrie[4]*industrie_initiale.conso_industrie*conso.industrie/(conversion.conv_enr*10000);


	return energie;
}

// // Pour conaitre les �missions de GES
// 		public static float [] calcul_ges(float [] ener_fos){
// 			float [] ges = new float [4];
// 			ges[0]=(ener_fos[0]*emission_charbon+ener_fos[1]*emission_petrole+
// 					ener_fos[2]*emission_gaz)/population_initiale;
// 			ges[1]=ener_fos[0]*emission_charbon+ener_fos[1]*emission_petrole+
// 					ener_fos[2]*emission_gaz;
//
// 			return ges;
// 		}
//
//
	// Pour toujours avoir 100 de total de pourcentage d'énergie dans un secteur
	export function calculEnergieMixSecteur(mixEnergieSecteur){
    let cadenas = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, true];
		let mixEnergieSecteurTemp = mixEnergieSecteur;
		let somme = 0;
		let somme_bloquee = 0;
		for(let i = 0; i < mixEnergieSecteurTemp.length; i++)
		{
			somme=somme+mixEnergieSecteurTemp[i];
			if(cadenas[i]==false)
			{
				somme_bloquee=somme_bloquee+mixEnergieSecteurTemp[i];
				if(somme_bloquee>=100)
				{cadenas[i]=true;
				somme_bloquee=somme_bloquee-mixEnergieSecteurTemp[i];}
			}
		}
		while(somme!=100){
			if(somme>100){
				for(let i=0; i<mixEnergieSecteurTemp.length;i++)
				{if(cadenas[i]==true && somme>100 && mixEnergieSecteurTemp[i]>0){
					mixEnergieSecteurTemp[i]--;
					somme--;
				}
				}
			}
			else{
				for(let i=0; i<mixEnergieSecteurTemp.length;i++)
				{if(cadenas[i]==true && somme<100){
					mixEnergieSecteurTemp[i]++;
					somme++;
				}
				}
			}
		}
		return mixEnergieSecteurTemp;
	}
