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
  "Massagesitze",
  "Memory Funktion",
  "Braunes Leder Interior",
  "Keyless Entry / Keyless Go",
  "Head-Up Display",
  "Abstandstempomat (ACC)",
  "PDC Vorn / Hinten",
  "360° Kamera",
  "Rückfahrkamera",
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
    x: 38,
    y: 40,
    title: "FOLIERUNG",
    subtitle: "Farbe: Blau",
    description:
      "Vollfolierung der Karosserie in Blau, gilt für das gesamte Fahrzeug (Front bis Heck). Referenz zeigt den Zielfarbton.",
    image: "ref-wrap-blue.jpg",
    gallery: ["ref-wrap-blue.jpg", "ref-wrap-blue-alt.jpg"],
    specs: ["Farbe: Blau", "Umfang: Vollfolierung"],
  },
  {
    id: "headlights",
    section: "front",
    x: 27,
    y: 46,
    title: "HEADLIGHTS",
    subtitle: "Geplante Scheinwerfer",
    description:
      "Geplante Scheinwerfer mit Doppel-Ringen (Angel Eyes) und LED-Tagfahrlicht-Kontur, passend zur E71-Frontpartie.",
    image: "ref-headlights.jpg",
  },
  {
    id: "acc-sensor",
    section: "front",
    x: 18,
    y: 53,
    title: "ABSTANDSTEMPOMAT (ACC)",
    subtitle: "ACC Sensor",
    description:
      "Radar-Sensor für den Abstandstempomat (ACC), Einbauposition im Frontbereich hinter der Niere/Stoßstange.",
    image: "ref-acc-sensor.jpg",
  },
  {
    id: "front-lip",
    section: "front",
    x: 20,
    y: 80,
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
    x: 55,
    y: 42,
    title: "TAILLIGHTS",
    subtitle: "Geplante Rückleuchten",
    description:
      "Geplante Rückleuchten mit durchgehendem LED-Lichtband-Design in Schwarz/Rot.",
    image: "ref-taillights.jpg",
  },
  {
    id: "rear-lip",
    section: "rear",
    x: 45,
    y: 88,
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
    y: 83,
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
    x: 27,
    y: 33,
    title: "LENKRAD",
    subtitle: "Braunes Leder / passend zum Interior",
    description:
      "Lenkrad in braunem Leder mit Forged-Carbon-Applikationen und Schaltwippen, passend zum restlichen Interieur.",
    image: "ref-steering-wheel.jpg",
  },
  {
    id: "digital-cluster",
    section: "interior",
    x: 18,
    y: 26,
    title: "DIGITAL CLUSTER",
    subtitle: "",
    description: "Digitales Kombiinstrument (Digital Cluster) hinter dem Lenkrad.",
    image: "ref-digital-cluster.jpg",
  },
  {
    id: "dual-multimedia",
    section: "interior",
    x: 52,
    y: 25,
    title: "DUAL MULTIMEDIA DISPLAY",
    subtitle: "",
    description: "Dual Multimedia Display im Cockpit, zwei nebeneinander verbaute Breitbild-Screens.",
    image: "ref-dual-multimedia.jpg",
  },
  {
    id: "digital-ac-panel",
    section: "interior",
    x: 52,
    y: 48,
    title: "DIGITAL AC PANEL",
    subtitle: "",
    description: "Digitales Klimabedienteil (Digital AC Panel) mit Sitzheizung/-belüftung-Steuerung.",
    image: "ref-digital-ac-panel.jpg",
  },
  {
    id: "head-up-display",
    section: "interior",
    x: 26,
    y: 13,
    title: "HEAD-UP DISPLAY",
    subtitle: "",
    description: "Head-Up Display, Einblendung relevanter Fahrdaten in der Windschutzscheibe.",
    image: "ref-head-up-display.jpg",
  },
  {
    id: "starlight-headliner",
    section: "interior",
    x: 64,
    y: 6,
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
