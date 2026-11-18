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
`;
