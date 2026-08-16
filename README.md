# BMW X6 E71 — Dream Build

Interaktive digitale Präsentation des BMW X6 E71 Dream-Build-Projekts. Erstellt aus dem Umbau-Poster,
gedacht als Abstimmungsgrundlage — z. B. mit einer Werkstatt.

## Ansehen

Statische Seite, kein Build-Schritt nötig. Lokal starten:

```bash
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

Oder direkt auf GitHub Pages / jedem statischen Hoster deployen (Root-Verzeichnis enthält `index.html`).

## Struktur

```
index.html            Seitenstruktur (Hero, Exterior, Interior, My Build)
css/style.css          Dark-Automotive-Design, Hotspots, Modal, Lightbox, Responsive
js/data.js              Alle Texte/Hotspot-Positionen/Spec-Liste (Inhalte hier anpassen)
js/main.js              Interaktions-Logik (Hotspots, Modal, View-Switch, Lightbox, Reveal-Animation)
assets/images/           Bilddateien — siehe assets/images/README.md für die exakt benötigten Dateien
```

## Bilder ergänzen

Die Seite läuft bereits vollständig interaktiv mit Platzhaltern. Sobald Bilddateien mit den in
`assets/images/README.md` genannten Dateinamen in `assets/images/` liegen, werden sie automatisch
geladen — kein Code muss angepasst werden.

## Inhalte anpassen

Alle Texte (Titel, Beschreibungen, Spec-Liste) sowie die Hotspot-Positionen (in Prozent, relativ zur
jeweiligen Ansicht) liegen zentral in `js/data.js`.
