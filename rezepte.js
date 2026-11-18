// Nuvio – Rezepte-Bibliothek. Diese Datei kannst du direkt bearbeiten (Anleitung steht direkt darunter).
window.NUVIO_REZEPTE = String.raw`
# ============================================================================
#  Nuvio – Rezept-Bibliothek
# ============================================================================
#  Jedes Rezept beginnt mit "## Name". Darunter folgen Felder "feld: wert".
#
#    en / es     Name auf Englisch / Spanisch (optional)
#    emoji       ein Emoji
#    bild        Illustration: paella, tortilla, soup_red, soup_orange, soup_clear,
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
4. Mit den Röstzwiebeln servieren. Hält 3 Tage im Kühlschrank.

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
4. Schmeckt auch kalt – ideal zum Mitnehmen.

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
3. Mindestens 2 Stunden kalt stellen. Hält 3 Tage im Kühlschrank.

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
4. Lässt sich gut einfrieren.

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
3. Tomaten dazu und 20 Minuten sanft schmoren. Passt auch mit Spiegelei.

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
3. Mit Kreuzkümmel, Chili und Salz würzen und 30 Minuten köcheln. Friert sich super ein.

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
4. Bei 180 °C etwa 40 Minuten backen. In Stücken einfrieren.

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
3. Nudeln in der Suppe garen. Nudeln getrennt einfrieren, damit sie nicht matschig werden.

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
3. Über Nacht in den Kühlschrank stellen. Hält 3 Tage.

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
3. Lassen sich einfrieren und im Toaster aufwärmen.

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
3. In einer Kastenform bei 175 °C etwa 50 Minuten backen. In 12 Scheiben schneiden.

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
3. Tomaten dazugeben und 10 Minuten einköcheln. Passt auch in Wraps.

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
3. Fleisch klein schneiden und zurückgeben. Am nächsten Tag schmeckt sie noch besser.

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
3. Mit Tzatziki und Reis servieren. Tzatziki getrennt aufbewahren.

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
3. Alles auf dem Reis anrichten. Frisch essen, nicht einfrieren.

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
3. Mit Öl, Zitrone, Minze, Salz und Pfeffer abschmecken. Hält 3 Tage.

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
`;
