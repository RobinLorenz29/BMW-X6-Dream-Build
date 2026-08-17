/**
 * Central data source for the presentation.
 * Every hotspot references an image file under assets/images/.
 * If a file is missing, the UI falls back to an elegant placeholder —
 * drop the correctly named file in and it appears automatically, no code changes needed.
 */

const VEHICLE = {
  name: "BMW X6 E71",
  tagline: "Dream Build Projekt",
};

const SPECS = [
  "BMW X6 30d",
  "Allradantrieb",
  "245 PS",
  "Stage 1 (308 PS)",
  "Sitzheizung",
  "Sitzbelüftung",
  "Lenkradheizung",
  "Massagesitze",
  "Memory Funktion",
  "Braunes Leder Interior",
  "Keyless Entry / Keyless Go",
  "Head-Up Display",
  "Abstandstempomat (ACC)",
  "PDC Vorn / Hinten",
  "360° Kamera",
  "Rückfahrkamera",
  "Schiebedach",
  "Sternenhimmel",
];

/**
 * section: "front" | "rear" | "interior"
 * x / y: position in percent, relative to the view container
 * image: expected filename inside assets/images/
 * gallery: optional list of additional images shown as a thumbnail row in the modal
 */
const HOTSPOTS = [
  // ---------------- EXTERIOR — FRONT ----------------
  {
    id: "wrap",
    section: "front",
    x: 50,
    y: 30,
    title: "FOLIERUNG",
    subtitle: "Blaue Folierung",
    description:
      "Vollfolierung der Karosserie in Blau, gilt für das gesamte Fahrzeug (Front bis Heck). Referenz zeigt den Zielfarbton.",
    image: "ref-wrap-blue.jpg",
    gallery: ["ref-wrap-blue.jpg", "ref-wrap-blue-alt.jpg"],
    galleryLayout: "grid",
    specs: ["Farbe: Blau", "Umfang: Vollfolierung"],
  },
  {
    id: "headlights",
    section: "front",
    x: 45,
    y: 47,
    title: "HEADLIGHTS",
    subtitle: "Geplante Scheinwerfer",
    description:
      "Geplante Scheinwerfer mit Doppel-Ringen (Angel Eyes) und LED-Tagfahrlicht-Kontur, passend zur E71-Frontpartie.",
    image: "ref-headlights.jpg",
  },
  {
    id: "acc-sensor",
    section: "front",
    x: 31,
    y: 48,
    title: "ABSTANDSTEMPOMAT (ACC)",
    subtitle: "ACC Sensor",
    description:
      "Radar-Sensor für den Abstandstempomat (ACC), Einbauposition im Frontbereich hinter der Niere/Stoßstange.",
    image: "ref-acc-sensor.jpg",
  },
  {
    id: "front-lip",
    section: "front",
    x: 33,
    y: 79,
    title: "FRONT LIP",
    subtitle: "Geplante Front Lip",
    description:
      "Geplante Front Lip in Hochglanz-Schwarz/Carbon-Optik für die Front des Fahrzeugs.",
    image: "ref-front-lip.jpg",
  },

  // ---------------- EXTERIOR — REAR ----------------
  {
    id: "taillights",
    section: "rear",
    x: 36,
    y: 47,
    title: "TAILLIGHTS",
    subtitle: "Geplante Rückleuchten",
    description:
      "Geplante Rückleuchten mit durchgehendem LED-Lichtband-Design in Schwarz/Rot.",
    image: "ref-taillights.jpg",
  },
  {
    id: "rear-lip",
    section: "rear",
    x: 20,
    y: 64,
    title: "REAR LIP",
    subtitle: "Geplante Rear Lip",
    description:
      "Geplante Rear Lip / Diffusor-Einsatz für das Heck des Fahrzeugs.",
    image: "ref-rear-lip.jpg",
  },

  // ---------------- INTERIOR ----------------
  {
    id: "seats",
    section: "interior",
    x: 22,
    y: 87,
    title: "BRAUNES LEDER INTERIOR",
    subtitle: "Sitzheizung · Sitzbelüftung · Massagesitze · Memory Funktion",
    description:
      "Braunes Leder Interior mit Raute-Steppung, Sitzheizung, Sitzbelüftung, Massagesitzen und Memory Funktion.",
    image: "ref-seats.jpg",
    specs: ["Sitzheizung", "Sitzbelüftung", "Massagesitze", "Memory Funktion"],
  },
  {
    id: "steering-wheel",
    section: "interior",
    x: 39,
    y: 63,
    title: "LENKRAD",
    subtitle: "Braunes Leder / passend zum Interior",
    description:
      "Lenkrad in braunem Leder mit Forged-Carbon-Applikationen und Schaltwippen, passend zum restlichen Interieur.",
    image: "ref-steering-wheel.jpg",
  },
  {
    id: "digital-cluster",
    section: "interior",
    x: 45,
    y: 53,
    title: "DIGITAL CLUSTER",
    subtitle: "",
    description: "Digitales Kombiinstrument (Digital Cluster) hinter dem Lenkrad.",
    image: "ref-digital-cluster.jpg",
  },
  {
    id: "dual-multimedia",
    section: "interior",
    x: 58,
    y: 53,
    title: "DUAL MULTIMEDIA DISPLAY",
    subtitle: "",
    description: "Dual Multimedia Display im Cockpit, zwei nebeneinander verbaute Breitbild-Screens.",
    image: "ref-dual-multimedia.jpg",
  },
  {
    id: "digital-ac-panel",
    section: "interior",
    x: 58,
    y: 63,
    title: "DIGITAL AC PANEL",
    subtitle: "",
    description: "Digitales Klimabedienteil (Digital AC Panel) mit Sitzheizung/-belüftung-Steuerung.",
    image: "ref-digital-ac-panel.jpg",
  },
  {
    id: "head-up-display",
    section: "interior",
    x: 37,
    y: 38,
    title: "HEAD-UP DISPLAY",
    subtitle: "",
    description: "Head-Up Display, Einblendung relevanter Fahrdaten in der Windschutzscheibe.",
    image: "ref-head-up-display.jpg",
  },
  {
    id: "starlight-headliner",
    section: "interior",
    x: 65,
    y: 8,
    title: "STERNENHIMMEL",
    subtitle: "",
    description: "Starlight Headliner / Sternenhimmel im Dachhimmel, per Faseroptik beleuchtet.",
    image: "ref-starlight-headliner.jpg",
  },
];

const KEY_INFO = {
  title: "DISPLAY KEY",
  subtitle: "BMW Display Key",
  description: "BMW Display Key mit Touch-Statusanzeige (Verriegelung, Batteriestatus, Fahrzeugstatus).",
  image: "ref-key.jpg",
};
