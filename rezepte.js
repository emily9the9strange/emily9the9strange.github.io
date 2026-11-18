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

## Wiener Schnitzel mit Erdäpfelsalat
en: Wiener schnitzel with potato salad
es: Escalope vienesa con ensalada de patata
emoji: 🥩
typ: gericht
portionen: 4
tags: österreich, schwein, klassiker
zutaten:
- Schweineschnitzel (roh): 600 g
- Mehl: 50 g
- Eier: 100 g
- Semmelbrösel: 100 g
- Rapsöl: 60 g
- Kartoffeln (festkochend): 800 g
- Zwiebeln: 80 g
- Rinderbrühe (zubereitet): 150 g
- Essig (Weißwein): 30 g
- Zitrone: 60 g
- Schnittlauch: 10 g
zubereitung:
1. Kartoffeln kochen, pellen und noch warm in Scheiben schneiden.
2. Zwiebel fein hacken, mit heißer Brühe und Essig über die Kartoffeln gießen, salzen und 30 Minuten durchziehen lassen.
3. Schnitzel dünn klopfen, salzen und erst in Mehl, dann in Ei, dann in Bröseln wenden.
4. In heißem Öl schwimmend je Seite 2–3 Minuten goldbraun backen. Mit Zitrone und Schnittlauch servieren.

## Protein-Kaiserschmarrn
en: Protein kaiserschmarrn
es: Kaiserschmarrn proteico
emoji: 🥞
typ: gericht
portionen: 2
tags: österreich, süß, protein, fitness, frühstück
zutaten:
- Eier: 200 g
- Magerquark: 250 g
- Haferflocken (zart): 60 g
- Proteinpulver: 30 g
- Milch (1,5 %): 100 g
- Erythrit: 20 g
- Butter: 10 g
- Apfel: 150 g
zubereitung:
1. Eier trennen. Eigelb, Quark, Haferflocken, Proteinpulver, Milch und Erythrit glatt rühren.
2. Eiweiß steif schlagen und unterheben.
3. Butter in einer Pfanne schmelzen, Teig eingießen und zugedeckt 5 Minuten stocken lassen, wenden und mit zwei Gabeln zerreißen.
4. Mit Apfelmus oder gedünsteten Apfelstücken servieren.

## Palatschinken mit Marillenmarmelade
en: Palatschinken with apricot jam
es: Palatschinken con mermelada de albaricoque
emoji: 🥞
typ: gericht
portionen: 4
tags: österreich, süß, vegetarisch
zutaten:
- Mehl: 200 g
- Milch (1,5 %): 400 g
- Eier: 150 g
- Zucker: 10 g
- Butter: 20 g
- Marillenmarmelade: 120 g
zubereitung:
1. Mehl, Milch, Eier, Zucker und eine Prise Salz zu einem glatten, dünnflüssigen Teig rühren und 15 Minuten quellen lassen.
2. Etwas Butter in einer Pfanne erhitzen, eine kleine Kelle Teig dünn verteilen.
3. Je Seite etwa 1 Minute goldgelb backen. Ergibt etwa 8 Stück.
4. Mit Marmelade bestreichen und einrollen.

## Crêpes mit Beeren und Skyr
en: Crêpes with berries and skyr
es: Crepes con frutos rojos y skyr
emoji: 🥞
typ: gericht
portionen: 3
tags: frankreich, süß, protein, frühstück
zutaten:
- Mehl: 120 g
- Milch (1,5 %): 300 g
- Eier: 100 g
- Butter: 15 g
- Skyr: 300 g
- Beeren (TK): 250 g
- Honig: 20 g
zubereitung:
1. Mehl, Milch und Eier zu einem flüssigen Teig verrühren und 10 Minuten ruhen lassen.
2. In einer heißen, leicht gebutterten Pfanne hauchdünne Crêpes backen.
3. Beeren auftauen bzw. kurz erwärmen.
4. Crêpes mit Skyr und Beeren füllen, mit Honig beträufeln.

## Apfelstrudel
en: Apple strudel
es: Strudel de manzana
emoji: 🥧
typ: gericht
portionen: 8
tags: österreich, süß, kuchen, vegetarisch
zutaten:
- Strudelteig: 250 g
- Apfel: 1200 g
- Zucker: 80 g
- Zimt (gemahlen): 4 g
- Rosinen: 60 g
- Semmelbrösel: 60 g
- Butter: 80 g
- Zitrone: 40 g
- Puderzucker: 10 g
zubereitung:
1. Äpfel schälen, in dünne Scheiben schneiden und mit Zucker, Zimt, Rosinen und Zitronensaft mischen.
2. Brösel in 30 g Butter goldbraun rösten.
3. Strudelteig auf einem Tuch auslegen, mit flüssiger Butter bestreichen, Brösel und Äpfel auf das untere Drittel geben und mithilfe des Tuchs einrollen.
4. Mit Butter bestreichen und bei 190 °C 40 Minuten backen. Mit Puderzucker bestäuben.

## Topfenstrudel leicht
en: Light quark strudel
es: Strudel de requesón ligero
emoji: 🥧
typ: gericht
portionen: 8
tags: österreich, süß, kuchen, protein
zutaten:
- Strudelteig: 250 g
- Magerquark: 750 g
- Eier: 150 g
- Erythrit: 80 g
- Vanillezucker: 8 g
- Zitrone: 40 g
- Rosinen: 50 g
- Butter: 30 g
zubereitung:
1. Quark mit Eiern, Erythrit, Vanillezucker, Zitronenabrieb und Rosinen glatt rühren.
2. Strudelteig auslegen, mit flüssiger Butter bestreichen und die Füllung auf dem unteren Drittel verteilen.
3. Einrollen, auf ein Blech legen und mit Butter bestreichen.
4. Bei 180 °C 40 Minuten backen und lauwarm servieren.

## Tafelspitz mit Apfelkren
en: Tafelspitz with apple horseradish
es: Tafelspitz con rábano y manzana
emoji: 🍲
typ: gericht
portionen: 4
tags: österreich, rind, klassiker
zutaten:
- Tafelspitz (roh): 1000 g
- Suppengemüse: 400 g
- Zwiebeln: 100 g
- Kartoffeln (festkochend): 800 g
- Apfel: 150 g
- Meerrettich: 40 g
- Schnittlauch: 10 g
zubereitung:
1. Fleisch in kochendes Wasser legen, Hitze reduzieren und 2,5 Stunden sanft ziehen lassen, den Schaum abschöpfen.
2. Nach 1,5 Stunden Suppengemüse und die halbierte Zwiebel dazugeben.
3. Kartoffeln kochen. Apfel reiben und mit Meerrettich mischen.
4. Fleisch gegen die Faser aufschneiden, mit etwas Suppe, Kartoffeln, Apfelkren und Schnittlauch servieren.

## Erdäpfelgulasch
en: Austrian potato goulash
es: Gulash de patata austriaco
emoji: 🥔
typ: gericht
portionen: 4
tags: österreich, eintopf, mealprep
zutaten:
- Kartoffeln (festkochend): 1000 g
- Wiener Würstchen: 300 g
- Zwiebeln: 250 g
- Paprikapulver (edelsüß): 15 g
- Tomatenmark: 30 g
- Majoran (getrocknet): 2 g
- Kümmel: 2 g
- Rapsöl: 20 g
- Gemüsebrühe (zubereitet): 800 g
zubereitung:
1. Zwiebeln im Öl goldbraun rösten, Paprikapulver und Tomatenmark kurz mitrösten.
2. Kartoffelwürfel, Majoran, Kümmel und Brühe dazugeben und 25 Minuten köcheln.
3. Einige Kartoffeln zerdrücken, damit das Gulasch sämig wird.
4. Würstchen in Scheiben die letzten 5 Minuten mitziehen lassen.

## Krautfleckerl
en: Krautfleckerl (cabbage pasta)
es: Krautfleckerl (pasta con col)
emoji: 🥬
typ: gericht
portionen: 4
tags: österreich, vegetarisch, nudeln
zutaten:
- Weißkohl: 800 g
- Nudeln (trocken): 300 g
- Zwiebeln: 150 g
- Zucker: 15 g
- Kümmel: 3 g
- Rapsöl: 30 g
- Gemüsebrühe (zubereitet): 150 g
zubereitung:
1. Kraut in kleine Quadrate schneiden. Zucker im Öl hell karamellisieren, Zwiebeln dazu.
2. Kraut und Kümmel dazugeben, mit Brühe ablöschen und 25 Minuten weich dünsten.
3. Fleckerl oder kleine Nudeln kochen.
4. Mit dem Kraut mischen und mit Salz und Pfeffer abschmecken.

## Schinkenfleckerl leicht
en: Light ham pasta bake
es: Gratinado de pasta con jamón ligero
emoji: 🧀
typ: gericht
portionen: 4
tags: österreich, nudeln, protein, auflauf
zutaten:
- Nudeln (trocken): 300 g
- Kochschinken: 250 g
- Eier: 150 g
- Magerquark: 250 g
- Saure Sahne (10 %): 150 g
- Reibekäse light: 80 g
- Zwiebeln: 80 g
zubereitung:
1. Nudeln bissfest kochen. Schinken würfeln und mit der Zwiebel kurz anbraten.
2. Eier, Quark und saure Sahne verrühren, salzen und pfeffern.
3. Nudeln, Schinken und Eiermasse mischen und in eine Form füllen.
4. Mit Käse bestreuen und bei 190 °C 30 Minuten goldbraun backen.

## Frittatensuppe
en: Frittatensuppe (pancake soup)
es: Sopa con tiras de crepe
emoji: 🍲
typ: gericht
portionen: 4
tags: österreich, suppe, klassiker
zutaten:
- Mehl: 100 g
- Milch (1,5 %): 200 g
- Eier: 100 g
- Rinderbrühe (zubereitet): 1200 g
- Schnittlauch: 15 g
- Butter: 10 g
zubereitung:
1. Mehl, Milch, Eier und eine Prise Salz verrühren.
2. In einer leicht gebutterten Pfanne dünne Palatschinken backen und abkühlen lassen.
3. Eng einrollen und in feine Streifen schneiden.
4. In Teller geben, mit heißer Rindsuppe übergießen und mit Schnittlauch bestreuen.

## Hühnerpaprikasch mit Nockerl
en: Chicken paprikash with dumplings
es: Pollo paprikash con ñoquis
emoji: 🍗
typ: sauce
beilage: nudeln
portionen: 4
tags: österreich, ungarn, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 800 g
- Zwiebeln: 300 g
- Paprikapulver (edelsüß): 20 g
- Paprika: 200 g
- Tomatenmark: 30 g
- Hühnerbrühe (zubereitet): 400 g
- Saure Sahne (10 %): 200 g
- Mehl: 15 g
- Rapsöl: 20 g
- Spätzle (frisch): 500 g
zubereitung:
1. Zwiebeln im Öl weich und goldig dünsten.
2. Hähnchen dazu, kurz anbraten, vom Herd nehmen und Paprikapulver unterrühren.
3. Tomatenmark, Paprika und Brühe dazugeben, 35 Minuten schmoren.
4. Saure Sahne mit Mehl verrühren, einrühren und kurz aufkochen. Mit Nockerl (Spätzle) servieren.

## Langos mit Knoblauch und Käse
en: Lángos with garlic and cheese
es: Lángos con ajo y queso
emoji: 🫓
typ: gericht
portionen: 4
tags: österreich, ungarn, imbiss
zutaten:
- Mehl: 400 g
- Trockenhefe: 7 g
- Milch (1,5 %): 250 g
- Kartoffeln (mehlig): 150 g
- Rapsöl: 80 g
- Knoblauch: 15 g
- Saure Sahne (10 %): 150 g
- Käse gerieben: 100 g
zubereitung:
1. Kartoffeln kochen und fein zerdrücken. Mit Mehl, Hefe, lauwarmer Milch und Salz zu einem weichen Teig kneten, 1 Stunde gehen lassen.
2. In 4 Stücke teilen und flach ziehen.
3. In heißem Öl je Seite 2 Minuten goldbraun backen, auf Küchenpapier abtropfen lassen.
4. Mit Knoblauchwasser bestreichen, saure Sahne und Käse darauf.

## Linsen mit Spätzle und Würstchen
en: Lentils with spätzle and sausages
es: Lentejas con spätzle y salchichas
emoji: 🍲
typ: gericht
portionen: 4
tags: deutschland, schwaben, linsen, mealprep
zutaten:
- Linsen (trocken): 250 g
- Spätzle (frisch): 500 g
- Wiener Würstchen: 300 g
- Suppengemüse: 300 g
- Zwiebeln: 100 g
- Essig (Weißwein): 30 g
- Mehl: 15 g
- Rapsöl: 15 g
- Gemüsebrühe (zubereitet): 900 g
zubereitung:
1. Zwiebel und Suppengemüse würfeln und im Öl anschwitzen, Mehl darüberstäuben.
2. Linsen und Brühe dazugeben und 35 Minuten weich köcheln.
3. Mit Essig, Salz und Pfeffer kräftig abschmecken, die Würstchen darin erwärmen.
4. Spätzle erhitzen und dazu servieren.

## Deutsche Linsensuppe
en: German lentil soup
es: Sopa de lentejas alemana
emoji: 🍲
typ: gericht
portionen: 5
tags: deutschland, suppe, linsen, mealprep
zutaten:
- Linsen (trocken): 300 g
- Kartoffeln (festkochend): 400 g
- Suppengemüse: 400 g
- Bacon: 80 g
- Zwiebeln: 100 g
- Gemüsebrühe (zubereitet): 1500 g
- Essig (Weißwein): 30 g
- Lorbeerblatt: 1 g
- Petersilie (frisch): 10 g
zubereitung:
1. Speck und Zwiebel anbraten, Suppengemüse kurz mitbraten.
2. Linsen, Kartoffelwürfel, Lorbeer und Brühe dazugeben und 40 Minuten köcheln.
3. Mit Essig, Salz und Pfeffer abschmecken.
4. Mit Petersilie servieren.

## Maultaschen in der Brühe
en: Maultaschen in broth
es: Maultaschen en caldo
emoji: 🥟
typ: gericht
portionen: 3
tags: deutschland, schwaben, suppe, schnell
zutaten:
- Maultaschen (Packung): 450 g
- Gemüsebrühe (zubereitet): 1000 g
- Karotten: 150 g
- Lauch: 100 g
- Schnittlauch: 10 g
zubereitung:
1. Brühe aufkochen, Karotten- und Lauchstreifen 5 Minuten darin garen.
2. Maultaschen dazugeben und 8 Minuten sanft ziehen lassen (nicht kochen).
3. Mit Schnittlauch bestreuen.

## Königsberger Klopse
en: Königsberger klopse
es: Albóndigas de Königsberg
emoji: 🍲
typ: sauce
beilage: kartoffeln
portionen: 4
tags: deutschland, klassiker, hack
zutaten:
- Hackfleisch gemischt: 500 g
- Eier: 50 g
- Semmelbrösel: 40 g
- Zwiebeln: 80 g
- Gemüsebrühe (zubereitet): 700 g
- Kapern: 30 g
- Kochsahne (15 %): 150 g
- Mehl: 30 g
- Butter: 20 g
- Zitrone: 30 g
zubereitung:
1. Hack mit Ei, Bröseln und fein gehackter Zwiebel verkneten, 16 Klopse formen.
2. In leicht siedender Brühe 15 Minuten garen und herausnehmen.
3. Butter schmelzen, Mehl anschwitzen, mit 500 ml Brühe und Sahne aufgießen und 5 Minuten köcheln.
4. Kapern und Zitronensaft dazu, Klopse in der Soße erwärmen.

## Rinderrouladen
en: Beef roulades
es: Rollitos de ternera
emoji: 🥩
typ: gericht
portionen: 4
tags: deutschland, rind, klassiker
zutaten:
- Rinderrouladen (roh): 700 g
- Bacon: 80 g
- Essiggurken: 100 g
- Zwiebeln: 150 g
- Senf: 30 g
- Rotwein: 150 g
- Rinderbrühe (zubereitet): 400 g
- Tomatenmark: 20 g
- Rapsöl: 15 g
- Kartoffelknödel (Packung): 480 g
zubereitung:
1. Rouladen flach legen, mit Senf bestreichen, mit Speck, Gurkenstreifen und Zwiebeln belegen, aufrollen und feststecken.
2. Rundum im Öl kräftig anbraten.
3. Tomatenmark kurz mitrösten, mit Rotwein und Brühe ablöschen und zugedeckt 90 Minuten schmoren.
4. Soße einkochen lassen und mit Knödeln servieren.

## Flammkuchen leicht
en: Light tarte flambée
es: Tarte flambée ligera
emoji: 🍕
typ: gericht
portionen: 2
tags: deutschland, elsass, schnell
zutaten:
- Tortilla-Wrap: 240 g
- Magerquark: 150 g
- Saure Sahne (10 %): 100 g
- Kochschinken: 100 g
- Zwiebeln: 100 g
- Schnittlauch: 10 g
zubereitung:
1. Ofen auf 220 °C vorheizen. Quark und saure Sahne glatt rühren, salzen und pfeffern.
2. Wraps auf ein Blech legen und dünn bestreichen.
3. Mit Schinkenwürfeln und hauchdünnen Zwiebelringen belegen.
4. 8–10 Minuten knusprig backen und mit Schnittlauch bestreuen.

## Kartoffelpuffer mit Apfelmus
en: Potato pancakes with apple sauce
es: Tortitas de patata con compota de manzana
emoji: 🥔
typ: gericht
portionen: 3
tags: deutschland, vegetarisch, klassiker
zutaten:
- Kartoffeln (mehlig): 800 g
- Zwiebeln: 100 g
- Eier: 100 g
- Mehl: 30 g
- Rapsöl: 50 g
- Apfelmus: 300 g
zubereitung:
1. Kartoffeln und Zwiebel fein reiben und kräftig ausdrücken.
2. Mit Ei, Mehl und Salz mischen.
3. Im heißen Öl flache Puffer je Seite 3–4 Minuten knusprig braten.
4. Auf Küchenpapier abtropfen lassen und mit Apfelmus servieren.

## Zürcher Geschnetzeltes mit Rösti
en: Zurich-style veal with rösti
es: Ternera a la zuriquesa con rösti
emoji: 🍽️
typ: gericht
portionen: 4
tags: schweiz, klassiker
zutaten:
- Putenbrust (roh): 600 g
- Champignons: 300 g
- Zwiebeln: 100 g
- Weißwein: 100 g
- Kochsahne (15 %): 200 g
- Gemüsebrühe (zubereitet): 150 g
- Mehl: 10 g
- Butter: 20 g
- Kartoffeln (festkochend): 800 g
- Petersilie (frisch): 10 g
zubereitung:
1. Für die Rösti Kartoffeln am Vortag kochen, schälen und grob reiben, salzen und in 10 g Butter zu einem Fladen von beiden Seiten goldbraun braten.
2. Fleisch in feine Streifen schneiden, mit Mehl bestäuben und portionsweise kurz anbraten.
3. Zwiebeln und Pilze anbraten, mit Wein ablöschen, Brühe und Sahne dazu und 5 Minuten einkochen.
4. Fleisch zurück in die Soße, mit Petersilie und Rösti servieren.

## Älplermagronen
en: Älplermagronen (Alpine macaroni)
es: Macarrones alpinos
emoji: 🧀
typ: gericht
portionen: 4
tags: schweiz, nudeln, vegetarisch
zutaten:
- Nudeln (trocken): 300 g
- Kartoffeln (festkochend): 300 g
- Bergkäse: 120 g
- Milch (1,5 %): 200 g
- Kochsahne (15 %): 100 g
- Zwiebeln: 200 g
- Butter: 15 g
- Apfelmus: 200 g
zubereitung:
1. Kartoffelwürfel und Nudeln zusammen in Salzwasser bissfest kochen und abgießen.
2. Milch und Sahne erhitzen, die Hälfte des Käses darin schmelzen.
3. Nudeln und Kartoffeln untermischen, in eine Form geben, mit restlichem Käse bestreuen und kurz überbacken.
4. Zwiebelringe in Butter goldbraun rösten, darüber verteilen und mit Apfelmus servieren.

## Rösti mit Spiegelei und Speck
en: Rösti with fried egg and bacon
es: Rösti con huevo frito y bacon
emoji: 🍳
typ: gericht
portionen: 2
tags: schweiz, frühstück, schnell
zutaten:
- Kartoffeln (festkochend): 500 g
- Eier: 120 g
- Bacon: 60 g
- Butter: 15 g
- Schnittlauch: 5 g
zubereitung:
1. Gekochte, ausgekühlte Kartoffeln grob reiben und salzen.
2. In Butter zu zwei Rösti formen und je Seite 6 Minuten goldbraun braten.
3. Speck knusprig braten, Spiegeleier braten.
4. Rösti mit Ei und Speck belegen, Schnittlauch drüber.

## Birchermüesli mit Skyr
en: Bircher muesli with skyr
es: Muesli Bircher con skyr
emoji: 🥣
typ: gericht
portionen: 2
tags: schweiz, frühstück, protein
zutaten:
- Haferflocken: 100 g
- Skyr: 300 g
- Milch (1,5 %): 150 g
- Apfel: 200 g
- Zitrone: 20 g
- Walnüsse: 20 g
- Beeren (TK): 100 g
- Honig: 15 g
zubereitung:
1. Haferflocken mit Milch über Nacht einweichen.
2. Apfel grob reiben, sofort mit Zitronensaft mischen.
3. Apfel und Skyr unter die Haferflocken rühren.
4. Mit Beeren, gehackten Walnüssen und Honig toppen.

## Rüblikuchen leicht
en: Light Swiss carrot cake
es: Pastel de zanahoria suizo ligero
emoji: 🥕
typ: gericht
portionen: 12
tags: schweiz, kuchen, süß
zutaten:
- Karotten: 300 g
- Mandeln gemahlen: 200 g
- Eier: 250 g
- Erythrit: 120 g
- Dinkelmehl: 60 g
- Backpulver: 8 g
- Zimt (gemahlen): 3 g
- Zitrone: 30 g
- Frischkäse (mager / 0,2 %): 150 g
- Puderzucker: 20 g
zubereitung:
1. Eier trennen. Eigelb mit Erythrit schaumig rühren, fein geriebene Karotten, Mandeln, Mehl, Backpulver, Zimt und Zitronenabrieb unterrühren.
2. Eiweiß steif schlagen und unterheben.
3. In einer Springform bei 175 °C 45 Minuten backen.
4. Frischkäse mit Puderzucker und Zitronensaft verrühren und auf den abgekühlten Kuchen streichen. Ergibt 12 Stück.

## Brot mit Salami und Gurke
en: Bread with salami and cucumber
es: Pan con salami y pepino
emoji: 🥪
typ: gericht
portionen: 1
tags: jause, brot, schnell
zutaten:
- Vollkornbrot (Scheibe): 100 g
- Frischkäse (mager / 0,2 %): 30 g
- Salami: 40 g
- Gurke: 80 g
- Schnittlauch: 3 g
zubereitung:
1. Brot mit Frischkäse bestreichen.
2. Mit Salami und Gurkenscheiben belegen.
3. Mit Schnittlauch bestreuen.

## Lachsbrot mit Kren
en: Salmon bread with horseradish
es: Pan con salmón y rábano picante
emoji: 🥪
typ: gericht
portionen: 1
tags: jause, brot, lachs, protein, schnell
zutaten:
- Vollkornbrot (Scheibe): 100 g
- Frischkäse (mager / 0,2 %): 40 g
- Räucherlachs: 80 g
- Meerrettich: 10 g
- Gurke: 50 g
- Dill (frisch): 3 g
zubereitung:
1. Frischkäse mit Kren verrühren und aufs Brot streichen.
2. Mit Gurkenscheiben und Räucherlachs belegen.
3. Mit Dill und Pfeffer bestreuen.

## Pizza Margherita
en: Pizza margherita
es: Pizza margarita
emoji: 🍕
typ: gericht
portionen: 2
tags: italien, pizza, vegetarisch
zutaten:
- Mehl: 300 g
- Trockenhefe: 5 g
- Olivenöl: 15 g
- Passierte Tomaten: 200 g
- Mozzarella: 250 g
- Basilikum (frisch): 10 g
- Oregano (getrocknet): 2 g
zubereitung:
1. Mehl, Hefe, Salz, Öl und 190 ml lauwarmes Wasser 10 Minuten kneten und 1 Stunde gehen lassen.
2. Ofen mit Blech auf höchster Stufe vorheizen. Teig halbieren und dünn ausziehen.
3. Mit gewürzten Tomaten bestreichen und mit Mozzarella belegen.
4. 8–10 Minuten backen und mit Basilikum servieren.

## Low-Cal-Pizza mit Zucchini
en: Low-cal courgette pizza
es: Pizza baja en calorías con calabacín
emoji: 🍕
typ: gericht
portionen: 2
tags: italien, pizza, fitness, leicht
zutaten:
- Tortilla-Wrap: 120 g
- Passierte Tomaten: 150 g
- Mozzarella light: 125 g
- Zucchini: 200 g
- Champignons: 100 g
- Kirschtomaten: 100 g
- Oregano (getrocknet): 2 g
- Rucola: 30 g
zubereitung:
1. Ofen auf 220 °C vorheizen. Wraps auf ein Blech legen.
2. Mit gewürzten Tomaten bestreichen, Zucchini- und Pilzscheiben sowie halbierte Kirschtomaten darauf verteilen.
3. Mozzarella zerzupfen und darüber geben.
4. 10 Minuten knusprig backen, mit Rucola servieren.

## Protein-Pizza mit Quark-Boden
en: High-protein pizza with quark base
es: Pizza proteica con base de requesón
emoji: 🍕
typ: gericht
portionen: 2
tags: italien, pizza, protein, fitness
zutaten:
- Magerquark: 250 g
- Eier: 100 g
- Haferflocken (zart): 80 g
- Backpulver: 5 g
- Passierte Tomaten: 150 g
- Mozzarella light: 125 g
- Hähnchenbrust: 150 g
- Paprika: 100 g
- Oregano (getrocknet): 2 g
zubereitung:
1. Quark, Eier, fein gemahlene Haferflocken, Backpulver und Salz verrühren.
2. Auf Backpapier zwei dünne Fladen streichen und bei 200 °C 15 Minuten vorbacken.
3. Hähnchen in Streifen braten. Böden mit Tomaten, Hähnchen, Paprika und Mozzarella belegen.
4. Weitere 10 Minuten backen.

## Spaghetti Aglio e Olio mit Garnelen
en: Spaghetti aglio e olio with prawns
es: Espaguetis aglio e olio con gambas
emoji: 🍝
typ: gericht
portionen: 2
tags: italien, nudeln, garnelen, schnell
zutaten:
- Nudeln (trocken): 200 g
- Garnelen: 200 g
- Knoblauch: 15 g
- Olivenöl: 30 g
- Chilipulver: 1 g
- Petersilie (frisch): 15 g
- Zitrone: 30 g
zubereitung:
1. Nudeln in Salzwasser bissfest kochen, eine Tasse Kochwasser aufheben.
2. Knoblauch in Scheiben im Öl sanft goldig werden lassen, Chili dazu.
3. Garnelen 2 Minuten mitbraten.
4. Nudeln mit etwas Kochwasser dazugeben, schwenken, Petersilie und Zitrone untermischen.

## Penne all'Arrabbiata
en: Penne all'arrabbiata
es: Penne all'arrabbiata
emoji: 🌶️
typ: sauce
beilage: nudeln
portionen: 4
tags: italien, nudeln, vegan, schnell
zutaten:
- Passierte Tomaten: 700 g
- Knoblauch: 15 g
- Chilipulver: 2 g
- Olivenöl: 20 g
- Petersilie (frisch): 15 g
- Tomatenmark: 20 g
zubereitung:
1. Knoblauch und Chili im Öl anschwitzen.
2. Tomatenmark kurz mitrösten, passierte Tomaten dazu.
3. 15 Minuten einkochen lassen und salzen.
4. Mit Petersilie über Penne servieren.

## Pilzrisotto
en: Mushroom risotto
es: Risotto de setas
emoji: 🍄
typ: gericht
portionen: 4
tags: italien, reis, vegetarisch
zutaten:
- Risottoreis (roh): 300 g
- Champignons: 400 g
- Zwiebeln: 100 g
- Weißwein: 100 g
- Gemüsebrühe (zubereitet): 1000 g
- Parmesan: 50 g
- Butter: 20 g
- Olivenöl: 10 g
- Petersilie (frisch): 10 g
zubereitung:
1. Pilze in Scheiben im Öl kräftig anbraten und herausnehmen.
2. Zwiebel in Butter glasig dünsten, Reis kurz mitdünsten und mit Wein ablöschen.
3. Nach und nach heiße Brühe angießen und unter Rühren 18 Minuten garen.
4. Pilze, Parmesan und Petersilie unterrühren.

## Gnocchi-Pfanne mit Tomaten und Mozzarella
en: Gnocchi skillet with tomato and mozzarella
es: Ñoquis a la sartén con tomate y mozzarella
emoji: 🍅
typ: gericht
portionen: 3
tags: italien, gnocchi, vegetarisch, schnell
zutaten:
- Gnocchi (Packung, roh): 800 g
- Kirschtomaten: 300 g
- Spinat: 150 g
- Mozzarella light: 125 g
- Knoblauch: 6 g
- Olivenöl: 15 g
- Basilikum (frisch): 10 g
zubereitung:
1. Gnocchi im Öl rundum goldbraun braten.
2. Knoblauch und halbierte Kirschtomaten dazu und 4 Minuten schmoren.
3. Spinat unterheben.
4. Mozzarella darauf zupfen, zudecken und schmelzen lassen. Mit Basilikum servieren.

## Gnocchi mit Salbei-Butter und Hähnchen
en: Gnocchi with sage butter and chicken
es: Ñoquis con mantequilla de salvia y pollo
emoji: 🧈
typ: gericht
portionen: 3
tags: italien, gnocchi, hähnchen
zutaten:
- Gnocchi (Packung, roh): 800 g
- Hähnchenbrust: 400 g
- Butter: 30 g
- Salbei (frisch): 6 g
- Parmesan: 30 g
- Zitrone: 30 g
zubereitung:
1. Hähnchen würfeln und anbraten, herausnehmen.
2. Gnocchi nach Packung kochen oder in der Pfanne anbraten.
3. Butter mit Salbeiblättern aufschäumen lassen.
4. Gnocchi und Hähnchen darin schwenken, mit Parmesan und Zitrone servieren.

## Saltimbocca von der Pute
en: Turkey saltimbocca
es: Saltimbocca de pavo
emoji: 🥩
typ: gericht
portionen: 4
tags: italien, pute, protein
zutaten:
- Putenbrust (roh): 600 g
- Kochschinken: 120 g
- Salbei (frisch): 8 g
- Weißwein: 100 g
- Gemüsebrühe (zubereitet): 100 g
- Butter: 15 g
- Olivenöl: 10 g
- Nudeln (trocken): 300 g
zubereitung:
1. Putenschnitzel dünn klopfen, mit Schinken und einem Salbeiblatt belegen und feststecken.
2. Im Öl je Seite 2–3 Minuten braten.
3. Mit Wein und Brühe ablöschen, Butter einrühren und kurz einkochen.
4. Mit Nudeln servieren.

## Pesto-Hähnchen-Pasta
en: Pesto chicken pasta
es: Pasta con pollo al pesto
emoji: 🍝
typ: gericht
portionen: 4
tags: italien, nudeln, hähnchen, mealprep
zutaten:
- Nudeln (trocken): 320 g
- Hähnchenbrust: 500 g
- Pesto: 100 g
- Kirschtomaten: 250 g
- Spinat: 150 g
- Parmesan: 30 g
zubereitung:
1. Nudeln kochen. Hähnchen würfeln und goldbraun braten.
2. Kirschtomaten halbieren und kurz mitbraten, Spinat dazu.
3. Nudeln und Pesto untermischen, eventuell etwas Kochwasser dazugeben.
4. Mit Parmesan servieren.

## Caprese-Hähnchen aus dem Ofen
en: Baked caprese chicken
es: Pollo caprese al horno
emoji: 🍅
typ: gericht
portionen: 4
tags: italien, hähnchen, protein, low carb
zutaten:
- Hähnchenbrust: 700 g
- Tomaten: 300 g
- Mozzarella light: 250 g
- Pesto: 50 g
- Olivenöl: 10 g
- Basilikum (frisch): 10 g
- Zucchini: 400 g
zubereitung:
1. Hähnchenbrust längs einschneiden, salzen und pfeffern.
2. Mit Pesto bestreichen und Tomaten- und Mozzarellascheiben in die Schnitte stecken.
3. Zucchinischeiben mit Öl in eine Form geben, Hähnchen darauf legen.
4. Bei 200 °C 25 Minuten backen, mit Basilikum servieren.

## Zoodles mit Bolognese
en: Courgetti with bolognese
es: Zoodles con boloñesa
emoji: 🥒
typ: gericht
portionen: 3
tags: italien, low carb, fitness, rind
zutaten:
- Zucchini: 800 g
- Rinderhack (Tatar, fettarm): 400 g
- Passierte Tomaten: 500 g
- Zwiebeln: 100 g
- Karotten: 100 g
- Knoblauch: 6 g
- Olivenöl: 10 g
- Parmesan: 30 g
zubereitung:
1. Hack mit Zwiebel, Karotte und Knoblauch im Öl anbraten.
2. Tomaten dazu und 20 Minuten köcheln.
3. Zucchini mit dem Spiralschneider zu Nudeln drehen und 2 Minuten in der Pfanne erwärmen (nicht zu lange, sonst werden sie wässrig).
4. Bolognese darauf, mit Parmesan bestreuen.

## Zoodles mit Garnelen und Knoblauch
en: Courgetti with garlic prawns
es: Zoodles con gambas al ajillo
emoji: 🦐
typ: gericht
portionen: 2
tags: low carb, fitness, garnelen, schnell
zutaten:
- Zucchini: 600 g
- Garnelen: 300 g
- Kirschtomaten: 200 g
- Knoblauch: 10 g
- Olivenöl: 15 g
- Zitrone: 30 g
- Petersilie (frisch): 10 g
- Parmesan: 20 g
zubereitung:
1. Zucchini zu Nudeln drehen.
2. Knoblauch und Garnelen im Öl 3 Minuten braten.
3. Tomaten und Zoodles dazugeben und 2 Minuten schwenken.
4. Mit Zitrone, Petersilie und Parmesan servieren.

## Kürbislasagne
en: Pumpkin lasagne
es: Lasaña de calabaza
emoji: 🎃
typ: gericht
portionen: 6
tags: herbst, auflauf, vegetarisch, mealprep
zutaten:
- Kürbis (Hokkaido): 800 g
- Lasagneplatten: 250 g
- Ricotta: 250 g
- Spinat: 300 g
- Passierte Tomaten: 400 g
- Mozzarella light: 250 g
- Parmesan: 40 g
- Zwiebeln: 100 g
- Knoblauch: 6 g
- Olivenöl: 10 g
zubereitung:
1. Kürbis in dünne Scheiben schneiden. Zwiebel und Knoblauch im Öl anschwitzen, Spinat zusammenfallen lassen und mit Ricotta mischen.
2. In eine Form abwechselnd Tomaten, Platten, Kürbis und Spinat-Ricotta schichten.
3. Mit Tomaten abschließen, Mozzarella und Parmesan darauf.
4. Bei 180 °C 45 Minuten backen.

## Kürbis-Pasta-Soße
en: Pumpkin pasta sauce
es: Salsa de calabaza para pasta
emoji: 🎃
typ: sauce
beilage: nudeln
portionen: 4
tags: herbst, vegetarisch, soße
zutaten:
- Kürbis (Hokkaido): 600 g
- Zwiebeln: 100 g
- Knoblauch: 6 g
- Gemüsebrühe (zubereitet): 300 g
- Cremefine 7 %: 150 g
- Parmesan: 30 g
- Salbei (frisch): 4 g
- Olivenöl: 10 g
zubereitung:
1. Zwiebel und Knoblauch im Öl anschwitzen, Kürbiswürfel dazu.
2. Mit Brühe 15 Minuten weich köcheln.
3. Cremefine dazugeben und fein pürieren.
4. Mit Parmesan und Salbei abschmecken.

## Champignon-Rahmsoße
en: Mushroom cream sauce
es: Salsa cremosa de champiñones
emoji: 🍄
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, vegetarisch, schnell
zutaten:
- Champignons: 500 g
- Zwiebeln: 100 g
- Cremefine 7 %: 250 g
- Gemüsebrühe (zubereitet): 150 g
- Petersilie (frisch): 10 g
- Rapsöl: 10 g
- Speisestärke: 8 g
zubereitung:
1. Pilze in Scheiben kräftig im Öl anbraten, Zwiebeln dazu.
2. Mit Brühe und Cremefine ablöschen.
3. 5 Minuten köcheln, mit angerührter Stärke binden.
4. Mit Petersilie, Salz und Pfeffer abschmecken.

## Lachs-Sahne-Soße
en: Salmon cream sauce
es: Salsa de nata con salmón
emoji: 🐟
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, lachs, schnell
zutaten:
- Lachs (roh): 400 g
- Cremefine 7 %: 250 g
- Spinat: 150 g
- Zitrone: 30 g
- Dill (frisch): 5 g
- Knoblauch: 6 g
- Olivenöl: 10 g
zubereitung:
1. Lachs würfeln und im Öl kurz anbraten.
2. Knoblauch und Cremefine dazu und aufkochen.
3. Spinat unterheben.
4. Mit Zitrone, Dill, Salz und Pfeffer abschmecken.

## Käse-Lauch-Hack-Soße
en: Cheese, leek and mince sauce
es: Salsa de queso, puerro y carne picada
emoji: 🧀
typ: sauce
beilage: nudeln
portionen: 5
tags: soße, deutschland, hack, mealprep
zutaten:
- Rinderhack: 500 g
- Lauch: 400 g
- Schmelzkäse light: 200 g
- Gemüsebrühe (zubereitet): 300 g
- Rapsöl: 10 g
zubereitung:
1. Hack im Öl krümelig braten.
2. Lauch in Ringen dazu und 5 Minuten mitbraten.
3. Brühe und Schmelzkäse dazugeben und rühren, bis der Käse geschmolzen ist.
4. 5 Minuten köcheln und abschmecken.

## Paprika-Frischkäse-Soße
en: Pepper cream cheese sauce
es: Salsa de pimiento y queso crema
emoji: 🫑
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, vegetarisch, schnell
zutaten:
- Paprika: 500 g
- Zwiebeln: 100 g
- Frischkäse (mager / 0,2 %): 200 g
- Passierte Tomaten: 200 g
- Paprikapulver (edelsüß): 4 g
- Olivenöl: 10 g
zubereitung:
1. Paprika und Zwiebeln würfeln und im Öl weich braten.
2. Tomaten und Paprikapulver dazugeben, 10 Minuten köcheln.
3. Frischkäse unterrühren und fein pürieren.
4. Abschmecken und mit Nudeln servieren.

## Tomaten-Basilikum-Soße
en: Tomato basil sauce
es: Salsa de tomate y albahaca
emoji: 🍅
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, italien, vegan, schnell
zutaten:
- Gehackte Tomaten (Dose): 800 g
- Zwiebeln: 100 g
- Knoblauch: 10 g
- Olivenöl: 20 g
- Basilikum (frisch): 15 g
- Zucker: 5 g
zubereitung:
1. Zwiebel und Knoblauch im Öl glasig dünsten.
2. Tomaten und Zucker dazugeben und 20 Minuten einkochen.
3. Salzen, pfeffern und Basilikum unterrühren.

## Hähnchen-Tacos mit Mais-Salsa
en: Chicken tacos with corn salsa
es: Tacos de pollo con salsa de maíz
emoji: 🌮
typ: gericht
portionen: 4
tags: mexiko, hähnchen, fitness
zutaten:
- Hähnchenbrust: 600 g
- Taco-Gewürz: 20 g
- Tortilla-Wrap: 320 g
- Mais (abgetropft): 150 g
- Kirschtomaten: 200 g
- Zwiebeln: 60 g
- Limette: 60 g
- Griechischer Joghurt 0 %: 150 g
- Salatmischung (Tüte): 80 g
- Koriander (frisch): 10 g
zubereitung:
1. Hähnchen in Streifen schneiden, würzen und scharf anbraten.
2. Mais, gewürfelte Tomaten, Zwiebel, Koriander und Limettensaft zu einer Salsa mischen.
3. Kleine Tortillas in der Pfanne erwärmen.
4. Mit Salat, Hähnchen, Salsa und Joghurt füllen.

## Protein-Wraps mit Pute und Hummus
en: Protein wraps with turkey and hummus
es: Wraps proteicos con pavo y hummus
emoji: 🌯
typ: gericht
portionen: 2
tags: fitness, protein, pute, schnell
zutaten:
- Vollkorn-Wrap: 120 g
- Putenbrust (roh): 250 g
- Hummus: 60 g
- Salatmischung (Tüte): 60 g
- Gurke: 100 g
- Paprika: 100 g
- Griechischer Joghurt 0 %: 60 g
zubereitung:
1. Pute in Streifen schneiden, salzen und 5 Minuten braten.
2. Wraps mit Hummus bestreichen.
3. Salat, Gemüse und Pute darauf verteilen, einen Klecks Joghurt dazu.
4. Fest einrollen und halbieren.

## Sommerrollen mit Tofu
en: Summer rolls with tofu
es: Rollitos vietnamitas con tofu
emoji: 🥬
typ: gericht
portionen: 3
tags: vietnam, asiatisch, vegan, tofu, leicht
zutaten:
- Reispapier: 120 g
- Tofu (fest): 250 g
- Reisbandnudeln (roh): 80 g
- Gurke: 150 g
- Karotten: 120 g
- Salatmischung (Tüte): 80 g
- Minze (frisch): 10 g
- Sojasoße: 20 g
- Erdnussbutter: 40 g
- Limette: 30 g
zubereitung:
1. Tofu in Streifen schneiden, mit Sojasoße marinieren und kurz anbraten.
2. Nudeln kochen, Gemüse in feine Streifen schneiden.
3. Reispapier einweichen, belegen und fest aufrollen.
4. Erdnussbutter mit Limettensaft, Sojasoße und warmem Wasser zum Dip verrühren.

## Sommerrollen mit Ei
en: Summer rolls with egg
es: Rollitos vietnamitas con huevo
emoji: 🥚
typ: gericht
portionen: 3
tags: vietnam, asiatisch, vegetarisch, leicht
zutaten:
- Reispapier: 120 g
- Eier: 240 g
- Reisbandnudeln (roh): 80 g
- Gurke: 150 g
- Karotten: 120 g
- Salatmischung (Tüte): 80 g
- Koriander (frisch): 10 g
- Süße Chilisoße: 50 g
zubereitung:
1. Eier verquirlen und zu zwei dünnen Omeletts braten, aufrollen und in Streifen schneiden.
2. Nudeln kochen, Gemüse in Streifen schneiden.
3. Reispapier einweichen, mit Salat, Nudeln, Gemüse, Ei und Koriander belegen und aufrollen.
4. Mit süßer Chilisoße servieren.

## Shoyu-Ramen mit Hähnchen
en: Shoyu ramen with chicken
es: Ramen shoyu con pollo
emoji: 🍜
typ: gericht
portionen: 2
tags: japan, asiatisch, suppe, hähnchen
zutaten:
- Ramen-Nudeln (frisch): 260 g
- Hähnchenbrust: 300 g
- Hühnerbrühe (zubereitet): 1000 g
- Sojasoße: 50 g
- Mirin: 20 g
- Ingwer (frisch): 15 g
- Knoblauch: 8 g
- Eier: 120 g
- Pak Choi: 150 g
- Frühlingszwiebeln: 20 g
- Nori-Blatt: 3 g
zubereitung:
1. Eier 6½ Minuten kochen und in Sojasoße mit etwas Wasser einlegen.
2. Brühe mit Ingwer und Knoblauch 15 Minuten köcheln, mit Sojasoße und Mirin abschmecken.
3. Hähnchen in der Brühe 12 Minuten gar ziehen lassen und aufschneiden, Pak Choi kurz mitgaren.
4. Nudeln kochen, mit Brühe, Hähnchen, Ei, Pak Choi, Frühlingszwiebeln und Nori anrichten.

## Scharfe Kimchi-Ramen
en: Spicy kimchi ramen
es: Ramen picante con kimchi
emoji: 🌶️
typ: gericht
portionen: 2
tags: korea, asiatisch, suppe, scharf, schnell
zutaten:
- Shin Ramyun: 240 g
- Kimchi: 150 g
- Tofu (Seidentofu): 200 g
- Eier: 120 g
- Frühlingszwiebeln: 20 g
- Käse gerieben: 30 g
zubereitung:
1. Wasser nach Packung aufkochen, Würzpulver und Kimchi dazu.
2. Nudeln und Tofuwürfel 3 Minuten mitkochen.
3. Eier hineinschlagen und 1 Minute ziehen lassen.
4. Mit Frühlingszwiebeln und Käse servieren.

## Pad See Ew
en: Pad see ew
es: Pad see ew
emoji: 🍜
typ: gericht
portionen: 3
tags: thailand, asiatisch, nudeln, hähnchen
zutaten:
- Reisbandnudeln (roh): 250 g
- Hähnchenbrust: 350 g
- Chinesischer Brokkoli (Gai Lan): 250 g
- Eier: 100 g
- Sojasoße: 40 g
- Ketjap Manis: 30 g
- Austernsoße: 20 g
- Knoblauch: 8 g
- Öl: 20 g
zubereitung:
1. Nudeln einweichen. Hähnchen in Streifen im Öl scharf anbraten.
2. Knoblauch und Brokkoli dazu und 2 Minuten braten.
3. Eier an den Rand schlagen und stocken lassen.
4. Nudeln und Soßen dazugeben und bei hoher Hitze schwenken, bis die Nudeln leicht karamellisieren.

## Tom Yum Goong
en: Tom yum goong
es: Tom yum goong
emoji: 🍲
typ: gericht
portionen: 3
tags: thailand, asiatisch, suppe, garnelen, leicht
zutaten:
- Garnelen: 300 g
- Hühnerbrühe (zubereitet): 1000 g
- Zitronengras: 30 g
- Galgant: 20 g
- Kaffirlimettenblätter: 3 g
- Champignons: 200 g
- Kirschtomaten: 150 g
- Fischsoße: 30 g
- Limette: 60 g
- Chilipulver: 1 g
- Koriander (frisch): 10 g
zubereitung:
1. Brühe mit Zitronengras, Galgant und Limettenblättern 10 Minuten köcheln.
2. Pilze und Tomaten 3 Minuten mitgaren.
3. Garnelen dazugeben und 2 Minuten ziehen lassen.
4. Mit Fischsoße, Limettensaft und Chili abschmecken, Koriander drüber.

## Khao Pad (Thai-Bratreis)
en: Khao pad (Thai fried rice)
es: Khao pad (arroz frito tailandés)
emoji: 🍚
typ: gericht
portionen: 3
tags: thailand, asiatisch, reis, schnell
zutaten:
- Jasminreis (roh): 240 g
- Hähnchenbrust: 300 g
- Eier: 120 g
- Zwiebeln: 100 g
- Kirschtomaten: 150 g
- Fischsoße: 25 g
- Sojasoße: 20 g
- Zucker: 5 g
- Frühlingszwiebeln: 20 g
- Limette: 30 g
- Öl: 15 g
zubereitung:
1. Reis am Vortag kochen. Hähnchen klein schneiden und im Öl anbraten.
2. Zwiebel dazu, dann Eier hineinschlagen und verrühren.
3. Reis, Fischsoße, Sojasoße und Zucker zugeben und kräftig braten.
4. Tomaten und Frühlingszwiebeln unterheben, mit Limette servieren.

## Larb Gai
en: Larb gai (Thai chicken salad)
es: Larb gai (ensalada tailandesa de pollo)
emoji: 🥗
typ: gericht
portionen: 3
tags: thailand, asiatisch, hähnchen, low carb, fitness
zutaten:
- Hähnchenbrust: 450 g
- Fischsoße: 30 g
- Limette: 90 g
- Zwiebeln: 80 g
- Frühlingszwiebeln: 30 g
- Minze (frisch): 10 g
- Koriander (frisch): 10 g
- Reis (trocken): 40 g
- Chilipulver: 1 g
- Romanasalat: 200 g
zubereitung:
1. Rohen Reis in einer trockenen Pfanne goldbraun rösten und im Mörser grob mahlen.
2. Hähnchen fein hacken und mit 50 ml Wasser krümelig garen.
3. Mit Fischsoße, Limettensaft, Chili, Zwiebeln und Kräutern mischen.
4. Reispulver drüberstreuen und in Salatblättern servieren.

## Thai-Basilikum-Tofu
en: Thai basil tofu
es: Tofu con albahaca tailandesa
emoji: 🌿
typ: gericht
portionen: 3
tags: thailand, asiatisch, vegan, tofu, schnell
zutaten:
- Tofu (fest): 400 g
- Thai-Basilikum: 30 g
- Paprika: 200 g
- Grüne Bohnen: 150 g
- Knoblauch: 10 g
- Sojasoße: 40 g
- Zucker: 8 g
- Öl: 20 g
- Jasminreis (roh): 240 g
zubereitung:
1. Reis kochen. Tofu zerbröseln und im Öl knusprig braten.
2. Knoblauch, Paprika und Bohnen dazu und 4 Minuten braten.
3. Sojasoße und Zucker dazugeben.
4. Basilikum unterheben und mit Reis servieren.

## Pho Ga
en: Pho ga (chicken noodle soup)
es: Pho ga
emoji: 🍜
typ: gericht
portionen: 3
tags: vietnam, asiatisch, suppe, hähnchen, leicht
zutaten:
- Reisbandnudeln (roh): 200 g
- Hähnchenbrust: 400 g
- Hühnerbrühe (zubereitet): 1500 g
- Zwiebeln: 150 g
- Ingwer (frisch): 20 g
- Fischsoße: 30 g
- Bohnensprossen: 150 g
- Koriander (frisch): 10 g
- Limette: 60 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Zwiebel und Ingwer anrösten und mit der Brühe 20 Minuten köcheln.
2. Hähnchen darin 15 Minuten gar ziehen lassen, herausnehmen und zerzupfen.
3. Brühe mit Fischsoße abschmecken.
4. Nudeln kochen, in Schalen geben, Hähnchen und Brühe darüber, mit Sprossen, Kräutern und Limette servieren.

## Zitronengras-Hähnchen
en: Lemongrass chicken
es: Pollo con hierba limón
emoji: 🍋
typ: gericht
portionen: 4
tags: vietnam, asiatisch, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 700 g
- Zitronengras: 40 g
- Knoblauch: 10 g
- Fischsoße: 40 g
- Zucker: 20 g
- Öl: 15 g
- Jasminreis (roh): 300 g
- Gurke: 200 g
- Karotten: 150 g
- Reisessig: 30 g
zubereitung:
1. Zitronengras fein hacken und mit Knoblauch, Fischsoße, Zucker und Öl mischen.
2. Hähnchen darin 30 Minuten marinieren.
3. In der Pfanne oder unter dem Grill je Seite 6 Minuten braten.
4. Gurke und Karotte mit Reisessig marinieren und mit Reis und Hähnchen servieren.

## Thit Kho (Karamell-Schwein)
en: Thit kho (caramel pork)
es: Thit kho (cerdo caramelizado)
emoji: 🍖
typ: sauce
beilage: reis
portionen: 4
tags: vietnam, asiatisch, schwein
zutaten:
- Schweinebauch (roh): 600 g
- Zucker: 40 g
- Fischsoße: 40 g
- Kokosnusswasser (Dose): 300 g
- Eier: 240 g
- Knoblauch: 10 g
- Zwiebeln: 100 g
zubereitung:
1. Eier hart kochen und schälen. Zucker in einem Topf goldbraun karamellisieren.
2. Fleischwürfel, Zwiebel und Knoblauch dazugeben und rundum anbraten.
3. Fischsoße und Kokoswasser angießen, Eier dazu und 60 Minuten leise schmoren.
4. Soße einkochen lassen, bis sie glänzt.

## Bun Bo Nam Bo
en: Bun bo nam bo (beef noodle salad)
es: Bun bo nam bo
emoji: 🥗
typ: gericht
portionen: 3
tags: vietnam, asiatisch, rind, leicht
zutaten:
- Reisbandnudeln (roh): 200 g
- Rinderhüftsteak (roh): 350 g
- Zitronengras: 20 g
- Fischsoße: 40 g
- Zucker: 20 g
- Limette: 60 g
- Salatmischung (Tüte): 100 g
- Gurke: 150 g
- Bohnensprossen: 100 g
- Erdnüsse (geröstet, ungesalzen): 30 g
- Minze (frisch): 10 g
- Röstzwiebeln: 15 g
zubereitung:
1. Rind in dünne Streifen schneiden, mit Zitronengras und 10 g Fischsoße marinieren und scharf anbraten.
2. Restliche Fischsoße, Zucker, Limettensaft und 100 ml Wasser zum Dressing verrühren.
3. Nudeln kochen und abschrecken.
4. Mit Salat, Gemüse, Rind, Erdnüssen, Minze und Röstzwiebeln anrichten, Dressing darüber.

## Chow Mein mit Hähnchen
en: Chicken chow mein
es: Chow mein de pollo
emoji: 🍜
typ: gericht
portionen: 3
tags: china, asiatisch, nudeln, hähnchen, schnell
zutaten:
- Mie-Nudeln (roh): 250 g
- Hähnchenbrust: 350 g
- Weißkohl: 200 g
- Karotten: 120 g
- Bohnensprossen: 150 g
- Frühlingszwiebeln: 30 g
- Sojasoße: 40 g
- Austernsoße: 30 g
- Sesamöl: 10 g
- Öl: 20 g
zubereitung:
1. Nudeln kochen und abgießen. Hähnchen in Streifen scharf anbraten.
2. Kohl und Karotten 3 Minuten mitbraten.
3. Nudeln, Sprossen, Sojasoße, Austernsoße und Sesamöl zugeben.
4. Bei hoher Hitze 2 Minuten schwenken, Frühlingszwiebeln drüber.

## Tomaten-Ei-Pfanne (chinesisch)
en: Chinese tomato and egg stir-fry
es: Huevos revueltos chinos con tomate
emoji: 🍅
typ: sauce
beilage: reis
portionen: 2
tags: china, asiatisch, vegetarisch, schnell
zutaten:
- Eier: 300 g
- Tomaten: 400 g
- Frühlingszwiebeln: 30 g
- Zucker: 10 g
- Sojasoße: 15 g
- Speisestärke: 5 g
- Öl: 20 g
zubereitung:
1. Eier verquirlen und im Öl zu großen, weichen Flocken stocken lassen, herausnehmen.
2. Tomatenspalten 3 Minuten schmoren, bis sie Saft ziehen.
3. Zucker, Sojasoße und in Wasser angerührte Stärke dazugeben.
4. Eier zurück in die Pfanne, Frühlingszwiebeln drüber und mit Reis servieren.

## Sesam-Hähnchen
en: Sesame chicken
es: Pollo con sésamo
emoji: 🍗
typ: sauce
beilage: reis
portionen: 4
tags: china, asiatisch, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Speisestärke: 40 g
- Sojasoße: 50 g
- Honig: 40 g
- Reisessig: 15 g
- Knoblauch: 8 g
- Sesam: 20 g
- Sesamöl: 10 g
- Öl: 20 g
- Brokkoli: 400 g
zubereitung:
1. Hähnchen würfeln, in 30 g Stärke wälzen und im Öl knusprig braten.
2. Brokkoli dämpfen.
3. Sojasoße, Honig, Essig, Knoblauch, Sesamöl, restliche Stärke und 80 ml Wasser aufkochen.
4. Hähnchen in der Soße schwenken, mit Sesam bestreuen und mit Brokkoli servieren.

## Wan-Tan-Suppe
en: Wonton soup
es: Sopa wonton
emoji: 🥟
typ: gericht
portionen: 3
tags: china, asiatisch, suppe, schwein
zutaten:
- Wan-Tan-Blätter: 150 g
- Hackfleisch gemischt: 250 g
- Garnelen: 100 g
- Ingwer (frisch): 10 g
- Sojasoße: 30 g
- Sesamöl: 8 g
- Hühnerbrühe (zubereitet): 1200 g
- Pak Choi: 200 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Hack, gehackte Garnelen, Ingwer, 15 g Sojasoße und Sesamöl verkneten.
2. Je 1 TL Füllung auf ein Teigblatt, Ränder befeuchten und zu Säckchen formen.
3. Brühe mit restlicher Sojasoße aufkochen, Wan-Tans 4 Minuten darin garen.
4. Pak Choi kurz mitgaren, mit Frühlingszwiebeln servieren.

## Sauer-Scharf-Suppe
en: Hot and sour soup
es: Sopa agripicante
emoji: 🍲
typ: gericht
portionen: 4
tags: china, asiatisch, suppe, tofu
zutaten:
- Tofu (fest): 200 g
- Shiitake-Pilze: 150 g
- Bambussprossen (Dose): 150 g
- Mu-Err-Pilze (getrocknet): 10 g
- Hühnerbrühe (zubereitet): 1200 g
- Sojasoße: 40 g
- Reisessig: 40 g
- Chilipulver: 2 g
- Eier: 100 g
- Speisestärke: 20 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Mu-Err-Pilze einweichen und in Streifen schneiden.
2. Brühe aufkochen, Pilze, Bambus und Tofustreifen 5 Minuten darin garen.
3. Mit Sojasoße, Essig und Chili abschmecken, mit angerührter Stärke binden.
4. Verquirltes Ei in dünnem Strahl einrühren, mit Frühlingszwiebeln servieren.

## Char Siu mit Reis und Pak Choi
en: Char siu with rice and bok choy
es: Char siu con arroz y pak choi
emoji: 🍖
typ: gericht
portionen: 4
tags: china, asiatisch, schwein
zutaten:
- Schweinefilet (roh): 600 g
- Hoisin-Soße: 60 g
- Honig: 30 g
- Sojasoße: 30 g
- Fünf-Gewürze-Pulver: 2 g
- Knoblauch: 8 g
- Reis (trocken): 300 g
- Pak Choi: 400 g
zubereitung:
1. Hoisin, Honig, Sojasoße, Gewürz und Knoblauch verrühren, Fleisch darin mindestens 1 Stunde marinieren.
2. Bei 200 °C 25 Minuten braten, zwischendurch mit Marinade bestreichen.
3. Reis kochen, Pak Choi kurz dämpfen.
4. Fleisch in Scheiben schneiden und mit Reis und Pak Choi servieren.

## Skyr-Tiramisu
en: Skyr tiramisu
es: Tiramisú de skyr
emoji: ☕
typ: gericht
portionen: 6
tags: italien, süß, dessert, protein, fitness
zutaten:
- Skyr: 500 g
- Magerquark: 250 g
- Erythrit: 60 g
- Vanillezucker: 8 g
- Löffelbiskuits: 150 g
- Espresso: 200 g
- Backkakao: 10 g
zubereitung:
1. Skyr, Quark, Erythrit und Vanillezucker glatt rühren.
2. Löffelbiskuits kurz in kalten Espresso tauchen und eine Form damit auslegen.
3. Die Hälfte der Creme darauf, dann noch eine Schicht Biskuits und die restliche Creme.
4. Mindestens 4 Stunden kalt stellen und mit Kakao bestäuben.

## Apfel-Tiramisu
en: Apple tiramisu
es: Tiramisú de manzana
emoji: 🍎
typ: gericht
portionen: 6
tags: süß, dessert, protein, herbst
zutaten:
- Apfel: 600 g
- Zimt (gemahlen): 3 g
- Apfelsaft: 200 g
- Skyr: 400 g
- Magerquark: 250 g
- Erythrit: 50 g
- Vanillezucker: 8 g
- Löffelbiskuits: 150 g
zubereitung:
1. Äpfel würfeln und mit 50 ml Apfelsaft und Zimt 5 Minuten weich dünsten, abkühlen lassen.
2. Skyr, Quark, Erythrit und Vanillezucker verrühren.
3. Biskuits kurz in den restlichen Apfelsaft tauchen und schichten: Biskuits, Äpfel, Creme, nochmal von vorn.
4. 4 Stunden kühlen und mit Zimt bestäuben.

## Blaubeermuffins
en: Blueberry muffins
es: Magdalenas de arándanos
emoji: 🫐
typ: gericht
einheit: stück
portionen: 12
tags: backen, süß, muffins
zutaten:
- Dinkelmehl: 250 g
- Backpulver: 10 g
- Zucker: 100 g
- Eier: 100 g
- Joghurt natur: 200 g
- Rapsöl: 60 g
- Heidelbeeren (Blaubeeren): 200 g
- Vanillezucker: 8 g
zubereitung:
1. Ofen auf 180 °C vorheizen, Muffinform vorbereiten.
2. Mehl, Backpulver, Zucker und Vanillezucker mischen.
3. Eier, Joghurt und Öl verrühren und kurz unter die trockenen Zutaten heben.
4. Blaubeeren unterheben, in 12 Mulden füllen und 22 Minuten backen.

## Protein-Blaubeermuffins
en: Protein blueberry muffins
es: Magdalenas proteicas de arándanos
emoji: 🫐
typ: gericht
einheit: stück
portionen: 10
tags: backen, süß, protein, fitness
zutaten:
- Haferflocken (zart): 120 g
- Proteinpulver: 60 g
- Magerquark: 250 g
- Eier: 100 g
- Banane: 120 g
- Backpulver: 8 g
- Heidelbeeren (Blaubeeren): 150 g
zubereitung:
1. Ofen auf 180 °C vorheizen. Haferflocken fein mahlen.
2. Alle Zutaten außer den Blaubeeren glatt pürieren.
3. Blaubeeren unterheben und den Teig auf 10 Muffinmulden verteilen.
4. 20–22 Minuten backen.

## Mandarinen-Schmand-Kuchen (Protein)
en: Mandarin sour-cream protein cake
es: Tarta de mandarina y nata agria proteica
emoji: 🍊
typ: gericht
einheit: stück
portionen: 16
tags: kuchen, süß, protein, backen
zutaten:
- Dinkelmehl: 200 g
- Backpulver: 8 g
- Eier: 200 g
- Erythrit: 150 g
- Magerquark: 500 g
- Schmand: 200 g
- Puddingpulver: 40 g
- Mandarinen (Dose): 350 g
- Rapsöl: 40 g
- Vanillezucker: 8 g
zubereitung:
1. Für den Boden Mehl, Backpulver, 100 g Eier, 50 g Erythrit und Öl verrühren und in eine gefettete Springform streichen.
2. Quark, Schmand, restliche Eier und Erythrit, Puddingpulver und Vanillezucker glatt rühren.
3. Abgetropfte Mandarinen auf dem Boden verteilen und die Creme darüber geben.
4. Bei 170 °C 55 Minuten backen und vollständig auskühlen lassen. Ergibt 16 Stück.

## Käsekuchen klassisch (leicht)
en: Light classic cheesecake
es: Tarta de queso clásica ligera
emoji: 🍰
typ: gericht
einheit: stück
portionen: 12
tags: kuchen, süß, protein, backen
zutaten:
- Magerquark: 1000 g
- Eier: 200 g
- Erythrit: 150 g
- Puddingpulver: 40 g
- Zitrone: 40 g
- Milch (1,5 %): 150 g
- Butterkekse (Leibniz): 120 g
- Butter: 40 g
zubereitung:
1. Kekse zerbröseln, mit geschmolzener Butter mischen und als Boden in eine Springform drücken.
2. Quark, Eier, Erythrit, Puddingpulver, Milch und Zitronenabrieb glatt rühren.
3. Auf den Boden geben und bei 160 °C 60 Minuten backen.
4. Im ausgeschalteten Ofen bei geöffneter Tür auskühlen lassen, damit er nicht reißt.

## Marmorkuchen
en: Marble cake
es: Bizcocho mármol
emoji: 🍰
typ: gericht
einheit: stück
portionen: 16
tags: kuchen, süß, backen
zutaten:
- Mehl: 300 g
- Backpulver: 12 g
- Zucker: 200 g
- Butter: 200 g
- Eier: 250 g
- Milch (1,5 %): 120 g
- Backkakao: 25 g
- Vanillezucker: 8 g
zubereitung:
1. Butter, Zucker und Vanillezucker schaumig schlagen, Eier einzeln unterrühren.
2. Mehl mit Backpulver abwechselnd mit 100 ml Milch unterrühren.
3. Ein Drittel des Teigs mit Kakao und restlicher Milch mischen.
4. Hellen und dunklen Teig abwechselnd in eine Gugelhupfform füllen, mit einer Gabel marmorieren und bei 175 °C 50 Minuten backen.

## Apfelkuchen vom Blech
en: Sheet-pan apple cake
es: Tarta de manzana en bandeja
emoji: 🍎
typ: gericht
einheit: stück
portionen: 20
tags: kuchen, süß, backen, herbst
zutaten:
- Mehl: 400 g
- Backpulver: 12 g
- Zucker: 180 g
- Butter: 180 g
- Eier: 200 g
- Milch (1,5 %): 150 g
- Apfel: 1200 g
- Zimt (gemahlen): 4 g
- Mandeln gemahlen: 50 g
zubereitung:
1. Butter und Zucker schaumig rühren, Eier unterrühren, dann Mehl, Backpulver und Milch.
2. Teig auf ein Blech mit Backpapier streichen.
3. Äpfel in Spalten schneiden und dicht auf den Teig legen, mit Zimt und Mandeln bestreuen.
4. Bei 180 °C 35 Minuten backen.

## Schoko-Protein-Brownies
en: Chocolate protein brownies
es: Brownies proteicos de chocolate
emoji: 🍫
typ: gericht
einheit: stück
portionen: 12
tags: süß, protein, fitness, backen
zutaten:
- Kidneybohnen (abgetropft): 250 g
- Eier: 150 g
- Proteinpulver: 50 g
- Backkakao: 30 g
- Erythrit: 60 g
- Schokolade (Zartbitter): 60 g
- Backpulver: 5 g
- Erdnussmus (100 % Erdnüsse): 40 g
zubereitung:
1. Ofen auf 175 °C vorheizen. Bohnen gut abspülen.
2. Alles außer der Schokolade fein pürieren.
3. Gehackte Schokolade unterheben und in eine kleine Form streichen.
4. 20 Minuten backen – innen dürfen sie noch saftig sein. In 12 Stücke schneiden.

## Chocolate Chip Cookies
en: Chocolate chip cookies
es: Galletas con pepitas de chocolate
emoji: 🍪
typ: gericht
einheit: stück
portionen: 20
tags: cookies, süß, backen
zutaten:
- Mehl: 250 g
- Butter: 125 g
- Zucker: 100 g
- Brauner Zucker: 80 g
- Eier: 50 g
- Vanillezucker: 8 g
- Backpulver: 4 g
- Schokotropfen: 150 g
zubereitung:
1. Weiche Butter mit beiden Zuckern cremig rühren, Ei und Vanillezucker dazu.
2. Mehl, Backpulver und eine Prise Salz unterrühren, Schokotropfen unterheben.
3. Walnussgroße Kugeln mit Abstand aufs Blech setzen und leicht flach drücken.
4. Bei 180 °C 10–11 Minuten backen – sie sind noch weich, werden aber beim Abkühlen fest.

## Protein-Cookies
en: Protein cookies
es: Galletas proteicas
emoji: 🍪
typ: gericht
einheit: stück
portionen: 12
tags: cookies, süß, protein, fitness
zutaten:
- Haferflocken (zart): 100 g
- Proteinpulver: 60 g
- Erdnussmus (100 % Erdnüsse): 80 g
- Banane: 120 g
- Eier: 50 g
- Backpulver: 3 g
- Schokotropfen: 40 g
zubereitung:
1. Ofen auf 180 °C vorheizen. Banane zerdrücken und mit Erdnussmus und Ei verrühren.
2. Haferflocken, Proteinpulver und Backpulver unterrühren, Schokotropfen unterheben.
3. 12 Kugeln formen, aufs Blech setzen und flach drücken.
4. 10 Minuten backen.

## Haferkekse mit Rosinen
en: Oat raisin cookies
es: Galletas de avena con pasas
emoji: 🍪
typ: gericht
einheit: stück
portionen: 20
tags: cookies, süß, backen
zutaten:
- Haferflocken: 200 g
- Mehl: 100 g
- Butter: 100 g
- Brauner Zucker: 100 g
- Eier: 50 g
- Rosinen: 80 g
- Zimt (gemahlen): 2 g
- Backpulver: 4 g
zubereitung:
1. Butter und Zucker cremig rühren, Ei unterrühren.
2. Haferflocken, Mehl, Backpulver und Zimt dazu, Rosinen unterheben.
3. Kleine Häufchen aufs Blech setzen und flach drücken.
4. Bei 175 °C 12 Minuten goldbraun backen.

## Vanillekipferl
en: Vanilla crescents
es: Medialunas de vainilla
emoji: 🌙
typ: gericht
einheit: stück
portionen: 40
tags: cookies, weihnachten, süß, österreich
zutaten:
- Mehl: 210 g
- Mandeln gemahlen: 70 g
- Butter: 175 g
- Zucker: 60 g
- Eigelb: 40 g
- Vanillezucker: 16 g
- Puderzucker: 40 g
zubereitung:
1. Mehl, Mandeln, kalte Butterstücke, Zucker und Eigelb rasch zu einem Teig kneten, 30 Minuten kühlen.
2. Kleine Kipferl formen und aufs Blech setzen.
3. Bei 175 °C 10–12 Minuten hell backen.
4. Noch warm in Puderzucker mit Vanillezucker wälzen.

## Sauerkraut-Schupfnudeln mit Speck
en: Potato noodles with sauerkraut and bacon
es: Schupfnudeln con chucrut y bacon
emoji: 🥓
typ: gericht
portionen: 4
tags: deutschland, bayern, weihnachtsmarkt, schnell
zutaten:
- Schupfnudeln (Packung): 800 g
- Sauerkraut (abgetropft): 500 g
- Bacon: 150 g
- Zwiebeln: 150 g
- Rapsöl: 20 g
- Kümmel: 2 g
- Gemüsebrühe (zubereitet): 100 g
zubereitung:
1. Speck würfeln und in einer großen Pfanne knusprig auslassen, Zwiebeln dazu und glasig braten.
2. Schupfnudeln mit dem Öl dazugeben und rundum goldbraun braten.
3. Sauerkraut, Kümmel und Brühe unterheben und 5 Minuten mitbraten, bis das Kraut heiß ist.
4. Mit Pfeffer abschmecken.

## Sauerkraut-Schupfnudeln vegetarisch
en: Vegetarian potato noodles with sauerkraut
es: Schupfnudeln con chucrut vegetarianos
emoji: 🥬
typ: gericht
portionen: 4
tags: deutschland, vegetarisch, schnell
zutaten:
- Schupfnudeln (Packung): 800 g
- Sauerkraut (abgetropft): 500 g
- Zwiebeln: 150 g
- Champignons: 250 g
- Räuchertofu: 200 g
- Rapsöl: 25 g
- Kümmel: 2 g
zubereitung:
1. Räuchertofu würfeln und im Öl knusprig braten.
2. Zwiebeln und Pilze dazu, 4 Minuten braten.
3. Schupfnudeln dazugeben und goldbraun braten.
4. Sauerkraut und Kümmel unterheben und heiß werden lassen.

## Selbstgemachte Tortellini mit Ricotta-Spinat
en: Homemade ricotta spinach tortellini
es: Tortellini caseros de ricotta y espinacas
emoji: 🥟
typ: gericht
portionen: 4
tags: italien, nudeln, vegetarisch, selbstgemacht
zutaten:
- Mehl: 300 g
- Eier: 150 g
- Ricotta: 250 g
- Spinat: 200 g
- Parmesan: 50 g
- Butter: 30 g
- Salbei (frisch): 5 g
zubereitung:
1. Mehl und Eier zu einem glatten Teig kneten (sehr fest, ca. 10 Minuten), in Folie 30 Minuten ruhen lassen.
2. Spinat zusammenfallen lassen, gut ausdrücken, fein hacken und mit Ricotta und 30 g Parmesan mischen.
3. Teig hauchdünn ausrollen, 6-cm-Quadrate schneiden, je 1 TL Füllung in die Mitte, zum Dreieck falten und die Spitzen um den Finger zu Ringen drücken.
4. In Salzwasser 3 Minuten ziehen lassen und in Salbeibutter mit restlichem Parmesan schwenken.

## Tortellini alla Panna leicht
en: Light tortellini alla panna
es: Tortellini a la nata ligeros
emoji: 🥟
typ: gericht
portionen: 3
tags: italien, nudeln, schnell
zutaten:
- Tortellini (frisch, Packung): 500 g
- Kochschinken: 150 g
- Erbsen (TK): 150 g
- Cremefine 7 %: 200 g
- Parmesan: 30 g
- Muskatnuss: 1 g
zubereitung:
1. Tortellini nach Packung kochen.
2. Schinkenstreifen kurz anbraten, Erbsen dazugeben.
3. Cremefine angießen, mit Muskat, Salz und Pfeffer würzen und 3 Minuten köcheln.
4. Tortellini unterheben und mit Parmesan servieren.

## Jägerschnitzel mit Spätzle
en: Hunter's schnitzel with spätzle
es: Escalope cazador con spätzle
emoji: 🍄
typ: gericht
portionen: 4
tags: deutschland, klassiker, schwein, pilze
zutaten:
- Schweineschnitzel (roh): 600 g
- Champignons: 400 g
- Zwiebeln: 100 g
- Bacon: 60 g
- Kochsahne (15 %): 150 g
- Rinderbrühe (zubereitet): 250 g
- Mehl: 20 g
- Rapsöl: 20 g
- Spätzle (frisch): 500 g
- Petersilie (frisch): 10 g
zubereitung:
1. Schnitzel dünn klopfen, salzen, in Mehl wenden und im Öl je Seite 3 Minuten braten, warm stellen.
2. Speck und Zwiebeln im Bratfett anbraten, Pilze in Scheiben dazu und 5 Minuten braten.
3. Mit Brühe und Sahne ablöschen und 5 Minuten einköcheln lassen.
4. Spätzle erhitzen und alles mit der Pilzsoße und Petersilie servieren.

## Jägerschnitzel paniert (DDR-Art)
en: Breaded jagdwurst schnitzel (East German style)
es: Escalope de Jagdwurst empanado
emoji: 🍝
typ: gericht
portionen: 3
tags: deutschland, klassiker
zutaten:
- Jagdwurst: 450 g
- Eier: 100 g
- Semmelbrösel: 80 g
- Mehl: 30 g
- Rapsöl: 40 g
- Nudeln (trocken): 250 g
- Passierte Tomaten: 400 g
- Tomatenmark: 20 g
- Zucker: 10 g
- Zwiebeln: 80 g
zubereitung:
1. Jagdwurst in 1 cm dicke Scheiben schneiden, in Mehl, Ei und Bröseln panieren.
2. Im Öl je Seite 2 Minuten goldbraun braten.
3. Zwiebeln anschwitzen, Tomatenmark, passierte Tomaten und Zucker dazu, 10 Minuten köcheln.
4. Mit Spirelli oder anderen Nudeln servieren.

## Waldpilz-Rahmsoße mit Semmelknödeln
en: Wild mushroom cream sauce with bread dumplings
es: Salsa cremosa de setas con albóndigas de pan
emoji: 🍄
typ: gericht
portionen: 4
tags: bayern, österreich, vegetarisch, pilze
zutaten:
- Champignons: 300 g
- Pfifferlinge: 200 g
- Kräuterseitlinge: 200 g
- Zwiebeln: 100 g
- Kochsahne (15 %): 200 g
- Gemüsebrühe (zubereitet): 200 g
- Butter: 20 g
- Petersilie (frisch): 15 g
- Semmelknödel (Packung): 640 g
zubereitung:
1. Pilze putzen und in Stücke schneiden, portionsweise in Butter scharf anbraten.
2. Zwiebeln dazugeben und glasig dünsten.
3. Mit Brühe und Sahne ablöschen und 5 Minuten einköcheln.
4. Knödel nach Packung garen und mit der Soße und viel Petersilie servieren.

## Jägersoße selbstgemacht
en: Homemade hunter's sauce
es: Salsa cazadora casera
emoji: 🍄
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, pilze, deutschland
zutaten:
- Champignons: 400 g
- Zwiebeln: 100 g
- Bacon: 50 g
- Tomatenmark: 20 g
- Rinderbrühe (zubereitet): 400 g
- Saure Sahne (10 %): 100 g
- Speisestärke: 15 g
- Rapsöl: 10 g
zubereitung:
1. Speck und Zwiebeln im Öl anbraten, Pilze dazu und kräftig braten.
2. Tomatenmark kurz mitrösten und mit Brühe ablöschen.
3. 10 Minuten köcheln und mit angerührter Stärke binden.
4. Vom Herd nehmen, saure Sahne einrühren und abschmecken.

## Schweinebraten mit Semmelknödeln
en: Bavarian roast pork with bread dumplings
es: Asado de cerdo bávaro con albóndigas de pan
emoji: 🍖
typ: gericht
portionen: 6
tags: bayern, schwein, klassiker, sonntag
zutaten:
- Schweinebraten (Schulter, roh): 1500 g
- Zwiebeln: 200 g
- Karotten: 200 g
- Knoblauch: 10 g
- Kümmel: 4 g
- Senf: 20 g
- Bier (Pils): 330 g
- Rinderbrühe (zubereitet): 300 g
- Semmelknödel (Packung): 960 g
- Weißkohl: 500 g
zubereitung:
1. Fleisch mit Salz, Kümmel, Knoblauch und Senf einreiben.
2. Mit der Schwarte nach unten mit etwas Wasser in einen Bräter legen und bei 180 °C 30 Minuten garen.
3. Umdrehen, Schwarte einschneiden, Gemüse dazu, mit Bier und Brühe aufgießen und weitere 2 Stunden braten, dabei immer wieder übergießen. Zum Schluss bei 230 °C kross werden lassen.
4. Soße abseihen und mit Knödeln und Krautsalat servieren.

## Bayerischer Krautsalat
en: Bavarian coleslaw
es: Ensalada de col bávara
emoji: 🥬
typ: gericht
portionen: 4
tags: bayern, salat, vegan, beilage
zutaten:
- Weißkohl: 600 g
- Zwiebeln: 60 g
- Essig (Weißwein): 50 g
- Rapsöl: 20 g
- Kümmel: 2 g
- Zucker: 10 g
zubereitung:
1. Kohl sehr fein hobeln, salzen und kräftig durchkneten.
2. Essig mit 100 ml heißem Wasser, Zucker und Kümmel aufkochen.
3. Heiß über den Kohl gießen, Zwiebeln und Öl untermischen.
4. Mindestens 1 Stunde durchziehen lassen.

## Leberkäse mit Spiegelei und Kartoffelsalat
en: Leberkäse with fried egg and potato salad
es: Leberkäse con huevo frito y ensalada de patata
emoji: 🍳
typ: gericht
portionen: 4
tags: bayern, klassiker
zutaten:
- Leberkäse (Scheibe): 600 g
- Eier: 240 g
- Kartoffeln (festkochend): 800 g
- Gurke: 200 g
- Zwiebeln: 60 g
- Gemüsebrühe (zubereitet): 150 g
- Essig (Weißwein): 30 g
- Rapsöl: 15 g
- Süßer Senf: 40 g
zubereitung:
1. Kartoffeln kochen, schälen und warm in Scheiben schneiden, mit Zwiebeln, heißer Brühe und Essig marinieren, Gurkenscheiben unterheben.
2. Leberkäse in einer Pfanne von beiden Seiten knusprig braten.
3. Spiegeleier braten.
4. Mit Kartoffelsalat und süßem Senf servieren.

## Fleischpflanzerl mit Kartoffelpüree
en: Bavarian meat patties with mashed potatoes
es: Albóndigas bávaras con puré
emoji: 🍔
typ: gericht
portionen: 4
tags: bayern, hack, klassiker
zutaten:
- Hackfleisch gemischt: 500 g
- Brötchen / Semmel (Weizen): 60 g
- Milch (1,5 %): 100 g
- Eier: 50 g
- Zwiebeln: 80 g
- Majoran (getrocknet): 2 g
- Senf: 15 g
- Rapsöl: 20 g
- Kartoffeln (mehlig): 800 g
- Butter: 20 g
zubereitung:
1. Brötchen in Milch einweichen und ausdrücken. Mit Hack, Ei, Zwiebel, Majoran und Senf verkneten.
2. 8 flache Pflanzerl formen und im Öl je Seite 5 Minuten braten.
3. Kartoffeln kochen und mit Butter und der restlichen Milch zu Püree stampfen.
4. Zusammen servieren.

## Obatzda mit Brezen
en: Obatzda with pretzels
es: Obatzda con pretzels
emoji: 🥨
typ: gericht
portionen: 4
tags: bayern, jause, vegetarisch
zutaten:
- Camembert: 250 g
- Frischkäse (mager / 0,2 %): 100 g
- Butter: 20 g
- Zwiebeln: 50 g
- Paprikapulver (edelsüß): 4 g
- Kümmel: 1 g
- Laugenbrezel: 340 g
- Radieschen: 150 g
zubereitung:
1. Camembert mit einer Gabel fein zerdrücken.
2. Mit Frischkäse, weicher Butter, sehr fein gehackter Zwiebel, Paprikapulver und Kümmel verrühren.
3. Mit Salz und Pfeffer abschmecken und 30 Minuten kühlen.
4. Mit Brezen und Radieschen servieren.

## Brezenknödel mit Rahmschwammerl
en: Pretzel dumplings with creamy mushrooms
es: Albóndigas de pretzel con setas a la crema
emoji: 🥨
typ: gericht
portionen: 4
tags: bayern, vegetarisch, pilze
zutaten:
- Brezen vom Vortag (für Knödel): 340 g
- Milch (1,5 %): 250 g
- Eier: 150 g
- Zwiebeln: 100 g
- Petersilie (frisch): 15 g
- Butter: 20 g
- Champignons: 500 g
- Kochsahne (15 %): 200 g
- Gemüsebrühe (zubereitet): 150 g
zubereitung:
1. Brezen würfeln, mit heißer Milch übergießen, Eier, gedünstete Zwiebeln und Petersilie untermischen und 15 Minuten ziehen lassen.
2. 8 Knödel formen und in siedendem Salzwasser 20 Minuten ziehen lassen.
3. Pilze in Butter anbraten, mit Brühe und Sahne ablöschen und einkochen.
4. Knödel mit der Rahmsoße servieren.

## Weißwurstfrühstück
en: Bavarian white sausage breakfast
es: Desayuno bávaro con salchicha blanca
emoji: 🥨
typ: gericht
portionen: 2
tags: bayern, frühstück, klassiker
zutaten:
- Weißwurst (Stück): 320 g
- Laugenbrezel: 170 g
- Süßer Senf: 40 g
zubereitung:
1. Wasser erhitzen, aber nicht kochen lassen.
2. Weißwürste darin 10 Minuten ziehen lassen.
3. Mit Brezen und süßem Senf servieren – traditionell vor 12 Uhr.

## Dampfnudeln mit Vanillesoße
en: Steamed yeast dumplings with custard
es: Dampfnudeln con natillas
emoji: 🥟
typ: gericht
portionen: 6
tags: bayern, süß, klassiker
zutaten:
- Mehl: 500 g
- Trockenhefe: 7 g
- Milch (1,5 %): 350 g
- Zucker: 50 g
- Butter: 60 g
- Eier: 50 g
- Vanillesoße: 600 g
zubereitung:
1. Mehl, Hefe, 250 ml lauwarme Milch, 30 g Zucker, 30 g Butter und Ei zu einem Teig kneten, 1 Stunde gehen lassen.
2. 12 Kugeln formen und nochmals 20 Minuten gehen lassen.
3. In einem großen Topf mit Deckel restliche Milch, Butter und Zucker erhitzen, Kugeln hineinsetzen, Deckel zu und 25 Minuten bei mittlerer Hitze garen (nicht öffnen!), bis unten eine Kruste entsteht.
4. Mit Vanillesoße servieren.

## Handbrot mit Schinken und Käse
en: Handbrot with ham and cheese
es: Handbrot de jamón y queso
emoji: 🍞
typ: gericht
portionen: 4
tags: weihnachtsmarkt, brot, deutschland
zutaten:
- Mehl: 400 g
- Trockenhefe: 7 g
- Rapsöl: 20 g
- Kochschinken: 200 g
- Käse gerieben: 150 g
- Zwiebeln: 80 g
- Saure Sahne (10 %): 150 g
- Schnittlauch: 10 g
zubereitung:
1. Mehl, Hefe, Öl, Salz und 250 ml lauwarmes Wasser zu einem Teig kneten und 1 Stunde gehen lassen.
2. Schinken würfeln, mit Käse und Zwiebeln mischen.
3. Teig vierteln, flach drücken, Füllung darauf geben, einschlagen und zu Laiben formen.
4. Bei 220 °C 25 Minuten backen, aufschneiden und mit Schnittlauch-Sauerrahm servieren.

## Glühwein selbstgemacht
en: Homemade mulled wine
es: Vino caliente casero
emoji: 🍷
typ: gericht
portionen: 6
tags: weihnachtsmarkt, getränk, weihnachten
zutaten:
- Rotwein: 750 g
- Orangensaft: 250 g
- Zucker: 60 g
- Zimt (gemahlen): 2 g
- Glühweingewürz: 6 g
- Orange: 150 g
zubereitung:
1. Wein, Orangensaft, Zucker und Gewürze in einen Topf geben.
2. Orange in Scheiben schneiden und dazugeben.
3. Langsam erhitzen und 30 Minuten knapp unter dem Siedepunkt ziehen lassen (nicht kochen, sonst verfliegt der Alkohol und es wird bitter).
4. Durch ein Sieb abgießen und heiß servieren.

## Kinderpunsch selbstgemacht
en: Homemade children's punch
es: Ponche infantil casero
emoji: 🍹
typ: gericht
portionen: 6
tags: weihnachtsmarkt, getränk, alkoholfrei
zutaten:
- Früchtetee: 750 g
- Apfelsaft: 250 g
- Orangensaft: 250 g
- Honig: 30 g
- Glühweingewürz: 6 g
- Orange: 100 g
zubereitung:
1. Tee kochen und mit den Säften in einen Topf geben.
2. Honig, Gewürze und Orangenscheiben dazu.
3. 15 Minuten sanft ziehen lassen.
4. Abseihen und heiß servieren.

## Gebrannte Mandeln selbstgemacht
en: Homemade candied almonds
es: Almendras garrapiñadas caseras
emoji: 🥜
typ: gericht
portionen: 8
tags: weihnachtsmarkt, süß, snack
zutaten:
- Mandeln (ganz): 200 g
- Zucker: 100 g
- Zimt (gemahlen): 2 g
- Vanillezucker: 8 g
zubereitung:
1. Zucker, Vanillezucker, Zimt und 50 ml Wasser in einer beschichteten Pfanne aufkochen.
2. Mandeln dazugeben und unter ständigem Rühren kochen, bis der Zucker trocken und sandig wird.
3. Weiter rühren, bis der Zucker wieder schmilzt und die Mandeln glänzend überzieht.
4. Auf Backpapier ausbreiten, trennen und abkühlen lassen.

## Bratäpfel mit Nüssen und Vanillesoße
en: Baked apples with nuts and custard
es: Manzanas asadas con nueces y natillas
emoji: 🍎
typ: gericht
portionen: 4
tags: weihnachten, süß, dessert
zutaten:
- Apfel: 800 g
- Walnüsse: 40 g
- Rosinen: 40 g
- Honig: 30 g
- Zimt (gemahlen): 2 g
- Butter: 15 g
- Vanillesoße: 400 g
zubereitung:
1. Äpfel waschen und das Kerngehäuse ausstechen.
2. Nüsse hacken und mit Rosinen, Honig und Zimt mischen, in die Äpfel füllen.
3. Butterflöckchen darauf setzen und bei 180 °C 30 Minuten backen.
4. Mit warmer Vanillesoße servieren.

## Maroni aus dem Ofen
en: Oven-roasted chestnuts
es: Castañas al horno
emoji: 🌰
typ: gericht
portionen: 4
tags: weihnachten, snack, vegan
zutaten:
- Maroni (roh): 600 g
- Wasser: 200 g
zubereitung:
1. Maroni auf der gewölbten Seite kreuzweise einschneiden.
2. 30 Minuten in Wasser einweichen.
3. Auf einem Blech mit einer Schale Wasser im Ofen bei 220 °C 20–25 Minuten rösten, bis die Schale aufspringt.
4. Kurz in ein Tuch wickeln, dann schälen und warm essen.

## Currywurst klassisch
en: Classic currywurst
es: Currywurst clásica
emoji: 🌭
typ: gericht
portionen: 4
tags: deutschland, berlin, klassiker, imbiss
zutaten:
- Thüringer Rostbratwurst: 500 g
- Passierte Tomaten: 400 g
- Tomatenmark: 30 g
- Zwiebeln: 80 g
- Currypulver: 12 g
- Paprikapulver (edelsüß): 4 g
- Zucker: 20 g
- Essig (Weißwein): 15 g
- Rapsöl: 15 g
zubereitung:
1. Zwiebeln im Öl glasig dünsten, Currypulver und Paprikapulver kurz mitrösten.
2. Tomatenmark, passierte Tomaten, Zucker und Essig dazugeben und 15 Minuten köcheln, fein pürieren.
3. Würste rundum braten und in Scheiben schneiden.
4. Mit der Soße übergießen und mit Currypulver bestäuben.

## Gefüllte Zucchini mit Hack und Feta
en: Courgettes stuffed with mince and feta
es: Calabacines rellenos de carne picada y feta
emoji: 🥒
typ: gericht
portionen: 4
tags: low carb, fitness, hack, mealprep
zutaten:
- Zucchini: 1000 g
- Rinderhack: 400 g
- Zwiebeln: 80 g
- Passierte Tomaten: 400 g
- Feta: 100 g
- Knoblauch: 6 g
- Oregano (getrocknet): 2 g
- Olivenöl: 10 g
zubereitung:
1. Zucchini längs halbieren, Fruchtfleisch herauskratzen und hacken.
2. Hack mit Zwiebel, Knoblauch und gehacktem Fruchtfleisch anbraten, mit Oregano würzen.
3. Passierte Tomaten in eine Form gießen, Zucchini hineinsetzen und mit Hack füllen.
4. Feta darüberbröseln und bei 200 °C 25 Minuten backen.

## Gefüllte Zucchini vegetarisch mit Couscous
en: Vegetarian courgettes stuffed with couscous
es: Calabacines rellenos de cuscús
emoji: 🥒
typ: gericht
portionen: 4
tags: vegetarisch, mealprep
zutaten:
- Zucchini: 1000 g
- Couscous (trocken): 150 g
- Kirschtomaten: 200 g
- Feta: 150 g
- Petersilie (frisch): 15 g
- Zitrone: 30 g
- Passierte Tomaten: 300 g
- Olivenöl: 15 g
zubereitung:
1. Zucchini halbieren und aushöhlen. Couscous mit 150 ml kochendem Wasser übergießen und 5 Minuten quellen lassen.
2. Fruchtfleisch hacken und mit Couscous, Tomaten, Petersilie, Zitronensaft, Öl und der Hälfte des Fetas mischen.
3. Zucchini füllen, auf die Tomatensoße in eine Form setzen und mit restlichem Feta bestreuen.
4. Bei 200 °C 25 Minuten backen.

## Gefüllte Paprika mit Reis und Feta
en: Peppers stuffed with rice and feta
es: Pimientos rellenos de arroz y feta
emoji: 🫑
typ: gericht
portionen: 4
tags: vegetarisch, mealprep
zutaten:
- Paprika: 800 g
- Reis (trocken): 150 g
- Feta: 150 g
- Mais (abgetropft): 100 g
- Zwiebeln: 80 g
- Passierte Tomaten: 400 g
- Paprikapulver (edelsüß): 4 g
- Petersilie (frisch): 10 g
zubereitung:
1. Reis kochen. Paprika köpfen und entkernen.
2. Reis mit Feta, Mais, gedünsteter Zwiebel, Paprikapulver und Petersilie mischen.
3. Paprika füllen, in die Tomatensoße setzen und Deckel aufsetzen.
4. Bei 190 °C 40 Minuten schmoren.

## Obstsalat mit Joghurt-Dip
en: Fruit salad with yoghurt dip
es: Macedonia con salsa de yogur
emoji: 🍓
typ: gericht
portionen: 4
tags: süß, frühstück, leicht, vegetarisch
zutaten:
- Apfel: 200 g
- Banane: 150 g
- Orange: 200 g
- Kiwi: 150 g
- Weintrauben: 150 g
- Erdbeeren: 150 g
- Zitrone: 20 g
- Griechischer Joghurt 0 %: 250 g
- Honig: 20 g
zubereitung:
1. Obst waschen, schälen und in mundgerechte Stücke schneiden.
2. Mit Zitronensaft mischen, damit Apfel und Banane nicht braun werden.
3. Joghurt mit Honig verrühren.
4. Obstsalat mit dem Joghurt-Dip servieren.

## Exotischer Obstsalat
en: Tropical fruit salad
es: Macedonia tropical
emoji: 🥭
typ: gericht
portionen: 4
tags: süß, leicht, vegan
zutaten:
- Mango: 300 g
- Ananas: 300 g
- Papaya: 200 g
- Maracuja: 60 g
- Kiwi: 150 g
- Limette: 30 g
- Minze (frisch): 5 g
zubereitung:
1. Mango, Ananas, Papaya und Kiwi in Würfel schneiden.
2. Maracuja auslöffeln und mit Limettensaft untermischen.
3. Mit gehackter Minze bestreuen und kalt servieren.

## Sunomono (japanischer Gurkensalat)
en: Sunomono (Japanese cucumber salad)
es: Sunomono (ensalada japonesa de pepino)
emoji: 🥒
typ: gericht
portionen: 4
tags: japan, asiatisch, salat, vegan, beilage
zutaten:
- Gurke: 500 g
- Reisessig: 50 g
- Zucker: 15 g
- Sojasoße: 10 g
- Sesam: 8 g
- Wakame (getrocknet): 5 g
zubereitung:
1. Gurke hauchdünn hobeln, leicht salzen und 10 Minuten ziehen lassen, dann gut ausdrücken.
2. Wakame 5 Minuten einweichen und ausdrücken.
3. Reisessig, Zucker und Sojasoße verrühren, bis sich der Zucker löst.
4. Alles mischen und mit Sesam bestreuen.

## Smashed Cucumber Salad (chinesisch)
en: Chinese smashed cucumber salad
es: Ensalada china de pepino machacado
emoji: 🥒
typ: gericht
portionen: 3
tags: china, asiatisch, salat, vegan, scharf
zutaten:
- Gurke: 500 g
- Knoblauch: 8 g
- Reisessig: 20 g
- Sojasoße: 20 g
- Sesamöl: 10 g
- Chiliöl (Lao Gan Ma): 10 g
- Zucker: 5 g
- Sesam: 5 g
zubereitung:
1. Gurken mit der flachen Messerseite andrücken, bis sie aufplatzen, dann in Stücke schneiden.
2. Salzen und 10 Minuten Wasser ziehen lassen, abgießen.
3. Knoblauch, Essig, Sojasoße, Sesamöl, Chiliöl und Zucker verrühren.
4. Über die Gurken geben und mit Sesam bestreuen.

## Edamame mit Meersalz und Chili
en: Edamame with sea salt and chilli
es: Edamame con sal marina y chile
emoji: 🫛
typ: gericht
portionen: 2
tags: japan, asiatisch, snack, vegan, protein
zutaten:
- Edamame: 400 g
- Salz: 4 g
- Sesamöl: 5 g
- Chilipulver: 1 g
- Knoblauch: 4 g
zubereitung:
1. Edamame in kochendem Salzwasser 4 Minuten garen und abgießen.
2. Mit Sesamöl, Knoblauch und Chili in der Pfanne kurz schwenken.
3. Mit grobem Meersalz bestreuen und warm servieren.

## Tantan-Ramen
en: Tantanmen (sesame chilli ramen)
es: Ramen tantan
emoji: 🍜
typ: gericht
portionen: 2
tags: japan, china, asiatisch, suppe, scharf
zutaten:
- Ramen-Nudeln (frisch): 260 g
- Hackfleisch gemischt: 200 g
- Tahin: 50 g
- Sojasoße: 30 g
- Chiliöl (Lao Gan Ma): 20 g
- Miso-Paste: 20 g
- Hühnerbrühe (zubereitet): 800 g
- Milch (1,5 %): 150 g
- Pak Choi: 150 g
- Eier: 120 g
- Frühlingszwiebeln: 20 g
- Knoblauch: 6 g
zubereitung:
1. Hack mit Knoblauch und 10 g Sojasoße knusprig braten.
2. Tahin, Miso, restliche Sojasoße und Chiliöl in die Schalen geben.
3. Brühe und Milch erhitzen (nicht kochen) und in die Schalen gießen, gut verrühren.
4. Nudeln und Pak Choi kochen, in die Suppe geben, mit Hack, halbiertem Ei und Frühlingszwiebeln toppen.

## Karaage mit Reis und Kohlsalat
en: Karaage with rice and cabbage salad
es: Karaage con arroz y ensalada de col
emoji: 🍗
typ: gericht
portionen: 4
tags: japan, asiatisch, hähnchen
zutaten:
- Hähnchenschenkel (roh): 700 g
- Sojasoße: 40 g
- Ingwer (frisch): 15 g
- Knoblauch: 8 g
- Speisestärke: 80 g
- Rapsöl: 50 g
- Reis (trocken): 280 g
- Weißkohl: 300 g
- Japanische Mayonnaise (Kewpie): 30 g
- Zitrone: 40 g
zubereitung:
1. Hähnchen in Stücke schneiden und mit Sojasoße, Ingwer und Knoblauch 30 Minuten marinieren.
2. In Stärke wälzen und im heißen Öl portionsweise 5–6 Minuten goldbraun ausbacken.
3. Reis kochen, Kohl hauchdünn hobeln.
4. Mit Zitronenspalten und Mayo servieren.

## Katsudon
en: Katsudon (pork cutlet rice bowl)
es: Katsudon
emoji: 🍳
typ: gericht
portionen: 3
tags: japan, asiatisch, schwein
zutaten:
- Schweineschnitzel (roh): 450 g
- Panko: 80 g
- Eier: 250 g
- Mehl: 30 g
- Rapsöl: 40 g
- Zwiebeln: 150 g
- Dashi (zubereitet): 200 g
- Sojasoße: 40 g
- Mirin: 30 g
- Reis (trocken): 240 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Schnitzel in Mehl, 50 g Ei und Panko panieren, im Öl knusprig braten und in Streifen schneiden.
2. Dashi, Sojasoße, Mirin und Zwiebeln aufkochen, 5 Minuten köcheln.
3. Schnitzelstreifen hineinlegen, restliche verquirlte Eier darübergießen und zugedeckt 1 Minute stocken lassen.
4. Auf Reis gleiten lassen und mit Frühlingszwiebeln bestreuen.

## Miso-Lachs mit Gemüsereis
en: Miso salmon with vegetable rice
es: Salmón al miso con arroz de verduras
emoji: 🐟
typ: gericht
portionen: 3
tags: japan, asiatisch, lachs, fisch, protein
zutaten:
- Lachs (roh): 450 g
- Miso-Paste: 40 g
- Mirin: 20 g
- Honig: 10 g
- Reis (trocken): 210 g
- Edamame (TK, geschält): 150 g
- Karotten: 120 g
- Frühlingszwiebeln: 20 g
- Sesam: 6 g
zubereitung:
1. Miso, Mirin und Honig verrühren, Lachs damit bestreichen.
2. Bei 210 °C 12 Minuten backen, bis die Glasur karamellisiert.
3. Reis kochen, Edamame und Karottenwürfel die letzten 4 Minuten mitgaren.
4. Lachs auf dem Gemüsereis anrichten, mit Sesam und Frühlingszwiebeln.

## Yakitori-Spieße mit Reis
en: Yakitori skewers with rice
es: Brochetas yakitori con arroz
emoji: 🍢
typ: gericht
portionen: 4
tags: japan, asiatisch, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 600 g
- Frühlingszwiebeln: 150 g
- Sojasoße: 60 g
- Mirin: 40 g
- Zucker: 20 g
- Sake: 30 g
- Reis (trocken): 280 g
- Gurke: 200 g
zubereitung:
1. Sojasoße, Mirin, Zucker und Sake 5 Minuten zu einer Glasur einkochen.
2. Hähnchen in Würfel und Frühlingszwiebeln in Stücke schneiden, abwechselnd aufspießen.
3. In der Grillpfanne rundum 10 Minuten braten und dabei mehrmals mit Glasur bestreichen.
4. Mit Reis und Gurke servieren.

## Hainan-Hähnchenreis
en: Hainanese chicken rice
es: Arroz con pollo de Hainan
emoji: 🍚
typ: gericht
portionen: 4
tags: singapur, china, asiatisch, hähnchen
zutaten:
- Hähnchenschenkel (roh): 800 g
- Ingwer (frisch): 30 g
- Knoblauch: 15 g
- Frühlingszwiebeln: 40 g
- Jasminreis (roh): 300 g
- Hühnerbrühe (zubereitet): 500 g
- Sesamöl: 10 g
- Sojasoße: 30 g
- Gurke: 200 g
- Sriracha: 20 g
zubereitung:
1. Hähnchen mit Ingwer und Frühlingszwiebeln in siedendem Wasser 25 Minuten gar ziehen lassen, dann in Eiswasser legen.
2. Reis mit Knoblauch und etwas Hähnchenfett anrösten und mit der Brühe garen.
3. Ingwer und Frühlingszwiebeln fein hacken, mit heißem Öl übergießen und salzen.
4. Hähnchen aufschneiden, mit Sesamöl und Sojasoße beträufeln und mit Reis, Gurke, Ingwersoße und Sriracha servieren.

## Chicken Laksa
en: Chicken laksa
es: Laksa de pollo
emoji: 🍜
typ: gericht
portionen: 3
tags: malaysia, asiatisch, suppe, hähnchen, curry
zutaten:
- Hähnchenbrust: 400 g
- Rote Currypaste: 50 g
- Kokosmilch: 400 g
- Hühnerbrühe (zubereitet): 600 g
- Reisbandnudeln (roh): 200 g
- Bohnensprossen: 150 g
- Tofu (frittiert): 100 g
- Eier: 120 g
- Fischsoße: 20 g
- Limette: 60 g
- Koriander (frisch): 10 g
zubereitung:
1. Currypaste in etwas Kokosmilch anrösten, restliche Kokosmilch und Brühe dazu und aufkochen.
2. Hähnchen darin 12 Minuten gar ziehen lassen, herausnehmen und zerzupfen.
3. Tofu kurz mitköcheln, mit Fischsoße und Limette abschmecken.
4. Nudeln kochen und mit Suppe, Hähnchen, Sprossen, halbiertem Ei und Koriander anrichten.

## Som Tam (grüner Papayasalat)
en: Som tam (green papaya salad)
es: Som tam (ensalada de papaya verde)
emoji: 🥗
typ: gericht
portionen: 3
tags: thailand, asiatisch, salat, leicht
zutaten:
- Grüne Papaya: 500 g
- Karotten: 100 g
- Kirschtomaten: 150 g
- Grüne Bohnen: 100 g
- Erdnüsse (geröstet, ungesalzen): 30 g
- Knoblauch: 6 g
- Fischsoße: 30 g
- Limette: 60 g
- Palmzucker: 15 g
- Chilipulver: 1 g
zubereitung:
1. Papaya und Karotte in feine Streifen schneiden.
2. Knoblauch und Chili im Mörser zerstoßen, Bohnen dazu und leicht anquetschen.
3. Fischsoße, Limettensaft und Palmzucker unterrühren.
4. Papaya, Karotten und halbierte Tomaten untermischen, mit Erdnüssen bestreuen.

## Thai-Frühlingsrollen aus dem Ofen
en: Baked Thai spring rolls
es: Rollitos de primavera tailandeses al horno
emoji: 🥢
typ: gericht
portionen: 4
tags: thailand, asiatisch, vegetarisch
zutaten:
- Wan-Tan-Blätter: 240 g
- Glasnudeln (roh): 60 g
- Weißkohl: 200 g
- Karotten: 150 g
- Shiitake-Pilze: 100 g
- Sojasoße: 30 g
- Ingwer (frisch): 10 g
- Rapsöl: 20 g
- Süße Chilisoße: 80 g
zubereitung:
1. Glasnudeln einweichen und kürzen. Gemüse fein schneiden und kurz anbraten, mit Sojasoße und Ingwer würzen.
2. Nudeln untermischen und abkühlen lassen.
3. Je einen Esslöffel Füllung auf ein Teigblatt geben, Seiten einschlagen und aufrollen.
4. Mit Öl bestreichen und bei 210 °C 15 Minuten knusprig backen. Mit süßer Chilisoße.

## Vietnamesische Reisnudelbowl mit Tofu
en: Vietnamese rice noodle bowl with tofu
es: Bowl vietnamita de fideos de arroz con tofu
emoji: 🥗
typ: gericht
portionen: 3
tags: vietnam, asiatisch, vegan, tofu, leicht
zutaten:
- Reisbandnudeln (roh): 200 g
- Tofu (fest): 400 g
- Zitronengras: 20 g
- Sojasoße: 40 g
- Zucker: 15 g
- Limette: 60 g
- Salatmischung (Tüte): 100 g
- Gurke: 150 g
- Karotten: 120 g
- Minze (frisch): 10 g
- Erdnüsse (geröstet, ungesalzen): 30 g
zubereitung:
1. Tofu in Scheiben schneiden, mit Zitronengras und 20 g Sojasoße marinieren und knusprig braten.
2. Restliche Sojasoße, Zucker, Limettensaft und 80 ml Wasser verrühren.
3. Nudeln kochen und abschrecken.
4. Mit Salat, Gemüse, Tofu, Minze und Erdnüssen anrichten, Dressing darüber.

## Cao Lau-Style Schweinenudeln
en: Cao lau-style pork noodles
es: Fideos de cerdo estilo cao lau
emoji: 🍜
typ: gericht
portionen: 3
tags: vietnam, asiatisch, schwein, nudeln
zutaten:
- Schweinefilet (roh): 400 g
- Udon-Nudeln (vorgekocht): 600 g
- Sojasoße: 40 g
- Fünf-Gewürze-Pulver: 2 g
- Honig: 15 g
- Knoblauch: 8 g
- Salatmischung (Tüte): 80 g
- Bohnensprossen: 100 g
- Minze (frisch): 10 g
- Krupuk (Krabbenchips): 30 g
zubereitung:
1. Schwein mit Sojasoße, Fünf-Gewürze-Pulver, Honig und Knoblauch marinieren.
2. Scharf anbraten, mit 100 ml Wasser ablöschen und 10 Minuten schmoren, dann in Scheiben schneiden.
3. Nudeln erwärmen und mit dem Schmorsud mischen.
4. Mit Salat, Sprossen, Minze, Fleisch und zerbröselten Chips servieren.

## Zhajiangmian
en: Zhajiangmian (noodles with bean sauce)
es: Zhajiangmian
emoji: 🍜
typ: gericht
portionen: 3
tags: china, asiatisch, nudeln, schwein
zutaten:
- Mie-Nudeln (roh): 250 g
- Hackfleisch gemischt: 350 g
- Doenjang (Sojabohnenpaste): 40 g
- Hoisin-Soße: 30 g
- Sojasoße: 20 g
- Gurke: 200 g
- Karotten: 100 g
- Frühlingszwiebeln: 20 g
- Öl: 10 g
zubereitung:
1. Hack im Öl krümelig braten.
2. Bohnenpaste, Hoisin, Sojasoße und 100 ml Wasser dazu und 8 Minuten einkochen.
3. Nudeln kochen. Gurke und Karotte in feine Streifen schneiden.
4. Nudeln mit Soße, Gemüse und Frühlingszwiebeln anrichten, am Tisch durchmischen.

## Knoblauch-Pak-Choi
en: Garlic bok choy
es: Pak choi al ajo
emoji: 🥬
typ: gericht
portionen: 2
tags: china, asiatisch, vegan, beilage, schnell
zutaten:
- Pak Choi: 500 g
- Knoblauch: 12 g
- Austernsoße: 20 g
- Sojasoße: 10 g
- Öl: 10 g
zubereitung:
1. Pak Choi längs halbieren und gut waschen.
2. Knoblauch im Öl kurz anbraten.
3. Pak Choi dazu und 2 Minuten scharf braten.
4. Mit Austernsoße, Sojasoße und einem Schuss Wasser kurz schmoren.

## Gebratene Nudeln mit Rind und Paprika
en: Fried noodles with beef and peppers
es: Fideos fritos con ternera y pimiento
emoji: 🍜
typ: gericht
portionen: 3
tags: china, asiatisch, rind, nudeln, schnell
zutaten:
- Mie-Nudeln (roh): 250 g
- Rinderhüftsteak (roh): 350 g
- Paprika: 300 g
- Zwiebeln: 100 g
- Sojasoße: 40 g
- Austernsoße: 30 g
- Speisestärke: 8 g
- Sesamöl: 10 g
- Öl: 20 g
zubereitung:
1. Rind in Streifen schneiden und mit Stärke und 10 g Sojasoße mischen.
2. Nudeln kochen. Rind im Öl scharf anbraten und herausnehmen.
3. Paprika und Zwiebeln 3 Minuten braten.
4. Nudeln, Rind, Soßen und Sesamöl dazu und kräftig durchschwenken.

## Teriyaki-Tofu-Bowl
en: Teriyaki tofu bowl
es: Bowl de tofu teriyaki
emoji: 🥢
typ: gericht
portionen: 3
tags: japan, asiatisch, vegan, tofu, mealprep
zutaten:
- Tofu (fest): 400 g
- Teriyaki-Soße: 80 g
- Speisestärke: 15 g
- Reis (trocken): 210 g
- Brokkoli: 300 g
- Edamame (TK, geschält): 150 g
- Sesam: 8 g
- Öl: 15 g
zubereitung:
1. Tofu würfeln, in Stärke wälzen und im Öl knusprig braten.
2. Teriyaki-Soße dazugeben und glasieren.
3. Reis kochen, Brokkoli und Edamame dämpfen.
4. In Boxen verteilen und mit Sesam bestreuen.

## Protein-Linsensuppe mit Hähnchen
en: Protein lentil soup with chicken
es: Sopa proteica de lentejas con pollo
emoji: 🍲
typ: gericht
portionen: 4
tags: fitness, protein, suppe, linsen, mealprep
zutaten:
- Rote Linsen (trocken): 200 g
- Hähnchenbrust: 400 g
- Karotten: 200 g
- Zwiebeln: 100 g
- Tomatenmark: 30 g
- Gemüsebrühe (zubereitet): 1200 g
- Kreuzkümmel: 4 g
- Zitrone: 40 g
- Petersilie (frisch): 10 g
zubereitung:
1. Zwiebel und Karotten anschwitzen, Tomatenmark kurz mitrösten.
2. Linsen, Brühe und Kreuzkümmel dazu und 15 Minuten köcheln.
3. Hähnchen in kleinen Würfeln dazugeben und 10 Minuten garen.
4. Mit Zitrone und Petersilie abschmecken.

## Kartoffel-Lauch-Suppe
en: Potato and leek soup
es: Sopa de patata y puerro
emoji: 🥣
typ: gericht
portionen: 4
tags: suppe, vegetarisch, deutschland, mealprep
zutaten:
- Kartoffeln (mehlig): 600 g
- Lauch: 400 g
- Zwiebeln: 80 g
- Gemüsebrühe (zubereitet): 1000 g
- Cremefine 7 %: 100 g
- Butter: 15 g
- Schnittlauch: 10 g
- Muskatnuss: 1 g
zubereitung:
1. Lauch und Zwiebel in Butter anschwitzen.
2. Kartoffelwürfel und Brühe dazu, 20 Minuten köcheln.
3. Cremefine dazu und fein pürieren.
4. Mit Muskat abschmecken und mit Schnittlauch servieren.

## Gulaschsuppe
en: Goulash soup
es: Sopa gulash
emoji: 🍲
typ: gericht
portionen: 5
tags: österreich, ungarn, suppe, rind, mealprep
zutaten:
- Gulaschfleisch (Rind): 500 g
- Zwiebeln: 300 g
- Kartoffeln (festkochend): 400 g
- Paprika: 200 g
- Paprikapulver (edelsüß): 15 g
- Tomatenmark: 30 g
- Kümmel: 2 g
- Majoran (getrocknet): 2 g
- Rinderbrühe (zubereitet): 1200 g
- Rapsöl: 20 g
zubereitung:
1. Zwiebeln im Öl goldbraun rösten, Fleisch in kleinen Würfeln dazu und anbraten.
2. Vom Herd nehmen, Paprikapulver und Tomatenmark einrühren.
3. Brühe, Kümmel und Majoran dazu und 60 Minuten köcheln.
4. Kartoffel- und Paprikawürfel dazugeben und weitere 20 Minuten garen.

## Brokkoli-Cremesuppe mit Hähnchen
en: Cream of broccoli soup with chicken
es: Crema de brócoli con pollo
emoji: 🥦
typ: gericht
portionen: 4
tags: suppe, fitness, protein
zutaten:
- Brokkoli: 600 g
- Kartoffeln (mehlig): 200 g
- Zwiebeln: 80 g
- Gemüsebrühe (zubereitet): 900 g
- Frischkäse (mager / 0,2 %): 100 g
- Hähnchenbrust: 350 g
- Rapsöl: 10 g
zubereitung:
1. Zwiebel anschwitzen, Brokkoli und Kartoffeln dazu und mit Brühe 15 Minuten köcheln.
2. Frischkäse dazugeben und fein pürieren.
3. Hähnchen würfeln, braten und salzen.
4. Suppe mit Hähnchenwürfeln servieren.

## Tomatensuppe mit Mozzarella
en: Tomato soup with mozzarella
es: Sopa de tomate con mozzarella
emoji: 🍅
typ: gericht
portionen: 3
tags: suppe, italien, vegetarisch, schnell
zutaten:
- Gehackte Tomaten (Dose): 800 g
- Zwiebeln: 100 g
- Knoblauch: 6 g
- Gemüsebrühe (zubereitet): 400 g
- Olivenöl: 10 g
- Mozzarella light: 125 g
- Basilikum (frisch): 10 g
- Zucker: 5 g
zubereitung:
1. Zwiebel und Knoblauch im Öl anschwitzen.
2. Tomaten, Brühe und Zucker dazu und 15 Minuten köcheln.
3. Fein pürieren und abschmecken.
4. Mit Mozzarellastücken und Basilikum servieren.

## Apfel-Zimt-Pancakes (Protein)
en: Apple cinnamon protein pancakes
es: Tortitas proteicas de manzana y canela
emoji: 🥞
typ: gericht
portionen: 2
tags: frühstück, süß, protein, fitness
zutaten:
- Haferflocken (zart): 80 g
- Eier: 100 g
- Magerquark: 200 g
- Proteinpulver: 30 g
- Apfel: 150 g
- Zimt (gemahlen): 2 g
- Backpulver: 4 g
- Rapsöl: 5 g
zubereitung:
1. Haferflocken fein mahlen und mit Eiern, Quark, Proteinpulver, Zimt und Backpulver verrühren.
2. Apfel fein reiben und unterheben.
3. In einer leicht geölten Pfanne kleine Pancakes je Seite 2 Minuten backen.
4. Mit Joghurt oder etwas Ahornsirup servieren.

## Sinigang na Baboy
en: Sinigang (Filipino sour pork soup)
es: Sinigang (sopa agria filipina)
emoji: 🍲
typ: gericht
portionen: 4
tags: philippinen, asiatisch, suppe, schwein
zutaten:
- Schweinebauch (roh): 500 g
- Tamarindenpaste: 50 g
- Tomaten: 200 g
- Zwiebeln: 150 g
- Daikon-Rettich: 200 g
- Grüne Bohnen: 150 g
- Wasserspinat: 150 g
- Fischsoße: 30 g
- Reis (trocken): 280 g
zubereitung:
1. Fleisch in Würfel schneiden und mit Zwiebeln und Tomaten in 1,5 l Wasser aufkochen, Schaum abschöpfen.
2. 45 Minuten köcheln, bis das Fleisch weich ist.
3. Rettichscheiben und Bohnen 8 Minuten mitgaren, Tamarinde und Fischsoße einrühren.
4. Wasserspinat kurz darin zusammenfallen lassen. Mit Reis servieren – die Suppe soll deutlich sauer schmecken.

## Pancit Canton
en: Pancit canton (Filipino stir-fried noodles)
es: Pancit canton
emoji: 🍜
typ: gericht
portionen: 4
tags: philippinen, asiatisch, nudeln, hähnchen
zutaten:
- Eiernudeln asiatisch (gekocht): 600 g
- Hähnchenbrust: 350 g
- Garnelen: 150 g
- Weißkohl: 200 g
- Karotten: 120 g
- Zwiebeln: 80 g
- Knoblauch: 8 g
- Sojasoße: 50 g
- Austernsoße: 30 g
- Hühnerbrühe (zubereitet): 200 g
- Zitrone: 40 g
- Öl: 15 g
zubereitung:
1. Hähnchen in Streifen mit Zwiebel und Knoblauch im Öl anbraten, Garnelen dazugeben.
2. Kohl und Karotten 3 Minuten mitbraten.
3. Brühe, Sojasoße und Austernsoße angießen und aufkochen.
4. Nudeln unterheben, bis sie die Flüssigkeit aufgesogen haben. Mit Zitronenspalten servieren.

## Lumpia Shanghai aus dem Ofen
en: Baked lumpia Shanghai
es: Lumpia Shanghai al horno
emoji: 🥢
typ: gericht
portionen: 4
tags: philippinen, asiatisch, schwein, snack
zutaten:
- Hackfleisch gemischt: 400 g
- Karotten: 100 g
- Zwiebeln: 80 g
- Knoblauch: 6 g
- Eier: 50 g
- Sojasoße: 20 g
- Wan-Tan-Blätter: 200 g
- Rapsöl: 15 g
- Süße Chilisoße: 80 g
zubereitung:
1. Hack mit fein geriebener Karotte, Zwiebel, Knoblauch, Ei und Sojasoße verkneten.
2. Je einen dünnen Strang Füllung auf ein Teigblatt legen, Seiten einschlagen und eng aufrollen.
3. Mit Öl bestreichen und bei 210 °C 18 Minuten knusprig backen.
4. In Stücke schneiden und mit süßer Chilisoße servieren.

## Chicken Inasal
en: Chicken inasal (Filipino grilled chicken)
es: Pollo inasal
emoji: 🍗
typ: gericht
portionen: 4
tags: philippinen, asiatisch, hähnchen, grill
zutaten:
- Hähnchenschenkel (roh): 800 g
- Zitronengras: 30 g
- Ingwer (frisch): 15 g
- Knoblauch: 12 g
- Essig (Weißwein): 50 g
- Limette: 60 g
- Zucker: 10 g
- Butter: 20 g
- Reis (trocken): 280 g
- Gurke: 200 g
zubereitung:
1. Zitronengras, Ingwer und Knoblauch fein hacken und mit Essig, Limettensaft, Zucker und Salz mischen.
2. Hähnchen darin mindestens 2 Stunden marinieren.
3. Auf dem Grill oder bei 220 °C im Ofen 30 Minuten braten, dabei mit geschmolzener Butter bestreichen.
4. Mit Reis und Gurke servieren.

## Arroz Caldo
en: Arroz caldo (Filipino rice porridge)
es: Arroz caldo
emoji: 🥣
typ: gericht
portionen: 4
tags: philippinen, asiatisch, suppe, hähnchen
zutaten:
- Hähnchenschenkel (roh): 500 g
- Klebreis (roh): 150 g
- Reis (trocken): 50 g
- Ingwer (frisch): 30 g
- Knoblauch: 15 g
- Zwiebeln: 100 g
- Fischsoße: 30 g
- Hühnerbrühe (zubereitet): 1500 g
- Eier: 240 g
- Frühlingszwiebeln: 20 g
- Röstzwiebeln: 15 g
- Öl: 10 g
zubereitung:
1. Ingwer, Knoblauch und Zwiebeln im Öl anschwitzen, Hähnchenstücke kurz mitbraten.
2. Reis dazugeben, mit Brühe und Fischsoße aufgießen.
3. 40 Minuten unter gelegentlichem Rühren zu einem cremigen Brei köcheln.
4. Mit halbierten gekochten Eiern, Frühlingszwiebeln und Röstzwiebeln servieren.

## Bistek Tagalog
en: Bistek tagalog (Filipino beef steak)
es: Bistek tagalog
emoji: 🥩
typ: gericht
portionen: 4
tags: philippinen, asiatisch, rind
zutaten:
- Rinderhüftsteak (roh): 600 g
- Sojasoße: 60 g
- Zitrone: 80 g
- Zwiebeln: 250 g
- Knoblauch: 8 g
- Öl: 15 g
- Reis (trocken): 280 g
zubereitung:
1. Rind in dünne Scheiben schneiden und mit Sojasoße, Zitronensaft und Knoblauch 30 Minuten marinieren.
2. Zwiebelringe im Öl kurz anbraten und herausnehmen.
3. Fleisch scharf anbraten, Marinade und 80 ml Wasser dazugeben und 5 Minuten schmoren.
4. Zwiebelringe darauf legen und mit Reis servieren.

## Tinola (Hühnersuppe mit Ingwer)
en: Tinola (chicken ginger soup)
es: Tinola (sopa de pollo con jengibre)
emoji: 🍲
typ: gericht
portionen: 4
tags: philippinen, asiatisch, suppe, hähnchen, leicht
zutaten:
- Hähnchenschenkel (roh): 700 g
- Ingwer (frisch): 40 g
- Zwiebeln: 100 g
- Knoblauch: 8 g
- Fischsoße: 30 g
- Zucchini: 300 g
- Spinat: 150 g
- Öl: 10 g
zubereitung:
1. Ingwer in Stifte schneiden und mit Zwiebel und Knoblauch im Öl anschwitzen.
2. Hähnchen dazu und kurz anbraten, Fischsoße und 1,3 l Wasser zugeben.
3. 30 Minuten köcheln.
4. Zucchiniwürfel 6 Minuten mitgaren, Spinat zum Schluss unterheben.

## Ginataang Gulay
en: Ginataang gulay (vegetables in coconut milk)
es: Ginataang gulay (verduras en leche de coco)
emoji: 🥥
typ: sauce
beilage: reis
portionen: 4
tags: philippinen, asiatisch, vegan, curry
zutaten:
- Kürbis (Hokkaido): 400 g
- Grüne Bohnen: 200 g
- Aubergine: 250 g
- Kokosmilch: 400 g
- Zwiebeln: 100 g
- Knoblauch: 8 g
- Ingwer (frisch): 15 g
- Sojasoße: 25 g
- Öl: 10 g
zubereitung:
1. Zwiebeln, Knoblauch und Ingwer im Öl anschwitzen.
2. Kokosmilch und Kürbiswürfel dazu und 10 Minuten köcheln.
3. Bohnen und Aubergine dazugeben und weitere 10 Minuten garen.
4. Mit Sojasoße abschmecken.

## Bobotie
en: Bobotie (South African mince bake)
es: Bobotie
emoji: 🥘
typ: gericht
portionen: 6
tags: südafrika, afrika, hack, auflauf
zutaten:
- Rinderhack: 700 g
- Zwiebeln: 200 g
- Currypulver: 15 g
- Kurkuma: 3 g
- Aprikosen (getrocknet): 60 g
- Rosinen: 40 g
- Apfel: 150 g
- Toastbrot: 60 g
- Milch (1,5 %): 250 g
- Eier: 150 g
- Lorbeerblatt: 3 g
- Rapsöl: 15 g
- Reis (trocken): 300 g
zubereitung:
1. Toast in 100 ml Milch einweichen. Zwiebeln im Öl weich braten, Curry und Kurkuma kurz mitrösten.
2. Hack dazu und krümelig braten, ausgedrücktes Brot, gehackte Aprikosen, Rosinen und geriebenen Apfel unterrühren.
3. In eine Form füllen, Eier mit restlicher Milch verquirlen und darübergießen, Lorbeer daraufstecken.
4. Bei 180 °C 35 Minuten backen, bis die Eiermasse gestockt ist. Mit Reis servieren.

## Yassa Poulet
en: Chicken yassa (Senegal)
es: Pollo yassa (Senegal)
emoji: 🍋
typ: sauce
beilage: reis
portionen: 4
tags: senegal, afrika, hähnchen, mealprep
zutaten:
- Hähnchenschenkel (roh): 800 g
- Zwiebeln: 600 g
- Zitrone: 150 g
- Senf: 30 g
- Knoblauch: 10 g
- Rapsöl: 30 g
- Hühnerbrühe (zubereitet): 200 g
- Lorbeerblatt: 2 g
zubereitung:
1. Hähnchen mit Zitronensaft, Senf, Knoblauch, der Hälfte des Öls und den Zwiebelringen mindestens 2 Stunden marinieren.
2. Hähnchen herausnehmen und im restlichen Öl rundum braun anbraten.
3. Zwiebeln aus der Marinade 15 Minuten weich und goldig schmoren.
4. Hähnchen, restliche Marinade, Brühe und Lorbeer dazu und 30 Minuten zugedeckt schmoren.

## Piri-Piri-Hähnchen
en: Piri-piri chicken
es: Pollo piri-piri
emoji: 🌶️
typ: gericht
portionen: 4
tags: mosambik, portugal, afrika, hähnchen, grill
zutaten:
- Hähnchenschenkel (roh): 900 g
- Paprika: 200 g
- Knoblauch: 15 g
- Chilipulver: 3 g
- Paprikapulver (edelsüß): 6 g
- Zitrone: 60 g
- Olivenöl: 20 g
- Süßkartoffel: 700 g
zubereitung:
1. Paprika, Knoblauch, Chili, Paprikapulver, Zitronensaft und Öl fein pürieren.
2. Hähnchen damit einreiben und 1 Stunde marinieren.
3. Mit Süßkartoffelspalten auf ein Blech legen und bei 210 °C 40 Minuten braten.
4. Mit restlicher Soße servieren.

## Chakalaka
en: Chakalaka (South African vegetable relish)
es: Chakalaka
emoji: 🫘
typ: sauce
beilage: reis
portionen: 4
tags: südafrika, afrika, vegan, bohnen
zutaten:
- Weiße Bohnen (Dose): 400 g
- Gehackte Tomaten (Dose): 400 g
- Paprika: 250 g
- Karotten: 200 g
- Zwiebeln: 150 g
- Currypulver: 10 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Rapsöl: 15 g
zubereitung:
1. Zwiebeln, Knoblauch und Ingwer im Öl anschwitzen, Curry dazu.
2. Paprikawürfel und geriebene Karotten 5 Minuten mitbraten.
3. Tomaten und Bohnen dazugeben und 15 Minuten köcheln.
4. Kräftig abschmecken – schmeckt warm und kalt.

## Bunny Chow
en: Bunny chow (Durban curry in bread)
es: Bunny chow
emoji: 🍞
typ: gericht
portionen: 4
tags: südafrika, afrika, curry, hähnchen
zutaten:
- Hähnchenschenkel (roh): 600 g
- Kartoffeln (festkochend): 300 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Currypulver: 15 g
- Garam Masala: 5 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Rapsöl: 15 g
- Weißbrot: 600 g
zubereitung:
1. Zwiebeln, Knoblauch und Ingwer im Öl anbraten, Gewürze kurz mitrösten.
2. Hähnchenwürfel dazu und anbraten.
3. Tomaten, Kartoffelwürfel und 200 ml Wasser dazu und 30 Minuten zu einem dicken Curry köcheln.
4. Ein Kastenweißbrot vierteln, aushöhlen und mit Curry füllen; den Brotdeckel daraufsetzen.

## Harira
en: Harira (Moroccan soup)
es: Harira
emoji: 🍲
typ: gericht
portionen: 5
tags: marokko, afrika, suppe, linsen
zutaten:
- Linsen (trocken): 150 g
- Kichererbsen (abgetropft): 250 g
- Lammkotelett (roh): 300 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Staudensellerie: 100 g
- Kurkuma: 3 g
- Zimt (gemahlen): 1 g
- Ingwer (frisch): 10 g
- Koriander (frisch): 15 g
- Petersilie (frisch): 15 g
- Zitrone: 60 g
- Mehl: 20 g
zubereitung:
1. Lammfleisch klein würfeln und mit Zwiebeln, Sellerie und Gewürzen anbraten.
2. Linsen, Tomaten und 1,5 l Wasser dazu und 30 Minuten köcheln.
3. Kichererbsen und die Kräuter dazugeben, Mehl mit etwas Wasser verrühren und einrühren, 10 Minuten köcheln.
4. Mit Zitrone servieren.

## Ful Medames
en: Ful medames (Egyptian fava beans)
es: Ful medames
emoji: 🫘
typ: gericht
portionen: 3
tags: ägypten, afrika, vegan, frühstück, protein
zutaten:
- Weiße Bohnen (Dose): 500 g
- Knoblauch: 8 g
- Kreuzkümmel: 3 g
- Zitrone: 60 g
- Olivenöl: 20 g
- Tomaten: 200 g
- Petersilie (frisch): 15 g
- Naan: 240 g
zubereitung:
1. Bohnen mit etwas Flüssigkeit erwärmen und grob zerdrücken.
2. Knoblauch, Kreuzkümmel, Zitronensaft und Öl unterrühren.
3. Mit Tomatenwürfeln und Petersilie bestreuen.
4. Mit Fladenbrot servieren.

## Sukuma Wiki mit Ugali-Ersatz
en: Sukuma wiki (Kenyan greens) with polenta
es: Sukuma wiki con polenta
emoji: 🥬
typ: gericht
portionen: 3
tags: kenia, afrika, vegetarisch
zutaten:
- Grünkohl (roh): 400 g
- Tomaten: 300 g
- Zwiebeln: 150 g
- Rinderhack: 250 g
- Rapsöl: 15 g
- Polenta (roh): 200 g
zubereitung:
1. Zwiebeln im Öl anbraten, Hack krümelig mitbraten.
2. Tomaten dazu und weich schmoren.
3. Grünkohl in feinen Streifen dazugeben und 8 Minuten dünsten.
4. Polenta mit 800 ml Wasser und Salz dick einkochen und dazu servieren.

## Moqueca de Peixe
en: Moqueca (Brazilian fish stew)
es: Moqueca de pescado
emoji: 🐟
typ: sauce
beilage: reis
portionen: 4
tags: brasilien, südamerika, fisch, curry
zutaten:
- Fischfilet (natur, roh): 600 g
- Garnelen: 150 g
- Kokosmilch: 400 g
- Paprika: 300 g
- Tomaten: 300 g
- Zwiebeln: 150 g
- Knoblauch: 8 g
- Limette: 60 g
- Koriander (frisch): 15 g
- Olivenöl: 15 g
zubereitung:
1. Fisch in Stücke schneiden, mit Limettensaft und Knoblauch marinieren.
2. Zwiebel-, Paprika- und Tomatenscheiben in einem Topf schichten, Fisch darauf legen.
3. Kokosmilch angießen und zugedeckt 15 Minuten sanft köcheln, Garnelen die letzten 4 Minuten dazu.
4. Mit Koriander und Reis servieren.

## Feijoada leicht
en: Light feijoada
es: Feijoada ligera
emoji: 🫘
typ: sauce
beilage: reis
portionen: 6
tags: brasilien, südamerika, bohnen, eintopf, mealprep
zutaten:
- Schwarze Bohnen (Dose): 800 g
- Kassler: 400 g
- Chorizo: 120 g
- Zwiebeln: 200 g
- Knoblauch: 15 g
- Lorbeerblatt: 2 g
- Rinderbrühe (zubereitet): 500 g
- Orange: 300 g
- Grünkohl (roh): 300 g
- Olivenöl: 15 g
zubereitung:
1. Kassler und Chorizo würfeln und mit Zwiebeln und Knoblauch im Öl anbraten.
2. Bohnen, Lorbeer und Brühe dazu und 40 Minuten köcheln, einige Bohnen zerdrücken.
3. Grünkohl in feinen Streifen kurz in Öl mit Knoblauch braten.
4. Feijoada mit Reis, Grünkohl und Orangenscheiben servieren.

## Pão de Queijo
en: Pão de queijo (Brazilian cheese bread)
es: Pan de queso brasileño
emoji: 🧀
typ: gericht
einheit: stück
portionen: 20
tags: brasilien, südamerika, snack, glutenfrei
zutaten:
- Tapiokastärke: 250 g
- Milch (1,5 %): 125 g
- Rapsöl: 60 g
- Eier: 100 g
- Parmesan: 80 g
- Käse gerieben: 80 g
zubereitung:
1. Milch, Öl und 1 TL Salz aufkochen und über die Stärke gießen, gut verrühren.
2. Etwas abkühlen lassen, Eier und Käse einarbeiten, bis ein klebriger Teig entsteht.
3. Mit nassen Händen 20 Bällchen formen.
4. Bei 200 °C 20 Minuten backen, bis sie aufgehen und goldbraun sind.

## Pollo a la Brasa
en: Peruvian roast chicken
es: Pollo a la brasa
emoji: 🍗
typ: gericht
portionen: 4
tags: peru, südamerika, hähnchen
zutaten:
- Hähnchenschenkel (roh): 1000 g
- Sojasoße: 30 g
- Limette: 60 g
- Knoblauch: 15 g
- Kreuzkümmel: 4 g
- Paprikapulver (edelsüß): 6 g
- Oregano (getrocknet): 2 g
- Olivenöl: 20 g
- Kartoffeln (festkochend): 800 g
- Salatmischung (Tüte): 100 g
zubereitung:
1. Sojasoße, Limettensaft, Knoblauch, Gewürze und Öl verrühren, Hähnchen darin mindestens 2 Stunden marinieren.
2. Kartoffelspalten auf ein Blech legen, Hähnchen darauf.
3. Bei 210 °C 45 Minuten braten, bis die Haut knusprig ist.
4. Mit Salat servieren.

## Lomo Saltado
en: Lomo saltado
es: Lomo saltado
emoji: 🥩
typ: gericht
portionen: 4
tags: peru, südamerika, rind, schnell
zutaten:
- Rinderhüftsteak (roh): 500 g
- Zwiebeln: 200 g
- Tomaten: 300 g
- Sojasoße: 40 g
- Essig (Weißwein): 20 g
- Knoblauch: 8 g
- Kreuzkümmel: 2 g
- Koriander (frisch): 10 g
- Pommes (Airfryer, ohne Öl): 400 g
- Reis (trocken): 200 g
- Öl: 20 g
zubereitung:
1. Pommes im Ofen oder Airfryer knusprig backen, Reis kochen.
2. Rind in Streifen schneiden und in sehr heißem Öl portionsweise scharf anbraten.
3. Zwiebel- und Tomatenspalten 2 Minuten mitbraten, mit Sojasoße, Essig, Knoblauch und Kreuzkümmel ablöschen.
4. Pommes unterheben, mit Koriander und Reis servieren.

## Ceviche mit Süßkartoffel
en: Ceviche with sweet potato
es: Ceviche con boniato
emoji: 🐟
typ: gericht
portionen: 3
tags: peru, südamerika, fisch, leicht, protein
zutaten:
- Fischfilet (natur, roh): 500 g
- Limette: 200 g
- Zwiebeln: 150 g
- Chilipulver: 1 g
- Koriander (frisch): 15 g
- Süßkartoffel: 400 g
- Mais (abgetropft): 100 g
zubereitung:
1. Sehr frischen Fisch in 1,5-cm-Würfel schneiden und salzen.
2. Mit Limettensaft übergießen, so dass er bedeckt ist, und 10 Minuten im Kühlschrank „garen“ lassen.
3. Hauchdünne Zwiebelstreifen, Chili und Koriander untermischen.
4. Süßkartoffel in Scheiben kochen und mit Mais zum Ceviche servieren.

## Ají de Gallina leicht
en: Light ají de gallina
es: Ají de gallina ligero
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: peru, südamerika, hähnchen
zutaten:
- Hähnchenbrust: 600 g
- Zwiebeln: 150 g
- Knoblauch: 8 g
- Paprika: 200 g
- Kurkuma: 3 g
- Chilipulver: 1 g
- Milch (1,5 %): 250 g
- Toastbrot: 60 g
- Walnüsse: 30 g
- Parmesan: 30 g
- Eier: 120 g
- Rapsöl: 10 g
zubereitung:
1. Hähnchen in Salzwasser 20 Minuten gar ziehen lassen und zerzupfen.
2. Zwiebeln, Knoblauch und Paprika im Öl weich dünsten, Kurkuma und Chili dazu.
3. Toast in Milch einweichen und mit dem Gemüse, Walnüssen und Parmesan fein pürieren.
4. Hähnchen in der Soße erwärmen, mit gekochten Eiern und Reis servieren.

## Causa Limeña
en: Causa limeña (Peruvian potato terrine)
es: Causa limeña
emoji: 🥔
typ: gericht
portionen: 4
tags: peru, südamerika, thunfisch
zutaten:
- Kartoffeln (mehlig): 800 g
- Limette: 60 g
- Rapsöl: 30 g
- Kurkuma: 2 g
- Thunfisch (Dose, Wasser): 300 g
- Mayonnaise: 40 g
- Avocado: 200 g
- Eier: 120 g
zubereitung:
1. Kartoffeln kochen, durchpressen und mit Limettensaft, Öl, Kurkuma und Salz zu einem glatten Teig verarbeiten.
2. Thunfisch mit Mayo mischen.
3. In einer Form schichten: Kartoffel, Thunfisch, Avocadoscheiben, Kartoffel.
4. 1 Stunde kühlen, in Stücke schneiden und mit Eischeiben servieren.

## Pastel de Choclo
en: Pastel de choclo (Chilean corn pie)
es: Pastel de choclo
emoji: 🌽
typ: gericht
portionen: 6
tags: chile, südamerika, hack, auflauf
zutaten:
- Rinderhack: 500 g
- Zwiebeln: 250 g
- Kreuzkümmel: 3 g
- Paprikapulver (edelsüß): 4 g
- Hähnchenbrust: 300 g
- Eier: 120 g
- Mais (abgetropft): 600 g
- Milch (1,5 %): 150 g
- Basilikum (frisch): 10 g
- Butter: 20 g
- Rosinen: 30 g
zubereitung:
1. Hack mit Zwiebeln und Gewürzen anbraten (das ist der „Pino“), in eine Form geben.
2. Hähnchen in Streifen braten und darauf verteilen, Eischeiben und Rosinen dazu.
3. Mais mit Milch, Butter und Basilikum pürieren und unter Rühren 5 Minuten eindicken lassen.
4. Über die Füllung streichen und bei 200 °C 30 Minuten goldbraun backen.

## Empanadas mit Rindfleisch
en: Beef empanadas
es: Empanadas de carne
emoji: 🥟
typ: gericht
einheit: stück
portionen: 12
tags: chile, argentinien, südamerika, rind
zutaten:
- Mehl: 400 g
- Butter: 80 g
- Eier: 100 g
- Rinderhack: 400 g
- Zwiebeln: 200 g
- Kreuzkümmel: 3 g
- Paprikapulver (edelsüß): 5 g
- Oliven (schwarz): 50 g
- Milch (1,5 %): 150 g
zubereitung:
1. Mehl, kalte Butter, ein Ei, Milch und Salz zu einem Teig kneten und 30 Minuten kühlen.
2. Hack mit Zwiebeln und Gewürzen braten, gehackte Oliven und ein gekochtes, gehacktes Ei untermischen.
3. Teig ausrollen, 12 Kreise ausstechen, füllen, zusammenklappen und den Rand eindrehen.
4. Mit Ei bestreichen und bei 200 °C 20 Minuten backen.

## Arepas mit schwarzen Bohnen und Käse
en: Arepas with black beans and cheese
es: Arepas con caraotas y queso
emoji: 🫓
typ: gericht
portionen: 4
tags: venezuela, kolumbien, südamerika, vegetarisch
zutaten:
- Maismehl (vorgekocht, für Arepas): 300 g
- Schwarze Bohnen (Dose): 400 g
- Feta: 150 g
- Avocado: 150 g
- Zwiebeln: 80 g
- Kreuzkümmel: 2 g
- Rapsöl: 15 g
zubereitung:
1. Maismehl mit 400 ml warmem Wasser und Salz zu einem weichen Teig kneten, 5 Minuten ruhen lassen.
2. 8 flache Fladen formen und in einer Pfanne je Seite 6 Minuten braten.
3. Bohnen mit Zwiebel und Kreuzkümmel erwärmen und leicht zerdrücken.
4. Arepas aufschneiden und mit Bohnen, Käse und Avocado füllen.

## Steak mit Chimichurri
en: Steak with chimichurri
es: Filete con chimichurri
emoji: 🥩
typ: gericht
portionen: 4
tags: argentinien, südamerika, rind, protein, low carb
zutaten:
- Rinderhüftsteak (roh): 700 g
- Petersilie (frisch): 40 g
- Oregano (getrocknet): 3 g
- Knoblauch: 10 g
- Essig (Weißwein): 30 g
- Olivenöl: 40 g
- Chilipulver: 1 g
- Süßkartoffel: 600 g
- Salatmischung (Tüte): 100 g
zubereitung:
1. Petersilie fein hacken und mit Oregano, Knoblauch, Essig, Öl, Chili und Salz verrühren, 30 Minuten ziehen lassen.
2. Süßkartoffelspalten bei 210 °C 30 Minuten backen.
3. Steaks salzen und in einer sehr heißen Pfanne je Seite 3 Minuten braten, 5 Minuten ruhen lassen.
4. Aufschneiden und mit Chimichurri, Süßkartoffeln und Salat servieren.

## Hähnchen-Enchiladas leicht
en: Light chicken enchiladas
es: Enchiladas de pollo ligeras
emoji: 🌯
typ: gericht
portionen: 4
tags: mexiko, hähnchen, auflauf, mealprep
zutaten:
- Hähnchenbrust: 500 g
- Tortilla-Wrap: 320 g
- Schwarze Bohnen (Dose): 250 g
- Mais (abgetropft): 150 g
- Passierte Tomaten: 400 g
- Taco-Gewürz: 20 g
- Zwiebeln: 100 g
- Reibekäse light: 100 g
- Griechischer Joghurt 0 %: 150 g
zubereitung:
1. Hähnchen würfeln und mit Zwiebeln braten, mit der Hälfte des Gewürzes, Bohnen und Mais mischen.
2. Restliches Gewürz unter die passierten Tomaten rühren.
3. Tortillas füllen, aufrollen und in eine Form legen, mit Tomatensoße übergießen und Käse bestreuen.
4. Bei 200 °C 20 Minuten backen und mit Joghurt servieren.

## Tinga de Pollo
en: Tinga de pollo
es: Tinga de pollo
emoji: 🌮
typ: sauce
beilage: reis
portionen: 4
tags: mexiko, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 700 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 250 g
- Knoblauch: 10 g
- Chipotle in Adobo: 30 g
- Oregano (getrocknet): 2 g
- Rapsöl: 10 g
- Tortilla-Wrap: 320 g
zubereitung:
1. Hähnchen in Salzwasser 20 Minuten gar ziehen lassen und zerzupfen.
2. Zwiebelstreifen im Öl weich braten, Knoblauch dazu.
3. Tomaten, Chipotle und Oregano dazu und 10 Minuten köcheln, nach Wunsch pürieren.
4. Hähnchen unterheben und in Tortillas oder mit Reis servieren.

## Pozole Rojo
en: Pozole rojo
es: Pozole rojo
emoji: 🍲
typ: gericht
portionen: 5
tags: mexiko, suppe, schwein
zutaten:
- Schweinefilet (roh): 500 g
- Mais (abgetropft): 500 g
- Passierte Tomaten: 300 g
- Paprikapulver (edelsüß): 10 g
- Chilipulver: 3 g
- Knoblauch: 10 g
- Zwiebeln: 150 g
- Oregano (getrocknet): 2 g
- Hühnerbrühe (zubereitet): 1500 g
- Weißkohl: 200 g
- Radieschen: 100 g
- Limette: 60 g
zubereitung:
1. Schweinefleisch würfeln und mit Zwiebeln und Knoblauch anbraten.
2. Paprikapulver, Chili, Oregano und passierte Tomaten dazu, mit Brühe aufgießen.
3. Mais dazugeben und 40 Minuten köcheln.
4. Mit fein gehobeltem Kohl, Radieschenscheiben und Limette servieren.

## Huevos Rancheros
en: Huevos rancheros
es: Huevos rancheros
emoji: 🍳
typ: gericht
portionen: 2
tags: mexiko, frühstück, eier, vegetarisch
zutaten:
- Eier: 240 g
- Tortilla-Wrap: 120 g
- Schwarze Bohnen (Dose): 200 g
- Passierte Tomaten: 250 g
- Zwiebeln: 60 g
- Chilipulver: 1 g
- Avocado: 100 g
- Feta: 40 g
- Koriander (frisch): 5 g
zubereitung:
1. Zwiebel anschwitzen, Tomaten und Chili dazu und 8 Minuten zu einer Salsa köcheln.
2. Bohnen erwärmen und leicht zerdrücken.
3. Tortillas in der Pfanne erwärmen, Spiegeleier braten.
4. Tortillas mit Bohnen, Ei, Salsa, Avocado, Feta und Koriander belegen.

## Chilaquiles mit Ei
en: Chilaquiles with egg
es: Chilaquiles con huevo
emoji: 🌶️
typ: gericht
portionen: 2
tags: mexiko, frühstück, eier
zutaten:
- Tortilla-Chips: 100 g
- Passierte Tomaten: 300 g
- Zwiebeln: 60 g
- Knoblauch: 6 g
- Chilipulver: 1 g
- Eier: 240 g
- Saure Sahne (10 %): 60 g
- Feta: 40 g
- Koriander (frisch): 5 g
zubereitung:
1. Tomaten mit Zwiebel, Knoblauch und Chili 10 Minuten zu einer Soße köcheln.
2. Tortilla-Chips in der Soße schwenken, bis sie leicht weich werden.
3. Spiegeleier braten.
4. Chips auf Teller geben, Ei darauf, mit saurer Sahne, Feta und Koriander toppen.

## Elote-Salat
en: Elote salad (Mexican street corn salad)
es: Ensalada de elote
emoji: 🌽
typ: gericht
portionen: 4
tags: mexiko, salat, vegetarisch, beilage
zutaten:
- Mais (abgetropft): 500 g
- Griechischer Joghurt 0 %: 100 g
- Feta: 80 g
- Limette: 60 g
- Paprikapulver (edelsüß): 3 g
- Chilipulver: 1 g
- Koriander (frisch): 10 g
- Frühlingszwiebeln: 30 g
zubereitung:
1. Mais in einer trockenen Pfanne kräftig anrösten, bis er Farbe bekommt.
2. Etwas abkühlen lassen.
3. Mit Joghurt, Limettensaft, Paprika und Chili mischen.
4. Feta, Koriander und Frühlingszwiebeln untermischen.

## Nikujaga
en: Nikujaga (Japanese meat and potato stew)
es: Nikujaga
emoji: 🥔
typ: gericht
portionen: 4
tags: japan, asiatisch, rind, eintopf
zutaten:
- Rinderhüftsteak (roh): 300 g
- Kartoffeln (festkochend): 600 g
- Karotten: 200 g
- Zwiebeln: 200 g
- Dashi (zubereitet): 500 g
- Sojasoße: 50 g
- Mirin: 40 g
- Zucker: 15 g
- Erbsen (TK): 80 g
- Öl: 10 g
zubereitung:
1. Rind in dünne Scheiben schneiden und im Öl kurz anbraten.
2. Zwiebelspalten, Kartoffel- und Karottenstücke dazugeben.
3. Dashi, Sojasoße, Mirin und Zucker angießen und zugedeckt 20 Minuten köcheln.
4. Erbsen die letzten 3 Minuten mitgaren.

## Tamagoyaki
en: Tamagoyaki (Japanese rolled omelette)
es: Tamagoyaki
emoji: 🍳
typ: gericht
portionen: 2
tags: japan, asiatisch, frühstück, eier, vegetarisch
zutaten:
- Eier: 240 g
- Dashi (zubereitet): 40 g
- Sojasoße: 8 g
- Mirin: 10 g
- Zucker: 5 g
- Öl: 5 g
zubereitung:
1. Eier mit Dashi, Sojasoße, Mirin und Zucker verquirlen.
2. Eine Pfanne dünn ölen, ein Drittel der Eimasse eingießen und fast stocken lassen.
3. Von einer Seite aufrollen, die Rolle an den Rand schieben, nächste Schicht eingießen und unter die Rolle laufen lassen, wieder aufrollen.
4. Wiederholen, kurz ruhen lassen und in Scheiben schneiden.

## Shogayaki (Ingwer-Schwein)
en: Shogayaki (ginger pork)
es: Shogayaki (cerdo al jengibre)
emoji: 🐖
typ: gericht
portionen: 3
tags: japan, asiatisch, schwein, schnell
zutaten:
- Schweinefilet (roh): 450 g
- Ingwer (frisch): 25 g
- Sojasoße: 40 g
- Mirin: 30 g
- Sake: 20 g
- Zwiebeln: 150 g
- Öl: 10 g
- Weißkohl: 200 g
- Reis (trocken): 210 g
zubereitung:
1. Ingwer reiben und mit Sojasoße, Mirin und Sake verrühren.
2. Fleisch in dünne Scheiben schneiden und 15 Minuten marinieren.
3. Zwiebelstreifen und Fleisch im Öl scharf anbraten, Marinade dazugeben und glasieren.
4. Mit fein gehobeltem Kohl und Reis servieren.

## Hiyashi Chuka
en: Hiyashi chuka (cold ramen salad)
es: Hiyashi chuka (ramen frío)
emoji: 🍜
typ: gericht
portionen: 2
tags: japan, asiatisch, nudeln, sommer
zutaten:
- Ramen-Nudeln (frisch): 260 g
- Hähnchenbrust: 200 g
- Eier: 120 g
- Gurke: 150 g
- Kirschtomaten: 150 g
- Sojasoße: 40 g
- Reisessig: 30 g
- Zucker: 15 g
- Sesamöl: 10 g
- Sesam: 5 g
zubereitung:
1. Hähnchen gar ziehen lassen und zerzupfen. Eier zu einem dünnen Omelett braten und in Streifen schneiden.
2. Sojasoße, Essig, Zucker, Sesamöl und 30 ml Wasser zum Dressing verrühren.
3. Nudeln kochen und eiskalt abschrecken.
4. Mit Hähnchen, Ei, Gurke und Tomaten belegen, Dressing darüber, Sesam drauf.

## Chicken Nanban
en: Chicken nanban
es: Pollo nanban
emoji: 🍗
typ: gericht
portionen: 3
tags: japan, asiatisch, hähnchen
zutaten:
- Hähnchenschenkel (roh): 500 g
- Mehl: 30 g
- Eier: 100 g
- Reisessig: 40 g
- Sojasoße: 30 g
- Zucker: 20 g
- Rapsöl: 30 g
- Griechischer Joghurt 0 %: 100 g
- Essiggurken: 40 g
- Reis (trocken): 210 g
zubereitung:
1. Hähnchen in Stücke schneiden, in Mehl und verquirltem Ei wenden und im Öl goldbraun braten.
2. Essig, Sojasoße und Zucker aufkochen und das Hähnchen darin schwenken.
3. Für die leichte Tartarsoße Joghurt mit gehackten Essiggurken und etwas Ei (hart gekocht) mischen.
4. Mit Reis und Tartarsoße servieren.

## Hambagu mit Soße
en: Hambagu (Japanese hamburg steak)
es: Hambagu (filete ruso japonés)
emoji: 🍔
typ: gericht
portionen: 4
tags: japan, asiatisch, hack
zutaten:
- Hackfleisch gemischt: 500 g
- Panko: 40 g
- Milch (1,5 %): 50 g
- Eier: 50 g
- Zwiebeln: 100 g
- Ketchup: 50 g
- Worcestersoße: 30 g
- Champignons: 150 g
- Öl: 10 g
- Reis (trocken): 280 g
- Brokkoli: 300 g
zubereitung:
1. Zwiebel fein hacken und andünsten, abkühlen lassen. Panko in Milch einweichen.
2. Mit Hack, Ei und Zwiebel verkneten, 4 ovale Laibchen formen und in der Mitte leicht eindrücken.
3. Im Öl je Seite 4 Minuten braten, 50 ml Wasser angießen und zugedeckt 6 Minuten garen.
4. Pilze, Ketchup und Worcestersoße im Bratensaft kurz einkochen und mit Reis und Brokkoli servieren.

## Tonjiru (Miso-Schweine-Suppe)
en: Tonjiru (pork miso soup)
es: Tonjiru (sopa de miso con cerdo)
emoji: 🍲
typ: gericht
portionen: 4
tags: japan, asiatisch, suppe, schwein
zutaten:
- Schweinebauch (roh): 250 g
- Daikon-Rettich: 200 g
- Karotten: 150 g
- Kartoffeln (festkochend): 200 g
- Tofu (fest): 200 g
- Dashi (zubereitet): 1200 g
- Miso-Paste: 70 g
- Frühlingszwiebeln: 20 g
- Sesamöl: 5 g
zubereitung:
1. Schweinebauch in dünne Scheiben schneiden und im Sesamöl anbraten.
2. Rettich, Karotten und Kartoffeln in Stücken dazu, mit Dashi aufgießen und 15 Minuten köcheln.
3. Tofuwürfel dazugeben.
4. Vom Herd nehmen, Miso einrühren und mit Frühlingszwiebeln servieren.

## Ochazuke mit Lachs
en: Ochazuke with salmon
es: Ochazuke con salmón
emoji: 🍵
typ: gericht
portionen: 2
tags: japan, asiatisch, lachs, schnell, leicht
zutaten:
- Reis (trocken): 150 g
- Lachs (roh): 200 g
- Grüner Tee: 500 g
- Nori-Blatt: 3 g
- Sesam: 5 g
- Wasabi (Paste): 4 g
- Frühlingszwiebeln: 10 g
zubereitung:
1. Reis kochen. Lachs salzen und in der Pfanne braten, dann zerpflücken.
2. Reis in Schalen geben, Lachs darauf.
3. Mit heißem grünem Tee übergießen.
4. Mit Nori-Streifen, Sesam, Frühlingszwiebeln und etwas Wasabi servieren.

## Kohlrouladen leicht
en: Light cabbage rolls
es: Rollitos de col ligeros
emoji: 🥬
typ: gericht
portionen: 4
tags: deutschland, kalorienarm, hack, mealprep
zutaten:
- Weißkohl: 1000 g
- Rinderhack (Tatar, fettarm): 400 g
- Reis (trocken): 60 g
- Zwiebeln: 100 g
- Eier: 50 g
- Paprikapulver (edelsüß): 4 g
- Passierte Tomaten: 500 g
- Gemüsebrühe (zubereitet): 200 g
zubereitung:
1. Kohlblätter in kochendem Salzwasser 3 Minuten blanchieren und die dicke Rippe flach schneiden.
2. Hack mit rohem Reis, Zwiebel, Ei und Paprika verkneten.
3. Je 2 Blätter überlappend auslegen, Füllung darauf, einschlagen und aufrollen.
4. In eine Form legen, Tomaten und Brühe darübergießen und bei 180 °C 60 Minuten schmoren.

## Spitzkohl-Hack-Pfanne
en: Pointed cabbage and mince skillet
es: Sartén de col puntiaguda y carne picada
emoji: 🥬
typ: gericht
portionen: 4
tags: deutschland, kalorienarm, low carb, hack, schnell
zutaten:
- Spitzkohl: 800 g
- Rinderhack (Tatar, fettarm): 500 g
- Zwiebeln: 100 g
- Paprika: 200 g
- Kümmel: 2 g
- Paprikapulver (edelsüß): 5 g
- Gemüsebrühe (zubereitet): 150 g
- Saure Sahne (10 %): 100 g
- Rapsöl: 10 g
zubereitung:
1. Hack im Öl krümelig braten, Zwiebel und Paprika dazu.
2. Spitzkohl in Streifen dazugeben und 5 Minuten mitbraten.
3. Mit Kümmel, Paprikapulver und Brühe 5 Minuten dünsten.
4. Saure Sahne unterrühren und abschmecken.

## Kohlrabi-Schnitzel mit Kräuterquark
en: Kohlrabi schnitzel with herb quark
es: Escalope de colinabo con requesón de hierbas
emoji: 🥒
typ: gericht
portionen: 3
tags: deutschland, kalorienarm, vegetarisch
zutaten:
- Kohlrabi: 800 g
- Eier: 100 g
- Paniermehl: 80 g
- Parmesan: 20 g
- Rapsöl: 25 g
- Magerquark: 250 g
- Schnittlauch: 10 g
- Petersilie (frisch): 10 g
- Kartoffeln (festkochend): 400 g
zubereitung:
1. Kohlrabi schälen, in 1 cm dicke Scheiben schneiden und 5 Minuten vorkochen.
2. Erst in Ei, dann in Paniermehl mit Parmesan wenden.
3. Im Öl je Seite 3 Minuten goldbraun braten.
4. Quark mit Kräutern und etwas Wasser glatt rühren und mit Kartoffeln servieren.

## Ofen-Feta mit Gemüse
en: Baked feta with vegetables
es: Feta al horno con verduras
emoji: 🧀
typ: gericht
portionen: 3
tags: kalorienarm, vegetarisch, schnell
zutaten:
- Feta: 200 g
- Kirschtomaten: 300 g
- Zucchini: 300 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Olivenöl: 15 g
- Oregano (getrocknet): 2 g
- Knoblauch: 6 g
- Couscous (trocken): 150 g
zubereitung:
1. Gemüse in Stücke schneiden, mit Öl, Knoblauch und Oregano mischen und in eine Form geben.
2. Feta in die Mitte legen.
3. Bei 200 °C 25 Minuten backen.
4. Feta zerdrücken, unterrühren und mit Couscous servieren.

## Hähnchen-Gemüse-Pfanne mit Frischkäse
en: Chicken vegetable skillet with cream cheese
es: Sartén de pollo y verduras con queso crema
emoji: 🍳
typ: gericht
portionen: 4
tags: kalorienarm, fitness, hähnchen, schnell
zutaten:
- Hähnchenbrust: 600 g
- Brokkoli: 300 g
- Paprika: 200 g
- Champignons: 200 g
- Zwiebeln: 100 g
- Frischkäse (mager / 0,2 %): 150 g
- Gemüsebrühe (zubereitet): 150 g
- Rapsöl: 10 g
zubereitung:
1. Hähnchen würfeln und im Öl anbraten, herausnehmen.
2. Gemüse 6 Minuten braten.
3. Brühe und Frischkäse einrühren und kurz köcheln.
4. Hähnchen zurück in die Pfanne und abschmecken.

## Zucchini-Puffer mit Joghurt-Dip
en: Courgette fritters with yoghurt dip
es: Tortitas de calabacín con salsa de yogur
emoji: 🥒
typ: gericht
portionen: 3
tags: kalorienarm, vegetarisch
zutaten:
- Zucchini: 600 g
- Eier: 100 g
- Haferflocken (zart): 50 g
- Feta: 80 g
- Frühlingszwiebeln: 30 g
- Rapsöl: 15 g
- Griechischer Joghurt 0 %: 200 g
- Knoblauch: 4 g
- Dill (frisch): 5 g
zubereitung:
1. Zucchini grob raspeln, salzen und nach 10 Minuten kräftig ausdrücken.
2. Mit Eiern, Haferflocken, zerbröseltem Feta und Frühlingszwiebeln mischen.
3. Kleine Puffer im Öl je Seite 3 Minuten braten.
4. Joghurt mit Knoblauch und Dill verrühren und dazu servieren.

## Protein-Overnight-Oats Schoko
en: Chocolate protein overnight oats
es: Avena nocturna proteica de chocolate
emoji: 🥣
typ: gericht
portionen: 2
tags: frühstück, protein, fitness, mealprep
zutaten:
- Haferflocken: 100 g
- Skyr: 300 g
- Milch (1,5 %): 200 g
- Proteinpulver: 30 g
- Backkakao: 10 g
- Banane: 120 g
- Chiasamen: 15 g
zubereitung:
1. Haferflocken, Skyr, Milch, Proteinpulver, Kakao und Chiasamen verrühren.
2. Auf zwei Gläser verteilen und über Nacht kalt stellen.
3. Morgens mit Bananenscheiben toppen.

## Overnight Oats Apfel-Zimt
en: Apple cinnamon overnight oats
es: Avena nocturna de manzana y canela
emoji: 🍎
typ: gericht
portionen: 2
tags: frühstück, vegetarisch, mealprep
zutaten:
- Haferflocken: 100 g
- Joghurt natur: 200 g
- Milch (1,5 %): 150 g
- Apfel: 200 g
- Zimt (gemahlen): 2 g
- Walnüsse: 20 g
- Honig: 15 g
zubereitung:
1. Haferflocken mit Joghurt, Milch und Zimt verrühren.
2. Apfel reiben und untermischen, über Nacht kühlen.
3. Mit gehackten Walnüssen und Honig servieren.

## Rührei mit Spinat und Feta
en: Scrambled eggs with spinach and feta
es: Huevos revueltos con espinacas y feta
emoji: 🍳
typ: gericht
portionen: 2
tags: frühstück, protein, low carb, schnell
zutaten:
- Eier: 300 g
- Spinat: 150 g
- Feta: 60 g
- Kirschtomaten: 150 g
- Butter: 10 g
- Vollkornbrot (Scheibe): 100 g
zubereitung:
1. Spinat in Butter zusammenfallen lassen.
2. Verquirlte Eier dazugeben und bei mittlerer Hitze cremig stocken lassen.
3. Feta und halbierte Tomaten unterheben und mit Brot servieren.

## Eiweiß-Omelett mit Gemüse
en: Egg white omelette with vegetables
es: Tortilla de claras con verduras
emoji: 🥚
typ: gericht
portionen: 1
tags: frühstück, protein, fitness, leicht
zutaten:
- Eiklar (flüssig): 250 g
- Paprika: 100 g
- Champignons: 80 g
- Spinat: 50 g
- Frühlingszwiebeln: 15 g
- Rapsöl: 5 g
- Körniger Frischkäse (fettarm): 100 g
zubereitung:
1. Gemüse klein schneiden und im Öl 3 Minuten braten.
2. Eiklar darübergießen und zugedeckt stocken lassen.
3. Mit körnigem Frischkäse füllen und zusammenklappen.

## Frühstücks-Burrito
en: Breakfast burrito
es: Burrito de desayuno
emoji: 🌯
typ: gericht
portionen: 2
tags: frühstück, protein, mealprep
zutaten:
- Tortilla-Wrap: 120 g
- Eier: 240 g
- Schwarze Bohnen (Dose): 150 g
- Paprika: 100 g
- Käse gerieben: 40 g
- Salsa (Dip): 60 g
- Avocado: 80 g
zubereitung:
1. Paprika anbraten, Eier dazu und zu Rührei verrühren.
2. Bohnen erwärmen.
3. Wraps mit Bohnen, Ei, Käse, Salsa und Avocado füllen und aufrollen.

## Shakshuka mit Kichererbsen
en: Shakshuka with chickpeas
es: Shakshuka con garbanzos
emoji: 🍳
typ: gericht
portionen: 2
tags: frühstück, vegetarisch, protein
zutaten:
- Eier: 240 g
- Kichererbsen (abgetropft): 200 g
- Gehackte Tomaten (Dose): 400 g
- Paprika: 150 g
- Zwiebeln: 80 g
- Kreuzkümmel: 3 g
- Paprikapulver (edelsüß): 3 g
- Olivenöl: 10 g
- Petersilie (frisch): 10 g
zubereitung:
1. Zwiebel und Paprika im Öl weich braten, Gewürze dazu.
2. Tomaten und Kichererbsen 10 Minuten einkochen.
3. Eier hineinschlagen und zugedeckt stocken lassen, mit Petersilie servieren.

## Skyr-Bowl mit Beeren und Granola
en: Skyr bowl with berries and granola
es: Bowl de skyr con frutos rojos y granola
emoji: 🫐
typ: gericht
portionen: 1
tags: frühstück, protein, schnell
zutaten:
- Skyr: 250 g
- Beeren (TK): 120 g
- Haferflocken: 30 g
- Honig: 10 g
- Mandeln (ganz): 10 g
zubereitung:
1. Haferflocken mit Honig in einer Pfanne goldbraun rösten.
2. Skyr in eine Schale geben.
3. Mit Beeren, Hafer-Crunch und gehackten Mandeln toppen.

## Quark-Porridge mit Banane
en: Quark porridge with banana
es: Gachas con requesón y plátano
emoji: 🥣
typ: gericht
portionen: 1
tags: frühstück, protein, warm
zutaten:
- Haferflocken: 60 g
- Milch (1,5 %): 200 g
- Magerquark: 150 g
- Banane: 100 g
- Zimt (gemahlen): 1 g
zubereitung:
1. Haferflocken mit Milch 4 Minuten köcheln.
2. Vom Herd nehmen und den Quark einrühren.
3. Mit Bananenscheiben und Zimt servieren.

## Protein-Waffeln
en: Protein waffles
es: Gofres proteicos
emoji: 🧇
typ: gericht
portionen: 2
tags: frühstück, protein, süß
zutaten:
- Haferflocken (zart): 80 g
- Eier: 100 g
- Magerquark: 150 g
- Proteinpulver: 30 g
- Milch (1,5 %): 60 g
- Backpulver: 4 g
- Beeren (TK): 150 g
zubereitung:
1. Alle Zutaten außer den Beeren zu einem glatten Teig pürieren.
2. Im Waffeleisen 4 Waffeln goldbraun backen.
3. Mit warmen Beeren servieren.

## Herzhafte Haferflocken mit Ei
en: Savoury oats with egg
es: Avena salada con huevo
emoji: 🥣
typ: gericht
portionen: 1
tags: frühstück, protein, warm
zutaten:
- Haferflocken: 60 g
- Gemüsebrühe (zubereitet): 250 g
- Spinat: 50 g
- Eier: 60 g
- Käse gerieben: 15 g
- Frühlingszwiebeln: 10 g
zubereitung:
1. Haferflocken in Brühe 4 Minuten köcheln, Spinat unterrühren.
2. Ein Spiegelei braten.
3. Haferbrei mit Käse, Ei und Frühlingszwiebeln servieren.

## Avocado-Toast mit Ei
en: Avocado toast with egg
es: Tostada de aguacate con huevo
emoji: 🥑
typ: gericht
portionen: 1
tags: frühstück, schnell, vegetarisch
zutaten:
- Vollkornbrot (Scheibe): 100 g
- Avocado: 80 g
- Eier: 60 g
- Zitrone: 10 g
- Chilipulver: 0.5 g
- Kirschtomaten: 60 g
zubereitung:
1. Brot toasten. Avocado mit Zitrone, Salz und Pfeffer zerdrücken und aufstreichen.
2. Ein pochiertes oder gebratenes Ei darauf legen.
3. Mit Tomaten und Chili bestreuen.

## Hüttenkäse-Brot mit Radieschen
en: Cottage cheese bread with radishes
es: Pan con requesón y rábanos
emoji: 🥪
typ: gericht
portionen: 1
tags: frühstück, protein, schnell
zutaten:
- Vollkornbrot (Scheibe): 100 g
- Körniger Frischkäse (fettarm): 150 g
- Radieschen: 60 g
- Schnittlauch: 5 g
- Gurke: 60 g
zubereitung:
1. Brot mit körnigem Frischkäse bestreichen.
2. Mit Radieschen- und Gurkenscheiben belegen.
3. Mit Schnittlauch, Salz und Pfeffer bestreuen.

## Chicken-Caesar-Bowl
en: Chicken Caesar bowl
es: Bowl César de pollo
emoji: 🥗
typ: gericht
portionen: 2
tags: bowl, protein, salat, fitness
zutaten:
- Hähnchenbrust: 300 g
- Romanasalat: 250 g
- Parmesan: 20 g
- Vollkornbrot (Scheibe): 50 g
- Griechischer Joghurt 0 %: 80 g
- Senf: 5 g
- Zitrone: 20 g
- Knoblauch: 3 g
zubereitung:
1. Hähnchen braten und in Streifen schneiden. Brot würfeln und ohne Fett rösten.
2. Joghurt mit Senf, Zitrone, Knoblauch und Parmesan zum Dressing verrühren.
3. Salat mit Hähnchen, Croûtons und Dressing anrichten.

## Thunfisch-Bowl mit Reis und Edamame
en: Tuna bowl with rice and edamame
es: Bowl de atún con arroz y edamame
emoji: 🐟
typ: gericht
portionen: 2
tags: bowl, protein, fisch, schnell
zutaten:
- Reis (trocken): 140 g
- Thunfisch (Dose, Wasser): 300 g
- Edamame (TK, geschält): 120 g
- Gurke: 150 g
- Karotten: 100 g
- Sojasoße: 20 g
- Sesam: 5 g
- Sriracha: 10 g
zubereitung:
1. Reis kochen, Edamame 3 Minuten garen.
2. Gurke und Karotte in Streifen schneiden.
3. Alles mit Thunfisch anrichten und mit Sojasoße, Sriracha und Sesam beträufeln.

## Quinoa-Bowl mit Halloumi-Ersatz Feta
en: Quinoa bowl with feta
es: Bowl de quinoa con feta
emoji: 🥗
typ: gericht
portionen: 2
tags: bowl, vegetarisch, mealprep
zutaten:
- Quinoa (trocken): 150 g
- Feta: 100 g
- Kichererbsen (abgetropft): 150 g
- Gurke: 150 g
- Kirschtomaten: 150 g
- Rucola: 40 g
- Zitrone: 30 g
- Olivenöl: 10 g
zubereitung:
1. Quinoa nach Packung kochen und abkühlen lassen.
2. Kichererbsen mit etwas Öl knusprig anbraten.
3. Mit Gemüse, Rucola und zerbröseltem Feta anrichten, mit Zitrone und Öl beträufeln.

## Burrito-Bowl mit Pute
en: Turkey burrito bowl
es: Bowl burrito de pavo
emoji: 🌯
typ: gericht
portionen: 4
tags: bowl, mexiko, protein, mealprep
zutaten:
- Putenbrust (roh): 500 g
- Taco-Gewürz: 20 g
- Reis (trocken): 240 g
- Schwarze Bohnen (Dose): 250 g
- Mais (abgetropft): 150 g
- Paprika: 200 g
- Salsa (Dip): 120 g
- Griechischer Joghurt 0 %: 150 g
zubereitung:
1. Reis kochen. Pute würfeln, würzen und mit Paprika anbraten.
2. Bohnen und Mais erwärmen.
3. Alles in Boxen verteilen und mit Salsa und Joghurt servieren.

## Süßkartoffel-Hähnchen-Bowl
en: Sweet potato chicken bowl
es: Bowl de boniato y pollo
emoji: 🍠
typ: gericht
portionen: 3
tags: bowl, protein, mealprep
zutaten:
- Hähnchenbrust: 450 g
- Süßkartoffel: 600 g
- Brokkoli: 300 g
- Paprikapulver (edelsüß): 4 g
- Olivenöl: 15 g
- Griechischer Joghurt 0 %: 150 g
- Zitrone: 20 g
zubereitung:
1. Süßkartoffelwürfel mit Öl und Paprika bei 210 °C 25 Minuten backen.
2. Hähnchen würzen und braten, Brokkoli dämpfen.
3. Mit Zitronenjoghurt in Boxen verteilen.

## Lachs-Quinoa-Bowl mit Avocado
en: Salmon quinoa bowl with avocado
es: Bowl de salmón y quinoa con aguacate
emoji: 🍣
typ: gericht
portionen: 2
tags: bowl, lachs, protein
zutaten:
- Lachs (roh): 300 g
- Quinoa (trocken): 120 g
- Avocado: 120 g
- Gurke: 150 g
- Edamame (TK, geschält): 100 g
- Sojasoße: 20 g
- Limette: 20 g
- Sesam: 5 g
zubereitung:
1. Quinoa kochen. Lachs würzen und 4 Minuten je Seite braten.
2. Edamame kurz garen, Gurke und Avocado schneiden.
3. Anrichten und mit Sojasoße, Limette und Sesam beträufeln.

## Hähnchen-Couscous-Salat
en: Chicken couscous salad
es: Ensalada de cuscús con pollo
emoji: 🥗
typ: gericht
portionen: 4
tags: salat, mealprep, protein
zutaten:
- Couscous (trocken): 200 g
- Hähnchenbrust: 400 g
- Gurke: 200 g
- Paprika: 200 g
- Kirschtomaten: 200 g
- Minze (frisch): 10 g
- Zitrone: 60 g
- Olivenöl: 20 g
zubereitung:
1. Couscous mit 220 ml kochendem Wasser übergießen und quellen lassen.
2. Hähnchen braten und würfeln.
3. Mit dem gewürfelten Gemüse, Minze, Zitrone und Öl mischen.

## Linsensalat mit Feta
en: Lentil salad with feta
es: Ensalada de lentejas con feta
emoji: 🥗
typ: gericht
portionen: 4
tags: salat, vegetarisch, mealprep, protein
zutaten:
- Linsen (trocken): 250 g
- Feta: 150 g
- Paprika: 200 g
- Rucola: 50 g
- Zwiebeln: 60 g
- Essig (Weißwein): 30 g
- Olivenöl: 20 g
- Senf: 10 g
zubereitung:
1. Linsen in 25 Minuten bissfest kochen und abkühlen lassen.
2. Essig, Öl und Senf zum Dressing verrühren.
3. Linsen mit Paprika, Zwiebel, Rucola und Feta mischen.

## Griechischer Nudelsalat
en: Greek pasta salad
es: Ensalada de pasta griega
emoji: 🥗
typ: gericht
portionen: 4
tags: salat, griechenland, vegetarisch, mealprep
zutaten:
- Nudeln (trocken): 250 g
- Feta: 150 g
- Gurke: 200 g
- Kirschtomaten: 200 g
- Paprika: 150 g
- Oliven (schwarz): 50 g
- Zwiebeln: 50 g
- Oregano (getrocknet): 2 g
- Olivenöl: 20 g
- Zitrone: 30 g
zubereitung:
1. Nudeln kochen und abschrecken.
2. Gemüse würfeln.
3. Alles mit Feta, Oliven, Oregano, Öl und Zitrone mischen.

## Hähnchen-Wrap mit Erdnusssoße
en: Chicken wrap with peanut sauce
es: Wrap de pollo con salsa de cacahuete
emoji: 🌯
typ: gericht
portionen: 2
tags: wrap, protein, schnell
zutaten:
- Vollkorn-Wrap: 120 g
- Hähnchenbrust: 250 g
- Erdnussbutter: 30 g
- Sojasoße: 15 g
- Limette: 15 g
- Karotten: 80 g
- Gurke: 80 g
- Salatmischung (Tüte): 40 g
zubereitung:
1. Hähnchen in Streifen braten.
2. Erdnussbutter mit Sojasoße, Limettensaft und etwas Wasser verrühren.
3. Wraps mit Salat, Gemüse, Hähnchen und Soße füllen und aufrollen.

## Thunfisch-Wrap
en: Tuna wrap
es: Wrap de atún
emoji: 🌯
typ: gericht
portionen: 2
tags: wrap, fisch, protein, schnell
zutaten:
- Vollkorn-Wrap: 120 g
- Thunfisch (Dose, Wasser): 150 g
- Griechischer Joghurt 0 %: 60 g
- Mais (abgetropft): 60 g
- Gurke: 80 g
- Salatmischung (Tüte): 40 g
- Zitrone: 10 g
zubereitung:
1. Thunfisch mit Joghurt, Zitrone, Salz und Pfeffer verrühren.
2. Wraps mit Salat, Thunfisch, Mais und Gurke belegen.
3. Fest einrollen und halbieren.

## Falafel-Wrap mit Tahin
en: Falafel wrap with tahini
es: Wrap de falafel con tahini
emoji: 🧆
typ: gericht
portionen: 2
tags: wrap, vegan, nahost
zutaten:
- Vollkorn-Wrap: 120 g
- Falafel (TK, gebacken): 160 g
- Tahin: 30 g
- Zitrone: 15 g
- Tomaten: 100 g
- Gurke: 100 g
- Rotkraut / Apfelrotkohl (Glas): 60 g
zubereitung:
1. Falafel im Ofen aufbacken.
2. Tahin mit Zitronensaft und Wasser glatt rühren.
3. Wraps mit Gemüse, Rotkohl, Falafel und Soße füllen.

## Halloumi-freier Gemüse-Wrap mit Hummus
en: Veggie hummus wrap
es: Wrap vegetal con hummus
emoji: 🌯
typ: gericht
portionen: 2
tags: wrap, vegan, schnell
zutaten:
- Vollkorn-Wrap: 120 g
- Hummus: 80 g
- Paprika: 100 g
- Zucchini: 100 g
- Rucola: 30 g
- Kichererbsen (abgetropft): 80 g
- Olivenöl: 5 g
zubereitung:
1. Paprika und Zucchini in Streifen im Öl anbraten.
2. Wraps mit Hummus bestreichen.
3. Mit Gemüse, Kichererbsen und Rucola füllen.

## Protein-Pasta mit Hähnchen und Brokkoli
en: Protein pasta with chicken and broccoli
es: Pasta proteica con pollo y brócoli
emoji: 🍝
typ: gericht
portionen: 4
tags: nudeln, protein, fitness, mealprep
zutaten:
- Linsennudeln (roh): 300 g
- Hähnchenbrust: 500 g
- Brokkoli: 400 g
- Frischkäse (mager / 0,2 %): 150 g
- Gemüsebrühe (zubereitet): 200 g
- Knoblauch: 6 g
- Parmesan: 20 g
zubereitung:
1. Nudeln kochen, Brokkoli die letzten 4 Minuten mitgaren.
2. Hähnchen würfeln und mit Knoblauch braten.
3. Brühe und Frischkäse einrühren, Nudeln und Brokkoli unterheben, mit Parmesan servieren.

## High-Protein-Bolognese mit Linsennudeln
en: High-protein bolognese with lentil pasta
es: Boloñesa proteica con pasta de lentejas
emoji: 🍝
typ: gericht
portionen: 4
tags: nudeln, protein, fitness, mealprep
zutaten:
- Linsennudeln (roh): 300 g
- Rinderhack (Tatar, fettarm): 500 g
- Passierte Tomaten: 700 g
- Zwiebeln: 100 g
- Karotten: 120 g
- Knoblauch: 6 g
- Oregano (getrocknet): 2 g
- Olivenöl: 10 g
zubereitung:
1. Hack mit Zwiebel, Karotte und Knoblauch anbraten.
2. Tomaten und Oregano dazu und 20 Minuten köcheln.
3. Nudeln kochen und mit der Soße servieren.

## Hähnchen-Reis-Auflauf mit Brokkoli
en: Chicken rice bake with broccoli
es: Gratinado de arroz con pollo y brócoli
emoji: 🧀
typ: gericht
portionen: 4
tags: auflauf, protein, mealprep
zutaten:
- Reis (trocken): 200 g
- Hähnchenbrust: 500 g
- Brokkoli: 400 g
- Cremefine 7 %: 200 g
- Gemüsebrühe (zubereitet): 300 g
- Reibekäse light: 80 g
zubereitung:
1. Reis 10 Minuten vorkochen. Hähnchen würfeln und kurz anbraten.
2. Reis, Hähnchen und Brokkoli in eine Form geben, Brühe mit Cremefine darübergießen.
3. Mit Käse bestreuen und bei 190 °C 30 Minuten backen.

## Puten-Hack-Pfanne mit Gemüse und Reis
en: Turkey mince skillet with vegetables and rice
es: Sartén de pavo picado con verduras y arroz
emoji: 🍳
typ: gericht
portionen: 4
tags: protein, mealprep, schnell
zutaten:
- Putenbrust (roh): 500 g
- Paprika: 200 g
- Zucchini: 200 g
- Zwiebeln: 100 g
- Passierte Tomaten: 300 g
- Paprikapulver (edelsüß): 5 g
- Reis (trocken): 240 g
- Rapsöl: 10 g
zubereitung:
1. Reis kochen. Pute fein hacken und im Öl krümelig braten.
2. Gemüse dazu und 5 Minuten braten.
3. Tomaten und Paprikapulver einrühren, 5 Minuten köcheln und mit Reis servieren.

## Lachs mit Spargel und Kartoffeln
en: Salmon with asparagus and potatoes
es: Salmón con espárragos y patatas
emoji: 🐟
typ: gericht
portionen: 2
tags: lachs, protein, frühling
zutaten:
- Lachs (roh): 300 g
- Spargel (grün): 300 g
- Kartoffeln (festkochend): 400 g
- Zitrone: 30 g
- Olivenöl: 10 g
- Dill (frisch): 5 g
zubereitung:
1. Kartoffeln kochen. Spargel mit Öl bei 210 °C 12 Minuten rösten.
2. Lachs auf das Blech legen und die letzten 10 Minuten mitgaren.
3. Mit Zitrone und Dill servieren.

## Hähnchen-Spieße mit Tzatziki
en: Chicken skewers with tzatziki
es: Brochetas de pollo con tzatziki
emoji: 🍢
typ: gericht
portionen: 4
tags: griechenland, protein, grill, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Zitrone: 40 g
- Oregano (getrocknet): 2 g
- Olivenöl: 15 g
- Tzatziki: 200 g
- Bulgur (roh): 200 g
zubereitung:
1. Hähnchen würfeln und mit Zitrone, Oregano und Öl marinieren.
2. Abwechselnd mit Paprika und Zwiebel aufspießen und 10 Minuten grillen.
3. Bulgur garen und mit Tzatziki servieren.

## Hähnchen in Senf-Honig-Soße
en: Chicken in honey mustard sauce
es: Pollo en salsa de miel y mostaza
emoji: 🍯
typ: sauce
beilage: reis
portionen: 4
tags: hähnchen, schnell, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Senf: 40 g
- Honig: 30 g
- Cremefine 7 %: 200 g
- Gemüsebrühe (zubereitet): 100 g
- Zwiebeln: 80 g
- Rapsöl: 10 g
zubereitung:
1. Hähnchen würfeln und anbraten, Zwiebel dazu.
2. Senf, Honig, Brühe und Cremefine einrühren.
3. 5 Minuten köcheln und abschmecken.

## Hähnchen-Paprika-Rahm
en: Chicken in paprika cream
es: Pollo con crema de pimentón
emoji: 🫑
typ: sauce
beilage: nudeln
portionen: 4
tags: hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Paprika: 400 g
- Zwiebeln: 100 g
- Paprikapulver (edelsüß): 8 g
- Tomatenmark: 20 g
- Cremefine 7 %: 200 g
- Gemüsebrühe (zubereitet): 200 g
- Rapsöl: 10 g
zubereitung:
1. Hähnchen und Zwiebeln anbraten, Paprikastreifen dazu.
2. Tomatenmark und Paprikapulver kurz mitrösten.
3. Mit Brühe und Cremefine ablöschen und 8 Minuten köcheln.

## Ofen-Hähnchen mit Wurzelgemüse
en: Roast chicken with root vegetables
es: Pollo al horno con tubérculos
emoji: 🍗
typ: gericht
portionen: 4
tags: hähnchen, ofen, mealprep
zutaten:
- Hähnchenschenkel (roh): 800 g
- Karotten: 300 g
- Kartoffeln (festkochend): 500 g
- Kürbis (Hokkaido): 300 g
- Zwiebeln: 150 g
- Olivenöl: 20 g
- Paprikapulver (edelsüß): 5 g
- Knoblauch: 10 g
zubereitung:
1. Gemüse in Stücke schneiden, mit Öl, Knoblauch und Gewürzen mischen.
2. Hähnchen darauf legen und salzen.
3. Bei 200 °C 45 Minuten braten.

## Hackbällchen in Tomatensoße mit Reis
en: Meatballs in tomato sauce with rice
es: Albóndigas en salsa de tomate con arroz
emoji: 🍝
typ: gericht
portionen: 4
tags: hack, mealprep, klassiker
zutaten:
- Rinderhack: 500 g
- Eier: 50 g
- Semmelbrösel: 40 g
- Zwiebeln: 100 g
- Passierte Tomaten: 700 g
- Knoblauch: 6 g
- Basilikum (frisch): 10 g
- Reis (trocken): 240 g
- Olivenöl: 10 g
zubereitung:
1. Hack mit Ei, Bröseln und der halben Zwiebel verkneten und Bällchen formen.
2. Rundum anbraten, Rest-Zwiebel, Knoblauch und Tomaten dazu und 15 Minuten köcheln.
3. Mit Reis und Basilikum servieren.

## Rindfleisch-Gemüse-Pfanne mit Quinoa
en: Beef vegetable skillet with quinoa
es: Sartén de ternera y verduras con quinoa
emoji: 🥩
typ: gericht
portionen: 4
tags: rind, protein, mealprep
zutaten:
- Rinderhüftsteak (roh): 500 g
- Quinoa (trocken): 200 g
- Brokkoli: 300 g
- Paprika: 200 g
- Sojasoße: 40 g
- Knoblauch: 6 g
- Rapsöl: 10 g
zubereitung:
1. Quinoa kochen. Rind in Streifen scharf anbraten und herausnehmen.
2. Gemüse 4 Minuten braten, Knoblauch dazu.
3. Rind und Sojasoße zugeben und mit Quinoa servieren.

## Tofu-Gemüse-Curry mit Kichererbsen
en: Tofu vegetable curry with chickpeas
es: Curry de tofu y verduras con garbanzos
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: vegan, curry, protein, mealprep
zutaten:
- Tofu (fest): 400 g
- Kichererbsen (abgetropft): 250 g
- Kokosmilch light (Dose): 400 g
- Currypulver: 12 g
- Spinat: 150 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Rapsöl: 10 g
zubereitung:
1. Tofuwürfel anbraten und herausnehmen. Zwiebel und Paprika anbraten, Curry dazu.
2. Kokosmilch und Kichererbsen dazu und 10 Minuten köcheln.
3. Tofu und Spinat unterheben.

## Kichererbsen-Spinat-Curry
en: Chickpea spinach curry
es: Curry de garbanzos y espinacas
emoji: 🫘
typ: sauce
beilage: reis
portionen: 4
tags: vegan, curry, indien
zutaten:
- Kichererbsen (abgetropft): 500 g
- Spinat: 300 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Garam Masala: 10 g
- Kurkuma: 3 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Kokosmilch light (Dose): 200 g
- Rapsöl: 15 g
zubereitung:
1. Zwiebeln, Knoblauch und Ingwer anbraten, Gewürze kurz mitrösten.
2. Tomaten, Kichererbsen und Kokosmilch dazu und 15 Minuten köcheln.
3. Spinat unterheben und zusammenfallen lassen.

## Linsen-Gemüse-Eintopf
en: Lentil vegetable stew
es: Guiso de lentejas y verduras
emoji: 🍲
typ: gericht
portionen: 5
tags: eintopf, vegan, mealprep
zutaten:
- Linsen (trocken): 300 g
- Karotten: 200 g
- Kartoffeln (festkochend): 300 g
- Staudensellerie: 100 g
- Zwiebeln: 100 g
- Tomatenmark: 30 g
- Gemüsebrühe (zubereitet): 1500 g
- Essig (Weißwein): 20 g
zubereitung:
1. Gemüse würfeln und mit Tomatenmark anschwitzen.
2. Linsen und Brühe dazu und 35 Minuten köcheln.
3. Mit Essig, Salz und Pfeffer abschmecken.

## Chili sin Carne mit Süßkartoffel und Quinoa
en: Sweet potato quinoa chili
es: Chili vegano de boniato y quinoa
emoji: 🌶️
typ: gericht
portionen: 5
tags: vegan, chili, mealprep
zutaten:
- Süßkartoffel: 500 g
- Quinoa (trocken): 100 g
- Kidneybohnen (abgetropft): 400 g
- Schwarze Bohnen (Dose): 250 g
- Gehackte Tomaten (Dose): 800 g
- Zwiebeln: 150 g
- Kreuzkümmel: 4 g
- Chilipulver: 3 g
- Mais (abgetropft): 150 g
- Rapsöl: 10 g
zubereitung:
1. Zwiebeln anbraten, Gewürze dazu.
2. Süßkartoffelwürfel, Quinoa, Tomaten und 300 ml Wasser dazu und 20 Minuten köcheln.
3. Bohnen und Mais unterrühren und 10 Minuten weiterköcheln.

## Tofu-Rührei
en: Tofu scramble
es: Revuelto de tofu
emoji: 🍳
typ: gericht
portionen: 2
tags: frühstück, vegan, protein
zutaten:
- Tofu (fest): 300 g
- Kurkuma: 2 g
- Spinat: 100 g
- Kirschtomaten: 150 g
- Frühlingszwiebeln: 20 g
- Sojasoße: 10 g
- Rapsöl: 10 g
- Vollkornbrot (Scheibe): 100 g
zubereitung:
1. Tofu mit der Gabel zerbröseln und im Öl anbraten.
2. Kurkuma und Sojasoße dazu, Spinat und Tomaten unterheben.
3. Mit Frühlingszwiebeln und Brot servieren.

## Hüttenkäse-Pancakes
en: Cottage cheese pancakes
es: Tortitas de requesón
emoji: 🥞
typ: gericht
portionen: 2
tags: frühstück, protein, süß
zutaten:
- Körniger Frischkäse (fettarm): 200 g
- Eier: 100 g
- Haferflocken (zart): 60 g
- Backpulver: 3 g
- Beeren (TK): 150 g
- Rapsöl: 5 g
zubereitung:
1. Frischkäse, Eier, Haferflocken und Backpulver pürieren.
2. Kleine Pancakes in einer leicht geölten Pfanne je Seite 2 Minuten backen.
3. Mit Beeren servieren.

## Bananen-Protein-Shake-Bowl
en: Banana protein smoothie bowl
es: Smoothie bowl proteico de plátano
emoji: 🍌
typ: gericht
portionen: 1
tags: frühstück, protein, schnell
zutaten:
- Banane: 150 g
- Skyr: 200 g
- Proteinpulver: 20 g
- Milch (1,5 %): 80 g
- Haferflocken: 20 g
- Beeren (TK): 80 g
zubereitung:
1. Banane, Skyr, Proteinpulver und Milch dickcremig pürieren.
2. In eine Schale geben.
3. Mit Haferflocken und Beeren toppen.

## Grüner Smoothie mit Spinat
en: Green spinach smoothie
es: Batido verde de espinacas
emoji: 🥬
typ: gericht
portionen: 1
tags: frühstück, vegan, schnell
zutaten:
- Spinat: 60 g
- Banane: 120 g
- Apfel: 120 g
- Ingwer (frisch): 5 g
- Wasser: 200 g
- Zitrone: 10 g
zubereitung:
1. Alles in den Mixer geben.
2. Fein pürieren.
3. Sofort trinken.

## Beeren-Protein-Smoothie
en: Berry protein smoothie
es: Batido proteico de frutos rojos
emoji: 🫐
typ: gericht
portionen: 1
tags: frühstück, protein, schnell
zutaten:
- Beeren (TK): 150 g
- Skyr: 150 g
- Milch (1,5 %): 200 g
- Proteinpulver: 25 g
- Honig: 5 g
zubereitung:
1. Alle Zutaten in den Mixer geben.
2. Fein pürieren.
3. Kalt servieren.

## Hähnchenbrust-Sandwich mit Pesto
en: Chicken pesto sandwich
es: Sándwich de pollo al pesto
emoji: 🥪
typ: gericht
portionen: 2
tags: sandwich, protein, schnell
zutaten:
- Vollkornbrot (Scheibe): 200 g
- Hähnchenbrust: 200 g
- Pesto: 30 g
- Mozzarella light: 60 g
- Tomaten: 100 g
- Rucola: 30 g
zubereitung:
1. Hähnchen braten und in Scheiben schneiden.
2. Brot mit Pesto bestreichen.
3. Mit Hähnchen, Mozzarella, Tomate und Rucola belegen und zuklappen.

## Club-Sandwich mit Pute
en: Turkey club sandwich
es: Sándwich club de pavo
emoji: 🥪
typ: gericht
portionen: 2
tags: sandwich, protein
zutaten:
- Toastbrot: 150 g
- Putenbrust (roh): 200 g
- Bacon: 40 g
- Tomaten: 100 g
- Salatmischung (Tüte): 40 g
- Griechischer Joghurt 0 %: 40 g
- Senf: 5 g
zubereitung:
1. Pute braten und in Scheiben schneiden, Bacon knusprig braten.
2. Toast rösten, mit Joghurt-Senf bestreichen.
3. Schichtweise mit Salat, Tomate, Pute und Bacon belegen und diagonal halbieren.

## Gefüllte Süßkartoffel mit Bohnen
en: Stuffed sweet potato with beans
es: Boniato relleno de alubias
emoji: 🍠
typ: gericht
portionen: 2
tags: vegetarisch, mexiko, ofen
zutaten:
- Süßkartoffel: 600 g
- Schwarze Bohnen (Dose): 200 g
- Mais (abgetropft): 80 g
- Salsa (Dip): 80 g
- Griechischer Joghurt 0 %: 80 g
- Käse gerieben: 30 g
- Koriander (frisch): 5 g
zubereitung:
1. Süßkartoffeln bei 200 °C 45 Minuten weich backen.
2. Bohnen und Mais erwärmen.
3. Kartoffeln aufschneiden, füllen und mit Salsa, Joghurt, Käse und Koriander toppen.

## Ofenkartoffel mit Kräuterquark
en: Baked potato with herb quark
es: Patata al horno con requesón de hierbas
emoji: 🥔
typ: gericht
portionen: 2
tags: vegetarisch, protein, klassiker
zutaten:
- Kartoffeln (mehlig): 600 g
- Magerquark: 250 g
- Schnittlauch: 10 g
- Petersilie (frisch): 10 g
- Knoblauch: 3 g
- Leinöl: 5 g
zubereitung:
1. Kartoffeln in Alufolie bei 200 °C 60 Minuten backen.
2. Quark mit Kräutern, Knoblauch und etwas Wasser glatt rühren.
3. Kartoffeln aufschneiden und mit Kräuterquark füllen.

## Schweinemedaillons mit Pilzrahm
en: Pork medallions with mushroom cream
es: Medallones de cerdo con crema de setas
emoji: 🍄
typ: gericht
portionen: 4
tags: deutschland, schwein, protein
zutaten:
- Schweinefilet (roh): 600 g
- Champignons: 400 g
- Zwiebeln: 80 g
- Cremefine 7 %: 200 g
- Gemüsebrühe (zubereitet): 150 g
- Rapsöl: 10 g
- Spätzle (frisch): 500 g
zubereitung:
1. Filet in Medaillons schneiden und je Seite 3 Minuten braten, warm stellen.
2. Zwiebeln und Pilze im Bratfett anbraten.
3. Mit Brühe und Cremefine ablöschen, einkochen und mit Spätzle servieren.

## Hähnchen-Geschnetzeltes mit Reis
en: Sliced chicken in cream with rice
es: Pollo en tiras a la crema con arroz
emoji: 🍗
typ: gericht
portionen: 4
tags: deutschland, hähnchen, mealprep
zutaten:
- Hähnchenbrust: 600 g
- Champignons: 250 g
- Zwiebeln: 80 g
- Cremefine 7 %: 200 g
- Gemüsebrühe (zubereitet): 150 g
- Paprikapulver (edelsüß): 3 g
- Reis (trocken): 240 g
- Rapsöl: 10 g
zubereitung:
1. Reis kochen. Hähnchen in Streifen anbraten, Zwiebeln und Pilze dazu.
2. Mit Brühe und Cremefine ablöschen, mit Paprika würzen.
3. 5 Minuten köcheln und mit Reis servieren.

## Kassler mit Sauerkraut und Püree
en: Kassler with sauerkraut and mash
es: Kassler con chucrut y puré
emoji: 🥓
typ: gericht
portionen: 4
tags: deutschland, schwein, klassiker
zutaten:
- Kassler: 600 g
- Sauerkraut (abgetropft): 500 g
- Zwiebeln: 80 g
- Kartoffeln (mehlig): 800 g
- Milch (1,5 %): 150 g
- Butter: 15 g
- Kümmel: 2 g
zubereitung:
1. Sauerkraut mit Zwiebel, Kümmel und etwas Wasser 20 Minuten dünsten, Kassler darauf legen und mitziehen lassen.
2. Kartoffeln kochen und mit Milch und Butter stampfen.
3. Zusammen servieren.

## Bratkartoffeln mit Spiegelei
en: Fried potatoes with fried egg
es: Patatas salteadas con huevo frito
emoji: 🍳
typ: gericht
portionen: 2
tags: deutschland, klassiker, vegetarisch
zutaten:
- Kartoffeln (festkochend): 600 g
- Zwiebeln: 100 g
- Eier: 240 g
- Rapsöl: 20 g
- Schnittlauch: 5 g
- Gurke: 150 g
zubereitung:
1. Gekochte, kalte Kartoffeln in Scheiben schneiden und im Öl goldbraun braten.
2. Zwiebeln dazu und mitbraten.
3. Spiegeleier braten und mit Schnittlauch und Gurkensalat servieren.

## Hühnerfrikassee mit Reis
en: Chicken fricassee with rice
es: Fricasé de pollo con arroz
emoji: 🍲
typ: gericht
portionen: 4
tags: deutschland, hähnchen, klassiker
zutaten:
- Hähnchenbrust: 600 g
- Champignons: 200 g
- Erbsen (TK): 150 g
- Spargel (grün): 200 g
- Hühnerbrühe (zubereitet): 400 g
- Cremefine 7 %: 150 g
- Mehl: 25 g
- Butter: 20 g
- Zitrone: 20 g
- Reis (trocken): 240 g
zubereitung:
1. Hähnchen in der Brühe 15 Minuten gar ziehen lassen und würfeln.
2. Butter schmelzen, Mehl anschwitzen, Brühe und Cremefine einrühren.
3. Pilze, Erbsen, Spargel und Hähnchen 5 Minuten darin garen, mit Zitrone abschmecken und mit Reis servieren.

## Senfeier mit Kartoffeln
en: Eggs in mustard sauce with potatoes
es: Huevos en salsa de mostaza con patatas
emoji: 🥚
typ: gericht
portionen: 3
tags: deutschland, vegetarisch, klassiker
zutaten:
- Eier: 360 g
- Kartoffeln (festkochend): 600 g
- Senf: 40 g
- Milch (1,5 %): 300 g
- Gemüsebrühe (zubereitet): 200 g
- Mehl: 25 g
- Butter: 15 g
- Schnittlauch: 5 g
zubereitung:
1. Eier 8 Minuten kochen und pellen, Kartoffeln kochen.
2. Butter schmelzen, Mehl anschwitzen, mit Milch und Brühe aufgießen und 5 Minuten köcheln.
3. Senf einrühren, Eier halbieren und in der Soße erwärmen, mit Kartoffeln servieren.

## Gurkensalat mit Dill
en: Cucumber salad with dill
es: Ensalada de pepino con eneldo
emoji: 🥒
typ: gericht
portionen: 4
tags: deutschland, salat, beilage, vegetarisch
zutaten:
- Gurke: 600 g
- Joghurt natur: 150 g
- Dill (frisch): 10 g
- Essig (Weißwein): 15 g
- Zucker: 5 g
- Zwiebeln: 40 g
zubereitung:
1. Gurke hauchdünn hobeln.
2. Joghurt mit Essig, Zucker, Dill, Salz und Pfeffer verrühren.
3. Mit Gurke und fein gehackter Zwiebel mischen.

## Schwäbischer Kartoffelsalat
en: Swabian potato salad
es: Ensalada de patata suaba
emoji: 🥔
typ: gericht
portionen: 4
tags: deutschland, schwaben, salat, beilage
zutaten:
- Kartoffeln (festkochend): 1000 g
- Zwiebeln: 100 g
- Gemüsebrühe (zubereitet): 250 g
- Essig (Weißwein): 50 g
- Senf: 10 g
- Rapsöl: 30 g
- Schnittlauch: 10 g
zubereitung:
1. Kartoffeln kochen, pellen und warm in Scheiben schneiden.
2. Brühe mit Zwiebel, Essig und Senf aufkochen und über die Kartoffeln gießen.
3. Öl unterheben, 30 Minuten ziehen lassen und mit Schnittlauch servieren.

## Eiersalat leicht
en: Light egg salad
es: Ensalada de huevo ligera
emoji: 🥚
typ: gericht
portionen: 3
tags: deutschland, protein, jause
zutaten:
- Eier: 360 g
- Griechischer Joghurt 0 %: 120 g
- Senf: 10 g
- Essiggurken: 60 g
- Schnittlauch: 5 g
zubereitung:
1. Eier hart kochen, pellen und würfeln.
2. Joghurt mit Senf, Salz und Pfeffer verrühren.
3. Eier, gehackte Gurken und Schnittlauch unterheben.

## Wurstsalat leicht
en: Light sausage salad
es: Ensalada de embutido ligera
emoji: 🥗
typ: gericht
portionen: 2
tags: bayern, schwaben, jause
zutaten:
- Geflügelwurst: 200 g
- Zwiebeln: 60 g
- Essiggurken: 80 g
- Essig (Weißwein): 25 g
- Rapsöl: 10 g
- Schnittlauch: 5 g
- Radieschen: 80 g
zubereitung:
1. Wurst in feine Streifen schneiden.
2. Mit Zwiebelringen, Gurken und Radieschen mischen.
3. Mit Essig, Öl, Salz und Pfeffer anmachen und Schnittlauch drüberstreuen.

## Hähnchen-Cordon-bleu aus dem Ofen
en: Baked chicken cordon bleu
es: Cordon bleu de pollo al horno
emoji: 🧀
typ: gericht
portionen: 4
tags: schweiz, hähnchen, protein
zutaten:
- Hähnchenbrust: 600 g
- Kochschinken: 80 g
- Emmentaler: 80 g
- Eier: 50 g
- Paniermehl: 60 g
- Rapsöl: 15 g
- Kartoffeln (festkochend): 600 g
zubereitung:
1. Hähnchenbrust seitlich aufschneiden, mit Schinken und Käse füllen und zuklappen.
2. In Ei und Paniermehl wenden, mit Öl beträufeln.
3. Mit Kartoffelspalten bei 200 °C 25 Minuten backen.

## Käsespätzle leicht
en: Light cheese spätzle
es: Käsespätzle ligeros
emoji: 🧀
typ: gericht
portionen: 4
tags: schwaben, allgäu, vegetarisch
zutaten:
- Spätzle (frisch): 700 g
- Reibekäse light: 150 g
- Bergkäse: 50 g
- Zwiebeln: 250 g
- Rapsöl: 10 g
- Schnittlauch: 5 g
zubereitung:
1. Zwiebeln in Ringen im Öl langsam goldbraun rösten.
2. Spätzle erwärmen und lagenweise mit Käse in eine Form schichten.
3. Kurz im Ofen schmelzen lassen, Röstzwiebeln und Schnittlauch darauf.

## Kärntner Kasnudeln (vereinfacht)
en: Carinthian cheese dumplings (simplified)
es: Kasnudeln de Carintia (simplificado)
emoji: 🥟
typ: gericht
portionen: 4
tags: österreich, kärnten, vegetarisch
zutaten:
- Mehl: 300 g
- Eier: 50 g
- Kartoffeln (mehlig): 400 g
- Magerquark: 200 g
- Minze (frisch): 10 g
- Zwiebeln: 80 g
- Butter: 30 g
zubereitung:
1. Mehl, Ei, Salz und 120 ml Wasser zu einem Teig kneten und ruhen lassen.
2. Kartoffeln kochen, zerdrücken, mit Quark, gedünsteter Zwiebel und Minze mischen.
3. Teig ausrollen, Kreise ausstechen, füllen und den Rand zusammendrücken.
4. In Salzwasser 10 Minuten ziehen lassen und mit brauner Butter servieren.

## Grießnockerlsuppe
en: Semolina dumpling soup
es: Sopa de ñoquis de sémola
emoji: 🍲
typ: gericht
portionen: 4
tags: österreich, suppe, klassiker
zutaten:
- Hartweizengrieß: 100 g
- Butter: 40 g
- Eier: 50 g
- Rinderbrühe (zubereitet): 1200 g
- Karotten: 100 g
- Schnittlauch: 5 g
zubereitung:
1. Weiche Butter mit Ei und Salz schaumig rühren, Grieß einrühren und 20 Minuten quellen lassen.
2. Mit zwei Teelöffeln Nockerl formen.
3. In leicht siedender Brühe 15 Minuten ziehen lassen, Karottenwürfel mitgaren, mit Schnittlauch servieren.

## Steirischer Käferbohnensalat
en: Styrian runner bean salad
es: Ensalada estiria de judías
emoji: 🫘
typ: gericht
portionen: 3
tags: österreich, steiermark, salat, vegan
zutaten:
- Kidneybohnen (abgetropft): 500 g
- Zwiebeln: 80 g
- Kürbiskernöl: 20 g
- Essig (Weißwein): 30 g
- Schnittlauch: 5 g
zubereitung:
1. Bohnen abspülen.
2. Mit fein geschnittenen Zwiebeln, Essig, Salz und Pfeffer mischen.
3. Kürbiskernöl darüber trizzeln und mit Schnittlauch bestreuen.

## Backhendl mit Erdäpfelsalat
en: Austrian fried chicken with potato salad
es: Pollo frito austriaco con ensalada de patata
emoji: 🍗
typ: gericht
portionen: 4
tags: österreich, hähnchen, klassiker
zutaten:
- Hähnchenschenkel (roh): 800 g
- Mehl: 50 g
- Eier: 100 g
- Semmelbrösel: 120 g
- Rapsöl: 60 g
- Kartoffeln (festkochend): 800 g
- Gemüsebrühe (zubereitet): 150 g
- Essig (Weißwein): 30 g
- Zwiebeln: 60 g
- Zitrone: 40 g
zubereitung:
1. Kartoffeln kochen und mit Brühe, Essig und Zwiebel zu Salat anmachen.
2. Hähnchen salzen und in Mehl, Ei und Bröseln panieren.
3. Im Öl schwimmend 12–15 Minuten goldbraun backen oder bei 200 °C im Ofen 35 Minuten. Mit Zitrone servieren.

## Gebackener Karfiol (Blumenkohl)
en: Breaded cauliflower
es: Coliflor rebozada
emoji: 🥦
typ: gericht
portionen: 3
tags: österreich, vegetarisch
zutaten:
- Blumenkohl: 800 g
- Eier: 100 g
- Semmelbrösel: 80 g
- Mehl: 30 g
- Rapsöl: 30 g
- Magerquark: 200 g
- Schnittlauch: 5 g
zubereitung:
1. Blumenkohl in Röschen teilen und 5 Minuten vorkochen.
2. In Mehl, Ei und Bröseln panieren, mit Öl beträufeln.
3. Bei 210 °C 20 Minuten knusprig backen und mit Schnittlauchquark servieren.

## Szegediner Gulasch
en: Szegedin goulash
es: Gulash de Szeged
emoji: 🍲
typ: gericht
portionen: 4
tags: österreich, ungarn, schwein, sauerkraut
zutaten:
- Schweinefilet (roh): 600 g
- Sauerkraut (abgetropft): 500 g
- Zwiebeln: 200 g
- Paprikapulver (edelsüß): 12 g
- Tomatenmark: 20 g
- Kümmel: 2 g
- Rinderbrühe (zubereitet): 400 g
- Saure Sahne (10 %): 150 g
- Rapsöl: 15 g
- Kartoffeln (festkochend): 600 g
zubereitung:
1. Zwiebeln anrösten, Fleischwürfel dazu und anbraten.
2. Paprika, Tomatenmark und Kümmel einrühren, Sauerkraut und Brühe dazu und 40 Minuten schmoren.
3. Saure Sahne unterrühren und mit Kartoffeln servieren.

## Eiernockerl mit Salat
en: Egg dumplings with salad
es: Ñoquis con huevo y ensalada
emoji: 🍳
typ: gericht
portionen: 3
tags: österreich, vegetarisch, schnell
zutaten:
- Spätzle (frisch): 500 g
- Eier: 240 g
- Butter: 15 g
- Schnittlauch: 5 g
- Salatmischung (Tüte): 150 g
- Essig (Weißwein): 15 g
- Rapsöl: 10 g
zubereitung:
1. Nockerl in Butter anbraten.
2. Verquirlte Eier darübergießen und unter Rühren stocken lassen.
3. Mit Schnittlauch und einem grünen Salat servieren.

## Zwiebelrostbraten leicht
en: Light onion roast beef
es: Rosbif con cebolla ligero
emoji: 🥩
typ: gericht
portionen: 4
tags: österreich, rind
zutaten:
- Rinderhüftsteak (roh): 700 g
- Zwiebeln: 400 g
- Mehl: 20 g
- Rinderbrühe (zubereitet): 250 g
- Rapsöl: 20 g
- Kartoffeln (festkochend): 700 g
- Senf: 15 g
zubereitung:
1. Zwiebelringe in Mehl wenden und im Öl knusprig braten, herausnehmen.
2. Steaks mit Senf bestreichen und je Seite 3 Minuten braten.
3. Mit Brühe ablöschen, kurz einkochen und mit Zwiebeln und Bratkartoffeln servieren.

## Polenta mit Pilzragout
en: Polenta with mushroom ragout
es: Polenta con ragú de setas
emoji: 🍄
typ: gericht
portionen: 3
tags: italien, schweiz, vegetarisch
zutaten:
- Polenta (roh): 200 g
- Gemüsebrühe (zubereitet): 800 g
- Parmesan: 30 g
- Champignons: 500 g
- Zwiebeln: 80 g
- Kochsahne (15 %): 100 g
- Thymian (getrocknet): 2 g
- Olivenöl: 10 g
zubereitung:
1. Polenta in die kochende Brühe einrühren und 10 Minuten quellen lassen, Parmesan unterrühren.
2. Pilze und Zwiebeln im Öl kräftig anbraten.
3. Mit Sahne und Thymian einkochen und auf der Polenta servieren.

## Spaghetti Bolognese klassisch
en: Classic spaghetti bolognese
es: Espaguetis a la boloñesa clásicos
emoji: 🍝
typ: gericht
portionen: 4
tags: italien, nudeln, hack, klassiker
zutaten:
- Nudeln (trocken): 320 g
- Hackfleisch gemischt: 400 g
- Zwiebeln: 100 g
- Karotten: 100 g
- Staudensellerie: 80 g
- Passierte Tomaten: 700 g
- Tomatenmark: 20 g
- Rotwein: 100 g
- Olivenöl: 10 g
- Parmesan: 30 g
zubereitung:
1. Gemüse fein würfeln und im Öl anschwitzen, Hack dazu und braten.
2. Tomatenmark kurz mitrösten, mit Wein ablöschen, Tomaten dazu.
3. Mindestens 40 Minuten leise köcheln und mit Spaghetti und Parmesan servieren.

## Penne mit Zucchini und Ricotta
en: Penne with courgette and ricotta
es: Penne con calabacín y ricotta
emoji: 🍝
typ: gericht
portionen: 3
tags: italien, nudeln, vegetarisch, schnell
zutaten:
- Nudeln (trocken): 250 g
- Zucchini: 400 g
- Ricotta: 200 g
- Zitrone: 20 g
- Knoblauch: 6 g
- Parmesan: 20 g
- Olivenöl: 10 g
- Basilikum (frisch): 10 g
zubereitung:
1. Nudeln kochen. Zucchini würfeln und mit Knoblauch im Öl anbraten.
2. Ricotta mit Zitronenabrieb und etwas Nudelwasser verrühren.
3. Alles mischen und mit Parmesan und Basilikum servieren.

## Spinat-Ricotta-Cannelloni
en: Spinach ricotta cannelloni
es: Canelones de espinacas y ricotta
emoji: 🍝
typ: gericht
portionen: 4
tags: italien, nudeln, vegetarisch, auflauf
zutaten:
- Lasagneplatten: 250 g
- Ricotta: 250 g
- Spinat: 400 g
- Passierte Tomaten: 500 g
- Mozzarella light: 125 g
- Parmesan: 30 g
- Knoblauch: 6 g
zubereitung:
1. Spinat mit Knoblauch zusammenfallen lassen, ausdrücken und mit Ricotta mischen.
2. Lasagneplatten kurz vorkochen, füllen und aufrollen.
3. In eine Form mit Tomatensoße legen, mit Mozzarella und Parmesan bestreuen und bei 190 °C 30 Minuten backen.

## Pasta e Fagioli
en: Pasta e fagioli
es: Pasta e fagioli
emoji: 🍲
typ: gericht
portionen: 4
tags: italien, suppe, vegan
zutaten:
- Nudeln (trocken): 150 g
- Weiße Bohnen (Dose): 400 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 100 g
- Karotten: 100 g
- Knoblauch: 6 g
- Gemüsebrühe (zubereitet): 800 g
- Olivenöl: 15 g
- Rosmarin (getrocknet): 2 g
zubereitung:
1. Gemüse und Knoblauch im Öl anschwitzen.
2. Tomaten, Bohnen, Brühe und Rosmarin dazu und 15 Minuten köcheln.
3. Kleine Nudeln dazugeben und gar ziehen lassen.

## Hähnchen Piccata
en: Chicken piccata
es: Pollo piccata
emoji: 🍋
typ: gericht
portionen: 4
tags: italien, hähnchen, protein, schnell
zutaten:
- Hähnchenbrust: 600 g
- Mehl: 20 g
- Zitrone: 60 g
- Kapern: 20 g
- Hühnerbrühe (zubereitet): 150 g
- Butter: 20 g
- Olivenöl: 10 g
- Nudeln (trocken): 300 g
zubereitung:
1. Hähnchen flach klopfen, mehlieren und im Öl je Seite 3 Minuten braten.
2. Mit Brühe und Zitronensaft ablöschen, Kapern und Butter einrühren.
3. Kurz einkochen und mit Nudeln servieren.

## Risotto mit Kürbis
en: Pumpkin risotto
es: Risotto de calabaza
emoji: 🎃
typ: gericht
portionen: 4
tags: italien, reis, vegetarisch, herbst
zutaten:
- Risottoreis (roh): 300 g
- Kürbis (Hokkaido): 500 g
- Zwiebeln: 80 g
- Weißwein: 100 g
- Gemüsebrühe (zubereitet): 1000 g
- Parmesan: 40 g
- Butter: 15 g
zubereitung:
1. Zwiebel in Butter anschwitzen, Kürbiswürfel und Reis dazu.
2. Mit Wein ablöschen und nach und nach Brühe angießen, 18 Minuten rühren.
3. Parmesan unterrühren.

## Frittata mit Kartoffeln und Spinat
en: Potato spinach frittata
es: Frittata de patata y espinacas
emoji: 🍳
typ: gericht
portionen: 4
tags: italien, eier, vegetarisch, mealprep
zutaten:
- Eier: 480 g
- Kartoffeln (festkochend): 300 g
- Spinat: 200 g
- Zwiebeln: 80 g
- Parmesan: 30 g
- Olivenöl: 10 g
zubereitung:
1. Gekochte Kartoffeln in Scheiben mit Zwiebel im Öl anbraten, Spinat dazu.
2. Eier mit Parmesan verquirlen und darübergießen.
3. Bei kleiner Hitze stocken lassen und 10 Minuten bei 180 °C im Ofen fertig garen.

## Panzanella
en: Panzanella (Tuscan bread salad)
es: Panzanella
emoji: 🍅
typ: gericht
portionen: 3
tags: italien, salat, vegan, sommer
zutaten:
- Ciabatta: 200 g
- Tomaten: 500 g
- Gurke: 200 g
- Zwiebeln: 60 g
- Basilikum (frisch): 15 g
- Essig (Weißwein): 20 g
- Olivenöl: 30 g
zubereitung:
1. Brot würfeln und ohne Fett goldbraun rösten.
2. Tomaten und Gurke würfeln, Zwiebel in Ringe schneiden.
3. Alles mit Essig, Öl und Basilikum mischen und 15 Minuten ziehen lassen.

## Ratatouille
en: Ratatouille
es: Ratatouille
emoji: 🍆
typ: gericht
portionen: 4
tags: frankreich, vegan, gemüse, mealprep
zutaten:
- Aubergine: 400 g
- Zucchini: 400 g
- Paprika: 300 g
- Tomaten: 400 g
- Zwiebeln: 150 g
- Knoblauch: 10 g
- Thymian (getrocknet): 2 g
- Olivenöl: 25 g
zubereitung:
1. Gemüse würfeln. Zwiebeln und Knoblauch im Öl anschwitzen.
2. Auberginen, Paprika und Zucchini nacheinander dazugeben und anbraten.
3. Tomaten und Thymian dazu und 30 Minuten schmoren.

## Quiche Lorraine leicht
en: Light quiche lorraine
es: Quiche lorraine ligera
emoji: 🥧
typ: gericht
portionen: 6
tags: frankreich, eier, backen
zutaten:
- Mehl: 200 g
- Butter: 80 g
- Eier: 250 g
- Kochschinken: 150 g
- Lauch: 200 g
- Milch (1,5 %): 200 g
- Saure Sahne (10 %): 150 g
- Reibekäse light: 80 g
zubereitung:
1. Mehl, Butter, ein Ei und etwas Wasser zu einem Teig kneten und in eine Form drücken.
2. Schinken und Lauch kurz anbraten und auf dem Teig verteilen.
3. Restliche Eier mit Milch, saurer Sahne und Käse verquirlen, darübergießen und bei 180 °C 40 Minuten backen.

## Coq au Vin leicht
en: Light coq au vin
es: Coq au vin ligero
emoji: 🍷
typ: gericht
portionen: 4
tags: frankreich, hähnchen, schmoren
zutaten:
- Hähnchenschenkel (roh): 900 g
- Rotwein: 300 g
- Champignons: 250 g
- Zwiebeln: 150 g
- Karotten: 200 g
- Bacon: 60 g
- Hühnerbrühe (zubereitet): 200 g
- Thymian (getrocknet): 2 g
- Tomatenmark: 20 g
zubereitung:
1. Hähnchen und Speck anbraten, herausnehmen. Gemüse anbraten und Tomatenmark kurz mitrösten.
2. Mit Wein und Brühe ablöschen, Hähnchen und Thymian dazu.
3. Zugedeckt 50 Minuten schmoren.

## Croque Monsieur leicht
en: Light croque monsieur
es: Croque monsieur ligero
emoji: 🥪
typ: gericht
portionen: 2
tags: frankreich, sandwich, schnell
zutaten:
- Toastbrot: 120 g
- Kochschinken: 80 g
- Reibekäse light: 60 g
- Milch (1,5 %): 100 g
- Mehl: 10 g
- Senf: 5 g
zubereitung:
1. Milch mit Mehl zu einer kleinen Béchamel aufkochen.
2. Toast mit Senf bestreichen, mit Schinken und Käse belegen und zuklappen.
3. Béchamel und restlichen Käse darauf und bei 220 °C 8 Minuten überbacken.

## Gazpacho Andaluz
en: Andalusian gazpacho
es: Gazpacho andaluz
emoji: 🍅
typ: gericht
portionen: 4
tags: spanien, suppe, vegan, sommer
zutaten:
- Tomaten: 1000 g
- Gurke: 200 g
- Paprika: 150 g
- Zwiebeln: 50 g
- Knoblauch: 5 g
- Weißbrot: 50 g
- Essig (Weißwein): 30 g
- Olivenöl: 30 g
zubereitung:
1. Alles grob schneiden.
2. Mit Brot, Essig, Öl und Salz fein pürieren.
3. Mindestens 2 Stunden kalt stellen.

## Patatas Bravas leicht
en: Light patatas bravas
es: Patatas bravas ligeras
emoji: 🥔
typ: gericht
portionen: 3
tags: spanien, tapas, vegan
zutaten:
- Kartoffeln (festkochend): 700 g
- Olivenöl: 15 g
- Paprikapulver (edelsüß): 6 g
- Passierte Tomaten: 200 g
- Knoblauch: 6 g
- Chilipulver: 2 g
- Essig (Weißwein): 10 g
zubereitung:
1. Kartoffelwürfel mit Öl und Paprika bei 220 °C 30 Minuten knusprig backen.
2. Tomaten mit Knoblauch, Chili und Essig 10 Minuten einkochen.
3. Kartoffeln mit Soße servieren.

## Gambas al Ajillo
en: Gambas al ajillo
es: Gambas al ajillo
emoji: 🦐
typ: gericht
portionen: 2
tags: spanien, tapas, garnelen, schnell
zutaten:
- Garnelen: 400 g
- Knoblauch: 15 g
- Olivenöl: 30 g
- Chilipulver: 1 g
- Petersilie (frisch): 10 g
- Weißbrot: 100 g
zubereitung:
1. Knoblauch in Scheiben im Öl sanft goldig werden lassen, Chili dazu.
2. Garnelen 3 Minuten braten.
3. Mit Petersilie bestreuen und mit Brot zum Tunken servieren.

## Spanische Linsen mit Chorizo
en: Spanish lentils with chorizo
es: Lentejas con chorizo
emoji: 🍲
typ: gericht
portionen: 4
tags: spanien, linsen, eintopf
zutaten:
- Linsen (trocken): 300 g
- Chorizo: 100 g
- Kartoffeln (festkochend): 300 g
- Karotten: 150 g
- Zwiebeln: 100 g
- Paprikapulver (edelsüß): 5 g
- Gemüsebrühe (zubereitet): 1200 g
- Olivenöl: 10 g
zubereitung:
1. Chorizo und Zwiebel anbraten, Paprikapulver dazu.
2. Linsen, Gemüse und Brühe dazu und 35 Minuten köcheln.
3. Abschmecken und servieren.

## Griechische Bohnensuppe (Fasolada)
en: Greek bean soup (fasolada)
es: Sopa griega de alubias (fasolada)
emoji: 🫘
typ: gericht
portionen: 4
tags: griechenland, suppe, vegan
zutaten:
- Weiße Bohnen (Dose): 800 g
- Karotten: 200 g
- Staudensellerie: 100 g
- Zwiebeln: 100 g
- Tomatenmark: 30 g
- Gemüsebrühe (zubereitet): 1000 g
- Olivenöl: 20 g
zubereitung:
1. Gemüse würfeln und im Öl anschwitzen, Tomatenmark dazu.
2. Bohnen und Brühe dazu und 25 Minuten köcheln.
3. Mit etwas Olivenöl beträufelt servieren.

## Gefüllte Auberginen (Imam Bayildi)
en: Stuffed aubergines (imam bayildi)
es: Berenjenas rellenas (imam bayildi)
emoji: 🍆
typ: gericht
portionen: 4
tags: türkei, vegan, gemüse
zutaten:
- Aubergine: 800 g
- Zwiebeln: 200 g
- Tomaten: 300 g
- Knoblauch: 10 g
- Petersilie (frisch): 15 g
- Olivenöl: 30 g
- Zucker: 5 g
zubereitung:
1. Auberginen längs einschneiden und im Öl rundum anbraten.
2. Zwiebeln, Knoblauch und Tomaten weich dünsten, Petersilie und Zucker dazu.
3. In die Auberginen füllen und bei 180 °C 40 Minuten backen.

## Menemen
en: Menemen (Turkish scrambled eggs)
es: Menemen (huevos turcos)
emoji: 🍳
typ: gericht
portionen: 2
tags: türkei, frühstück, eier, vegetarisch
zutaten:
- Eier: 300 g
- Tomaten: 300 g
- Paprika: 150 g
- Zwiebeln: 60 g
- Olivenöl: 10 g
- Chilipulver: 1 g
zubereitung:
1. Paprika und Zwiebel im Öl weich braten.
2. Tomatenwürfel dazu und einkochen.
3. Eier unterrühren und weich stocken lassen.

## Hähnchen-Gyros-Teller leicht
en: Light chicken gyros plate
es: Plato de gyros de pollo ligero
emoji: 🥙
typ: gericht
portionen: 4
tags: griechenland, hähnchen, protein
zutaten:
- Hähnchenbrust: 600 g
- Gyros-Gewürz: 15 g
- Zwiebeln: 100 g
- Tzatziki: 200 g
- Reis (trocken): 200 g
- Tomaten: 200 g
- Gurke: 200 g
- Olivenöl: 15 g
zubereitung:
1. Hähnchen in feine Streifen schneiden, würzen und mit Zwiebeln knusprig braten.
2. Reis kochen.
3. Mit Tzatziki und Tomaten-Gurken-Salat servieren.

## Mercimek Köftesi
en: Mercimek köftesi (lentil balls)
es: Mercimek köftesi (bolitas de lentejas)
emoji: 🧆
typ: gericht
portionen: 4
tags: türkei, vegan, linsen
zutaten:
- Rote Linsen (trocken): 200 g
- Bulgur (roh): 150 g
- Zwiebeln: 100 g
- Tomatenmark: 30 g
- Kreuzkümmel: 3 g
- Petersilie (frisch): 20 g
- Zitrone: 30 g
- Romanasalat: 150 g
- Olivenöl: 15 g
zubereitung:
1. Linsen in 500 ml Wasser 15 Minuten kochen, Bulgur einrühren und quellen lassen.
2. Zwiebeln mit Tomatenmark im Öl anschwitzen und mit Kreuzkümmel, Petersilie und Zitrone untermischen.
3. Mit nassen Händen kleine Röllchen formen und in Salatblättern servieren.

## Fattoush mit Hähnchen
en: Fattoush with chicken
es: Fattoush con pollo
emoji: 🥗
typ: gericht
portionen: 3
tags: libanon, salat, hähnchen
zutaten:
- Hähnchenbrust: 350 g
- Naan: 120 g
- Romanasalat: 200 g
- Tomaten: 200 g
- Gurke: 200 g
- Radieschen: 100 g
- Minze (frisch): 10 g
- Zitrone: 40 g
- Olivenöl: 20 g
zubereitung:
1. Brot in Stücke schneiden und knusprig rösten. Hähnchen braten und schneiden.
2. Gemüse würfeln.
3. Alles mit Minze, Zitrone und Öl mischen.

## Tabouleh mit Hähnchen
en: Tabbouleh with chicken
es: Tabulé con pollo
emoji: 🥗
typ: gericht
portionen: 3
tags: libanon, salat, protein
zutaten:
- Bulgur (roh): 120 g
- Hähnchenbrust: 350 g
- Petersilie (frisch): 60 g
- Minze (frisch): 15 g
- Tomaten: 300 g
- Gurke: 150 g
- Zitrone: 60 g
- Olivenöl: 20 g
zubereitung:
1. Bulgur mit heißem Wasser quellen lassen. Hähnchen braten und würfeln.
2. Kräuter fein hacken, Gemüse würfeln.
3. Alles mit Zitrone und Öl mischen.

## Schakschuka grün
en: Green shakshuka
es: Shakshuka verde
emoji: 🍳
typ: gericht
portionen: 2
tags: israel, eier, vegetarisch
zutaten:
- Eier: 240 g
- Spinat: 250 g
- Zucchini: 200 g
- Lauch: 100 g
- Feta: 50 g
- Kreuzkümmel: 2 g
- Olivenöl: 10 g
zubereitung:
1. Lauch und Zucchini im Öl weich braten, Spinat dazu.
2. Mulden formen und Eier hineinschlagen.
3. Zugedeckt stocken lassen und mit Feta bestreuen.

## Hähnchen-Tikka-Spieße
en: Chicken tikka skewers
es: Brochetas de pollo tikka
emoji: 🍢
typ: gericht
portionen: 4
tags: indien, hähnchen, grill, protein
zutaten:
- Hähnchenbrust: 600 g
- Joghurt natur: 150 g
- Garam Masala: 10 g
- Kurkuma: 3 g
- Paprikapulver (edelsüß): 4 g
- Zitrone: 30 g
- Basmatireis (roh): 240 g
- Gurke: 200 g
zubereitung:
1. Hähnchen würfeln und in Joghurt, Gewürzen und Zitrone marinieren.
2. Aufspießen und bei starker Hitze 10–12 Minuten grillen.
3. Mit Reis und Gurken-Raita servieren.

## Aloo Gobi
en: Aloo gobi (potato cauliflower curry)
es: Aloo gobi
emoji: 🥔
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, vegan
zutaten:
- Kartoffeln (festkochend): 400 g
- Blumenkohl: 600 g
- Zwiebeln: 150 g
- Tomaten: 200 g
- Kurkuma: 3 g
- Kreuzkümmel: 4 g
- Garam Masala: 6 g
- Ingwer (frisch): 10 g
- Rapsöl: 20 g
- Koriander (frisch): 10 g
zubereitung:
1. Kreuzkümmel im Öl anrösten, Zwiebeln und Ingwer dazu.
2. Kartoffeln, Blumenkohl und Kurkuma dazugeben, mit 150 ml Wasser zugedeckt 20 Minuten garen.
3. Tomaten und Garam Masala unterrühren, mit Koriander servieren.

## Thai-Rindfleischsalat (Yam Nua)
en: Thai beef salad (yam nua)
es: Ensalada tailandesa de ternera
emoji: 🥗
typ: gericht
portionen: 3
tags: thailand, asiatisch, rind, salat, low carb
zutaten:
- Rinderhüftsteak (roh): 400 g
- Gurke: 200 g
- Kirschtomaten: 150 g
- Zwiebeln: 60 g
- Minze (frisch): 10 g
- Koriander (frisch): 10 g
- Fischsoße: 25 g
- Limette: 60 g
- Zucker: 8 g
- Chilipulver: 1 g
zubereitung:
1. Steak scharf anbraten, ruhen lassen und in dünne Scheiben schneiden.
2. Fischsoße, Limettensaft, Zucker und Chili verrühren.
3. Mit Gemüse und Kräutern mischen.

## Thai-Gurkensalat
en: Thai cucumber salad
es: Ensalada tailandesa de pepino
emoji: 🥒
typ: gericht
portionen: 3
tags: thailand, asiatisch, salat, vegan, beilage
zutaten:
- Gurke: 500 g
- Zwiebeln: 40 g
- Reisessig: 40 g
- Zucker: 15 g
- Chilipulver: 1 g
- Erdnüsse (geröstet, ungesalzen): 20 g
- Koriander (frisch): 5 g
zubereitung:
1. Gurke in dünne Scheiben schneiden.
2. Essig mit Zucker und Chili verrühren, bis sich der Zucker löst.
3. Mit Gurke und Zwiebel mischen, Erdnüsse und Koriander drüber.

## Gelbes Curry mit Hähnchen und Kartoffeln
en: Yellow curry with chicken and potatoes
es: Curry amarillo con pollo y patatas
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: thailand, asiatisch, curry, hähnchen
zutaten:
- Hähnchenbrust: 500 g
- Gelbe Currypaste: 50 g
- Kokosmilch light (Dose): 400 g
- Kartoffeln (festkochend): 300 g
- Zwiebeln: 100 g
- Fischsoße: 20 g
- Zucker: 5 g
zubereitung:
1. Currypaste anrösten, Kokosmilch und 150 ml Wasser dazu.
2. Kartoffelwürfel und Zwiebeln 12 Minuten köcheln.
3. Hähnchen dazugeben und 8 Minuten garen, mit Fischsoße und Zucker abschmecken.

## Panang-Curry mit Rind
en: Panang beef curry
es: Curry panang de ternera
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: thailand, asiatisch, curry, rind
zutaten:
- Rinderhüftsteak (roh): 500 g
- Rote Currypaste: 50 g
- Kokosmilch: 400 g
- Erdnussbutter: 20 g
- Paprika: 200 g
- Kaffirlimettenblätter: 3 g
- Fischsoße: 20 g
- Palmzucker: 10 g
zubereitung:
1. Currypaste mit etwas Kokosmilch anrösten.
2. Restliche Kokosmilch, Erdnussbutter und Limettenblätter dazu und aufkochen.
3. Rind in dünnen Streifen und Paprika 5 Minuten darin garen und abschmecken.

## Thai-Hähnchen mit Cashews
en: Thai cashew chicken
es: Pollo tailandés con anacardos
emoji: 🥜
typ: gericht
portionen: 3
tags: thailand, asiatisch, hähnchen, schnell
zutaten:
- Hähnchenbrust: 450 g
- Cashewkerne: 60 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Austernsoße: 30 g
- Sojasoße: 20 g
- Zucker: 5 g
- Öl: 15 g
- Jasminreis (roh): 210 g
zubereitung:
1. Cashews ohne Fett rösten. Hähnchen in Stücken scharf anbraten.
2. Paprika und Zwiebel 3 Minuten mitbraten.
3. Soßen, Zucker und Cashews dazu und mit Reis servieren.

## Thai-Fischcurry mit Kokos
en: Thai coconut fish curry
es: Curry tailandés de pescado con coco
emoji: 🐟
typ: sauce
beilage: reis
portionen: 4
tags: thailand, asiatisch, fisch, curry
zutaten:
- Fischfilet (natur, roh): 600 g
- Rote Currypaste: 40 g
- Kokosmilch light (Dose): 400 g
- Grüne Bohnen: 200 g
- Thai-Basilikum: 15 g
- Fischsoße: 20 g
- Limette: 30 g
zubereitung:
1. Currypaste anrösten, Kokosmilch dazu.
2. Bohnen 5 Minuten köcheln.
3. Fischstücke 5 Minuten darin ziehen lassen, mit Fischsoße, Limette und Basilikum abschmecken.

## Glasnudelsalat (Yum Woon Sen)
en: Glass noodle salad (yum woon sen)
es: Ensalada de fideos de cristal
emoji: 🍜
typ: gericht
portionen: 3
tags: thailand, asiatisch, salat, garnelen
zutaten:
- Glasnudeln (roh): 120 g
- Garnelen: 200 g
- Hackfleisch gemischt: 100 g
- Zwiebeln: 50 g
- Kirschtomaten: 120 g
- Staudensellerie: 60 g
- Fischsoße: 25 g
- Limette: 60 g
- Zucker: 8 g
- Koriander (frisch): 10 g
zubereitung:
1. Glasnudeln einweichen und kurz kochen. Hack und Garnelen in wenig Wasser garen.
2. Fischsoße, Limette und Zucker verrühren.
3. Alles mit Gemüse und Koriander mischen.

## Vietnamesisches Hähnchen-Curry (Ca Ri Ga)
en: Vietnamese chicken curry
es: Curry vietnamita de pollo
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: vietnam, asiatisch, curry, hähnchen
zutaten:
- Hähnchenschenkel (roh): 700 g
- Currypulver: 15 g
- Zitronengras: 30 g
- Kokosmilch light (Dose): 400 g
- Süßkartoffel: 400 g
- Karotten: 150 g
- Zwiebeln: 100 g
- Fischsoße: 25 g
- Öl: 10 g
zubereitung:
1. Hähnchen mit Curry, Fischsoße und Zitronengras marinieren.
2. Zwiebeln und Hähnchen im Öl anbraten.
3. Kokosmilch, 200 ml Wasser, Süßkartoffel und Karotten dazu und 25 Minuten köcheln.

## Bo Luc Lac (Shaking Beef)
en: Bo luc lac (shaking beef)
es: Bo luc lac (ternera salteada)
emoji: 🥩
typ: gericht
portionen: 3
tags: vietnam, asiatisch, rind, schnell
zutaten:
- Rinderhüftsteak (roh): 500 g
- Sojasoße: 30 g
- Austernsoße: 20 g
- Zucker: 8 g
- Knoblauch: 8 g
- Zwiebeln: 100 g
- Rucola: 60 g
- Kirschtomaten: 150 g
- Reis (trocken): 210 g
- Öl: 15 g
zubereitung:
1. Rind würfeln und mit Soßen, Zucker und Knoblauch marinieren.
2. In sehr heißem Öl portionsweise 2 Minuten scharf anbraten, Zwiebel dazu.
3. Auf Rucola und Tomaten mit Reis servieren.

## Vietnamesische Frühlingsrollen (Cha Gio) aus dem Ofen
en: Baked Vietnamese spring rolls
es: Rollitos vietnamitas fritos al horno
emoji: 🥢
typ: gericht
portionen: 4
tags: vietnam, asiatisch, schwein
zutaten:
- Reispapier: 150 g
- Hackfleisch gemischt: 300 g
- Glasnudeln (roh): 40 g
- Karotten: 100 g
- Mu-Err-Pilze (getrocknet): 10 g
- Fischsoße: 20 g
- Rapsöl: 20 g
- Salatmischung (Tüte): 100 g
zubereitung:
1. Glasnudeln und Pilze einweichen und hacken.
2. Mit Hack, geriebener Karotte und Fischsoße mischen.
3. In eingeweichtes Reispapier wickeln, mit Öl bestreichen und bei 220 °C 20 Minuten backen. In Salatblättern essen.

## Pho Chay (vegane Pho)
en: Vegan pho
es: Pho vegano
emoji: 🍜
typ: gericht
portionen: 3
tags: vietnam, asiatisch, suppe, vegan
zutaten:
- Reisbandnudeln (roh): 200 g
- Tofu (fest): 300 g
- Shiitake-Pilze: 150 g
- Gemüsebrühe (zubereitet): 1500 g
- Zwiebeln: 150 g
- Ingwer (frisch): 20 g
- Zimt (gemahlen): 1 g
- Sojasoße: 40 g
- Bohnensprossen: 150 g
- Thai-Basilikum: 10 g
- Limette: 60 g
zubereitung:
1. Zwiebel und Ingwer rösten und mit Brühe, Zimt und Sojasoße 25 Minuten köcheln.
2. Tofu und Pilze darin 5 Minuten garen.
3. Über gekochte Nudeln geben, mit Sprossen, Basilikum und Limette servieren.

## Mi Xao (vietnamesische gebratene Nudeln)
en: Vietnamese stir-fried noodles
es: Fideos salteados vietnamitas
emoji: 🍜
typ: gericht
portionen: 3
tags: vietnam, asiatisch, nudeln, garnelen
zutaten:
- Mie-Nudeln (roh): 250 g
- Garnelen: 250 g
- Pak Choi: 200 g
- Karotten: 100 g
- Knoblauch: 6 g
- Austernsoße: 30 g
- Fischsoße: 15 g
- Sojasoße: 15 g
- Öl: 15 g
zubereitung:
1. Nudeln kochen. Garnelen und Knoblauch scharf anbraten.
2. Gemüse dazu und 3 Minuten braten.
3. Nudeln und Soßen dazugeben und durchschwenken.

## Hähnchen Chop Suey
en: Chicken chop suey
es: Chop suey de pollo
emoji: 🥢
typ: sauce
beilage: reis
portionen: 4
tags: china, asiatisch, hähnchen, gemüse
zutaten:
- Hähnchenbrust: 500 g
- Bohnensprossen: 200 g
- Chinakohl: 200 g
- Karotten: 120 g
- Champignons: 150 g
- Bambussprossen (Dose): 100 g
- Sojasoße: 40 g
- Austernsoße: 20 g
- Speisestärke: 10 g
- Öl: 15 g
zubereitung:
1. Hähnchen in Streifen scharf anbraten.
2. Gemüse dazu und 4 Minuten braten.
3. Soßen mit Stärke und 100 ml Wasser verrühren, angießen und kurz aufkochen.

## Szechuan-Hähnchen
en: Szechuan chicken
es: Pollo de Sichuan
emoji: 🌶️
typ: sauce
beilage: reis
portionen: 4
tags: china, asiatisch, hähnchen, scharf
zutaten:
- Hähnchenbrust: 600 g
- Paprika: 200 g
- Frühlingszwiebeln: 40 g
- Sichuanpfeffer: 2 g
- Chilipulver: 2 g
- Sojasoße: 40 g
- Reisessig: 15 g
- Zucker: 10 g
- Speisestärke: 15 g
- Knoblauch: 8 g
- Öl: 20 g
zubereitung:
1. Hähnchen würfeln, mit 10 g Stärke mischen und knusprig braten.
2. Knoblauch, Sichuanpfeffer, Chili und Paprika dazu.
3. Soße aus Sojasoße, Essig, Zucker, Stärke und Wasser angießen und eindicken lassen.

## Ente süß-sauer leicht
en: Light sweet and sour duck
es: Pato agridulce ligero
emoji: 🦆
typ: sauce
beilage: reis
portionen: 4
tags: china, asiatisch, ente
zutaten:
- Entenbrust (roh): 500 g
- Ananas (Dose, im eigenen Saft): 200 g
- Paprika: 200 g
- Zwiebeln: 100 g
- Ketchup: 40 g
- Reisessig: 30 g
- Sojasoße: 20 g
- Speisestärke: 10 g
zubereitung:
1. Entenbrust auf der Hautseite kross braten, dann in Streifen schneiden und Fett abgießen.
2. Gemüse und Ananas anbraten.
3. Ketchup, Essig, Sojasoße, Stärke und 100 ml Ananassaft angießen, Ente dazu und aufkochen.

## Gedämpfter Fisch mit Ingwer
en: Steamed fish with ginger
es: Pescado al vapor con jengibre
emoji: 🐟
typ: gericht
portionen: 2
tags: china, asiatisch, fisch, leicht, protein
zutaten:
- Fischfilet (natur, roh): 400 g
- Ingwer (frisch): 20 g
- Frühlingszwiebeln: 40 g
- Sojasoße: 25 g
- Sesamöl: 8 g
- Reis (trocken): 140 g
- Pak Choi: 250 g
zubereitung:
1. Fisch auf einen Teller legen, mit Ingwerstreifen belegen und 8–10 Minuten über Dampf garen.
2. Frühlingszwiebeln darauf, mit heißem Sesamöl übergießen und Sojasoße drüber.
3. Mit Reis und gedämpftem Pak Choi servieren.

## Zhou (Reissuppe mit Huhn)
en: Chinese chicken congee
es: Congee chino de pollo
emoji: 🥣
typ: gericht
portionen: 4
tags: china, asiatisch, suppe, leicht
zutaten:
- Reis (trocken): 150 g
- Hähnchenbrust: 300 g
- Hühnerbrühe (zubereitet): 1500 g
- Ingwer (frisch): 20 g
- Frühlingszwiebeln: 20 g
- Sojasoße: 20 g
- Sesamöl: 5 g
zubereitung:
1. Reis mit Brühe und Ingwer 60 Minuten zu einem cremigen Brei köcheln.
2. Hähnchen die letzten 15 Minuten darin garen und zerzupfen.
3. Mit Sojasoße, Sesamöl und Frühlingszwiebeln servieren.

## Chinesische Nudelsuppe mit Rind
en: Chinese beef noodle soup
es: Sopa china de fideos con ternera
emoji: 🍜
typ: gericht
portionen: 3
tags: china, asiatisch, suppe, rind
zutaten:
- Gulaschfleisch (Rind): 400 g
- Mie-Nudeln (roh): 220 g
- Rinderbrühe (zubereitet): 1500 g
- Sojasoße: 50 g
- Ingwer (frisch): 20 g
- Fünf-Gewürze-Pulver: 2 g
- Pak Choi: 200 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Fleisch mit Brühe, Sojasoße, Ingwer und Gewürz 90 Minuten weich köcheln.
2. Nudeln kochen, Pak Choi kurz blanchieren.
3. Alles in Schalen geben und mit Frühlingszwiebeln servieren.

## Ma La Xiang Guo (scharfe Gemüsepfanne)
en: Mala xiang guo (spicy stir-fry pot)
es: Mala xiang guo
emoji: 🌶️
typ: gericht
portionen: 3
tags: china, asiatisch, vegetarisch, scharf
zutaten:
- Tofu (fest): 300 g
- Brokkoli: 200 g
- Champignons: 200 g
- Kartoffeln (festkochend): 200 g
- Lotuswurzel: 150 g
- Chiliöl (Lao Gan Ma): 30 g
- Sichuanpfeffer: 2 g
- Sojasoße: 30 g
- Knoblauch: 10 g
- Öl: 15 g
zubereitung:
1. Kartoffeln und Lotus in Scheiben kurz vorkochen.
2. Tofu und Gemüse im Öl anbraten.
3. Knoblauch, Chiliöl, Sichuanpfeffer und Sojasoße dazugeben und kräftig durchschwenken.

## Wan-Tan in Chiliöl
en: Wontons in chilli oil
es: Wontons en aceite de chile
emoji: 🥟
typ: gericht
portionen: 3
tags: china, asiatisch, schwein, scharf
zutaten:
- Wan-Tan-Blätter: 180 g
- Hackfleisch gemischt: 300 g
- Ingwer (frisch): 10 g
- Sojasoße: 40 g
- Chiliöl (Lao Gan Ma): 30 g
- Reisessig: 15 g
- Zucker: 5 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Hack mit Ingwer und 10 g Sojasoße verkneten, Wan-Tans füllen.
2. In Wasser 4 Minuten kochen.
3. Mit Soße aus Chiliöl, Sojasoße, Essig und Zucker übergießen, Frühlingszwiebeln drüber.

## Teriyaki-Lachs mit Brokkoli
en: Teriyaki salmon with broccoli
es: Salmón teriyaki con brócoli
emoji: 🐟
typ: gericht
portionen: 2
tags: japan, asiatisch, lachs, protein, schnell
zutaten:
- Lachs (roh): 300 g
- Teriyaki-Soße: 50 g
- Brokkoli: 300 g
- Reis (trocken): 140 g
- Sesam: 5 g
zubereitung:
1. Reis kochen, Brokkoli dämpfen.
2. Lachs je Seite 3 Minuten braten.
3. Teriyaki-Soße dazugeben, glasieren und mit Sesam servieren.

## Japanisches Curry mit Gemüse
en: Japanese vegetable curry
es: Curry japonés de verduras
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: japan, asiatisch, curry, vegetarisch
zutaten:
- Japanisches Curry (Würfel): 100 g
- Kartoffeln (festkochend): 400 g
- Karotten: 250 g
- Zwiebeln: 200 g
- Kürbis (Hokkaido): 300 g
- Öl: 10 g
zubereitung:
1. Zwiebeln anbraten, Gemüse dazu und mit 700 ml Wasser 15 Minuten köcheln.
2. Curry-Würfel einrühren, bis die Soße dick wird.
3. Mit Reis servieren.

## Gyoza-Suppe
en: Gyoza soup
es: Sopa de gyozas
emoji: 🥟
typ: gericht
portionen: 2
tags: japan, asiatisch, suppe, schnell
zutaten:
- Gyoza (gebraten): 300 g
- Dashi (zubereitet): 800 g
- Miso-Paste: 40 g
- Pak Choi: 150 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Dashi aufkochen, Pak Choi darin 2 Minuten garen.
2. Gyoza dazugeben und 4 Minuten ziehen lassen.
3. Vom Herd nehmen, Miso einrühren, mit Frühlingszwiebeln servieren.

## Yaki Onigiri
en: Yaki onigiri (grilled rice balls)
es: Yaki onigiri
emoji: 🍙
typ: gericht
portionen: 3
tags: japan, asiatisch, snack, vegan
zutaten:
- Sushireis (roh): 300 g
- Sojasoße: 30 g
- Mirin: 10 g
- Sesamöl: 5 g
zubereitung:
1. Reis kochen und zu 6 Dreiecken formen.
2. In einer Pfanne mit etwas Sesamöl von allen Seiten anrösten.
3. Mit Sojasoße-Mirin bestreichen und nochmals kurz rösten.

## Ebi Chili (Garnelen in Chilisoße)
en: Ebi chili (prawns in chilli sauce)
es: Ebi chili (gambas en salsa de chile)
emoji: 🦐
typ: sauce
beilage: reis
portionen: 3
tags: japan, china, asiatisch, garnelen
zutaten:
- Garnelen: 400 g
- Ketchup: 50 g
- Sriracha: 20 g
- Sojasoße: 15 g
- Zucker: 10 g
- Ingwer (frisch): 10 g
- Knoblauch: 6 g
- Speisestärke: 10 g
- Frühlingszwiebeln: 20 g
- Öl: 10 g
zubereitung:
1. Garnelen mit Stärke mischen und kurz anbraten.
2. Ingwer und Knoblauch dazu.
3. Ketchup, Sriracha, Sojasoße, Zucker und 80 ml Wasser angießen und eindicken lassen.

## Butadon (Schweine-Reisschale)
en: Butadon (pork rice bowl)
es: Butadon (bol de arroz con cerdo)
emoji: 🍚
typ: gericht
portionen: 3
tags: japan, asiatisch, schwein, schnell
zutaten:
- Schweinefilet (roh): 400 g
- Zwiebeln: 150 g
- Sojasoße: 40 g
- Mirin: 30 g
- Zucker: 10 g
- Ingwer (frisch): 10 g
- Reis (trocken): 210 g
- Frühlingszwiebeln: 20 g
zubereitung:
1. Fleisch in dünne Scheiben schneiden und mit Zwiebeln anbraten.
2. Sojasoße, Mirin, Zucker und Ingwer dazu und glasieren.
3. Über Reis geben und mit Frühlingszwiebeln servieren.

## Soba-Salat mit Sesam-Dressing
en: Soba salad with sesame dressing
es: Ensalada de soba con aliño de sésamo
emoji: 🥗
typ: gericht
portionen: 2
tags: japan, asiatisch, nudeln, salat, vegetarisch
zutaten:
- Soba-Nudeln (roh): 180 g
- Edamame (TK, geschält): 100 g
- Karotten: 100 g
- Gurke: 150 g
- Tahin: 30 g
- Sojasoße: 20 g
- Reisessig: 15 g
- Honig: 10 g
- Sesam: 5 g
zubereitung:
1. Nudeln kochen und kalt abschrecken.
2. Tahin, Sojasoße, Essig und Honig mit etwas Wasser verrühren.
3. Mit Gemüse mischen und Sesam drüberstreuen.

## Dakgalbi
en: Dakgalbi (Korean spicy chicken stir-fry)
es: Dakgalbi
emoji: 🌶️
typ: gericht
portionen: 4
tags: korea, asiatisch, hähnchen, scharf
zutaten:
- Hähnchenschenkel (roh): 600 g
- Gochujang (Chilipaste): 50 g
- Sojasoße: 30 g
- Honig: 15 g
- Knoblauch: 10 g
- Weißkohl: 300 g
- Süßkartoffel: 300 g
- Tteok (Reiskuchen): 200 g
- Zwiebeln: 100 g
- Öl: 15 g
zubereitung:
1. Hähnchen mit Gochujang, Sojasoße, Honig und Knoblauch marinieren.
2. Süßkartoffel in Scheiben und Kohl in der Pfanne anbraten.
3. Hähnchen und Reiskuchen dazugeben und 10 Minuten unter Rühren garen.

## Kimchi-Jjigae mit Tofu
en: Kimchi stew with tofu
es: Guiso de kimchi con tofu
emoji: 🍲
typ: gericht
portionen: 3
tags: korea, asiatisch, suppe, scharf
zutaten:
- Kimchi: 300 g
- Schweinebauch (roh): 150 g
- Tofu (fest): 300 g
- Gochujang (Chilipaste): 20 g
- Zwiebeln: 80 g
- Gemüsebrühe (zubereitet): 700 g
- Frühlingszwiebeln: 20 g
- Reis (trocken): 210 g
zubereitung:
1. Schweinebauch und Kimchi im Topf anbraten.
2. Gochujang, Zwiebel und Brühe dazu und 15 Minuten köcheln.
3. Tofuwürfel 5 Minuten mitziehen lassen, mit Frühlingszwiebeln und Reis servieren.

## Gimbap
en: Gimbap (Korean rice rolls)
es: Gimbap
emoji: 🍙
typ: gericht
portionen: 3
tags: korea, asiatisch, reis
zutaten:
- Sushireis (roh): 300 g
- Nori-Blatt: 12 g
- Eier: 120 g
- Karotten: 120 g
- Spinat: 150 g
- Kochschinken: 100 g
- Gurke: 120 g
- Sesamöl: 10 g
- Sesam: 5 g
zubereitung:
1. Reis kochen und mit Sesamöl und Salz würzen. Eier zu einem Omelett braten und in Streifen schneiden.
2. Karotten kurz braten, Spinat blanchieren.
3. Reis auf Nori streichen, Füllung in Streifen auflegen, fest aufrollen und in Scheiben schneiden.

## Sundubu-Jjigae
en: Sundubu jjigae (soft tofu stew)
es: Sundubu jjigae
emoji: 🍲
typ: gericht
portionen: 2
tags: korea, asiatisch, suppe, tofu
zutaten:
- Tofu (Seidentofu): 400 g
- Garnelen: 150 g
- Zucchini: 150 g
- Gochugaru (Chiliflocken): 6 g
- Knoblauch: 6 g
- Sojasoße: 15 g
- Eier: 120 g
- Gemüsebrühe (zubereitet): 500 g
- Sesamöl: 5 g
zubereitung:
1. Knoblauch und Gochugaru in Sesamöl kurz anrösten.
2. Brühe, Zucchini und Sojasoße dazu und 5 Minuten köcheln.
3. Tofu in Stücken und Garnelen dazugeben, Eier hineinschlagen und 2 Minuten ziehen lassen.

## Koreanisches Rindfleisch-Bowl
en: Korean beef bowl
es: Bowl coreano de ternera
emoji: 🥩
typ: gericht
portionen: 4
tags: korea, asiatisch, rind, mealprep, schnell
zutaten:
- Rinderhack (Tatar, fettarm): 500 g
- Sojasoße: 50 g
- Honig: 20 g
- Sesamöl: 10 g
- Knoblauch: 10 g
- Ingwer (frisch): 10 g
- Reis (trocken): 280 g
- Brokkoli: 300 g
- Frühlingszwiebeln: 20 g
- Sesam: 6 g
zubereitung:
1. Reis kochen, Brokkoli dämpfen.
2. Hack mit Knoblauch und Ingwer krümelig braten.
3. Sojasoße, Honig und Sesamöl einrühren und einkochen. Mit Sesam und Frühlingszwiebeln servieren.

## Korean Corn Dogs leicht
en: Light Korean corn dogs
es: Corn dogs coreanos ligeros
emoji: 🌭
typ: gericht
portionen: 4
tags: korea, asiatisch, snack
zutaten:
- Wiener Würstchen: 300 g
- Mozzarella light: 125 g
- Mehl: 150 g
- Eier: 50 g
- Milch (1,5 %): 120 g
- Backpulver: 5 g
- Panko: 60 g
- Rapsöl: 20 g
- Ketchup: 40 g
zubereitung:
1. Würstchen und Mozzarella-Stücke auf Spieße stecken.
2. Mehl, Ei, Milch und Backpulver zu einem dicken Teig rühren.
3. Spieße eintauchen, in Panko wälzen, mit Öl besprühen und bei 210 °C 15 Minuten backen.

## Indisches Rührei (Anda Bhurji)
en: Indian scrambled eggs (anda bhurji)
es: Huevos revueltos indios (anda bhurji)
emoji: 🍳
typ: gericht
portionen: 2
tags: indien, frühstück, eier
zutaten:
- Eier: 300 g
- Zwiebeln: 80 g
- Tomaten: 150 g
- Kurkuma: 1 g
- Garam Masala: 2 g
- Koriander (frisch): 5 g
- Rapsöl: 10 g
- Chapati: 80 g
zubereitung:
1. Zwiebeln im Öl anbraten, Tomaten und Gewürze dazu.
2. Eier darübergießen und rühren, bis sie stocken.
3. Mit Koriander und Chapati servieren.

## Saag Aloo
en: Saag aloo (spinach potatoes)
es: Saag aloo
emoji: 🥬
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, vegan
zutaten:
- Kartoffeln (festkochend): 600 g
- Spinat: 400 g
- Zwiebeln: 150 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Kreuzkümmel: 3 g
- Kurkuma: 2 g
- Garam Masala: 5 g
- Rapsöl: 20 g
zubereitung:
1. Kartoffelwürfel vorkochen.
2. Zwiebeln, Knoblauch und Gewürze im Öl anbraten.
3. Kartoffeln und Spinat dazugeben und 8 Minuten braten.

## Rajma (Kidneybohnen-Curry)
en: Rajma (kidney bean curry)
es: Rajma (curry de alubias rojas)
emoji: 🫘
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, vegan, protein
zutaten:
- Kidneybohnen (abgetropft): 500 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Garam Masala: 8 g
- Kreuzkümmel: 3 g
- Rapsöl: 15 g
zubereitung:
1. Zwiebeln, Knoblauch und Ingwer anbraten, Gewürze kurz mitrösten.
2. Tomaten und Bohnen dazu und 20 Minuten köcheln.
3. Einige Bohnen zerdrücken und abschmecken.

## Hähnchen-Korma leicht
en: Light chicken korma
es: Pollo korma ligero
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, hähnchen
zutaten:
- Hähnchenbrust: 600 g
- Joghurt natur: 200 g
- Mandeln gemahlen: 30 g
- Zwiebeln: 150 g
- Garam Masala: 8 g
- Kurkuma: 2 g
- Knoblauch: 8 g
- Ingwer (frisch): 10 g
- Rapsöl: 10 g
zubereitung:
1. Zwiebeln weich dünsten, Gewürze, Knoblauch und Ingwer dazu.
2. Hähnchen anbraten.
3. Joghurt mit Mandeln einrühren und 15 Minuten sanft köcheln (nicht kochen).

## Fisch-Curry nach Goa-Art
en: Goan fish curry
es: Curry de pescado de Goa
emoji: 🐟
typ: sauce
beilage: reis
portionen: 4
tags: indien, curry, fisch
zutaten:
- Fischfilet (natur, roh): 600 g
- Kokosmilch light (Dose): 400 g
- Tomaten: 200 g
- Zwiebeln: 150 g
- Kurkuma: 3 g
- Kreuzkümmel: 3 g
- Chilipulver: 2 g
- Tamarindenpaste: 15 g
- Rapsöl: 10 g
zubereitung:
1. Zwiebeln und Gewürze im Öl anbraten.
2. Tomaten, Kokosmilch und Tamarinde dazu und 10 Minuten köcheln.
3. Fisch darin 6 Minuten ziehen lassen.

## Masala-Linsen mit Spinat
en: Masala lentils with spinach
es: Lentejas masala con espinacas
emoji: 🍲
typ: sauce
beilage: reis
portionen: 4
tags: indien, linsen, vegan, mealprep
zutaten:
- Linsen (trocken): 250 g
- Spinat: 250 g
- Gehackte Tomaten (Dose): 400 g
- Zwiebeln: 150 g
- Garam Masala: 8 g
- Kurkuma: 2 g
- Knoblauch: 8 g
- Rapsöl: 10 g
zubereitung:
1. Zwiebeln und Gewürze anbraten.
2. Linsen, Tomaten und 700 ml Wasser dazu und 30 Minuten köcheln.
3. Spinat unterrühren.

## Nasi Goreng mit Garnelen
en: Nasi goreng with prawns
es: Nasi goreng con gambas
emoji: 🍤
typ: gericht
portionen: 3
tags: indonesien, asiatisch, reis, garnelen
zutaten:
- Reis (trocken): 210 g
- Garnelen: 300 g
- Eier: 120 g
- Ketjap Manis: 40 g
- Sambal Oelek: 15 g
- Zwiebeln: 100 g
- Knoblauch: 6 g
- Erbsen (TK): 100 g
- Öl: 15 g
- Krupuk (Krabbenchips): 30 g
zubereitung:
1. Reis am Vortag kochen. Zwiebeln, Knoblauch und Garnelen anbraten.
2. Reis, Erbsen, Ketjap und Sambal dazu und kräftig braten.
3. Mit Spiegelei und Krupuk servieren.

## Soto Ayam
en: Soto ayam (Indonesian chicken soup)
es: Soto ayam
emoji: 🍲
typ: gericht
portionen: 3
tags: indonesien, asiatisch, suppe, hähnchen
zutaten:
- Hähnchenbrust: 400 g
- Hühnerbrühe (zubereitet): 1200 g
- Kurkuma: 3 g
- Zitronengras: 20 g
- Ingwer (frisch): 15 g
- Glasnudeln (roh): 80 g
- Bohnensprossen: 100 g
- Eier: 120 g
- Limette: 30 g
- Röstzwiebeln: 15 g
zubereitung:
1. Brühe mit Kurkuma, Zitronengras und Ingwer 10 Minuten köcheln.
2. Hähnchen darin 15 Minuten garen und zerzupfen.
3. Mit Glasnudeln, Sprossen, Ei, Limette und Röstzwiebeln anrichten.

## Tempeh-Bowl mit Erdnusssoße
en: Tempeh bowl with peanut sauce
es: Bowl de tempeh con salsa de cacahuete
emoji: 🥜
typ: gericht
portionen: 3
tags: indonesien, asiatisch, vegan, protein
zutaten:
- Tempeh: 300 g
- Reis (trocken): 210 g
- Brokkoli: 250 g
- Karotten: 120 g
- Erdnussbutter: 50 g
- Sojasoße: 20 g
- Limette: 20 g
- Sambal Oelek: 10 g
- Öl: 10 g
zubereitung:
1. Tempeh in Scheiben knusprig braten. Reis kochen, Gemüse dämpfen.
2. Erdnussbutter mit Sojasoße, Limette, Sambal und Wasser verrühren.
3. Alles anrichten und mit Soße übergießen.

## Mie Goreng mit Hähnchen
en: Mie goreng with chicken
es: Mie goreng con pollo
emoji: 🍜
typ: gericht
portionen: 3
tags: indonesien, asiatisch, nudeln, hähnchen
zutaten:
- Mie-Nudeln (roh): 250 g
- Hähnchenbrust: 350 g
- Weißkohl: 200 g
- Karotten: 100 g
- Ketjap Manis: 40 g
- Sojasoße: 15 g
- Sambal Oelek: 10 g
- Knoblauch: 6 g
- Öl: 15 g
zubereitung:
1. Nudeln kochen. Hähnchen und Knoblauch anbraten.
2. Gemüse dazu und 3 Minuten braten.
3. Nudeln und Soßen dazu und kräftig durchschwenken.

## Malaysisches Hähnchen-Rendang
en: Malaysian chicken rendang
es: Rendang de pollo malayo
emoji: 🍛
typ: sauce
beilage: reis
portionen: 4
tags: malaysia, asiatisch, hähnchen, curry
zutaten:
- Hähnchenschenkel (roh): 700 g
- Rote Currypaste: 50 g
- Kokosmilch: 400 g
- Zitronengras: 30 g
- Kokosraspeln: 20 g
- Palmzucker: 10 g
- Öl: 10 g
zubereitung:
1. Kokosraspeln ohne Fett goldbraun rösten.
2. Currypaste im Öl anrösten, Hähnchen dazu.
3. Kokosmilch und Zitronengras dazu und 45 Minuten offen einkochen, Kokosraspeln und Zucker unterrühren.

## Singapur-Nudeln
en: Singapore noodles
es: Fideos Singapur
emoji: 🍜
typ: gericht
portionen: 3
tags: singapur, asiatisch, nudeln, garnelen
zutaten:
- Reisbandnudeln (roh): 200 g
- Garnelen: 200 g
- Kochschinken: 100 g
- Eier: 100 g
- Paprika: 150 g
- Bohnensprossen: 100 g
- Currypulver: 8 g
- Sojasoße: 30 g
- Öl: 15 g
zubereitung:
1. Nudeln einweichen. Eier zu einem Omelett braten und in Streifen schneiden.
2. Garnelen, Schinken und Paprika anbraten, Curry dazu.
3. Nudeln, Sprossen, Sojasoße und Ei dazu und durchschwenken.

## Tofu Katsu Curry
en: Tofu katsu curry
es: Curry katsu de tofu
emoji: 🍛
typ: gericht
portionen: 3
tags: japan, asiatisch, vegan, tofu
zutaten:
- Tofu (fest): 400 g
- Panko: 60 g
- Mehl: 30 g
- Hafermilch: 80 g
- Japanisches Curry (Würfel): 80 g
- Karotten: 150 g
- Zwiebeln: 100 g
- Reis (trocken): 210 g
- Rapsöl: 20 g
zubereitung:
1. Tofu in Scheiben schneiden, in Mehl, Hafermilch und Panko wenden und knusprig braten.
2. Zwiebeln und Karotten mit 500 ml Wasser 12 Minuten köcheln, Curry-Würfel einrühren.
3. Mit Reis servieren.

## Zwetschgendatschi
en: Plum sheet cake
es: Tarta de ciruelas
emoji: 🍑
typ: gericht
einheit: stück
portionen: 20
tags: bayern, kuchen, süß, backen
zutaten:
- Mehl: 400 g
- Trockenhefe: 7 g
- Milch (1,5 %): 200 g
- Zucker: 120 g
- Butter: 60 g
- Eier: 50 g
- Zwetschgen: 1500 g
- Zimt (gemahlen): 3 g
zubereitung:
1. Mehl, Hefe, lauwarme Milch, 50 g Zucker, Butter und Ei zu einem Teig kneten und 1 Stunde gehen lassen.
2. Auf einem Blech ausrollen und dicht mit halbierten Zwetschgen belegen.
3. Bei 190 °C 30 Minuten backen und mit Zimtzucker bestreuen.

## Streuselkuchen leicht
en: Light crumble cake
es: Tarta de crumble ligera
emoji: 🍰
typ: gericht
einheit: stück
portionen: 16
tags: kuchen, süß, backen
zutaten:
- Mehl: 400 g
- Trockenhefe: 7 g
- Milch (1,5 %): 200 g
- Zucker: 120 g
- Butter: 120 g
- Eier: 50 g
- Vanillezucker: 8 g
zubereitung:
1. Mehl (250 g), Hefe, Milch, 40 g Zucker, 30 g Butter und Ei zu einem Hefeteig kneten und gehen lassen.
2. Restliches Mehl, Zucker, Vanillezucker und Butter zu Streuseln reiben.
3. Teig auf ein Blech, Streusel darüber und bei 180 °C 25 Minuten backen.

## Joghurt-Zitronen-Kuchen
en: Yoghurt lemon cake
es: Bizcocho de yogur y limón
emoji: 🍋
typ: gericht
einheit: stück
portionen: 12
tags: kuchen, süß, backen
zutaten:
- Mehl: 250 g
- Joghurt natur: 250 g
- Zucker: 150 g
- Eier: 150 g
- Rapsöl: 80 g
- Backpulver: 10 g
- Zitrone: 80 g
- Puderzucker: 40 g
zubereitung:
1. Joghurt, Zucker, Eier, Öl und Zitronenabrieb verrühren.
2. Mehl und Backpulver unterheben und in eine Kastenform füllen.
3. Bei 175 °C 50 Minuten backen, mit Zitronenguss bestreichen.

## Protein-Käsekuchen-Bites
en: Protein cheesecake bites
es: Bocados de tarta de queso proteicos
emoji: 🍰
typ: gericht
einheit: stück
portionen: 12
tags: süß, protein, fitness, backen
zutaten:
- Magerquark: 500 g
- Eier: 100 g
- Erythrit: 50 g
- Puddingpulver: 20 g
- Zitrone: 20 g
- Beeren (TK): 100 g
zubereitung:
1. Quark, Eier, Erythrit, Puddingpulver und Zitronenabrieb glatt rühren.
2. In 12 Muffinmulden füllen, je ein paar Beeren hineindrücken.
3. Bei 170 °C 25 Minuten backen und auskühlen lassen.

## Bananen-Hafer-Kekse
en: Banana oat cookies
es: Galletas de plátano y avena
emoji: 🍪
typ: gericht
einheit: stück
portionen: 12
tags: cookies, süß, vegan, fitness
zutaten:
- Banane: 200 g
- Haferflocken: 150 g
- Rosinen: 40 g
- Zimt (gemahlen): 2 g
- Erdnussmus (100 % Erdnüsse): 30 g
zubereitung:
1. Bananen zerdrücken und mit allen Zutaten mischen.
2. 12 Häufchen aufs Blech setzen und flach drücken.
3. Bei 180 °C 15 Minuten backen.

## Erdnussbutter-Cookies
en: Peanut butter cookies
es: Galletas de mantequilla de cacahuete
emoji: 🥜
typ: gericht
einheit: stück
portionen: 16
tags: cookies, süß, backen
zutaten:
- Erdnussbutter: 200 g
- Zucker: 100 g
- Eier: 50 g
- Mehl: 60 g
- Backpulver: 3 g
zubereitung:
1. Alle Zutaten zu einem Teig verrühren.
2. Kugeln formen und mit einer Gabel flach drücken.
3. Bei 180 °C 10 Minuten backen.

## Double Chocolate Cookies
en: Double chocolate cookies
es: Galletas de doble chocolate
emoji: 🍫
typ: gericht
einheit: stück
portionen: 18
tags: cookies, süß, backen
zutaten:
- Mehl: 200 g
- Backkakao: 30 g
- Butter: 120 g
- Brauner Zucker: 150 g
- Eier: 50 g
- Schokotropfen: 120 g
- Backpulver: 4 g
zubereitung:
1. Butter und Zucker cremig rühren, Ei dazu.
2. Mehl, Kakao und Backpulver unterrühren, Schokotropfen unterheben.
3. Kugeln aufs Blech setzen und bei 180 °C 10 Minuten backen.

## Haferflocken-Riegel
en: Oat bars
es: Barritas de avena
emoji: 🍫
typ: gericht
einheit: stück
portionen: 12
tags: snack, süß, mealprep
zutaten:
- Haferflocken: 200 g
- Honig: 80 g
- Erdnussbutter: 80 g
- Rosinen: 50 g
- Mandeln (ganz): 40 g
- Schokolade (Zartbitter): 40 g
zubereitung:
1. Honig und Erdnussbutter erwärmen und mit Haferflocken, Rosinen und gehackten Mandeln mischen.
2. In eine Form drücken und bei 170 °C 15 Minuten backen.
3. Mit geschmolzener Schokolade beträufeln und in 12 Riegel schneiden.

## Protein-Energy-Balls
en: Protein energy balls
es: Bolitas energéticas proteicas
emoji: ⚪
typ: gericht
einheit: stück
portionen: 15
tags: snack, protein, fitness
zutaten:
- Haferflocken: 100 g
- Proteinpulver: 40 g
- Erdnussmus (100 % Erdnüsse): 80 g
- Honig: 40 g
- Backkakao: 10 g
- Milch (1,5 %): 30 g
zubereitung:
1. Alle Zutaten zu einer formbaren Masse verkneten.
2. 15 Kugeln formen.
3. Im Kühlschrank fest werden lassen.

## Schoko-Bananen-Brot (Protein)
en: Chocolate banana protein bread
es: Pan de plátano y chocolate proteico
emoji: 🍌
typ: gericht
einheit: stück
portionen: 12
tags: backen, süß, protein
zutaten:
- Banane: 300 g
- Haferflocken (zart): 150 g
- Eier: 150 g
- Proteinpulver: 40 g
- Backkakao: 15 g
- Backpulver: 8 g
- Schokotropfen: 40 g
zubereitung:
1. Bananen zerdrücken und mit Eiern verrühren.
2. Restliche Zutaten unterrühren und in eine Kastenform füllen.
3. Bei 175 °C 45 Minuten backen.

## Grießpudding mit Beeren
en: Semolina pudding with berries
es: Pudin de sémola con frutos rojos
emoji: 🍮
typ: gericht
portionen: 3
tags: dessert, süß, klassiker
zutaten:
- Milch (1,5 %): 600 g
- Hartweizengrieß: 70 g
- Zucker: 30 g
- Vanillezucker: 8 g
- Beeren (TK): 250 g
zubereitung:
1. Milch mit Zucker und Vanillezucker aufkochen.
2. Grieß einrühren und 5 Minuten quellen lassen.
3. Mit warmen Beeren servieren.

## Milchreis mit Zimt und Apfel
en: Rice pudding with cinnamon and apple
es: Arroz con leche con canela y manzana
emoji: 🍚
typ: gericht
portionen: 4
tags: dessert, süß, klassiker
zutaten:
- Milchreis (roh): 200 g
- Milch (1,5 %): 1000 g
- Zucker: 40 g
- Vanillezucker: 8 g
- Zimt (gemahlen): 2 g
- Apfel: 300 g
zubereitung:
1. Milch mit Zucker und Vanillezucker aufkochen, Reis einrühren.
2. 35 Minuten unter gelegentlichem Rühren quellen lassen.
3. Mit gedünsteten Apfelstücken und Zimt servieren.

## Protein-Pudding Schoko
en: Chocolate protein pudding
es: Pudin proteico de chocolate
emoji: 🍫
typ: gericht
portionen: 2
tags: dessert, protein, fitness
zutaten:
- Milch (1,5 %): 500 g
- Puddingpulver: 40 g
- Backkakao: 10 g
- Erythrit: 30 g
- Proteinpulver: 30 g
zubereitung:
1. Puddingpulver, Kakao und Erythrit mit etwas Milch anrühren.
2. Restliche Milch aufkochen, Mischung einrühren und 1 Minute köcheln.
3. Etwas abkühlen lassen und Proteinpulver einrühren.

## Panna Cotta mit Joghurt
en: Yoghurt panna cotta
es: Panna cotta de yogur
emoji: 🍮
typ: gericht
portionen: 4
tags: dessert, italien, süß
zutaten:
- Griechischer Joghurt 0 %: 400 g
- Milch (1,5 %): 200 g
- Zucker: 40 g
- Vanillezucker: 8 g
- Gelatine: 8 g
- Himbeeren: 200 g
zubereitung:
1. Gelatine einweichen. Milch mit Zucker erwärmen und die Gelatine darin auflösen.
2. Joghurt unterrühren, in Gläser füllen und 4 Stunden kühlen.
3. Mit Himbeeren servieren.

## Erdbeer-Quark-Creme
en: Strawberry quark cream
es: Crema de requesón y fresa
emoji: 🍓
typ: gericht
portionen: 3
tags: dessert, protein, schnell
zutaten:
- Magerquark: 500 g
- Erdbeeren: 300 g
- Erythrit: 20 g
- Vanillezucker: 8 g
- Milch (1,5 %): 50 g
zubereitung:
1. Die Hälfte der Erdbeeren pürieren.
2. Quark mit Milch, Erythrit und Vanillezucker glatt rühren, Erdbeerpüree unterziehen.
3. Mit restlichen Erdbeeren servieren.

## Mango-Lassi-Bowl
en: Mango lassi bowl
es: Bowl de lassi de mango
emoji: 🥭
typ: gericht
portionen: 2
tags: indien, frühstück, süß
zutaten:
- Mango: 300 g
- Joghurt natur: 300 g
- Honig: 10 g
- Kardamom: 1 g
- Pistazien: 15 g
zubereitung:
1. Mango mit Joghurt, Honig und Kardamom pürieren.
2. In Schalen füllen.
3. Mit gehackten Pistazien bestreuen.

## Kaiserschmarrn mit Zwetschgenröster
en: Kaiserschmarrn with plum compote
es: Kaiserschmarrn con compota de ciruela
emoji: 🥞
typ: gericht
portionen: 3
tags: österreich, süß, klassiker
zutaten:
- Mehl: 150 g
- Milch (1,5 %): 250 g
- Eier: 200 g
- Zucker: 30 g
- Butter: 20 g
- Rosinen: 30 g
- Zwetschgen: 400 g
- Zimt (gemahlen): 1 g
- Puderzucker: 10 g
zubereitung:
1. Pflaumen mit 20 g Zucker und Zimt 15 Minuten zu Röster köcheln.
2. Mehl, Milch, Eigelb und restlichen Zucker verrühren, Eischnee unterheben.
3. In Butter backen, wenden, zerreißen und mit Rosinen und Puderzucker servieren.

## Topfenknödel mit Butterbröseln
en: Quark dumplings with butter crumbs
es: Albóndigas de requesón con migas
emoji: 🥟
typ: gericht
portionen: 4
tags: österreich, süß, klassiker
zutaten:
- Magerquark: 500 g
- Eier: 100 g
- Hartweizengrieß: 80 g
- Semmelbrösel: 60 g
- Butter: 40 g
- Zucker: 30 g
- Vanillezucker: 8 g
zubereitung:
1. Quark, Eier, Grieß und Vanillezucker verrühren und 30 Minuten quellen lassen.
2. 12 Knödel formen und in leicht siedendem Wasser 12 Minuten ziehen lassen.
3. In Butterbröseln mit Zucker wälzen.

## Griechischer Salat
en: Greek salad
es: Ensalada griega
emoji: 🥗
typ: gericht
portionen: 3
tags: griechenland, salat, vegetarisch, schnell
zutaten:
- Tomaten: 400 g
- Gurke: 300 g
- Paprika: 150 g
- Zwiebeln: 60 g
- Feta: 150 g
- Oliven (schwarz): 50 g
- Oregano (getrocknet): 2 g
- Olivenöl: 20 g
- Essig (Weißwein): 15 g
zubereitung:
1. Gemüse in grobe Stücke schneiden.
2. Mit Oliven, Essig, Öl und Oregano mischen.
3. Feta im Ganzen oder gewürfelt darauf geben.

## Caprese-Salat
en: Caprese salad
es: Ensalada caprese
emoji: 🍅
typ: gericht
portionen: 2
tags: italien, salat, vegetarisch, schnell
zutaten:
- Tomaten: 400 g
- Mozzarella light: 250 g
- Basilikum (frisch): 15 g
- Olivenöl: 15 g
- Balsamico-Essig: 15 g
zubereitung:
1. Tomaten und Mozzarella in Scheiben schneiden.
2. Abwechselnd anrichten und mit Basilikum belegen.
3. Mit Öl und Balsamico beträufeln.

## Rucola-Salat mit Hähnchen und Parmesan
en: Rocket salad with chicken and parmesan
es: Ensalada de rúcula con pollo y parmesano
emoji: 🥗
typ: gericht
portionen: 2
tags: salat, protein, schnell
zutaten:
- Rucola: 120 g
- Hähnchenbrust: 300 g
- Kirschtomaten: 200 g
- Parmesan: 20 g
- Balsamico-Essig: 20 g
- Olivenöl: 10 g
zubereitung:
1. Hähnchen braten und in Streifen schneiden.
2. Rucola und Tomaten anrichten.
3. Hähnchen und Parmesanspäne darauf, mit Balsamico und Öl beträufeln.

## Asia-Krautsalat mit Hähnchen
en: Asian slaw with chicken
es: Ensalada asiática de col con pollo
emoji: 🥗
typ: gericht
portionen: 3
tags: asiatisch, salat, protein, mealprep
zutaten:
- Weißkohl: 400 g
- Karotten: 150 g
- Hähnchenbrust: 350 g
- Sojasoße: 25 g
- Reisessig: 20 g
- Sesamöl: 10 g
- Honig: 10 g
- Erdnüsse (geröstet, ungesalzen): 30 g
- Koriander (frisch): 10 g
zubereitung:
1. Kohl und Karotten fein hobeln. Hähnchen braten und zerzupfen.
2. Sojasoße, Essig, Sesamöl und Honig verrühren.
3. Alles mischen, mit Erdnüssen und Koriander bestreuen.

## Waldorfsalat leicht
en: Light Waldorf salad
es: Ensalada Waldorf ligera
emoji: 🍎
typ: gericht
portionen: 3
tags: salat, vegetarisch, klassiker
zutaten:
- Staudensellerie: 200 g
- Apfel: 300 g
- Walnüsse: 40 g
- Weintrauben: 150 g
- Joghurt natur: 150 g
- Zitrone: 20 g
zubereitung:
1. Sellerie und Äpfel würfeln, mit Zitrone mischen.
2. Joghurt mit Salz und Pfeffer verrühren.
3. Mit Trauben und gehackten Walnüssen unterheben.

## Bohnensalat mit Thunfisch
en: Bean salad with tuna
es: Ensalada de alubias con atún
emoji: 🥗
typ: gericht
portionen: 3
tags: salat, protein, schnell
zutaten:
- Weiße Bohnen (Dose): 400 g
- Thunfisch (Dose, Wasser): 200 g
- Zwiebeln: 60 g
- Kirschtomaten: 150 g
- Petersilie (frisch): 15 g
- Essig (Weißwein): 20 g
- Olivenöl: 15 g
zubereitung:
1. Bohnen abspülen.
2. Mit Thunfisch, Zwiebel, Tomaten und Petersilie mischen.
3. Mit Essig, Öl, Salz und Pfeffer anmachen.

## Rote-Bete-Salat mit Feta
en: Beetroot salad with feta
es: Ensalada de remolacha con feta
emoji: 🥗
typ: gericht
portionen: 3
tags: salat, vegetarisch
zutaten:
- Rote Bete (gekocht): 500 g
- Feta: 100 g
- Rucola: 50 g
- Walnüsse: 30 g
- Balsamico-Essig: 20 g
- Olivenöl: 10 g
zubereitung:
1. Rote Bete in Würfel schneiden.
2. Mit Rucola mischen.
3. Feta und Walnüsse darüber, mit Balsamico und Öl beträufeln.

## Möhren-Ingwer-Suppe
en: Carrot ginger soup
es: Sopa de zanahoria y jengibre
emoji: 🥕
typ: gericht
portionen: 4
tags: suppe, vegan, leicht
zutaten:
- Karotten: 700 g
- Zwiebeln: 100 g
- Ingwer (frisch): 20 g
- Gemüsebrühe (zubereitet): 1000 g
- Kokosmilch light (Dose): 200 g
- Rapsöl: 10 g
zubereitung:
1. Zwiebel und Ingwer anschwitzen, Karotten dazu.
2. Mit Brühe 20 Minuten köcheln.
3. Kokosmilch dazu und fein pürieren.

## Blumenkohlsuppe
en: Cauliflower soup
es: Sopa de coliflor
emoji: 🥦
typ: gericht
portionen: 4
tags: suppe, vegetarisch, leicht
zutaten:
- Blumenkohl: 800 g
- Kartoffeln (mehlig): 200 g
- Zwiebeln: 80 g
- Gemüsebrühe (zubereitet): 1000 g
- Cremefine 7 %: 100 g
- Muskatnuss: 1 g
zubereitung:
1. Zwiebel anschwitzen, Blumenkohl und Kartoffeln dazu.
2. Mit Brühe 20 Minuten köcheln.
3. Cremefine dazu, pürieren und mit Muskat würzen.

## Zucchinisuppe mit Feta
en: Courgette soup with feta
es: Sopa de calabacín con feta
emoji: 🥒
typ: gericht
portionen: 4
tags: suppe, vegetarisch, leicht
zutaten:
- Zucchini: 800 g
- Zwiebeln: 100 g
- Kartoffeln (mehlig): 150 g
- Gemüsebrühe (zubereitet): 900 g
- Feta: 80 g
- Olivenöl: 10 g
zubereitung:
1. Zwiebel im Öl anschwitzen, Zucchini und Kartoffeln dazu.
2. Mit Brühe 15 Minuten köcheln und pürieren.
3. Mit zerbröseltem Feta servieren.

## Erbsensuppe mit Minze
en: Pea soup with mint
es: Sopa de guisantes con menta
emoji: 🫛
typ: gericht
portionen: 4
tags: suppe, vegetarisch, schnell
zutaten:
- Erbsen (TK): 600 g
- Zwiebeln: 80 g
- Gemüsebrühe (zubereitet): 800 g
- Minze (frisch): 10 g
- Saure Sahne (10 %): 80 g
- Rapsöl: 10 g
zubereitung:
1. Zwiebel anschwitzen, Erbsen und Brühe dazu und 8 Minuten köcheln.
2. Minze dazu und fein pürieren.
3. Mit einem Klecks saurer Sahne servieren.

## Champignoncremesuppe
en: Cream of mushroom soup
es: Crema de champiñones
emoji: 🍄
typ: gericht
portionen: 4
tags: suppe, vegetarisch
zutaten:
- Champignons: 600 g
- Zwiebeln: 100 g
- Kartoffeln (mehlig): 150 g
- Gemüsebrühe (zubereitet): 900 g
- Cremefine 7 %: 150 g
- Petersilie (frisch): 10 g
- Rapsöl: 10 g
zubereitung:
1. Pilze und Zwiebeln kräftig anbraten.
2. Kartoffeln und Brühe dazu und 15 Minuten köcheln.
3. Cremefine dazu, pürieren und mit Petersilie servieren.

## Hühner-Nudelsuppe
en: Chicken noodle soup
es: Sopa de pollo con fideos
emoji: 🍲
typ: gericht
portionen: 4
tags: suppe, hähnchen, klassiker
zutaten:
- Hähnchenbrust: 400 g
- Suppengemüse: 400 g
- Nudeln (trocken): 120 g
- Hühnerbrühe (zubereitet): 1500 g
- Petersilie (frisch): 10 g
zubereitung:
1. Hähnchen in der Brühe 15 Minuten gar ziehen lassen und würfeln.
2. Suppengemüse und Nudeln dazu und 8 Minuten garen.
3. Hähnchen zurück in die Suppe, mit Petersilie servieren.

## Kichererbsensuppe mit Kreuzkümmel
en: Chickpea soup with cumin
es: Sopa de garbanzos con comino
emoji: 🍲
typ: gericht
portionen: 4
tags: suppe, vegan, protein
zutaten:
- Kichererbsen (abgetropft): 500 g
- Zwiebeln: 100 g
- Karotten: 150 g
- Gehackte Tomaten (Dose): 400 g
- Kreuzkümmel: 4 g
- Gemüsebrühe (zubereitet): 800 g
- Zitrone: 30 g
- Olivenöl: 10 g
zubereitung:
1. Zwiebel und Karotten anschwitzen, Kreuzkümmel dazu.
2. Kichererbsen, Tomaten und Brühe dazu und 20 Minuten köcheln.
3. Teilweise pürieren und mit Zitrone abschmecken.

## Weiße-Bohnen-Suppe mit Speck
en: White bean soup with bacon
es: Sopa de alubias blancas con bacon
emoji: 🍲
typ: gericht
portionen: 4
tags: suppe, deutschland
zutaten:
- Weiße Bohnen (Dose): 800 g
- Bacon: 80 g
- Kartoffeln (festkochend): 300 g
- Suppengemüse: 300 g
- Gemüsebrühe (zubereitet): 1000 g
- Majoran (getrocknet): 2 g
zubereitung:
1. Speck anbraten, Suppengemüse dazu.
2. Bohnen, Kartoffeln, Brühe und Majoran dazu und 20 Minuten köcheln.
3. Abschmecken.

## Gemüsebrühe selbstgemacht
en: Homemade vegetable stock
es: Caldo de verduras casero
emoji: 🥣
typ: gericht
portionen: 6
tags: suppe, vegan, basis
zutaten:
- Suppengemüse: 800 g
- Zwiebeln: 150 g
- Lorbeerblatt: 2 g
- Pfefferkörner: 3 g
- Wasser: 2000 g
zubereitung:
1. Zwiebel halbieren und in einem Topf ohne Fett anrösten.
2. Gemüse, Gewürze und Wasser dazu und 60 Minuten leise köcheln.
3. Abseihen und portionsweise einfrieren.

## Hollandaise leicht
en: Light hollandaise
es: Salsa holandesa ligera
emoji: 🥚
typ: sauce
beilage: kartoffeln
portionen: 4
tags: soße, klassiker, spargel
zutaten:
- Griechischer Joghurt 0 %: 200 g
- Eigelb: 40 g
- Senf: 5 g
- Zitrone: 20 g
- Butter: 20 g
zubereitung:
1. Eigelb, Joghurt, Senf und Zitronensaft über einem heißen Wasserbad cremig aufschlagen.
2. Butter in Flöckchen einrühren.
3. Abschmecken und sofort servieren.

## Erdnusssoße
en: Peanut sauce
es: Salsa de cacahuete
emoji: 🥜
typ: sauce
beilage: reis
portionen: 4
tags: soße, asiatisch, vegan
zutaten:
- Erdnussbutter: 120 g
- Kokosmilch light (Dose): 200 g
- Sojasoße: 30 g
- Limette: 30 g
- Sambal Oelek: 10 g
- Honig: 10 g
zubereitung:
1. Alle Zutaten in einem Topf erwärmen.
2. Glatt rühren, bis die Soße cremig ist.
3. Zu Reis, Nudeln oder Gemüse servieren.

## Pesto Genovese
en: Pesto genovese
es: Pesto genovés
emoji: 🌿
typ: sauce
beilage: nudeln
portionen: 6
tags: soße, italien, vegetarisch
zutaten:
- Basilikum (frisch): 60 g
- Parmesan: 50 g
- Pinienkerne: 30 g
- Knoblauch: 6 g
- Olivenöl: 80 g
zubereitung:
1. Pinienkerne ohne Fett rösten.
2. Mit Basilikum, Knoblauch und Parmesan fein mixen.
3. Öl einlaufen lassen und salzen.

## Pesto Rosso mit getrockneten Tomaten
en: Sun-dried tomato pesto
es: Pesto rojo de tomates secos
emoji: 🍅
typ: sauce
beilage: nudeln
portionen: 6
tags: soße, italien, vegetarisch
zutaten:
- Tomaten (getrocknet, in Öl): 100 g
- Parmesan: 40 g
- Mandeln (ganz): 30 g
- Knoblauch: 6 g
- Olivenöl: 60 g
- Basilikum (frisch): 10 g
zubereitung:
1. Alle Zutaten im Mixer zerkleinern.
2. Mit Öl zu einer cremigen Paste mixen.
3. Mit Nudeln mischen.

## Joghurt-Knoblauch-Soße
en: Yoghurt garlic sauce
es: Salsa de yogur y ajo
emoji: 🥛
typ: sauce
beilage: kartoffeln
portionen: 4
tags: soße, dip, vegetarisch
zutaten:
- Griechischer Joghurt 0 %: 300 g
- Knoblauch: 6 g
- Zitrone: 15 g
- Dill (frisch): 5 g
- Olivenöl: 5 g
zubereitung:
1. Knoblauch fein reiben.
2. Mit Joghurt, Zitrone, Dill und Öl verrühren.
3. Salzen und kalt stellen.

## Gorgonzola-Soße leicht
en: Light gorgonzola sauce
es: Salsa de gorgonzola ligera
emoji: 🧀
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, italien, vegetarisch
zutaten:
- Gorgonzola: 80 g
- Cremefine 7 %: 250 g
- Spinat: 150 g
- Walnüsse: 20 g
zubereitung:
1. Cremefine erhitzen und Gorgonzola darin schmelzen.
2. Spinat zusammenfallen lassen.
3. Mit gehackten Walnüssen über Nudeln servieren.

## Bärlauch-Rahmsoße
en: Wild garlic cream sauce
es: Salsa de ajo de oso a la crema
emoji: 🌿
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, frühling, vegetarisch
zutaten:
- Bärlauch: 60 g
- Cremefine 7 %: 250 g
- Gemüsebrühe (zubereitet): 100 g
- Parmesan: 30 g
zubereitung:
1. Bärlauch fein hacken.
2. Cremefine mit Brühe aufkochen und Parmesan einrühren.
3. Bärlauch unterrühren und pürieren.

## Brokkoli-Käse-Soße
en: Broccoli cheese sauce
es: Salsa de brócoli y queso
emoji: 🥦
typ: sauce
beilage: nudeln
portionen: 4
tags: soße, vegetarisch, mealprep
zutaten:
- Brokkoli: 500 g
- Schmelzkäse light: 150 g
- Milch (1,5 %): 200 g
- Knoblauch: 6 g
zubereitung:
1. Brokkoli in kleine Röschen schneiden und 5 Minuten kochen.
2. Milch erhitzen und Schmelzkäse darin schmelzen.
3. Brokkoli dazu und grob pürieren – das ist die „Nudeln mit Brokkolisauce“.

## Hackfleisch-Gemüse-Soße für Kinder
en: Hidden-veggie mince sauce
es: Salsa de carne picada con verduras escondidas
emoji: 🍝
typ: sauce
beilage: nudeln
portionen: 6
tags: soße, hack, mealprep, familie
zutaten:
- Rinderhack: 500 g
- Karotten: 200 g
- Zucchini: 200 g
- Paprika: 150 g
- Zwiebeln: 100 g
- Passierte Tomaten: 700 g
- Rapsöl: 10 g
zubereitung:
1. Gemüse sehr fein reiben.
2. Hack krümelig braten, Gemüse dazu und 5 Minuten mitbraten.
3. Tomaten dazu und 20 Minuten köcheln, nach Wunsch pürieren.

## Salsa Verde
en: Salsa verde
es: Salsa verde
emoji: 🌿
typ: sauce
beilage: kartoffeln
portionen: 6
tags: soße, italien, vegan
zutaten:
- Petersilie (frisch): 50 g
- Basilikum (frisch): 15 g
- Kapern: 20 g
- Knoblauch: 5 g
- Zitrone: 20 g
- Olivenöl: 60 g
- Senf: 5 g
zubereitung:
1. Kräuter, Kapern und Knoblauch fein hacken.
2. Mit Zitrone, Senf und Öl verrühren.
3. Zu Fleisch, Fisch oder Kartoffeln servieren.

## Gemüse-Chips aus dem Ofen
en: Oven-baked vegetable crisps
es: Chips de verduras al horno
emoji: 🥕
typ: gericht
portionen: 2
tags: snack, vegan, leicht
zutaten:
- Süßkartoffel: 200 g
- Rote Bete (gekocht): 150 g
- Karotten: 150 g
- Olivenöl: 10 g
- Paprikapulver (edelsüß): 2 g
zubereitung:
1. Gemüse hauchdünn hobeln und trocken tupfen.
2. Mit Öl, Salz und Paprika mischen.
3. Bei 140 °C 30–40 Minuten knusprig trocknen, zwischendurch wenden.

## Kichererbsen-Snack geröstet
en: Roasted chickpea snack
es: Garbanzos tostados
emoji: 🫘
typ: gericht
portionen: 3
tags: snack, vegan, protein
zutaten:
- Kichererbsen (abgetropft): 400 g
- Olivenöl: 10 g
- Paprikapulver (edelsüß): 3 g
- Kreuzkümmel: 2 g
zubereitung:
1. Kichererbsen sehr gut trocken tupfen.
2. Mit Öl und Gewürzen mischen.
3. Bei 200 °C 30 Minuten knusprig rösten.

## Hummus selbstgemacht
en: Homemade hummus
es: Hummus casero
emoji: 🫘
typ: gericht
portionen: 6
tags: dip, vegan, nahost
zutaten:
- Kichererbsen (abgetropft): 400 g
- Tahin: 60 g
- Zitrone: 40 g
- Knoblauch: 5 g
- Olivenöl: 15 g
- Kreuzkümmel: 2 g
- Wasser: 60 g
zubereitung:
1. Alle Zutaten in den Mixer geben.
2. So lange pürieren, bis der Hummus ganz cremig ist.
3. Mit etwas Öl und Paprika servieren.

## Guacamole
en: Guacamole
es: Guacamole
emoji: 🥑
typ: gericht
portionen: 4
tags: dip, mexiko, vegan
zutaten:
- Avocado: 400 g
- Limette: 40 g
- Tomaten: 100 g
- Zwiebeln: 40 g
- Koriander (frisch): 10 g
- Chilipulver: 1 g
zubereitung:
1. Avocados mit der Gabel zerdrücken.
2. Mit Limettensaft, fein gewürfelter Tomate, Zwiebel, Koriander und Chili mischen.
3. Salzen und gleich servieren.

## Tzatziki selbstgemacht
en: Homemade tzatziki
es: Tzatziki casero
emoji: 🥒
typ: gericht
portionen: 6
tags: dip, griechenland, vegetarisch
zutaten:
- Griechischer Joghurt 0 %: 500 g
- Gurke: 250 g
- Knoblauch: 8 g
- Olivenöl: 10 g
- Dill (frisch): 5 g
zubereitung:
1. Gurke reiben, salzen und gut ausdrücken.
2. Mit Joghurt, Knoblauch, Öl und Dill verrühren.
3. 30 Minuten kalt stellen.

## Kräuterquark-Dip mit Gemüsesticks
en: Herb quark dip with veggie sticks
es: Dip de requesón con hierbas y verduras
emoji: 🥕
typ: gericht
portionen: 3
tags: dip, snack, protein
zutaten:
- Magerquark: 250 g
- Schnittlauch: 10 g
- Petersilie (frisch): 10 g
- Karotten: 200 g
- Gurke: 200 g
- Paprika: 150 g
zubereitung:
1. Quark mit Kräutern, Salz, Pfeffer und etwas Wasser glatt rühren.
2. Gemüse in Sticks schneiden.
3. Zusammen servieren.

## Mini-Pizzen aus Toast
en: Toast mini pizzas
es: Mini pizzas de pan de molde
emoji: 🍕
typ: gericht
portionen: 2
tags: snack, schnell, familie
zutaten:
- Toastbrot: 120 g
- Passierte Tomaten: 80 g
- Kochschinken: 60 g
- Mozzarella light: 100 g
- Oregano (getrocknet): 1 g
zubereitung:
1. Toast mit Tomaten bestreichen.
2. Mit Schinken und Mozzarella belegen, Oregano drüber.
3. Bei 220 °C 8 Minuten überbacken.

## Blätterteig-Spinat-Schnecken
en: Spinach puff pastry pinwheels
es: Caracolas de hojaldre con espinacas
emoji: 🌀
typ: gericht
einheit: stück
portionen: 16
tags: snack, backen, vegetarisch
zutaten:
- Blätterteig: 275 g
- Spinat: 200 g
- Feta: 100 g
- Frischkäse (mager / 0,2 %): 100 g
- Knoblauch: 4 g
zubereitung:
1. Spinat zusammenfallen lassen, ausdrücken und mit Feta, Frischkäse und Knoblauch mischen.
2. Auf den Blätterteig streichen, aufrollen und in 16 Scheiben schneiden.
3. Bei 200 °C 18 Minuten backen.

## Laugen-Brezel selbstgemacht
en: Homemade lye pretzels
es: Pretzels caseros
emoji: 🥨
typ: gericht
einheit: stück
portionen: 8
tags: bayern, backen, snack
zutaten:
- Mehl: 500 g
- Trockenhefe: 7 g
- Butter: 20 g
- Natron: 40 g
- Salz: 10 g
zubereitung:
1. Mehl, Hefe, Butter, Salz und 300 ml lauwarmes Wasser kneten und 1 Stunde gehen lassen.
2. 8 Stränge rollen und zu Brezeln schlingen.
3. In kochendes Natronwasser (1 l Wasser mit Natron) 30 Sekunden tauchen, mit grobem Salz bestreuen und bei 210 °C 15 Minuten backen.

## Dinkel-Vollkornbrot ohne Kneten
en: No-knead spelt wholegrain bread
es: Pan integral de espelta sin amasar
emoji: 🍞
typ: gericht
einheit: stück
portionen: 20
tags: brot, backen, vegan
zutaten:
- Dinkelmehl: 500 g
- Haferflocken: 50 g
- Sonnenblumenkerne: 50 g
- Trockenhefe: 7 g
- Essig (Weißwein): 15 g
zubereitung:
1. Alle Zutaten mit 450 ml lauwarmem Wasser und 2 TL Salz verrühren.
2. In eine gefettete Kastenform füllen.
3. In den kalten Ofen stellen und bei 200 °C 60 Minuten backen. Ergibt etwa 20 Scheiben.

## Protein-Brötchen
en: Protein rolls
es: Panecillos proteicos
emoji: 🥯
typ: gericht
einheit: stück
portionen: 8
tags: brot, protein, fitness, backen
zutaten:
- Magerquark: 250 g
- Eier: 100 g
- Dinkelmehl: 150 g
- Haferflocken (zart): 50 g
- Backpulver: 10 g
- Sonnenblumenkerne: 20 g
zubereitung:
1. Alle Zutaten zu einem klebrigen Teig verrühren.
2. Mit nassen Händen 8 Brötchen formen und aufs Blech setzen.
3. Bei 190 °C 25 Minuten backen.

## Herbstlicher Ofenkürbis mit Feta
en: Autumn roast pumpkin with feta
es: Calabaza asada otoñal con feta
emoji: 🎃
typ: gericht
portionen: 3
tags: herbst, vegetarisch, ofen
zutaten:
- Kürbis (Hokkaido): 900 g
- Feta: 150 g
- Rote Zwiebel: 100 g
- Olivenöl: 15 g
- Rosmarin (getrocknet): 2 g
- Honig: 10 g
- Kürbiskerne: 20 g
zubereitung:
1. Kürbis in Spalten schneiden, mit Zwiebel, Öl, Rosmarin und Honig mischen.
2. Bei 200 °C 30 Minuten backen.
3. Mit Feta und Kürbiskernen bestreuen.
`;
