// Nuvio – Rezepte-Bibliothek. Diese Datei kannst du direkt bearbeiten (Anleitung steht direkt darunter).
window.NUVIO_REZEPTE = String.raw`
# ============================================================================
#  Nuvio – Rezept-Bibliothek
# ============================================================================
#  Jedes Rezept beginnt mit "## Name". Darunter folgen Felder "feld: wert".
#
#    en / es     Name auf Englisch / Spanisch (optional)
#    emoji       ein Emoji
#    bild        weglassen = Bild wird automatisch aus den Zutaten zusammengestellt
#                (Mengen bestimmen die Größe der Fächer). Ein Foto namens
#                fotos/<rezeptname>.jpg wird automatisch genommen (Liste: fotos/DATEINAMEN.txt).
#                Oder fest:  Illustration: paella, tortilla, soup_red, soup_orange, soup_clear,
#                fondue, curry, shakshuka, lachs, schmarrn, oats, pancakes, muffins,
#                loaf, pisto, pasta, auflauf, stew, ricebowl, wrap, salat, bolo,
#                chili, koettbullar, honighuhn, gemuesesahne, brokkoli, linsen, herzen
#                … oder ein eigenes Foto im Ordner "fotos", z. B.  bild: fotos/paella.jpg
#    typ         gericht = komplettes Gericht
#                sauce   = Sauce/Topping, wird mit einer Beilage gegessen
#    beilage     nur bei typ sauce: nudeln, reis, kartoffeln oder quinoa
#    einheit     box (Standard) oder stück (z. B. Muffins, Pancakes)
#    portionen   wie viele Boxen/Stück das Rezept ergibt
#    tags        Stichwörter für die Suche, mit Komma getrennt
#    vegan       eigene vegane Alternativen, z. B.  vegan: Kochsahne > Hafer-Kochcreme (vegan); Käse gerieben > Veganer Reibekäse
#                (ohne Angabe tauscht die App selbst: Hähnchen → Tofu, Sahne → Hafer-Kochcreme usw.)
#
#    zutaten:    darunter eine Zutat pro Zeile:   - Name: 300 g
#                Menge pro Portion (z. B. Nudeln): - Nudeln (trocken): 120 g pro Portion
#                Die Namen müssen zur Lebensmittel-Bibliothek passen, sonst fehlen die kcal.
#    zubereitung: darunter die Schritte, je Zeile beginnend mit "1.", "2." …
#
#  Zeilen mit "#" sind Kommentare. Kein Gravis-Zeichen (Backtick) verwenden.
# ============================================================================

## Käsespätzle
en: Cheese spaetzle
es: Spätzle con queso
emoji: 🧀
bild: gemuesesahne
typ: gericht
portionen: 4
tags: vegetarisch, deutsch, käse, klassiker
zutaten:
- Spätzle (frisch): 800 g
- Bergkäse: 200 g
- Emmentaler: 100 g
- Zwiebeln: 300 g
- Butter: 30 g
zubereitung:
1. Zwiebeln in Ringe schneiden und in der Butter langsam goldbraun braten.
2. Käse reiben. Spätzle nach Packung erhitzen.
3. Spätzle und Käse abwechselnd in eine Auflaufform schichten, kurz bei 180 °C überbacken.
4. Mit den Röstzwiebeln servieren.

## Käsefondue
en: Cheese fondue
es: Fondue de queso
emoji: 🫕
bild: fondue
typ: gericht
portionen: 4
tags: vegetarisch, käse, schweiz, winter
zutaten:
- Bergkäse: 300 g
- Emmentaler: 300 g
- Weißwein: 250 g
- Speisestärke: 15 g
- Knoblauch: 5 g
- Baguette: 400 g
zubereitung:
1. Topf mit halbierter Knoblauchzehe ausreiben, Käse reiben.
2. Wein erhitzen, Käse nach und nach unter Rühren schmelzen.
3. Stärke mit etwas Wein anrühren und einrühren, bis es cremig ist.
4. Baguette in Würfel schneiden und eintunken.

## Paella
en: Paella
es: Paella
emoji: 🥘
bild: paella
typ: gericht
portionen: 4
tags: spanisch, reis, hähnchen, meeresfrüchte
zutaten:
- Reis (trocken): 300 g
- Hähnchenbrust: 400 g
- Garnelen: 200 g
- Paprika: 200 g
- Erbsen (TK): 150 g
- Öl: 30 g
- Suppengewürz / Brühe: 10 g
- Wasser: 900 g
zubereitung:
1. Hähnchen würfeln und im Öl in einer großen Pfanne anbraten, Paprika dazu.
2. Reis kurz mitrösten, mit heißer Brühe ablöschen, mit Paprikapulver und etwas Safran würzen.
3. Etwa 18 Minuten ohne Rühren köcheln lassen.
4. Garnelen und Erbsen in den letzten 5 Minuten obenauf legen. Mit Zitrone servieren.

## Tortilla de patatas
en: Spanish omelette
es: Tortilla de patatas
emoji: 🍳
bild: tortilla
typ: gericht
portionen: 4
tags: spanisch, vegetarisch, eier, kartoffeln
zutaten:
- Kartoffeln: 600 g
- Eier: 360 g
- Zwiebeln: 150 g
- Öl: 50 g
zubereitung:
1. Kartoffeln und Zwiebeln dünn schneiden und im Öl bei mittlerer Hitze weich garen.
2. Eier verquirlen, salzen, Kartoffeln untermischen und 10 Minuten ziehen lassen.
3. In der Pfanne bei kleiner Hitze stocken lassen, mit einem Teller wenden, fertig braten.
## Gazpacho
en: Gazpacho
es: Gazpacho
emoji: 🍅
bild: soup_red
typ: gericht
portionen: 4
tags: spanisch, vegan, suppe, kalt, sommer
zutaten:
- Tomaten: 1000 g
- Gurke: 300 g
- Paprika: 150 g
- Zwiebeln: 50 g
- Knoblauch: 5 g
- Öl: 40 g
- Weißbrot: 50 g
zubereitung:
1. Gemüse grob schneiden, Brot kurz einweichen.
2. Alles mit Öl, Salz und einem Schuss Essig fein pürieren.
3. Mindestens 2 Stunden kalt stellen.

## Lentejas (Linseneintopf)
en: Spanish lentil stew
es: Lentejas
emoji: 🍲
bild: stew
typ: gericht
portionen: 4
tags: spanisch, eintopf, linsen, mealprep
zutaten:
- Linsen (trocken): 300 g
- Chorizo: 150 g
- Kartoffeln: 300 g
- Karotten: 150 g
- Zwiebeln: 100 g
- Paprika: 100 g
- Öl: 20 g
- Wasser: 1200 g
zubereitung:
1. Zwiebeln, Paprika und Chorizo im Öl anbraten.
2. Linsen, gewürfelte Kartoffeln, Karotten und Wasser dazugeben.
3. 35–40 Minuten köcheln, mit Paprikapulver, Lorbeer und Salz abschmecken.
## Albóndigas (Hackbällchen in Soße)
en: Albóndigas (meatballs in sauce)
es: Albóndigas en salsa
emoji: 🧆
bild: koettbullar
typ: sauce
beilage: reis
portionen: 4
tags: spanisch, hackfleisch, mealprep
zutaten:
- Hackfleisch gemischt: 500 g
- Eier: 60 g
- Paniermehl: 40 g
- Zwiebeln: 100 g
- Gehackte Tomaten (Dose): 400 g
- Öl: 20 g
zubereitung:
1. Hack mit Ei, Paniermehl, Salz und Pfeffer verkneten, kleine Bällchen formen.
2. Im Öl rundum anbraten und herausnehmen.
3. Zwiebeln anschwitzen, Tomaten dazu, 10 Minuten köcheln.
4. Bällchen in der Soße 15 Minuten garziehen lassen.

## Pisto
en: Pisto (Spanish ratatouille)
es: Pisto
emoji: 🍆
bild: pisto
typ: sauce
beilage: reis
portionen: 4
tags: spanisch, vegan, gemüse
zutaten:
- Zucchini: 400 g
- Aubergine: 300 g
- Paprika: 300 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Öl: 40 g
zubereitung:
1. Gemüse in kleine Würfel schneiden.
2. Zwiebeln und Paprika im Öl anbraten, dann Aubergine und Zucchini.
3. Tomaten dazu und 20 Minuten sanft schmoren.

## Chili sin Carne
en: Chili sin carne
es: Chili sin carne
emoji: 🌶️
bild: chili
typ: sauce
beilage: reis
portionen: 4
tags: vegan, bohnen, scharf, mealprep
zutaten:
- Kidneybohnen (abgetropft): 500 g
- Mais (abgetropft): 280 g
- Gehackte Tomaten (Dose): 800 g
- Paprika: 300 g
- Zwiebeln: 100 g
- Öl: 15 g
zubereitung:
1. Zwiebeln und Paprika im Öl anbraten.
2. Tomaten, Bohnen und Mais dazugeben.
3. Mit Kreuzkümmel, Chili, Paprikapulver und etwas Kakao würzen, 25 Minuten köcheln.

## Chili con Carne
en: Chili con carne
es: Chili con carne
emoji: 🌶️
bild: chili
typ: sauce
beilage: reis
portionen: 6
tags: hackfleisch, bohnen, scharf, mealprep
zutaten:
- Rinderhack: 500 g
- Kidneybohnen (abgetropft): 500 g
- Mais (abgetropft): 280 g
- Gehackte Tomaten (Dose): 800 g
- Paprika: 200 g
- Zwiebeln: 150 g
- Tomatenmark: 40 g
zubereitung:
1. Hack krümelig anbraten, Zwiebeln und Paprika dazu.
2. Tomatenmark kurz mitrösten, Tomaten, Bohnen und Mais dazugeben.
3. Mit Kreuzkümmel, Chili und Salz würzen und 30 Minuten köcheln.

## Hähnchen-Curry
en: Chicken curry
es: Curry de pollo
emoji: 🍛
bild: curry
typ: sauce
beilage: reis
portionen: 4
tags: hähnchen, curry, asiatisch, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Kokosmilch: 400 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Currypaste: 30 g
- Öl: 15 g
zubereitung:
1. Hähnchen würfeln und im Öl anbraten, herausnehmen.
2. Zwiebeln und Paprika anbraten, Currypaste kurz mitrösten.
3. Kokosmilch angießen, Hähnchen zurück in die Pfanne, 10 Minuten köcheln.

## Gemüse-Kichererbsen-Curry
en: Vegetable chickpea curry
es: Curry de garbanzos y verduras
emoji: 🍛
bild: curry
typ: sauce
beilage: reis
portionen: 4
tags: vegan, curry, kichererbsen
zutaten:
- Kichererbsen (abgetropft): 400 g
- Kokosmilch: 400 g
- Spinat: 200 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Currypaste: 30 g
zubereitung:
1. Zwiebeln und Paprika anbraten, Currypaste dazu.
2. Kokosmilch und Kichererbsen dazugeben, 15 Minuten köcheln.
3. Spinat unterheben, bis er zusammenfällt.

## Rote-Linsen-Curry (Dal)
en: Red lentil curry (dal)
es: Curry de lentejas rojas (dal)
emoji: 🍛
bild: curry
typ: sauce
beilage: reis
portionen: 4
tags: vegan, linsen, curry, günstig
zutaten:
- Rote Linsen (trocken): 250 g
- Kokosmilch: 400 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 100 g
- Currypaste: 20 g
zubereitung:
1. Zwiebeln anschwitzen, Currypaste kurz mitrösten.
2. Linsen, Tomaten, Kokosmilch und 300 ml Wasser dazu.
3. 20 Minuten köcheln, bis die Linsen zerfallen. Mit Zitrone abschmecken.

## Gulasch
en: Goulash
es: Gulash
emoji: 🥩
bild: stew
typ: sauce
beilage: kartoffeln
portionen: 6
tags: rind, eintopf, deutsch, mealprep
zutaten:
- Gulaschfleisch (Rind): 1000 g
- Zwiebeln: 500 g
- Paprika: 200 g
- Tomatenmark: 40 g
- Öl: 20 g
zubereitung:
1. Fleisch portionsweise scharf anbraten.
2. Zwiebeln dazu und weich schmoren, Tomatenmark und Paprikapulver mitrösten.
3. Mit Wasser bedecken und 1,5–2 Stunden schmoren, Paprika in der letzten halben Stunde dazu.

## Lasagne
en: Lasagne
es: Lasaña
emoji: 🍝
bild: auflauf
typ: gericht
portionen: 6
tags: italienisch, hackfleisch, ofen, auflauf
zutaten:
- Lasagneplatten: 250 g
- Rinderhack: 500 g
- Passierte Tomaten: 700 g
- Milch (1,5 %): 500 g
- Butter: 40 g
- Mehl: 40 g
- Käse gerieben: 150 g
zubereitung:
1. Hack anbraten, passierte Tomaten dazu, 20 Minuten köcheln.
2. Butter schmelzen, Mehl einrühren, Milch nach und nach dazu – Béchamel mit Muskat würzen.
3. Abwechselnd Platten, Hacksoße und Béchamel schichten, mit Käse abschließen.
4. Bei 180 °C etwa 40 Minuten backen.

## Spaghetti Carbonara
en: Spaghetti carbonara
es: Espaguetis carbonara
emoji: 🍝
bild: pasta
typ: gericht
portionen: 4
tags: italienisch, nudeln, schnell
zutaten:
- Nudeln (trocken): 120 g pro Portion
- Bacon: 200 g
- Eier: 240 g
- Käse gerieben: 80 g
zubereitung:
1. Nudeln kochen, Bacon knusprig braten.
2. Eier mit Käse und Pfeffer verquirlen.
3. Nudeln abgießen (etwas Kochwasser aufheben), vom Herd nehmen, Eiermasse und Bacon unterrühren, bis es cremig ist.

## Shakshuka
en: Shakshuka
es: Shakshuka
emoji: 🍳
bild: shakshuka
typ: gericht
portionen: 3
tags: vegetarisch, eier, orientalisch, schnell
zutaten:
- Eier: 360 g
- Gehackte Tomaten (Dose): 800 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Feta: 100 g
- Öl: 20 g
zubereitung:
1. Zwiebeln und Paprika anbraten, Tomaten dazu, mit Kreuzkümmel und Paprika würzen.
2. 10 Minuten köcheln, dann Mulden formen und die Eier hineinschlagen.
3. Zugedeckt stocken lassen, Feta darüberbröseln.

## Burrito-Bowl
en: Burrito bowl
es: Bowl de burrito
emoji: 🌯
bild: ricebowl
typ: gericht
portionen: 4
tags: mexikanisch, hähnchen, reis, bowl, mealprep
zutaten:
- Reis (trocken): 300 g
- Hähnchenbrust: 500 g
- Kidneybohnen (abgetropft): 250 g
- Mais (abgetropft): 140 g
- Paprika: 200 g
- Saure Sahne (10 %): 150 g
zubereitung:
1. Reis kochen. Hähnchen mit Paprikapulver und Kreuzkümmel würzen und braten.
2. Paprika in Streifen braten, Bohnen und Mais erwärmen.
3. Alles in Boxen verteilen, saure Sahne extra dazu.

## Lachs mit Ofengemüse
en: Salmon with roasted vegetables
es: Salmón con verduras al horno
emoji: 🐟
bild: lachs
typ: gericht
portionen: 4
tags: fisch, ofen, gesund
zutaten:
- Lachs (frisch): 500 g
- Kartoffeln: 800 g
- Brokkoli: 400 g
- Paprika: 200 g
- Öl: 30 g
zubereitung:
1. Kartoffeln in Spalten schneiden, mit Öl und Salz bei 200 °C 20 Minuten backen.
2. Brokkoli und Paprika dazugeben, Lachs obenauf legen.
3. Weitere 15 Minuten backen. Mit Zitrone servieren.

## Hühnersuppe
en: Chicken soup
es: Sopa de pollo
emoji: 🍜
bild: soup_clear
typ: gericht
portionen: 4
tags: suppe, hähnchen, nudeln
zutaten:
- Hähnchenbrust: 400 g
- Karotten: 200 g
- Suppengemüse: 300 g
- Nudeln (trocken): 150 g
- Suppengewürz / Brühe: 20 g
- Wasser: 1500 g
zubereitung:
1. Hähnchen und Gemüse mit Wasser und Brühe 30 Minuten köcheln.
2. Hähnchen herausnehmen, zerzupfen und zurückgeben.
3. Nudeln in der Suppe garen.

## Kürbissuppe
en: Pumpkin soup
es: Crema de calabaza
emoji: 🎃
bild: soup_orange
typ: gericht
portionen: 4
tags: vegan, suppe, herbst
zutaten:
- Kürbis: 1000 g
- Kartoffeln: 200 g
- Zwiebeln: 100 g
- Kokosmilch: 200 g
- Suppengewürz / Brühe: 15 g
- Wasser: 600 g
zubereitung:
1. Kürbis, Kartoffeln und Zwiebeln würfeln und anschwitzen.
2. Mit Brühe aufgießen und 20 Minuten köcheln.
3. Kokosmilch dazu, fein pürieren, mit Ingwer und Salz abschmecken.

## Nudelsalat
en: Pasta salad
es: Ensalada de pasta
emoji: 🥗
bild: salat
typ: gericht
portionen: 6
tags: salat, nudeln, party, kalt
zutaten:
- Nudeln (trocken): 400 g
- Mais (abgetropft): 140 g
- Erbsen (TK): 150 g
- Kochschinken: 150 g
- Joghurt natur: 200 g
- Mayonnaise: 80 g
zubereitung:
1. Nudeln kochen und abkühlen lassen, Erbsen kurz mitkochen.
2. Schinken würfeln, Joghurt und Mayo verrühren und würzen.
3. Alles mischen und mindestens 1 Stunde ziehen lassen.

## Kaiserschmarrn
en: Kaiserschmarrn
es: Kaiserschmarrn
emoji: 🥞
bild: schmarrn
typ: gericht
portionen: 3
tags: süß, österreichisch, vegetarisch
zutaten:
- Mehl: 200 g
- Milch (1,5 %): 400 g
- Eier: 240 g
- Zucker: 30 g
- Butter: 30 g
zubereitung:
1. Eier trennen, Eiweiß steif schlagen.
2. Mehl, Milch, Eigelb und Zucker verrühren, Eischnee unterheben.
3. In Butter dick ausbacken, wenden, mit zwei Gabeln zerreißen und karamellisieren. Mit Puderzucker und Apfelmus.

## Overnight Oats
en: Overnight oats
es: Avena nocturna
emoji: 🥣
bild: oats
typ: gericht
portionen: 4
tags: frühstück, vegetarisch, schnell, mealprep
zutaten:
- Haferflocken: 50 g pro Portion
- Milch (1,5 %): 150 g pro Portion
- Joghurt natur: 50 g pro Portion
- Beeren (TK): 80 g pro Portion
- Honig: 10 g pro Portion
zubereitung:
1. Haferflocken, Milch und Joghurt in Gläser füllen und verrühren.
2. Beeren und Honig obendrauf.
3. Über Nacht in den Kühlschrank stellen.

## Protein-Pancakes
en: Protein pancakes
es: Tortitas proteicas
emoji: 🥞
bild: pancakes
typ: gericht
einheit: stück
portionen: 8
tags: frühstück, protein, süß
zutaten:
- Haferflocken: 100 g
- Eier: 120 g
- Magerquark: 250 g
- Bananen: 120 g
- Backpulver: 5 g
zubereitung:
1. Alles im Mixer zu einem glatten Teig pürieren.
2. In einer beschichteten Pfanne kleine Pancakes von beiden Seiten backen.
## Schoko-Muffins
en: Chocolate muffins
es: Magdalenas de chocolate
emoji: 🧁
bild: muffins
typ: gericht
einheit: stück
portionen: 12
tags: backen, süß, kuchen
zutaten:
- Mehl: 250 g
- Zucker: 120 g
- Butter: 120 g
- Eier: 120 g
- Milch (1,5 %): 150 g
- Backpulver: 10 g
- Schokolade (Zartbitter): 100 g
zubereitung:
1. Butter schmelzen, mit Zucker, Eiern und Milch verrühren.
2. Mehl und Backpulver unterheben, gehackte Schokolade dazu.
3. In 12 Förmchen füllen und bei 180 °C 20–25 Minuten backen.

## Bananenbrot
en: Banana bread
es: Pan de plátano
emoji: 🍌
bild: loaf
typ: gericht
einheit: stück
portionen: 12
tags: backen, süß, frühstück
zutaten:
- Bananen: 360 g
- Mehl: 200 g
- Zucker: 80 g
- Eier: 120 g
- Butter: 80 g
- Backpulver: 8 g
zubereitung:
1. Bananen zerdrücken, mit geschmolzener Butter, Zucker und Eiern verrühren.
2. Mehl und Backpulver unterheben, mit Zimt würzen.
3. In einer Kastenform bei 175 °C etwa 50 Minuten backen.

## Teriyaki-Hähnchen
en: Teriyaki chicken
es: Pollo teriyaki
emoji: 🍗
bild: honighuhn
typ: sauce
beilage: reis
portionen: 4
tags: asiatisch, hähnchen, mealprep, schnell
zutaten:
- Hähnchenbrust: 600 g
- Teriyaki-Soße: 120 g
- Brokkoli: 400 g
- Frühlingszwiebeln: 50 g
- Öl: 15 g
- Sesam: 10 g
zubereitung:
1. Hähnchen in Würfel schneiden und im Öl goldbraun braten.
2. Brokkoli-Röschen dazu und 5 Minuten mitbraten.
3. Teriyaki-Soße angießen, kurz einkochen lassen. Mit Frühlingszwiebeln und Sesam bestreuen.

## Erdnuss-Hähnchen (Thai)
en: Thai peanut chicken
es: Pollo tailandés con cacahuete
emoji: 🥜
bild: curry
typ: sauce
beilage: reis
portionen: 4
tags: asiatisch, hähnchen, erdnuss
zutaten:
- Hähnchenbrust: 600 g
- Kokosmilch light (Dose): 400 g
- Erdnussbutter: 60 g
- Paprika: 200 g
- Karotten: 150 g
- Sojasoße: 30 g
zubereitung:
1. Hähnchen würfeln und anbraten, Paprika und Karotten in Streifen dazu.
2. Kokosmilch, Erdnussbutter und Sojasoße verrühren und angießen.
3. 10 Minuten köcheln, mit Limette und Chili abschmecken.

## Hähnchen-Fajita-Pfanne
en: Chicken fajita skillet
es: Sartén de fajitas de pollo
emoji: 🌶️
bild: wrap
typ: sauce
beilage: reis
portionen: 4
tags: mexikanisch, hähnchen, schnell, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Paprika: 400 g
- Zwiebeln: 150 g
- Gehackte Tomaten (Dose): 400 g
- Taco-Gewürz: 30 g
- Öl: 15 g
zubereitung:
1. Hähnchen in Streifen schneiden und mit dem Gewürz im Öl anbraten.
2. Paprika und Zwiebeln in Streifen dazu, 5 Minuten braten.
3. Tomaten dazugeben und 10 Minuten einköcheln.

## Putengeschnetzeltes in Rahmsoße
en: Turkey strips in cream sauce
es: Pavo en salsa de nata
emoji: 🦃
bild: gemuesesahne
typ: sauce
beilage: nudeln
portionen: 4
tags: pute, deutsch, cremig
zutaten:
- Putenbrust: 600 g
- Champignons: 300 g
- Zwiebeln: 100 g
- Kochsahne (15 %): 250 g
- Öl: 15 g
- Suppengewürz / Brühe: 5 g
zubereitung:
1. Pute in Streifen schneiden und portionsweise scharf anbraten.
2. Zwiebeln und Champignons anbraten.
3. Mit Sahne und etwas Brühe ablöschen, Fleisch dazu und 5 Minuten köcheln.

## Rinder-Stroganoff
en: Beef stroganoff
es: Stroganoff de ternera
emoji: 🥩
bild: stew
typ: sauce
beilage: reis
portionen: 4
tags: rind, cremig, klassiker
zutaten:
- Rindersteak (roh): 500 g
- Champignons: 300 g
- Zwiebeln: 150 g
- Essiggurken: 100 g
- Saure Sahne (10 %): 200 g
- Tomatenmark: 20 g
- Öl: 15 g
zubereitung:
1. Fleisch in feine Streifen schneiden und sehr heiß kurz anbraten, herausnehmen.
2. Zwiebeln und Pilze anbraten, Tomatenmark und Paprikapulver dazu.
3. Mit etwas Wasser ablöschen, Gurken und saure Sahne einrühren, Fleisch nur noch erwärmen.

## Penne mit Thunfisch-Tomatensoße
en: Penne with tuna tomato sauce
es: Penne con salsa de atún y tomate
emoji: 🐟
bild: pasta
typ: sauce
beilage: nudeln
portionen: 4
tags: italienisch, fisch, schnell, günstig
zutaten:
- Thunfisch (Dose, Wasser): 300 g
- Passierte Tomaten: 700 g
- Zwiebeln: 100 g
- Kapern: 30 g
- Öl: 15 g
zubereitung:
1. Zwiebeln im Öl anschwitzen, passierte Tomaten dazu.
2. Mit Oregano, Salz und Pfeffer 10 Minuten köcheln.
3. Thunfisch und Kapern unterheben und nur noch erwärmen.

## One-Pot-Pasta mit Spinat & Feta
en: One-pot pasta with spinach & feta
es: Pasta en una olla con espinacas y feta
emoji: 🍝
bild: pasta
typ: gericht
portionen: 4
tags: vegetarisch, nudeln, schnell, one-pot
zutaten:
- Nudeln (trocken): 400 g
- Spinat: 300 g
- Feta: 150 g
- Tomaten: 300 g
- Zwiebeln: 100 g
- Suppengewürz / Brühe: 10 g
- Wasser: 1000 g
zubereitung:
1. Nudeln, Zwiebeln, Tomaten, Brühe und Wasser in einen Topf geben.
2. Unter Rühren etwa 12 Minuten köcheln, bis die Flüssigkeit fast weg ist.
3. Spinat unterheben, Feta darüberbröseln.

## Linsen-Bolognese
en: Lentil bolognese
es: Boloñesa de lentejas
emoji: 🍝
bild: bolo
typ: sauce
beilage: nudeln
portionen: 6
tags: vegan, linsen, mealprep, günstig
zutaten:
- Rote Linsen (trocken): 200 g
- Passierte Tomaten: 700 g
- Karotten: 200 g
- Zwiebeln: 150 g
- Tomatenmark: 40 g
- Öl: 20 g
zubereitung:
1. Zwiebeln und Karotten fein würfeln und anbraten, Tomatenmark mitrösten.
2. Linsen, Tomaten und 400 ml Wasser dazu.
3. 20 Minuten köcheln, mit Oregano und Salz abschmecken.

## Gefüllte Paprika
en: Stuffed peppers
es: Pimientos rellenos
emoji: 🫑
bild: chili
typ: gericht
portionen: 4
tags: hackfleisch, ofen, reis
zutaten:
- Paprika: 800 g
- Hackfleisch gemischt: 400 g
- Reis (trocken): 100 g
- Passierte Tomaten: 500 g
- Zwiebeln: 100 g
- Käse gerieben: 80 g
zubereitung:
1. Reis halb gar kochen. Hack mit Zwiebeln anbraten, mit Reis mischen und würzen.
2. Paprika aushöhlen und füllen, in eine Form mit passierten Tomaten setzen.
3. Mit Käse bestreuen und bei 180 °C 40 Minuten backen.

## Kartoffel-Brokkoli-Auflauf
en: Potato broccoli bake
es: Gratinado de patata y brócoli
emoji: 🥦
bild: auflauf
typ: gericht
portionen: 4
tags: vegetarisch, ofen, auflauf
zutaten:
- Kartoffeln: 800 g
- Brokkoli: 500 g
- Kochsahne (15 %): 250 g
- Eier: 120 g
- Käse gerieben: 120 g
zubereitung:
1. Kartoffeln in Scheiben schneiden und 10 Minuten vorkochen, Brokkoli 3 Minuten blanchieren.
2. Sahne mit Eiern, Salz, Pfeffer und Muskat verquirlen.
3. Alles in eine Form schichten, Guss darüber, mit Käse bestreuen. Bei 180 °C 30 Minuten backen.

## Gemüse-Lasagne
en: Vegetable lasagne
es: Lasaña de verduras
emoji: 🍝
bild: auflauf
typ: gericht
portionen: 6
tags: vegetarisch, italienisch, ofen
zutaten:
- Lasagneplatten: 250 g
- Zucchini: 400 g
- Paprika: 300 g
- Spinat: 300 g
- Passierte Tomaten: 700 g
- Ricotta: 250 g
- Mozzarella: 125 g
zubereitung:
1. Gemüse würfeln, anbraten und mit passierten Tomaten 10 Minuten köcheln.
2. Ricotta mit Spinat, Salz und Muskat mischen.
3. Platten, Gemüsesoße und Ricotta abwechselnd schichten, Mozzarella obenauf. 40 Minuten bei 180 °C backen.

## Moussaka
en: Moussaka
es: Musaca
emoji: 🍆
bild: auflauf
typ: gericht
portionen: 6
tags: griechisch, hackfleisch, ofen
zutaten:
- Aubergine: 800 g
- Rinderhack: 500 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Milch (1,5 %): 400 g
- Mehl: 30 g
- Butter: 30 g
- Käse gerieben: 80 g
zubereitung:
1. Auberginen in Scheiben schneiden, salzen, abtupfen und anbraten oder im Ofen rösten.
2. Hack mit Zwiebeln anbraten, Tomaten, Zimt und Oregano dazu, 15 Minuten köcheln.
3. Béchamel aus Butter, Mehl und Milch kochen.
4. Auberginen und Hack schichten, Béchamel und Käse obenauf. 40 Minuten bei 180 °C backen.

## Shepherd's Pie
en: Shepherd's pie
es: Pastel de carne y puré
emoji: 🥧
bild: auflauf
typ: gericht
portionen: 6
tags: britisch, hackfleisch, ofen, kartoffeln
zutaten:
- Rinderhack: 500 g
- Kartoffeln: 1000 g
- Karotten: 200 g
- Erbsen (TK): 150 g
- Zwiebeln: 150 g
- Milch (1,5 %): 150 g
- Butter: 30 g
- Tomatenmark: 30 g
zubereitung:
1. Kartoffeln kochen und mit Milch und Butter zu Püree stampfen.
2. Hack mit Zwiebeln und Karotten anbraten, Tomatenmark und etwas Wasser dazu, Erbsen unterheben.
3. Hack in eine Form geben, Püree darauf verteilen. 25 Minuten bei 200 °C backen.

## Süßkartoffel-Chili
en: Sweet potato chili
es: Chili de boniato
emoji: 🍠
bild: chili
typ: gericht
portionen: 4
tags: vegan, scharf, eintopf, mealprep
zutaten:
- Süßkartoffel: 600 g
- Kidneybohnen (abgetropft): 250 g
- Schwarze Bohnen (Dose): 240 g
- Gehackte Tomaten (Dose): 800 g
- Zwiebeln: 150 g
- Öl: 15 g
zubereitung:
1. Zwiebeln anbraten, Süßkartoffeln würfeln und mitbraten.
2. Tomaten, Bohnen, Kreuzkümmel und Chili dazu.
3. 25 Minuten köcheln, bis die Süßkartoffeln weich sind.

## Minestrone
en: Minestrone
es: Minestrone
emoji: 🥣
bild: soup_red
typ: gericht
portionen: 6
tags: italienisch, suppe, vegetarisch, gemüse
zutaten:
- Zucchini: 300 g
- Karotten: 200 g
- Staudensellerie: 150 g
- Weiße Bohnen (Dose): 250 g
- Gehackte Tomaten (Dose): 400 g
- Nudeln (trocken): 120 g
- Suppengewürz / Brühe: 15 g
- Wasser: 1300 g
zubereitung:
1. Gemüse klein würfeln und in etwas Öl anschwitzen.
2. Tomaten, Brühe und Wasser dazu, 20 Minuten köcheln.
3. Bohnen und Nudeln dazugeben und garen. Mit Basilikum und Parmesan servieren.

## Kartoffelsuppe mit Würstchen
en: Potato soup with sausages
es: Sopa de patata con salchichas
emoji: 🥔
bild: soup_orange
typ: gericht
portionen: 4
tags: deutsch, suppe, kartoffeln, günstig
zutaten:
- Kartoffeln: 800 g
- Suppengemüse: 300 g
- Wiener Würstchen: 200 g
- Zwiebeln: 100 g
- Suppengewürz / Brühe: 15 g
- Wasser: 1000 g
zubereitung:
1. Kartoffeln, Suppengemüse und Zwiebeln würfeln und in Brühe 20 Minuten kochen.
2. Grob pürieren, mit Majoran, Muskat und Salz abschmecken.
3. Würstchen in Scheiben schneiden und darin erwärmen.

## Erbsensuppe (Erwtensoep)
en: Dutch pea soup
es: Sopa de guisantes holandesa
emoji: 🥣
bild: soup_clear
typ: gericht
portionen: 6
tags: niederländisch, suppe, winter
zutaten:
- Erbsen (TK): 600 g
- Kartoffeln: 300 g
- Staudensellerie: 150 g
- Karotten: 150 g
- Kassler: 300 g
- Suppengewürz / Brühe: 15 g
- Wasser: 1200 g
zubereitung:
1. Gemüse würfeln und mit Erbsen, Kassler und Brühe 40 Minuten köcheln.
2. Kassler herausnehmen, Suppe teilweise pürieren.
3. Fleisch klein schneiden und zurückgeben.

## Stamppot mit Grünkohl
en: Kale stamppot
es: Stamppot de col rizada
emoji: 🥬
bild: stew
typ: gericht
portionen: 4
tags: niederländisch, kartoffeln, winter
zutaten:
- Kartoffeln: 1000 g
- Grünkohl (roh): 400 g
- Rauchwurst (Rookworst): 250 g
- Milch (1,5 %): 150 g
- Butter: 20 g
zubereitung:
1. Kartoffeln schälen und mit dem Grünkohl obendrauf 20 Minuten garen.
2. Abgießen, mit Milch und Butter grob stampfen, mit Salz und Pfeffer würzen.
3. Rauchwurst erwärmen, in Scheiben schneiden und dazu servieren.

## Bami Goreng
en: Bami goreng
es: Bami goreng
emoji: 🍜
bild: ricebowl
typ: gericht
portionen: 4
tags: indonesisch, nudeln, hähnchen, mealprep
zutaten:
- Mie-Nudeln (roh): 250 g
- Hähnchenbrust: 400 g
- Chinakohl: 300 g
- Karotten: 150 g
- Frühlingszwiebeln: 50 g
- Sojasoße: 50 g
- Öl: 20 g
zubereitung:
1. Nudeln kochen und abgießen.
2. Hähnchen in Streifen im Wok anbraten, Gemüse dazu.
3. Nudeln und Sojasoße unterschwenken, mit Sambal abschmecken.

## Nasi Goreng
en: Nasi goreng
es: Nasi goreng
emoji: 🍚
bild: ricebowl
typ: gericht
portionen: 4
tags: indonesisch, reis, eier, resteverwertung
zutaten:
- Reis (trocken): 300 g
- Hähnchenbrust: 300 g
- Eier: 240 g
- Erbsen (TK): 150 g
- Karotten: 150 g
- Sojasoße: 40 g
- Öl: 20 g
zubereitung:
1. Reis am Vortag kochen und kalt werden lassen.
2. Hähnchen und Gemüse im Wok braten, Reis dazu und knusprig braten.
3. Mit Sojasoße würzen. Spiegeleier obenauf.

## Gyros-Pfanne mit Tzatziki
en: Gyros skillet with tzatziki
es: Sartén de gyros con tzatziki
emoji: 🥙
bild: wrap
typ: sauce
beilage: reis
portionen: 4
tags: griechisch, schwein, mealprep
zutaten:
- Schweineschnitzel (roh): 600 g
- Zwiebeln: 200 g
- Gyros-Gewürz: 20 g
- Öl: 20 g
- Tzatziki: 200 g
zubereitung:
1. Fleisch in feine Streifen schneiden und mit Gyros-Gewürz und Öl marinieren.
2. Portionsweise sehr heiß anbraten, Zwiebeln dazu.
3. Mit Tzatziki und Reis servieren.

## Pollo al ajillo
en: Garlic chicken
es: Pollo al ajillo
emoji: 🧄
bild: honighuhn
typ: sauce
beilage: kartoffeln
portionen: 4
tags: spanisch, hähnchen, knoblauch
zutaten:
- Hähnchenschenkel (roh): 800 g
- Knoblauch: 30 g
- Weißwein: 150 g
- Öl: 30 g
zubereitung:
1. Hähnchen in Stücke teilen, salzen und im Öl rundum goldbraun braten.
2. Knoblauchzehen andrücken und mitbraten.
3. Mit Weißwein ablöschen und zugedeckt 20 Minuten schmoren. Mit Petersilie servieren.

## Arroz con pollo
en: Chicken with rice
es: Arroz con pollo
emoji: 🍚
bild: paella
typ: gericht
portionen: 4
tags: spanisch, reis, hähnchen, mealprep
zutaten:
- Reis (trocken): 300 g
- Hähnchenschenkel (roh): 600 g
- Paprika: 200 g
- Erbsen (TK): 150 g
- Gehackte Tomaten (Dose): 200 g
- Zwiebeln: 100 g
- Öl: 20 g
- Wasser: 750 g
zubereitung:
1. Hähnchen anbraten, Zwiebeln und Paprika dazu.
2. Tomaten und Reis kurz mitbraten, mit Paprikapulver und Kurkuma würzen.
3. Heißes Wasser angießen und 20 Minuten köcheln, Erbsen am Ende unterheben.

## Garbanzos con espinacas
en: Chickpeas with spinach
es: Garbanzos con espinacas
emoji: 🥬
bild: stew
typ: gericht
portionen: 4
tags: spanisch, vegan, kichererbsen
zutaten:
- Kichererbsen (abgetropft): 500 g
- Spinat: 400 g
- Knoblauch: 10 g
- Weißbrot: 40 g
- Öl: 30 g
zubereitung:
1. Brot und Knoblauch im Öl rösten, mit Kreuzkümmel und Paprika im Mörser zerstoßen.
2. Spinat in derselben Pfanne zusammenfallen lassen.
3. Kichererbsen, die Brot-Paste und etwas Wasser dazu, 10 Minuten köcheln.

## Poke Bowl mit Lachs
en: Salmon poke bowl
es: Poke bowl de salmón
emoji: 🍣
bild: ricebowl
typ: gericht
portionen: 2
tags: hawaiianisch, fisch, bowl, frisch
zutaten:
- Reis (trocken): 150 g
- Lachs (frisch): 250 g
- Avocado: 150 g
- Gurke: 150 g
- Edamame: 100 g
- Sojasoße: 30 g
zubereitung:
1. Reis kochen und mit etwas Essig und Zucker würzen.
2. Lachs würfeln und in Sojasoße marinieren. Gemüse schneiden.
3. Alles auf dem Reis anrichten.

## Couscous-Salat mit Kichererbsen
en: Couscous salad with chickpeas
es: Ensalada de cuscús con garbanzos
emoji: 🥗
bild: salat
typ: gericht
portionen: 4
tags: vegan, salat, mealprep, kalt
zutaten:
- Couscous (trocken): 200 g
- Kichererbsen (abgetropft): 250 g
- Gurke: 200 g
- Tomaten: 250 g
- Paprika: 150 g
- Öl: 30 g
zubereitung:
1. Couscous mit gleicher Menge kochendem Wasser übergießen und 5 Minuten quellen lassen.
2. Gemüse würfeln, mit Kichererbsen untermischen.
3. Mit Öl, Zitrone, Minze, Salz und Pfeffer abschmecken.

## Hähnchen-Wraps
en: Chicken wraps
es: Wraps de pollo
emoji: 🌯
bild: wrap
typ: gericht
einheit: stück
portionen: 4
tags: hähnchen, schnell, mitnehmen
zutaten:
- Tortilla-Wrap: 240 g
- Hähnchenbrust: 400 g
- Romanasalat: 100 g
- Tomaten: 200 g
- Käse gerieben: 60 g
- Saure Sahne (10 %): 100 g
zubereitung:
1. Hähnchen in Streifen würzen und braten.
2. Wraps kurz erwärmen, mit saurer Sahne bestreichen.
3. Salat, Tomaten, Hähnchen und Käse darauf, fest einrollen.

## Zucchini-Hack-Pfanne (Low Carb)
en: Courgette mince skillet (low carb)
es: Sartén de calabacín y carne picada
emoji: 🥒
bild: chili
typ: gericht
portionen: 4
tags: low carb, hackfleisch, schnell
zutaten:
- Rinderhack: 500 g
- Zucchini: 600 g
- Paprika: 200 g
- Gehackte Tomaten (Dose): 400 g
- Feta: 100 g
zubereitung:
1. Hack krümelig anbraten und würzen.
2. Zucchini und Paprika würfeln und mitbraten.
3. Tomaten dazu, 10 Minuten köcheln, Feta darüberbröseln.

## Chia-Pudding
en: Chia pudding
es: Pudin de chía
emoji: 🫙
bild: oats
typ: gericht
portionen: 4
tags: frühstück, vegan, mealprep, süß
zutaten:
- Chiasamen: 30 g pro Portion
- Milch (1,5 %): 150 g pro Portion
- Beeren (TK): 60 g pro Portion
- Honig: 8 g pro Portion
zubereitung:
1. Chiasamen mit Milch und Honig in Gläsern verrühren.
2. Nach 10 Minuten nochmal umrühren, damit nichts klumpt.
3. Über Nacht kühlen, Beeren obendrauf.

## Käsekuchen ohne Boden
en: Crustless cheesecake
es: Tarta de queso sin base
emoji: 🍰
bild: loaf
typ: gericht
einheit: stück
portionen: 12
tags: backen, süß, protein
zutaten:
- Magerquark: 1000 g
- Eier: 240 g
- Zucker: 120 g
- Puddingpulver: 37 g
- Zitrone: 100 g
zubereitung:
1. Quark, Eier, Zucker, Puddingpulver und Zitronenabrieb glatt rühren.
2. In eine gefettete Springform füllen.
3. Bei 170 °C etwa 60 Minuten backen und im Ofen auskühlen lassen.

# ---------------------------------------------------------------------------
#  Meal-Prep-Rezepte (neu geschrieben, Nov 2026) – Fotos: Brians Meal Prep
# ---------------------------------------------------------------------------

## Linsencurry mit Garnelen
en: Lentil curry with prawns
es: Curry de lentejas con gambas
emoji: 🦐
bild: fotos/linsencurry-garnelen.jpg
typ: gericht
portionen: 3
tags: mealprep, garnelen, linsen, curry, protein
zutaten:
- Rote Linsen (trocken): 129 g
- Kürbis (Hokkaido): 627 g
- Aubergine: 223 g
- Paprika: 228 g
- Cremefine 7 %: 100 g
- Garnelen (TK, roh): 675 g
- Rapsöl: 10 g
- Passierte Tomaten: 397 g
zubereitung:
1. Kürbis, Aubergine und Paprika würfeln und in der Hälfte vom Öl anbraten.
2. Linsen, passierte Tomaten und etwa 300 ml Wasser dazugeben, mit Currypulver, Kreuzkümmel, Salz und Pfeffer würzen.
3. Rund 20 Minuten köcheln lassen, bis Linsen und Kürbis weich sind, dann die Cremefine einrühren.
4. Garnelen auftauen, trocken tupfen und im restlichen Öl 2–3 Minuten pro Seite braten.
5. Curry auf 3 Boxen verteilen und die Garnelen daneben legen.

## Schwein mit Linsen
en: Pork with lentils
es: Cerdo con lentejas
emoji: 🥩
bild: fotos/schwein-mit-linsen.jpg
typ: gericht
portionen: 4
tags: mealprep, schwein, linsen, protein
zutaten:
- Linsen (gekocht): 528 g
- Champignons: 500 g
- Schweinekarree / Karreesteak (roh): 998 g
- Karotten: 170 g
- Zwiebeln: 135 g
zubereitung:
1. Zwiebeln und Karotten klein würfeln, Champignons in Scheiben schneiden.
2. Gemüse in einer beschichteten Pfanne anbraten, die gekochten Linsen dazugeben und mit Salz, Pfeffer, etwas Sojasauce oder Brühe abschmecken.
3. Karreesteaks würzen und von jeder Seite 3–4 Minuten braten, bis sie durch sind.
4. Linsengemüse und Fleisch auf 4 Boxen verteilen.

## Paprikahendl mit Knödeln und Sauerkraut
en: Paprika chicken with dumplings and sauerkraut
es: Pollo al pimentón con albóndigas y chucrut
emoji: 🍗
bild: fotos/paprikahendl-knoedel.jpg
typ: gericht
portionen: 4
tags: mealprep, hähnchen, österreichisch, knödel
zutaten:
- Hähnchenbrustfilet (roh): 600 g
- Paprika: 300 g
- Zwiebeln: 200 g
- Tomatenmark: 40 g
- Passierte Tomaten: 400 g
- Sauerrahm 15 %: 100 g
- Rapsöl: 10 g
- Kartoffelknödel (Packung): 150 g pro Portion
- Sauerkraut (abgetropft): 150 g pro Portion
zubereitung:
1. Hähnchen in Stücke schneiden und im Öl rundum anbraten, herausnehmen.
2. Zwiebeln und Paprika anbraten, Tomatenmark und reichlich Paprikapulver kurz mitrösten.
3. Mit passierten Tomaten und etwas Wasser ablöschen, Hähnchen dazugeben und 15 Minuten köcheln lassen.
4. Vom Herd nehmen und den Sauerrahm einrühren.
5. Knödel nach Packung zubereiten, Sauerkraut erwärmen und alles auf 4 Boxen verteilen.

## Hähnchen süß-sauer mit Reis
en: Sweet and sour chicken with rice
es: Pollo agridulce con arroz
emoji: 🍍
bild: fotos/haehnchen-suess-sauer.jpg
typ: gericht
portionen: 4
tags: mealprep, hähnchen, asiatisch, reis
zutaten:
- Hähnchenbrustfilet (roh): 600 g
- Speisestärke: 25 g
- Paprika: 300 g
- Zwiebeln: 150 g
- Ananas (Dose, im eigenen Saft): 340 g
- Sojasauce (dunkel): 45 g
- Passierte Tomaten: 200 g
- Erythrit: 15 g
- Basmatireis (roh): 80 g pro Portion
zubereitung:
1. Hähnchen würfeln, in der Hälfte der Stärke wenden und im Airfryer oder in der Pfanne knusprig braten.
2. Zwiebeln und Paprika in Stücke schneiden und anbraten, die Ananasstücke kurz mitbraten.
3. Mit Sojasauce und dem Ananassaft ablöschen, passierte Tomaten dazugeben und aufkochen.
4. Mit Erythrit abschmecken, restliche Stärke in etwas Wasser anrühren und die Sauce damit andicken.
5. Hähnchen in der Sauce schwenken, Reis nach Packung kochen und alles aufteilen.

## Orange Chicken mit Basmatireis und Brokkoli
en: Orange chicken with basmati rice and broccoli
es: Pollo a la naranja con arroz basmati y brócoli
emoji: 🍊
bild: honighuhn
typ: gericht
portionen: 4
tags: mealprep, hähnchen, airfryer, protein
zutaten:
- Hähnchenbrustfilet (roh): 600 g
- Skyr: 150 g
- Sojasauce (dunkel): 60 g
- Orangen-Sirup Zero (SodaStream): 120 g
- Speisestärke: 20 g
- Basmatireis (roh): 80 g pro Portion
- Brokkoli: 150 g pro Portion
zubereitung:
1. Hähnchen würfeln, mit Skyr und Gewürzen (z. B. Paprika, Knoblauch, Salz) marinieren.
2. Im Airfryer oder Backofen goldbraun garen.
3. Sojasauce und Orangensirup aufkochen, die in Wasser angerührte Stärke einrühren, bis die Sauce glänzt und leicht klebt.
4. Hähnchen in der Sauce schwenken.
5. Reis nach Packung kochen, Brokkoli dünsten oder im Airfryer garen und alles aufteilen.

## Hackbällchen mit Kartoffel-Blumenkohl-Püree und Erbsen
en: Meatballs with potato-cauliflower mash and peas
es: Albóndigas con puré de patata y coliflor y guisantes
emoji: 🧆
bild: koettbullar
typ: gericht
portionen: 4
tags: mealprep, hackfleisch, püree, airfryer
zutaten:
- Rinderhack (Tatar, fettarm): 600 g
- Semmelbrösel: 50 g
- Eier: 120 g
- Zwiebeln: 100 g
- Knoblauch: 10 g
- Kartoffeln (mehlig): 600 g
- Blumenkohl: 400 g
- Karotten: 200 g
- Erbsen (TK): 120 g pro Portion
zubereitung:
1. Zwiebeln und Knoblauch sehr fein hacken, mit Hack, Semmelbröseln, Eiern und Gewürzen verkneten.
2. Kleine Bällchen formen und im Airfryer, in der Pfanne oder im Ofen braten.
3. Kartoffeln, Blumenkohl und Karotten weich kochen, abgießen und zu Püree stampfen oder pürieren.
4. Püree mit Salz und Muskat abschmecken, Erbsen nach Packung garen.
5. Bällchen, Püree und Erbsen auf 4 Boxen verteilen.

## Fisch süß-sauer mit Basmatireis
en: Sweet and sour fish with basmati rice
es: Pescado agridulce con arroz basmati
emoji: 🐟
bild: lachs
typ: gericht
portionen: 4
tags: mealprep, fisch, asiatisch, reis
zutaten:
- Fischfilet (natur, roh): 600 g
- Mehl: 20 g
- Speisestärke: 30 g
- Zwiebeln: 150 g
- Paprika: 250 g
- Ananas (Dose, im eigenen Saft): 340 g
- Sojasauce (dunkel): 45 g
- Passierte Tomaten: 250 g
- Erythrit: 15 g
- Basmatireis (roh): 80 g pro Portion
zubereitung:
1. Fisch in mundgerechte Stücke schneiden, in Mehl und der Hälfte der Stärke wenden und knusprig braten.
2. Zwiebeln und Paprika klein schneiden und anbraten, Ananas dazugeben und kurz mitbraten.
3. Mit Sojasauce und Ananassaft ablöschen, passierte Tomaten einrühren und aufkochen.
4. Mit Erythrit und Gewürzen abschmecken und mit der restlichen, in Wasser angerührten Stärke binden.
5. Fisch vorsichtig unterheben und mit Reis servieren. Dazu passt ein Salat.

## Mock Duck mit Maroni, Apfelrotkraut und Knödeln
en: Mock duck with chestnuts, red cabbage and dumplings
es: Pato vegano con castañas, lombarda y albóndigas
emoji: 🦆
bild: stew
typ: gericht
portionen: 4
tags: vegan, mealprep, winter, airfryer
zutaten:
- Mock Duck (Dose): 400 g
- Bratensauce (zubereitet): 250 g
- Kartoffelknödel (Packung): 150 g pro Portion
- Rotkraut / Apfelrotkohl (Glas): 150 g pro Portion
- Maroni (vorgegart, Packung): 200 g
zubereitung:
1. Mock Duck abtropfen lassen und im Airfryer knusprig braten.
2. In einer Pfanne mit der Bratensauce übergießen und kurz ziehen lassen.
3. Knödel und Rotkraut nach Packung zubereiten.
4. Maroni im Airfryer oder Ofen erwärmen und zur Mock Duck geben.

## Gochujang Chicken mit Käse-Gnocchi
en: Gochujang chicken with cheesy gnocchi
es: Pollo gochujang con ñoquis de queso
emoji: 🌶️
bild: honighuhn
typ: gericht
portionen: 4
tags: mealprep, hähnchen, koreanisch, scharf, airfryer
zutaten:
- Hähnchenbrustfilet (roh): 600 g
- Skyr: 150 g
- Gochujang (Chilipaste): 60 g
- Sojasoße: 30 g
- Speisestärke: 15 g
- Erythrit: 10 g
- Gnocchi (Packung, roh): 600 g
- Körniger Frischkäse (fettarm): 200 g
- Frischkäse (mager / 0,2 %): 100 g
- Leichtmilch 1,5 %: 100 g
- Reibekäse light: 60 g
zubereitung:
1. Hähnchen würfeln, mit Skyr und Gewürzen marinieren und im Airfryer garen.
2. Gochujang mit etwas Wasser und Sojasauce verrühren, mit Erythrit abschmecken und mit angerührter Stärke eindicken. Hähnchen dazugeben.
3. Gnocchi im Airfryer knusprig backen.
4. Hüttenkäse, Frischkäse und Milch mit Gewürzen cremig mixen, in der Pfanne erwärmen und den Reibekäse darin schmelzen.
5. Gnocchi in der Käsesauce schwenken und mit dem Hähnchen aufteilen.

## Low-Cal Currywurst mit Pommes
en: Low-cal currywurst with chips
es: Currywurst ligera con patatas
emoji: 🌭
bild: wrap
typ: gericht
portionen: 4
tags: low cal, airfryer, deutsch, fastfood light
zutaten:
- Geflügelwurst: 400 g
- Cola Zero: 200 g
- Tomatenpüree / Passata: 300 g
- Currypulver: 10 g
- Kartoffeln (festkochend): 800 g
zubereitung:
1. Kartoffeln in Pommes schneiden und 30 Minuten bis 2 Stunden in Wasser legen, dann gut trocken tupfen.
2. Pommes im Airfryer goldbraun und knusprig garen und würzen.
3. Geflügelwurst in Scheiben schneiden und im Airfryer grillen.
4. Cola Zero und Tomatenpüree in einer Pfanne aufkochen, Currypulver und Gewürze dazu und etwas einkochen lassen.
5. Wurst mit der Sauce übergießen und mit den Pommes servieren.

## Hähnchen-Brokkoli-Reispfanne
en: Chicken broccoli rice skillet
es: Sartén de pollo, brócoli y arroz
emoji: 🥦
bild: ricebowl
typ: gericht
portionen: 1
tags: hähnchen, reis, schnell, protein
zutaten:
- Reis (trocken): 80 g
- Hähnchenbrustfilet (roh): 150 g
- Brokkoli: 150 g
- Kokosöl: 5 g
zubereitung:
1. Reis in leicht gesalzenem Wasser nach Packung kochen.
2. Hähnchen in Stücke schneiden und mit Salz, Pfeffer und Paprikapulver würzen.
3. Im Kokosöl etwa 10 Minuten goldbraun braten.
4. Brokkoli in einem Topf rund 10 Minuten dünsten.
5. Reis und Brokkoli zum Hähnchen geben, alles vermengen und abschmecken. Wer mag, gibt Knoblauch oder Mandelsplitter dazu.

## Hähnchen-Reis-Pfanne mit Paprika und Cashews
en: Chicken rice skillet with peppers and cashews
es: Sartén de pollo y arroz con pimiento y anacardos
emoji: 🫑
bild: ricebowl
typ: gericht
portionen: 1
tags: hähnchen, reis, asiatisch, schnell
zutaten:
- Reis (trocken): 80 g
- Hähnchenbrustfilet (roh): 150 g
- Paprika: 150 g
- Cashewkerne: 10 g
- Kokosöl: 5 g
- Sojasoße: 45 g
zubereitung:
1. Reis in Salzwasser nach Packung kochen.
2. Hähnchen und Paprika in mundgerechte Stücke schneiden.
3. Hähnchen im Kokosöl rundum anbraten, dann die Paprika kurz mitbraten, bis sie bissfest ist.
4. Mit Sojasauce vermengen.
5. Cashews grob hacken, darüberstreuen und mit dem Reis anrichten.

## Crispy Chicken Ciabatta
en: Crispy chicken ciabatta
es: Chapata de pollo crujiente
emoji: 🥪
bild: wrap
typ: gericht
portionen: 1
tags: hähnchen, sandwich, airfryer, mitnehmen
zutaten:
- Ciabatta: 80 g
- Hähnchenbrustfilet (roh): 150 g
- Cornflakes (ungesüßt, zum Panieren): 30 g
- Naturjoghurt fettarm 1,5 %: 80 g
- Olivenöl: 10 g
- Salatmischung (Tüte): 50 g
zubereitung:
1. Cornflakes in einem Beutel grob zerbröseln.
2. Hähnchen in Streifen schneiden und mit der Hälfte des Joghurts, Salz, Pfeffer und Paprikapulver vermengen.
3. Die Streifen in den Cornflakes wenden und leicht andrücken.
4. Im Ofen oder Airfryer backen, bis sie innen durch und außen knusprig sind.
5. Restlichen Joghurt mit dem Olivenöl, Salz und Pfeffer verrühren.
6. Ciabatta aufschneiden, mit der Sauce bestreichen und mit Salat und Hähnchen belegen.

## Puten-Wraps mit Kidneybohnen und Guacamole
en: Turkey wraps with kidney beans and guacamole
es: Wraps de pavo con alubias rojas y guacamole
emoji: 🌯
bild: wrap
typ: gericht
portionen: 1
tags: pute, wrap, mexikanisch, schnell
zutaten:
- Vollkorn-Wrap: 80 g
- Putenbrust (roh): 150 g
- Kidneybohnen (abgetropft): 50 g
- Avocado: 50 g
- Paprika: 100 g
- Kokosöl: 5 g
zubereitung:
1. Putenbrust in Streifen schneiden und mit Salz, Pfeffer und Paprikapulver würzen.
2. Paprika in feine Streifen schneiden, Kidneybohnen abspülen und abtropfen lassen.
3. Avocado mit einer Gabel zerdrücken und mit Salz und Pfeffer abschmecken.
4. Putenstreifen im Kokosöl durchbraten.
5. Wraps kurz erwärmen, mit der Avocado bestreichen, mit Pute, Bohnen und Paprika belegen und aufrollen.

## One-Pan Steak mit Röstkartoffeln und Spargel
en: One-pan steak with roast potatoes and asparagus
es: Filete en una sartén con patatas y espárragos
emoji: 🥩
bild: lachs
typ: gericht
portionen: 1
tags: rind, one-pan, low fat, protein
zutaten:
- Rinderhüftsteak (roh): 200 g
- Kartoffeln (festkochend): 300 g
- Spargel (grün): 100 g
- Olivenöl: 5 g
zubereitung:
1. Kartoffeln in etwa 1 cm große Würfel schneiden, Spargel putzen und in Stücke schneiden.
2. Steak trocken tupfen, mit der Hälfte des Öls einreiben und mit Salz und Pfeffer würzen.
3. Restliches Öl in einer beschichteten Pfanne bei mittlerer Hitze erwärmen und die Kartoffeln 12–15 Minuten goldbraun braten.
4. Spargel und Rosmarin oder Thymian dazugeben und 5–10 Minuten mitbraten.
5. Gemüse an den Rand schieben und das Steak pro Seite 2–3 Minuten braten.
6. Alles kurz durchschwenken, pfeffern und servieren.

## Kartoffelauflauf mit Hüttenkäse und Pute
en: Potato bake with cottage cheese and turkey
es: Gratinado de patata con requesón y pavo
emoji: 🥔
bild: auflauf
typ: gericht
portionen: 1
tags: auflauf, ofen, protein, schnell
zutaten:
- Kartoffeln (vorgekocht, Packung): 250 g
- Körniger Frischkäse (fettarm): 150 g
- Eier: 60 g
- Putenbrust-Aufschnitt (mager): 100 g
- Kirschtomaten: 150 g
- Reibekäse light: 15 g
zubereitung:
1. Vorgekochte Kartoffeln abtropfen lassen und in Scheiben schneiden.
2. Hüttenkäse mit dem Ei, Salz, Pfeffer und Paprikapulver verquirlen.
3. Kartoffeln und ganze Kirschtomaten in eine kleine Auflaufform geben.
4. Putenaufschnitt in Stücke zupfen und darüber verteilen, die Hüttenkäse-Mischung darübergießen.
5. Mit Reibekäse bestreuen und im Ofen backen, bis die Eimasse gestockt und der Käse goldbraun ist.

## Nudeln Napoletana mit Hack
en: Pasta napoletana with mince
es: Pasta napolitana con carne picada
emoji: 🍝
bild: bolo
typ: gericht
portionen: 1
tags: nudeln, hackfleisch, italienisch, schnell
zutaten:
- Nudeln (trocken): 100 g
- Rinderhack (Tatar, fettarm): 150 g
- Tomatenmark: 10 g
- Gehackte Tomaten (Dose): 200 g
- Olivenöl: 5 g
zubereitung:
1. Nudeln in Salzwasser nach Packung kochen.
2. Hack im Olivenöl krümelig anbraten.
3. Tomatenmark dazugeben und etwa 1 Minute mitrösten.
4. Mit den Tomaten ablöschen und mit Salz, Pfeffer, italienischen Kräutern, Knoblauch- und Zwiebelpulver einköcheln lassen.
5. Nudeln mit der Sauce anrichten.

## Cremige Spinat-Nudeln
en: Creamy spinach pasta
es: Pasta cremosa con espinacas
emoji: 🥬
bild: pasta
typ: gericht
portionen: 1
tags: vegetarisch, nudeln, protein, schnell
zutaten:
- Nudeln (trocken): 80 g
- Körniger Frischkäse (fettarm): 150 g
- Blattspinat (frisch): 150 g
- Walnüsse: 10 g
zubereitung:
1. Nudeln kochen und abgießen, dabei 3–4 EL Nudelwasser aufheben.
2. Spinat in einer großen Pfanne zusammenfallen lassen.
3. Hüttenkäse mit dem heißen Nudelwasser, Salz, Pfeffer, Knoblauchpulver und Muskat glatt rühren oder kurz pürieren.
4. Nudeln und Sauce zum Spinat geben und gut vermischen.
5. Mit gehackten Walnüssen bestreuen.

## Rinderstreifen mit Brokkoli und Jasminreis
en: Beef strips with broccoli and jasmine rice
es: Tiras de ternera con brócoli y arroz jazmín
emoji: 🥩
bild: ricebowl
typ: gericht
portionen: 1
tags: rind, asiatisch, wok, protein
zutaten:
- Jasminreis (roh): 80 g
- Rinderhüftsteak (roh): 150 g
- Brokkoli: 200 g
- Sesamöl: 10 g
- Sojasoße: 45 g
zubereitung:
1. Jasminreis nach Packung garen.
2. Brokkoli in Röschen teilen und bissfest kochen oder dämpfen.
3. Steak in sehr feine Streifen schneiden.
4. Sesamöl im Wok stark erhitzen, nach Wunsch Knoblauch und Ingwer kurz mitbraten, dann die Rinderstreifen scharf anbraten.
5. Brokkoli und Sojasauce dazugeben, alles vermengen und mit dem Reis servieren.

## Einfaches Sushi aus der Eiswürfelform
en: Easy ice-cube-tray sushi
es: Sushi fácil en cubitera
emoji: 🍣
bild: ricebowl
typ: gericht
portionen: 1
tags: fisch, sushi, kalt, japanisch
zutaten:
- Sushireis (roh): 100 g
- Avocado: 100 g
- Gurke: 150 g
- Lachs (roh): 100 g
zubereitung:
1. Sushireis nach Packung kochen und abkühlen lassen.
2. Eine Eiswürfelform mit Frischhaltefolie auslegen.
3. Lachs in kleine Scheiben schneiden und als erste Schicht in die Form legen.
4. Gurke und Avocado in Scheiben darauf schichten, dann den Reis fest andrücken.
5. Form auf ein Brett stürzen und die Folie vorsichtig abziehen.

## Joghurt-Dill-Nudelsalat mit Thunfisch
en: Yoghurt dill pasta salad with tuna
es: Ensalada de pasta con yogur, eneldo y atún
emoji: 🥗
bild: salat
typ: gericht
portionen: 1
tags: salat, nudeln, fisch, kalt, mitnehmen
zutaten:
- Nudeln (trocken): 80 g
- Thunfisch im eigenen Saft: 100 g
- Naturjoghurt fettarm 1,5 %: 50 g
- Mais (Dose, abgetropft): 100 g
- Olivenöl: 10 g
zubereitung:
1. Nudeln kochen, abgießen und kalt abschrecken.
2. Joghurt, Olivenöl, einen Schuss Essig, Dill, Salz und Pfeffer zu einem Dressing verrühren.
3. Thunfisch und Mais abtropfen lassen.
4. Nudeln, Thunfisch und Mais mit dem Dressing gut vermischen.

## Topfenpalatschinken mit Beeren
en: Quark crêpes with berries
es: Crepes de requesón con frutos rojos
emoji: 🥞
bild: pancakes
typ: gericht
portionen: 1
tags: süß, frühstück, protein, österreichisch
zutaten:
- Dinkelmehl: 50 g
- Laktosefreie Milch 1,5 %: 100 g
- Eier: 60 g
- Laktosefreier Magertopfen: 150 g
- Beeren (TK): 100 g
- Kokosöl: 5 g
zubereitung:
1. Mehl, Milch und Ei zu einem glatten Teig verrühren.
2. Topfen mit einem Schuss Wasser glatt rühren, nach Wunsch süßen.
3. Öl in einer Pfanne erhitzen und dünne Palatschinken von beiden Seiten goldbraun backen.
4. Palatschinken mit der Topfencreme bestreichen, Beeren darauf verteilen und einrollen.

## Himbeer-Topfen-Bowl mit Haferflocken
en: Raspberry quark bowl with oats
es: Bowl de requesón con frambuesas y avena
emoji: 🫐
bild: oats
typ: gericht
portionen: 1
tags: frühstück, protein, süß, schnell
zutaten:
- Haferflocken (zart): 80 g
- Magertopfen / Magerquark: 120 g
- Himbeeren: 100 g
- Wasser: 30 g
- Walnüsse: 15 g
zubereitung:
1. Himbeeren vorsichtig waschen und abtropfen lassen.
2. Topfen mit dem Wasser cremig rühren, nach Wunsch mit Flavour Drops süßen.
3. Haferflocken unterrühren.
4. Mit gehackten Walnüssen und den Himbeeren garnieren.

## Omelette mit Paprika und Vollkornbrot
en: Pepper omelette with wholegrain bread
es: Tortilla francesa con pimiento y pan integral
emoji: 🍳
bild: tortilla
typ: gericht
portionen: 1
tags: frühstück, eier, protein, schnell
zutaten:
- Vollkornbrot (Scheibe): 80 g
- Eier: 120 g
- Eiklar (flüssig): 100 g
- Paprika: 100 g
- Olivenöl: 5 g
zubereitung:
1. Paprika klein würfeln.
2. Eier und Eiklar mit Salz, Pfeffer und Kräutern verquirlen.
3. Paprika im Olivenöl kurz andünsten.
4. Eimasse darübergießen und bei mittlerer Hitze stocken lassen.
5. Mit dem Vollkornbrot servieren.

## Protein-Porridge mit Apfel
en: Protein porridge with apple
es: Porridge proteico con manzana
emoji: 🍎
bild: oats
typ: gericht
portionen: 1
tags: frühstück, protein, haferflocken, warm
zutaten:
- Haferflocken (zart): 70 g
- Proteinpulver: 30 g
- Mandeln (ganz): 15 g
- Apfel: 180 g
- Wasser: 200 g
zubereitung:
1. Apfel entkernen und klein schneiden.
2. Haferflocken mit dem kochenden Wasser übergießen und 2 Minuten quellen lassen.
3. Proteinpulver zügig unterrühren, bis keine Klümpchen mehr da sind.
4. Apfelstücke unterheben und mit Mandeln bestreuen.

## Reiswaffel-Joghurt-Bowl mit Banane
en: Rice cake yoghurt bowl with banana
es: Bowl de yogur con tortitas de arroz y plátano
emoji: 🍌
bild: oats
typ: gericht
portionen: 1
tags: frühstück, snack, protein, süß
zutaten:
- Reiswaffeln (natur): 32 g
- Griechischer Joghurt 0 %: 200 g
- Banane: 120 g
- Erdnussmus (100 % Erdnüsse): 15 g
zubereitung:
1. Joghurt nach Wunsch süßen und in eine Schale geben.
2. Banane in Scheiben schneiden.
3. Reiswaffeln direkt vor dem Essen grob zerbröseln und auf den Joghurt geben.
4. Bananenscheiben dazugeben und das Erdnussmus darüberträufeln.

## Puten-Avocado-Toast
en: Turkey avocado toast
es: Tostada de pavo y aguacate
emoji: 🥑
bild: wrap
typ: gericht
portionen: 1
tags: frühstück, pute, schnell, protein
zutaten:
- Vollkorn-Toast: 70 g
- Putenbrust-Aufschnitt (mager): 50 g
- Avocado: 40 g
- Tomaten: 100 g
zubereitung:
1. Toast rösten.
2. Tomaten in Scheiben schneiden.
3. Avocado zerdrücken, mit Salz und Pfeffer abschmecken und auf die Toasts streichen.
4. Mit Putenaufschnitt und Tomaten belegen.

## Chicken Katsu Curry
en: Chicken katsu curry
es: Curry katsu de pollo
emoji: 🍛
typ: gericht
portionen: 4
tags: japan, asiatisch, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Panko: 80 g
- Eier: 100 g
- Mehl: 40 g
- Japanisches Curry (Würfel): 100 g
- Karotten: 200 g
- Kartoffeln (festkochend): 300 g
- Zwiebeln: 150 g
- Reis (trocken): 300 g
- Öl: 30 g
zubereitung:
1. Reis kochen. Zwiebeln, Karotten und Kartoffeln würfeln, in 10 g Öl anbraten, mit 700 ml Wasser 15 Minuten köcheln.
2. Curry-Würfel einrühren, bis die Soße andickt.
3. Hähnchen flach klopfen, erst in Mehl, dann in Ei, dann in Panko wenden und im restlichen Öl von beiden Seiten 4 Minuten goldbraun braten.
4. Hähnchen in Streifen schneiden und mit Reis und Curry in Boxen verteilen.

## Gyudon
en: Gyudon (beef rice bowl)
es: Gyudon
emoji: 🍚
typ: gericht
portionen: 4
tags: japan, asiatisch, rind, schnell
zutaten:
- Rinderhüftsteak (roh): 500 g
- Zwiebeln: 250 g
- Sojasoße: 60 g
- Mirin: 40 g
- Zucker: 15 g
- Dashi (zubereitet): 250 g
- Reis (trocken): 300 g
- Frühlingszwiebeln: 30 g
- Ingwer (eingelegt, Sushi): 40 g
zubereitung:
1. Reis kochen. Rindfleisch hauchdünn schneiden (halb angefroren geht es leichter).
2. Dashi, Sojasoße, Mirin und Zucker aufkochen, Zwiebelstreifen darin 5 Minuten weich köcheln.
3. Rindfleisch dazugeben und 2 Minuten ziehen lassen, bis es gar ist.
4. Über den Reis geben, mit Frühlingszwiebeln und eingelegtem Ingwer servieren.

## Oyakodon
en: Oyakodon
es: Oyakodon
emoji: 🍳
typ: gericht
portionen: 3
tags: japan, asiatisch, hähnchen, schnell
zutaten:
- Hähnchenschenkel (roh): 400 g
- Eier: 300 g
- Zwiebeln: 150 g
- Dashi (zubereitet): 200 g
- Sojasoße: 45 g
- Mirin: 30 g
- Zucker: 10 g
- Reis (trocken): 240 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Reis kochen. Dashi, Sojasoße, Mirin und Zucker in einer Pfanne aufkochen.
2. Zwiebelstreifen und Hähnchenstücke darin 8 Minuten garen.
3. Verquirlte Eier darübergießen, Deckel drauf und 1–2 Minuten stocken lassen – das Ei soll noch cremig sein.
4. Auf dem Reis anrichten, Frühlingszwiebeln drüberstreuen.

## Yaki Udon mit Hähnchen
en: Yaki udon with chicken
es: Yaki udon con pollo
emoji: 🍜
typ: gericht
portionen: 3
tags: japan, asiatisch, hähnchen, schnell, nudeln
zutaten:
- Udon-Nudeln (vorgekocht): 600 g
- Hähnchenbrust: 350 g
- Weißkohl: 250 g
- Karotten: 120 g
- Champignons: 150 g
- Sojasoße: 45 g
- Austernsoße: 30 g
- Mirin: 20 g
- Sesamöl: 10 g
- Öl: 15 g
zubereitung:
1. Hähnchen in Streifen schneiden und im Öl scharf anbraten, herausnehmen.
2. Kohl, Karotten und Pilze in Streifen 4 Minuten braten.
3. Udon kurz unter heißem Wasser lockern und mit dem Hähnchen dazugeben.
4. Mit Sojasoße, Austernsoße, Mirin und Sesamöl abschmecken und 2 Minuten durchschwenken.

## Lachs Teriyaki Bowl
en: Salmon teriyaki bowl
es: Bowl de salmón teriyaki
emoji: 🍣
typ: gericht
portionen: 3
tags: japan, asiatisch, lachs, fisch
zutaten:
- Lachs (roh): 450 g
- Teriyaki-Soße: 90 g
- Sushireis (roh): 240 g
- Edamame (TK, geschält): 150 g
- Gurke: 200 g
- Karotten: 100 g
- Sesam: 10 g
- Nori-Blatt: 6 g
zubereitung:
1. Sushireis nach Packung kochen.
2. Lachs in Würfel schneiden und in einer heißen Pfanne 3 Minuten anbraten, Teriyaki-Soße dazugeben und glasieren.
3. Edamame 3 Minuten kochen, Gurke und Karotte in feine Streifen schneiden.
4. Alles auf dem Reis verteilen, mit Sesam und Nori-Streifen bestreuen.

## Miso-Ramen mit Ei
en: Miso ramen with egg
es: Ramen de miso con huevo
emoji: 🍜
typ: gericht
portionen: 2
tags: japan, asiatisch, suppe, vegetarisch
zutaten:
- Ramen-Nudeln (frisch): 260 g
- Miso-Paste: 60 g
- Gemüsebrühe (zubereitet): 900 g
- Eier: 120 g
- Pak Choi: 200 g
- Mais (abgetropft): 80 g
- Champignons: 100 g
- Frühlingszwiebeln: 30 g
- Sesamöl: 8 g
- Knoblauch: 6 g
zubereitung:
1. Eier 6½ Minuten kochen, abschrecken und schälen.
2. Brühe mit Knoblauch aufkochen, Pilze und Pak Choi 3 Minuten darin garen.
3. Topf vom Herd nehmen und Miso einrühren (nicht mehr kochen lassen).
4. Nudeln separat kochen, in Schalen geben, Suppe darüber, mit halbiertem Ei, Mais, Frühlingszwiebeln und Sesamöl toppen.

## Okonomiyaki
en: Okonomiyaki
es: Okonomiyaki
emoji: 🥞
typ: gericht
portionen: 2
tags: japan, asiatisch, vegetarisch
zutaten:
- Weißkohl: 350 g
- Mehl: 120 g
- Eier: 150 g
- Dashi (zubereitet): 120 g
- Frühlingszwiebeln: 40 g
- Öl: 15 g
- Okonomiyaki-Soße: 40 g
- Japanische Mayonnaise (Kewpie): 25 g
zubereitung:
1. Kohl sehr fein schneiden. Mehl, Eier und Dashi zu einem dicken Teig rühren, Kohl und Frühlingszwiebeln unterheben.
2. Öl in einer Pfanne erhitzen, die Hälfte des Teigs als dicken Fladen hineingeben.
3. Bei mittlerer Hitze je Seite 5 Minuten braten.
4. Mit Okonomiyaki-Soße und Mayo im Gittermuster verzieren.

## Onigiri mit Thunfisch
en: Tuna onigiri
es: Onigiri de atún
emoji: 🍙
typ: gericht
portionen: 4
tags: japan, asiatisch, snack, fisch
zutaten:
- Sushireis (roh): 300 g
- Thunfisch (Dose, Wasser): 150 g
- Japanische Mayonnaise (Kewpie): 30 g
- Nori-Blatt: 12 g
- Sojasoße: 10 g
zubereitung:
1. Sushireis kochen und etwas abkühlen lassen.
2. Thunfisch mit Mayo und Sojasoße mischen.
3. Mit nassen Händen eine Portion Reis flachdrücken, Füllung in die Mitte, zu einem Dreieck formen.
4. Mit einem Nori-Streifen umwickeln. Ergibt 8 Stück.

## Bibimbap
en: Bibimbap
es: Bibimbap
emoji: 🥘
typ: gericht
portionen: 4
tags: korea, asiatisch, rind, mealprep
zutaten:
- Rinderhack: 400 g
- Reis (trocken): 300 g
- Spinat: 200 g
- Karotten: 150 g
- Bohnensprossen: 150 g
- Zucchini: 200 g
- Eier: 240 g
- Gochujang (Chilipaste): 60 g
- Sojasoße: 40 g
- Sesamöl: 15 g
- Knoblauch: 6 g
- Sesam: 10 g
zubereitung:
1. Reis kochen. Hack mit Knoblauch und 20 g Sojasoße krümelig braten.
2. Gemüse einzeln kurz braten bzw. blanchieren, jeweils mit etwas Sesamöl und Sojasoße würzen.
3. Spiegeleier braten.
4. Reis in Schalen, Gemüse und Hack nebeneinander darauf legen, Ei oben drauf. Mit Gochujang und Sesam servieren.

## Bulgogi mit Reis
en: Bulgogi with rice
es: Bulgogi con arroz
emoji: 🥩
typ: gericht
portionen: 4
tags: korea, asiatisch, rind, mealprep
zutaten:
- Rinderhüftsteak (roh): 600 g
- Sojasoße: 70 g
- Zucker: 20 g
- Apfel: 120 g
- Knoblauch: 10 g
- Sesamöl: 15 g
- Zwiebeln: 150 g
- Karotten: 120 g
- Frühlingszwiebeln: 40 g
- Reis (trocken): 300 g
- Sesam: 10 g
zubereitung:
1. Apfel reiben und mit Sojasoße, Zucker, Knoblauch und Sesamöl verrühren.
2. Fleisch in dünne Scheiben schneiden und 30 Minuten in der Marinade ziehen lassen.
3. Reis kochen. Fleisch mit Zwiebeln und Karotten in einer sehr heißen Pfanne 4–5 Minuten braten.
4. Mit Frühlingszwiebeln und Sesam auf Reis servieren.

## Japchae
en: Japchae
es: Japchae
emoji: 🍝
typ: gericht
portionen: 3
tags: korea, asiatisch, nudeln, vegetarisch
zutaten:
- Glasnudeln (roh): 200 g
- Spinat: 150 g
- Karotten: 120 g
- Paprika: 150 g
- Champignons: 150 g
- Zwiebeln: 100 g
- Sojasoße: 50 g
- Zucker: 12 g
- Sesamöl: 20 g
- Sesam: 10 g
- Knoblauch: 6 g
zubereitung:
1. Glasnudeln 6 Minuten kochen, abgießen und kürzen.
2. Gemüse in Streifen schneiden und nacheinander kurz braten.
3. Sojasoße, Zucker, Sesamöl und Knoblauch verrühren.
4. Nudeln, Gemüse und Soße in der Pfanne mischen und 2 Minuten erhitzen. Mit Sesam bestreuen.

## Kimchi-Bratreis
en: Kimchi fried rice
es: Arroz frito con kimchi
emoji: 🍳
typ: gericht
portionen: 2
tags: korea, asiatisch, schnell, resteverwertung
zutaten:
- Reis (trocken): 160 g
- Kimchi: 200 g
- Bacon: 60 g
- Eier: 120 g
- Gochujang (Chilipaste): 20 g
- Sojasoße: 15 g
- Frühlingszwiebeln: 20 g
- Öl: 10 g
- Sesam: 5 g
zubereitung:
1. Reis am Vortag kochen (kalter Reis brät am besten).
2. Bacon würfeln und knusprig braten, gehacktes Kimchi 3 Minuten mitbraten.
3. Reis, Gochujang und Sojasoße dazu, alles 4 Minuten scharf braten.
4. Mit Spiegelei, Frühlingszwiebeln und Sesam servieren.

## Korean Fried Chicken
en: Korean fried chicken
es: Pollo frito coreano
emoji: 🍗
typ: gericht
portionen: 4
tags: korea, asiatisch, hähnchen
zutaten:
- Hähnchenschenkel (roh): 700 g
- Speisestärke: 80 g
- Gochujang (Chilipaste): 50 g
- Honig: 40 g
- Sojasoße: 30 g
- Knoblauch: 10 g
- Öl: 40 g
- Sesam: 10 g
- Reis (trocken): 280 g
zubereitung:
1. Hähnchen in Stücke schneiden, salzen und in Stärke wälzen.
2. In Öl rundum 10–12 Minuten knusprig braten oder bei 210 °C 25 Minuten im Ofen backen.
3. Gochujang, Honig, Sojasoße und Knoblauch kurz aufkochen.
4. Hähnchen in der Soße schwenken, mit Sesam bestreuen und mit Reis servieren.

## Pad Thai mit Garnelen
en: Prawn pad thai
es: Pad thai de gambas
emoji: 🍜
typ: gericht
portionen: 3
tags: thailand, asiatisch, garnelen, nudeln
zutaten:
- Reisbandnudeln (roh): 250 g
- Garnelen: 300 g
- Eier: 120 g
- Bohnensprossen: 150 g
- Frühlingszwiebeln: 40 g
- Tamarindenpaste: 30 g
- Fischsoße: 30 g
- Palmzucker: 25 g
- Erdnüsse (geröstet, ungesalzen): 40 g
- Limette: 60 g
- Öl: 20 g
- Knoblauch: 6 g
zubereitung:
1. Nudeln 8 Minuten in heißem Wasser einweichen und abgießen.
2. Tamarinde, Fischsoße und Palmzucker verrühren.
3. Knoblauch und Garnelen im Öl 2 Minuten braten, an den Rand schieben, Eier hineinschlagen und verrühren.
4. Nudeln und Soße dazugeben, 2 Minuten schwenken, Sprossen und Frühlingszwiebeln unterheben. Mit Erdnüssen und Limette servieren.

## Grünes Thai-Curry mit Hähnchen
en: Thai green chicken curry
es: Curry verde tailandés con pollo
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: thailand, asiatisch, hähnchen, curry, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Grüne Currypaste: 60 g
- Kokosmilch: 400 g
- Thai-Aubergine: 200 g
- Paprika: 150 g
- Bambussprossen (Dose): 150 g
- Fischsoße: 20 g
- Palmzucker: 10 g
- Thai-Basilikum: 15 g
- Kaffirlimettenblätter: 2 g
- Öl: 10 g
zubereitung:
1. Currypaste im Öl 1 Minute anrösten, die Hälfte der Kokosmilch dazu und aufkochen.
2. Hähnchenstücke darin 5 Minuten garen.
3. Restliche Kokosmilch, Gemüse und Limettenblätter dazugeben, 8 Minuten köcheln.
4. Mit Fischsoße und Palmzucker abschmecken, Thai-Basilikum unterrühren.

## Rotes Curry mit Kürbis & Tofu
en: Red curry with pumpkin & tofu
es: Curry rojo con calabaza y tofu
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: thailand, asiatisch, tofu, vegan, curry, mealprep
zutaten:
- Tofu (fest): 400 g
- Kürbis (Hokkaido): 500 g
- Rote Currypaste: 50 g
- Kokosmilch: 400 g
- Paprika: 150 g
- Sojasoße: 25 g
- Limette: 60 g
- Thai-Basilikum: 15 g
- Öl: 15 g
zubereitung:
1. Tofu würfeln und im Öl rundum knusprig braten, herausnehmen.
2. Currypaste kurz anrösten, Kokosmilch und 150 ml Wasser angießen.
3. Kürbiswürfel 12 Minuten darin köcheln, Paprika die letzten 5 Minuten mitgaren.
4. Tofu zurück in den Topf, mit Sojasoße und Limettensaft abschmecken, Basilikum drüber.

## Massaman-Curry mit Rind
en: Beef massaman curry
es: Curry massaman de ternera
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: thailand, asiatisch, rind, curry
zutaten:
- Gulaschfleisch (Rind): 600 g
- Massaman-Currypaste: 70 g
- Kokosmilch: 400 g
- Kartoffeln (festkochend): 400 g
- Zwiebeln: 150 g
- Erdnüsse (geröstet, ungesalzen): 40 g
- Tamarindenpaste: 15 g
- Fischsoße: 20 g
- Palmzucker: 15 g
zubereitung:
1. Currypaste in etwas dicker Kokosmilch anrösten, Fleisch dazu und rundum anbraten.
2. Restliche Kokosmilch und 300 ml Wasser angießen, zugedeckt 75 Minuten schmoren.
3. Kartoffel- und Zwiebelstücke dazu und weitere 25 Minuten köcheln.
4. Mit Tamarinde, Fischsoße und Palmzucker abschmecken, Erdnüsse drüberstreuen.

## Pad Kra Pao
en: Pad kra pao (Thai basil chicken)
es: Pad kra pao
emoji: 🌶️
typ: gericht
portionen: 3
tags: thailand, asiatisch, hähnchen, schnell
zutaten:
- Hähnchenbrust: 450 g
- Thai-Basilikum: 30 g
- Knoblauch: 12 g
- Austernsoße: 30 g
- Sojasoße: 20 g
- Fischsoße: 10 g
- Zucker: 8 g
- Paprika: 150 g
- Eier: 180 g
- Reis (trocken): 240 g
- Öl: 20 g
zubereitung:
1. Reis kochen. Hähnchen sehr fein hacken.
2. Knoblauch im Öl anbraten, Hähnchen dazu und krümelig braten.
3. Paprika, Austernsoße, Sojasoße, Fischsoße und Zucker dazugeben, 3 Minuten braten.
4. Basilikum unterheben. Mit Reis und einem knusprigen Spiegelei servieren.

## Tom Kha Gai
en: Tom kha gai
es: Tom kha gai
emoji: 🥥
typ: gericht
portionen: 3
tags: thailand, asiatisch, suppe, hähnchen
zutaten:
- Hähnchenbrust: 350 g
- Kokosmilch: 400 g
- Hühnerbrühe (zubereitet): 500 g
- Galgant: 20 g
- Zitronengras: 30 g
- Kaffirlimettenblätter: 3 g
- Champignons: 200 g
- Fischsoße: 25 g
- Limette: 60 g
- Koriander (frisch): 10 g
zubereitung:
1. Brühe mit Galgant, Zitronengras und Limettenblättern 10 Minuten köcheln.
2. Kokosmilch, Hähnchenstreifen und Pilze dazu und 8 Minuten sanft garen.
3. Mit Fischsoße und Limettensaft abschmecken.
4. Mit Koriander servieren (Galgant und Zitronengras nicht mitessen).

## Pho Bo
en: Pho bo (beef noodle soup)
es: Pho bo
emoji: 🍜
typ: gericht
portionen: 3
tags: vietnam, asiatisch, suppe, rind
zutaten:
- Reisbandnudeln (roh): 200 g
- Rinderhüftsteak (roh): 300 g
- Hühnerbrühe (zubereitet): 1200 g
- Zwiebeln: 150 g
- Ingwer (frisch): 20 g
- Fischsoße: 30 g
- Bohnensprossen: 150 g
- Thai-Basilikum: 15 g
- Limette: 60 g
- Frühlingszwiebeln: 30 g
zubereitung:
1. Zwiebel und Ingwer halbieren und in einer trockenen Pfanne schwarz rösten.
2. Mit der Brühe 30 Minuten köcheln, mit Fischsoße abschmecken.
3. Nudeln einweichen bzw. kurz kochen und in Schalen verteilen, rohes Rindfleisch hauchdünn darauflegen.
4. Kochend heiße Brühe darüber gießen, das gart das Fleisch. Mit Sprossen, Basilikum, Limette und Frühlingszwiebeln.

## Bun Cha
en: Bun cha
es: Bun cha
emoji: 🥢
typ: gericht
portionen: 3
tags: vietnam, asiatisch, schwein
zutaten:
- Hackfleisch gemischt: 450 g
- Reisbandnudeln (roh): 200 g
- Fischsoße: 45 g
- Zucker: 25 g
- Limette: 60 g
- Knoblauch: 8 g
- Karotten: 100 g
- Salatmischung (Tüte): 100 g
- Gurke: 150 g
- Minze (frisch): 10 g
zubereitung:
1. Hack mit 15 g Fischsoße, 5 g Zucker und Knoblauch verkneten, kleine Patties formen und von beiden Seiten 4 Minuten braten.
2. Restliche Fischsoße, Zucker, Limettensaft und 150 ml Wasser zum Dip verrühren, Karottenscheiben hineinlegen.
3. Nudeln kochen.
4. Nudeln, Salat, Gurke und Minze mit den Patties servieren, alles in den Dip tunken.

## Sommerrollen mit Garnelen
en: Summer rolls with prawns
es: Rollitos vietnamitas con gambas
emoji: 🥬
typ: gericht
portionen: 3
tags: vietnam, asiatisch, garnelen, leicht
zutaten:
- Reispapier: 120 g
- Garnelen: 250 g
- Reisbandnudeln (roh): 80 g
- Gurke: 150 g
- Karotten: 120 g
- Salatmischung (Tüte): 80 g
- Minze (frisch): 10 g
- Erdnussbutter: 40 g
- Hoisin-Soße: 40 g
zubereitung:
1. Nudeln kochen und abkühlen lassen, Garnelen halbieren.
2. Reispapier einzeln 5 Sekunden in warmes Wasser tauchen.
3. Salat, Nudeln, Gemüse, Minze und Garnelen darauflegen, Seiten einschlagen und fest aufrollen.
4. Erdnussbutter mit Hoisin und etwas warmem Wasser zum Dip verrühren.

## Banh Mi mit Hähnchen
en: Chicken banh mi
es: Banh mi de pollo
emoji: 🥖
typ: gericht
portionen: 4
tags: vietnam, asiatisch, hähnchen
zutaten:
- Baguette: 400 g
- Hähnchenbrust: 400 g
- Sojasoße: 30 g
- Honig: 15 g
- Karotten: 150 g
- Daikon-Rettich: 150 g
- Reisessig: 40 g
- Zucker: 15 g
- Gurke: 150 g
- Koriander (frisch): 15 g
- Mayonnaise: 40 g
- Sriracha: 20 g
zubereitung:
1. Karotte und Rettich in Streifen schneiden und mit Reisessig und Zucker 20 Minuten einlegen.
2. Hähnchen mit Sojasoße und Honig marinieren und 6 Minuten je Seite braten, in Scheiben schneiden.
3. Baguette in 4 Stücke teilen, aufschneiden und mit Sriracha-Mayo bestreichen.
4. Mit Hähnchen, eingelegtem Gemüse, Gurke und Koriander füllen.

## Chicken Tikka Masala
en: Chicken tikka masala
es: Pollo tikka masala
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Joghurt natur: 150 g
- Garam Masala: 12 g
- Kurkuma: 4 g
- Passierte Tomaten: 400 g
- Kochsahne (15 %): 150 g
- Zwiebeln: 150 g
- Knoblauch: 10 g
- Ingwer (frisch): 15 g
- Öl: 15 g
- Koriander (frisch): 10 g
zubereitung:
1. Hähnchen würfeln und mit Joghurt, der Hälfte Garam Masala und Kurkuma mindestens 30 Minuten marinieren.
2. Fleisch im heißen Öl scharf anbraten und herausnehmen.
3. Zwiebeln, Knoblauch und Ingwer anschwitzen, restliches Garam Masala und Tomaten dazu, 10 Minuten köcheln.
4. Sahne und Hähnchen zugeben, 5 Minuten ziehen lassen, mit Koriander servieren.

## Butter Chicken
en: Butter chicken
es: Pollo a la mantequilla
emoji: 🧈
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, hähnchen
zutaten:
- Hähnchenschenkel (roh): 600 g
- Joghurt natur: 120 g
- Garam Masala: 12 g
- Butter: 40 g
- Tomatenmark: 40 g
- Passierte Tomaten: 400 g
- Kochsahne (15 %): 200 g
- Zwiebeln: 120 g
- Knoblauch: 10 g
- Ingwer (frisch): 15 g
- Honig: 10 g
zubereitung:
1. Hähnchen mit Joghurt und der Hälfte Garam Masala marinieren, dann in einer heißen Pfanne anbraten.
2. Butter schmelzen, Zwiebeln, Knoblauch und Ingwer weich dünsten.
3. Tomatenmark, restliches Gewürz und passierte Tomaten 10 Minuten köcheln, fein pürieren.
4. Sahne, Honig und Hähnchen dazugeben, 10 Minuten sanft ziehen lassen.

## Palak Paneer
en: Palak paneer
es: Palak paneer
emoji: 🥬
typ: sauce
beilage: reis
portionen: 3
tags: indien, curry, vegetarisch
zutaten:
- Paneer: 250 g
- Spinat: 600 g
- Zwiebeln: 120 g
- Knoblauch: 10 g
- Ingwer (frisch): 15 g
- Garam Masala: 8 g
- Kreuzkümmel: 4 g
- Kochsahne (15 %): 100 g
- Öl: 20 g
zubereitung:
1. Spinat 2 Minuten blanchieren, abschrecken und fein pürieren.
2. Paneer würfeln und in der Hälfte des Öls goldbraun braten.
3. Zwiebeln, Knoblauch, Ingwer und Gewürze im restlichen Öl anschwitzen, Spinat dazu und 5 Minuten köcheln.
4. Sahne und Paneer unterrühren und kurz erhitzen.

## Chana Masala
en: Chana masala
es: Chana masala
emoji: 🫘
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, vegan, kichererbsen, mealprep
zutaten:
- Kichererbsen (abgetropft): 500 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 200 g
- Knoblauch: 10 g
- Ingwer (frisch): 15 g
- Garam Masala: 10 g
- Kreuzkümmel: 4 g
- Kurkuma: 3 g
- Öl: 20 g
- Zitrone: 40 g
- Koriander (frisch): 10 g
zubereitung:
1. Zwiebeln im Öl goldbraun braten, Knoblauch, Ingwer und Gewürze 1 Minute mitrösten.
2. Tomaten und Kichererbsen dazugeben, 20 Minuten köcheln.
3. Einige Kichererbsen mit der Gabel zerdrücken, damit die Soße bindet.
4. Mit Zitronensaft und Koriander abschmecken.

## Hähnchen-Biryani
en: Chicken biryani
es: Biryani de pollo
emoji: 🍚
typ: gericht
portionen: 4
tags: indien, reis, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 600 g
- Basmatireis (roh): 300 g
- Joghurt natur: 150 g
- Zwiebeln: 250 g
- Garam Masala: 12 g
- Kurkuma: 4 g
- Knoblauch: 10 g
- Ingwer (frisch): 15 g
- Erbsen (TK): 150 g
- Öl: 25 g
- Minze (frisch): 10 g
zubereitung:
1. Hähnchen mit Joghurt, Gewürzen, Knoblauch und Ingwer marinieren.
2. Zwiebeln in Ringen im Öl dunkelgolden braten, die Hälfte beiseitelegen.
3. Hähnchen zu den Zwiebeln geben und 10 Minuten braten. Reis 5 Minuten vorkochen und abgießen.
4. Reis und Erbsen über das Hähnchen schichten, 200 ml Wasser angießen, zugedeckt 20 Minuten auf kleiner Hitze garen. Mit Röstzwiebeln und Minze servieren.

## Dal Tadka
en: Dal tadka
es: Dal tadka
emoji: 🍲
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, vegan, linsen, mealprep
zutaten:
- Rote Linsen (trocken): 300 g
- Tomaten: 200 g
- Zwiebeln: 150 g
- Knoblauch: 10 g
- Ingwer (frisch): 15 g
- Kurkuma: 4 g
- Kreuzkümmel: 5 g
- Garam Masala: 6 g
- Öl: 20 g
- Koriander (frisch): 10 g
zubereitung:
1. Linsen mit Kurkuma und 900 ml Wasser 20 Minuten weich kochen.
2. Tomaten würfeln und unterrühren.
3. Für das Tadka Kreuzkümmel im heißen Öl anrösten, Zwiebeln, Knoblauch und Ingwer goldbraun braten, Garam Masala dazu.
4. Tadka über das Dal geben, mit Koriander servieren.

## Nasi Lemak
en: Nasi lemak
es: Nasi lemak
emoji: 🍚
typ: gericht
portionen: 3
tags: malaysia, asiatisch, hähnchen
zutaten:
- Reis (trocken): 240 g
- Kokosmilch: 200 g
- Hähnchenschenkel (roh): 450 g
- Erdnüsse (geröstet, ungesalzen): 50 g
- Gurke: 150 g
- Eier: 180 g
- Sambal Oelek: 40 g
- Zwiebeln: 100 g
- Öl: 20 g
zubereitung:
1. Reis in Kokosmilch und 250 ml Wasser garen.
2. Eier hart kochen. Hähnchen salzen und im Öl knusprig braten.
3. Zwiebeln mit Sambal 5 Minuten zu einer würzigen Soße schmoren.
4. Kokosreis mit Hähnchen, halbiertem Ei, Gurke, Erdnüssen und Sambal anrichten.

## Chicken Adobo
en: Chicken adobo
es: Adobo de pollo
emoji: 🍗
typ: sauce
beilage: reis
portionen: 4
tags: philippinen, asiatisch, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 800 g
- Sojasoße: 80 g
- Essig (Weißwein): 60 g
- Knoblauch: 20 g
- Lorbeerblatt: 1 g
- Pfefferkörner: 3 g
- Zucker: 10 g
- Öl: 10 g
zubereitung:
1. Hähnchen mit Sojasoße, Essig, Knoblauch und Gewürzen 30 Minuten marinieren.
2. Hähnchen aus der Marinade nehmen und im Öl rundum anbraten.
3. Marinade und 150 ml Wasser angießen, zugedeckt 30 Minuten schmoren.
4. Deckel ab, Zucker dazu und die Soße 10 Minuten sirupartig einkochen.

## Mapo Tofu
en: Mapo tofu
es: Mapo tofu
emoji: 🌶️
typ: sauce
beilage: reis
portionen: 3
tags: china, asiatisch, tofu, scharf
zutaten:
- Tofu (Seidentofu): 400 g
- Hackfleisch gemischt: 200 g
- Doenjang (Sojabohnenpaste): 30 g
- Chiliöl (Lao Gan Ma): 20 g
- Sichuanpfeffer: 2 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Hühnerbrühe (zubereitet): 250 g
- Speisestärke: 10 g
- Frühlingszwiebeln: 30 g
- Öl: 10 g
zubereitung:
1. Tofu in Würfel schneiden und in heißem Salzwasser 2 Minuten ziehen lassen.
2. Hack im Öl krümelig braten, Knoblauch, Ingwer, Bohnenpaste und Chiliöl 1 Minute mitbraten.
3. Brühe angießen, Tofu vorsichtig dazugeben, 5 Minuten köcheln.
4. Mit angerührter Stärke binden, mit zerstoßenem Sichuanpfeffer und Frühlingszwiebeln bestreuen.

## Kung-Pao-Hähnchen
en: Kung pao chicken
es: Pollo kung pao
emoji: 🥜
typ: sauce
beilage: reis
portionen: 4
tags: china, asiatisch, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Erdnüsse (geröstet, ungesalzen): 60 g
- Paprika: 200 g
- Zucchini: 200 g
- Sojasoße: 50 g
- Reisessig: 20 g
- Zucker: 15 g
- Speisestärke: 15 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Sichuanpfeffer: 2 g
- Öl: 20 g
zubereitung:
1. Hähnchen würfeln und mit 10 g Stärke und 10 g Sojasoße mischen.
2. Im Öl scharf anbraten, Knoblauch, Ingwer und Sichuanpfeffer dazu.
3. Gemüse dazu und 4 Minuten mitbraten.
4. Restliche Sojasoße, Essig, Zucker und Stärke mit 80 ml Wasser verrühren, angießen und eindicken lassen. Erdnüsse unterheben.

## Gebratener Reis mit Ei & Gemüse
en: Egg fried rice with vegetables
es: Arroz frito con huevo y verduras
emoji: 🍳
typ: gericht
portionen: 3
tags: china, asiatisch, vegetarisch, schnell, resteverwertung
zutaten:
- Reis (trocken): 240 g
- Eier: 180 g
- Erbsen (TK): 150 g
- Karotten: 120 g
- Mais (abgetropft): 100 g
- Frühlingszwiebeln: 40 g
- Sojasoße: 40 g
- Sesamöl: 10 g
- Öl: 15 g
zubereitung:
1. Reis am Vortag kochen und kalt stellen.
2. Karottenwürfel im Öl 3 Minuten braten, Erbsen und Mais dazu.
3. Gemüse zur Seite schieben, Eier hineinschlagen und stocken lassen.
4. Reis dazugeben und 4 Minuten scharf braten, mit Sojasoße, Sesamöl und Frühlingszwiebeln abschmecken.

## Rindfleisch mit Brokkoli
en: Beef and broccoli
es: Ternera con brócoli
emoji: 🥦
typ: sauce
beilage: reis
portionen: 4
tags: china, asiatisch, rind, mealprep
zutaten:
- Rinderhüftsteak (roh): 500 g
- Brokkoli: 500 g
- Austernsoße: 50 g
- Sojasoße: 40 g
- Zucker: 10 g
- Speisestärke: 15 g
- Knoblauch: 10 g
- Ingwer (frisch): 10 g
- Öl: 20 g
zubereitung:
1. Rind in dünne Streifen schneiden und mit 5 g Stärke und 10 g Sojasoße mischen.
2. Brokkoli 2 Minuten blanchieren.
3. Rind im heißen Öl portionsweise 1–2 Minuten braten, Knoblauch und Ingwer dazu.
4. Austernsoße, restliche Sojasoße, Zucker und Stärke mit 100 ml Wasser angießen, Brokkoli unterheben und aufkochen.

## Dan-Dan-Nudeln
en: Dan dan noodles
es: Fideos dan dan
emoji: 🍜
typ: gericht
portionen: 2
tags: china, asiatisch, nudeln, scharf
zutaten:
- Mie-Nudeln (roh): 200 g
- Hackfleisch gemischt: 200 g
- Pak Choi: 200 g
- Tahin: 30 g
- Sojasoße: 30 g
- Chiliöl (Lao Gan Ma): 20 g
- Reisessig: 10 g
- Zucker: 5 g
- Sichuanpfeffer: 1 g
- Frühlingszwiebeln: 20 g
- Erdnüsse (geröstet, ungesalzen): 20 g
zubereitung:
1. Hack mit 10 g Sojasoße krümelig und knusprig braten.
2. Tahin, restliche Sojasoße, Chiliöl, Essig und Zucker mit 80 ml heißem Wasser zur Soße verrühren.
3. Nudeln kochen, Pak Choi die letzte Minute mitgaren.
4. Soße in Schalen, Nudeln darauf, Hack, Erdnüsse, Frühlingszwiebeln und Sichuanpfeffer oben drauf.

## Gyoza mit Schwein und Kohl
en: Pork and cabbage gyoza
es: Gyoza de cerdo y col
emoji: 🥟
typ: gericht
portionen: 3
tags: japan, china, asiatisch, schwein
zutaten:
- Gyoza-Teigblätter: 240 g
- Hackfleisch gemischt: 300 g
- Chinakohl: 200 g
- Frühlingszwiebeln: 30 g
- Ingwer (frisch): 10 g
- Knoblauch: 6 g
- Sojasoße: 40 g
- Sesamöl: 10 g
- Reisessig: 15 g
- Öl: 15 g
zubereitung:
1. Kohl fein hacken, salzen und nach 10 Minuten gut ausdrücken.
2. Mit Hack, Frühlingszwiebeln, Ingwer, Knoblauch, 15 g Sojasoße und Sesamöl verkneten.
3. Je 1 TL Füllung auf ein Teigblatt, Rand befeuchten und zu Halbmonden falten.
4. Im Öl von unten goldbraun braten, 80 ml Wasser angießen, zugedeckt 6 Minuten dämpfen. Restliche Sojasoße mit Essig als Dip.

## Rendang
en: Beef rendang
es: Rendang de ternera
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: indonesien, asiatisch, rind, curry
zutaten:
- Gulaschfleisch (Rind): 700 g
- Kokosmilch: 400 g
- Rote Currypaste: 50 g
- Zitronengras: 30 g
- Galgant: 20 g
- Kaffirlimettenblätter: 3 g
- Palmzucker: 15 g
- Zwiebeln: 150 g
- Knoblauch: 10 g
- Öl: 15 g
zubereitung:
1. Zwiebeln, Knoblauch und Currypaste im Öl 3 Minuten anrösten.
2. Fleisch dazu und rundum anbraten.
3. Kokosmilch, Zitronengras, Galgant und Limettenblätter dazugeben, offen etwa 2 Stunden schmoren, bis die Soße fast eingekocht ist.
4. Mit Palmzucker abschmecken, gelegentlich umrühren, damit nichts ansetzt.

## Gado-Gado
en: Gado-gado
es: Gado-gado
emoji: 🥗
typ: gericht
portionen: 3
tags: indonesien, asiatisch, vegetarisch, salat
zutaten:
- Kartoffeln (festkochend): 300 g
- Bohnensprossen: 150 g
- Karotten: 150 g
- Gurke: 150 g
- Eier: 180 g
- Tofu (fest): 200 g
- Erdnussbutter: 80 g
- Sojasoße: 30 g
- Limette: 60 g
- Sambal Oelek: 15 g
- Kokosmilch: 100 g
zubereitung:
1. Kartoffeln und Eier kochen, Karotten kurz blanchieren.
2. Tofu würfeln und knusprig braten.
3. Erdnussbutter mit Kokosmilch, Sojasoße, Limettensaft und Sambal glatt rühren.
4. Alles auf Tellern anrichten und mit der Erdnusssoße übergießen.

## Hähnchen-Satay mit Erdnusssoße
en: Chicken satay with peanut sauce
es: Satay de pollo con salsa de cacahuete
emoji: 🍢
typ: gericht
portionen: 4
tags: indonesien, thailand, asiatisch, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Sojasoße: 40 g
- Kurkuma: 3 g
- Honig: 15 g
- Erdnussbutter: 80 g
- Kokosmilch light (Dose): 150 g
- Limette: 60 g
- Sambal Oelek: 15 g
- Reis (trocken): 280 g
- Gurke: 200 g
zubereitung:
1. Hähnchen in Streifen schneiden, mit 20 g Sojasoße, Kurkuma und Honig marinieren und auf Spieße stecken.
2. Spieße in einer Grillpfanne oder unter dem Ofengrill je Seite 4 Minuten braten.
3. Erdnussbutter, Kokosmilch, restliche Sojasoße, Limettensaft und Sambal erwärmen und glatt rühren.
4. Mit Reis, Gurke und Soße servieren.

## Shakshuka mit Feta
en: Shakshuka with feta
es: Shakshuka con feta
emoji: 🍳
typ: gericht
portionen: 2
tags: nahost, vegetarisch, eier, schnell
zutaten:
- Eier: 240 g
- Gehackte Tomaten (Dose): 400 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Knoblauch: 6 g
- Kreuzkümmel: 3 g
- Feta: 60 g
- Olivenöl: 10 g
- Petersilie (frisch): 10 g
zubereitung:
1. Zwiebeln und Paprika im Olivenöl 6 Minuten weich braten, Knoblauch und Kreuzkümmel dazu.
2. Tomaten angießen und 10 Minuten zu einer dicken Soße köcheln.
3. Mulden formen, Eier hineinschlagen, zugedeckt 6 Minuten stocken lassen.
4. Feta und Petersilie darüberstreuen.

## Hähnchen-Shawarma-Bowl
en: Chicken shawarma bowl
es: Bowl de shawarma de pollo
emoji: 🥙
typ: gericht
portionen: 4
tags: nahost, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 600 g
- Joghurt natur: 150 g
- Kreuzkümmel: 5 g
- Kurkuma: 3 g
- Knoblauch: 10 g
- Zitrone: 60 g
- Couscous (trocken): 240 g
- Gurke: 200 g
- Tomaten: 200 g
- Tahin: 40 g
- Olivenöl: 15 g
zubereitung:
1. Hähnchen mit 50 g Joghurt, Gewürzen, Knoblauch und Zitronensaft marinieren.
2. Im Olivenöl oder bei 220 °C im Ofen 20 Minuten braten, dann in Streifen schneiden.
3. Couscous mit kochendem Wasser übergießen und 5 Minuten quellen lassen.
4. Restlichen Joghurt mit Tahin verrühren. Alles mit Gurke und Tomate in Boxen verteilen.

## Falafel-Bowl mit Hummus
en: Falafel bowl with hummus
es: Bowl de falafel con hummus
emoji: 🧆
typ: gericht
portionen: 3
tags: nahost, vegan, kichererbsen
zutaten:
- Falafel (TK, gebacken): 300 g
- Hummus: 150 g
- Bulgur (roh): 180 g
- Gurke: 200 g
- Tomaten: 200 g
- Rotkraut / Apfelrotkohl (Glas): 150 g
- Petersilie (frisch): 15 g
- Zitrone: 40 g
- Olivenöl: 10 g
zubereitung:
1. Bulgur mit doppelter Menge kochendem Wasser übergießen und 15 Minuten quellen lassen.
2. Falafel im Ofen nach Packung knusprig backen.
3. Gurke und Tomaten würfeln, mit Petersilie, Zitrone und Öl mischen.
4. Bulgur, Salat, Rotkohl, Falafel und Hummus in Schalen anrichten.

## Köfte mit Bulgur und Joghurt
en: Köfte with bulgur and yoghurt
es: Köfte con bulgur y yogur
emoji: 🍢
typ: gericht
portionen: 4
tags: türkei, rind, mealprep
zutaten:
- Rinderhack: 500 g
- Zwiebeln: 100 g
- Petersilie (frisch): 15 g
- Kreuzkümmel: 4 g
- Paprika: 200 g
- Bulgur (roh): 240 g
- Tomatenmark: 30 g
- Joghurt natur: 200 g
- Knoblauch: 6 g
- Olivenöl: 15 g
zubereitung:
1. Hack mit geriebener Zwiebel, Petersilie und Kreuzkümmel verkneten und zu länglichen Köfte formen.
2. Köfte im Öl rundum 8 Minuten braten.
3. Bulgur mit Tomatenmark anschwitzen, mit 480 ml Wasser 12 Minuten garen, Paprikawürfel unterheben.
4. Joghurt mit Knoblauch verrühren und dazu servieren.

## Türkische Linsensuppe
en: Turkish lentil soup
es: Sopa de lentejas turca
emoji: 🍲
typ: gericht
portionen: 4
tags: türkei, suppe, vegan, linsen, mealprep
zutaten:
- Rote Linsen (trocken): 250 g
- Zwiebeln: 150 g
- Karotten: 150 g
- Kartoffeln (mehlig): 150 g
- Tomatenmark: 30 g
- Gemüsebrühe (zubereitet): 1200 g
- Kreuzkümmel: 4 g
- Olivenöl: 15 g
- Zitrone: 60 g
zubereitung:
1. Zwiebeln, Karotten und Kartoffeln würfeln und im Öl anschwitzen, Tomatenmark kurz mitrösten.
2. Linsen, Brühe und Kreuzkümmel dazu und 25 Minuten köcheln.
3. Fein pürieren.
4. Mit Zitronensaft servieren.

## Moussaka-Pfanne leicht
en: Light moussaka skillet
es: Musaca ligera en sartén
emoji: 🍆
typ: gericht
portionen: 4
tags: griechenland, rind, mealprep
zutaten:
- Rinderhack: 450 g
- Aubergine: 500 g
- Zwiebeln: 120 g
- Gehackte Tomaten (Dose): 400 g
- Zimt (gemahlen): 2 g
- Knoblauch: 8 g
- Feta: 100 g
- Kartoffeln (festkochend): 400 g
- Olivenöl: 15 g
zubereitung:
1. Kartoffeln in Scheiben 10 Minuten vorkochen.
2. Hack mit Zwiebeln und Knoblauch im Öl krümelig braten, Auberginenwürfel 5 Minuten mitbraten.
3. Tomaten und Zimt dazu und 15 Minuten köcheln.
4. Kartoffeln unterheben, Feta darüberbröseln und kurz überbacken oder zugedeckt schmelzen lassen.

## Souvlaki mit Tzatziki und Reis
en: Souvlaki with tzatziki and rice
es: Souvlaki con tzatziki y arroz
emoji: 🍢
typ: gericht
portionen: 4
tags: griechenland, schwein, mealprep
zutaten:
- Schweinekarree / Karreesteak (roh): 600 g
- Zitrone: 60 g
- Oregano (getrocknet): 3 g
- Knoblauch: 8 g
- Olivenöl: 20 g
- Reis (trocken): 280 g
- Tzatziki: 200 g
- Tomaten: 200 g
- Gurke: 150 g
- Zwiebeln: 60 g
zubereitung:
1. Fleisch würfeln, mit Zitronensaft, Oregano, Knoblauch und Öl marinieren und auf Spieße stecken.
2. Reis kochen.
3. Spieße in der Grillpfanne rundum 10 Minuten braten.
4. Mit Reis, Tzatziki und einem Salat aus Tomate, Gurke und Zwiebel servieren.

## Chicken Fajita Bowl
en: Chicken fajita bowl
es: Bowl de fajitas de pollo
emoji: 🌯
typ: gericht
portionen: 4
tags: mexiko, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Paprika: 400 g
- Zwiebeln: 150 g
- Taco-Gewürz: 25 g
- Reis (trocken): 280 g
- Schwarze Bohnen (Dose): 250 g
- Mais (abgetropft): 150 g
- Avocado: 150 g
- Limette: 60 g
- Öl: 15 g
zubereitung:
1. Reis kochen. Hähnchen in Streifen schneiden und mit Taco-Gewürz mischen.
2. Im Öl scharf anbraten, Paprika und Zwiebeln in Streifen dazu und 6 Minuten braten.
3. Bohnen und Mais erwärmen.
4. Alles auf Reis verteilen, Avocado erst kurz vor dem Essen dazu, Limettensaft drüber.

## Carnitas-Tacos
en: Carnitas tacos
es: Tacos de carnitas
emoji: 🌮
typ: gericht
portionen: 4
tags: mexiko, schwein
zutaten:
- Schweinekarree / Karreesteak (roh): 700 g
- Orangensaft: 150 g
- Limette: 60 g
- Kreuzkümmel: 4 g
- Oregano (getrocknet): 3 g
- Knoblauch: 10 g
- Zwiebeln: 150 g
- Tortilla-Wrap: 320 g
- Koriander (frisch): 15 g
- Salsa (Dip): 120 g
zubereitung:
1. Fleisch in große Würfel schneiden, mit Gewürzen, Knoblauch, Zwiebel, Orangen- und Limettensaft in einen Topf geben.
2. Zugedeckt 2 Stunden schmoren, bis es zerfällt.
3. Fleisch zerzupfen und in der Pfanne knusprig anbraten.
4. In warmen Tortillas mit Salsa und Koriander servieren.

## Chili con Carne mit Schoko
en: Chilli con carne with chocolate
es: Chili con carne con chocolate
emoji: 🌶️
typ: sauce
beilage: reis
portionen: 5
tags: mexiko, usa, rind, mealprep
zutaten:
- Rinderhack: 500 g
- Kidneybohnen (abgetropft): 400 g
- Mais (abgetropft): 150 g
- Gehackte Tomaten (Dose): 800 g
- Zwiebeln: 150 g
- Paprika: 200 g
- Kreuzkümmel: 5 g
- Chilipulver: 3 g
- Schokolade (Zartbitter): 20 g
- Öl: 10 g
zubereitung:
1. Hack im Öl krümelig braten, Zwiebeln und Paprika 5 Minuten mitbraten.
2. Gewürze kurz mitrösten, Tomaten dazu und 30 Minuten köcheln.
3. Bohnen und Mais unterrühren, weitere 10 Minuten köcheln.
4. Zum Schluss die Schokolade einrühren – das macht das Chili rund und tief im Geschmack.

## Jambalaya
en: Jambalaya
es: Jambalaya
emoji: 🍤
typ: gericht
portionen: 4
tags: usa, reis, hähnchen, garnelen
zutaten:
- Hähnchenbrust: 350 g
- Garnelen: 250 g
- Chorizo: 120 g
- Reis (trocken): 280 g
- Paprika: 200 g
- Staudensellerie: 120 g
- Zwiebeln: 120 g
- Gehackte Tomaten (Dose): 400 g
- Hühnerbrühe (zubereitet): 600 g
- Paprikapulver (edelsüß): 5 g
- Öl: 10 g
zubereitung:
1. Chorizo und Hähnchenwürfel im Öl anbraten.
2. Zwiebel, Paprika und Sellerie 5 Minuten mitbraten, Paprikapulver dazu.
3. Reis, Tomaten und Brühe einrühren, zugedeckt 18 Minuten köcheln.
4. Garnelen obenauf legen und weitere 5 Minuten garen.

## Pulled Chicken Sweet Potato
en: Pulled chicken with sweet potato
es: Pollo desmechado con boniato
emoji: 🍠
typ: gericht
portionen: 4
tags: usa, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 700 g
- BBQ-Soße: 120 g
- Paprikapulver (edelsüß): 5 g
- Süßkartoffel: 800 g
- Weißkohl: 300 g
- Karotten: 100 g
- Joghurt natur: 100 g
- Olivenöl: 15 g
zubereitung:
1. Hähnchen mit Paprikapulver würzen und mit 200 ml Wasser zugedeckt 25 Minuten schmoren.
2. Mit zwei Gabeln zerzupfen und mit BBQ-Soße mischen.
3. Süßkartoffelspalten mit Öl bei 210 °C 30 Minuten backen.
4. Kohl und Karotte fein reiben, mit Joghurt zum Coleslaw mischen. Alles auf Boxen verteilen.

## Jollof-Reis mit Hähnchen
en: Jollof rice with chicken
es: Arroz jollof con pollo
emoji: 🍚
typ: gericht
portionen: 4
tags: afrika, reis, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 600 g
- Reis (trocken): 300 g
- Passierte Tomaten: 400 g
- Tomatenmark: 40 g
- Paprika: 200 g
- Zwiebeln: 200 g
- Currypulver: 6 g
- Hühnerbrühe (zubereitet): 500 g
- Öl: 20 g
- Erbsen (TK): 150 g
zubereitung:
1. Hähnchen würzen und im Öl rundum anbraten, herausnehmen.
2. Zwiebeln und Paprika pürieren und im Bratfett 10 Minuten einkochen, Tomatenmark und Curry dazu.
3. Passierte Tomaten, Brühe und Reis einrühren, Hähnchen obenauf legen.
4. Zugedeckt 25 Minuten auf kleiner Hitze garen, Erbsen die letzten 5 Minuten mitgaren.

## Erdnuss-Eintopf (Maafe)
en: Peanut stew (maafe)
es: Guiso de cacahuete (maafe)
emoji: 🥜
typ: sauce
beilage: reis
portionen: 4
tags: afrika, eintopf, hähnchen
zutaten:
- Hähnchenbrust: 500 g
- Erdnussmus (100 % Erdnüsse): 100 g
- Süßkartoffel: 400 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Spinat: 150 g
- Hühnerbrühe (zubereitet): 400 g
- Öl: 10 g
zubereitung:
1. Zwiebeln, Knoblauch und Ingwer im Öl anschwitzen, Hähnchenwürfel kurz anbraten.
2. Süßkartoffelwürfel, Tomaten und Brühe dazu, 20 Minuten köcheln.
3. Erdnussmus einrühren, bis die Soße cremig ist.
4. Spinat unterheben und zusammenfallen lassen.

## Tajine mit Hähnchen und Aprikosen
en: Chicken tagine with apricots
es: Tajín de pollo con albaricoques
emoji: 🍲
typ: gericht
portionen: 4
tags: marokko, afrika, hähnchen
zutaten:
- Hähnchenschenkel (roh): 700 g
- Zwiebeln: 200 g
- Karotten: 250 g
- Kichererbsen (abgetropft): 250 g
- Aprikosen (getrocknet): 80 g
- Kreuzkümmel: 4 g
- Zimt (gemahlen): 2 g
- Kurkuma: 3 g
- Hühnerbrühe (zubereitet): 400 g
- Olivenöl: 15 g
- Couscous (trocken): 240 g
zubereitung:
1. Hähnchen im Öl anbraten, Zwiebeln und Gewürze dazu.
2. Karotten, Kichererbsen, Aprikosen und Brühe zugeben.
3. Zugedeckt 40 Minuten schmoren.
4. Couscous mit kochendem Wasser übergießen, 5 Minuten quellen lassen und dazu servieren.

## Paella mit Huhn und Meeresfrüchten
en: Chicken and seafood paella
es: Paella mixta
emoji: 🥘
typ: gericht
portionen: 4
tags: spanien, reis, garnelen, hähnchen
zutaten:
- Reis (trocken): 300 g
- Hähnchenschenkel (roh): 400 g
- Garnelen: 250 g
- Paprika: 200 g
- Erbsen (TK): 150 g
- Zwiebeln: 100 g
- Knoblauch: 8 g
- Paprikapulver (edelsüß): 5 g
- Kurkuma: 2 g
- Hühnerbrühe (zubereitet): 900 g
- Olivenöl: 20 g
- Zitrone: 60 g
zubereitung:
1. Hähnchen im Olivenöl goldbraun braten, Zwiebel, Knoblauch und Paprika mitbraten.
2. Reis, Paprikapulver und Kurkuma einrühren, Brühe angießen und nicht mehr umrühren.
3. 18 Minuten köcheln, Erbsen und Garnelen die letzten 6 Minuten obenauf legen.
4. Kurz ruhen lassen und mit Zitronenspalten servieren.

## Pierogi mit Kartoffel-Quark
en: Potato and quark pierogi
es: Pierogi de patata y requesón
emoji: 🥟
typ: gericht
portionen: 4
tags: polen, vegetarisch
zutaten:
- Mehl: 350 g
- Eier: 50 g
- Kartoffeln (mehlig): 400 g
- Magerquark: 200 g
- Zwiebeln: 150 g
- Butter: 20 g
- Saure Sahne (10 %): 150 g
zubereitung:
1. Mehl, Ei, eine Prise Salz und 150 ml warmes Wasser zu einem glatten Teig kneten, 30 Minuten ruhen lassen.
2. Kartoffeln kochen, zerstampfen, mit Quark und der Hälfte der gebratenen Zwiebeln mischen.
3. Teig dünn ausrollen, Kreise ausstechen, füllen und gut zudrücken.
4. In Salzwasser 3 Minuten ziehen lassen, in Butter mit den restlichen Zwiebeln schwenken, saure Sahne dazu.

## Ungarisches Gulasch mit Nockerl
en: Hungarian goulash with dumplings
es: Gulash húngaro con ñoquis
emoji: 🍲
typ: sauce
beilage: nudeln
portionen: 5
tags: ungarn, rind, eintopf, mealprep
zutaten:
- Gulaschfleisch (Rind): 800 g
- Zwiebeln: 500 g
- Paprikapulver (edelsüß): 20 g
- Tomatenmark: 40 g
- Paprika: 200 g
- Kümmel: 2 g
- Knoblauch: 10 g
- Öl: 20 g
- Spätzle (frisch): 500 g
zubereitung:
1. Zwiebeln im Öl langsam 15 Minuten goldbraun braten.
2. Fleisch dazu und anbraten, vom Herd nehmen und Paprikapulver einrühren (verbrennt sonst bitter).
3. Tomatenmark, Kümmel, Knoblauch und 600 ml Wasser dazu, 2 Stunden schmoren.
4. Paprikastreifen 15 Minuten mitgaren. Mit Spätzle als Nockerl-Ersatz servieren.

## Fish and Chips aus dem Ofen
en: Oven fish and chips
es: Fish and chips al horno
emoji: 🐟
typ: gericht
portionen: 3
tags: england, fisch
zutaten:
- Fischfilet (natur, roh): 450 g
- Panko: 80 g
- Eier: 50 g
- Mehl: 30 g
- Kartoffeln (festkochend): 700 g
- Erbsen (TK): 300 g
- Olivenöl: 20 g
- Zitrone: 60 g
zubereitung:
1. Kartoffeln in dicke Stäbchen schneiden, mit Öl mischen und bei 220 °C 35 Minuten backen.
2. Fisch in Mehl, Ei und Panko wenden.
3. Die letzten 15 Minuten neben die Kartoffeln legen und backen.
4. Erbsen kochen und grob zerdrücken. Mit Zitrone servieren.

## Bami Goreng mit Tofu
en: Bami goreng with tofu
es: Bami goreng con tofu
emoji: 🍜
typ: gericht
portionen: 3
tags: indonesien, asiatisch, vegan, nudeln, tofu
zutaten:
- Mie-Nudeln (roh): 250 g
- Tofu (fest): 300 g
- Weißkohl: 250 g
- Karotten: 150 g
- Frühlingszwiebeln: 40 g
- Ketjap Manis: 50 g
- Sojasoße: 20 g
- Sambal Oelek: 15 g
- Knoblauch: 8 g
- Öl: 20 g
zubereitung:
1. Tofu würfeln und im Öl knusprig braten, herausnehmen.
2. Knoblauch, Kohl und Karotten in Streifen 4 Minuten braten.
3. Nudeln kochen und mit Tofu dazugeben.
4. Mit Ketjap Manis, Sojasoße und Sambal abschmecken, Frühlingszwiebeln unterheben.

## Bulgogi-Tofu-Bowl
en: Bulgogi tofu bowl
es: Bowl de tofu bulgogi
emoji: 🥢
typ: gericht
portionen: 3
tags: korea, asiatisch, vegan, tofu
zutaten:
- Tofu (fest): 400 g
- Sojasoße: 50 g
- Zucker: 15 g
- Apfel: 80 g
- Knoblauch: 8 g
- Sesamöl: 10 g
- Reis (trocken): 240 g
- Kimchi: 150 g
- Gurke: 150 g
- Karotten: 100 g
- Sesam: 10 g
zubereitung:
1. Tofu in Scheiben schneiden und gut trocken tupfen.
2. Sojasoße, Zucker, geriebenen Apfel, Knoblauch und Sesamöl verrühren.
3. Tofu in einer heißen Pfanne braten, Marinade dazu und einkochen lassen.
4. Mit Reis, Kimchi, Gurke und Karotten anrichten, Sesam drüber.

## Sushi-Bowl mit Lachs
en: Salmon sushi bowl
es: Bowl de sushi con salmón
emoji: 🍣
typ: gericht
portionen: 2
tags: japan, asiatisch, lachs, fisch, schnell
zutaten:
- Sushireis (roh): 160 g
- Sushi-Essig: 30 g
- Lachs (frisch): 200 g
- Avocado: 120 g
- Gurke: 150 g
- Edamame (TK, geschält): 100 g
- Wakame-Salat: 80 g
- Sojasoße: 20 g
- Sesam: 6 g
- Ingwer (eingelegt, Sushi): 20 g
zubereitung:
1. Sushireis kochen und mit Sushi-Essig mischen.
2. Lachs in Würfel, Avocado und Gurke in Scheiben schneiden.
3. Edamame kurz kochen.
4. Alles auf dem Reis anrichten, mit Wakame, Ingwer, Sesam und Sojasoße servieren. Am selben Tag essen.
`;
