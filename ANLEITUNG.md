# Kühlfach – vom ZIP in den Play Store

Diese Version speichert **alle Daten nur auf dem Gerät**. Die App sendet nichts an dich oder an andere – eine Sicherheitsregel im Code (`connect-src 'none'`) verbietet ihr sogar technisch, Daten zu verschicken. Du hast also keine Daten deiner Nutzer:innen.

**Was im Paket ist**

| Datei | Wofür |
|---|---|
| `index.html` | die App |
| `manifest.webmanifest`, `icons/` | Name, Farben, App-Icons (macht die App installierbar) |
| `sw.js` | sorgt dafür, dass die App offline startet |
| `datenschutz.html` | Datenschutzerklärung (**Platzhalter ausfüllen!**) |
| `.well-known/assetlinks.json` | Vorlage für die Verknüpfung mit der Android-App (Schritt 4) |
| `.nojekyll` | nötig, damit GitHub den Ordner `.well-known` ausliefert |
| `store/` | Play-Store-Icon (512 × 512) und Grafik (1024 × 500) – **nicht** mit hochladen |

---

## Schritt 1 – Datenschutzerklärung ausfüllen
Öffne `datenschutz.html` in einem Texteditor und ersetze alles in `[eckigen Klammern]` (Name, Anschrift, E-Mail). Den gelben Kasten am Ende danach löschen. Im Zweifel kurz prüfen lassen.

## Schritt 2 – Kostenlos online stellen (GitHub Pages)
1. Konto auf **github.com** anlegen (kostenlos).
2. Neues Repository erstellen und es **genau so nennen: `DEINNAME.github.io`** (DEINNAME = dein GitHub-Benutzername). Öffentlich („Public“).
   *Wichtig:* Nur mit diesem Namen liegt die App direkt auf der Hauptadresse – das braucht Android später für die Verknüpfung.
3. „Add file → Upload files“: **alle Dateien und Ordner aus dem Paket außer `store/`** hineinziehen (auch `.nojekyll` und `.well-known` – ggf. „versteckte Dateien anzeigen“ aktivieren). „Commit changes“.
4. Unter *Settings → Pages* prüfen, dass „Deploy from a branch“ mit `main` und `/ (root)` eingestellt ist.
5. Nach 1–2 Minuten ist die App erreichbar unter **https://DEINNAME.github.io/**

## Schritt 3 – Auf dem Handy testen
1. Die Adresse in **Chrome** auf dem Android-Handy öffnen.
2. Chrome bietet „App installieren“ an (sonst ⋮ → „App installieren“ / „Zum Startbildschirm hinzufügen“).
3. Testen: Flugmodus an → App öffnen – sie muss trotzdem starten. Daten eintragen, App schließen, wieder öffnen – alles noch da?
4. Im Profil eine **Datensicherung** speichern und wiederherstellen ausprobieren.

## Schritt 4 – Android-App-Paket erstellen (PWABuilder)
1. **www.pwabuilder.com** öffnen, deine Adresse `https://DEINNAME.github.io/` eingeben → „Start“.
2. „Package for stores“ → **Android** → „Generate package“.
3. Einstellungen:
   - **Package ID:** z. B. `io.github.deinname.kuehlfach` (nur Kleinbuchstaben/Punkte, später nicht mehr änderbar)
   - **App name:** Kühlfach · **Version:** 1.0.0 (Version code 1)
   - Signing key: „Create new“ (PWABuilder erstellt einen Schlüssel)
4. Herunterladen. Im ZIP findest du u. a.:
   - die **`.aab`-Datei** (die lädst du bei Google hoch)
   - die **Signing-Key-Datei + Passwörter** → **gut aufheben (z. B. Passwort-Manager)!** Ohne sie kannst du keine Updates des Android-Pakets mehr hochladen.
   - eine **`assetlinks.json`**
5. Diese `assetlinks.json` ersetzt die Vorlage in deinem GitHub-Repository unter `.well-known/assetlinks.json`.
   Prüfen: `https://DEINNAME.github.io/.well-known/assetlinks.json` muss im Browser angezeigt werden.

> Ohne korrekte `assetlinks.json` zeigt die Android-App oben eine Browser-Adresszeile an. Mit ihr sieht sie aus wie eine normale App.

## Schritt 5 – Google Play Console
1. Entwicklerkonto auf **play.google.com/console** anlegen (einmalig 25 US-Dollar, Identitätsprüfung).
2. „App erstellen“: Name *Kühlfach*, Sprache Deutsch, App (nicht Spiel), kostenlos.
3. **App-Signatur:** Google signiert die App zusätzlich selbst. Unter *Test und Veröffentlichung → App-Integrität* findest du einen zweiten **SHA-256-Fingerabdruck**. Diesen **zusätzlich** in deine `assetlinks.json` eintragen (beide Fingerabdrücke in die Liste `sha256_cert_fingerprints`, durch Komma getrennt).
4. **Store-Eintrag:** Kurzbeschreibung, Beschreibung, Icon `store/playstore-icon-512.png`, Grafik `store/feature-graphic-1024x500.png`, mindestens 2 Handy-Screenshots (einfach in der installierten App aufnehmen).
5. **App-Inhalte** (Menü *Richtlinie → App-Inhalte*):
   - **Datenschutzerklärung:** `https://DEINNAME.github.io/datenschutz.html`
   - **Datensicherheit (Data safety):** „Erhebt oder teilt deine App erforderliche Nutzerdaten?“ → **Nein**. (Google zählt nur Daten als „erhoben“, die das Gerät verlassen – das passiert bei Kühlfach nicht.)
   - **Gesundheits-Apps (Health apps declaration):** passende Kategorien wählen, z. B. *Ernährung und Gewichtsmanagement* sowie *Aktivität und Fitness*.
   - **Zielgruppe:** 18 Jahre und älter.
   - **Einstufung des Inhalts:** Fragebogen ausfüllen (keine Gewalt, keine Nutzerinteraktion usw.).
   - **Werbung:** Nein.
6. **Kategorie:** Gesundheit & Fitness.

## Schritt 6 – Geschlossener Test (Pflicht für neue private Konten)
Neue private Entwicklerkonten müssen zuerst einen **geschlossenen Test mit mindestens 12 Tester:innen über 14 Tage am Stück** machen.
1. *Testen → Geschlossener Test → Track erstellen*, die `.aab` hochladen.
2. Tester:innen per E-Mail-Liste oder Google-Gruppe hinzufügen und ihnen den Opt-in-Link schicken.
3. Wichtig: Sie sollen die App wirklich **benutzen**, nicht nur installieren. Den Test nicht pausieren.
4. Nach 14 Tagen in der Play Console „**Produktionszugriff beantragen**“ und die Fragen zum Test beantworten. Danach Review (meist wenige Tage).

## Updates später
- **Normale Änderungen an der App** (neue Funktionen, Texte, Rezepte): neue `index.html` auf GitHub hochladen und in `sw.js` die Zeile `const VERSION = "kuehlfach-v1";` hochzählen (v2, v3 …). Die installierten Apps holen sich das Update automatisch – **kein neuer Play-Store-Upload nötig**.
- **Nur bei Änderungen an Name, Icon oder Package** musst du mit PWABuilder ein neues `.aab` (mit **demselben** Signing Key und höherem Version code) erzeugen und hochladen.

## Gut zu wissen
- Die Daten deiner Nutzer:innen liegen nur auf deren Handys. Wer die App löscht oder das Handy wechselt, verliert sie – außer man hat vorher eine Sicherung gemacht. Darauf weist die App im Profil hin.
- Beim Laden und Aktualisieren der App-Dateien verarbeitet GitHub technisch die IP-Adresse (wie jeder Webserver). Du bekommst davon nichts zu sehen, und die Eingaben in der App werden dabei nie übertragen.
- Die Nährwerte sind Richtwerte – bei Fertigprodukten (z. B. Köttbullar) lieber die Packungsangaben eintragen.
