// Nuvio – Lebensmittel-Bibliothek. Diese Datei kannst du direkt bearbeiten (Anleitung steht direkt darunter).
window.NUVIO_LEBENSMITTEL = String.raw`
# ============================================================================
#  Nuvio – Lebensmittel-Bibliothek
# ============================================================================
#  Eine Zeile = ein Lebensmittel. Die Teile werden mit ";" getrennt:
#
#    Deutsch | Englisch | Spanisch ; kcal pro 100 g ; Eiweiß pro 100 g ; Einheiten
#
#  Einheiten: "Name=Gramm", mehrere mit "|" getrennt, z. B.  Stück=180 | Handvoll=30
#  Bei Getränken gelten die Werte pro 100 ml und die Einheiten in ml.
#
#  Eine neue Kategorie beginnt mit "@":
#    @Deutsch | Englisch | Spanisch ; Emoji
#
#  Zeilen mit "#" am Anfang sind Kommentare und werden ignoriert.
#  Tipp: Bei Markenprodukten die Werte von der Packung nehmen (pro 100 g / 100 ml).
#  Wichtig: in dieser Datei kein Gravis-Zeichen (Backtick) verwenden.
# ============================================================================


@Obst | Fruit | Fruta ; 🍎
Apfel | Apple | Manzana ; 52 ; 0.3 ; Stück=180 | Schnitz=25
Banane | Banana | Plátano ; 93 ; 1.1 ; Stück=120
Birne | Pear | Pera ; 55 ; 0.4 ; Stück=170
Orange | Orange | Naranja ; 47 ; 1 ; Stück=150
Mandarine | Tangerine | Mandarina ; 50 ; 0.7 ; Stück=70
Clementine | Clementine | Clementina ; 47 ; 0.8 ; Stück=60
Weintrauben | Grapes | Uvas ; 70 ; 0.7 ; Traube=5 | Handvoll=80 | Schale=150
Erdbeeren | Strawberries | Fresas ; 32 ; 0.8 ; Stück=15 | Handvoll=100 | Schale=250
Himbeeren | Raspberries | Frambuesas ; 43 ; 1.3 ; Handvoll=80 | Schale=125
Heidelbeeren (Blaubeeren) | Blueberries | Arándanos ; 42 ; 0.7 ; Handvoll=80 | Schale=125
Kiwi | Kiwi | Kiwi ; 61 ; 1 ; Stück=75
Mango | Mango | Mango ; 62 ; 0.6 ; Stück=300 | Portion=150
Ananas | Pineapple | Piña ; 55 ; 0.5 ; Scheibe=80 | Portion=150
Wassermelone | Watermelon | Sandía ; 30 ; 0.6 ; Scheibe=300 | Stück=150
Honigmelone | Honeydew melon | Melón ; 50 ; 0.8 ; Scheibe=200
Pfirsich | Peach | Melocotón ; 41 ; 0.8 ; Stück=150
Nektarine | Nectarine | Nectarina ; 44 ; 1 ; Stück=150
Aprikose | Apricot | Albaricoque ; 43 ; 0.9 ; Stück=40
Pflaume / Zwetschge | Plum | Ciruela ; 47 ; 0.6 ; Stück=35
Kirschen | Cherries | Cerezas ; 63 ; 1 ; Handvoll=100 | Stück=7
Granatapfelkerne | Pomegranate seeds | Granada (granos) ; 74 ; 1.7 ; Portion=100 | EL=15
Grapefruit | Grapefruit | Pomelo ; 38 ; 0.7 ; Hälfte=150
Avocado | Avocado | Aguacate ; 160 ; 2 ; Stück=150 | Hälfte=75
Datteln (getrocknet) | Dates (dried) | Dátiles ; 280 ; 2.5 ; Stück=8
Rosinen | Raisins | Pasas ; 300 ; 3 ; Handvoll=30 | EL=10
Feigen (getrocknet) | Figs (dried) | Higos secos ; 250 ; 3.5 ; Stück=20
Aprikosen (getrocknet) | Apricots (dried) | Orejones ; 240 ; 3.4 ; Stück=8
Apfelmus | Apple sauce | Compota de manzana ; 75 ; 0.2 ; Portion=100 | Glas=360
Obstsalat | Fruit salad | Macedonia ; 55 ; 0.7 ; Schale=200
Smoothie (Frucht) | Fruit smoothie | Smoothie de fruta ; 60 ; 0.7 ; Flasche=250 | Glas=200
Kokosnuss (Fruchtfleisch) | Coconut (flesh) | Coco ; 350 ; 3.3 ; Stück=10 | Portion=50
Kaki | Persimmon | Caqui ; 70 ; 0.6 ; Stück=200
Feige (frisch) | Fig (fresh) | Higo ; 74 ; 0.8 ; Stück=50
Zitrone | Lemon | Limón ; 35 ; 0.7 ; Stück=100 | Saft (1 EL)=15
Limette | Lime | Lima ; 30 ; 0.7 ; Stück=60
Brombeeren | Blackberries | Moras ; 43 ; 1.4 ; Handvoll=70 | Schale=125
Johannisbeeren | Currants | Grosellas ; 45 ; 1.1 ; Handvoll=60
Stachelbeeren | Gooseberries | Grosellas espinosas ; 44 ; 0.9 ; Handvoll=70
Physalis | Physalis | Physalis ; 53 ; 1.9 ; Handvoll=50
Papaya | Papaya | Papaya ; 43 ; 0.5 ; Stück=400 | Schale=150
Maracuja | Passion fruit | Maracuyá ; 97 ; 2.2 ; Stück=40
Litschi | Lychee | Lichi ; 66 ; 0.8 ; Stück=10 | Handvoll=80
Drachenfrucht | Dragon fruit | Pitahaya ; 60 ; 1.2 ; Stück=350
Rhabarber | Rhubarb | Ruibarbo ; 21 ; 0.9 ; Stange=100
Cranberries (getrocknet) | Dried cranberries | Arándanos rojos secos ; 325 ; 0.1 ; Handvoll=30 | EL=10
Pflaumen (getrocknet) | Prunes | Ciruelas pasas ; 240 ; 2.2 ; Stück=10 | Handvoll=40
Mango (getrocknet) | Dried mango | Mango deshidratado ; 320 ; 2.5 ; Handvoll=30
Bananenchips | Banana chips | Chips de plátano ; 520 ; 2.3 ; Handvoll=30
Kokosraspeln | Desiccated coconut | Coco rallado ; 660 ; 6.9 ; EL=6
Pfirsiche (Dose) | Canned peaches | Melocotón en almíbar ; 65 ; 0.5 ; Dose=240 | Hälfte=40
Ananas (Dose) | Canned pineapple | Piña en almíbar ; 60 ; 0.4 ; Scheibe=40 | Dose=340
Mandarinen (Dose) | Canned mandarins | Mandarinas en almíbar ; 62 ; 0.6 ; Dose=175
Quitte | Quince | Membrillo ; 38 ; 0.4 ; Stück=250
Dulce de membrillo | Quince paste | Dulce de membrillo ; 270 ; 0.3 ; Scheibe=30
Apfel (Granny Smith) | Granny Smith apple | Manzana Granny Smith ; 50 ; 0.4 ; Stück=180
Apfel (Pink Lady) | Pink Lady apple | Manzana Pink Lady ; 55 ; 0.3 ; Stück=180
Nashi-Birne | Nashi pear | Pera nashi ; 42 ; 0.5 ; Stück=200
Blutorange | Blood orange | Naranja sanguina ; 48 ; 0.9 ; Stück=150
Pomelo | Pomelo | Pomelo ; 38 ; 0.8 ; Stück=1000 | Spalte=60
Kumquat | Kumquat | Kumquat ; 71 ; 1.9 ; Stück=20
Mirabellen | Mirabelle plums | Ciruelas mirabel ; 65 ; 0.7 ; Handvoll=80
Zwetschgen | Damson plums | Ciruelas damascenas ; 47 ; 0.7 ; Stück=35 | Handvoll=120
Sauerkirschen | Sour cherries | Guindas ; 53 ; 0.9 ; Handvoll=80 | Glas (abgetropft)=350
Cantaloupe-Melone | Cantaloupe melon | Melón cantalupo ; 34 ; 0.8 ; Spalte=200
Galiamelone | Galia melon | Melón galia ; 37 ; 0.9 ; Spalte=200
Kaktusfeige | Prickly pear | Higo chumbo ; 41 ; 0.7 ; Stück=100
Sternfrucht | Star fruit | Carambola ; 31 ; 1 ; Stück=90
Rambutan | Rambutan | Rambután ; 68 ; 0.7 ; Stück=15
Mangostane | Mangosteen | Mangostán ; 73 ; 0.4 ; Stück=60
Cherimoya | Cherimoya | Chirimoya ; 75 ; 1.6 ; Stück=300
Kokosnuss (frisch) | Fresh coconut | Coco fresco ; 350 ; 3.3 ; Stück (Fruchtfleisch)=40
Datteln (Medjool) | Medjool dates | Dátiles Medjool ; 280 ; 1.8 ; Stück=24
Apfelringe (getrocknet) | Dried apple rings | Aros de manzana secos ; 290 ; 1.4 ; Handvoll=25
Gefriergetrocknete Erdbeeren | Freeze-dried strawberries | Fresas liofilizadas ; 340 ; 5 ; Handvoll=10
Apfelmus ungesüßt | Unsweetened apple sauce | Compota de manzana sin azúcar ; 45 ; 0.2 ; EL=20 | Becher=100
Fruchtmus-Quetschie | Fruit pouch | Bolsita de puré de fruta ; 60 ; 0.5 ; Beutel=90
Grüne Papaya | Green papaya | Papaya verde ; 40 ; 0.6 ; Portion=200
Maroni (roh) | Raw chestnuts | Castañas crudas ; 200 ; 2.5 ; Handvoll=60

@Gemüse | Vegetables | Verduras ; 🥦
Gurke | Cucumber | Pepino ; 12 ; 0.6 ; Stück=400 | Portion=100 | Scheibe=10
Tomate | Tomato | Tomate ; 18 ; 1 ; Stück=80
Cherrytomaten | Cherry tomatoes | Tomates cherry ; 20 ; 1 ; Stück=15 | Handvoll=100
Paprika | Bell pepper | Pimiento ; 30 ; 1 ; Stück=160 | Streifen=15
Karotte | Carrot | Zanahoria ; 36 ; 1 ; Stück=80
Kohlrabi | Kohlrabi | Colinabo ; 25 ; 2 ; Stück=250
Radieschen | Radishes | Rábanos ; 15 ; 1 ; Stück=10 | Bund=150
Eisbergsalat | Iceberg lettuce | Lechuga iceberg ; 13 ; 1 ; Portion=80
Feldsalat | Lamb's lettuce | Canónigos ; 20 ; 2 ; Portion=60
Rucola | Rocket / arugula | Rúcula ; 25 ; 2.6 ; Portion=40
Brokkoli | Broccoli | Brócoli ; 34 ; 3.5 ; Portion=200 | Röschen=15
Blumenkohl | Cauliflower | Coliflor ; 25 ; 2 ; Portion=200
Zucchini | Zucchini / courgette | Calabacín ; 19 ; 1.5 ; Stück=250
Aubergine | Aubergine / eggplant | Berenjena ; 20 ; 1.2 ; Stück=300
Champignons | Mushrooms | Champiñones ; 22 ; 3 ; Portion=150 | Stück=20
Spinat | Spinach | Espinacas ; 23 ; 2.9 ; Portion=150
Grüne Bohnen | Green beans | Judías verdes ; 30 ; 2 ; Portion=150
Erbsen | Peas | Guisantes ; 80 ; 5.5 ; Portion=150 | EL=15
Mais (Dose) | Sweetcorn (canned) | Maíz ; 80 ; 3 ; Dose=140 | EL=15
Rosenkohl | Brussels sprouts | Coles de Bruselas ; 43 ; 4.5 ; Portion=150
Spargel | Asparagus | Espárragos ; 18 ; 2 ; Portion=250 | Stange=20
Süßkartoffel | Sweet potato | Boniato ; 86 ; 1.6 ; Stück=250
Kartoffeln (gekocht) | Potatoes (boiled) | Patatas cocidas ; 72 ; 2 ; Stück=80 | Portion=250
Zwiebel | Onion | Cebolla ; 40 ; 1.2 ; Stück=80
Rotkohl | Red cabbage | Lombarda ; 30 ; 1.5 ; Portion=150
Sauerkraut | Sauerkraut | Chucrut ; 20 ; 1.5 ; Portion=150
Kürbis (Hokkaido) | Pumpkin | Calabaza ; 63 ; 1.7 ; Portion=200
Rote Bete | Beetroot | Remolacha ; 43 ; 1.6 ; Stück=100
Lauch | Leek | Puerro ; 30 ; 2 ; Stange=200
Edamame | Edamame | Edamame ; 120 ; 11 ; Portion=100
Gemischter Salat mit Dressing | Mixed salad with dressing | Ensalada mixta con aliño ; 80 ; 1.5 ; Schale=200 | kleine Schale=100
Ofengemüse | Roasted vegetables | Verduras al horno ; 70 ; 1.8 ; Portion=250
Gemüsesticks mit Dip | Veggie sticks with dip | Crudités con salsa ; 90 ; 2.5 ; Portion=150
Oliven | Olives | Aceitunas ; 145 ; 1.4 ; Stück=4 | Handvoll=30
Essiggurken | Gherkins / pickles | Pepinillos ; 20 ; 0.6 ; Stück=40
Pimientos de Padrón | Padrón peppers | Pimientos de Padrón ; 60 ; 1.5 ; Portion=150
Knoblauch | Garlic | Ajo ; 149 ; 6.4 ; Zehe=4 | Knolle=50
Ingwer (frisch) | Fresh ginger | Jengibre fresco ; 80 ; 1.8 ; Stück (daumengroß)=15 | TL gerieben=4
Frühlingszwiebel | Spring onion | Cebolleta ; 32 ; 1.8 ; Stück=20 | Bund=120
Rote Zwiebel | Red onion | Cebolla morada ; 40 ; 1.1 ; Stück=100
Schalotte | Shallot | Chalota ; 72 ; 2.5 ; Stück=25
Staudensellerie | Celery | Apio ; 16 ; 0.7 ; Stange=40
Knollensellerie | Celeriac | Apionabo ; 42 ; 1.5 ; Stück=600 | Scheibe=60
Fenchel | Fennel | Hinojo ; 31 ; 1.2 ; Knolle=250
Pastinake | Parsnip | Chirivía ; 75 ; 1.2 ; Stück=150
Steckrübe | Swede | Colinabo ; 37 ; 1.1 ; Portion=200
Mangold | Chard | Acelga ; 19 ; 1.8 ; Portion=200
Pak Choi | Pak choi | Pak choi ; 13 ; 1.5 ; Stück=150
Chinakohl | Napa cabbage | Col china ; 13 ; 1.2 ; Portion=150
Weißkohl | White cabbage | Repollo ; 25 ; 1.3 ; Portion=150
Wirsing | Savoy cabbage | Col rizada ; 27 ; 2.0 ; Portion=150
Grünkohl (roh) | Kale | Kale ; 49 ; 4.3 ; Handvoll=40 | Portion=150
Romanasalat | Romaine lettuce | Lechuga romana ; 17 ; 1.2 ; Herz=200 | Handvoll=40
Kopfsalat | Butter lettuce | Lechuga ; 13 ; 1.4 ; Kopf=300 | Handvoll=40
Chicorée | Chicory | Endivia ; 17 ; 1.2 ; Stück=120
Radicchio | Radicchio | Radicchio ; 23 ; 1.4 ; Stück=200
Artischocke | Artichoke | Alcachofa ; 47 ; 3.3 ; Stück=120
Artischockenherzen (Glas) | Artichoke hearts (jar) | Corazones de alcachofa ; 95 ; 2.0 ; Stück=25 | Glas=180
Okra | Okra | Okra ; 33 ; 1.9 ; Handvoll=60
Zuckerschoten | Snow peas | Tirabeques ; 42 ; 2.8 ; Handvoll=60
Bohnensprossen | Bean sprouts | Brotes de soja ; 30 ; 3.0 ; Handvoll=50
Shiitake-Pilze | Shiitake mushrooms | Setas shiitake ; 34 ; 2.2 ; Handvoll=60
Kräuterseitlinge | King oyster mushrooms | Setas de cardo ; 35 ; 3.3 ; Stück=80
Pfifferlinge | Chanterelles | Rebozuelos ; 32 ; 1.5 ; Portion=150
Austernpilze | Oyster mushrooms | Setas ostra ; 33 ; 3.3 ; Portion=150
Champignons (Dose) | Canned mushrooms | Champiñones en lata ; 20 ; 2.0 ; Dose=230
Peperoni (Glas) | Pickled peppers | Guindillas en vinagre ; 27 ; 1.0 ; Stück=10
Jalapeños | Jalapeños | Jalapeños ; 29 ; 0.9 ; Stück=15 | EL=12
Chili (frisch) | Fresh chilli | Guindilla fresca ; 40 ; 1.9 ; Stück=10
Maiskolben | Corn on the cob | Mazorca de maíz ; 96 ; 3.4 ; Stück=200
Kartoffeln (roh) | Potatoes (raw) | Patatas crudas ; 77 ; 2.0 ; Stück=120 | Portion=250
Butternut-Kürbis | Butternut squash | Calabaza butternut ; 45 ; 1.0 ; Portion=200
Erbsen (TK) | Frozen peas | Guisantes congelados ; 81 ; 5.4 ; Portion=150 | EL=15
Brokkoli (TK) | Frozen broccoli | Brócoli congelado ; 28 ; 2.8 ; Portion=150
Gemüsemischung (TK) | Frozen mixed vegetables | Verduras congeladas ; 45 ; 2.5 ; Portion=150
Rahmspinat (Iglo) | Creamed spinach (Iglo) | Espinacas a la crema (Iglo) ; 70 ; 2.6 ; Portion=200 | Packung=500
Gemüsepfanne (Frosta) | Vegetable stir-fry (Frosta) | Salteado de verduras (Frosta) ; 95 ; 3.0 ; Portion=250
Tomaten (getrocknet, in Öl) | Sun-dried tomatoes in oil | Tomates secos en aceite ; 210 ; 5.0 ; Stück=8 | EL=15
Kapern | Capers | Alcaparras ; 23 ; 2.4 ; TL=5 | EL=10
Rotkohl (Glas) | Red cabbage (jar) | Lombarda en conserva ; 60 ; 1.3 ; Portion=150
Sellerie-Salat | Celery salad | Ensalada de apio ; 150 ; 1.5 ; Portion=100
Krautsalat | Coleslaw | Ensalada de col ; 90 ; 1.2 ; Portion=100
Kidneybohnen (Dose) | Kidney beans (canned) | Alubias rojas en lata ; 100 ; 7.0 ; Dose (abgetropft)=250 | EL=20
Weiße Bohnen (Dose) | White beans (canned) | Alubias blancas en lata ; 95 ; 6.5 ; Dose (abgetropft)=250
Kichererbsen (Dose) | Chickpeas (canned) | Garbanzos en lata ; 120 ; 7.0 ; Dose (abgetropft)=240 | EL=20
Schwarze Bohnen (Dose) | Black beans (canned) | Frijoles negros en lata ; 95 ; 6.0 ; Dose (abgetropft)=240
Baked Beans | Baked beans | Alubias con tomate ; 85 ; 5.0 ; Dose=415 | Portion=200
Kirschtomaten | Cherry tomatoes | Tomates cherry ; 20 ; 0.9 ; Stück=15 | Handvoll=100
Rispentomaten | Vine tomatoes | Tomates en rama ; 18 ; 0.9 ; Stück=90
Paprika (rot) | Red pepper | Pimiento rojo ; 31 ; 1 ; Stück=160
Paprika (gelb) | Yellow pepper | Pimiento amarillo ; 27 ; 1 ; Stück=160
Paprika (grün) | Green pepper | Pimiento verde ; 20 ; 0.9 ; Stück=160
Spitzpaprika | Pointed pepper | Pimiento largo ; 30 ; 1 ; Stück=100
Gurke (Snack) | Snack cucumber | Pepino snack ; 12 ; 0.6 ; Stück=60
Zucchini (gegrillt) | Grilled courgette | Calabacín a la plancha ; 40 ; 1.2 ; Portion=150
Brokkoli (gedünstet) | Steamed broccoli | Brócoli al vapor ; 35 ; 2.8 ; Portion=150
Blumenkohl (gedünstet) | Steamed cauliflower | Coliflor al vapor ; 23 ; 1.8 ; Portion=150
Karotten (gekocht) | Cooked carrots | Zanahorias cocidas ; 35 ; 0.8 ; Portion=150
Erbsen (gekocht) | Cooked peas | Guisantes cocidos ; 80 ; 5.4 ; Portion=150
Erbsen und Möhren (Dose) | Peas and carrots (canned) | Guisantes y zanahorias en lata ; 50 ; 3 ; Dose (abgetropft)=265 | Portion=150
Grüne Bohnen (gekocht) | Cooked green beans | Judías verdes cocidas ; 31 ; 1.9 ; Portion=150
Rosenkohl (gekocht) | Cooked Brussels sprouts | Coles de Bruselas cocidas ; 36 ; 3.5 ; Portion=150
Spargel (grün) | Green asparagus | Espárrago verde ; 20 ; 2.2 ; Stange=20 | Bund=500
Spargel (weiß) | White asparagus | Espárrago blanco ; 18 ; 1.9 ; Stange=60 | Portion=500
Spargel (Glas) | Jarred asparagus | Espárragos en conserva ; 17 ; 1.8 ; Stange=25 | Glas (abgetropft)=205
Rotkraut / Apfelrotkohl (Glas) | Red cabbage with apple (jar) | Lombarda con manzana ; 65 ; 1.2 ; Portion=150 | Glas=720
Sauerkraut (abgetropft) | Sauerkraut (drained) | Chucrut escurrido ; 20 ; 1.5 ; Portion=150
Maroni (geröstet) | Roasted chestnuts | Castañas asadas ; 200 ; 2.5 ; Stück=10 | Portion=100
Maroni (vorgegart, Packung) | Pre-cooked chestnuts | Castañas cocidas envasadas ; 170 ; 2.5 ; Packung=200 | Handvoll=50
Kürbis (Butternut, geröstet) | Roasted butternut squash | Calabaza asada ; 60 ; 1.2 ; Portion=200
Süßkartoffel (gebacken) | Baked sweet potato | Boniato asado ; 90 ; 2 ; Stück=200
Kartoffeln (mehlig) | Floury potatoes | Patatas harinosas ; 77 ; 2 ; Stück=120 | Portion=250
Kartoffeln (festkochend) | Waxy potatoes | Patatas para cocer ; 72 ; 2 ; Stück=100 | Portion=250
Kartoffeln (vorgekocht, Packung) | Pre-cooked potatoes | Patatas precocidas ; 75 ; 1.8 ; Packung=400 | Portion=250
Pellkartoffeln | Jacket potatoes | Patatas cocidas con piel ; 72 ; 2 ; Stück=100
Ofenkartoffel | Baked potato | Patata asada ; 95 ; 2.5 ; Stück=250
Bratkartoffeln (mit wenig Öl) | Pan-fried potatoes (little oil) | Patatas salteadas ; 120 ; 2.4 ; Portion=200
Kartoffelpüree (selbst gemacht) | Homemade mashed potatoes | Puré casero ; 95 ; 2 ; Portion=200
Blumenkohl-Kartoffel-Püree | Cauliflower-potato mash | Puré de coliflor y patata ; 60 ; 2 ; Portion=200
Pommes (Airfryer, ohne Öl) | Air-fried chips (no oil) | Patatas en freidora de aire ; 110 ; 2.5 ; Portion=200
Rote Bete (gekocht) | Cooked beetroot | Remolacha cocida ; 43 ; 1.7 ; Knolle=100 | Packung=500
Rettich | White radish | Rábano blanco ; 14 ; 0.6 ; Portion=100
Babyspinat | Baby spinach | Espinacas baby ; 23 ; 2.9 ; Handvoll=30 | Packung=125
Blattspinat (frisch) | Fresh leaf spinach | Espinacas frescas ; 23 ; 2.9 ; Handvoll=30 | Portion=150
Blattspinat (TK) | Frozen leaf spinach | Espinacas congeladas ; 20 ; 2.5 ; Portion=150 | Packung=450
Salatmischung (Tüte) | Bagged salad mix | Mezcla de ensaladas ; 17 ; 1.3 ; Portion=75 | Packung=150
Sprossen (gemischt) | Mixed sprouts | Brotes variados ; 30 ; 3 ; Handvoll=20
Zuckermais (Kolben, gekocht) | Cooked corn cob | Mazorca cocida ; 96 ; 3.4 ; Stück=180
Mais (Dose, abgetropft) | Canned sweetcorn (drained) | Maíz en lata escurrido ; 80 ; 2.5 ; Dose=140 | EL=15
Champignons (gebraten) | Fried mushrooms | Champiñones salteados ; 60 ; 3 ; Portion=150
Steinpilze (getrocknet) | Dried porcini | Boletus secos ; 300 ; 30 ; Handvoll=10
Pilzmischung (TK) | Frozen mixed mushrooms | Setas variadas congeladas ; 25 ; 2.5 ; Portion=150
Antipasti (Gemüse in Öl) | Vegetable antipasti in oil | Antipasti de verduras en aceite ; 150 ; 1.5 ; Portion=50
Paprika (geröstet, Glas) | Roasted peppers (jar) | Pimientos asados en conserva ; 30 ; 1 ; Portion=60 | Glas=290
Oliven (grün) | Green olives | Aceitunas verdes ; 145 ; 1 ; Stück=4 | Handvoll=30
Oliven (schwarz) | Black olives | Aceitunas negras ; 180 ; 1.6 ; Stück=4 | Handvoll=30
Silberzwiebeln | Pickled silverskin onions | Cebollitas en vinagre ; 30 ; 1 ; EL=15
Gemüsebrühe mit Einlage | Vegetable broth with veg | Caldo de verduras con verduras ; 20 ; 1 ; Tasse=250
Gemüse (gemischt, gedünstet) | Mixed vegetables (steamed) | Verduras variadas al vapor ; 45 ; 2.5 ; Portion=200
Ofengemüse (mit Öl) | Roast vegetables (with oil) | Verduras asadas con aceite ; 90 ; 2 ; Portion=200
Salat (gemischt, ohne Dressing) | Mixed salad (no dressing) | Ensalada mixta sin aliñar ; 18 ; 1.3 ; Schale=150
Spitzkohl | Pointed cabbage | Col puntiaguda ; 27 ; 1.5 ; Portion=200 | Kopf=800
Bärlauch | Wild garlic | Ajo de oso ; 25 ; 2.5 ; Handvoll=20

@Bäcker & Brot | Bakery & bread | Panadería ; 🥐
Brötchen / Semmel (Weizen) | Bread roll (white) | Panecillo ; 270 ; 9 ; Stück=60 | Hälfte=30
Vollkornbrötchen | Wholegrain roll | Panecillo integral ; 240 ; 9 ; Stück=70 | Hälfte=35
Körnerbrötchen | Seeded roll | Panecillo de semillas ; 260 ; 10 ; Stück=75 | Hälfte=38
Mohnbrötchen | Poppy seed roll | Panecillo de amapola ; 280 ; 10 ; Stück=60
Laugenbrezel | Pretzel | Pretzel ; 270 ; 8 ; Stück=90
Laugenstange | Pretzel stick | Barra de pretzel ; 270 ; 8 ; Stück=90
Laugenbrötchen | Pretzel roll | Panecillo de pretzel ; 270 ; 8 ; Stück=70
Brezel mit Butter | Buttered pretzel | Pretzel con mantequilla ; 310 ; 8 ; Stück=110
Croissant | Croissant | Cruasán ; 400 ; 8 ; Stück=60
Schokocroissant | Chocolate croissant | Napolitana de chocolate ; 420 ; 7 ; Stück=75
Laugencroissant | Pretzel croissant | Cruasán de pretzel ; 390 ; 8 ; Stück=70
Baguette | Baguette | Baguette ; 260 ; 8.5 ; Stück=250 | Scheibe=30 | halbes=125
Toastbrot | Toast / sandwich bread | Pan de molde ; 260 ; 8 ; Scheibe=25
Vollkorntoast | Wholegrain toast | Pan de molde integral ; 240 ; 9 ; Scheibe=28
Mischbrot | Mixed rye bread | Pan mixto ; 220 ; 6.5 ; Scheibe=45
Vollkornbrot | Wholegrain bread | Pan integral ; 220 ; 7 ; Scheibe=50
Roggenbrot | Rye bread | Pan de centeno ; 210 ; 6 ; Scheibe=45
Knäckebrot | Crispbread | Pan crujiente ; 340 ; 10 ; Scheibe=10
Zwieback | Rusk | Biscote ; 400 ; 10 ; Stück=10
Salamibrötchen (Bäcker) | Salami roll (bakery) | Bocadillo de salami ; 270 ; 11 ; Stück=110 | Hälfte=55
Käsebrötchen (Bäcker) | Cheese roll (bakery) | Bocadillo de queso ; 260 ; 11 ; Stück=110 | Hälfte=55
Schinkenbrötchen (Bäcker) | Ham roll (bakery) | Bocadillo de jamón york ; 240 ; 12 ; Stück=110 | Hälfte=55
Käse-Schinken-Brötchen | Ham & cheese roll | Bocadillo mixto ; 260 ; 12 ; Stück=120 | Hälfte=60
Leberkäsbrötchen | Leberkäse roll | Bocadillo de leberkäse ; 270 ; 10 ; Stück=160
Schnitzelbrötchen | Schnitzel sandwich | Bocadillo de escalope ; 260 ; 12 ; Stück=180
Thunfischbrötchen | Tuna sandwich | Bocadillo de atún ; 230 ; 12 ; Stück=140
Eibrötchen | Egg sandwich | Bocadillo de huevo ; 230 ; 10 ; Stück=110
Lachsbrötchen | Salmon sandwich | Bocadillo de salmón ; 230 ; 12 ; Stück=120
Mozzarella-Tomate-Baguette | Mozzarella-tomato baguette | Baguette de mozzarella y tomate ; 240 ; 10 ; Stück=200
Käsestange | Cheese stick (pastry) | Barrita de queso ; 330 ; 13 ; Stück=100
Pizzaschnecke | Pizza roll (pastry) | Caracola de pizza ; 280 ; 9 ; Stück=120
Pizza vom Bäcker (Stück) | Bakery pizza (slice) | Porción de pizza (panadería) ; 250 ; 10 ; Stück=150
Zwiebelkuchen | Onion tart | Tarta de cebolla ; 250 ; 6 ; Stück=150
Quiche Lorraine | Quiche Lorraine | Quiche Lorraine ; 290 ; 9 ; Stück=150
Berliner / Krapfen | Doughnut (jam-filled) | Berlinesa ; 350 ; 6 ; Stück=70
Donut | Donut | Dónut ; 400 ; 5 ; Stück=60
Plunderteilchen | Danish pastry | Bollería danesa ; 380 ; 6 ; Stück=90
Apfeltasche | Apple turnover | Empanadilla de manzana ; 330 ; 4 ; Stück=100
Nussschnecke | Nut swirl | Caracola de nueces ; 410 ; 7 ; Stück=100
Zimtschnecke | Cinnamon roll | Rollo de canela ; 380 ; 6 ; Stück=90
Franzbrötchen | Franzbrötchen (cinnamon pastry) | Franzbrötchen ; 390 ; 7 ; Stück=80
Rosinenbrötchen | Raisin bun | Bollo de pasas ; 290 ; 8 ; Stück=70
Muffin (Schoko) | Chocolate muffin | Muffin de chocolate ; 420 ; 6 ; Stück=100
Muffin (Blaubeer) | Blueberry muffin | Muffin de arándanos ; 370 ; 5 ; Stück=100
Butterkuchen | Butter cake | Bizcocho de mantequilla ; 380 ; 6 ; Stück=90
Streuselkuchen | Crumble cake | Tarta de crumble ; 390 ; 5 ; Stück=100
Käsekuchen | Cheesecake | Tarta de queso ; 250 ; 7 ; Stück=130
Apfelkuchen | Apple cake | Tarta de manzana ; 230 ; 3 ; Stück=130
Schwarzwälder Kirschtorte | Black Forest cake | Tarta Selva Negra ; 300 ; 4 ; Stück=130
Bienenstich | Bee sting cake | Bienenstich ; 360 ; 5 ; Stück=110
Marmorkuchen | Marble cake | Bizcocho marmolado ; 400 ; 6 ; Stück=70
Mohnkuchen | Poppy seed cake | Tarta de amapola ; 350 ; 7 ; Stück=100
Apfelstrudel | Apple strudel | Strudel de manzana ; 250 ; 3 ; Stück=150
Brownie | Brownie | Brownie ; 450 ; 5 ; Stück=60
Amerikaner | Amerikaner (iced cookie) | Amerikaner ; 380 ; 5 ; Stück=80
Cookie | Cookie | Galleta grande ; 480 ; 5 ; Stück=40
Waffel | Waffle | Gofre ; 400 ; 6 ; Stück=60
Lebkuchen | Gingerbread | Pan de jengibre ; 370 ; 5 ; Stück=30
Stollen | Stollen | Stollen ; 400 ; 6 ; Scheibe=60
Bananenbrot | Banana bread | Pan de plátano ; 330 ; 5 ; Scheibe=70
Magdalena | Magdalena (Spanish muffin) | Magdalena ; 430 ; 6 ; Stück=30
Churros | Churros | Churros ; 380 ; 5 ; Stück=25 | Portion=150
Churros mit Schokolade | Churros with chocolate | Churros con chocolate ; 300 ; 5 ; Portion=300
Pan con tomate | Pan con tomate | Pan con tomate ; 220 ; 6 ; Stück=100
Ensaimada | Ensaimada | Ensaimada ; 420 ; 7 ; Stück=80
Stroopwafel | Stroopwafel | Stroopwafel ; 470 ; 4.0 ; Stück=30 | Mini=8
Poffertjes | Poffertjes | Poffertjes ; 250 ; 6.0 ; Portion (12 Stück)=150 | Stück=12
Poffertjes mit Puderzucker & Butter | Poffertjes with sugar & butter | Poffertjes con azúcar y mantequilla ; 320 ; 5.5 ; Portion (12 Stück)=180
Oliebollen | Oliebollen | Oliebollen ; 340 ; 5.5 ; Stück=70
Appeltaart | Dutch apple pie | Tarta de manzana holandesa ; 260 ; 3.0 ; Stück=140
Tompouce | Tompouce | Tompouce ; 330 ; 3.5 ; Stück=110
Gevulde koek | Almond-filled cookie | Galleta rellena de almendra ; 440 ; 7.0 ; Stück=80
Ontbijtkoek | Dutch spiced cake | Ontbijtkoek ; 320 ; 4.0 ; Scheibe=25
Krentenbol | Currant bun | Bollo de pasas ; 275 ; 8.0 ; Stück=60
Belgische Waffel | Belgian waffle | Gofre belga ; 410 ; 6.0 ; Stück=90
Speculoos | Speculoos cookies | Galletas speculoos ; 485 ; 5.5 ; Stück=8
Mandelhörnchen | Almond crescent | Cuerno de almendra ; 450 ; 8.5 ; Stück=80
Kopenhagener | Danish pastry | Danés ; 400 ; 6.0 ; Stück=100
Puddingbrezel | Custard pretzel pastry | Lazo de crema ; 330 ; 5.0 ; Stück=110
Quarkbällchen | Quark balls | Buñuelos de requesón ; 390 ; 7.0 ; Stück=25
Krapfen mit Vanille | Custard doughnut | Berlina de crema ; 350 ; 6.0 ; Stück=80
Eclair | Eclair | Éclair ; 262 ; 6.0 ; Stück=80
Windbeutel | Cream puff | Profiterol grande ; 300 ; 5.0 ; Stück=80
Florentiner | Florentine | Florentina ; 500 ; 8.0 ; Stück=30
Bagel (natur) | Plain bagel | Bagel ; 260 ; 10 ; Stück=90
Ciabatta | Ciabatta | Chapata ; 270 ; 9 ; Stück=80 | Scheibe=30
Fladenbrot | Flatbread | Pan de pita turco ; 270 ; 9 ; Viertel=100
Pita | Pita bread | Pan de pita ; 275 ; 9 ; Stück=60
Naan | Naan | Pan naan ; 300 ; 9 ; Stück=90
Tortilla-Wrap | Tortilla wrap | Tortilla de trigo ; 310 ; 8.5 ; Stück=60
Dinkelbrötchen | Spelt roll | Panecillo de espelta ; 250 ; 10 ; Stück=65
Brioche | Brioche | Brioche ; 380 ; 8 ; Scheibe=30 | Stück=50
Hefezopf | Sweet plaited bread | Trenza dulce ; 330 ; 8 ; Scheibe=45
Pumpernickel | Pumpernickel | Pumpernickel ; 190 ; 5.5 ; Scheibe=40
Toastbrötchen | Toast rolls | Panecillos de molde ; 260 ; 8 ; Stück=45
Burger-Brötchen | Burger bun | Pan de hamburguesa ; 270 ; 9 ; Stück=60
Hot-Dog-Brötchen | Hot dog bun | Pan de perrito ; 270 ; 8 ; Stück=50
Wasa Knäckebrot | Wasa crispbread | Wasa ; 335 ; 9 ; Scheibe=11
Grissini | Breadsticks | Picos de pan ; 410 ; 12 ; Stück=5
Piadina | Piadina | Piadina ; 320 ; 8 ; Stück=100
Picos (Brotsticks) | Spanish breadsticks | Picos ; 420 ; 12 ; Handvoll=20
Torrijas | Torrijas | Torrijas ; 260 ; 6 ; Stück=90
Rosquillas | Rosquillas | Rosquillas ; 420 ; 6 ; Stück=30
Mantecados | Mantecados | Mantecados ; 530 ; 6 ; Stück=25
Polvorones | Polvorones | Polvorones ; 530 ; 6 ; Stück=30
Roscón de Reyes | Roscón de Reyes | Roscón de Reyes ; 340 ; 7 ; Stück=100
Vollkornbrot (Scheibe) | Wholegrain bread (slice) | Pan integral (rebanada) ; 215 ; 7 ; Scheibe=50
Vollkorn-Toast | Wholegrain toast bread | Pan de molde integral ; 245 ; 9 ; Scheibe=35
Eiweißbrot | Protein bread | Pan proteico ; 260 ; 22 ; Scheibe=40
Low-Carb-Brot | Low-carb bread | Pan bajo en hidratos ; 270 ; 20 ; Scheibe=40
Roggenmischbrot | Rye-wheat bread | Pan mixto de centeno ; 220 ; 6.5 ; Scheibe=45
Bauernbrot | Farmhouse bread | Pan de payés ; 230 ; 7 ; Scheibe=50
Dinkelbrot | Spelt bread | Pan de espelta ; 240 ; 9 ; Scheibe=45
Sonnenblumenkernbrot | Sunflower seed bread | Pan de pipas ; 260 ; 9 ; Scheibe=45
Schwarzbrot | Black bread | Pan negro ; 200 ; 6 ; Scheibe=45
Knäckebrot (Vollkorn) | Wholegrain crispbread | Pan crujiente integral ; 350 ; 10 ; Scheibe=10
Semmel / Kaisersemmel | Kaiser roll | Panecillo kaiser ; 270 ; 9 ; Stück=55
Kornspitz | Kornspitz roll | Kornspitz ; 270 ; 10 ; Stück=70
Salzstangerl | Salt stick roll | Barrita de sal ; 270 ; 9 ; Stück=70
Mohnweckerl | Poppy seed roll | Panecillo de amapola ; 290 ; 10 ; Stück=60
Käsebrötchen | Cheese roll | Panecillo con queso ; 300 ; 13 ; Stück=80
Mehrkornbrötchen | Multigrain roll | Panecillo multicereal ; 260 ; 10 ; Stück=70
Vollkorn-Wrap | Wholegrain wrap | Wrap integral ; 300 ; 9 ; Stück=40 | Stück (groß)=60
Low-Carb-Wrap | Low-carb wrap | Wrap bajo en hidratos ; 250 ; 20 ; Stück=40
Pita (Vollkorn) | Wholegrain pita | Pan de pita integral ; 265 ; 10 ; Stück=60
Tortilla (Mais) | Corn tortilla | Tortilla de maíz ; 220 ; 5.7 ; Stück=30
Taco-Schalen | Taco shells | Tacos crujientes ; 480 ; 6 ; Stück=11
Sushi-Reis-Papier / Nori | Nori sheet | Alga nori ; 330 ; 40 ; Blatt=3
Croissant (Butter) | Butter croissant | Cruasán de mantequilla ; 420 ; 8 ; Stück=60
Berliner | Doughnut (jam) | Berlina ; 350 ; 6 ; Stück=80
Donut mit Glasur | Glazed doughnut | Dónut glaseado ; 420 ; 5 ; Stück=60
Muffin (Bäckerei) | Bakery muffin | Magdalena de panadería ; 400 ; 5.5 ; Stück=110
Cookie (Bäckerei) | Bakery cookie | Galleta de panadería ; 470 ; 5 ; Stück=60
Käsekuchen (Stück) | Cheesecake (slice) | Tarta de queso (porción) ; 260 ; 7 ; Stück=120
Topfenstrudel | Quark strudel | Strudel de requesón ; 260 ; 8 ; Stück=150
Sachertorte | Sachertorte | Tarta Sacher ; 380 ; 5 ; Stück=100
Linzer Torte | Linzer torte | Tarta Linzer ; 420 ; 6 ; Stück=90
Zitronenkuchen | Lemon cake | Bizcocho de limón ; 390 ; 5 ; Stück=70
Rührkuchen | Pound cake | Bizcocho ; 400 ; 6 ; Stück=70
Obstkuchen (Blech) | Fruit tray bake | Tarta de fruta ; 220 ; 3.5 ; Stück=120
Donauwelle | Donauwelle cake | Pastel Donauwelle ; 360 ; 5 ; Stück=110
Krapfen (Faschingskrapfen) | Carnival doughnut | Krapfen de carnaval ; 340 ; 6 ; Stück=75
Palatschinke (pur) | Austrian crêpe (plain) | Palatschinke ; 200 ; 7 ; Stück=70
Palatschinke mit Marmelade | Austrian crêpe with jam | Palatschinke con mermelada ; 250 ; 6 ; Stück=90
Waffel (Belgisch, Bäckerei) | Bakery waffle | Gofre de panadería ; 400 ; 6 ; Stück=100
Mestemacher Vollkornbrot | Mestemacher wholegrain bread | Pan integral Mestemacher ; 200 ; 6 ; Scheibe=50
Harry Vollkorn Toast | Harry wholegrain toast | Pan de molde integral Harry ; 240 ; 9 ; Scheibe=27
Harry Sandwich | Harry sandwich bread | Pan de sándwich Harry ; 260 ; 8 ; Scheibe=33
Lieken Urkorn | Lieken Urkorn bread | Pan Lieken Urkorn ; 230 ; 7 ; Scheibe=50
Golden Toast Buttertoast | Golden Toast butter toast | Pan de molde Golden Toast ; 270 ; 8 ; Scheibe=25
Mission Wraps Original | Mission wraps original | Wraps Mission original ; 300 ; 8 ; Stück=62
Mission Wraps Vollkorn | Mission wholegrain wraps | Wraps integrales Mission ; 290 ; 9 ; Stück=62
Bimbo Pan Integral | Bimbo wholemeal bread | Pan integral Bimbo ; 245 ; 10 ; Scheibe=27
Burgerbrötchen Brioche | Brioche burger bun | Pan de hamburguesa brioche ; 310 ; 9 ; Stück=60
American Sandwich (Harry) | American sandwich bread | Pan americano ; 260 ; 8 ; Scheibe=30
Brezen vom Vortag (für Knödel) | Day-old pretzels (for dumplings) | Pretzels del día anterior (para albóndigas) ; 280 ; 8 ; Stück=85
Knödelbrot | Bread cubes for dumplings | Pan para albóndigas ; 270 ; 9 ; Portion=250

@Imbiss & Fast Food | Takeaway & fast food | Comida rápida ; 🍔
Döner Kebab | Doner kebab | Kebab ; 180 ; 10 ; Stück=400 | halber=200
Dürüm | Dürüm wrap | Dürüm ; 190 ; 10 ; Stück=400
Lahmacun | Lahmacun | Lahmacun ; 200 ; 8 ; Stück=250
Falafel-Tasche | Falafel pita | Pita de falafel ; 200 ; 7 ; Stück=350
Falafel (einzeln) | Falafel (single) | Falafel (unidad) ; 330 ; 13 ; Stück=20
Currywurst mit Soße | Currywurst | Currywurst ; 240 ; 10 ; Portion=250
Currywurst mit Pommes | Currywurst with fries | Currywurst con patatas ; 220 ; 6 ; Portion=450
Pommes frites | French fries | Patatas fritas ; 290 ; 3.4 ; kleine Portion=100 | Portion=150 | große Portion=200
Pommes rot-weiß | Fries with ketchup & mayo | Patatas con kétchup y mayonesa ; 330 ; 3 ; Portion=200
Bratwurst | Bratwurst | Salchicha bratwurst ; 300 ; 13 ; Stück=120
Bratwurst im Brötchen | Bratwurst in a roll | Bratwurst en panecillo ; 290 ; 12 ; Stück=180
Hamburger | Hamburger | Hamburguesa ; 250 ; 12 ; Stück=110
Cheeseburger | Cheeseburger | Hamburguesa con queso ; 260 ; 13 ; Stück=120
Big Mac (McDonald's) | Big Mac (McDonald's) | Big Mac (McDonald's) ; 230 ; 12 ; Stück=215
McChicken (McDonald's) | McChicken (McDonald's) | McChicken (McDonald's) ; 240 ; 10 ; Stück=170
McFlurry (McDonald's) | McFlurry (McDonald's) | McFlurry (McDonald's) ; 190 ; 4 ; Becher=180
Whopper (Burger King) | Whopper (Burger King) | Whopper (Burger King) ; 220 ; 10 ; Stück=280
Chicken Nuggets | Chicken nuggets | Nuggets de pollo ; 260 ; 15 ; Stück=17 | 6er=100 | 9er=150
Chicken Burger | Chicken burger | Hamburguesa de pollo ; 240 ; 12 ; Stück=180
KFC Hähnchenteil | KFC chicken piece | Pieza de pollo KFC ; 250 ; 20 ; Stück=120
Hot Dog | Hot dog | Perrito caliente ; 250 ; 10 ; Stück=150
Pizza Margherita | Pizza margherita | Pizza margarita ; 230 ; 10 ; ganze Pizza=450 | Stück (1/8)=56 | Stück (1/6)=75
Pizza Salami | Pepperoni / salami pizza | Pizza de salami ; 260 ; 11 ; ganze Pizza=470 | Stück (1/8)=59 | Stück (1/6)=78
Pizza Tonno | Tuna pizza | Pizza de atún ; 240 ; 12 ; ganze Pizza=480 | Stück (1/8)=60
Pizza Funghi | Mushroom pizza | Pizza de champiñones ; 220 ; 10 ; ganze Pizza=470 | Stück (1/8)=59
Pizza Hawaii | Hawaiian pizza | Pizza hawaiana ; 230 ; 11 ; ganze Pizza=480 | Stück (1/8)=60
Pizza Quattro Formaggi | Four cheese pizza | Pizza cuatro quesos ; 280 ; 13 ; ganze Pizza=450 | Stück (1/8)=56
Pizza Spinat | Spinach pizza | Pizza de espinacas ; 210 ; 9 ; ganze Pizza=480 | Stück (1/8)=60
Tiefkühlpizza | Frozen pizza | Pizza congelada ; 230 ; 9 ; ganze Pizza=350 | halbe=175
Ristorante Pizza (Dr. Oetker) | Ristorante pizza (Dr. Oetker) | Pizza Ristorante (Dr. Oetker) ; 240 ; 10 ; ganze Pizza=330 | halbe=165
Steinofen Pizza (Wagner) | Stone-baked pizza (Wagner) | Pizza Steinofen (Wagner) ; 230 ; 9 ; ganze Pizza=350 | halbe=175
Flammkuchen | Tarte flambée | Tarta flambeada ; 250 ; 8 ; ganzer=350 | Stück=60
Calzone | Calzone | Calzone ; 240 ; 11 ; Stück=400
Frühlingsrolle | Spring roll | Rollito de primavera ; 220 ; 5 ; Stück=60 | Mini=20
Sushi Maki | Sushi maki | Sushi maki ; 150 ; 5 ; Stück=25
Sushi Nigiri | Sushi nigiri | Sushi nigiri ; 160 ; 7 ; Stück=35
Sushi Inside-Out Roll | Sushi inside-out roll | Uramaki ; 170 ; 5 ; Stück=30
Gebratene Nudeln | Fried noodles | Fideos salteados ; 160 ; 6 ; Portion=400
Gebratener Reis | Fried rice | Arroz frito ; 170 ; 5 ; Portion=400
Chicken Curry mit Reis | Chicken curry with rice | Curry de pollo con arroz ; 150 ; 8 ; Portion=450
Pad Thai | Pad thai | Pad thai ; 170 ; 7 ; Portion=400
Knusprige Ente mit Reis | Crispy duck with rice | Pato crujiente con arroz ; 190 ; 9 ; Portion=450
Burrito | Burrito | Burrito ; 200 ; 9 ; Stück=300
Taco | Taco | Taco ; 220 ; 9 ; Stück=90
Nachos mit Käse | Nachos with cheese | Nachos con queso ; 330 ; 8 ; Portion=150
Wrap mit Hähnchen | Chicken wrap | Wrap de pollo ; 200 ; 11 ; Stück=250
Poke Bowl | Poke bowl | Poke bowl ; 140 ; 8 ; Schale=400
Ramen | Ramen | Ramen ; 90 ; 5 ; Schale=600
Gyros-Teller mit Pommes | Gyros plate with fries | Plato de gyros con patatas ; 230 ; 12 ; Portion=500
Gyros Pita | Gyros pita | Pita de gyros ; 220 ; 11 ; Stück=350
Schnitzel mit Pommes | Schnitzel with fries | Escalope con patatas ; 240 ; 12 ; Portion=450
Fischbrötchen | Fish sandwich | Bocadillo de pescado ; 220 ; 11 ; Stück=150
Backfisch | Battered fish | Pescado rebozado ; 230 ; 12 ; Portion=200
Fish & Chips | Fish & chips | Fish & chips ; 230 ; 9 ; Portion=400
Kartoffelpuffer / Reibekuchen | Potato pancakes | Tortitas de patata ; 200 ; 3 ; Stück=80
Crêpe mit Nutella | Crêpe with Nutella | Crep de Nutella ; 300 ; 6 ; Stück=150
Bagel (belegt) | Bagel (filled) | Bagel relleno ; 250 ; 11 ; Stück=180
Subway Sandwich (15 cm) | Subway sandwich (6 inch) | Sándwich Subway (15 cm) ; 200 ; 10 ; Stück=230
Bocadillo de jamón | Serrano ham sandwich | Bocadillo de jamón ; 250 ; 12 ; Stück=200
Bocadillo de calamares | Squid sandwich | Bocadillo de calamares ; 260 ; 10 ; Stück=250
Empanada | Empanada | Empanada ; 280 ; 9 ; Stück=120
Bitterballen | Bitterballen | Bitterballen ; 270 ; 8 ; Stück=25 | Portion (6)=150
Kroket (NL) | Dutch croquette | Croqueta holandesa ; 245 ; 7 ; Stück=70
Broodje kroket | Croquette sandwich | Bocadillo de croqueta ; 260 ; 8 ; Stück=140
Frikandel | Frikandel | Frikandel ; 270 ; 12 ; Stück=70
Frikandel speciaal | Frikandel speciaal | Frikandel speciaal ; 250 ; 9 ; Stück=110
Kaassoufflé | Cheese soufflé snack | Kaassoufflé ; 300 ; 9 ; Stück=80
Patat met mayo | Fries with mayo | Patatas con mayonesa ; 310 ; 3.5 ; Portion=200
Kibbeling | Kibbeling | Kibbeling ; 220 ; 14 ; Portion=150
Kapsalon | Kapsalon | Kapsalon ; 230 ; 11 ; Portion=600
Loempia | Loempia (spring roll) | Rollito de primavera grande ; 210 ; 6 ; Stück=150
Matjesbrötchen | Herring roll | Bocadillo de arenque ; 250 ; 11 ; Stück=150
Hollandse Nieuwe (Matjes) | Dutch new herring | Arenque holandés ; 220 ; 16 ; Stück=70
Pommes Spezial (Mayo, Ketchup, Zwiebeln) | Fries special | Patatas especiales ; 300 ; 3.5 ; Portion=220
Chicken Wings | Chicken wings | Alitas de pollo ; 260 ; 20 ; Stück=35 | Portion (6)=210
Spareribs | Spare ribs | Costillas ; 280 ; 19 ; Portion=300
Pulled-Pork-Burger | Pulled pork burger | Hamburguesa de cerdo desmechado ; 250 ; 13 ; Stück=250
Chicken-Wrap (McDonald's) | Chicken wrap (McDonald's) | Wrap de pollo (McDonald's) ; 220 ; 11 ; Stück=200
Hamburger (McDonald's) | Hamburger (McDonald's) | Hamburguesa (McDonald's) ; 250 ; 12 ; Stück=105
Cheeseburger (McDonald's) | Cheeseburger (McDonald's) | Cheeseburger (McDonald's) ; 255 ; 13 ; Stück=118
Pommes (McDonald's, mittel) | Fries (McDonald's, medium) | Patatas (McDonald's, medianas) ; 300 ; 3.5 ; Portion=114
Chicken McNuggets | Chicken McNuggets | Chicken McNuggets ; 250 ; 14 ; Stück=17 | 6er=102 | 9er=153
Royal TS (McDonald's) | Quarter pounder (McDonald's) | Cuarto de libra (McDonald's) ; 240 ; 14 ; Stück=210
Long Chicken (Burger King) | Long Chicken (Burger King) | Long Chicken (Burger King) ; 280 ; 10 ; Stück=210
King Nuggets | King Nuggets | King Nuggets ; 260 ; 14 ; Stück=18
Döner-Box | Kebab box | Caja de kebab ; 220 ; 10 ; Box=450
Döner-Teller | Kebab plate | Plato de kebab ; 180 ; 10 ; Teller=550
Köfte | Köfte | Köfte ; 260 ; 16 ; Stück=40
Börek mit Käse | Cheese börek | Börek de queso ; 320 ; 10 ; Stück=150
Börek mit Spinat | Spinach börek | Börek de espinacas ; 270 ; 8 ; Stück=150
Pide mit Käse | Cheese pide | Pide de queso ; 270 ; 11 ; Stück=300
Gözleme | Gözleme | Gözleme ; 250 ; 9 ; Stück=250
Samosa | Samosa | Samosa ; 290 ; 5 ; Stück=60
Onion Rings | Onion rings | Aros de cebolla ; 330 ; 4.5 ; Portion=100
Mozzarella-Sticks | Mozzarella sticks | Palitos de mozzarella ; 310 ; 13 ; Stück=25
Corn Dog | Corn dog | Perrito de maíz ; 260 ; 9 ; Stück=100
Quesadilla | Quesadilla | Quesadilla ; 280 ; 12 ; Stück=180
Enchiladas | Enchiladas | Enchiladas ; 170 ; 9 ; Stück=150
Fajitas (Hähnchen) | Chicken fajitas | Fajitas de pollo ; 160 ; 11 ; Stück=180
Bao Bun | Bao bun | Bao ; 230 ; 8 ; Stück=80
Gyoza | Gyoza | Gyozas ; 210 ; 8 ; Stück=25 | Portion (6)=150
Dim Sum | Dim sum | Dim sum ; 180 ; 8 ; Stück=25
Bibimbap | Bibimbap | Bibimbap ; 140 ; 6 ; Schale=450
Butter Chicken mit Reis | Butter chicken with rice | Pollo a la mantequilla con arroz ; 160 ; 8 ; Portion=450
Tikka Masala mit Reis | Tikka masala with rice | Tikka masala con arroz ; 155 ; 8 ; Portion=450
Pho | Pho | Pho ; 60 ; 4 ; Schale=600
Banh Mi | Banh mi | Banh mi ; 230 ; 10 ; Stück=250
Sushi-Box (Supermarkt) | Sushi box (supermarket) | Caja de sushi (supermercado) ; 150 ; 5 ; Box=250
Onigiri | Onigiri | Onigiri ; 175 ; 4 ; Stück=110
Kebab-Pizza | Kebab pizza | Pizza kebab ; 250 ; 11 ; ganze Pizza=550
Pizzabrötchen | Pizza roll | Panecillo de pizza ; 290 ; 10 ; Stück=80
Baguette-Pizza (TK) | Frozen baguette pizza | Baguette pizza congelada ; 240 ; 9 ; Stück=125
Big Pizza (Wagner) | Big Pizza (Wagner) | Big Pizza (Wagner) ; 235 ; 10 ; ganze Pizza=420 | Hälfte=210
Pizza Speciale (Dr. Oetker) | Pizza Speciale (Dr. Oetker) | Pizza Speciale (Dr. Oetker) ; 230 ; 9 ; ganze Pizza=330
Fischfrikadelle | Fish cake | Croqueta de pescado ; 200 ; 11 ; Stück=80
Subway Chicken Teriyaki (15 cm) | Subway chicken teriyaki (6 inch) | Subway pollo teriyaki (15 cm) ; 160 ; 11 ; Stück=230
Subway Italian B.M.T. (15 cm) | Subway Italian B.M.T. (6 inch) | Subway Italian B.M.T. (15 cm) ; 190 ; 10 ; Stück=230
Subway Veggie Delite (15 cm) | Subway Veggie Delite (6 inch) | Subway Veggie Delite (15 cm) ; 120 ; 5 ; Stück=170
KFC Hot Wings | KFC hot wings | KFC alitas picantes ; 290 ; 20 ; Stück=30
KFC Original Recipe (Stück) | KFC Original Recipe (piece) | KFC receta original (pieza) ; 250 ; 20 ; Stück=110
KFC Zinger Burger | KFC Zinger burger | KFC Zinger burger ; 250 ; 13 ; Stück=200
Burger King Whopper | Burger King Whopper | Burger King Whopper ; 230 ; 10 ; Stück=280
Burger King Chili Cheese Nuggets | Burger King chilli cheese nuggets | Burger King nuggets de chili y queso ; 290 ; 8 ; Stück=18
McDonald's Big Mac | McDonald's Big Mac | McDonald's Big Mac ; 250 ; 12 ; Stück=215
McDonald's McChicken | McDonald's McChicken | McDonald's McChicken ; 245 ; 10 ; Stück=170
McDonald's McFlurry Oreo | McDonald's McFlurry Oreo | McDonald's McFlurry Oreo ; 180 ; 4 ; Becher=185
McDonald's Apfeltasche | McDonald's apple pie | Tarta de manzana McDonald's ; 300 ; 3 ; Stück=80
Nordsee Backfisch-Baguette | Nordsee fried fish baguette | Baguette de pescado Nordsee ; 240 ; 10 ; Stück=220
Nordsee Lachsbrötchen | Nordsee salmon roll | Panecillo de salmón Nordsee ; 250 ; 11 ; Stück=130
Vapiano Pasta Bolognese | Vapiano pasta bolognese | Vapiano pasta boloñesa ; 170 ; 8 ; Teller=450
Domino's Pizza Margherita (Stück) | Domino's Margherita (slice) | Domino's margarita (porción) ; 250 ; 11 ; Stück=80
Pizza Hut Pan Pizza (Stück) | Pizza Hut pan pizza (slice) | Pizza Hut pan (porción) ; 270 ; 11 ; Stück=100
Dürüm Döner | Dürüm kebab | Dürüm kebab ; 210 ; 10 ; Stück=380
Falafel-Teller | Falafel plate | Plato de falafel ; 170 ; 6 ; Teller=450
Bosna | Bosna sausage roll | Bosna ; 260 ; 10 ; Stück=220
Käsekrainer | Cheese sausage | Salchicha con queso ; 300 ; 12 ; Stück=150
Würstelstand Bratwurst mit Senf & Brot | Sausage stand bratwurst with bread | Salchicha con mostaza y pan ; 280 ; 10 ; Portion=250
Hot Dog (dänisch) | Danish hot dog | Perrito danés ; 250 ; 9 ; Stück=180
Langos | Lángos | Lángos ; 330 ; 7 ; Stück=200
Burger King Whopper Jr. | Burger King Whopper Jr. | Burger King Whopper Jr. ; 245 ; 11 ; Stück=140
Burger King Big King | Burger King Big King | Burger King Big King ; 255 ; 14 ; Stück=200
Burger King Long Chicken | Burger King Long Chicken | Burger King Long Chicken ; 270 ; 10 ; Stück=215
Burger King Crispy Chicken | Burger King Crispy Chicken | Burger King Crispy Chicken ; 250 ; 11 ; Stück=200
Burger King Plant-based Whopper | Burger King Plant-based Whopper | Burger King Whopper vegetal ; 220 ; 8 ; Stück=270
Burger King Cheeseburger | Burger King cheeseburger | Burger King cheeseburger ; 265 ; 14 ; Stück=120
Burger King Chili Cheese Nuggets (6) | Burger King chili cheese nuggets (6) | Burger King chili cheese nuggets (6) ; 290 ; 9 ; Portion=100
Burger King King Nuggets (6) | Burger King nuggets (6) | Burger King nuggets (6) ; 250 ; 15 ; Portion=100
Burger King Onion Rings (mittel) | Burger King onion rings (medium) | Burger King aros de cebolla (mediano) ; 310 ; 4 ; Portion=100
Burger King Pommes (mittel) | Burger King fries (medium) | Burger King patatas (medianas) ; 290 ; 3.5 ; Portion=115
Burger King Sundae Schoko | Burger King chocolate sundae | Burger King sundae chocolate ; 170 ; 3.5 ; Becher=150
KFC Original Recipe (1 Stück) | KFC Original Recipe (1 piece) | KFC Original Recipe (1 pieza) ; 250 ; 20 ; Stück=130
KFC Hot Wings (5) | KFC Hot Wings (5) | KFC Hot Wings (5) ; 290 ; 20 ; Portion=125
KFC Crispy Strips (3) | KFC Crispy Strips (3) | KFC Crispy Strips (3) ; 260 ; 18 ; Portion=120
KFC Popcorn Chicken (mittel) | KFC popcorn chicken (medium) | KFC palomitas de pollo (mediano) ; 290 ; 17 ; Portion=120
KFC Twister | KFC Twister | KFC Twister ; 230 ; 10 ; Stück=220
KFC Bucket (8 Hot Wings + 4 Strips) | KFC bucket | KFC cubo ; 270 ; 19 ; Portion=200
KFC Coleslaw | KFC coleslaw | KFC ensalada de col ; 140 ; 1 ; Becher=130
KFC Pommes (mittel) | KFC fries (medium) | KFC patatas (medianas) ; 280 ; 3.5 ; Portion=115
Nordsee Matjesbrötchen | Nordsee matjes roll | Bocadillo de arenque matjes Nordsee ; 250 ; 10 ; Stück=140
Nordsee Krabbenbrötchen | Nordsee shrimp roll | Bocadillo de gambas Nordsee ; 220 ; 11 ; Stück=140
Nordsee Fish & Chips | Nordsee fish & chips | Fish & chips Nordsee ; 220 ; 9 ; Portion=380
Nordsee Lachs-Bowl | Nordsee salmon bowl | Bowl de salmón Nordsee ; 150 ; 8 ; Bowl=400
Nordsee Backfisch mit Kartoffelsalat | Nordsee battered fish with potato salad | Pescado rebozado con ensalada de patata Nordsee ; 190 ; 7 ; Portion=400
Nordsee Calamari | Nordsee calamari | Calamares Nordsee ; 250 ; 10 ; Portion=150
McDonald's McRib | McDonald's McRib | McDonald's McRib ; 250 ; 11 ; Stück=210
McDonald's Veggie Burger | McDonald's veggie burger | McDonald's hamburguesa veggie ; 230 ; 9 ; Stück=190
McDonald's Chicken McNuggets (9) | McDonald's Chicken McNuggets (9) | McDonald's Chicken McNuggets (9) ; 250 ; 15 ; Portion=160
McDonald's Big Tasty Bacon | McDonald's Big Tasty Bacon | McDonald's Big Tasty Bacon ; 260 ; 13 ; Stück=330
McDonald's Wrap Chicken | McDonald's chicken wrap | McDonald's wrap de pollo ; 230 ; 11 ; Stück=240
Subway Cookie | Subway cookie | Galleta Subway ; 440 ; 5 ; Stück=45
Vapiano Pizza Margherita | Vapiano pizza margherita | Vapiano pizza margarita ; 230 ; 10 ; ganze Pizza=420
L'Osteria Pizza Margherita (groß) | L'Osteria pizza margherita (large) | L'Osteria pizza margarita (grande) ; 230 ; 10 ; ganze Pizza=600
Pizza Hut Pan Pizza Margherita (Stück) | Pizza Hut pan pizza margherita (slice) | Pizza Hut pan pizza margarita (porción) ; 260 ; 11 ; Stück=110
Domino's Pizza Salami (Stück) | Domino's salami pizza (slice) | Domino's pizza salami (porción) ; 270 ; 11 ; Stück=100
dean&david Chicken Caesar Bowl | dean&david chicken Caesar bowl | dean&david bowl César de pollo ; 140 ; 10 ; Bowl=380
dean&david Thai Curry Bowl | dean&david Thai curry bowl | dean&david bowl de curry tailandés ; 130 ; 5 ; Bowl=420
Starbucks Caffè Latte (Tall, Vollmilch) | Starbucks caffè latte (tall, whole milk) | Starbucks caffè latte (tall, leche entera) ; 55 ; 3 ; Becher=350
Starbucks Caramel Macchiato (Tall) | Starbucks caramel macchiato (tall) | Starbucks caramel macchiato (tall) ; 55 ; 2.5 ; Becher=350
Starbucks Pumpkin Spice Latte (Tall) | Starbucks pumpkin spice latte (tall) | Starbucks pumpkin spice latte (tall) ; 75 ; 2.5 ; Becher=350
Starbucks Blueberry Muffin | Starbucks blueberry muffin | Starbucks muffin de arándanos ; 380 ; 5 ; Stück=120
Dunkin' Donut Glazed | Dunkin' glazed donut | Dunkin' donut glaseado ; 400 ; 5 ; Stück=60
Kamps Laugenbrezel | Kamps pretzel | Kamps pretzel ; 280 ; 8 ; Stück=85
Backwerk Käse-Laugenstange | Backwerk cheese pretzel stick | Backwerk barrita de pretzel con queso ; 300 ; 11 ; Stück=100
Ditsch Pizzaprezel | Ditsch pizza pretzel | Ditsch pretzel pizza ; 280 ; 10 ; Stück=140
Peter Pane Burger Classic | Peter Pane classic burger | Peter Pane hamburguesa clásica ; 250 ; 13 ; Stück=300
Hans im Glück Burger | Hans im Glück burger | Hans im Glück hamburguesa ; 240 ; 12 ; Stück=330
Five Guys Cheeseburger | Five Guys cheeseburger | Five Guys cheeseburger ; 270 ; 15 ; Stück=300
Five Guys Pommes (klein) | Five Guys fries (small) | Five Guys patatas (pequeñas) ; 300 ; 4 ; Portion=230
Döner Kebab im Brot (Imbiss) | Döner kebab in bread (takeaway) | Döner kebab en pan ; 215 ; 12 ; Stück=400
Döner-Box mit Pommes | Döner box with chips | Caja de döner con patatas ; 230 ; 11 ; Box=450

@Gerichte | Dishes | Platos ; 🍝
Käsespätzle | Cheese spaetzle | Spätzle con queso ; 230 ; 10 ; Portion=350 | kleine Portion=250
Spätzle | Spaetzle | Spätzle ; 150 ; 5 ; Portion=200
Käsefondue | Cheese fondue | Fondue de queso ; 260 ; 15 ; Portion=250 | Portion mit Brot=400
Raclette (Portion) | Raclette (serving) | Raclette (ración) ; 230 ; 11 ; Portion=450
Schupfnudeln mit Sauerkraut | Potato noodles with sauerkraut | Schupfnudeln con chucrut ; 150 ; 4 ; Portion=350
Maultaschen | Maultaschen (filled pasta) | Maultaschen ; 190 ; 9 ; Stück=50 | Portion=250
Lasagne | Lasagne | Lasaña ; 150 ; 8 ; Portion=350
Spaghetti Bolognese | Spaghetti bolognese | Espaguetis a la boloñesa ; 150 ; 7 ; Portion=450
Spaghetti Carbonara | Spaghetti carbonara | Espaguetis carbonara ; 200 ; 8 ; Portion=400
Nudeln mit Tomatensoße | Pasta with tomato sauce | Pasta con tomate ; 130 ; 4.5 ; Portion=400
Mac & Cheese | Mac & cheese | Macarrones con queso ; 180 ; 7 ; Portion=350
Pesto-Nudeln | Pesto pasta | Pasta al pesto ; 220 ; 7 ; Portion=350
Gnocchi mit Soße | Gnocchi with sauce | Ñoquis con salsa ; 160 ; 4 ; Portion=350
Risotto | Risotto | Risotto ; 140 ; 4 ; Portion=350
Chili con Carne | Chili con carne | Chili con carne ; 110 ; 8 ; Portion=400
Gulasch | Goulash | Gulash ; 130 ; 14 ; Portion=300
Rinderroulade | Beef roulade | Rollito de ternera ; 170 ; 18 ; Stück=200
Sauerbraten | Sauerbraten (pot roast) | Sauerbraten ; 170 ; 20 ; Portion=200
Schweinebraten | Roast pork | Asado de cerdo ; 210 ; 25 ; Portion=200
Schäufele / Schweinshaxe | Pork knuckle | Codillo de cerdo ; 260 ; 20 ; Portion=350
Königsberger Klopse | Königsberger meatballs | Albóndigas Königsberg ; 170 ; 11 ; Portion=350
Hühnerfrikassee mit Reis | Chicken fricassee with rice | Fricasé de pollo con arroz ; 140 ; 9 ; Portion=400
Kohlrouladen | Cabbage rolls | Rollos de col ; 120 ; 7 ; Stück=200
Grünkohl mit Pinkel | Kale with sausage | Col rizada con salchicha ; 160 ; 8 ; Portion=400
Labskaus | Labskaus | Labskaus ; 130 ; 7 ; Portion=400
Senfeier mit Kartoffeln | Eggs in mustard sauce with potatoes | Huevos en salsa de mostaza ; 120 ; 6 ; Portion=400
Dampfnudeln | Steamed yeast dumplings | Dampfnudeln ; 250 ; 6 ; Stück=150
Schnitzel (paniert) | Schnitzel (breaded) | Escalope empanado ; 230 ; 22 ; Stück=180
Cordon bleu | Cordon bleu | Cordon bleu ; 250 ; 20 ; Stück=200
Frikadelle / Bulette | Meat patty | Hamburguesa casera / albóndiga grande ; 240 ; 15 ; Stück=100
Hähnchenbrust (gebraten) | Chicken breast (fried) | Pechuga de pollo ; 140 ; 30 ; Stück=150
Hähnchenschenkel | Chicken leg | Muslo de pollo ; 210 ; 19 ; Stück=200
Halbes Hähnchen | Half roast chicken | Medio pollo asado ; 220 ; 20 ; Portion=400
Kartoffelsalat (Mayo) | Potato salad (mayo) | Ensalada de patata (mayonesa) ; 160 ; 2 ; Portion=200
Kartoffelsalat (Essig & Öl) | Potato salad (vinaigrette) | Ensalada de patata (vinagreta) ; 110 ; 2 ; Portion=200
Nudelsalat | Pasta salad | Ensalada de pasta ; 200 ; 5 ; Portion=200
Bratkartoffeln | Fried potatoes | Patatas salteadas ; 150 ; 3 ; Portion=250
Kartoffelpüree | Mashed potatoes | Puré de patatas ; 90 ; 2 ; Portion=200
Pellkartoffeln mit Quark | Jacket potatoes with quark | Patatas con requesón ; 100 ; 6 ; Portion=400
Ofenkartoffel mit Kräuterquark | Baked potato with herb quark | Patata asada con requesón ; 110 ; 4 ; Stück=350
Rührei | Scrambled eggs | Huevos revueltos ; 150 ; 10 ; Portion (2 Eier)=120
Spiegelei | Fried egg | Huevo frito ; 190 ; 13 ; Stück=55
Omelett | Omelette | Tortilla francesa ; 160 ; 11 ; Portion=150
Gekochtes Ei | Boiled egg | Huevo cocido ; 145 ; 12.5 ; Stück=60
Pfannkuchen | Pancake | Tortita ; 190 ; 7 ; Stück=120
Kaiserschmarrn | Kaiserschmarrn | Kaiserschmarrn ; 220 ; 7 ; Portion=300
Germknödel | Yeast dumpling | Germknödel ; 260 ; 7 ; Stück=200
Linsensuppe | Lentil soup | Sopa de lentejas ; 90 ; 6 ; Teller=350
Erbsensuppe | Pea soup | Sopa de guisantes ; 90 ; 6 ; Teller=350
Tomatensuppe | Tomato soup | Sopa de tomate ; 50 ; 1.2 ; Teller=300
Kartoffelsuppe | Potato soup | Sopa de patata ; 70 ; 2 ; Teller=350
Hühnersuppe | Chicken soup | Sopa de pollo ; 40 ; 3 ; Teller=350
Gemüsesuppe | Vegetable soup | Sopa de verduras ; 40 ; 1.5 ; Teller=350
Kürbissuppe | Pumpkin soup | Crema de calabaza ; 60 ; 1.2 ; Teller=300
Gulaschsuppe | Goulash soup | Sopa de gulash ; 80 ; 6 ; Teller=350
Fischstäbchen | Fish fingers | Varitas de pescado ; 200 ; 12 ; Stück=28
Fischstäbchen (Iglo) | Fish fingers (Iglo) | Varitas de pescado (Iglo) ; 200 ; 13 ; Stück=30
Lachsfilet | Salmon fillet | Filete de salmón ; 200 ; 20 ; Stück=125
Caesar Salad | Caesar salad | Ensalada César ; 150 ; 8 ; Schale=300
Griechischer Salat | Greek salad | Ensalada griega ; 110 ; 4 ; Schale=300
Tomate-Mozzarella | Tomato mozzarella | Tomate con mozzarella ; 160 ; 9 ; Portion=200
Couscous-Salat | Couscous salad | Ensalada de cuscús ; 150 ; 4 ; Portion=200
Milchreis | Rice pudding | Arroz con leche ; 120 ; 3.5 ; Portion=250
Grießbrei | Semolina pudding | Gachas de sémola ; 110 ; 4 ; Portion=250
Porridge mit Milch | Porridge with milk | Gachas de avena con leche ; 100 ; 4 ; Schale=300
Müsli mit Milch | Muesli with milk | Muesli con leche ; 140 ; 5 ; Schale=250
Overnight Oats | Overnight oats | Overnight oats ; 140 ; 6 ; Glas=300
Rote Grütze | Red berry pudding | Compota de frutos rojos ; 100 ; 0.5 ; Portion=150
Shakshuka | Shakshuka | Shakshuka ; 110 ; 6 ; Portion=300
Curry (Gemüse) mit Reis | Vegetable curry with rice | Curry de verduras con arroz ; 130 ; 3.5 ; Portion=450
Paella | Paella | Paella ; 150 ; 8 ; Portion=350 | Teller=450
Paella de marisco | Seafood paella | Paella de marisco ; 140 ; 9 ; Portion=350
Tortilla de patatas | Spanish omelette | Tortilla de patatas ; 150 ; 6 ; Stück (Pincho)=120 | Portion=200
Gazpacho | Gazpacho | Gazpacho ; 40 ; 1 ; Glas=250 | Schale=300
Salmorejo | Salmorejo | Salmorejo ; 110 ; 3 ; Schale=250
Patatas bravas | Patatas bravas | Patatas bravas ; 200 ; 2.5 ; Portion=200
Croquetas (Kroketten, spanisch) | Croquetas (Spanish croquettes) | Croquetas ; 230 ; 7 ; Stück=30
Albóndigas (Hackbällchen in Soße) | Albóndigas (meatballs in sauce) | Albóndigas ; 180 ; 11 ; Portion=250 | Stück=30
Pulpo a la gallega | Galician octopus | Pulpo a la gallega ; 130 ; 17 ; Portion=200
Gambas al ajillo | Garlic prawns | Gambas al ajillo ; 190 ; 16 ; Portion=150
Calamares fritos | Fried squid | Calamares a la romana ; 210 ; 13 ; Portion=150
Lentejas (Linseneintopf) | Spanish lentil stew | Lentejas ; 110 ; 7 ; Teller=350
Fabada asturiana | Fabada (bean stew) | Fabada asturiana ; 160 ; 9 ; Teller=350
Cocido madrileño | Cocido (chickpea stew) | Cocido madrileño ; 140 ; 10 ; Teller=450
Pisto | Pisto (ratatouille) | Pisto ; 70 ; 1.5 ; Portion=250
Ensaladilla rusa | Russian salad | Ensaladilla rusa ; 170 ; 3 ; Portion=200
Crema catalana | Crema catalana | Crema catalana ; 170 ; 4 ; Portion=120
Flan | Caramel flan | Flan ; 130 ; 4 ; Stück=100
Tarta de Santiago | Almond cake (Santiago) | Tarta de Santiago ; 420 ; 10 ; Stück=80
Arroz a la cubana | Arroz a la cubana | Arroz a la cubana ; 170 ; 5 ; Portion=350
Huevos rotos | Huevos rotos | Huevos rotos ; 210 ; 7 ; Portion=300
Pimientos rellenos | Stuffed peppers | Pimientos rellenos ; 110 ; 6 ; Stück=200
Stamppot (Grünkohl mit Wurst) | Stamppot with sausage | Stamppot con salchicha ; 130 ; 5.5 ; Teller=450
Hutspot | Hutspot | Hutspot ; 95 ; 2 ; Teller=400
Erwtensoep | Dutch pea soup | Sopa de guisantes holandesa ; 110 ; 6.5 ; Teller=350
Bami Goreng | Bami goreng | Bami goreng ; 160 ; 7 ; Teller=400
Nasi Goreng | Nasi goreng | Nasi goreng ; 165 ; 6 ; Teller=400
Saté-Spieße mit Erdnusssoße | Satay skewers with peanut sauce | Brochetas satay ; 240 ; 17 ; Stück=50 | Portion=200
Moussaka | Moussaka | Musaca ; 140 ; 7 ; Portion=350
Gefüllte Paprika | Stuffed peppers | Pimientos rellenos de carne ; 120 ; 7 ; Stück=250
Hackbraten | Meatloaf | Pastel de carne ; 220 ; 14 ; Scheibe=150
Geschnetzeltes mit Reis | Sliced meat in cream sauce with rice | Carne en salsa con arroz ; 150 ; 9 ; Teller=450
Zürcher Geschnetzeltes | Zurich-style veal | Ternera a la zuriquesa ; 170 ; 12 ; Portion=250
Rösti mit Spiegelei | Rösti with fried egg | Rösti con huevo ; 170 ; 6 ; Teller=350
Ofenkäse | Baked cheese | Queso al horno ; 320 ; 19 ; Stück=125
Wraps mit Gemüse | Veggie wraps | Wraps de verduras ; 170 ; 5 ; Stück=220
Couscous mit Gemüse | Couscous with vegetables | Cuscús con verduras ; 130 ; 4 ; Teller=400
Gemüse-Lasagne | Vegetable lasagne | Lasaña de verduras ; 120 ; 5 ; Portion=350
Spinat-Lasagne | Spinach lasagne | Lasaña de espinacas ; 130 ; 6 ; Portion=350
Penne all'arrabbiata | Penne arrabbiata | Penne all'arrabbiata ; 140 ; 4.5 ; Teller=400
Spaghetti aglio e olio | Spaghetti aglio e olio | Espaguetis aglio e olio ; 200 ; 5 ; Teller=350
Tortellini mit Sahnesoße | Tortellini in cream sauce | Tortellini a la crema ; 210 ; 7 ; Teller=350
Ravioli (Dose) | Canned ravioli | Raviolis en lata ; 85 ; 3 ; Dose=800 | Portion=400
Tortellini (Kühlregal, gekocht) | Fresh tortellini (cooked) | Tortellini frescos (cocidos) ; 200 ; 8 ; Portion=250
Gnocchi (gekocht) | Gnocchi (cooked) | Ñoquis (cocidos) ; 140 ; 3.5 ; Portion=200
Fleischküchle mit Kartoffelsalat | Meatballs with potato salad | Albóndigas con ensalada de patata ; 190 ; 8 ; Teller=400
Hähnchen-Gemüse-Pfanne | Chicken and vegetable stir-fry | Salteado de pollo y verduras ; 110 ; 12 ; Teller=400
Lachs mit Gemüse | Salmon with vegetables | Salmón con verduras ; 140 ; 12 ; Teller=350
Thai-Curry mit Reis | Thai curry with rice | Curry tailandés con arroz ; 150 ; 6 ; Teller=450
Dal | Dal | Dal ; 120 ; 7 ; Schale=300
Chana Masala | Chana masala | Chana masala ; 140 ; 6 ; Portion=300
Ratatouille | Ratatouille | Ratatouille ; 60 ; 1.5 ; Portion=300
Eintopf (Kartoffel) | Potato stew | Guiso de patata ; 80 ; 3 ; Teller=400
Linseneintopf mit Würstchen | Lentil stew with sausage | Lentejas con salchicha ; 120 ; 7 ; Teller=450
Hühnerbrühe | Chicken broth | Caldo de pollo ; 15 ; 1.5 ; Tasse=250
Ramen (Instant) | Instant ramen | Ramen instantáneo ; 450 ; 9 ; Packung=70
Yum Yum Nudeln | Yum Yum noodles | Fideos Yum Yum ; 470 ; 9 ; Packung=60
5 Minuten Terrine | Instant pot noodles | Fideos instantáneos en vaso ; 110 ; 3 ; Becher (zubereitet)=330
Fertig-Lasagne (TK) | Frozen lasagne | Lasaña congelada ; 140 ; 7 ; Packung=400
Schlemmerfilet (Iglo) | Baked fish fillet (Iglo) | Filete de pescado gratinado (Iglo) ; 150 ; 12 ; Hälfte=190 | Packung=380
Backofen-Pommes (zubereitet) | Oven fries (cooked) | Patatas al horno congeladas ; 200 ; 3 ; Portion=200
Kroketten (TK, zubereitet) | Frozen croquettes (cooked) | Croquetas congeladas ; 210 ; 3 ; Stück=25
Wedges (TK, zubereitet) | Frozen wedges (cooked) | Gajos de patata congelados ; 180 ; 3 ; Portion=200
Bami (Fertiggericht) | Ready meal bami | Bami preparado ; 150 ; 6 ; Packung=450
Gazpacho (Alvalle) | Gazpacho (Alvalle) | Gazpacho (Alvalle) ; 45 ; 0.8 ; Glas=250 | Flasche=1000
Arroz con pollo | Chicken with rice | Arroz con pollo ; 150 ; 9 ; Teller=400
Pollo al ajillo | Garlic chicken | Pollo al ajillo ; 200 ; 20 ; Portion=250
Merluza a la romana | Battered hake | Merluza a la romana ; 210 ; 14 ; Portion=200
Bacalao | Salt cod dish | Bacalao ; 130 ; 20 ; Portion=200
Fideuá | Fideuà | Fideuá ; 160 ; 8 ; Teller=400
Migas | Migas | Migas ; 300 ; 8 ; Teller=250
Escalivada | Escalivada | Escalivada ; 70 ; 1.5 ; Portion=200
Ristorante Pizza Mozzarella | Ristorante pizza mozzarella | Pizza Ristorante mozzarella ; 240 ; 10 ; ganze Pizza=335 | Hälfte=168
Ristorante Pizza Salame | Ristorante pizza salami | Pizza Ristorante salami ; 270 ; 11 ; ganze Pizza=320 | Hälfte=160
Ristorante Pizza Tonno | Ristorante pizza tuna | Pizza Ristorante atún ; 230 ; 11 ; ganze Pizza=355 | Hälfte=178
Ristorante Pizza Funghi | Ristorante pizza mushroom | Pizza Ristorante champiñones ; 220 ; 9 ; ganze Pizza=365 | Hälfte=183
Wagner Flammkuchen | Wagner tarte flambée | Tarte flambée Wagner ; 250 ; 8 ; ganze=320
Casa Tarradellas Pizza | Casa Tarradellas pizza | Pizza Casa Tarradellas ; 250 ; 11 ; ganze Pizza=410 | Hälfte=205
Maggi Fix Spaghetti Bolognese (zubereitet) | Maggi Fix spaghetti bolognese (prepared) | Maggi Fix espaguetis boloñesa ; 130 ; 7 ; Teller=450
Knorr Spaghetteria (zubereitet) | Knorr pasta pot (prepared) | Knorr Spaghetteria preparado ; 120 ; 4 ; Packung=330
Knorr Tomatensuppe (zubereitet) | Knorr tomato soup (prepared) | Sopa de tomate Knorr ; 40 ; 0.8 ; Teller=250
Frosta Hühnerfrikassee | Frosta chicken fricassee | Fricasé de pollo Frosta ; 110 ; 6 ; Packung=500
Frosta Bami Goreng | Frosta bami goreng | Bami goreng Frosta ; 125 ; 6 ; Packung=500
Frosta Paella | Frosta paella | Paella Frosta ; 130 ; 6 ; Packung=500
Iglo Schlemmerfilet Bordelaise | Iglo baked fish bordelaise | Filete gratinado Iglo ; 150 ; 12 ; Hälfte=190
Iglo Gemüse-Pfanne Toscana | Iglo Tuscan vegetable pan | Salteado toscano Iglo ; 95 ; 3 ; Portion=250
Heinz Baked Beans | Heinz baked beans | Alubias Heinz ; 80 ; 5 ; Dose=415 | Portion=200
Erasco Linseneintopf | Erasco lentil stew | Guiso de lentejas Erasco ; 85 ; 5 ; Dose=800 | Teller=400
Sonnen Bassermann Gulaschsuppe | Goulash soup (can) | Sopa gulasch en lata ; 80 ; 5 ; Teller=400
Yum Yum Huhn | Yum Yum chicken | Yum Yum pollo ; 470 ; 9 ; Packung=60
Nissin Cup Noodles | Nissin Cup Noodles | Nissin Cup Noodles ; 100 ; 2.5 ; Becher (zubereitet)=330
Orange Chicken mit Reis | Orange chicken with rice | Pollo a la naranja con arroz ; 150 ; 11 ; Box=450
Gochujang-Chicken | Gochujang chicken | Pollo gochujang ; 150 ; 20 ; Portion=200
Hähnchen süß-sauer mit Reis | Sweet and sour chicken with rice | Pollo agridulce con arroz ; 140 ; 10 ; Box=450
Fisch süß-sauer mit Reis | Sweet and sour fish with rice | Pescado agridulce con arroz ; 130 ; 9 ; Box=450
Linsencurry mit Garnelen | Lentil curry with prawns | Curry de lentejas con gambas ; 110 ; 10 ; Box=500
Schwein mit Linsen | Pork with lentils | Cerdo con lentejas ; 125 ; 14 ; Box=450
Paprikahendl mit Knödeln | Paprika chicken with dumplings | Pollo al pimentón con albóndigas ; 125 ; 9 ; Box=450
Hackbällchen mit Püree und Erbsen | Meatballs with mash and peas | Albóndigas con puré y guisantes ; 130 ; 8 ; Box=450
Currywurst light mit Pommes | Light currywurst with chips | Currywurst light con patatas ; 120 ; 6 ; Box=450
Kaiserschmarrn (Restaurant) | Kaiserschmarrn (restaurant) | Kaiserschmarrn (restaurante) ; 260 ; 7 ; Portion=300
Wiener Schnitzel mit Pommes | Wiener schnitzel with chips | Escalope vienés con patatas ; 230 ; 12 ; Teller=400
Schnitzel mit Kartoffelsalat | Schnitzel with potato salad | Escalope con ensalada de patata ; 210 ; 10 ; Teller=450
Schweinsbraten mit Knödel | Roast pork with dumpling | Asado de cerdo con albóndiga ; 180 ; 12 ; Teller=500
Tafelspitz mit Beilagen | Boiled beef with sides | Tafelspitz con guarnición ; 110 ; 11 ; Teller=500
Gulasch mit Semmelknödel | Goulash with bread dumpling | Gulasch con albóndiga de pan ; 150 ; 9 ; Teller=500
Spinatknödel mit Butter | Spinach dumplings with butter | Albóndigas de espinacas con mantequilla ; 190 ; 7 ; Teller=350
Kasnocken / Käsespätzle (Restaurant) | Cheese spätzle (restaurant) | Spätzle con queso (restaurante) ; 250 ; 10 ; Teller=400
Grillhendl (halbes) | Half grilled chicken | Medio pollo asado ; 210 ; 24 ; Stück=450
Backhendl | Breaded fried chicken | Pollo empanado frito ; 250 ; 18 ; Portion=300
Gemüsecurry mit Reis | Vegetable curry with rice | Curry de verduras con arroz ; 120 ; 3 ; Teller=450
Chicken Teriyaki Bowl | Chicken teriyaki bowl | Bowl de pollo teriyaki ; 140 ; 10 ; Bowl=450
Poke Bowl (Lachs) | Salmon poke bowl | Poke bowl de salmón ; 150 ; 8 ; Bowl=450
Buddha Bowl | Buddha bowl | Buddha bowl ; 130 ; 5 ; Bowl=450
Burrito (Restaurant) | Burrito (restaurant) | Burrito (restaurante) ; 200 ; 9 ; Stück=400
Chili con Carne mit Reis | Chilli con carne with rice | Chili con carne con arroz ; 130 ; 7 ; Teller=450
Penne Arrabbiata (Restaurant) | Penne arrabbiata (restaurant) | Penne arrabbiata (restaurante) ; 150 ; 5 ; Teller=400
Pasta Pesto | Pasta pesto | Pasta al pesto ; 220 ; 6 ; Teller=350
Mac and Cheese | Mac and cheese | Macarrones con queso ; 190 ; 8 ; Teller=350
Risotto (Pilz) | Mushroom risotto | Risotto de setas ; 150 ; 4 ; Teller=400
Pfannkuchen herzhaft | Savoury pancake | Crepe salado ; 200 ; 8 ; Stück=200
Flammkuchen (klassisch) | Tarte flambée (classic) | Tarta flambeada clásica ; 250 ; 8 ; ganze=350
Ofengemüse mit Feta | Roasted vegetables with feta | Verduras al horno con feta ; 110 ; 4 ; Portion=350
Gemüsepfanne mit Tofu | Vegetable stir-fry with tofu | Salteado de verduras con tofu ; 110 ; 7 ; Portion=350
Frühlingsrollen (TK, gebacken) | Frozen spring rolls (baked) | Rollitos de primavera congelados ; 230 ; 5 ; Stück=30
Maggi Ravioli in Tomatensauce | Maggi ravioli in tomato sauce | Raviolis Maggi en salsa de tomate ; 85 ; 3 ; Dose=800 | Portion=400
Maggi Magic Asia Nudel Snack | Maggi Magic Asia noodle snack | Maggi Magic Asia ; 440 ; 9 ; Packung=62
Knorr Pasta Snack | Knorr pasta snack | Knorr pasta snack ; 120 ; 4 ; Packung (zubereitet)=330
Dr. Oetker Ristorante Spinaci | Ristorante spinach pizza | Pizza Ristorante espinacas ; 210 ; 8 ; ganze Pizza=390
Dr. Oetker Ristorante Pollo | Ristorante chicken pizza | Pizza Ristorante pollo ; 220 ; 10 ; ganze Pizza=355
Dr. Oetker Die Ofenfrische | Ofenfrische pizza | Pizza Ofenfrische ; 240 ; 10 ; ganze Pizza=410
Wagner Piccolinis | Wagner Piccolinis | Wagner Piccolinis ; 250 ; 10 ; Stück=30
Wagner Steinofen Salami | Wagner stone-baked salami | Wagner horno de piedra salami ; 250 ; 10 ; ganze Pizza=350
Gustavo Gusto Pizza Margherita | Gustavo Gusto margherita | Gustavo Gusto margarita ; 220 ; 10 ; ganze Pizza=420
Frosta Tagliatelle Wildlachs | Frosta tagliatelle with salmon | Tagliatelle con salmón Frosta ; 130 ; 7 ; Packung=500
Frosta Gemüse Bratreis | Frosta vegetable fried rice | Arroz frito con verduras Frosta ; 110 ; 3 ; Packung=500
Frosta Thai Curry | Frosta Thai curry | Curry tailandés Frosta ; 110 ; 5 ; Packung=500
Iglo Rahm-Gemüse | Iglo creamed vegetables | Verduras a la crema Iglo ; 70 ; 2 ; Portion=200
Iglo Backfisch | Iglo battered fish | Pescado rebozado Iglo ; 210 ; 12 ; Stück=105
Iglo Chicken Nuggets | Iglo chicken nuggets | Nuggets de pollo Iglo ; 230 ; 14 ; Stück=20
Bofrost Kaiserschmarrn | Bofrost Kaiserschmarrn | Kaiserschmarrn Bofrost ; 230 ; 6 ; Portion=200
Erasco Erbseneintopf | Erasco pea stew | Guiso de guisantes Erasco ; 80 ; 5 ; Dose=800 | Teller=400
Erasco Gulaschsuppe | Erasco goulash soup | Sopa gulasch Erasco ; 75 ; 5 ; Teller=400
Sonnen Bassermann Rindfleischsuppe | Beef soup (can) | Sopa de ternera en lata ; 35 ; 3 ; Teller=400
Hengstenberg Rotkohl | Hengstenberg red cabbage | Lombarda Hengstenberg ; 60 ; 1.2 ; Portion=150
Pfanni Kartoffelknödel | Pfanni potato dumplings | Albóndigas de patata Pfanni ; 120 ; 2.2 ; Stück=75
Pfanni Kartoffelpüree (zubereitet) | Pfanni mashed potatoes (prepared) | Puré Pfanni preparado ; 80 ; 2 ; Portion=200
Uncle Ben's Express Reis Basmati | Uncle Ben's express basmati | Arroz basmati express Uncle Ben's ; 150 ; 3 ; Beutel=250
Barilla Spaghetti No. 5 (roh) | Barilla spaghetti no. 5 (uncooked) | Espaguetis Barilla nº 5 crudos ; 360 ; 13 ; Portion=100 | Packung=500
Barilla Fusilli (roh) | Barilla fusilli (uncooked) | Fusilli Barilla crudos ; 360 ; 13 ; Portion=100 | Packung=500
Barilla Pesto Rosso | Barilla pesto rosso | Pesto rosso Barilla ; 330 ; 5 ; EL=15 | Glas=200
Mutti Passata | Mutti passata | Passata Mutti ; 30 ; 1.5 ; EL=15 | Flasche=700
Gallo Macarrones (roh) | Gallo macaroni (uncooked) | Macarrones Gallo crudos ; 360 ; 12 ; Portion=100
Hacendado Tortilla de patatas | Store-brand Spanish omelette | Tortilla de patatas Hacendado ; 180 ; 6 ; Portion=100 | Packung=600
Hacendado Hummus | Store-brand hummus | Hummus Hacendado ; 300 ; 7 ; EL=20
Hacendado Gazpacho | Store-brand gazpacho | Gazpacho Hacendado ; 45 ; 0.8 ; Glas=250
Barilla Penne Rigate (roh) | Barilla penne rigate (uncooked) | Barilla penne rigate crudos ; 360 ; 13 ; Portion=100 | Packung=500
Barilla Farfalle (roh) | Barilla farfalle (uncooked) | Barilla farfalle crudos ; 360 ; 13 ; Portion=100
Barilla Vollkorn Spaghetti (roh) | Barilla wholewheat spaghetti (uncooked) | Barilla espaguetis integrales crudos ; 350 ; 13 ; Portion=100
Barilla Protein+ Penne (roh) | Barilla Protein+ penne (uncooked) | Barilla Protein+ penne crudos ; 350 ; 20 ; Portion=100
Barilla Linsen Fusilli (roh) | Barilla red lentil fusilli (uncooked) | Barilla fusilli de lentejas crudos ; 340 ; 25 ; Portion=80
Barilla Pesto alla Genovese | Barilla pesto genovese | Barilla pesto genovés ; 520 ; 5 ; EL=15 | Glas=190
Barilla Sugo Basilico | Barilla basilico sauce | Barilla salsa basilico ; 55 ; 1.5 ; Glas=400 | Portion=125
Barilla Sugo Arrabbiata | Barilla arrabbiata sauce | Barilla salsa arrabbiata ; 60 ; 1.5 ; Glas=400
Barilla Lasagne-Platten (roh) | Barilla lasagne sheets (uncooked) | Barilla láminas de lasaña crudas ; 360 ; 13 ; Platte=20
De Cecco Spaghetti (roh) | De Cecco spaghetti (uncooked) | De Cecco espaguetis crudos ; 355 ; 13 ; Portion=100
Buitoni Tortellini Ricotta-Spinat | Buitoni ricotta spinach tortellini | Buitoni tortellini ricotta y espinacas ; 280 ; 11 ; Portion=125
Giovanni Rana Tortelloni | Giovanni Rana tortelloni | Giovanni Rana tortelloni ; 270 ; 11 ; Portion=125
Bertolli Pesto Verde | Bertolli green pesto | Bertolli pesto verde ; 500 ; 5 ; EL=15
Miracoli Spaghetti Klassik (zubereitet) | Miracoli spaghetti classic (prepared) | Miracoli espaguetis clásicos (preparado) ; 140 ; 5 ; Portion=300
Knorr Spaghetteria Carbonara (zubereitet) | Knorr Spaghetteria carbonara (prepared) | Knorr Spaghetteria carbonara (preparado) ; 140 ; 5 ; Portion=300
Knorr Fix für Lasagne | Knorr lasagne mix | Knorr mezcla para lasaña ; 330 ; 8 ; Beutel=60
Knorr Fix Spaghetti Bolognese | Knorr bolognese mix | Knorr mezcla boloñesa ; 320 ; 9 ; Beutel=40
Maggi Fix Chili con Carne | Maggi chilli con carne mix | Maggi mezcla chili con carne ; 300 ; 8 ; Beutel=35
Maggi 5 Minuten Terrine Kartoffelbrei | Maggi 5-minute mash | Maggi puré en 5 minutos ; 90 ; 2 ; Becher (zubereitet)=200
Maggi Würze | Maggi seasoning | Condimento Maggi ; 20 ; 3 ; TL=5
Iglo Fischstäbchen | Iglo fish fingers | Iglo palitos de pescado ; 200 ; 12 ; Stück=30
Iglo Rahmspinat | Iglo creamed spinach | Iglo espinacas a la crema ; 55 ; 2.5 ; Portion=150
Iglo Gemüse-Pfanne Mediterran | Iglo Mediterranean vegetable pan | Iglo verduras mediterráneas ; 60 ; 2 ; Portion=250
Frosta Hähnchen Curry | Frosta chicken curry | Frosta curry de pollo ; 110 ; 6 ; Packung=500
Frosta Pasta Bolognese | Frosta pasta bolognese | Frosta pasta boloñesa ; 120 ; 6 ; Packung=500
Frosta Gemüse Pfanne Asia | Frosta Asian vegetable pan | Frosta verduras asiáticas ; 70 ; 2 ; Portion=250
Bonduelle Mais | Bonduelle sweetcorn | Maíz Bonduelle ; 75 ; 2.5 ; Dose=140
Bonduelle Kidneybohnen | Bonduelle kidney beans | Alubias rojas Bonduelle ; 110 ; 8 ; Dose=250
Bonduelle Kichererbsen | Bonduelle chickpeas | Garbanzos Bonduelle ; 125 ; 7 ; Dose=265
Bonduelle Erbsen & Möhren | Bonduelle peas & carrots | Guisantes y zanahorias Bonduelle ; 55 ; 3 ; Portion=150
Ben's Original Express Reis Natur | Ben's Original express rice plain | Ben's Original arroz express natural ; 145 ; 3 ; Beutel=250
Ben's Original Express Reis Mexikanisch | Ben's Original express rice Mexican | Ben's Original arroz express mexicano ; 150 ; 3 ; Beutel=250
Reis-Fit Basmati (roh) | Reis-Fit basmati (uncooked) | Reis-Fit basmati crudo ; 350 ; 8 ; Portion=75
Oryza Milchreis (roh) | Oryza pudding rice (uncooked) | Oryza arroz para postre crudo ; 350 ; 7 ; Portion=125
Dr. Oetker Paula Pudding Vanille | Dr. Oetker Paula vanilla pudding | Dr. Oetker pudin Paula vainilla ; 120 ; 3 ; Becher=125
Dr. Oetker Pudding Vanille (Pulver) | Dr. Oetker vanilla pudding powder | Dr. Oetker pudin de vainilla en polvo ; 350 ; 0.3 ; Beutel=37
Dr. Oetker Backin | Dr. Oetker baking powder | Levadura química Dr. Oetker ; 140 ; 0 ; Päckchen=15
Dr. Oetker Pizzateig (fertig) | Dr. Oetker pizza dough (ready) | Masa de pizza Dr. Oetker ; 280 ; 7 ; Packung=400
Tante Fanny Pizzateig | Tante Fanny pizza dough | Masa de pizza Tante Fanny ; 270 ; 7 ; Packung=400
Tante Fanny Blätterteig | Tante Fanny puff pastry | Hojaldre Tante Fanny ; 390 ; 6 ; Rolle=275
Henglein Kloßteig | Henglein dumpling dough | Masa para albóndigas Henglein ; 100 ; 2 ; Portion=150
Henglein Schupfnudeln | Henglein potato noodles | Schupfnudeln Henglein ; 170 ; 4 ; Portion=200
Bürger Maultaschen | Bürger Maultaschen | Maultaschen Bürger ; 210 ; 9 ; Stück=75
Lacroix Rinderbrühe | Lacroix beef stock | Caldo de carne Lacroix ; 3 ; 0.5 ; Tasse=250
Kühne Rotkohl | Kühne red cabbage | Lombarda Kühne ; 60 ; 1.2 ; Portion=150
Develey Ketchup | Develey ketchup | Ketchup Develey ; 110 ; 1.5 ; EL=15
Heinz Ketchup 50 % weniger Zucker | Heinz reduced-sugar ketchup | Heinz ketchup 50 % menos azúcar ; 60 ; 1.5 ; EL=15
Thomy Mayonnaise | Thomy mayonnaise | Mayonesa Thomy ; 720 ; 1 ; EL=15
Kraft Miracel Whip | Miracel Whip | Miracel Whip ; 390 ; 1 ; EL=15

@Beilagen | Sides | Guarniciones ; 🍚
Reis (gekocht) | Rice (cooked) | Arroz cocido ; 130 ; 2.7 ; Portion=200 | EL=20
Nudeln (gekocht) | Pasta (cooked) | Pasta cocida ; 150 ; 5 ; Portion=250
Vollkornnudeln (gekocht) | Wholegrain pasta (cooked) | Pasta integral cocida ; 140 ; 5.5 ; Portion=250
Couscous (gekocht) | Couscous (cooked) | Cuscús cocido ; 112 ; 3.8 ; Portion=200
Quinoa (gekocht) | Quinoa (cooked) | Quinoa cocida ; 120 ; 4.4 ; Portion=180
Bulgur (gekocht) | Bulgur (cooked) | Bulgur cocido ; 83 ; 3 ; Portion=200
Linsen (gekocht) | Lentils (cooked) | Lentejas cocidas ; 116 ; 9 ; Portion=200
Kichererbsen (gekocht) | Chickpeas (cooked) | Garbanzos cocidos ; 140 ; 8 ; Portion=200
Kroketten | Potato croquettes | Croquetas de patata ; 200 ; 3 ; Stück=20
Kartoffelklöße | Potato dumplings | Albóndigas de patata ; 120 ; 2.5 ; Stück=80
Semmelknödel | Bread dumpling | Knödel de pan ; 170 ; 5 ; Stück=100
Rösti | Rösti | Rösti ; 200 ; 2.5 ; Stück=100
Kartoffel-Wedges | Potato wedges | Patatas gajo ; 180 ; 3 ; Portion=200
Baguette zum Fondue | Bread cubes for fondue | Pan para fondue ; 260 ; 8.5 ; Portion=100
Reis (roh) | Rice (uncooked) | Arroz crudo ; 350 ; 7 ; Portion=80 | Tasse=180
Basmatireis (roh) | Basmati rice (uncooked) | Arroz basmati crudo ; 350 ; 8 ; Portion=80
Vollkornreis (roh) | Brown rice (uncooked) | Arroz integral crudo ; 350 ; 7.5 ; Portion=80
Milchreis (roh) | Pudding rice (uncooked) | Arroz para postre crudo ; 345 ; 7 ; Portion=60
Nudeln (roh) | Pasta (uncooked) | Pasta cruda ; 355 ; 12.5 ; Portion=120 | Packung=500
Spaghetti (roh) | Spaghetti (uncooked) | Espaguetis crudos ; 355 ; 12.5 ; Portion=120 | Packung=500
Vollkornnudeln (roh) | Wholewheat pasta (uncooked) | Pasta integral cruda ; 340 ; 14 ; Portion=120
Eiernudeln (roh) | Egg noodles (uncooked) | Fideos al huevo crudos ; 380 ; 14 ; Portion=120
Reisnudeln (roh) | Rice noodles (uncooked) | Fideos de arroz crudos ; 360 ; 6 ; Portion=80
Mie-Nudeln (roh) | Chinese noodles (uncooked) | Fideos chinos crudos ; 370 ; 12 ; Nest=60
Couscous (roh) | Couscous (uncooked) | Cuscús crudo ; 360 ; 12 ; Portion=70
Bulgur (roh) | Bulgur (uncooked) | Bulgur crudo ; 345 ; 12 ; Portion=70
Quinoa (roh) | Quinoa (uncooked) | Quinoa cruda ; 365 ; 14 ; Portion=70
Linsen (rot, roh) | Red lentils (uncooked) | Lentejas rojas crudas ; 340 ; 25 ; Portion=70 | Tasse=190
Linsen (braun, roh) | Brown lentils (uncooked) | Lentejas pardinas crudas ; 330 ; 24 ; Portion=70
Kichererbsen (roh) | Dried chickpeas | Garbanzos secos ; 360 ; 19 ; Portion=70
Polenta (roh) | Polenta (uncooked) | Polenta cruda ; 360 ; 8 ; Portion=70
Hirse (roh) | Millet (uncooked) | Mijo crudo ; 355 ; 11 ; Portion=70
Buchweizen (roh) | Buckwheat (uncooked) | Trigo sarraceno crudo ; 345 ; 13 ; Portion=70
Gnocchi (Packung, roh) | Gnocchi (packaged) | Ñoquis envasados ; 150 ; 4 ; Packung=500 | Portion=250
Spätzle (Kühlregal) | Fresh spätzle | Spätzle frescos ; 210 ; 7 ; Portion=200
Kartoffelpüree (Pulver, zubereitet) | Instant mashed potatoes | Puré instantáneo ; 90 ; 2.3 ; Portion=200
Reis im Kochbeutel (gekocht) | Boil-in-bag rice (cooked) | Arroz en bolsa cocido ; 140 ; 3 ; Beutel=250
Express-Reis (Ben's Original) | Microwave rice (Ben's Original) | Arroz express (Ben's Original) ; 160 ; 3 ; Beutel=250
Pommes (TK, roh) | Frozen fries (uncooked) | Patatas congeladas crudas ; 140 ; 2.2 ; Portion=150
Klöße (halb & halb) | Potato dumplings | Albóndigas de patata ; 110 ; 2.5 ; Stück=90
Kartoffelgratin | Potato gratin | Gratén de patatas ; 140 ; 4 ; Portion=250
Reis mit Gemüse | Rice with vegetables | Arroz con verduras ; 130 ; 3 ; Portion=200
Basmatireis (gekocht) | Cooked basmati rice | Arroz basmati cocido ; 140 ; 3 ; Portion=200 | Tasse=160
Jasminreis (roh) | Jasmine rice (uncooked) | Arroz jazmín crudo ; 350 ; 7 ; Portion=80
Jasminreis (gekocht) | Cooked jasmine rice | Arroz jazmín cocido ; 130 ; 2.7 ; Portion=200
Sushireis (roh) | Sushi rice (uncooked) | Arroz para sushi crudo ; 350 ; 6.5 ; Portion=80
Sushireis (gekocht) | Cooked sushi rice | Arroz para sushi cocido ; 130 ; 2.4 ; Portion=150
Vollkornreis (gekocht) | Cooked brown rice | Arroz integral cocido ; 120 ; 2.6 ; Portion=200
Wildreis-Mischung (gekocht) | Cooked wild rice mix | Mezcla de arroz salvaje cocido ; 120 ; 3.5 ; Portion=200
Proteinnudeln (roh) | Protein pasta (uncooked) | Pasta proteica cruda ; 340 ; 25 ; Portion=100
Linsennudeln (roh) | Lentil pasta (uncooked) | Pasta de lentejas cruda ; 340 ; 25 ; Portion=100
Kichererbsennudeln (roh) | Chickpea pasta (uncooked) | Pasta de garbanzos cruda ; 350 ; 21 ; Portion=100
Konjaknudeln | Konjac noodles | Fideos de konjac ; 10 ; 0.2 ; Packung (abgetropft)=200
Hirse (gekocht) | Cooked millet | Mijo cocido ; 120 ; 3.5 ; Portion=200
Polenta (zubereitet) | Cooked polenta | Polenta cocida ; 70 ; 1.6 ; Portion=250
Kartoffelknödel (Packung) | Potato dumplings (packaged) | Albóndigas de patata envasadas ; 120 ; 2.2 ; Stück=75
Grießknödel | Semolina dumpling | Albóndiga de sémola ; 180 ; 6 ; Stück=60
Serviettenknödel | Napkin dumpling | Albóndiga de servilleta ; 210 ; 7 ; Scheibe=60
Gnocchi (aus der Pfanne/Airfryer) | Pan-fried gnocchi | Ñoquis salteados ; 170 ; 4 ; Portion=200
Schupfnudeln | Potato noodles | Ñoquis alargados ; 160 ; 4 ; Portion=200
Kroketten (Airfryer) | Air-fried croquettes | Croquetas en freidora de aire ; 170 ; 3 ; Stück=25
Rösti (Packung) | Rösti (packaged) | Rösti envasado ; 150 ; 2.5 ; Stück=100
Kartoffelpuffer | Potato pancakes | Tortitas de patata ; 200 ; 3 ; Stück=70
Linsen (rot, gekocht) | Cooked red lentils | Lentejas rojas cocidas ; 115 ; 8.5 ; Portion=200
Linsen (Beluga, gekocht) | Cooked beluga lentils | Lentejas beluga cocidas ; 120 ; 9 ; Portion=200
Kidneybohnen (gekocht) | Cooked kidney beans | Alubias rojas cocidas ; 115 ; 8.5 ; Portion=150
Weiße Bohnen (gekocht) | Cooked white beans | Alubias blancas cocidas ; 110 ; 7.5 ; Portion=150
Maultaschen (Packung) | Maultaschen (pack) | Maultaschen (paquete) ; 210 ; 9 ; Stück=75 | Packung=450
Schupfnudeln (Packung) | Potato noodles (pack) | Schupfnudeln (paquete) ; 170 ; 4 ; Portion=200 | Packung=500
Semmelknödel (Packung) | Bread dumplings (pack) | Albóndigas de pan (paquete) ; 200 ; 7 ; Stück=80
Tortellini (frisch, Packung) | Fresh tortellini (pack) | Tortellini frescos ; 290 ; 12 ; Portion=125 | Packung=250

@Milch & Käse | Dairy & cheese | Lácteos y quesos ; 🧀
Milch 3,5 % | Whole milk 3.5% | Leche entera ; 64 ; 3.4 ; Glas=200 | Tasse=150 | Schuss=20
Milch 1,5 % | Semi-skimmed milk 1.5% | Leche semidesnatada ; 47 ; 3.4 ; Glas=200 | Tasse=150 | Schuss=20
Hafermilch | Oat milk | Bebida de avena ; 45 ; 0.5 ; Glas=200 | Schuss=20
Hafermilch (Oatly Barista) | Oat milk (Oatly Barista) | Bebida de avena (Oatly Barista) ; 60 ; 1 ; Glas=200 | Schuss=20
Sojamilch | Soy milk | Bebida de soja ; 40 ; 3.3 ; Glas=200
Sojadrink (Alpro) | Soy drink (Alpro) | Bebida de soja (Alpro) ; 39 ; 3 ; Glas=200
Mandeldrink | Almond drink | Bebida de almendra ; 15 ; 0.5 ; Glas=200
Joghurt natur 3,5 % | Plain yogurt 3.5% | Yogur natural ; 65 ; 3.8 ; Becher=150 | EL=20
Joghurt 1,5 % | Low-fat yogurt 1.5% | Yogur desnatado ; 48 ; 4 ; Becher=150 | EL=20
Griechischer Joghurt 10 % | Greek yogurt 10% | Yogur griego ; 120 ; 4 ; Becher=150 | EL=30
Erdbeerjoghurt | Strawberry yogurt | Yogur de fresa ; 95 ; 3.5 ; Becher=150
Fruchtjoghurt | Fruit yogurt | Yogur de frutas ; 95 ; 3.5 ; Becher=150
Vanillejoghurt | Vanilla yogurt | Yogur de vainilla ; 100 ; 3.5 ; Becher=150
Activia (Danone) | Activia (Danone) | Activia (Danone) ; 75 ; 3.7 ; Becher=115
Skyr natur | Skyr (plain) | Skyr natural ; 63 ; 11 ; Becher=150 | Packung=450
Skyr mit Frucht | Fruit skyr | Skyr de frutas ; 80 ; 9 ; Becher=150
Magerquark | Low-fat quark | Queso quark desnatado ; 68 ; 12 ; Packung=250 | EL=30
Quark 20 % | Quark 20% | Quark ; 110 ; 12 ; Packung=250 | EL=30
Kräuterquark | Herb quark | Quark a las hierbas ; 140 ; 8 ; Portion=50
Hüttenkäse | Cottage cheese | Requesón ; 100 ; 12 ; Becher=200
Schokopudding | Chocolate pudding | Natillas de chocolate ; 110 ; 3 ; Becher=125
High Protein Pudding (Ehrmann) | High protein pudding (Ehrmann) | Pudin proteico (Ehrmann) ; 75 ; 10 ; Becher=200
Milchreis (Müller) | Rice pudding (Müller) | Arroz con leche (Müller) ; 110 ; 3.3 ; Becher=200
Müllermilch | Müllermilch (flavoured milk) | Batido Müllermilch ; 70 ; 3.4 ; Flasche=400
Actimel | Actimel | Actimel ; 75 ; 2.7 ; Flasche=100
Fruchtzwerge (Danone) | Petit Suisse (Danone) | Danonino ; 100 ; 6.4 ; Becher=50
Müller Froop | Müller Froop | Müller Froop ; 105 ; 3.5 ; Becher=150
Monte (Zott) | Monte (Zott) | Monte (Zott) ; 165 ; 3.6 ; Becher=55
Paula Pudding (Dr. Oetker) | Paula pudding (Dr. Oetker) | Natillas Paula (Dr. Oetker) ; 105 ; 3 ; Becher=125
Alpro Joghurtalternative | Alpro plant yogurt | Yogur vegetal Alpro ; 50 ; 4 ; Becher=150
Buttermilch | Buttermilk | Suero de leche ; 37 ; 3.5 ; Glas=250
Kefir | Kefir | Kéfir ; 60 ; 3.4 ; Glas=250
Gouda | Gouda | Queso gouda ; 360 ; 25 ; Scheibe=25
Emmentaler | Emmental | Queso emmental ; 380 ; 28 ; Scheibe=25
Bergkäse | Mountain cheese | Queso de montaña ; 400 ; 28 ; Scheibe=25
Manchego | Manchego | Queso manchego ; 420 ; 26 ; Scheibe=20 | Portion=40
Queso fresco | Fresh cheese (queso fresco) | Queso fresco ; 200 ; 12 ; Scheibe=40
Mozzarella | Mozzarella | Mozzarella ; 250 ; 18 ; Kugel=125 | Scheibe=20
Mozzarella light | Light mozzarella | Mozzarella light ; 160 ; 19 ; Kugel=125
Feta | Feta | Queso feta ; 270 ; 17 ; Portion=50
Camembert | Camembert | Camembert ; 300 ; 20 ; Ecke=30
Brie | Brie | Brie ; 330 ; 20 ; Ecke=30
Parmesan | Parmesan | Parmesano ; 400 ; 32 ; EL=5 | Portion=10
Frischkäse | Cream cheese | Queso crema ; 240 ; 6 ; Portion=30 | TL=10
Frischkäse light | Light cream cheese | Queso crema light ; 140 ; 8 ; Portion=30
Schmelzkäse | Processed cheese | Queso fundido ; 280 ; 13 ; Ecke=17
Babybel | Babybel | Babybel ; 300 ; 22 ; Stück=22
Halloumi | Halloumi | Halloumi ; 320 ; 22 ; Scheibe=40
Butter | Butter | Mantequilla ; 740 ; 0.7 ; Portion=10 | TL=5
Margarine | Margarine | Margarina ; 700 ; 0 ; TL=5
Sahne | Cream | Nata ; 290 ; 2.4 ; EL=15
Schmand | Sour cream (24%) | Nata agria ; 240 ; 3 ; EL=20
Sprühsahne | Whipped cream (spray) | Nata montada ; 260 ; 2 ; Portion=20
Ei (roh) | Egg (raw) | Huevo crudo ; 155 ; 12.5 ; Stück (M)=58 | Stück (L)=68
Eiweiß (Eiklar) | Egg white | Clara de huevo ; 48 ; 11 ; Stück=33
Eigelb | Egg yolk | Yema de huevo ; 320 ; 16 ; Stück=18
Mascarpone | Mascarpone | Mascarpone ; 440 ; 4.5 ; EL=20 | Packung=250
Ricotta | Ricotta | Ricotta ; 150 ; 8.5 ; EL=20 | Packung=250
Crème fraîche | Crème fraîche | Crème fraîche ; 290 ; 2.5 ; EL=15 | Becher=150
Saure Sahne | Sour cream | Nata agria ; 180 ; 3 ; EL=15 | Becher=200
Kochsahne 15 % | Cooking cream 15 % | Nata para cocinar 15 % ; 160 ; 3 ; Schuss=30 | Packung=200
Schlagsahne 30 % | Whipping cream 30 % | Nata para montar ; 290 ; 2.4 ; EL=15 | Becher=200
Kondensmilch | Evaporated milk | Leche evaporada ; 130 ; 6.5 ; TL=5 | Portion (10 g)=10
Gezuckerte Kondensmilch | Sweetened condensed milk | Leche condensada ; 320 ; 7.5 ; EL=20
Cheddar | Cheddar | Cheddar ; 400 ; 25 ; Scheibe=20
Butterkäse | Butter cheese | Queso mantecoso ; 350 ; 22 ; Scheibe=20
Tilsiter | Tilsit cheese | Queso tilsit ; 350 ; 26 ; Scheibe=20
Edamer | Edam | Edam ; 330 ; 25 ; Scheibe=20
Maasdamer | Maasdam | Maasdam ; 350 ; 27 ; Scheibe=20
Leerdammer | Leerdammer | Leerdammer ; 350 ; 27 ; Scheibe=20
Old Amsterdam | Old Amsterdam | Old Amsterdam ; 400 ; 29 ; Scheibe=20
Ziegenkäse | Goat cheese | Queso de cabra ; 290 ; 19 ; Scheibe=25
Gorgonzola | Gorgonzola | Gorgonzola ; 350 ; 19 ; Portion=30
Grana Padano | Grana Padano | Grana Padano ; 390 ; 33 ; EL gerieben=7
Pecorino | Pecorino | Pecorino ; 390 ; 28 ; EL gerieben=7
Harzer Käse | Harzer cheese | Queso Harz ; 120 ; 29 ; Stück=30
Reibekäse (Gouda) | Grated cheese | Queso rallado ; 360 ; 25 ; Handvoll=30 | Packung=200
Pizzakäse | Pizza cheese | Queso para pizza ; 300 ; 22 ; Handvoll=30
Burrata | Burrata | Burrata ; 260 ; 14 ; Stück=125
Grillkäse | Grilling cheese | Queso para la parrilla ; 300 ; 21 ; Stück=80
Queso curado | Cured cheese | Queso curado ; 420 ; 28 ; Scheibe=20
Queso de Burgos | Burgos cheese | Queso de Burgos ; 180 ; 12 ; Portion=60
Philadelphia | Philadelphia | Philadelphia ; 230 ; 5.5 ; EL=15 | Packung=175
Hüttenkäse light | Cottage cheese light | Requesón light ; 70 ; 12 ; Becher=200
Protein-Joghurt (Ehrmann) | High-protein yoghurt (Ehrmann) | Yogur proteico (Ehrmann) ; 75 ; 10 ; Becher=200
Protein-Quark (Exquisa) | Protein quark (Exquisa) | Quark proteico (Exquisa) ; 60 ; 10 ; Becher=200
Vla (Vanille) | Vanilla custard (vla) | Natillas holandesas ; 105 ; 3 ; Schale=150
Vanillepudding | Vanilla pudding | Natillas ; 105 ; 3 ; Becher=125
Grießpudding (Becher) | Semolina pudding | Pudin de sémola ; 110 ; 3.5 ; Becher=125
Danette | Danette | Danette ; 125 ; 3 ; Becher=125
Natillas | Natillas | Natillas ; 115 ; 3 ; Becher=125
Arroz con leche | Spanish rice pudding | Arroz con leche ; 130 ; 3.5 ; Becher=125
Ayran | Ayran | Ayran ; 35 ; 1.5 ; Becher=250
Lassi | Lassi | Lassi ; 75 ; 3 ; Glas=250
Kakao-Drink (fertig) | Chocolate milk | Batido de cacao ; 65 ; 3.3 ; Flasche=500 | Glas=250
Laktosefreie Milch 1,5 % | Lactose-free milk 1.5 % | Leche sin lactosa 1,5 % ; 46 ; 3.4 ; Glas=250
Kokosmilch (Drink) | Coconut milk drink | Bebida de coco ; 20 ; 0.1 ; Glas=250
Reisdrink | Rice drink | Bebida de arroz ; 50 ; 0.1 ; Glas=250
Kokosjoghurt | Coconut yoghurt | Yogur de coco ; 120 ; 1 ; Becher=125
Quarkspeise | Quark dessert | Postre de quark ; 130 ; 6 ; Becher=150
Zott Sahne-Joghurt | Zott cream yoghurt | Yogur cremoso Zott ; 120 ; 3 ; Becher=150
Ehrmann Almighurt | Ehrmann Almighurt | Ehrmann Almighurt ; 100 ; 3.5 ; Becher=150
Landliebe Joghurt | Landliebe yoghurt | Yogur Landliebe ; 100 ; 3.5 ; Becher=150
Müller Joghurt mit der Ecke | Müller corner yoghurt | Yogur Müller con esquina ; 125 ; 3.5 ; Becher=150
Dr. Oetker Paula | Dr. Oetker Paula pudding | Pudin Paula Dr. Oetker ; 110 ; 3 ; Becher=125
Danone Dany Sahne | Danone Dany cream dessert | Dany Sahne Danone ; 140 ; 3 ; Becher=115
Arla Skyr Natur | Arla skyr plain | Skyr natural Arla ; 60 ; 11 ; Becher=150
Exquisa Frischkäse | Exquisa cream cheese | Queso crema Exquisa ; 220 ; 6 ; EL=15
Weihenstephan H-Milch 3,5 % | Weihenstephan milk 3.5 % | Leche Weihenstephan 3,5 % ; 64 ; 3.4 ; Glas=250
Bärenmarke Kondensmilch | Bärenmarke evaporated milk | Leche evaporada Bärenmarke ; 130 ; 6.5 ; Portion (10 g)=10
Kerrygold Butter | Kerrygold butter | Mantequilla Kerrygold ; 740 ; 0.7 ; TL=5 | EL=12
Rama | Rama margarine | Margarina Rama ; 530 ; 0 ; TL=5 | EL=12
Lätta | Lätta spread | Lätta ; 360 ; 0.5 ; TL=5
Babybel (Stück) | Babybel (piece) | Babybel (unidad) ; 300 ; 22 ; Stück=20
La vache qui rit (Ecke) | The Laughing Cow (wedge) | La vaca que ríe (porción) ; 240 ; 10 ; Ecke=16
Danone Actimel | Danone Actimel | Actimel Danone ; 75 ; 2.7 ; Fläschchen=100
Yakult | Yakult | Yakult ; 65 ; 1.3 ; Fläschchen=65
Central Lechera Asturiana Semidesnatada | Asturiana semi-skimmed milk | Leche semidesnatada Asturiana ; 46 ; 3.1 ; Glas=250
Pascual Yogur Natural | Pascual plain yoghurt | Yogur natural Pascual ; 60 ; 3.5 ; Becher=125
Danone Natillas | Danone natillas | Natillas Danone ; 120 ; 3 ; Becher=125
Magertopfen / Magerquark | Low-fat quark | Quark desnatado ; 67 ; 12 ; Becher=250 | EL=30
Topfen 20 % | Quark 20 % fat | Quark 20 % ; 110 ; 12.5 ; Becher=250 | EL=30
Topfen 40 % | Quark 40 % fat | Quark 40 % ; 160 ; 11 ; Becher=250
Laktosefreier Magertopfen | Lactose-free low-fat quark | Quark desnatado sin lactosa ; 70 ; 12 ; Becher=250
Körniger Frischkäse (fettarm) | Cottage cheese (low fat) | Requesón granulado bajo en grasa ; 70 ; 12 ; Becher=200
Griechischer Joghurt 0 % | Greek yoghurt 0 % | Yogur griego 0 % ; 55 ; 10 ; Becher=170 | EL=20
Griechischer Joghurt 2 % | Greek yoghurt 2 % | Yogur griego 2 % ; 75 ; 9 ; Becher=170
Naturjoghurt fettarm 1,5 % | Low-fat plain yoghurt 1.5 % | Yogur natural bajo en grasa ; 48 ; 4 ; Becher=150 | EL=20
Joghurt 0,1 % | Fat-free yoghurt | Yogur desnatado ; 40 ; 4.5 ; Becher=150
Laktosefreier Joghurt | Lactose-free yoghurt | Yogur sin lactosa ; 60 ; 4 ; Becher=150
Skyr Vanille | Vanilla skyr | Skyr vainilla ; 80 ; 9 ; Becher=150
Skyr Erdbeere | Strawberry skyr | Skyr fresa ; 78 ; 9 ; Becher=150
Eiweißpudding (Schoko) | Protein pudding (chocolate) | Pudin proteico (chocolate) ; 75 ; 10 ; Becher=200
Milch 0,5 % | Skimmed milk 0.5 % | Leche desnatada ; 35 ; 3.5 ; Glas=250
Leichtmilch 1,5 % | Semi-skimmed milk 1.5 % | Leche semidesnatada ; 47 ; 3.4 ; Glas=250
Cremefine 7 % | Cremefine 7 % cooking cream | Crema para cocinar 7 % ; 86 ; 3 ; EL=15 | Packung=250
Cremefine 15 % | Cremefine 15 % | Crema para cocinar 15 % ; 160 ; 2.8 ; EL=15 | Packung=250
Leichter Rahm / Kochrahm 10 % | Light cream 10 % | Nata ligera 10 % ; 120 ; 3 ; EL=15 | Becher=200
Sauerrahm 15 % | Sour cream 15 % | Nata agria 15 % ; 160 ; 2.8 ; EL=15 | Becher=200
Frischkäse (mager / 0,2 %) | Fat-free cream cheese | Queso crema desnatado ; 70 ; 11 ; EL=20 | Packung=200
Hirtenkäse light | Light white cheese | Queso blanco light ; 160 ; 19 ; Portion=50
Feta light | Light feta | Feta light ; 180 ; 20 ; Portion=50
Reibekäse light | Light grated cheese | Queso rallado light ; 260 ; 30 ; Handvoll=30 | EL=8
Gouda light | Light gouda | Gouda light ; 270 ; 30 ; Scheibe=20
Hüttenkäse mit Kräutern | Herb cottage cheese | Requesón con hierbas ; 100 ; 11 ; Becher=200
Parmesan (gerieben) | Grated parmesan | Parmesano rallado ; 400 ; 35 ; EL=7
Raclettekäse | Raclette cheese | Queso raclette ; 350 ; 23 ; Scheibe=30
Schafskäse | Sheep's cheese | Queso de oveja ; 260 ; 17 ; Portion=50
Ziegenfrischkäse | Fresh goat cheese | Queso fresco de cabra ; 250 ; 12 ; Portion=30
Milchshake (Fastfood) | Fast food milkshake | Batido de comida rápida ; 110 ; 3 ; Becher=400
Ehrmann High Protein Joghurt Vanille | Ehrmann high protein yoghurt vanilla | Yogur Ehrmann proteico vainilla ; 70 ; 10 ; Becher=200
Ehrmann High Protein Drink Schoko | Ehrmann high protein drink chocolate | Bebida proteica Ehrmann chocolate ; 60 ; 8 ; Flasche=250
Müller High Protein Pudding | Müller high protein pudding | Pudin proteico Müller ; 75 ; 10 ; Becher=200
Arla Protein Joghurt | Arla protein yoghurt | Yogur proteico Arla ; 65 ; 10 ; Becher=200
Milram Kefir | Milram kefir | Kéfir Milram ; 60 ; 3.3 ; Glas=250
Weihenstephan Rahmjoghurt | Weihenstephan cream yoghurt | Yogur cremoso Weihenstephan ; 120 ; 3 ; Becher=150
Bauer Fruchtjoghurt | Bauer fruit yoghurt | Yogur de frutas Bauer ; 100 ; 3.5 ; Becher=150
Zott Monte Drink | Zott Monte drink | Bebida Zott Monte ; 90 ; 3 ; Flasche=200
Dr. Oetker Grießpudding | Dr. Oetker semolina pudding | Pudin de sémola Dr. Oetker ; 110 ; 3.5 ; Becher=150
Alpro Skyr-Style | Alpro skyr style | Alpro estilo skyr ; 60 ; 10 ; Becher=150
Philadelphia Balance | Philadelphia balance | Philadelphia balance ; 150 ; 7 ; EL=15
Kiri (Würfel) | Kiri (portion) | Kiri (porción) ; 340 ; 7 ; Würfel=18
Bresso | Bresso | Bresso ; 280 ; 7 ; EL=15
Président Camembert | Président camembert | Camembert Président ; 300 ; 20 ; Ecke=30
Galbani Mozzarella | Galbani mozzarella | Mozzarella Galbani ; 250 ; 18 ; Kugel=125
Galbani Ricotta | Galbani ricotta | Ricotta Galbani ; 150 ; 8 ; EL=20
Grünländer | Grünländer cheese | Queso Grünländer ; 350 ; 24 ; Scheibe=20
Milkana Schmelzkäse | Milkana processed cheese | Queso fundido Milkana ; 250 ; 12 ; Ecke=25
Patros Feta | Patros feta | Feta Patros ; 270 ; 17 ; Portion=50
Gervais Hüttenkäse | Gervais cottage cheese | Requesón Gervais ; 100 ; 12 ; Becher=200
Schmelzkäse light | Light processed cheese | Queso fundido light ; 170 ; 14 ; EL=20 | Packung=200
Landliebe Landmilch 3,8 % | Landliebe whole milk 3.8% | Landliebe leche entera 3,8 % ; 67 ; 3.4 ; Glas=250
Landliebe Joghurt mild | Landliebe mild yoghurt | Landliebe yogur suave ; 75 ; 3.8 ; Becher=150
Landliebe Fruchtjoghurt Erdbeere | Landliebe strawberry yoghurt | Landliebe yogur de fresa ; 100 ; 3.3 ; Becher=150
Landliebe Grießpudding | Landliebe semolina pudding | Landliebe pudin de sémola ; 120 ; 3.5 ; Becher=150
Landliebe Sahnepudding Vanille | Landliebe vanilla cream pudding | Landliebe pudin de vainilla ; 130 ; 3 ; Becher=150
Landliebe Butter | Landliebe butter | Mantequilla Landliebe ; 740 ; 0.7 ; TL=5 | EL=12
Landliebe Quark | Landliebe quark | Requesón Landliebe ; 140 ; 11 ; EL=30
Müller Müllermilch Schoko | Müllermilch chocolate | Müllermilch chocolate ; 65 ; 3.4 ; Flasche=400
Müller Müllermilch Erdbeer | Müllermilch strawberry | Müllermilch fresa ; 65 ; 3.3 ; Flasche=400
Müller Müllermilch Protein | Müllermilch protein | Müllermilch proteína ; 60 ; 7 ; Flasche=400
Danone Activia Natur | Danone Activia plain | Danone Activia natural ; 70 ; 4 ; Becher=115
Danone Fruchtzwerge | Danone Fruchtzwerge | Danone Petit Suisse ; 100 ; 5.5 ; Becher=50
Danone Dany Sahne Vanille | Danone Dany vanilla | Danone Dany vainilla ; 120 ; 2.5 ; Becher=115
Danone Oikos Griechischer Joghurt | Danone Oikos Greek yoghurt | Danone Oikos yogur griego ; 120 ; 4 ; Becher=115
Zott Sahnejoghurt | Zott cream yoghurt | Zott yogur cremoso ; 120 ; 3 ; Becher=150
Zott Sahnepudding | Zott cream pudding | Zott pudin cremoso ; 130 ; 3 ; Becher=150
Bärenmarke Alpenmilch 3,8 % | Bärenmarke alpine milk 3.8% | Bärenmarke leche alpina 3,8 % ; 67 ; 3.4 ; Glas=250
Weihenstephan H-Milch 1,5 % | Weihenstephan UHT milk 1.5% | Weihenstephan leche UHT 1,5 % ; 47 ; 3.4 ; Glas=250
Arla Buko Frischkäse | Arla Buko cream cheese | Arla Buko queso crema ; 250 ; 6 ; EL=15
Exquisa Frischkäse 0,2 % | Exquisa cream cheese 0.2% | Exquisa queso crema 0,2 % ; 65 ; 11 ; EL=15
Kerrygold Original Irische Butter | Kerrygold Irish butter | Mantequilla irlandesa Kerrygold ; 740 ; 0.6 ; TL=5 | EL=12
Leerdammer Original | Leerdammer original | Leerdammer original ; 360 ; 27 ; Scheibe=25
Gouda jung (Frau Antje) | Young gouda | Gouda tierno ; 360 ; 24 ; Scheibe=25
Bergader Bavaria Blu | Bavaria Blu | Bavaria Blu ; 420 ; 14 ; Portion=30
Rougette Grillkäse | Rougette grilling cheese | Queso para la parrilla Rougette ; 320 ; 20 ; Stück=90
Hochland Grünländer Scheiben | Hochland Grünländer slices | Lonchas Hochland Grünländer ; 350 ; 24 ; Scheibe=20
Patros Natur | Patros feta | Patros feta ; 270 ; 17 ; Portion=50

@Wurst, Fleisch & Fisch | Meat, cold cuts & fish | Embutidos, carne y pescado ; 🥓
Rauchwurst (Rookworst) | Smoked sausage (rookworst) | Salchicha ahumada (rookworst) ; 300 ; 13 ; Stück=275 | Scheibe=15
Mettwurst | Mettwurst | Mettwurst ; 400 ; 17 ; Scheibe=10 | Stück=100
Salami | Salami | Salami ; 380 ; 22 ; Scheibe=8
Kochschinken | Cooked ham | Jamón york ; 110 ; 19 ; Scheibe=20
Jamón serrano | Serrano ham | Jamón serrano ; 240 ; 30 ; Scheibe=15 | Portion=50
Chorizo | Chorizo | Chorizo ; 450 ; 24 ; Scheibe=8 | Portion=50
Lomo embuchado | Cured pork loin | Lomo embuchado ; 250 ; 40 ; Scheibe=8
Hähnchenbrust-Aufschnitt | Chicken breast slices | Pechuga de pollo en lonchas ; 100 ; 20 ; Scheibe=15
Putenbrust-Aufschnitt | Turkey breast slices | Pechuga de pavo en lonchas ; 100 ; 21 ; Scheibe=15
Lachsschinken | Lachsschinken (cured loin) | Lomo curado ; 120 ; 21 ; Scheibe=10
Leberwurst | Liver sausage | Paté de hígado ; 300 ; 14 ; Portion=25
Mortadella | Mortadella | Mortadela ; 300 ; 15 ; Scheibe=20
Leberkäse / Fleischkäse | Leberkäse (meatloaf) | Leberkäse ; 280 ; 12 ; Scheibe=100
Wiener Würstchen | Frankfurter sausage | Salchicha de Frankfurt ; 270 ; 13 ; Stück=50
Weißwurst | Weisswurst | Salchicha blanca bávara ; 280 ; 11 ; Stück=80
Bacon | Bacon | Beicon ; 400 ; 14 ; Scheibe=10
Mett | Seasoned raw pork | Carne picada cruda (mett) ; 260 ; 18 ; Portion=50
Räucherlachs | Smoked salmon | Salmón ahumado ; 180 ; 20 ; Scheibe=20
Thunfisch (Dose) | Tuna (canned) | Atún en lata ; 110 ; 25 ; Dose=150
Garnelen | Prawns / shrimp | Gambas ; 90 ; 19 ; Portion=100
Hackfleisch gemischt (roh) | Mixed minced meat (raw) | Carne picada mixta cruda ; 245 ; 18 ; Packung=500 | Portion=125
Rinderhack (roh) | Minced beef (raw) | Carne picada de ternera ; 215 ; 19 ; Packung=500 | Portion=125
Rinderhack mager 5 % (roh) | Lean minced beef 5 % (raw) | Carne picada magra 5 % ; 125 ; 21 ; Packung=400 | Portion=125
Hähnchenhack (roh) | Minced chicken (raw) | Carne picada de pollo ; 145 ; 19 ; Packung=400
Putenhack (roh) | Minced turkey (raw) | Carne picada de pavo ; 150 ; 20 ; Packung=400
Hähnchenbrust (roh) | Chicken breast (raw) | Pechuga de pollo cruda ; 110 ; 23 ; Stück=180 | Packung=400
Hähnchenschenkel (roh) | Chicken thigh (raw) | Muslo de pollo crudo ; 170 ; 18 ; Stück=200
Hähnchenflügel (roh) | Chicken wings (raw) | Alitas de pollo crudas ; 200 ; 18 ; Stück=40
Putenbrust (roh) | Turkey breast (raw) | Pechuga de pavo cruda ; 105 ; 24 ; Stück=200
Putenschnitzel (roh) | Turkey escalope (raw) | Filete de pavo crudo ; 105 ; 24 ; Stück=150
Schweineschnitzel (roh) | Pork escalope (raw) | Filete de cerdo crudo ; 115 ; 22 ; Stück=150
Schweinefilet (roh) | Pork tenderloin (raw) | Solomillo de cerdo crudo ; 120 ; 22 ; Portion=150
Schweinebauch (roh) | Pork belly (raw) | Panceta cruda ; 400 ; 15 ; Scheibe=100
Kotelett (roh) | Pork chop (raw) | Chuleta de cerdo cruda ; 190 ; 20 ; Stück=200
Kassler | Smoked pork loin | Lomo de cerdo ahumado ; 135 ; 20 ; Scheibe=100
Rindersteak (roh) | Beef steak (raw) | Filete de ternera crudo ; 150 ; 22 ; Stück=200
Rinderfilet (roh) | Beef fillet (raw) | Solomillo de ternera crudo ; 120 ; 21 ; Stück=180
Rindergulasch (roh) | Beef for stew (raw) | Ternera para guisar cruda ; 140 ; 21 ; Portion=200
Lammkotelett (roh) | Lamb chop (raw) | Chuleta de cordero cruda ; 250 ; 17 ; Stück=80
Hähnchenbrust-Streifen (gegart) | Cooked chicken strips | Tiras de pollo cocinadas ; 140 ; 24 ; Packung=150
Chicken Nuggets (TK, roh) | Frozen chicken nuggets | Nuggets congelados ; 230 ; 14 ; Stück=18
Cevapcici | Cevapcici | Cevapcici ; 260 ; 16 ; Stück=30
Merguez | Merguez | Merguez ; 300 ; 14 ; Stück=60
Nürnberger Rostbratwürstchen | Nuremberg sausages | Salchichas de Núremberg ; 330 ; 14 ; Stück=25
Grillwurst | Grilling sausage | Salchicha para la parrilla ; 300 ; 13 ; Stück=100
Geflügelwürstchen | Poultry sausages | Salchichas de ave ; 210 ; 13 ; Stück=50
Lyoner | Lyoner | Lyoner ; 290 ; 12 ; Scheibe=20
Bierschinken | Ham sausage | Embutido de jamón ; 220 ; 16 ; Scheibe=20
Teewurst | Spreadable sausage | Paté de embutido ahumado ; 370 ; 13 ; Portion=20
Cabanossi | Cabanossi | Cabanossi ; 450 ; 22 ; Stück=30
Landjäger | Landjäger | Landjäger ; 470 ; 24 ; Stück=50
Schinkenwürfel | Diced ham | Taquitos de jamón ; 200 ; 17 ; Packung=125 | Portion=50
Speckwürfel | Diced bacon | Taquitos de bacon ; 330 ; 15 ; Packung=125 | Portion=50
Prosciutto | Prosciutto | Prosciutto ; 250 ; 27 ; Scheibe=15
Bresaola | Bresaola | Bresaola ; 150 ; 32 ; Scheibe=10
Pastrami | Pastrami | Pastrami ; 150 ; 22 ; Scheibe=20
Roastbeef (Aufschnitt) | Roast beef (sliced) | Rosbif en lonchas ; 130 ; 23 ; Scheibe=20
Salchichón | Salchichón | Salchichón ; 400 ; 26 ; Scheibe=8
Fuet | Fuet | Fuet ; 450 ; 25 ; Stück=150 | Scheibe=5
Jamón ibérico | Ibérico ham | Jamón ibérico ; 375 ; 30 ; Scheibe=15
Sobrasada | Sobrasada | Sobrasada ; 530 ; 14 ; EL=20
Morcilla | Morcilla | Morcilla ; 380 ; 15 ; Scheibe=30
Butifarra | Butifarra | Butifarra ; 300 ; 15 ; Stück=100
Lachs (roh) | Salmon fillet (raw) | Salmón crudo ; 205 ; 20 ; Filet=125
Kabeljau (roh) | Cod (raw) | Bacalao fresco ; 80 ; 18 ; Filet=150
Seelachs (roh) | Pollock (raw) | Abadejo crudo ; 80 ; 18 ; Filet=125
Pangasius (roh) | Pangasius (raw) | Panga cruda ; 80 ; 15 ; Filet=150
Forelle | Trout | Trucha ; 110 ; 20 ; Stück=250
Thunfisch (Dose, in Öl) | Tuna in oil (canned) | Atún en aceite ; 200 ; 25 ; Dose (abgetropft)=140
Sardinen (Dose) | Sardines (canned) | Sardinas en lata ; 210 ; 24 ; Dose=90
Makrele (geräuchert) | Smoked mackerel | Caballa ahumada ; 230 ; 19 ; Filet=100
Hering in Tomatensoße | Herring in tomato sauce | Arenque en tomate ; 190 ; 14 ; Dose=200
Bismarckhering | Pickled herring | Arenque en vinagre ; 210 ; 16 ; Stück=70
Krabben (Nordsee) | Brown shrimp | Quisquillas ; 90 ; 19 ; Portion=50
Surimi | Surimi sticks | Palitos de cangrejo ; 100 ; 8 ; Stück=17
Muscheln (gekocht) | Mussels (cooked) | Mejillones cocidos ; 120 ; 17 ; Portion=200
Tintenfischringe (roh) | Squid rings (raw) | Anillas de calamar crudas ; 80 ; 16 ; Portion=150
Boquerones | Marinated anchovies | Boquerones en vinagre ; 150 ; 18 ; Portion=60
Anchovis | Anchovies | Anchoas ; 210 ; 29 ; Stück=4
Rügenwalder Teewurst | Rügenwalder Teewurst | Teewurst Rügenwalder ; 370 ; 14 ; Portion=20
Rügenwalder Veggie-Schinken Spicker | Rügenwalder veggie ham | Jamón vegetal Rügenwalder ; 160 ; 16 ; Scheibe=10
Like Meat Like Chicken | Like Meat like chicken | Like Meat como pollo ; 180 ; 21 ; Portion=90
Gutfried Geflügelwurst | Gutfried poultry sausage | Embutido de ave Gutfried ; 180 ; 14 ; Scheibe=15
Herta Finesse Schinken | Herta Finesse ham | Jamón Herta Finesse ; 110 ; 19 ; Scheibe=15
Meica Wiener Würstchen | Meica Wiener sausages | Salchichas Meica ; 270 ; 13 ; Stück=50
Wiesenhof Hähnchen-Brustfilet Aufschnitt | Wiesenhof chicken breast slices | Pechuga de pollo en lonchas Wiesenhof ; 105 ; 22 ; Scheibe=15
ElPozo Pechuga de Pavo | ElPozo turkey breast | Pechuga de pavo ElPozo ; 100 ; 19 ; Scheibe=10
Campofrío Chorizo | Campofrío chorizo | Chorizo Campofrío ; 450 ; 24 ; Scheibe=5
Calvo Atún Claro | Calvo light tuna | Atún claro Calvo ; 200 ; 25 ; Dose (abgetropft)=52
Isabel Atún | Isabel tuna | Atún Isabel ; 200 ; 25 ; Dose (abgetropft)=60
La Piara Paté | La Piara pâté | Paté La Piara ; 300 ; 12 ; Portion=25
Hähnchenbrustfilet (roh) | Chicken breast fillet (raw) | Filete de pechuga de pollo crudo ; 105 ; 23.5 ; Stück=170 | Packung=600
Hühnerfleisch (Brust, gebraten) | Chicken (breast, fried) | Pollo (pechuga, a la plancha) ; 150 ; 30 ; Portion=150
Hähnchen-Innenfilet (roh) | Chicken mini fillets (raw) | Solomillos de pollo crudos ; 105 ; 23 ; Stück=40
Hähnchen (gegrillt, ganz) | Rotisserie chicken | Pollo asado ; 210 ; 24 ; Viertel=250 | Hälfte=500
Hähnchenkeule (gebraten) | Fried chicken leg | Muslo de pollo asado ; 215 ; 24 ; Stück=180
Putenbrust (gebraten) | Fried turkey breast | Pechuga de pavo a la plancha ; 140 ; 30 ; Portion=150
Putenbrust-Aufschnitt (mager) | Lean turkey breast slices | Pechuga de pavo en lonchas ; 100 ; 20 ; Scheibe=15 | Packung=100
Rinderhack (Tatar, fettarm) | Lean minced beef (tartare) | Carne picada de ternera magra ; 120 ; 21 ; Packung=250 | Portion=150
Rinderhack 20 % Fett | Minced beef 20 % fat | Carne picada de ternera 20 % ; 250 ; 18 ; Packung=500
Rinderhüftsteak (roh) | Beef rump steak (raw) | Cadera de ternera cruda ; 115 ; 22 ; Stück=200
Rumpsteak (roh) | Sirloin steak (raw) | Lomo de ternera crudo ; 160 ; 22 ; Stück=220
Rindersteak (gebraten) | Fried beef steak | Filete de ternera a la plancha ; 190 ; 29 ; Stück=180
Schweinekarree / Karreesteak (roh) | Pork loin steak (raw) | Chuleta de lomo de cerdo cruda ; 125 ; 22 ; Stück=150 | Packung=1000
Schweinefilet (gebraten) | Fried pork tenderloin | Solomillo de cerdo a la plancha ; 155 ; 28 ; Portion=150
Schnitzel (Schwein, paniert, gebraten) | Breaded pork schnitzel | Escalope de cerdo empanado ; 230 ; 18 ; Stück=180
Wiener Schnitzel (Kalb) | Wiener schnitzel (veal) | Escalope vienés ; 220 ; 19 ; Stück=180
Leberkäse | Leberkäse | Leberkäse ; 300 ; 12 ; Scheibe=100
Leberkäsesemmel | Leberkäse roll | Bocadillo de leberkäse ; 290 ; 11 ; Stück=170
Fleischlaibchen / Frikadelle | Meat patty | Hamburguesa casera ; 230 ; 15 ; Stück=90
Hackbällchen (Rind, gebraten) | Beef meatballs (fried) | Albóndigas de ternera ; 220 ; 17 ; Stück=25 | Portion (8)=200
Geflügelwurst | Poultry sausage | Salchicha de ave ; 210 ; 14 ; Stück=80 | Scheibe=15
Geflügel-Bratwurst | Poultry bratwurst | Salchicha de ave a la parrilla ; 200 ; 16 ; Stück=100
Geflügel-Wiener | Poultry frankfurter | Salchicha de ave tipo Viena ; 200 ; 13 ; Stück=50
Kabanos (Geflügel) | Poultry kabanos | Kabanos de ave ; 350 ; 25 ; Stück=30
Schinken (gekocht, mager) | Lean cooked ham | Jamón cocido magro ; 105 ; 19 ; Scheibe=20
Speck (Bauchspeck) | Bacon (belly) | Panceta ; 450 ; 12 ; Scheibe=15
Bacon (gebraten) | Fried bacon | Bacon frito ; 540 ; 37 ; Scheibe=10
Fischfilet (natur, roh) | White fish fillet (raw) | Filete de pescado blanco crudo ; 80 ; 18 ; Filet=125
Scholle (roh) | Plaice (raw) | Platija cruda ; 85 ; 17 ; Filet=125
Rotbarsch (roh) | Redfish (raw) | Gallineta cruda ; 105 ; 18 ; Filet=125
Zander (roh) | Pike-perch (raw) | Lucioperca cruda ; 85 ; 19 ; Filet=150
Dorade (roh) | Sea bream (raw) | Dorada cruda ; 100 ; 20 ; Stück=300
Lachsfilet (gebraten) | Fried salmon fillet | Salmón a la plancha ; 230 ; 25 ; Filet=125
Garnelen (gekocht) | Cooked prawns | Gambas cocidas ; 95 ; 20 ; Portion=150 | Handvoll=60
Garnelen (TK, roh) | Frozen raw prawns | Gambas congeladas crudas ; 70 ; 16 ; Portion=150 | Packung=400
Thunfisch im eigenen Saft | Tuna in brine | Atún al natural ; 110 ; 25 ; Dose (abgetropft)=140
Thunfisch-Steak (roh) | Tuna steak (raw) | Filete de atún crudo ; 110 ; 24 ; Stück=150
Fischstäbchen (gebacken) | Baked fish fingers | Varitas de pescado horneadas ; 210 ; 13 ; Stück=30
Mock Duck (Dose) | Mock duck (canned) | Pato vegano en lata ; 150 ; 20 ; Dose (abgetropft)=180 | Portion=100
Rinderhack (gebraten) | Beef mince (fried) | Carne picada de ternera frita ; 250 ; 26 ; Portion=120
Rindfleisch (gebraten) | Beef (fried) | Ternera a la plancha ; 190 ; 29 ; Portion=120
Schweinefleisch (gebraten) | Pork (fried) | Cerdo a la plancha ; 210 ; 28 ; Portion=120
Lachs (gebraten) | Salmon (fried) | Salmón a la plancha ; 220 ; 25 ; Stück=125
Fischfilet (gebraten) | White fish fillet (fried) | Filete de pescado a la plancha ; 120 ; 23 ; Stück=125
Tafelspitz (roh) | Beef rump cap (raw) | Tapa de cadera de ternera cruda ; 140 ; 21 ; Portion=200
Rinderrouladen (roh) | Beef roulade slices (raw) | Filetes de ternera para rollitos crudos ; 130 ; 22 ; Stück=175
Thüringer Rostbratwurst | Thuringian sausage | Salchicha de Turingia ; 300 ; 14 ; Stück=100
Nürnberger Rostbratwürstchen (3 Stück) | Nuremberg sausages (3) | Salchichas de Núremberg (3) ; 310 ; 14 ; Portion=75 | Stück=25
Krakauer | Krakauer sausage | Krakauer ; 250 ; 15 ; Stück=100
Käsekrainer (Stück) | Käsekrainer (piece) | Käsekrainer (unidad) ; 310 ; 13 ; Stück=120
Debreziner | Debreziner sausage | Debreziner ; 290 ; 13 ; Stück=80
Weißwurst (Stück) | Weisswurst (piece) | Salchicha blanca (unidad) ; 270 ; 11 ; Stück=80
Leberkäse (Scheibe) | Leberkäse (slice) | Leberkäse (loncha) ; 290 ; 12 ; Scheibe=100
Kalbsschnitzel (roh) | Veal escalope (raw) | Escalope de ternera crudo ; 110 ; 22 ; Stück=150
Schweinebraten (Schulter, roh) | Pork shoulder (raw) | Paletilla de cerdo cruda ; 180 ; 18 ; Portion=200
Jagdwurst | Jagdwurst (German sausage) | Jagdwurst (embutido alemán) ; 230 ; 15 ; Scheibe=30 | Portion=150
Entenbrust (roh) | Duck breast (raw) | Magret de pato crudo ; 200 ; 19 ; Stück=300

@Snacks & Süßes | Snacks & sweets | Snacks y dulces ; 🍫
Pringles Original | Pringles Original | Pringles Original ; 520 ; 4.5 ; Handvoll=25 | kleine Dose=40 | Dose=165
Pringles Sour Cream & Onion | Pringles Sour Cream & Onion | Pringles Sour Cream & Onion ; 515 ; 5 ; Handvoll=25 | Dose=165
Lay's Classic | Lay's Classic | Lay's Clásicas ; 540 ; 6 ; Handvoll=25 | Tüte=150
Chio Chips | Chio chips | Patatas Chio ; 530 ; 6 ; Handvoll=25 | Tüte=175
Kartoffelchips | Potato crisps / chips | Patatas fritas de bolsa ; 530 ; 6 ; Handvoll=25 | Tüte=175
Erdnussflips | Peanut puffs | Gusanitos de cacahuete ; 520 ; 12 ; Handvoll=25 | Tüte=200
Salzstangen | Pretzel sticks | Palitos salados ; 360 ; 10 ; Handvoll=20
Popcorn (süß) | Popcorn (sweet) | Palomitas dulces ; 450 ; 6 ; Portion=50
Popcorn (salzig) | Popcorn (salted) | Palomitas saladas ; 400 ; 10 ; Portion=30
Tortilla-Chips | Tortilla chips | Nachos (bolsa) ; 490 ; 7 ; Handvoll=25 | Tüte=200
Erdnüsse (geröstet) | Peanuts (roasted) | Cacahuetes tostados ; 600 ; 25 ; Handvoll=30
Nüsse gemischt | Mixed nuts | Frutos secos variados ; 600 ; 18 ; Handvoll=30
Mandeln | Almonds | Almendras ; 600 ; 21 ; Handvoll=30
Cashews | Cashews | Anacardos ; 580 ; 18 ; Handvoll=30
Walnüsse | Walnuts | Nueces ; 650 ; 15 ; Handvoll=30
Studentenfutter | Trail mix | Mezcla de frutos secos ; 480 ; 13 ; Handvoll=30
Pipas (Sonnenblumenkerne) | Sunflower seeds | Pipas ; 580 ; 21 ; Handvoll=30
Reiswaffel | Rice cake | Tortita de arroz ; 380 ; 8 ; Stück=8
Schoko-Reiswaffel | Chocolate rice cake | Tortita de arroz con chocolate ; 480 ; 7 ; Stück=17
Milchschokolade | Milk chocolate | Chocolate con leche ; 540 ; 7 ; Stück (Rippe)=10 | Tafel=100
Zartbitterschokolade | Dark chocolate | Chocolate negro ; 550 ; 8 ; Stück (Rippe)=10 | Tafel=100
Weiße Schokolade | White chocolate | Chocolate blanco ; 560 ; 6 ; Stück (Rippe)=10 | Tafel=100
Milka Alpenmilch | Milka milk chocolate | Milka chocolate con leche ; 530 ; 6.3 ; Stück (Rippe)=4.5 | Tafel=100
Ritter Sport (Vollmilch) | Ritter Sport (milk chocolate) | Ritter Sport (chocolate con leche) ; 550 ; 8 ; Stück=6 | Tafel=100
Lindt Lindor Kugel | Lindt Lindor truffle | Bombón Lindt Lindor ; 620 ; 5 ; Stück=12.5
Mars | Mars | Mars ; 450 ; 4 ; Riegel=51
Snickers | Snickers | Snickers ; 490 ; 9 ; Riegel=50
Twix | Twix | Twix ; 500 ; 5 ; Riegel=25 | Packung (2 Riegel)=50
KitKat | KitKat | KitKat ; 520 ; 7 ; Riegel=41
Bounty | Bounty | Bounty ; 490 ; 4 ; Riegel=28 | Packung=57
Balisto | Balisto | Balisto ; 500 ; 7 ; Riegel=18.5
Knoppers | Knoppers | Knoppers ; 545 ; 9 ; Stück=25
Duplo | Duplo | Duplo ; 550 ; 6 ; Riegel=18
Kinder Riegel | Kinder chocolate bar | Kinder Chocolate barrita ; 560 ; 9 ; Riegel=21
Kinder Bueno | Kinder Bueno | Kinder Bueno ; 570 ; 9 ; Riegel=21 | Packung (2)=43
Kinder Pingui | Kinder Pingui | Kinder Pingui ; 450 ; 7 ; Stück=30
Kinder Country | Kinder Country | Kinder Country ; 560 ; 9 ; Riegel=23.5
Milchschnitte | Milk-Slice (Kinder) | Kinder Milk-Slice ; 420 ; 8 ; Stück=28
Hanuta | Hanuta | Hanuta ; 540 ; 8 ; Stück=22
Yogurette | Yogurette | Yogurette ; 560 ; 5 ; Riegel=12.5
Toffifee | Toffifee | Toffifee ; 510 ; 6 ; Stück=8
Merci | Merci chocolates | Bombones Merci ; 560 ; 8 ; Riegel=10
M&M's | M&M's | M&M's ; 490 ; 5 ; Handvoll=25 | Tüte=45
Ferrero Rocher | Ferrero Rocher | Ferrero Rocher ; 600 ; 8 ; Stück=12.5
Raffaello | Raffaello | Raffaello ; 630 ; 7 ; Stück=10
Gummibärchen | Gummy bears | Ositos de goma ; 340 ; 7 ; Handvoll=25 | Tüte=200
Fruchtgummi / Lakritz | Fruit gums / liquorice | Gominolas / regaliz ; 340 ; 4 ; Handvoll=25
Skittles | Skittles | Skittles ; 400 ; 0 ; Handvoll=25 | Tüte=38
Butterkekse (Leibniz) | Butter biscuits (Leibniz) | Galletas de mantequilla (Leibniz) ; 440 ; 7.5 ; Stück=8
Schokokekse (Prinzenrolle) | Chocolate sandwich biscuits | Galletas rellenas de chocolate ; 480 ; 6 ; Stück=13
Pick Up! (Leibniz) | Pick Up! (Leibniz) | Pick Up! (Leibniz) ; 510 ; 7 ; Riegel=28
Oreo | Oreo | Oreo ; 480 ; 5 ; Stück=11
Galletas María | Marie biscuits | Galletas María ; 440 ; 7 ; Stück=6
Waffeln (Manner) | Wafers (Manner) | Barquillos (Manner) ; 520 ; 6 ; Stück=7
Müsliriegel | Cereal bar | Barrita de cereales ; 400 ; 6 ; Riegel=25
Proteinriegel | Protein bar | Barrita de proteínas ; 350 ; 33 ; Riegel=60
Eis Vanille | Vanilla ice cream | Helado de vainilla ; 200 ; 3.5 ; Kugel=60
Eis Schokolade | Chocolate ice cream | Helado de chocolate ; 210 ; 4 ; Kugel=60
Ben & Jerry's | Ben & Jerry's | Ben & Jerry's ; 260 ; 4 ; Becher (465 ml)=410 | Portion=100
Magnum | Magnum | Magnum ; 330 ; 4 ; Stück=75
Cornetto | Cornetto | Cornetto ; 300 ; 4 ; Stück=75
Wassereis | Ice lolly | Polo de hielo ; 80 ; 0 ; Stück=60
Nutella | Nutella | Nutella ; 540 ; 6 ; TL=10 | Portion=15
Marmelade | Jam | Mermelada ; 250 ; 0.4 ; TL=10 | Portion=20
Erdnussbutter | Peanut butter | Crema de cacahuete ; 600 ; 25 ; EL=15 | TL=7
Tiramisu | Tiramisu | Tiramisú ; 280 ; 5 ; Portion=150
Mousse au Chocolat | Chocolate mousse | Mousse de chocolate ; 290 ; 5 ; Portion=100
Panna cotta | Panna cotta | Panna cotta ; 230 ; 3 ; Portion=120
Gebrannte Mandeln | Candied almonds | Almendras garrapiñadas ; 500 ; 13 ; Tüte=100 | Handvoll=30
Turrón | Turrón | Turrón ; 520 ; 10 ; Stück=30
Spekulatius | Speculoos biscuits | Galletas speculoos ; 480 ; 6 ; Stück=8
Dominosteine | Dominosteine | Dominosteine ; 390 ; 5 ; Stück=10
Haribo Goldbären | Haribo Gold-Bears | Haribo Ositos de Oro ; 343 ; 6.9 ; Handvoll=25 | Tüte=175
Haribo Happy Cola | Haribo Happy Cola | Haribo Happy Cola ; 343 ; 6.6 ; Handvoll=25 | Tüte=175
Haribo Color-Rado | Haribo Color-Rado | Haribo Color-Rado ; 346 ; 4.2 ; Handvoll=25 | Tüte=175
Haribo Tropifrutti | Haribo Tropifrutti | Haribo Tropifrutti ; 343 ; 6.9 ; Handvoll=25 | Tüte=175
Haribo Starmix | Haribo Starmix | Haribo Starmix ; 344 ; 6.5 ; Handvoll=25 | Tüte=175
Haribo Phantasia | Haribo Phantasia | Haribo Phantasia ; 344 ; 6.2 ; Handvoll=25 | Tüte=175
Haribo Saure Pommes | Haribo sour fries | Haribo patatas ácidas ; 350 ; 3.5 ; Handvoll=25 | Tüte=175
Haribo Pfirsiche | Haribo peaches | Haribo melocotones ; 350 ; 3.5 ; Handvoll=25 | Tüte=175
Haribo Lakritzschnecken | Haribo liquorice wheels | Haribo ruedas de regaliz ; 341 ; 3.1 ; Stück=18 | Tüte=200
Haribo Primavera Erdbeeren | Haribo strawberries | Haribo fresas ; 350 ; 3 ; Handvoll=25 | Tüte=175
Trolli Saure Glühwürmchen | Trolli sour glowworms | Trolli gusanos ácidos ; 340 ; 3.4 ; Handvoll=25 | Tüte=150
Katjes Weingummi | Katjes wine gums | Gominolas Katjes ; 340 ; 0.5 ; Handvoll=25 | Tüte=200
Nimm2 Bonbons | Nimm2 sweets | Caramelos Nimm2 ; 390 ; 0 ; Stück=4
Mentos | Mentos | Mentos ; 380 ; 0 ; Stück=2.7 | Rolle=38
Tic Tac | Tic Tac | Tic Tac ; 390 ; 0 ; Stück=0.5 | Packung=18
Chupa Chups | Chupa Chups | Chupa Chups ; 390 ; 0 ; Stück=12
Milka Noisette | Milka Noisette | Milka Noisette ; 550 ; 7 ; Stück (Rippe)=4.5 | Tafel=100
Milka Oreo | Milka Oreo | Milka Oreo ; 555 ; 6 ; Stück (Rippe)=4.5 | Tafel=100
Milka Daim | Milka Daim | Milka Daim ; 540 ; 5.5 ; Stück (Rippe)=4.5 | Tafel=100
Milka Erdbeer | Milka strawberry | Milka fresa ; 565 ; 5 ; Stück (Rippe)=4.5 | Tafel=100
Milka Ganze Haselnüsse | Milka whole hazelnuts | Milka avellanas enteras ; 555 ; 8 ; Stück=8 | Tafel=100
Milka Caramel | Milka caramel | Milka caramelo ; 525 ; 5 ; Stück (Rippe)=4.5 | Tafel=100
Milka Lu | Milka Lu | Milka Lu ; 525 ; 6.5 ; Stück (Rippe)=4.5 | Tafel=87
Ritter Sport Nugat | Ritter Sport nougat | Ritter Sport turrón ; 570 ; 6 ; Stück=6 | Tafel=100
Ritter Sport Marzipan | Ritter Sport marzipan | Ritter Sport mazapán ; 485 ; 6.5 ; Stück=6 | Tafel=100
Ritter Sport Joghurt | Ritter Sport yogurt | Ritter Sport yogur ; 580 ; 5 ; Stück=6 | Tafel=100
Ritter Sport Knusperflakes | Ritter Sport cornflakes | Ritter Sport copos crujientes ; 540 ; 7 ; Stück=6 | Tafel=100
Ritter Sport Ganze Haselnüsse | Ritter Sport whole hazelnuts | Ritter Sport avellanas enteras ; 580 ; 10 ; Stück=6 | Tafel=100
Ritter Sport Mini | Ritter Sport mini | Ritter Sport mini ; 545 ; 7 ; Stück=16.7
Lindt Excellence 70 % | Lindt Excellence 70% | Lindt Excellence 70 % ; 570 ; 9.5 ; Stück (Rippe)=10 | Tafel=100
Lindt Excellence 85 % | Lindt Excellence 85% | Lindt Excellence 85 % ; 590 ; 12 ; Stück (Rippe)=10 | Tafel=100
Lindt Goldhase | Lindt Gold Bunny | Conejito de oro Lindt ; 540 ; 7 ; Stück=100 | kleiner=50
Kinder Schokolade (Riegel) | Kinder Chocolate (bar) | Kinder Chocolate (barrita) ; 565 ; 8.7 ; Riegel=12.5
Kinder Maxi King | Kinder Maxi King | Kinder Maxi King ; 510 ; 6.5 ; Stück=35
Kinder Happy Hippo | Kinder Happy Hippo | Kinder Happy Hippo ; 565 ; 8 ; Stück=20.7
Kinder Überraschung | Kinder Surprise | Huevo Kinder Sorpresa ; 560 ; 8.5 ; Stück=20
Kinder Delice | Kinder Délice | Kinder Delice ; 440 ; 6 ; Stück=42
Giotto | Giotto | Giotto ; 570 ; 7 ; Stück=4.3
Mon Chéri | Mon Chéri | Mon Chéri ; 460 ; 3 ; Stück=10.5
Ferrero Küsschen | Ferrero Küsschen | Ferrero Küsschen ; 580 ; 8.5 ; Stück=8.6
Schogetten | Schogetten | Schogetten ; 550 ; 6 ; Stück=4.2
Toblerone | Toblerone | Toblerone ; 530 ; 5.5 ; Stück (Dreieck)=8 | Riegel=100
Milky Way | Milky Way | Milky Way ; 450 ; 4 ; Riegel=21.5
KitKat Chunky | KitKat Chunky | KitKat Chunky ; 520 ; 6.5 ; Riegel=40
M&M's Peanut | M&M's Peanut | M&M's cacahuete ; 500 ; 9.5 ; Handvoll=25 | Tüte=45
Maltesers | Maltesers | Maltesers ; 500 ; 8 ; Handvoll=20 | Tüte=37
Corny Schoko (Müsliriegel) | Corny chocolate cereal bar | Barrita Corny chocolate ; 440 ; 6.5 ; Riegel=25
Corny Protein | Corny protein bar | Barrita Corny proteína ; 400 ; 30 ; Riegel=30
Nature Valley Crunchy | Nature Valley Crunchy | Nature Valley Crunchy ; 470 ; 8 ; Riegel=21
Pringles Paprika | Pringles Paprika | Pringles pimentón ; 520 ; 5 ; Handvoll=25 | kleine Dose=40 | Dose=165
Pringles Hot & Spicy | Pringles Hot & Spicy | Pringles Hot & Spicy ; 515 ; 5 ; Handvoll=25 | Dose=165
funny-frisch Chipsfrisch ungarisch | funny-frisch paprika crisps | Patatas funny-frisch pimentón ; 530 ; 6 ; Handvoll=25 | Tüte=175
Lay's Paprika | Lay's Paprika | Lay's pimentón ; 530 ; 6 ; Handvoll=25 | Tüte=150
Doritos Nacho Cheese | Doritos Nacho Cheese | Doritos Nacho Cheese ; 500 ; 7 ; Handvoll=25 | Tüte=110
Crunchips | Crunchips | Crunchips ; 530 ; 6 ; Handvoll=25 | Tüte=175
Leibniz Choco | Leibniz chocolate biscuits | Galletas Leibniz choco ; 510 ; 7 ; Stück=12.5
Lotus Biscoff | Lotus Biscoff | Galletas Lotus Biscoff ; 485 ; 4.9 ; Stück=7.8
Conguitos | Conguitos (chocolate peanuts) | Conguitos ; 520 ; 10 ; Handvoll=25 | Tüte=80
Lacasitos | Lacasitos | Lacasitos ; 480 ; 5 ; Handvoll=25 | Tubo=40
Phoskitos | Phoskitos | Phoskitos ; 430 ; 4 ; Stück=36
Bollycao | Bollycao | Bollycao ; 400 ; 8 ; Stück=60
Donettes | Donettes | Donettes ; 500 ; 5 ; Stück=15
Filipinos | Filipinos | Filipinos ; 520 ; 7 ; Stück=7
Galletas Príncipe | Príncipe biscuits | Galletas Príncipe ; 480 ; 6 ; Stück=11
Palmera de chocolate | Chocolate palmier | Palmera de chocolate ; 520 ; 6 ; Stück=100
Gusanitos | Corn puffs (Gusanitos) | Gusanitos ; 470 ; 5 ; Handvoll=20 | Tüte=35
Stroopwafels (Daelmans) | Stroopwafels (Daelmans) | Stroopwafels (Daelmans) ; 460 ; 4 ; Stück=29
Mini-Stroopwafels | Mini stroopwafels | Mini stroopwafels ; 460 ; 4 ; Stück=8 | Handvoll=40
Drop (Lakritz, salzig) | Salty liquorice (drop) | Regaliz salado ; 350 ; 3 ; Stück=4 | Handvoll=30
Hagelslag (Schokostreusel) | Chocolate sprinkles (hagelslag) | Fideos de chocolate ; 480 ; 5 ; EL=15 | Brot-Portion=12
Vruchtenhagel | Fruit sprinkles | Fideos de frutas ; 400 ; 0.5 ; EL=15
Pindakaas (Calvé) | Peanut butter (Calvé) | Crema de cacahuete (Calvé) ; 620 ; 24 ; EL=15
Chocomel | Chocomel | Chocomel ; 80 ; 3.4 ; Glas=250 | Packung=200
Tony's Chocolonely Vollmilch | Tony's Chocolonely milk | Tony's Chocolonely con leche ; 550 ; 8 ; Riegel (Stück)=15 | Tafel=180
Tony's Chocolonely Karamell-Meersalz | Tony's Chocolonely caramel sea salt | Tony's Chocolonely caramelo y sal ; 540 ; 7 ; Riegel (Stück)=15 | Tafel=180
Côte d'Or | Côte d'Or | Côte d'Or ; 540 ; 7 ; Riegel (Stück)=10 | Tafel=200
Leonidas Praline | Leonidas praline | Bombón Leonidas ; 500 ; 6 ; Stück=12
Lotus Biscoff Creme | Lotus Biscoff spread | Crema Lotus ; 580 ; 3 ; EL=15
Kinder Joy | Kinder Joy | Kinder Joy ; 550 ; 8 ; Stück=20
Kinder Cards | Kinder Cards | Kinder Cards ; 510 ; 9 ; Packung (2)=26
Kinder Schoko-Bons | Kinder Schoko-Bons | Kinder Schoko-Bons ; 570 ; 9 ; Stück=6
Kinder Riegel White | Kinder Riegel white | Kinder Riegel blanco ; 570 ; 8 ; Riegel=21
Lion | Lion | Lion ; 480 ; 5 ; Riegel=42
Twix White | Twix White | Twix White ; 500 ; 5 ; Packung (2 Riegel)=46
Snickers White | Snickers White | Snickers White ; 490 ; 8 ; Riegel=49
Bounty Dark | Bounty Dark | Bounty Dark ; 480 ; 3 ; Packung (2 Riegel)=57
Milky Way Crispy Rolls | Milky Way Crispy Rolls | Milky Way Crispy Rolls ; 520 ; 6 ; Packung=25
Daim | Daim | Daim ; 530 ; 4 ; Riegel=28
Rocher-Kugel (Ferrero) | Ferrero Rocher (piece) | Ferrero Rocher (unidad) ; 600 ; 8 ; Stück=12.5
Hanuta Riegel | Hanuta bar | Barrita Hanuta ; 540 ; 8 ; Riegel=22
Knoppers NussRiegel | Knoppers nut bar | Knoppers barrita de nueces ; 540 ; 10 ; Riegel=40
Ritter Sport Olympia | Ritter Sport Olympia | Ritter Sport Olympia ; 540 ; 7 ; Tafel=100 | Stück=6
Ritter Sport Rum Traube Nuss | Ritter Sport rum raisin nut | Ritter Sport ron, pasas y nueces ; 510 ; 6 ; Tafel=100 | Stück=6
Ritter Sport Cornflakes | Ritter Sport cornflakes | Ritter Sport cornflakes ; 520 ; 7 ; Tafel=100 | Stück=6
Milka Luflée | Milka Luflée | Milka Luflée ; 560 ; 6 ; Tafel=100 | Stück=5
Milka Choco Moo | Milka Choco Moo | Milka Choco Moo ; 520 ; 6 ; Stück=5
Milka Tender | Milka Tender | Milka Tender ; 440 ; 6 ; Stück=37
Milka Choco Wafer | Milka Choco Wafer | Milka Choco Wafer ; 530 ; 6 ; Stück=30
Milka Kekse (Choco Grains) | Milka cookies | Galletas Milka ; 490 ; 7 ; Stück=14
Lindt Lindor Milch (Tafel) | Lindt Lindor milk (bar) | Lindt Lindor con leche (tableta) ; 620 ; 5 ; Tafel=100 | Stück=8
Lindt Hello | Lindt Hello | Lindt Hello ; 560 ; 7 ; Stück=7
Raffaello (Stück) | Raffaello (piece) | Raffaello (unidad) ; 630 ; 8 ; Stück=10
Kinder Bueno White | Kinder Bueno white | Kinder Bueno blanco ; 570 ; 9 ; Riegel (2er)=39
Schokobons (Kinder) | Kinder chocolate bonbons | Bombones Kinder ; 570 ; 9 ; Stück=6
After Eight | After Eight | After Eight ; 420 ; 2 ; Stück=8
Mozartkugel | Mozartkugel | Bombón Mozart ; 500 ; 5 ; Stück=20
Marzipanbrot | Marzipan bar | Mazapán con chocolate ; 470 ; 7 ; Stück=40
Marzipan | Marzipan | Mazapán ; 450 ; 8 ; Stück=10
Nougat | Nougat | Turrón blando ; 530 ; 7 ; Stück=10
Pralinen (gemischt) | Assorted chocolates | Bombones variados ; 500 ; 6 ; Stück=12
Schokoküsse / Schaumküsse | Chocolate marshmallow kisses | Besos de chocolate ; 400 ; 3 ; Stück=25
Marshmallows | Marshmallows | Nubes ; 330 ; 3 ; Stück=7 | Handvoll=30
Lakritz (süß) | Sweet liquorice | Regaliz dulce ; 350 ; 3 ; Handvoll=30
Maoam | Maoam | Maoam ; 410 ; 0.5 ; Stück=6 | Packung=22
Mamba | Mamba | Mamba ; 400 ; 0.5 ; Stück=6
Werther's Original | Werther's Original | Werther's Original ; 410 ; 0.5 ; Stück=5
Halls | Halls | Halls ; 390 ; 0 ; Stück=4
Ricola | Ricola | Ricola ; 390 ; 0 ; Stück=4
Fisherman's Friend | Fisherman's Friend | Fisherman's Friend ; 370 ; 0 ; Stück=1
Kaugummi | Chewing gum | Chicle ; 200 ; 0 ; Stück=1.5
Haribo Tangfastics | Haribo Tangfastics | Haribo Tangfastics ; 360 ; 6 ; Handvoll=30 | Tüte=175
Haribo Rotella | Haribo Rotella | Haribo Rotella ; 350 ; 3 ; Stück=10 | Tüte=200
Haribo Schlümpfe | Haribo Smurfs | Haribo Pitufos ; 345 ; 7 ; Handvoll=30 | Tüte=175
Haribo Super Mario | Haribo Super Mario | Haribo Super Mario ; 345 ; 7 ; Handvoll=30 | Tüte=175
Haribo Fruitmania | Haribo Fruitmania | Haribo Fruitmania ; 340 ; 6 ; Handvoll=30 | Tüte=175
Haribo Pico-Balla | Haribo Pico-Balla | Haribo Pico-Balla ; 340 ; 5 ; Handvoll=30 | Tüte=160
Haribo Saft Goldbären | Haribo juice gold bears | Haribo ositos de zumo ; 340 ; 6 ; Handvoll=30 | Tüte=175
Haribo Fruchtgummi vegan | Haribo vegan gummies | Gominolas veganas Haribo ; 345 ; 0.5 ; Handvoll=30
Katjes Grün-Ohr Hase | Katjes Grün-Ohr bunny | Katjes conejito ; 340 ; 0.5 ; Handvoll=30 | Tüte=175
Katjes Yoghurt-Gums | Katjes yoghurt gums | Katjes gominolas de yogur ; 360 ; 0.5 ; Handvoll=30
Trolli Glühwürmchen | Trolli glow worms | Gusanos Trolli ; 340 ; 3 ; Stück=7 | Tüte=150
Nimm2 Lachgummi | Nimm2 Lachgummi | Nimm2 Lachgummi ; 330 ; 6 ; Handvoll=30 | Tüte=225
Ahoj-Brause | Ahoj fizz | Polvo efervescente Ahoj ; 380 ; 0 ; Tüte=6
Fruit Tella | Fruittella | Fruittella ; 400 ; 0.5 ; Stück=4
Mentos Fruit | Mentos Fruit | Mentos frutas ; 390 ; 0 ; Stück=3
Smarties | Smarties | Smarties ; 470 ; 4.5 ; Handvoll=30 | Rolle=38
Schokolinsen | Chocolate buttons | Lentejas de chocolate ; 480 ; 5 ; Handvoll=30
Schokorosinen | Chocolate raisins | Pasas con chocolate ; 430 ; 5 ; Handvoll=30
Joghurt-Rosinen | Yoghurt raisins | Pasas con yogur ; 450 ; 3 ; Handvoll=30
Erdnüsse im Teigmantel | Coated peanuts | Cacahuetes recubiertos ; 510 ; 14 ; Handvoll=30
Wasabi-Erbsen | Wasabi peas | Guisantes wasabi ; 410 ; 14 ; Handvoll=30
Kürbiskerne (geröstet) | Roasted pumpkin seeds | Pipas de calabaza ; 580 ; 30 ; Handvoll=25
Pistazien | Pistachios | Pistachos ; 600 ; 20 ; Handvoll=30
Haselnüsse | Hazelnuts | Avellanas ; 650 ; 15 ; Handvoll=30
Macadamia | Macadamia nuts | Nueces de macadamia ; 720 ; 8 ; Handvoll=30
Paranüsse | Brazil nuts | Nueces de Brasil ; 680 ; 14 ; Stück=5 | Handvoll=30
Pekannüsse | Pecans | Nueces pecanas ; 700 ; 9 ; Handvoll=30
Erdnüsse (gesalzen) | Salted peanuts | Cacahuetes salados ; 600 ; 25 ; Handvoll=30
Cashews (geröstet, gesalzen) | Roasted salted cashews | Anacardos tostados ; 600 ; 19 ; Handvoll=30
Trail-Mix (Nüsse & Schoko) | Trail mix with chocolate | Mezcla de frutos secos con chocolate ; 500 ; 12 ; Handvoll=35
Chips light | Light crisps | Patatas fritas light ; 470 ; 6 ; Handvoll=25 | Tüte=150
Chips (Sea Salt) | Sea salt crisps | Patatas fritas con sal marina ; 520 ; 6 ; Handvoll=25 | Tüte=150
Kettle Chips | Kettle chips | Patatas fritas artesanas ; 500 ; 6 ; Handvoll=25 | Tüte=150
Lay's Oven Baked | Lay's Oven Baked | Lay's al horno ; 430 ; 6 ; Handvoll=25 | Tüte=150
Lay's Salt & Vinegar | Lay's salt & vinegar | Lay's sal y vinagre ; 530 ; 6 ; Handvoll=25 | Tüte=150
Pringles Salt & Vinegar | Pringles salt & vinegar | Pringles sal y vinagre ; 520 ; 5 ; Handvoll (10 Chips)=20 | Dose=185
Pringles BBQ | Pringles BBQ | Pringles barbacoa ; 520 ; 5 ; Handvoll (10 Chips)=20 | Dose=185
Pringles Cheese & Onion | Pringles cheese & onion | Pringles queso y cebolla ; 520 ; 5 ; Handvoll (10 Chips)=20 | Dose=185
Doritos Sweet Chili | Doritos sweet chili | Doritos chili dulce ; 500 ; 7 ; Handvoll=25 | Tüte=110
Takis | Takis | Takis ; 510 ; 6 ; Handvoll=25 | Tüte=90
Pom-Bär | Pom-Bär | Pom-Bär ; 520 ; 4 ; Tüte=75 | Handvoll=25
Monster Munch | Monster Munch | Monster Munch ; 500 ; 6 ; Tüte=75
Hula Hoops | Hula Hoops | Hula Hoops ; 520 ; 3.5 ; Tüte=34
Erdnusslocken (Ültje) | Peanut puffs (Ültje) | Gusanitos de cacahuete (Ültje) ; 520 ; 12 ; Handvoll=25 | Tüte=150
Brezeln (Snack) | Pretzel snacks | Pretzels ; 390 ; 10 ; Handvoll=30
Cracker (TUC) | TUC crackers | Galletas saladas TUC ; 480 ; 8 ; Stück=4 | Packung=100
Ritz Cracker | Ritz crackers | Galletas Ritz ; 490 ; 7 ; Stück=3
Käsecracker | Cheese crackers | Galletas de queso ; 500 ; 10 ; Handvoll=25
Mini Babybel light | Mini Babybel light | Mini Babybel light ; 205 ; 25 ; Stück=20
Reiswaffel mit Joghurt | Yoghurt rice cake | Tortita de arroz con yogur ; 480 ; 5 ; Stück=17
Maiswaffel | Corn cake | Tortita de maíz ; 380 ; 8 ; Stück=8
Proteinchips | Protein crisps | Chips proteicos ; 400 ; 45 ; Tüte=30
Protein Bar (Barebells) | Barebells protein bar | Barrita proteica Barebells ; 360 ; 36 ; Riegel=55
Protein Bar (Esn) | ESN protein bar | Barrita proteica ESN ; 360 ; 35 ; Riegel=45
Quest Bar | Quest bar | Barrita Quest ; 350 ; 33 ; Riegel=60
Clif Bar | Clif bar | Barrita Clif ; 390 ; 14 ; Riegel=68
Fruchtschnitte | Fruit bar | Barrita de fruta ; 340 ; 3 ; Stück=25
Müsliriegel (Schoko) | Chocolate cereal bar | Barrita de cereales con chocolate ; 440 ; 6 ; Riegel=25
Kellogg's Rice Krispies Riegel | Rice Krispies bar | Barrita Rice Krispies ; 410 ; 4 ; Riegel=20
Leibniz Minis | Leibniz minis | Leibniz minis ; 440 ; 8 ; Handvoll=25 | Tüte=125
Leibniz Zoo | Leibniz Zoo | Leibniz Zoo ; 440 ; 7 ; Handvoll=25
Prinzen Rolle (Stück) | Prinzen Rolle cookie | Galleta Prinzen Rolle ; 480 ; 6 ; Stück=12
Choco Leibniz (Stück) | Choco Leibniz biscuit | Galleta Choco Leibniz ; 510 ; 7 ; Stück=13
Bahlsen Comtess | Bahlsen Comtess cake | Bizcocho Bahlsen Comtess ; 420 ; 6 ; Scheibe=30
Bahlsen Afrika | Bahlsen Afrika | Bahlsen Afrika ; 540 ; 7 ; Stück=4
Delice (Biscotti) | Biscotti | Biscotti ; 420 ; 9 ; Stück=10
Cantuccini | Cantuccini | Carquiñolis ; 430 ; 10 ; Stück=8
Löffelbiskuits | Ladyfingers | Bizcochos de soletilla ; 380 ; 8 ; Stück=6
Amarettini | Amarettini | Amarettini ; 450 ; 8 ; Stück=4
Kokosmakronen | Coconut macaroons | Macarons de coco ; 450 ; 5 ; Stück=15
Macarons | Macarons | Macarons ; 430 ; 6 ; Stück=12
Vanillekipferl | Vanilla crescents | Medialunas de vainilla ; 540 ; 6 ; Stück=7
Zimtsterne | Cinnamon stars | Estrellas de canela ; 440 ; 9 ; Stück=8
Printen | Printen | Printen ; 370 ; 5 ; Stück=25
Elisenlebkuchen | Elisen gingerbread | Pan de especias Elisen ; 420 ; 7 ; Stück=75
Pfeffernüsse | Pfeffernüsse | Pfeffernüsse ; 380 ; 5 ; Stück=10
Christstollen (Scheibe) | Stollen (slice) | Stollen (rebanada) ; 400 ; 6 ; Scheibe=50
Schokoladen-Weihnachtsmann | Chocolate Santa | Papá Noel de chocolate ; 540 ; 7 ; Stück=100 | Mini=12
Adventskalender-Schokolade | Advent calendar chocolate | Chocolate de calendario de adviento ; 540 ; 7 ; Türchen=4
Osterei (Schoko) | Chocolate Easter egg | Huevo de Pascua de chocolate ; 540 ; 7 ; Stück=10
Eis am Stiel (Milcheis) | Ice lolly (dairy) | Polo de helado ; 290 ; 4 ; Stück=70
Nogger | Nogger | Nogger ; 300 ; 4 ; Stück=70
Cornetto Erdbeer | Cornetto strawberry | Cornetto fresa ; 260 ; 3 ; Stück=70
Magnum Mandel | Magnum almond | Magnum almendra ; 330 ; 5 ; Stück=86
Magnum Mini | Magnum mini | Magnum mini ; 330 ; 4 ; Stück=40
Ed von Schleck | Ed von Schleck | Ed von Schleck ; 120 ; 0.5 ; Stück=55
Calippo | Calippo | Calippo ; 90 ; 0 ; Stück=105
Langnese Cremissimo | Langnese Cremissimo | Langnese Cremissimo ; 210 ; 3.5 ; Kugel=60 | Portion (100 g)=100
Häagen-Dazs | Häagen-Dazs | Häagen-Dazs ; 250 ; 4 ; Becher (460 ml)=400 | Portion=100
Frozen Yogurt | Frozen yoghurt | Yogur helado ; 130 ; 4 ; Becher=150
Halo Top | Halo Top | Halo Top ; 80 ; 5 ; Becher=270 | Portion=100
Schokoladeneis am Stiel (Magnum Classic) | Magnum Classic | Magnum Classic ; 290 ; 4 ; Stück=79
Waffeleis (Kugel) | Ice cream cone (scoop) | Cucurucho de helado ; 220 ; 3.5 ; Kugel mit Waffel=80
Sorbet | Sorbet | Sorbete ; 120 ; 0.3 ; Kugel=60
Kaiserschmarrn (TK) | Frozen Kaiserschmarrn | Kaiserschmarrn congelado ; 220 ; 6 ; Portion=200
Germknödel (TK) | Frozen yeast dumpling | Germknödel congelado ; 250 ; 6 ; Stück=180
Pudding mit Sahne (Paula) | Pudding with cream | Pudin con nata ; 140 ; 3 ; Becher=125
Wackelpudding | Jelly | Gelatina ; 70 ; 1 ; Becher=125
Zuckerwatte | Candy floss | Algodón de azúcar ; 390 ; 0 ; Stück=40
Kandierte Äpfel | Candied apple | Manzana de caramelo ; 160 ; 0.3 ; Stück=200
Crêpe mit Zucker | Crêpe with sugar | Crepe con azúcar ; 250 ; 6 ; Stück=90
Churros (Kirmes, mit Zucker) | Fair churros with sugar | Churros de feria con azúcar ; 400 ; 5 ; Portion=150
Merci (Stück) | Merci (piece) | Merci (unidad) ; 560 ; 7 ; Stück=10
Kinder Bueno Mini | Kinder Bueno mini | Kinder Bueno mini ; 570 ; 9 ; Stück=5.4
Kinder Chocolate Mini | Kinder chocolate mini | Kinder chocolate mini ; 560 ; 9 ; Stück=6
Kinder Milchschnitte | Kinder Milch-Schnitte | Kinder Milch-Schnitte ; 420 ; 8 ; Stück=28
Kinder Paradiso | Kinder Paradiso | Kinder Paradiso ; 450 ; 7 ; Stück=29
Duplo Chocnut | Duplo Chocnut | Duplo Chocnut ; 570 ; 8 ; Riegel=26
Hanuta Minis | Hanuta minis | Hanuta minis ; 550 ; 8 ; Stück=6.5
KitKat Ball (Cerealien) | KitKat cereal | Cereales KitKat ; 390 ; 7 ; Schale=30
KitKat Mini | KitKat mini | KitKat mini ; 520 ; 6 ; Stück=17
Mars Mini | Mars mini | Mars mini ; 450 ; 4 ; Stück=17
Snickers Mini | Snickers mini | Snickers mini ; 490 ; 9 ; Stück=18
Twix Mini | Twix mini | Twix mini ; 500 ; 5 ; Stück=17
Bounty Mini | Bounty mini | Bounty mini ; 490 ; 4 ; Stück=15
Celebrations (Stück) | Celebrations (piece) | Celebrations (unidad) ; 490 ; 6 ; Stück=9
Galaxy | Galaxy | Galaxy ; 545 ; 6.5 ; Riegel=42
Cadbury Dairy Milk | Cadbury Dairy Milk | Cadbury Dairy Milk ; 530 ; 7 ; Riegel=45 | Stück=7
Cadbury Crunchie | Cadbury Crunchie | Cadbury Crunchie ; 465 ; 4 ; Riegel=40
Cadbury Twirl | Cadbury Twirl | Cadbury Twirl ; 530 ; 7.5 ; Riegel=43
Cadbury Creme Egg | Cadbury Creme Egg | Cadbury Creme Egg ; 440 ; 3.5 ; Stück=40
Yorkie | Yorkie | Yorkie ; 530 ; 6 ; Riegel=46
Jaffa Cakes | Jaffa Cakes | Jaffa Cakes ; 380 ; 4 ; Stück=12
McVitie's Digestives | McVitie's digestives | Galletas Digestive McVitie's ; 480 ; 7 ; Stück=15
McVitie's Schoko-Digestives | McVitie's chocolate digestives | Digestive de chocolate McVitie's ; 500 ; 6.5 ; Stück=17
Hobnobs | Hobnobs | Hobnobs ; 470 ; 7 ; Stück=15
Walkers Ready Salted | Walkers ready salted | Walkers con sal ; 520 ; 6.5 ; Tüte=25
Walkers Cheese & Onion | Walkers cheese & onion | Walkers queso y cebolla ; 520 ; 6.5 ; Tüte=25
Quavers | Quavers | Quavers ; 520 ; 2.5 ; Tüte=16
Wotsits | Wotsits | Wotsits ; 530 ; 6 ; Tüte=16.5
Lorenz Crunchips Paprika | Lorenz Crunchips paprika | Lorenz Crunchips pimentón ; 530 ; 6 ; Handvoll=25 | Tüte=150
Lorenz Saltletts | Lorenz Saltletts | Lorenz Saltletts ; 400 ; 11 ; Handvoll=25
funny-frisch Linsenchips | funny-frisch lentil crisps | Chips de lentejas funny-frisch ; 450 ; 15 ; Handvoll=25
Chio Tortillas Nacho Cheese | Chio tortillas nacho cheese | Chio tortillas queso ; 500 ; 6 ; Handvoll=25 | Tüte=110
XOX Erdnussflips | XOX peanut puffs | Gusanitos de cacahuete XOX ; 520 ; 13 ; Handvoll=25
Oreo Double Creme | Oreo double creme | Oreo doble crema ; 490 ; 4 ; Stück=14
Oreo Thins | Oreo thins | Oreo thins ; 480 ; 5 ; Stück=6.6
Toffifee (Stück) | Toffifee (piece) | Toffifee (unidad) ; 520 ; 6 ; Stück=8.3
Duplo (Stück) | Duplo (piece) | Duplo (unidad) ; 550 ; 7 ; Riegel=18
Knoppers (Stück) | Knoppers (piece) | Knoppers (unidad) ; 540 ; 8 ; Stück=25
Corny Schoko | Corny chocolate bar | Barrita Corny chocolate ; 430 ; 6 ; Riegel=25
Storck Riesen | Storck Riesen | Storck Riesen ; 460 ; 3 ; Stück=8
Mamba Sticks | Mamba sticks | Mamba sticks ; 400 ; 0.5 ; Stück=10
Haribo Phantasia (Tüte) | Haribo Phantasia (bag) | Haribo Phantasia (bolsa) ; 340 ; 6 ; Handvoll=30 | Tüte=175
Haribo Color-Rado (Tüte) | Haribo Color-Rado (bag) | Haribo Color-Rado (bolsa) ; 380 ; 4 ; Handvoll=30 | Tüte=175
Haribo Matador Mix | Haribo Matador mix | Haribo Matador mix ; 355 ; 5 ; Handvoll=30 | Tüte=175
Haribo Balla Balla | Haribo Balla Balla | Haribo Balla Balla ; 340 ; 3 ; Handvoll=30
Haribo Roulette | Haribo Roulette | Haribo Roulette ; 340 ; 5 ; Stück=25
Haribo Weinland | Haribo Weinland | Haribo Weinland ; 340 ; 6 ; Handvoll=30
Katjes Wunderland | Katjes Wunderland | Katjes Wunderland ; 340 ; 0.5 ; Handvoll=30
Ben & Jerry's Cookie Dough | Ben & Jerry's Cookie Dough | Ben & Jerry's Cookie Dough ; 270 ; 4 ; Becher (465 ml)=406 | Portion=100
Ben & Jerry's Chocolate Fudge Brownie | Ben & Jerry's Chocolate Fudge Brownie | Ben & Jerry's Chocolate Fudge Brownie ; 260 ; 4.5 ; Becher (465 ml)=406 | Portion=100
Magnum Double Caramel | Magnum Double Caramel | Magnum Double Caramel ; 340 ; 4 ; Stück=74
Cornetto Classico | Cornetto Classico | Cornetto Classico ; 280 ; 4 ; Stück=75
Lacasitos (Tüte) | Lacasitos (bag) | Lacasitos (bolsa) ; 480 ; 6 ; Handvoll=25
Chocapic (Riegel) | Chocapic bar | Barrita Chocapic ; 400 ; 6 ; Riegel=25
Pantera Rosa | Pantera Rosa cake | Pantera Rosa ; 410 ; 3 ; Stück=55
Tigretón | Tigretón | Tigretón ; 390 ; 4 ; Stück=55
Galletas María (Cuétara) | María biscuits (Cuétara) | Galletas María (Cuétara) ; 430 ; 7 ; Stück=6
Tostarica (Cuétara) | Tostarica biscuits | Galletas Tostarica ; 460 ; 7 ; Stück=8
Napolitana (Bimbo) | Bimbo chocolate pastry | Napolitana Bimbo ; 420 ; 6 ; Stück=65
Pan Bimbo (Scheibe) | Bimbo sliced bread | Pan Bimbo (rebanada) ; 260 ; 8 ; Scheibe=27
Chupa Chups (Stück) | Chupa Chups (piece) | Chupa Chups (unidad) ; 390 ; 0 ; Stück=12
Pipas Facundo | Facundo sunflower seeds | Pipas Facundo ; 600 ; 20 ; Handvoll=25 | Tüte=90
Risitos | Risitos corn puffs | Risitos ; 520 ; 5 ; Tüte=40
Ruffles Jamón | Ruffles ham crisps | Ruffles jamón ; 520 ; 6 ; Handvoll=25
Reiswaffeln (natur) | Plain rice cakes | Tortitas de arroz natural ; 385 ; 8 ; Stück=8 | Packung=100
Reiswaffeln mit Schoko | Chocolate rice cakes | Tortitas de arroz con chocolate ; 490 ; 6 ; Stück=17
Maiswaffeln mit Salz | Salted corn cakes | Tortitas de maíz con sal ; 380 ; 8 ; Stück=6
Protein-Riegel (Durchschnitt) | Protein bar (average) | Barrita proteica (media) ; 370 ; 33 ; Riegel=50
Protein-Cookie | Protein cookie | Galleta proteica ; 420 ; 27 ; Stück=75
Proteinchips (Paprika) | Protein crisps (paprika) | Chips proteicos (pimentón) ; 400 ; 45 ; Tüte=30
Protein-Waffeln | Protein wafers | Gofres proteicos ; 450 ; 30 ; Stück=13
Popcorn (Mikrowelle) | Microwave popcorn | Palomitas de microondas ; 480 ; 8 ; Beutel=90
Gemüsechips | Vegetable crisps | Chips de verduras ; 480 ; 5 ; Handvoll=25
Apfelchips | Apple chips | Chips de manzana ; 350 ; 1.5 ; Handvoll=20
Kichererbsen-Snack (geröstet) | Roasted chickpea snack | Garbanzos tostados ; 400 ; 20 ; Handvoll=30
Edamame (geröstet) | Roasted edamame | Edamame tostado ; 440 ; 40 ; Handvoll=30
Beef Jerky | Beef jerky | Cecina de ternera ; 290 ; 45 ; Tüte=25 | Packung=70
Chicken Jerky | Chicken jerky | Cecina de pollo ; 260 ; 50 ; Tüte=25
Zartbitterschokolade 70 % | Dark chocolate 70 % | Chocolate negro 70 % ; 580 ; 9 ; Stück=5 | Tafel=100
Vollmilchschokolade | Milk chocolate | Chocolate con leche ; 540 ; 7 ; Stück=5 | Tafel=100
Schokolade (zuckerfrei) | Sugar-free chocolate | Chocolate sin azúcar ; 480 ; 8 ; Stück=5 | Tafel=100
Nutella (Portion) | Nutella (portion) | Nutella (porción) ; 540 ; 6 ; Portion=15 | Glas=450
Erdnussmus (100 % Erdnüsse) | Peanut butter (100 % peanuts) | Crema de cacahuete 100 % ; 610 ; 26 ; TL=8 | EL=15
Mandelmus (weiß) | White almond butter | Crema de almendra blanca ; 630 ; 22 ; EL=15
Flavour Drops / Geschmackstropfen | Flavour drops | Gotas de sabor ; 0 ; 0 ; Spritzer=0.5
Zero-Sirup | Zero syrup | Sirope zero ; 5 ; 0 ; EL=15
Orangen-Sirup Zero (SodaStream) | Orange syrup zero (SodaStream) | Sirope de naranja zero (SodaStream) ; 10 ; 0 ; EL=15 | Schuss=30
Gummibärchen (zuckerreduziert) | Reduced-sugar gummies | Gominolas bajas en azúcar ; 240 ; 6 ; Handvoll=30
Fruchtgummi (vegan) | Vegan fruit gums | Gominolas veganas ; 340 ; 0.5 ; Handvoll=30
Lebkuchen (Herzen) | Gingerbread hearts | Corazones de pan de jengibre ; 390 ; 5 ; Stück=25
Marzipankartoffeln | Marzipan potatoes | Patatas de mazapán ; 470 ; 8 ; Stück=6
Mannerschnitten | Manner wafers | Barquillos Manner ; 510 ; 6 ; Stück=8 | Packung=75
Manner Mignon | Manner Mignon | Manner Mignon ; 530 ; 6 ; Stück=6
Mozartkugel (Reber) | Mozartkugel (Reber) | Bombón Mozart (Reber) ; 500 ; 5 ; Stück=17
Milka Herzen | Milka hearts | Corazones Milka ; 560 ; 6 ; Stück=8
Haribo Goldbären (Minibeutel) | Haribo gold bears (mini bag) | Haribo ositos (bolsita) ; 340 ; 7 ; Minibeutel=10
Kekse (Butterkeks, Stück) | Butter biscuit (piece) | Galleta de mantequilla ; 450 ; 7 ; Stück=5
Schoko-Cookies (Packung) | Chocolate chip cookies (pack) | Galletas con pepitas de chocolate ; 490 ; 6 ; Stück=10
Gefüllte Kekse (Schoko) | Chocolate sandwich cookies | Galletas rellenas de chocolate ; 480 ; 5 ; Stück=11
Waffelröllchen | Wafer rolls | Barquillos ; 470 ; 5 ; Stück=5
Eis (Vanille, Kugel) | Vanilla ice cream (scoop) | Helado de vainilla (bola) ; 200 ; 3.5 ; Kugel=60
Eis (Schoko, Kugel) | Chocolate ice cream (scoop) | Helado de chocolate (bola) ; 215 ; 4 ; Kugel=60
Eis (Erdbeer, Kugel) | Strawberry ice cream (scoop) | Helado de fresa (bola) ; 180 ; 3 ; Kugel=60
Eiscreme (Protein) | Protein ice cream | Helado proteico ; 90 ; 7 ; Becher=473 | Portion=100
Lindt Lindor Kugel Milch | Lindt Lindor milk truffle | Lindt Lindor con leche ; 620 ; 5 ; Kugel=12.5
Lindt Lindor Kugel Zartbitter | Lindt Lindor dark truffle | Lindt Lindor negro ; 610 ; 5 ; Kugel=12.5
Lindt Excellence Meersalz | Lindt Excellence sea salt | Lindt Excellence sal marina ; 570 ; 7 ; Stück=10 | Tafel=100
Ritter Sport Alpenmilch | Ritter Sport alpine milk | Ritter Sport leche alpina ; 550 ; 8 ; Tafel=100 | Stück=6
Ritter Sport Haselnuss | Ritter Sport hazelnut | Ritter Sport avellana ; 560 ; 8 ; Tafel=100 | Stück=6
Ritter Sport Kakao-Klasse 74 % | Ritter Sport 74 % cocoa | Ritter Sport 74 % cacao ; 580 ; 10 ; Tafel=100 | Stück=6
Ritter Sport Pfefferminz | Ritter Sport peppermint | Ritter Sport menta ; 490 ; 4 ; Tafel=100 | Stück=6
Ritter Sport Erdbeer Joghurt | Ritter Sport strawberry yoghurt | Ritter Sport fresa yogur ; 560 ; 6 ; Tafel=100 | Stück=6
Ritter Sport Dunkle Voll-Nuss | Ritter Sport dark whole hazelnut | Ritter Sport negro avellanas enteras ; 580 ; 9 ; Tafel=100 | Stück=6
Milka Oreo White | Milka Oreo white | Milka Oreo blanco ; 560 ; 5 ; Tafel=100 | Stück=5
Milka Bubbly | Milka Bubbly | Milka Bubbly ; 550 ; 6 ; Tafel=90 | Stück=5
Milka Mmmax Toffee | Milka Mmmax toffee | Milka Mmmax toffee ; 520 ; 5 ; Tafel=300 | Stück=5
Milka Haselnusscreme | Milka hazelnut | Milka crema de avellana ; 550 ; 6 ; Tafel=100 | Stück=5
Milka Darkmilk | Milka darkmilk | Milka darkmilk ; 560 ; 8 ; Tafel=85 | Stück=5
Kinder Country Riegel | Kinder Country bar | Kinder Country ; 560 ; 9 ; Riegel=23.5
Kinder Happy Hippo Haselnuss | Kinder Happy Hippo hazelnut | Kinder Happy Hippo avellana ; 560 ; 8 ; Stück=20.7
Kinder Maxi | Kinder Maxi | Kinder Maxi ; 560 ; 9 ; Riegel=21
Kinder Bueno Dark | Kinder Bueno dark | Kinder Bueno negro ; 570 ; 9 ; Riegel (2er)=43
Kinder Schokolade (Tafel) | Kinder chocolate (bar) | Chocolate Kinder (tableta) ; 560 ; 9 ; Tafel=100 | Riegel=12.5
Nutella B-ready | Nutella B-ready | Nutella B-ready ; 530 ; 8 ; Stück=22
Nutella Biscuits | Nutella Biscuits | Nutella Biscuits ; 520 ; 7 ; Stück=14
Ferrero Rondnoir | Ferrero Rondnoir | Ferrero Rondnoir ; 550 ; 6 ; Stück=10
Hanuta Haselnuss | Hanuta hazelnut | Hanuta avellana ; 540 ; 8 ; Stück=22
Raider / Twix Classic | Twix classic | Twix clásico ; 500 ; 5 ; Riegel=25
Mars Protein | Mars protein bar | Mars barrita proteica ; 370 ; 30 ; Riegel=50
Snickers Protein | Snickers protein bar | Snickers barrita proteica ; 400 ; 34 ; Riegel=47
Bounty Protein | Bounty protein bar | Bounty barrita proteica ; 380 ; 30 ; Riegel=52
KitKat Chunky Peanut | KitKat Chunky peanut | KitKat Chunky cacahuete ; 530 ; 9 ; Riegel=42
KitKat White | KitKat white | KitKat blanco ; 540 ; 6 ; Riegel=41.5
M&M's Crispy | M&M's crispy | M&M's crispy ; 490 ; 5 ; Tüte=36 | Handvoll=25
M&M's Hazelnut | M&M's hazelnut | M&M's avellana ; 530 ; 8 ; Tüte=38 | Handvoll=25
Mentos Mint | Mentos mint | Mentos menta ; 390 ; 0 ; Stück=2.7
Haribo Happy Cherries | Haribo Happy Cherries | Haribo cerezas ; 340 ; 6 ; Handvoll=30
Haribo Frogs | Haribo frogs | Haribo ranas ; 350 ; 4 ; Handvoll=30
Haribo Cola Fläschchen sauer | Haribo sour cola bottles | Haribo botellitas de cola ácidas ; 340 ; 5 ; Handvoll=30
Haribo Kirsch-Cola | Haribo cherry cola | Haribo cola cereza ; 340 ; 6 ; Handvoll=30
Haribo Dinosaurier | Haribo dinosaurs | Haribo dinosaurios ; 340 ; 6 ; Handvoll=30
Haribo Pasta Frutta | Haribo Pasta Frutta | Haribo Pasta Frutta ; 350 ; 3 ; Handvoll=30
Haribo Ingwer-Zitrone | Haribo ginger lemon | Haribo jengibre limón ; 340 ; 5 ; Handvoll=30
Haribo Konfekt | Haribo liquorice allsorts | Haribo regaliz surtido ; 380 ; 3 ; Handvoll=30
Katjes Fröschli | Katjes Fröschli | Katjes ranitas ; 350 ; 0.5 ; Handvoll=30
Katjes Tappsy | Katjes Tappsy | Katjes Tappsy ; 340 ; 0.5 ; Handvoll=30
Trolli Burger | Trolli burger | Trolli hamburguesa ; 360 ; 3 ; Stück=10
Fizzers | Fizzers | Fizzers ; 380 ; 0 ; Rolle=24
Center Shock | Center Shock | Center Shock ; 390 ; 0 ; Stück=4
Airheads | Airheads | Airheads ; 380 ; 0 ; Stück=15.6
Nerds | Nerds | Nerds ; 390 ; 0 ; Packung=47
Reese's Peanut Butter Cups | Reese's peanut butter cups | Reese's ; 515 ; 10 ; Stück=21
Hershey's Milchschokolade | Hershey's milk chocolate | Chocolate con leche Hershey's ; 530 ; 8 ; Riegel=43
Butterfinger | Butterfinger | Butterfinger ; 450 ; 5 ; Riegel=54
Twinkies | Twinkies | Twinkies ; 370 ; 3 ; Stück=38
Pop-Tarts | Pop-Tarts | Pop-Tarts ; 400 ; 4 ; Stück=48
Cheetos | Cheetos | Cheetos ; 550 ; 6 ; Handvoll=25 | Tüte=75
Doritos Cool Americain | Doritos cool american | Doritos cool american ; 500 ; 7 ; Handvoll=25 | Tüte=110
Doritos Chili Cheese | Doritos chilli cheese | Doritos chili queso ; 500 ; 7 ; Handvoll=25
Pringles Texas BBQ | Pringles Texas BBQ | Pringles Texas BBQ ; 520 ; 5 ; Handvoll (10 Chips)=20
Pringles Paprika (Minidose) | Pringles paprika (mini can) | Pringles pimentón (mini) ; 520 ; 5 ; Minidose=40
Lay's Sea Salt & Vinegar | Lay's sea salt & vinegar | Lay's sal marina y vinagre ; 530 ; 6 ; Handvoll=25
Lay's Max Paprika | Lay's Max paprika | Lay's Max pimentón ; 530 ; 6 ; Handvoll=25
funny-frisch Ofen Chips | funny-frisch oven chips | funny-frisch chips al horno ; 440 ; 6 ; Handvoll=25
funny-frisch Chio Riffels | Chio ridged crisps | Chio onduladas ; 530 ; 6 ; Handvoll=25
Crunchips Western Style | Crunchips western style | Crunchips estilo western ; 530 ; 6 ; Handvoll=25
Ültje Erdnüsse geröstet & gesalzen | Ültje roasted salted peanuts | Cacahuetes Ültje tostados ; 610 ; 25 ; Handvoll=30
Ültje Pistazien | Ültje pistachios | Pistachos Ültje ; 600 ; 20 ; Handvoll=30
Kelly's Chips | Kelly's crisps | Patatas Kelly's ; 530 ; 6 ; Handvoll=25
Soletti Salzstangen | Soletti pretzel sticks | Palitos salados Soletti ; 390 ; 11 ; Handvoll=25
Clever Snack Mix | Store-brand snack mix | Mezcla de snacks ; 500 ; 10 ; Handvoll=30
Bifi Original | Bifi original | Bifi original ; 520 ; 23 ; Stück=22.5
Bifi Roll | Bifi Roll | Bifi Roll ; 450 ; 15 ; Stück=45
Babybel Original | Babybel original | Babybel original ; 300 ; 22 ; Stück=22
Leerdammer Snack-Würfel | Leerdammer snack cubes | Dados de Leerdammer ; 360 ; 27 ; Packung=40
Rice Krispies Treats | Rice Krispies treats | Rice Krispies treats ; 410 ; 3 ; Stück=22
Kekse Oreo Golden | Oreo golden | Oreo golden ; 480 ; 4 ; Stück=11
Leibniz Keks'n Cream | Leibniz Keks'n Cream | Leibniz Keks'n Cream ; 490 ; 6 ; Stück=19
Bahlsen Messino | Bahlsen Messino | Bahlsen Messino ; 380 ; 4 ; Stück=12
Bahlsen Ohne Gleichen | Bahlsen Ohne Gleichen | Bahlsen Ohne Gleichen ; 510 ; 6 ; Stück=12
De Beukelaer Cereal | De Beukelaer cereal biscuits | Galletas de cereales De Beukelaer ; 480 ; 7 ; Stück=10
Lotus Biscoff Kekse | Lotus Biscoff biscuits | Galletas Lotus Biscoff ; 485 ; 5 ; Stück=7.8
Lambertz Aachener Printen | Lambertz Aachener Printen | Lambertz Aachener Printen ; 380 ; 5 ; Stück=25
Brandt Markenzwieback Schoko | Brandt chocolate rusks | Biscotes con chocolate Brandt ; 470 ; 8 ; Stück=13
Manner Original Neapolitaner (Packung) | Manner wafers (pack) | Barquillos Manner (paquete) ; 510 ; 6 ; Packung=75
Haas Knusper-Müsli Riegel | Muesli bar | Barrita de muesli ; 430 ; 6 ; Riegel=25
Ehrmann High Protein Riegel | Ehrmann high protein bar | Barrita Ehrmann alta en proteína ; 360 ; 33 ; Riegel=60
ESN Crispy Protein Bar | ESN crispy protein bar | Barrita ESN crispy ; 370 ; 35 ; Riegel=45
Barebells Caramel Cashew | Barebells caramel cashew | Barebells caramelo anacardo ; 360 ; 36 ; Riegel=55
Barebells Cookies & Cream | Barebells cookies & cream | Barebells cookies & cream ; 360 ; 36 ; Riegel=55
Grenade Carb Killa | Grenade Carb Killa | Grenade Carb Killa ; 360 ; 33 ; Riegel=60
Oh Yeah! One Bar | Oh Yeah! One bar | Oh Yeah! One ; 360 ; 33 ; Riegel=60
More Nutrition Protein Bar | More Nutrition protein bar | Barrita More Nutrition ; 360 ; 33 ; Riegel=50
Got2b Protein Pudding | Protein pudding | Pudin proteico ; 75 ; 10 ; Becher=200

@Getränke | Drinks | Bebidas ; 🥤
Coca-Cola | Coca-Cola | Coca-Cola ; 42 ; 0 ; Glas=250 | Dose=330 | Flasche=500
Coca-Cola Zero / Light | Coca-Cola Zero / Diet | Coca-Cola Zero / Light ; 0.3 ; 0 ; Glas=250 | Dose=330 | Flasche=500
Fanta | Fanta | Fanta ; 38 ; 0 ; Glas=250 | Dose=330 | Flasche=500
Sprite | Sprite | Sprite ; 37 ; 0 ; Glas=250 | Dose=330 | Flasche=500
Limonade | Lemonade / soda | Refresco ; 38 ; 0 ; Glas=250 | Dose=330
Eistee (Lipton) | Iced tea (Lipton) | Té helado (Lipton) ; 28 ; 0 ; Glas=250 | Flasche=500
Capri-Sun | Capri-Sun | Capri-Sun ; 40 ; 0 ; Beutel=200
Apfelsaft | Apple juice | Zumo de manzana ; 46 ; 0 ; Glas=200
Apfelschorle | Apple spritzer | Zumo de manzana con gas ; 24 ; 0 ; Glas=300 | Flasche=500
Orangensaft | Orange juice | Zumo de naranja ; 45 ; 0.7 ; Glas=200
Multivitaminsaft | Multivitamin juice | Zumo multivitamínico ; 50 ; 0.4 ; Glas=200
Red Bull | Red Bull | Red Bull ; 46 ; 0 ; Dose=250
Red Bull Sugarfree | Red Bull Sugarfree | Red Bull Sugarfree ; 3 ; 0 ; Dose=250
Monster Energy | Monster Energy | Monster Energy ; 47 ; 0 ; Dose=500
Monster Ultra (zuckerfrei) | Monster Ultra (sugar-free) | Monster Ultra (sin azúcar) ; 2 ; 0 ; Dose=500
Bier (Pils) | Beer (lager) | Cerveza ; 42 ; 0.5 ; kleine Flasche=330 | Flasche=500 | Caña=200
Weißbier | Wheat beer | Cerveza de trigo ; 45 ; 0.5 ; Glas=500
Radler | Shandy | Clara (cerveza con limón) ; 35 ; 0.3 ; Flasche=500
Alkoholfreies Bier | Alcohol-free beer | Cerveza sin alcohol ; 25 ; 0.4 ; Flasche=500
Rotwein | Red wine | Vino tinto ; 85 ; 0 ; Glas=200 | kleines Glas=100
Weißwein | White wine | Vino blanco ; 80 ; 0 ; Glas=200 | kleines Glas=100
Sekt / Prosecco | Sparkling wine / prosecco | Cava / prosecco ; 80 ; 0 ; Glas=100
Sangria | Sangria | Sangría ; 90 ; 0 ; Glas=250
Tinto de verano | Tinto de verano | Tinto de verano ; 50 ; 0 ; Glas=300
Aperol Spritz | Aperol Spritz | Aperol Spritz ; 90 ; 0 ; Glas=250
Gin Tonic | Gin & tonic | Gin-tonic ; 80 ; 0 ; Glas=250
Cocktail (Caipirinha, Mojito) | Cocktail (caipirinha, mojito) | Cóctel (caipiriña, mojito) ; 150 ; 0 ; Glas=250
Schnaps / Wodka (Shot) | Spirit / vodka (shot) | Chupito ; 230 ; 0 ; Shot (2 cl)=20
Kaffee schwarz | Black coffee | Café solo ; 2 ; 0.1 ; Tasse=150 | Becher=250
Espresso | Espresso | Espresso ; 2 ; 0.1 ; Tasse=30
Cappuccino | Cappuccino | Capuchino ; 40 ; 2 ; Tasse=200
Latte Macchiato | Latte macchiato | Latte macchiato ; 50 ; 2.5 ; Glas=300
Café con leche | Café con leche | Café con leche ; 45 ; 2.2 ; Tasse=200
Milchkaffee | Milky coffee | Café con leche grande ; 45 ; 2.2 ; Tasse=250
Caramel Macchiato (Starbucks) | Caramel macchiato (Starbucks) | Caramel macchiato (Starbucks) ; 70 ; 2.5 ; Tall=350 | Grande=470
Kakao mit Milch | Hot chocolate | Cacao con leche ; 75 ; 3.4 ; Tasse=250
Chai Latte | Chai latte | Chai latte ; 60 ; 2 ; Becher=300
Frappuccino / Eiskaffee | Frappuccino / iced coffee | Frappuccino / café helado ; 70 ; 1.5 ; Becher=400
Tee (ungesüßt) | Tea (unsweetened) | Té (sin azúcar) ; 1 ; 0 ; Tasse=250
Proteinshake mit Milch | Protein shake with milk | Batido de proteínas con leche ; 80 ; 9 ; Shaker=350
Yfood Trinkmahlzeit | Yfood meal drink | Bebida Yfood ; 100 ; 6 ; Flasche=500
Fuze Tea | Fuze Tea | Fuze Tea ; 19 ; 0 ; Flasche=400
Aquarius | Aquarius | Aquarius ; 24 ; 0 ; Flasche=500 | Dose=330
Fritz-Kola | Fritz-Kola | Fritz-Kola ; 43 ; 0 ; Flasche=330
Club-Mate | Club-Mate | Club-Mate ; 20 ; 0 ; Flasche=500
Paulaner Spezi | Paulaner Spezi | Paulaner Spezi ; 42 ; 0 ; Flasche=500
ColaCao mit Milch | ColaCao with milk | ColaCao con leche ; 80 ; 3.5 ; Tasse=250
Wasser | Water | Agua ; 0 ; 0 ; Glas=250 | Flasche=500
Mineralwasser | Sparkling water | Agua con gas ; 0 ; 0 ; Glas=250 | Flasche=1000
Wasser mit Geschmack | Flavoured water | Agua con sabor ; 20 ; 0 ; Flasche=500
Pepsi | Pepsi | Pepsi ; 43 ; 0 ; Dose=330 | Flasche=500
Pepsi Max | Pepsi Max | Pepsi Max ; 0.4 ; 0 ; Dose=330 | Flasche=500
Mezzo Mix | Mezzo Mix | Mezzo Mix ; 40 ; 0 ; Flasche=500 | Glas=250
Schwip Schwap | Schwip Schwap | Schwip Schwap ; 40 ; 0 ; Flasche=500
Spezi | Spezi | Spezi ; 40 ; 0 ; Flasche=500 | Glas=250
Almdudler | Almdudler | Almdudler ; 33 ; 0 ; Flasche=500
Bionade | Bionade | Bionade ; 25 ; 0 ; Flasche=330
Ginger Ale | Ginger ale | Ginger ale ; 35 ; 0 ; Dose=330
Tonic Water | Tonic water | Tónica ; 35 ; 0 ; Flasche=200
Bitter Lemon | Bitter lemon | Bitter lemon ; 45 ; 0 ; Flasche=200
Fanta Zero | Fanta Zero | Fanta Zero ; 3 ; 0 ; Dose=330 | Flasche=500
Sprite Zero | Sprite Zero | Sprite Zero ; 1 ; 0 ; Dose=330 | Flasche=500
Coca-Cola Cherry | Coca-Cola Cherry | Coca-Cola Cherry ; 45 ; 0 ; Dose=330
Dr Pepper | Dr Pepper | Dr Pepper ; 42 ; 0 ; Dose=330
7Up | 7Up | 7Up ; 42 ; 0 ; Dose=330
Kombucha | Kombucha | Kombucha ; 20 ; 0 ; Flasche=330
Vitaminwater | Vitaminwater | Vitaminwater ; 20 ; 0 ; Flasche=500
Isostar / Iso-Drink | Sports drink | Bebida isotónica ; 25 ; 0 ; Flasche=500
Gatorade | Gatorade | Gatorade ; 25 ; 0 ; Flasche=500
Powerade | Powerade | Powerade ; 16 ; 0 ; Flasche=500
Rockstar Energy | Rockstar Energy | Rockstar Energy ; 47 ; 0 ; Dose=500
Monster Mango Loco | Monster Mango Loco | Monster Mango Loco ; 46 ; 0 ; Dose=500
Holy Energy (zubereitet) | Holy Energy (prepared) | Holy Energy (preparado) ; 5 ; 0 ; Glas=300
true fruits Smoothie | true fruits smoothie | Smoothie true fruits ; 60 ; 0.7 ; Flasche=250
innocent Smoothie | innocent smoothie | Smoothie innocent ; 55 ; 0.7 ; Flasche=250
Traubensaft | Grape juice | Zumo de uva ; 70 ; 0.3 ; Glas=200
Kirschsaft | Cherry juice | Zumo de cereza ; 55 ; 0.5 ; Glas=200
Ananassaft | Pineapple juice | Zumo de piña ; 50 ; 0.3 ; Glas=200
Tomatensaft | Tomato juice | Zumo de tomate ; 18 ; 0.8 ; Glas=200
Karottensaft | Carrot juice | Zumo de zanahoria ; 30 ; 0.6 ; Glas=200
Mangosaft / -nektar | Mango nectar | Néctar de mango ; 55 ; 0.2 ; Glas=200
Orangensaft (frisch gepresst) | Fresh orange juice | Zumo de naranja natural ; 45 ; 0.7 ; Glas=200
Saftschorle (Johannisbeere) | Blackcurrant spritzer | Refresco de grosella ; 25 ; 0 ; Glas=400
Holunderblütensirup (verdünnt) | Elderflower cordial (diluted) | Sirope de saúco diluido ; 30 ; 0 ; Glas=250
Sirup (verdünnt) | Fruit syrup (diluted) | Sirope de frutas diluido ; 35 ; 0 ; Glas=250
Eistee (Pfanner) | Iced tea (Pfanner) | Té helado (Pfanner) ; 25 ; 0 ; Glas=250 | Packung=2000
Eistee zuckerfrei | Sugar-free iced tea | Té helado sin azúcar ; 2 ; 0 ; Glas=250
Matcha Latte | Matcha latte | Matcha latte ; 55 ; 2.5 ; Becher=300
Flat White | Flat white | Flat white ; 60 ; 3.2 ; Tasse=180
Americano | Americano | Café americano ; 1 ; 0.1 ; Tasse=250
Cortado | Cortado | Cortado ; 30 ; 1.6 ; Tasse=60
Kaffee mit Milch | Coffee with milk | Café con leche (taza) ; 15 ; 0.8 ; Tasse=200
Kaffee mit Milch & Zucker | Coffee with milk & sugar | Café con leche y azúcar ; 30 ; 0.8 ; Tasse=200
Latte (Hafermilch) | Oat milk latte | Latte con avena ; 45 ; 0.8 ; Becher=350
Eiskaffee mit Eis & Sahne | Iced coffee with ice cream | Café helado con helado ; 150 ; 3 ; Glas=300
Cold Brew | Cold brew | Cold brew ; 2 ; 0.2 ; Glas=300
Starbucks Frappuccino (Flasche) | Starbucks Frappuccino (bottle) | Starbucks Frappuccino (botella) ; 65 ; 3 ; Flasche=250
Emmi Caffè Latte | Emmi Caffè Latte | Emmi Caffè Latte ; 60 ; 3 ; Becher=230
Kakao (Pulver mit Milch) | Hot chocolate (powder + milk) | Cacao en polvo con leche ; 80 ; 3.4 ; Tasse=250
Heiße Schokolade | Hot chocolate | Chocolate caliente ; 95 ; 3.5 ; Tasse=250
Glühwein | Mulled wine | Vino caliente ; 105 ; 0 ; Becher=200
Kinderpunsch | Children's punch | Ponche sin alcohol ; 45 ; 0 ; Becher=200
Eierlikör | Egg liqueur | Licor de huevo ; 280 ; 4 ; Glas (2 cl)=20
Baileys | Baileys | Baileys ; 330 ; 3 ; Glas (4 cl)=40
Likör | Liqueur | Licor ; 300 ; 0 ; Glas (2 cl)=20
Jägermeister | Jägermeister | Jägermeister ; 250 ; 0 ; Shot (2 cl)=20
Ouzo / Raki | Ouzo / raki | Ouzo / raki ; 240 ; 0 ; Shot (2 cl)=20
Whisky | Whisky | Whisky ; 250 ; 0 ; Glas (4 cl)=40
Rum | Rum | Ron ; 230 ; 0 ; Glas (4 cl)=40
Cuba Libre | Cuba libre | Cubata ; 85 ; 0 ; Glas=300
Hugo | Hugo spritz | Hugo spritz ; 70 ; 0 ; Glas=250
Lillet Wild Berry | Lillet wild berry | Lillet wild berry ; 55 ; 0 ; Glas=250
Weinschorle | Wine spritzer | Vino con gaseosa ; 40 ; 0 ; Glas=250
Rosé | Rosé wine | Vino rosado ; 75 ; 0 ; Glas=200
Cider | Cider | Sidra ; 45 ; 0 ; Flasche=330
Bier (Heineken) | Beer (Heineken) | Cerveza (Heineken) ; 42 ; 0.4 ; Flasche=330 | Dose=500
Mahou / Estrella | Spanish lager | Cerveza española ; 43 ; 0.4 ; Caña=200 | Tercio=330
Craft Beer (IPA) | IPA craft beer | Cerveza IPA ; 55 ; 0.5 ; Flasche=330
Bier alkoholfrei (Erdinger) | Alcohol-free wheat beer | Cerveza de trigo sin alcohol ; 25 ; 0.4 ; Flasche=500
Radler alkoholfrei | Alcohol-free shandy | Clara sin alcohol ; 25 ; 0.2 ; Flasche=500
Hard Seltzer | Hard seltzer | Hard seltzer ; 30 ; 0 ; Dose=330
Piña Colada | Piña colada | Piña colada ; 180 ; 0.5 ; Glas=250
Mojito | Mojito | Mojito ; 80 ; 0 ; Glas=250
Espresso Martini | Espresso martini | Espresso martini ; 170 ; 0 ; Glas=120
Lycheesaft / Litschisaft | Lychee juice | Zumo de lichi ; 55 ; 0.3 ; Glas=200 | Flasche=1000
Litschi-Drink (Asia) | Lychee drink (Asian) | Bebida de lichi ; 50 ; 0 ; Dose=330
Guavensaft | Guava juice | Zumo de guayaba ; 55 ; 0.2 ; Glas=200
Maracujasaft | Passion fruit juice | Zumo de maracuyá ; 60 ; 0.4 ; Glas=200
Granatapfelsaft | Pomegranate juice | Zumo de granada ; 60 ; 0.2 ; Glas=200
Cranberrysaft | Cranberry juice | Zumo de arándano rojo ; 50 ; 0 ; Glas=200
Pfirsichnektar | Peach nectar | Néctar de melocotón ; 50 ; 0.3 ; Glas=200
Birnensaft | Pear juice | Zumo de pera ; 50 ; 0.2 ; Glas=200
Aprikosennektar | Apricot nectar | Néctar de albaricoque ; 55 ; 0.3 ; Glas=200
Bananennektar | Banana nectar | Néctar de plátano ; 60 ; 0.3 ; Glas=200
Rhabarbersaft | Rhubarb juice | Zumo de ruibarbo ; 40 ; 0.2 ; Glas=200
Rote-Bete-Saft | Beetroot juice | Zumo de remolacha ; 40 ; 1 ; Glas=200
Holundersaft | Elderberry juice | Zumo de saúco ; 40 ; 0.5 ; Glas=200
Sanddornsaft | Sea buckthorn juice | Zumo de espino amarillo ; 50 ; 0.5 ; Shot=40 | Glas=200
Aroniasaft | Aronia juice | Zumo de aronia ; 45 ; 0.4 ; Glas=200
Grapefruitsaft | Grapefruit juice | Zumo de pomelo ; 40 ; 0.5 ; Glas=200
Zitronensaft | Lemon juice | Zumo de limón ; 25 ; 0.4 ; EL=15 | Glas=200
Limettensaft | Lime juice | Zumo de lima ; 25 ; 0.4 ; EL=15
Apfel-Kirsch-Saft | Apple-cherry juice | Zumo de manzana y cereza ; 50 ; 0.2 ; Glas=200
Apfel-Mango-Saft | Apple-mango juice | Zumo de manzana y mango ; 50 ; 0.2 ; Glas=200
ACE-Saft | ACE juice | Zumo ACE ; 45 ; 0.3 ; Glas=200
Gemüsesaft | Vegetable juice | Zumo de verduras ; 20 ; 0.8 ; Glas=200
Kokoswasser | Coconut water | Agua de coco ; 20 ; 0.2 ; Glas=250 | Packung=330
Aloe-Vera-Drink | Aloe vera drink | Bebida de aloe vera ; 35 ; 0 ; Flasche=500
Ingwer-Shot | Ginger shot | Shot de jengibre ; 40 ; 0.5 ; Shot=60
Rhabarberschorle | Rhubarb spritzer | Refresco de ruibarbo ; 25 ; 0 ; Flasche=330
Maracuja-Schorle | Passion fruit spritzer | Refresco de maracuyá ; 28 ; 0 ; Flasche=500
hohes C Orange | hohes C orange | hohes C naranja ; 45 ; 0.7 ; Glas=200 | Flasche=1000
hohes C Multivitamin | hohes C multivitamin | hohes C multivitamina ; 50 ; 0.4 ; Glas=200 | Flasche=1000
granini Orange | granini orange | granini naranja ; 45 ; 0.6 ; Glas=200
granini Pfirsich | granini peach | granini melocotón ; 50 ; 0.3 ; Glas=200
granini Trinkgenuss Rhabarber | granini rhubarb | granini ruibarbo ; 45 ; 0.2 ; Glas=200
Valensina Orange | Valensina orange | Valensina naranja ; 45 ; 0.7 ; Glas=200
Rauch Happy Day Orange | Rauch Happy Day orange | Rauch Happy Day naranja ; 45 ; 0.6 ; Glas=200
Rauch Eistee Pfirsich | Rauch iced tea peach | Rauch té helado melocotón ; 28 ; 0 ; Glas=250 | Packung=500
Capri-Sun Mystery Drink | Capri-Sun Mystery Drink | Capri-Sun Mystery Drink ; 30 ; 0 ; Beutel=200
Capri-Sun Orange | Capri-Sun orange | Capri-Sun naranja ; 30 ; 0 ; Beutel=200
innocent Orangensaft | innocent orange juice | Zumo innocent de naranja ; 45 ; 0.6 ; Glas=200
true fruits No. 1 (gelb) | true fruits yellow | true fruits amarillo ; 60 ; 0.6 ; Flasche=250
Rio d'Oro Apfelsaft | Rio d'Oro apple juice | Zumo de manzana Rio d'Oro ; 45 ; 0.1 ; Glas=200
Lift Apfelschorle | Lift apple spritzer | Lift manzana con gas ; 24 ; 0 ; Flasche=500
Vio Bio Limo | Vio organic lemonade | Vio limonada ecológica ; 20 ; 0 ; Flasche=500
Volvic Juicy | Volvic Juicy | Volvic Juicy ; 20 ; 0 ; Flasche=500
Gerolsteiner Naturell | Still mineral water | Agua mineral sin gas ; 0 ; 0 ; Flasche=750
Fritz-Limo Orange | Fritz-Limo orange | Fritz-Limo naranja ; 45 ; 0 ; Flasche=330
Fritz-Kola zuckerfrei | Fritz-Kola sugar-free | Fritz-Kola sin azúcar ; 1 ; 0 ; Flasche=330
Afri Cola | Afri Cola | Afri Cola ; 45 ; 0 ; Flasche=330
Sinalco | Sinalco | Sinalco ; 40 ; 0 ; Flasche=500
Schweppes Russian Wild Berry | Schweppes wild berry | Schweppes frutos rojos ; 35 ; 0 ; Flasche=500
Club-Mate Granat | Club-Mate pomegranate | Club-Mate granada ; 22 ; 0 ; Flasche=500
Red Bull Red Edition | Red Bull Red Edition | Red Bull Red Edition ; 46 ; 0 ; Dose=250
Monster Ultra Paradise | Monster Ultra Paradise | Monster Ultra Paradise ; 2 ; 0 ; Dose=500
Celsius Energy | Celsius energy drink | Bebida Celsius ; 1 ; 0 ; Dose=355
Lipton Ice Tea Zero | Lipton ice tea zero | Lipton té helado zero ; 1 ; 0 ; Flasche=500
Fuze Tea Pfirsich | Fuze Tea peach | Fuze Tea melocotón ; 19 ; 0 ; Flasche=400
Nestea Limón | Nestea lemon | Nestea limón ; 19 ; 0 ; Dose=330
Kas Naranja | Kas orange | Kas naranja ; 35 ; 0 ; Dose=330
Kas Limón | Kas lemon | Kas limón ; 35 ; 0 ; Dose=330
Trina Naranja | Trina orange | Trina naranja ; 35 ; 0 ; Dose=330
Aquarius Naranja | Aquarius orange | Aquarius naranja ; 25 ; 0 ; Dose=330 | Flasche=500
Fanta Limón | Fanta lemon | Fanta limón ; 30 ; 0 ; Dose=330
Font Vella | Font Vella water | Agua Font Vella ; 0 ; 0 ; Flasche=500
Horchata | Horchata | Horchata ; 70 ; 0.5 ; Glas=250
Bitter Kas | Bitter Kas | Bitter Kas ; 45 ; 0 ; Flasche=200
Zumo Don Simón Naranja | Don Simón orange juice | Zumo Don Simón naranja ; 45 ; 0.6 ; Glas=200 | Packung=1000
Pascual Bifrutas | Pascual Bifrutas | Pascual Bifrutas ; 40 ; 0.5 ; Packung=200
Cola Cao (Pulver mit Milch) | Cola Cao with milk | Cola Cao con leche ; 80 ; 3.5 ; Tasse=250
Ribena | Ribena | Ribena ; 40 ; 0 ; Flasche=500 | Glas (verdünnt)=250
Lucozade Energy | Lucozade Energy | Lucozade Energy ; 45 ; 0 ; Flasche=380
Irn-Bru | Irn-Bru | Irn-Bru ; 20 ; 0 ; Dose=330
Tango Orange | Tango orange | Tango naranja ; 19 ; 0 ; Dose=330
Arizona Green Tea | Arizona green tea | Arizona té verde ; 27 ; 0 ; Dose=500
Starbucks Doubleshot | Starbucks Doubleshot | Starbucks Doubleshot ; 65 ; 3 ; Dose=200
Emmi Caffè Latte Macchiato | Emmi Caffè Latte macchiato | Emmi Caffè Latte macchiato ; 55 ; 3 ; Becher=230
Alpro Barista Hafer | Alpro Barista oat | Alpro Barista avena ; 45 ; 0.5 ; Schuss=30 | Glas=250
Oatly Hafer Drink | Oatly oat drink | Bebida de avena Oatly ; 45 ; 1 ; Glas=250
Mandeldrink (Alpro, ungesüßt) | Almond drink (Alpro, unsweetened) | Bebida de almendra (Alpro, sin azúcar) ; 13 ; 0.4 ; Glas=250
Müllermilch Schoko | Müllermilch chocolate | Müllermilch chocolate ; 65 ; 3.3 ; Flasche=400
Müllermilch Banane | Müllermilch banana | Müllermilch plátano ; 65 ; 3.3 ; Flasche=400
Müllermilch Erdbeere | Müllermilch strawberry | Müllermilch fresa ; 65 ; 3.3 ; Flasche=400
Protein-Shake (fertig, Milch) | Ready protein shake | Batido de proteínas listo ; 65 ; 8 ; Flasche=330
Bier (Becks) | Beer (Beck's) | Cerveza (Beck's) ; 42 ; 0.4 ; Flasche=330
Krombacher Pils | Krombacher pilsner | Krombacher pilsner ; 42 ; 0.4 ; Flasche=500
Augustiner Hell | Augustiner Helles | Augustiner Helles ; 43 ; 0.4 ; Flasche=500
Corona | Corona | Corona ; 42 ; 0.4 ; Flasche=355
Rebujito | Rebujito | Rebujito ; 55 ; 0 ; Glas=200
Cola Zero | Cola Zero | Cola Zero ; 0.3 ; 0 ; Dose=330 | Flasche=500 | Glas=250
Wasser mit Zitrone | Water with lemon | Agua con limón ; 2 ; 0 ; Glas=250
SodaStream Sirup Zero (zubereitet) | SodaStream zero syrup (prepared) | SodaStream sirope zero (preparado) ; 2 ; 0 ; Glas=250
Proteinshake mit Wasser | Protein shake with water | Batido de proteínas con agua ; 40 ; 8 ; Shaker=330
Whey (Pulver) | Whey (powder) | Whey (polvo) ; 380 ; 78 ; Messlöffel=30
ESN Designer Whey | ESN Designer Whey | ESN Designer Whey ; 380 ; 76 ; Messlöffel=30
Clear Whey (zubereitet) | Clear whey (prepared) | Clear whey (preparado) ; 20 ; 4.5 ; Shaker=500
EAA-Drink | EAA drink | Bebida EAA ; 5 ; 1 ; Shaker=500
BCAA-Drink | BCAA drink | Bebida BCAA ; 4 ; 1 ; Shaker=500
Pre-Workout (zubereitet) | Pre-workout (prepared) | Pre-entreno (preparado) ; 3 ; 0 ; Shaker=300
Elektrolyt-Drink | Electrolyte drink | Bebida de electrolitos ; 10 ; 0 ; Glas=500
Früchtetee | Fruit tea | Infusión de frutas ; 2 ; 0 ; Tasse=250
Grüner Tee | Green tea | Té verde ; 1 ; 0 ; Tasse=250
Melange | Viennese melange | Melange vienés ; 45 ; 2.5 ; Tasse=200
Eiskaffee (zuckerfrei) | Iced coffee (sugar-free) | Café helado sin azúcar ; 25 ; 1.5 ; Glas=300
Almdudler Zero | Almdudler Zero | Almdudler Zero ; 1 ; 0 ; Flasche=500
Römerquelle Emotion | Römerquelle Emotion | Römerquelle Emotion ; 20 ; 0 ; Flasche=500
Red Bull Zero | Red Bull Zero | Red Bull Zero ; 1 ; 0 ; Dose=250
Spezi Zero | Spezi zero | Spezi zero ; 1 ; 0 ; Flasche=500
Mezzo Mix Zero | Mezzo Mix Zero | Mezzo Mix Zero ; 1 ; 0 ; Flasche=500
Eistee Zero (Pfirsich) | Peach iced tea zero | Té helado de melocotón zero ; 1 ; 0 ; Glas=250
Stiegl Goldbräu | Stiegl Goldbräu | Stiegl Goldbräu ; 43 ; 0.4 ; Flasche=500
Ottakringer Helles | Ottakringer Helles | Ottakringer Helles ; 42 ; 0.4 ; Flasche=500
Gösser Märzen | Gösser Märzen | Gösser Märzen ; 43 ; 0.4 ; Flasche=500
Grüner Veltliner | Grüner Veltliner | Grüner Veltliner ; 75 ; 0 ; Glas=125 | Achtel=125
Gespritzter (Weißwein mit Soda) | White wine spritzer | Vino blanco con soda ; 40 ; 0 ; Glas=250
Prosecco | Prosecco | Prosecco ; 75 ; 0 ; Glas=100
Sekt | Sparkling wine | Vino espumoso ; 80 ; 0 ; Glas=100
Wodka | Vodka | Vodka ; 230 ; 0 ; Shot (2 cl)=20
Schnaps (Obstler) | Fruit brandy | Aguardiente de frutas ; 230 ; 0 ; Shot (2 cl)=20
Apfelsaft naturtrüb | Cloudy apple juice | Zumo de manzana turbio ; 46 ; 0.1 ; Glas=200 | Flasche=1000
Orangensaft mit Fruchtfleisch | Orange juice with pulp | Zumo de naranja con pulpa ; 45 ; 0.7 ; Glas=200
Mandarinensaft | Mandarin juice | Zumo de mandarina ; 45 ; 0.5 ; Glas=200
Blutorangensaft | Blood orange juice | Zumo de naranja sanguina ; 48 ; 0.6 ; Glas=200
Pink-Grapefruit-Saft | Pink grapefruit juice | Zumo de pomelo rosa ; 40 ; 0.5 ; Glas=200
Kiwisaft | Kiwi juice | Zumo de kiwi ; 55 ; 0.5 ; Glas=200
Wassermelonensaft | Watermelon juice | Zumo de sandía ; 30 ; 0.5 ; Glas=250
Melonen-Saft | Melon juice | Zumo de melón ; 35 ; 0.5 ; Glas=250
Erdbeersaft / -nektar | Strawberry nectar | Néctar de fresa ; 55 ; 0.3 ; Glas=200
Himbeernektar | Raspberry nectar | Néctar de frambuesa ; 55 ; 0.3 ; Glas=200
Heidelbeersaft | Blueberry juice | Zumo de arándanos ; 50 ; 0.3 ; Glas=200
Brombeersaft | Blackberry juice | Zumo de mora ; 45 ; 0.4 ; Glas=200
Johannisbeernektar (schwarz) | Blackcurrant nectar | Néctar de grosella negra ; 55 ; 0.3 ; Glas=200
Sauerkirschnektar | Sour cherry nectar | Néctar de guinda ; 60 ; 0.4 ; Glas=200
Pflaumensaft | Prune juice | Zumo de ciruela ; 70 ; 0.6 ; Glas=200
Quittensaft | Quince juice | Zumo de membrillo ; 50 ; 0.2 ; Glas=200
Papayanektar | Papaya nectar | Néctar de papaya ; 55 ; 0.2 ; Glas=200
Guaven-Nektar (Rubicon) | Guava nectar (Rubicon) | Néctar de guayaba (Rubicon) ; 55 ; 0.2 ; Glas=200
Rubicon Mango | Rubicon mango | Rubicon mango ; 55 ; 0.1 ; Dose=330
Litschi-Nektar | Lychee nectar | Néctar de lichi ; 55 ; 0.2 ; Glas=200
Kokos-Ananas-Saft | Coconut pineapple juice | Zumo de piña y coco ; 55 ; 0.3 ; Glas=200
Multivitamin-Nektar | Multivitamin nectar | Néctar multivitamínico ; 50 ; 0.3 ; Glas=200
Orange-Karotte-Zitrone | Orange carrot lemon juice | Zumo de naranja, zanahoria y limón ; 40 ; 0.5 ; Glas=200
Gemüsesaft (Tomate-Paprika) | Tomato pepper juice | Zumo de tomate y pimiento ; 20 ; 0.8 ; Glas=200
Selleriesaft | Celery juice | Zumo de apio ; 15 ; 0.7 ; Glas=250
Grüner Smoothie | Green smoothie | Smoothie verde ; 45 ; 1 ; Flasche=250
Beeren-Smoothie | Berry smoothie | Smoothie de frutos rojos ; 55 ; 0.7 ; Flasche=250
Mango-Maracuja-Smoothie | Mango passion fruit smoothie | Smoothie de mango y maracuyá ; 60 ; 0.6 ; Flasche=250
Protein-Smoothie | Protein smoothie | Smoothie proteico ; 70 ; 6 ; Flasche=330
Albi Orange | Albi orange juice | Zumo de naranja Albi ; 45 ; 0.6 ; Glas=200
Albi Apfel | Albi apple juice | Zumo de manzana Albi ; 45 ; 0.1 ; Glas=200
Pfanner Orange | Pfanner orange juice | Zumo de naranja Pfanner ; 45 ; 0.6 ; Glas=200
Pfanner Eistee Zitrone | Pfanner iced tea lemon | Té helado limón Pfanner ; 25 ; 0 ; Glas=250
Rauch Bravo Orange | Rauch Bravo orange | Rauch Bravo naranja ; 45 ; 0.6 ; Glas=200
Rauch Juice Bar Ananas | Rauch Juice Bar pineapple | Rauch Juice Bar piña ; 50 ; 0.3 ; Glas=200
Beckers Bester Apfel | Beckers Bester apple juice | Zumo de manzana Beckers Bester ; 45 ; 0.1 ; Glas=200
Beckers Bester Rote Rübe | Beckers Bester beetroot juice | Zumo de remolacha Beckers Bester ; 40 ; 1 ; Glas=200
Voelkel Gemüsesaft | Voelkel vegetable juice | Zumo de verduras Voelkel ; 25 ; 1 ; Glas=200
Amecke Mild & Sanft | Amecke mild orange | Amecke naranja suave ; 45 ; 0.6 ; Glas=200
Dr. Koch's Trink 10 | Dr. Koch's Trink 10 | Dr. Koch's Trink 10 ; 10 ; 0 ; Glas=200
Hohes C Mild | hohes C mild | hohes C suave ; 45 ; 0.6 ; Glas=200
Hohes C Plus Eisen | hohes C plus iron | hohes C con hierro ; 48 ; 0.5 ; Glas=200
Granini Kirsche | granini cherry | granini cereza ; 55 ; 0.3 ; Glas=200
Granini Multivitamin | granini multivitamin | granini multivitamina ; 50 ; 0.3 ; Glas=200
Granini Mango | granini mango | granini mango ; 55 ; 0.2 ; Glas=200
Valensina Mild | Valensina mild | Valensina suave ; 45 ; 0.6 ; Glas=200
Innocent Mango Maracuja | innocent mango passion fruit | innocent mango y maracuyá ; 60 ; 0.6 ; Flasche=250
Innocent Erdbeer Banane | innocent strawberry banana | innocent fresa y plátano ; 55 ; 0.6 ; Flasche=250
True Fruits Pink | true fruits pink | true fruits rosa ; 55 ; 0.6 ; Flasche=250
Chiquita Smoothie | Chiquita smoothie | Smoothie Chiquita ; 60 ; 0.6 ; Flasche=250
Capri-Sun Kirsch-Granatapfel | Capri-Sun cherry pomegranate | Capri-Sun cereza y granada ; 30 ; 0 ; Beutel=200
Capri-Sun Multivitamin | Capri-Sun multivitamin | Capri-Sun multivitamina ; 30 ; 0 ; Beutel=200
Caprisonne Zero | Capri-Sun Zero | Capri-Sun Zero ; 3 ; 0 ; Beutel=200
Punica Orange | Punica orange | Punica naranja ; 40 ; 0.3 ; Glas=200
Sunny D | Sunny D | Sunny D ; 45 ; 0 ; Glas=250
Tropicana Orange | Tropicana orange | Tropicana naranja ; 45 ; 0.7 ; Glas=200
Don Simón Melocotón | Don Simón peach | Don Simón melocotón ; 50 ; 0.3 ; Glas=200
Granini Piña | granini pineapple | granini piña ; 50 ; 0.2 ; Glas=200
Zumosol Naranja | Zumosol orange | Zumosol naranja ; 45 ; 0.6 ; Glas=200
Minute Maid Orange | Minute Maid orange | Minute Maid naranja ; 45 ; 0.6 ; Glas=200
Oasis Tropical | Oasis tropical | Oasis tropical ; 35 ; 0 ; Flasche=500
Fanta Exotic | Fanta exotic | Fanta exotic ; 30 ; 0 ; Dose=330
Fanta Mango | Fanta mango | Fanta mango ; 30 ; 0 ; Dose=330
Sprite Lemon Lime Zero | Sprite zero | Sprite zero ; 1 ; 0 ; Dose=330
Coca-Cola Vanilla | Coca-Cola vanilla | Coca-Cola vainilla ; 45 ; 0 ; Dose=330
Pepsi Zero Lime | Pepsi zero lime | Pepsi zero lima ; 1 ; 0 ; Dose=330
Schweppes Ginger Ale | Schweppes ginger ale | Schweppes ginger ale ; 35 ; 0 ; Flasche=200
Thomas Henry Tonic | Thomas Henry tonic | Tónica Thomas Henry ; 35 ; 0 ; Flasche=200
Fever-Tree Tonic | Fever-Tree tonic | Tónica Fever-Tree ; 35 ; 0 ; Flasche=200
ChariTea Mate | ChariTea mate | ChariTea mate ; 20 ; 0 ; Flasche=330
Mate-Tee (zubereitet) | Mate tea | Mate ; 2 ; 0 ; Tasse=250
Paulaner Spezi Zero | Paulaner Spezi zero | Paulaner Spezi zero ; 1 ; 0 ; Flasche=500
Vöslauer Balance Pfirsich | Vöslauer Balance peach | Vöslauer Balance melocotón ; 12 ; 0 ; Flasche=500
Gerolsteiner Apfelschorle | Gerolsteiner apple spritzer | Gerolsteiner manzana con gas ; 25 ; 0 ; Flasche=500
Bad Liebenwerda Apfel | Flavoured water apple | Agua con sabor a manzana ; 15 ; 0 ; Flasche=500
Monster Energy Pipeline Punch | Monster Pipeline Punch | Monster Pipeline Punch ; 46 ; 0 ; Dose=500
Monster Energy Zero Ultra | Monster Zero Ultra | Monster Zero Ultra ; 2 ; 0 ; Dose=500
Red Bull White Edition | Red Bull White Edition | Red Bull White Edition ; 45 ; 0 ; Dose=250
Rockstar Zero | Rockstar zero | Rockstar zero ; 2 ; 0 ; Dose=500
Booster Energy | Booster energy drink | Bebida energética Booster ; 46 ; 0 ; Dose=500
Effect Energy | Effect energy drink | Bebida energética Effect ; 48 ; 0 ; Dose=330
Prime Hydration | Prime Hydration | Prime Hydration ; 5 ; 0 ; Flasche=500
Powerade Zero | Powerade zero | Powerade zero ; 1 ; 0 ; Flasche=500
Gatorade Zero | Gatorade zero | Gatorade zero ; 1 ; 0 ; Flasche=500
Oatly Haferdrink Schoko | Oatly chocolate oat drink | Bebida de avena con chocolate Oatly ; 60 ; 1 ; Glas=250
Alpro Soja Vanille | Alpro soy vanilla | Alpro soja vainilla ; 60 ; 3 ; Glas=250
Alpro Kokos | Alpro coconut drink | Alpro bebida de coco ; 20 ; 0.1 ; Glas=250
Barista Hafermilch | Barista oat milk | Leche de avena barista ; 60 ; 1 ; Schuss=30 | Glas=250
Kaffee mit Hafermilch | Coffee with oat milk | Café con leche de avena ; 20 ; 0.3 ; Tasse=200
Iced Latte | Iced latte | Latte con hielo ; 45 ; 2.5 ; Glas=350
Frappé | Frappé | Frappé ; 80 ; 2 ; Glas=300

@Frühstück & Müsli | Breakfast & cereal | Desayuno y cereales ; 🥣
Haferflocken | Oats | Copos de avena ; 370 ; 13.5 ; EL=10 | Portion=50
Früchtemüsli | Fruit muesli | Muesli de frutas ; 360 ; 9 ; Portion=50
Schokomüsli | Chocolate muesli | Muesli de chocolate ; 430 ; 9 ; Portion=50
Cornflakes | Cornflakes | Copos de maíz ; 375 ; 7 ; Portion=30
Knuspermüsli / Granola | Granola | Granola ; 460 ; 9 ; Portion=50
Chiasamen | Chia seeds | Semillas de chía ; 490 ; 17 ; EL=12
Leinsamen | Linseed | Semillas de lino ; 530 ; 18 ; EL=10
Proteinpulver | Protein powder | Proteína en polvo ; 380 ; 75 ; Portion=30
Hagelslag-Brot | Bread with chocolate sprinkles | Pan con fideos de chocolate ; 330 ; 7 ; Scheibe=50
Ontbijtkoek mit Butter | Spiced cake with butter | Ontbijtkoek con mantequilla ; 380 ; 4 ; Scheibe=30
Haferflocken (zart) | Rolled oats (fine) | Copos de avena finos ; 370 ; 13.5 ; EL=10 | Portion=50
Instant-Porridge | Instant porridge | Porridge instantáneo ; 370 ; 10 ; Beutel=40
Porridge mit Wasser | Porridge with water | Porridge con agua ; 70 ; 2.5 ; Schale=250
Porridge mit Hafermilch | Porridge with oat milk | Porridge con bebida de avena ; 95 ; 2.5 ; Schale=300
Kellogg's Frosties | Kellogg's Frosties | Kellogg's Frosties ; 375 ; 4.5 ; Schale=30
Kellogg's Smacks | Kellogg's Smacks | Kellogg's Smacks ; 380 ; 6 ; Schale=30
Kellogg's Special K | Kellogg's Special K | Kellogg's Special K ; 380 ; 9 ; Schale=30
Nesquik Cerealien | Nesquik cereal | Cereales Nesquik ; 380 ; 8 ; Schale=30
Cini Minis | Cini Minis | Cini Minis ; 410 ; 6 ; Schale=30
Chocapic | Chocapic | Chocapic ; 380 ; 8 ; Schale=30
Lion Cereal | Lion cereal | Cereales Lion ; 400 ; 6 ; Schale=30
Crunchy Nut | Crunchy Nut | Crunchy Nut ; 400 ; 6 ; Schale=30
Fitness Cerealien | Fitness cereal | Cereales Fitness ; 370 ; 9 ; Schale=30
Dinkel-Flakes | Spelt flakes | Copos de espelta ; 360 ; 12 ; Schale=40
Kölln Müsli | Kölln muesli | Muesli Kölln ; 380 ; 10 ; Schale=50
Seitenbacher Müsli | Seitenbacher muesli | Muesli Seitenbacher ; 370 ; 10 ; Schale=50
Mymuesli | Mymuesli | Mymuesli ; 400 ; 11 ; Schale=50
Bircher Müsli | Bircher muesli | Muesli Bircher ; 120 ; 4 ; Schale=250
Chia-Pudding | Chia pudding | Pudin de chía ; 130 ; 4 ; Glas=200
Açaí-Bowl | Açaí bowl | Bowl de açaí ; 110 ; 2 ; Schale=350
Pancakes (amerikanisch) | American pancakes | Tortitas americanas ; 230 ; 6 ; Stück=40
Pancakes mit Ahornsirup | Pancakes with maple syrup | Tortitas con sirope de arce ; 260 ; 5 ; Portion (3 Stück)=180
French Toast | French toast | Tostada francesa ; 230 ; 8 ; Scheibe=70
Eggs Benedict | Eggs Benedict | Huevos Benedict ; 230 ; 11 ; Portion=250
Avocado-Toast | Avocado toast | Tostada de aguacate ; 210 ; 5 ; Scheibe=110
Rührei mit Speck | Scrambled eggs with bacon | Huevos revueltos con bacon ; 220 ; 14 ; Portion=180
Englisches Frühstück | Full English breakfast | Desayuno inglés ; 180 ; 9 ; Teller=450
Strammer Max | Ham and egg on bread | Pan con jamón y huevo ; 230 ; 12 ; Stück=200
Brot mit Butter | Bread with butter | Pan con mantequilla ; 320 ; 7 ; Scheibe=50
Brot mit Nutella | Bread with Nutella | Pan con Nutella ; 360 ; 6.5 ; Scheibe=55
Brot mit Marmelade | Bread with jam | Pan con mermelada ; 280 ; 5.5 ; Scheibe=60
Brot mit Käse | Bread with cheese | Pan con queso ; 300 ; 14 ; Scheibe=70
Brot mit Wurst | Bread with cold cuts | Pan con embutido ; 280 ; 11 ; Scheibe=70
Brötchen mit Butter & Marmelade | Roll with butter & jam | Panecillo con mantequilla y mermelada ; 310 ; 6 ; Stück=90
Toast mit Erdnussbutter | Toast with peanut butter | Tostada con crema de cacahuete ; 400 ; 14 ; Scheibe=45
Tostada con aceite | Toast with olive oil | Tostada con aceite ; 330 ; 7 ; Stück=70
Tostada con mantequilla y mermelada | Toast with butter and jam | Tostada con mantequilla y mermelada ; 340 ; 6 ; Stück=80
Honig | Honey | Miel ; 305 ; 0.4 ; TL=8 | EL=20
Ahornsirup | Maple syrup | Sirope de arce ; 260 ; 0 ; EL=20
Agavendicksaft | Agave syrup | Sirope de agave ; 310 ; 0 ; EL=20
Dattelsirup | Date syrup | Sirope de dátiles ; 290 ; 1 ; EL=20
Zuckerrübensirup | Sugar beet syrup | Melaza de remolacha ; 300 ; 1 ; EL=20
Nuss-Nougat-Creme (Eigenmarke) | Hazelnut spread (store brand) | Crema de cacao y avellanas ; 540 ; 6 ; TL=10 | EL=20
Nocilla | Nocilla | Nocilla ; 540 ; 5 ; EL=20
Mandelmus | Almond butter | Crema de almendra ; 620 ; 22 ; EL=15
Cashewmus | Cashew butter | Crema de anacardo ; 600 ; 18 ; EL=15
Tahin | Tahini | Tahini ; 600 ; 18 ; EL=15
Kokosöl | Coconut oil | Aceite de coco ; 900 ; 0 ; TL=5 | EL=12
Erdnussbutter (crunchy) | Crunchy peanut butter | Crema de cacahuete crujiente ; 610 ; 25 ; EL=15
Konfitüre extra | Jam (extra) | Confitura extra ; 250 ; 0.3 ; TL=8 | EL=20
Fruchtaufstrich (zuckerreduziert) | Reduced-sugar fruit spread | Mermelada baja en azúcar ; 140 ; 0.4 ; TL=8 | EL=20
Apfelkraut | Apple butter | Melaza de manzana ; 270 ; 0.4 ; TL=10
Weetabix | Weetabix | Weetabix ; 360 ; 12 ; Stück=19
Shreddies | Shreddies | Shreddies ; 370 ; 10 ; Schale=40
Coco Pops | Coco Pops | Coco Pops ; 380 ; 5 ; Schale=30
Kellogg's Tresor | Kellogg's Tresor | Kellogg's Tresor ; 450 ; 7 ; Schale=30
Kellogg's Corn Flakes | Kellogg's Corn Flakes | Kellogg's Corn Flakes ; 380 ; 7 ; Schale=30
Nestlé Fitness | Nestlé Fitness | Nestlé Fitness ; 370 ; 9 ; Schale=30
Kölln Knusper Schoko | Kölln crunchy chocolate oats | Kölln avena crujiente chocolate ; 450 ; 9 ; Schale=50
Brandt Zwieback | Brandt rusks | Biscotes Brandt ; 400 ; 10 ; Stück=10
Leicht & Cross | Leicht & Cross crispbread | Leicht & Cross ; 380 ; 11 ; Scheibe=7
Bonne Maman Konfitüre | Bonne Maman jam | Mermelada Bonne Maman ; 240 ; 0.5 ; TL=8 | EL=20
Zentis Konfitüre | Zentis jam | Mermelada Zentis ; 250 ; 0.4 ; TL=8 | EL=20

@Soßen & Dips | Sauces & dips | Salsas ; 🥫
Ketchup | Ketchup | Kétchup ; 110 ; 1.2 ; EL=15
Mayonnaise | Mayonnaise | Mayonesa ; 680 ; 1 ; EL=15
Remoulade | Remoulade | Salsa remoulade ; 500 ; 1 ; EL=15
Senf | Mustard | Mostaza ; 90 ; 5 ; TL=5
Sauce Hollandaise | Hollandaise sauce | Salsa holandesa ; 450 ; 1.5 ; Portion=50
Bratensoße | Gravy | Salsa de asado ; 50 ; 1 ; Portion=60
Pesto | Pesto | Pesto ; 450 ; 5 ; EL=15
Hummus | Hummus | Hummus ; 230 ; 7 ; EL=20 | Portion=50
Tzatziki | Tzatziki | Tzatziki ; 120 ; 4 ; EL=20 | Portion=50
Guacamole | Guacamole | Guacamole ; 160 ; 2 ; EL=20
Alioli | Aioli | Alioli ; 600 ; 1 ; EL=15
Salsa brava | Salsa brava | Salsa brava ; 120 ; 1 ; EL=15
Joghurt-Dressing | Yogurt dressing | Aliño de yogur ; 120 ; 2 ; EL=15
Balsamico-Dressing | Balsamic dressing | Vinagreta balsámica ; 250 ; 0.5 ; EL=15
Olivenöl | Olive oil | Aceite de oliva ; 820 ; 0 ; EL=10 | TL=4
Sojasoße | Soy sauce | Salsa de soja ; 60 ; 8 ; EL=15
Sweet-Chili-Soße | Sweet chili sauce | Salsa de chile dulce ; 220 ; 0.3 ; EL=15
BBQ-Soße | BBQ sauce | Salsa barbacoa ; 150 ; 1 ; EL=15
Erdnusssoße (Saté) | Peanut sauce (satay) | Salsa de cacahuete ; 300 ; 8 ; EL=20
Frietsaus | Fritessaus | Salsa para patatas holandesa ; 300 ; 1 ; Portion=30
Joppiesaus | Joppiesaus | Salsa Joppie ; 480 ; 1 ; EL=15
Sambal Oelek | Sambal oelek | Sambal oelek ; 40 ; 1.5 ; TL=5
Sriracha | Sriracha | Sriracha ; 100 ; 2 ; TL=5
Tabasco | Tabasco | Tabasco ; 12 ; 1 ; Spritzer=1
Worcestersoße | Worcestershire sauce | Salsa Worcestershire ; 100 ; 0 ; TL=5
Teriyaki-Soße | Teriyaki sauce | Salsa teriyaki ; 120 ; 3 ; EL=15
Hoisin-Soße | Hoisin sauce | Salsa hoisin ; 220 ; 3 ; EL=15
Austernsoße | Oyster sauce | Salsa de ostras ; 110 ; 2 ; EL=15
Fischsoße | Fish sauce | Salsa de pescado ; 35 ; 5 ; TL=6
Currysoße (Fertig) | Curry sauce (ready) | Salsa curry ; 140 ; 1 ; EL=15 | Glas=400
Curry-Paste (rot) | Red curry paste | Pasta de curry rojo ; 140 ; 3 ; TL=8 | EL=15
Tomatenmark | Tomato paste | Concentrado de tomate ; 95 ; 4.5 ; EL=15 | TL=5
Passierte Tomaten | Passata | Tomate triturado ; 30 ; 1.4 ; Packung=500 | Portion=100
Gehackte Tomaten (Dose) | Chopped tomatoes (canned) | Tomate troceado en lata ; 22 ; 1.2 ; Dose=400
Tomatensoße (Glas) | Tomato sauce (jar) | Salsa de tomate en tarro ; 55 ; 1.5 ; Glas=400 | Portion=125
Tomate frito | Tomate frito | Tomate frito ; 80 ; 1.5 ; EL=15 | Packung=350
Pesto rosso | Pesto rosso | Pesto rosso ; 380 ; 5 ; EL=15 | Glas=190
Pesto (Barilla) | Pesto (Barilla) | Pesto (Barilla) ; 500 ; 5 ; EL=15 | Glas=190
Bolognese-Soße (Glas) | Bolognese sauce (jar) | Salsa boloñesa en tarro ; 80 ; 4 ; Glas=400 | Portion=125
Carbonara-Soße (Glas) | Carbonara sauce (jar) | Salsa carbonara en tarro ; 140 ; 3 ; Glas=400
Sahnesoße | Cream sauce | Salsa de nata ; 150 ; 2 ; Portion=100
Käsesoße | Cheese sauce | Salsa de queso ; 180 ; 5 ; Portion=60
Pfeffersoße | Pepper sauce | Salsa a la pimienta ; 110 ; 1.5 ; Portion=60
Jägersoße | Hunter's sauce | Salsa de champiñones ; 70 ; 1.5 ; Portion=80
Knoblauchsoße | Garlic sauce | Salsa de ajo ; 400 ; 1.5 ; EL=15
Kräuterbutter | Herb butter | Mantequilla de hierbas ; 700 ; 1 ; Scheibe=10 | EL=15
Aioli (Glas) | Aioli (jar) | Alioli en tarro ; 600 ; 1 ; EL=15
Mayonnaise light | Light mayonnaise | Mayonesa light ; 300 ; 1 ; EL=15
Cocktailsoße | Cocktail sauce | Salsa rosa ; 400 ; 1 ; EL=15
Burger-Soße | Burger sauce | Salsa hamburguesa ; 380 ; 1 ; EL=15
Honig-Senf-Soße | Honey mustard sauce | Salsa de miel y mostaza ; 300 ; 2 ; EL=15
Süßer Senf | Sweet mustard | Mostaza dulce ; 160 ; 5 ; TL=8
Dijon-Senf | Dijon mustard | Mostaza de Dijon ; 150 ; 7 ; TL=6
Meerrettich | Horseradish | Rábano picante ; 90 ; 2.5 ; TL=6
Ketchup (zuckerreduziert) | Reduced-sugar ketchup | Kétchup bajo en azúcar ; 60 ; 1.5 ; EL=15
Curry-Ketchup | Curry ketchup | Kétchup al curry ; 120 ; 1.5 ; EL=15
Salsa (Dip) | Salsa dip | Salsa mexicana ; 30 ; 1.4 ; EL=15 | Glas=300
Käse-Dip (Nacho) | Nacho cheese dip | Salsa de queso para nachos ; 140 ; 2.5 ; EL=20
Sour-Cream-Dip | Sour cream dip | Dip de nata agria ; 200 ; 2.5 ; EL=20
Baba Ghanoush | Baba ghanoush | Baba ganoush ; 110 ; 2 ; EL=20
Ajvar | Ajvar | Ajvar ; 80 ; 1.5 ; EL=15
Kräuter-Dressing | Herb dressing | Aliño de hierbas ; 300 ; 1 ; EL=15
Caesar-Dressing | Caesar dressing | Aliño César ; 450 ; 2 ; EL=15
French Dressing | French dressing | Aliño francés ; 330 ; 1 ; EL=15
Vinaigrette | Vinaigrette | Vinagreta ; 400 ; 0 ; EL=15
Balsamico-Creme | Balsamic glaze | Crema de balsámico ; 250 ; 0.5 ; TL=5 | EL=15
Balsamico-Essig | Balsamic vinegar | Vinagre balsámico ; 90 ; 0.5 ; EL=15
Essig (Weißwein) | White wine vinegar | Vinagre de vino blanco ; 20 ; 0 ; EL=15
Apfelessig | Apple cider vinegar | Vinagre de manzana ; 20 ; 0 ; EL=15
Brühe (zubereitet) | Stock (prepared) | Caldo preparado ; 8 ; 0.5 ; Tasse=250 | Liter=1000
Bratensaft (Fond) | Gravy stock | Fondo de carne ; 20 ; 2 ; Portion=60
Heinz Tomato Ketchup | Heinz tomato ketchup | Kétchup Heinz ; 100 ; 1.2 ; EL=15
Hellmann's Mayonnaise | Hellmann's mayonnaise | Mayonesa Hellmann's ; 720 ; 1 ; EL=15
Kühne Gewürzgurken | Kühne gherkins | Pepinillos Kühne ; 20 ; 0.5 ; Stück=30
Develey Senf mittelscharf | Develey mustard | Mostaza Develey ; 100 ; 6 ; TL=8
Thomy Les Sauces Hollandaise | Thomy hollandaise | Salsa holandesa Thomy ; 400 ; 1 ; EL=15 | Packung=250
Knorr Salatkrönung | Knorr salad seasoning | Aliño Knorr ; 120 ; 4 ; Portion (zubereitet)=20
Barilla Basilico | Barilla basilico sauce | Salsa Barilla basilico ; 55 ; 1.5 ; Glas=400 | Portion=125
Mondamin Soßenbinder | Mondamin sauce thickener | Espesante Mondamin ; 400 ; 0 ; EL=8
Uncle Ben's Süß-Sauer | Uncle Ben's sweet & sour | Salsa agridulce Uncle Ben's ; 85 ; 0.5 ; Glas=400 | Portion=125
Kikkoman Sojasoße | Kikkoman soy sauce | Salsa de soja Kikkoman ; 80 ; 10 ; EL=15
Sojasauce (dunkel) | Dark soy sauce | Salsa de soja oscura ; 80 ; 7 ; EL=15
Sojasauce (hell) | Light soy sauce | Salsa de soja clara ; 55 ; 8 ; EL=15
Gochujang (Chilipaste) | Gochujang (chilli paste) | Gochujang (pasta de chile) ; 230 ; 4 ; EL=20 | TL=7
Tomatenpüree / Passata | Tomato purée / passata | Tomate triturado / passata ; 30 ; 1.4 ; EL=15 | Packung=500
Bratensauce (zubereitet) | Gravy (prepared) | Salsa de asado preparada ; 40 ; 1 ; Portion=60
Bratensauce (Pulver) | Gravy powder | Salsa de asado en polvo ; 380 ; 8 ; EL=10
Süß-Sauer-Soße (selbst gemacht, light) | Homemade light sweet and sour sauce | Salsa agridulce casera light ; 45 ; 1 ; Portion=100
Currysauce light (Cola Zero & Tomate) | Light curry sauce (cola zero & tomato) | Salsa curry light ; 30 ; 1.2 ; Portion=80
Tzatziki (selbst gemacht) | Homemade tzatziki | Tzatziki casero ; 70 ; 5 ; EL=20
Guacamole (selbst gemacht) | Homemade guacamole | Guacamole casero ; 150 ; 2 ; EL=20
Joghurt-Kräuter-Dip | Yoghurt herb dip | Dip de yogur y hierbas ; 60 ; 4 ; EL=20
Salsa verde | Salsa verde | Salsa verde ; 300 ; 1 ; EL=15
Chimichurri | Chimichurri | Chimichurri ; 400 ; 1 ; EL=15
Mango-Chutney | Mango chutney | Chutney de mango ; 230 ; 0.5 ; EL=20
Preiselbeeren (Glas) | Lingonberry compote | Compota de arándano rojo ; 180 ; 0.3 ; EL=20
Pesto (light) | Light pesto | Pesto light ; 250 ; 4 ; EL=15
Hummus (light) | Light hummus | Hummus light ; 180 ; 7 ; EL=20
Erdnusssoße light | Light peanut sauce | Salsa de cacahuete light ; 180 ; 8 ; EL=20
Salatdressing (Essig-Öl) | Vinaigrette | Vinagreta ; 300 ; 0.3 ; EL=15
Obatzda | Obatzda | Obatzda ; 290 ; 12 ; EL=25 | Portion=80
Vanillesoße | Custard | Natillas ; 110 ; 3 ; Portion=100

@Vegetarisch & Vegan | Vegetarian & vegan | Vegetariano y vegano ; 🌱
Tofu natur | Tofu (plain) | Tofu natural ; 120 ; 13 ; Portion=100 | Packung=200
Räuchertofu | Smoked tofu | Tofu ahumado ; 160 ; 17 ; Portion=100
Seitan | Seitan | Seitán ; 140 ; 25 ; Portion=100
Veggie-Burger-Patty | Veggie burger patty | Hamburguesa vegetal ; 230 ; 17 ; Stück=100
Veggie-Nuggets | Veggie nuggets | Nuggets vegetales ; 220 ; 14 ; Stück=20
Tempeh | Tempeh | Tempeh ; 190 ; 19 ; Portion=100
Sojajoghurt | Soy yogurt | Yogur de soja ; 50 ; 4 ; Becher=150
Falafel-Bowl | Falafel bowl | Bowl de falafel ; 160 ; 6 ; Schale=400
Beyond Burger | Beyond Burger | Beyond Burger ; 250 ; 18 ; Stück=113
Rügenwalder Veggie-Mühlen-Hack | Rügenwalder veggie mince | Carne picada vegetal Rügenwalder ; 180 ; 20 ; Packung=180
Veganes Hack | Vegan mince | Carne picada vegana ; 200 ; 18 ; Portion=125
Vegane Würstchen | Vegan sausages | Salchichas veganas ; 220 ; 15 ; Stück=50
Veganer Aufschnitt | Vegan cold cuts | Embutido vegano ; 200 ; 14 ; Scheibe=15
Veganer Käse | Vegan cheese | Queso vegano ; 290 ; 1 ; Scheibe=20
Vegane Butter | Vegan butter | Mantequilla vegana ; 640 ; 0 ; TL=5 | EL=12
Soja-Schnetzel (trocken) | Textured soy protein (dry) | Soja texturizada seca ; 340 ; 50 ; Portion=50
Tofu (Seidentofu) | Silken tofu | Tofu sedoso ; 55 ; 5 ; Packung=400 | Portion=150
Tofu geräuchert (Taifun) | Smoked tofu (Taifun) | Tofu ahumado (Taifun) ; 160 ; 18 ; Packung=200
Lupinenfilet | Lupin fillet | Filete de lupino ; 200 ; 15 ; Stück=90
Jackfruit | Jackfruit | Yaca ; 30 ; 1 ; Portion=150
Falafel (TK) | Frozen falafel | Falafel congelado ; 230 ; 7 ; Stück=20
Gemüsebratling | Vegetable patty | Hamburguesa vegetal ; 190 ; 5 ; Stück=80
Halloumi-Burger | Halloumi burger | Hamburguesa de halloumi ; 280 ; 14 ; Stück=230
Linsen-Bolognese | Lentil bolognese | Boloñesa de lentejas ; 95 ; 6 ; Portion=250
Hafer-Cuisine | Oat cooking cream | Nata de avena para cocinar ; 150 ; 1 ; Schuss=30 | Packung=200
Soja-Cuisine | Soy cooking cream | Nata de soja para cocinar ; 170 ; 3 ; Schuss=30
Kokosmilch (Dose) | Coconut milk (canned) | Leche de coco en lata ; 180 ; 1.8 ; Dose=400 | EL=15
Kokosmilch light (Dose) | Light coconut milk (canned) | Leche de coco light ; 80 ; 0.8 ; Dose=400
Hefeflocken | Nutritional yeast | Levadura nutricional ; 370 ; 45 ; EL=5
Sojahack (vegan) | Vegan soy mince | Carne picada de soja vegana ; 190 ; 18 ; Portion=125 | Packung=250
Sojaschnetzel (trocken) | Dried soy chunks | Soja texturizada seca ; 340 ; 50 ; Portion=50
Hafer-Kochcreme (vegan) | Oat cooking cream | Nata de avena para cocinar ; 150 ; 1 ; EL=15 | Packung=200
Soja-Kochcreme (vegan) | Soy cooking cream | Nata de soja para cocinar ; 180 ; 3 ; EL=15 | Packung=200
Veganer Reibekäse | Vegan grated cheese | Queso rallado vegano ; 290 ; 1 ; EL=10 | Portion=30
Veganer Frischkäse | Vegan cream cheese | Queso crema vegano ; 230 ; 5 ; EL=15
Vegane Mayonnaise | Vegan mayonnaise | Mayonesa vegana ; 600 ; 0.5 ; EL=15
Veganes Proteinpulver | Vegan protein powder | Proteína vegana en polvo ; 380 ; 75 ; Messlöffel=30
Haferdrink | Oat drink | Bebida de avena ; 45 ; 0.5 ; Glas=250
Mandeldrink (ungesüßt) | Unsweetened almond drink | Bebida de almendra sin azúcar ; 13 ; 0.5 ; Glas=250
Vegane Butter (Block) | Vegan butter block | Mantequilla vegana ; 710 ; 0 ; EL=12
Hafer-Joghurt | Oat yoghurt | Yogur de avena ; 80 ; 1 ; Becher=150
Vegane Hähnchenstücke | Vegan chicken pieces | Trozos de pollo veganos ; 160 ; 18 ; Portion=100
Vegane Bratwurst | Vegan sausage | Salchicha vegana ; 240 ; 16 ; Stück=75
Veganes Hack (Erbse) | Vegan pea mince | Picada vegana de guisante ; 190 ; 16 ; Portion=125
Jackfruit (Dose, abgetropft) | Canned jackfruit | Yaca en lata ; 35 ; 1 ; Portion=150
Glutenfreie Nudeln (roh) | Gluten-free pasta (uncooked) | Pasta sin gluten cruda ; 355 ; 7 ; Portion=100
Glutenfreies Brot | Gluten-free bread | Pan sin gluten ; 250 ; 3 ; Scheibe=35
Laktosefreie Kochsahne | Lactose-free cooking cream | Nata para cocinar sin lactosa ; 160 ; 3 ; EL=15
Falafel (TK, gebacken) | Frozen falafel (baked) | Falafel congelado horneado ; 250 ; 8 ; Stück=20 | Portion=100
Rügenwalder Mühle Veganes Mühlen Hack | Rügenwalder vegan mince | Picada vegana Rügenwalder ; 180 ; 19 ; Portion=90 | Packung=180
Rügenwalder Mühle Vegane Mühlen Frikadellen | Rügenwalder vegan patties | Hamburguesitas veganas Rügenwalder ; 210 ; 17 ; Stück=40
Rügenwalder Mühle Vegane Mühlen Nuggets | Rügenwalder vegan nuggets | Nuggets veganos Rügenwalder ; 220 ; 13 ; Stück=20 | Packung=200
Rügenwalder Mühle Veganes Mühlen Schnitzel | Rügenwalder vegan schnitzel | Escalope vegano Rügenwalder ; 225 ; 15 ; Stück=90
Rügenwalder Mühle Vegane Mühlen Bratwurst | Rügenwalder vegan bratwurst | Salchicha vegana Rügenwalder ; 210 ; 17 ; Stück=50
Rügenwalder Mühle Vegane Mühlen Cordon Bleu | Rügenwalder vegan cordon bleu | Cordon bleu vegano Rügenwalder ; 235 ; 12 ; Stück=90
Rügenwalder Mühle Veganer Schinken Spicker | Rügenwalder vegan ham slices | Lonchas de jamón vegano Rügenwalder ; 130 ; 15 ; Scheibe=10 | Packung=80
Rügenwalder Mühle Vegane Mühlen Salami | Rügenwalder vegan salami | Salami vegano Rügenwalder ; 230 ; 14 ; Scheibe=5 | Packung=80
Rügenwalder Mühle Veganes Mühlen Filet Streifen | Rügenwalder vegan chicken-style strips | Tiras veganas tipo pollo Rügenwalder ; 170 ; 20 ; Portion=80 | Packung=160
Rügenwalder Mühle Vegetarische Mühlen Frikadellen | Rügenwalder vegetarian patties | Hamburguesitas vegetarianas Rügenwalder ; 200 ; 17 ; Stück=40
Rügenwalder Mühle Vegetarischer Mühlen Teewurst | Rügenwalder vegetarian teewurst | Teewurst vegetariano Rügenwalder ; 280 ; 12 ; EL=15
Beyond Meat Beyond Burger | Beyond Burger | Beyond Burger ; 250 ; 17 ; Stück=113
Beyond Meat Beyond Mince | Beyond Mince | Beyond Mince ; 230 ; 17 ; Portion=100 | Packung=300
Beyond Meat Beyond Sausage | Beyond Sausage | Beyond Sausage ; 230 ; 16 ; Stück=100
Beyond Meat Beyond Steak Stücke | Beyond Steak pieces | Beyond Steak trozos ; 190 ; 21 ; Portion=100
Like Meat Like Gyros | Like Meat Like Gyros | Like Meat Like Gyros ; 190 ; 19 ; Portion=90
Like Meat Like Kebab | Like Meat Like Kebab | Like Meat Like Kebab ; 185 ; 19 ; Portion=90
Like Meat Like Schnitzel | Like Meat Like Schnitzel | Like Meat Like Schnitzel ; 220 ; 14 ; Stück=90
Garden Gourmet Sensational Burger | Garden Gourmet Sensational Burger | Garden Gourmet Sensational Burger ; 240 ; 19 ; Stück=113
Garden Gourmet Vegane Filetstreifen | Garden Gourmet vegan fillet strips | Tiras de filete veganas Garden Gourmet ; 150 ; 19 ; Portion=80
Garden Gourmet Falafel | Garden Gourmet falafel | Falafel Garden Gourmet ; 230 ; 6 ; Stück=20
Planted Chicken Nature | Planted chicken nature | Planted chicken natural ; 110 ; 23 ; Portion=100 | Packung=200
Planted Kebab | Planted kebab | Planted kebab ; 140 ; 20 ; Portion=100
Planted Pulled BBQ | Planted pulled BBQ | Planted pulled BBQ ; 150 ; 20 ; Portion=100
Vegini Vegane Nuggets | Vegini vegan nuggets | Nuggets veganos Vegini ; 220 ; 14 ; Stück=20
The Vegetarian Butcher Chickeneers | The Vegetarian Butcher chicken pieces | Trozos tipo pollo The Vegetarian Butcher ; 160 ; 20 ; Portion=90
The Vegetarian Butcher Hackmeister | The Vegetarian Butcher vegan mince | Picada vegana The Vegetarian Butcher ; 190 ; 18 ; Portion=90
Taifun Räuchertofu | Taifun smoked tofu | Tofu ahumado Taifun ; 160 ; 17 ; Packung=200 | Portion=100
Taifun Tofu Rosso | Taifun tofu rosso | Tofu Rosso Taifun ; 180 ; 15 ; Packung=200
Taifun Tofu Basilico | Taifun tofu basilico | Tofu Basilico Taifun ; 175 ; 15 ; Packung=200
Taifun Tofu-Würstchen | Taifun tofu sausages | Salchichas de tofu Taifun ; 250 ; 16 ; Stück=50
Taifun Seidentofu | Taifun silken tofu | Tofu sedoso Taifun ; 55 ; 5.5 ; Packung=400
Alnatura Tofu natur | Alnatura plain tofu | Tofu natural Alnatura ; 130 ; 14 ; Packung=200
Alnatura Tempeh | Alnatura tempeh | Tempeh Alnatura ; 200 ; 19 ; Packung=200
EDEKA My Veggie Veganes Hack | EDEKA My Veggie vegan mince | Picada vegana EDEKA My Veggie ; 180 ; 18 ; Portion=90 | Packung=180
EDEKA My Veggie Vegane Burger Patties | EDEKA My Veggie vegan burger patties | Hamburguesas veganas EDEKA My Veggie ; 230 ; 17 ; Stück=113
EDEKA My Veggie Vegane Nuggets | EDEKA My Veggie vegan nuggets | Nuggets veganos EDEKA My Veggie ; 220 ; 13 ; Stück=20
EDEKA My Veggie Vegane Bratwurst | EDEKA My Veggie vegan bratwurst | Salchicha vegana EDEKA My Veggie ; 200 ; 16 ; Stück=55
EDEKA My Veggie Vegane Hähnchen-Art Stücke | EDEKA My Veggie vegan chicken-style pieces | Trozos veganos tipo pollo EDEKA My Veggie ; 160 ; 19 ; Portion=80
EDEKA My Veggie Veganer Aufschnitt | EDEKA My Veggie vegan cold cuts | Embutido vegano EDEKA My Veggie ; 150 ; 14 ; Scheibe=10
EDEKA My Veggie Hafer Drink | EDEKA My Veggie oat drink | Bebida de avena EDEKA My Veggie ; 45 ; 0.5 ; Glas=250
EDEKA My Veggie Soja Joghurt | EDEKA My Veggie soy yoghurt | Yogur de soja EDEKA My Veggie ; 55 ; 4 ; Becher=150
REWE Bio + vegan Tofu | REWE Bio vegan tofu | Tofu REWE Bio vegano ; 130 ; 14 ; Packung=200
REWE Bio + vegan Haferdrink | REWE Bio vegan oat drink | Bebida de avena REWE Bio ; 45 ; 0.5 ; Glas=250
Vemondo (Lidl) Veganes Hack | Vemondo vegan mince | Picada vegana Vemondo ; 180 ; 18 ; Portion=90
Vemondo (Lidl) Vegane Burger | Vemondo vegan burgers | Hamburguesas veganas Vemondo ; 230 ; 17 ; Stück=113
Vemondo (Lidl) Vegane Nuggets | Vemondo vegan nuggets | Nuggets veganos Vemondo ; 220 ; 13 ; Stück=20
Vemondo (Lidl) Veganer Gouda-Genuss | Vemondo vegan gouda style | Queso vegano tipo gouda Vemondo ; 300 ; 0.5 ; Scheibe=20
Wilmersburger Vegane Scheiben | Wilmersburger vegan cheese slices | Lonchas de queso vegano Wilmersburger ; 290 ; 0.5 ; Scheibe=20
Wilmersburger Pizzaschmelz | Wilmersburger vegan pizza melt | Queso vegano para pizza Wilmersburger ; 280 ; 0.5 ; Portion=30
Violife Original Block | Violife original block | Violife original bloque ; 300 ; 0 ; Portion=30
Violife Geriebener Käse | Violife grated | Violife rallado ; 300 ; 0 ; Portion=30
Violife Frischkäse | Violife cream cheese | Violife queso crema ; 230 ; 1 ; EL=15
Simply V Gerieben | Simply V grated | Simply V rallado ; 300 ; 0.5 ; Portion=30
Simply V Streichgenuss | Simply V spread | Simply V para untar ; 230 ; 1 ; EL=15
Simply V Hirtenkäse-Art | Simply V feta style | Simply V tipo feta ; 270 ; 0.5 ; Portion=50
Alpro Skyr-Style Natur | Alpro skyr style plain | Alpro estilo skyr natural ; 60 ; 10 ; Becher=150
Alpro Joghurtalternative Natur | Alpro plain yoghurt alternative | Alpro alternativa al yogur natural ; 50 ; 4 ; Becher=150 | EL=20
Alpro Protein Drink | Alpro protein drink | Alpro bebida proteica ; 55 ; 5 ; Glas=250
Alpro Haferdrink | Alpro oat drink | Alpro bebida de avena ; 45 ; 0.5 ; Glas=250
Alpro Mandeldrink ungesüßt | Alpro unsweetened almond drink | Alpro bebida de almendra sin azúcar ; 13 ; 0.4 ; Glas=250
Alpro Soja Kochcreme | Alpro soy cooking cream | Alpro crema de soja para cocinar ; 170 ; 2.5 ; EL=15 | Packung=250
Alpro Pudding Schoko | Alpro chocolate dessert | Alpro postre de chocolate ; 85 ; 3 ; Becher=125
Oatly Barista | Oatly barista | Oatly barista ; 60 ; 1 ; Glas=250 | Schuss=30
Oatly Hafer Cuisine | Oatly oat cooking cream | Oatly nata de avena para cocinar ; 150 ; 1 ; EL=15 | Packung=250
Oatly Haferghurt Natur | Oatly oatgurt plain | Oatly yogur de avena natural ; 60 ; 1 ; Becher=150
Oatly Eis Schoko | Oatly chocolate ice cream | Oatly helado de chocolate ; 220 ; 2 ; Kugel=60
Provamel Soja Natur | Provamel soy plain | Provamel soja natural ; 40 ; 4 ; Glas=250
Berief Bio Soja Drink | Berief organic soy drink | Bebida de soja Berief ; 40 ; 3.5 ; Glas=250
Vly Erbsenprotein Drink | Vly pea protein drink | Bebida de proteína de guisante Vly ; 45 ; 2.5 ; Glas=250
Rama Vegan Pflanzenmargarine | Rama vegan margarine | Margarina vegana Rama ; 530 ; 0 ; TL=5 | EL=12
Becel Pro Activ | Becel pro activ | Becel pro activ ; 320 ; 0 ; TL=5
Kerrygold Vegan Butter | Kerrygold vegan butter | Mantequilla vegana Kerrygold ; 720 ; 0 ; TL=5
Ben & Jerry's Non-Dairy | Ben & Jerry's non-dairy | Ben & Jerry's sin lácteos ; 260 ; 3 ; Becher=465 | Kugel=60
Magnum Vegan Classic | Magnum vegan classic | Magnum vegano clásico ; 290 ; 2.5 ; Stück=70
Veganz Proteinriegel | Veganz protein bar | Barrita proteica Veganz ; 390 ; 30 ; Riegel=50
Hellmann's Vegan Mayo | Hellmann's vegan mayo | Mayonesa vegana Hellmann's ; 540 ; 0.5 ; EL=15
Knorr Veganes Gemüsebrühe Pulver | Knorr vegetable stock powder | Caldo de verduras en polvo Knorr ; 220 ; 8 ; TL=5
Valsoia Reis Drink | Valsoia rice drink | Bebida de arroz Valsoia ; 50 ; 0.1 ; Glas=250
Lupinenschrot (vegan) | Lupin grits | Altramuz triturado ; 370 ; 40 ; Portion=50
Seitan (Wheaty Bratwurst) | Wheaty seitan bratwurst | Salchicha de seitán Wheaty ; 230 ; 24 ; Stück=50
Wheaty Veganes Gyros | Wheaty vegan gyros | Gyros vegano Wheaty ; 250 ; 24 ; Portion=100

@Zutaten & Backen | Baking & pantry | Ingredientes y repostería ; 🧂
Weizenmehl (Type 405) | Wheat flour | Harina de trigo ; 350 ; 10 ; EL=10 | Tasse=125
Weizenmehl (Type 550) | Bread flour | Harina de fuerza ; 350 ; 11 ; EL=10 | Tasse=125
Dinkelmehl | Spelt flour | Harina de espelta ; 345 ; 12 ; EL=10 | Tasse=125
Vollkornmehl | Wholemeal flour | Harina integral ; 330 ; 12 ; EL=10 | Tasse=125
Roggenmehl | Rye flour | Harina de centeno ; 320 ; 8 ; EL=10
Mandelmehl | Almond flour | Harina de almendra ; 600 ; 24 ; EL=8
Maismehl | Cornmeal | Harina de maíz ; 360 ; 8 ; EL=10
Speisestärke | Cornstarch | Maicena ; 350 ; 0.3 ; TL=3 | EL=10
Grieß | Semolina | Sémola ; 340 ; 11 ; EL=12
Paniermehl | Breadcrumbs | Pan rallado ; 350 ; 11 ; EL=10
Panko | Panko | Panko ; 370 ; 12 ; EL=6
Zucker | Sugar | Azúcar ; 400 ; 0 ; TL=4 | EL=12 | Stück (Würfel)=3
Brauner Zucker | Brown sugar | Azúcar moreno ; 390 ; 0 ; TL=4 | EL=12
Puderzucker | Icing sugar | Azúcar glas ; 400 ; 0 ; TL=3 | EL=8
Vanillezucker | Vanilla sugar | Azúcar avainillado ; 400 ; 0 ; Päckchen=8
Kokosblütenzucker | Coconut sugar | Azúcar de coco ; 380 ; 1 ; TL=4 | EL=12
Süßstoff | Sweetener | Edulcorante ; 0 ; 0 ; Tablette=0.1
Erythrit | Erythritol | Eritritol ; 0 ; 0 ; TL=4 | EL=12
Backpulver | Baking powder | Levadura química ; 100 ; 0 ; Päckchen=15 | TL=4
Natron | Baking soda | Bicarbonato ; 0 ; 0 ; TL=5
Hefe (frisch) | Fresh yeast | Levadura fresca ; 100 ; 12 ; Würfel=42
Trockenhefe | Dried yeast | Levadura seca ; 330 ; 40 ; Päckchen=7
Gelatine | Gelatine | Gelatina neutra ; 340 ; 85 ; Blatt=1.7
Agar-Agar | Agar-agar | Agar-agar ; 160 ; 2 ; TL=2
Kakaopulver (ungesüßt) | Cocoa powder (unsweetened) | Cacao puro en polvo ; 360 ; 20 ; TL=3 | EL=7
Backkakao | Baking cocoa | Cacao para repostería ; 360 ; 20 ; EL=7
Schokotropfen | Chocolate chips | Pepitas de chocolate ; 500 ; 6 ; EL=12 | Handvoll=30
Kuvertüre (Zartbitter) | Dark chocolate couverture | Cobertura de chocolate negro ; 540 ; 7 ; Stück=10 | Packung=200
Kuvertüre (Vollmilch) | Milk chocolate couverture | Cobertura de chocolate con leche ; 550 ; 7 ; Stück=10 | Packung=200
Zuckerstreusel | Sugar sprinkles | Fideos de colores ; 400 ; 0 ; TL=4
Puddingpulver | Custard powder | Polvo para natillas ; 350 ; 0.3 ; Päckchen=37
Tortenguss | Cake glaze | Gelatina para tartas ; 340 ; 0 ; Päckchen=12
Sahnesteif | Whipped cream stabiliser | Estabilizante de nata ; 380 ; 0 ; Päckchen=8
Mandeln (gemahlen) | Ground almonds | Almendra molida ; 610 ; 24 ; EL=8 | Packung=200
Haselnüsse (gemahlen) | Ground hazelnuts | Avellana molida ; 650 ; 15 ; EL=8
Mandelblättchen | Flaked almonds | Almendra laminada ; 600 ; 24 ; EL=6
Pinienkerne | Pine nuts | Piñones ; 680 ; 14 ; EL=10
Sonnenblumenkerne | Sunflower seeds | Pipas de girasol peladas ; 590 ; 22 ; EL=10
Kürbiskerne | Pumpkin seeds | Semillas de calabaza ; 570 ; 30 ; EL=10
Sesam | Sesame seeds | Sésamo ; 580 ; 18 ; TL=3 | EL=9
Walnüsse (gehackt) | Chopped walnuts | Nueces picadas ; 680 ; 15 ; EL=8
Rosinen (Backen) | Baking raisins | Pasas para repostería ; 300 ; 2.5 ; EL=12
Rapsöl | Rapeseed oil | Aceite de colza ; 900 ; 0 ; TL=5 | EL=12
Sonnenblumenöl | Sunflower oil | Aceite de girasol ; 900 ; 0 ; TL=5 | EL=12
Sesamöl | Sesame oil | Aceite de sésamo ; 900 ; 0 ; TL=5 | EL=12
Walnussöl | Walnut oil | Aceite de nuez ; 900 ; 0 ; EL=12
Leinöl | Linseed oil | Aceite de linaza ; 900 ; 0 ; EL=12
Bratöl / Frittierfett | Frying oil | Aceite para freír ; 900 ; 0 ; EL=12
Butterschmalz | Clarified butter | Mantequilla clarificada ; 900 ; 0 ; TL=5 | EL=12
Ghee | Ghee | Ghee ; 900 ; 0 ; TL=5 | EL=12
Schmalz | Lard | Manteca ; 900 ; 0 ; EL=12
Sprühöl | Cooking spray | Aceite en spray ; 800 ; 0 ; Sprühstoß=0.3
Olivenöl extra vergine | Extra virgin olive oil | Aceite de oliva virgen extra ; 900 ; 0 ; TL=5 | EL=12
Fertig-Blätterteig | Ready-made puff pastry | Hojaldre ; 400 ; 5 ; Packung=275 | Viertel=70
Fertig-Pizzateig | Ready-made pizza dough | Masa de pizza ; 270 ; 7 ; Packung=400
Fertig-Mürbeteig | Ready-made shortcrust | Masa quebrada ; 440 ; 6 ; Packung=275
Yufka-Teig | Filo / yufka pastry | Pasta filo ; 300 ; 8 ; Blatt=30
Wan-Tan-Blätter | Wonton wrappers | Obleas wonton ; 290 ; 9 ; Stück=8
Reispapier | Rice paper | Papel de arroz ; 340 ; 0.5 ; Blatt=9
Lasagneplatten | Lasagne sheets | Láminas de lasaña ; 355 ; 12 ; Platte=20
Cannelloni (roh) | Cannelloni (uncooked) | Canelones crudos ; 355 ; 12 ; Stück=8
Brühwürfel | Stock cube | Pastilla de caldo ; 250 ; 10 ; Würfel=10
Gemüsebrühe (Pulver) | Vegetable stock powder | Caldo de verduras en polvo ; 230 ; 8 ; TL=5 | EL=12
Hühnerbrühe (Pulver) | Chicken stock powder | Caldo de pollo en polvo ; 250 ; 10 ; TL=5
Saucenbinder | Sauce thickener | Espesante para salsas ; 400 ; 0 ; EL=8
Fix-Tüte (Würzmischung) | Seasoning mix packet | Sobre de condimento ; 320 ; 8 ; Tüte=40 | Portion=10
Instant-Kaffeepulver | Instant coffee | Café soluble ; 350 ; 12 ; TL=2
Kaffeesahne | Coffee creamer | Leche para café ; 120 ; 3.5 ; Portion=10
Kaffeeweißer (Pulver) | Coffee whitener | Blanqueador de café ; 540 ; 3 ; TL=3
Kakaopulver (Instant, Kaba/Nesquik) | Instant cocoa (Nesquik) | Cacao soluble (Nesquik) ; 380 ; 4 ; TL=6 | EL=15
Proteinpulver (vegan) | Vegan protein powder | Proteína vegana en polvo ; 380 ; 75 ; Messlöffel=30
Kollagenpulver | Collagen powder | Colágeno en polvo ; 360 ; 90 ; Messlöffel=10
Speisestärke (Maisstärke) | Cornflour | Maicena ; 350 ; 0.3 ; TL=3 | EL=10
Semmelbrösel | Breadcrumbs | Pan rallado ; 350 ; 11 ; EL=10
Cornflakes (ungesüßt, zum Panieren) | Unsweetened cornflakes (for breading) | Copos de maíz sin azúcar ; 370 ; 7 ; Handvoll=20
Eiklar (flüssig) | Liquid egg white | Clara de huevo líquida ; 48 ; 11 ; Schuss=50 | Packung=500
Vollei | Whole egg | Huevo entero ; 155 ; 12.5 ; Stück (M)=58
Mehl (Universal / glatt) | Plain flour | Harina común ; 350 ; 10 ; EL=10
Haferflocken (kernig) | Jumbo rolled oats | Copos de avena gruesos ; 370 ; 13.5 ; EL=10 | Portion=50
Haferkleie | Oat bran | Salvado de avena ; 320 ; 17 ; EL=8
Flohsamenschalen | Psyllium husk | Cáscara de psyllium ; 200 ; 2 ; TL=4
Mandeln (ganz) | Whole almonds | Almendras enteras ; 600 ; 24 ; Stück=1.2 | Handvoll=30
Mandeln (gehobelt) | Flaked almonds | Almendras laminadas ; 600 ; 24 ; EL=6
Cashewkerne | Cashew nuts | Anacardos ; 570 ; 18 ; Handvoll=30 | EL=10
Erdnüsse (ungesalzen) | Unsalted peanuts | Cacahuetes sin sal ; 570 ; 25 ; Handvoll=30
Kokosöl (nativ) | Virgin coconut oil | Aceite de coco virgen ; 900 ; 0 ; TL=5 | EL=12
Rapsöl (kalt gepresst) | Cold-pressed rapeseed oil | Aceite de colza prensado en frío ; 900 ; 0 ; TL=5 | EL=12
Kürbiskernöl | Pumpkin seed oil | Aceite de pepitas de calabaza ; 900 ; 0 ; EL=12
Ananas (Dose, im eigenen Saft) | Canned pineapple (in juice) | Piña en su jugo ; 55 ; 0.4 ; Dose (abgetropft)=340 | Scheibe=40
Ananassaft (aus der Dose) | Pineapple juice from the can | Jugo de piña de lata ; 50 ; 0.3 ; EL=15 | Portion=100
Gemüsebrühe (zubereitet) | Vegetable stock | Caldo de verduras ; 5 ; 0.3 ; Tasse=250 | Liter=1000
Hühnerbrühe (zubereitet) | Chicken stock | Caldo de pollo ; 7 ; 0.8 ; Tasse=250 | Liter=1000
Rinderbrühe (zubereitet) | Beef stock | Caldo de carne ; 7 ; 0.8 ; Tasse=250 | Liter=1000
Ketjap Manis | Kecap manis | Kecap manis ; 280 ; 3 ; EL=15
Pfefferkörner | Peppercorns | Granos de pimienta ; 250 ; 10 ; TL=3
Zimt (gemahlen) | Ground cinnamon | Canela molida ; 250 ; 4 ; TL=3
Strudelteig | Strudel pastry | Masa de strudel ; 290 ; 7 ; Packung=250 | Blatt=60
Mandeln gemahlen | Ground almonds | Almendra molida ; 600 ; 24 ; EL=8
Risottoreis (roh) | Risotto rice (uncooked) | Arroz para risotto crudo ; 350 ; 7 ; Portion=80
Marillenmarmelade | Apricot jam | Mermelada de albaricoque ; 250 ; 0.4 ; EL=20 | TL=8
Glühweingewürz | Mulling spices | Especias para vino caliente ; 250 ; 4 ; Beutel=3
Mohn (gemahlen) | Ground poppy seeds | Amapola molida ; 525 ; 18 ; EL=10
Gemahlene Haselnüsse | Ground hazelnuts | Avellana molida ; 650 ; 15 ; EL=8
Tapiokastärke | Tapioca starch | Almidón de tapioca ; 355 ; 0.2 ; EL=10
Maismehl (vorgekocht, für Arepas) | Pre-cooked corn flour (for arepas) | Harina de maíz precocida ; 360 ; 7 ; Portion=75
Chipotle in Adobo | Chipotle in adobo | Chipotle en adobo ; 90 ; 1.5 ; EL=15
Hartweizengrieß | Semolina | Sémola de trigo duro ; 350 ; 12 ; EL=12
Blätterteig | Puff pastry | Hojaldre ; 400 ; 6 ; Rolle=275

@Gewürze & Kräuter | Spices & herbs | Especias y hierbas ; 🌿
Salz | Salt | Sal ; 0 ; 0 ; Prise=0.5 | TL=6
Pfeffer (schwarz) | Black pepper | Pimienta negra ; 255 ; 10 ; Prise=0.3 | TL=2.5
Pfeffer (weiß) | White pepper | Pimienta blanca ; 295 ; 10 ; Prise=0.3 | TL=2.5
Paprikapulver (edelsüß) | Sweet paprika | Pimentón dulce ; 290 ; 14 ; Prise=0.3 | TL=2.5 | EL=7
Paprikapulver (rosenscharf) | Hot paprika | Pimentón picante ; 290 ; 14 ; Prise=0.3 | TL=2.5
Rauchpaprika | Smoked paprika | Pimentón de la Vera ; 290 ; 14 ; TL=2.5
Currypulver | Curry powder | Curry en polvo ; 325 ; 14 ; TL=2 | EL=6
Kurkuma | Turmeric | Cúrcuma ; 310 ; 10 ; TL=3
Kreuzkümmel | Cumin | Comino ; 375 ; 18 ; TL=2
Kümmel | Caraway | Alcaravea ; 333 ; 20 ; TL=2
Koriander (gemahlen) | Ground coriander | Cilantro molido ; 300 ; 12 ; TL=2
Zimt | Cinnamon | Canela ; 250 ; 4 ; Prise=0.3 | TL=2.5
Muskatnuss | Nutmeg | Nuez moscada ; 525 ; 6 ; Prise=0.3 | TL=2
Ingwer (gemahlen) | Ground ginger | Jengibre molido ; 335 ; 9 ; TL=2
Knoblauchpulver | Garlic powder | Ajo en polvo ; 330 ; 17 ; TL=3
Zwiebelpulver | Onion powder | Cebolla en polvo ; 340 ; 10 ; TL=2.5
Chiliflocken | Chilli flakes | Copos de chile ; 315 ; 12 ; Prise=0.3 | TL=1.5
Chilipulver | Chilli powder | Chile en polvo ; 280 ; 13 ; TL=2.5
Cayennepfeffer | Cayenne pepper | Cayena ; 320 ; 12 ; Prise=0.3 | TL=2
Oregano (getrocknet) | Dried oregano | Orégano seco ; 265 ; 9 ; TL=1
Basilikum (getrocknet) | Dried basil | Albahaca seca ; 230 ; 23 ; TL=1
Thymian (getrocknet) | Dried thyme | Tomillo seco ; 275 ; 9 ; TL=1
Rosmarin (getrocknet) | Dried rosemary | Romero seco ; 330 ; 5 ; TL=1.2
Majoran (getrocknet) | Dried marjoram | Mejorana seca ; 270 ; 13 ; TL=1
Kräuter der Provence | Herbes de Provence | Hierbas provenzales ; 260 ; 9 ; TL=1.5
Italienische Kräuter | Italian herbs | Hierbas italianas ; 260 ; 10 ; TL=1.5
Petersilie (getrocknet) | Dried parsley | Perejil seco ; 290 ; 27 ; TL=1
Lorbeerblatt | Bay leaf | Hoja de laurel ; 315 ; 8 ; Blatt=0.2
Gewürznelken | Cloves | Clavo ; 275 ; 6 ; Stück=0.1 | TL=2
Kardamom | Cardamom | Cardamomo ; 310 ; 11 ; TL=2
Sternanis | Star anise | Anís estrellado ; 340 ; 18 ; Stück=0.5
Garam Masala | Garam masala | Garam masala ; 380 ; 14 ; TL=2
Ras el Hanout | Ras el hanout | Ras el hanout ; 330 ; 12 ; TL=2
Za'atar | Za'atar | Za'atar ; 300 ; 10 ; TL=2
Gyros-Gewürz | Gyros seasoning | Especias para gyros ; 280 ; 10 ; TL=3
Hähnchen-Gewürz | Chicken seasoning | Especias para pollo ; 270 ; 9 ; TL=3
Grillgewürz | BBQ rub | Especias para barbacoa ; 250 ; 8 ; TL=3
Pizzagewürz | Pizza seasoning | Especias para pizza ; 260 ; 10 ; TL=1.5
Taco-Gewürz | Taco seasoning | Especias para tacos ; 300 ; 8 ; TL=3 | Tüte=30
Vanilleschote | Vanilla pod | Vaina de vainilla ; 290 ; 3 ; Stück=3
Vanilleextrakt | Vanilla extract | Extracto de vainilla ; 290 ; 0 ; TL=4
Senfkörner | Mustard seeds | Semillas de mostaza ; 510 ; 26 ; TL=3
Fenchelsamen | Fennel seeds | Semillas de hinojo ; 345 ; 16 ; TL=2
Safran | Saffron | Azafrán ; 310 ; 11 ; Prise=0.05
Kräutersalz | Herb salt | Sal de hierbas ; 0 ; 0 ; Prise=0.5 | TL=6
Petersilie (frisch) | Fresh parsley | Perejil fresco ; 36 ; 3 ; EL gehackt=4 | Bund=30
Schnittlauch | Chives | Cebollino ; 30 ; 3.3 ; EL=4 | Bund=25
Dill (frisch) | Fresh dill | Eneldo fresco ; 43 ; 3.5 ; EL=3 | Bund=25
Koriander (frisch) | Fresh coriander | Cilantro fresco ; 23 ; 2.1 ; EL=3 | Bund=25
Basilikum (frisch) | Fresh basil | Albahaca fresca ; 23 ; 3.2 ; Blatt=0.5 | Handvoll=10
Minze (frisch) | Fresh mint | Menta fresca ; 70 ; 3.8 ; Blatt=0.3 | Handvoll=10
Thymian (frisch) | Fresh thyme | Tomillo fresco ; 100 ; 5.6 ; Zweig=0.5
Rosmarin (frisch) | Fresh rosemary | Romero fresco ; 130 ; 3.3 ; Zweig=1
Salbei (frisch) | Fresh sage | Salvia fresca ; 315 ; 10 ; Blatt=0.3
Zitronengras | Lemongrass | Hierba limón ; 100 ; 1.8 ; Stange=20
TK-Kräuter (8-Kräuter) | Frozen mixed herbs | Hierbas congeladas ; 40 ; 3 ; EL=5
Paprikapulver (geräuchert) | Smoked paprika powder | Pimentón ahumado ; 290 ; 14 ; TL=2.5
Hähnchengewürz (Grill) | Chicken grill seasoning | Especias para pollo a la parrilla ; 270 ; 9 ; TL=3
Steakgewürz | Steak seasoning | Especias para carne ; 250 ; 8 ; TL=3
Fischgewürz | Fish seasoning | Especias para pescado ; 250 ; 8 ; TL=3
Kartoffelgewürz | Potato seasoning | Especias para patatas ; 260 ; 8 ; TL=3
Gemüsegewürz | Vegetable seasoning | Especias para verduras ; 250 ; 8 ; TL=3
Knoblauchzehe | Garlic clove | Diente de ajo ; 149 ; 6.4 ; Stück=4
Ingwer (gerieben) | Grated ginger | Jengibre rallado ; 80 ; 1.8 ; TL=4 | EL=10
Chili (getrocknet) | Dried chilli | Guindilla seca ; 320 ; 12 ; Stück=1
Zimt-Zucker | Cinnamon sugar | Azúcar con canela ; 390 ; 0.4 ; TL=4
Muskatnuss (gerieben) | Grated nutmeg | Nuez moscada rallada ; 525 ; 6 ; Prise=0.3
Kräuter (gemischt, frisch) | Mixed fresh herbs | Hierbas frescas variadas ; 40 ; 3 ; EL=4 | Handvoll=10


@Asiatisch | Asian | Asiático ; 🥢
Nori-Blatt | Nori sheet | Hoja de nori ; 330 ; 40 ; Blatt=3
Wakame (getrocknet) | Dried wakame | Wakame seco ; 250 ; 15 ; EL=3
Wakame-Salat | Wakame salad | Ensalada de wakame ; 70 ; 1.5 ; Portion=100
Algensalat (Seetang) | Seaweed salad | Ensalada de algas ; 70 ; 1.5 ; Portion=100
Miso-Paste | Miso paste | Pasta de miso ; 200 ; 12 ; EL=18 | TL=6
Misosuppe | Miso soup | Sopa de miso ; 20 ; 1.5 ; Schale=250
Misosuppe (Instant) | Instant miso soup | Sopa de miso instantánea ; 330 ; 20 ; Beutel=10
Dashi (zubereitet) | Dashi stock | Caldo dashi ; 3 ; 0.4 ; Tasse=250
Mirin | Mirin | Mirin ; 240 ; 0.3 ; EL=15
Reisessig | Rice vinegar | Vinagre de arroz ; 20 ; 0 ; EL=15
Sushi-Essig | Sushi vinegar | Vinagre para sushi ; 120 ; 0 ; EL=15
Sake | Sake | Sake ; 135 ; 0.5 ; Glas (100 ml)=100
Wasabi (Paste) | Wasabi paste | Pasta de wasabi ; 250 ; 3 ; TL=4
Ingwer (eingelegt, Sushi) | Pickled sushi ginger | Jengibre encurtido ; 50 ; 0.2 ; EL=10
Ponzu | Ponzu | Ponzu ; 60 ; 3 ; EL=15
Tonkatsu-Soße | Tonkatsu sauce | Salsa tonkatsu ; 130 ; 1 ; EL=15
Okonomiyaki-Soße | Okonomiyaki sauce | Salsa okonomiyaki ; 130 ; 1.5 ; EL=15
Japanische Mayonnaise (Kewpie) | Japanese mayonnaise (Kewpie) | Mayonesa japonesa (Kewpie) ; 700 ; 2 ; EL=15
Furikake | Furikake | Furikake ; 400 ; 20 ; TL=3
Shichimi Togarashi | Shichimi togarashi | Shichimi togarashi ; 350 ; 12 ; Prise=0.3
Katsuobushi (Bonitoflocken) | Bonito flakes | Copos de bonito ; 350 ; 75 ; EL=2
Udon-Nudeln (vorgekocht) | Udon noodles (pre-cooked) | Fideos udon precocidos ; 125 ; 3 ; Packung=200
Soba-Nudeln (roh) | Soba noodles (uncooked) | Fideos soba crudos ; 340 ; 13 ; Portion=90
Ramen-Nudeln (frisch) | Fresh ramen noodles | Fideos ramen frescos ; 280 ; 9 ; Portion=130
Glasnudeln (roh) | Glass noodles (uncooked) | Fideos de cristal crudos ; 350 ; 0.2 ; Portion=60
Reisbandnudeln (roh) | Flat rice noodles (uncooked) | Tallarines de arroz crudos ; 360 ; 6 ; Portion=80
Eiernudeln asiatisch (gekocht) | Cooked Asian egg noodles | Fideos de huevo cocidos ; 140 ; 5 ; Portion=200
Klebreis (roh) | Glutinous rice (uncooked) | Arroz glutinoso crudo ; 370 ; 7 ; Portion=80
Klebreis (gekocht) | Cooked glutinous rice | Arroz glutinoso cocido ; 100 ; 2 ; Portion=200
Tempura-Mehl | Tempura flour | Harina para tempura ; 350 ; 8 ; EL=10
Gyoza-Teigblätter | Gyoza wrappers | Obleas para gyoza ; 280 ; 9 ; Stück=6
Tofu (fest) | Firm tofu | Tofu firme ; 145 ; 15 ; Packung=400 | Portion=150
Tofu (frittiert) | Fried tofu | Tofu frito ; 270 ; 17 ; Portion=100
Edamame (TK, geschält) | Shelled frozen edamame | Edamame pelado congelado ; 120 ; 12 ; Portion=100
Kimchi | Kimchi | Kimchi ; 25 ; 1.5 ; Portion=80 | Glas=300
Gochugaru (Chiliflocken) | Gochugaru (chilli flakes) | Gochugaru ; 290 ; 12 ; TL=2
Doenjang (Sojabohnenpaste) | Doenjang (soybean paste) | Doenjang ; 190 ; 12 ; EL=18
Koreanische BBQ-Soße | Korean BBQ sauce | Salsa barbacoa coreana ; 200 ; 2 ; EL=20
Tteok (Reiskuchen) | Tteok (rice cakes) | Tteok (pastelitos de arroz) ; 230 ; 4 ; Portion=150
Rote Currypaste | Red curry paste | Pasta de curry rojo ; 140 ; 3 ; TL=8 | EL=15
Grüne Currypaste | Green curry paste | Pasta de curry verde ; 130 ; 3 ; TL=8 | EL=15
Gelbe Currypaste | Yellow curry paste | Pasta de curry amarillo ; 150 ; 3 ; TL=8 | EL=15
Massaman-Currypaste | Massaman curry paste | Pasta de curry massaman ; 200 ; 4 ; EL=15
Tamarindenpaste | Tamarind paste | Pasta de tamarindo ; 240 ; 2.8 ; EL=15
Palmzucker | Palm sugar | Azúcar de palma ; 380 ; 0.4 ; EL=12
Süße Chilisoße | Sweet chilli sauce | Salsa de chile dulce ; 230 ; 0.5 ; EL=15
Thai-Basilikum | Thai basil | Albahaca tailandesa ; 25 ; 3 ; Handvoll=10
Kaffirlimettenblätter | Kaffir lime leaves | Hojas de lima kaffir ; 40 ; 2 ; Blatt=0.3
Galgant | Galangal | Galanga ; 70 ; 1 ; Stück=10
Erdnüsse (geröstet, ungesalzen) | Roasted unsalted peanuts | Cacahuetes tostados sin sal ; 590 ; 25 ; EL=10 | Handvoll=30
Röstzwiebeln | Crispy fried onions | Cebolla frita crujiente ; 600 ; 6 ; EL=5
Krupuk (Krabbenchips) | Prawn crackers | Chips de gambas ; 520 ; 3 ; Handvoll=15 | Tüte=75
Bambussprossen (Dose) | Bamboo shoots (canned) | Brotes de bambú en lata ; 20 ; 2 ; Portion=100
Wasserkastanien (Dose) | Water chestnuts (canned) | Castañas de agua en lata ; 55 ; 1 ; Portion=100
Mu-Err-Pilze (getrocknet) | Dried wood ear mushrooms | Setas oreja de Judas secas ; 280 ; 10 ; Handvoll=10
Lotuswurzel | Lotus root | Raíz de loto ; 75 ; 2.6 ; Portion=100
Daikon-Rettich | Daikon radish | Daikon ; 18 ; 0.6 ; Portion=100
Thai-Aubergine | Thai aubergine | Berenjena tailandesa ; 25 ; 1 ; Portion=100
Chinesischer Brokkoli (Gai Lan) | Chinese broccoli | Brócoli chino ; 22 ; 1.1 ; Portion=150
Wasserspinat | Water spinach | Espinaca de agua ; 19 ; 2.6 ; Portion=150
Schwarze Bohnensoße | Black bean sauce | Salsa de soja negra ; 160 ; 6 ; EL=15
Chiliöl (Lao Gan Ma) | Chilli crisp oil (Lao Gan Ma) | Aceite de chile crujiente (Lao Gan Ma) ; 600 ; 4 ; TL=5 | EL=12
Sichuanpfeffer | Sichuan pepper | Pimienta de Sichuan ; 300 ; 11 ; TL=2
Fünf-Gewürze-Pulver | Five-spice powder | Cinco especias chinas ; 350 ; 10 ; TL=2
Pflaumensoße | Plum sauce | Salsa de ciruela ; 220 ; 0.5 ; EL=15
Lee Kum Kee Austernsoße | Lee Kum Kee oyster sauce | Salsa de ostras Lee Kum Kee ; 110 ; 2 ; EL=15
Kikkoman Teriyaki-Marinade | Kikkoman teriyaki marinade | Marinada teriyaki Kikkoman ; 120 ; 5 ; EL=15
Indomie Mi Goreng | Indomie Mi Goreng | Indomie Mi Goreng ; 470 ; 9 ; Packung=80
Mama Instantnudeln (Huhn) | Mama instant noodles (chicken) | Fideos instantáneos Mama (pollo) ; 460 ; 9 ; Packung=55
Shin Ramyun | Shin Ramyun | Shin Ramyun ; 440 ; 8 ; Packung=120
Buldak Hot Chicken Ramen | Buldak hot chicken ramen | Ramen picante Buldak ; 440 ; 9 ; Packung=140
Nissin Demae Ramen | Nissin Demae Ramen | Nissin Demae Ramen ; 450 ; 9 ; Packung=100
Koka Instantnudeln | Koka instant noodles | Fideos instantáneos Koka ; 450 ; 9 ; Packung=85
Pocky Schoko | Pocky chocolate | Pocky chocolate ; 480 ; 7 ; Packung=47 | Stick=1.2
Pocky Erdbeer | Pocky strawberry | Pocky fresa ; 490 ; 6 ; Packung=45
Yan Yan | Yan Yan | Yan Yan ; 520 ; 6 ; Packung=44
Hello Panda | Hello Panda | Hello Panda ; 500 ; 6 ; Packung=50
Koala's March | Koala's March | Koala's March ; 520 ; 5 ; Packung=37
Mochi (Eis) | Mochi ice cream | Mochi helado ; 200 ; 3 ; Stück=35
Mochi (Daifuku) | Mochi (daifuku) | Mochi (daifuku) ; 240 ; 4 ; Stück=50
Dorayaki | Dorayaki | Dorayaki ; 280 ; 6 ; Stück=80
Matcha-Pulver | Matcha powder | Té matcha en polvo ; 320 ; 30 ; TL=2
Bubble Tea (Milchtee mit Tapioka) | Bubble tea (milk tea with tapioca) | Bubble tea con tapioca ; 80 ; 1 ; Becher=500
Bubble Tea (Fruchttee) | Fruit bubble tea | Bubble tea de frutas ; 60 ; 0 ; Becher=500
Ramune (Limonade) | Ramune soda | Refresco Ramune ; 45 ; 0 ; Flasche=200
Calpis / Calpico | Calpis | Calpis ; 45 ; 0.3 ; Dose=350
Aloe-Drink (OKF) | OKF aloe drink | Bebida de aloe OKF ; 40 ; 0 ; Flasche=500
Kokosnusswasser (Dose) | Canned coconut water | Agua de coco en lata ; 20 ; 0.2 ; Dose=320
Sojamilch (gesüßt, asiatisch) | Sweetened soy milk (Asian) | Leche de soja dulce ; 50 ; 3 ; Packung=250
Grasgelee-Drink | Grass jelly drink | Bebida de gelatina de hierba ; 40 ; 0 ; Dose=300

@Japanisch | Japanese | Japonés ; 🍣
Sushi Maki Lachs (Stück) | Salmon maki (piece) | Maki de salmón (pieza) ; 150 ; 5 ; Stück=25
Sushi Maki Gurke (Stück) | Cucumber maki (piece) | Maki de pepino (pieza) ; 130 ; 3 ; Stück=22
Sushi Maki Thunfisch (Stück) | Tuna maki (piece) | Maki de atún (pieza) ; 145 ; 6 ; Stück=25
Nigiri Lachs (Stück) | Salmon nigiri (piece) | Nigiri de salmón (pieza) ; 170 ; 7 ; Stück=35
Nigiri Thunfisch (Stück) | Tuna nigiri (piece) | Nigiri de atún (pieza) ; 150 ; 8 ; Stück=35
Nigiri Garnele (Stück) | Prawn nigiri (piece) | Nigiri de gamba (pieza) ; 140 ; 6 ; Stück=33
California Roll (Stück) | California roll (piece) | California roll (pieza) ; 170 ; 5 ; Stück=30
Inside-Out-Roll Lachs Avocado (Stück) | Salmon avocado inside-out roll (piece) | Uramaki de salmón y aguacate (pieza) ; 180 ; 6 ; Stück=30
Crunchy Roll (Stück) | Crunchy roll (piece) | Rollo crujiente (pieza) ; 220 ; 5 ; Stück=32
Temaki Lachs | Salmon temaki | Temaki de salmón ; 170 ; 7 ; Stück=110
Sashimi Lachs | Salmon sashimi | Sashimi de salmón ; 205 ; 20 ; Scheibe=15 | Portion=100
Sashimi Thunfisch | Tuna sashimi | Sashimi de atún ; 110 ; 24 ; Scheibe=15 | Portion=100
Onigiri Lachs | Salmon onigiri | Onigiri de salmón ; 180 ; 5 ; Stück=110
Onigiri Thunfisch-Mayo | Tuna mayo onigiri | Onigiri de atún con mayonesa ; 200 ; 5 ; Stück=110
Ramen Tonkotsu | Tonkotsu ramen | Ramen tonkotsu ; 95 ; 5 ; Schale=650
Ramen Shoyu | Shoyu ramen | Ramen shoyu ; 75 ; 4 ; Schale=600
Ramen Miso | Miso ramen | Ramen de miso ; 85 ; 4.5 ; Schale=650
Udon-Suppe | Udon soup | Sopa udon ; 70 ; 3 ; Schale=550
Yaki Udon | Yaki udon | Yaki udon ; 150 ; 6 ; Teller=350
Yakisoba | Yakisoba | Yakisoba ; 160 ; 6 ; Teller=350
Katsu Curry mit Reis | Katsu curry with rice | Curry katsu con arroz ; 170 ; 7 ; Teller=500
Tonkatsu | Tonkatsu (breaded pork) | Tonkatsu ; 280 ; 18 ; Stück=150
Chicken Katsu | Chicken katsu | Pollo katsu ; 250 ; 19 ; Stück=150
Karaage (frittiertes Hähnchen) | Karaage (fried chicken) | Karaage ; 260 ; 18 ; Stück=30 | Portion=150
Teriyaki-Hähnchen mit Reis | Teriyaki chicken with rice | Pollo teriyaki con arroz ; 150 ; 10 ; Teller=400
Gyudon (Rindfleisch-Reisschale) | Gyudon (beef rice bowl) | Gyudon ; 160 ; 7 ; Schale=450
Oyakodon | Oyakodon | Oyakodon ; 150 ; 8 ; Schale=450
Okonomiyaki | Okonomiyaki | Okonomiyaki ; 190 ; 8 ; Stück=300
Takoyaki | Takoyaki | Takoyaki ; 200 ; 7 ; Stück=25 | Portion (6)=150
Tempura Garnelen | Prawn tempura | Tempura de gambas ; 250 ; 12 ; Stück=30
Gemüse-Tempura | Vegetable tempura | Tempura de verduras ; 230 ; 3 ; Portion=150
Edamame (gesalzen, Restaurant) | Salted edamame (restaurant) | Edamame con sal ; 125 ; 11 ; Portion=150
Gyoza (gebraten) | Fried gyoza | Gyoza a la plancha ; 210 ; 8 ; Stück=25 | Portion (6)=150
Agedashi Tofu | Agedashi tofu | Tofu agedashi ; 150 ; 8 ; Portion=200
Chawanmushi | Chawanmushi | Chawanmushi ; 60 ; 5 ; Schale=150
Japanisches Curry (Würfel) | Japanese curry roux | Curry japonés en pastilla ; 510 ; 6 ; Würfel=20
Bento-Box (Hähnchen) | Chicken bento box | Caja bento de pollo ; 150 ; 9 ; Box=400

@Chinesisch | Chinese | Chino ; 🥡
Gebratener Reis mit Ei | Egg fried rice | Arroz frito con huevo ; 170 ; 5 ; Teller=350
Gebratene Nudeln mit Gemüse | Fried noodles with vegetables | Fideos fritos con verduras ; 150 ; 5 ; Teller=350
Gebratene Nudeln mit Hähnchen | Fried noodles with chicken | Fideos fritos con pollo ; 160 ; 8 ; Teller=400
Chop Suey | Chop suey | Chop suey ; 90 ; 7 ; Teller=400
Chow Mein | Chow mein | Chow mein ; 150 ; 7 ; Teller=400
Hähnchen Kung Pao | Kung pao chicken | Pollo kung pao ; 170 ; 13 ; Portion=300
Hähnchen süß-sauer (Restaurant) | Sweet and sour chicken (restaurant) | Pollo agridulce (restaurante) ; 200 ; 10 ; Portion=350
Ente knusprig (Restaurant) | Crispy duck (restaurant) | Pato crujiente (restaurante) ; 300 ; 15 ; Portion=250
Peking-Ente mit Pfannkuchen | Peking duck with pancakes | Pato pekinés con crepes ; 260 ; 14 ; Portion=250
Rindfleisch mit Brokkoli (Restaurant) | Beef with broccoli (restaurant) | Ternera con brócoli (restaurante) ; 130 ; 10 ; Portion=350
Mapo Tofu | Mapo tofu | Mapo tofu ; 130 ; 8 ; Portion=300
Dan Dan Nudeln | Dan dan noodles | Fideos dan dan ; 200 ; 8 ; Schale=400
Wan-Tan-Suppe | Wonton soup | Sopa wonton ; 60 ; 4 ; Schale=400
Sauer-Scharf-Suppe | Hot and sour soup | Sopa agripicante ; 45 ; 3 ; Schale=350
Frühlingsrolle (Restaurant) | Spring roll (restaurant) | Rollito de primavera (restaurante) ; 230 ; 5 ; Stück=60
Dim Sum Har Gow (Garnele) | Har gow (prawn dumpling) | Har gow ; 160 ; 7 ; Stück=25
Dim Sum Siu Mai | Siu mai | Siu mai ; 200 ; 9 ; Stück=25
Char Siu Bao | Char siu bao | Char siu bao ; 250 ; 8 ; Stück=70
Baozi (Gemüse) | Vegetable baozi | Baozi de verduras ; 210 ; 6 ; Stück=80
Jiaozi (gekocht) | Boiled jiaozi | Jiaozi hervidos ; 200 ; 8 ; Stück=22
Char Siu (Schweinebraten) | Char siu (roast pork) | Char siu ; 250 ; 24 ; Portion=100
Glückskeks | Fortune cookie | Galleta de la fortuna ; 380 ; 4 ; Stück=8
Mondkuchen | Mooncake | Pastel de luna ; 420 ; 6 ; Stück=120
Sesambällchen | Sesame balls | Bolitas de sésamo ; 350 ; 5 ; Stück=30

@Koreanisch | Korean | Coreano ; 🇰🇷
Bibimbap (Restaurant) | Bibimbap (restaurant) | Bibimbap (restaurante) ; 140 ; 6 ; Schale=500
Bulgogi | Bulgogi | Bulgogi ; 180 ; 17 ; Portion=200
Korean Fried Chicken | Korean fried chicken | Pollo frito coreano ; 280 ; 17 ; Stück=40 | Portion=250
Japchae | Japchae | Japchae ; 160 ; 4 ; Teller=300
Tteokbokki | Tteokbokki | Tteokbokki ; 170 ; 3 ; Portion=300
Kimbap (Stück) | Kimbap (piece) | Kimbap (pieza) ; 160 ; 4 ; Stück=25
Kimchi-Jjigae | Kimchi stew | Guiso de kimchi ; 60 ; 5 ; Schale=450
Sundubu-Jjigae | Soft tofu stew | Guiso de tofu suave ; 55 ; 5 ; Schale=450
Korean BBQ (Schweinebauch) | Korean BBQ pork belly | Panceta a la barbacoa coreana ; 400 ; 15 ; Portion=150
Kimchi-Bokkeumbap | Kimchi fried rice | Arroz frito con kimchi ; 170 ; 5 ; Teller=350
Hotteok | Hotteok | Hotteok ; 300 ; 5 ; Stück=80

@Thailändisch & Vietnamesisch | Thai & Vietnamese | Tailandés y vietnamita ; 🍜
Pad Thai mit Hähnchen | Chicken pad thai | Pad thai de pollo ; 170 ; 9 ; Teller=400
Pad Thai mit Garnelen | Prawn pad thai | Pad thai de gambas ; 160 ; 8 ; Teller=400
Pad Thai mit Tofu | Tofu pad thai | Pad thai de tofu ; 165 ; 7 ; Teller=400
Grünes Thai-Curry mit Hähnchen | Thai green chicken curry | Curry verde tailandés con pollo ; 130 ; 9 ; Portion=350
Rotes Thai-Curry mit Ente | Thai red curry with duck | Curry rojo tailandés con pato ; 160 ; 9 ; Portion=350
Massaman-Curry | Massaman curry | Curry massaman ; 160 ; 8 ; Portion=350
Panang-Curry | Panang curry | Curry panang ; 160 ; 9 ; Portion=350
Tom Kha Gai | Tom kha gai | Tom kha gai ; 80 ; 5 ; Schale=400
Tom Yum Goong | Tom yum goong | Tom yum goong ; 45 ; 5 ; Schale=400
Pad Kra Pao (Basilikum-Hähnchen) | Pad kra pao (basil chicken) | Pad kra pao ; 160 ; 13 ; Portion=250
Som Tam (Papayasalat) | Som tam (papaya salad) | Som tam ; 55 ; 1.5 ; Portion=200
Larb Gai | Larb gai | Larb gai ; 120 ; 15 ; Portion=200
Satay-Spieße (Hähnchen) | Chicken satay skewers | Brochetas satay de pollo ; 200 ; 20 ; Stück=40
Mango Sticky Rice | Mango sticky rice | Arroz glutinoso con mango ; 200 ; 3 ; Portion=250
Pho Bo (Rind) | Pho bo (beef) | Pho bo ; 60 ; 5 ; Schale=650
Pho Ga (Huhn) | Pho ga (chicken) | Pho ga ; 55 ; 5 ; Schale=650
Bun Bo Nam Bo | Bun bo nam bo | Bun bo nam bo ; 150 ; 8 ; Schale=400
Bun Cha | Bun cha | Bun cha ; 160 ; 9 ; Portion=400
Sommerrolle mit Garnelen | Summer roll with prawns | Rollito vietnamita con gambas ; 120 ; 6 ; Stück=80
Banh Mi mit Hähnchen | Chicken banh mi | Banh mi de pollo ; 220 ; 12 ; Stück=250
Vietnamesischer Eiskaffee | Vietnamese iced coffee | Café helado vietnamita ; 90 ; 1.5 ; Glas=250
Thai-Eistee | Thai iced tea | Té helado tailandés ; 90 ; 1 ; Glas=300

@Indisch & Indonesisch | Indian & Indonesian | Indio e indonesio ; 🍛
Chicken Tikka Masala | Chicken tikka masala | Pollo tikka masala ; 150 ; 12 ; Portion=350
Butter Chicken | Butter chicken | Pollo a la mantequilla ; 170 ; 12 ; Portion=350
Chicken Korma | Chicken korma | Pollo korma ; 170 ; 12 ; Portion=350
Chicken Vindaloo | Chicken vindaloo | Pollo vindaloo ; 140 ; 12 ; Portion=350
Lamm Rogan Josh | Lamb rogan josh | Cordero rogan josh ; 160 ; 13 ; Portion=350
Palak Paneer | Palak paneer | Palak paneer ; 140 ; 7 ; Portion=300
Paneer Tikka | Paneer tikka | Paneer tikka ; 250 ; 14 ; Portion=200
Paneer | Paneer | Paneer ; 320 ; 20 ; Portion=100 | Packung=200
Chana Masala (Restaurant) | Chana masala (restaurant) | Chana masala (restaurante) ; 140 ; 6 ; Portion=300
Dal Makhani | Dal makhani | Dal makhani ; 140 ; 6 ; Portion=300
Aloo Gobi | Aloo gobi | Aloo gobi ; 90 ; 2.5 ; Portion=300
Biryani mit Hähnchen | Chicken biryani | Biryani de pollo ; 170 ; 9 ; Teller=450
Gemüse-Biryani | Vegetable biryani | Biryani de verduras ; 150 ; 4 ; Teller=450
Tandoori-Hähnchen | Tandoori chicken | Pollo tandoori ; 160 ; 25 ; Portion=250
Pakora (Gemüse) | Vegetable pakora | Pakora de verduras ; 290 ; 7 ; Stück=30
Garlic Naan | Garlic naan | Naan de ajo ; 310 ; 9 ; Stück=90
Cheese Naan | Cheese naan | Naan de queso ; 330 ; 12 ; Stück=120
Chapati | Chapati | Chapati ; 300 ; 9 ; Stück=40
Papadam | Papadum | Papadum ; 370 ; 20 ; Stück=12
Basmatireis mit Safran (Pilau) | Pilau rice | Arroz pilau ; 160 ; 3 ; Portion=200
Raita | Raita | Raita ; 60 ; 3 ; EL=20 | Schale=100
Mango-Lassi | Mango lassi | Lassi de mango ; 90 ; 3 ; Glas=300
Gulab Jamun | Gulab jamun | Gulab jamun ; 320 ; 4 ; Stück=40
Rendang (Rind) | Beef rendang | Rendang de ternera ; 190 ; 17 ; Portion=250
Gado-Gado | Gado-gado | Gado-gado ; 140 ; 6 ; Teller=350
Mie Goreng | Mie goreng | Mie goreng ; 170 ; 6 ; Teller=400
Ayam Goreng | Ayam goreng | Ayam goreng ; 250 ; 22 ; Stück=150
Nasi Lemak | Nasi lemak | Nasi lemak ; 180 ; 6 ; Teller=400
Laksa | Laksa | Laksa ; 110 ; 5 ; Schale=550
Adobo (Huhn, philippinisch) | Chicken adobo (Filipino) | Adobo de pollo filipino ; 180 ; 16 ; Portion=250

@International | International | Internacional ; 🌍
Tacos al Pastor | Tacos al pastor | Tacos al pastor ; 210 ; 11 ; Stück=100
Tacos mit Rindfleisch | Beef tacos | Tacos de ternera ; 220 ; 12 ; Stück=100
Chili-Cheese-Fries | Chilli cheese fries | Patatas con chili y queso ; 260 ; 8 ; Portion=300
Guacamole mit Tortillachips | Guacamole with tortilla chips | Guacamole con nachos ; 330 ; 5 ; Portion=150
Empanada (Rind) | Beef empanada | Empanada de carne ; 280 ; 10 ; Stück=120
Arepa mit Käse | Arepa with cheese | Arepa con queso ; 260 ; 9 ; Stück=150
Ceviche | Ceviche | Ceviche ; 90 ; 14 ; Portion=200
Feijoada | Feijoada | Feijoada ; 160 ; 10 ; Teller=400
Pão de Queijo | Pão de queijo | Pan de queso ; 330 ; 6 ; Stück=25
Falafel-Wrap | Falafel wrap | Wrap de falafel ; 220 ; 7 ; Stück=300
Shawarma (Hähnchen, Wrap) | Chicken shawarma wrap | Shawarma de pollo ; 220 ; 12 ; Stück=300
Hummus mit Fladenbrot | Hummus with flatbread | Hummus con pan de pita ; 260 ; 8 ; Portion=200
Baba Ganoush mit Brot | Baba ganoush with bread | Baba ganoush con pan ; 210 ; 5 ; Portion=200
Tabouleh | Tabbouleh | Tabulé ; 120 ; 3 ; Portion=200
Fattoush | Fattoush | Fattoush ; 100 ; 2 ; Portion=200
Couscous mit Lamm | Couscous with lamb | Cuscús con cordero ; 170 ; 10 ; Teller=450
Tajine (Huhn) | Chicken tagine | Tajín de pollo ; 130 ; 12 ; Portion=400
Shakshuka (Restaurant) | Shakshuka (restaurant) | Shakshuka (restaurante) ; 110 ; 7 ; Portion=350
İskender Kebap | İskender kebab | İskender kebab ; 180 ; 11 ; Teller=450
Köfte mit Reis | Köfte with rice | Köfte con arroz ; 180 ; 10 ; Teller=400
Linsensuppe (türkisch) | Turkish lentil soup | Sopa de lentejas turca ; 60 ; 3.5 ; Schale=350
Baklava | Baklava | Baklava ; 430 ; 6 ; Stück=30
Halva | Halva | Halva ; 520 ; 12 ; Stück=30
Börek mit Hackfleisch | Börek with minced meat | Börek de carne ; 300 ; 11 ; Stück=150
Souvlaki-Spieß | Souvlaki skewer | Brocheta souvlaki ; 200 ; 22 ; Stück=100
Moussaka (Restaurant) | Moussaka (restaurant) | Musaca (restaurante) ; 150 ; 7 ; Portion=400
Spanakopita | Spanakopita | Spanakopita ; 280 ; 9 ; Stück=150
Pierogi | Pierogi | Pierogi ; 200 ; 6 ; Stück=40
Borschtsch | Borscht | Borsch ; 50 ; 2 ; Schale=400
Pelmeni | Pelmeni | Pelmeni ; 250 ; 11 ; Portion=250
Gulasch (ungarisch) | Hungarian goulash | Gulash húngaro ; 110 ; 9 ; Schale=400
Fish and Chips | Fish and chips | Fish and chips ; 220 ; 10 ; Portion=450
Full English Breakfast | Full English breakfast | Desayuno inglés completo ; 180 ; 9 ; Teller=450
Pancakes mit Bacon & Ahornsirup | Pancakes with bacon & maple syrup | Tortitas con bacon y sirope ; 270 ; 8 ; Portion=250
Bagel mit Frischkäse & Lachs | Bagel with cream cheese & salmon | Bagel con queso crema y salmón ; 250 ; 12 ; Stück=170
Club Sandwich | Club sandwich | Sándwich club ; 220 ; 12 ; Stück=300
Caesar Salad mit Hähnchen | Chicken Caesar salad | Ensalada César con pollo ; 140 ; 12 ; Portion=300
Cobb Salad | Cobb salad | Ensalada Cobb ; 150 ; 11 ; Portion=350
Poutine | Poutine | Poutine ; 230 ; 6 ; Portion=400
Jambalaya | Jambalaya | Jambalaya ; 150 ; 9 ; Teller=400
Pulled Pork mit Coleslaw | Pulled pork with coleslaw | Cerdo desmechado con ensalada de col ; 180 ; 13 ; Portion=350
Bratwurst mit Sauerkraut | Bratwurst with sauerkraut | Salchicha con chucrut ; 180 ; 9 ; Teller=350
Raclette (Portion mit Kartoffeln) | Raclette (portion with potatoes) | Raclette con patatas ; 220 ; 10 ; Portion=400
Fondue (Fleisch, Portion) | Meat fondue (portion) | Fondue de carne ; 250 ; 20 ; Portion=300
Paella (Restaurant) | Paella (restaurant) | Paella (restaurante) ; 160 ; 9 ; Teller=450
Pizza Margherita (Restaurant) | Pizza margherita (restaurant) | Pizza margarita (restaurante) ; 240 ; 10 ; ganze Pizza=450
Pizza Diavolo | Pizza diavola | Pizza diavola ; 260 ; 11 ; ganze Pizza=480
Lasagne (Restaurant) | Lasagne (restaurant) | Lasaña (restaurante) ; 160 ; 9 ; Portion=400
Spaghetti alle Vongole | Spaghetti alle vongole | Espaguetis con almejas ; 150 ; 8 ; Teller=400
Risotto Milanese | Risotto milanese | Risotto a la milanesa ; 160 ; 4 ; Teller=350
Crème brûlée | Crème brûlée | Crema catalana ; 300 ; 5 ; Stück=120
Croque Monsieur | Croque monsieur | Croque monsieur ; 270 ; 14 ; Stück=200
Quiche mit Gemüse | Vegetable quiche | Quiche de verduras ; 240 ; 8 ; Stück=150

@Weihnachtsmarkt | Christmas market | Mercado navideño ; 🎄
Glühwein (Becher) | Mulled wine (mug) | Vino caliente (taza) ; 100 ; 0 ; Becher=200
Glühwein weiß | White mulled wine | Vino caliente blanco ; 100 ; 0 ; Becher=200
Glühwein mit Schuss | Mulled wine with a shot | Vino caliente con chupito ; 130 ; 0 ; Becher=220
Heidelbeer-Glühwein | Blueberry mulled wine | Vino caliente de arándanos ; 105 ; 0 ; Becher=200
Kinderpunsch (Becher) | Children's punch (mug) | Ponche sin alcohol (taza) ; 50 ; 0 ; Becher=200
Feuerzangenbowle | Feuerzangenbowle | Feuerzangenbowle ; 150 ; 0 ; Becher=200
Eierpunsch | Egg punch | Ponche de huevo ; 180 ; 3 ; Becher=200
Heiße Schokolade mit Sahne | Hot chocolate with cream | Chocolate caliente con nata ; 110 ; 3 ; Becher=250
Jagertee | Jagertee | Jagertee ; 130 ; 0 ; Becher=200
Apfelpunsch | Apple punch | Ponche de manzana ; 55 ; 0 ; Becher=200
Handbrot mit Schinken & Käse | Handbrot with ham & cheese | Handbrot de jamón y queso ; 290 ; 12 ; Stück=300
Handbrot mit Champignons | Handbrot with mushrooms | Handbrot de champiñones ; 260 ; 9 ; Stück=300
Schupfnudeln mit Sauerkraut & Speck | Potato noodles with sauerkraut & bacon | Schupfnudeln con chucrut y bacon ; 170 ; 5 ; Portion=350
Thüringer Rostbratwurst im Brötchen | Thuringian sausage in a bun | Salchicha de Turingia en panecillo ; 275 ; 11 ; Stück=190
Rote Wurst im Brötchen | Red sausage in a bun | Salchicha roja en panecillo ; 280 ; 11 ; Stück=180
Krakauer im Brötchen | Krakauer in a bun | Krakauer en panecillo ; 270 ; 11 ; Stück=200
Currywurst mit Pommes (Stand) | Currywurst with chips (stall) | Currywurst con patatas (puesto) ; 230 ; 7 ; Portion=400
Currywurst ohne Pommes | Currywurst without chips | Currywurst sin patatas ; 220 ; 9 ; Portion=200
Bockwurst | Bockwurst | Bockwurst ; 270 ; 12 ; Stück=100
Steak im Brötchen | Steak in a bun | Filete en panecillo ; 250 ; 15 ; Stück=220
Schaschlik-Spieß | Shashlik skewer | Brocheta shashlik ; 220 ; 16 ; Stück=180
Champignons in Knoblauchsoße | Mushrooms in garlic sauce | Champiñones en salsa de ajo ; 110 ; 3 ; Schale=250
Kartoffelpuffer mit Apfelmus (Stand) | Potato pancakes with apple sauce (stall) | Tortitas de patata con compota (puesto) ; 200 ; 3 ; Portion=300
Reibekuchen (3 Stück) | Potato fritters (3) | Tortitas de patata (3) ; 230 ; 3 ; Portion=240
Langos mit Knoblauch (Stand) | Lángos with garlic (stall) | Lángos con ajo (puesto) ; 330 ; 7 ; Stück=250
Langos mit Käse & Schmand | Lángos with cheese & sour cream | Lángos con queso y nata agria ; 340 ; 10 ; Stück=300
Flammkuchen klassisch (Stand) | Classic tarte flambée (stall) | Tarte flambée clásica (puesto) ; 260 ; 9 ; Stück=350
Raclettebrot | Raclette bread | Pan con raclette ; 300 ; 13 ; Stück=220
Crêpe mit Zimt & Zucker | Crêpe with cinnamon & sugar | Crepe con canela y azúcar ; 270 ; 6 ; Stück=150
Poffertjes (10 Stück) | Poffertjes (10) | Poffertjes (10) ; 300 ; 6 ; Portion=150
Mutzen (Portion) | Mutzen (fried dough) | Mutzen (buñuelos) ; 420 ; 6 ; Portion=150
Schmalzkuchen (Tüte) | Schmalzkuchen (bag) | Schmalzkuchen (bolsa) ; 410 ; 6 ; Tüte=150
Gebrannte Mandeln (Tüte) | Candied almonds (bag) | Almendras garrapiñadas (bolsa) ; 520 ; 15 ; Tüte=100 | Handvoll=30
Gebrannte Cashews (Tüte) | Candied cashews | Anacardos garrapiñados ; 510 ; 13 ; Tüte=100
Schokofrüchte am Spieß | Chocolate-dipped fruit skewer | Brocheta de fruta con chocolate ; 220 ; 2 ; Stück=150
Schoko-Banane | Chocolate banana | Plátano con chocolate ; 200 ; 2.5 ; Stück=150
Paradiesapfel / Liebesapfel | Candy apple | Manzana de caramelo ; 160 ; 0.3 ; Stück=250
Maroni (Tüte, geröstet) | Roasted chestnuts (bag) | Castañas asadas (bolsa) ; 190 ; 3 ; Tüte=150
Bratapfel mit Vanillesoße | Baked apple with custard | Manzana asada con natillas ; 150 ; 2 ; Stück=300
Germknödel mit Mohn | Yeast dumpling with poppy seeds | Germknödel con amapola ; 290 ; 7 ; Stück=250
Baumstriezel / Kürtőskalács | Chimney cake | Kürtőskalács ; 380 ; 7 ; Stück=200
Lebkuchenherz (klein) | Gingerbread heart (small) | Corazón de pan de jengibre (pequeño) ; 390 ; 5 ; Stück=100
Brezel (Weihnachtsmarkt, groß) | Large pretzel | Pretzel grande ; 280 ; 8 ; Stück=150
Fischbrötchen mit Bismarckhering | Bismarck herring roll | Bocadillo de arenque Bismarck ; 230 ; 11 ; Stück=150
Käsespätzle (Stand) | Cheese spätzle (stall) | Käsespätzle (puesto) ; 240 ; 10 ; Portion=350`;
