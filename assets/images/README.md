# Bilddateien

Alle Bilder für die interaktive Präsentation sind vorhanden.

## Hauptansichten (Hero / Stage-Hintergrund)

| Datei | Herkunft |
|---|---|
| `exterior-front.jpg` | Zugeschnitten aus dem Original-Poster (`assets/source/poster.jpg`) |
| `exterior-rear.jpg` | Zugeschnitten aus dem Original-Poster |
| `interior-main.jpg` | Zugeschnitten aus dem Original-Poster |

Diese drei Bilder zeigen die Front-, Heck- und Interior-Renderings aus deinem Dream-Build-Poster —
sie sind die einzige verfügbare Darstellung, wie das fertige Fahrzeug (Basis-E71 + geplante Teile)
aussehen soll. Auflösung ist entsprechend begrenzt (die Renderings im Poster sind relativ klein),
für die Web-Darstellung aber ausreichend scharf.

## Referenzbilder pro Hotspot

| Datei | Bauteil |
|---|---|
| `ref-wrap-blue.jpg` / `ref-wrap-blue-alt.jpg` | Folierung — Farbreferenz Blau (2 Bilder, als Galerie im Modal) |
| `ref-headlights.jpg` | Headlights |
| `ref-taillights.jpg` | Taillights |
| `ref-front-lip.jpg` | Front Lip |
| `ref-rear-lip.jpg` | Rear Lip |
| `ref-acc-sensor.jpg` | ACC Sensor |
| `ref-seats.jpg` | Sitze / Braunes Leder Interior |
| `ref-steering-wheel.jpg` | Lenkrad |
| `ref-digital-cluster.jpg` | Digital Cluster |
| `ref-dual-multimedia.jpg` | Dual Multimedia Display |
| `ref-digital-ac-panel.jpg` | Digital AC Panel |
| `ref-head-up-display.jpg` | Head-Up Display |
| `ref-starlight-headliner.jpg` | Sternenhimmel |
| `ref-key.jpg` | Display Key (eigene Karte im "My Build"-Bereich, kein Fahrzeug-Hotspot) |

## Neue/andere Bilder ergänzen

Dateiname beibehalten und einfach überschreiben — die Seite lädt sie automatisch, kein Code muss
angepasst werden. Fehlt eine Datei, zeigt die Seite automatisch einen dezenten Platzhalter.

## Hotspot-Positionen

Liegen zentral in `js/data.js` (Felder `x`/`y`, in Prozent). Sie sind exakt auf die aktuellen
Bilddateien `exterior-front.jpg`, `exterior-rear.jpg` und `interior-main.jpg` abgestimmt — wird eines
dieser drei Bilder durch ein anders zugeschnittenes/perspektiviertes Foto ersetzt, müssen die
Positionen in `data.js` entsprechend nachjustiert werden.
