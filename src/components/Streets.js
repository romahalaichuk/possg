const streets = [
	{
		id: 1,
		ulica: "1 Maja",
		dzielnica: "Wola",
	},
	{
		id: 2,
		ulica: "1 Pułku Praskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3,
		ulica: "1 Sierpnia",
		dzielnica: "Włochy",
	},
	{
		id: 4,
		ulica: "2 Armii Wojska Polskiego",
		dzielnica: "Bielany",
	},
	{
		id: 5,
		ulica: "al. 3 Maja",
		dzielnica: "Śródmieście",
	},
	{
		id: 6,
		ulica: "6 Sierpnia",
		dzielnica: "Ochota",
	},
	{
		id: 7,
		ulica: "11 Listopada",
		dzielnica: "Praga-Północ",
	},
	{
		id: 8,
		ulica: "17 Stycznia",
		dzielnica: "Włochy",
	},
	{
		id: 9,
		ulica: "pl. 1905 r.",
		dzielnica: "Wola",
	},
	{
		id: 10,
		ulica: "21 Pułku Piechoty Dzieci Warszawy",
		dzielnica: "Bemowo",
	},
	{
		id: 11,
		ulica: "27 Grudnia",
		dzielnica: "Wola",
	},
	{
		id: 12,
		ulica: "29 Listopada",
		dzielnica: "Praga-Południe",
	},
	{
		id: 13,
		ulica: "I Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 14,
		ulica: "II Armii Wojska Polskiego",
		dzielnica: "Bielany",
	},
	{
		id: 15,
		ulica: "II Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 16,
		ulica: "III Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 17,
		ulica: "IV Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 18,
		ulica: "V Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 19,
		ulica: "VI Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 20,
		ulica: "VIII Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 21,
		ulica: "X Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 22,
		ulica: "IX Poprzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 23,
		ulica: "Abrahama",
		dzielnica: "Praga-Południe",
	},
	{
		id: 24,
		ulica: "Abramowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 25,
		ulica: "Achera",
		dzielnica: "Ursus",
	},
	{
		id: 26,
		ulica: "Achillesa",
		dzielnica: "Ursynów",
	},
	{
		id: 27,
		ulica: "Adamieckiego",
		dzielnica: "Bielany",
	},
	{
		id: 28,
		ulica: "Adampolska",
		dzielnica: "Wawer",
	},
	{
		id: 29,
		ulica: "Admiralska",
		dzielnica: "Białołęka",
	},
	{
		id: 30,
		ulica: "Adriatycka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 31,
		ulica: "Afrodyty",
		dzielnica: "Białołęka",
	},
	{
		id: 32,
		ulica: "Afrykańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 33,
		ulica: "Agatowa",
		dzielnica: "Wawer",
	},
	{
		id: 34,
		ulica: "Agawy",
		dzielnica: "Wawer",
	},
	{
		id: 35,
		ulica: "Agnieszki",
		dzielnica: "Wawer",
	},
	{
		id: 36,
		ulica: "Agrarna",
		dzielnica: "Wawer",
	},
	{
		id: 37,
		ulica: "Agrestowa",
		dzielnica: "Wawer",
	},
	{
		id: 38,
		ulica: "Agrykola",
		dzielnica: "Śródmieście",
	},
	{
		id: 39,
		ulica: "Akacjowa",
		dzielnica: "Wawer",
	},
	{
		id: 40,
		ulica: "Akademicka",
		dzielnica: "Ochota",
	},
	{
		id: 41,
		ulica: "Akantu",
		dzielnica: "Białołęka",
	},
	{
		id: 42,
		ulica: "Akcent",
		dzielnica: "Białołęka",
	},
	{
		id: 43,
		ulica: "Akermańska",
		dzielnica: "Wawer",
	},
	{
		id: 44,
		ulica: "Aksamitna",
		dzielnica: "Wawer",
	},
	{
		id: 45,
		ulica: "Aktorska",
		dzielnica: "Mokotów",
	},
	{
		id: 46,
		ulica: "Akurat",
		dzielnica: "Wawer",
	},
	{
		id: 47,
		ulica: "Akustyczna",
		dzielnica: "Wawer",
	},
	{
		id: 48,
		ulica: "Akwarelowa",
		dzielnica: "Wawer",
	},
	{
		id: 49,
		ulica: "Albatrosów",
		dzielnica: "Włochy",
	},
	{
		id: 50,
		ulica: "Algierska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 51,
		ulica: "Alpejska",
		dzielnica: "Wawer",
	},
	{
		id: 52,
		ulica: "Alternatywy",
		dzielnica: "Ursynów",
	},
	{
		id: 53,
		ulica: "Altowa",
		dzielnica: "Włochy",
	},
	{
		id: 54,
		ulica: "Aluzyjna",
		dzielnica: "Białołęka",
	},
	{
		id: 55,
		ulica: "Alzacka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 56,
		ulica: "Amałowicza",
		dzielnica: "Wawer",
	},
	{
		id: 57,
		ulica: "Ambaras",
		dzielnica: "Wawer",
	},
	{
		id: 58,
		ulica: "Amelińska",
		dzielnica: "Białołęka",
	},
	{
		id: 59,
		ulica: "Amundsena",
		dzielnica: "Ursynów",
	},
	{
		id: 60,
		ulica: "Andersa",
		dzielnica: "Śródmieście",
	},
	{
		id: 61,
		ulica: "Andersena",
		dzielnica: "Bielany",
	},
	{
		id: 62,
		ulica: "Andriollego",
		dzielnica: "Wawer",
	},
	{
		id: 63,
		ulica: "Andromedy",
		dzielnica: "Białołęka",
	},
	{
		id: 64,
		ulica: "Andrutowa",
		dzielnica: "Wawer",
	},
	{
		id: 65,
		ulica: "Andrychowska",
		dzielnica: "Wola",
	},
	{
		id: 66,
		ulica: "Andrzejowska",
		dzielnica: "Ochota",
	},
	{
		id: 67,
		ulica: "Andyjska",
		dzielnica: "Wawer",
	},
	{
		id: 68,
		ulica: "Anecińska",
		dzielnica: "Wawer",
	},
	{
		id: 69,
		ulica: "Angorska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 70,
		ulica: "Anielewicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 71,
		ulica: "Anilinowa",
		dzielnica: "Wawer",
	},
	{
		id: 72,
		ulica: "Annopol",
		dzielnica: "Białołęka",
	},
	{
		id: 73,
		ulica: "Anny Jagiellonki",
		dzielnica: "Wawer",
	},
	{
		id: 74,
		ulica: "Antalla",
		dzielnica: "Białołęka",
	},
	{
		id: 75,
		ulica: "Antenowa",
		dzielnica: "Wawer",
	},
	{
		id: 76,
		ulica: "Antka Rozpylacza",
		dzielnica: "Wola",
	},
	{
		id: 77,
		ulica: "Antoniewska",
		dzielnica: "Mokotów",
	},
	{
		id: 78,
		ulica: "Antyczna",
		dzielnica: "Wawer",
	},
	{
		id: 79,
		ulica: "Anyżkowa",
		dzielnica: "Wawer",
	},
	{
		id: 80,
		ulica: "Apartamentowa",
		dzielnica: "Wawer",
	},
	{
		id: 81,
		ulica: "Apenińska",
		dzielnica: "Wawer",
	},
	{
		id: 82,
		ulica: "Apollina",
		dzielnica: "Białołęka",
	},
	{
		id: 83,
		ulica: "Apteczna",
		dzielnica: "Wawer",
	},
	{
		id: 84,
		ulica: "Arabska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 85,
		ulica: "Arachidowa",
		dzielnica: "Wawer",
	},
	{
		id: 86,
		ulica: "Arbuzowa",
		dzielnica: "Wawer",
	},
	{
		id: 87,
		ulica: "Archimedesa",
		dzielnica: "Białołęka",
	},
	{
		id: 88,
		ulica: "Archiwalna",
		dzielnica: "Wawer",
	},
	{
		id: 89,
		ulica: "Arciszewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 90,
		ulica: "Arctowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 91,
		ulica: "Argentyńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 92,
		ulica: "park Arkadia",
		dzielnica: "Mokotów",
	},
	{
		id: 93,
		ulica: "Arkadowa",
		dzielnica: "Wawer",
	},
	{
		id: 94,
		ulica: "Arki Bożka",
		dzielnica: "Wawer",
	},
	{
		id: 95,
		ulica: "Arktyczna",
		dzielnica: "Białołęka",
	},
	{
		id: 96,
		ulica: "Arkuszowa",
		dzielnica: "Bielany",
	},
	{
		id: 97,
		ulica: "Armatnia",
		dzielnica: "Wola",
	},
	{
		id: 98,
		ulica: "al. Armii Krajowej",
		dzielnica: "Bielany",
	},
	{
		id: 99,
		ulica: "al. Armii Ludowej",
		dzielnica: "Śródmieście",
	},
	{
		id: 100,
		ulica: "Arniki",
		dzielnica: "Wawer",
	},
	{
		id: 101,
		ulica: "Aroniowa",
		dzielnica: "Wawer",
	},
	{
		id: 102,
		ulica: "Arrasowa",
		dzielnica: "Wawer",
	},
	{
		id: 103,
		ulica: "Arsenalska",
		dzielnica: "Śródmieście",
	},
	{
		id: 104,
		ulica: "Artemidy",
		dzielnica: "Białołęka",
	},
	{
		id: 105,
		ulica: "Artyleryjska",
		dzielnica: "Wola",
	},
	{
		id: 106,
		ulica: "Asfaltowa",
		dzielnica: "Mokotów",
	},
	{
		id: 107,
		ulica: "Askenazego",
		dzielnica: "Białołęka",
	},
	{
		id: 108,
		ulica: "Asnyka",
		dzielnica: "Bielany",
	},
	{
		id: 109,
		ulica: "Aspekt",
		dzielnica: "Bielany",
	},
	{
		id: 110,
		ulica: "Astronautów",
		dzielnica: "Włochy",
	},
	{
		id: 111,
		ulica: "Astronomów",
		dzielnica: "Wola",
	},
	{
		id: 112,
		ulica: "Ateńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 113,
		ulica: "Atlasowa",
		dzielnica: "Ursus",
	},
	{
		id: 114,
		ulica: "Atutowa",
		dzielnica: "Wawer",
	},
	{
		id: 115,
		ulica: "Augustówka",
		dzielnica: "Mokotów",
	},
	{
		id: 116,
		ulica: "Awionetki RWD",
		dzielnica: "Bemowo",
	},
	{
		id: 117,
		ulica: "Axentowicza",
		dzielnica: "Białołęka",
	},
	{
		id: 118,
		ulica: "Azaliowa",
		dzielnica: "Wawer",
	},
	{
		id: 119,
		ulica: "Babicka",
		dzielnica: "Białołęka",
	},
	{
		id: 120,
		ulica: "Babie Lato",
		dzielnica: "Wawer",
	},
	{
		id: 121,
		ulica: "Babimojska",
		dzielnica: "Wawer",
	},
	{
		id: 122,
		ulica: "Babinicza",
		dzielnica: "Wawer",
	},
	{
		id: 123,
		ulica: "Baborowska",
		dzielnica: "Wawer",
	},
	{
		id: 124,
		ulica: "Baboszewska",
		dzielnica: "Mokotów",
	},
	{
		id: 125,
		ulica: "Bacewiczówny",
		dzielnica: "Białołęka",
	},
	{
		id: 126,
		ulica: "Bacha",
		dzielnica: "Mokotów",
	},
	{
		id: 127,
		ulica: "Bachmacka",
		dzielnica: "Wola",
	},
	{
		id: 128,
		ulica: "Bachusa",
		dzielnica: "Wawer",
	},
	{
		id: 129,
		ulica: "Baczyńskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 130,
		ulica: "Badowska",
		dzielnica: "Wawer",
	},
	{
		id: 131,
		ulica: "Badylarska",
		dzielnica: "Włochy",
	},
	{
		id: 132,
		ulica: "Bagatela",
		dzielnica: "Śródmieście",
	},
	{
		id: 133,
		ulica: "Bagno",
		dzielnica: "Śródmieście",
	},
	{
		id: 134,
		ulica: "Bailly",
		dzielnica: "Wawer",
	},
	{
		id: 135,
		ulica: "Bajana",
		dzielnica: "Bemowo",
	},
	{
		id: 136,
		ulica: "Bajeczna",
		dzielnica: "Wawer",
	},
	{
		id: 137,
		ulica: "Bajkowa",
		dzielnica: "Wawer",
	},
	{
		id: 138,
		ulica: "Bajońska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 139,
		ulica: "Bakalarska",
		dzielnica: "Włochy",
	},
	{
		id: 140,
		ulica: "Bakaliowa",
		dzielnica: "Wawer",
	},
	{
		id: 141,
		ulica: "Balaton",
		dzielnica: "Praga-Południe",
	},
	{
		id: 142,
		ulica: "Balbinki",
		dzielnica: "Wawer",
	},
	{
		id: 143,
		ulica: "Balcerzaka",
		dzielnica: "Wawer",
	},
	{
		id: 144,
		ulica: "Baletowa",
		dzielnica: "Ursynów",
	},
	{
		id: 145,
		ulica: "Baleya",
		dzielnica: "Ochota",
	},
	{
		id: 146,
		ulica: "Balkonowa",
		dzielnica: "Wawer",
	},
	{
		id: 147,
		ulica: "Balladyny",
		dzielnica: "Ursynów",
	},
	{
		id: 148,
		ulica: "Balonowa",
		dzielnica: "Włochy",
	},
	{
		id: 149,
		ulica: "Balzaka",
		dzielnica: "Ursynów",
	},
	{
		id: 150,
		ulica: "Baló",
		dzielnica: "Wawer",
	},
	{
		id: 151,
		ulica: "Bałuckiego",
		dzielnica: "Mokotów",
	},
	{
		id: 152,
		ulica: "Bambusowa",
		dzielnica: "Wawer",
	},
	{
		id: 153,
		ulica: "Banacha",
		dzielnica: "Ochota",
	},
	{
		id: 154,
		ulica: "Bananowa",
		dzielnica: "Wawer",
	},
	{
		id: 155,
		ulica: "Banderii",
		dzielnica: "Wola",
	},
	{
		id: 156,
		ulica: "Bandurskiego",
		dzielnica: "Wola",
	},
	{
		id: 157,
		ulica: "pl. Bankowy",
		dzielnica: "Śródmieście",
	},
	{
		id: 158,
		ulica: 'Baonu "Zośka"',
		dzielnica: "Wola",
	},
	{
		id: 159,
		ulica: "Baranowska",
		dzielnica: "Mokotów",
	},
	{
		id: 160,
		ulica: "św. Barbary",
		dzielnica: "Śródmieście",
	},
	{
		id: 161,
		ulica: "Barbórki",
		dzielnica: "Wola",
	},
	{
		id: 162,
		ulica: "Barcelońska",
		dzielnica: "Mokotów",
	},
	{
		id: 163,
		ulica: "Barcewicza",
		dzielnica: "Bielany",
	},
	{
		id: 164,
		ulica: "Barcicka",
		dzielnica: "Bielany",
	},
	{
		id: 165,
		ulica: "Bardiniego",
		dzielnica: "Bielany",
	},
	{
		id: 166,
		ulica: "Bardowskiego",
		dzielnica: "Bielany",
	},
	{
		id: 167,
		ulica: "Barei",
		dzielnica: "Bielany",
	},
	{
		id: 168,
		ulica: "Barkocińska",
		dzielnica: "Targówek",
	},
	{
		id: 169,
		ulica: "Barlickiego",
		dzielnica: "Ochota",
	},
	{
		id: 170,
		ulica: "Barokowa",
		dzielnica: "Muranów - Śródmieście",
	},
	{
		id: 171,
		ulica: "Barska",
		dzielnica: "Ochota",
	},
	{
		id: 172,
		ulica: "Barska (przy placu Narutowicza)",
		dzielnica: "Ochota",
	},
	{
		id: 173,
		ulica: "Bartnicza",
		dzielnica: "Targówek",
	},
	{
		id: 174,
		ulica: "Bartoka",
		dzielnica: "Ursynów",
	},
	{
		id: 175,
		ulica: "Bartosika",
		dzielnica: "Praga-Południe",
	},
	{
		id: 176,
		ulica: "Bartoszewicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 177,
		ulica: "Bartoszka",
		dzielnica: "Wawer",
	},
	{
		id: 178,
		ulica: "Bartoszycka",
		dzielnica: "Bielany",
	},
	{
		id: 179,
		ulica: "Bartycka",
		dzielnica: "Czerniaków - Mokotów",
	},
	{
		id: 180,
		ulica: "Bartłomieja",
		dzielnica: "Bielany",
	},
	{
		id: 181,
		ulica: "Barwna",
		dzielnica: "Włochy",
	},
	{
		id: 182,
		ulica: "Barwnicza",
		dzielnica: "Włochy",
	},
	{
		id: 183,
		ulica: 'Batalionu "Miotła"',
		dzielnica: "Wola",
	},
	{
		id: 184,
		ulica: 'Batalionu "Parasol"',
		dzielnica: "Wola",
	},
	{
		id: 185,
		ulica: 'Batalionu "Pięść"',
		dzielnica: "Wola",
	},
	{
		id: 186,
		ulica: 'Batalionu "Włochy"',
		dzielnica: "Włochy",
	},
	{
		id: 187,
		ulica: "Batalionu Platerówek",
		dzielnica: "Wola",
	},
	{
		id: 188,
		ulica: "Batalionów Chłopskich",
		dzielnica: "Wola",
	},
	{
		id: 189,
		ulica: "Batorego",
		dzielnica: "Mokotów",
	},
	{
		id: 190,
		ulica: "Batumi",
		dzielnica: "Ochota",
	},
	{
		id: 191,
		ulica: "Batuty",
		dzielnica: "Ursynów",
	},
	{
		id: 192,
		ulica: "Batystowa",
		dzielnica: "Wawer",
	},
	{
		id: 193,
		ulica: "Bawełniana",
		dzielnica: "Wawer",
	},
	{
		id: 194,
		ulica: "Bazyliańska",
		dzielnica: "Targówek",
	},
	{
		id: 195,
		ulica: "Bałuckiego",
		dzielnica: "Mokotów",
	},
	{
		id: 196,
		ulica: "Baśniowa",
		dzielnica: "Ochota",
	},
	{
		id: 197,
		ulica: "Bażancia",
		dzielnica: "Wawer",
	},
	{
		id: 198,
		ulica: "Bednarska",
		dzielnica: "Śródmieście Północne - Śródmieście",
	},
	{
		id: 199,
		ulica: "Begonii",
		dzielnica: "Wawer",
	},
	{
		id: 200,
		ulica: "Bekasów",
		dzielnica: "Wawer",
	},
	{
		id: 201,
		ulica: "Belgijska",
		dzielnica: "Mokotów",
	},
	{
		id: 202,
		ulica: "Belgradzka",
		dzielnica: "Ursynów",
	},
	{
		id: 203,
		ulica: "Bellony",
		dzielnica: "Bielany",
	},
	{
		id: 204,
		ulica: "Bellottiego",
		dzielnica: "Wola",
	},
	{
		id: 205,
		ulica: "Belwederska",
		dzielnica: "Mokotów",
	},
	{
		id: 206,
		ulica: "Bema",
		dzielnica: "Wola",
	},
	{
		id: 207,
		ulica: "Benedykta",
		dzielnica: "Wawer",
	},
	{
		id: 208,
		ulica: "Bennetta",
		dzielnica: "Wawer",
	},
	{
		id: 209,
		ulica: "Berensona",
		dzielnica: "Białołęka",
	},
	{
		id: 210,
		ulica: "Berenta",
		dzielnica: "Ochota",
	},
	{
		id: 211,
		ulica: "Berestecka",
		dzielnica: "Wawer",
	},
	{
		id: 212,
		ulica: "Berezyńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 213,
		ulica: "Bernardyńska",
		dzielnica: "Mokotów",
	},
	{
		id: 214,
		ulica: "Berneńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 215,
		ulica: "Beskidzka",
		dzielnica: "Wawer",
	},
	{
		id: 216,
		ulica: "Bełchatowska",
		dzielnica: "Wawer",
	},
	{
		id: 217,
		ulica: "Bełdan",
		dzielnica: "Mokotów",
	},
	{
		id: 218,
		ulica: "Bełska",
		dzielnica: "Mokotów",
	},
	{
		id: 219,
		ulica: "Bełzy",
		dzielnica: "Wawer",
	},
	{
		id: 220,
		ulica: "Będzińska",
		dzielnica: "Wawer",
	},
	{
		id: 221,
		ulica: "Biała",
		dzielnica: "Mirów - Wola",
	},
	{
		id: 222,
		ulica: "Białoborska",
		dzielnica: "Wawer",
	},
	{
		id: 223,
		ulica: "Białobrzeska",
		dzielnica: "Ochota",
	},
	{
		id: 224,
		ulica: "Białoskórnicza",
		dzielnica: "Powiśle - Śródmieście",
	},
	{
		id: 225,
		ulica: "Białostocka",
		dzielnica: "Praga-Północ",
	},
	{
		id: 226,
		ulica: "Białowiejska",
		dzielnica: "Wawer",
	},
	{
		id: 227,
		ulica: "Białowieska",
		dzielnica: "Wawer",
	},
	{
		id: 228,
		ulica: "Białozora",
		dzielnica: "Wawer",
	},
	{
		id: 229,
		ulica: "Białołęcka",
		dzielnica: "Białołęka",
	},
	{
		id: 230,
		ulica: "Biały Kamień",
		dzielnica: "Mokotów",
	},
	{
		id: 231,
		ulica: "Biedronki",
		dzielnica: "Wawer",
	},
	{
		id: 232,
		ulica: "Bielawska",
		dzielnica: "Mokotów",
	},
	{
		id: 233,
		ulica: "Bielańska",
		dzielnica: "Śródmieście Północne - Śródmieście",
	},
	{
		id: 234,
		ulica: "Bielska",
		dzielnica: "Wawer",
	},
	{
		id: 235,
		ulica: "Bielskiego",
		dzielnica: "Wawer",
	},
	{
		id: 236,
		ulica: "Bielszowicka",
		dzielnica: "Wawer",
	},
	{
		id: 237,
		ulica: "Bieniewicka",
		dzielnica: "Wawer",
	},
	{
		id: 238,
		ulica: "Biernacka",
		dzielnica: "Wawer",
	},
	{
		id: 239,
		ulica: "Biernata z Lublina",
		dzielnica: "Wawer",
	},
	{
		id: 240,
		ulica: "Bieszczadzka",
		dzielnica: "Wawer",
	},
	{
		id: 241,
		ulica: "Bieżanowska",
		dzielnica: "Wawer",
	},
	{
		id: 242,
		ulica: "Bieżuńska",
		dzielnica: "Wawer",
	},
	{
		id: 243,
		ulica: "Biruty",
		dzielnica: "Wawer",
	},
	{
		id: 244,
		ulica: "Biskupia",
		dzielnica: "Wawer",
	},
	{
		id: 245,
		ulica: "Bitwy Warszawskiej 1920 r.",
		dzielnica: "Ochota",
	},
	{
		id: 246,
		ulica: "Bitwy pod Lenino",
		dzielnica: "Wawer",
	},
	{
		id: 247,
		ulica: "Bitwy pod Rokitną",
		dzielnica: "Wawer",
	},
	{
		id: 248,
		ulica: "Biwakowa",
		dzielnica: "Wawer",
	},
	{
		id: 249,
		ulica: "Blacharska",
		dzielnica: "Wawer",
	},
	{
		id: 250,
		ulica: "Blaszana",
		dzielnica: "Wawer",
	},
	{
		id: 251,
		ulica: "Blatona",
		dzielnica: "Bemowo",
	},
	{
		id: 252,
		ulica: "Bliska",
		dzielnica: "Wola",
	},
	{
		id: 253,
		ulica: "Blokowa",
		dzielnica: "Targówek",
	},
	{
		id: 254,
		ulica: "Bluszczańska",
		dzielnica: "Mokotów",
	},
	{
		id: 255,
		ulica: "Bluszczowa",
		dzielnica: "Wawer",
	},
	{
		id: 256,
		ulica: "Bławatków",
		dzielnica: "Białołęka",
	},
	{
		id: 257,
		ulica: "Błażeja",
		dzielnica: "Bielany",
	},
	{
		id: 258,
		ulica: "Błotna",
		dzielnica: "Wawer",
	},
	{
		id: 259,
		ulica: "Błędowska",
		dzielnica: "Wawer",
	},
	{
		id: 260,
		ulica: "Błękitna",
		dzielnica: "Wawer",
	},
	{
		id: 261,
		ulica: "św. Boboli",
		dzielnica: "Mokotów",
	},
	{
		id: 262,
		ulica: "Bobrowiecka",
		dzielnica: "Mokotów",
	},
	{
		id: 263,
		ulica: "Bobrowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 264,
		ulica: "Bocheńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 265,
		ulica: "Bocheńskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 266,
		ulica: "Bociania",
		dzielnica: "Wawer",
	},
	{
		id: 267,
		ulica: "Boczańska",
		dzielnica: "Wawer",
	},
	{
		id: 268,
		ulica: "Boczna",
		dzielnica: "Wawer",
	},
	{
		id: 269,
		ulica: "Boduena",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 270,
		ulica: "Bodycha",
		dzielnica: "Ursus",
	},
	{
		id: 271,
		ulica: "Bogatki",
		dzielnica: "Wawer",
	},
	{
		id: 272,
		ulica: "Bogatyńska",
		dzielnica: "Wawer",
	},
	{
		id: 273,
		ulica: "Boglarczyków",
		dzielnica: "Wawer",
	},
	{
		id: 274,
		ulica: "Bogoriów",
		dzielnica: "Wawer",
	},
	{
		id: 275,
		ulica: "Boguckiego",
		dzielnica: "Wawer",
	},
	{
		id: 276,
		ulica: "Bogumińska",
		dzielnica: "Wawer",
	},
	{
		id: 277,
		ulica: "Bogunki",
		dzielnica: "Wawer",
	},
	{
		id: 278,
		ulica: "Boguszewska",
		dzielnica: "Wola",
	},
	{
		id: 279,
		ulica: "Bogusławskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 280,
		ulica: "Bohaterewicza",
		dzielnica: "Wawer",
	},
	{
		id: 281,
		ulica: "Bohaterów Getta",
		dzielnica: "Muranów",
	},
	{
		id: 282,
		ulica: "Bohaterów Warszawy",
		dzielnica: "Wola",
	},
	{
		id: 283,
		ulica: "al. Bohaterów Września",
		dzielnica: "Ochota",
	},
	{
		id: 284,
		ulica: "Bohdanowicza",
		dzielnica: "Ochota",
	},
	{
		id: 285,
		ulica: "Bohdziewicza",
		dzielnica: "Wawer",
	},
	{
		id: 286,
		ulica: "Bohomolca",
		dzielnica: "Bielany",
	},
	{
		id: 287,
		ulica: "Bohuszewiczówny",
		dzielnica: "Wawer",
	},
	{
		id: 288,
		ulica: "Bokserska",
		dzielnica: "Mokotów",
	},
	{
		id: 289,
		ulica: "Bolecha",
		dzielnica: "Wawer",
	},
	{
		id: 290,
		ulica: "Bolesława Chrobrego",
		dzielnica: "Bemowo",
	},
	{
		id: 291,
		ulica: "Bolesława Krzywoustego",
		dzielnica: "Bemowo",
	},
	{
		id: 292,
		ulica: "Bolesława Śmiałego",
		dzielnica: "Bemowo",
	},
	{
		id: 293,
		ulica: "Bolesławicka",
		dzielnica: "Wawer",
	},
	{
		id: 294,
		ulica: "Boleść",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 295,
		ulica: "Bolivara",
		dzielnica: "Wawer",
	},
	{
		id: 296,
		ulica: "Bolkowska",
		dzielnica: "Bemowo",
	},
	{
		id: 297,
		ulica: "Bombardierów",
		dzielnica: "Włochy",
	},
	{
		id: 298,
		ulica: "Bonaparte",
		dzielnica: "Wawer",
	},
	{
		id: 299,
		ulica: "św. Bonifacego",
		dzielnica: "Mokotów",
	},
	{
		id: 300,
		ulica: "Bonifraterska",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 301,
		ulica: "Bony",
		dzielnica: "Wawer",
	},
	{
		id: 302,
		ulica: "Bora Komorowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 303,
		ulica: "Borecka",
		dzielnica: "Wawer",
	},
	{
		id: 304,
		ulica: "Boremlowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 305,
		ulica: "Borkowska",
		dzielnica: "Wawer",
	},
	{
		id: 306,
		ulica: "Borków",
		dzielnica: "Wawer",
	},
	{
		id: 307,
		ulica: "Borowego",
		dzielnica: "Wawer",
	},
	{
		id: 308,
		ulica: "Borowej Góry",
		dzielnica: "Wawer",
	},
	{
		id: 309,
		ulica: "Borowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 310,
		ulica: "Borowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 311,
		ulica: "Borsucza",
		dzielnica: "Wawer",
	},
	{
		id: 312,
		ulica: "Boruty",
		dzielnica: "Wawer",
	},
	{
		id: 313,
		ulica: "Boryny",
		dzielnica: "Wawer",
	},
	{
		id: 314,
		ulica: "Boryszewska",
		dzielnica: "Wawer",
	},
	{
		id: 315,
		ulica: "Borzymowska",
		dzielnica: "Targówek",
	},
	{
		id: 316,
		ulica: "Bosmańska",
		dzielnica: "Wawer",
	},
	{
		id: 317,
		ulica: "Botaniczna",
		dzielnica: "Wawer",
	},
	{
		id: 318,
		ulica: "Botewa",
		dzielnica: "Wawer",
	},
	{
		id: 319,
		ulica: "Boznańskiej",
		dzielnica: "Wawer",
	},
	{
		id: 320,
		ulica: "Bołtucia",
		dzielnica: "Wawer",
	},
	{
		id: 321,
		ulica: "Braci Wagów",
		dzielnica: "Ursynów",
	},
	{
		id: 322,
		ulica: "Braci Załuskich",
		dzielnica: "Bielany",
	},
	{
		id: 323,
		ulica: "Bracka",
		dzielnica: "Śródmieście Południowe",
	},
	{
		id: 324,
		ulica: "Bracławska",
		dzielnica: "Wawer",
	},
	{
		id: 325,
		ulica: "Bramka",
		dzielnica: "Wawer",
	},
	{
		id: 326,
		ulica: "Bratka",
		dzielnica: "Wawer",
	},
	{
		id: 327,
		ulica: "Bratnia",
		dzielnica: "Wawer",
	},
	{
		id: 328,
		ulica: "Brazylijska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 329,
		ulica: "Brechta",
		dzielnica: "Praga-Północ",
	},
	{
		id: 330,
		ulica: "Brodnicka",
		dzielnica: "Targówek",
	},
	{
		id: 331,
		ulica: "Brodzik",
		dzielnica: "Wawer",
	},
	{
		id: 332,
		ulica: "Brodzińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 333,
		ulica: "Broniewskiego",
		dzielnica: "Bielany",
	},
	{
		id: 334,
		ulica: "Bronikowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 335,
		ulica: "Broniwoja",
		dzielnica: "Mokotów",
	},
	{
		id: 336,
		ulica: "Bronowska",
		dzielnica: "Wawer",
	},
	{
		id: 337,
		ulica: "Browarna",
		dzielnica: "Powiśle",
	},
	{
		id: 338,
		ulica: "Brożka",
		dzielnica: "Wola",
	},
	{
		id: 339,
		ulica: "Brukselska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 340,
		ulica: "Bruna",
		dzielnica: "Mokotów",
	},
	{
		id: 341,
		ulica: "Bruszewska",
		dzielnica: "Wawer",
	},
	{
		id: 342,
		ulica: "Bruzdowa",
		dzielnica: "Wilanów",
	},
	{
		id: 343,
		ulica: "Brygady Pościgowej",
		dzielnica: "Włochy",
	},
	{
		id: 344,
		ulica: "Brygadzistów",
		dzielnica: "Wawer",
	},
	{
		id: 345,
		ulica: "Brylowska",
		dzielnica: "Wola",
	},
	{
		id: 346,
		ulica: "Bryły",
		dzielnica: "Mokotów",
	},
	{
		id: 347,
		ulica: "Brzeska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 348,
		ulica: "Brzeziny",
		dzielnica: "Białołęka",
	},
	{
		id: 349,
		ulica: "Brzezińska",
		dzielnica: "Wawer",
	},
	{
		id: 350,
		ulica: "Brzoskwiniowa",
		dzielnica: "Wawer",
	},
	{
		id: 351,
		ulica: "Brzostowska",
		dzielnica: "Wawer",
	},
	{
		id: 352,
		ulica: "Brzozowa",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 353,
		ulica: "Brzozowy Zagajnik",
		dzielnica: "Wawer",
	},
	{
		id: 354,
		ulica: "Bródnowska",
		dzielnica: "Targówek",
	},
	{
		id: 355,
		ulica: "Brązownicza",
		dzielnica: "Wawer",
	},
	{
		id: 356,
		ulica: "Buchalteryjna",
		dzielnica: "Wawer",
	},
	{
		id: 357,
		ulica: "Budki Szczęśliwickie",
		dzielnica: "Ochota",
	},
	{
		id: 358,
		ulica: "Budowlana",
		dzielnica: "Wawer",
	},
	{
		id: 359,
		ulica: "Budrysów",
		dzielnica: "Wawer",
	},
	{
		id: 360,
		ulica: "Budy",
		dzielnica: "Wawer",
	},
	{
		id: 361,
		ulica: "Bugaj",
		dzielnica: "Stare Miasto",
	},
	{
		id: 362,
		ulica: "Bukietowa",
		dzielnica: "Wawer",
	},
	{
		id: 363,
		ulica: "Bukowa",
		dzielnica: "Wawer",
	},
	{
		id: 364,
		ulica: "Bukowiecka",
		dzielnica: "Targówek",
	},
	{
		id: 365,
		ulica: "Bukowińska",
		dzielnica: "Mokotów",
	},
	{
		id: 366,
		ulica: "Bukowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 367,
		ulica: "Bulwarowa",
		dzielnica: "Wawer",
	},
	{
		id: 368,
		ulica: "Burakowska",
		dzielnica: "Powązki",
	},
	{
		id: 369,
		ulica: "Burdzińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 370,
		ulica: "Burgaska",
		dzielnica: "Wawer",
	},
	{
		id: 371,
		ulica: "Burleska",
		dzielnica: "Wawer",
	},
	{
		id: 372,
		ulica: "Burmistrzowska",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 373,
		ulica: "Burschego",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 374,
		ulica: "Bursztynowa",
		dzielnica: "Wawer",
	},
	{
		id: 375,
		ulica: "Burzliwa",
		dzielnica: "Wawer",
	},
	{
		id: 376,
		ulica: "Burzyńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 377,
		ulica: "Buska",
		dzielnica: "Wawer",
	},
	{
		id: 378,
		ulica: "Busolowa",
		dzielnica: "Wawer",
	},
	{
		id: 379,
		ulica: "Buszycka",
		dzielnica: "Wawer",
	},
	{
		id: 380,
		ulica: "Buławy",
		dzielnica: "Wawer",
	},
	{
		id: 381,
		ulica: "Bułgarska",
		dzielnica: "Wawer",
	},
	{
		id: 382,
		ulica: "Bułhaka",
		dzielnica: "Wawer",
	},
	{
		id: 383,
		ulica: "Buńczuk",
		dzielnica: "Wawer",
	},
	{
		id: 384,
		ulica: "Bychowska",
		dzielnica: "Wawer",
	},
	{
		id: 385,
		ulica: "Byczyńska",
		dzielnica: "Wawer",
	},
	{
		id: 386,
		ulica: "Bylicowa",
		dzielnica: "Wawer",
	},
	{
		id: 387,
		ulica: "Bystra",
		dzielnica: "Wawer",
	},
	{
		id: 388,
		ulica: "Bystrzycka",
		dzielnica: "Wawer",
	},
	{
		id: 389,
		ulica: "Byszewska",
		dzielnica: "Wawer",
	},
	{
		id: 390,
		ulica: "Bysławska",
		dzielnica: "Wawer",
	},
	{
		id: 391,
		ulica: "Bytnara",
		dzielnica: "Mokotów",
	},
	{
		id: 392,
		ulica: "Bytomska",
		dzielnica: "Wawer",
	},
	{
		id: 393,
		ulica: "Bzowa",
		dzielnica: "Wawer",
	},
	{
		id: 394,
		ulica: "al. Bzów",
		dzielnica: "Wawer",
	},
	{
		id: 395,
		ulica: "C.H. Jupiter Towarowa",
		dzielnica: "Wola",
	},
	{
		id: 396,
		ulica: "Calineczki",
		dzielnica: "Białołęka",
	},
	{
		id: 397,
		ulica: "Canaletta",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 398,
		ulica: "Capri",
		dzielnica: "Wawer",
	},
	{
		id: 399,
		ulica: "Cedrowa",
		dzielnica: "Wawer",
	},
	{
		id: 400,
		ulica: "Cegielniana",
		dzielnica: "Wawer",
	},
	{
		id: 401,
		ulica: "Ceglana",
		dzielnica: "Wawer",
	},
	{
		id: 402,
		ulica: "Cegłowska",
		dzielnica: "Bielany",
	},
	{
		id: 403,
		ulica: "Celestynowska",
		dzielnica: "Wawer",
	},
	{
		id: 404,
		ulica: "Celna",
		dzielnica: "Stare Miasto",
	},
	{
		id: 405,
		ulica: "Celulozy",
		dzielnica: "Wawer",
	},
	{
		id: 406,
		ulica: "Centralna",
		dzielnica: "Wawer",
	},
	{
		id: 407,
		ulica: "Centurii",
		dzielnica: "Wawer",
	},
	{
		id: 408,
		ulica: "Ceramiczna",
		dzielnica: "Białołęka",
	},
	{
		id: 409,
		ulica: "Chałubińskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 410,
		ulica: "Chałupnicza",
		dzielnica: "Wawer",
	},
	{
		id: 411,
		ulica: "Chemiczna",
		dzielnica: "Targówek",
	},
	{
		id: 412,
		ulica: "Chełchowska",
		dzielnica: "Wawer",
	},
	{
		id: 413,
		ulica: "Chełmońskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 414,
		ulica: "Chełmska",
		dzielnica: "Mokotów",
	},
	{
		id: 415,
		ulica: "Chełmżyńska",
		dzielnica: "Targówek",
	},
	{
		id: 416,
		ulica: "Chlebowa",
		dzielnica: "Wawer",
	},
	{
		id: 417,
		ulica: "Chęcińska",
		dzielnica: "Wawer",
	},
	{
		id: 418,
		ulica: "Chlewińska",
		dzielnica: "Wawer",
	},
	{
		id: 419,
		ulica: "Chlubna",
		dzielnica: "Wawer",
	},
	{
		id: 420,
		ulica: "Chłapowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 421,
		ulica: "Chłodna",
		dzielnica: "Mirów",
	},
	{
		id: 422,
		ulica: "Chłodnicza",
		dzielnica: "Wawer",
	},
	{
		id: 423,
		ulica: "Chłopickiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 424,
		ulica: "Chmiela",
		dzielnica: "Wawer",
	},
	{
		id: 425,
		ulica: "Chmielna",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 426,
		ulica: "Chmurna",
		dzielnica: "Wawer",
	},
	{
		id: 427,
		ulica: "Chochołowska",
		dzielnica: "Wawer",
	},
	{
		id: 428,
		ulica: "Chocimska",
		dzielnica: "Stary Mokotów",
	},
	{
		id: 429,
		ulica: "Chodakowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 430,
		ulica: "Chodecka",
		dzielnica: "Targówek",
	},
	{
		id: 431,
		ulica: "Chodkiewicza",
		dzielnica: "Mokotów",
	},
	{
		id: 432,
		ulica: "Chodzieska",
		dzielnica: "Wawer",
	},
	{
		id: 433,
		ulica: "Chodzonego",
		dzielnica: "Wawer",
	},
	{
		id: 434,
		ulica: "Choinkowa",
		dzielnica: "Wawer",
	},
	{
		id: 435,
		ulica: "Chojnowska",
		dzielnica: "Wawer",
	},
	{
		id: 436,
		ulica: "Chopina",
		dzielnica: "Śródmieście",
	},
	{
		id: 437,
		ulica: "Chorzowska",
		dzielnica: "Wawer",
	},
	{
		id: 438,
		ulica: "Chorągwi Pancernej",
		dzielnica: "Wilanów",
	},
	{
		id: 439,
		ulica: "Chotomowska",
		dzielnica: "Wawer",
	},
	{
		id: 440,
		ulica: "Chóralna",
		dzielnica: "Wawer",
	},
	{
		id: 441,
		ulica: "Chroszczewska",
		dzielnica: "Wawer",
	},
	{
		id: 442,
		ulica: "Chrościckiego",
		dzielnica: "Włochy",
	},
	{
		id: 443,
		ulica: "al. Chruściela",
		dzielnica: "Rembertów",
	},
	{
		id: 444,
		ulica: "Chruściela Montera",
		dzielnica: "Rembertów",
	},
	{
		id: 445,
		ulica: "Chrzanowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 446,
		ulica: "Chudoby",
		dzielnica: "Wawer",
	},
	{
		id: 447,
		ulica: "Chylicka",
		dzielnica: "Wawer",
	},
	{
		id: 448,
		ulica: "Chylońska",
		dzielnica: "Wawer",
	},
	{
		id: 449,
		ulica: "Chyrowska",
		dzielnica: "Wawer",
	},
	{
		id: 450,
		ulica: "Ciasna",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 451,
		ulica: "Cicha",
		dzielnica: "Powiśle",
	},
	{
		id: 452,
		ulica: "Cichociemnych",
		dzielnica: "Wawer",
	},
	{
		id: 453,
		ulica: "Ciechanowska",
		dzielnica: "Wawer",
	},
	{
		id: 454,
		ulica: "Ciechocinek",
		dzielnica: "Wawer",
	},
	{
		id: 455,
		ulica: "Ciechocińska",
		dzielnica: "Wawer",
	},
	{
		id: 456,
		ulica: "Ciemna",
		dzielnica: "Wawer",
	},
	{
		id: 457,
		ulica: "Cienista",
		dzielnica: "Wawer",
	},
	{
		id: 458,
		ulica: "Cieplarniana",
		dzielnica: "Wawer",
	},
	{
		id: 459,
		ulica: "Ciepła",
		dzielnica: "Mirów",
	},
	{
		id: 460,
		ulica: "Cierlicka",
		dzielnica: "Wola",
	},
	{
		id: 461,
		ulica: "Ciesielska",
		dzielnica: "Mokotów",
	},
	{
		id: 462,
		ulica: "Cieszkowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 463,
		ulica: "Cieszyńska",
		dzielnica: "Białołęka",
	},
	{
		id: 464,
		ulica: "Cietrzewia",
		dzielnica: "Białołęka",
	},
	{
		id: 465,
		ulica: "Cieślewskich",
		dzielnica: "Białołęka",
	},
	{
		id: 466,
		ulica: "Ciołka",
		dzielnica: "Wola",
	},
	{
		id: 467,
		ulica: "Ciołkosza",
		dzielnica: "Wola",
	},
	{
		id: 468,
		ulica: "Ciołkowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 469,
		ulica: "Cisowa",
		dzielnica: "Białołęka",
	},
	{
		id: 470,
		ulica: "Ciszewska",
		dzielnica: "Białołęka",
	},
	{
		id: 471,
		ulica: "Ciszewskiego",
		dzielnica: "Białołęka",
	},
	{
		id: 472,
		ulica: "Ciupagi",
		dzielnica: "Białołęka",
	},
	{
		id: 473,
		ulica: "Cmentarna",
		dzielnica: "Białołęka",
	},
	{
		id: 474,
		ulica: "Codzienna",
		dzielnica: "Białołęka",
	},
	{
		id: 475,
		ulica: "Cokołowa",
		dzielnica: "Białołęka",
	},
	{
		id: 476,
		ulica: "Conrada",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 477,
		ulica: "Corazziego",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 478,
		ulica: "Cukrownicza",
		dzielnica: "Białołęka",
	},
	{
		id: 479,
		ulica: "Cybernetyki",
		dzielnica: "Mokotów",
	},
	{
		id: 480,
		ulica: "Cybisa",
		dzielnica: "Wola",
	},
	{
		id: 481,
		ulica: "Cybulskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 482,
		ulica: "Cyganeczki",
		dzielnica: "Białołęka",
	},
	{
		id: 483,
		ulica: "Cyklamenów",
		dzielnica: "Białołęka",
	},
	{
		id: 484,
		ulica: "Cylichowska",
		dzielnica: "Białołęka",
	},
	{
		id: 485,
		ulica: "Cymbalistów",
		dzielnica: "Białołęka",
	},
	{
		id: 486,
		ulica: "Cynamonowa",
		dzielnica: "Białołęka",
	},
	{
		id: 487,
		ulica: "Cypryjska",
		dzielnica: "Białołęka",
	},
	{
		id: 488,
		ulica: "Cyprysowa",
		dzielnica: "Białołęka",
	},
	{
		id: 489,
		ulica: "Cyrhli",
		dzielnica: "Białołęka",
	},
	{
		id: 490,
		ulica: "Cyrklowa",
		dzielnica: "Białołęka",
	},
	{
		id: 491,
		ulica: "Cyrulików",
		dzielnica: "Białołęka",
	},
	{
		id: 492,
		ulica: "Cyryla i Metodego",
		dzielnica: "Mokotów",
	},
	{
		id: 493,
		ulica: "Cytadeli",
		dzielnica: "Mokotów",
	},
	{
		id: 494,
		ulica: "Cytrynowa",
		dzielnica: "Białołęka",
	},
	{
		id: 495,
		ulica: "Czackiego",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 496,
		ulica: "Czajki",
		dzielnica: "Białołęka",
	},
	{
		id: 497,
		ulica: "Czaki",
		dzielnica: "Białołęka",
	},
	{
		id: 498,
		ulica: "Czapelska",
		dzielnica: "Białołęka",
	},
	{
		id: 499,
		ulica: "Czapli",
		dzielnica: "Białołęka",
	},
	{
		id: 500,
		ulica: "Czardasza",
		dzielnica: "Białołęka",
	},
	{
		id: 501,
		ulica: "Czarna Droga",
		dzielnica: "Białołęka",
	},
	{
		id: 502,
		ulica: "Czarnieckiego",
		dzielnica: "Mokotów",
	},
	{
		id: 503,
		ulica: "Czarnocińska",
		dzielnica: "Białołęka",
	},
	{
		id: 504,
		ulica: "Czarnoleska",
		dzielnica: "Wola",
	},
	{
		id: 505,
		ulica: "Czarnomorska",
		dzielnica: "Białołęka",
	},
	{
		id: 506,
		ulica: "Czarnołęcka",
		dzielnica: "Białołęka",
	},
	{
		id: 507,
		ulica: "Czarodzieja",
		dzielnica: "Białołęka",
	},
	{
		id: 508,
		ulica: "Czatów",
		dzielnica: "Białołęka",
	},
	{
		id: 509,
		ulica: "Cząstkowska",
		dzielnica: "Białołęka",
	},
	{
		id: 510,
		ulica: "Czecha",
		dzielnica: "Białołęka",
	},
	{
		id: 511,
		ulica: "Czechowa",
		dzielnica: "Białołęka",
	},
	{
		id: 512,
		ulica: "Czechowicka",
		dzielnica: "Białołęka",
	},
	{
		id: 513,
		ulica: "Czechowicza",
		dzielnica: "Białołęka",
	},
	{
		id: 514,
		ulica: "Czeczota",
		dzielnica: "Białołęka",
	},
	{
		id: 515,
		ulica: "Czekanowska",
		dzielnica: "Białołęka",
	},
	{
		id: 516,
		ulica: "Czeladnicza",
		dzielnica: "Białołęka",
	},
	{
		id: 517,
		ulica: "Czempińska",
		dzielnica: "Białołęka",
	},
	{
		id: 518,
		ulica: "Czeremchowa",
		dzielnica: "Białołęka",
	},
	{
		id: 519,
		ulica: "Czereśniowa",
		dzielnica: "Białołęka",
	},
	{
		id: 520,
		ulica: "Czerniakowska",
		dzielnica: "Mokotów",
	},
	{
		id: 521,
		ulica: "Czerniowiecka",
		dzielnica: "Białołęka",
	},
	{
		id: 522,
		ulica: "Czerska",
		dzielnica: "Śródmieście",
	},
	{
		id: 523,
		ulica: "pl. Czerwca 1976 r.",
		dzielnica: "Białołęka",
	},
	{
		id: 524,
		ulica: "Czerwińska",
		dzielnica: "Białołęka",
	},
	{
		id: 525,
		ulica: "Czerwona Droga",
		dzielnica: "Białołęka",
	},
	{
		id: 526,
		ulica: "Czerwonego Krzyża",
		dzielnica: "Białołęka",
	},
	{
		id: 527,
		ulica: "Czerwonych Beretów",
		dzielnica: "Białołęka",
	},
	{
		id: 528,
		ulica: "Czerwonych Maków",
		dzielnica: "Białołęka",
	},
	{
		id: 529,
		ulica: "Czerwonych Wierchów",
		dzielnica: "Białołęka",
	},
	{
		id: 530,
		ulica: "Czeska",
		dzielnica: "Mokotów",
	},
	{
		id: 531,
		ulica: "Cześnika",
		dzielnica: "Białołęka",
	},
	{
		id: 532,
		ulica: "Częstochowska",
		dzielnica: "Białołęka",
	},
	{
		id: 533,
		ulica: "Człuchowska",
		dzielnica: "Białołęka",
	},
	{
		id: 534,
		ulica: "Czorsztyńska",
		dzielnica: "Białołęka",
	},
	{
		id: 535,
		ulica: "Czołgistów",
		dzielnica: "Białołęka",
	},
	{
		id: 536,
		ulica: "Czołowa",
		dzielnica: "Białołęka",
	},
	{
		id: 537,
		ulica: "Czterech Wiatrów",
		dzielnica: "Białołęka",
	},
	{
		id: 538,
		ulica: "Czubatki",
		dzielnica: "Białołęka",
	},
	{
		id: 539,
		ulica: "Czumy",
		dzielnica: "Białołęka",
	},
	{
		id: 540,
		ulica: "Czwartaków",
		dzielnica: "Białołęka",
	},
	{
		id: 541,
		ulica: "Czynszowa",
		dzielnica: "Białołęka",
	},
	{
		id: 542,
		ulica: "Czyżewska",
		dzielnica: "Białołęka",
	},
	{
		id: 543,
		ulica: "Ćmielowska",
		dzielnica: "Białołęka",
	},
	{
		id: 544,
		ulica: "Kabacki Dukt",
		dzielnica: "Ursynów",
	},
	{
		id: 545,
		ulica: "Kabaretowa",
		dzielnica: "Wawer",
	},
	{
		id: 546,
		ulica: "Kabrioletu",
		dzielnica: "Wawer",
	},
	{
		id: 547,
		ulica: "Kacpury",
		dzielnica: "Wawer",
	},
	{
		id: 548,
		ulica: "Kacza",
		dzielnica: "Wola",
	},
	{
		id: 549,
		ulica: "Kaczeńca",
		dzielnica: "Wawer",
	},
	{
		id: 550,
		ulica: "Kaczorowska",
		dzielnica: "Wawer",
	},
	{
		id: 551,
		ulica: "Kaczy Dół",
		dzielnica: "Wawer",
	},
	{
		id: 552,
		ulica: "Kaden-Bandrowskiego",
		dzielnica: "Bielany",
	},
	{
		id: 553,
		ulica: "Kadetów",
		dzielnica: "Wawer",
	},
	{
		id: 554,
		ulica: "Kadrowa",
		dzielnica: "Wawer",
	},
	{
		id: 555,
		ulica: "Kadłubka",
		dzielnica: "Wawer",
	},
	{
		id: 556,
		ulica: "Kajakowa",
		dzielnica: "Ursynów",
	},
	{
		id: 557,
		ulica: "Kajetańska",
		dzielnica: "Wawer",
	},
	{
		id: 558,
		ulica: "Kajki",
		dzielnica: "Wawer",
	},
	{
		id: 559,
		ulica: "Kakowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 560,
		ulica: "Kaktusowa",
		dzielnica: "Wawer",
	},
	{
		id: 561,
		ulica: "Kalambur",
		dzielnica: "Wawer",
	},
	{
		id: 562,
		ulica: "Kalatówki",
		dzielnica: "Wawer",
	},
	{
		id: 563,
		ulica: "Kalendarzowa",
		dzielnica: "Wawer",
	},
	{
		id: 564,
		ulica: "Kaletnicza",
		dzielnica: "Wawer",
	},
	{
		id: 565,
		ulica: "Kaleńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 566,
		ulica: "Kalinowa",
		dzielnica: "Wawer",
	},
	{
		id: 567,
		ulica: "Kalinowej Łąki",
		dzielnica: "Wawer",
	},
	{
		id: 568,
		ulica: "Kalinowska",
		dzielnica: "Wawer",
	},
	{
		id: 569,
		ulica: "Kaliska",
		dzielnica: "Stara Ochota",
	},
	{
		id: 570,
		ulica: "Kaliskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 571,
		ulica: "gen. S. Kaliskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 572,
		ulica: "Kamasznicza",
		dzielnica: "Wawer",
	},
	{
		id: 573,
		ulica: "Kameralna",
		dzielnica: "Wawer",
	},
	{
		id: 574,
		ulica: "Kamienna",
		dzielnica: "Wawer",
	},
	{
		id: 575,
		ulica: "Kamienne Schodki",
		dzielnica: "Stare Miasto",
	},
	{
		id: 576,
		ulica: "Kamieńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 577,
		ulica: "Kamionkowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 578,
		ulica: "Kamińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 579,
		ulica: "A. Kamińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 580,
		ulica: "Kampinoska",
		dzielnica: "Wawer",
	},
	{
		id: 581,
		ulica: "Kanadyjska",
		dzielnica: "Wawer",
	},
	{
		id: 582,
		ulica: "Kanarkowa",
		dzielnica: "Wawer",
	},
	{
		id: 583,
		ulica: "Kanałowa",
		dzielnica: "Wawer",
	},
	{
		id: 584,
		ulica: "Kaniowska",
		dzielnica: "Wawer",
	},
	{
		id: 585,
		ulica: "Kanonia",
		dzielnica: "Stare Miasto",
	},
	{
		id: 586,
		ulica: "Kanonierska",
		dzielnica: "Wawer",
	},
	{
		id: 587,
		ulica: "Kapeli",
		dzielnica: "Wawer",
	},
	{
		id: 588,
		ulica: "Kapitańska",
		dzielnica: "Wawer",
	},
	{
		id: 589,
		ulica: "Kapitulna",
		dzielnica: "Śródmieście",
	},
	{
		id: 590,
		ulica: "Kaprys",
		dzielnica: "Wawer",
	},
	{
		id: 591,
		ulica: "Kapucyńska",
		dzielnica: "Wawer",
	},
	{
		id: 592,
		ulica: "Karabeli",
		dzielnica: "Bemowo",
	},
	{
		id: 593,
		ulica: "Karasia",
		dzielnica: "Śródmieście",
	},
	{
		id: 594,
		ulica: "Karatowa",
		dzielnica: "Wawer",
	},
	{
		id: 595,
		ulica: "Karczewska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 596,
		ulica: "Karczunkowska",
		dzielnica: "Ursynów",
	},
	{
		id: 597,
		ulica: "Skwer Kardynała Wyszyńskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 598,
		ulica: "Karkonoszy",
		dzielnica: "Wawer",
	},
	{
		id: 599,
		ulica: "Karla",
		dzielnica: "Wawer",
	},
	{
		id: 600,
		ulica: "Karmazynowa",
		dzielnica: "Wawer",
	},
	{
		id: 601,
		ulica: "Karmelicka",
		dzielnica: "Muranów",
	},
	{
		id: 602,
		ulica: "Karminowa",
		dzielnica: "Wawer",
	},
	{
		id: 603,
		ulica: "Karnicka",
		dzielnica: "Wawer",
	},
	{
		id: 604,
		ulica: "Karolinki",
		dzielnica: "Wawer",
	},
	{
		id: 605,
		ulica: "Karolkowa",
		dzielnica: "Wola",
	},
	{
		id: 606,
		ulica: "Karowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 607,
		ulica: "Karpacka",
		dzielnica: "Wawer",
	},
	{
		id: 608,
		ulica: "Karpińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 609,
		ulica: "Karska",
		dzielnica: "Wawer",
	},
	{
		id: 610,
		ulica: "Kartaginy",
		dzielnica: "Wawer",
	},
	{
		id: 611,
		ulica: "Kartezjusza",
		dzielnica: "Wawer",
	},
	{
		id: 612,
		ulica: "Kartonowa",
		dzielnica: "Wawer",
	},
	{
		id: 613,
		ulica: "Karuzela",
		dzielnica: "Wawer",
	},
	{
		id: 614,
		ulica: "Karwińska",
		dzielnica: "Wawer",
	},
	{
		id: 615,
		ulica: "Karłowicza",
		dzielnica: "Wawer",
	},
	{
		id: 616,
		ulica: "Kaskadowa",
		dzielnica: "Wawer",
	},
	{
		id: 617,
		ulica: "Kaspijska",
		dzielnica: "Wawer",
	},
	{
		id: 618,
		ulica: "Kasprowicza",
		dzielnica: "Bielany",
	},
	{
		id: 619,
		ulica: "Kasprzaka",
		dzielnica: "Wola",
	},
	{
		id: 620,
		ulica: "Kasztanowa",
		dzielnica: "Wawer",
	},
	{
		id: 621,
		ulica: "pl. Kasztelański",
		dzielnica: "Wawer",
	},
	{
		id: 622,
		ulica: "Kaszubska",
		dzielnica: "Wawer",
	},
	{
		id: 623,
		ulica: "Katalogowa",
		dzielnica: "Wawer",
	},
	{
		id: 624,
		ulica: "Katalońska",
		dzielnica: "Wawer",
	},
	{
		id: 625,
		ulica: "Katarynki",
		dzielnica: "Wawer",
	},
	{
		id: 626,
		ulica: "Katowicka",
		dzielnica: "Saska Kępa",
	},
	{
		id: 627,
		ulica: "Kaukaska",
		dzielnica: "Wawer",
	},
	{
		id: 628,
		ulica: "Kawalerii",
		dzielnica: "Mokotów",
	},
	{
		id: 629,
		ulica: "Kawcza",
		dzielnica: "Wawer",
	},
	{
		id: 630,
		ulica: "Kawy",
		dzielnica: "Wawer",
	},
	{
		id: 631,
		ulica: "Kawęczyńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 632,
		ulica: "Kazimierza Jagiellończyka",
		dzielnica: "Wawer",
	},
	{
		id: 633,
		ulica: "Kazimierza Odnowiciela",
		dzielnica: "Wawer",
	},
	{
		id: 634,
		ulica: "Kazimierza Sprawiedliwego",
		dzielnica: "Wawer",
	},
	{
		id: 635,
		ulica: "Kazimierza Wielkiego",
		dzielnica: "Wawer",
	},
	{
		id: 636,
		ulica: "Kazimierzowska",
		dzielnica: "Mokotów",
	},
	{
		id: 637,
		ulica: "Kazubów",
		dzielnica: "Wawer",
	},
	{
		id: 638,
		ulica: "Kazury",
		dzielnica: "Ursynów",
	},
	{
		id: 639,
		ulica: "Dahlberga",
		dzielnica: "Wola",
	},
	{
		id: 640,
		ulica: "Daimlera",
		dzielnica: "Włochy",
	},
	{
		id: 641,
		ulica: "Daktylowa",
		dzielnica: "Wawer",
	},
	{
		id: 642,
		ulica: "Dalanowska",
		dzielnica: "Targówek",
	},
	{
		id: 643,
		ulica: "Daleka",
		dzielnica: "Ochota",
	},
	{
		id: 644,
		ulica: "Dalibora",
		dzielnica: "Wawer",
	},
	{
		id: 645,
		ulica: "Daliowa",
		dzielnica: "Wawer",
	},
	{
		id: 646,
		ulica: "Daniszewska",
		dzielnica: "Białołęka",
	},
	{
		id: 647,
		ulica: "Daniłowiczowska",
		dzielnica: "Śródmieście",
	},
	{
		id: 648,
		ulica: "Daniłowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 649,
		ulica: "Dankowicka",
		dzielnica: "Wawer",
	},
	{
		id: 650,
		ulica: "Dantego",
		dzielnica: "Bielany",
	},
	{
		id: 651,
		ulica: "Dantyszka",
		dzielnica: "Wawer",
	},
	{
		id: 652,
		ulica: "Danusi",
		dzielnica: "Wawer",
	},
	{
		id: 653,
		ulica: "Darwina",
		dzielnica: "Praga-Północ",
	},
	{
		id: 654,
		ulica: "Darłowska",
		dzielnica: "Wawer",
	},
	{
		id: 655,
		ulica: "Daszowska",
		dzielnica: "Wawer",
	},
	{
		id: 656,
		ulica: "Dawidowska",
		dzielnica: "Wawer",
	},
	{
		id: 657,
		ulica: "Dawna",
		dzielnica: "Stare Miasto",
	},
	{
		id: 658,
		ulica: "Dąbka",
		dzielnica: "Wawer",
	},
	{
		id: 659,
		ulica: "Dąbrowiecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 660,
		ulica: "Dąbrowskiego",
		dzielnica: "Stary Mokotów",
	},
	{
		id: 661,
		ulica: "pl. Dąbrowskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 662,
		ulica: "Dąbrowskiej",
		dzielnica: "Wawer",
	},
	{
		id: 663,
		ulica: "Dąbrowszczaków",
		dzielnica: "Praga-Północ",
	},
	{
		id: 664,
		ulica: "Dąbrówki",
		dzielnica: "Wawer",
	},
	{
		id: 665,
		ulica: "Dedala",
		dzielnica: "Wawer",
	},
	{
		id: 666,
		ulica: "pl. Defilad",
		dzielnica: "Śródmieście",
	},
	{
		id: 667,
		ulica: "Dekarska",
		dzielnica: "Wawer",
	},
	{
		id: 668,
		ulica: "Delfina",
		dzielnica: "Wawer",
	},
	{
		id: 669,
		ulica: "Dembego",
		dzielnica: "Ursynów",
	},
	{
		id: 670,
		ulica: "Dembińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 671,
		ulica: "Dembowskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 672,
		ulica: "Denarowa",
		dzielnica: "Wawer",
	},
	{
		id: 673,
		ulica: "Deotymy",
		dzielnica: "Wola",
	},
	{
		id: 674,
		ulica: "Deptak",
		dzielnica: "Wawer",
	},
	{
		id: 675,
		ulica: "Dereniowa",
		dzielnica: "Ursynów",
	},
	{
		id: 676,
		ulica: "Derkaczy",
		dzielnica: "Wawer",
	},
	{
		id: 677,
		ulica: "Derwida",
		dzielnica: "Wawer",
	},
	{
		id: 678,
		ulica: "Deseniowa",
		dzielnica: "Wawer",
	},
	{
		id: 679,
		ulica: "Deszczowa",
		dzielnica: "Wawer",
	},
	{
		id: 680,
		ulica: "Dewajtis",
		dzielnica: "Bielany",
	},
	{
		id: 681,
		ulica: "Deyny",
		dzielnica: "Wawer",
	},
	{
		id: 682,
		ulica: "Dębicka",
		dzielnica: "Wawer",
	},
	{
		id: 683,
		ulica: "Dęblińska",
		dzielnica: "Wawer",
	},
	{
		id: 684,
		ulica: "Dębowa",
		dzielnica: "Wawer",
	},
	{
		id: 685,
		ulica: "Dęby",
		dzielnica: "Wawer",
	},
	{
		id: 686,
		ulica: "Diamentowa",
		dzielnica: "Wawer",
	},
	{
		id: 687,
		ulica: "Dickensa",
		dzielnica: "Ochota",
	},
	{
		id: 688,
		ulica: "Długa",
		dzielnica: "Muranów",
	},
	{
		id: 689,
		ulica: "Długopolska",
		dzielnica: "Wawer",
	},
	{
		id: 690,
		ulica: "Długorzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 691,
		ulica: "Długosza",
		dzielnica: "Wawer",
	},
	{
		id: 692,
		ulica: "Dmochowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 693,
		ulica: "Dmuchawcowa",
		dzielnica: "Wawer",
	},
	{
		id: 694,
		ulica: "Dobiszewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 695,
		ulica: "Dobka z Oleśnicy",
		dzielnica: "Wawer",
	},
	{
		id: 696,
		ulica: "Dobosza",
		dzielnica: "Wawer",
	},
	{
		id: 697,
		ulica: "Dobra",
		dzielnica: "Powiśle",
	},
	{
		id: 698,
		ulica: "Dobrogniewa",
		dzielnica: "Wawer",
	},
	{
		id: 699,
		ulica: "Dobrowoja",
		dzielnica: "Wawer",
	},
	{
		id: 700,
		ulica: "Dobrzańskiego",
		dzielnica: "Mirów",
	},
	{
		id: 701,
		ulica: "Dojazdowa",
		dzielnica: "Wawer",
	},
	{
		id: 702,
		ulica: "Dokerów",
		dzielnica: "Wawer",
	},
	{
		id: 703,
		ulica: "Dolańskiego",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 704,
		ulica: "Dolna",
		dzielnica: "Mokotów",
	},
	{
		id: 705,
		ulica: "Dolnośląska",
		dzielnica: "Wawer",
	},
	{
		id: 706,
		ulica: "Domaniewska",
		dzielnica: "Mokotów",
	},
	{
		id: 707,
		ulica: "Domeyki",
		dzielnica: "Wawer",
	},
	{
		id: 708,
		ulica: "Dominikańska",
		dzielnica: "Mokotów",
	},
	{
		id: 709,
		ulica: "Dominiki",
		dzielnica: "Wawer",
	},
	{
		id: 710,
		ulica: "Domowa",
		dzielnica: "Wawer",
	},
	{
		id: 711,
		ulica: "Don Kichota",
		dzielnica: "Wawer",
	},
	{
		id: 712,
		ulica: "Dorodna",
		dzielnica: "Wawer",
	},
	{
		id: 713,
		ulica: "Dorohuska",
		dzielnica: "Wawer",
	},
	{
		id: 714,
		ulica: "Doroszewskiego",
		dzielnica: "Wola",
	},
	{
		id: 715,
		ulica: "Dorotowska",
		dzielnica: "Wawer",
	},
	{
		id: 716,
		ulica: "Dorycka",
		dzielnica: "Wawer",
	},
	{
		id: 717,
		ulica: "Dostatnia",
		dzielnica: "Wawer",
	},
	{
		id: 718,
		ulica: "Dostępna",
		dzielnica: "Wawer",
	},
	{
		id: 719,
		ulica: "Dowcip",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 720,
		ulica: "Dowódców",
		dzielnica: "Wawer",
	},
	{
		id: 721,
		ulica: "Dołowa",
		dzielnica: "Wawer",
	},
	{
		id: 722,
		ulica: "Dożynkowa",
		dzielnica: "Wawer",
	},
	{
		id: 723,
		ulica: "Draceny",
		dzielnica: "Wawer",
	},
	{
		id: 724,
		ulica: "Dragonów",
		dzielnica: "Wawer",
	},
	{
		id: 725,
		ulica: "Drapińska",
		dzielnica: "Wawer",
	},
	{
		id: 726,
		ulica: "Drawska",
		dzielnica: "Ochota",
	},
	{
		id: 727,
		ulica: "Drewniana",
		dzielnica: "Powiśle",
	},
	{
		id: 728,
		ulica: "Drewnowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 729,
		ulica: "Drewny",
		dzielnica: "Wawer",
	},
	{
		id: 730,
		ulica: "Drezdeńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 731,
		ulica: "Drogistów",
		dzielnica: "Wawer",
	},
	{
		id: 732,
		ulica: "Drogomilska",
		dzielnica: "Wawer",
	},
	{
		id: 733,
		ulica: "Drogowa",
		dzielnica: "Wawer",
	},
	{
		id: 734,
		ulica: "Drohicka",
		dzielnica: "Wawer",
	},
	{
		id: 735,
		ulica: "Drozdowa",
		dzielnica: "Wawer",
	},
	{
		id: 736,
		ulica: "Drożdżowa",
		dzielnica: "Wawer",
	},
	{
		id: 737,
		ulica: "Drukarzy",
		dzielnica: "Wawer",
	},
	{
		id: 738,
		ulica: "Drumli",
		dzielnica: "Wawer",
	},
	{
		id: 739,
		ulica: "Drużbackiej",
		dzielnica: "Wawer",
	},
	{
		id: 740,
		ulica: "Drużynowa",
		dzielnica: "Wawer",
	},
	{
		id: 741,
		ulica: "Drwali",
		dzielnica: "Wawer",
	},
	{
		id: 742,
		ulica: "Drzemlika",
		dzielnica: "Wawer",
	},
	{
		id: 743,
		ulica: "Drzewieckiego",
		dzielnica: "Włochy",
	},
	{
		id: 744,
		ulica: "Drzeworytników",
		dzielnica: "Wawer",
	},
	{
		id: 745,
		ulica: "Drzymały",
		dzielnica: "Wawer",
	},
	{
		id: 746,
		ulica: "Dubieńska",
		dzielnica: "Wawer",
	},
	{
		id: 747,
		ulica: "Dubois",
		dzielnica: "Śródmieście",
	},
	{
		id: 748,
		ulica: "Duchnicka",
		dzielnica: "Wola",
	},
	{
		id: 749,
		ulica: "Dudziarska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 750,
		ulica: "Dukatowa",
		dzielnica: "Wawer",
	},
	{
		id: 751,
		ulica: "Dumki",
		dzielnica: "Wawer",
	},
	{
		id: 752,
		ulica: "Dunajecka",
		dzielnica: "Wawer",
	},
	{
		id: 753,
		ulica: "Dunikowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 754,
		ulica: "Duracza",
		dzielnica: "Bielany",
	},
	{
		id: 755,
		ulica: "Dusznicka",
		dzielnica: "Wawer",
	},
	{
		id: 756,
		ulica: "Dwernickiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 757,
		ulica: "Dworcowa",
		dzielnica: "Wawer",
	},
	{
		id: 758,
		ulica: "Dworkowa",
		dzielnica: "Mokotów",
	},
	{
		id: 759,
		ulica: "al. Dwudziestolatków",
		dzielnica: "Włochy",
	},
	{
		id: 760,
		ulica: "Dwusieczna",
		dzielnica: "Wawer",
	},
	{
		id: 761,
		ulica: "Dwóch Mieczy",
		dzielnica: "Wawer",
	},
	{
		id: 762,
		ulica: "Dybowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 763,
		ulica: "Dychowska",
		dzielnica: "Wawer",
	},
	{
		id: 764,
		ulica: "Dygasińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 765,
		ulica: "Dylewska",
		dzielnica: "Wawer",
	},
	{
		id: 766,
		ulica: "Dyliżansowa",
		dzielnica: "Wawer",
	},
	{
		id: 767,
		ulica: "Dymińska",
		dzielnica: "Żoliborz",
	},
	{
		id: 768,
		ulica: "Dymna",
		dzielnica: "Wawer",
	},
	{
		id: 769,
		ulica: "Dynamiczna",
		dzielnica: "Wawer",
	},
	{
		id: 770,
		ulica: "Dynarska",
		dzielnica: "Wawer",
	},
	{
		id: 771,
		ulica: "Dynasy",
		dzielnica: "Powiśle",
	},
	{
		id: 772,
		ulica: "Dynowska",
		dzielnica: "Wawer",
	},
	{
		id: 773,
		ulica: "Dywizjonu 303",
		dzielnica: "Bemowo",
	},
	{
		id: 774,
		ulica: "Dyżewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 775,
		ulica: "Dziatwy",
		dzielnica: "Białołęka",
	},
	{
		id: 776,
		ulica: "Działdowska",
		dzielnica: "Wola",
	},
	{
		id: 777,
		ulica: "Działkowa",
		dzielnica: "Ursynów",
	},
	{
		id: 778,
		ulica: "Działowa",
		dzielnica: "Wawer",
	},
	{
		id: 779,
		ulica: "Działyńczyków",
		dzielnica: "Wawer",
	},
	{
		id: 780,
		ulica: "al. Dzieci Polskich",
		dzielnica: "Wawer",
	},
	{
		id: 781,
		ulica: "Dzieci Warszawy",
		dzielnica: "Ursus",
	},
	{
		id: 782,
		ulica: "Dziekania",
		dzielnica: "Stare Miasto",
	},
	{
		id: 783,
		ulica: "Dzielna",
		dzielnica: "Wola",
	},
	{
		id: 784,
		ulica: "Dzielnicowa",
		dzielnica: "Wawer",
	},
	{
		id: 785,
		ulica: "Dziennikarska",
		dzielnica: "Bielany",
	},
	{
		id: 786,
		ulica: "Dzierzby",
		dzielnica: "Wawer",
	},
	{
		id: 787,
		ulica: "Dzierżoniowska",
		dzielnica: "Wawer",
	},
	{
		id: 788,
		ulica: "Dziewiarska",
		dzielnica: "Wawer",
	},
	{
		id: 789,
		ulica: "Dziewosłęby",
		dzielnica: "Wawer",
	},
	{
		id: 790,
		ulica: "Dzika",
		dzielnica: "Śródmieście",
	},
	{
		id: 791,
		ulica: "Dziupli",
		dzielnica: "Wawer",
	},
	{
		id: 792,
		ulica: "Dzięcieliny",
		dzielnica: "Wawer",
	},
	{
		id: 793,
		ulica: "Dzięcioła",
		dzielnica: "Wawer",
	},
	{
		id: 794,
		ulica: "Dzięgielowa",
		dzielnica: "Wawer",
	},
	{
		id: 795,
		ulica: "Dzwonkowa",
		dzielnica: "Włochy",
	},
	{
		id: 796,
		ulica: "Dźwiękowa",
		dzielnica: "Wawer",
	},
	{
		id: 797,
		ulica: "Dźwigowa",
		dzielnica: "Włochy",
	},
	{
		id: 798,
		ulica: "Ebro",
		dzielnica: "Wawer",
	},
	{
		id: 799,
		ulica: "Echa Leśne",
		dzielnica: "Wawer",
	},
	{
		id: 800,
		ulica: "Edisona",
		dzielnica: "Włochy",
	},
	{
		id: 801,
		ulica: "Egejska",
		dzielnica: "Mokotów",
	},
	{
		id: 802,
		ulica: "Egipska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 803,
		ulica: "Einsteina",
		dzielnica: "Bielany",
	},
	{
		id: 804,
		ulica: "Ekologiczna",
		dzielnica: "Wawer",
	},
	{
		id: 805,
		ulica: "Ekspresowa",
		dzielnica: "Wawer",
	},
	{
		id: 806,
		ulica: "Elbląska",
		dzielnica: "Żoliborz",
	},
	{
		id: 807,
		ulica: "Elegancka",
		dzielnica: "Wawer",
	},
	{
		id: 808,
		ulica: "Elegijna",
		dzielnica: "Wawer",
	},
	{
		id: 809,
		ulica: "Elekcyjna",
		dzielnica: "Wola",
	},
	{
		id: 810,
		ulica: "Elektoralna",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 811,
		ulica: "Elektronowa",
		dzielnica: "Białołęka",
	},
	{
		id: 812,
		ulica: "Elektryczna",
		dzielnica: "Wola",
	},
	{
		id: 813,
		ulica: "Elsnera",
		dzielnica: "Praga-Południe",
	},
	{
		id: 814,
		ulica: "Elsterska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 815,
		ulica: "Emaliowa",
		dzielnica: "Włochy",
	},
	{
		id: 816,
		ulica: "Emilii Plater",
		dzielnica: "Śródmieście",
	},
	{
		id: 817,
		ulica: "Encyklopedyczna",
		dzielnica: "Bielany",
	},
	{
		id: 818,
		ulica: "Epopei",
		dzielnica: "Wawer",
	},
	{
		id: 819,
		ulica: "Erazma z Zakroczymia",
		dzielnica: "Białołęka",
	},
	{
		id: 820,
		ulica: "Esej",
		dzielnica: "Wawer",
	},
	{
		id: 821,
		ulica: "Eskulapów",
		dzielnica: "Wawer",
	},
	{
		id: 822,
		ulica: "Esperanto",
		dzielnica: "Wola",
	},
	{
		id: 823,
		ulica: "Estońska",
		dzielnica: "Wawer",
	},
	{
		id: 824,
		ulica: "Estrady",
		dzielnica: "Bemowo",
	},
	{
		id: 825,
		ulica: "Etiudy Rewolucyjnej",
		dzielnica: "Ursynów",
	},
	{
		id: 826,
		ulica: "Europejska",
		dzielnica: "Wilanów",
	},
	{
		id: 827,
		ulica: "Ewy",
		dzielnica: "Wawer",
	},
	{
		id: 828,
		ulica: "Ezopa",
		dzielnica: "Wawer",
	},
	{
		id: 829,
		ulica: "Fabiańska",
		dzielnica: "Wawer",
	},
	{
		id: 830,
		ulica: "Fabryczna",
		dzielnica: "Powiśle",
	},
	{
		id: 831,
		ulica: "Fajansowa",
		dzielnica: "Wawer",
	},
	{
		id: 832,
		ulica: "Falenicka",
		dzielnica: "Wawer",
	},
	{
		id: 833,
		ulica: "Falskiego",
		dzielnica: "Wawer",
	},
	{
		id: 834,
		ulica: "Falęcka",
		dzielnica: "Mokotów",
	},
	{
		id: 835,
		ulica: "Familijna",
		dzielnica: "Wawer",
	},
	{
		id: 836,
		ulica: "Fanfarowa",
		dzielnica: "Włochy",
	},
	{
		id: 837,
		ulica: "Fantazyjna",
		dzielnica: "Wawer",
	},
	{
		id: 838,
		ulica: "Faradaya",
		dzielnica: "Wawer",
	},
	{
		id: 839,
		ulica: "Faraona",
		dzielnica: "Wawer",
	},
	{
		id: 840,
		ulica: "Farbiarska",
		dzielnica: "Włochy",
	},
	{
		id: 841,
		ulica: "Farysa",
		dzielnica: "Wawer",
	},
	{
		id: 842,
		ulica: "Fasolowa",
		dzielnica: "Włochy",
	},
	{
		id: 843,
		ulica: "Fausta",
		dzielnica: "Wawer",
	},
	{
		id: 844,
		ulica: "Fałata",
		dzielnica: "Mokotów",
	},
	{
		id: 845,
		ulica: "Felińskiego",
		dzielnica: "Żoliborz",
	},
	{
		id: 846,
		ulica: "Fersta",
		dzielnica: "Wawer",
	},
	{
		id: 847,
		ulica: "Fieldorfa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 848,
		ulica: "Figara",
		dzielnica: "Wawer",
	},
	{
		id: 849,
		ulica: "Figowa",
		dzielnica: "Wawer",
	},
	{
		id: 850,
		ulica: "Filarecka",
		dzielnica: "Mokotów",
	},
	{
		id: 851,
		ulica: "Filipinki",
		dzielnica: "Wawer",
	},
	{
		id: 852,
		ulica: "Filmowa",
		dzielnica: "Mokotów",
	},
	{
		id: 853,
		ulica: "Filomatów",
		dzielnica: "Wawer",
	},
	{
		id: 854,
		ulica: "Filona",
		dzielnica: "Wawer",
	},
	{
		id: 855,
		ulica: "Filtrowa",
		dzielnica: "Ochota",
	},
	{
		id: 856,
		ulica: "Finałowa",
		dzielnica: "Wawer",
	},
	{
		id: 857,
		ulica: "Finlandzka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 858,
		ulica: "Fioletowa",
		dzielnica: "Wawer",
	},
	{
		id: 859,
		ulica: "Fiołków",
		dzielnica: "Wawer",
	},
	{
		id: 860,
		ulica: "Fiszera",
		dzielnica: "Mokotów",
	},
	{
		id: 861,
		ulica: "Fitelberga",
		dzielnica: "Wawer",
	},
	{
		id: 862,
		ulica: "Fizyków",
		dzielnica: "Wawer",
	},
	{
		id: 863,
		ulica: "Fizylierów",
		dzielnica: "Wawer",
	},
	{
		id: 864,
		ulica: "Flagowa",
		dzielnica: "Wawer",
	},
	{
		id: 865,
		ulica: "Flamenco",
		dzielnica: "Wawer",
	},
	{
		id: 866,
		ulica: "Fleminga",
		dzielnica: "Białołęka",
	},
	{
		id: 867,
		ulica: "Fletniowa",
		dzielnica: "Wawer",
	},
	{
		id: 868,
		ulica: "Flisa",
		dzielnica: "Wawer",
	},
	{
		id: 869,
		ulica: "Floriana",
		dzielnica: "Wawer",
	},
	{
		id: 870,
		ulica: "Floriańska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 871,
		ulica: "Flory",
		dzielnica: "Śródmieście",
	},
	{
		id: 872,
		ulica: "Foksal",
		dzielnica: "Śródmieście",
	},
	{
		id: 873,
		ulica: "Foliałowa",
		dzielnica: "Wawer",
	},
	{
		id: 874,
		ulica: "Folwarczna",
		dzielnica: "Targówek",
	},
	{
		id: 875,
		ulica: "Fondamińskiego Edwarda",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 876,
		ulica: "Fontany",
		dzielnica: "Wawer",
	},
	{
		id: 877,
		ulica: "Forsycji",
		dzielnica: "Wawer",
	},
	{
		id: 878,
		ulica: "Fort Wola",
		dzielnica: "Wola",
	},
	{
		id: 879,
		ulica: "Forteczna",
		dzielnica: "Wawer",
	},
	{
		id: 880,
		ulica: "Fortel",
		dzielnica: "Wawer",
	},
	{
		id: 881,
		ulica: "Fortowa",
		dzielnica: "Wawer",
	},
	{
		id: 882,
		ulica: "Fortuny",
		dzielnica: "Wawer",
	},
	{
		id: 883,
		ulica: "Fosa",
		dzielnica: "Mokotów",
	},
	{
		id: 884,
		ulica: "Franciszkańska",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 885,
		ulica: "Francuska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 886,
		ulica: "Frascati",
		dzielnica: "Śródmieście",
	},
	{
		id: 887,
		ulica: "Fraszki",
		dzielnica: "Wawer",
	},
	{
		id: 888,
		ulica: "Fredry",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 889,
		ulica: "Fregaty",
		dzielnica: "Wawer",
	},
	{
		id: 890,
		ulica: "Frenkla",
		dzielnica: "Praga-Północ",
	},
	{
		id: 891,
		ulica: "Freta",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 892,
		ulica: "Frontowa",
		dzielnica: "Wawer",
	},
	{
		id: 893,
		ulica: "Frycza Modrzewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 894,
		ulica: "Fucika",
		dzielnica: "Wawer",
	},
	{
		id: 895,
		ulica: "Fundamentowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 896,
		ulica: "Furmańska",
		dzielnica: "Powiśle",
	},
	{
		id: 897,
		ulica: "Gabriela",
		dzielnica: "Wawer",
	},
	{
		id: 898,
		ulica: "Gagarina",
		dzielnica: "Mokotów",
	},
	{
		id: 899,
		ulica: "Gajcego",
		dzielnica: "Wawer",
	},
	{
		id: 900,
		ulica: "Gajdy",
		dzielnica: "Wawer",
	},
	{
		id: 901,
		ulica: "Gajkowicza",
		dzielnica: "Wawer",
	},
	{
		id: 902,
		ulica: "Gajowa",
		dzielnica: "Wawer",
	},
	{
		id: 903,
		ulica: "Galaktyki",
		dzielnica: "Wawer",
	},
	{
		id: 904,
		ulica: "Gamerskiego",
		dzielnica: "Wawer",
	},
	{
		id: 905,
		ulica: "Gandhi",
		dzielnica: "Wawer",
	},
	{
		id: 906,
		ulica: "Gandhiego",
		dzielnica: "Wawer",
	},
	{
		id: 907,
		ulica: "Garażowa",
		dzielnica: "Mokotów",
	},
	{
		id: 908,
		ulica: "Garbarska",
		dzielnica: "Powiśle",
	},
	{
		id: 909,
		ulica: "Garbińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 910,
		ulica: "Gardenii",
		dzielnica: "Wawer",
	},
	{
		id: 911,
		ulica: "Garibaldiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 912,
		ulica: "Garncarska",
		dzielnica: "Śródmieście",
	},
	{
		id: 913,
		ulica: "Garwolińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 914,
		ulica: "Garłaczy",
		dzielnica: "Wawer",
	},
	{
		id: 915,
		ulica: "Gawińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 916,
		ulica: "Gawota",
		dzielnica: "Wawer",
	},
	{
		id: 917,
		ulica: "Gawędziarzy",
		dzielnica: "Wawer",
	},
	{
		id: 918,
		ulica: "Gałczyńskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 919,
		ulica: "Gdańska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 920,
		ulica: "Gdecka",
		dzielnica: "Wawer",
	},
	{
		id: 921,
		ulica: "Gdyńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 922,
		ulica: "Gedymina",
		dzielnica: "Wawer",
	},
	{
		id: 923,
		ulica: "Gembarzewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 924,
		ulica: "Genewska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 925,
		ulica: "Geodetów",
		dzielnica: "Wawer",
	},
	{
		id: 926,
		ulica: "Geologiczna",
		dzielnica: "Wawer",
	},
	{
		id: 927,
		ulica: "Geranii",
		dzielnica: "Wawer",
	},
	{
		id: 928,
		ulica: "Gersona",
		dzielnica: "Praga-Północ",
	},
	{
		id: 929,
		ulica: "Gibalskiego",
		dzielnica: "Wola",
	},
	{
		id: 930,
		ulica: "Gibraltarska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 931,
		ulica: "Gidzińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 932,
		ulica: "Gierczak",
		dzielnica: "Wawer",
	},
	{
		id: 933,
		ulica: "Gierdawska",
		dzielnica: "Wawer",
	},
	{
		id: 934,
		ulica: "Gierdziejewskiego",
		dzielnica: "Ursus",
	},
	{
		id: 935,
		ulica: "Giermków",
		dzielnica: "Wawer",
	},
	{
		id: 936,
		ulica: "Gierymskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 937,
		ulica: "Giewont",
		dzielnica: "Wawer",
	},
	{
		id: 938,
		ulica: "Giełdowa",
		dzielnica: "Wola",
	},
	{
		id: 939,
		ulica: "Gilarska",
		dzielnica: "Targówek",
	},
	{
		id: 940,
		ulica: "Gimnastyczna",
		dzielnica: "Mokotów",
	},
	{
		id: 941,
		ulica: "Gimnazjalna",
		dzielnica: "Wawer",
	},
	{
		id: 942,
		ulica: "Gizów",
		dzielnica: "Wola",
	},
	{
		id: 943,
		ulica: "Gliwicka",
		dzielnica: "Wawer",
	},
	{
		id: 944,
		ulica: "Globusowa",
		dzielnica: "Włochy",
	},
	{
		id: 945,
		ulica: "Glogera",
		dzielnica: "Stara Ochota",
	},
	{
		id: 946,
		ulica: "Gniazdowska",
		dzielnica: "Wawer",
	},
	{
		id: 947,
		ulica: "Gniewkowska",
		dzielnica: "Wola",
	},
	{
		id: 948,
		ulica: "Gocławska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 949,
		ulica: "Godebskiego",
		dzielnica: "Wawer",
	},
	{
		id: 950,
		ulica: "Godlewska",
		dzielnica: "Wawer",
	},
	{
		id: 951,
		ulica: "van Gogha",
		dzielnica: "Białołęka",
	},
	{
		id: 952,
		ulica: "Gogolińska",
		dzielnica: "Wawer",
	},
	{
		id: 953,
		ulica: "Gojawiczyńskiej",
		dzielnica: "Wawer",
	},
	{
		id: 954,
		ulica: "Goldoniego",
		dzielnica: "Wawer",
	},
	{
		id: 955,
		ulica: "Goleszowska",
		dzielnica: "Wawer",
	},
	{
		id: 956,
		ulica: "Golędzinowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 957,
		ulica: "Goławicka",
		dzielnica: "Wawer",
	},
	{
		id: 958,
		ulica: "Gołdapska",
		dzielnica: "Wawer",
	},
	{
		id: 959,
		ulica: "Gołębia",
		dzielnica: "Wawer",
	},
	{
		id: 960,
		ulica: "Gołębiowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 961,
		ulica: "Gołkowska",
		dzielnica: "Wawer",
	},
	{
		id: 962,
		ulica: "Gołuchowska",
		dzielnica: "Wawer",
	},
	{
		id: 963,
		ulica: "Gombrowicza",
		dzielnica: "Bielany",
	},
	{
		id: 964,
		ulica: "Gomółki",
		dzielnica: "Wawer",
	},
	{
		id: 965,
		ulica: "Gomulickiego",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 966,
		ulica: "Gontarska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 967,
		ulica: "Gonzagi",
		dzielnica: "Wilanów",
	},
	{
		id: 968,
		ulica: "Goplańska",
		dzielnica: "Wawer",
	},
	{
		id: 969,
		ulica: "Gorajska",
		dzielnica: "Wawer",
	},
	{
		id: 970,
		ulica: "Goraszewska",
		dzielnica: "Wawer",
	},
	{
		id: 971,
		ulica: "Gordona Bennetta",
		dzielnica: "Włochy",
	},
	{
		id: 972,
		ulica: "Gorlicka",
		dzielnica: "Wawer",
	},
	{
		id: 973,
		ulica: "Gorzelnicza",
		dzielnica: "Wawer",
	},
	{
		id: 974,
		ulica: "Gorzykowska",
		dzielnica: "Targówek",
	},
	{
		id: 975,
		ulica: "Gospodarcza",
		dzielnica: "Wawer",
	},
	{
		id: 976,
		ulica: "Gostyńska",
		dzielnica: "Wola",
	},
	{
		id: 977,
		ulica: "Goszczyńskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 978,
		ulica: "Gotarda",
		dzielnica: "Mokotów",
	},
	{
		id: 979,
		ulica: "Gottlieba Daimlera",
		dzielnica: "Włochy",
	},
	{
		id: 980,
		ulica: "Goworka",
		dzielnica: "Stary Mokotów",
	},
	{
		id: 981,
		ulica: "Goworowska",
		dzielnica: "Wawer",
	},
	{
		id: 982,
		ulica: "Gościeradowska",
		dzielnica: "Wawer",
	},
	{
		id: 983,
		ulica: "Gościniec",
		dzielnica: "Wawer",
	},
	{
		id: 984,
		ulica: "Goździków",
		dzielnica: "Wawer",
	},
	{
		id: 985,
		ulica: "Grabowska",
		dzielnica: "Wawer",
	},
	{
		id: 986,
		ulica: "Grabowskiego",
		dzielnica: "Śródmieście Południowe",
	},
	{
		id: 987,
		ulica: "Grajewska",
		dzielnica: "Wawer",
	},
	{
		id: 988,
		ulica: "Graniczna",
		dzielnica: "Śródmieście",
	},
	{
		id: 989,
		ulica: "Granitowa",
		dzielnica: "Wawer",
	},
	{
		id: 990,
		ulica: "Granowska",
		dzielnica: "Wawer",
	},
	{
		id: 991,
		ulica: "Grawerska",
		dzielnica: "Wawer",
	},
	{
		id: 992,
		ulica: "Grażyny",
		dzielnica: "Stary Mokotów",
	},
	{
		id: 993,
		ulica: "Grecka",
		dzielnica: "Wawer",
	},
	{
		id: 994,
		ulica: "Grenadierów",
		dzielnica: "Praga-Południe",
	},
	{
		id: 995,
		ulica: "Grenady",
		dzielnica: "Wola",
	},
	{
		id: 996,
		ulica: "Grocholicka",
		dzielnica: "Włochy",
	},
	{
		id: 997,
		ulica: "Grochowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 998,
		ulica: "Grodeckiego",
		dzielnica: "Wawer",
	},
	{
		id: 999,
		ulica: "Grodkowska",
		dzielnica: "Wawer",
	},
	{
		id: 1000,
		ulica: "Grodzieńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1001,
		ulica: "Grodziska",
		dzielnica: "Wawer",
	},
	{
		id: 1002,
		ulica: "Grodzka",
		dzielnica: "Stare Miasto",
	},
	{
		id: 1003,
		ulica: "Groera",
		dzielnica: "Wawer",
	},
	{
		id: 1004,
		ulica: "Groszkowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1005,
		ulica: "Groszowicka",
		dzielnica: "Wawer",
	},
	{
		id: 1006,
		ulica: "Grotowska",
		dzielnica: "Wawer",
	},
	{
		id: 1007,
		ulica: "Grottgera",
		dzielnica: "Mokotów",
	},
	{
		id: 1008,
		ulica: "Gruchacza",
		dzielnica: "Wawer",
	},
	{
		id: 1009,
		ulica: "Gruntowa",
		dzielnica: "Wawer",
	},
	{
		id: 1010,
		ulica: "pl. Grunwaldzki",
		dzielnica: "Śródmieście",
	},
	{
		id: 1011,
		ulica: 'Grupy AK "Kampinos"',
		dzielnica: "Wawer",
	},
	{
		id: 1012,
		ulica: 'Grupy AK "Północ"',
		dzielnica: "Czerniaków",
	},
	{
		id: 1013,
		ulica: "Gruszczyńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1014,
		ulica: "Gruszy",
		dzielnica: "Wawer",
	},
	{
		id: 1015,
		ulica: "Gruzińska",
		dzielnica: "Wawer",
	},
	{
		id: 1016,
		ulica: "Gryfitów",
		dzielnica: "Wawer",
	},
	{
		id: 1017,
		ulica: "Grzegorzewskiej",
		dzielnica: "Ursynów",
	},
	{
		id: 1018,
		ulica: "Grzesiuka",
		dzielnica: "Wawer",
	},
	{
		id: 1019,
		ulica: "Grzeszczyka",
		dzielnica: "Wawer",
	},
	{
		id: 1020,
		ulica: "Grzybowa",
		dzielnica: "Wawer",
	},
	{
		id: 1021,
		ulica: "Grzybowska",
		dzielnica: "Mirów",
	},
	{
		id: 1022,
		ulica: "pl. Grzybowski",
		dzielnica: "Śródmieście",
	},
	{
		id: 1023,
		ulica: "Grzymalitów",
		dzielnica: "Wawer",
	},
	{
		id: 1024,
		ulica: "Grzymały-Sokołowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1025,
		ulica: "Grójecka",
		dzielnica: "Ochota",
	},
	{
		id: 1026,
		ulica: "Grębałowska",
		dzielnica: "Wawer",
	},
	{
		id: 1027,
		ulica: "Gubinowska",
		dzielnica: "Wilanów",
	},
	{
		id: 1028,
		ulica: "Guderskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1029,
		ulica: "Guliwera",
		dzielnica: "Wawer",
	},
	{
		id: 1030,
		ulica: "Gutta",
		dzielnica: "Wawer",
	},
	{
		id: 1031,
		ulica: "Guńki",
		dzielnica: "Wawer",
	},
	{
		id: 1032,
		ulica: "Gwarków",
		dzielnica: "Wawer",
	},
	{
		id: 1033,
		ulica: "Gwiaździsta",
		dzielnica: "Bielany",
	},
	{
		id: 1034,
		ulica: "Gwintowa",
		dzielnica: "Wawer",
	},
	{
		id: 1035,
		ulica: "Góralska",
		dzielnica: "Wola",
	},
	{
		id: 1036,
		ulica: "Górczewska",
		dzielnica: "Wola",
	},
	{
		id: 1037,
		ulica: "Górna",
		dzielnica: "Wawer",
	},
	{
		id: 1038,
		ulica: "Górna Droga",
		dzielnica: "Wawer",
	},
	{
		id: 1039,
		ulica: "Górnośląska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1040,
		ulica: "Górska",
		dzielnica: "Mokotów",
	},
	{
		id: 1041,
		ulica: "Górskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 1042,
		ulica: "Gąbińska",
		dzielnica: "Wawer",
	},
	{
		id: 1043,
		ulica: "Gąsienicowa",
		dzielnica: "Wawer",
	},
	{
		id: 1044,
		ulica: "Gąsiorowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1045,
		ulica: "Gąsiorowskiej",
		dzielnica: "Wawer",
	},
	{
		id: 1046,
		ulica: "Gąsocińska",
		dzielnica: "Wawer",
	},
	{
		id: 1047,
		ulica: "Gębicka",
		dzielnica: "Wawer",
	},
	{
		id: 1048,
		ulica: "Gęślarska",
		dzielnica: "Wawer",
	},
	{
		id: 1049,
		ulica: "Gładka",
		dzielnica: "Włochy",
	},
	{
		id: 1050,
		ulica: "Głogowa",
		dzielnica: "Wawer",
	},
	{
		id: 1051,
		ulica: "Głogowska",
		dzielnica: "Wawer",
	},
	{
		id: 1052,
		ulica: "Głowackiego",
		dzielnica: "Bielany",
	},
	{
		id: 1053,
		ulica: "Głubczycka",
		dzielnica: "Wawer",
	},
	{
		id: 1054,
		ulica: "Głuszca",
		dzielnica: "Wawer",
	},
	{
		id: 1055,
		ulica: "Głuszycka",
		dzielnica: "Wawer",
	},
	{
		id: 1056,
		ulica: "Główna",
		dzielnica: "Wawer",
	},
	{
		id: 1057,
		ulica: "Głębocka",
		dzielnica: "Białołęka",
	},
	{
		id: 1058,
		ulica: "Głęboka",
		dzielnica: "Wawer",
	},
	{
		id: 1059,
		ulica: "Gżegżółki",
		dzielnica: "Wawer",
	},
	{
		id: 1060,
		ulica: "Hafciarska",
		dzielnica: "Wawer",
	},
	{
		id: 1061,
		ulica: "Hajduczka",
		dzielnica: "Wawer",
	},
	{
		id: 1062,
		ulica: "Hajnowska",
		dzielnica: "Wawer",
	},
	{
		id: 1063,
		ulica: "Hajoty",
		dzielnica: "Wawer",
	},
	{
		id: 1064,
		ulica: "Halki",
		dzielnica: "Wawer",
	},
	{
		id: 1065,
		ulica: "pl. Hallera",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1066,
		ulica: "Halna",
		dzielnica: "Wawer",
	},
	{
		id: 1067,
		ulica: "Handlowa",
		dzielnica: "Targówek",
	},
	{
		id: 1068,
		ulica: "Hankiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 1069,
		ulica: "Harfowa",
		dzielnica: "Włochy",
	},
	{
		id: 1070,
		ulica: "Hassa",
		dzielnica: "Wawer",
	},
	{
		id: 1071,
		ulica: "Haubicy",
		dzielnica: "Wawer",
	},
	{
		id: 1072,
		ulica: "Hauke-Bosaka",
		dzielnica: "Wawer",
	},
	{
		id: 1073,
		ulica: "Hawajska",
		dzielnica: "Ursynów",
	},
	{
		id: 1074,
		ulica: "Hańczy",
		dzielnica: "Wawer",
	},
	{
		id: 1075,
		ulica: "Hebanowa",
		dzielnica: "Wawer",
	},
	{
		id: 1076,
		ulica: "Hejnałowa",
		dzielnica: "Wawer",
	},
	{
		id: 1077,
		ulica: "Heliotropów",
		dzielnica: "Wawer",
	},
	{
		id: 1078,
		ulica: "Heloizy",
		dzielnica: "Wawer",
	},
	{
		id: 1079,
		ulica: "pl. Henkla",
		dzielnica: "Wawer",
	},
	{
		id: 1080,
		ulica: "Hennela",
		dzielnica: "Włochy",
	},
	{
		id: 1081,
		ulica: "Henryka Pobożnego",
		dzielnica: "Wawer",
	},
	{
		id: 1082,
		ulica: "Henryka Probusa",
		dzielnica: "Wawer",
	},
	{
		id: 1083,
		ulica: "Henrykowska",
		dzielnica: "Białołęka",
	},
	{
		id: 1084,
		ulica: "Herbaciana",
		dzielnica: "Wawer",
	},
	{
		id: 1085,
		ulica: "Herbowa",
		dzielnica: "Wawer",
	},
	{
		id: 1086,
		ulica: "Herbsta",
		dzielnica: "Ursynów",
	},
	{
		id: 1087,
		ulica: "Heroldów",
		dzielnica: "Bielany",
	},
	{
		id: 1088,
		ulica: "Hertza",
		dzielnica: "Wawer",
	},
	{
		id: 1089,
		ulica: "Hery",
		dzielnica: "Wawer",
	},
	{
		id: 1090,
		ulica: "Hetmańska",
		dzielnica: "Wawer",
	},
	{
		id: 1091,
		ulica: "Hiacyntowa",
		dzielnica: "Wawer",
	},
	{
		id: 1092,
		ulica: "Hieroglif",
		dzielnica: "Wawer",
	},
	{
		id: 1093,
		ulica: "św. Hieronima",
		dzielnica: "Białołęka",
	},
	{
		id: 1094,
		ulica: "Himalajska",
		dzielnica: "Wawer",
	},
	{
		id: 1095,
		ulica: "Hipolitowa",
		dzielnica: "Wawer",
	},
	{
		id: 1096,
		ulica: "Hipoteczna",
		dzielnica: "Wola",
	},
	{
		id: 1097,
		ulica: "Hipotezy",
		dzielnica: "Wawer",
	},
	{
		id: 1098,
		ulica: "Hirszfelda",
		dzielnica: "Ursynów",
	},
	{
		id: 1099,
		ulica: "ks. Hlonda",
		dzielnica: "Wilanów",
	},
	{
		id: 1100,
		ulica: "Hłaski",
		dzielnica: "Wawer",
	},
	{
		id: 1101,
		ulica: "Hodowlana",
		dzielnica: "Wawer",
	},
	{
		id: 1102,
		ulica: "Hoffmanowej",
		dzielnica: "Stara Ochota",
	},
	{
		id: 1103,
		ulica: "Hoene-Wrońskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1104,
		ulica: "Hołubcowa",
		dzielnica: "Ursynów",
	},
	{
		id: 1105,
		ulica: "Hołówki",
		dzielnica: "Mokotów",
	},
	{
		id: 1106,
		ulica: "Homera",
		dzielnica: "Wawer",
	},
	{
		id: 1107,
		ulica: "Horbaczewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1108,
		ulica: "Horodelska",
		dzielnica: "Wawer",
	},
	{
		id: 1109,
		ulica: "Hortensji",
		dzielnica: "Wawer",
	},
	{
		id: 1110,
		ulica: "Hozjusza",
		dzielnica: "Bielany",
	},
	{
		id: 1111,
		ulica: "Hoża",
		dzielnica: "Śródmieście",
	},
	{
		id: 1112,
		ulica: "Hrubieszowska",
		dzielnica: "Wola",
	},
	{
		id: 1113,
		ulica: '"Hubala" Dobrzańskiego',
		dzielnica: "Wawer",
	},
	{
		id: 1114,
		ulica: "Hubera",
		dzielnica: "Wawer",
	},
	{
		id: 1115,
		ulica: "Huculska",
		dzielnica: "Mokotów",
	},
	{
		id: 1116,
		ulica: "Hufcowa",
		dzielnica: "Wawer",
	},
	{
		id: 1117,
		ulica: "Humanistów",
		dzielnica: "Wawer",
	},
	{
		id: 1118,
		ulica: "Humańska",
		dzielnica: "Stary Mokotów",
	},
	{
		id: 1119,
		ulica: "Husa",
		dzielnica: "Wawer",
	},
	{
		id: 1120,
		ulica: "Husarii",
		dzielnica: "Wawer",
	},
	{
		id: 1121,
		ulica: "Husarska",
		dzielnica: "Wawer",
	},
	{
		id: 1122,
		ulica: "Hutnicza",
		dzielnica: "Wawer",
	},
	{
		id: 1123,
		ulica: "Hynka",
		dzielnica: "Włochy",
	},
	{
		id: 1124,
		ulica: "Iberyjska",
		dzielnica: "Wilanów",
	},
	{
		id: 1125,
		ulica: "Ibisa",
		dzielnica: "Wawer",
	},
	{
		id: 1126,
		ulica: "Idzikowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1127,
		ulica: "Idźkowskiego",
		dzielnica: "Powiśle",
	},
	{
		id: 1128,
		ulica: "Igańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1129,
		ulica: "Ikara",
		dzielnica: "Włochy",
	},
	{
		id: 1130,
		ulica: "Ilskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1131,
		ulica: "Imbirowa",
		dzielnica: "Wawer",
	},
	{
		id: 1132,
		ulica: "Imielińska",
		dzielnica: "Ursynów",
	},
	{
		id: 1133,
		ulica: "Pasaż Imieliński",
		dzielnica: "Ursynów",
	},
	{
		id: 1134,
		ulica: "Improwizacji",
		dzielnica: "Wawer",
	},
	{
		id: 1135,
		ulica: "Indycza",
		dzielnica: "Wawer",
	},
	{
		id: 1136,
		ulica: "Indyjska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1137,
		ulica: "Inflancka",
		dzielnica: "Śródmieście",
	},
	{
		id: 1138,
		ulica: "Inowrocławska",
		dzielnica: "Wola",
	},
	{
		id: 1139,
		ulica: "Inowłodzka",
		dzielnica: "Wawer",
	},
	{
		id: 1140,
		ulica: "Inspektowa",
		dzielnica: "Wawer",
	},
	{
		id: 1141,
		ulica: "Instalatorów",
		dzielnica: "Włochy",
	},
	{
		id: 1142,
		ulica: "Instruktorska",
		dzielnica: "Wawer",
	},
	{
		id: 1143,
		ulica: "Insurekcji",
		dzielnica: "Wawer",
	},
	{
		id: 1144,
		ulica: "pl. Inwalidów",
		dzielnica: "Żoliborz",
	},
	{
		id: 1145,
		ulica: "Inżynierska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1146,
		ulica: "Ireny",
		dzielnica: "Wawer",
	},
	{
		id: 1147,
		ulica: "Irlandzka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1148,
		ulica: "Irminy",
		dzielnica: "Wawer",
	},
	{
		id: 1149,
		ulica: "Irysowa",
		dzielnica: "Wawer",
	},
	{
		id: 1150,
		ulica: "Irzykowskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 1151,
		ulica: "Iskry",
		dzielnica: "Wawer",
	},
	{
		id: 1152,
		ulica: "Iwanowa-Szajnowicza",
		dzielnica: "Wilanów",
	},
	{
		id: 1153,
		ulica: "Iwicka",
		dzielnica: "Mokotów",
	},
	{
		id: 1154,
		ulica: "Iwonicka",
		dzielnica: "Wawer",
	},
	{
		id: 1155,
		ulica: "Izabelli",
		dzielnica: "Wawer",
	},
	{
		id: 1156,
		ulica: "Izbicka",
		dzielnica: "Wawer",
	},
	{
		id: 1157,
		ulica: "Izdebnicka",
		dzielnica: "Wawer",
	},
	{
		id: 1158,
		ulica: "Izoldy",
		dzielnica: "Wawer",
	},
	{
		id: 1159,
		ulica: "Iłżecka",
		dzielnica: "Mokotów",
	},
	{
		id: 1160,
		ulica: "Jabłeczna",
		dzielnica: "Wawer",
	},
	{
		id: 1161,
		ulica: "Jabłoni",
		dzielnica: "Wawer",
	},
	{
		id: 1162,
		ulica: "Jabłonowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1163,
		ulica: "Jachowicza",
		dzielnica: "Wawer",
	},
	{
		id: 1164,
		ulica: "Jachtowa",
		dzielnica: "Wawer",
	},
	{
		id: 1165,
		ulica: "Jacka i Agatki",
		dzielnica: "Wawer",
	},
	{
		id: 1166,
		ulica: "Jadowska",
		dzielnica: "Wawer",
	},
	{
		id: 1167,
		ulica: "Jadźwingów",
		dzielnica: "Mokotów",
	},
	{
		id: 1168,
		ulica: "Jagiellońska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1169,
		ulica: "Jagielska",
		dzielnica: "Ursynów",
	},
	{
		id: 1170,
		ulica: "Jagienki",
		dzielnica: "Wawer",
	},
	{
		id: 1171,
		ulica: "Jagmina",
		dzielnica: "Wawer",
	},
	{
		id: 1172,
		ulica: "Jagny",
		dzielnica: "Wawer",
	},
	{
		id: 1173,
		ulica: "Jagody",
		dzielnica: "Wawer",
	},
	{
		id: 1174,
		ulica: "Jakiela",
		dzielnica: "Wawer",
	},
	{
		id: 1175,
		ulica: "Jakobinów",
		dzielnica: "Wawer",
	},
	{
		id: 1176,
		ulica: "Jaktorowska",
		dzielnica: "Wola",
	},
	{
		id: 1177,
		ulica: "Jakubowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1178,
		ulica: "Jana III Sobieskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1179,
		ulica: "Jana Kazimierza",
		dzielnica: "Wola",
	},
	{
		id: 1180,
		ulica: "Jana Olbrachta",
		dzielnica: "Wola",
	},
	{
		id: 1181,
		ulica: "al. Jana Pawła II",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 1182,
		ulica: "Janczarów",
		dzielnica: "Wawer",
	},
	{
		id: 1183,
		ulica: "Janinówka",
		dzielnica: "Wawer",
	},
	{
		id: 1184,
		ulica: "Janiszowska",
		dzielnica: "Włochy",
	},
	{
		id: 1185,
		ulica: "Janka Muzykanta",
		dzielnica: "Włochy",
	},
	{
		id: 1186,
		ulica: "Jankowska",
		dzielnica: "Wawer",
	},
	{
		id: 1187,
		ulica: "Janowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1188,
		ulica: "Jantar",
		dzielnica: "Wawer",
	},
	{
		id: 1189,
		ulica: "Jantarowy Szlak",
		dzielnica: "Wawer",
	},
	{
		id: 1190,
		ulica: "Januszewska",
		dzielnica: "Wawer",
	},
	{
		id: 1191,
		ulica: "Jara",
		dzielnica: "Wawer",
	},
	{
		id: 1192,
		ulica: "Jaracza",
		dzielnica: "Powiśle",
	},
	{
		id: 1193,
		ulica: "Jarocińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1194,
		ulica: "Jarząbków",
		dzielnica: "Wawer",
	},
	{
		id: 1195,
		ulica: "Jarzębinowa",
		dzielnica: "Wawer",
	},
	{
		id: 1196,
		ulica: "Jarzębskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1197,
		ulica: "Jasielska",
		dzielnica: "Wawer",
	},
	{
		id: 1198,
		ulica: "Jasiniec",
		dzielnica: "Wawer",
	},
	{
		id: 1199,
		ulica: "Jasińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1200,
		ulica: "Jaskółcza",
		dzielnica: "Wawer",
	},
	{
		id: 1201,
		ulica: "Jasna",
		dzielnica: "Śródmieście",
	},
	{
		id: 1202,
		ulica: "Jasnodworska",
		dzielnica: "Żoliborz",
	},
	{
		id: 1203,
		ulica: "Jasnorzewskiej",
		dzielnica: "Wawer",
	},
	{
		id: 1204,
		ulica: "Jastrzębia",
		dzielnica: "Wawer",
	},
	{
		id: 1205,
		ulica: "Jastrzębowskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 1206,
		ulica: "Jaszczurcza",
		dzielnica: "Wawer",
	},
	{
		id: 1207,
		ulica: "Jaszowiecka",
		dzielnica: "Mokotów",
	},
	{
		id: 1208,
		ulica: "Jaworowa",
		dzielnica: "Wawer",
	},
	{
		id: 1209,
		ulica: "Jaworowska",
		dzielnica: "Wawer",
	},
	{
		id: 1210,
		ulica: "Jaworzniaków",
		dzielnica: "Wawer",
	},
	{
		id: 1211,
		ulica: "Jaworzyńska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1212,
		ulica: "Jazdów",
		dzielnica: "Śródmieście",
	},
	{
		id: 1213,
		ulica: "Jazgarzewska",
		dzielnica: "Mokotów",
	},
	{
		id: 1214,
		ulica: "Jałowcowa",
		dzielnica: "Wawer",
	},
	{
		id: 1215,
		ulica: "Jałtańska",
		dzielnica: "Wawer",
	},
	{
		id: 1216,
		ulica: "Jedlińska",
		dzielnica: "Wawer",
	},
	{
		id: 1217,
		ulica: "Jedwabnicka",
		dzielnica: "Wawer",
	},
	{
		id: 1218,
		ulica: "Jelenia",
		dzielnica: "Ochota",
	},
	{
		id: 1219,
		ulica: "Jeleniogórska",
		dzielnica: "Wawer",
	},
	{
		id: 1220,
		ulica: "Jelinka",
		dzielnica: "Wawer",
	},
	{
		id: 1221,
		ulica: "Jemiołuszki",
		dzielnica: "Wawer",
	},
	{
		id: 1222,
		ulica: "al. Jerozolimskie",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 1223,
		ulica: "Jerzego",
		dzielnica: "Wawer",
	},
	{
		id: 1224,
		ulica: "Jesienna",
		dzielnica: "Wawer",
	},
	{
		id: 1225,
		ulica: "Jesiennych Liści",
		dzielnica: "Wawer",
	},
	{
		id: 1226,
		ulica: "Jesionowa",
		dzielnica: "Wawer",
	},
	{
		id: 1227,
		ulica: "Jesiotrowa",
		dzielnica: "Wawer",
	},
	{
		id: 1228,
		ulica: "Jezierskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1229,
		ulica: "Jeziorańskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1230,
		ulica: "Jeziorki",
		dzielnica: "Wawer",
	},
	{
		id: 1231,
		ulica: "Jeziorna",
		dzielnica: "Wawer",
	},
	{
		id: 1232,
		ulica: "Jeziorowa",
		dzielnica: "Wawer",
	},
	{
		id: 1233,
		ulica: "Jezuicka",
		dzielnica: "Stare Miasto",
	},
	{
		id: 1234,
		ulica: "Jeździecka",
		dzielnica: "Wawer",
	},
	{
		id: 1235,
		ulica: "Jeżewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1236,
		ulica: "Jeżowa",
		dzielnica: "Wawer",
	},
	{
		id: 1237,
		ulica: "Jodłowa",
		dzielnica: "Wawer",
	},
	{
		id: 1238,
		ulica: "Joliot-Curie",
		dzielnica: "Śródmieście",
	},
	{
		id: 1239,
		ulica: "Jontka",
		dzielnica: "Wawer",
	},
	{
		id: 1240,
		ulica: "Jordanowska",
		dzielnica: "Wawer",
	},
	{
		id: 1241,
		ulica: "Joteyki",
		dzielnica: "Stara Ochota",
	},
	{
		id: 1242,
		ulica: "Jowisza",
		dzielnica: "Wawer",
	},
	{
		id: 1243,
		ulica: "Joyce'a",
		dzielnica: "Wawer",
	},
	{
		id: 1244,
		ulica: "Jórskiego",
		dzielnica: "Białołęka",
	},
	{
		id: 1245,
		ulica: "Jubilerska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1246,
		ulica: "Jugosłowiańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1247,
		ulica: "Juhasów",
		dzielnica: "Wawer",
	},
	{
		id: 1248,
		ulica: "Julianowska",
		dzielnica: "Wawer",
	},
	{
		id: 1249,
		ulica: "Junaków",
		dzielnica: "Wawer",
	},
	{
		id: 1250,
		ulica: "Junkiewicz",
		dzielnica: "Wawer",
	},
	{
		id: 1251,
		ulica: "Juranda ze Spychowa",
		dzielnica: "Wawer",
	},
	{
		id: 1252,
		ulica: "Juraty",
		dzielnica: "Wawer",
	},
	{
		id: 1253,
		ulica: "Jutrzenki",
		dzielnica: "Włochy",
	},
	{
		id: 1254,
		ulica: "Kabacki Dukt",
		dzielnica: "Ursynów",
	},
	{
		id: 1255,
		ulica: "Kabaretowa",
		dzielnica: "Wawer",
	},
	{
		id: 1256,
		ulica: "Kabrioletu",
		dzielnica: "Wawer",
	},
	{
		id: 1257,
		ulica: "Kacpury",
		dzielnica: "Wawer",
	},
	{
		id: 1258,
		ulica: "Kacza",
		dzielnica: "Wola",
	},
	{
		id: 1259,
		ulica: "Kaczeńca",
		dzielnica: "Wawer",
	},
	{
		id: 1260,
		ulica: "Kaczorowska",
		dzielnica: "Wawer",
	},
	{
		id: 1261,
		ulica: "Kaczy Dół",
		dzielnica: "Wawer",
	},
	{
		id: 1262,
		ulica: "Kaden-Bandrowskiego",
		dzielnica: "Wola",
	},
	{
		id: 1263,
		ulica: "Kadetów",
		dzielnica: "Wawer",
	},
	{
		id: 1264,
		ulica: "Kadrowa",
		dzielnica: "Wawer",
	},
	{
		id: 1265,
		ulica: "Kadłubka",
		dzielnica: "Wawer",
	},
	{
		id: 1266,
		ulica: "Kajakowa",
		dzielnica: "Ursynów",
	},
	{
		id: 1267,
		ulica: "Kajetańska",
		dzielnica: "Wawer",
	},
	{
		id: 1268,
		ulica: "Kajki",
		dzielnica: "Wawer",
	},
	{
		id: 1269,
		ulica: "Kakowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1270,
		ulica: "Kaktusowa",
		dzielnica: "Wawer",
	},
	{
		id: 1271,
		ulica: "Kalambur",
		dzielnica: "Wawer",
	},
	{
		id: 1272,
		ulica: "Kalatówki",
		dzielnica: "Wawer",
	},
	{
		id: 1273,
		ulica: "Kalendarzowa",
		dzielnica: "Włochy",
	},
	{
		id: 1274,
		ulica: "Kaletnicza",
		dzielnica: "Wawer",
	},
	{
		id: 1275,
		ulica: "Kaleńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1276,
		ulica: "Kalinowa",
		dzielnica: "Wawer",
	},
	{
		id: 1277,
		ulica: "Kalinowej Łąki",
		dzielnica: "Wawer",
	},
	{
		id: 1278,
		ulica: "Kalinowska",
		dzielnica: "Wawer",
	},
	{
		id: 1279,
		ulica: "Kaliska",
		dzielnica: "Stara Ochota",
	},
	{
		id: 1280,
		ulica: "Kaliskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 1281,
		ulica: "gen. S. Kaliskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 1282,
		ulica: "Kamasznicza",
		dzielnica: "Wawer",
	},
	{
		id: 1283,
		ulica: "Kameralna",
		dzielnica: "Wawer",
	},
	{
		id: 1284,
		ulica: "Kamienna",
		dzielnica: "Wawer",
	},
	{
		id: 1285,
		ulica: "Kamienne Schodki",
		dzielnica: "Stare Miasto",
	},
	{
		id: 1286,
		ulica: "Kamieńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1287,
		ulica: "Kamionkowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1288,
		ulica: "Kamińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1289,
		ulica: "A. Kamińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1290,
		ulica: "Kampinoska",
		dzielnica: "Bielany",
	},
	{
		id: 1291,
		ulica: "Kanadyjska",
		dzielnica: "Wawer",
	},
	{
		id: 1292,
		ulica: "Kanarkowa",
		dzielnica: "Wawer",
	},
	{
		id: 1293,
		ulica: "Kanałowa",
		dzielnica: "Wawer",
	},
	{
		id: 1294,
		ulica: "Kaniowska",
		dzielnica: "Wawer",
	},
	{
		id: 1295,
		ulica: "Kanonia",
		dzielnica: "Stare Miasto",
	},
	{
		id: 1296,
		ulica: "Kanonierska",
		dzielnica: "Ochota",
	},
	{
		id: 1297,
		ulica: "Kapeli",
		dzielnica: "Wawer",
	},
	{
		id: 1298,
		ulica: "Kapitańska",
		dzielnica: "Wawer",
	},
	{
		id: 1299,
		ulica: "Kapitulna",
		dzielnica: "Śródmieście",
	},
	{
		id: 1300,
		ulica: "Kaprys",
		dzielnica: "Wawer",
	},
	{
		id: 1301,
		ulica: "Kapucyńska",
		dzielnica: "Wawer",
	},
	{
		id: 1302,
		ulica: "Karabeli",
		dzielnica: "Bemowo",
	},
	{
		id: 1303,
		ulica: "Karasia",
		dzielnica: "Śródmieście",
	},
	{
		id: 1304,
		ulica: "Karatowa",
		dzielnica: "Wawer",
	},
	{
		id: 1305,
		ulica: "Karczewska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1306,
		ulica: "Karczunkowska",
		dzielnica: "Ursynów",
	},
	{
		id: 1307,
		ulica: "Skwer Kardynała Wyszyńskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 1308,
		ulica: "Karkonoszy",
		dzielnica: "Wawer",
	},
	{
		id: 1309,
		ulica: "Karla",
		dzielnica: "Wawer",
	},
	{
		id: 1310,
		ulica: "Karmazynowa",
		dzielnica: "Wawer",
	},
	{
		id: 1311,
		ulica: "Karmelicka",
		dzielnica: "Muranów",
	},
	{
		id: 1312,
		ulica: "Karminowa",
		dzielnica: "Wawer",
	},
	{
		id: 1313,
		ulica: "Karnicka",
		dzielnica: "Wawer",
	},
	{
		id: 1314,
		ulica: "Karolinki",
		dzielnica: "Wawer",
	},
	{
		id: 1315,
		ulica: "Karolkowa",
		dzielnica: "Wola",
	},
	{
		id: 1316,
		ulica: "Karowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1317,
		ulica: "Karpacka",
		dzielnica: "Wawer",
	},
	{
		id: 1318,
		ulica: "Karpińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1319,
		ulica: "Karska",
		dzielnica: "Wawer",
	},
	{
		id: 1320,
		ulica: "Kartaginy",
		dzielnica: "Wawer",
	},
	{
		id: 1321,
		ulica: "Kartezjusza",
		dzielnica: "Wawer",
	},
	{
		id: 1322,
		ulica: "Kartonowa",
		dzielnica: "Wawer",
	},
	{
		id: 1323,
		ulica: "Karuzela",
		dzielnica: "Wawer",
	},
	{
		id: 1324,
		ulica: "Karwińska",
		dzielnica: "Wawer",
	},
	{
		id: 1325,
		ulica: "Karłowicza",
		dzielnica: "Wawer",
	},
	{
		id: 1326,
		ulica: "Kaskadowa",
		dzielnica: "Wawer",
	},
	{
		id: 1327,
		ulica: "Kaspijska",
		dzielnica: "Wawer",
	},
	{
		id: 1328,
		ulica: "Kasprowicza",
		dzielnica: "Bielany",
	},
	{
		id: 1329,
		ulica: "Kasprzaka",
		dzielnica: "Wola",
	},
	{
		id: 1330,
		ulica: "Kasztanowa",
		dzielnica: "Wawer",
	},
	{
		id: 1331,
		ulica: "pl. Kasztelański",
		dzielnica: "Wawer",
	},
	{
		id: 1332,
		ulica: "Kaszubska",
		dzielnica: "Wawer",
	},
	{
		id: 1333,
		ulica: "Katalogowa",
		dzielnica: "Wawer",
	},
	{
		id: 1334,
		ulica: "Katalońska",
		dzielnica: "Wawer",
	},
	{
		id: 1335,
		ulica: "Katarynki",
		dzielnica: "Wawer",
	},
	{
		id: 1336,
		ulica: "Katowicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1337,
		ulica: "Kaukaska",
		dzielnica: "Wawer",
	},
	{
		id: 1338,
		ulica: "Kawalerii",
		dzielnica: "Śródmieście",
	},
	{
		id: 1339,
		ulica: "Kawcza",
		dzielnica: "Wawer",
	},
	{
		id: 1340,
		ulica: "Kawy",
		dzielnica: "Wawer",
	},
	{
		id: 1341,
		ulica: "Kawęczyńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1342,
		ulica: "Kazimierza Jagiellończyka",
		dzielnica: "Wawer",
	},
	{
		id: 1343,
		ulica: "Kazimierza Odnowiciela",
		dzielnica: "Wawer",
	},
	{
		id: 1344,
		ulica: "Kazimierza Sprawiedliwego",
		dzielnica: "Wawer",
	},
	{
		id: 1345,
		ulica: "Kazimierza Wielkiego",
		dzielnica: "Wola",
	},
	{
		id: 1346,
		ulica: "Kazimierzowska",
		dzielnica: "Mokotów",
	},
	{
		id: 1347,
		ulica: "Kazubów",
		dzielnica: "Wawer",
	},
	{
		id: 1348,
		ulica: "Kazury",
		dzielnica: "Ursynów",
	},
	{
		id: 1349,
		ulica: "Kaśki Kariatydy",
		dzielnica: "Wawer",
	},
	{
		id: 1350,
		ulica: "Kądziołeczki",
		dzielnica: "Wawer",
	},
	{
		id: 1351,
		ulica: "Kąkolewska",
		dzielnica: "Wawer",
	},
	{
		id: 1352,
		ulica: "Kąkolowa",
		dzielnica: "Wawer",
	},
	{
		id: 1353,
		ulica: "Kątna",
		dzielnica: "Wawer",
	},
	{
		id: 1354,
		ulica: "Kątskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1355,
		ulica: "Kąty Grodziskie",
		dzielnica: "Białołęka",
	},
	{
		id: 1356,
		ulica: "Keniga",
		dzielnica: "Bemowo",
	},
	{
		id: 1357,
		ulica: "Ketlinga",
		dzielnica: "Wawer",
	},
	{
		id: 1358,
		ulica: "Kędzierskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1359,
		ulica: "Kędzierzyńska",
		dzielnica: "Wawer",
	},
	{
		id: 1360,
		ulica: "Kępa Tarchomińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1361,
		ulica: "Kępna",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1362,
		ulica: "Kickiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1363,
		ulica: "Kiedacza",
		dzielnica: "Ursynów",
	},
	{
		id: 1364,
		ulica: "Kiejstuta",
		dzielnica: "Wawer",
	},
	{
		id: 1365,
		ulica: "Kielecka",
		dzielnica: "Mokotów",
	},
	{
		id: 1366,
		ulica: "Kierbedzia",
		dzielnica: "Mokotów",
	},
	{
		id: 1367,
		ulica: "Kiermaszowa",
		dzielnica: "Wawer",
	},
	{
		id: 1368,
		ulica: "Kiersnowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1369,
		ulica: "Kiełpińska",
		dzielnica: "Bielany",
	},
	{
		id: 1370,
		ulica: "Kijowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1371,
		ulica: "Kilińskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1372,
		ulica: "Kinetyczna",
		dzielnica: "Wawer",
	},
	{
		id: 1373,
		ulica: "Kinowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1374,
		ulica: "Kiprów",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1375,
		ulica: "Kirasjerów",
		dzielnica: "Wawer",
	},
	{
		id: 1376,
		ulica: "Kircholmska",
		dzielnica: "Wawer",
	},
	{
		id: 1377,
		ulica: "Kisielicka",
		dzielnica: "Wawer",
	},
	{
		id: 1378,
		ulica: "Kiwerska",
		dzielnica: "Wawer",
	},
	{
		id: 1379,
		ulica: "Klarnecistów",
		dzielnica: "Wawer",
	},
	{
		id: 1380,
		ulica: "Klarysewska",
		dzielnica: "Wilanów",
	},
	{
		id: 1381,
		ulica: "Klasyków",
		dzielnica: "Białołęka",
	},
	{
		id: 1382,
		ulica: "Klasztorna",
		dzielnica: "Targówek",
	},
	{
		id: 1383,
		ulica: "Klaudyny",
		dzielnica: "Bielany",
	},
	{
		id: 1384,
		ulica: "Klecka",
		dzielnica: "Wawer",
	},
	{
		id: 1385,
		ulica: "Kleczewska",
		dzielnica: "Wawer",
	},
	{
		id: 1386,
		ulica: "Kleeberga",
		dzielnica: "Wawer",
	},
	{
		id: 1387,
		ulica: "Klemensiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 1388,
		ulica: "Klementowicka",
		dzielnica: "Wawer",
	},
	{
		id: 1389,
		ulica: "Kleszczowa",
		dzielnica: "Włochy",
	},
	{
		id: 1390,
		ulica: "Klimatyczna",
		dzielnica: "Wawer",
	},
	{
		id: 1391,
		ulica: "Klimczaka",
		dzielnica: "Wilanów",
	},
	{
		id: 1392,
		ulica: "Klimontowska",
		dzielnica: "Wawer",
	},
	{
		id: 1393,
		ulica: "Klonowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1394,
		ulica: "Klonowicza",
		dzielnica: "Wawer",
	},
	{
		id: 1395,
		ulica: "Klubowa",
		dzielnica: "Wawer",
	},
	{
		id: 1396,
		ulica: "Kluczborska",
		dzielnica: "Wawer",
	},
	{
		id: 1397,
		ulica: "Kluczowa",
		dzielnica: "Wawer",
	},
	{
		id: 1398,
		ulica: "Klukowska",
		dzielnica: "Targówek",
	},
	{
		id: 1399,
		ulica: "Kłobucka",
		dzielnica: "Ursynów",
	},
	{
		id: 1400,
		ulica: "Kłodzka",
		dzielnica: "Wawer",
	},
	{
		id: 1401,
		ulica: "Kłopotowskiego",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1402,
		ulica: "Kłosia",
		dzielnica: "Wawer",
	},
	{
		id: 1403,
		ulica: "Kłosowa",
		dzielnica: "Wawer",
	},
	{
		id: 1404,
		ulica: "Kłuszyńskiej",
		dzielnica: "Wawer",
	},
	{
		id: 1405,
		ulica: "Kmicica",
		dzielnica: "Wawer",
	},
	{
		id: 1406,
		ulica: "Kminkowa",
		dzielnica: "Wawer",
	},
	{
		id: 1407,
		ulica: "Kniaźnina",
		dzielnica: "Wawer",
	},
	{
		id: 1408,
		ulica: "Knyszyńska",
		dzielnica: "Wawer",
	},
	{
		id: 1409,
		ulica: "Kobiałka",
		dzielnica: "Białołęka",
	},
	{
		id: 1410,
		ulica: "Kobielska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1411,
		ulica: "Kobryńska",
		dzielnica: "Wawer",
	},
	{
		id: 1412,
		ulica: "Kobuza",
		dzielnica: "Wawer",
	},
	{
		id: 1413,
		ulica: "Kobylańska",
		dzielnica: "Wawer",
	},
	{
		id: 1414,
		ulica: "Kobzy",
		dzielnica: "Wawer",
	},
	{
		id: 1415,
		ulica: "Kochanowskiego",
		dzielnica: "Bielany",
	},
	{
		id: 1416,
		ulica: "Kochowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1417,
		ulica: "Kocjana",
		dzielnica: "Bemowo",
	},
	{
		id: 1418,
		ulica: "Kocka",
		dzielnica: "Wawer",
	},
	{
		id: 1419,
		ulica: "Kokoryczki",
		dzielnica: "Wawer",
	},
	{
		id: 1420,
		ulica: "Kokosowa",
		dzielnica: "Wawer",
	},
	{
		id: 1421,
		ulica: "Kolady",
		dzielnica: "Wawer",
	},
	{
		id: 1422,
		ulica: "Kolarska",
		dzielnica: "Wawer",
	},
	{
		id: 1423,
		ulica: "Kolbaczewska",
		dzielnica: "Wawer",
	},
	{
		id: 1424,
		ulica: "Kolbego",
		dzielnica: "Wawer",
	},
	{
		id: 1425,
		ulica: "Kolberga",
		dzielnica: "Wawer",
	},
	{
		id: 1426,
		ulica: "Kolegiacka",
		dzielnica: "Wilanów",
	},
	{
		id: 1427,
		ulica: "Kolejarska",
		dzielnica: "Włochy",
	},
	{
		id: 1428,
		ulica: "Kolejowa",
		dzielnica: "Wola",
	},
	{
		id: 1429,
		ulica: "Kolektorska",
		dzielnica: "Bielany",
	},
	{
		id: 1430,
		ulica: "Kolibrów",
		dzielnica: "Wawer",
	},
	{
		id: 1431,
		ulica: "Kolista",
		dzielnica: "Wawer",
	},
	{
		id: 1432,
		ulica: "Kolorowa",
		dzielnica: "Włochy",
	},
	{
		id: 1433,
		ulica: "Kolska",
		dzielnica: "Powązki",
	},
	{
		id: 1434,
		ulica: "Kolumba",
		dzielnica: "Wawer",
	},
	{
		id: 1435,
		ulica: "Kolumbijska",
		dzielnica: "Wawer",
	},
	{
		id: 1436,
		ulica: "al. Komandosów",
		dzielnica: "Wawer",
	},
	{
		id: 1437,
		ulica: "park Kombatantów",
		dzielnica: "Wola",
	},
	{
		id: 1438,
		ulica: "Komedy",
		dzielnica: "Wilanów",
	},
	{
		id: 1439,
		ulica: "al. Komisji Edukacji Narodowej",
		dzielnica: "Ursynów",
	},
	{
		id: 1440,
		ulica: "Komorowska",
		dzielnica: "Wawer",
	},
	{
		id: 1441,
		ulica: "Komorska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1442,
		ulica: 'Kompanii "Kordian"',
		dzielnica: "Wawer",
	},
	{
		id: 1443,
		ulica: "Kompasowa",
		dzielnica: "Wawer",
	},
	{
		id: 1444,
		ulica: "Komunardów",
		dzielnica: "Wola",
	},
	{
		id: 1445,
		ulica: "Konarskiego",
		dzielnica: "Wola",
	},
	{
		id: 1446,
		ulica: "Koncertowa",
		dzielnica: "Ursynów",
	},
	{
		id: 1447,
		ulica: "Kondracka",
		dzielnica: "Wawer",
	},
	{
		id: 1448,
		ulica: "Kondratowicza",
		dzielnica: "Targówek",
	},
	{
		id: 1449,
		ulica: "Konduktorska",
		dzielnica: "Włochy",
	},
	{
		id: 1450,
		ulica: "Konewki",
		dzielnica: "Wawer",
	},
	{
		id: 1451,
		ulica: "pl. Konfederacji",
		dzielnica: "Bielany",
	},
	{
		id: 1452,
		ulica: "Koniczynowa",
		dzielnica: "Wawer",
	},
	{
		id: 1453,
		ulica: "Koniecpolska",
		dzielnica: "Wawer",
	},
	{
		id: 1454,
		ulica: "Konińska",
		dzielnica: "Wawer",
	},
	{
		id: 1455,
		ulica: "Konopacka",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1456,
		ulica: "Konopczyńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1457,
		ulica: "Konopna",
		dzielnica: "Wawer",
	},
	{
		id: 1458,
		ulica: "Konopnickiej",
		dzielnica: "Śródmieście",
	},
	{
		id: 1459,
		ulica: "Konotopska",
		dzielnica: "Bemowo",
	},
	{
		id: 1460,
		ulica: "Konrada Wallenroda",
		dzielnica: "Wawer",
	},
	{
		id: 1461,
		ulica: "Konstancińska",
		dzielnica: "Mokotów",
	},
	{
		id: 1462,
		ulica: "Konstruktorska",
		dzielnica: "Mokotów",
	},
	{
		id: 1463,
		ulica: "pl. Konstytucji",
		dzielnica: "Śródmieście",
	},
	{
		id: 1464,
		ulica: "Kontuszowa",
		dzielnica: "Wawer",
	},
	{
		id: 1465,
		ulica: "Konwaliowa",
		dzielnica: "Wawer",
	},
	{
		id: 1466,
		ulica: "Konwiktorska",
		dzielnica: "Nowe Miasto",
	},
	{
		id: 1467,
		ulica: "Konwisarska",
		dzielnica: "Wola",
	},
	{
		id: 1468,
		ulica: "Kopalniana",
		dzielnica: "Wawer",
	},
	{
		id: 1469,
		ulica: "Kopcińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1470,
		ulica: "Kopernika",
		dzielnica: "Śródmieście",
	},
	{
		id: 1471,
		ulica: "Kopijników",
		dzielnica: "Wawer",
	},
	{
		id: 1472,
		ulica: "Kopińska",
		dzielnica: "Ochota",
	},
	{
		id: 1473,
		ulica: "Koprzywiańska",
		dzielnica: "Wawer",
	},
	{
		id: 1474,
		ulica: "Koralowa",
		dzielnica: "Wawer",
	},
	{
		id: 1475,
		ulica: "Korczaka",
		dzielnica: "Wawer",
	},
	{
		id: 1476,
		ulica: "Korczyńska",
		dzielnica: "Wawer",
	},
	{
		id: 1477,
		ulica: "Kordeckiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1478,
		ulica: "Kordiana",
		dzielnica: "Wawer",
	},
	{
		id: 1479,
		ulica: "Korfantego",
		dzielnica: "Wawer",
	},
	{
		id: 1480,
		ulica: "Korkowa",
		dzielnica: "Wawer",
	},
	{
		id: 1481,
		ulica: "Kormoranów",
		dzielnica: "Wawer",
	},
	{
		id: 1482,
		ulica: "Koronacyjna",
		dzielnica: "Wawer",
	},
	{
		id: 1483,
		ulica: "Koronowska",
		dzielnica: "Wawer",
	},
	{
		id: 1484,
		ulica: "Korotyńskiego",
		dzielnica: "Ochota",
	},
	{
		id: 1485,
		ulica: "Korowodu",
		dzielnica: "Wawer",
	},
	{
		id: 1486,
		ulica: "Korsaka",
		dzielnica: "Wawer",
	},
	{
		id: 1487,
		ulica: "Korsuńska",
		dzielnica: "Wawer",
	},
	{
		id: 1488,
		ulica: "Korsykańska",
		dzielnica: "Wawer",
	},
	{
		id: 1489,
		ulica: "Koryncka",
		dzielnica: "Wawer",
	},
	{
		id: 1490,
		ulica: "Korytnicka",
		dzielnica: "Wawer",
	},
	{
		id: 1491,
		ulica: "Korzeniowskiego",
		dzielnica: "Stara Ochota",
	},
	{
		id: 1492,
		ulica: "Korzenna",
		dzielnica: "Wawer",
	},
	{
		id: 1493,
		ulica: "Korzona",
		dzielnica: "Wawer",
	},
	{
		id: 1494,
		ulica: "Korzystna",
		dzielnica: "Wawer",
	},
	{
		id: 1495,
		ulica: "Kosaćcowa",
		dzielnica: "Wawer",
	},
	{
		id: 1496,
		ulica: "Kosiarzy",
		dzielnica: "Wawer",
	},
	{
		id: 1497,
		ulica: "Kosmatki",
		dzielnica: "Wawer",
	},
	{
		id: 1498,
		ulica: "Kosodrzewiny",
		dzielnica: "Wawer",
	},
	{
		id: 1499,
		ulica: "Kossaka",
		dzielnica: "Wawer",
	},
	{
		id: 1500,
		ulica: "Kossakowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1501,
		ulica: "Kossutha",
		dzielnica: "Wawer",
	},
	{
		id: 1502,
		ulica: "Kostki Napierskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1503,
		ulica: "Kostki Potockiego",
		dzielnica: "Wilanów",
	},
	{
		id: 1504,
		ulica: "Kostrzewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1505,
		ulica: "Kostrzyńska",
		dzielnica: "Wawer",
	},
	{
		id: 1506,
		ulica: "Kosynierów",
		dzielnica: "Wawer",
	},
	{
		id: 1507,
		ulica: "Koszalińska",
		dzielnica: "Wawer",
	},
	{
		id: 1508,
		ulica: "Koszycka",
		dzielnica: "Wawer",
	},
	{
		id: 1509,
		ulica: "Koszykowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1510,
		ulica: "Koszęcińska",
		dzielnica: "Wawer",
	},
	{
		id: 1511,
		ulica: "Kotarbińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 1512,
		ulica: "Kotlarska",
		dzielnica: "Mirów",
	},
	{
		id: 1513,
		ulica: "Kotsisa",
		dzielnica: "Bródno",
	},
	{
		id: 1514,
		ulica: "Kowalczyka",
		dzielnica: "Targówek",
	},
	{
		id: 1515,
		ulica: "Kowalskiego",
		dzielnica: "Bródno",
	},
	{
		id: 1516,
		ulica: "Kowelska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1517,
		ulica: "Kowieńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1518,
		ulica: "Kozia",
		dzielnica: "Śródmieście",
	},
	{
		id: 1519,
		ulica: "Kozia Górka",
		dzielnica: "Bielany",
	},
	{
		id: 1520,
		ulica: "Kozielska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1521,
		ulica: "Kozietulskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1522,
		ulica: "Koziorożca",
		dzielnica: "Ursynów",
	},
	{
		id: 1523,
		ulica: "Kozłowicka",
		dzielnica: "Białołęka",
	},
	{
		id: 1524,
		ulica: "Kozłowskiej",
		dzielnica: "Białołęka",
	},
	{
		id: 1525,
		ulica: "Kołacińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1526,
		ulica: "Kołobrzeska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1527,
		ulica: "Kołodziejska",
		dzielnica: "Wawer",
	},
	{
		id: 1528,
		ulica: "Kołowa",
		dzielnica: "Ochota",
	},
	{
		id: 1529,
		ulica: "Koński Jar",
		dzielnica: "Ursynów",
	},
	{
		id: 1530,
		ulica: "Kościańska",
		dzielnica: "Wawer",
	},
	{
		id: 1531,
		ulica: "Kościeliska",
		dzielnica: "Wawer",
	},
	{
		id: 1532,
		ulica: "Kościelna",
		dzielnica: "Śródmieście",
	},
	{
		id: 1533,
		ulica: "Kościerska",
		dzielnica: "Wawer",
	},
	{
		id: 1534,
		ulica: "Kościuszki",
		dzielnica: "Śródmieście",
	},
	{
		id: 1535,
		ulica: "Kościuszkowców",
		dzielnica: "Wawer",
	},
	{
		id: 1536,
		ulica: "Koźla",
		dzielnica: "Śródmieście",
	},
	{
		id: 1537,
		ulica: "Koźmiana",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1538,
		ulica: "Koźmińska",
		dzielnica: "Mokotów",
	},
	{
		id: 1539,
		ulica: "Kożuchowska",
		dzielnica: "Wawer",
	},
	{
		id: 1540,
		ulica: "Krajewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1541,
		ulica: "Krajeńska",
		dzielnica: "Białołęka",
	},
	{
		id: 1542,
		ulica: "Krakowiaków",
		dzielnica: "Włochy",
	},
	{
		id: 1543,
		ulica: "al. Krakowska",
		dzielnica: "Ochota",
	},
	{
		id: 1544,
		ulica: "Krakowskie Przedmieście",
		dzielnica: "Śródmieście",
	},
	{
		id: 1545,
		ulica: "Krakusa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1546,
		ulica: "Kramarska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1547,
		ulica: "Krasickiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1548,
		ulica: "Krasiczyńska",
		dzielnica: "Targówek",
	},
	{
		id: 1549,
		ulica: "pl. Krasińskich",
		dzielnica: "Śródmieście",
	},
	{
		id: 1550,
		ulica: "Krasińskiego",
		dzielnica: "Żoliborz",
	},
	{
		id: 1551,
		ulica: "Kraski",
		dzielnica: "Wawer",
	},
	{
		id: 1552,
		ulica: "Krasnobrodzka",
		dzielnica: "Targówek",
	},
	{
		id: 1553,
		ulica: "Krasnowolska",
		dzielnica: "Ursynów",
	},
	{
		id: 1554,
		ulica: "Krasnołęcka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1555,
		ulica: "Kraszewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1556,
		ulica: "Kraushara",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1557,
		ulica: "Krawiecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1558,
		ulica: "Krańcowa",
		dzielnica: "Włochy",
	},
	{
		id: 1559,
		ulica: "Kraśnicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1560,
		ulica: "Krechowiecka",
		dzielnica: "Ochota",
	},
	{
		id: 1561,
		ulica: "Kredytowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1562,
		ulica: "Kremowa",
		dzielnica: "Wawer",
	},
	{
		id: 1563,
		ulica: "Kresowa",
		dzielnica: "Wawer",
	},
	{
		id: 1564,
		ulica: "Krobińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1565,
		ulica: "Krochmalna",
		dzielnica: "Wola",
	},
	{
		id: 1566,
		ulica: "Krośniewicka",
		dzielnica: "Białołęka",
	},
	{
		id: 1567,
		ulica: "Królewska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1568,
		ulica: "Krucza",
		dzielnica: "Śródmieście",
	},
	{
		id: 1569,
		ulica: "Kruczkowskiego",
		dzielnica: "Powiśle",
	},
	{
		id: 1570,
		ulica: "Krupki",
		dzielnica: "Białołęka",
	},
	{
		id: 1571,
		ulica: "Krupnicza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1572,
		ulica: "Kruszewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1573,
		ulica: "Kruszwicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1574,
		ulica: "Kruszyńska",
		dzielnica: "Białołęka",
	},
	{
		id: 1575,
		ulica: "Krymska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1576,
		ulica: "Kryniczna",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1577,
		ulica: "Krynoliny",
		dzielnica: "Białołęka",
	},
	{
		id: 1578,
		ulica: "Krypska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1579,
		ulica: "Krysta",
		dzielnica: "Białołęka",
	},
	{
		id: 1580,
		ulica: "Kryształowa",
		dzielnica: "Białołęka",
	},
	{
		id: 1581,
		ulica: "Krzewna",
		dzielnica: "Wawer",
	},
	{
		id: 1582,
		ulica: "Krzyckiego",
		dzielnica: "Ochota",
	},
	{
		id: 1583,
		ulica: "Krzywe Koło",
		dzielnica: "Śródmieście",
	},
	{
		id: 1584,
		ulica: "Krzywickiego",
		dzielnica: "Ochota",
	},
	{
		id: 1585,
		ulica: "Krzywińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1586,
		ulica: "Krzywopoboczna",
		dzielnica: "Białołęka",
	},
	{
		id: 1587,
		ulica: "Krzywoń",
		dzielnica: "Białołęka",
	},
	{
		id: 1588,
		ulica: "Krzyżanowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1589,
		ulica: "Krzyżówki",
		dzielnica: "Białołęka",
	},
	{
		id: 1590,
		ulica: "Króla Artura",
		dzielnica: "Białołęka",
	},
	{
		id: 1591,
		ulica: "Króla Kazimierza",
		dzielnica: "Białołęka",
	},
	{
		id: 1592,
		ulica: "Króla Maciusia",
		dzielnica: "Białołęka",
	},
	{
		id: 1593,
		ulica: "Królewicza Jakuba",
		dzielnica: "Wilanów",
	},
	{
		id: 1594,
		ulica: "Królewska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1595,
		ulica: "Królowej Aldony",
		dzielnica: "Saska Kępa",
	},
	{
		id: 1596,
		ulica: "Królowej Bony",
		dzielnica: "Wilanów",
	},
	{
		id: 1597,
		ulica: "Królowej Jadwigi",
		dzielnica: "Wilanów",
	},
	{
		id: 1598,
		ulica: "Królowej Marysieńki",
		dzielnica: "Wilanów",
	},
	{
		id: 1599,
		ulica: "Królów Polskich",
		dzielnica: "Wilanów",
	},
	{
		id: 1600,
		ulica: "Krótka",
		dzielnica: "Śródmieście",
	},
	{
		id: 1601,
		ulica: "Króżańska",
		dzielnica: "Białołęka",
	},
	{
		id: 1602,
		ulica: "Krępowieckiego",
		dzielnica: "Bemowo",
	},
	{
		id: 1603,
		ulica: "Ksawerów",
		dzielnica: "Mokotów",
	},
	{
		id: 1604,
		ulica: "Książkowa",
		dzielnica: "Białołęka",
	},
	{
		id: 1605,
		ulica: "Książęca",
		dzielnica: "Śródmieście",
	},
	{
		id: 1606,
		ulica: "Księcia Bolesława",
		dzielnica: "Bemowo",
	},
	{
		id: 1607,
		ulica: "Księcia Janusza",
		dzielnica: "Wola",
	},
	{
		id: 1608,
		ulica: "Księcia Trojdena",
		dzielnica: "Ochota",
	},
	{
		id: 1609,
		ulica: "Księcia Witolda",
		dzielnica: "Wilanów",
	},
	{
		id: 1610,
		ulica: "Księcia Ziemowita",
		dzielnica: "Targówek",
	},
	{
		id: 1611,
		ulica: "Księgarzy",
		dzielnica: "Białołęka",
	},
	{
		id: 1612,
		ulica: "Księżnej Anny",
		dzielnica: "Wilanów",
	},
	{
		id: 1613,
		ulica: "Księżycowa",
		dzielnica: "Bielany",
	},
	{
		id: 1614,
		ulica: "Ku Wiśle",
		dzielnica: "Wawer",
	},
	{
		id: 1615,
		ulica: "Kubańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1616,
		ulica: "Kubickiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1617,
		ulica: "Kubusia Puchatka",
		dzielnica: "Śródmieście",
	},
	{
		id: 1618,
		ulica: "Kudowska",
		dzielnica: "Wawer",
	},
	{
		id: 1619,
		ulica: "Kuflewska",
		dzielnica: "Wawer",
	},
	{
		id: 1620,
		ulica: "Kuglarska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1621,
		ulica: "Kujawska",
		dzielnica: "Mokotów",
	},
	{
		id: 1622,
		ulica: "Kukiełki",
		dzielnica: "Ochota",
	},
	{
		id: 1623,
		ulica: "Kukuczki",
		dzielnica: "Targówek",
	},
	{
		id: 1624,
		ulica: "Kukułki",
		dzielnica: "Wawer",
	},
	{
		id: 1625,
		ulica: "Kulczyńskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 1626,
		ulica: "Kuligowska",
		dzielnica: "Wawer",
	},
	{
		id: 1627,
		ulica: "Kunickiego",
		dzielnica: "Wawer",
	},
	{
		id: 1628,
		ulica: "Kuracyjna",
		dzielnica: "Białołęka",
	},
	{
		id: 1629,
		ulica: "Kurantów",
		dzielnica: "Ursynów",
	},
	{
		id: 1630,
		ulica: "Kuratowskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 1631,
		ulica: "Kurhan",
		dzielnica: "Ochota",
	},
	{
		id: 1632,
		ulica: "Kuropatwy",
		dzielnica: "Ursynów",
	},
	{
		id: 1633,
		ulica: "Kurpiowska",
		dzielnica: "Mokotów",
	},
	{
		id: 1634,
		ulica: "Kurpińskiego",
		dzielnica: "Białołęka",
	},
	{
		id: 1635,
		ulica: "Kurzawska",
		dzielnica: "Wawer",
	},
	{
		id: 1636,
		ulica: "Kutnowska",
		dzielnica: "Wawer",
	},
	{
		id: 1637,
		ulica: "Kuźnicy Kołłątajowskiej",
		dzielnica: "Bielany",
	},
	{
		id: 1638,
		ulica: "Kwarciana",
		dzielnica: "Białołęka",
	},
	{
		id: 1639,
		ulica: "Kwatery Głównej",
		dzielnica: "Rembertów",
	},
	{
		id: 1640,
		ulica: "Kwiatkowskiego",
		dzielnica: "Wola",
	},
	{
		id: 1641,
		ulica: "Kwiatowa",
		dzielnica: "Wawer",
	},
	{
		id: 1642,
		ulica: "Kwidzyńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1643,
		ulica: "Kwitnąca",
		dzielnica: "Bielany",
	},
	{
		id: 1644,
		ulica: "Kwitnącego Sadu",
		dzielnica: "Ochota",
	},
	{
		id: 1645,
		ulica: "Kwitnącej Akacji",
		dzielnica: "Białołęka",
	},
	{
		id: 1646,
		ulica: "Lachmana",
		dzielnica: "Ursynów",
	},
	{
		id: 1647,
		ulica: "Lakowa",
		dzielnica: "Wawer",
	},
	{
		id: 1648,
		ulica: "Lalewicza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1649,
		ulica: "Lambady",
		dzielnica: "Białołęka",
	},
	{
		id: 1650,
		ulica: "Lanciego",
		dzielnica: "Ursynów",
	},
	{
		id: 1651,
		ulica: "Landwarowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1652,
		ulica: "Langego",
		dzielnica: "Wola",
	},
	{
		id: 1653,
		ulica: "Langiewicza",
		dzielnica: "Ochota",
	},
	{
		id: 1654,
		ulica: "Lapońska",
		dzielnica: "Białołęka",
	},
	{
		id: 1655,
		ulica: "Lasek Brzozowy",
		dzielnica: "Ursynów",
	},
	{
		id: 1656,
		ulica: "Laserowa",
		dzielnica: "Włochy",
	},
	{
		id: 1657,
		ulica: "Laskowa",
		dzielnica: "Bielany",
	},
	{
		id: 1658,
		ulica: "Latarnika",
		dzielnica: "Wawer",
	},
	{
		id: 1659,
		ulica: "Latoszki",
		dzielnica: "Wawer",
	},
	{
		id: 1660,
		ulica: "Latyczowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1661,
		ulica: "Laurowa",
		dzielnica: "Wawer",
	},
	{
		id: 1662,
		ulica: "Lawendowa",
		dzielnica: "Wawer",
	},
	{
		id: 1663,
		ulica: "Lawendy",
		dzielnica: "Białołęka",
	},
	{
		id: 1664,
		ulica: "Lawinowa",
		dzielnica: "Wawer",
	},
	{
		id: 1665,
		ulica: "Lazurowa",
		dzielnica: "Bemowo",
	},
	{
		id: 1666,
		ulica: "Lądowa",
		dzielnica: "Mokotów",
	},
	{
		id: 1667,
		ulica: "Lebiodowa",
		dzielnica: "Białołęka",
	},
	{
		id: 1668,
		ulica: "Lecha",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1669,
		ulica: "Lechicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1670,
		ulica: "Lechonia",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1671,
		ulica: "Legendy",
		dzielnica: "Białołęka",
	},
	{
		id: 1672,
		ulica: "Legionowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1673,
		ulica: "Leibniza",
		dzielnica: "Bielany",
	},
	{
		id: 1674,
		ulica: "Lekarska",
		dzielnica: "Ochota",
	},
	{
		id: 1675,
		ulica: "Lektykarska",
		dzielnica: "Bielany",
	},
	{
		id: 1676,
		ulica: "Lelechowska",
		dzielnica: "Ochota",
	},
	{
		id: 1677,
		ulica: "pl. Lelewela",
		dzielnica: "Śródmieście",
	},
	{
		id: 1678,
		ulica: "Leliwitów",
		dzielnica: "Białołęka",
	},
	{
		id: 1679,
		ulica: "Lelka",
		dzielnica: "Wawer",
	},
	{
		id: 1680,
		ulica: "Lemiesz",
		dzielnica: "Białołęka",
	},
	{
		id: 1681,
		ulica: "Lenartowicza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1682,
		ulica: "Lencewicza",
		dzielnica: "Bielany",
	},
	{
		id: 1683,
		ulica: "Lentza",
		dzielnica: "Wilanów",
	},
	{
		id: 1684,
		ulica: "Leonarda",
		dzielnica: "Wawer",
	},
	{
		id: 1685,
		ulica: "Leonidasa",
		dzielnica: "Białołęka",
	},
	{
		id: 1686,
		ulica: "Leszczynowa",
		dzielnica: "Wawer",
	},
	{
		id: 1687,
		ulica: "Leszczyny",
		dzielnica: "Białołęka",
	},
	{
		id: 1688,
		ulica: "Leszczyńska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1689,
		ulica: "Leszczyńskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1690,
		ulica: "Leszka Białego",
		dzielnica: "Białołęka",
	},
	{
		id: 1691,
		ulica: "Leszka Czarnego",
		dzielnica: "Białołęka",
	},
	{
		id: 1692,
		ulica: "Leszno",
		dzielnica: "Wola",
	},
	{
		id: 1693,
		ulica: "Lesznowolska",
		dzielnica: "Ursynów",
	},
	{
		id: 1694,
		ulica: "Letnia",
		dzielnica: "Wawer",
	},
	{
		id: 1695,
		ulica: "Lewandów",
		dzielnica: "Białołęka",
	},
	{
		id: 1696,
		ulica: "Lewartowskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 1697,
		ulica: "Lewicka",
		dzielnica: "Mokotów",
	},
	{
		id: 1698,
		ulica: "Lewicpolska",
		dzielnica: "Białołęka",
	},
	{
		id: 1699,
		ulica: "Lewinowska",
		dzielnica: "Targówek",
	},
	{
		id: 1700,
		ulica: "Lewkonii",
		dzielnica: "Białołęka",
	},
	{
		id: 1701,
		ulica: "Leśna",
		dzielnica: "Wawer",
	},
	{
		id: 1702,
		ulica: "Leśnej Polanki",
		dzielnica: "Białołęka",
	},
	{
		id: 1703,
		ulica: "Leśniczówka",
		dzielnica: "Wawer",
	},
	{
		id: 1704,
		ulica: "Leśniewska",
		dzielnica: "Białołęka",
	},
	{
		id: 1705,
		ulica: "Leśny Potok",
		dzielnica: "Wawer",
	},
	{
		id: 1706,
		ulica: "Leżajska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1707,
		ulica: "Lęborska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1708,
		ulica: "Lędzka",
		dzielnica: "Białołęka",
	},
	{
		id: 1709,
		ulica: "Libawska",
		dzielnica: "Białołęka",
	},
	{
		id: 1710,
		ulica: "Libijska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1711,
		ulica: "Licealna",
		dzielnica: "Wawer",
	},
	{
		id: 1712,
		ulica: "Liczydło",
		dzielnica: "Białołęka",
	},
	{
		id: 1713,
		ulica: "Lidzka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1714,
		ulica: "Ligocka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1715,
		ulica: "Ligonia",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1716,
		ulica: "Ligustrowa",
		dzielnica: "Wawer",
	},
	{
		id: 1717,
		ulica: "Limanowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1718,
		ulica: "Limby",
		dzielnica: "Wawer",
	},
	{
		id: 1719,
		ulica: "Lindego",
		dzielnica: "Bielany",
	},
	{
		id: 1720,
		ulica: "Lindleya",
		dzielnica: "Ochota",
	},
	{
		id: 1721,
		ulica: "Linneusza",
		dzielnica: "Białołęka",
	},
	{
		id: 1722,
		ulica: "Linotypowa",
		dzielnica: "Włochy",
	},
	{
		id: 1723,
		ulica: "Lipiec Reymontowskich",
		dzielnica: "Bielany",
	},
	{
		id: 1724,
		ulica: "Lipińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1725,
		ulica: "Lipkowska",
		dzielnica: "Białołęka",
	},
	{
		id: 1726,
		ulica: "Lipowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1727,
		ulica: "Lipowczana",
		dzielnica: "Wawer",
	},
	{
		id: 1728,
		ulica: "Lipska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1729,
		ulica: "Lirowa",
		dzielnica: "Ochota",
	},
	{
		id: 1730,
		ulica: "Liryczna",
		dzielnica: "Ursynów",
	},
	{
		id: 1731,
		ulica: "Lisa-Kuli",
		dzielnica: "Śródmieście",
	},
	{
		id: 1732,
		ulica: "Lisi Jar",
		dzielnica: "Ursynów",
	},
	{
		id: 1733,
		ulica: "Lisia",
		dzielnica: "Wawer",
	},
	{
		id: 1734,
		ulica: "Lisowska",
		dzielnica: "Wawer",
	},
	{
		id: 1735,
		ulica: "Listonoszy",
		dzielnica: "Białołęka",
	},
	{
		id: 1736,
		ulica: "Listopadowa",
		dzielnica: "Wawer",
	},
	{
		id: 1737,
		ulica: "Litawora",
		dzielnica: "Białołęka",
	},
	{
		id: 1738,
		ulica: "Literacka",
		dzielnica: "Bielany",
	},
	{
		id: 1739,
		ulica: "Litewska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1740,
		ulica: "Litworowa",
		dzielnica: "Wawer",
	},
	{
		id: 1741,
		ulica: "Liwiecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1742,
		ulica: "Liwska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1743,
		ulica: "Lizbońska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1744,
		ulica: "Lniana",
		dzielnica: "Białołęka",
	},
	{
		id: 1745,
		ulica: "Locci",
		dzielnica: "Wilanów",
	},
	{
		id: 1746,
		ulica: "Lokajskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 1747,
		ulica: "Lokalna",
		dzielnica: "Wawer",
	},
	{
		id: 1748,
		ulica: "Londyńska",
		dzielnica: "Saska Kępa",
	},
	{
		id: 1749,
		ulica: '"Lota" Pietraszewicza',
		dzielnica: "Wola",
	},
	{
		id: 1750,
		ulica: "Lotaryńska",
		dzielnica: "Wilanów",
	},
	{
		id: 1751,
		ulica: "Loteryjki",
		dzielnica: "Wawer",
	},
	{
		id: 1752,
		ulica: "Lotnicza",
		dzielnica: "Włochy",
	},
	{
		id: 1753,
		ulica: "al. Lotników",
		dzielnica: "Mokotów",
	},
	{
		id: 1754,
		ulica: "Lotosu",
		dzielnica: "Wawer",
	},
	{
		id: 1755,
		ulica: "Lubartowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1756,
		ulica: "Lubelska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1757,
		ulica: "Lubiana",
		dzielnica: "Białołęka",
	},
	{
		id: 1758,
		ulica: "Lubieszowska",
		dzielnica: "Białołęka",
	},
	{
		id: 1759,
		ulica: "Lubiniecka",
		dzielnica: "Białołęka",
	},
	{
		id: 1760,
		ulica: "Lubomelska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1761,
		ulica: "Lubomira",
		dzielnica: "Białołęka",
	},
	{
		id: 1762,
		ulica: "Lucerny",
		dzielnica: "Wawer",
	},
	{
		id: 1763,
		ulica: "Ludna",
		dzielnica: "Powiśle",
	},
	{
		id: 1764,
		ulica: "Ludowa",
		dzielnica: "Mokotów",
	},
	{
		id: 1765,
		ulica: "Ludwiki",
		dzielnica: "Wola",
	},
	{
		id: 1766,
		ulica: "Ludwinowska",
		dzielnica: "Wawer",
	},
	{
		id: 1767,
		ulica: "Ludwisarska",
		dzielnica: "Wawer",
	},
	{
		id: 1768,
		ulica: "Lusińska",
		dzielnica: "Wawer",
	},
	{
		id: 1769,
		ulica: "Lustrzana",
		dzielnica: "Wawer",
	},
	{
		id: 1770,
		ulica: "Lutniowa",
		dzielnica: "Ochota",
	},
	{
		id: 1771,
		ulica: "Lutocińska",
		dzielnica: "Wawer",
	},
	{
		id: 1772,
		ulica: "Lutosławskiego",
		dzielnica: "Białołęka",
	},
	{
		id: 1773,
		ulica: "Lwa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1774,
		ulica: "Lwowska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1775,
		ulica: "Łabędzia",
		dzielnica: "Wawer",
	},
	{
		id: 1776,
		ulica: "Łabiszyńska",
		dzielnica: "Targówek",
	},
	{
		id: 1777,
		ulica: "Łacińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1778,
		ulica: "Ładna",
		dzielnica: "Wawer",
	},
	{
		id: 1779,
		ulica: "bł. Ładysława z Gielniowa",
		dzielnica: "Ochota",
	},
	{
		id: 1780,
		ulica: "Łagiewnicka",
		dzielnica: "Białołęka",
	},
	{
		id: 1781,
		ulica: "Łagodna",
		dzielnica: "Wawer",
	},
	{
		id: 1782,
		ulica: "Łagowska",
		dzielnica: "Białołęka",
	},
	{
		id: 1783,
		ulica: "Łamana",
		dzielnica: "Wawer",
	},
	{
		id: 1784,
		ulica: "Łanowa",
		dzielnica: "Wawer",
	},
	{
		id: 1785,
		ulica: "Łasińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1786,
		ulica: "Łazienkowska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1787,
		ulica: "Łańcucka",
		dzielnica: "Białołęka",
	},
	{
		id: 1788,
		ulica: "Łączna",
		dzielnica: "Wawer",
	},
	{
		id: 1789,
		ulica: "Łączyny",
		dzielnica: "Ursynów",
	},
	{
		id: 1790,
		ulica: "Łąkocińska",
		dzielnica: "Targówek",
	},
	{
		id: 1791,
		ulica: "Łęczycka",
		dzielnica: "Ochota",
	},
	{
		id: 1792,
		ulica: "Łęgi",
		dzielnica: "Wawer",
	},
	{
		id: 1793,
		ulica: "Łochowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1794,
		ulica: "Łodygowa",
		dzielnica: "Targówek",
	},
	{
		id: 1795,
		ulica: "Łojewska",
		dzielnica: "Targówek",
	},
	{
		id: 1796,
		ulica: "Łomiańska",
		dzielnica: "Białołęka",
	},
	{
		id: 1797,
		ulica: "Łomżyńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1798,
		ulica: "Łopuszańska",
		dzielnica: "Włochy",
	},
	{
		id: 1799,
		ulica: "Łosicka",
		dzielnica: "Białołęka",
	},
	{
		id: 1800,
		ulica: "Łotewska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1801,
		ulica: "Łowcza",
		dzielnica: "Wawer",
	},
	{
		id: 1802,
		ulica: "Łowicka",
		dzielnica: "Mokotów",
	},
	{
		id: 1803,
		ulica: "Łubinowa",
		dzielnica: "Wawer",
	},
	{
		id: 1804,
		ulica: "Łucka",
		dzielnica: "Wola",
	},
	{
		id: 1805,
		ulica: "Łuczek",
		dzielnica: "Wawer",
	},
	{
		id: 1806,
		ulica: "Łucznicza",
		dzielnica: "Wawer",
	},
	{
		id: 1807,
		ulica: "Łuczywo",
		dzielnica: "Białołęka",
	},
	{
		id: 1808,
		ulica: "Ługi",
		dzielnica: "Wawer",
	},
	{
		id: 1809,
		ulica: "Łukasiewicza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1810,
		ulica: "Łukasińskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1811,
		ulica: "Łukaszczyka",
		dzielnica: "Białołęka",
	},
	{
		id: 1812,
		ulica: "Łuki Małe",
		dzielnica: "Białołęka",
	},
	{
		id: 1813,
		ulica: "Łuki Wielkie",
		dzielnica: "Białołęka",
	},
	{
		id: 1814,
		ulica: "Łukiska",
		dzielnica: "Białołęka",
	},
	{
		id: 1815,
		ulica: "Łukowa",
		dzielnica: "Wawer",
	},
	{
		id: 1816,
		ulica: "Łukowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1817,
		ulica: "Łużycka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1818,
		ulica: "Łysakowska",
		dzielnica: "Wawer",
	},
	{
		id: 1819,
		ulica: "Łyszkiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 1820,
		ulica: "Łyżwiarska",
		dzielnica: "Białołęka",
	},
	{
		id: 1821,
		ulica: "Macedońska",
		dzielnica: "Białołęka",
	},
	{
		id: 1822,
		ulica: "Maciejewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1823,
		ulica: "Maciejki",
		dzielnica: "Wawer",
	},
	{
		id: 1824,
		ulica: "Mackiewicza",
		dzielnica: "Bielany",
	},
	{
		id: 1825,
		ulica: "Madalińskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1826,
		ulica: "Madziarów",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1827,
		ulica: "Magazynowa",
		dzielnica: "Mokotów",
	},
	{
		id: 1828,
		ulica: "Magellana",
		dzielnica: "Białołęka",
	},
	{
		id: 1829,
		ulica: "Magenta",
		dzielnica: "Białołęka",
	},
	{
		id: 1830,
		ulica: "Magiera",
		dzielnica: "Bielany",
	},
	{
		id: 1831,
		ulica: "Magistracka",
		dzielnica: "Bielany",
	},
	{
		id: 1832,
		ulica: "Magnacka",
		dzielnica: "Wilanów",
	},
	{
		id: 1833,
		ulica: "Magnolii",
		dzielnica: "Wawer",
	},
	{
		id: 1834,
		ulica: "Magury",
		dzielnica: "Białołęka",
	},
	{
		id: 1835,
		ulica: "Majakowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1836,
		ulica: "Majdańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1837,
		ulica: "Majerankowa",
		dzielnica: "Wawer",
	},
	{
		id: 1838,
		ulica: "Majolikowa",
		dzielnica: "Białołęka",
	},
	{
		id: 1839,
		ulica: "Majorki",
		dzielnica: "Białołęka",
	},
	{
		id: 1840,
		ulica: "Majowa",
		dzielnica: "Wawer",
	},
	{
		id: 1841,
		ulica: "Maklakiewicza",
		dzielnica: "Mokotów",
	},
	{
		id: 1842,
		ulica: "Makolągwy",
		dzielnica: "Wawer",
	},
	{
		id: 1843,
		ulica: "Makowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1844,
		ulica: "Makowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1845,
		ulica: "Makuszyńskiego",
		dzielnica: "Białołęka",
	},
	{
		id: 1846,
		ulica: "Malachitowa",
		dzielnica: "Wawer",
	},
	{
		id: 1847,
		ulica: "Malawskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1848,
		ulica: "Malborska",
		dzielnica: "Targówek",
	},
	{
		id: 1849,
		ulica: "Malczewskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1850,
		ulica: "Malczycka",
		dzielnica: "Białołęka",
	},
	{
		id: 1851,
		ulica: "Malinowa",
		dzielnica: "Wawer",
	},
	{
		id: 1852,
		ulica: "Malinowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1853,
		ulica: "Malownicza",
		dzielnica: "Wawer",
	},
	{
		id: 1854,
		ulica: "Maltańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1855,
		ulica: "Malwowa",
		dzielnica: "Wawer",
	},
	{
		id: 1856,
		ulica: "Mandarynki",
		dzielnica: "Wawer",
	},
	{
		id: 1857,
		ulica: "Mangalia",
		dzielnica: "Mokotów",
	},
	{
		id: 1858,
		ulica: "Manteuffla",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1859,
		ulica: "Marabuta",
		dzielnica: "Wawer",
	},
	{
		id: 1860,
		ulica: "Marcelińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1861,
		ulica: "Marchołta",
		dzielnica: "Białołęka",
	},
	{
		id: 1862,
		ulica: "Marcina z Wrocimowic",
		dzielnica: "Białołęka",
	},
	{
		id: 1863,
		ulica: "Marciniaka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1864,
		ulica: "Marcinkowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1865,
		ulica: "Marco Polo",
		dzielnica: "Białołęka",
	},
	{
		id: 1866,
		ulica: "Marconich",
		dzielnica: "Wilanów",
	},
	{
		id: 1867,
		ulica: "Marecka",
		dzielnica: "Targówek",
	},
	{
		id: 1868,
		ulica: "Margerytki",
		dzielnica: "Wawer",
	},
	{
		id: 1869,
		ulica: "Mariańska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1870,
		ulica: "Mariensztat",
		dzielnica: "Śródmieście",
	},
	{
		id: 1871,
		ulica: "Marii Kazimiery",
		dzielnica: "Żoliborz",
	},
	{
		id: 1872,
		ulica: "Marii Magdaleny",
		dzielnica: "Wilanów",
	},
	{
		id: 1873,
		ulica: "Markietanki",
		dzielnica: "Białołęka",
	},
	{
		id: 1874,
		ulica: "Markiewicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 1875,
		ulica: "Markowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 1876,
		ulica: "Marmurowa",
		dzielnica: "Wawer",
	},
	{
		id: 1877,
		ulica: "Marokańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1878,
		ulica: "Marsa",
		dzielnica: "Wawer",
	},
	{
		id: 1879,
		ulica: "Marsylska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1880,
		ulica: "Marszałkowska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1881,
		ulica: "Marty",
		dzielnica: "Wola",
	},
	{
		id: 1882,
		ulica: "Maryli",
		dzielnica: "Wawer",
	},
	{
		id: 1883,
		ulica: "Marymoncka",
		dzielnica: "Bielany",
	},
	{
		id: 1884,
		ulica: "Marymoncka/Żeromskiego",
		dzielnica: "Bielany",
	},
	{
		id: 1885,
		ulica: "Marynarska",
		dzielnica: "Mokotów",
	},
	{
		id: 1886,
		ulica: "Marynin",
		dzielnica: "Wawer",
	},
	{
		id: 1887,
		ulica: "Marysińska",
		dzielnica: "Targówek",
	},
	{
		id: 1888,
		ulica: "Marywilska",
		dzielnica: "Białołęka",
	},
	{
		id: 1889,
		ulica: "Marzanny",
		dzielnica: "Wawer",
	},
	{
		id: 1890,
		ulica: "Maszewska",
		dzielnica: "Bielany",
	},
	{
		id: 1891,
		ulica: "Maszynowa",
		dzielnica: "Ochota",
	},
	{
		id: 1892,
		ulica: "Masłowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 1893,
		ulica: "Matejki",
		dzielnica: "Śródmieście",
	},
	{
		id: 1894,
		ulica: "Materii",
		dzielnica: "Białołęka",
	},
	{
		id: 1895,
		ulica: "Matuszewska",
		dzielnica: "Targówek",
	},
	{
		id: 1896,
		ulica: "Matyldy",
		dzielnica: "Wawer",
	},
	{
		id: 1897,
		ulica: "Mazowiecka",
		dzielnica: "Śródmieście",
	},
	{
		id: 1898,
		ulica: "Mazura",
		dzielnica: "Białołęka",
	},
	{
		id: 1899,
		ulica: "Mazurska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1900,
		ulica: "Maćka z Bogdańca",
		dzielnica: "Białołęka",
	},
	{
		id: 1901,
		ulica: "Mała",
		dzielnica: "Śródmieście",
	},
	{
		id: 1902,
		ulica: "pl. Małachowskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 1903,
		ulica: "Małcużyńskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 1904,
		ulica: "Małego Franka",
		dzielnica: "Wola",
	},
	{
		id: 1905,
		ulica: "Małego Księcia",
		dzielnica: "Białołęka",
	},
	{
		id: 1906,
		ulica: "Małego Rycerza",
		dzielnica: "Białołęka",
	},
	{
		id: 1907,
		ulica: "Małej Brzozy",
		dzielnica: "Wawer",
	},
	{
		id: 1908,
		ulica: "Małej Łąki",
		dzielnica: "Wawer",
	},
	{
		id: 1909,
		ulica: "Małowiejska",
		dzielnica: "Wawer",
	},
	{
		id: 1910,
		ulica: "Małych Dębów",
		dzielnica: "Białołęka",
	},
	{
		id: 1911,
		ulica: "Maślaków",
		dzielnica: "Wawer",
	},
	{
		id: 1912,
		ulica: "Meander",
		dzielnica: "Ursynów",
	},
	{
		id: 1913,
		ulica: "Mechaników",
		dzielnica: "Włochy",
	},
	{
		id: 1914,
		ulica: "Mehoffera",
		dzielnica: "Białołęka",
	},
	{
		id: 1915,
		ulica: "Meissnera",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1916,
		ulica: "Meksykańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1917,
		ulica: "Melcera",
		dzielnica: "Wawer",
	},
	{
		id: 1918,
		ulica: "Melomanów",
		dzielnica: "Wawer",
	},
	{
		id: 1919,
		ulica: "Melsztyńska",
		dzielnica: "Mokotów",
	},
	{
		id: 1920,
		ulica: "Menueta",
		dzielnica: "Ursynów",
	},
	{
		id: 1921,
		ulica: "Merliniego",
		dzielnica: "Mokotów",
	},
	{
		id: 1922,
		ulica: "Messyńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1923,
		ulica: "Mianowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 1924,
		ulica: "Miarki",
		dzielnica: "Wola",
	},
	{
		id: 1925,
		ulica: "Miączyńska",
		dzielnica: "Mokotów",
	},
	{
		id: 1926,
		ulica: "Michalinki",
		dzielnica: "Wawer",
	},
	{
		id: 1927,
		ulica: "Michała Spisaka",
		dzielnica: "Ursus",
	},
	{
		id: 1928,
		ulica: "Michałowicza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1929,
		ulica: "Michałowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1930,
		ulica: "Mickiewicza",
		dzielnica: "Żoliborz",
	},
	{
		id: 1931,
		ulica: "Mickiewicza przy pl. Wilsona",
		dzielnica: "Żoliborz",
	},
	{
		id: 1932,
		ulica: "Miechowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1933,
		ulica: "Miecznikowa",
		dzielnica: "Ochota",
	},
	{
		id: 1934,
		ulica: "Miedziana",
		dzielnica: "Wola",
	},
	{
		id: 1935,
		ulica: "Miejska",
		dzielnica: "Wawer",
	},
	{
		id: 1936,
		ulica: "Mielczarskiego",
		dzielnica: "Wola",
	},
	{
		id: 1937,
		ulica: "Mielecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1938,
		ulica: "Mierosławskiego",
		dzielnica: "Żoliborz",
	},
	{
		id: 1939,
		ulica: "Mieszka I",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1940,
		ulica: "Mieszka Starego",
		dzielnica: "Białołęka",
	},
	{
		id: 1941,
		ulica: "Międzyborska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1942,
		ulica: "Międzynarodowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1943,
		ulica: "Międzyparkowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1944,
		ulica: "Międzyrzecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1945,
		ulica: "Miętowa",
		dzielnica: "Wawer",
	},
	{
		id: 1946,
		ulica: "Migdałowa",
		dzielnica: "Ursynów",
	},
	{
		id: 1947,
		ulica: "Miklaszewskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 1948,
		ulica: "Mikołajczyka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1949,
		ulica: "Mikołajska",
		dzielnica: "Wawer",
	},
	{
		id: 1950,
		ulica: "Milanowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1951,
		ulica: "Milenijna",
		dzielnica: "Białołęka",
	},
	{
		id: 1952,
		ulica: "Millera",
		dzielnica: "Wawer",
	},
	{
		id: 1953,
		ulica: "Miła",
		dzielnica: "Wola",
	},
	{
		id: 1954,
		ulica: "Miłkowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1955,
		ulica: "Miłobędzka",
		dzielnica: "Ochota",
	},
	{
		id: 1956,
		ulica: "Mineralna",
		dzielnica: "Włochy",
	},
	{
		id: 1957,
		ulica: "Minerska",
		dzielnica: "Włochy",
	},
	{
		id: 1958,
		ulica: "Minutowa",
		dzielnica: "Targówek",
	},
	{
		id: 1959,
		ulica: "Mińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1960,
		ulica: "Miodowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1961,
		ulica: "Mirocińska",
		dzielnica: "Wawer",
	},
	{
		id: 1962,
		ulica: "pl. Mirowski",
		dzielnica: "Śródmieście",
	},
	{
		id: 1963,
		ulica: "Mirska",
		dzielnica: "Wawer",
	},
	{
		id: 1964,
		ulica: "Mirtowa",
		dzielnica: "Wawer",
	},
	{
		id: 1965,
		ulica: "Mistrzowska",
		dzielnica: "Białołęka",
	},
	{
		id: 1966,
		ulica: "Mlądzka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1967,
		ulica: "Mleczna",
		dzielnica: "Wawer",
	},
	{
		id: 1968,
		ulica: "Mochnackiego",
		dzielnica: "Ochota",
	},
	{
		id: 1969,
		ulica: "Mochtyńska",
		dzielnica: "Białołęka",
	},
	{
		id: 1970,
		ulica: "Moczydłowska",
		dzielnica: "Wilanów",
	},
	{
		id: 1971,
		ulica: "Modelowa",
		dzielnica: "Włochy",
	},
	{
		id: 1972,
		ulica: "Modlińska",
		dzielnica: "Białołęka",
	},
	{
		id: 1973,
		ulica: "Modra",
		dzielnica: "Wawer",
	},
	{
		id: 1974,
		ulica: "Modrzewiowa",
		dzielnica: "Wawer",
	},
	{
		id: 1975,
		ulica: "Modrzykowa",
		dzielnica: "Wawer",
	},
	{
		id: 1976,
		ulica: "Modularna",
		dzielnica: "Włochy",
	},
	{
		id: 1977,
		ulica: "Modzelewskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 1978,
		ulica: "Mokotowska",
		dzielnica: "Śródmieście",
	},
	{
		id: 1979,
		ulica: "Mokra",
		dzielnica: "Wawer",
	},
	{
		id: 1980,
		ulica: "Mokry Ług",
		dzielnica: "Wawer",
	},
	{
		id: 1981,
		ulica: "Moliera",
		dzielnica: "Śródmieście",
	},
	{
		id: 1982,
		ulica: "Moniuszki",
		dzielnica: "Śródmieście",
	},
	{
		id: 1983,
		ulica: "Montażowa",
		dzielnica: "Włochy",
	},
	{
		id: 1984,
		ulica: "Monte Cassino",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1985,
		ulica: "Morcinka",
		dzielnica: "Bielany",
	},
	{
		id: 1986,
		ulica: "Morelowa",
		dzielnica: "Wawer",
	},
	{
		id: 1987,
		ulica: "Morgowa",
		dzielnica: "Wawer",
	},
	{
		id: 1988,
		ulica: "Morskie Oko",
		dzielnica: "Mokotów",
	},
	{
		id: 1989,
		ulica: "Morszyńska",
		dzielnica: "Mokotów",
	},
	{
		id: 1990,
		ulica: "Mortkowicza",
		dzielnica: "Wilanów",
	},
	{
		id: 1991,
		ulica: "Mory",
		dzielnica: "Bemowo",
	},
	{
		id: 1992,
		ulica: "Morąska",
		dzielnica: "Białołęka",
	},
	{
		id: 1993,
		ulica: "Mosiężna",
		dzielnica: "Włochy",
	},
	{
		id: 1994,
		ulica: "Mostowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 1995,
		ulica: "Motorowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 1996,
		ulica: "Motycka",
		dzielnica: "Wawer",
	},
	{
		id: 1997,
		ulica: "Motylkowa",
		dzielnica: "Wawer",
	},
	{
		id: 1998,
		ulica: "Mozaikowa",
		dzielnica: "Wawer",
	},
	{
		id: 1999,
		ulica: "Mozarta",
		dzielnica: "Ursynów",
	},
	{
		id: 2000,
		ulica: "Mołdawska",
		dzielnica: "Ochota",
	},
	{
		id: 2001,
		ulica: "Moździerzy",
		dzielnica: "Wawer",
	},
	{
		id: 2002,
		ulica: "Mroczna",
		dzielnica: "Wawer",
	},
	{
		id: 2003,
		ulica: "Mrozowska",
		dzielnica: "Wawer",
	},
	{
		id: 2004,
		ulica: "Mroźna",
		dzielnica: "Wawer",
	},
	{
		id: 2005,
		ulica: "Mrówcza",
		dzielnica: "Wawer",
	},
	{
		id: 2006,
		ulica: "Mrągowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2007,
		ulica: "Mszczonowska",
		dzielnica: "Ochota",
	},
	{
		id: 2008,
		ulica: "Municypalna",
		dzielnica: "Wawer",
	},
	{
		id: 2009,
		ulica: "Muranowska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2010,
		ulica: "Murmańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2011,
		ulica: "Muszkieterów",
		dzielnica: "Włochy",
	},
	{
		id: 2012,
		ulica: "Muszlowa",
		dzielnica: "Wawer",
	},
	{
		id: 2013,
		ulica: "Muszyńska",
		dzielnica: "Wilanów",
	},
	{
		id: 2014,
		ulica: "Muzealna",
		dzielnica: "Wawer",
	},
	{
		id: 2015,
		ulica: "Mycielskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2016,
		ulica: "Mydlarska",
		dzielnica: "Wawer",
	},
	{
		id: 2017,
		ulica: "Mysia",
		dzielnica: "Śródmieście",
	},
	{
		id: 2018,
		ulica: "Mysikrólika",
		dzielnica: "Wawer",
	},
	{
		id: 2019,
		ulica: "Myszkowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2020,
		ulica: "Myszyniecka",
		dzielnica: "Białołęka",
	},
	{
		id: 2021,
		ulica: "Mysłowicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2022,
		ulica: "Myśliborska",
		dzielnica: "Białołęka",
	},
	{
		id: 2023,
		ulica: "Myśliwiecka",
		dzielnica: "Śródmieście",
	},
	{
		id: 2024,
		ulica: "Mączeńskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 2025,
		ulica: "Mątwicka",
		dzielnica: "Ochota",
	},
	{
		id: 2026,
		ulica: "Męcińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2027,
		ulica: "Mławska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2028,
		ulica: "Młocarni",
		dzielnica: "Wawer",
	},
	{
		id: 2029,
		ulica: "Młocińska",
		dzielnica: "Bielany",
	},
	{
		id: 2030,
		ulica: "Młoda",
		dzielnica: "Wawer",
	},
	{
		id: 2031,
		ulica: "Młodnicka",
		dzielnica: "Targówek",
	},
	{
		id: 2032,
		ulica: "Młodzieńcza",
		dzielnica: "Targówek",
	},
	{
		id: 2033,
		ulica: "Młota",
		dzielnica: "Wawer",
	},
	{
		id: 2034,
		ulica: "Młynarska",
		dzielnica: "Wola",
	},
	{
		id: 2035,
		ulica: "pl. Młynarskiego",
		dzielnica: "Wola",
	},
	{
		id: 2036,
		ulica: "Mścisławska",
		dzielnica: "Białołęka",
	},
	{
		id: 2037,
		ulica: "Na Bateryjce",
		dzielnica: "Ochota",
	},
	{
		id: 2038,
		ulica: "Na Przyzbie",
		dzielnica: "Wawer",
	},
	{
		id: 2039,
		ulica: "pl. Na Rozdrożu",
		dzielnica: "Śródmieście",
	},
	{
		id: 2040,
		ulica: "al. Na Skarpie",
		dzielnica: "Śródmieście",
	},
	{
		id: 2041,
		ulica: "Na Skraju",
		dzielnica: "Ursynów",
	},
	{
		id: 2042,
		ulica: "Na Uboczu",
		dzielnica: "Ursynów",
	},
	{
		id: 2043,
		ulica: "Na Wyraju",
		dzielnica: "Wawer",
	},
	{
		id: 2044,
		ulica: "Nabielaka",
		dzielnica: "Śródmieście",
	},
	{
		id: 2045,
		ulica: "Naczelnikowska",
		dzielnica: "Targówek",
	},
	{
		id: 2046,
		ulica: "Nad Potokiem",
		dzielnica: "Wawer",
	},
	{
		id: 2047,
		ulica: "Nad Strugą",
		dzielnica: "Wawer",
	},
	{
		id: 2048,
		ulica: "Nad Wilanówką",
		dzielnica: "Wilanów",
	},
	{
		id: 2049,
		ulica: "Nadarzyńska",
		dzielnica: "Ursus",
	},
	{
		id: 2050,
		ulica: "Naddnieprzańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2051,
		ulica: "Nadrzeczna",
		dzielnica: "Wawer",
	},
	{
		id: 2052,
		ulica: "Nadwiślańska",
		dzielnica: "Wawer",
	},
	{
		id: 2053,
		ulica: "Nadziei",
		dzielnica: "Wawer",
	},
	{
		id: 2054,
		ulica: "Nagodziców",
		dzielnica: "Wawer",
	},
	{
		id: 2055,
		ulica: "Nagórskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2056,
		ulica: "Nakielska",
		dzielnica: "Wola",
	},
	{
		id: 2057,
		ulica: "Nalewki",
		dzielnica: "Śródmieście",
	},
	{
		id: 2058,
		ulica: "Namioty",
		dzielnica: "Wawer",
	},
	{
		id: 2059,
		ulica: "Namysłowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2060,
		ulica: "Naprzełaj",
		dzielnica: "Wawer",
	},
	{
		id: 2061,
		ulica: "Narbutta",
		dzielnica: "Mokotów",
	},
	{
		id: 2062,
		ulica: "L. Narbutta",
		dzielnica: "Mokotów",
	},
	{
		id: 2063,
		ulica: "Narcyzowa",
		dzielnica: "Wawer",
	},
	{
		id: 2064,
		ulica: "Narocz",
		dzielnica: "Białołęka",
	},
	{
		id: 2065,
		ulica: "Narodowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 2066,
		ulica: "Narożna",
		dzielnica: "Wawer",
	},
	{
		id: 2067,
		ulica: "Naruszewicza",
		dzielnica: "Mokotów",
	},
	{
		id: 2068,
		ulica: "pl. Narutowicza",
		dzielnica: "Ochota",
	},
	{
		id: 2069,
		ulica: "Narwik",
		dzielnica: "Bemowo",
	},
	{
		id: 2070,
		ulica: "Nasielska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2071,
		ulica: "Nastrojowa",
		dzielnica: "Wawer",
	},
	{
		id: 2072,
		ulica: "Natolińska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2073,
		ulica: "Nauczycielska",
		dzielnica: "Wawer",
	},
	{
		id: 2074,
		ulica: "Naukowa",
		dzielnica: "Włochy",
	},
	{
		id: 2075,
		ulica: "Nawigatorów",
		dzielnica: "Włochy",
	},
	{
		id: 2076,
		ulica: "Nawłocka",
		dzielnica: "Wawer",
	},
	{
		id: 2077,
		ulica: "Nałkowskiej",
		dzielnica: "Wawer",
	},
	{
		id: 2078,
		ulica: "Nałęczowska",
		dzielnica: "Wawer",
	},
	{
		id: 2079,
		ulica: "Nefrytowa",
		dzielnica: "Wawer",
	},
	{
		id: 2080,
		ulica: "Nenufarów",
		dzielnica: "Wawer",
	},
	{
		id: 2081,
		ulica: "Nerudy",
		dzielnica: "Białołęka",
	},
	{
		id: 2082,
		ulica: "Neseberska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2083,
		ulica: "Newelska",
		dzielnica: "Wola",
	},
	{
		id: 2084,
		ulica: "Newtona",
		dzielnica: "Ursynów",
	},
	{
		id: 2085,
		ulica: "Nicejska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2086,
		ulica: "Nieborowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2087,
		ulica: "Niecała",
		dzielnica: "Śródmieście",
	},
	{
		id: 2088,
		ulica: "Nieduża",
		dzielnica: "Wawer",
	},
	{
		id: 2089,
		ulica: "Niedziałkowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2090,
		ulica: "Niedzielskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2091,
		ulica: "Niedźwiedzia",
		dzielnica: "Mokotów",
	},
	{
		id: 2092,
		ulica: "Niegocińska",
		dzielnica: "Białołęka",
	},
	{
		id: 2093,
		ulica: "Niegolewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2094,
		ulica: "Niekłańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2095,
		ulica: "Niemcewicza",
		dzielnica: "Ochota",
	},
	{
		id: 2096,
		ulica: "Niemirowska",
		dzielnica: "Wawer",
	},
	{
		id: 2097,
		ulica: "Niemodlińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2098,
		ulica: "al. Niepodległości",
		dzielnica: "Mokotów",
	},
	{
		id: 2099,
		ulica: "Nieporęcka",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2100,
		ulica: "Niepołomicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2101,
		ulica: "Niepołonicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2102,
		ulica: "Nieszawska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2103,
		ulica: "Niewielka",
		dzielnica: "Wawer",
	},
	{
		id: 2104,
		ulica: "Niezapominajki",
		dzielnica: "Wawer",
	},
	{
		id: 2105,
		ulica: "Nieświeska",
		dzielnica: "Białołęka",
	},
	{
		id: 2106,
		ulica: "Nike",
		dzielnica: "Wawer",
	},
	{
		id: 2107,
		ulica: "Niska",
		dzielnica: "Wola",
	},
	{
		id: 2108,
		ulica: "Nizinna",
		dzielnica: "Wawer",
	},
	{
		id: 2109,
		ulica: "Noakowskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 2110,
		ulica: "Nobla",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2111,
		ulica: "Nocznickiego",
		dzielnica: "Bielany",
	},
	{
		id: 2112,
		ulica: "Norwida",
		dzielnica: "Bielany",
	},
	{
		id: 2113,
		ulica: "Noskowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2114,
		ulica: "Notarialna",
		dzielnica: "Wawer",
	},
	{
		id: 2115,
		ulica: "Notecka",
		dzielnica: "Białołęka",
	},
	{
		id: 2116,
		ulica: "Rynek Nowego Miasta",
		dzielnica: "Śródmieście",
	},
	{
		id: 2117,
		ulica: "Nowej Huty",
		dzielnica: "Białołęka",
	},
	{
		id: 2118,
		ulica: "Nowickiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2119,
		ulica: "Nowiniarska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2120,
		ulica: "Nowińska",
		dzielnica: "Wola",
	},
	{
		id: 2121,
		ulica: "Nowoberestecka",
		dzielnica: "Ochota",
	},
	{
		id: 2122,
		ulica: "Nowoczesna",
		dzielnica: "Wilanów",
	},
	{
		id: 2123,
		ulica: "Nowodworska",
		dzielnica: "Białołęka",
	},
	{
		id: 2124,
		ulica: "Nowogrodzka",
		dzielnica: "Śródmieście",
	},
	{
		id: 2125,
		ulica: "Nowolipie",
		dzielnica: "Wola",
	},
	{
		id: 2126,
		ulica: "Nowolipki",
		dzielnica: "Wola",
	},
	{
		id: 2127,
		ulica: "Nowomiejska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2128,
		ulica: "Noworegulska",
		dzielnica: "Ursus",
	},
	{
		id: 2129,
		ulica: "Nowosielecka",
		dzielnica: "Mokotów",
	},
	{
		id: 2130,
		ulica: "Nowotyska",
		dzielnica: "Włochy",
	},
	{
		id: 2131,
		ulica: "Nowoursynowska",
		dzielnica: "Ursynów",
	},
	{
		id: 2132,
		ulica: "Nowowiejska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2133,
		ulica: "Nowowiśniowa",
		dzielnica: "Wawer",
	},
	{
		id: 2134,
		ulica: "Nowy Służewiec",
		dzielnica: "Mokotów",
	},
	{
		id: 2135,
		ulica: "Nowy Zjazd",
		dzielnica: "Śródmieście",
	},
	{
		id: 2136,
		ulica: "Nowy Świat",
		dzielnica: "Śródmieście",
	},
	{
		id: 2137,
		ulica: "Nubijska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2138,
		ulica: "Nugat",
		dzielnica: "Ursynów",
	},
	{
		id: 2139,
		ulica: "Nullo",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2140,
		ulica: "Nurmiego",
		dzielnica: "Białołęka",
	},
	{
		id: 2141,
		ulica: "Nurska",
		dzielnica: "Białołęka",
	},
	{
		id: 2142,
		ulica: "Nurzyńska",
		dzielnica: "Białołęka",
	},
	{
		id: 2143,
		ulica: "Nusbauma",
		dzielnica: "Wawer",
	},
	{
		id: 2144,
		ulica: "Nutki",
		dzielnica: "Wawer",
	},
	{
		id: 2145,
		ulica: "Obarowska",
		dzielnica: "Wawer",
	},
	{
		id: 2146,
		ulica: "Obiegowa",
		dzielnica: "Wola",
	},
	{
		id: 2147,
		ulica: "Objazdowa",
		dzielnica: "Wawer",
	},
	{
		id: 2148,
		ulica: "Oblęgorska",
		dzielnica: "Bielany",
	},
	{
		id: 2149,
		ulica: "Obornicka",
		dzielnica: "Ochota",
	},
	{
		id: 2150,
		ulica: "Obotrycka",
		dzielnica: "Białołęka",
	},
	{
		id: 2151,
		ulica: "Obozowa",
		dzielnica: "Wola",
	},
	{
		id: 2152,
		ulica: "Oboźna",
		dzielnica: "Śródmieście",
	},
	{
		id: 2153,
		ulica: "Obrazkowa",
		dzielnica: "Białołęka",
	},
	{
		id: 2154,
		ulica: "Obrońców",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2155,
		ulica: "Obrońców Helu",
		dzielnica: "Białołęka",
	},
	{
		id: 2156,
		ulica: "Obrońców Pokoju",
		dzielnica: "Białołęka",
	},
	{
		id: 2157,
		ulica: "Obrońców Tobruku",
		dzielnica: "Bemowo",
	},
	{
		id: 2158,
		ulica: "Obrzeżna",
		dzielnica: "Mokotów",
	},
	{
		id: 2159,
		ulica: "Obrębowa",
		dzielnica: "Włochy",
	},
	{
		id: 2160,
		ulica: "Obserwatorów",
		dzielnica: "Włochy",
	},
	{
		id: 2161,
		ulica: "Obszarowa",
		dzielnica: "Wawer",
	},
	{
		id: 2162,
		ulica: "Obwodowa",
		dzielnica: "Wawer",
	},
	{
		id: 2163,
		ulica: "Obywatelska",
		dzielnica: "Włochy",
	},
	{
		id: 2164,
		ulica: "Ochocka",
		dzielnica: "Wawer",
	},
	{
		id: 2165,
		ulica: "Ochocza",
		dzielnica: "Wawer",
	},
	{
		id: 2166,
		ulica: "Oczapowskiego",
		dzielnica: "Białołęka",
	},
	{
		id: 2167,
		ulica: "Oczki",
		dzielnica: "Śródmieście",
	},
	{
		id: 2168,
		ulica: "Odblask",
		dzielnica: "Wawer",
	},
	{
		id: 2169,
		ulica: "Odeska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2170,
		ulica: "Odkryta",
		dzielnica: "Białołęka",
	},
	{
		id: 2171,
		ulica: "Odlewnicza",
		dzielnica: "Targówek",
	},
	{
		id: 2172,
		ulica: "Odolańska",
		dzielnica: "Mokotów",
	},
	{
		id: 2173,
		ulica: "Odrodzenia",
		dzielnica: "Wola",
	},
	{
		id: 2174,
		ulica: "Odrowąża",
		dzielnica: "Targówek",
	},
	{
		id: 2175,
		ulica: "Odrębna",
		dzielnica: "Wawer",
	},
	{
		id: 2176,
		ulica: "Odrzykońska",
		dzielnica: "Ochota",
	},
	{
		id: 2177,
		ulica: "Odsieczy Wiednia",
		dzielnica: "Białołęka",
	},
	{
		id: 2178,
		ulica: "Odyńca",
		dzielnica: "Mokotów",
	},
	{
		id: 2179,
		ulica: "Odłogi",
		dzielnica: "Wawer",
	},
	{
		id: 2180,
		ulica: "Ogińskiego",
		dzielnica: "Białołęka",
	},
	{
		id: 2181,
		ulica: "Ogrodnicza",
		dzielnica: "Wawer",
	},
	{
		id: 2182,
		ulica: "Ogrodowa",
		dzielnica: "Wola",
	},
	{
		id: 2183,
		ulica: "Ogólna",
		dzielnica: "Wawer",
	},
	{
		id: 2184,
		ulica: "Ogórkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2185,
		ulica: "Ojca Aniceta",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2186,
		ulica: "Ojcowska",
		dzielnica: "Wawer",
	},
	{
		id: 2187,
		ulica: "Ojrzanowska",
		dzielnica: "Włochy",
	},
	{
		id: 2188,
		ulica: "Okaryny",
		dzielnica: "Wawer",
	},
	{
		id: 2189,
		ulica: "Okienko",
		dzielnica: "Wawer",
	},
	{
		id: 2190,
		ulica: "Okińskiego",
		dzielnica: "Włochy",
	},
	{
		id: 2191,
		ulica: "Okocimska",
		dzielnica: "Wola",
	},
	{
		id: 2192,
		ulica: "Okoliczna",
		dzielnica: "Wawer",
	},
	{
		id: 2193,
		ulica: "Okolska",
		dzielnica: "Mokotów",
	},
	{
		id: 2194,
		ulica: "Okopowa",
		dzielnica: "Wola",
	},
	{
		id: 2195,
		ulica: "Określona",
		dzielnica: "Wawer",
	},
	{
		id: 2196,
		ulica: "Okrzei",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2197,
		ulica: "Okrąg",
		dzielnica: "Śródmieście",
	},
	{
		id: 2198,
		ulica: "Okrągła",
		dzielnica: "Wawer",
	},
	{
		id: 2199,
		ulica: "Okrętowa",
		dzielnica: "Bemowo",
	},
	{
		id: 2200,
		ulica: "Okrężna",
		dzielnica: "Wawer",
	},
	{
		id: 2201,
		ulica: "Oksywska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2202,
		ulica: "Okulickiego",
		dzielnica: "Białołęka",
	},
	{
		id: 2203,
		ulica: "Okuniewska",
		dzielnica: "Targówek",
	},
	{
		id: 2204,
		ulica: "Okurzałego",
		dzielnica: "Wawer",
	},
	{
		id: 2205,
		ulica: "Okólnik",
		dzielnica: "Śródmieście",
	},
	{
		id: 2206,
		ulica: "Okęcka",
		dzielnica: "Włochy",
	},
	{
		id: 2207,
		ulica: "Olchy",
		dzielnica: "Wawer",
	},
	{
		id: 2208,
		ulica: "Olczyska",
		dzielnica: "Wawer",
	},
	{
		id: 2209,
		ulica: "Oleandrów",
		dzielnica: "Śródmieście",
	},
	{
		id: 2210,
		ulica: "Olecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2211,
		ulica: "Olesin",
		dzielnica: "Białołęka",
	},
	{
		id: 2212,
		ulica: "Olesińska",
		dzielnica: "Mokotów",
	},
	{
		id: 2213,
		ulica: "Oleńki",
		dzielnica: "Wawer",
	},
	{
		id: 2214,
		ulica: "Olgierda",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2215,
		ulica: "Olimpijska",
		dzielnica: "Mokotów",
	},
	{
		id: 2216,
		ulica: "Oliwkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2217,
		ulica: "Oliwska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2218,
		ulica: "Olkuska",
		dzielnica: "Mokotów",
	},
	{
		id: 2219,
		ulica: "Olszewska",
		dzielnica: "Mokotów",
	},
	{
		id: 2220,
		ulica: "Olszowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2221,
		ulica: "Olszynki Grochowskiej",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2222,
		ulica: "Olszynowa",
		dzielnica: "Wawer",
	},
	{
		id: 2223,
		ulica: "Oławska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2224,
		ulica: "Ołtarzewska",
		dzielnica: "Bemowo",
	},
	{
		id: 2225,
		ulica: "Ołycka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2226,
		ulica: "Ołówkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2227,
		ulica: "Omulewska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2228,
		ulica: "Ondraszka",
		dzielnica: "Ochota",
	},
	{
		id: 2229,
		ulica: "Opaczewska",
		dzielnica: "Ochota",
	},
	{
		id: 2230,
		ulica: "Opalińska",
		dzielnica: "Wawer",
	},
	{
		id: 2231,
		ulica: "Opalińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2232,
		ulica: "Opieńki",
		dzielnica: "Wawer",
	},
	{
		id: 2233,
		ulica: "Opieńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2234,
		ulica: "Opinogórska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2235,
		ulica: "Opoczyńska",
		dzielnica: "Ochota",
	},
	{
		id: 2236,
		ulica: "Optymistów",
		dzielnica: "Wawer",
	},
	{
		id: 2237,
		ulica: "Opłotek",
		dzielnica: "Wawer",
	},
	{
		id: 2238,
		ulica: "Or-Ota",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2239,
		ulica: "Oraczy",
		dzielnica: "Wawer",
	},
	{
		id: 2240,
		ulica: "Orbity",
		dzielnica: "Wawer",
	},
	{
		id: 2241,
		ulica: "Orchidei",
		dzielnica: "Wawer",
	},
	{
		id: 2242,
		ulica: "Orchowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 2243,
		ulica: "Orderu Uśmiechu",
		dzielnica: "Wawer",
	},
	{
		id: 2244,
		ulica: "Ordona",
		dzielnica: "Wola",
	},
	{
		id: 2245,
		ulica: "Ordonówny",
		dzielnica: "Wawer",
	},
	{
		id: 2246,
		ulica: "Ordynacka",
		dzielnica: "Śródmieście",
	},
	{
		id: 2247,
		ulica: "Organistów",
		dzielnica: "Wawer",
	},
	{
		id: 2248,
		ulica: "Orkana",
		dzielnica: "Mokotów",
	},
	{
		id: 2249,
		ulica: "Orla",
		dzielnica: "Śródmieście",
	},
	{
		id: 2250,
		ulica: "Orlego Lotu",
		dzielnica: "Wawer",
	},
	{
		id: 2251,
		ulica: "Orlich Gniazd",
		dzielnica: "Wawer",
	},
	{
		id: 2252,
		ulica: "Orląt Lwowskich",
		dzielnica: "Bemowo",
	},
	{
		id: 2253,
		ulica: "Ornak",
		dzielnica: "Wawer",
	},
	{
		id: 2254,
		ulica: "Ornecka",
		dzielnica: "Białołęka",
	},
	{
		id: 2255,
		ulica: "Orszady",
		dzielnica: "Wilanów",
	},
	{
		id: 2256,
		ulica: "Oryszewska",
		dzielnica: "Włochy",
	},
	{
		id: 2257,
		ulica: "Orzechowa",
		dzielnica: "Wawer",
	},
	{
		id: 2258,
		ulica: "Orzechowska",
		dzielnica: "Wawer",
	},
	{
		id: 2259,
		ulica: "Orzechowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2260,
		ulica: "Orzeszkowej",
		dzielnica: "Wawer",
	},
	{
		id: 2261,
		ulica: "Orzycka",
		dzielnica: "Mokotów",
	},
	{
		id: 2262,
		ulica: "Orężna",
		dzielnica: "Mokotów",
	},
	{
		id: 2263,
		ulica: "Orłowicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 2264,
		ulica: "Orłowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2265,
		ulica: "Orłowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2266,
		ulica: "Orłów Piastowskich",
		dzielnica: "Bemowo",
	},
	{
		id: 2267,
		ulica: "Osada Ojców",
		dzielnica: "Wawer",
	},
	{
		id: 2268,
		ulica: "Osadnicza",
		dzielnica: "Wawer",
	},
	{
		id: 2269,
		ulica: "Osiecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2270,
		ulica: "Osiedlowa",
		dzielnica: "Wawer",
	},
	{
		id: 2271,
		ulica: "Osikowa",
		dzielnica: "Wawer",
	},
	{
		id: 2272,
		ulica: "Osmańczyka",
		dzielnica: "Bemowo",
	},
	{
		id: 2273,
		ulica: "Osmańska",
		dzielnica: "Ursynów",
	},
	{
		id: 2274,
		ulica: "Osowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2275,
		ulica: "Ossolińskich",
		dzielnica: "Wawer",
	},
	{
		id: 2276,
		ulica: "Ossowskiego",
		dzielnica: "Targówek",
	},
	{
		id: 2277,
		ulica: "Osterwy",
		dzielnica: "Wawer",
	},
	{
		id: 2278,
		ulica: "Ostra",
		dzielnica: "Wawer",
	},
	{
		id: 2279,
		ulica: "Ostrobramska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2280,
		ulica: "Ostroroga",
		dzielnica: "Wola",
	},
	{
		id: 2281,
		ulica: "Ostrowiecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2282,
		ulica: "Ostrołęcka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2283,
		ulica: "Ostrzycka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2284,
		ulica: "Ostródzka",
		dzielnica: "Białołęka",
	},
	{
		id: 2285,
		ulica: "Oszmiańska",
		dzielnica: "Targówek",
	},
	{
		id: 2286,
		ulica: "Oświatowa",
		dzielnica: "Wawer",
	},
	{
		id: 2287,
		ulica: "Otawska",
		dzielnica: "Wawer",
	},
	{
		id: 2288,
		ulica: "Otrębuska",
		dzielnica: "Wawer",
	},
	{
		id: 2289,
		ulica: "Otwarta",
		dzielnica: "Wawer",
	},
	{
		id: 2290,
		ulica: "Otwocka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2291,
		ulica: "Owalna",
		dzielnica: "Wawer",
	},
	{
		id: 2292,
		ulica: "Owczarska",
		dzielnica: "Wawer",
	},
	{
		id: 2293,
		ulica: "Owocowa",
		dzielnica: "Wawer",
	},
	{
		id: 2294,
		ulica: "Owsiana",
		dzielnica: "Wawer",
	},
	{
		id: 2295,
		ulica: "Ożarowska",
		dzielnica: "Wola",
	},
	{
		id: 2296,
		ulica: "Pabianicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2297,
		ulica: "Paca",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2298,
		ulica: "Pachnąca",
		dzielnica: "Wawer",
	},
	{
		id: 2299,
		ulica: "Pacholęca",
		dzielnica: "Wawer",
	},
	{
		id: 2300,
		ulica: "Paczkowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2301,
		ulica: "Paderewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2302,
		ulica: "Padewska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2303,
		ulica: "Paganiniego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2304,
		ulica: "Pajdaka",
		dzielnica: "Wawer",
	},
	{
		id: 2305,
		ulica: "Pajęcza",
		dzielnica: "Wawer",
	},
	{
		id: 2306,
		ulica: "Palestyńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2307,
		ulica: "Palisadowa",
		dzielnica: "Wola",
	},
	{
		id: 2308,
		ulica: "Palmirska",
		dzielnica: "Bielany",
	},
	{
		id: 2309,
		ulica: "Palmowa",
		dzielnica: "Wawer",
	},
	{
		id: 2310,
		ulica: "Paluch",
		dzielnica: "Włochy",
	},
	{
		id: 2311,
		ulica: "Pana Tadeusza",
		dzielnica: "Wawer",
	},
	{
		id: 2312,
		ulica: "Pancera",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2313,
		ulica: "Pandy",
		dzielnica: "Wawer",
	},
	{
		id: 2314,
		ulica: "Panieńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2315,
		ulica: "Pankiewicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 2316,
		ulica: "Panny Wodnej",
		dzielnica: "Wawer",
	},
	{
		id: 2317,
		ulica: "Panoramy",
		dzielnica: "Wawer",
	},
	{
		id: 2318,
		ulica: "Pańska",
		dzielnica: "Mirów - Wola",
	},
	{
		id: 2319,
		ulica: "Papierowa",
		dzielnica: "Wawer",
	},
	{
		id: 2320,
		ulica: "Papieska",
		dzielnica: "Wawer",
	},
	{
		id: 2321,
		ulica: "Papirusów",
		dzielnica: "Wawer",
	},
	{
		id: 2322,
		ulica: "Paprociowa",
		dzielnica: "Wawer",
	},
	{
		id: 2323,
		ulica: "Parandowskiego",
		dzielnica: "Bielany",
	},
	{
		id: 2324,
		ulica: "Parcelacyjna",
		dzielnica: "Włochy",
	},
	{
		id: 2325,
		ulica: "Parkingowa",
		dzielnica: "Mokotów",
	},
	{
		id: 2326,
		ulica: "Parkowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 2327,
		ulica: "Parola",
		dzielnica: "Włochy",
	},
	{
		id: 2328,
		ulica: "Parowcowa",
		dzielnica: "Włochy",
	},
	{
		id: 2329,
		ulica: "Parterowa",
		dzielnica: "Wawer",
	},
	{
		id: 2330,
		ulica: "Paryska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2331,
		ulica: "Parznice",
		dzielnica: "Wawer",
	},
	{
		id: 2332,
		ulica: "Pasażerska",
		dzielnica: "Włochy",
	},
	{
		id: 2333,
		ulica: "Paska",
		dzielnica: "Wawer",
	},
	{
		id: 2334,
		ulica: "Pastelowa",
		dzielnica: "Wawer",
	},
	{
		id: 2335,
		ulica: "Pasterska",
		dzielnica: "Wawer",
	},
	{
		id: 2336,
		ulica: "Pasteura",
		dzielnica: "Ochota",
	},
	{
		id: 2337,
		ulica: "Pastewna",
		dzielnica: "Wawer",
	},
	{
		id: 2338,
		ulica: "Pasymska",
		dzielnica: "Bielany",
	},
	{
		id: 2339,
		ulica: "Paszkiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 2340,
		ulica: "Paszkowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2341,
		ulica: "Pasłęcka",
		dzielnica: "Białołęka",
	},
	{
		id: 2342,
		ulica: "Patkowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2343,
		ulica: "Patriotów",
		dzielnica: "Wawer",
	},
	{
		id: 2344,
		ulica: "Patrolowa",
		dzielnica: "Wawer",
	},
	{
		id: 2345,
		ulica: "św. Patryka",
		dzielnica: "Wawer",
	},
	{
		id: 2346,
		ulica: "Pawia",
		dzielnica: "Wola",
	},
	{
		id: 2347,
		ulica: "Pawińskiego",
		dzielnica: "Ochota",
	},
	{
		id: 2348,
		ulica: "Pawlaczyka",
		dzielnica: "Wawer",
	},
	{
		id: 2349,
		ulica: "Pawlikowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2350,
		ulica: "Pazińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2351,
		ulica: "Pałacowa",
		dzielnica: "Wawer",
	},
	{
		id: 2352,
		ulica: "Pejzażowa",
		dzielnica: "Mokotów",
	},
	{
		id: 2353,
		ulica: "Pelargonii",
		dzielnica: "Wawer",
	},
	{
		id: 2354,
		ulica: "Pelikanów",
		dzielnica: "Wawer",
	},
	{
		id: 2355,
		ulica: "Pelplińska",
		dzielnica: "Białołęka",
	},
	{
		id: 2356,
		ulica: "Penelopy",
		dzielnica: "Białołęka",
	},
	{
		id: 2357,
		ulica: "Pereca",
		dzielnica: "Wola",
	},
	{
		id: 2358,
		ulica: "Perkuna",
		dzielnica: "Wawer",
	},
	{
		id: 2359,
		ulica: "Perlicza",
		dzielnica: "Wawer",
	},
	{
		id: 2360,
		ulica: "Perseusza",
		dzielnica: "Białołęka",
	},
	{
		id: 2361,
		ulica: "Perzyńskiego",
		dzielnica: "Bielany",
	},
	{
		id: 2362,
		ulica: "Perłowa",
		dzielnica: "Wawer",
	},
	{
		id: 2363,
		ulica: "Peszteńska",
		dzielnica: "Wawer",
	},
	{
		id: 2364,
		ulica: "Petofiego",
		dzielnica: "Wawer",
	},
	{
		id: 2365,
		ulica: "Petunii",
		dzielnica: "Wawer",
	},
	{
		id: 2366,
		ulica: "Petyhorska",
		dzielnica: "Wawer",
	},
	{
		id: 2367,
		ulica: "Pełczyńskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 2368,
		ulica: "Pęcicka",
		dzielnica: "Wawer",
	},
	{
		id: 2369,
		ulica: "Pianistów",
		dzielnica: "Włochy",
	},
	{
		id: 2370,
		ulica: "Piaseczyńska",
		dzielnica: "Mokotów",
	},
	{
		id: 2371,
		ulica: "Piaskowa",
		dzielnica: "Wola",
	},
	{
		id: 2372,
		ulica: "Piasta Kołodzieja",
		dzielnica: "Targówek",
	},
	{
		id: 2373,
		ulica: "Piastowska",
		dzielnica: "Wola",
	},
	{
		id: 2374,
		ulica: "Piastów Śląskich",
		dzielnica: "Bemowo",
	},
	{
		id: 2375,
		ulica: "Picassa",
		dzielnica: "Białołęka",
	},
	{
		id: 2376,
		ulica: "Piechoty Wybranieckiej",
		dzielnica: "Białołęka",
	},
	{
		id: 2377,
		ulica: "Piechoty Łanowej",
		dzielnica: "Białołęka",
	},
	{
		id: 2378,
		ulica: "Piechurów",
		dzielnica: "Wawer",
	},
	{
		id: 2379,
		ulica: "Piecyka",
		dzielnica: "Białołęka",
	},
	{
		id: 2380,
		ulica: "Piekarska",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 2381,
		ulica: "Piekałkiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 2382,
		ulica: "Pielgrzymów",
		dzielnica: "Wawer",
	},
	{
		id: 2383,
		ulica: "Pielęgniarek",
		dzielnica: "Wawer",
	},
	{
		id: 2384,
		ulica: "Piesza",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 2385,
		ulica: "Pieńkowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2386,
		ulica: "Pilarzy",
		dzielnica: "Wawer",
	},
	{
		id: 2387,
		ulica: "Pilchowicka",
		dzielnica: "Bielany",
	},
	{
		id: 2388,
		ulica: "Pileckiego",
		dzielnica: "Ursynów",
	},
	{
		id: 2389,
		ulica: "Pilicka",
		dzielnica: "Mokotów",
	},
	{
		id: 2390,
		ulica: "Pillatich",
		dzielnica: "Wawer",
	},
	{
		id: 2391,
		ulica: "Pionierów",
		dzielnica: "Wawer",
	},
	{
		id: 2392,
		ulica: "Piotra Skargi",
		dzielnica: "Śródmieście",
	},
	{
		id: 2393,
		ulica: "Piotrkowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2394,
		ulica: "Pirenejska",
		dzielnica: "Bemowo",
	},
	{
		id: 2395,
		ulica: "Pisankowa",
		dzielnica: "Wawer",
	},
	{
		id: 2396,
		ulica: "Pisarka",
		dzielnica: "Wawer",
	},
	{
		id: 2397,
		ulica: "Pistacjowa",
		dzielnica: "Wawer",
	},
	{
		id: 2398,
		ulica: "Pitagorasa",
		dzielnica: "Białołęka",
	},
	{
		id: 2399,
		ulica: "Piwarskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2400,
		ulica: "Piwna",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 2401,
		ulica: "Piwoniowa",
		dzielnica: "Wawer",
	},
	{
		id: 2402,
		ulica: "Pięciolinii",
		dzielnica: "Białołęka",
	},
	{
		id: 2403,
		ulica: "Piękna",
		dzielnica: "Śródmieście",
	},
	{
		id: 2404,
		ulica: "Piłkarska",
		dzielnica: "Wawer",
	},
	{
		id: 2405,
		ulica: "pl. Piłsudskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 2406,
		ulica: "Pińczowska",
		dzielnica: "Wawer",
	},
	{
		id: 2407,
		ulica: "Pińska",
		dzielnica: "Wawer",
	},
	{
		id: 2408,
		ulica: "Plakatowa",
		dzielnica: "Ursynów",
	},
	{
		id: 2409,
		ulica: "Planetowa",
		dzielnica: "Ursynów",
	},
	{
		id: 2410,
		ulica: "Plastyczna",
		dzielnica: "Włochy",
	},
	{
		id: 2411,
		ulica: "Plater",
		dzielnica: "Śródmieście",
	},
	{
		id: 2412,
		ulica: "Platynowa",
		dzielnica: "Włochy",
	},
	{
		id: 2413,
		ulica: "Plażowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2414,
		ulica: "Plutonowych",
		dzielnica: "Wawer",
	},
	{
		id: 2415,
		ulica: "Plutonu 'Torpedy'",
		dzielnica: "Wawer",
	},
	{
		id: 2416,
		ulica: "Pląsy",
		dzielnica: "Wawer",
	},
	{
		id: 2417,
		ulica: "Płaskowickiej",
		dzielnica: "Ursynów",
	},
	{
		id: 2418,
		ulica: "Płatnerska",
		dzielnica: "Wawer",
	},
	{
		id: 2419,
		ulica: "Płatnicza",
		dzielnica: "Bielany",
	},
	{
		id: 2420,
		ulica: "Płatowcowa",
		dzielnica: "Włochy",
	},
	{
		id: 2421,
		ulica: "Płochocińska",
		dzielnica: "Białołęka",
	},
	{
		id: 2422,
		ulica: "Płocka",
		dzielnica: "Wola",
	},
	{
		id: 2423,
		ulica: "Płomyka",
		dzielnica: "Wawer",
	},
	{
		id: 2424,
		ulica: "Płowce",
		dzielnica: "Wawer",
	},
	{
		id: 2425,
		ulica: "Płowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 2426,
		ulica: "Płońska",
		dzielnica: "Wawer",
	},
	{
		id: 2427,
		ulica: "Pługa",
		dzielnica: "Stara Ochota - Ochota",
	},
	{
		id: 2428,
		ulica: "Płużańska",
		dzielnica: "Wawer",
	},
	{
		id: 2429,
		ulica: "Płużnicka",
		dzielnica: "Wawer",
	},
	{
		id: 2430,
		ulica: "Płytowa",
		dzielnica: "Wawer",
	},
	{
		id: 2431,
		ulica: "Pływacka",
		dzielnica: "Wawer",
	},
	{
		id: 2432,
		ulica: "Płyćwiańska",
		dzielnica: "Mokotów",
	},
	{
		id: 2433,
		ulica: "Poborzańska",
		dzielnica: "Targówek",
	},
	{
		id: 2434,
		ulica: "Poczty Gdańskiej",
		dzielnica: "Białołęka",
	},
	{
		id: 2435,
		ulica: "Początkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2436,
		ulica: "Pod Kopcem",
		dzielnica: "Czerniaków - Mokotów",
	},
	{
		id: 2437,
		ulica: "Pod Lipą",
		dzielnica: "Wawer",
	},
	{
		id: 2438,
		ulica: "Pod Skocznią",
		dzielnica: "Mokotów",
	},
	{
		id: 2439,
		ulica: "Pod Strzechą",
		dzielnica: "Wawer",
	},
	{
		id: 2440,
		ulica: "Podbiałowa",
		dzielnica: "Wawer",
	},
	{
		id: 2441,
		ulica: "Podbipięty",
		dzielnica: "Wawer",
	},
	{
		id: 2442,
		ulica: "Podborska",
		dzielnica: "Wawer",
	},
	{
		id: 2443,
		ulica: "Podchorążych",
		dzielnica: "Mokotów",
	},
	{
		id: 2444,
		ulica: "Podczaszyńskiego",
		dzielnica: "Bielany",
	},
	{
		id: 2445,
		ulica: "Podgórna",
		dzielnica: "Wawer",
	},
	{
		id: 2446,
		ulica: "Podgórska",
		dzielnica: "Wawer",
	},
	{
		id: 2447,
		ulica: "Podhalańska",
		dzielnica: "Wawer",
	},
	{
		id: 2448,
		ulica: "Podkowińska",
		dzielnica: "Wawer",
	},
	{
		id: 2449,
		ulica: "Podkowy",
		dzielnica: "Wawer",
	},
	{
		id: 2450,
		ulica: "Podleśna",
		dzielnica: "Bielany",
	},
	{
		id: 2451,
		ulica: "Podmiejska",
		dzielnica: "Wawer",
	},
	{
		id: 2452,
		ulica: "Podmokła",
		dzielnica: "Wawer",
	},
	{
		id: 2453,
		ulica: "Podobna",
		dzielnica: "Wawer",
	},
	{
		id: 2454,
		ulica: "Podolska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2455,
		ulica: "Podróżnicza",
		dzielnica: "Wawer",
	},
	{
		id: 2456,
		ulica: "Podskarbińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2457,
		ulica: "Podstarościch",
		dzielnica: "Wawer",
	},
	{
		id: 2458,
		ulica: "Podwale",
		dzielnica: "Śródmieście",
	},
	{
		id: 2459,
		ulica: "Poetów",
		dzielnica: "Wawer",
	},
	{
		id: 2460,
		ulica: "Poezji",
		dzielnica: "Wawer",
	},
	{
		id: 2461,
		ulica: "Pogodna",
		dzielnica: "Wawer",
	},
	{
		id: 2462,
		ulica: "Pogonowskiego",
		dzielnica: "Wola",
	},
	{
		id: 2463,
		ulica: "Pograniczna",
		dzielnica: "Wawer",
	},
	{
		id: 2464,
		ulica: "Pokrzywnicka",
		dzielnica: "Wawer",
	},
	{
		id: 2465,
		ulica: "Pola",
		dzielnica: "Wawer",
	},
	{
		id: 2466,
		ulica: "Polaka",
		dzielnica: "Wawer",
	},
	{
		id: 2467,
		ulica: "Polany",
		dzielnica: "Wawer",
	},
	{
		id: 2468,
		ulica: "Poleczki",
		dzielnica: "Ursynów",
	},
	{
		id: 2469,
		ulica: "Poleska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2470,
		ulica: "Poligonowa",
		dzielnica: "Wawer",
	},
	{
		id: 2471,
		ulica: "Polinezyjska",
		dzielnica: "Bemowo",
	},
	{
		id: 2472,
		ulica: "pl. Politechniki",
		dzielnica: "Śródmieście",
	},
	{
		id: 2473,
		ulica: "Polkowska",
		dzielnica: "Wawer",
	},
	{
		id: 2474,
		ulica: "Polna",
		dzielnica: "Śródmieście",
	},
	{
		id: 2475,
		ulica: "Polnej Róży",
		dzielnica: "Wawer",
	},
	{
		id: 2476,
		ulica: "Polnych Kwiatów",
		dzielnica: "Wawer",
	},
	{
		id: 2477,
		ulica: "Poloneza",
		dzielnica: "Ursynów",
	},
	{
		id: 2478,
		ulica: "Polska",
		dzielnica: "Wawer",
	},
	{
		id: 2479,
		ulica: "Polskich Skrzydeł",
		dzielnica: "Bemowo",
	},
	{
		id: 2480,
		ulica: "Pomarańczowa",
		dzielnica: "Wawer",
	},
	{
		id: 2481,
		ulica: "Pomianowska",
		dzielnica: "Wawer",
	},
	{
		id: 2482,
		ulica: "Pomiechowska",
		dzielnica: "Białołęka",
	},
	{
		id: 2483,
		ulica: "Pomologiczna",
		dzielnica: "Wawer",
	},
	{
		id: 2484,
		ulica: "Pomorska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2485,
		ulica: "most Poniatowskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 2486,
		ulica: "Poniecka",
		dzielnica: "Stara Ochota - Ochota",
	},
	{
		id: 2487,
		ulica: "Ponikowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2488,
		ulica: "Pontonierów",
		dzielnica: "Wawer",
	},
	{
		id: 2489,
		ulica: "Popas",
		dzielnica: "Wawer",
	},
	{
		id: 2490,
		ulica: "Popiela",
		dzielnica: "Wawer",
	},
	{
		id: 2491,
		ulica: "Popiełuszki",
		dzielnica: "Żoliborz",
	},
	{
		id: 2492,
		ulica: "Popiołka",
		dzielnica: "Wawer",
	},
	{
		id: 2493,
		ulica: "Popiołów",
		dzielnica: "Wawer",
	},
	{
		id: 2494,
		ulica: "Popradzka",
		dzielnica: "Wawer",
	},
	{
		id: 2495,
		ulica: "Poprawna",
		dzielnica: "Wawer",
	},
	{
		id: 2496,
		ulica: "Popularna",
		dzielnica: "Włochy",
	},
	{
		id: 2497,
		ulica: "Porajów",
		dzielnica: "Białołęka",
	},
	{
		id: 2498,
		ulica: "Poranna",
		dzielnica: "Wawer",
	},
	{
		id: 2499,
		ulica: "Porannej Bryzy",
		dzielnica: "Wawer",
	},
	{
		id: 2500,
		ulica: "Poronińska",
		dzielnica: "Wawer",
	},
	{
		id: 2501,
		ulica: "Portofino",
		dzielnica: "Wawer",
	},
	{
		id: 2502,
		ulica: "Portowa",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2503,
		ulica: "Pory",
		dzielnica: "Mokotów",
	},
	{
		id: 2504,
		ulica: "Porębska",
		dzielnica: "Wawer",
	},
	{
		id: 2505,
		ulica: "Posag 7 Panien",
		dzielnica: "Ursus",
	},
	{
		id: 2506,
		ulica: "Posejdona",
		dzielnica: "Białołęka",
	},
	{
		id: 2507,
		ulica: "Poselska",
		dzielnica: "Wawer",
	},
	{
		id: 2508,
		ulica: "Pospolita",
		dzielnica: "Wawer",
	},
	{
		id: 2509,
		ulica: "Postępu",
		dzielnica: "Mokotów",
	},
	{
		id: 2510,
		ulica: "Posłańców",
		dzielnica: "Wawer",
	},
	{
		id: 2511,
		ulica: "Potażowa",
		dzielnica: "Wawer",
	},
	{
		id: 2512,
		ulica: "Potocka",
		dzielnica: "Żoliborz",
	},
	{
		id: 2513,
		ulica: "Potockich",
		dzielnica: "Wawer",
	},
	{
		id: 2514,
		ulica: "Potockiego",
		dzielnica: "Wawer",
	},
	{
		id: 2515,
		ulica: "Potrzebna",
		dzielnica: "Włochy",
	},
	{
		id: 2516,
		ulica: "Potulicka",
		dzielnica: "Wawer",
	},
	{
		id: 2517,
		ulica: "Potułkały",
		dzielnica: "Wawer",
	},
	{
		id: 2518,
		ulica: "Powojowa",
		dzielnica: "Wawer",
	},
	{
		id: 2519,
		ulica: "Powroźnicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 2520,
		ulica: "Powsińska",
		dzielnica: "Mokotów",
	},
	{
		id: 2521,
		ulica: "pl. Powstańców Warszawy",
		dzielnica: "Śródmieście",
	},
	{
		id: 2522,
		ulica: "Powstańców Wielkopolskich",
		dzielnica: "Bemowo",
	},
	{
		id: 2523,
		ulica: "Powstańców Śląskich",
		dzielnica: "Bemowo",
	},
	{
		id: 2524,
		ulica: "Powszechna",
		dzielnica: "Wawer",
	},
	{
		id: 2525,
		ulica: "Powązkowska",
		dzielnica: "Żoliborz",
	},
	{
		id: 2526,
		ulica: "Poziomkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2527,
		ulica: "Poznańska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2528,
		ulica: "Pozytywki",
		dzielnica: "Wawer",
	},
	{
		id: 2529,
		ulica: "Połaniecka",
		dzielnica: "Wawer",
	},
	{
		id: 2530,
		ulica: "Połanieckich",
		dzielnica: "Wawer",
	},
	{
		id: 2531,
		ulica: "Połczyńska",
		dzielnica: "Bemowo",
	},
	{
		id: 2532,
		ulica: "Południowa",
		dzielnica: "Wawer",
	},
	{
		id: 2533,
		ulica: "Połączona",
		dzielnica: "Wawer",
	},
	{
		id: 2534,
		ulica: "Poświętna",
		dzielnica: "Wawer",
	},
	{
		id: 2535,
		ulica: "Pożarowa",
		dzielnica: "Wawer",
	},
	{
		id: 2536,
		ulica: "Pożaryskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2537,
		ulica: "Północna",
		dzielnica: "Śródmieście",
	},
	{
		id: 2538,
		ulica: "Prasowa",
		dzielnica: "Wawer",
	},
	{
		id: 2539,
		ulica: "Prawdziwka",
		dzielnica: "Wawer",
	},
	{
		id: 2540,
		ulica: "Prawnicza",
		dzielnica: "Wawer",
	},
	{
		id: 2541,
		ulica: "Prałatowska",
		dzielnica: "Targówek",
	},
	{
		id: 2542,
		ulica: "Prażmowska",
		dzielnica: "Wawer",
	},
	{
		id: 2543,
		ulica: "Prezydencka",
		dzielnica: "Wawer",
	},
	{
		id: 2544,
		ulica: "Prochowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2545,
		ulica: "Prokuratorska",
		dzielnica: "Wawer",
	},
	{
		id: 2546,
		ulica: "Promenada",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2547,
		ulica: "Prometeusza",
		dzielnica: "Bemowo",
	},
	{
		id: 2548,
		ulica: "Promienista",
		dzielnica: "Wawer",
	},
	{
		id: 2549,
		ulica: "al. Promienistych",
		dzielnica: "Wawer",
	},
	{
		id: 2550,
		ulica: "Promienna",
		dzielnica: "Wawer",
	},
	{
		id: 2551,
		ulica: "Promyka",
		dzielnica: "Wawer",
	},
	{
		id: 2552,
		ulica: "Prosta",
		dzielnica: "Wola",
	},
	{
		id: 2553,
		ulica: "Protazego",
		dzielnica: "Wawer",
	},
	{
		id: 2554,
		ulica: "Prozy",
		dzielnica: "Wawer",
	},
	{
		id: 2555,
		ulica: "Prudnicka",
		dzielnica: "Wawer",
	},
	{
		id: 2556,
		ulica: "Prusa",
		dzielnica: "Śródmieście",
	},
	{
		id: 2557,
		ulica: "Pruszkowska",
		dzielnica: "Ochota",
	},
	{
		id: 2558,
		ulica: "Pruszyńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2559,
		ulica: "al. Prymasa Tysiąclecia",
		dzielnica: "Wola",
	},
	{
		id: 2560,
		ulica: "Pryzmaty",
		dzielnica: "Wawer",
	},
	{
		id: 2561,
		ulica: "Przanowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2562,
		ulica: "Przasnyska",
		dzielnica: "Żoliborz",
	},
	{
		id: 2563,
		ulica: "Przebieg",
		dzielnica: "Wawer",
	},
	{
		id: 2564,
		ulica: "Przechodnia",
		dzielnica: "Śródmieście Północne - Śródmieście",
	},
	{
		id: 2565,
		ulica: "Przecławska",
		dzielnica: "Wawer",
	},
	{
		id: 2566,
		ulica: "Przedatki",
		dzielnica: "Wawer",
	},
	{
		id: 2567,
		ulica: "Przednia",
		dzielnica: "Wawer",
	},
	{
		id: 2568,
		ulica: "Przedpole",
		dzielnica: "Wawer",
	},
	{
		id: 2569,
		ulica: "Przedwiośnie",
		dzielnica: "Wawer",
	},
	{
		id: 2570,
		ulica: "Przedświt",
		dzielnica: "Wawer",
	},
	{
		id: 2571,
		ulica: "Przejazd",
		dzielnica: "Wawer",
	},
	{
		id: 2572,
		ulica: "Przekorna",
		dzielnica: "Wilanów",
	},
	{
		id: 2573,
		ulica: "Przemian",
		dzielnica: "Wawer",
	},
	{
		id: 2574,
		ulica: "Przemyska",
		dzielnica: "Wawer",
	},
	{
		id: 2575,
		ulica: "Przemysława",
		dzielnica: "Wawer",
	},
	{
		id: 2576,
		ulica: "Przemysłowa",
		dzielnica: "Wola",
	},
	{
		id: 2577,
		ulica: "Przepiórki",
		dzielnica: "Wawer",
	},
	{
		id: 2578,
		ulica: "Przeskok",
		dzielnica: "Śródmieście",
	},
	{
		id: 2579,
		ulica: "Przesmyk",
		dzielnica: "Wawer",
	},
	{
		id: 2580,
		ulica: "Przewodowa",
		dzielnica: "Wawer",
	},
	{
		id: 2581,
		ulica: "Przewoźników",
		dzielnica: "Wawer",
	},
	{
		id: 2582,
		ulica: "Przy Agorze",
		dzielnica: "Bielany",
	},
	{
		id: 2583,
		ulica: "Przy Bażantarni",
		dzielnica: "Ursynów",
	},
	{
		id: 2584,
		ulica: "Przy Bernardyńskiej Wodzie",
		dzielnica: "Mokotów",
	},
	{
		id: 2585,
		ulica: "Przy Lasku",
		dzielnica: "Wawer",
	},
	{
		id: 2586,
		ulica: "Przy Parku",
		dzielnica: "Wawer",
	},
	{
		id: 2587,
		ulica: "Przybylskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2588,
		ulica: "Przybyszewskiego",
		dzielnica: "Ochota",
	},
	{
		id: 2589,
		ulica: "Przyce",
		dzielnica: "Wola",
	},
	{
		id: 2590,
		ulica: "Przyczółkowa",
		dzielnica: "Wilanów",
	},
	{
		id: 2591,
		ulica: "Przydrożna",
		dzielnica: "Wawer",
	},
	{
		id: 2592,
		ulica: "Przygodna",
		dzielnica: "Wawer",
	},
	{
		id: 2593,
		ulica: "al. Przyjaciół",
		dzielnica: "Śródmieście",
	},
	{
		id: 2594,
		ulica: "Przyjaźni",
		dzielnica: "Wawer",
	},
	{
		id: 2595,
		ulica: "os. Przyjaźń",
		dzielnica: "Bemowo",
	},
	{
		id: 2596,
		ulica: "Przylaszczkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2597,
		ulica: "Przylesie",
		dzielnica: "Wawer",
	},
	{
		id: 2598,
		ulica: "Przyleśna",
		dzielnica: "Wawer",
	},
	{
		id: 2599,
		ulica: "pl. Przymierza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2600,
		ulica: "Przyokopowa",
		dzielnica: "Wola",
	},
	{
		id: 2601,
		ulica: "Przyrynek",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 2602,
		ulica: "Przyrzecze",
		dzielnica: "Wawer",
	},
	{
		id: 2603,
		ulica: "Przytulna",
		dzielnica: "Wawer",
	},
	{
		id: 2604,
		ulica: "Przytyk",
		dzielnica: "Wawer",
	},
	{
		id: 2605,
		ulica: "Przyłęcka",
		dzielnica: "Wawer",
	},
	{
		id: 2606,
		ulica: "Prząśniczek",
		dzielnica: "Wawer",
	},
	{
		id: 2607,
		ulica: "Próchnika",
		dzielnica: "Wola",
	},
	{
		id: 2608,
		ulica: "Próżna",
		dzielnica: "Śródmieście",
	},
	{
		id: 2609,
		ulica: "Prądzyńskiego",
		dzielnica: "Wola",
	},
	{
		id: 2610,
		ulica: "Prętowa",
		dzielnica: "Wawer",
	},
	{
		id: 2611,
		ulica: "Pstrowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2612,
		ulica: "Pszczyńska",
		dzielnica: "Wawer",
	},
	{
		id: 2613,
		ulica: "Pszenickiego",
		dzielnica: "Wawer",
	},
	{
		id: 2614,
		ulica: "Ptasia",
		dzielnica: "Śródmieście",
	},
	{
		id: 2615,
		ulica: "Ptysiowa",
		dzielnica: "Wawer",
	},
	{
		id: 2616,
		ulica: "Puchaczy",
		dzielnica: "Wawer",
	},
	{
		id: 2617,
		ulica: "Puchalska",
		dzielnica: "Wawer",
	},
	{
		id: 2618,
		ulica: "Pustelnicka",
		dzielnica: "Wawer",
	},
	{
		id: 2619,
		ulica: "Pustola",
		dzielnica: "Wola",
	},
	{
		id: 2620,
		ulica: "Pustułeczki",
		dzielnica: "Wawer",
	},
	{
		id: 2621,
		ulica: "Puszczy Solskiej",
		dzielnica: "Wawer",
	},
	{
		id: 2622,
		ulica: "Puszczyka",
		dzielnica: "Wawer",
	},
	{
		id: 2623,
		ulica: "Puszkarzy",
		dzielnica: "Wawer",
	},
	{
		id: 2624,
		ulica: "Puzonistów",
		dzielnica: "Wawer",
	},
	{
		id: 2625,
		ulica: "Pułaskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 2626,
		ulica: "Puławska",
		dzielnica: "Mokotów",
	},
	{
		id: 2627,
		ulica: "Pułkowa",
		dzielnica: "Bielany",
	},
	{
		id: 2628,
		ulica: "Pułku 'Baszta'",
		dzielnica: "Mokotów",
	},
	{
		id: 2629,
		ulica: "Pułtuska",
		dzielnica: "Wawer",
	},
	{
		id: 2630,
		ulica: "Pużaka",
		dzielnica: "Wola",
	},
	{
		id: 2631,
		ulica: "Pyszniańska",
		dzielnica: "Wawer",
	},
	{
		id: 2632,
		ulica: "Pytlasińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2633,
		ulica: "Raabego",
		dzielnica: "Ursynów",
	},
	{
		id: 2634,
		ulica: "Rabatowa",
		dzielnica: "Wawer",
	},
	{
		id: 2635,
		ulica: "Rabczańska",
		dzielnica: "Wawer",
	},
	{
		id: 2636,
		ulica: "Rabsztyńska",
		dzielnica: "Wola",
	},
	{
		id: 2637,
		ulica: "Raciborska",
		dzielnica: "Wawer",
	},
	{
		id: 2638,
		ulica: "Racjonalizacji",
		dzielnica: "Mokotów",
	},
	{
		id: 2639,
		ulica: "Racławicka",
		dzielnica: "Mokotów",
	},
	{
		id: 2640,
		ulica: "Racłowicka",
		dzielnica: "Wawer",
	},
	{
		id: 2641,
		ulica: "Radarowa",
		dzielnica: "Włochy",
	},
	{
		id: 2642,
		ulica: "Radecka",
		dzielnica: "Wawer",
	},
	{
		id: 2643,
		ulica: "Radiowa",
		dzielnica: "Bemowo",
	},
	{
		id: 2644,
		ulica: "Radna",
		dzielnica: "Śródmieście",
	},
	{
		id: 2645,
		ulica: "Radomska",
		dzielnica: "Ochota",
	},
	{
		id: 2646,
		ulica: "Radomszczańska",
		dzielnica: "Wawer",
	},
	{
		id: 2647,
		ulica: "Radosna",
		dzielnica: "Wawer",
	},
	{
		id: 2648,
		ulica: "Radoszycka",
		dzielnica: "Wawer",
	},
	{
		id: 2649,
		ulica: "Raduńska",
		dzielnica: "Wawer",
	},
	{
		id: 2650,
		ulica: "Radziwie",
		dzielnica: "Wola",
	},
	{
		id: 2651,
		ulica: "Radziwiłłówny",
		dzielnica: "Ursus",
	},
	{
		id: 2652,
		ulica: "Radziłowska",
		dzielnica: "Wawer",
	},
	{
		id: 2653,
		ulica: "Radzymińska",
		dzielnica: "Targówek",
	},
	{
		id: 2654,
		ulica: "Radłowa",
		dzielnica: "Wawer",
	},
	{
		id: 2655,
		ulica: "Radłowska",
		dzielnica: "Wawer",
	},
	{
		id: 2656,
		ulica: "Rafaela",
		dzielnica: "Wawer",
	},
	{
		id: 2657,
		ulica: "Rafałowska",
		dzielnica: "Wawer",
	},
	{
		id: 2658,
		ulica: "Rafii",
		dzielnica: "Wawer",
	},
	{
		id: 2659,
		ulica: "Raginisa",
		dzielnica: "Wawer",
	},
	{
		id: 2660,
		ulica: "Rajców",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 2661,
		ulica: "Rajgrodzka",
		dzielnica: "Wawer",
	},
	{
		id: 2662,
		ulica: "Rajmunda",
		dzielnica: "Wawer",
	},
	{
		id: 2663,
		ulica: "Rajska",
		dzielnica: "Wawer",
	},
	{
		id: 2664,
		ulica: "Rajskich Ptaków",
		dzielnica: "Wawer",
	},
	{
		id: 2665,
		ulica: "Rakietników",
		dzielnica: "Włochy",
	},
	{
		id: 2666,
		ulica: "Rakowiecka",
		dzielnica: "Mokotów",
	},
	{
		id: 2667,
		ulica: "Rakuszanki",
		dzielnica: "Włochy",
	},
	{
		id: 2668,
		ulica: "Raniuszka",
		dzielnica: "Wawer",
	},
	{
		id: 2669,
		ulica: "Rapackiego",
		dzielnica: "Stara Ochota - Ochota",
	},
	{
		id: 2670,
		ulica: "Raperswilska",
		dzielnica: "Białołęka",
	},
	{
		id: 2671,
		ulica: "Rapperswilska",
		dzielnica: "Białołęka",
	},
	{
		id: 2672,
		ulica: "Raszei",
		dzielnica: "Ochota",
	},
	{
		id: 2673,
		ulica: "Rasztowska",
		dzielnica: "Targówek",
	},
	{
		id: 2674,
		ulica: "Raszyńska",
		dzielnica: "Stara Ochota - Ochota",
	},
	{
		id: 2675,
		ulica: "Ratuszowa",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2676,
		ulica: "Ratyniecka",
		dzielnica: "Wawer",
	},
	{
		id: 2677,
		ulica: "Rawicka",
		dzielnica: "Wawer",
	},
	{
		id: 2678,
		ulica: "Rechniewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2679,
		ulica: "Redaktorska",
		dzielnica: "Włochy",
	},
	{
		id: 2680,
		ulica: "Redutowa",
		dzielnica: "Wola",
	},
	{
		id: 2681,
		ulica: "Regatowa",
		dzielnica: "Wawer",
	},
	{
		id: 2682,
		ulica: "Regera",
		dzielnica: "Wawer",
	},
	{
		id: 2683,
		ulica: "Regulska",
		dzielnica: "Ursus",
	},
	{
		id: 2684,
		ulica: "Reichera",
		dzielnica: "Mokotów",
	},
	{
		id: 2685,
		ulica: "Reja",
		dzielnica: "Śródmieście",
	},
	{
		id: 2686,
		ulica: "Rejewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2687,
		ulica: "Rejonowa",
		dzielnica: "Wawer",
	},
	{
		id: 2688,
		ulica: "Rejowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 2689,
		ulica: "Rejsu",
		dzielnica: "Wawer",
	},
	{
		id: 2690,
		ulica: "Rejtana",
		dzielnica: "Śródmieście",
	},
	{
		id: 2691,
		ulica: "Rekrucka",
		dzielnica: "Wawer",
	},
	{
		id: 2692,
		ulica: "Relaksowa",
		dzielnica: "Ursynów",
	},
	{
		id: 2693,
		ulica: "Rembielińska",
		dzielnica: "Targówek",
	},
	{
		id: 2694,
		ulica: "pl. Rembowskiego",
		dzielnica: "Wola",
	},
	{
		id: 2695,
		ulica: "Remiszewska",
		dzielnica: "Targówek",
	},
	{
		id: 2696,
		ulica: "Remontowa",
		dzielnica: "Wawer",
	},
	{
		id: 2697,
		ulica: "Renesansowa",
		dzielnica: "Bielany",
	},
	{
		id: 2698,
		ulica: "Reniferowa",
		dzielnica: "Wawer",
	},
	{
		id: 2699,
		ulica: "Republikańska",
		dzielnica: "Wawer",
	},
	{
		id: 2700,
		ulica: "Resorowa",
		dzielnica: "Wawer",
	},
	{
		id: 2701,
		ulica: "Reszelska",
		dzielnica: "Wawer",
	},
	{
		id: 2702,
		ulica: "al. Reymonta",
		dzielnica: "Bielany",
	},
	{
		id: 2703,
		ulica: "Rezedowa",
		dzielnica: "Wawer",
	},
	{
		id: 2704,
		ulica: "Reżyserska",
		dzielnica: "Targówek",
	},
	{
		id: 2705,
		ulica: "Rębkowska",
		dzielnica: "Wawer",
	},
	{
		id: 2706,
		ulica: "Rękodzielnicza",
		dzielnica: "Wawer",
	},
	{
		id: 2707,
		ulica: "Ringelbluma",
		dzielnica: "Wola",
	},
	{
		id: 2708,
		ulica: "Robinii",
		dzielnica: "Wawer",
	},
	{
		id: 2709,
		ulica: "Robotnicza",
		dzielnica: "Wola",
	},
	{
		id: 2710,
		ulica: "Rodakowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 2711,
		ulica: "Rodziewiczówny",
		dzielnica: "Wawer",
	},
	{
		id: 2712,
		ulica: "Rodziny Hiszpańskich",
		dzielnica: "Wawer",
	},
	{
		id: 2713,
		ulica: "Rodła",
		dzielnica: "Wawer",
	},
	{
		id: 2714,
		ulica: "Roentgena",
		dzielnica: "Ursynów",
	},
	{
		id: 2715,
		ulica: "Rogalińska",
		dzielnica: "Wola",
	},
	{
		id: 2716,
		ulica: "Rogalskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2717,
		ulica: "Rogatkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2718,
		ulica: "Rogowska",
		dzielnica: "Wawer",
	},
	{
		id: 2719,
		ulica: "Rokitnicka",
		dzielnica: "Wawer",
	},
	{
		id: 2720,
		ulica: "Rokokowa",
		dzielnica: "Bielany",
	},
	{
		id: 2721,
		ulica: "Rokosowska",
		dzielnica: "Ochota",
	},
	{
		id: 2722,
		ulica: "Rolanda",
		dzielnica: "Wawer",
	},
	{
		id: 2723,
		ulica: "Rolna",
		dzielnica: "Mokotów",
	},
	{
		id: 2724,
		ulica: "Rolnicza",
		dzielnica: "Wawer",
	},
	{
		id: 2725,
		ulica: "Romantyczna",
		dzielnica: "Wawer",
	},
	{
		id: 2726,
		ulica: "Romańska",
		dzielnica: "Wawer",
	},
	{
		id: 2727,
		ulica: "Romera",
		dzielnica: "Ursynów",
	},
	{
		id: 2728,
		ulica: "Rondo Dmowskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 2729,
		ulica: "Rondo Jazdy Polskiej",
		dzielnica: "Śródmieście",
	},
	{
		id: 2730,
		ulica: "Rondo ONZ",
		dzielnica: "Śródmieście",
	},
	{
		id: 2731,
		ulica: "Rondo Waszyngtona",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2732,
		ulica: "Rondo Wiatraczna",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2733,
		ulica: "Ropczycka",
		dzielnica: "Wawer",
	},
	{
		id: 2734,
		ulica: "Rosiczki",
		dzielnica: "Wawer",
	},
	{
		id: 2735,
		ulica: "Rosnąca",
		dzielnica: "Wawer",
	},
	{
		id: 2736,
		ulica: "Rosochata",
		dzielnica: "Wawer",
	},
	{
		id: 2737,
		ulica: "Rosoła",
		dzielnica: "Ursynów",
	},
	{
		id: 2738,
		ulica: "Rostafińskich",
		dzielnica: "Ochota",
	},
	{
		id: 2739,
		ulica: "Rostworowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2740,
		ulica: "Rosy",
		dzielnica: "Wawer",
	},
	{
		id: 2741,
		ulica: "Rotmistrzowska",
		dzielnica: "Wawer",
	},
	{
		id: 2742,
		ulica: "Rotundy",
		dzielnica: "Wawer",
	},
	{
		id: 2743,
		ulica: "Roty",
		dzielnica: "Wawer",
	},
	{
		id: 2744,
		ulica: "Rozalińska",
		dzielnica: "Wawer",
	},
	{
		id: 2745,
		ulica: "Rozbrat",
		dzielnica: "Śródmieście",
	},
	{
		id: 2746,
		ulica: "Rozewska",
		dzielnica: "Wawer",
	},
	{
		id: 2747,
		ulica: "Rozkoszna",
		dzielnica: "Wawer",
	},
	{
		id: 2748,
		ulica: "Rozszerzona",
		dzielnica: "Wawer",
	},
	{
		id: 2749,
		ulica: "Roztoki",
		dzielnica: "Wawer",
	},
	{
		id: 2750,
		ulica: "Rozwadowska",
		dzielnica: "Wawer",
	},
	{
		id: 2751,
		ulica: "Rozłogi",
		dzielnica: "Bemowo",
	},
	{
		id: 2752,
		ulica: "Rozłucka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2753,
		ulica: "Rościszewska",
		dzielnica: "Wawer",
	},
	{
		id: 2754,
		ulica: "Rożek",
		dzielnica: "Wawer",
	},
	{
		id: 2755,
		ulica: "Rożnowska",
		dzielnica: "Wawer",
	},
	{
		id: 2756,
		ulica: "Równa",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2757,
		ulica: "Równoległa",
		dzielnica: "Wawer",
	},
	{
		id: 2758,
		ulica: "al. Róż",
		dzielnica: "Śródmieście",
	},
	{
		id: 2759,
		ulica: "Różana",
		dzielnica: "Mokotów",
	},
	{
		id: 2760,
		ulica: "Róży Wiatrów",
		dzielnica: "Wawer",
	},
	{
		id: 2761,
		ulica: "Ruchliwa",
		dzielnica: "Wawer",
	},
	{
		id: 2762,
		ulica: "Ruczaj",
		dzielnica: "Wawer",
	},
	{
		id: 2763,
		ulica: "Rudawska",
		dzielnica: "Wawer",
	},
	{
		id: 2764,
		ulica: "Rudnickiego",
		dzielnica: "Bielany",
	},
	{
		id: 2765,
		ulica: "Rudzka",
		dzielnica: "Bielany",
	},
	{
		id: 2766,
		ulica: "Rumby",
		dzielnica: "Wawer",
	},
	{
		id: 2767,
		ulica: "Rumiana",
		dzielnica: "Wilanów",
	},
	{
		id: 2768,
		ulica: "Rumiankowa",
		dzielnica: "Wawer",
	},
	{
		id: 2769,
		ulica: "Rumuńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2770,
		ulica: "Rusiecka",
		dzielnica: "Białołęka",
	},
	{
		id: 2771,
		ulica: "Ruskowy Bród",
		dzielnica: "Białołęka",
	},
	{
		id: 2772,
		ulica: "Rusznikarska",
		dzielnica: "Wola",
	},
	{
		id: 2773,
		ulica: "Rutkiewicz",
		dzielnica: "Wawer",
	},
	{
		id: 2774,
		ulica: "Rybaki",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 2775,
		ulica: "Rybałtów",
		dzielnica: "Wawer",
	},
	{
		id: 2776,
		ulica: "Rybieńska",
		dzielnica: "Wawer",
	},
	{
		id: 2777,
		ulica: "Rybitwy",
		dzielnica: "Wawer",
	},
	{
		id: 2778,
		ulica: "Rybińskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 2779,
		ulica: "Rybna",
		dzielnica: "Wawer",
	},
	{
		id: 2780,
		ulica: "Rybnicka",
		dzielnica: "Wawer",
	},
	{
		id: 2781,
		ulica: "Rycerska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2782,
		ulica: "Rychtera",
		dzielnica: "Wawer",
	},
	{
		id: 2783,
		ulica: "Rydla",
		dzielnica: "Bemowo",
	},
	{
		id: 2784,
		ulica: "Rydygiera",
		dzielnica: "Żoliborz",
	},
	{
		id: 2785,
		ulica: "Rydzyńska",
		dzielnica: "Ochota",
	},
	{
		id: 2786,
		ulica: "Rymanowska",
		dzielnica: "Wawer",
	},
	{
		id: 2787,
		ulica: "Rymkiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 2788,
		ulica: "Rynek Nowego Miasta",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 2789,
		ulica: "Rynek Starego Miasta",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 2790,
		ulica: "Rynkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2791,
		ulica: "Rysia",
		dzielnica: "Wawer",
	},
	{
		id: 2792,
		ulica: "Rysy",
		dzielnica: "Wawer",
	},
	{
		id: 2793,
		ulica: "Ryżowa",
		dzielnica: "Włochy",
	},
	{
		id: 2794,
		ulica: "Rzeczna",
		dzielnica: "Targówek",
	},
	{
		id: 2795,
		ulica: "Rzeczycka",
		dzielnica: "Wawer",
	},
	{
		id: 2796,
		ulica: "Rzeczypospolitej",
		dzielnica: "Wilanów",
	},
	{
		id: 2797,
		ulica: "Rzemieślników",
		dzielnica: "Targówek",
	},
	{
		id: 2798,
		ulica: "Rzepichy",
		dzielnica: "Targówek",
	},
	{
		id: 2799,
		ulica: "Rzeszowska",
		dzielnica: "Wawer",
	},
	{
		id: 2800,
		ulica: "Rzewińska",
		dzielnica: "Wawer",
	},
	{
		id: 2801,
		ulica: "Rzeźbiarska",
		dzielnica: "Wawer",
	},
	{
		id: 2802,
		ulica: "Rzędzińska",
		dzielnica: "Wawer",
	},
	{
		id: 2803,
		ulica: "Rzymowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 2804,
		ulica: "Rzymska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2805,
		ulica: "Sabały",
		dzielnica: "Włochy",
	},
	{
		id: 2806,
		ulica: "Sadkowska",
		dzielnica: "Białołęka",
	},
	{
		id: 2807,
		ulica: "Sadulska",
		dzielnica: "Wawer",
	},
	{
		id: 2808,
		ulica: "Sady Żoliborskie",
		dzielnica: "Żoliborz",
	},
	{
		id: 2809,
		ulica: "Safony",
		dzielnica: "Targówek",
	},
	{
		id: 2810,
		ulica: "Salamandry",
		dzielnica: "Wawer",
	},
	{
		id: 2811,
		ulica: "św. Salezego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2812,
		ulica: "Salomejska",
		dzielnica: "Włochy",
	},
	{
		id: 2813,
		ulica: "Samarytanka",
		dzielnica: "Targówek",
	},
	{
		id: 2814,
		ulica: "Samborska",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 2815,
		ulica: "Samochodowa",
		dzielnica: "Włochy",
	},
	{
		id: 2816,
		ulica: "Samogłoska",
		dzielnica: "Białołęka",
	},
	{
		id: 2817,
		ulica: "Samolotowa",
		dzielnica: "Włochy",
	},
	{
		id: 2818,
		ulica: "Samorządowa",
		dzielnica: "Wawer",
	},
	{
		id: 2819,
		ulica: "Samosiejki",
		dzielnica: "Wawer",
	},
	{
		id: 2820,
		ulica: "Samsonowska",
		dzielnica: "Wawer",
	},
	{
		id: 2821,
		ulica: "Sandomierska",
		dzielnica: "Mokotów",
	},
	{
		id: 2822,
		ulica: "Sanguszki",
		dzielnica: "Śródmieście",
	},
	{
		id: 2823,
		ulica: "Sanocka",
		dzielnica: "Wawer",
	},
	{
		id: 2824,
		ulica: "Saperów",
		dzielnica: "Wola",
	},
	{
		id: 2825,
		ulica: "Sapieżyńska",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 2826,
		ulica: "Sarabandy",
		dzielnica: "Ursynów",
	},
	{
		id: 2827,
		ulica: "Sarbiewskiego",
		dzielnica: "Wola",
	},
	{
		id: 2828,
		ulica: "Sardyńska",
		dzielnica: "Włochy",
	},
	{
		id: 2829,
		ulica: "Sarmacka",
		dzielnica: "Wilanów",
	},
	{
		id: 2830,
		ulica: "Sarmatów",
		dzielnica: "Wilanów",
	},
	{
		id: 2831,
		ulica: "Sasanki",
		dzielnica: "Włochy",
	},
	{
		id: 2832,
		ulica: "Saska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2833,
		ulica: "Sąchocka",
		dzielnica: "Ochota",
	},
	{
		id: 2834,
		ulica: "Sąsiedzka",
		dzielnica: "Wawer",
	},
	{
		id: 2835,
		ulica: "Sążnista",
		dzielnica: "Wawer",
	},
	{
		id: 2836,
		ulica: "Schillera",
		dzielnica: "Muranów",
	},
	{
		id: 2837,
		ulica: "Schroegera",
		dzielnica: "Bielany",
	},
	{
		id: 2838,
		ulica: "Schulza",
		dzielnica: "Bielany",
	},
	{
		id: 2839,
		ulica: "Secemińska",
		dzielnica: "Bemowo",
	},
	{
		id: 2840,
		ulica: "Sejmikowa",
		dzielnica: "Wawer",
	},
	{
		id: 2841,
		ulica: "Sekundowa",
		dzielnica: "Włochy",
	},
	{
		id: 2842,
		ulica: "Seledynowa",
		dzielnica: "Białołęka",
	},
	{
		id: 2843,
		ulica: "Sempołowskiej",
		dzielnica: "Ochota",
	},
	{
		id: 2844,
		ulica: "Senacka",
		dzielnica: "Wilanów",
	},
	{
		id: 2845,
		ulica: "Senatorska",
		dzielnica: "Śródmieście Północne - Śródmieście",
	},
	{
		id: 2846,
		ulica: "Sengera",
		dzielnica: "Wawer",
	},
	{
		id: 2847,
		ulica: "Senna",
		dzielnica: "Wawer",
	},
	{
		id: 2848,
		ulica: "Serdeczna",
		dzielnica: "Wawer",
	},
	{
		id: 2849,
		ulica: "Serocka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2850,
		ulica: "Serwituty",
		dzielnica: "Włochy",
	},
	{
		id: 2851,
		ulica: "Sewastopolska",
		dzielnica: "Wawer",
	},
	{
		id: 2852,
		ulica: "Sewerynów",
		dzielnica: "Śródmieście",
	},
	{
		id: 2853,
		ulica: "Sezam",
		dzielnica: "Wawer",
	},
	{
		id: 2854,
		ulica: "Sęczkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2855,
		ulica: "Sędziowska",
		dzielnica: "Wawer",
	},
	{
		id: 2856,
		ulica: "Sękocińska",
		dzielnica: "Ochota",
	},
	{
		id: 2857,
		ulica: "Sępia",
		dzielnica: "Wawer",
	},
	{
		id: 2858,
		ulica: "Siarczana",
		dzielnica: "Wawer",
	},
	{
		id: 2859,
		ulica: "Sibeliusa",
		dzielnica: "Wawer",
	},
	{
		id: 2860,
		ulica: "Sieciechowska",
		dzielnica: "Wawer",
	},
	{
		id: 2861,
		ulica: "Siedlecka",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2862,
		ulica: "Siedmiogrodzka",
		dzielnica: "Wola",
	},
	{
		id: 2863,
		ulica: "Siedzibna",
		dzielnica: "Wawer",
	},
	{
		id: 2864,
		ulica: "Siekierkowska",
		dzielnica: "Mokotów",
	},
	{
		id: 2865,
		ulica: "Sielanki",
		dzielnica: "Wawer",
	},
	{
		id: 2866,
		ulica: "Sielecka",
		dzielnica: "Mokotów",
	},
	{
		id: 2867,
		ulica: "Sielska",
		dzielnica: "Wawer",
	},
	{
		id: 2868,
		ulica: "Siemiatycka",
		dzielnica: "Wawer",
	},
	{
		id: 2869,
		ulica: "Siemienowicza",
		dzielnica: "Wawer",
	},
	{
		id: 2870,
		ulica: "Siemieńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2871,
		ulica: "Siemiradzkiego",
		dzielnica: "Wawer",
	},
	{
		id: 2872,
		ulica: "Sienkiewicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 2873,
		ulica: "Sienna",
		dzielnica: "Wola",
	},
	{
		id: 2874,
		ulica: "Siennicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2875,
		ulica: "Sieradzka",
		dzielnica: "Wola",
	},
	{
		id: 2876,
		ulica: "Sierakowskiego",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2877,
		ulica: "Sierpecka",
		dzielnica: "Żoliborz",
	},
	{
		id: 2878,
		ulica: "Sierpińskiego",
		dzielnica: "Ochota",
	},
	{
		id: 2879,
		ulica: "Siewierska",
		dzielnica: "Ochota",
	},
	{
		id: 2880,
		ulica: "Sikorska",
		dzielnica: "Wawer",
	},
	{
		id: 2881,
		ulica: "al. Sikorskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 2882,
		ulica: "Siodlarska",
		dzielnica: "Wawer",
	},
	{
		id: 2883,
		ulica: "Sitnika",
		dzielnica: "Wawer",
	},
	{
		id: 2884,
		ulica: "Sitowie",
		dzielnica: "Wawer",
	},
	{
		id: 2885,
		ulica: "Siłaczki",
		dzielnica: "Wawer",
	},
	{
		id: 2886,
		ulica: "Skalbmierska",
		dzielnica: "Bemowo",
	},
	{
		id: 2887,
		ulica: "Skalmowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2888,
		ulica: "Skalnicowa",
		dzielnica: "Wawer",
	},
	{
		id: 2889,
		ulica: "Skarbka z Gór",
		dzielnica: "Białołęka",
	},
	{
		id: 2890,
		ulica: "Skargi",
		dzielnica: "Śródmieście",
	},
	{
		id: 2891,
		ulica: "Skaryszewska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2892,
		ulica: "Skarżyńskiego",
		dzielnica: "Włochy",
	},
	{
		id: 2893,
		ulica: "Skazańców",
		dzielnica: "Śródmieście",
	},
	{
		id: 2894,
		ulica: "Skibicka",
		dzielnica: "Włochy",
	},
	{
		id: 2895,
		ulica: "Skierdowska",
		dzielnica: "Białołęka",
	},
	{
		id: 2896,
		ulica: "Skierniewicka",
		dzielnica: "Wola",
	},
	{
		id: 2897,
		ulica: "Sklepowa",
		dzielnica: "Białołęka",
	},
	{
		id: 2898,
		ulica: "Skoczylasa",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2899,
		ulica: "Skokowa",
		dzielnica: "Wawer",
	},
	{
		id: 2900,
		ulica: "Skolimowska",
		dzielnica: "Mokotów",
	},
	{
		id: 2901,
		ulica: "Skorochód-Majewskiego",
		dzielnica: "Ochota",
	},
	{
		id: 2902,
		ulica: "Skoroszewska",
		dzielnica: "Ursus",
	},
	{
		id: 2903,
		ulica: "Skorupki",
		dzielnica: "Śródmieście",
	},
	{
		id: 2904,
		ulica: "Skrajna",
		dzielnica: "Wawer",
	},
	{
		id: 2905,
		ulica: "Skrzeszewskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2906,
		ulica: "Skrzetuskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2907,
		ulica: "Skrzyneckiego",
		dzielnica: "Wawer",
	},
	{
		id: 2908,
		ulica: "Skrzypcowa",
		dzielnica: "Wawer",
	},
	{
		id: 2909,
		ulica: "Skuterowa",
		dzielnica: "Wawer",
	},
	{
		id: 2910,
		ulica: "Skwierzyńska",
		dzielnica: "Wawer",
	},
	{
		id: 2911,
		ulica: "Składowa",
		dzielnica: "Wola",
	},
	{
		id: 2912,
		ulica: "Skłoby",
		dzielnica: "Wawer",
	},
	{
		id: 2913,
		ulica: "Skłodowskiej-Curie",
		dzielnica: "Śródmieście",
	},
	{
		id: 2914,
		ulica: "Sławińska",
		dzielnica: "Wola",
	},
	{
		id: 2915,
		ulica: "Sławka",
		dzielnica: "Włochy",
	},
	{
		id: 2916,
		ulica: "Sławkowska",
		dzielnica: "Wola",
	},
	{
		id: 2917,
		ulica: "Sławoja-Składkowskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 2918,
		ulica: "Słodka",
		dzielnica: "Wawer",
	},
	{
		id: 2919,
		ulica: "Słodowiec",
		dzielnica: "Bielany",
	},
	{
		id: 2920,
		ulica: "Słodowiecka",
		dzielnica: "Bielany",
	},
	{
		id: 2921,
		ulica: "Słomiana",
		dzielnica: "Wawer",
	},
	{
		id: 2922,
		ulica: "Słomińskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 2923,
		ulica: "Słoneczna",
		dzielnica: "Mokotów",
	},
	{
		id: 2924,
		ulica: "Słonecznikowa",
		dzielnica: "Wawer",
	},
	{
		id: 2925,
		ulica: "Słonki",
		dzielnica: "Wawer",
	},
	{
		id: 2926,
		ulica: "Słotna",
		dzielnica: "Wawer",
	},
	{
		id: 2927,
		ulica: "Słowackiego",
		dzielnica: "Żoliborz",
	},
	{
		id: 2928,
		ulica: "al. Słowiańska",
		dzielnica: "Białołęka",
	},
	{
		id: 2929,
		ulica: "Słowicza",
		dzielnica: "Włochy",
	},
	{
		id: 2930,
		ulica: "Słubicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2931,
		ulica: "Słupecka",
		dzielnica: "Ochota",
	},
	{
		id: 2932,
		ulica: "Słupska",
		dzielnica: "Wola",
	},
	{
		id: 2933,
		ulica: "Służby Polsce",
		dzielnica: "Ursynów",
	},
	{
		id: 2934,
		ulica: "Służewska",
		dzielnica: "Śródmieście",
	},
	{
		id: 2935,
		ulica: "Smardzewska",
		dzielnica: "Wawer",
	},
	{
		id: 2936,
		ulica: "Smetany",
		dzielnica: "Mokotów",
	},
	{
		id: 2937,
		ulica: "Smocza",
		dzielnica: "Wola",
	},
	{
		id: 2938,
		ulica: "Smoleńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2939,
		ulica: "Smoleńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2940,
		ulica: "Smolna",
		dzielnica: "Śródmieście",
	},
	{
		id: 2941,
		ulica: "Smoluchowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 2942,
		ulica: "Smosarskiej",
		dzielnica: "Wawer",
	},
	{
		id: 2943,
		ulica: "Smoszewska",
		dzielnica: "Wawer",
	},
	{
		id: 2944,
		ulica: "Smugowa",
		dzielnica: "Wawer",
	},
	{
		id: 2945,
		ulica: "Smulikowskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 2946,
		ulica: "Smyczkowa",
		dzielnica: "Wawer",
	},
	{
		id: 2947,
		ulica: "Snopowa",
		dzielnica: "Wawer",
	},
	{
		id: 2948,
		ulica: "Sobczaka",
		dzielnica: "Wawer",
	},
	{
		id: 2949,
		ulica: "Sobierajska",
		dzielnica: "Wawer",
	},
	{
		id: 2950,
		ulica: "Sobieskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 2951,
		ulica: "Sobieszyńska",
		dzielnica: "Wawer",
	},
	{
		id: 2952,
		ulica: "Sobocka",
		dzielnica: "Wawer",
	},
	{
		id: 2953,
		ulica: "Sobolewska",
		dzielnica: "Wawer",
	},
	{
		id: 2954,
		ulica: "Sochaczewska",
		dzielnica: "Wola",
	},
	{
		id: 2955,
		ulica: "Soczi",
		dzielnica: "Wawer",
	},
	{
		id: 2956,
		ulica: "Sokola",
		dzielnica: "Praga-Południe",
	},
	{
		id: 2957,
		ulica: "Sokołowska",
		dzielnica: "Wola",
	},
	{
		id: 2958,
		ulica: "Sokratesa",
		dzielnica: "Bielany",
	},
	{
		id: 2959,
		ulica: "Solankowa",
		dzielnica: "Wawer",
	},
	{
		id: 2960,
		ulica: "Solariego",
		dzielnica: "Wawer",
	},
	{
		id: 2961,
		ulica: "Solec",
		dzielnica: "Powiśle - Śródmieście",
	},
	{
		id: 2962,
		ulica: "al. Solidarności",
		dzielnica: "Mirów - Wola",
	},
	{
		id: 2963,
		ulica: "Solipska",
		dzielnica: "Włochy",
	},
	{
		id: 2964,
		ulica: "Solińska",
		dzielnica: "Włochy",
	},
	{
		id: 2965,
		ulica: "Solińskiego",
		dzielnica: "Włochy",
	},
	{
		id: 2966,
		ulica: "Sonaty",
		dzielnica: "Ursynów",
	},
	{
		id: 2967,
		ulica: "Sortowa",
		dzielnica: "Wawer",
	},
	{
		id: 2968,
		ulica: "Sosabowskiego",
		dzielnica: "Bemowo",
	},
	{
		id: 2969,
		ulica: "Sosnkowskiego",
		dzielnica: "Ursus",
	},
	{
		id: 2970,
		ulica: "Sosnowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 2971,
		ulica: "Sosnowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 2972,
		ulica: "Sotta",
		dzielnica: "Wawer",
	},
	{
		id: 2973,
		ulica: "Sowia",
		dzielnica: "Powiśle - Śródmieście",
	},
	{
		id: 2974,
		ulica: "Sowińskiego",
		dzielnica: "Wola",
	},
	{
		id: 2975,
		ulica: "Sozopolska",
		dzielnica: "Wawer",
	},
	{
		id: 2976,
		ulica: "Sołtana",
		dzielnica: "Bielany",
	},
	{
		id: 2977,
		ulica: "Sołtyka",
		dzielnica: "Wawer",
	},
	{
		id: 2978,
		ulica: "Sójki",
		dzielnica: "Wawer",
	},
	{
		id: 2979,
		ulica: "Spacerowa",
		dzielnica: "Mokotów",
	},
	{
		id: 2980,
		ulica: "Spadowa",
		dzielnica: "Wawer",
	},
	{
		id: 2981,
		ulica: "Spalinowa",
		dzielnica: "Wawer",
	},
	{
		id: 2982,
		ulica: "Spalska",
		dzielnica: "Wawer",
	},
	{
		id: 2983,
		ulica: "Spartakusa",
		dzielnica: "Wawer",
	},
	{
		id: 2984,
		ulica: "Spartańska",
		dzielnica: "Mokotów",
	},
	{
		id: 2985,
		ulica: "Spedycyjna",
		dzielnica: "Wawer",
	},
	{
		id: 2986,
		ulica: "Spiralna",
		dzielnica: "Wawer",
	},
	{
		id: 2987,
		ulica: "Spisaka",
		dzielnica: "Ursus",
	},
	{
		id: 2988,
		ulica: "Spiska",
		dzielnica: "Ochota",
	},
	{
		id: 2989,
		ulica: "Spokojna",
		dzielnica: "Wola",
	},
	{
		id: 2990,
		ulica: "Sporna",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2991,
		ulica: "Sprawna",
		dzielnica: "Białołęka",
	},
	{
		id: 2992,
		ulica: "Sprzeczna",
		dzielnica: "Praga-Północ",
	},
	{
		id: 2993,
		ulica: "Spychowska",
		dzielnica: "Wawer",
	},
	{
		id: 2994,
		ulica: "Spytka z Melsztyna",
		dzielnica: "Wawer",
	},
	{
		id: 2995,
		ulica: "Spójni",
		dzielnica: "Wawer",
	},
	{
		id: 2996,
		ulica: "Spółdzielcza",
		dzielnica: "Wawer",
	},
	{
		id: 2997,
		ulica: "Srebrna",
		dzielnica: "Wola",
	},
	{
		id: 2998,
		ulica: "Srebrnogórska",
		dzielnica: "Wawer",
	},
	{
		id: 2999,
		ulica: "Stachury",
		dzielnica: "Wawer",
	},
	{
		id: 3000,
		ulica: "Staffa",
		dzielnica: "Bielany",
	},
	{
		id: 3001,
		ulica: "Stalowa",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3002,
		ulica: "Staniewicka",
		dzielnica: "Targówek",
	},
	{
		id: 3003,
		ulica: "św. Stanisława",
		dzielnica: "Wola",
	},
	{
		id: 3004,
		ulica: "Stanisława Augusta",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3005,
		ulica: "Stanisławowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3006,
		ulica: "al. Stanów Zjednoczonych",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3007,
		ulica: "Stara",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 3008,
		ulica: "Starczewska",
		dzielnica: "Wawer",
	},
	{
		id: 3009,
		ulica: "Starego Doktora",
		dzielnica: "Wawer",
	},
	{
		id: 3010,
		ulica: "Rynek Starego Miasta",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 3011,
		ulica: "Starej Baśni",
		dzielnica: "Bemowo",
	},
	{
		id: 3012,
		ulica: "Starej Gruszy",
		dzielnica: "Białołęka",
	},
	{
		id: 3013,
		ulica: "Starowiejska",
		dzielnica: "Wawer",
	},
	{
		id: 3014,
		ulica: "Starozaciszańska",
		dzielnica: "Targówek",
	},
	{
		id: 3015,
		ulica: "Starościńska",
		dzielnica: "Mokotów",
	},
	{
		id: 3016,
		ulica: "Startowa",
		dzielnica: "Włochy",
	},
	{
		id: 3017,
		ulica: "pl. Starynkiewicza",
		dzielnica: "Ochota",
	},
	{
		id: 3018,
		ulica: "Starzyńskiego",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3019,
		ulica: "Stasinek",
		dzielnica: "Wawer",
	},
	{
		id: 3020,
		ulica: "Staszica",
		dzielnica: "Śródmieście",
	},
	{
		id: 3021,
		ulica: "Statkowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3022,
		ulica: "Stawiszyńska",
		dzielnica: "Wawer",
	},
	{
		id: 3023,
		ulica: "Stawki",
		dzielnica: "Śródmieście Północne - Śródmieście",
	},
	{
		id: 3024,
		ulica: "Stawowa",
		dzielnica: "Wawer",
	},
	{
		id: 3025,
		ulica: "Stawy",
		dzielnica: "Wawer",
	},
	{
		id: 3026,
		ulica: "Stefana Batorego",
		dzielnica: "Śródmieście",
	},
	{
		id: 3027,
		ulica: "Stefana Dębego",
		dzielnica: "Białołęka",
	},
	{
		id: 3028,
		ulica: "Stefanika",
		dzielnica: "Wawer",
	},
	{
		id: 3029,
		ulica: "Steinhausa",
		dzielnica: "Wawer",
	},
	{
		id: 3030,
		ulica: "Steinkellera",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 3031,
		ulica: "Stellera",
		dzielnica: "Bemowo",
	},
	{
		id: 3032,
		ulica: "Stelmachów",
		dzielnica: "Rembertów",
	},
	{
		id: 3033,
		ulica: "Stepowa",
		dzielnica: "Wawer",
	},
	{
		id: 3034,
		ulica: "Sterdyńska",
		dzielnica: "Targówek",
	},
	{
		id: 3035,
		ulica: "Sternhela",
		dzielnica: "Targówek",
	},
	{
		id: 3036,
		ulica: "Sternicza",
		dzielnica: "Wawer",
	},
	{
		id: 3037,
		ulica: "Stoczkowska",
		dzielnica: "Wawer",
	},
	{
		id: 3038,
		ulica: "Stoczniowców",
		dzielnica: "Wola",
	},
	{
		id: 3039,
		ulica: "Stojanowska",
		dzielnica: "Wawer",
	},
	{
		id: 3040,
		ulica: "Stokrotki",
		dzielnica: "Wawer",
	},
	{
		id: 3041,
		ulica: "Stokłosy",
		dzielnica: "Ursynów",
	},
	{
		id: 3042,
		ulica: "Stolarska",
		dzielnica: "Wawer",
	},
	{
		id: 3043,
		ulica: "Stopowa",
		dzielnica: "Wawer",
	},
	{
		id: 3044,
		ulica: "Storczykowa",
		dzielnica: "Wawer",
	},
	{
		id: 3045,
		ulica: "Stradomska",
		dzielnica: "Wawer",
	},
	{
		id: 3046,
		ulica: "Strawczyńska",
		dzielnica: "Wawer",
	},
	{
		id: 3047,
		ulica: "Strażacka",
		dzielnica: "Wawer",
	},
	{
		id: 3048,
		ulica: "Stroma",
		dzielnica: "Wawer",
	},
	{
		id: 3049,
		ulica: "Strońska",
		dzielnica: "Wawer",
	},
	{
		id: 3050,
		ulica: "Strubiczów",
		dzielnica: "Wawer",
	},
	{
		id: 3051,
		ulica: "Struga",
		dzielnica: "Wawer",
	},
	{
		id: 3052,
		ulica: "Strumykowa",
		dzielnica: "Białołęka",
	},
	{
		id: 3053,
		ulica: "Strusia",
		dzielnica: "Wawer",
	},
	{
		id: 3054,
		ulica: "Stryjeńskich",
		dzielnica: "Ursynów",
	},
	{
		id: 3055,
		ulica: "Strzegomska",
		dzielnica: "Wawer",
	},
	{
		id: 3056,
		ulica: "Strzelca",
		dzielnica: "Wawer",
	},
	{
		id: 3057,
		ulica: "Strzelców",
		dzielnica: "Targówek",
	},
	{
		id: 3058,
		ulica: "Strzelecka",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3059,
		ulica: "Strzeleckiego",
		dzielnica: "Wawer",
	},
	{
		id: 3060,
		ulica: "Strzelińska",
		dzielnica: "Wawer",
	},
	{
		id: 3061,
		ulica: "Strzybnicka",
		dzielnica: "Wawer",
	},
	{
		id: 3062,
		ulica: "Strzygłowska",
		dzielnica: "Wawer",
	},
	{
		id: 3063,
		ulica: "Strąkowa",
		dzielnica: "Wawer",
	},
	{
		id: 3064,
		ulica: "Studencka",
		dzielnica: "Śródmieście",
	},
	{
		id: 3065,
		ulica: "Studzienna",
		dzielnica: "Wawer",
	},
	{
		id: 3066,
		ulica: "Styki",
		dzielnica: "Wawer",
	},
	{
		id: 3067,
		ulica: "Stylowa",
		dzielnica: "Wawer",
	},
	{
		id: 3068,
		ulica: "Styrska",
		dzielnica: "Wawer",
	},
	{
		id: 3069,
		ulica: "Stągiewna",
		dzielnica: "Wawer",
	},
	{
		id: 3070,
		ulica: "Stępińska",
		dzielnica: "Mokotów",
	},
	{
		id: 3071,
		ulica: "Stężycka",
		dzielnica: "Wawer",
	},
	{
		id: 3072,
		ulica: "Sucha",
		dzielnica: "Wawer",
	},
	{
		id: 3073,
		ulica: "Sucharskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3074,
		ulica: "Suchodolska",
		dzielnica: "Wawer",
	},
	{
		id: 3075,
		ulica: "Suchy Las",
		dzielnica: "Wawer",
	},
	{
		id: 3076,
		ulica: "Sueska",
		dzielnica: "Wawer",
	},
	{
		id: 3077,
		ulica: "Suflerska",
		dzielnica: "Wawer",
	},
	{
		id: 3078,
		ulica: "Sulejkowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3079,
		ulica: "Suligowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3080,
		ulica: "Sulimy",
		dzielnica: "Wawer",
	},
	{
		id: 3081,
		ulica: "Sulkiewicza",
		dzielnica: "Śródmieście",
	},
	{
		id: 3082,
		ulica: "Sulmierzycka",
		dzielnica: "Wawer",
	},
	{
		id: 3083,
		ulica: "Sulęcińska",
		dzielnica: "Wawer",
	},
	{
		id: 3084,
		ulica: "Surowieckiego",
		dzielnica: "Ursynów",
	},
	{
		id: 3085,
		ulica: "Suwak",
		dzielnica: "Mokotów",
	},
	{
		id: 3086,
		ulica: "Suwalska",
		dzielnica: "Targówek",
	},
	{
		id: 3087,
		ulica: "Suzina",
		dzielnica: "Żoliborz",
	},
	{
		id: 3088,
		ulica: "Sułkowicka",
		dzielnica: "Mokotów",
	},
	{
		id: 3089,
		ulica: "Sułkowskiego",
		dzielnica: "Żoliborz",
	},
	{
		id: 3090,
		ulica: "Swarożyca",
		dzielnica: "Wawer",
	},
	{
		id: 3091,
		ulica: "Swarzewska",
		dzielnica: "Wawer",
	},
	{
		id: 3092,
		ulica: "Swojska",
		dzielnica: "Wawer",
	},
	{
		id: 3093,
		ulica: "Sybilli",
		dzielnica: "Żoliborz",
	},
	{
		id: 3094,
		ulica: "Sycowska",
		dzielnica: "Wawer",
	},
	{
		id: 3095,
		ulica: "Sycylijska",
		dzielnica: "Mokotów",
	},
	{
		id: 3096,
		ulica: "Sygietyńskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3097,
		ulica: "Symfonii",
		dzielnica: "Ursynów",
	},
	{
		id: 3098,
		ulica: "Synów Pułku",
		dzielnica: "Bemowo",
	},
	{
		id: 3099,
		ulica: "Sypniewska",
		dzielnica: "Wawer",
	},
	{
		id: 3100,
		ulica: "Syreny",
		dzielnica: "Wola",
	},
	{
		id: 3101,
		ulica: "Syrokomli",
		dzielnica: "Wawer",
	},
	{
		id: 3102,
		ulica: "Syta",
		dzielnica: "Wilanów",
	},
	{
		id: 3103,
		ulica: "Szachowa",
		dzielnica: "Wawer",
	},
	{
		id: 3104,
		ulica: "Szadkowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3105,
		ulica: "Szafarzy",
		dzielnica: "Wawer",
	},
	{
		id: 3106,
		ulica: "Szafirowa",
		dzielnica: "Wawer",
	},
	{
		id: 3107,
		ulica: "Szaflarska",
		dzielnica: "Wawer",
	},
	{
		id: 3108,
		ulica: "Szajnochy",
		dzielnica: "Wawer",
	},
	{
		id: 3109,
		ulica: "Szalejowa",
		dzielnica: "Wawer",
	},
	{
		id: 3110,
		ulica: "Szamocin",
		dzielnica: "Białołęka",
	},
	{
		id: 3111,
		ulica: "Szamocka",
		dzielnica: "Żoliborz",
	},
	{
		id: 3112,
		ulica: "Szamoty",
		dzielnica: "Włochy",
	},
	{
		id: 3113,
		ulica: "Szanajcy",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3114,
		ulica: "Szancera",
		dzielnica: "Wawer",
	},
	{
		id: 3115,
		ulica: "Szaniawskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3116,
		ulica: "Szara",
		dzielnica: "Wawer",
	},
	{
		id: 3117,
		ulica: "Szareckiego",
		dzielnica: "Wawer",
	},
	{
		id: 3118,
		ulica: "Szarotki",
		dzielnica: "Wawer",
	},
	{
		id: 3119,
		ulica: "Szarych Szeregów",
		dzielnica: "Wawer",
	},
	{
		id: 3120,
		ulica: "Szaserów",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3121,
		ulica: "Szatkowników",
		dzielnica: "Wawer",
	},
	{
		id: 3122,
		ulica: "Szawelska",
		dzielnica: "Targówek",
	},
	{
		id: 3123,
		ulica: "Szałasa",
		dzielnica: "Wawer",
	},
	{
		id: 3124,
		ulica: "Szałka",
		dzielnica: "Wawer",
	},
	{
		id: 3125,
		ulica: "Szałwiowa",
		dzielnica: "Wawer",
	},
	{
		id: 3126,
		ulica: "Szańcowa",
		dzielnica: "Wola",
	},
	{
		id: 3127,
		ulica: "Szczawnicka",
		dzielnica: "Wawer",
	},
	{
		id: 3128,
		ulica: "Szczecińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3129,
		ulica: "Szczekocińska",
		dzielnica: "Wawer",
	},
	{
		id: 3130,
		ulica: "Szczepanika",
		dzielnica: "Wawer",
	},
	{
		id: 3131,
		ulica: "Szczera",
		dzielnica: "Wawer",
	},
	{
		id: 3132,
		ulica: "Szczerbca",
		dzielnica: "Wawer",
	},
	{
		id: 3133,
		ulica: "Szczotkarska",
		dzielnica: "Wawer",
	},
	{
		id: 3134,
		ulica: "Szczuczyńska",
		dzielnica: "Wawer",
	},
	{
		id: 3135,
		ulica: "Szczuki",
		dzielnica: "Wawer",
	},
	{
		id: 3136,
		ulica: "Szczygla",
		dzielnica: "Wawer",
	},
	{
		id: 3137,
		ulica: "Szczytnowska",
		dzielnica: "Wawer",
	},
	{
		id: 3138,
		ulica: "Szczęsna",
		dzielnica: "Włochy",
	},
	{
		id: 3139,
		ulica: "Szczęśliwa",
		dzielnica: "Wawer",
	},
	{
		id: 3140,
		ulica: "Szczęśliwicka",
		dzielnica: "Ochota",
	},
	{
		id: 3141,
		ulica: "Szegedyńska",
		dzielnica: "Bielany",
	},
	{
		id: 3142,
		ulica: "Szekspira",
		dzielnica: "Bielany",
	},
	{
		id: 3143,
		ulica: "Szeligowska",
		dzielnica: "Bemowo",
	},
	{
		id: 3144,
		ulica: "pl. Szembeka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3145,
		ulica: "Szepietowska",
		dzielnica: "Wawer",
	},
	{
		id: 3146,
		ulica: "Szernera",
		dzielnica: "Wawer",
	},
	{
		id: 3147,
		ulica: "Szeroka",
		dzielnica: "Wawer",
	},
	{
		id: 3148,
		ulica: "Szeroki Dunaj",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 3149,
		ulica: "Szklana",
		dzielnica: "Wawer",
	},
	{
		id: 3150,
		ulica: "Szklanych Domów",
		dzielnica: "Wawer",
	},
	{
		id: 3151,
		ulica: "Szklarniowa",
		dzielnica: "Wawer",
	},
	{
		id: 3152,
		ulica: "Szkolna",
		dzielnica: "Wawer",
	},
	{
		id: 3153,
		ulica: "Szkoły Orląt",
		dzielnica: "Wawer",
	},
	{
		id: 3154,
		ulica: "Szlenkierów",
		dzielnica: "Wola",
	},
	{
		id: 3155,
		ulica: "Szmaragdowa",
		dzielnica: "Wawer",
	},
	{
		id: 3156,
		ulica: "Szobera",
		dzielnica: "Wola",
	},
	{
		id: 3157,
		ulica: "Szolc-Rogozińskiego",
		dzielnica: "Ursynów",
	},
	{
		id: 3158,
		ulica: "Szomańskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3159,
		ulica: "Szpacza",
		dzielnica: "Wawer",
	},
	{
		id: 3160,
		ulica: "Szparagowa",
		dzielnica: "Wawer",
	},
	{
		id: 3161,
		ulica: "Szpitalna",
		dzielnica: "Śródmieście",
	},
	{
		id: 3162,
		ulica: "Szreniawska",
		dzielnica: "Wawer",
	},
	{
		id: 3163,
		ulica: "Sztabowa",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3164,
		ulica: "Sztajerka",
		dzielnica: "Ursynów",
	},
	{
		id: 3165,
		ulica: "al. Sztandarów",
		dzielnica: "Rembertów",
	},
	{
		id: 3166,
		ulica: "Sztormowa",
		dzielnica: "Mokotów",
	},
	{
		id: 3167,
		ulica: "Sztuki",
		dzielnica: "Wawer",
	},
	{
		id: 3168,
		ulica: "Sztumska",
		dzielnica: "Wawer",
	},
	{
		id: 3169,
		ulica: "Szturmowa",
		dzielnica: "Mokotów",
	},
	{
		id: 3170,
		ulica: "Sztygarów",
		dzielnica: "Wawer",
	},
	{
		id: 3171,
		ulica: "Szuberta",
		dzielnica: "Wawer",
	},
	{
		id: 3172,
		ulica: "Szubińska",
		dzielnica: "Wawer",
	},
	{
		id: 3173,
		ulica: "al. Szucha",
		dzielnica: "Śródmieście",
	},
	{
		id: 3174,
		ulica: "Szulborska",
		dzielnica: "Wola",
	},
	{
		id: 3175,
		ulica: "Szulczyka",
		dzielnica: "Wawer",
	},
	{
		id: 3176,
		ulica: "Szumiąca",
		dzielnica: "Wawer",
	},
	{
		id: 3177,
		ulica: "Szumiących Traw",
		dzielnica: "Wawer",
	},
	{
		id: 3178,
		ulica: "Szumna",
		dzielnica: "Wawer",
	},
	{
		id: 3179,
		ulica: "Szwankowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3180,
		ulica: "Szwedzka",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3181,
		ulica: "Szwoleżerów",
		dzielnica: "Śródmieście",
	},
	{
		id: 3182,
		ulica: "Szybowcowa",
		dzielnica: "Wawer",
	},
	{
		id: 3183,
		ulica: "Szydłowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 3184,
		ulica: "Szymanowska",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 3185,
		ulica: "Szymanowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3186,
		ulica: "Szymańskiego",
		dzielnica: "Wola",
	},
	{
		id: 3187,
		ulica: "E. Szymańskiego",
		dzielnica: "Wola",
	},
	{
		id: 3188,
		ulica: "Szymczaka",
		dzielnica: "Wola",
	},
	{
		id: 3189,
		ulica: "Szynowa",
		dzielnica: "Wawer",
	},
	{
		id: 3190,
		ulica: "Szyprów",
		dzielnica: "Wawer",
	},
	{
		id: 3191,
		ulica: "Szyszaków",
		dzielnica: "Wawer",
	},
	{
		id: 3192,
		ulica: "Szyszkowa",
		dzielnica: "Włochy",
	},
	{
		id: 3193,
		ulica: "Ścieżka",
		dzielnica: "Wawer",
	},
	{
		id: 3194,
		ulica: "Ślepa",
		dzielnica: "Wawer",
	},
	{
		id: 3195,
		ulica: "Ślimaka",
		dzielnica: "Wawer",
	},
	{
		id: 3196,
		ulica: "Śliska",
		dzielnica: "Śródmieście",
	},
	{
		id: 3197,
		ulica: "Śląska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3198,
		ulica: "Śląskiej",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3199,
		ulica: "Śmiała",
		dzielnica: "Żoliborz",
	},
	{
		id: 3200,
		ulica: "Śmieszna",
		dzielnica: "Targówek",
	},
	{
		id: 3201,
		ulica: "Śmigielska",
		dzielnica: "Ursus",
	},
	{
		id: 3202,
		ulica: "Śniadeckich",
		dzielnica: "Śródmieście",
	},
	{
		id: 3203,
		ulica: "Śniardwy",
		dzielnica: "Mokotów",
	},
	{
		id: 3204,
		ulica: "Śniegockiej",
		dzielnica: "Śródmieście",
	},
	{
		id: 3205,
		ulica: "Śnieżna",
		dzielnica: "Wawer",
	},
	{
		id: 3206,
		ulica: "Śpiewna",
		dzielnica: "Wawer",
	},
	{
		id: 3207,
		ulica: "Śreniawitów",
		dzielnica: "Wawer",
	},
	{
		id: 3208,
		ulica: "Środkowa",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3209,
		ulica: "Śródborowska",
		dzielnica: "Wawer",
	},
	{
		id: 3210,
		ulica: "Śródziemnomorska",
		dzielnica: "Ursynów",
	},
	{
		id: 3211,
		ulica: "Światowa",
		dzielnica: "Wawer",
	},
	{
		id: 3212,
		ulica: "Światowida",
		dzielnica: "Białołęka",
	},
	{
		id: 3213,
		ulica: "Światowida (róg Ćmielowskiej)",
		dzielnica: "Białołęka",
	},
	{
		id: 3214,
		ulica: "Świderska",
		dzielnica: "Białołęka",
	},
	{
		id: 3215,
		ulica: "Świdnicka",
		dzielnica: "Wawer",
	},
	{
		id: 3216,
		ulica: "Świebodzińska",
		dzielnica: "Wawer",
	},
	{
		id: 3217,
		ulica: "Świecka",
		dzielnica: "Wawer",
	},
	{
		id: 3218,
		ulica: "Świeradowska",
		dzielnica: "Mokotów",
	},
	{
		id: 3219,
		ulica: "Świerkowa",
		dzielnica: "Wawer",
	},
	{
		id: 3220,
		ulica: "Świerszcza",
		dzielnica: "Włochy",
	},
	{
		id: 3221,
		ulica: "Świetlana",
		dzielnica: "Wawer",
	},
	{
		id: 3222,
		ulica: "Świetlicka",
		dzielnica: "Wawer",
	},
	{
		id: 3223,
		ulica: "Świetlików",
		dzielnica: "Wawer",
	},
	{
		id: 3224,
		ulica: "Świetlista",
		dzielnica: "Wawer",
	},
	{
		id: 3225,
		ulica: "Święciańska",
		dzielnica: "Targówek",
	},
	{
		id: 3226,
		ulica: "Świętochowskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3227,
		ulica: "Świętojańska",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 3228,
		ulica: "Świętojerska",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 3229,
		ulica: "Świętokrzyska",
		dzielnica: "Śródmieście",
	},
	{
		id: 3230,
		ulica: "Świętosławska",
		dzielnica: "Wawer",
	},
	{
		id: 3231,
		ulica: "Świętosławskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3232,
		ulica: "Taborowa",
		dzielnica: "Lotnisko Shopina",
	},
	{
		id: 3233,
		ulica: "Tadżycka",
		dzielnica: "Wawer",
	},
	{
		id: 3234,
		ulica: "Tagore'a",
		dzielnica: "Mokotów",
	},
	{
		id: 3235,
		ulica: "Tamka",
		dzielnica: "Śródmieście",
	},
	{
		id: 3236,
		ulica: "Taneczna",
		dzielnica: "Ursynów",
	},
	{
		id: 3237,
		ulica: "Tapetowa",
		dzielnica: "Wawer",
	},
	{
		id: 3238,
		ulica: "Tapicerska",
		dzielnica: "Wawer",
	},
	{
		id: 3239,
		ulica: "Tarchomińska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3240,
		ulica: "Tarczyńska",
		dzielnica: "Ochota",
	},
	{
		id: 3241,
		ulica: "Targowa",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3242,
		ulica: "Tarnobrzeska",
		dzielnica: "Wawer",
	},
	{
		id: 3243,
		ulica: "Tarnogórska",
		dzielnica: "Wawer",
	},
	{
		id: 3244,
		ulica: "Tarnowiecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3245,
		ulica: "Tatarkiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 3246,
		ulica: "Tatarska",
		dzielnica: "Wola",
	},
	{
		id: 3247,
		ulica: "Tatrzańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3248,
		ulica: "Tawerny",
		dzielnica: "Wawer",
	},
	{
		id: 3249,
		ulica: "Tawułkowa",
		dzielnica: "Wawer",
	},
	{
		id: 3250,
		ulica: "Tańskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3251,
		ulica: "Taśmowa",
		dzielnica: "Mokotów",
	},
	{
		id: 3252,
		ulica: "Tczewska",
		dzielnica: "Wawer",
	},
	{
		id: 3253,
		ulica: "pl. Teatralny",
		dzielnica: "Śródmieście",
	},
	{
		id: 3254,
		ulica: "Techniczna",
		dzielnica: "Wawer",
	},
	{
		id: 3255,
		ulica: "Techników",
		dzielnica: "Wawer",
	},
	{
		id: 3256,
		ulica: "Telakowskiej",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 3257,
		ulica: "Telefoniczna",
		dzielnica: "Ochota",
	},
	{
		id: 3258,
		ulica: "Telekiego",
		dzielnica: "Ochota",
	},
	{
		id: 3259,
		ulica: "Telewizyjna",
		dzielnica: "Ochota",
	},
	{
		id: 3260,
		ulica: "Teligi",
		dzielnica: "Ochota",
	},
	{
		id: 3261,
		ulica: "Telimeny",
		dzielnica: "Ochota",
	},
	{
		id: 3262,
		ulica: "Tenisowa",
		dzielnica: "Ochota",
	},
	{
		id: 3263,
		ulica: "Teresińska",
		dzielnica: "Ochota",
	},
	{
		id: 3264,
		ulica: "Terespolska",
		dzielnica: "Ochota",
	},
	{
		id: 3265,
		ulica: "św. Teresy",
		dzielnica: "Ochota",
	},
	{
		id: 3266,
		ulica: "Tetmajera",
		dzielnica: "Ochota",
	},
	{
		id: 3267,
		ulica: "Tęczowa",
		dzielnica: "Ochota",
	},
	{
		id: 3268,
		ulica: "Thommego",
		dzielnica: "Ochota",
	},
	{
		id: 3269,
		ulica: "Tkaczy",
		dzielnica: "Ochota",
	},
	{
		id: 3270,
		ulica: "Tłomackie",
		dzielnica: "Śródmieście Północne",
	},
	{
		id: 3271,
		ulica: "Tłuchowska",
		dzielnica: "Ochota",
	},
	{
		id: 3272,
		ulica: "Toeplitza",
		dzielnica: "Ochota",
	},
	{
		id: 3273,
		ulica: "Tokarza",
		dzielnica: "Ochota",
	},
	{
		id: 3274,
		ulica: "Tomaszowska",
		dzielnica: "Ochota",
	},
	{
		id: 3275,
		ulica: "Tomcia Palucha",
		dzielnica: "Ochota",
	},
	{
		id: 3276,
		ulica: "Tomnicka",
		dzielnica: "Ochota",
	},
	{
		id: 3277,
		ulica: "Topazowa",
		dzielnica: "Ochota",
	},
	{
		id: 3278,
		ulica: "Topiel",
		dzielnica: "Ochota",
	},
	{
		id: 3279,
		ulica: "Topograficzna",
		dzielnica: "Ochota",
	},
	{
		id: 3280,
		ulica: "Toporczyków",
		dzielnica: "Ochota",
	},
	{
		id: 3281,
		ulica: "Toporowska",
		dzielnica: "Ochota",
	},
	{
		id: 3282,
		ulica: "Torfowa",
		dzielnica: "Ochota",
	},
	{
		id: 3283,
		ulica: "Toruńska",
		dzielnica: "Ochota",
	},
	{
		id: 3284,
		ulica: "Towarowa",
		dzielnica: "Ochota",
	},
	{
		id: 3285,
		ulica: "Tołstoja",
		dzielnica: "Ochota",
	},
	{
		id: 3286,
		ulica: "Tołwińskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3287,
		ulica: "Traczy",
		dzielnica: "Ochota",
	},
	{
		id: 3288,
		ulica: "Trakt Lubelski",
		dzielnica: "Ochota",
	},
	{
		id: 3289,
		ulica: "Trakt Napoleoński",
		dzielnica: "Ochota",
	},
	{
		id: 3290,
		ulica: "Traktorzystki",
		dzielnica: "Ochota",
	},
	{
		id: 3291,
		ulica: "Traktorzystów",
		dzielnica: "Ochota",
	},
	{
		id: 3292,
		ulica: "Tramblanki",
		dzielnica: "Ochota",
	},
	{
		id: 3293,
		ulica: "Transportowców",
		dzielnica: "Ochota",
	},
	{
		id: 3294,
		ulica: "Traszki",
		dzielnica: "Ochota",
	},
	{
		id: 3295,
		ulica: "Traugutta",
		dzielnica: "Ochota",
	},
	{
		id: 3296,
		ulica: "Trawiasta",
		dzielnica: "Ochota",
	},
	{
		id: 3297,
		ulica: "Trembowelska",
		dzielnica: "Ochota",
	},
	{
		id: 3298,
		ulica: "Trenów",
		dzielnica: "Ochota",
	},
	{
		id: 3299,
		ulica: "Tristana",
		dzielnica: "Ochota",
	},
	{
		id: 3300,
		ulica: "Trocinowa",
		dzielnica: "Ochota",
	},
	{
		id: 3301,
		ulica: "Trocka",
		dzielnica: "Ochota",
	},
	{
		id: 3302,
		ulica: "Trojańska",
		dzielnica: "Ochota",
	},
	{
		id: 3303,
		ulica: "Trombity",
		dzielnica: "Ochota",
	},
	{
		id: 3304,
		ulica: "Truskawiecka",
		dzielnica: "Ochota",
	},
	{
		id: 3305,
		ulica: "Truskolaska",
		dzielnica: "Ochota",
	},
	{
		id: 3306,
		ulica: "Trylogii",
		dzielnica: "Ochota",
	},
	{
		id: 3307,
		ulica: "Trzcinowa",
		dzielnica: "Ochota",
	},
	{
		id: 3308,
		ulica: "Trzech Budrysów",
		dzielnica: "Ochota",
	},
	{
		id: 3309,
		ulica: "pl. Trzech Krzyży",
		dzielnica: "Śródmieście Południowe",
	},
	{
		id: 3310,
		ulica: "Trzykrotki",
		dzielnica: "Ochota",
	},
	{
		id: 3311,
		ulica: "Trószyńskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3312,
		ulica: "Trąby",
		dzielnica: "Ochota",
	},
	{
		id: 3313,
		ulica: "Trębacka",
		dzielnica: "Ochota",
	},
	{
		id: 3314,
		ulica: "Tuberozy",
		dzielnica: "Ochota",
	},
	{
		id: 3315,
		ulica: "Tuchlińska",
		dzielnica: "Ochota",
	},
	{
		id: 3316,
		ulica: "Tucholska",
		dzielnica: "Ochota",
	},
	{
		id: 3317,
		ulica: "Tukana",
		dzielnica: "Ochota",
	},
	{
		id: 3318,
		ulica: "Tumska",
		dzielnica: "Ochota",
	},
	{
		id: 3319,
		ulica: "Tunelowa",
		dzielnica: "Ochota",
	},
	{
		id: 3320,
		ulica: "Turbinowa",
		dzielnica: "Ochota",
	},
	{
		id: 3321,
		ulica: "Turecka",
		dzielnica: "Ochota",
	},
	{
		id: 3322,
		ulica: "Turkusowa",
		dzielnica: "Ochota",
	},
	{
		id: 3323,
		ulica: "Turmoncka",
		dzielnica: "Ochota",
	},
	{
		id: 3324,
		ulica: "Turystyczna",
		dzielnica: "Ochota",
	},
	{
		id: 3325,
		ulica: "Tuwima",
		dzielnica: "Ochota",
	},
	{
		id: 3326,
		ulica: "Tułowicka",
		dzielnica: "Ochota",
	},
	{
		id: 3327,
		ulica: "Tużycka",
		dzielnica: "Ochota",
	},
	{
		id: 3328,
		ulica: "Twarda",
		dzielnica: "Mirów - Wola",
	},
	{
		id: 3329,
		ulica: "Twardowska",
		dzielnica: "Ochota",
	},
	{
		id: 3330,
		ulica: "Twardowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3331,
		ulica: "Twórcza",
		dzielnica: "Ochota",
	},
	{
		id: 3332,
		ulica: "Tykocińska",
		dzielnica: "Ochota",
	},
	{
		id: 3333,
		ulica: "Tylżycka",
		dzielnica: "Ochota",
	},
	{
		id: 3334,
		ulica: "Tymiankowa",
		dzielnica: "Ochota",
	},
	{
		id: 3335,
		ulica: "Tymotki",
		dzielnica: "Ochota",
	},
	{
		id: 3336,
		ulica: "Tyniecka",
		dzielnica: "Ochota",
	},
	{
		id: 3337,
		ulica: "Tyrreńska",
		dzielnica: "Ochota",
	},
	{
		id: 3338,
		ulica: "al. Tysiąclecia",
		dzielnica: "Ochota",
	},
	{
		id: 3339,
		ulica: "Tyszkiewicza",
		dzielnica: "Ochota",
	},
	{
		id: 3340,
		ulica: "Tyszowiecka",
		dzielnica: "Ochota",
	},
	{
		id: 3341,
		ulica: "Tytoniowa",
		dzielnica: "Ochota",
	},
	{
		id: 3342,
		ulica: "Tyśmienicka",
		dzielnica: "Ochota",
	},
	{
		id: 3343,
		ulica: "Uczniowska",
		dzielnica: "Ochota",
	},
	{
		id: 3344,
		ulica: "Uhrocie",
		dzielnica: "Ochota",
	},
	{
		id: 3345,
		ulica: "Al. Ujazdowskie",
		dzielnica: "Ochota",
	},
	{
		id: 3346,
		ulica: "Ukośna",
		dzielnica: "Ochota",
	},
	{
		id: 3347,
		ulica: "Ulanowska",
		dzielnica: "Ochota",
	},
	{
		id: 3348,
		ulica: "Ulrychowska",
		dzielnica: "Ochota",
	},
	{
		id: 3349,
		ulica: "Ułanów Krechowieckich",
		dzielnica: "Ochota",
	},
	{
		id: 3350,
		ulica: "Ułańska",
		dzielnica: "Ochota",
	},
	{
		id: 3351,
		ulica: "Umińskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3352,
		ulica: "Umowna",
		dzielnica: "Ochota",
	},
	{
		id: 3353,
		ulica: "Uniejowska",
		dzielnica: "Ochota",
	},
	{
		id: 3354,
		ulica: "pl. Unii Lubelskiej",
		dzielnica: "Ochota",
	},
	{
		id: 3355,
		ulica: "Uniwersytecka",
		dzielnica: "Stara Ochota - Ochota",
	},
	{
		id: 3356,
		ulica: "Uprawna",
		dzielnica: "Ochota",
	},
	{
		id: 3357,
		ulica: "Uranowa",
		dzielnica: "Ochota",
	},
	{
		id: 3358,
		ulica: "Urbanistów",
		dzielnica: "Ochota",
	},
	{
		id: 3359,
		ulica: "Urle",
		dzielnica: "Ochota",
	},
	{
		id: 3360,
		ulica: "Urocza",
		dzielnica: "Ochota",
	},
	{
		id: 3361,
		ulica: "Uroczysko",
		dzielnica: "Ochota",
	},
	{
		id: 3362,
		ulica: "Urodzajna",
		dzielnica: "Ochota",
	},
	{
		id: 3363,
		ulica: "Ursynowska",
		dzielnica: "Ochota",
	},
	{
		id: 3364,
		ulica: "Pasaż Ursynowski",
		dzielnica: "Ochota",
	},
	{
		id: 3365,
		ulica: "Urszuli",
		dzielnica: "Ochota",
	},
	{
		id: 3366,
		ulica: "Urwisko",
		dzielnica: "Ochota",
	},
	{
		id: 3367,
		ulica: "Ustronna",
		dzielnica: "Ochota",
	},
	{
		id: 3368,
		ulica: "Ustrzycka",
		dzielnica: "Ochota",
	},
	{
		id: 3369,
		ulica: "Usypiskowa",
		dzielnica: "Ochota",
	},
	{
		id: 3370,
		ulica: "Uśmiech",
		dzielnica: "Ochota",
	},
	{
		id: 3371,
		ulica: "Utrata",
		dzielnica: "Ochota",
	},
	{
		id: 3372,
		ulica: "Uznamska",
		dzielnica: "Ochota",
	},
	{
		id: 3373,
		ulica: "Villardczyków",
		dzielnica: "Ochota",
	},
	{
		id: 3374,
		ulica: "Vogla",
		dzielnica: "Ochota",
	},
	{
		id: 3375,
		ulica: "Wadowicka",
		dzielnica: "Ochota",
	},
	{
		id: 3376,
		ulica: "Waflowa",
		dzielnica: "Ochota",
	},
	{
		id: 3377,
		ulica: "Wagonowa",
		dzielnica: "Ochota",
	},
	{
		id: 3378,
		ulica: "Wagów",
		dzielnica: "Ochota",
	},
	{
		id: 3379,
		ulica: "Wakacyjna",
		dzielnica: "Ochota",
	},
	{
		id: 3380,
		ulica: "Walcownicza",
		dzielnica: "Ochota",
	},
	{
		id: 3381,
		ulica: "Walczyka",
		dzielnica: "Ochota",
	},
	{
		id: 3382,
		ulica: "Walecznych",
		dzielnica: "Ochota",
	},
	{
		id: 3383,
		ulica: "Walewska",
		dzielnica: "Ochota",
	},
	{
		id: 3384,
		ulica: "Waliców",
		dzielnica: "Ochota",
	},
	{
		id: 3385,
		ulica: "Waligóry",
		dzielnica: "Ochota",
	},
	{
		id: 3386,
		ulica: "Wandy",
		dzielnica: "Ochota",
	},
	{
		id: 3387,
		ulica: "Wantule",
		dzielnica: "Ochota",
	},
	{
		id: 3388,
		ulica: "Wapienna",
		dzielnica: "Ochota",
	},
	{
		id: 3389,
		ulica: "Wapowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3390,
		ulica: "Warchałowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3391,
		ulica: "Warecka",
		dzielnica: "Ochota",
	},
	{
		id: 3392,
		ulica: "Warneńska",
		dzielnica: "Ochota",
	},
	{
		id: 3393,
		ulica: "Warowna",
		dzielnica: "Ochota",
	},
	{
		id: 3394,
		ulica: "Warsa",
		dzielnica: "Ochota",
	},
	{
		id: 3395,
		ulica: "Warszawska",
		dzielnica: "Ochota",
	},
	{
		id: 3396,
		ulica: "Warszewickiego",
		dzielnica: "Ochota",
	},
	{
		id: 3397,
		ulica: "Warsztatowa",
		dzielnica: "Ochota",
	},
	{
		id: 3398,
		ulica: "Wartka",
		dzielnica: "Ochota",
	},
	{
		id: 3399,
		ulica: "Waryńskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3400,
		ulica: "Warzelnicza",
		dzielnica: "Ochota",
	},
	{
		id: 3401,
		ulica: "Wasilkowska",
		dzielnica: "Ochota",
	},
	{
		id: 3402,
		ulica: "Wasilkowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3403,
		ulica: "Wasiutyńskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3404,
		ulica: "Waszkowskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3405,
		ulica: "Waszyngtona",
		dzielnica: "Ochota",
	},
	{
		id: 3406,
		ulica: "Wawelberga",
		dzielnica: "Ochota",
	},
	{
		id: 3407,
		ulica: "Wawelska",
		dzielnica: "Ochota",
	},
	{
		id: 3408,
		ulica: "Wawerska",
		dzielnica: "Ochota",
	},
	{
		id: 3409,
		ulica: "Wawrzynowa",
		dzielnica: "Ochota",
	},
	{
		id: 3410,
		ulica: "Wawrzyszewska",
		dzielnica: "Ochota",
	},
	{
		id: 3411,
		ulica: "Wazów",
		dzielnica: "Ochota",
	},
	{
		id: 3412,
		ulica: "Wał Miedzeszyński",
		dzielnica: "Ochota",
	},
	{
		id: 3413,
		ulica: "Wał Zawadowski",
		dzielnica: "Ochota",
	},
	{
		id: 3414,
		ulica: "Wałbrzyska",
		dzielnica: "Ochota",
	},
	{
		id: 3415,
		ulica: "Wałowa",
		dzielnica: "Ochota",
	},
	{
		id: 3416,
		ulica: "Wałowicka",
		dzielnica: "Ochota",
	},
	{
		id: 3417,
		ulica: "Wałuszewska",
		dzielnica: "Ochota",
	},
	{
		id: 3418,
		ulica: "Wańkowicza",
		dzielnica: "Ochota",
	},
	{
		id: 3419,
		ulica: "Wąbrzeska",
		dzielnica: "Ochota",
	},
	{
		id: 3420,
		ulica: "Wąchocka",
		dzielnica: "Ochota",
	},
	{
		id: 3421,
		ulica: "Wągrowiecka",
		dzielnica: "Ochota",
	},
	{
		id: 3422,
		ulica: "Wąska",
		dzielnica: "Ochota",
	},
	{
		id: 3423,
		ulica: "Wąski Dunaj",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 3424,
		ulica: "Wąwolnicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3425,
		ulica: "Wąwozowa",
		dzielnica: "Ursynów",
	},
	{
		id: 3426,
		ulica: "Wczele",
		dzielnica: "Białołęka",
	},
	{
		id: 3427,
		ulica: "Wejherowska",
		dzielnica: "Bemowo",
	},
	{
		id: 3428,
		ulica: "Wejnerta",
		dzielnica: "Mokotów",
	},
	{
		id: 3429,
		ulica: "Wenecka",
		dzielnica: "Wola",
	},
	{
		id: 3430,
		ulica: "Wenedów",
		dzielnica: "Śródmieście",
	},
	{
		id: 3431,
		ulica: "Werbeny",
		dzielnica: "Wawer",
	},
	{
		id: 3432,
		ulica: "Wergiliusza",
		dzielnica: "Włochy",
	},
	{
		id: 3433,
		ulica: "Wernyhory",
		dzielnica: "Ursynów",
	},
	{
		id: 3434,
		ulica: "Wersalska",
		dzielnica: "Wilanów",
	},
	{
		id: 3435,
		ulica: "Weselna",
		dzielnica: "Targówek",
	},
	{
		id: 3436,
		ulica: "Wesoła",
		dzielnica: "Wesoła",
	},
	{
		id: 3437,
		ulica: "Wesołowskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3438,
		ulica: "Weteranów",
		dzielnica: "Rembertów",
	},
	{
		id: 3439,
		ulica: "Weterynaryjna",
		dzielnica: "Wawer",
	},
	{
		id: 3440,
		ulica: "Wełniana",
		dzielnica: "Białołęka",
	},
	{
		id: 3441,
		ulica: "Wędkarska",
		dzielnica: "Wawer",
	},
	{
		id: 3442,
		ulica: "Węgierska",
		dzielnica: "Mokotów",
	},
	{
		id: 3443,
		ulica: "Węglarska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3444,
		ulica: "Węgorzewska",
		dzielnica: "Bielany",
	},
	{
		id: 3445,
		ulica: "Węgrowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3446,
		ulica: "Węgrzyna",
		dzielnica: "Włochy",
	},
	{
		id: 3447,
		ulica: "Wiartel",
		dzielnica: "Białołęka",
	},
	{
		id: 3448,
		ulica: "Wiarusów",
		dzielnica: "Wawer",
	},
	{
		id: 3449,
		ulica: "Wiatraczna",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3450,
		ulica: "Wichrowa",
		dzielnica: "Wawer",
	},
	{
		id: 3451,
		ulica: "Widawska",
		dzielnica: "Bemowo",
	},
	{
		id: 3452,
		ulica: "Widna",
		dzielnica: "Mokotów",
	},
	{
		id: 3453,
		ulica: "Widoczna",
		dzielnica: "Wawer",
	},
	{
		id: 3454,
		ulica: "Widok",
		dzielnica: "Śródmieście",
	},
	{
		id: 3455,
		ulica: "Widokowa",
		dzielnica: "Wawer",
	},
	{
		id: 3456,
		ulica: "Wiechy",
		dzielnica: "Białołęka",
	},
	{
		id: 3457,
		ulica: "Wieczorkiewicza",
		dzielnica: "Włochy",
	},
	{
		id: 3458,
		ulica: "Wieczorowa",
		dzielnica: "Wawer",
	},
	{
		id: 3459,
		ulica: "Wiejska",
		dzielnica: "Śródmieście",
	},
	{
		id: 3460,
		ulica: "Wielicka",
		dzielnica: "Mokotów",
	},
	{
		id: 3461,
		ulica: "Wieliszewska",
		dzielnica: "Białołęka",
	},
	{
		id: 3462,
		ulica: "Wielkiego Dębu",
		dzielnica: "Wawer",
	},
	{
		id: 3463,
		ulica: "Wielostronna",
		dzielnica: "Wawer",
	},
	{
		id: 3464,
		ulica: "Wielowiejska",
		dzielnica: "Wawer",
	},
	{
		id: 3465,
		ulica: "Wieluńska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3466,
		ulica: "Wieniawskiego",
		dzielnica: "Bielany",
	},
	{
		id: 3467,
		ulica: "Wieniecka",
		dzielnica: "Białołęka",
	},
	{
		id: 3468,
		ulica: "Wierchów",
		dzielnica: "Wawer",
	},
	{
		id: 3469,
		ulica: "Wierna",
		dzielnica: "Targówek",
	},
	{
		id: 3470,
		ulica: "Wiertnicza",
		dzielnica: "Wilanów",
	},
	{
		id: 3471,
		ulica: "Wierzbowa",
		dzielnica: "Śródmieście",
	},
	{
		id: 3472,
		ulica: "Wierzynka",
		dzielnica: "Białołęka",
	},
	{
		id: 3473,
		ulica: "Wierzyńskiego",
		dzielnica: "Włochy",
	},
	{
		id: 3474,
		ulica: "Wiesiołka",
		dzielnica: "Wawer",
	},
	{
		id: 3475,
		ulica: "Wieśniacza",
		dzielnica: "Wawer",
	},
	{
		id: 3476,
		ulica: "Wieżowa",
		dzielnica: "Wawer",
	},
	{
		id: 3477,
		ulica: "Wikingów",
		dzielnica: "Białołęka",
	},
	{
		id: 3478,
		ulica: "Wiklinowa",
		dzielnica: "Wawer",
	},
	{
		id: 3479,
		ulica: "Wiktorii Wiedeńskiej",
		dzielnica: "Wilanów",
	},
	{
		id: 3480,
		ulica: "Wiktorska",
		dzielnica: "Mokotów",
	},
	{
		id: 3481,
		ulica: "Wilanowska",
		dzielnica: "Mokotów",
	},
	{
		id: 3482,
		ulica: "Wilcza",
		dzielnica: "Śródmieście",
	},
	{
		id: 3483,
		ulica: "Wilczy Dół",
		dzielnica: "Wilanów",
	},
	{
		id: 3484,
		ulica: "Wilczycka",
		dzielnica: "Wawer",
	},
	{
		id: 3485,
		ulica: "Wileńska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3486,
		ulica: "Wilgi",
		dzielnica: "Wawer",
	},
	{
		id: 3487,
		ulica: "Wilkowiecka",
		dzielnica: "Białołęka",
	},
	{
		id: 3488,
		ulica: "Wilków Morskich",
		dzielnica: "Białołęka",
	},
	{
		id: 3489,
		ulica: "Willowa",
		dzielnica: "Stary Mokotów - Mokotów",
	},
	{
		id: 3490,
		ulica: "pl. Wilsona",
		dzielnica: "Żoliborz",
	},
	{
		id: 3491,
		ulica: "św. Wincentego",
		dzielnica: "Targówek",
	},
	{
		id: 3492,
		ulica: "Winnicka",
		dzielnica: "Wawer",
	},
	{
		id: 3493,
		ulica: "Winogronowa",
		dzielnica: "Wawer",
	},
	{
		id: 3494,
		ulica: "Wiolinowa",
		dzielnica: "Ursynów",
	},
	{
		id: 3495,
		ulica: "Wiosenna",
		dzielnica: "Wawer",
	},
	{
		id: 3496,
		ulica: "Wiosny Ludów",
		dzielnica: "Wawer",
	},
	{
		id: 3497,
		ulica: "Wioślarska",
		dzielnica: "Śródmieście",
	},
	{
		id: 3498,
		ulica: "Wirażowa",
		dzielnica: "Włochy",
	},
	{
		id: 3499,
		ulica: "Wisełki",
		dzielnica: "Białołęka",
	},
	{
		id: 3500,
		ulica: "Wisienki",
		dzielnica: "Wawer",
	},
	{
		id: 3501,
		ulica: "Wita Stwosza",
		dzielnica: "Mokotów",
	},
	{
		id: 3502,
		ulica: "Witebska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3503,
		ulica: "Witkiewicza",
		dzielnica: "Bielany",
	},
	{
		id: 3504,
		ulica: "Witolińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3505,
		ulica: "al. Witosa",
		dzielnica: "Mokotów",
	},
	{
		id: 3506,
		ulica: "Witoszyńskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3507,
		ulica: "Wittiga",
		dzielnica: "Bielany",
	},
	{
		id: 3508,
		ulica: "Witwickiego",
		dzielnica: "Włochy",
	},
	{
		id: 3509,
		ulica: "Wiązana",
		dzielnica: "Wawer",
	},
	{
		id: 3510,
		ulica: "Wiązowska",
		dzielnica: "Wawer",
	},
	{
		id: 3511,
		ulica: "Wiślana",
		dzielnica: "Śródmieście",
	},
	{
		id: 3512,
		ulica: "Wiślanego Nurtu",
		dzielnica: "Wawer",
	},
	{
		id: 3513,
		ulica: "Wiślicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3514,
		ulica: "Wiśniowa",
		dzielnica: "Mokotów",
	},
	{
		id: 3515,
		ulica: "Władysława Hermana",
		dzielnica: "Białołęka",
	},
	{
		id: 3516,
		ulica: "Władysława IV",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3517,
		ulica: "Władysława Jagiełły",
		dzielnica: "Białołęka",
	},
	{
		id: 3518,
		ulica: "Władysława Laskonogiego",
		dzielnica: "Białołęka",
	},
	{
		id: 3519,
		ulica: "Władysława Łokietka",
		dzielnica: "Białołęka",
	},
	{
		id: 3520,
		ulica: "Włoczewskich",
		dzielnica: "Wawer",
	},
	{
		id: 3521,
		ulica: "Włodarzewska",
		dzielnica: "Ochota",
	},
	{
		id: 3522,
		ulica: "Włodzicka",
		dzielnica: "Wawer",
	},
	{
		id: 3523,
		ulica: "Włoska",
		dzielnica: "Włochy",
	},
	{
		id: 3524,
		ulica: "Włościańska",
		dzielnica: "Żoliborz",
	},
	{
		id: 3525,
		ulica: "Włókiennicza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3526,
		ulica: "Wodniaków",
		dzielnica: "Wawer",
	},
	{
		id: 3527,
		ulica: "Wodyńska",
		dzielnica: "Wawer",
	},
	{
		id: 3528,
		ulica: "Wodzirejów",
		dzielnica: "Białołęka",
	},
	{
		id: 3529,
		ulica: "Wojciechowskiego",
		dzielnica: "Ursus",
	},
	{
		id: 3530,
		ulica: "Wojdyńska",
		dzielnica: "Wawer",
	},
	{
		id: 3531,
		ulica: "Wojnicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3532,
		ulica: "al. Wojska Polskiego",
		dzielnica: "Żoliborz",
	},
	{
		id: 3533,
		ulica: "Wojskowa",
		dzielnica: "Wawer",
	},
	{
		id: 3534,
		ulica: "Wokalna",
		dzielnica: "Ursynów",
	},
	{
		id: 3535,
		ulica: "Wolbromska",
		dzielnica: "Białołęka",
	},
	{
		id: 3536,
		ulica: "Wolfkego",
		dzielnica: "Bemowo",
	},
	{
		id: 3537,
		ulica: "Wolińska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3538,
		ulica: "Wolna",
		dzielnica: "Wawer",
	},
	{
		id: 3539,
		ulica: "Wolnej Wszechnicy",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3540,
		ulica: "Wolności",
		dzielnica: "Wola",
	},
	{
		id: 3541,
		ulica: "Wolność",
		dzielnica: "Wawer",
	},
	{
		id: 3542,
		ulica: "Wolska",
		dzielnica: "Wola",
	},
	{
		id: 3543,
		ulica: "Wolskiego",
		dzielnica: "Wola",
	},
	{
		id: 3544,
		ulica: "Wolumen",
		dzielnica: "Bielany",
	},
	{
		id: 3545,
		ulica: "Wolęcińska",
		dzielnica: "Wawer",
	},
	{
		id: 3546,
		ulica: "Worcella",
		dzielnica: "Wawer",
	},
	{
		id: 3547,
		ulica: "Woronicza",
		dzielnica: "Mokotów",
	},
	{
		id: 3548,
		ulica: "Woziwody",
		dzielnica: "Wawer",
	},
	{
		id: 3549,
		ulica: "Wołodyjowskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 3550,
		ulica: "Wołomińska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3551,
		ulica: "Wołoska",
		dzielnica: "Mokotów",
	},
	{
		id: 3552,
		ulica: "Wójcicka",
		dzielnica: "Wawer",
	},
	{
		id: 3553,
		ulica: "Wójcickiego",
		dzielnica: "Wawer",
	},
	{
		id: 3554,
		ulica: "Wójtowska",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 3555,
		ulica: "Wólczyńska",
		dzielnica: "Bielany",
	},
	{
		id: 3556,
		ulica: "Wóycickiego",
		dzielnica: "Bielany",
	},
	{
		id: 3557,
		ulica: "Wrocławska",
		dzielnica: "Bemowo",
	},
	{
		id: 3558,
		ulica: "Wronia",
		dzielnica: "Mirów - Wola",
	},
	{
		id: 3559,
		ulica: "Wrotkowa",
		dzielnica: "Wawer",
	},
	{
		id: 3560,
		ulica: "Wrzeciono",
		dzielnica: "Bielany",
	},
	{
		id: 3561,
		ulica: "Wrzesińska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3562,
		ulica: "Wrzosowa",
		dzielnica: "Wawer",
	},
	{
		id: 3563,
		ulica: "Wrzosowisko",
		dzielnica: "Wawer",
	},
	{
		id: 3564,
		ulica: "Wróbla",
		dzielnica: "Wawer",
	},
	{
		id: 3565,
		ulica: "Wróblewskiego",
		dzielnica: "Wola",
	},
	{
		id: 3566,
		ulica: "Wschodnia",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3567,
		ulica: "Wspomnień",
		dzielnica: "Wawer",
	},
	{
		id: 3568,
		ulica: "Wspólna",
		dzielnica: "Śródmieście",
	},
	{
		id: 3569,
		ulica: "Wspólna Droga",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3570,
		ulica: "Współczesna",
		dzielnica: "Wawer",
	},
	{
		id: 3571,
		ulica: "Wszemirowska",
		dzielnica: "Wawer",
	},
	{
		id: 3572,
		ulica: "Wybickiego",
		dzielnica: "Bielany",
	},
	{
		id: 3573,
		ulica: "Wybieg",
		dzielnica: "Wawer",
	},
	{
		id: 3574,
		ulica: "Wyborna",
		dzielnica: "Wawer",
	},
	{
		id: 3575,
		ulica: "Wybrańska",
		dzielnica: "Targówek",
	},
	{
		id: 3576,
		ulica: "Wybrzeże Gdańskie",
		dzielnica: "Śródmieście",
	},
	{
		id: 3577,
		ulica: "Wybrzeże Gdyńskie",
		dzielnica: "Żoliborz",
	},
	{
		id: 3578,
		ulica: "Wybrzeże Helskie",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3579,
		ulica: "Wybrzeże Kościuszkowskie",
		dzielnica: "Śródmieście",
	},
	{
		id: 3580,
		ulica: "Wybrzeże Szczecińskie",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3581,
		ulica: "Wyczółki",
		dzielnica: "Ursynów",
	},
	{
		id: 3582,
		ulica: "Wyczółkowskiego",
		dzielnica: "Bielany",
	},
	{
		id: 3583,
		ulica: "Wydawnicza",
		dzielnica: "Wawer",
	},
	{
		id: 3584,
		ulica: "Wydmińska",
		dzielnica: "Białołęka",
	},
	{
		id: 3585,
		ulica: "Wyganowska",
		dzielnica: "Wawer",
	},
	{
		id: 3586,
		ulica: "Wyględowska",
		dzielnica: "Mokotów",
	},
	{
		id: 3587,
		ulica: "Wygoda",
		dzielnica: "Wawer",
	},
	{
		id: 3588,
		ulica: "Wygodna",
		dzielnica: "Wawer",
	},
	{
		id: 3589,
		ulica: "Wyki",
		dzielnica: "Bemowo",
	},
	{
		id: 3590,
		ulica: "Wykrot",
		dzielnica: "Wawer",
	},
	{
		id: 3591,
		ulica: "Wylot",
		dzielnica: "Wawer",
	},
	{
		id: 3592,
		ulica: "Wylotowa",
		dzielnica: "Wawer",
	},
	{
		id: 3593,
		ulica: "Wynalazek",
		dzielnica: "Mokotów",
	},
	{
		id: 3594,
		ulica: "Wyprawa",
		dzielnica: "Wawer",
	},
	{
		id: 3595,
		ulica: "Wyrzyska",
		dzielnica: "Białołęka",
	},
	{
		id: 3596,
		ulica: "Wysockiego",
		dzielnica: "Targówek",
	},
	{
		id: 3597,
		ulica: "Wysoczyńska",
		dzielnica: "Białołęka",
	},
	{
		id: 3598,
		ulica: "Wysokomazowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 3599,
		ulica: "Wyspiarska",
		dzielnica: "Wawer",
	},
	{
		id: 3600,
		ulica: "Wyspiańskiego",
		dzielnica: "Bielany",
	},
	{
		id: 3601,
		ulica: "Wyspowa",
		dzielnica: "Wawer",
	},
	{
		id: 3602,
		ulica: "Wyszatycka",
		dzielnica: "Wawer",
	},
	{
		id: 3603,
		ulica: "Wyszogrodzka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3604,
		ulica: "Skwer Wyszyńskiego",
		dzielnica: "Śródmieście",
	},
	{
		id: 3605,
		ulica: "al. Wyzwolenia",
		dzielnica: "Śródmieście",
	},
	{
		id: 3606,
		ulica: "al. Wyścigowa",
		dzielnica: "Mokotów",
	},
	{
		id: 3607,
		ulica: "Wzorcowa",
		dzielnica: "Wawer",
	},
	{
		id: 3608,
		ulica: "Za Łąkami",
		dzielnica: "Wawer",
	},
	{
		id: 3609,
		ulica: "Zabawna",
		dzielnica: "Wawer",
	},
	{
		id: 3610,
		ulica: "Zabielska",
		dzielnica: "Wawer",
	},
	{
		id: 3611,
		ulica: "Zaboreczne",
		dzielnica: "Wawer",
	},
	{
		id: 3612,
		ulica: "Zaborowska",
		dzielnica: "Bemowo",
	},
	{
		id: 3613,
		ulica: "Zabraniecka",
		dzielnica: "Targówek",
	},
	{
		id: 3614,
		ulica: "Zabrzańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3615,
		ulica: "Zabłocińska",
		dzielnica: "Bielany",
	},
	{
		id: 3616,
		ulica: "Zabłocka",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3617,
		ulica: "Zachariasza",
		dzielnica: "Targówek",
	},
	{
		id: 3618,
		ulica: "Zachodzącego Słońca",
		dzielnica: "Wawer",
	},
	{
		id: 3619,
		ulica: "Zaciszańska",
		dzielnica: "Targówek",
	},
	{
		id: 3620,
		ulica: "Zaciszna",
		dzielnica: "Wawer",
	},
	{
		id: 3621,
		ulica: "Zaczarowanej Dorożki",
		dzielnica: "Bielany",
	},
	{
		id: 3622,
		ulica: "Zadumana",
		dzielnica: "Włochy",
	},
	{
		id: 3623,
		ulica: "Zagadki",
		dzielnica: "Wawer",
	},
	{
		id: 3624,
		ulica: "Zagaje",
		dzielnica: "Wawer",
	},
	{
		id: 3625,
		ulica: "Zagajnikowa",
		dzielnica: "Wawer",
	},
	{
		id: 3626,
		ulica: "Zagięta",
		dzielnica: "Wawer",
	},
	{
		id: 3627,
		ulica: "Zagrodowa",
		dzielnica: "Wawer",
	},
	{
		id: 3628,
		ulica: "Zagójska",
		dzielnica: "Wawer",
	},
	{
		id: 3629,
		ulica: "Zagórna",
		dzielnica: "Śródmieście",
	},
	{
		id: 3630,
		ulica: "Zagórzańska",
		dzielnica: "Wawer",
	},
	{
		id: 3631,
		ulica: "Zagłoby",
		dzielnica: "Białołęka",
	},
	{
		id: 3632,
		ulica: "Zajączka",
		dzielnica: "Żoliborz",
	},
	{
		id: 3633,
		ulica: "Zajączkowska",
		dzielnica: "Mokotów",
	},
	{
		id: 3634,
		ulica: "Zajęcza",
		dzielnica: "Śródmieście",
	},
	{
		id: 3635,
		ulica: "Zakamarek",
		dzielnica: "Wawer",
	},
	{
		id: 3636,
		ulica: "Zakole",
		dzielnica: "Wawer",
	},
	{
		id: 3637,
		ulica: "Zakopiańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3638,
		ulica: "Zakroczymska",
		dzielnica: "Nowe Miasto - Śródmieście",
	},
	{
		id: 3639,
		ulica: "Zakrzewska",
		dzielnica: "Mokotów",
	},
	{
		id: 3640,
		ulica: "Zakręt",
		dzielnica: "Wawer",
	},
	{
		id: 3641,
		ulica: "Zakątek",
		dzielnica: "Wawer",
	},
	{
		id: 3642,
		ulica: "Zakładowa",
		dzielnica: "Wawer",
	},
	{
		id: 3643,
		ulica: "Zalew",
		dzielnica: "Wawer",
	},
	{
		id: 3644,
		ulica: "Zalipie",
		dzielnica: "Wawer",
	},
	{
		id: 3645,
		ulica: "Zaliwskiego",
		dzielnica: "Ochota",
	},
	{
		id: 3646,
		ulica: "Zambrowska",
		dzielnica: "Białołęka",
	},
	{
		id: 3647,
		ulica: "Zamenhofa",
		dzielnica: "Muranów - Śródmieście",
	},
	{
		id: 3648,
		ulica: "Zamiany",
		dzielnica: "Ursynów",
	},
	{
		id: 3649,
		ulica: "Zamiejska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3650,
		ulica: "Zamieniecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3651,
		ulica: "pl. Zamkowy",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 3652,
		ulica: "Zamoyskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3653,
		ulica: "Zana",
		dzielnica: "Wola",
	},
	{
		id: 3654,
		ulica: "Zaniemyska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3655,
		ulica: "Zaokopowa",
		dzielnica: "Wola",
	},
	{
		id: 3656,
		ulica: "Zaolziańska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3657,
		ulica: "Zaorskiego",
		dzielnica: "Wola",
	},
	{
		id: 3658,
		ulica: "Zapałczana",
		dzielnica: "Wawer",
	},
	{
		id: 3659,
		ulica: "Zapiecek",
		dzielnica: "Stare Miasto - Śródmieście",
	},
	{
		id: 3660,
		ulica: "Zapolskiej",
		dzielnica: "Stara Ochota - Ochota",
	},
	{
		id: 3661,
		ulica: "Zapomniana",
		dzielnica: "Wawer",
	},
	{
		id: 3662,
		ulica: "Zapustna",
		dzielnica: "Ursus",
	},
	{
		id: 3663,
		ulica: "Zapłocie",
		dzielnica: "Wawer",
	},
	{
		id: 3664,
		ulica: "Zarankiewicza",
		dzielnica: "Wawer",
	},
	{
		id: 3665,
		ulica: "Zarośla",
		dzielnica: "Wawer",
	},
	{
		id: 3666,
		ulica: "Zaruby",
		dzielnica: "Ursynów",
	},
	{
		id: 3667,
		ulica: "Zaruskiego",
		dzielnica: "Mokotów",
	},
	{
		id: 3668,
		ulica: "Zarzecze",
		dzielnica: "Bielany",
	},
	{
		id: 3669,
		ulica: "Zasadowa",
		dzielnica: "Wawer",
	},
	{
		id: 3670,
		ulica: "Zasobna",
		dzielnica: "Wawer",
	},
	{
		id: 3671,
		ulica: "Zastowska",
		dzielnica: "Wawer",
	},
	{
		id: 3672,
		ulica: "Zastruże",
		dzielnica: "Wawer",
	},
	{
		id: 3673,
		ulica: "Zastępowa",
		dzielnica: "Wawer",
	},
	{
		id: 3674,
		ulica: "Zatorze",
		dzielnica: "Wawer",
	},
	{
		id: 3675,
		ulica: "Zaułek",
		dzielnica: "Wawer",
	},
	{
		id: 3676,
		ulica: "Zawadowskiego",
		dzielnica: "Wilanów",
	},
	{
		id: 3677,
		ulica: "Zawiszaków",
		dzielnica: "Wawer",
	},
	{
		id: 3678,
		ulica: "Zawiszy",
		dzielnica: "Wola",
	},
	{
		id: 3679,
		ulica: "Zawiślańska",
		dzielnica: "Wawer",
	},
	{
		id: 3680,
		ulica: "Zawodowa",
		dzielnica: "Wawer",
	},
	{
		id: 3681,
		ulica: "Zawodzie",
		dzielnica: "Wawer",
	},
	{
		id: 3682,
		ulica: "Zawojska",
		dzielnica: "Wawer",
	},
	{
		id: 3683,
		ulica: "Zawrat",
		dzielnica: "Wawer",
	},
	{
		id: 3684,
		ulica: "Załuskich",
		dzielnica: "Bielany",
	},
	{
		id: 3685,
		ulica: "Załęże",
		dzielnica: "Wawer",
	},
	{
		id: 3686,
		ulica: "Zaściankowa",
		dzielnica: "Wawer",
	},
	{
		id: 3687,
		ulica: "Ząbkowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3688,
		ulica: "Zbaraska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3689,
		ulica: "pl. Zbawiciela",
		dzielnica: "Śródmieście",
	},
	{
		id: 3690,
		ulica: "Zbiorowa",
		dzielnica: "Wawer",
	},
	{
		id: 3691,
		ulica: "Zbocze",
		dzielnica: "Wawer",
	},
	{
		id: 3692,
		ulica: "Zbożowa",
		dzielnica: "Wawer",
	},
	{
		id: 3693,
		ulica: "Zbyszka z Bogdańca",
		dzielnica: "Białołęka",
	},
	{
		id: 3694,
		ulica: "Zbójnogórska",
		dzielnica: "Wawer",
	},
	{
		id: 3695,
		ulica: "Zbąszyńska",
		dzielnica: "Bemowo",
	},
	{
		id: 3696,
		ulica: "Zdobnicza",
		dzielnica: "Wawer",
	},
	{
		id: 3697,
		ulica: "Zdrojowa",
		dzielnica: "Wawer",
	},
	{
		id: 3698,
		ulica: "Zdziarska",
		dzielnica: "Białołęka",
	},
	{
		id: 3699,
		ulica: "Zecerska",
		dzielnica: "Wawer",
	},
	{
		id: 3700,
		ulica: "Zegadłowicza",
		dzielnica: "Wawer",
	},
	{
		id: 3701,
		ulica: "Zegarynki",
		dzielnica: "Wawer",
	},
	{
		id: 3702,
		ulica: "Zegrzyńska",
		dzielnica: "Białołęka",
	},
	{
		id: 3703,
		ulica: "Zelwerowicza",
		dzielnica: "Bielany",
	},
	{
		id: 3704,
		ulica: "Zerzeńska",
		dzielnica: "Wawer",
	},
	{
		id: 3705,
		ulica: "Zespołowa",
		dzielnica: "Wawer",
	},
	{
		id: 3706,
		ulica: "Zesłańców Polskich",
		dzielnica: "Wola",
	},
	{
		id: 3707,
		ulica: "Zeusa",
		dzielnica: "Białołęka",
	},
	{
		id: 3708,
		ulica: "Zgierska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3709,
		ulica: "Zgoda",
		dzielnica: "Śródmieście",
	},
	{
		id: 3710,
		ulica: 'Zgrupowania "Żmija"',
		dzielnica: "Bemowo",
	},
	{
		id: 3711,
		ulica: 'Zgrupowania "Żubr"',
		dzielnica: "Bemowo",
	},
	{
		id: 3712,
		ulica: 'Zgrupowania "Żyrafa"',
		dzielnica: "Bemowo",
	},
	{
		id: 3713,
		ulica: 'Zgrupowania AK "Kampinos"',
		dzielnica: "Bemowo",
	},
	{
		id: 3714,
		ulica: 'al. Zgrupowania AK "Kryska"',
		dzielnica: "Praga-Południe",
	},
	{
		id: 3715,
		ulica: "al. Zieleniecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3716,
		ulica: "Zieleniecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3717,
		ulica: "Zielna",
		dzielnica: "Śródmieście",
	},
	{
		id: 3718,
		ulica: "Zielona",
		dzielnica: "Wawer",
	},
	{
		id: 3719,
		ulica: "Zielone Zacisze",
		dzielnica: "Targówek",
	},
	{
		id: 3720,
		ulica: "Zielonogórska",
		dzielnica: "Mokotów",
	},
	{
		id: 3721,
		ulica: "Zielony Zagajnik",
		dzielnica: "Wawer",
	},
	{
		id: 3722,
		ulica: "Ziemiańska",
		dzielnica: "Wawer",
	},
	{
		id: 3723,
		ulica: "Ziemskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3724,
		ulica: "Zimna",
		dzielnica: "Śródmieście Północne - Śródmieście",
	},
	{
		id: 3725,
		ulica: "Zimorowicza",
		dzielnica: "Wawer",
	},
	{
		id: 3726,
		ulica: "Ziołowa",
		dzielnica: "Wawer",
	},
	{
		id: 3727,
		ulica: "Ziębicka",
		dzielnica: "Białołęka",
	},
	{
		id: 3728,
		ulica: "Zięby",
		dzielnica: "Ursynów",
	},
	{
		id: 3729,
		ulica: "al. Zjednoczenia",
		dzielnica: "Bielany",
	},
	{
		id: 3730,
		ulica: "Złocienia",
		dzielnica: "Wawer",
	},
	{
		id: 3731,
		ulica: "Złoczowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3732,
		ulica: "Złota",
		dzielnica: "Śródmieście",
	},
	{
		id: 3733,
		ulica: "Złotego Smoka",
		dzielnica: "Wawer",
	},
	{
		id: 3734,
		ulica: "Złotej Jesieni",
		dzielnica: "Wawer",
	},
	{
		id: 3735,
		ulica: "Złotej Wilgi",
		dzielnica: "Wawer",
	},
	{
		id: 3736,
		ulica: "Złotopolska",
		dzielnica: "Białołęka",
	},
	{
		id: 3737,
		ulica: "Złoty Róg",
		dzielnica: "Mokotów",
	},
	{
		id: 3738,
		ulica: "Złotych Piasków",
		dzielnica: "Wawer",
	},
	{
		id: 3739,
		ulica: "Znana",
		dzielnica: "Wawer",
	},
	{
		id: 3740,
		ulica: "Znanieckiego",
		dzielnica: "Wawer",
	},
	{
		id: 3741,
		ulica: "Znicz",
		dzielnica: "Wola",
	},
	{
		id: 3742,
		ulica: "Znicza",
		dzielnica: "Wawer",
	},
	{
		id: 3743,
		ulica: "Zodiakalna",
		dzielnica: "Wawer",
	},
	{
		id: 3744,
		ulica: "Zorzy",
		dzielnica: "Wawer",
	},
	{
		id: 3745,
		ulica: "Zręby",
		dzielnica: "Wawer",
	},
	{
		id: 3746,
		ulica: "Zuga",
		dzielnica: "Wawer",
	},
	{
		id: 3747,
		ulica: "Zwierzyniecka",
		dzielnica: "Śródmieście",
	},
	{
		id: 3748,
		ulica: "Związkowa",
		dzielnica: "Wola",
	},
	{
		id: 3749,
		ulica: "ZWM",
		dzielnica: "Bielany",
	},
	{
		id: 3750,
		ulica: "Zwoleńska",
		dzielnica: "Wawer",
	},
	{
		id: 3751,
		ulica: "Zwrotnicza",
		dzielnica: "Wawer",
	},
	{
		id: 3752,
		ulica: "Zwycięzców",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3753,
		ulica: "Zygmunta Augusta",
		dzielnica: "Białołęka",
	},
	{
		id: 3754,
		ulica: "Zygmunta III",
		dzielnica: "Białołęka",
	},
	{
		id: 3755,
		ulica: "Zygmuntowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3756,
		ulica: "Źródlana",
		dzielnica: "Wawer",
	},
	{
		id: 3757,
		ulica: "Żabińskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3758,
		ulica: "Żaglowa",
		dzielnica: "Wawer",
	},
	{
		id: 3759,
		ulica: "Żakowska",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3760,
		ulica: "Żarecka",
		dzielnica: "Białołęka",
	},
	{
		id: 3761,
		ulica: "Żarnowiecka",
		dzielnica: "Białołęka",
	},
	{
		id: 3762,
		ulica: "Żaryna",
		dzielnica: "Mokotów",
	},
	{
		id: 3763,
		ulica: "Żegańska",
		dzielnica: "Wawer",
	},
	{
		id: 3764,
		ulica: "Żegiestowska",
		dzielnica: "Wawer",
	},
	{
		id: 3765,
		ulica: "Żegoty",
		dzielnica: "Wawer",
	},
	{
		id: 3766,
		ulica: "Żelazna",
		dzielnica: "Mirów - Wola",
	},
	{
		id: 3767,
		ulica: "pl. Żelaznej Bramy",
		dzielnica: "Śródmieście Północne - Śródmieście",
	},
	{
		id: 3768,
		ulica: "Żelechowska",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3769,
		ulica: "Żeleńskiego",
		dzielnica: "Bielany",
	},
	{
		id: 3770,
		ulica: "Żeligowskiego",
		dzielnica: "Wola",
	},
	{
		id: 3771,
		ulica: "Żenczykowskiego",
		dzielnica: "Wola",
	},
	{
		id: 3772,
		ulica: "Żeromskiego",
		dzielnica: "Bielany",
	},
	{
		id: 3773,
		ulica: "Żiżki",
		dzielnica: "Praga-Północ",
	},
	{
		id: 3774,
		ulica: "Żonkilowa",
		dzielnica: "Wawer",
	},
	{
		id: 3775,
		ulica: "Żołnierska",
		dzielnica: "Rembertów",
	},
	{
		id: 3776,
		ulica: "Żołny",
		dzielnica: "Ursynów",
	},
	{
		id: 3777,
		ulica: "Żółkiewskiego",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3778,
		ulica: "Żółta",
		dzielnica: "Wawer",
	},
	{
		id: 3779,
		ulica: "Żółwia",
		dzielnica: "Wawer",
	},
	{
		id: 3780,
		ulica: "Żubowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 3781,
		ulica: "Żubrowa",
		dzielnica: "Wawer",
	},
	{
		id: 3782,
		ulica: "Żupnicza",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3783,
		ulica: "Żurawia",
		dzielnica: "Śródmieście",
	},
	{
		id: 3784,
		ulica: "Żurawicka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3785,
		ulica: "Żuromińska",
		dzielnica: "Targówek",
	},
	{
		id: 3786,
		ulica: "Żuławskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3787,
		ulica: "Żużlowa",
		dzielnica: "Wawer",
	},
	{
		id: 3788,
		ulica: "Żwanowiecka",
		dzielnica: "Wawer",
	},
	{
		id: 3789,
		ulica: "Żwirki i Wigury",
		dzielnica: "Ochota",
	},
	{
		id: 3790,
		ulica: "Żwirowa",
		dzielnica: "Wawer",
	},
	{
		id: 3791,
		ulica: "Życzliwa",
		dzielnica: "Wawer",
	},
	{
		id: 3792,
		ulica: "Życzyńska",
		dzielnica: "Wawer",
	},
	{
		id: 3793,
		ulica: "Żymirskiego",
		dzielnica: "Wawer",
	},
	{
		id: 3794,
		ulica: "Żyrardowska",
		dzielnica: "Wola",
	},
	{
		id: 3795,
		ulica: "Żytnia",
		dzielnica: "Wola",
	},
	{
		id: 3796,
		ulica: "Żytomierska",
		dzielnica: "Bemowo",
	},
	{
		id: 3797,
		ulica: "Żywiczna",
		dzielnica: "Wawer",
	},
	{
		id: 3798,
		ulica: "Żywiecka",
		dzielnica: "Praga-Południe",
	},
	{
		id: 3799,
		ulica: "Żywnego",
		dzielnica: "Mokotów",
	},
	{
		id: 3800,
		ulica: "Żywokostowa",
		dzielnica: "Wawer",
	},
	{
		id: 3801,
		ulica: "Żyzna",
		dzielnica: "Wawer",
	},
	{
		id: 3802,
		ulica: "Zygmunta Hubnera",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3803,
		ulica: "Kaliny Jędrusik",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3804,
		ulica: "Kaliny Jędrusik 1",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3805,
		ulica: "Kaliny Jędrusik 3",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3806,
		ulica: "Kaliny Jędrusik 4",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3807,
		ulica: "Kaliny Jędrusik 4 A",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3808,
		ulica: "Kaliny Jędrusik 4 B",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3809,
		ulica: "Kaliny Jędrusik 5",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3810,
		ulica: "Kaliny Jędrusik 6",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3811,
		ulica: "Kaliny Jędrusik 7",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3812,
		ulica: "Kaliny Jędrusik 9",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3813,
		ulica: "Dygata",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3814,
		ulica: "Dygata 2",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3815,
		ulica: "Dygata 3",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3816,
		ulica: "Dygata 4",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3817,
		ulica: "Dygata 6",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3818,
		ulica: "Dygata 8",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3819,
		ulica: "Ficowskiego",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3820,
		ulica: "Ficowskiego 5",
		dzielnica: "Zoliborz Artystyczny",
	},
	{
		id: 3821,
		ulica: "Ficowskiego 8",
		dzielnica: "Zoliborz Artystyczny",
	},
];
export default streets;
